const solvefun=(nums)=>{
    const uniqueArr = [...new Set(nums)];
   
    let majoritycount=0;
    let maxvalue=0;
        let b;
   
     for(let j=0;j<=uniqueArr.length-1;j++){

        

        for(let i=0;i<=nums.length-1;i++){
            if(uniqueArr[j]==nums[i]){
               majoritycount++;
            }
        }
        
        if(maxvalue<majoritycount){
            maxvalue=majoritycount;
            b=uniqueArr[j];
        }

        majoritycount=0;
        

     }
    
     return b;
}



nums = [3,2,3];
let myfunc= solvefun(nums);
console.log(myfunc);