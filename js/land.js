/**
 * Created by Sorzen on 2016/6/28.
 */
/**
 * Created by Sorzen on 2016/6/28.
 */
function Land(pragram){
    this.options = {
        frame:0,
        x:0,
        y:0,
        pattern:0
    }
    extend(this.options,pragram);
    extend(Land.prototype,{
        //draw:function(){
        //    console.log(1);
        //    this.options.ctx.save();
        //    //context.strokeStyle = context.createPattern(gravel, "repeat");//÷ÿ∏¥ÃÓ≥‰
        //    this.options.pattern = this.options.ctx.createPattern(this.options.img,"repeat");
        //    //this.options.ctx.drawImage(this.options.pattern,0,488,800,112);
        //    //this.options.ctx.strokeStyle = this.options.ctx.createPattern(this.options.img,"repeat");
        //    this.options.ctx.fillStyle = this.options.pattern;
        //
        //    this.options.ctx.translate(0,488);
        //    this.options.ctx.fillRect(0,0,800,112);
        //
        //    //this.options.ctx.stroke();
        //    this.options.ctx.restore();
        //
        //}

        draw:function(){
            //console.log(1);
            this.options.ctx.drawImage(this.options.img,this.options.x,488,this.options.img.width,this.options.img.height);
        },
        update:function(){
            //console.log(this.options.img.width * 3 - this.options.cvs.width);
            //console.log(this.options.x);
            this.options.x += this.options.speed;
            if(this.options.x<-this.options.img.width){
                this.options.x = this.options.img.width*3-5;
                //console.log(this.options.x);

                //console.log(2);
            }
        }
    })
}