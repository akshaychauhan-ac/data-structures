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
