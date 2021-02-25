# Binary Tree -

    Pre order traversal -
        Example - copying a tree

    In order traversal -
        Example - print values in sort order

    Post order traversal -
        Example - deleting each node

    Traversal
        Avg & Best & Worst case
            O(n)

    Search
        Avg - O(log n)
        Worst - O(n)

    Removal
        Avg - O(log n)
        Worst - O(n)

Example -

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
