var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];

pageBody.insertBefore(main, scriptTag);


var header = document.createElement('h1');
main.appendChild(header);

var headerUl = document.createElement('ul');
main.appendChild(headerUl);

var headerLi = document.createElement('li');
headerUl.appendChild(headerLi);

var headerText = document.createTextNode('This is the header text!');

var listItemText = document.createTextNode('This is the list item');

header.appendChild(headerText);
headerLi.appendChild(listItemText);
header.classList.add('blue');
main.classList.add('text-center');

var link = document.createElement('a');
var linkListItem = document.createElement('li');

linkListItem.appendChild(link);
headerUl.appendChild(linkListItem);

var linkText = document.createTextNode('This is the my link');
link.appendChild(linkText);

link.href = 'https://www.google.com';

var notLinkListItem = linkListItem.previousElementSibling;

notLinkListItem.classList.add('orange');