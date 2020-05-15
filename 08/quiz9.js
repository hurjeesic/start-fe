// 1. 에러시에도 내용 log에 출력
// 2. url 입력폼에서 엔터를 칠경우 가져오기 동작
// 3. 성공 : quiz9.html 입력후 가져오기
// 4. 에러 : https://daum.net 입력후 가져오기
// 5. 개발자도구에서 네트워크,콘솔 항목 참고

let urlTxt;
let btn;
let logTxt;

function getSource(url, result) {
  const inputObj = url;
  const outputObj = result;

  // 3, 4
  fetch(inputObj.value)
    .then((response) => {
      response.text().then((data) => {
        outputObj.value = data;
      });
    })
    .catch((err) => {
      outputObj.value = err; // 1
    });
}

function search(inputObj, outputObj) {
  const urlObj = inputObj;
  const logObj = outputObj;

  if (urlObj.value === '') {
    // eslint-disable-next-line no-alert
    alert('내용을 입력해주세요');
  } else {
    logObj.value = getSource(urlObj, logObj);
  }
}

// eslint-disable-next-line func-names
window.onload = function () {
  urlTxt = document.getElementById('url');
  btn = document.getElementById('btn');
  logTxt = document.getElementById('log');

  // 2
  urlTxt.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      search(urlTxt, logTxt);
    }
  });

  btn.addEventListener('click', () => {
    search(urlTxt, logTxt);
  });
};
