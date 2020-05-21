const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 3614803ea2cba8719284f3645caf357f' };
let page = 1;
let searchText = '';

function success(data) {
  const { documents } = data;
  const li = documents.map(
    (doc) =>
      `<li class="list-group-item"><a href="${doc.url}">${doc.contents}</a></li>`,
  );

  $result.innerHTML += `${li.join('')}`;

  // 다음 검색은 결과를 50페이지까지 제공
  if (page < 50) {
    createMoreBtn($result);
  }
}

function createMoreBtn($parent) {
  const moreBtn = document.createElement('button');
  moreBtn.className = 'btn btn-dark';
  moreBtn.id = 'more-search-btn';
  moreBtn.appendChild(document.createTextNode('더보기'));
  $parent.appendChild(moreBtn);
  moreBtn.addEventListener('click', () => {
    $parent.removeChild(moreBtn);
    page += 1;
    daumSearch();
  });
}

function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 입력해주세요.');
}

function daumSearch() {
  fetch(`${url}?query=${searchText}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  searchText = $text.value;
  if (searchText === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요.');
  }

  $result.innerHTML = '';

  daumSearch();
}

$btn.addEventListener('click', () => {
  page = 1;
  search();
});
