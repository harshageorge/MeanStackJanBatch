var text="hai hello hai hello hello";
var words=text.split(" ")
console.log(words);

var dic={}


for(let word of words){
    if(word in dic){
        dic[word]+=1
    }
    else{
        dic[word]=1
    }
}
console.log(dic);
elements=[]

for(let key in dic)
{
    elements.push([dic[key],key])
}

elements.sort((o1,o2)=>o2[0]-o1[0])
console.log(elements);