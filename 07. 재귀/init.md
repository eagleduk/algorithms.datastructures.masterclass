### 재귀

<hr />

- 자기 자신을 호출하는 절차(함수)
- 재귀는 모든 곳에 사용(e.g. JSON.parse, JSON.stringify, DOM.getElementById, DOM.querySelector)
- 대부분 Tree 구조에서 많이 사용
- 반복대신 재귀 사용이 깔끔
- 재귀함수는 스택(Stack) 차럼 제일 늦게 호출되는 함수가 제일 먼저 끝나는 구조(FILO)
- 동일한 함수를 계속 호출하면서 하나의 함수가 자기 자신을 재귀적으로 호출
- 종료조건이 존재해야 한다.
- 입력값이 달라야 한다.
- `stackoverflow`
  - 종료조건이 없거나 잘못 되어있는 경우
  - 잘못된 값 반환 또는 반환값이 없는 경우

#### 팩토리얼

- [반복문을 이용한 팩토리얼](e.g/factorial_iterative.js)
- [재귀를 이용한 팩토리얼](e.g/factorial_recursive.js)

#### Helper 메소드 재귀

- 메인 함수 내에 재귀 함수가 있고 그 재귀 함수를 호출
- 재귀적이지 않은 외부함수(Outer function)가 재귀적인 내부함수(Inner function)를 호출하는 패턴
- [helper_method_recursion.js](e.g/helper_method_recursion.js)

#### 순수 재귀

- 메인 함수부터 재귀적 함수
- 배열을 복사하는 `slice, spread, concat` 을 사용하여 결과를 축적
- 문자열을 `slice, substring` 을 사용하여 사본 사용
- 객체의 경우 `assign, spread` 연산자 사용
- [collect_odds_pure_recursion](e.g/collect_odds_pure_recursion.js)
