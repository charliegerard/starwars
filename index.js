window.onload = function(){
  var sound = document.getElementById('sound');

  var fadeAudio = setInterval(function () {
        if ((sound.currentTime >= 70) && (sound.volume >= 0.1)) {
            sound.volume -= 0.1;
        }

        if ((sound.currentTime >= 10) && (sound.volume <= 0.1)) {
            sound.volume = 0.0;
        }
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);
}
