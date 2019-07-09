class Node{
	constructor(){

	}
}


class Vertex{
	constructor(){

	}
}

class Graph{
	constructor(){
		this.adjacencyList = {}
	}
	//vertex is a node
	//Edge is a Link
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}


	addEdge(v1,v2){
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1,v2){
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((value,index) =>  value!== v2 );
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((value,index) => value !== v1 );
		return true;
	}

	removeVertex(vertex){
		while(this.adjacencyList[vertex].length){
			let v = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex,v);
		}
		delete this.adjacencyList[vertex];
	}
	//vertex is the starting point
	DFSRecursive(vertex){
		//
		var resultList = [];
		var visited = {};
		var adjacencyList = this.adjacencyList;
		(function dfs(vertex){
			if(!vertex) return null;
			visited[vertex] = true;
			resultList.push(vertex);
			adjacencyList[vertex].forEach(node => {
				if(!visited[node]){
					return dfs(node);
				}
			});
		})(vertex);
		return resultList;
	}


	DFSIterative(start){
		let stack = [start];
		let resultList = [];
		let visited = {};
		let adjacencyList = this.adjacencyList;
		let vertex;
		while(stack.length){
			vertex = stack.pop();
			resultList.push(vertex);
			adjacencyList[vertex].forEach((node) => {
				if(!visited[node]){
					visited[node] = true;
					stack.push(node);
				}
			})
		}
		return resultList;
	}


	BFS(start){
		const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
        	console.log(queue)
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;




	}


}

var g = new Graph();


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

let m = g.BFS('A')
console.log(m)