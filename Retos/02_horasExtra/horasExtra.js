const year = 2022
const holidays = ['01/06', '04/01', '12/25']

console.log(countHours(year, holidays))

/**
 * countHours returns the number of overtime hours to be worked in a year
 * 
 * @param {number} year year to check
 * @param {Array} holidays array with the dates of the holidays of the year
 * @returns 
 */
function countHours(year, holidays){
    const data = holidays.map(date => {
        const e = date.split('/')
        const newDate = new Date(year,e[0] - 1,e[1])
        return (1 <= newDate.getDay()  && newDate.getDay() <= 5) ? 2 : 0 
     })
    return data.reduce((acc,num) => acc + num,0)
}