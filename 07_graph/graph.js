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

  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx2
      );
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) return false;

    for (let adjacentVertex of this.adjacencyList[vtx]) {
      this.adjacencyList[adjacentVertex] = this.adjacencyList[
        adjacentVertex
      ].filter((v) => v !== vtx);
    }

    delete this.adjacencyList[vtx];
    return this;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "D");
graph.addEdge("D", "C");
// graph.removeEdge("B", "C");
// graph.removeVertex("B");
console.log(graph);
