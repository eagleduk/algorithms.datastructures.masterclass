class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  depthFirstSearch(start) {
    var result = [];

    var toBe = [start];
    var visited = {};

    while (toBe.length > 0) {
      var vertex = toBe.shift();
      var edges = this.adjacencyList[vertex];
      if (!visited[vertex]) {
        visited[vertex] = vertex;
        result.push(vertex);
        toBe = [...edges, ...toBe];
      }
    }

    return result;
  }
}
