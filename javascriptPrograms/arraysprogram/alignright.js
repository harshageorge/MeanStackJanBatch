
var arr=[10,11,10,12,10,13];
arr.sort((o1,o2)=>o1-o2)//ascending order
//console.log(arr);
var u= arr.length-1;
var x=arr.length;
var data=[]
var data1=[]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if ((arr[i])==arr[j])
        {
        
            data.push(arr[i])
        }
        
        
    }

}

//console.log(data);
var p1=0;
var p2=0;
var data1=[]
while((p1<arr.length)&(p2<data.length))
{
    if((arr[p1])!=data[p2])
    data1.push(arr[p1])
   
    p1+=1;
}

  
//console.log(data1);
console.log(data1.concat(data));
