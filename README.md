# Data Structures

	1) Arrays
	2) Binary Tree
	3) Heaps
	4) Graphs
	5) Linked Lists
	
# Arrays -
	1) push
	2) unshift
	3) pop
	4) shift
	5) slice
	6) splice
	7) filter
	8) find
	9) map
	10) reduce
	11) every
	12) some
	13) join
	14) toString
	15) includes

# Binary Tree -

    var BST = new BinarySearchTree(); 

    BST.insert(7);
    BST.insert(5);
    BST.insert(12);
    BST.insert(11);
    BST.insert(13);
    BST.insert(9);
    BST.insert(10);
    BST.insert(4);
    BST.insert(1);
    BST.insert(2);

    var root = BST.getRootNode();
    BST.inorder(root);

    BST.remove(4);

    var root = BST.getRootNode();
    BST.inorder(root);

    BST.remove(12);

    var root = BST.getRootNode();
    BST.inorder(root);

# Heaps -
    Priority queues
		insert
			compare priority & inesert at the next pointer
			Complexity - O(n)
		remove
			first element & update first pointer
			Complexity - O(1)
	Binary Heap
		level-ordered algorithm
    the children of the node at position n would be at positions 2n and 2n + 1 in a one-based array, or 2n + 1 and 2n + 2 in a zero-based array. For one-based              arrays the parent of element n is located at position n/2. Similarly, for zero-based arrays, is the parent is located at position (n-1)/2 (floored)
        
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
    
# Graphs -
    Directed/Undirected
	Adjacency Matrix/List (Hash-set)
	DFS
		From that node on, it will recursively explore each neighbor. That means that the neighbors of neighbor 1 will be explored before neighbor 2
		DFS has a time complexity of O(n+e).

	BFS
		From that node on, it will explore each neighbor before it goes on to a neighbor’s neighbor
		BFS also has a runtime complexity of O(n+e)

    Code -

    const adjacencyList = new Map();
    adjacencyList.set(1, new Set([2,3]));
    adjacencyList.set(2, new Set([3,4]));
    adjacencyList.set(3, new Set());
    adjacencyList.set(4, new Set([3]));

    const visit = console.log;
    
# Linked Lists -
	

