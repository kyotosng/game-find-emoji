let canvasHeight = 680
let canvasWidth = 1280
let xspeed = 2.8
let yspeed = 2.3
let randomy = Math.floor(Math.random() * 650)
let randomx = Math.floor(Math.random() * 1250);



class Game {
    constructor() {
        this.emojiImage
        this.emoji = new Emoji(randomx, randomy, this.emojiImage, 40, 40, xspeed, yspeed)
       // this.different = new Different(randomx, randomy, this.different.image, 40, 40, xspeed, yspeed)
    }    
    preload () {
        frameRate(30)
        this.differentImage = loadImage('assets/emoji1.png')
        this.emojiImage = loadImage('assets/emoji2.png')
    }
    draw() {
        this.emoji.draw()
        this.different.draw()
    }
}


class Emoji {
    constructor(xposition, yposition, image, width, height, xspeed, yspeed) {
        this.x = xposition
        this.y = yposition
        this.image = image
        this.width = width
        this.height = height
        this.xspeed = xspeed
        this.yspeed = yspeed
    }     
    draw() {
        clear()
        let rad = 100;

        this.x += xspeed;
        this.y += yspeed;

        if (this.x > canvasWidth - rad || this.x <= 0 - rad) {
            xspeed *= -1;
        }
        if (this.y > canvasHeight - rad || this.y <= 0 - rad) {
            yspeed *= -1;
        }
        image(this.image, this.x, this.y, this.width, this.height) 
    }      
} 
 

class Different {
    constructor(xposition, yposition, image, width, height, speed) {
        this.x = xposition
        this.y = yposition
        this.image = image
        this.width = width
        this.height = height
        this.xspeed = xspeed
        this.yspeed = yspeed

    }  
    draw () { // eh um loop, colocar aqui so oq deve ser mostrado constantemente
        clear()
        let rad = 100;
        
        this.x += xspeed;
        this.y += yspeed;

        if (this.x > canvasWidth - rad || this.x <= 0 - rad) {
            xspeed *= -1;
        }
        if (this.y > canvasHeight - rad || this.y <= 0 - rad) {
            yspeed *= -1;
        }
        image(this.image, this.x, this.y, this.width, this.height) 
    }      
}    

