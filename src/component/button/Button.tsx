import React from 'react';
import Button from '@mui/material/Button';



interface ButtonProps {
    disabled: boolean
    onClick: () => void
    title: string
}

export const ButtonFr = ({disabled,onClick,title}: ButtonProps) => {
    return (
        <Button style={{color: 'white', border: '1px solid white'}} variant={"outlined"} disabled={disabled} onClick={onClick}>{title}</Button>
    );
};
