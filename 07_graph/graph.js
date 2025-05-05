class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }
    return false;
  }

  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph);
