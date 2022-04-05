import React from 'react';
import PropTypes from 'prop-types';

const Example2 = (props) => {
    return (
        <div>{props.text}</div>
    )
}

Example2.defaultProps = {
    text: 'abc'
}

Example2.propTypes = {
    text: PropTypes.string,
    obj: PropTypes.shape({
        text: PropTypes.arrayOf(PropTypes.number)
    })
}

export default Example2;