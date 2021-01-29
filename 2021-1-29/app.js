//typeof 操作符(非函数) ,可判断数据类型
/* 
    undefined:未定义的
    boolean:布尔值
    string:字符串类型
    number:阿拉伯数字
    object:对象或者null
    function:函数类型
*/
let a="he",b;
console.log(typeof a) //typeof 是操作符.,所以不加括号也可以
console.log(typeof(a)) //加括号也可以
console.log(typeof null) //object类型(safari/chrome7 之前返回function)
console.log(typeof b) //undefined类型


//关于null 与undefined的关系
//null为一个空指针
console.log(null) // 返回object对象
console.log(null==undefined); //true 注意 虽然事true 但应用方向不一样


//布尔类型,Boolean()函数可以将变量转为布尔类型值
let msg="hi";
console.log("---");
console.log(Boolean(msg));
if(msg) {
    console.log("msg为真");
}

//number类型
//关于8进制
/*
  8进制已0开头,如果超过(0-7) 则变为10进制,会忽略开头的0
  在严格模式下 8进制的写法会报错 
 */
let octalNumber0 = 060; //8进制
let octalNumber1 = 08; //10进制
console.log(octalNumber0);
console.log(octalNumber1);

// 关于 十六进制 
/* 
    16进制0x开头 0~9/A~F
    字母不区分大小写
*/
let hexNumber0 = 0xA; //十六进制开头
let hexNumber1 = 0xa;//二者相同 , 不区分大小写


//浮点数类型
/* 如果点后,为0则依然认为是整数类型
    特别注意: 0.1+0.2 === 0.30000000000000004 //这是个舍入误差,很多编程语言都存在此问题
    0.12+0.3 ==0.42 //这个没问题
*/
let floatNumber0 = 10.0 //依然会被认为 int类型"10"
//不推荐写法
let floatNumber1 = 1.;
let floatNumber2 = .1;
console.log(floatNumber2); //0.1

// 关于e/E计算方法
/*
    * e与E相同,不区分大小写
    * 例: 3.12e4 == 3.1200.0
    * 3.12e4 相当于: 3.12*10^4 == 3.1200.0
    */
let floatNum3 = 3.12e4; // 31200
let floatNum4 = 3e-3; // 数学计算, 3*10^(-3) == 0.003
console.log("floatNum4----->"+floatNum4); // 0,003


//数值范围 , isFinite()查看值是否在最大最小值内
/* 
    最大值 Number.MAX_VALUE == 1.7976931348623157e+308
    最小值 Number.MIN_VALUE == 5e-324
    isFinite() 查看数是否在最大最小值范围内, 返回布尔类型
    如果超出范围, 则数值编程正/负 infinity (正负无穷)
*/
console.log("maxNumber---->",Number.MAX_VALUE);
console.log("minNumber---->",Number.MIN_VALUE);

let result = Number.MAX_VALUE + Number.MAX_VALUE //Number.MAX_VALUE 保存最大值
console.log(isFinite(result));
console.log(result);
console.log(Number.NEGATIVE_INFINITY);// Number.NEGATIVE_INFINITY/Number.POSITIVE_INFINITY == -Infinity/+Infinity


//非数值NaN
/* 
    NaN 为非数值
    数值/0 返回NaN, 保证不出错
    NaN/10 == NaN //NaN 与任何数计算都等于NaN
    NaN != NaN //不等于他本身
*/

console.log("------------------------------");
let ten=10,zero=0;
console.log(ten/zero); //默认情况为NaN ,Chrome 则为Infinity
console.log(NaN/10); //依然为NaN , NaN除任何数都为NaN


//ISNAN() 判断是否为非数值,返回(非数值为真,数值为假 )
console.log("-------------------------------");
console.log(isNaN(10)); //false
console.log(isNaN(true)); //false 布尔值 可转为 1/0
console.log(isNaN("asdf")); //true  字母或符号字符串, 非数值
console.log(isNaN("123")); // false 字符串数字,则也可以转换为数值


//数值转换 ,Number() ,parseInt(),parseFloat() 转换数字类型
let num1 = true, num2 = null;
let str0 = "", str1 = "012", str2 = "0xa", str3 = "13abc", str4 = "abc";
let str5 = 12.3,str6 = 1.2e3;

// Number() 转换数字,有很多规矩,一般不推荐使用
//非字符串类型
//可以字符串  转 整形 或 浮点类型
console.log("-----------Number()-----------------");
console.log(Number(num1)); // 1  布尔类型转换为 1/0
console.log(Number(num2)); // 0 null空类型返回0
//字符串类型
console.log(Number(str0)); // 0 空字符串返回 0
console.log(Number(str1)); //12 会忽略前数字0
console.log(Number(str2)); //10 16进制 转换对应的 10 进制
console.log(Number(str3)); //NaN 非纯数字会认定为非数值
console.log(Number(str4)); //NaN 非数值 

//parseInt(数据,进制类型) 转换为整数类型,推荐使用,更加合理化
console.log("-----------parseInt()-----------------");
// 1.无数字都为NaN
// 2.开头数字解析,非数字停止解析
console.log(parseInt(num1)); // NaN 非数值
console.log(parseInt(num2)); // NaN 非数值
//字符串类型
console.log(parseInt(str0)); // NaN
console.log(parseInt(str1,10)); //12 认定内容为10进制,忽略0输出10进制数值
console.log(parseInt(str2,16)); //10 认定16进制 转换对应的 10 进制数值
console.log(parseInt(str3,10)); //13 认定为10进制 开头遇到数字继续解析,遇到非数字停止解析 输出10进制数值
console.log(parseInt(str4)); //NaN 非数值 


//parseFloat(数据) 转换浮点型
console.log("-----------parseFloat()-----------------");
//1.与parseInt()差不多 但不需要指定进制参数
console.log(parseFloat(str5)); //12.3
console.log(parseFloat(str6)); //1200 科学算法

// Object 类型
console.log("-----------Object()-----------------");
// 目前解析: 一组数据的功能的集合
let obj = new Object(); //穿件Object类型


// 操作符
console.log("-----------操作符-----------------");
// 目前解析: 操作数据,+-*/,关系符
//操作对象会调用 valueOf() / toString()方法,方便获取值

//字面量
console.log("-----------字面量-----------------");
// '\b': 空格
// '\r': 回车
// '\x': 16进制数
// '\u': Unicode字符
console.log("\u03a3");// Unicode字符码
    

//.length 字符串长度,注意 : 如果有双字节字符,长度测量会不准确
console.log("-----------.length-----------------");
let strLength = "abc";
console.log(strLength.length); // 3:字符串长度数量

//字符串相加
console.log("-----------字符串相加-----------------");
let strIncrease = "Java"
strIncrease += "script"
console.log(strIncrease);

//数据.toString(指定转换进制)方法,String(数据),字符串转换
console.log("-----------toString-----------------");
//toString()方法可以指定转换进制
//1.null类型时,toString()会报错
let toStr1 = 10,toStr2 = null , toStr3 = true;
console.log(toStr1.toString()); //"10" 直接转为字符串类型
console.log(toStr1.toString(16)); //"a" 数据 转换 为指定进制 ,转变为字符串类型

//String()靠谱的字符串转换
//它与toString()区别在于
// 1.没有办法指定进制转换
//2. 但是String()兼容性更强,它可以兼容非实数类型转换成字符串类型
console.log(String(toStr1)); //"10"
console.log(String(toStr2)); //"null" 字符串类型
console.log(String(toStr3)); //"true" 字符串类型


//一元操作符
console.log("-----------一元操作符-----------------");
//只需要一个操作数的运算符,叫做一元操作符(或叫单目运算符)
// --age/++age 形式
let age = 29;
let other = --age + 2 //先执行 age = age - 1;再执行other = age + 2;
console.log(other); //30
console.log(age); // 28

// age++/age--形式
age = 29;
other = age-- + 2; // 先执行 other  = age + 2; 在执行 age = age -1
console.log( other );  // 31
console.log( age ); // 28

/* 
    一元操作符(++/--),JavaScript 不严谨性计算
    1. 字符串类型++(字符串转换成实数进行数值实数(有字母或其他符号,则返回NaN类型))
    2. 布尔类型++ (会吧布尔类型当成 1/0 进行数值计算)
    3. 浮点型 ++ (正常数值计算,不过注意舍入BUG)
    4. Object类型 ++
*/

//字符串++
let a1 = "2";
a1++;
console.log(a1);
console.log(typeof a1); //转成实数类型

//布尔++
let a2 = true;
a2++;
console.log(a2);

//Object 类型++
var o = {
    valueOf:function(){
        return -1;
    }
}

o++;
console.log(o);

//一元加减符(+/-) 就是数学里的正负号
// 1.同样与一元运算符计算不严谨
// 2.区别在于遇到实数时, 就相当于+/-号处理
// 例:
let a3 = "1";
console.log(+a3); //被转换成实数
console.log(typeof +a3);

























