// 비동기(Asyncromous)
// - JavaScript는 엔진은 Single Thread
// - 동시에 두 가지 작업을 할 수 없다
// - 동시에 여러 요청이 오면 ? 이전 요청이 마무리 될 때까지 기다려야 하는가?
// - JavaScript 엔진은 비동기 처리가 가능하도록 설계
// - 비동기 처리 => callback, promise, async/await

// Promise
// - 비동기적으로 실행하는 작업의 결과(성공/실패)를 나타내는 객체
// - new 생성자로 promise객체를 만들 수 있다.
// - 인자로 들어가는 executor : resolve 와 reject 를 받는 실행함수
// - 성공 -> resolve 함수
// - 오류(실패) -> reject 함수

// 샘플 : 1 ~ 10 랜덤한 숫자에서 5보다 크면 성공, 아니면 실패
const counter = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.floor(Math.random() * 10) + 1

    console.log(num)

    if (num > 5) {
      resolve(num)
    } else {
      reject(new Error('5보다 작은 수'))
    }
  }, 2000)
})

// console.log(timer)
// - timer 는 3가지의 상태를 가진다.
// -- 대기 pending : 아직 실행되지 않은 초기 상태
// -- 이행 fulfilled : 작업이 성공적으로 완료
// -- 거부 rejected : 작업이 실패(오류)

// - 작업이 성공 or 실패 일 때 -> then 을 사용하고, promise객체에 붙여서 사용한다.
// - then메소드 chaining

counter //
  .then(function (num) {
    console.log(num + ' : 성공')
    return num
  })
  .then(function (num) {
    console.log(num + 100)
    return (num = num + 100)
  })
  .then(function (num) {
    console.log(num - 50)
  })
  .catch(function (error) {
    console.log(error)
  })
  .then(function () {
    console.log('hahaha')
  })

// console.log('hello~~')

// function paintName() {
//   console.log('내 이름은 프라미스')
// }

// paintName()
