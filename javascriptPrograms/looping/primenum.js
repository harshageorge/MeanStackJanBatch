var num=9;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag=1;
        break

    }
}
if(flag==1)
{
    console.log("not prime");
}
else{
    console.log("prime");
}