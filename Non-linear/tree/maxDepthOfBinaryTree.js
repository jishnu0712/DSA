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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    let depth = 0;
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let currNode = queue.shift();

            if (currNode.left !== null) {
                queue.push(currNode.left);
            }

            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }

        depth++;
    }

    return depth;

};

// var maxDepth = function(root) {
//     if (!root) {
//         return 0;
//     }

//     let left = maxDepth(root.left);
//     let right = maxDepth(root.right);

//     return Math.max(left, right) + 1;

// };