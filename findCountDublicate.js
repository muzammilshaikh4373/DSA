let data = ["faisal","shahbaz","furkhan","areeb","shahbaz","areeb",]
let data1 = ["A","B","A","H","K","H","B",]

let resultObj ={};
let alphabet = {};

for(let i=0;i < data.length; i++){
   if(resultObj[data[i]]){
    resultObj[data[i]]++
   }else{
    resultObj[data[i]] = 1
   }
}

console.log(resultObj)

for(let i=0;i < data1.length; i++){
    if(alphabet[data1[i]]){
        alphabet[data1[i]]++
    }else{
        alphabet[data1[i]] = 1
    }
 }
 
 console.log(alphabet)