function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


const node7 = new TreeNode(7);
const node5 = new TreeNode(5);
const node4 = new TreeNode(4, node7, null);


const node2 = new TreeNode(2, node4, node5);
const node3 = new TreeNode(3);


const root = new TreeNode(1, node2, node3);



const maxDepth =(root)=>{
     if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1 + Math.max(left, right);

    
}
const result=maxDepth(root);
console.log(result);


