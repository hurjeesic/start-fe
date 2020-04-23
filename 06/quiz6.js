// 문제
// 1. 전에 코딩했던 구구단 코드 재활용
// 2. 입력폼에 숫자를 입력하고 출력버튼을 누르면 해당 단수가 출력
// 3. 템플릿 표현식 사용
// 4. 숫자가 아닌값을 입력할경우 alert 메세지 출력
// 해결 방법
// 출력할 구구단에 관련된 것은 따로 함수로 분류
// 구구단 string을 구성할 때 템플릿 표현식 사용
// btn의 이벤트 안에 아래의 로직을 구성
// input#num dom 객체의 값을 받아와서 숫자로 변환 후
// isNaN함수로 숫자인지를 확인 후 결정(true: 경고 메시지, false: 내용 출력)

var result;

window.onload = function() {
    result = document.getElementById("result");
    let btn = document.getElementById("btn");

    btn.addEventListener('click', function() {
        let input = parseInt(document.getElementById("num").value);

        if (isNaN(input)) {
            alert("숫자를 입력해주세요.");
        }
        else {
            result.innerHTML = getGugudanStr(input);
        }
    });
}

function getGugudanStr(dan) {
    let str = "";
    for (let i = 1; i <= 9; i++) {
        str += `${dan} x ${i} = ${dan * i}<br>`;
    }

    return str;
}