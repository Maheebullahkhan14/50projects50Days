const btn = document.getElementById('btn')
const input = document.querySelector('.input')
const search = document.querySelector('.search')


btn.addEventListener('click' ,myfn)

function myfn(){
    search.classList.toggle('active')
}

