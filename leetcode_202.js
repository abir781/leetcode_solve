const happychecker =(n)=>{
      
    let digits = n.toString().split("").map(Number);

    let happyset = new Set();

    while(true){
        let total=0;
        for(let i=0;i<=digits.length-1;i++){
            total=total+(digits[i]*digits[i]);
        }

        if(total===1){
            return true;
        }
        else{
            if(happyset.has(total)){
                return false;
            }
            else{

                happyset.add(total);
            digits=total.toString().split("").map(Number);

            }
           
        }
    }   
   
}




let n=19;
const solution = happychecker(n);
console.log(solution);