import React from 'react'

const ColumnLayout = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}
export default ColumnLayout;