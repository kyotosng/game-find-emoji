

function setup() {
    createCanvas(1270, 605);
    background(255, 204, 0)
}

function preload() {
    game.preload()
}

function draw() {
    game.draw()

}
function mousePressed() {
    game.different.clicked()
}

const game = new Game()

