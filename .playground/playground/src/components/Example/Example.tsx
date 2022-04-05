import React, { FunctionComponent } from 'react';
import { ExampleProps } from './Example.types';

const Example: FunctionComponent<ExampleProps> = (props) => {
    return (
        <div>{props.text}</div>
    )
}

Example.defaultProps = {
    text: 'abc'
}

export default Example;
