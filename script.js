var musicPlayer = document.getElementById('musicPlayer');
var ctx = musicPlayer.getContext('2d');

ctx.moveTo(0, 0);
var grd = ctx.createLinearGradient(0, 200, 600, 200);
grd.addColorStop(0, "#FF007F");
grd.addColorStop(1, "blue");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 400);

ctx.moveTo(10, 50);
var radius = '50';

ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
ctx.fillRect(10, 20, 480, 360);


var play = document.getElementById('play');
var playButton = document.getElementById('playpause');
var pause = document.getElementById('pause');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var musicTime = document.getElementById('musicTime');
var volumem = document.getElementById('volumeCont');
var startTime = document.getElementById('startTime');
var endTime = document.getElementById('endTime');
var thumb = document.getElementById('thumb');
var songs = ['songs/XXXTENTACION_Changes.mp3', 'songs/Jocelyn_Flores.mp3', 'songs/Billie Eilish, Khalid - lovely.mp3'];
var songnames = ['XXXTENTACION_Changes', 'Jocelyn_Flores', 'Billie Eilish, Khalid - lovely']
var poster = ['Posters/Poster1.jpg', 'Posters/Poster2.jpg', 'Posters/Poster3.jpg'];
var audio = new Audio();
var currentSong = 0;
var musName = document.getElementById('musicName');
var ses = document.getElementById('ses');
window.onload = playSong();

function playSong() {
    audio.src = songs[currentSong];
    musName.textContent = songnames[currentSong];
    audio.play();


}

pause.style.display = 'none'

function playAndPause() {
    if (audio.paused) {
        audio.play();
        play.style.display = 'none';
        pause.style.display = 'block';
        play.style.paddingLeft = "12px";
        pause.style.paddingLeft = "12px";

    } else {
        audio.pause();
        play.style.display = 'block';
        pause.style.display = 'none';
        play.style.paddingLeft = "12px";
        pause.style.paddingLeft = "12px";
    }
}

audio.addEventListener('timeupdate', function () {
    var position = audio.currentTime / audio.duration;
    musicTime.value = position * 100;
    

    convertTime(Math.round(audio.currentTime));

if(audio.ended){
    next()
}

})

function convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    startTime.textContent = min + ':' + sec;
    totalTime(Math.round(audio.duration))
}

function totalTime(seconds) {

    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    endTime.textContent = min + ':' + sec;

}

next.addEventListener('click', function () {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    playSong();
    play.style.display = 'none';
    pause.style.display = 'block';
    play.style.paddingLeft = "12px";
    pause.style.paddingLeft = "12px";
    thumb.src = poster[currentSong]
})

prev.addEventListener('click', function () {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    playSong();
    play.style.display = 'none';
    pause.style.display = 'block';
    play.style.paddingLeft = "12px";
    pause.style.paddingLeft = "12px";
    thumb.src = poster[currentSong]
})

volumem.addEventListener('mousemove', function(){
    audio.volume = volumem.value / 100;

})




