// ===============Beknazar Oltiboyev=================

let btn = document.querySelector('.btn')
let modal = document.querySelector('.modal')
let tanirovka = document.querySelector('.tanirovka')
let closebtn = document.querySelector('.closebtn')


btn.addEventListener('click',() => {
    modal.classList.remove('heddin')
    tanirovka.classList.remove('heddin')
})

closebtn.addEventListener('click',() => {
    modal.classList.add('heddin')
    tanirovka.classList.add('heddin')
})

tanirovka.addEventListener('click', ()=>{
    modal.classList.add('heddin')
    tanirovka.classList.add('heddin')
})

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        modal.classList.add('heddin')
        tanirovka.classList.add('heddin')
    }
})