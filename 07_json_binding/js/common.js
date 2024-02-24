const womanList = document.querySelector('.woman_list')
const modelUrl = './db/data.json'
const userUrl = './db/user.json'

async function getModels() {
  const res = await fetch(modelUrl)
  const data = await res.json()
  const items = data.woman
  items.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `<a href="#">
                      <div class="photo">
                        <img src=${item.image} alt="" />
                      </div>
                      <div class="title">${item.title}</div>
                    </a>`
    womanList.append(li)
  })
}

getModels()

const tBody = document.querySelector('.tbl_body')

async function getUsers() {
  const res = await fetch(userUrl)
  const items = await res.json()
  items.forEach(item => {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${item.id}</td>
                    <td>${item.first_name} ${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>${item.gender}</td>
                    <td>${item.ip_address}</td>`
    tBody.append(tr)
  })
}

getUsers()
