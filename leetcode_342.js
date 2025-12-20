const poweroffourchecker=(n)=>{

    let total=0;
    let i=1;
    while(true){
       let exponential = Math.pow(4,i);
       total=exponential;
       if(total===n){
        return true;
       }
       else if(total>n){
        return false;
       }
       i++;
    }

}

let input = 1;
let solution = poweroffourchecker(input);
console.log(solution);

