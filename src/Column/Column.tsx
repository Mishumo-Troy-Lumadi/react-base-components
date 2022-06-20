import { FC, ReactNode } from 'react';

interface props {
	className?: string;
	onClick?: (e: any) => void;
	children?: ReactNode;
}

const Column: FC<props> = ({ className, onClick, children }) => {
	return (
		<div className={`flex flex-col ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default Column;
