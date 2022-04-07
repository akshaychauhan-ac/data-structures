class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    addToFirst(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.count++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.count++;
        console.log(this);
    }

    addToLast(value) {
        let currentNode = this.head;
        let newNode = new Node(value);

        if (!this.head) {
            this.addToFirst(value);
            return;
        }

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.count++;
        console.log(this);
    }

    addToPosition(index, value) {
        let counter = 0;
        let currentNode = this.head, prevNode;
        let newNode = new Node(value);

        if (!this.head || index === 0) {
            this.addToFirst(value);
            return;
        }

        while (currentNode.next !== null) {
            counter++;
            prevNode = currentNode;
            currentNode = currentNode.next;
            
            if (counter === index) {
                newNode.next = currentNode; 
                prevNode.next = newNode;
                this.count++;
                console.log(this);
                return;
            }
        }
        if (index === (counter + 1)) {
            this.addToLast(value);
            return;
        }
        console.log("Invalid Position.");
    }

    removeFirst() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.count--;
        console.log(this);
    }

    removeLast() {
        let currentNode = this.head, prevNode;
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        if (!this.head.next) {
            this.removeFirst();
            return;
        }

        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        this.count--;
        console.log(this);
    }

    removeValue(value) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.value === value) {
            this.removeFirst();
            return;
        }

        let previousNode = this.head;
        let currentNode = previousNode.next;

        while (currentNode) {
            if (currentNode.value === value) { 
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            return "Value not found.";
        }

        previousNode.next = currentNode.next;
        this.count--;
        console.log(this);
    }
    
    reverse () {
        let prevNode = null;
        let currentNode = this.head;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
        console.log(this);
    }
}
