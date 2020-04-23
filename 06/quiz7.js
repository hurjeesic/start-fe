// 문제
// 빨간타겟이 box영역에서만 랜덤으로 출현
// 빨간타겟을 클릭하면 점수 +1
// 빨간타겟을 클릭못하면 생명 -1
// 생명이 0이면 gameover 메세지 출력
// 해결 방법
// 상황을 변화할 때 상태를 보여줄 update을 생성
// 빨간 상자를 클릭하지 못했을 때 다시 타이머를 돌릴 함수 형식의 변수를 생성
// 특정 간격에 타이머를 실행하고 빨간 상자를 클릭했을 때는 이 타이머를 새로 작동시키도록 작성
// 타이머 간격(intervalTime)은 임의로 설정

var box, bug, point, life;
var width, height, score, chance;
var intervalFunc;
var intervalTime = 3000;

window.onload = function() {
    box = document.getElementsByClassName("box")[0];
    bug = document.getElementById("bug");
    point = document.getElementById("point");
    life = document.getElementById("life");
    width = box.clientWidth - bug.clientWidth, height = box.clientHeight - bug.clientHeight;
    score = 0, chance = 10;
    
    bug.addEventListener('click', click);

    intervalFunc = setInterval(function() { notClick() }, intervalTime);
}

function update() {
    point.innerText = score;
    life.innerText = chance;
    bug.style.left = parseInt(Math.random() * (width + 1)) + "px";
    bug.style.top = parseInt(Math.random() * (height + 1)) + "px";
}

function click() {
    score++;
    update();
    clearInterval(intervalFunc);
    intervalFunc = setInterval(function() { notClick() }, intervalTime);
}

function notClick() {
    chance--;
    update();
    if (chance == 0) {
        // 게임 종료
        clearInterval(intervalFunc);
        bug.removeEventListener('click', click);

        alert("gameover");
    }
}