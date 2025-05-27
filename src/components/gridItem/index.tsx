import styles from './gridItem.module.css';

interface GridItemProps {
	text: string;
}

export const GridItem = ({ text }: GridItemProps) => {
	return (
		<div className={styles.item}>
			<span>{text}</span>
		</div>
	);
};
