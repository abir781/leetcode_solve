function solvefun(nums1,m,nums2,n){
    let arr1=[];
    
    
      nums1=  nums1.slice(0,m);
      


  

    for(let j=0;j<=n-1;j++){
        nums1.push(nums2[j]);
    }
    console.log(nums1);

    nums1.sort((a, b) => a - b);
   
}




let nums1 = [1,2,3,0,0,0];
let m = 3; 
let nums2 = [2,5,6];
let n = 3;

const myfunc= solvefun(nums1,m,nums2,n);
console.log(myfunc);