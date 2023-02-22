const usersDB = [
  {
    id:1,
    name: 'Mathias',
    time: '12:40am',
    comment: 'Hello friend! i just arrived from lagos, can we meet up ?',
  },
  
  {
    id:2,
    name: 'Kabala',
    time: '12:40am',
    comment: 'My first experience at torbita school'
  },

  {
    id:3,
    name: 'Chinedu',
    time: '06:48am',
    comment: 'Good morning everyone! How was your night ?'
  },

  {
    id:4,
    name: 'Ofegzy',
    time: '05:30am',
    comment: 'Coding is awesome!'
  },

  {
    id:5,
    name: 'Mr Musa',
    time: '12:40am',
    comment: "Let's have fun"
  },

  {
    id:6,
    name: 'Gustavo',
    time: '12:40am',
    comment: 'No sleep for the wicked'
  },

  {
    id:7,
    name: 'Rabiu',
    time: '12:40am',
    comment: "I'm good to go"
  },

  {
    id:8,
    name: 'Fuje',
    time: '12:40am',
    comment: 'How are you doing today'
  },

  {
    id:9,
    name: 'Columbus',
    time: '12:40am',
    comment: 'How are you doing today'
  },
];

const displayFeed = document.getElementById('displayFeed');

let html = '';

usersDB.map((user, index,array) => {
  html =
    html +
      `<div class="my-timeline-feed-grp">
        <div class="my-timeline-feed-grp-col-1">
          <img src="./Image/html,css,js.jpeg" alt="">
        </div>
        <div class="my-timeline-feed-grp-col-2">
          <div class="my-timeline-feed-grp-col-2-row-1">${user.name}</div>
          <div class="my-timeline-feed-grp-col-2-row-2">${user.time}</div>
          <div class="my-timeline-feed-grp-col-2-row-3">${user.comment}</div>
        </div>
      </div>`;
});

displayFeed.innerHTML = html;