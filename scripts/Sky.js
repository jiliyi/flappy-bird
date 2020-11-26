const skyDom = document.querySelector('.sky');
const skyStyle = getComputedStyle(skyDom);
const left = parseFloat(skyStyle.left);
const skyTop = parseFloat(skyStyle.top);
const width = parseFloat(skyStyle.width);
const height = parseFloat(skyStyle.height)
class Sky extends Rectangle{
    constructor(){
        super(width,height,left,skyTop,-50,0,skyDom)
    }
    onMove(){
        if(Math.abs(this.left)>= width/2){
            this.left = 0
        }
    }
}