class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let node = new Node(value, priority);
    // 값을 맨 뒤에 삽입
    this.values.push(node);

    // 부모 노드와 비교
    let index = this.values.length - 1;
    while (index > 0) {
      let pIndex = Math.floor((index - 1) / 2);

      if (priority > this.values[pIndex].priority) break;

      this.values[index] = this.values[pIndex];
      this.values[pIndex] = node;
      index = pIndex;
    }
    return this;
  }
  dequeue() {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();
    // root 제거
    let result = this.values[0];
    // 마지막 값을 root로 이동
    this.values[0] = this.values.pop();

    let idx = 0;
    while (true) {
      let lChildIdx = idx * 2 + 1;
      let rChildIdx = idx * 2 + 2;

      let value = this.values[idx];
      let lValue = this.values[lChildIdx];
      let rValue = this.values[rChildIdx];

      if (
        value?.priority > lValue?.priority &&
        value?.priority > rValue?.priority
      ) {
        if (lValue?.priority > rValue?.priority) {
          this.values[rChildIdx] = value;
          this.values[idx] = rValue;
          idx = rChildIdx;
        } else {
          this.values[lChildIdx] = value;
          this.values[idx] = lValue;
          idx = lChildIdx;
        }
      } else if (value?.priority > lValue?.priority) {
        this.values[lChildIdx] = value;
        this.values[idx] = lValue;
        idx = lChildIdx;
      } else if (value?.priority > rValue?.priority) {
        this.values[rChildIdx] = value;
        this.values[idx] = rValue;
        idx = rChildIdx;
      } else break;
    }
    return result;
  }
}

class dijkstra {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (
        this.adjacencyList[vertex1].filter(({ vertex }) => vertex === vertex2)
          .length
      ) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].map(
          (value) => {
            if (value.vertex === vertex2) value.weight = weight;
          }
        );
      } else {
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      }
      if (
        this.adjacencyList[vertex2].filter(({ vertex }) => vertex === vertex1)
          .length
      ) {
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].map(
          (value) => {
            if (value.vertex === vertex1) value.weight = weight;
          }
        );
      } else {
        this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
      }
    }
  }
  dijkstra(start, end) {
    // 출발과 끝이 정해져 있지 않으면 종료
    if (start === undefined || end === undefined) return undefined;
    // 출발 지점부터 노드까지의 거리가 짧게 측정된 값을 꺼낼 우선순위 큐
    let nodes = new PriorityQueue();
    // 출발 지점부터 노드까지의 측정한 거리를 저장할 객체
    let distance = {};
    // 해당 노드까지의 최단거리에 있는 노드 정보를 저장
    let path = {};
    // 출발지점부터 도착 지점까지의 방문하는 노드를 순서대로 리턴
    let result = [];

    // 출발 지점의 거리를 0, 그 외의 노드까지의 거리를 무한대로 초기화
    for (let vertex in this.adjacencyList) {
      let weight = vertex === start ? 0 : Infinity;
      nodes.enqueue(vertex, weight);
      distance[vertex] = weight;
      path[vertex] = null;
    }

    let nextVertex;
    // 우선 순위큐의 데이터가 없을 때 까지 반복
    while (nodes.values.length) {
      // 출발지점부터 측정된 제일 가까운 노드의 값을 추출
      nextVertex = nodes.dequeue().value;
      // 추출한 노드가 목적지 인가 확인
      if (end === nextVertex) {
        // 목적지 노드부터 출발 노드가 나올 떄 까지 최단 거리 노드를 추출하여 결과값에 삽입(출발지점은 삽입되지 않는다.)
        // 목적지 노드 -> 출발 노드 순으로 삽입
        while (path[nextVertex]) {
          result.push(nextVertex);
          nextVertex = path[nextVertex];
        }
        // 결과값이 저장되면 반복을 종료한다.
        break;
      }

      // 출발 지점부터 측정된 제일 가까운 노드 가 없고 측정된 거리값이 무한대 일때 제외
      // 우선순위 큐에 값이 있다면 결과는 무조건 참 일듯
      if (nextVertex || distance[nextVertex] !== Infinity) {
        // 우선순위 큐에서 추출한 노드에 연결된 노드들에 관하여 반복
        for (let connectIndex in this.adjacencyList[nextVertex]) {
          // 우선순위 큐에서 추출한 노드에 연결된 노드를 순서대로 추출
          let connectNode = this.adjacencyList[nextVertex][connectIndex];

          // 현재 우선수위 큐에서 추출한 노드에 대한 저장된 출발지점 부터의 거리 + 추출한 노드에서 연결된 노드 까지의 거리
          // ==> 출발 지점에서 부터 연결된 노드 까지의 거리
          let temp = distance[nextVertex] + connectNode.weight;

          // 새롭게 측정한 출발지점에서 부터 연결된 노드 까지의 거리와 현재 저장되어 있는 연결된 노드 까지의 거리 비교
          if (temp < distance[connectNode.vertex]) {
            // 현재 저장되어 있는 거리를 새롭게 측정한 거리로 업데이트
            distance[connectNode.vertex] = temp;
            // 연결된 노드까지 최단 거리의 노드 업데이트
            path[connectNode.vertex] = nextVertex;
            // 업데이트 된 연결된 노드 정보 우선순위 큐에 추가
            nodes.enqueue(connectNode.vertex, temp);
          }
        }
      }
    }
    // 출발지점이 추가되어 있지 않음으로 추가
    // 목적지 -> 출발지 순으로 되어 있는걸 역순으로
    return [...result, start].reverse();
  }
}

let graph = new dijkstra();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");
