function cssStyle2DomStyle(sName) {
	//把sName变成数组
	var arr = sName.split('');
	//判断第一个是否为-
	if(arr.indexOf('-') == 0){
		arr.splice(0,1);
	}
	//遍历每一个元素是否含有-，对后一位进行大写转换
	for(var i = 0;i < arr.length;i++){
		if(arr[i] == '-'){
			arr[i+1] = arr[i+1].UpperCase();
			arr.splice(i,1);
		}
	}
	//把数组转换回字符串
	return arr.join('');
}