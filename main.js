const game = new Game()
let song;
var counter = 1;
var timeLeft = 15;
let interval;


function setup() {
    createCanvas(1270, 605);
    background(255, 204, 0)

    var timer = select('#timer');
    timer.html(timeLeft);

    function timeIt() {
        timeLeft -= counter;
        timer.html(timeLeft);
    }
    game.interval = setInterval(timeIt, 1000)
    timer.position(1175, 590);
    
    
    
}

function preload() {
    game.preload()
    song = loadSound('assets/75021_Mast_Impossible_Mission__Version_.mp3');
    game.snooze = loadImage('assets/snooze.png')
}

function draw() {
    game.draw() 
        if (!song.isPlaying()) {
            song.play() 
            
        }
        if (timeLeft == 0) {
            image(game.snooze, 0, 0, 1270, 605)
            timeLeft = 0
            counter = 0
            
        }
}
function mousePressed() {
    game.different.clicked()
}



