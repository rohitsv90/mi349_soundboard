var button1 = document.getElementById("sound-1");
var button2 = document.getElementById("sound-2");
var button3 = document.getElementById("sound-3");

button1.addEventListener('click', function() {
    var audio1 = document.getElementById("audio-1");
    audio1.play();
})

button1.addEventListener('mouseenter', function() {
    var audio1 = document.getElementById("audio-1");
    audio1.play();
})

button2.addEventListener('click', function() {
    var audio2 = document.getElementById("audio-2");
    audio2.play();
})

button2.addEventListener('mouseenter', function() {
    var audio2 = document.getElementById("audio-2");
    audio2.play();
})

button3.addEventListener('click', function() {
    var audio3 = document.getElementById("audio-3");
    audio3.play();
})

button3.addEventListener('mouseenter', function() {
    var audio3 = document.getElementById("audio-3");
    audio3.play();
})