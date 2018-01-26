/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    if ((x%3 ===0) && (x%5 ===0)) {
        console.log("JuliaJames");
    } else if (x%3 ===0) {
        console.log("Julia");
    } else if (x%5 ===0) {
        console.log("James");
} 
    else console.log(x);
    x=x+1;
}

// or

var x = 1

while(x<20){
	switch(true){
		case ((x%3 ===0) && (x%5 ===0)):
			console.log("JuliaJames");
			break;
		case (x%3 ===0):
			console.log("Julia");
			break;
		case (x%5 ===0):
			console.log("James");
			break;
		default:
			console.log(x);
	}
	x+=1;
}