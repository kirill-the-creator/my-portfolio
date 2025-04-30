document.getElementById('add-todo').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

document.getElementById('calc-cat-age').addEventListener('click', () => {
    const age = parseInt(document.getElementById('humanAge').value);
    const result = document.getElementById('catResult');
    if (isNaN(age) || age < 0) {
        result.textContent = 'Введите корректный возраст';
        return;
    }
    let catAge = 0;
    if (age === 1) catAge = 15;
    else if (age === 2) catAge = 24;
    else catAge = 24 + (age - 2) * 4;
    result.textContent = `Ваш возраст в кошачьих годах: ${catAge}`;
});