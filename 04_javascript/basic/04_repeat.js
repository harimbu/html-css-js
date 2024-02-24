// 반복문

// while문
{
  let i = 3

  while (i > 0) {
    console.log(`i는 ${i}`)
    i--
  }
}

// for문
{
  for (let i = 3; i > 0; i--) {
    console.log(i)
  }
}

{
  for (let i = 1; i <= 3; i++) {
    console.log(i)
  }
}

const day = ['월', '화', '수', '목', '금']

for (let i = 0; i < day.length; i++) {
  console.log(day[i])
}

// break : 반복문을 종료
// continue : 실행문을 무시하고 증감연산 실행

// 0 ~ 10 -> 0에서 7까지만 출력: break
{
  for (let i = 0; i <= 10; i++) {
    if (i > 7) {
      break
    }
    console.log(i)
  }
}

// 0 ~ 10 -> 홀수 출력 : continue
{
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue
    }
    console.log(i)
  }
}

// 연습문제
// while문으로 6단 출력

{
  let i = 1

  while (i < 10) {
    console.log(`6 * ${i} = ${6 * i}`)
    i++
  }
}

// for문으로 구구단 출력
{
  for (let i = 1; i <= 9; i++) {
    console.log(`${i}단 시작-------`)
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`)
    }
  }
}

//  1~25입력된 5행 5열의 테이블을 문서에 출력
{
  let num = 1
  let tbl = '<table border = 1>'

  for (let i = 1; i <= 5; i++) {
    tbl += '<tr>'
    for (let j = 1; j <= 5; j++) {
      tbl += `<td>${num}</td>`
      num++
    }
    tbl += '<tr>'
  }
  tbl += '</table>'

  console.log(tbl)
  // document.write(tbl)
  document.querySelector('.box').innerHTML = tbl
}
