/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $("a").first().attr("href","#1");

//or 
var navList, firstItem, link;

navList =$(".nav-list");
firstItem = navList.children().first();
link = firstItem.find("a");
link.attr("href","#1");

//or

var navList;
navList = $("li a").first();
navList.attr("href", "#1");