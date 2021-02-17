var arr=[10,11,10,12,10,13]
arr.sort((o1,o2)=>o1-o2)
console.log(arr);
var elem=10;
var data=[]
var count=0;
var low=0;
var upp=arr.length-1;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(elem>arr[mid]){
        low+=1
    
    }
    else if(elem<arr[mid]){
        upp-=1
        
    }
    else if(elem==arr[mid]){
        count+=1;
        low+=1
        data.push(arr[mid])
    }
    

    }
   
console.log(count);
console.log(data);
var p1=0;
var p2=0;
var data1=[]
while((p1<arr.length)&(p2<data.length))
{
    if((arr[p1])!=data[p2])
    data1.push(arr[p1])
   
    p1+=1;
}

console.log(data1);
console.log(data1.concat(data));
