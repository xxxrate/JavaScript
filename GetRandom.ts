class RandomTest {
    getRandom(length:number,temp:Array<any>):Array<any> {
            let random = Math.random()*length; //length 可写为*(max-min) + min => (min,max)为取数范围
            random = Math.floor(random);//向下取整
            if(temp.length < length) {
                for(let i = 0;i <= temp.length;i++) {
                    if(random == temp[i]) {//去除重复随机数
                        break;
                    }
                    else {
                        if( i == temp.length) {//保存随机数
                            temp.push(random);
                            break;
                        }
                    }
                }
                this.getRandom(length,temp);//递归进行取数，直到取完区间内随机数
            }
            return temp;
        }
}
