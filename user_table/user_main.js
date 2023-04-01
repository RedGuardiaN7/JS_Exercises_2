const title = document.createElement('h1');
const smaller_title = document.createElement('h2');

let table = document.createElement('table'), row, cell_1, cell_2, cell_3, cell_4, cell_5, cell_6;
const tr = document.createElement('tr');

const th_1 = document.createElement('th');
const th_2 = document.createElement('th');
const th_3 = document.createElement('th');
const th_4 = document.createElement('th');
const th_5 = document.createElement('th');
const th_6 = document.createElement('th');

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
tr.append(th_5);
tr.append(th_6);

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

//Load users event

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    for (const user of users) {
      const user_line = document.createElement("tr");
      user_line.id = user.id;
      user_line.className = 'user_line';
      table.append(user_line);
      const td_name = document.createElement("td");
      td_name.className = 'text';
      td_name.textContent = user.name;
      const td_username = document.createElement("td");
      td_username.className = 'text';
      td_username.textContent = user.username;
      const td_email = document.createElement("td");
      td_email.className = 'text';
      td_email.textContent = user.email;
      const td_phone = document.createElement("td");
      td_phone.className = 'text';
      td_phone.textContent = user.phone;
      user_line.append(td_name);
      user_line.append(td_username);
      user_line.append(td_email);
      user_line.append(td_phone);

      //Delete button

      const delete_button = document.createElement('img');
      delete_button.src = './png/delete.png';

      const td_delete = document.createElement("td");
      td_delete.className = "td_delete";

      add_delete_listener(td_delete);

      td_delete.append(delete_button)
      user_line.append(td_delete);

      //Modify button

      const modify_button = document.createElement('img');
      modify_button.src = "./png/modify.png"

      const td_modify = document.createElement("td");
      td_modify.className = "td_modify";

      add_modify_listener(td_modify);

      td_modify.append(modify_button)
      user_line.append(td_modify);

    }
  });

const tds = document.getElementsByTagName('td');



//Add users event
let id = 10;

button.addEventListener('click', AddUsers);

function AddUsers() {

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.stringify({
      name: name_input.value,
      username: username_input.value,
      email: email_input.value,
      phone: phone_input.value,
      id: id++,
      user: 1,
      complete: false
    })
  }).then((res) => {
    if (res.ok) {
      console.log("Sto aggiungendo un nuovo user");
      const user_line = document.createElement("tr");
      user_line.id = id++;
      table.append(user_line);
      user_line.className = 'user_line';
      const td_name = document.createElement("td");
      td_name.className = 'text';
      td_name.textContent = name_input.value;
      console.log(name_input.value);
      const td_username = document.createElement("td");
      td_username.className = 'text';
      td_username.textContent = username_input.value;
      console.log(username_input.value);
      const td_email = document.createElement("td");
      td_email.className = 'text';
      td_email.textContent = email_input.value;
      console.log(email_input.value);
      const td_phone = document.createElement("td");
      td_phone.className = 'text';
      td_phone.textContent = phone_input.value;
      console.log(phone_input.value);
      user_line.append(td_name);
      user_line.append(td_username);
      user_line.append(td_email);
      user_line.append(td_phone);

      console.log("Aggiunto user!");

      //Delete button

      const delete_button = document.createElement('img');
      delete_button.src = './png/delete.png';

      const td_delete = document.createElement("td");
      td_delete.className = "td_delete";

      add_delete_listener(td_delete);

      td_delete.append(delete_button)
      user_line.append(td_delete);

      //Modify button

      const modify_button = document.createElement('img');
      modify_button.src = "./png/modify.png"

      const td_modify = document.createElement("td");
      td_modify.className = "td_modify";

      add_modify_listener(td_modify);

      td_modify.append(modify_button)
      user_line.append(td_modify);

    }
  })
};

//Function for deleting users

let deleted_ids = [];

function add_delete_listener(add_delete) {

  add_delete.addEventListener('click', (e) => {
    const id_remove = Number(e.currentTarget.parentElement.id);
    console.log("L'elemento con l'id: " + id_remove + " verrà rimosso");
    deleted_ids.push(id_remove);
    fetch("https://jsonplaceholder.typicode.com/users/" + id_remove, {
      method: 'DELETE',
      body: null
    })
      .then((res) => {
        if (res.ok) {

          [...document.getElementsByClassName("user_line")].map(n => n && n.remove());

          fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
              for (const user of users) {
                console.log(deleted_ids);

                console.log("Loading user " + user.id);

                if (deleted_ids.includes(user.id)) {

                  console.log('Questo user è stato eliminato.');

                } else {
                  const user_line = document.createElement("tr");
                  user_line.id = user.id;
                  user_line.className = 'user_line';
                  table.append(user_line);
                  const td_name = document.createElement("td");
                  td_name.className = 'text';
                  td_name.textContent = user.name;
                  const td_username = document.createElement("td");
                  td_username.className = 'text';
                  td_username.textContent = user.username;
                  const td_email = document.createElement("td");
                  td_email.className = 'text';
                  td_email.textContent = user.email;
                  const td_phone = document.createElement("td");
                  td_phone.className = 'text';
                  td_phone.textContent = user.phone;
                  user_line.append(td_name);
                  user_line.append(td_username);
                  user_line.append(td_email);
                  user_line.append(td_phone);

                  //Delete button

                  const delete_button = document.createElement('img');
                  delete_button.src = './png/delete.png';

                  const td_delete = document.createElement("td");
                  td_delete.className = "td_delete";

                  add_delete_listener(td_delete);

                  td_delete.append(delete_button)
                  user_line.append(td_delete);

                  //Modify button

                  const modify_button = document.createElement('img');
                  modify_button.src = "./png/modify.png"

                  const td_modify = document.createElement("td");
                  td_modify.className = "td_modify";

                  add_modify_listener(td_modify);

                  td_modify.append(modify_button)
                  user_line.append(td_modify);

                }
              }
            });
        }
      })

  })
};


//Function for modifying users

function add_modify_listener(modify_element) {

  modify_element.addEventListener('click', (e) => {

    const id_modify = Number(e.currentTarget.parentElement.id);
    button.innerHTML = "UPDATE";
    smaller_title.innerHTML = "Want to update some information?"

    const modify_line = document.getElementById(id_modify).children;

    name_input.value = modify_line[0].innerHTML;
    username_input.value = modify_line[1].innerHTML;
    email_input.value = modify_line[2].innerHTML;
    phone_input.value = modify_line[3].innerHTML;

    button.removeEventListener('click', AddUsers);
    button.addEventListener("click", ModifyUsers);

    function ModifyUsers() {

      fetch("https://jsonplaceholder.typicode.com/users/" + id_modify, {
        method: 'PUT',
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
          console.log("Sto aggiornando un user...");

          modify_line[0].textContent = name_input.value;

          modify_line[1].textContent = username_input.value;

          modify_line[2].textContent = email_input.value;

          modify_line[3].textContent = phone_input.value;

          console.log("User aggiornato!");

          name_input.value = '';
          username_input.value = '';
          email_input.value = '';
          phone_input.value = '';

          button.innerHTML = "ADD";
          smaller_title.innerHTML = "Want to add another user?"

          button.removeEventListener('click', ModifyUsers);

        }
      })
    }
  })
};