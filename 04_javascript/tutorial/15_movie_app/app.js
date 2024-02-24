// 293d366334ce5bba8943922cbe2d886b

class PhotoGallery {
  constructor() {
    this.API_KEY = `293d366334ce5bba8943922cbe2d886b`
    this.IMG_PATH = `https://image.tmdb.org/t/p/w1280/`
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
      const html = `<a href="#" target="_blank"><div class="photo"><img src="${this.IMG_PATH}${photo.poster_path}" alt="photo" /></div></a><div class="info"><h3>${photo.title}</h3></div>`
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
    const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc&page=${index}`
    const data = await this.fetchImg(baseURL)
    console.log(data.results)
    this.paintImg(data.results)
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
  }
}

const gallery = new PhotoGallery()
