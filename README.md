# Data Structures


1) Binary Tree -

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

2) Binary Heaps -

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
    
3) Graphs -

    const adjacencyList = new Map();
    adjacencyList.set(1, new Set([2,3]));
    adjacencyList.set(2, new Set([3,4]));
    adjacencyList.set(3, new Set());
    adjacencyList.set(4, new Set([3]));

    const visit = console.log;
    
    

