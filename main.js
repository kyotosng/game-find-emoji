let song;

function setup() {
    createCanvas(1270, 605);
    background(255, 204, 0)
    
}

function preload() {
    game.preload()
    song = loadSound('assets/75021_Mast_Impossible_Mission__Version_.mp3');
}

function draw() {
    game.draw() 
        if (!song.isPlaying()) {
            song.play() 
            
        }
    

}
function mousePressed() {
    game.different.clicked()
}

const game = new Game()

