// String Object
// 문자형 데이타를 객체로 취급

{
  const str = 'you he she they we he me'
  console.log(str.length)
  console.log(str.charAt(4)) // 인덱스에 해당하는 문자 반환
  console.log(str.indexOf('he')) // 제일 먼저 일치하는 문자의 인덱스 반환
  console.log(str.lastIndexOf('he')) // 오른족부터....
  console.log(str.lastIndexOf('cat')) // 없으면 -1 반환
  console.log(str.match('he')) // 제일 먼저 찾은 문자를 반환
  console.log(str.match('cat')) // 없으면 null 반환
  console.log(str.replace('they', 'html'))
  console.log(str.search('she')) // 문자를 찾고 인덱스 반환
  console.log(str.slice(4, 10)) //a에서 자르고, b이후를 자르고 남은 문자를 반환
  console.log(str.substring(4, 10)) // a에서 b이전 구간의 문자를 반환
}

// 문자열를 배열로 만들기
{
  const str = 'html,css,javascript'
  const result = str.split(',')
  console.log(result)
}

// 대소문자
{
  const str = 'hello'
  const str2 = 'world'
  console.log(str.toUpperCase())
  console.log(str2.toLowerCase())
}

// 문자열 합치기
{
  const str = 'hello'
  const result = str.concat(' world')
  console.log(result)
}

//공백 제거
{
  const str = ' hello world '
  const result = str.trim()
  console.log(str)
  console.log(result)
}

// 방문자의 이름을 대문자로 출력
// 전화번호의 뒷자리 4개를 *로 출력
{
  // const name = prompt('당신의 영문이름은?', '')
  // const phone = prompt('당신의 연락처는?', '')
  // const upperName = name.toUpperCase()
  // const result = phone.substring(0, phone.length - 4) + '****'
  // document.write(upperName, '<br>')
  // document.write(result, '<br>')
}
