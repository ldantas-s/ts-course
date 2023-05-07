import { Node } from './Node';
import { Sorter } from './Sorter';

export class LinkedinList extends Sorter {
  private size: number = 0;
  private head: Node | null = null;

  get length(): number {
    return this.size;
  }

  add(value: number): void {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
    this.size++;
  }

  at(index: number): Node {
    const indexError = new Error('Index of out bounds');
    if (!this.size) throw indexError;

    let linkedinListIndex = 0;
    let node = this.head;
    while (node) {
      if (index === linkedinListIndex) {
        return node;
      }

      linkedinListIndex++;
      node = node.next;
    }

    throw indexError;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.size) throw new Error('List is empty');

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // My implementation. I need to study linkedlist
  swap(leftIndex: number, rightIndex: number): void {
    if (leftIndex === rightIndex) return;

    const leftNode = this.at(leftIndex);
    let prevLeft = null;
    let currentyLeft = this.head;

    while (currentyLeft != null && currentyLeft != leftNode) {
      prevLeft = currentyLeft;
      currentyLeft = currentyLeft.next;
    }

    const rightNode = this.at(rightIndex);
    let prevRight = null;
    let currentyRight = this.head;

    while (currentyRight != null && currentyRight != rightNode) {
      prevRight = currentyRight;
      currentyRight = currentyRight.next;
    }

    if (currentyLeft == null || currentyRight == null) return;

    if (prevLeft != null) {
      prevLeft.next = currentyRight;
    } else {
      this.head = currentyRight;
    }
    if (prevRight != null) {
      prevRight.next = currentyLeft;
    } else {
      this.head = currentyLeft;
    }
    const temp = currentyLeft.next;
    currentyLeft.next = currentyRight.next;
    currentyRight.next = temp;
  }
  // Swaping only data
  // swap(leftIndex: number, rightIndex: number): void {
  //   const leftNode = this.at(leftIndex);
  //   const rightNode = this.at(rightIndex);

  //   const leftHand = leftNode.data;
  //   leftNode.data = rightNode.data;
  //   rightNode.data = leftHand;
  // }

  print(): void {
    if (!this.size) return;

    const nodes = [];
    let node = this.head;

    while (node) {
      nodes.push(node.data, '->');

      node = node.next;
    }

    console.log(`${nodes.join(' ')} null`);
  }
}
