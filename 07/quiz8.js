// 문제
// 랜덤값 만들기
// 최소, 최대값 사이에 랜덤한 숫자를 출력합니다.
// 출력할 때 숫자가 증가되는 애니메이션 효과를 줍니다. (setInterval())
// 랜덤 숫자가 출력중에는 생성버튼이 비활성화 됩니다.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

function animateRand(result, btn, val) {
  let min = val - 50;
  const max = val;
  const interval = setInterval(() => {
    min += 1;
    result.innerHTML = String(min);
    if (min === max) {
      btn.disabled = false;
      clearInterval(interval);
    }
  }, 10);
}

window.onload = function () {
  const minText = document.getElementById('min');
  const maxText = document.getElementById('max');
  const result = document.getElementById('box');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    btn.disabled = true;
    animateRand(result, btn, getRandomInt(minText.value, maxText.value));
  });
};
