/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (numHa){
    var ha = "";
    for (var i= 1; i <= numHa; i++){
        ha+="ha";
    }
    return ha+"!";
}/* finish the function expression */

console.log(laugh(10));
