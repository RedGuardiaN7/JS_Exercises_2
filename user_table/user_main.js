const title = document.createElement('h1');
const smaller_title = document.createElement('h2');
let table = document.createElement('table'), row, cell_1, cell_2, cell_3, cell_4;
const tr = document.createElement('tr');
const th_1 = document.createElement('th');
const th_2 = document.createElement('th');
const th_3 = document.createElement('th');
const th_4 = document.createElement('th');
const td = document.createElement('td');
const form = document.createElement('form');
const name_label = document.createElement('label');
const username_label = document.createElement('label');
const email_label = document.createElement('label');
const phone_label = document.createElement('label');
const name_input = document.createElement('input');
const username_input = document.createElement('input');
const email_input = document.createElement('input');
const phone_input = document.createElement('input');
const button = document.createElement('button');

title.textContent = 'User table';
th_1.textContent = 'Name';
th_2.textContent = 'Username';
th_3.textContent = 'Email';
th_4.textContent = 'Phone number';
smaller_title.textContent = 'Want to add another user?';
name_label.textContent = 'Name:';
username_label.textContent = 'Username:';
email_label.textContent = 'Email:';
phone_label.textContent = 'Phone number:';
button.textContent = 'ADD';


document.body.appendChild(title);
document.body.appendChild(table);
table.append(tr);
tr.append(th_1);
tr.append(th_2);
tr.append(th_3);
tr.append(th_4);
document.body.appendChild(smaller_title);
document.body.appendChild(form);
form.append(name_label);
form.append(name_input);
form.append(username_label);
form.append(username_input);
form.append(email_label);
form.append(email_input);
form.append(phone_label);
form.append(phone_input);
document.body.appendChild(button);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    for (const user of users) {
      const user_line = document.createElement("tr");
      table.append(user_line);
      const td_name = document.createElement("td");
      td_name.textContent = user.name;
      const td_username = document.createElement("td");
      td_username.textContent = user.username;
      const td_email = document.createElement("td");
      td_email.textContent = user.email;
      const td_phone = document.createElement("td");
      td_phone.textContent = user.phone;
      user_line.append(td_name);
      user_line.append(td_username);
      user_line.append(td_email);
      user_line.append(td_phone);
    }
  });

button.addEventListener("click", () => {

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.stringify({
      name: name_input.value,
      username: username_input.value,
      email: email_input.value,
      phone: phone_input.value,
      user: 1,
      complete: false
    })
  }).then((res) => {
    if (res.ok) {
      console.log("Sto aggiungendo un nuovo user");
      const user_line = document.createElement("tr");
      table.append(user_line);
      const td_name = document.createElement("td");
      td_name.textContent = name_input.value;
      console.log(name_input.value);
      const td_username = document.createElement("td");
      td_username.textContent = username_input.value;
      console.log(username_input.value);
      const td_email = document.createElement("td");
      td_email.textContent = email_input.value;
      console.log(email_input.value);
      const td_phone = document.createElement("td");
      td_phone.textContent = phone_input.value;
      console.log(phone_input.value);
      user_line.append(td_name);
      user_line.append(td_username);
      user_line.append(td_email);
      user_line.append(td_phone);

      console.log("Aggiunto user!");
    }
  })
});