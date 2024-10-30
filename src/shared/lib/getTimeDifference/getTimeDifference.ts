const msInMinute = 60 * 1000;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;
const msInWeek = 7 * msInDay;
const msInMonth = 30 * msInDay;
const msInYear = 365 * msInDay;

export function getTimeDifference(dateString: string): string {
	const dateNow = new Date();
	const dateObject = new Date(dateString);
	const timeDifference = dateNow.getTime() - dateObject.getTime();

	// Check for days (1 to 6 days)
	const daysDifference = Math.floor(timeDifference / msInDay);
	if (daysDifference > 0 && daysDifference <= 6) {
		return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
	}

	// Check for weeks (1 to 3 weeks)
	const weeksDifference = Math.floor(timeDifference / msInWeek);
	if (weeksDifference > 0 && weeksDifference <= 3) {
		return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''}  ago`;
	}

	// Check for months (1 to 11 months)
	const monthsDifference = Math.floor(timeDifference / msInMonth);
	if (monthsDifference > 0 && monthsDifference < 12) {
		return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
	}

	// Check for years (12+ months)
	const yearsDifference = Math.floor(timeDifference / msInYear);
	if (yearsDifference >= 1) {
		return `${yearsDifference} year${yearsDifference > 1 ? 's ' : ''}  ago`;
	}

	// In case of very recent date (less than a day)
	return 'Today';
}
