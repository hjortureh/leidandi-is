import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '', href }) => {
    const commonClasses = `btn btn-${variant} ${className}`;

    if (href) {
        return (
            <a href={href} className={commonClasses} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button
            className={commonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
