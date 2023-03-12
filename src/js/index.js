

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
const btnCarrosel = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.img');

btnCarrosel.forEach((btn, indice) => {
    btn.addEventListener('click', () => {

        turoffBtn();

        selectCarossel(btn);

        turonImgs();

        showImgs(indice);
    })
});

function turoffBtn() {
    const btnSelect = document.querySelector('.select');
    btnSelect.classList.remove('select');
}

function selectCarossel(btn) {
    btn.classList.add('select');
}

function turonImgs() {
    const imgAtive = document.querySelector('.ative');
    imgAtive.classList.remove('ative');
}

function showImgs(indice) {
    imgs[indice].classList.add('ative');
}
