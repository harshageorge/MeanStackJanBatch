var arr=[3,4,5];
var data=[]
var sum=0;
for(let num of arr){
    sum=sum+num;
    
}
for(let num of arr){
    data.push(sum-num);
    
}
console.log(data);