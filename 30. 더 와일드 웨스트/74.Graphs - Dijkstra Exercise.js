/******
 *
 *  시작지점 - 각 지점까지의 최소 거리만을 구하는게 아닌
 *
 *  시작지점 - 각 지점까지의 최소 거리 및 시작지점 - 목적지점 까지의 최소 경유지를 구하는 방식
 *
 *  0. 모든 지점에 대하여 연결된 지점, 거리 저장 객체 { 지점: [ { 지점: 거리 } ] }
 *  1. 시작지점 - 시작지점 까지의 거리를 0, 그외 지점까지의 거리를 Infinity { 지점: 거리 }
 *  2. 방문 완료 객체 { 지점: 지점 }
 *  3. 방문 경유지 객체 { 지점: 지점 }
 *  4. 우선순위 큐 배열 객체 [ {지점: 거리} ]
 *
 *  5. 우선순위 큐에 시작지점, 거리 0 인 객체 삽입(4. 생성 객체)
 *
 *   --- 우선 순위 큐 항목에 대한 반복문 시작
 *
 *  6. 우선순위 큐의 처음 객체 추출
 *  7. 추출된 지점에 연결된 지점들 추출
 *  8. (추출된 지점까지의 거리값 + 추출된 지점 부터 연결된 지점까지의 거리값) 과 연결된 지점까지의 거리를 저장해 놓은 객체와 비교 (1. 생성 객체)
 *
 *  9. 5 번에서의 전자값이 작을 때, 연결된 지점까지의 거리 객체를 업데이트(1. 생성 객체),
 *  10. 우선순위 큐에 연결된 지점, 5 번에서의 전자값 삽입
 *  11. 연결된 지점으로 가는 추출된 지점에 대한 정보 저장 또는 업데이트(3. 생성 객체)
 *
 *  9-1. 후자값이 작을 때, 수행 작업 없음
 *
 *  12. 우선순위 큐에서 거리값이 작은 순으로 정렬
 *  13. 추출된 지점에 대한 방문 기록(2. 생성 객체)
 *
 *   --- 우선 순위 큐 항목에 대한 반복문 종료
 *
 *  14. 시작지점 부터 각 지점에 대한 최소 거리값 객체 (1. 생성 객체)
 *  15. 지점에 방문하기 위해 거쳐야 하는 지점에 대한 정보가 있는 객체 (3. 생성 객체)
 *
 */

function WeightedGraph() {
  this.adjacencyList = {};
}

WeightedGraph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({
    vertex: vertex2,
    weight,
  });
  this.adjacencyList[vertex2].push({
    vertex: vertex1,
    weight,
  });
};

WeightedGraph.prototype.Dijkstra = function (start, end) {
  var visited = {};
  var path = {};
  var distance = {};

  for (var vertex of Object.keys(this.adjacencyList)) {
    distance[vertex] = vertex === start ? 0 : Infinity;
  }

  var queue = [{ vertex: start, weight: 0 }];

  while (queue.length > 0) {
    var source = queue.shift();
    var sourceVertex = source.vertex;
    var sourceWeight = distance[sourceVertex];

    if (visited[sourceVertex]) continue;

    for (var target of this.adjacencyList[sourceVertex]) {
      var targetVertex = target.vertex;
      var targetWeight = target.weight;

      if (distance[targetVertex] > distance[sourceVertex] + targetWeight) {
        distance[targetVertex] = distance[sourceVertex] + targetWeight;
        queue.push(target);
        path[targetVertex] = sourceVertex;
      }
    }

    queue.sort((a, b) => a.weight - b.weight);
    visited[source.vertex] = source.vertex;
  }

  var result = [end];
  while (end !== start) {
    result.push(path[end]);
    end = path[end];
  }
  return result.reverse();
};

/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***
 ***/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
