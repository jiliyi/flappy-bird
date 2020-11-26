const birdDom = document.querySelector('.bird');
const birdStyle = getComputedStyle(birdDom);
const birdLeft = parseFloat(birdStyle.left);
const birdTop = parseFloat(birdStyle.top);
const birdWidth = parseFloat(birdStyle.width);
const birdHeight = parseFloat(birdStyle.height)
const gameHeight = parseInt(document.querySelector('.game').clientHeight)
class Bird extends Rectangle{
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom)
        this.g = 1500;//重力加速度
        this.maxY = gameHeight-landHeight-birdHeight//小鸟最大纵坐标；
        this.swingStatus = 1;//小鸟翅膀状态控制；
        this.timer = null;//小鸟翅膀切换的定时器
    }
    //重写move方法，精细控制小鸟的加速下落
    move(durtion){
        super.move(durtion)
        this.ySpeed+=this.g*durtion
    }
    onMove(){
        if(this.top<0){
            this.top = 0
        }else if(this.top >  this.maxY){
                this.top =  this.maxY
        }
    }
    jump(){
        this.ySpeed=-400;//小鸟向上跳跃的方法；
    }
    startSwing(){
        if(this.timer){
            return;//避免重复开启定时器；
        }
        this.timer = setInterval(()=>{
            this.swingStatus = (this.swingStatus + 1)%3+1;
            this.dom.className = `bird swing${this.swingStatus}`
        },200)
        
    }
    stopSwing(){
        clearInterval(this.timer)
        this.timer = null;
    }
}
