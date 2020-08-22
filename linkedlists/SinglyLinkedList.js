class LinkedList {
	constructor (value) {
		this.length = 0;
		this.head = null;

		this.addToHead(value);
	}

	addToHead (value) {
		const newNode = { value };
		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		return this;
	}

	removeFromHead () {
		if (!this.length) {
			return "NO NODES";
		}
		const value = this.head.value;
		this.head = this.head.next;
		this.length--;

		return this.value;
	}

	find (value) {
		let thisNode = this.head;

		while (thisNode) {
			if (thisNode.value === value) {
				return thisNode;
			}
			thisNode = thisNode.next;
		}
		return thisNode;
	}

	getAt (index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

	insert (index, value) {
		let counter = 0;

		if (!this.head || index === 0) {
			this.addToHead(value);
			return;
		}

		const previousNode = this.getAt(index - 1);
		const newNode = { value };
		newNode.next = previousNode.next;
		previousNode.next = newNode;
		this.length ++;	

		return this;
	}

	remove (value) {
		if (!this.length) {
			return "NO NODES";
		}

		if (this.head.value === value) {
			return this.removeFromHead();
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
			return "NO NODES";
		}

		previousNode.next = thisNode.next;
        this.length--;
        return this;
	}
}
