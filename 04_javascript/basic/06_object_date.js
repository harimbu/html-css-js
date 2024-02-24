// Date Object
{
  const today = new Date()
  console.log(today)
  const wday = new Date('2022/11/20')
  console.log(wday)
}

{
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()
  // const today = year + '년' + (month + 1) + '월' + date + '일'
  const today = `${year}년 ${month + 1}월 ${date}일`
  document.write(today)
}

{
  // getTime() : 1970년 1월 1일 부터 경과된 시간을 밀리초로 표기
  // 현재 날짜 부터 특정날짜 까지 며칠이 남았는지 구하는 형식
  // 남은일수(밀리초) = 특정날짜(밀리초) - 현재 날짜(밀리초)

  // Math.ceil : 소수점 첫째 자리에서 무조건 올림하여 정수 반환

  // 1초 - 1000
  // 1분 - 1000 * 60
  // 1시간 - 1000 * 60 * 60
  // 1일 - 1000 * 60 * 60 * 24

  // 현재날짜 부터 연말까지 남은 일수 구하기
  const today = new Date()
  const nowYear = today.getFullYear()
  const endDate = new Date(nowYear, 11, 31)
  const remainSec = endDate.getTime() - today.getTime()
  const result = Math.ceil(remainSec / (1000 * 60 * 60 * 24))

  console.log(result)
}
