/* Practice Assignment 10:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Define a function named getTheTable that returns the table
// element in the HTML document that has the id "myTable".

function getTheTable() {
  return document.getElementById("myTable");
}

// 2) Define a function named getAllParagraphs that returns a
// NodeList containing all paragraph nodes inside the "myPage"
// section element of the HTML document.

function getAllParagraphs() {
  const para = document.getElementById("myPage").querySelectorAll("p");
  console.log(para[2].textContent.length);
  return para;
}

console.log(getAllParagraphs());

// 3) Define a function named makeItalic.
// The function should change the CSS style of
// the paragraph elements with the class "even"
// to have italicized text. The function should
// return a NodeList containing the paragraphs
// that were changed to italics.
/////////////
// Hint: You will need a loop.
// Also reference CSS in JavaScript.

function makeItalic() {
  const even = document.querySelectorAll("p.even");

  for (let i = 0; i < even.length; i++) {
    even[i].style.fontStyle = "italic";
  }
  return even;
}

console.log(makeItalic());

// 4) Define a function named createBorders that selects
// the table inside the "myPage" section. The function
// should add a CSS border to the table cells that is
// 2 pixels thick and solid black (use #000 for black).
// The function should also return the table element.
////////////
// Hint: You can build a selector from the result
// of another selector.

function createBorders() {
  const table = document.getElementById("myTable");
  const cells = table.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.border = "2px solid rgb(0, 0, 0)";
  }
  return table;
}

// 5) Define a function named getTheListItem that accepts two
// number parameters. The first parameter (num1) is the number of
// the unordered list in the document. The second parameter (num2)
// is the number of the list item in the unordered list.
// The function should return the text content of the
// requested list item.
/////////////////////////
// For example: getTheListItem(2,2) should return
// second list item of the second unordered list inside the
// "myPage" section element of the HTML document.
////////////////////////
// Hint: MDN for nth-of-type and nth-child selectors

function getTheListItem (num1, num2) {
  const list = document.querySelector("body").querySelector(`ul:nth-of-type(${num1}N)`);
  const listItem = list.querySelector(`li:nth-child(${num2})`);
  const text = listItem.textContent;
  return text;
}


// 6) Define a function named changeBgColor that changes the
// background color of the "myPage" section. The function
// should accept one parameter named "color" that will be
// the color the function changes the background to.
// The function should return the "myPage" section element.

function changeBgColor(newColor) {
  const newSection = document.getElementById("myPage");
  newSection.style.backgroundColor = newColor;
  return newSection;
}
