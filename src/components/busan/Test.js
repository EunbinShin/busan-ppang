import React from 'react';

const Test = (props) => {
    const x = props.y
    const y = props.x
    return (
        <div
         style={{
            position: 'absolute',
            top: `${x}px`,
            left: `${y}px`,
            backgroundColor: 'white'
         }}
         onMouseEnter={props.mousehandler}
        >
            {props.name}
        </div>
    );
};

export default Test;