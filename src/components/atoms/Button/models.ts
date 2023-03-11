import { ReactNode } from 'react';
export interface IButtonProps {
    outline?: boolean;
    primary?: boolean;
    link?: boolean;
    danger?: boolean;
    text?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    justify?: 'center' | 'flex-start' | 'flex-end'
    fullWidth?: boolean
    sm?: boolean
    md?: boolean
    lg?: boolean
    className?: string;
    shadow?: boolean;
    children?: ReactNode;
    withIcon?: ReactNode;
    spinner?: {
        loading?: boolean;
        loadingText: string;
        text: string;
    }
    onClick?: () => void;
}
