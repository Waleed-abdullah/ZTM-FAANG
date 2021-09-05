/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if(!root) return [];
        
    const result = [];
    DFS(root, 0, result)
    return result;
};

const DFS = (node, currentLevel = 0, result) =>{
    if(!node) return;
    
    if(currentLevel >= result.length){
        result.push(node.val);
    }
    
    if(node.right) DFS(node.right, currentLevel + 1, result);
    if(node.left) DFS(node.left, currentLevel + 1, result);
}