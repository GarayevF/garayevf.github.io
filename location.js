let bigmap = document.querySelector('#bigmap')
let map = document.querySelector('#map')
let boyut = document.querySelector('#boyut')
let bagla = document.querySelector('#bagla')
let goback = document.querySelector('#goback');
let title = document.querySelector('#title');

boyut.addEventListener('click', function() {
    // bigmap.classList.remove('d-none');
    bigmap.style.height = '700px'
    map.classList.add('d-none');
    goback.classList.add('d-none')
    title.classList.add('d-none')
})


bagla.addEventListener('click', function() {
    // bigmap.classList.add('d-none');
    bigmap.style.height = '0'
    map.classList.remove('d-none');
    goback.classList.remove('d-none')
    title.classList.remove('d-none')
})