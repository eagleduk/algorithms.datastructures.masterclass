- 합병 정렬과 같은 가정으로 동작
- 재귀를 통해 해결
- 데이터를 분할하여 0 또는 1개의 항목이 남을 떄 까지 분할하여 개별적으로 정렬되는 방식
- 피벗 포인트라 부르는 단일 요소를 선택하여 수행
- 피벗 포인트보다 작은 수, 큰 수로 분할 => 피벗 포인트는 올바른 위치가 된다.
- 작은 수, 큰 수로 분할된 모임해서 반복
- 퀵 정렬의 실행 시간은 피벗 선택 위치에 따라 다르다. 데이터의 중간값을 선택했을 떄가 가장 이상적
- 피벗에 따른 배열을 재 배열하고 피벗의 올바른 위치를 반환하는 `Helper 함수` 필요
- 시간복잡도
  > - 최적`O(nlogn)`
  >
  >   - 피벗이 항상 중간 데이터 값일 때
  >
  > - 평균`O(nlogn)`
  > - 최악`O(n^2)`
  >
  >   - 피벗이 항상 가장 작은 데이터이거나 가장 큰 데이터 일 때(이미 정렬되어 있을때)
  >   - 피벗을 배열의 시작이 아니라 무작위 위치로 지정하면 최악의 경우를 피할 확률이 높다.
- [quick_self](e.g/quick_self.js)
- 배열을 분할하여 각각의 배열을 정렬 후 합지는 방법으로 구현하였지만, 배열을 분할 하지 않고 구현하는 방법이 있다.
- 새로운 배열을 만들지 않고 기존 배열의 위치 이동 및 피벗 인덱스를 이용하여 전, 후 배열을 다시 정렬하는 방법

- [quicksort](e.g/quicksort.js.js)
