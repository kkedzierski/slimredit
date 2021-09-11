
/**
* Function return difference between date in milliseconds passed as parameter to now
* @author   kkedzierski
* @param    {String} num     date in milliseconds
* @return   {Integer}        diffrent in days
*/
export const whenCreated = (num) => {
    let dateNow = new Date(); 
    let datePassed = new Date(num*1000);

    let difference = Math.abs(datePassed-dateNow);
    let days = difference/(1000 * 3600 * 24);
    days = Math.round(days);
    
    return days;
}