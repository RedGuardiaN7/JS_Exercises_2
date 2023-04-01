const title = document.createElement('h1');
let table = document.createElement('table'), row, cell_1, cell_2, cell_3, cell_4 ;
const tr = document.createElement('tr');
const th_1 = document.createElement('th');
const th_2 = document.createElement('th');
const th_3 = document.createElement('th');
const th_4 = document.createElement('th');
const td = document.createElement('td');

title.textContent = 'User table';

document.body.appendChild(title);
document.body.appendChild(table);

th_1.textContent = 'Name';
th_2.textContent = 'Username';
th_3.textContent = 'Email';
th_4.textContent = 'Phone number';
table.append(tr);
tr.append(th_1);
tr.append(th_2);
tr.append(th_3);
tr.append(th_4);