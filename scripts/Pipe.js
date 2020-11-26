const gameWidth = parseInt(document.querySelector('.game').clientWidth)
const pipeLeft = gameWidth;
const gameDom = document.querySelector('.game');
class Pipe extends Rectangle{
    constructor(height,top,xSpeed,dom){
        super(52,height,pipeLeft,top,xSpeed,0,dom)
    }
    onMove(){
        if(this.left<-52){
            this.dom.remove();
        }
    }
}
function getRandom(max,min){
    return Math.floor(Math.random() * (max-min) + min)
}
class PipePair{
    constructor(xSpeed){
        this.distance = 150;//两水管之间的距离
        this.minHeight = 80;//随机水管的最低高度
        this.maxHeight = gameHeight - landHeight-this.minHeight - this.distance;
        

        const downDom = document.createElement('div');
        downDom.className = 'pipe down';
        const downHeight =  getRandom(this.maxHeight,this.minHeight)
        this.downPipe = new Pipe(downHeight,0,xSpeed,downDom)

        const upHeight = gameHeight - landHeight - downHeight - this.distance
        const upDom = document.createElement('div');
        upDom.className = 'pipe up';
        const upTop = gameHeight - landHeight - upHeight;
        this.upPipe = new Pipe(upHeight,upTop,xSpeed,upDom);
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }

    //两个柱子同时移动
    move(durtion){
        this.upPipe.move(durtion);
        this.downPipe.move(durtion)
    }
    get useless(){
        return this.downPipe.left <= -this.downPipe.width;
    }
}
//生产柱子的类
class PipePairProducer{
    constructor(speed){
        this.pair = [];
        this.speed = speed;
        this.timer = null;
    }
    startProduction(){
        if(this.timer){
            return;
        }
        this.timer = setInterval(()=>{
           
            this.pair.push(new PipePair(this.speed))

            //移除得不到的柱子
            for(let i = 0 ; i < this.pair.length;i++){
                let pair = this.pair[i];
                if(pair.useless){
                    this.pair.splice(i,1);
                    i--;
                }
            }
        },1500)

    }
    stopProduction(){
        clearInterval(this.timer);
        this.timer = null;
    }
}
