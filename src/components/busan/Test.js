import React from 'react';

const Test = (props) => {
    const x = props.y
    const y = props.x
    console.log(x, y)
    return (
        <div
         style={{
            position: 'absolute',
            top: `${x}px`,
            left: `${y}px`
         }}
        >
            {props.name}
        </div>
    );
};

export default Test;