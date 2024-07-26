// This question is designed to help you get a better understanding of basic heap operations.

// There are  types of query:

// " " - Add an element  to the heap.
// " " - Delete the element  from the heap.
// "" - Print the minimum of all the elements in the heap.
// NOTE: It is guaranteed that the element to be deleted will be there in the heap. Also, at any instant, only distinct elements will be in the heap.

// Input Format

// The first line contains the number of queries, .
// Each of the next  lines contains one of the  types of query.

function processData(input) {
  //Enter your code here
  const minHeap = new MinHeap();
  const operations = input.trim().split("\n").slice(1);

  for (const operation of operations) {
    const [op, value] = operation.split(" ").map(Number);
    if (op === 1) {
      minHeap.insert(value);
    } else if (op === 2) {
      minHeap.delete(value);
    } else if (op === 3) {
      console.log(minHeap.getMin());
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  delete(value) {
    const index = this.heap.indexOf(value);
    if (index > -1) {
      this.swap(index, this.heap.length - 1);
      this.heap.pop();
      this.bubbleDown(index);
    }
  }

  getMin() {
    return this.heap[0];
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      this.swap(index, parentIndex); 
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      
      if (smallestIndex === index) break;
      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
