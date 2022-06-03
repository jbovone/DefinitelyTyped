import TableInput from './input';
import { TQuerySort, TSorterFn } from './misc';

export default interface PivotData {
    data: TableInput;

    /**
     * attribute names to prepopulate in row area
     */
    rows?: string[];

    /**
     * attribute names to prepopulate in cols area
     */
    cols?: string[];

    /**
     * key to aggregators object specifying the aggregator to use for computations
     */
    agregatorName?: string;

    /**
     * @link https://github.com/nicolaskruchten/pivottable/wiki/Aggregators
     */
    aggregators?: {
        [K: string]: (
            data: PivotData['data'],
            rowKey: string,
            colKey: string,
        ) => {
            push?(record: object): void;
            value?: () => string;
            format?: (x: string) => string;
            /**
             * @default 0
             */
            numInputs?: number;
            [K: string]: any;
        };
    };

    /**
     * attribute names used as arguments to aggregator (gets passed to aggregator generating function)
     */
    vals?: string[];

    /**
     * object whose keys are attribute names and values are objects of attribute
     * value-boolean pairs which denote records to include or exclude from computation
     * and rendering; used to prepopulate the filter menus that appear on double-click
     */
    valueFilter?: {
        [k: string]: { [k: string]: boolean };
    };

    /**
     * accessed or called with an attribute name and can return a function
     * which can be used as an argument to array.sort for output purposes.
     * If no function is returned, the default sorting mechanism is a built-in
     * "natural sort" implementation. Useful for sorting attributes like month names.
     * @link http://nicolas.kruchten.com/pivottable/examples/mps_agg.html
     * @link http://nicolas.kruchten.com/pivottable/examples/montreal_2014.html
     */
    sorters?: TSorterFn | { [k: string]: TSorterFn };

    /**
     * the order in which row data is provided to the renderer
     */
    rowOrder?: TQuerySort;

    /**
     * the order in which column data is provided to the renderer
     */
    colOrder?: TQuerySort;

    /**
     * @Link original PivotTable.js documentation)
     */
    derivedAttributes?: { [k: string]: (p: string) => string };
}
