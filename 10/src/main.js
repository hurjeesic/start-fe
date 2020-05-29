import sum from './sum';
import avg from './avg';
import random from './random';

let content = `avg(1,2,3,4) => ${avg(1, 2, 3, 4)}<br>`;
content += `avg(1,2) => ${avg(1, 2)}<br>`;
content += `avg(1,2,3,4,5,6) => ${avg(1, 2, 3, 4, 5, 6)}<br>`;
content += `avg(1,'a',2); => ${avg(1, 'a', 2)}<br>`;
content += `avg([1,2,3]) => ${avg([1, 2, 3])}<br><br>`;

content += `random(0, 100) =>  ${random(0, 100)}<br>`;
content += `random(3) => ${random(3)}<br>`;
content += `random(0, 'a') => ${random(0, 'a')}`;

document.getElementById('debug').innerHTML = content;
