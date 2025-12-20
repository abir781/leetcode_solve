
function lengthcheck(s){

    let arrayofword = s.trim().split(/\s+/);
    console.log(arrayofword);
  
    let desiredword = arrayofword[arrayofword.length-1];

    let lengthofword = desiredword.length;

    return lengthofword;


}


let word = "luffy is still joyboy"
let myfunc = lengthcheck(word);
console.log(myfunc);