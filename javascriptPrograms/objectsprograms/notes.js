// var exp={
//     jan:25000,
//     feb:26000,
//     march:27000,
//     april:30000
// }
// console.log(exp["jan"]);
// console.log(exp["april"]);

// exp["may"]=32000;
// console.log();
// exp["may"]+=1000
// var text="hai hello hai hello";
// var words=text.split(" ")
// console.log(words);

// var dic={}

// for(let word of words){
//     if (word in dic){
//         dic[word]+=1

//     }
//     else{
//         dic[word]=1
//     }
// }
// console.log(dic);
var pattern="ABABAC"
var dic={}
for(let word of pattern)
{
    if(word in dic){
        console.log("recursive is "+word);
        break

    }
    else{
        dic[word]=1
    }
}