import { MainPageTypes } from '../../../app/router/routeConfix';

export function videoType(type: string): string {
	let typeValue = '';
	if (type === MainPageTypes.RANDOM) {
		typeValue = '0';
	} else if (type === MainPageTypes.TREND) {
		typeValue = '10';
	} else if (type === MainPageTypes.GAMING) {
		typeValue = '20';
	}
	return typeValue;
}
