import { GridRow } from '../gridrow';
import styles from './mainGrid.module.css';

export const MainGrid = () => {
	const contents = [0, 1, 2, 3, 4].map((rowNum: 0 | 1 | 2 | 3 | 4) => (
		<GridRow key={`row-num${rowNum}`} rowNumber={rowNum} />
	));
	return <div className={styles.container}>{contents}</div>;
};
