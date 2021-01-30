// JS-使用键盘输入字符串 - prompt()默认键入为 string  类型
// let Q = prompt('what is his last name?')
// console.log(typeof Q); //键入为string 类型
// console.log(Q);

// //创建数组
// let name = ['tom','jerry'];
// let year = new Array('2020','2021');

// //操控数组元素, 添加数组元素 ,删除数组元素,确定数组元素位置
// year[year.length] = '2022'; //在元素末尾添加元素, length 可以确定数组中的数量
// year.push('8848'); //在数组末尾添加
// year.unshift('2019'); //在数组开头添加元素
// console.log(year);

// year.pop(); //删除末尾元素
// year.shift(); //删除数组开头元素
// console.log(year);

// console.log(year.indexOf('2021')); //确定数组元素位置,如果数组中没有,则返回数字类型 -1
// console.log(year.indexOf('2222')); 


// //Object 对象
// //创建对象 
// let hex = {
//     name: 'tom',
//     age: '18',
//     size: '29',
//     like: ['ff','huge']
// }; //方法1  创建对象

// let hexu = new Object(); //创建对象

// //索引对象属性
// console.log(hex.name);
// console.log(hex['age']);
// console.log(hex.like[0]);

// //修改对象属性 
// hex.age = 20;
// hex.name = 'jerry';
// console.log(hex);

// //给对象添加属性
// hex.skill = '忘记';
// hex['sex'] = 'man';
// console.log(hex);

//Object 关于this的使用,以及对象函数的创建
//this使用
// 1.this变量, 可以调用自身对象属性
// 2.this变量,也可以创建自身属性
// let body = {
//     birthday: 1996,
//     calcAge: function(year) { //创建函数
//         //this 可以调用自身已有属性 ,也可以创建新属性
//         this.age = year - this.birthday; //创建新属性
//         return this.age
//     }
// }
// // 对象调用
// console.log(body.calcAge(2021));


// //.toFixed()保留小数,返回字符串类型
// // ..toFixed(2)四舍五入保留2位小数,返回字符串类型,所以计算时需转为数字类型
// let userMark = {
//     cale: function(mass,height) {
//         this.mass = mass,
//         this.height = height,
//         this.BMI = +(mass/height*2).toFixed(2); //toFixed()保留两位小数返回字符串, +号字符串转数字
//         return this.BMI;
//     }
// }

// let BMI = userMark.cale(10,3) //调用对象属性函数
// console.log(BMI);


// console.log( abs(5) );

// function abs( x ){
// 	return x**2;
// }

// console.log( avg(1,2) ) // 不可用，因为“变量”影响工作方式必须按照顺序执行
// var avg = function( x,y ){
// 	var result = ( x+y )/2;
// 	return result;
// }

// jone = {
// 	name:'jone',
// 	tel: 123456,
// 	cale: function(){
// 		console.log( this.name ); // 可正常访问
// 		var that = this; // 将this赋值给that及时闭包依然可以代替this可以进行多级函数，直接属性访问
// 		function test2(){
// 			console.log( this.name ); // 无法访问,因为this的调用是有限制的，this只能进行一级访问。
// 			console.log( that.tel ); // 正常访问，因为that变量单独已被this赋值，this是受默认规则的影响无法进行多级函数属性访问,但其它变量不受限。
// 		}
		
// 		test2();
// 	}
// }

// jone.cale();

// var zhao = {
// 	name:'zhao',
// 	cale: function(){
// 		console.log(this.name);
// 	}
// }
// var li = {
// 	name:'zhao',
// 	cale: zhao.cale() // 内借用
// }
// li.cale2 = zhao.cale; // 外借用 
// li.cale; // 调用借来的函数( 正常调用 )

// const makeObject = { ["title"]: 'xxxxx', id: 'yyyyy' }; // 通过字符串创建对象中的键值属性
// console.log(makeObject);
// console.log(makeObject["id"]);// 相当于makeObject.id: 通过字符串索引对象中对应的键值


// // 创建蓝图,命名开头大写,易于于函数区分
// var Parsen = function( name, age, address ){
//     this.name = name; // 注意加this.
//     this.age = age;
//     this.address = address;
// }

// // 使用蓝图创建对象
//     // 原理:
//         // a) new 运算符的作用是: 创建一个空对象
//         // b) 而蓝图为函数，加入this的变量被new操作为对象属性.
// var zhao = new Parsen('zhao','21','大学嘉园');
// var teng = new Parsen('teng','21','赵楼');

// console.log( zhao,teng );


// Parsen.prototype.cale = function(){
//     console.log( 100 - this.age );
// }

// zhao.cale(); // 调用函数
// teng.cale();


// ( function( money ){
//     console.log( money + 999 );
// })( 1 ); // 直接被执行输出



// 0. 方法引用
var john = {
    name:'john',
    age:12,
    cale: function( size ){
        console.log( this.name +  ' - ' +  this.age +  ' - ' + size );
    }
}

var zhao = {
    name:'zhao',
    age:23
}

john.cale( 'young' );
john.cale.call(zhao,'old'); // 二对象之间引用方法，此时zhao对象引用john的方法

// 1. 函数替换
function test1( x ){
    console.log( x-100 );
}
function test2( x ){
    console.log( x+100 );
}

test1(50);
test2.call( test1,50 ); // 借用test2函数
