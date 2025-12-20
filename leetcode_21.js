var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;

     let dummy = new ListNode(-1);
    let current = dummy;
    
    while(p1!==null && p2!==null){

        if(p1.val <= p2.val){
            current.next=p1;
            p1 = p1.next;
        }else{
            current.next=p2;
            p2=p2.next;
        }
        current=current.next;
       

    }
     if (p1 !== null) current.next = p1;
    if (p2 !== null) current.next = p2;
    return dummy.next;
    
};