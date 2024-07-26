/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;
        let val = val1 + val2 + carry;

        carry = Math.floor(val / 10);
        val = val % 10;

        let newNode = new ListNode(val);
        curr.next = newNode;
        curr = curr.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return head.next;
};