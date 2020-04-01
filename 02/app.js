console.log('app.js');

// 객체 기본 사용법
var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
};

console.log(person.constructor); // f Object() { native object }
console.log(person.hasOwnProperty('nick')); // true
console.log(person.hasOwnProperty('nick1')); // false
console.log(person.toString()); // [object Object]
console.log(person); // person의 맴버정보

// Array
var arr = [1, 2, 3];
var arr = new Array(1, 2, 3) // [1, 2, 3]
var arr = new Array(3); // [], arr.length = 3
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 배열 CRUD
// Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo) {
    console.log(todo);
});

// Update
var updateTodo = '게임';
// findIndex를 이용한 update
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo;
});
todos[updateIndex] = '공부';
// map를 이용한 update
var newTodos = todos.map(function(todo) {
    if (todo === updateTodo) {
        return '공부';
    }

    return todo;
});
console.log(todos);

// Delete
// findIndex와 splice를 이용한 delete
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
    return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);
// filter를 이용한 delete
var newTodos = todos.filter(function(todo) {
    return todo !== deleteTodo;
});
console.log(newTodos);

// 동적 타이핑 - 자동 형변환
var foo = 42; // 자동으로 Number 지정
var foo = "bar"; // 자동으로 String 지정
var foo = true; // 자동으로 Boolean 지정

if ("test") { // 문자열 "test"를 자동으로 true로 변환
    console.log("true");
}

"2" + 2 // "22"
2 + 5 + "1" // "71"

// 함수
function sum(x) {
    var y = 1;

    return x + y;
}

var sum = function() {
    var y = 1;

    return x + y;
}

// 자주 쓰는 함수들
alert("안녕하세요!");
var who = window.prompt("당신은 누구세요?");
console.log(who);
var isDelete = window.confirm("정말 삭제하시겠습니까?");
console.log(isDelete);

// serTimeout, setInterval
function test() {
    console.log('test()');
}

// setTimeout(test, 1000) // 특정 시간 후 1번 실행
// setInterval(test, 1000) // 특정 시간 마다 실행

// 일반적인 setInterval보다 나은 방법
function test() {
    console.log('test()');
    setInterval(test, 1000);
}

// 유효범위
var nick = 'aji'; // 전역변수

function test() {
    var age = 30;
    console.log(nick, age);
}

test();

// Hoisting
// var, const로 선언된 것들을 맨위로 올리는 것

var input = Number(window.prompt("숫자를 입력하세요")), num = input;
while (input) {
    input = Number(window.prompt("숫자를 입력하세요"));
    num += input;
}
alert('숫자의 총 합은 ' + num);

// 함수
function test() {
    console.log('test');
}

var test = function() {
    console.log('test');
    
}

(function() {
    var a = 'a'; // 캡슐화 가능
    console.log(a);
})();

function sum(x, y) {
    if (!y) y = 1; // 매개변수 y 생략 가능
    console.log(x + y);   
}
console.log(sum(1));
console.log(sum(1, 2));
// 가변길이인자 함수
function sum() {
    var size = 0;
    for (var i = 0; i < arguments.length; i++) {
        size += arguments[i];
    }

    console.log(size);
}

sum(1, 2, 3, 4, 5, 6, 7);

// 정규표현식 - regex
var text = 'abc def ghi jkl abc def';
var testReg = '/abc/';
var result = testReg.test(text);