// 콜백함수 callback function
// - 함수가 실행되고 난 뒤 실행되는 함수
// -- 자바스크립트에서 함수는 object
// -- 함수는 다른 함수의 인자로 쓰일 수 있고, 리턴 될 수도 있다.
// -- 이것을 고차함수 higer-order functions 라고 하고
// -- 인자로 넘겨지는 함수를 콜백함수 callback function 이라고 한다.
// - 사용하는 이유 : 비동기 처리

// 비동기(Asyncromous)
// - JavaScript는 엔진은 Single Thread
// - 동시에 두 가지 작업을 할 수 없다
// - 동시에 여러 요청이 오면 ? 이전 요청이 마무리 될 때까지 기다려야 하는가?
// - JavaScript 엔진은 비동기 처리가 가능하도록 설계
// - 비동기 처리 => callback, promise, async/await

// 동기식
// console.log('1')
// console.log('2')
// console.log('3')

// 비동기
// console.log('1')
// setTimeout(() => {
//   console.log('2')
// }, 1000)
// console.log('3')

// 콜백함수 샘플1
console.log('1')

function paintNum(callbackFunc) {
  setTimeout(() => {
    console.log('2')
    callbackFunc()
  }, 1000)
}

paintNum(() => {
  console.log('3')
})

// 콜백함수 샘플2

function doStudy(subject) {
  console.log(`${subject} 공부를 시작합니다.`)
}

doStudy('javascript')

// - doStudy의 두번째 인자로 callback을 추가.
// - doStudy함수를 호출할 때 두번째 인자 자리에서 콜백함수를 정의

function doHomework(subject, callbckFunc) {
  console.log(`${subject} 숙제를 시작합니다.`)
  callbckFunc()
}

doHomework('jquery', () => {
  console.log('숙제를 끝냈습니다.')
})

// 콜백지옥
// function timer(callback) {
//   setTimeout(() => {
//     callback(new Date().toLocaleString())
//   }, 1000)
// }

// timer(result => {
//   console.log(result)
//   timer(result => {
//     console.log(result)
//     timer(result => {
//       console.log(result)
//       timer(result => {
//         console.log(result)
//         timer(result => {
//           console.log(result)
//         })
//       })
//     })
//   })
// })

function timer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date().toLocaleString())
    }, 1000)
  })
}

timer() //
  .then(result => {
    console.log(result)
    return timer()
  })
  .then(result => {
    console.log(result)
    return timer()
  })
  .then(result => {
    console.log(result)
    return timer()
  })
  .then(result => {
    console.log(result)
    // return 'hello'
    return timer()
  })
  .then(result => {
    console.log(result)
  })
