let canvasHeight = 605
let canvasWidth = 1270


class Game {
    constructor() {
        
        this.emojiImage
        this.emoji = new Emoji() 
        this.different = new Different()
        this.emojis = [];
        this.differentImage
        

       for (let i = 1; i <= 700; i++) {
           this.emojis.push(new Emoji())
        }

        this.emojis.push(this.different)

        for (let i = 1; i <= 200; i++) {
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
        clear() 
        
        this.emojis.forEach(function(emoji) {
            emoji.draw()  
            console.log(emoji.x, emoji.y)
        })

        if (this.different.clickedEmoji === true) {
            image(this.different.youWin, 0, 0, 1270, 605)    
        }
        
    }    
    
       
}

class Emoji {
    constructor() {
        this.x = Math.floor(Math.random() * 1230);
        this.y = Math.floor(Math.random() * 565);
        this.width = 80
        this.height = 80
        this.xSpeed = Math.floor(Math.random() * 4) * (Math.random() < 0.5 ? -1 : 1)
        this.ySpeed = Math.floor(Math.random() * 4) * (Math.random() < 0.5 ? -1 : 1)
        this.emojiImage
        
    }
    preload() {
        this.emojiImage = loadImage('assets/thinking.png')
    
    }     
    draw() {
       
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if (this.x > canvasWidth - this.width || this.x <= 0) {
            this.xSpeed *= -1;
        }
        if (this.y > canvasHeight - this.width || this.y <= 0) {
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
        this.width = 115
        this.height = 115
        this.xSpeed = 2.8
        this.ySpeed = 2.8
        this.differentImage
        this.youWin
        this.clickedEmoji = false

    }  
    preload() {
        this.youWin = loadImage('assets/win.png')
        this.differentImage = loadImage('assets/pikachu2.png') 
        
        
    }
    draw () { // eh um loop, colocar aqui so oq deve ser mostrado constantemente


        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvasWidth - this.width || this.x <= 0) {
            this.xSpeed *= -1;
        }
        if (this.y > canvasHeight - this.width || this.y <= 0) {
            this.ySpeed *= -1;
        }

       // console.log(`diff x: ${this.x}`)
       // console.log(`diff y: ${this.y}`)
        image(this.differentImage, this.x, this.y, this.width, this.height) 


    
    }
    clicked() {
        
        //loadImage('assets/win.png')
        if (dist(mouseX, mouseY, this.x, this.y) < this.width) {
           this.clickedEmoji = true;
          
           
        }
        
    }
    
    
              
}    

