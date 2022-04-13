import React from 'react';

interface ButtonProps {
    disabled: boolean
    onClick: () => void
    title: string
}

export const Button = ({disabled,onClick,title}: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick}>{title}</button>
    );
};
