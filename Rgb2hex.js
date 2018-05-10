function rgb2hex(sRGB){
	/*
		表达式 -> [abc]:括号内的任何字符 [0-9]:括号内的任何数字 (x|y):任意以|分隔的选项
		元字符 -> \d:匹配任意数字 \s:匹配空字符 
		量词 -> n+:匹配任何包含至少一个n字符 n*:匹配任何包含零个或者多个n字符 n?:匹配任何包含零个或者一个n字符
	*/
	var re = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
	//match返回object 包含sRGB本身以及匹配到的字符，按表达式分组，字符串开始的位置为1,0位存放sRGB本身
	var str = sRGB.match(re);
	if(!str){
		return sRGB;
	}else{
		var final = '#';
		for (var i = 1; i <= 3; i++) {
			//字符串开始的位置为1,0位存放sRGB本身
			var temp = parseInt(str[i]);
			//判断是否超过色标
			if(temp < 256 && temp >= 0){
				//若小于16添0在前
				//Math.abs(str[i]).toString(16) 等于 temp.toString(16) 前者string和number都适用 后者只能用于number
				final += temp < 16 ? '0' + temp.toString(16) : temp.toString(16);
			}else{
				return sRGB;
			}
		}
		return final;
	}
}