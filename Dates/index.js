// Dates METHODS in JAVASCRIPT

var d = new Date(); //create a new date object and inspect in Console
// console.log(d); //FullDate
// console.log("Current Year :" + d.getFullYear()); //Get the year as a four digit number (yyyy)
// console.log("Current Month: " + (d.getMonth()+1)); //Get the month as a number (0-11) <=====
// console.log("Today's Date: " + d.getDate()); //Get the day as a number (1-31)
// console.log("Hours: " + d.getHours()); //Get the hour (0-23)
// console.log("Minutes: " + d.getMinutes()); //Get the minute (0-59)
// console.log("Seconds: " + d.getSeconds()); //Get the second (0-59)
// console.log("Milliseconds: " + d.getMilliseconds()); //Get the millisecond (0-999)
// console.log("Epoch: " + d.getTime()); //Get the time (milliseconds since January 1, 1970)
// console.log("weekday: " + (d.getDay() + 1)); //Get the weekday as a number (0-6)  <====
//---------------------------------------------------------------------------------------
// Dates METHODS in JAVASCRIPT
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
var p = new Date(2021, 0, 2); //new object P
console.log(p);
// console.log(p) //Get the time. ECMAScript 5.
// console.log(d.setDate(30)); //Set the day as a number (1-31)
// console.log(d.setFullYear(2024)); //Set the year (optionally month and day)
// d.setHours(); //Set the hour (0-23)
// d.setMilliseconds(); //Set the milliseconds (0-999)
// d.setMinutes(); //Set the minutes (0-59)
// d.setMonth(); //Set the month (0-11)
// d.setSeconds(); //Set the seconds (0-59)
// d.setTime(); //Set the time (milliseconds since January 1, 1970)

/* 
Date(): Returns today's date and time
getDate(): Returns the day of the month for the specified date according to the local time
getDay(): Returns the day of the week for the specified date according to the local time
getFullYear(): Returns the year of the specified date according to the local time
getHours(): Returns the hour in the specified date according to the local time
getMilliseconds(): Returns the milliseconds in the specified date according to the local time
getMinutes(): Returns the minutes in the specified date according to the local time
getMonth(): Returns the month in the specified date according to the local time
getSeconds(): Returns the seconds in the specified date according to the local time
getTime(): Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
getTimezoneOffset(): Returns the time-zone offset in minutes for the current locale
getUTCDate(): Returns the day (date) of the month in the specified date according to the universal time
getUTCDay(): Returns the day of the week in the specified date according to the universal time
getUTCFullYear(): Returns the year in the specified date according to the universal time
getUTCHours(): Returns the hours in the specified date according to the universal time
getUTCMilliseconds(): Returns the milliseconds in the specified date according to the universal time
getUTCMinutes(): Returns the minutes in the specified date according to the universal time
getUTCMonth(): Returns the month in the specified date according to the universal time
getUTCSeconds(): Returns the seconds in the specified date according to the universal time
setDate(): Sets the day of the month for a specified date according to the local time
setFullYear(): Sets the full year for a specified date according to the local time
setHours(): Sets the hours for a specified date according to the local timesetMilliseconds()

*/

/* 
const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
const theBigDay2 = new Date(theBigDay).setDate(24);  // 1962-07-24 (24th of July 1962)
const theBigDay3 = new Date(theBigDay).setDate(32);  // 1962-08-01 (1st of August 1962)
const theBigDay4 = new Date(theBigDay).setDate(22);  // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new Date(theBigDay).setDate(0);   // 1962-06-30 (30th of June 1962)
const theBigDay6 = new Date(theBigDay).setDate(98);  // 1962-10-06 (6th of October 1962)
const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
*/
