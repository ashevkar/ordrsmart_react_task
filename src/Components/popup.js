import React from 'react';

const Popup = ({ message, position, onEditRequest }) => {
    const style = {
        position: 'absolute',
        top: position.top,
        left: position.left,
        border: '1px solid black',
        backgroundColor: 'white',
        padding: '10px',
        zIndex: 1000,
    };

    const clickableStyle = {
        cursor: 'pointer',
    };

    return (
        <div style={style}>
            {message}
            <div onClick={onEditRequest} style={clickableStyle}>
                <i className="bi bi-pencil" style={{ marginRight: '5px' }}></i>
                <span>Edit Request</span>
            </div>
            <div>
                <i className="bi bi-card-text" style={{ marginRight: '5px' }}></i>
                <span>Notes</span>
            </div>
        </div>
    );
};

export default Popup;