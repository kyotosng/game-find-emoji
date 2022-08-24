let canvasHeight = 605
let canvasWidth = 1270
let randomY = Math.floor(Math.random() * 565)
let randomX = Math.floor(Math.random() * 1230);




class Game {
    constructor() {
        this.emojiImage
        this.emoji = new Emoji(randomX, randomY)
        this.different = new Different(randomX, randomY)
        this.emojis = [];

       // for (let i = 1; i <= 2; i++) {
       //    this.emojis.push(this.emoji)
       // }
       // console.log(this.emojis)
        

    }    
    preload () {
        frameRate(30)
        this.emoji.preload()
        this.different.preload()
    }
    draw() {
        this.emoji.draw()
        this.different.draw()

       // this.emojis.forEach(function (emoji) {
      //      emoji.draw()
       // })
    }    
}


class Emoji {
    constructor(xPosition, yPosition) {
        this.x = xPosition
        this.y = yPosition
        this.width = 60
        this.height = 60
        this.xSpeed = 8
        this.ySpeed = 8
        this.emojiImage
        this.rad = 60;

    }
    preload() {



        this.emojiImage = loadImage('assets/emoji2.png')
    }     
    draw() {
        clear()
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if (this.x > canvasWidth - this.rad || this.x <= 0) {
            this.xSpeed *= -1;
        }
        if (this.y > canvasHeight - this.rad || this.y <= 0) {
            this.ySpeed *= -1;
        }
        

        
        image(this.emojiImage, this.x, this.y, this.width, this.height) 
    }      
} 
 

class Different {
    constructor(xPosition, yPosition) {
        this.x = xPosition
        this.y = yPosition
        this.width = 60
        this.height = 60
        this.xSpeed = 2.8
        this.ySpeed = 2.3
        this.differentImage
        this.rad = 60

    }  
    preload() {
        this.differentImage = loadImage('assets/emoji1.png')
    }
    draw () { // eh um loop, colocar aqui so oq deve ser mostrado constantemente
        clear()
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvasWidth - this.rad || this.x <= 0) {
            this.xSpeed *= -1;
        }
        if (this.y > canvasHeight - this.rad || this.y <= 0) {
            this.ySpeed *= -1;
        }
        image(this.differentImage, this.x, this.y, this.width, this.height) 
    }      
}    

