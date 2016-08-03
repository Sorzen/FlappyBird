/**
 * Created by Sorzen on 2016/6/27.
 */
function Pipe(pragram) {
    this.options = {
        frame: 0,
        direction: 0,
        clipW: 52,
        clipH: 45,
        x: 100,
        y: 30,
        width: 52,
        height: 45,
        speedX: -4,
        speedPlus: 1,
    }
    extend(this.options, pragram);
    this.options.centerDis = 150;//量管道间间距
    this.options.height = Math.random() * 150 + 20;//随机生成管道高度，最高170 ，最低20
    this.options.upY = this.options.height - this.options.upImg.height;//上方管道y轴坐标
    this.options.downY = this.options.height + this.options.centerDis; //下管道y轴坐标
    extend(Pipe.prototype, {
        draw: function () {
            this.options.ctx.drawImage(this.options.upImg, this.options.x, this.options.upY, this.options.upImg.width, this.options.upImg.height);//绘制上管道
            this.options.ctx.drawImage(this.options.downImg, this.options.x, this.options.downY, this.options.downImg.width, this.options.downImg.height);//绘制下管道


            ////绘制管道路径
            this.options.ctx.strokeStyle = "rgba(0,0,0,0)";
            this.options.ctx.rect(this.options.x,this.options.upY,this.options.upImg.width,this.options.upImg.height);

            //console.log(this.options.x);
            this.options.ctx.rect(this.options.x,this.options.downY,this.options.upImg.width,this.options.upImg.height);
            this.options.ctx.stroke();
        },


        update: function () {

            this.options.x += this.options.speedX;//每次移动距离
            //this.options.speedX += this.options.speedPlus;//管道移动加速
            if (this.options.x < -this.options.downImg.width-50) {
                this.options.height = Math.random() * 150 + 20;//随机生成管道高度，最高170 ，最低20
                this.options.upY = this.options.height - this.options.upImg.height;//上方管道y轴坐标
                this.options.downY = this.options.height + this.options.centerDis; //下管道y轴坐标
                this.options.x = this.options.downImg.width * 3 * 6 -100;//当第一个管道出去时将管道抽回（类似于轮播图）
            }
        }
    })
}