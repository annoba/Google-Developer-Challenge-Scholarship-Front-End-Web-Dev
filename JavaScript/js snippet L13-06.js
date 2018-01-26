/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var checkPoint1 = "Orbiter transfers from ground to internal power";
var checkPoint2 = "Ground launch sequencer is go for auto sequence start";
var checkPoint3 = "Activate launch pad sound suppression system";
var checkPoint4 = "Activate main engine hydrogen burnoff system";
var checkPoint5 = "Main engine start";
var checkPoint6 = "Solid rocket booster ignition and liftoff!";
count = 60;
while (count>=1) {
    if (count === 50) {
        console.log(checkPoint1);
    } else if (count === 31) {
        console.log(checkPoint2);
    } else if (count === 16) {
        console.log(checkPoint3);
    } else if (count === 10) {
        console.log(checkPoint4);
    } else if (count === 6) {
        console.log(checkPoint5);
    } else console.log("T-" + count + " seconds");
    count = count - 1;
}
console.log(checkPoint6);