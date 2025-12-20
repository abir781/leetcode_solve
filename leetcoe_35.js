// const insertalgo = (nums,target) =>{

//       nums[nums.length]=target;
      
//       let wanted;
   
//     for(let i=nums.length-2;i>=0;i--){
//         let holder=0;
//         if(nums[i]===target){
//             return i;
//         }
//         else if(target<nums[i]){
//             holder=nums[i];
//             nums[i]=target;
//             nums[i+1]=holder;
//             wanted=i;
           
            
//         }
//         else if(target>nums[nums.length-2]){
//             return nums.length-1;
//         }
        
        
//     }
//     return wanted;
    
   
// }




// const numbers = [3,4,6];
// const t=7 ;
// const solution = insertalgo(numbers,t);
// console.log(solution);


function insertalgo2(nums,target){
    
    let left=0;
    let right=nums.length-1;


    while(left<=right){
        let mid=Math.floor((left+right)/2);

         if(nums[mid]===target){
        return mid;
    }
    else if(nums[mid]>target){
        right=mid-1;
    }
    else if(nums[mid]<target){
        left=mid+1;
    }

    

    }

    return left;
    
   

  

}

const numbers2 = [3,4,6,7];
const tg=8 ;
const solution2 = insertalgo2(numbers2,tg);
console.log(solution2);