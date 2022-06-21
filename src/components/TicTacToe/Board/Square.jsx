import React from "react";

const Square = ({ 
    keyValue,
    winner,
    handleClick
}) => {
    if (!keyValue.value && !winner) {
        return (
            <button 
                className="square"
                data-testid={`BLANK-SQUARE-${keyValue.key}`}
                onClick={
                    () => handleClick(keyValue)
                }
            >
            </button>
        );
    }
    // The value cannot be changed once selected. 
    return (
        <button 
        className="square"
        data-testid={`FILLED-SQUARE-${keyValue.key}`}
        >
        {keyValue.value !== null ? keyValue.value : ""}
        </button>
    );
}
export default Square;