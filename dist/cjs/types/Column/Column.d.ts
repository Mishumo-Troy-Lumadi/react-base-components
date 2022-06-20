import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Column: FC<props>;
export default Column;
