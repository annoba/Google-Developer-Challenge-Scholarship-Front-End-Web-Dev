/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
$("p").each(function(){			// call each method to loop over all "p" tags
   let pText = $(this).text();	// define pText to be the text inside the current p tag
   let charNum = pText.length;	// define charNum to be the text length (i.e. number of characters) in side the current p tag
   $(this).text(pText+""+charNum);	// replace current p tag's text with text + length (charNum)
});