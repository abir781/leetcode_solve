const findsingle =(nums)=>{
    let singleone = nums.filter(function(value,index,array){
        return array.indexOf(value)===array.lastIndexOf(value);
    })
    let wanted = singleone[0];
    
    return wanted;
}




const numbers=[2,2,1];
const solution = findsingle(numbers);
console.log(solution);