function palindromecheck(num){
    let str=x.toString();

    let newstr="";

    for(let i=str.length-1;i>=0;i--){
       
        newstr=newstr+str[i];
    }
    if(newstr===str){
        return true;
    }
    return false;

}

let numb = -121;
let myfunc = palindromecheck(numb);
console.log(myfunc); 