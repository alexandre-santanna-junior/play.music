const songName = document.querySelector('.musica');
const bandName = document.querySelector('.banda');
const song = document.querySelector('.audio');
const capa = document.querySelector('.capa');
const play = document.querySelector('.play');
const voltar = document.querySelector('.anterior');
const pular = document.querySelector('.proximo');
const reproduçao = document.querySelector('.reproduçao');

const incubus = {
  songName: 'Wish You Were Here',
  bandName: 'Incubus',
  file: 'incubus',
  capaFile: 'incubus'
};
const Audioslave = {
  songName: 'Like a Stone',
  bandName: 'Audioslave',
  file: 'audioslave',
  capaFile: 'audioslave'
};
const Shinedown = {
  songName: 'Second Chance',
  bandName: 'Shinedown',
  file: 'shine',
  capaFile: 'shine'
};

let isPlaying = false;

const playlist = [incubus, Audioslave, Shinedown];
let index = 0;

function playSong() {
  play.querySelector('.bi').classList.remove('bi-play-circle-fill');
  play.querySelector('.bi').classList.add('bi-pause-circle-fill');
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
  play.querySelector('.bi').classList.add('bi-play-circle-fill');
  song.pause();
  isPlaying = false;
}

function playPauseDecide() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
  capa.src = `imagem/${playlist[index].capaFile}.jpg`;
  song.src = `audio/${playlist[index].file}.mp3`;
  songName.innerHTML = playlist[index].songName;
  bandName.innerHTML = playlist[index].bandName;
}

function voltarSong(){
   if(index === 0){
         index = playlist.length;
      }else {
         index -= 1;
      }
      initializeSong();
      playSong();
}

function pularSong(){
   if(index === playlist.length - 1){
         index = 0;
      }else {
         index += 1;
      }
      initializeSong();
      playSong();
}
function updateBarra(){
   const largura = (song.currentTime/song.duration)*100;
   reproduçao.style.setProperty('--reproduçao', `${largura}%`);
}

initializeSong();

play.addEventListener('click', playPauseDecide);
voltar.addEventListener('click', voltarSong);
pular.addEventListener('click', pularSong)
song.addEventListener('timeupdate', updateBarra);