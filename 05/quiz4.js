// html 파일은 박스 시각화가 문제 해결을 위해 css 조정

// 문제
// 1. 박스를 누르면 드래그가 시작됩니다(mousedown 이벤트)
// 2. 마우스가 눌린 상태로 마우스를 움직이면 박스가 마우스 커서를 따라 웁직입니다(mousemove 이벤트)
// 3. 클릭을 해제하면 드래그가 멈춥니다.
// 해결 방법(기본적으로 절대 좌표 기준)
// 초기 : 제어할 box를 지정하고 style 속성을 통해 직접 제어(움직이기 전 값을 읽어오기 위함), 움직임의 여부를 지정할 변수 생성
// mousedown : 박스의 위치와 마우스 위치의 차이를 계산 후 저장(마우스 움직임에 따라 도형도 똑같이 움직이기 위함), 움직임 변수 true
// mousemove : 움직임 변수가 true일 때 작동, 마우스 위치에 아까 계산한 차이를 빼고 이동(자연스러운 움직임)
// mouseup : 이 때부터 박스가 움직이면 안되므로 움직임 변수 false
let isMoving = false; // 박스가 움직여도 되는지 확인
let box;
let mousePos;

window.onload = function () {
  box = document.getElementById('box');
  mousePos = { x: 0, y: 0 };

  box.style.left = '200px';
  box.style.top = '100px';

  box.addEventListener('mousedown', (e) => {
    const left = box.style.left;
    const top = box.style.top;
    mousePos.x = e.clientX - parseInt(left.substr(0, left.length - 2));
    mousePos.y = e.clientY - parseInt(top.substr(0, top.length - 2));

    isMoving = true;
  });

  box.addEventListener('mousemove', (e) => {
    if (isMoving) {
      box.style.left = `${e.clientX - mousePos.x}px`;
      box.style.top = `${e.clientY - mousePos.y}px`;
    }
  });

  box.addEventListener('mouseup', () => {
    isMoving = false;
  });
};
