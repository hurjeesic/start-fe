// html 파일은 일부 css만 추가

var boxAry = [];

window.onload = function () {
    const redBtn = document.getElementsByClassName("add-red")[0];
    const addBtn = document.getElementsByClassName("add-btn")[0];
    const deleteBtn = document.getElementsByClassName("delete-btn")[0];
    const textBtn = document.getElementsByClassName("text-btn")[0];
    const resetBtn = document.getElementsByClassName("reset-btn")[0];
    const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
    const imageBtn = document.getElementsByClassName("image-btn")[0];

    // console.log(redBtn, addBtn, deleteBtn, resetBtn, toggleBtn, imageBtn);    

    redBtn.addEventListener("click", function () {
        assignFullFactor(addRed);
    });
    addBtn.addEventListener("click", addBox);
    deleteBtn.addEventListener("click", deleteBox);
    textBtn.addEventListener("click", function () {
        assignFullFactor(addText)
    });
    resetBtn.addEventListener("click", resetBox);
    toggleBtn.addEventListener("click", function () {
        assignFullFactor(toggleBox);
    });
    imageBtn.addEventListener("click", function () {
        assignFullFactor(addImage);
    });

    // 페이지에 최초로 들어올 때 이미 존재하는 box 배열에 추가
    for (var box of document.getElementsByClassName("box")) {
        // element : 기본 box 노드
        // image : 박스 안 이미지 여부 확인
        boxAry.push({ element: box, image: false });
    }
}

// 전체 요소를 바꿀 때 사용하는 함수
function assignFullFactor(func) {
    for (var box of boxAry) {
        func(box);
    }
}

// 문제 1
// 문제 : .add-red 클릭하면 .box class속성에 .red를 추가
// 풀이 방법 : 특정 요소(div.box)에 red라는 클래스를 추가하는 함수을 만들고
//          전체 요소에 적용하는 함수(assignFullFactor)를 함께 사용
function addRed(box) {
    box.element.classList.add("red");
}

// 문제 2
// 문제 : .add-btn 클릭하면 .box 엘리먼트를 body에 하나씩 추가
// 풀이 방법 : 추가할 element(div.box)를 생성 후 미리 생성한 배열(boxAry)에 넣고 body에 추가
function addBox() {
    const box = document.createElement("div");
    box.classList.add("box");

    boxAry.push({ element: box, image: false });

    document.body.appendChild(box);
}

// 문제 3
// 문제 : .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
// 풀이 방법 : 앞에서 언급한 배열 boxAry의 요소를 하나 제거하고 그 요소를 body에서 삭제
function deleteBox() {
    if (boxAry.length > 0) {
        document.body.removeChild(boxAry.pop().element);
    }
}

// 문제 4
// 문제 : .text-btn 클릭하면 .txt에 value값을 가져와서 .box에 가져온 value 값 텍스트 추가
//      .box 엘리먼트가 여러개 있을경우 동일하게 추가
// 풀이 방법 : 특정 요소(div.box)에 .txt에 value 값 텍스트를 추가하는  함수(addText)를 만들고
//          전체 요소에 적용하는 함수(assignFullFactor)를 함께 사용
function addText(box) {
    box.element.textContent += document.getElementsByClassName("txt")[0].value;
    if (box.image) {
        box.image = false;
    }
}

// 문제 5
// 문제 : .reset-btn 클릭하면 모든 .box 엘리먼트 제거
// 풀이 방법 : 미리 삭제할 갯수(전체 갯수)를 저장한 뒤
//          위에서 생성한 .box 엘리먼트를 하나 제거하는 함수(deleteBox)를 반복 실행
function resetBox() {
    const length = boxAry.length;
    for (let index = 0; index < length; index++) {
        deleteBox();
    }
}

// 문제 6
// 문제 : .toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
// 풀이 방법 : html에 toggle클래스에 대해 숨기는 css문(quiz3.html 참고)을 추가한 후
//          특정 요소(div.box)에 hidden이라는 클래스를 toggle(있으면 추가 없으면 제거)하는 함수(toggleBox)을 만들고
//          전체 요소에 적용하는 함수(assignFullFactor)를 함께 사용
function toggleBox(box) {
    box.element.classList.toggle("hidden");
}

// 문제 7
// 문제 : .image-btn 클릭하면 .box 엘리먼트에 이미지 출력
//      이미지 주소: https://i.imgur.com/69NjYBH.png
//      .box 엘리먼트가 없을경우 생성후 처리
// 풀이 방법 : 추가할 element(img)를 생성 하고
//          .box의 존재 여부는 box 전체를 관리하는 boxAry를 통해 확인하고
//          필요 시 추가는 위에서 생성한 .box 엘리먼트를 추가하는 함수(addBox)를 실행
//          마지막으로 boxAry에 필드 중 이미지 존재 여부인 image를 확인하여
//              이미지가 없을 경우 특정 요소(div.box)추가하고
//          전체 요소에 적용하는 함수(assignFullFactor)를 함께 사용
function addImage(box) {
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.imgur.com/69NjYBH.png");

    if (boxAry.length == 0) {
        addBox();
    }

    if (!box.image) {
        box.element.textContent = ""; // 안
        box.element.appendChild(image);
        box.image = true;
    }
}