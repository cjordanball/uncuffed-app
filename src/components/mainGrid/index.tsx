'use client';
import { useContext } from 'react';
import { DataContext } from '../../store/data-context';
import { GridItem } from '../gridItem';
import { contentData } from '../../data/content';
import styles from './mainGrid.module.css';

export const MainGrid = () => {
	const { itHappenedItems, IDidItItems } = useContext(DataContext);
	const pressedArray: string[] = [];

	const printScore = () => {
		console.log('I did these: ', IDidItItems.join(', '));
		console.log('I suffered these: ', itHappenedItems.join(', '));
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.row}>
					<GridItem key='00' text={contentData[0][0]} gridLocation='00' />
					<GridItem key='01' text={contentData[0][1]} gridLocation='01' />
					<GridItem key='02' text={contentData[0][2]} gridLocation='02' />
					<GridItem key='03' text={contentData[0][3]} gridLocation='03' />
					<GridItem key='04' text={contentData[0][4]} gridLocation='04' />
				</div>
				<div className={styles.row}>
					<GridItem key='10' text={contentData[1][0]} gridLocation='10' />
					<GridItem key='11' text={contentData[1][1]} gridLocation='11' />
					<GridItem key='12' text={contentData[1][2]} gridLocation='12' />
					<GridItem key='13' text={contentData[1][3]} gridLocation='13' />
					<GridItem key='14' text={contentData[1][4]} gridLocation='14' />
				</div>
				<div className={styles.row}>
					<GridItem key='20' text={contentData[2][0]} gridLocation='20' />
					<GridItem key='21' text={contentData[2][1]} gridLocation='21' />
					<GridItem key='22' text={contentData[2][2]} gridLocation='22' />
					<GridItem key='23' text={contentData[2][3]} gridLocation='23' />
					<GridItem key='24' text={contentData[2][4]} gridLocation='24' />
				</div>
				<div className={styles.row}>
					<GridItem key='30' text={contentData[3][0]} gridLocation='30' />
					<GridItem key='31' text={contentData[3][1]} gridLocation='31' />
					<GridItem key='32' text={contentData[3][2]} gridLocation='32' />
					<GridItem key='33' text={contentData[3][3]} gridLocation='33' />
					<GridItem key='34' text={contentData[3][4]} gridLocation='34' />
				</div>
				<div className={styles.row}>
					<GridItem key='40' text={contentData[4][0]} gridLocation='40' />
					<GridItem key='41' text={contentData[4][1]} gridLocation='41' />
					<GridItem key='42' text={contentData[4][2]} gridLocation='42' />
					<GridItem key='43' text={contentData[4][3]} gridLocation='43' />
					<GridItem key='44' text={contentData[4][4]} gridLocation='44' />
				</div>
			</div>
			<div>
				<button onClick={() => printScore()}>Check It Out</button>
			</div>
		</>
	);
};
