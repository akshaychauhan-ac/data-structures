const enqueue = data => {
    if (head == null) {
    head = Node(data);
    tail = head;
    return head;
    }
    const newNode = Node(data);
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return head;
};

const dequeue = () => {
    if (tail === null) return null;
    const tailData = tail.data;
    if (tail.prev === null) {
        tail = null;
        head = null;
        return tailData;
    }
    tail.prev.next = null;
    tail = tail.prev;
    return tailData;
};
