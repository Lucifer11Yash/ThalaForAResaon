function checkNameAndYear() {
    var name = document.getElementById('Name').value;
    var year = document.getElementById('Year').value;

    if (name.length === 7) {
        var sum = calculateSum(year);

        if (sum === 7) {
            document.getElementById('result').innerHTML = 'You are a "ThallaForAReason" !!';
            playAudio();
            return;
        }
    }

    document.getElementById('result').innerHTML = 'Sorry, keep trying!';
}

function calculateSum(year) {
    var sum = 0;
    for (var index = 0; index < year.length; index++) {
        sum +=  parseInt(year[index], 10);
    }
    return sum;
}

function playAudio() {
    var audio = new Audio('asset/music.mp3');
    document.body.appendChild(audio);
    audio.play();
}

function tryAgain() {
    document.getElementById('Name').value = '';
    document.getElementById('Year').value = '';
    document.getElementById('result').innerHTML = '';
    var audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}

function shareWA() {
    var shareLink = '';
    window.open('https://wa.me/?text=' + encodeURIComponent(shareLink));
}

function shareIG() {
    var shareLink = '';
    window.open('https://www.instagram.com/?url=' + encodeURIComponent(shareLink));
}