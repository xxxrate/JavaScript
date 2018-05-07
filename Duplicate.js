/*给Array对象添加去重方法
  实例[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
  结果[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
*/
Array.prototype.uniq() = function(){
	//定义空数组保存唯一数值,flag标记当前是否
	var arr = [];
	var flag = true;
	//使用Array对象的forEach(function(currentValue,index,arr),this)获取数组每一个元素item
	arr.forEach(function(item){
		//判断NaN(Not A Number)，因为NaN ！= NaN返回true
		if(item != item){
			//判断item是否在arr中出现、以及其类型是否相同，判断flag是否为true
			flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
			flag = false;
		}else{
			arr.indexOf(item) === -1 ? arr.push(item) : '';
		}
	});
	return arr;
}