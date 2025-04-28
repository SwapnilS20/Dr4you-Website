import React from 'react';

const Button = ({ styles, children, ...action }) => {
    return (
        <button className={`font-general-sans font-semibold text-white rounded-[14px] ${styles}`} {...action}>
            {children}
        </button>
    );
};

export default Button; 
