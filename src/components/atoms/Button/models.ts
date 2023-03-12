import { ReactNode } from 'react';
export interface IButtonProps {
    outline?: boolean;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    justify?: 'center' | 'flex-start' | 'flex-end'
    fullWidth?: boolean
    sm?: boolean
    md?: boolean
    lg?: boolean
    className?: string;
    onClick?: () => void;
}
