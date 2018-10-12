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