import { createContext, useReducer } from 'react';

export const DataContext = createContext({
	itHappenedItems: [],
	IDidItItems: [],
	toggleHappenedOn: (input) => {},
	toggleHappenedOff: (input) => {},
	toggleDidItOn: (input) => {},
	toggleDidItOff: (input) => {},
});

const dataReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_HAPPENED_ON':
			const updatedArray = [...state.itHappenedItems, action.payload];
			return {
				...state,
				itHappenedItems: updatedArray,
			};
			break;
		case 'TOGGLE_HAPPENED_OFF':
			for (let i = 0; i < state.itHappenedItems.length; i++) {
				if (state.itHappenedItems[i] === action.payload) {
					state.itHappenedItems.splice(i, 1);
					break;
				}
			}
			const prunedArray = [...state.itHappenedItems];
			return {
				...state,
				itHappenedItems: prunedArray,
			};
			break;
		case 'TOGGLE_DID_ON':
			const updatedDidArray = [...state.IDidItItems, action.payload];
			return {
				...state,
				IDidItItems: updatedDidArray,
			};
			break;
		case 'TOGGLE_DID_OFF':
			for (let i = 0; i < state.IDidItItems.length; i++) {
				if (state.IDidItItems[i] === action.payload) {
					state.IDidItItems.splice(i, 1);
					break;
				}
			}
			const prunedDidArray = [...state.IDidItItems];
			return {
				...state,
				IDidItItems: prunedDidArray,
			};
			break;
		default:
			return;
	}
};

export const DataContextProvider = ({ children }) => {
	const [dataState, dataDispatch] = useReducer(dataReducer, {
		itHappenedItems: [],
		IDidItItems: [],
	});

	function addHappenedItem(input) {
		dataDispatch({
			type: 'TOGGLE_HAPPENED_ON',
			payload: input,
		});
	}

	function addDidItItem(input) {
		dataDispatch({
			type: 'TOGGLE_DID_ON',
			payload: input,
		});
	}

	function removeHappenedItem(input) {
		dataDispatch({
			type: 'TOGGLE_HAPPENED_OFF',
			payload: input,
		});
	}

	function removeDidItItem(input) {
		dataDispatch({
			type: 'TOGGLE_DID_OFF',
			payload: input,
		});
	}

	const dataValue = {
		itHappenedItems: dataState.itHappenedItems.sort(),
		IDidItItems: dataState.IDidItItems.sort(),
		toggleHappenedOn: addHappenedItem,
		toggleHappenedOff: removeHappenedItem,
		toggleDidItOn: addDidItItem,
		toggleDidItOff: removeDidItItem,
	};

	return (
		<DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
	);
};
