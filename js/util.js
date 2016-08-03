/**
 * Created by Sorzen on 2016/6/26.
 */
function extend(obj1,obj2){
    for(var key in obj2){
        obj1[key] = obj2[key];
    }
}

//强弧度转换成角度
// 角度转弧度
function angleToRad(angle) {
    return Math.PI / 180 * angle;
}
