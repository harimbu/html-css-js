// Browser Object Model

{
  // window.open('https://daum.net')
  // window.alert('hello')
  // window.prompt('전화번호는?', '010-')
  // window.confirm('정말삭제하시겠습니까?')
  // window.setInterval(function () {
  //   console.log('hello')
  // }, 1000)
  // window.setTimeout(function () {
  //   console.log('안녕')
  // }, 3000)
}

{
  // window.open(
  //   './popup.html',
  //   'popup1',
  //   'width=620,height=700,left=100,top = 50'
  // )
}

// 자동으로 숫자 증가 - 재시작 버튼, 정지버튼
// {
//   const count = document.querySelector('.num')
//   const message = document.querySelector('.message')
//   const start = document.querySelector('.startBtn')
//   const stop = document.querySelector('.stopBtn')

//   let num = 0
//   count.innerText = num
//   message.innerText = '안녕하세요'

//   function autoIncreaseNum() {
//     timer = setInterval(function () {
//       num++
//       count.innerText = num
//     }, 1000)
//     message.innerText = '자동으로 숫자가 증가합니다.'
//     start.style.display = 'none'
//     stop.style.display = ''
//   }

//   stop.addEventListener('click', function () {
//     clearInterval(timer)
//     message.innerText = '잠시 중단합니다.'
//     start.style.display = ''
//     stop.style.display = 'none'
//   })

//   start.addEventListener('click', function () {
//     autoIncreaseNum()
//   })

//   autoIncreaseNum()
// }

// screen 객체 - 사용자의 모니터 정보 제공
{
  console.log(screen.width)
  console.log(screen.height)
}

// location 개체 - 사용자 브라우저 관련 속성과 메서드 제공
{
  console.log(location.href)
  console.log(location.hash) // url 해시값 반환
  console.log(location.hostname) // url 호스트이름
  console.log(location.host) // url 호스트이름과 포트번호
  console.log(location.protocol) // url 프로토콜
  console.log(location.search) // url 쿼리요청값 반환
}

// history 객체 - 사이트 기록(이전, 다음)
{
  console.log(history.length)
  // history.back()
  // history.back(2)
  // history.forward()
  // history.go(-2)
}

// navigator 객체 - 브라우저 정보와 운영체제 정보 제공
{
  console.log(navigator.userAgent)
}

{
  const osImg = document.querySelector('.os img')
  const info = navigator.userAgent.toLocaleLowerCase()

  if (info.indexOf('windows') >= 0) {
    osImg.src = './images/window.jpg'
  } else if (info.indexOf('macintosh') >= 0) {
    osImg.src = './images/mac.jpg'
  } else if (info.indexOf('iphone') >= 0) {
    osImg.src = './images/iphone.jpg'
  } else if (info.indexOf('android') >= 0) {
    osImg.src = './images/android.jpg'
  }
}
