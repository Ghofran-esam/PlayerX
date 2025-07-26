const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause text-white"></i>';
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<img src="./assets/img/play-button-arrowhead.png" class="play-icon" style="width:28px">';
  }
});

const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');

audio.addEventListener('loadedmetadata', () => {
  console.log('Duration:', audio.duration);
  durationElem.textContent = formatTime(audio.duration);
  seekBar.max = audio.duration;
});


audio.addEventListener('canplay', () => {
  if (!seekBar.max || seekBar.max === "0") {
    durationElem.textContent = formatTime(audio.duration);
    seekBar.max = audio.duration;
  }
});

audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  currentTimeElem.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
});

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) seconds = '0' + seconds;
  if (minutes < 10) minutes = '0' + minutes;
  return `${minutes}:${seconds}`;
}


const cards = document.querySelectorAll('.card');
const itemsPerPage = 3;
let currentPage = 1;

function showPage(page) {
  cards.forEach((card, index) => {
    card.style.display =
      index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
        ? 'block'
        : 'none';
  });
}

showPage(currentPage);

document.querySelectorAll('.custom-page').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const page = this.dataset.page;
    if (page) {
      currentPage = parseInt(page);
      showPage(currentPage);
    }
  });
});
document.getElementById('nextBtn').addEventListener('click', function (e) {
  e.preventDefault();

  const totalPages =3;
  let nextPage = currentPage + 1;

  if (nextPage > totalPages) {
    nextPage = 1;
  }

  currentPage = nextPage;
  console.log('Total Pages:', totalPages);
  console.log('Current Page after:', currentPage);

  showPage(currentPage);
});
