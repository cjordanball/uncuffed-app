'use client';
import { useState, useContext } from 'react';
import Image from 'next/image';
import up from '../../../public/images/up.svg';
import down from '../../../public/images/down.svg';
import { DataContext } from '../../store/data-context';
import styles from './gridItem.module.css';
import { IncrementalCachedAppPageValue } from 'next/dist/server/response-cache';

interface GridItemProps {
	text: string;
	gridLocation: string;
	key: string;
}

export const GridItem = ({ text, gridLocation }: GridItemProps) => {
	const {
		itHappenedItems,
		toggleHappenedOn,
		toggleHappenedOff,
		IDidItItems,
		toggleDidItOn,
		toggleDidItOff,
	} = useContext(DataContext);

	const handleClick = (e: 'did' | 'suffered') => {
		if (e === 'suffered') {
			if (itHappenedItems.includes(gridLocation)) {
				toggleHappenedOff(gridLocation);
			} else {
				toggleHappenedOn(gridLocation);
			}
		} else if ((e = 'did')) {
			if (IDidItItems.includes(gridLocation)) {
				toggleDidItOff(gridLocation);
			} else {
				toggleDidItOn(gridLocation);
			}
		}
	};

	const getColor = () => {
		const happ = itHappenedItems.includes(gridLocation);
		const did = IDidItItems.includes(gridLocation);
		if (happ && did) return 'itemBoth';
		if (happ) return 'itemHappened';
		if (did) return 'itemDid';
		return null;
	};

	return (
		<div className={`${styles.container} ${styles[getColor()]}`}>
			<div className={styles.header}>
				<Image
					priority
					src={up}
					alt='Yep, happened to me.'
					title='Yep, happened to me.'
					onClick={() => handleClick('suffered')}
				/>
				<Image
					priority
					src={down}
					alt='I did it.'
					title='I did it.'
					onClick={() => handleClick('did')}
				/>
			</div>
			<div className={styles.item}>
				<div>{text}</div>
			</div>
			<div className={styles.footer}></div>
		</div>
	);
};
