function count(str){
    //把空格都替换掉
    var curStr = str.replace(/\s\g,"");
    var data = [];
    for(var i = 0;i < curStr.length;i++){
        //获取当前字符，判断是否存在，存在+1并计数
        var char = curStr[i];
        if(!data[char]){
            data[char] = 1;
        }else {
            data[char]++;
        }
    }
    return data;
}