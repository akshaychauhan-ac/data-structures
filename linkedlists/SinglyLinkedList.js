class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	add(item) {
		let currentNode = this.head;
		let newNode = new Node(item);

		if (!this.head) {
			this.addToFirst(item);
			return true;
		}

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
		console.log(this);
		return;
	}
	addToFirst(item) {
		let newNode = new Node(item);

		if (this.head === null) {
			this.head = newNode;
			return true;
		}
		newNode.next = this.head;
		this.head = newNode;
		console.log(this);
		return;
	}
	addToPos(index, value) {
		let counter = 0;
		let currentNode = this.head, prevNode;
		let newNode = new Node(value);

		if (!this.head || index === 0) {
			this.addToFirst(value);
			return true;
		}

		while (currentNode.next !== null) {
			counter++;
			prevNode = currentNode;
			currentNode = currentNode.next;
			
			if (counter === index) {
				newNode.next = currentNode; 
				prevNode.next = newNode;
				return true;
			}
		}
		console.log("Invalid Pos");
	}
	removeFirst() {
		if (!this.head) {
			console.log("NO NODES");
			return;
		}
		const value = this.head.value;
		this.head = this.head.next;

		console.log(this);
		return;
	}
	removeLast() {
		let currentNode = this.head, prevNode;
		if (!this.head) {
			console.log("NO NODES");
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
		return;
	}
	removeValue(value) {
		if (!this.head) {
			console.log("NO NODES");
			return;
		}

		if (this.head.value === value) {
			this.removeFirst();
			return;
		}

		let previousNode = this.head;
		let thisNode = previousNode.next;

		while (thisNode) {
			if(thisNode.value === value) { 
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
		}

		if (thisNode === null) {
			return "NO NODES MATCHED";
		}

		previousNode.next = thisNode.next;
		console.log(this);
        return;
	}
}
