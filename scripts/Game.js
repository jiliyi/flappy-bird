//游戏类，整个程序的入口
class Game{
    constructor(){
        this.timer  = null;
        this.tick = 16
        this.bird = new Bird()
        this.land = new Land()
        this.producer = new PipePairProducer(-100);
        this.sky = new Sky()
        this.gameOver = false;
    }
    //启动游戏，
    startGame(){
        if(this.isGameOver()){
            window.location.reload()
            
        }
        if(this.timer){
            return;
        }
        //柱子对产生柱子
        this.producer.startProduction()
        this.timer = setInterval(()=>{
            this.land.move(this.tick/1000)
            this.sky.move(this.tick/1000)
            this.bird.move(this.tick/1000)
            this.bird.startSwing()
            this.producer.pair.forEach((pair)=>{
                pair.move(this.tick/1000)
            })
            if(this.isGameOver()){
                this.stopGame()
                this.gameOver = true
            }
            
        },this.tick)
    }
    stopGame(){
        this.bird.stopSwing()
        this.producer.stopProduction();
        clearInterval(this.timer);
        this.timer = null;
    }
    //辅助函数，检测ab物体是否碰撞
    isCollision(a,b){
        
    }
    //判断游戏是否结束
    isGameOver(){
        if(this.bird.top <=0 || this.bird.top >= gameHeight - landHeight -birdHeight){
            return true
        }
        for(let i = 0 ; i < this.producer.pair.length;i++){

        }
    }
    //注册关联键盘事件
    regEvent(){
        window.onkeydown = (e)=>{
            console.log(e.key)
            if(e.key === 'Enter'){
                if(this.timer){
                    this.stopGame()
                }else{
                this.startGame()

                }
            }else if(e.key === ' '){
                this.bird.jump()
            }
        }
    }

}

var g = new Game()
g.regEvent()