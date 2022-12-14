### 너비 우선 탐색(BFS)

> - 맨 처음(ROOT)에서 시작하여 트리를 가로질러 작업
> - 자식 노드를 확인하기 전에 형제노드를 먼저 확인
> - 큐를 사용하여 탐색
> - 구현 방법
>   > 1. 부모 노드를 조사하여 자식이 있으면 큐에 삽입
>   > 2. 큐의 데이터를 하나 꺼내어 자식이 있다면 큐에 삽입
>   > 3. 큐에서 꺼낼 데이터가 없을 때 까지 (2) 를 반복

### 깊이 우선 탐색(DFS)

#### 정위 순회(PreOrder)

- 부모 노드를 방문하고 자식 노드를 방문
- 구현 방법

> 1. 부모 노드를 방문하고 부모 노드를 결과값에 삽입
> 2. 한쪽 자식 노드가 있다면 (1) 번을 재 실행
> 3. 다른 한쪽 자식 노드가 있다면 (1) 번을 재 실행

- 정위 순휘의 결과값을 가지고 이진 탐색 트리로 재 구성 가능

#### 후위 순회(PostOrder)

- 자식 노드를 먼저 방문하고 부모 노드를 방문
- 구현 방법

> 1. 부모 노드의 한쪽 자식 노드가 있다면 (1) 번을 재 실행
> 2. 부모 노드의 다른 한쪽 자식 노드가 있다면 (1) 번을 재 실행
> 3. 자식 노드의 방문이 끝나면 부모 노드를 결과값에 삽입

#### 중위 순회(InOrder)

- 한쪽의 자식 노드를 먼저 방문하고 부모 노드를 방문하고 나머지 한쪽의 자식 노드를 방문
- 구현 방법

> 1. 부모 노드의 한쪽 자식 노드가 있다면 (1) 번을 재 실행
> 2. 한쪽 노드의 방문이 끝나면 부모 노드를 결과값에 삽입
> 3. 부모 노드의 다른 한쪽 자식 노드가 있다면 (1) 번을 재 실행

- 이진 탐색 트리에서 중위 순회를 사용하면 값이 정렬된 결과를 얻을 수 있다.

### 너비, 깊이 우선 탐색 비교

- 시간 복잡도는 각 노드를 한번씩 방문함으로 동일
- 깊이가 깊은 트리라면 깊이 우선 탐색 보다 **너비 우선 탐색이 공간복잡도에서 유리**
- 너비가 넓은 트리라면 너비 우선 탐색 보다 **깊이 우선 탐색이 공간복잡도에서 유리**
