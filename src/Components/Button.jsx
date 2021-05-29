import React from 'react';
import classNames from 'classnames';


const Button = ({id, activeSizeIndex, onClick, className, outline, children})=>{
    return (<button disabled={(+id===5||+id===9)&& activeSizeIndex===0} onClick={onClick} className={classNames('button', className, {
        'button--outline': outline,

        })}> 
        {children} 
        </button>)
}


export default Button;