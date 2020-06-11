function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
  return JSON.parse(localStorage.getItem('data') || '[]');
}

export { saveData, loadData };
