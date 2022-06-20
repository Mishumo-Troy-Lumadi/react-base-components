import { FC, ReactNode } from 'react';

interface props {
	className?: string;
	onClick?: (e: any) => void;
	children?: ReactNode;
}

const Row: FC<props> = ({ className, onClick, children }) => {
	return (
		<div className={`flex flex-row ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default Row;
