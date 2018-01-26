/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 3;
var groupName;
// your code goes here
if (musicians <1)   {
    groupName="not a group";
}   else if (musicians >4)   {
    groupName="this is a large group";
}   else if (musicians ===4)   {
    groupName="quartet";
}   else if (musicians ===3)   {
    groupName="trio";
}   else if (musicians ===2)   {
    groupName="duet";
}   else {
    groupName="solo";
}
console.log(groupName);
