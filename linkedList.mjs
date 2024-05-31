import { Node } from "./node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
  }
  head() {
    return this.head;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node();
      this.head.setValue(value);
    } else {
      let temp = this.head;
      while (temp.getNext()) {
        temp = temp.getNext();
      }
      temp.setNext(new Node());
      temp.getNext().setValue(value);
    }
  }
  toString() {
    let temp = this.head;
    let res = "";
    while (temp) {
      res += "( " + temp.getValue() + " )-> ";
      temp = temp.getNext();
    }
    return (res += " null");
  }
  prepend(value) {
    if (this.head === null) {
      this.head = new Node();
      this.head.setValue(value);
    } else {
      const node = new Node();
      node.setValue(value);
      node.setNext(this.head);
      this.head = node;
    }
  }
  size() {
    let res = 0;
    let temp = this.head;
    while (temp) {
      res++;
      temp = temp.getNext();
    }
    return res;
  }
  tail() {
    if (this.size() === 0) return null;
    else if (this.size === 1) {
      return this.head;
    } else {
      let temp = this.head;
      while (temp.getNext()) {
        temp = temp.getNext();
      }
      return temp;
    }
  }
  pop() {
    if (this.size() === 0) return null;
    else if (this.size() === 1) {
      let tail = this.head;
      this.head = null;
      return tail;
    } else {
      let temp = this.head;
      while (temp.getNext().getNext()) {
        temp = temp.getNext();
      }
      let tail = temp.getNext();
      temp.setNext(null);
      return tail;
    }
  }
}
