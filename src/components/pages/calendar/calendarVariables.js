const weekdays = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]

const months = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const holiday_list = [
	[1, 11], [11, 23], [20], [29], [3, 4, 5], [], [22, 23], [8, 9], [20, 23], [], [3, 23], [],
]

const today = new Date();
const today_date =
	today.getFullYear()+
	"_"+
	( '00' + (today.getMonth()+1) ).slice( -2 )+
	( '00' + today.getDate() ).slice( -2 )

export { weekdays, months, holiday_list, today_date };
