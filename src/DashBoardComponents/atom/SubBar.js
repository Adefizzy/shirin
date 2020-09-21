import React from 'react';

export const SubBar = (props) => {
    return (
        <div style={{flexBasis: props.flexBasis}}>
            <p>{props.text}</p>
        </div>
    );
};