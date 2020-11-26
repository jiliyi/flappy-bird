class Rectangle{
    constructor(width,height,left,top,xSpeed,ySpeed,dom){
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
    }
    render(){
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }
    move(durtion){
        const xDis = this.xSpeed * durtion;
        const yDis = this.ySpeed * durtion;
        this.left = this.left + xDis;
        this.top = this.top + yDis;
        if(this.onMove){
            this.onMove()
        }
        this.render()
    }
}