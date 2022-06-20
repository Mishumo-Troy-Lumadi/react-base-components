import { FC, ReactNode } from 'react';

interface props {
	className?: string;
	children?: ReactNode;
}

const Grid: FC<props> = ({ className, children }) => {
	return (
		<div className={`grid ${className}`}>
			{children}
		</div>
	);
};

export default Grid;
