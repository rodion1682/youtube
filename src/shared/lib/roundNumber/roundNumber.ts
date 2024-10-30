export function roundNumber(number: string): string | null {
	const num = parseFloat(number);

	if (isNaN(num) || num < 1) {
		return null;
	}

	if (num === 0) {
		return '0';
	}

	if (num >= 1 && num <= 999) {
		return `${num}`;
	} else if (num >= 1000 && num < 1_000_000) {
		return `${(num / 1000).toFixed(1)} k`;
	} else {
		return `${(num / 1_000_000).toFixed(1)} M`;
	}
}
