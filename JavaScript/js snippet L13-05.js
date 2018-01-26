/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */
var num = 99;
var pluralOne = "s ";
var pluralTwo = "s ";
while (num>0) {
    if (num === 2) {
        pluralTwo = " ";
    }
        else if (num === 1) {
            pluralOne = " ";
            pluralTwo = "s ";
        }
    console.log(num + " bottle" + pluralOne + "of juice on the wall! " + num + " bottle" + pluralOne + "of juice! Take one down, pass it around... " + (num-1) + " bottle" + pluralTwo + "of juice on the wall!");
    num = num - 1;
}
// alternative with ternaries
var num = 99;

while (num > 0) {
var onko = num === 1;
console.log(num + (onko ? " bottle" : " bottles") + " of juice on the wall! " + num + (onko ? " bottle" : " bottles") + " of juice! Take one down, pass it around... " + (num = num - 1) + ((onko == (num-1)) ? " bottle" : " bottles") + " of juice on the wall!");
}
