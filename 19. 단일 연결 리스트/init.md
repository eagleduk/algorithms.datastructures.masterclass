- 다음 데이터 앨리먼트를 가리키는 인덱스 없이 다수의 앨리먼트들로 구성
- 다수의 노드(앨리먼트)들로 구성되고 각각의 노드는 문자열 혹은 숫자와 같은 하나의 데이터 앨리먼트를 저장
- 각 노드들은 다음 노드를 가리키는 정보 역시 저장하고 있어야 하면 더 이상 다음 노드가 없을 때 아무것도 없음을 의미하는 `null`을 저장하게 된다.
- `헤더`는 연결 리스트의 시작 노드
- `테일`은 연결 리스트의 마지막 노드
- 원하는 노드에 접근하고 싶으면 헤더부터 원하는 노드에 이를 때 까지 다음 노드의 정보를 요청해야 한다.
- 단방향 연결 리스트는 각 노드가 다음 노드로 오직 단일 방향으로만 연결
- 각 항목과 일치하는 번호를 가지고 있지 않고 첫 노드를 의미하는 변수인 헤드 포인터를 가진다.
- 임의 접근이 허용되지 않는다.( 원하는 항목의 값을 바로 얻을 수 없다.)
- 새로운 항목을 추가 하거나 기존 항목의 제거가 편하다.(`삽입`과 `제거`가 편하다.)
- 시간 복잡도

  > - 삽입 `O(1)`
  > - 삭제 `O(1) ~ O(N)`
  > - 검색 `O(N)`
  > - 접근 `O(N)`
  > - 삽입과 삭제의 시간이 중요하고 임의 접근에 대한 필요성이 별로 없을 경우 <strong>Array 보다 유리</strong>
