const moment = require('moment');

module.exports = (filter) => {
	let searchParams = {};

	switch (filter) {
	case 'all-time':
		searchParams = {};
		break;
	case 'last-week':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'week').toDate()
			}
		};
		break;
	case 'last-month':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'month').toDate()
			}
		};
		break;
	case 'last-year':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'year').toDate()
			}
		};
		break;
	default:
		return false;
	}
	return searchParams;
};
