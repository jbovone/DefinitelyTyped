// Type definitions for react-pivottable 0.11
// Project: https://github.com/medipass/react-payment-inputs
// Definitions by: Julián Bovone <https://github.com/jbovone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { TQuerySort, TSorterFn } from './misc';
import TableInput from './input';
import PivotData from './entity';

export default interface PivotTable extends PivotData {
    /**
     * @summary
     * This is required in the docs. The param exposes all the Api.
     * @see function called every time anything changes in the UI,
     * with the new value of the properties needed to render the new state.
     * This function must be hooked into a state-management system in order
     * for the "dumb" PivotTableUI component to work.
     * @link https://github.com/plotly/react-pivottable/blob/master/README.md
     */
    onChange(e: PivotTable): void;

    /**
     * contains attribute names to omit from the UI
     */
    hiddenAttributes?: string[];

    /**
     * contains attribute names to omit from the aggregator arguments dropdowns
     */
    hiddenFromAggregators?: string[];

    /**
     * contains attribute names to omit from the drag'n'drop portion of the UI
     */
    hiddenFromDragDrop?: string[];

    /**
     * If the attributes' names' combined length in characters exceeds this value
     * then the unused attributes area will be shown vertically to the left of
     * the UI instead of horizontally above it. 0 therefore means 'always vertical',
     * and Infinity means 'always horizontal'.
     * @default  85
     */
    unusedOrientationCutoff?: number;

    /**
     * maximum number of values to list in the double-click menu.
     * @default 500
     */
    menuLimit?: number;

    // maybe some generic can be implemented for the last two.
    renderers?: {
        // Im not sure about this one.
        [k: string]: React.FC<PivotData> | JSX.Element;
    };

    /**
     * key to renderers object specifying the renderer to use
     */
    rendererName?: string;
}

export class PivotTableUI extends React.Component<PivotTable> {}

export { TQuerySort, TSorterFn, TableInput };
