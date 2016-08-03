/**
 * Created by Sorzen on 2016/6/28.
 */
function Sky(pragram){
    this.options = {
        frame:0,
        x:0,
        y:0
    }
    extend(this.options,pragram);
    extend(Sky.prototype,{
        draw:function(){
            this.options.ctx.drawImage(this.options.img,this.options.x,this.options.y,this.options.img.width,this.options.img.height);
        }
    })
}