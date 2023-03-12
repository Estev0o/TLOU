const btnCarrosel = document.querySelectorAll('.btn');

// const btn1 = document.addEventListener('click', () => {

// })

// const btn2 = document.addEventListener('click', () => {

// });

// const btn3 = document.addEventListener('click', () => {

// });

// const btn4 = document.addEventListener('click', () => {

// });

// const btn5 = document.addEventListener('click', () => {

// });

// const btn6 = documnt.addEvenListener('click', () => {

// });

btnCarrosel.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnSelect = document.querySelector('.select');
        btnSelect.classList.remove('select');

        btn.classList.add('select');

        const imgAtive = document.querySelector('.ative');
        imgAtive.classList.remove('ative');

    })
});

