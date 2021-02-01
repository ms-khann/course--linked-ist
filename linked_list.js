class Node{
    constructor(data,next = null){
        data = this.data;
        next = this.next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertNode(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
}

const l1 = new LinkedList();
l1.insertNode(100);
l1.insertNode(200);
console.log(l1);