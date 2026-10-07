# TIL - Java 기초 API, 제어문, 배열

## 1. API
- API(Application Programming Interface)는 이미 만들어진 기능을 가져다 쓸 수 있게 해 주는 도구 모음입니다.
- 오늘은 Java가 기본으로 제공하는 Java 표준 API 중 Math와 Scanner를 배웠습니다.

### Math
- 수학 계산을 위한 클래스입니다. 모든 메서드가 `static`이라 객체를 만들지 않고 바로 호출합니다.
- `Math.abs()` 절댓값, `Math.max()`/`Math.min()` 큰 값/작은 값, `Math.pow()` 거듭제곱, `Math.sqrt()` 제곱근
- `Math.random()`: 0.0 이상 1.0 미만의 난수를 반환합니다.
  - 1~10 사이 정수: `(int)(Math.random() * 10) + 1`

### Scanner
- 입력을 처리하는 클래스입니다. java.util 패키지에 있어서 import가 필요합니다. (단축키: `Alt` + `Enter`)
- `System.in`으로 키보드 입력을 받습니다: `Scanner sc = new Scanner(System.in);`
- import 단축키: `Alt + Enter` (`java.util.Scanner`)

| 메서드 | 구분 기준 | 특징 |
|---|---|---|
| `nextLine()` | Enter | 공백을 포함한 한 줄 전체를 읽음 |
| `next()` | 공백, 개행 | 단어 하나만 읽음 |
| `nextInt()` | 공백, 개행 | 정수만 읽음 |

> ⚠️ **주의:** `nextInt()`나 `next()` 다음에 `nextLine()`을 쓰면, 버퍼에 남은 `\n`이 바로 읽혀서 입력이 건너뛰어집니다.
> → 중간에 `sc.nextLine();`을 한 번 호출해 버퍼를 비워 줍니다.

## 2. 조건문 (Conditional)
- `if`: 조건이 참일 때만 실행합니다.
- `if-else` / `else if`: 여러 조건 중 하나를 실행합니다.
- `switch`: 값에 따라 실행할 분기를 고릅니다. 각 `case` 끝에 `break`를 빼먹으면 다음 case까지 이어서 실행됩니다(fall-through).

## 3. 반복문 (Loop)
- `for`: 반복 횟수가 정해져 있을 때 씁니다. `for (초기식; 조건식; 증감식)`
- `while`: 조건이 참인 동안 반복합니다. 반복 횟수가 정해지지 않았을 때 씁니다.
- `break`는 반복문을 빠져나오고, `continue`는 다음 반복으로 넘어갑니다.

## 4. 배열 (Array)
- 같은 타입의 데이터 여러 개를 하나의 이름으로 관리합니다.
- `int[] arr = new int[5];` 또는 `int[] arr = {1, 2, 3};`
- 인덱스는 0부터 시작하고, 길이는 `arr.length`로 구합니다.
- 생성 후에는 크기를 바꿀 수 없습니다.

## 5. 배열 복사
- **얕은 복사:** 주소값만 복사합니다. 두 변수가 같은 배열을 가리키므로 한쪽을 바꾸면 다른 쪽도 바뀝니다.
  ```java
    int[] copy = arr;
  ```
- **깊은 복사:** 새 배열을 만들어 값을 복사합니다. 두 배열은 서로 독립적입니다.
  ```java
    int[] copy = arr.clone();
    int[] copy2 = Arrays.copyOf(arr, arr.length);

    int[] copy3 = new int[arr.length];  // 복사받을 배열을 먼저 생성
    System.arraycopy(arr, 0, copy3, 0, arr.length);
    // (원본, 원본 시작 위치, 대상 배열, 대상 시작 위치, 복사할 개수)
  ```
- `clone()`과 `Arrays.copyOf()`는 새 배열을 만들어 반환합니다.
- `System.arraycopy()`는 이미 있는 배열에 값을 복사하므로, 복사받을 배열을 먼저 만들어야 합니다.
