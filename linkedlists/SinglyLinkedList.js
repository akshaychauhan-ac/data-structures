class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
	}

	addToFirst(value) {
		let newNode = new Node(value);

		if (this.head === null) {
			this.head = newNode;
			return true;
		}
		newNode.next = this.head;
		this.head = newNode;
		console.log(this);
	}

	addToLast(value) {
		let currentNode = this.head;
		let newNode = new Node(value);

		if (!this.head) {
			this.addToFirst(value);
			return true;
		}

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
		console.log(this);
	}

	addToPosition(index, value) {
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
			console.log("List is empty.");
			return;
		}
		const value = this.head.value;
		this.head = this.head.next;

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
		let thisNode = previousNode.next;

		while (thisNode) {
			if(thisNode.value === value) { 
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
		}

		if (thisNode === null) {
			return "Value not found.";
		}

		previousNode.next = thisNode.next;
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
