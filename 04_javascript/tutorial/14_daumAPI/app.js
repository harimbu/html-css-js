const input = document.querySelector('form input')
const btn = document.getElementById('btn')
const book_container = document.querySelector('.book_container')

let bookName = '고래'

function getBooks() {
  $.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v3/search/book?target=title',
    data: { query: bookName, size: 20 },
    headers: {
      Authorization: 'KakaoAK f84ca297cbd46eeacec5410e934b5a46',
    },
  }).done(function (books) {
    console.log(books)

    const bookItems = books.documents

    let bookItem = bookItems
      .map(item => {
        return `<div class="book">
        <img src="${item.thumbnail}" alt="" />
        <h4>${item.title}</h4>
        <p>가격: ${item.price}원</p>
        <p>출판사: ${item.publisher}원</p>
        </div>`
      })
      .join('')

    book_container.innerHTML = bookItem
  })
}

getBooks()

btn.addEventListener('click', e => {
  e.preventDefault()
  bookName = input.value
  if (bookName === '') return
  getBooks()
  input.value = ''
})
