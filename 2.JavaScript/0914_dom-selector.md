<!-- Web - DOM-selector, 부모 형제 요소, DOM 요소 조작, 어트리뷰트-프로퍼티, css, -->

## DOM 선택하기
- JS로 DOM API를 통해서 HTML 요소를 바꿀 수 있다.
- document 객체: 브라우저가 HTML 문서를 읽고 DOM을 만들 때 자동 생성되는 객체. DOM 조작의 출발점.

- `querySelector()`: CSS 선택자와 일치하는 '첫 번째 요소 하나'
- `querySelectorAll()`: CSS 선택자와 일치하는 '모든 요소'를 **NodeList**로 반환
- `getElementById()`: id가 일치하는 요소 하나 반환
- `getElementsByClassName()`: 일치하는 요소들을 **HTMLCollection**으로 반환. — 문서 변경이 실시간 반영되어 순회 중 length가 바뀔 수 있음. 그래서 `querySelectorAll()`을 더 권장.
    - `NodeList`: 스냅샷(고정값)
    - `HTMLCollection`: 실시간 반영(가변값)

## 부모 / 형제 / 자식 탐색

- `childNodes`: 모든 '자식 요소'들을 NodeList로 반환 (공백/텍스트/주석 노드 포함)
- `children`: 모든 '자식 요소'들을 HTMLCollection으로 반환 (자식 태그만)
- `firstElementChild` / `lastElementChild`: 첫 / 마지막 '자식 요소' 반환
- `parentNode`: '부모 노드' 반환
- `nextElementSibling` / `previousElementSibling`: 다음 / 이전 '형제 요소' 반환

    ```javascript
    const $pizza = document.getElementById('pizza');
    console.log($pizza.parentNode);             // 부모 노드 (food-list)
    console.log($pizza.previousElementSibling); // 이전 형제 요소 (pasta)
    ```

## 텍스트 읽고 쓰기
- `nodeValue`는 텍스트 노드를 직접 찾아가야 하는 번거로움이 있다.
- `textContent`는 요소 노드에 직접 사용하여 내부의 모든 텍스트를 쉽고 안전하게 다룰 수 있다.

    ```javascript
    const $contentArea = document.getElementById('content-area');
    console.log($contentArea.textContent);

    $contentArea.textContent = 'textContent로 변경 완료!! <span>태그는?</span>';
    // <span>이 태그로 렌더링되지 않고 문자 그대로 출력됨
    ```

- (참고) `innerText`: 화면에 실제 렌더링된 텍스트 기준 → CSS/레이아웃 영향을 받음. DOM에 저장된 값 그대로가 필요하면 `textContent` 사용.

## DOM 조작

### 전체 교체 — innerHTML
- 요소 내부를 문자열로 통째로 교체 (문자열을 HTML로 파싱)
- 사용자 입력을 그대로 넣으면 XSS 취약 → 사용자 입력 출력엔 textContent 우선
- `+=` 사용 지양: `innerHTML = innerHTML + '...'`과 동일하게 동작해서
  기존 자식을 전부 지우고 문자열 전체를 처음부터 재파싱함
  → 걸려있던 이벤트 리스너, 입력 상태가 전부 초기화됨

### 위치 지정 삽입 — insertAdjacentHTML(위치, 문자열)
- 기존 내용 유지한 채 4곳 중 하나에 삽입
- beforebegin / afterbegin / beforeend / afterend (시작 전 / 내부 맨 앞 / 내부 맨 뒤 / 종료 후)

### 요소 생성 및 조립 — createElement + appendChild
    ```javascript
    const $li = document.createElement('li');
    $li.textContent = '콜라';
    $drinkList.appendChild($li);
    ```
- 여러 개 추가 시 `DocumentFragment`에 먼저 모아 **한 번만** DOM에 붙임
  → DOM 접근(리플로우)을 반복하지 않기 위한 최적화

### 정밀 제어 — 삽입 / 이동 / 교체 / 삭제
- `부모.insertBefore(새노드, 기준노드)`: 기준노드 앞에 삽입 (기준노드는 반드시 그 부모의 자식이어야 함)
- `부모.appendChild(기존노드)`: **복사가 아니라 이동** — 원래 있던 자리에서 자동 제거됨
- `부모.replaceChild(새노드, 기존노드)`: 교체
- `노드.remove()`: 삭제


## 어트리뷰트 vs 프로퍼티
- `getAttribute('value')` = value attribute: HTML 태그 내 value - 기본값
- `value` = value property: 사용자가 편집한 현재 입력값
- checkbox: 어트리뷰트와 프로퍼티의 타입 자체가 다름
    - `getAttribute('checked')` → `''` (문자열, 존재 여부만 표시)
    - `.checked` → `true`/`false` (불리언, 실제 체크 상태)

## CSS 조작
1) inline style
- `element.style`: 해당 요소에 '인라인 스타일'을 직접 추가/변경할 수 있다
2) class 
- `element.className`: 클래스 문자열 전체 조회/교체 — **대입 시 기존 클래스 전부 삭제됨**(주의)
- `element.classList`: 클래스 단위로 추가/제거 (`add`/`remove`/`toggle`/`contains`) — 개별 제어가 필요하면 이쪽 권장
