window.onload=function(){
var btnBack = document.getElementById('rain');
btnBack.addEventListener('click',function() {
    document.body.classList.toggle('BgClass');
});
}

var audio = new Audio();
audio.src = "file_name.mp3";
audio.play();
