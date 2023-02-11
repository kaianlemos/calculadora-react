import React from "react";
import './Button.css';

export default (props) => {
    return <button onClick={(e) => props.click && props.click(props.label)} className={`
        button 
        ${props.operacao ? 'operacao' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}

    </button>
}