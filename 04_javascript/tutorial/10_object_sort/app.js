const movies = [
  {
    title: '언더워터',
    date: '2020.05.27',
    rating: 5.8,
  },
  {
    title: '위대한 쇼맨',
    date: '2017.12.20',
    rating: 8.9,
  },
  {
    title: '프리즌 이스케이프',
    date: '2020.05.06',
    rating: 7.4,
  },
  {
    title: '카페 벨에포크',
    date: '2020.05.20',
    rating: 9,
  },
  {
    title: '미스비헤이비어',
    date: '2020.05.27',
    rating: 8.2,
  },
  {
    title: '그집',
    date: '2020.05.27',
    rating: 7.9,
  },
  {
    title: '더 플랫폼',
    date: '2020.05.13',
    rating: 6.8,
  },
  {
    title: '패왕별희 디 오리지널',
    date: '2020.05.01',
    rating: 9.3,
  },
];

const list = document.querySelector('.movie_list');
const sortBtns = document.querySelectorAll('.sort_btns button');

// let desc = false;
// const sortArry = (arry, sort) => {
//   if (desc) {
//     arry.sort((a, b) => {
//       if (a[sort] < b[sort]) return 1;
//       if (a[sort] > b[sort]) return -1;
//     });
//     desc = false;
//   } else {
//     arry.sort((a, b) => {
//       if (a[sort] < b[sort]) return -1;
//       if (a[sort] > b[sort]) return 1;
//     });
//     desc = true;
//   }
//   return 0;
// };

let desc = false;
const sortArry = (array, sort, desc) => {
  array.sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  if (desc) array.reverse();
  return array;
};

sortBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let name = e.target.className;

    sortArry(movies, name, desc);
    showList();
    desc = !desc;
  });
});

// titleBtn.addEventListener('click', () => {
//   sortArry(movies, 'title', order);
//   showList();
//   order = !order;
// });

// dateBtn.addEventListener('click', () => {
//   sortArry(movies, 'date');
//   showList();
// });

// rateBtn.addEventListener('click', () => {
//   sortArry(movies, 'rating');
//   showList();
// });

const showList = () => {
  let movieList = movies.map((item) => {
    return `<div class="movie">
              <div>${item.title}</div>
              <div>${item.date}</div>
              <div>${item.rating}</div>
            </div>`;
  });

  movieList = movieList.join('');
  list.innerHTML = movieList;
};

showList();
