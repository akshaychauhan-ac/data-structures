class Node {
	constructor (value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.count = 0;
	}

	addToLast(value) {
		let currentNode = this.head;
		let newNode = new Node(value);

		if (!currentNode) {
			this.addToFirst(value);
			return;
		}
		while(currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
		newNode.prev = currentNode;
		this.count++;
		console.log(this);
	}

	addToFirst(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.count++;
			console.log(this);
			return;
		}

		newNode.next = this.head;
		newNode.next.prev = newNode;
		this.head = newNode;
		console.log(this);
	}

	addToPosition(index, value) {
		let newNode = new Node(value);
		let currentNode = this.head;
		let prevNode;
		let counter = 0;

		if (!this.head || index === 0) {
			this.addToFirst(value);
			return;
		}

		while (currentNode.next) {
			counter++;
			prevNode = currentNode;
			currentNode = currentNode.next;
			if (counter === index) {
				newNode.prev = prevNode;
				newNode.next = currentNode;
				prevNode.next = newNode;
				currentNode.prev = newNode;
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
		if (!this.head.next) {
			this.head = null;
			this.count--;
			console.log(this);
			return;
		}
		this.head = this.head.next;
		this.head.prev = null;
		this.count--;
		console.log(this);
	}

	removeLast() {
		let currentNode = this.head;
		let prevNode;

		if (!this.head) {
			console.log("List is empty.");
			return;
		}
		if (!this.head.next) {
			this.head = null;
			this.count--;
			console.log(this);
			return;
		}
		while (currentNode.next) {
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
		let prevNode = this.head;
		let currentNode = this.head.next;

		while (currentNode) {
			if (currentNode.value === value) {
				break;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
		if (currentNode === null) {
			return "Value not found.";
		}
		if (!currentNode.next) {
			this.removeLast();
			return;
		}
		prevNode.next = currentNode.next;
		currentNode.next.prev = prevNode;
		this.count--;
		console.log(this);
	}
}
