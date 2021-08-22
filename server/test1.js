const date = "2021_0821"

const date_num = date.split("_");
console.log(date_num)
const day = parseInt(date_num[1].slice(2, 4));
const month = (parseInt(date_num[1].slice(0, 2))-1);
const year = date_num[0];

console.log(day)
console.log(month)
console.log(year)