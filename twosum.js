
function ribbery(nums,target){
    let desiredarray=[];
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]===target){
                desiredarray.push(i,j);
                break;
            }
        }
        
    }
    return desiredarray;
}





let nums=[2,3,7,1,6,9,9,3];
let target=4;
let myfunc= ribbery(nums,target);
console.log(myfunc)