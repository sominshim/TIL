
## React 라이프 사이클
![git 작업 흐름](../99.img\react-life-cycle.png)

- Rendering: 컴포넌트 함수가 실행되어, 현재 state/props를 바탕으로 "화면이 이래야 한다"는 결과물(JSX -> React Element)을 계산하는 것
- Mount: 컴포넌트가 처음으로 DOM에 삽입되는 것. "생성"
- Unmount: 컴포넌트가 화면(DOM)에서 완전히 제거되는 것 "소멸"

- Render 단게: 컴포넌트 함수 실행 -> 어떤 화면이 되어야 할지 계산만 함, Effect 금지
- Commit 단계: 계산 결과를 실제 DOM에 반영
- 부작용 / Effect(Side Effect): "화면에 뭘 그릴지 계산하는 것"과 무관하게, 외부 세계에 영향을 주거나 외부 값을 가져오는 행위. AIP 호출, setInterval, console.log, DOM 직접 조작 
    - API 호출은 호출할 때마다 결과가 다를 수 있고, 실행 자체가 "부수적인 효과"를 남김(서버 상태 변경, 네트워크 트래픽 등)
