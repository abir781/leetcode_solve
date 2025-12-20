const palindromechecker = (s) =>{
    let remover = s.replace(/[^a-zA-Z0-9]/g, "");
    let mergesentence = remover.toLowerCase();

    let reversessentence = "";

    for(let i=mergesentence.length-1;i>=0;i--){
        
        reversessentence=reversessentence+mergesentence[i];

    }
    if(reversessentence===mergesentence){
        return true;
    }
    else{
        return false;
    }
}






let s="a1221";
let solution = palindromechecker(s);
console.log(solution);