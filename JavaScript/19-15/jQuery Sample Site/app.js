/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!


$( document ).ready(function () {
	$("div.articles").find("img").replaceWith("<img src='koala1.png' alt='animal pic'>");	
	}
);

// or

$(function () {
	$("div.articles").find("img").replaceWith("<img src='koala1.png' alt='animal pic'>");	
	}
);
*/
// or
$( 'article' ).on( 'click', function( evt ) {
    console.log( evt );
});