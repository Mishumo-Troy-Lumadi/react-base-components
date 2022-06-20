import { FC, ReactNode } from 'react';

interface props$2 {
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Column: FC<props$2>;

interface props$1 {
    className?: string;
    children?: ReactNode;
}
declare const Grid: FC<props$1>;

interface props {
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Row: FC<props>;

export { Column, Grid, Row };
