### 선형 탐색 (Linear Search)

- 배열의 처음에서 부터 순차적으로 값을 비교해 찾는 것.
- 값이 있으면 true 또는 index를, 없으면 false 또는 -1을 반환
- 내장함수 indexOf, includes, find findIndex
- 한쪽 끝에서 반대쪽 끝까지 이동하면서 하나의 항목을 확인
- `O(n)`
- 데이터가 분류되지 않았을 때(정렬) 사용할 수 있는 가장 좋은 방벙
- [linear_searh.js](e.g/linear_search.js)

### 이진 탐색 (Binary Search)

- 확인을 할떄마다 남은 항목의 절반을 없앨 수 있다.
- 분류된 배열을 대상으로만 동작한다.
- 분할 정복(Divide and Conquer)
- 중간에 있는 값을 확인하고 확인 값보다 작은 값들의 배열, 확인 값보다 높은 값들의 배열로 나누어 검색 -> 원하는 값을 찾던가, 없을 떄 까지 반복
- `O(n)`
- [binary_search.js](e.g/binary_search.js)

### 나이브 문자열 탐색 (Navie String Search)

- 주어진 문장에서 주어진 문자열을 찾는 것
- 선형탐색으로 첫번쨰 문자 비교후 일치하면 두번째, 세번째 문자열을 비교. 일치하지 않으면 문장의 다음 문자열부터 다시 시작
- [string_search.js](e.g/string_search.js)
