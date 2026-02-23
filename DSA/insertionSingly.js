class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const nodeA = new Node("Node A");
const nodeB = new Node("Node B");
const nodeC = new Node("Node C");

nodeA.next = nodeB;
nodeB.next = nodeC;

let nodeZero = new Node("Node Zero");
nodeZero.next = nodeA;
