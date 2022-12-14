### 트리

- 비선형 구조(리스트: 선형구조)
- 노드는 부모-자식 관계에 따라서 자식 노드만을 가리킬 수 있다.
- 출발지점은 하나여야 한다.
- 용어설명
  > - 루트(ROOT): 트리 꼭대기에 있는 노드
  > - 자식(child): 루트에서 멀어지는 방향으로 연결된 노드
  > - 부모(parent): 자식의 반대 개념
  > - 형제(siblings): 같은 부모를 가지는 노드
  > - 리프(leaf): 자식이 없는 노드
  > - 간선(edge): 한 노드에서 다른 노드로 이어진 선
- 사용 예

  > - HTML DOM
  > - 네트워크 라우팅
  > - 최단경로를 찾는 컴퓨터 공학 논리 구조
  > - 인공지능 머신러닝(최소최대 트리)
  > - 운영체제 폴더 설계
  > - JSON

### 이진 트리

- 최대 두개의 자식을 가지는 트리

### 이진 탐색 트리(Binary Search Tree)

- 순서가 있는 정렬 데이터를 가지고 탐색
- 데이터를 비교하여 정렬 가능하게 저장
- 이진 트리의 특별한 종류
- 부모노드의 왼쪽에 있는 모든 노드는 언제나 부모보다 작다.
- 부모노드보다 오른쪽에 있는 모든 노드는 언제나 부모보다 크다.
- 매번 비교를 할 떄마다 다음에 비교할 숫자는 반으로 줄어든다.
- 시간복잡도
  > - 평균(삽입,검색): `O(logN)`, 노드의 개수가 두배가 될 떄 단계의 수는 하나가 늘어남
  > - 최악 경우(삽입,검색): `O(N)`, 노드가 한쪽으로면 쏠린 트리, 노드가 하나 추가될 떄마다 단계가 하나가 늘어남
