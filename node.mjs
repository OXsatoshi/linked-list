export class Node {
  value;
  next;
  constructor() {
    this.value = null;
    this.next = null;
  }
  setNext(next) {
    this.next = next;
  }
  setValue(value) {
    this.value = value;
  }
  getNext() {
    return this.next;
  }
  getValue() {
    return this.value;
  }
}
