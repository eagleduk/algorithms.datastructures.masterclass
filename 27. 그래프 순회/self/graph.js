class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    this.adjacencyList[vertex].forEach((target) => {
      this.removeEdge(vertex, target);
    });
    delete this.adjacencyList[vertex];
  }
  dfsRecursive(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    let result = [];
    let visited = {};

    const d = (vertex) => {
      if (visited[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);

      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        d(this.adjacencyList[vertex][i]);
      }
    };
    d(vertex);

    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.dfsRecursive("A");
