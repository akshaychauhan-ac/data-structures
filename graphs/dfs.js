const visited = new Set();
		const dfs = node => {
			visit(node);
			visited.add(node);
			for (let neighbour of adjacencyList.get(node)) {
				if (!visited.has(neighbour)) {
					dfs(neighbour);
				}
			}
		};
