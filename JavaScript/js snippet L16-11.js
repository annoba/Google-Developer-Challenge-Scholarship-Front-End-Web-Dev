/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
    name: "Ducktatoe",
    friends: 1,
    messages: [
        "postMessage(message) - adds a new message string to the array",
        "deleteMessage(index) - removes the message corresponding to the index provided",
        "addFriend() - increases the friend count by 1",
        "removeFriend() - decreases the friend count by 1"],
    postMessage: function postMessage(index){
        facebookProfile.messages.push("new message01");
    },
    deleteMessage: function deleteMessage(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function addFriend(){
        facebookProfile.friends+=1;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends-=1;
    },
}