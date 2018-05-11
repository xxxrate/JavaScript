function isAvailableEmail(sEmail) {
	//正则表达式 \w：匹配字符 ( 字母 ，数字，下划线_ ) \W:匹配非字符  {n,m}范围是n到m
	var re = /^([\w\.])+@[a-z0-9]+(\.[a-z]+){1,3}/;
	//test() 正则表达式验证函数 匹配为true 否则false
	var result = re.test(sEmail);
    return result;
}