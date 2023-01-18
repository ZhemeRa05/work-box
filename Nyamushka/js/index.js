let card = document.querySelectorAll('.products__item');
let frames = document.querySelectorAll('path');
let paragraph = document.querySelectorAll('.products__paragraph-link');

console.log(frames)



card.forEach(card => card.addEventListener('click', ()=>{
    card.classList.toggle('select-card');
    if(card.disabled == true){
        card.classList.add('products__disabled-card')
    }
}));

paragraph[0].addEventListener('click', ()=>{
    paragraph[0].innerHTML = 'Печень утки разварная с артишоками.'
    if(card.disabled == true){
        paragraph[0].innerHTML = 'Печалька, с фуа-гра закончился.'
    }
})

paragraph[1].addEventListener('click', ()=>{
    paragraph[1].textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    if(card.disabled == true){
        paragraph[1].innerHTML = 'Печалька, с рыбой закончился.'
    }
})

paragraph[2].addEventListener('click', ()=>{
    paragraph[2].textContent = 'Филе из цыплят с трюфелями в бульоне.'
    if(card.disabled == true){
        paragraph[2].innerHTML = 'Печалька, с курой закончился.'
    }
})

