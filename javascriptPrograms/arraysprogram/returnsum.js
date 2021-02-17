var num=7;
 var arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==num){
//             console.log(arr[i],arr[j]);
//             break
//         }
       
//     }
    
// }
 var low=0;
var upp=arr.length-1;
while(low<upp){
let total=arr[low]+arr[upp];
if(total==num){
    console.log(arr[low],arr[upp]);
    low+=1
}
else if(total<num){
    low+=1
}


else{
    upp-=1;
}

}