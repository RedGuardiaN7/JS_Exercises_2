const input = document.createElement('input');
const button = document.createElement('button');
const title = document.createElement('h1');
button.textContent = 'ADD';
title.textContent = 'Shopping list';

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);

const ShoppingList = document.createElement('ul');
document.body.appendChild(ShoppingList);

button.addEventListener('click', () => {
    const Shopping_Item = document.createElement('li');

    Shopping_Item.textContent = input.value;

    const delete_button = document.createElement('img');
    add_delete_listener(delete_button);
    const check_button = document.createElement('img');
    add_check_listener(check_button);

    delete_button.src = 'https://cdn-icons-png.flaticon.com/512/1345/1345874.png';
    check_button.src = 'https://cdn-icons-png.flaticon.com/512/3917/3917749.png';

    Shopping_Item.append(check_button);
    Shopping_Item.append(delete_button);
    ShoppingList.appendChild(Shopping_Item);
});

function add_check_listener(add_check) {
    console.log('added check button');
    add_check.addEventListener('click', (e) => {
        if (e.currentTarget.parentElement.style.textDecoration == "line-through") {
            e.currentTarget.parentElement.style.textDecoration = "none";
            console.log('L\'elemento ' + e.currentTarget.parentElement.textContent + ' è stato contrassegnato come non comprato!')
        } else {
            e.currentTarget.parentElement.style.textDecoration = "line-through";
            console.log('L\'elemento ' + e.currentTarget.parentElement.textContent + ' è stato contrassegnato come comprato!');
        }
    })
};

function add_delete_listener(add_delete) {
    console.log('added delete button');
    add_delete.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
        console.log('Elemento ' + e.currentTarget.parentElement.textContent + ' eliminato!');
    })
};