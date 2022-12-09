let bigmap = document.querySelector('#bigmap')
let map = document.querySelector('#map')
let boyut = document.querySelector('#boyut')
let bagla = document.querySelector('#bagla')

boyut.addEventListener('click', function() {
    bigmap.classList.remove('d-none');
    map.classList.add('d-none');
})


bagla.addEventListener('click', function() {
    bigmap.classList.add('d-none');
    map.classList.remove('d-none');
})