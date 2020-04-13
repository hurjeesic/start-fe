console.log('app.js');

// 기본 객체 window, location, history, screen, navigator
console.log(window.outerWidth);
console.log(window.name);

// window.open('http://www.daum.net');

// location.href = 'http://www.daum.net';
// location.reload();

// history.back();
// history.go(1);
// history.forward();

console.log(screen.availWidth);

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.platform);

// DOM 탐색
var debug = document.getElementById('debug'); // querySelector('#debug');
console.log(debug);

var box = document.querySelector('.box');
var box2 = document.querySelectorAll('.box');
console.log(box2);

// DOM 생성
var div = document.createElement('div');
div.style.border = '1px solid red';
div.innerHTML = "hello!!";

document.body.appendChild(div);

// DOM 삽입
var span = document.createElement('span');
var textNode = document.createTextNode('hello!');

span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

var text = '<span>hello</span>';

document.querySelector('#debug').innerHTML = text;

// DOM 제거
var debug = document.getElementById('debug');
debug.remove();

var list = document.getElementById('list');
list.removeChild(list.children[0]);

// DOM 이벤트 추가
// window.addEventListener('load', function() {
//     alert("load");
// });

document.body.addEventListener("click", function() {
    console.log("click");
});

function clickBody() {
    console.log("click");
}

document.querySelector(".box").addEventListener("click", clickBody);