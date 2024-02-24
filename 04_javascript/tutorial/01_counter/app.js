const onePrice = document.querySelector('.price span')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalPrice = document.querySelector('.total span')

const unit_price = 15000
let num = 1
count.textContent = num
onePrice.textContent = unit_price.toLocaleString()

plus.addEventListener('click', function(){
    num++
    count.textContent = num
    paintTotal()
})

minus.addEventListener('click', function(){
    num--
    if(num < 1) {
        alert('최소 주문 수량은 한개 입니다.')
        num = 1
    }
    count.textContent = num
    paintTotal()
})

function paintTotal() {    
    totalPrice.textContent = (num * unit_price).toLocaleString()
}

function init() {       
    paintTotal()
}

init()