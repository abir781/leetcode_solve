function removeelemnt(nums,val){
    

  let insertpos = 0;

  for(let i=0;i<=nums.length-1;i++){

        if(nums[i]!==val){
           nums[insertpos]=nums[i];
           insertpos++;

          
        }

    }
    return insertpos;

}

let arr=[2,3,1,4,2,3,1];
let k=3;
let myans=removeelemnt(arr,k);
console.log(myans);