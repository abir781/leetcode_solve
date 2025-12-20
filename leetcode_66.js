const solution = (digitz) =>{

    let carry=1;

    for(let i=digitz.length-1;i>=0;i--){
       

        let sum = digitz[i]+carry;
        digitz[i] = sum%10;
        carry= Math.floor(sum/10);

        
       
        
    }
    if(carry===1){
        digitz.unshift(1);
    }
    return digitz;

}




let digits= [9,9,9];
let myfunc = solution(digits);
console.log(myfunc);