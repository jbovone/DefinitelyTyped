import * as React from 'react';
import { TableInput, PivotTableUI } from 'react-pivottable';
import IPivotData from 'react-pivottable/entity';

const data: TableInput = [
    ['attribute', 'attribute2'],
    ['value1', 'value2'],
];
const data2: TableInput = callback => {
    callback({
        attr1: 'value1_attr1',
        attr2: 'value1_attr2',
        // ...
    });
    callback({
        attr1: 'value2_attr1',
        attr2: 'value2_attr2',
        // ...
    });
    // ...
};
const data3: TableInput = [
    {
        attr1: 'value1_attr1',
        attr2: 'value1_attr2',
        // ...
    },
    {
        attr1: 'value2_attr1',
        attr2: 'value2_attr2',
        // ...
    },
    // ...
];

const SomeRenderer: React.FC<IPivotData> = () => <></>;
const CompWithRender = <SomeRenderer data={data} />;
class MyApp extends React.Component {
    render() {
        return (
            <>
                <PivotTableUI data={data} onChange={e => console.log(e)} />
                <PivotTableUI data={data2} onChange={e => console.log(e)} />;
                <PivotTableUI data={data3} onChange={e => console.log(e)} />;
                <PivotTableUI
                    data={data}
                    onChange={e => console.log(e)}
                    renderers={{ render01: CompWithRender }}
                    rendererName={'render01'}
                />
            </>
        );
    }
}

export default MyApp;
