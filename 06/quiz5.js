// 문제
// 1. 박스를 누르면 드래그가 시작됩니다. (mousedown 이벤트)
// 2. 마우스가 눌린 상태로 마우스를 움직이면 박스가 마우스 커서를 따라 움직입니다. (mousemove 이벤트)
// 3. 클릭을 해제하면 드래그가 멈춥니다. (mouseup 이벤트)
// 4. 박스가 여러개이므로 함수가 코드 재활용이 잘 되도록 작성 해야 합니다.
// 해결 방법(기본적으로 절대 좌표 기준)
// 초기 : 제어할 box를 지정하고 style 속성을 통해 직접 제어(움직이기 전 값을 읽어오기 위함), 움직임의 여부를 지정할 변수 생성
// mousedown : 박스의 위치와 마우스 위치의 차이를 계산 후 저장(마우스 움직임에 따라 도형도 똑같이 움직이기 위함), indexMoving은 움직여야 하는 박스의 인덱스 저장
// mousemove : 움직일 박스가 있을 때 작동, 마우스 위치에 아까 계산한 차이를 빼고 이동(자연스러운 움직임)
// mouseup : 이 때부터 움직일 박스가 없으므로 indexMoving 변수 -1
var indexMoving = -1; // 어떤 박스가 움직일 지 확인
var boxs, mousePos;

window.onload = function () {
    boxs = document.getElementsByClassName("box");
    mousePos = { x: 0, y: 0 };

    for (var i = 0; i < boxs.length; i++) {
        const index = i;
        boxs[index].addEventListener("mousedown", function (e) {
            const left = boxs[index].offsetLeft, top = boxs[index].offsetTop;
            mousePos.x = e.clientX - left;
            mousePos.y = e.clientY - top;
    
            indexMoving = index;
        });

        boxs[index].addEventListener("mousemove", function (e) {
            if (indexMoving == index) {
                boxs[index].style.left = `${e.clientX - mousePos.x}px`;
                boxs[index].style.top = `${e.clientY - mousePos.y}px`;
            }
        });
    
        boxs[index].addEventListener("mouseup", function () {
            indexMoving = -1;
        });
    }
}