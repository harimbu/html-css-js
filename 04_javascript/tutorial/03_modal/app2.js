const moreBtn = document.getElementById('more_btn')
const closeBtn = document.querySelector('.close_btn')
const content = document.querySelector('.content')
const modal = document.querySelector('.modal')

moreBtn.addEventListener('click', function(){
    content.classList.add('active')
    modal.classList.add('active')
})

closeBtn.addEventListener('click', function(){
    content.classList.remove('active')
    modal.classList.remove('active')
})