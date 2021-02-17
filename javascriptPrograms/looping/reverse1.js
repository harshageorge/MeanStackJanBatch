var num=123;
var res=0;
while(num!=0){
    var digit=num%10;
    res=res*10+digit;
    num=Math.floor(num/10)
}
console.log(res);
