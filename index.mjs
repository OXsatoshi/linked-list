import { LinkedList } from "./linkedList.mjs";

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(4);
linkedList.prepend(1);
linkedList.pop();
linkedList.pop();

linkedList.pop();

console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.tail());
