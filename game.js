let canvasHeight = 680
let canvasWidth = 1280
let randomy = Math.floor(Math.random() * 650)
let randomx = Math.floor(Math.random() * 1250);



class Game {
    constructor() {
        this.emojiImage
        this.emoji = new Emoji(randomx, randomy)
        this.different = new Different(randomx, randomy)

    }    
    preload () {
        frameRate(30)
        this.emoji.preload()
        this.different.preload()
    }
    draw() {
        this.emoji.draw()
        this.different.draw()
    }
}


class Emoji {
    constructor(xposition, yposition) {
        this.x = xposition
        this.y = yposition
        this.width = 40
        this.height = 40
        this.xspeed = 2.8
        this.yspeed = 2.3
        this.emojiImage
        this.rad = 100;

    }
    preload() {



        this.emojiImage = loadImage('assets/emoji2.png')
    }     
    draw() {
        clear()
        
        this.x += this.xspeed;
        this.y += this.yspeed;

        if (this.x > canvasWidth - this.rad || this.x <= 0 - this.rad) {
            this.xspeed *= -1;
        }
        if (this.y > canvasHeight - this.rad || this.y <= 0 - this.rad) {
            this.yspeed *= -1;
        }

        
        image(this.emojiImage, this.x, this.y, this.width, this.height) 
    }      
} 
 

class Different {
    constructor(xposition, yposition) {
        this.x = xposition
        this.y = yposition
        this.width = 40
        this.height = 40
        this.xspeed = 2.8
        this.yspeed = 2.3
        this.differentImage
        this.rad = 100

    }  
    preload() {
        this.differentImage = loadImage('assets/emoji1.png')
    }
    draw () { // eh um loop, colocar aqui so oq deve ser mostrado constantemente
        clear()
        this.x += this.xspeed;
        this.y += this.yspeed;

        if (this.x > canvasWidth - this.rad || this.x <= 0 - this.rad) {
            this.xspeed *= -1;
        }
        if (this.y > canvasHeight - this.rad || this.y <= 0 - this.rad) {
            this.yspeed *= -1;
        }
        image(this.differentImage, this.x, this.y, this.width, this.height) 
    }      
}    

