const bfs = (startNode) => {
			const visited = new Set();
			const queue = [];
			queue.push(startNode);
			visited.add(startNode);

			while (queue.length > 0) {
				const currentNode = queue.shift();
				visit(currentNode);

				for (let neighbour of adjacencyList.get(currentNode)) {
					if (!visited.has(neighbour)) {
						queue.push(neighbour);
						visited.add(neighbour);
					}
				}
			}
		};
