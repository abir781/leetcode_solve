
const solvefun=(l1,l2)=>{
      let dummy= new ListNode(0);
    let curr = dummy;
    let carry=0;
    while(l1!==null || l2!==null || carry!==0){

        
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;
        let sum= value1+value2+carry;
        carry = Math.floor(sum/10);
        let digit = sum%10;
        curr.next=new ListNode(digit);
        curr=curr.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

    }
    return dummy.next;
}





function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// l1 = [2,4,3]
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// l2 = [5,6,4]
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const solved = solvefun(l1,l2);