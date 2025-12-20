function counterfunc (num1,num2){

    let counter;

    if(num1!==0 && num2!==0){
         for(let i=1; num1 !==0 && num2!==0; i++){
        if(num1 >= num2){
            num1 = num1-num2;
        }
        else if(num2 > num1){
            num2 = num2-num1;
        }
        counter = i;      
    }

    return counter;

    }
    else{
        return 0;
    }
   

}





let a=5;
let b=4;
let myfunc = counterfunc(a,b);
console.log(myfunc);