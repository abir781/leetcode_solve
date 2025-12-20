
const solution =(joker,batman)=>{


    let freq={};

     for( let s of joker){

        freq[s] = (freq[s] || 0) + 1;
        
     }

     for(let j of batman){
        if (!freq[j] || freq[j] === 0){
            return j;
        }else {
        freq[j]--;   
    }

     }
    

   


}



let s="aabir";  
let p="aabirr";
let myfunc= solution(s,p);
console.log(myfunc);