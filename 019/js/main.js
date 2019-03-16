// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// alert("hello world");
// var mum1 = 100;
// var mum2 = 200;

// var result = num1 + num2;

//  alert (result);
// console.log("result");
//定义变量
var num = 100;
var num2 = "100";
var a = true;
console.log(num === num2)
// let name = "cao";
// const pi = 1234;
var num3 = num++;
console.log(num3)

//数据类型
//Number   （数值）
//String    (字符串)
//Bool     （布尔）
// num + num2;

// console.log(num+num2+a);
// if(num>101){
//     console.log('num大于1');
// }

// var i = 1;
// while(i<4){
//     console.log("第"+i+"次");
//     i = i+1;
// }
var btn = document.getElementById("btn");
var user = document.getElementById("user");

btn.onclick = function () {
    if (user.value.length < 6 || user.value.length > 10) {
        alert("用户名不得少于6个字符,不得多于10个字符")
    }
}
//逻辑运算情况
// ture  && ture   ture
// ture  && false  false
// false && ture   false
// false && false  false

// ture  || ture   true
// ture  || false  ture
// false || ture   ture
// false || false  false
//if 判断
// var len = 6;
// if(len<6){
//     alert("长度不对")
// }
// else{
//     alert("判断通过")
// }
// len < 6 ? alert("长度不对"): alert("判断通过")

// var num = 1;
// var result = num >10 && num < 100 + 5;
// alert(result);

//程序执行流程控制

var num1 = 500;
var num2 = 200;
var result = num1 + num2;
//条件判断结构
// if(result==300){
//     alert(result);
// }else if(result==400){
//     document.write(result);
// }else{
//     console.log(result);
// }

//分支结构
switch (result) {
    case 300:
        alert(result);
        break;
    case 400:
        document.write(result);
        break;
    default:
        console.log(result);
        break;
}

var today = new Date();//Date Object
var w = today.getDay()
var n = today.getFullYear()
var m = today.getMonth()
var d = today.getDate()
var h = today.getHours()
var mi = today.getMinutes()
var s = today.getSeconds()

var h1 = document.getElementById("result")
// h1.innerHTML = week
console.log(n+m+d+w+h+mi+s)
switch (w) {
    case 0:
        w = "星期日";
        break;
    case 1:
        w = "星期一";
        break;
    case 2:
        w = "星期二";
        break;
    case 3:
        w = "星期三";
        break;
    case 4:
        w = "星期四";
        break;
    case 5:
        w = "星期五";
        break;
    default:
        w = "星期六";
}

// m=checkTime(m)
// s=checkTime(s)
h1.innerHTML=
n+"年"+m+"月"+d+"日"+"/"+w+"/"+h+":"+mi+":"+s;
// function checkTime(i){
//     if(i<10){
//         i++
//     }
//     return i
// }

//循环结构
//while
// var i =1;
// while(i<11){
//     console.log(i);
//     i++;
// }
// var tab = document.getElementById("tab");
// var td = document.getElementById("td");
// var html ="";
// var num ="";
// var i = 1;

// while (i<10){
//     // console.log(i)
//     html=html+ "<tr><td>1</td></tr>";
//     i++;
// }
// tab.innerHTML = html;
// td.innerHTML = num

//do... while
// var p =document.getElementById("p")
// var i = 1;
// var num = 1;
// do{
//     console.log(i);
//     num = num * i ;
//     i++
// }while(i<100);
//     p.innerHTML=num

//for  九九乘法表
var tab = document.getElementById("tab")
var tab = document.getElementById("tab")
var html=""
var num =1
var ht=""
for(var i= 1; i<10; i++){
    // console.log(i)
    html +="<tr>";
    for(var j=1; j<10; j++){
        html +="<td>"
        if(j<=i){
        num=i*j
        html+=j+"*"+i+"="+num
        ht=html
        }
        html +="</td>"
    }
    html +="</tr>";
}
// for(var i=10; i>0; i--){
//     // console.log(i)
//     html +="<tr>";
//     for(var j=9; j>=i; j--){
//         html +="<td>"
//         num=i*j
//         html+=j+"*"+i+"="+num
//         html +="</td>"
//     }
//     html +="</tr>";
// }
// for(var i= 1; i<10; i++){
//     // console.log(i)
//     html +="<tr>";
//     for(var j=1; j<=i; j++){
//         html +="<td>"
//         num=i*j
//         html+=j+"*"+i+"="+num
//         html +="</td>"
//     }
//     html +="</tr>";
// }
// for(var i=1; i<10; i++){
//     // console.log(i)
//     html +="<tr>";
//     for(var j=9; j>=i; j--){
//         html +="<td>"
//         num=i*j
//         html+=j+"*"+i+"="+num
//         html +="</td>"
//     }
//     html +="</tr>";
// }
tab.innerHTML=html
document.write("<p align='center'>");
for(x=1;x<=10;x++){
    for(y=1 ; y<=x-1; y++){
        document.write("*");
    }
    document.write("<br />");
}
document.write("</p>")

document.write("正金字塔<br/>");
var n = 10
for(i=1;i<=n;i++){
    for(j=1;j<=n-i;j++){
        document.write("&nbsp;");
    }
    for(k=1;k<=2*i-1;k++){
        document.write("*")
    }
    document.write("<br/>")
}

//break     打断
// for(var i=1; i<11;i++){
//     console.log(i)
//     if(i>5){
//         break;
//     }
// }
// var i=1
// while(true){
//     i++;
//     if(i>10){
//         break;
//     }
//     console.log(i)
// }

//continue   继续
for(var i=1;i<11;i++){
    if(i==3||i==6){
        continue
    }
    console.log(i)
}