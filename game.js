let canvasHeight = 605
let canvasWidth = 1270


class Game {
    constructor() {
        this.differentImage
        this.emojiImage
        this.emoji = new Emoji() 
        this.different = new Different()
        this.emojis = [];

       for (let i = 1; i <= 10; i++) {
           this.emojis.push(new Emoji())
        }
        console.log(this.emojis)
    }    
    preload () {
        frameRate(30)
        this.emoji.preload()   
        this.different.preload()
        this.emojis.forEach(function(emoji) {
            emoji.preload()
        })
        
    }
    draw() {   
        this.different.draw()
        this.emojis.forEach(function(emoji) {
            emoji.draw()  
            console.log(emoji.x, emoji.y)
        })
    }    
    
       
}

class Emoji {
    constructor() {
        this.x = Math.floor(Math.random() * 1230);
        this.y = Math.floor(Math.random() * 565);
        this.width = 60
        this.height = 60
        this.xSpeed = 2.8
        this.ySpeed = 2.8
        this.emojiImage
        this.rad = 60;
    }
    preload() {
        this.emojiImage = loadImage('assets/standard.png')
    
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
       // console.log(`emoji x: ${this.x}`)
       // console.log(`emoji y: ${this.y}`)
        
        image(this.emojiImage, this.x, this.y, this.width, this.height) 
    }  
    
    mousePressed() {
        this.emojiImage.clicked()
    }
   
            
          
} 
 

class Different {
    constructor() {
        this.x = Math.floor(Math.random() * 1230);
        this.y = Math.floor(Math.random() * 565);
        this.width = 60
        this.height = 60
        this.xSpeed = 2.8
        this.ySpeed = 2.8
        this.differentImage
        this.rad = 60
        this.youWin
        this.clickedEmoji = false

    }  
    preload() {
        this.differentImage = loadImage('assets/different.png') 
        this.youWin = loadImage('assets/win.png')
        
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

       // console.log(`diff x: ${this.x}`)
       // console.log(`diff y: ${this.y}`)
        image(this.differentImage, this.x, this.y, this.width, this.height) 

        if (this.clickedEmoji === true) {
            image(this.youWin, 0, 0, 1270, 605)    
        }

    
    }
    clicked() {
        
        //loadImage('assets/win.png')
        if (dist(mouseX, mouseY, this.x, this.y) < this.width) {
           this.clickedEmoji = true;
          
           
        }
        
    }
    
    
              
}    

