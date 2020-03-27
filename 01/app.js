console.log('app.js');

// 변수 연습
var name  = 'FE';
var age = 28;
var message = 'hello ' + name;

console.log(name);
console.log(age);
console.log(message);

// 주석 연습
// 단축키 : Ctrl + //
// 코드 앞에 //를 붙이면 주석 처리됨
// 여러 줄을 한꺼번에 주석처리 할 때는 /* */를 사용
// 댓글갯수 -> 주석
var commentCount = 20;

/* -> 주석
	동적으로 호출한 콘텐츠를 넣어줌
	@author FE
*/
document.getElementById('wrap').innerHTML = context;

// 데이터 타입
var count = 5; // Number
console.log(count);
var nick = "my nick is 'jimen'"; // String
console.log(nick);
var isMan = true; // Boolean
console.log(isMan);
var log = function(str) { // Function
	console.log(str);
};
function log(str) {
	console.log(str);
}
var image = {}; // image = new Object(); // Object
image.width = 1;
image.height = 2;
image['width'] = 1; // 연관배열
image['name' + i] = '1.jpg'; // 동적으로도 할당 가능
image = { width: 1, height: 2 };
console.log(image);
image = []; // new Array(); // Array -> Object
image[0] = '1.jpg';
image[1] = '2.jpg';
image = ['1.jpg', 2, { name: '3.jpg' }];
console.log(image);
var nick = null; // null
console.log(nick);
var nick; // undefined
console.log(nick);

// 주요 연산자
// +
console.log(1 + 2); // 3
console.log('a' + 'b'); // "ab"
console.log(1 + '4'); // "14"
// 동등, 일치
'' == '0'; // false
0 == ''; // true -> 처음 연산시 0이 false로 변환됨
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == undefined; // false
false == null; // false
null == undefined; // true
' \t\r\n' == 0; // true
// 논리곱
if (isHero && isHulk) {
	//둘다 참일 경우 실행
	console.log(true);
}
// 논리합
if (isHero || isHulk) {
	//하나라도 참일 경우 실행
	console.log(true);
}
// 논리부정
if (!isHero) {
	//영웅이 아니라면
	console.log('나 영웅 아니다!');
}
// in
var image = { width: 1, height: 2 };
console.log('width' in image); //true
console.log('size' in image);
console.log('toString' in image);
// delete
image.width = null; //value만 지우고 프로퍼티 는 남겨둠
console.log(image.width);
delete image.width;
console.log(image.width);
// typeof
console.log(typeof (1 + '4'));
console.log(typeof foo !== 'undefined');
// instanceof
var arr = [1, 2, 3];
console.log(a instanceof Array); //true