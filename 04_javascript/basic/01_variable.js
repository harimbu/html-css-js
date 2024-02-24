// Variable 변수
// var, let, const
// scope 블럭

// 1. var
// 읽기, 쓰기 가능하다.
// 블럭을 무시한다.
{
  var userName = 'Alice'
  console.log(userName)
}

console.log(userName)

// 2. let
// 읽기, 쓰기 가능하다.
{
  let title = 'html'
  console.log(title)

  title = 'css'
  console.log(title)

  title = 'javascript'
  console.log(title)
}

// console.log(title)

// 3. const
// 상수 - 읽기만 가능. 변하지 않는다.
{
  const subject = 'html'
  console.log(subject)

  // subject = 'css'
  // console.log(subject)
}

// - 변수는 문자와 숫자, $와 _만 사용
// - 예약어는 사용불가
// - 첫글자는 숫자불가

// 4. 변수의 데이타 타입 - 자료형
// 원시데이타(primitive) : string, number, boolean, null, undefined
// object: 싱글데이타를 묶어놓은 데이타
// function : 일급객체(first class object)
// 변수에 담을 수 있다.
// 함수나 메서드의 인자로 넘길 수 있다.
// 함수나 메서드에서 리턴 할 수 있다.

// 문자형 String
{
  const name1 = 'Alice'
  const name2 = 'Alice'
  const name3 = `Alice`

  const firstName = 'Jonh'
  const lastName = 'Snow'
  const fullName = firstName + ' ' + lastName
  console.log(fullName)
  console.log(`${firstName} ${lastName}`)
}

// 숫자형 Number
{
  const num = 10
  const PI = 3.14
  console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)
  console.log(`값은 ${PI}이고, 타입은 ${typeof PI}입니다.`)

  const a = 1 / 0
  const b = -1 / 0
  const c = 'html' / 10
  console.log(a)
  console.log(b)
  console.log(c)
}

// Boolean
{
  const a = true
  const b = false

  const name = 'Alice'
  const age = 16

  console.log(name == 'Alice')
  console.log(age > 20)
}

// null - 존재하지 않는 값
const fall = null
console.log(`${fall}이고 타입은 ${typeof fall}입니다.`)

// undifiend - 값이 할당되지 않음
let winter
console.log(`${winter}이고 타입은 ${typeof winter}입니다.`)

//5. 대화상자 alert, prompt, confirm
{
  // const name = prompt('이름을 입력하세요', '영업팀 ')
  // alert(`안녕하세요 ${name}님, 환영합니다.`)
  // const isCheck = confirm('확인하였습니까?')
  // console.log(isCheck)
}

// 6. 동적 타입 - 자바스크립트는 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
// 이러한 동적 타입 ==> typescript

let word = 'winter'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = 100
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' + 10
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' / '10'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)

// 형변환
{
  // const mathScore = prompt('수학점수는?')
  // const engScorec = prompt('영어점수는 ?')
  // const score = (Number(mathScore) + Number(engScorec)) / 2
  // alert(score)
}

{
  console.log(
    String(1234),
    String(true),
    String(false),
    String(null),
    String(undefined)
  )

  console.log(
    Number('1234'),
    Number('1234hello'),
    Number(true),
    Number(false),
    Number(null),
    Number(undefined)
  )

  console.log(
    Boolean(0),
    Boolean('0'),
    Boolean(''),
    Boolean(' '),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
  )
}
