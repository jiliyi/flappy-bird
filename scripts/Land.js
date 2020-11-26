const landDom = document.querySelector('.land');
const landStyle = getComputedStyle(landDom);
const landLeft = parseFloat(landStyle.left);
const landTop = parseFloat(landStyle.top);
const landWidth = parseFloat(landStyle.width);
const landHeight = parseFloat(landStyle.height)
class Land extends Rectangle{
    constructor(){
        super(landWidth,landHeight,landLeft,landTop,-100,0,landDom)
    }
    onMove(){
        if(Math.abs(this.left)>= landWidth/2){
            this.left = 0
        }
    }
}
var land = new Land()
setInterval(function(){
    land.move(16/1000)
},16)
