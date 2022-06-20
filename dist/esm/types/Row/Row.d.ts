import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Row: FC<props>;
export default Row;
