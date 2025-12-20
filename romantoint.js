const romantointfunc = (s) =>{

    let romantointobj={
         "I" : 1,
         "V" : 5,
         "X" : 10,
         "L" : 50,
         "C" : 100,
         "D" : 500,
         "M" : 1000,
       
    }

    let total =0;

    for(let i=0;i<=s.length-1;i=i+1){
       
      let currentvalue = romantointobj[s[i]];
      let nextvalue = romantointobj[s[i+1]] || 0;
     
      if(currentvalue<nextvalue){
        total=total-currentvalue;
      }
      else if(currentvalue>= nextvalue){
        total = currentvalue+total;
      }
          

}

   return total;

}


let roman = "MCMXCIV";
let myfunc = romantointfunc(roman);
console.log(myfunc);