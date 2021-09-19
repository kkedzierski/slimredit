
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

/**
* Function check given URL is picture
* @author   jfriend00
* @param    {String} pictureURL
* @return   {Boolean} return true if it is picture else return false
*/
export const isPicture = (pictureURL) => {
    return(pictureURL.match(/\.(jpeg|jpg|gif|png)$/) != null);
}