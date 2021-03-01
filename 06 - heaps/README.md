# Heaps -
    Access element - O(1)
    Array is used. Close to complete tree
    Example - 
    	Priority queues
		insert
			push in the end and bubble up
			compare priority & inesert at the next pointer
			Complexity - O(n)
		remove
			swap root with last, delete last, push down root with largest child value
			first element & update first pointer
			Complexity - O(1)
	Binary Heap
		level-ordered algorithm
		the children of the node at position n would be at positions 2n and 2n + 1 in a one-based array, or 2n + 1 and 2n + 2 in a zero-based array. 
		For one-based arrays the parent of element n is located at position n/2. 
		Similarly, for zero-based arrays, is the parent is located at position (n-1)/2 (floored)
            
Code -

    var PQ = new PriorityQueue();
    
    PQ.insert(1, 10);
    PQ.insert(2, 20);
    PQ.insert(3, 30);
    PQ.insert(4, 40);
    PQ.insert(5, 50);
    PQ.insert(6, 60);
    PQ.insert(7, 70);
    PQ.insert(8, 80);
    
    PQ.remove();
