var buffer1 = new Buffer("第一周");
var buffer2 = new Buffer("作业");
Buffer.concat1 = function (list, len) {
    //先判断list长度如果只有一个直接返回
    if (list.length == 1) {
        return list[0];
    }
    if (typeof len == "undefined") {
        len = 0;
        //算出总长度
        for (var i = 0; i < list.length; i++) {
            len += list[i].length;
        }
    }
    //通过总长度构建一个buffer
    var newBuffer = new Buffer(len);
    var index = 0;
    for (var i = 0; i < list.length; i++) {
        //取出数组里的每一个进行copy操作(buffer1,buffer2)
        var cur = list[i];
        cur.copy(newBuffer,index);
        index += cur.length;
    }
    return newBuffer.slice(0, index);
};

console.log(Buffer.concat1([buffer1, buffer2],100).toString());