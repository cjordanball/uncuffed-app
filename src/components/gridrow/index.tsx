import { contentData } from '../../data/content';
import { GridItem } from '../gridItem';

export interface GridRowProps {
	rowNumber: 0 | 1 | 2 | 3 | 4;
}
export const GridRow = ({ rowNumber }: GridRowProps) => {
	return contentData[rowNumber].map((item) => {
		return <GridItem key={`row${item}`} text={item} />;
	});
};
