const solution=(n1,n2)=>{

    
const unique = [...new Set(n1)];
const unique2 = [...new Set(n2)];

const merged = [...unique, ...unique2];
console.log(merged);

const repeated = merged.filter((value, index, self) => self.indexOf(value) !== index);

return repeated;


}




let nums1 = [1,2,2,1]; 
let nums2 = [2,2];
let myfunc= solution(nums1,nums2);
console.log(myfunc);