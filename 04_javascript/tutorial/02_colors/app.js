const bg = ['orange', 'lightblue', 'red', 'aqua', 'yellow', 'lightgreen']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const str = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'

const bgBtn = document.querySelector('.bg_btn')
const hexBtn = document.querySelector('.hex_btn')
const colorName = document.querySelector('.color_name')
const text = document.querySelector('.text')

bgBtn.addEventListener('click', function(){
    const randomBgNum = Math.floor(Math.random() * bg.length)
    console.log(randomBgNum);
    document.body.style.backgroundColor = bg[randomBgNum]
    colorName.textContent = bg[randomBgNum]
})

hexBtn.addEventListener('click', function(){
    let hexColor = '#'
    for(let i = 0; i < 6; i++ ) {
        const randomHexNum = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomHexNum]
    }

    document.body.style.backgroundColor = hexColor
    colorName.textContent = hexColor
})

function autoText() {
    setInterval(function(){
        let msg = str.slice(0, Math.floor(Math.random() * str.length))
        text.innerHTML = msg
    }, 100)
}

autoText()