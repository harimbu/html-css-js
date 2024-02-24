// 563492ad6f91700001000001c5e6480855e74c238b20eac4d3d528f9
// https://api.pexels.com/v1/curated?per_page=1
// https://api.pexels.com/v1/search?query=nature&per_page=1

class PhotoGallery {
  constructor() {
    this.API_KEY = `563492ad6f91700001000001c5e6480855e74c238b20eac4d3d528f9`
    this.logo = document.querySelector('.logo a')
    this.galleryDiv = document.querySelector('.gallery')
    this.form = document.querySelector('form')
    this.loadMore = document.querySelector('.load_more')
    this.pageIndex = 1
    this.query = ''
    this.init()
  }

  paintImg(photos) {
    photos.forEach(photo => {
      const item = document.createElement('div')
      item.classList.add('item')
      const html = `<a href="#"><div class="photo"><img src="${photo.src.medium}" alt="photo" /></div></a><div class="info"><h3>${photo.photographer}</h3></div>`
      item.innerHTML = html
      this.galleryDiv.appendChild(item)
    })
  }

  async fetchImg(baseURL) {
    const res = await fetch(baseURL, {
      headers: {
        Authorization: this.API_KEY
      }
    })
    const data = await res.json()
    return data
  }

  async getImg(index) {
    const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`
    const data = await this.fetchImg(baseURL)
    this.paintImg(data.photos)
  }

  async getSearchImg(query) {
    this.galleryDiv.innerHTML = ''
    this.pageIndex = 1
    this.getMoreImg(query)
  }

  async getMoreImg(query) {
    const baseURL = `https://api.pexels.com/v1/search/?page=${this.pageIndex}&per_page=12&query=${query}`
    const data = await this.fetchImg(baseURL)
    this.paintImg(data.photos)
  }

  init() {
    this.getImg(this.pageIndex)

    this.form.addEventListener('submit', e => {
      e.preventDefault()
      const searchValue = e.target.querySelector('input').value
      this.query = searchValue
      this.getSearchImg(searchValue)
      this.form.reset()
    })

    this.loadMore.addEventListener('click', e => {
      e.preventDefault()
      this.pageIndex++
      if (this.query === '') {
        this.getImg(this.pageIndex)
      } else {
        this.getMoreImg(this.query)
      }
    })

    this.logo.addEventListener('click', e => {
      e.preventDefault()
      this.pageIndex = 1
      this.galleryDiv.innerHTML = ''
      this.getImg(this.pageIndex)
    })
  }
}

const gallery = new PhotoGallery()
