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
    
