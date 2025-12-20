function prefixmachine(strs){
    let prefixarray=[];
  for(let i=0;i<=strs[0].length-1;i++){
    let matchall=true;
    
    
    for(let j=1;j<=strs.length-1;j++){
       
        if(strs[j][i] !== strs[0][i]){

            matchall=false;
            break;
            
            

        }
       

    }
    if(matchall==false){
        break;
    }
    prefixarray.push(strs[0][i])
    

}
return prefixarray.join("");
}




let strs = ["flower","low","loight"];
let myfunc = prefixmachine(strs);
console.log(myfunc);