<!-- for...of, spread, rest, 구조분해 할당 -->

## iterable, for of 문
- iterable: 값을 순서대로 꺼낼 수 있는 자료구조. 대표적으로 배열과 문자열이 있다.
- `for...of 문`: iterable 변수에서 요소를 하나씩 꺼내와 코드를 실행하는 순환문. 변수 관리가 필요없기 때문에 for문보다 간결하다.

    ```javascript
    const fruits = ['사과', '바나나', '딸기'];

    for (let i = 0; i < fruits.length; i++) {
        console.log('일반 for문', i, fruits[i]);
    }

    for (const fruit of fruits) { 
        console.log('for...of:', fruit);
    }
    ```
## spread, rest
- spread: 배열을 인수로 펼친다.
- rest: 인수를 배열로 합친다.
- 배열 <-> 낱개값 사이의 변환을 간단하게 적용할 수 있다
- `...`구문은 동일하지만 위치에 따라 역할이 달라진다.

    ```javascript
    const prices = [1000, 2000, 3000];
    // 함수 매개변수: rest
    function printTotal(label, ...values) {
        let total = 0;

        for(const value of values) {
            total += value;
        }
        console.log(label, total);
    }
    // 함수 호출: spread
    printTotal('합계:', ...prices); // 인수 -> ('합계:', 1000, 2000, 3000)
    ```

## 구조분해 할당
- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 손쉽게 담을 수 있게 하는 표현식
- `obj.name`, `obj.price` 같은 프로퍼티 접근을 반복할 필요가 없다.

    ```javascript
        const cart = [
            { name: '키보드', price: 50000 },
            { name: '마우스', price: 30000, spec: { color: '블랙' } }
        ];

        // 1. for...of + 객체 구조분해: index 없이, 필요한 값만 바로 이름 붙여 꺼냄
        for (const { name, price } of cart) {
            console.log(name, price);
        }
        /* 키보드 50000
           마우스 30000 */

        // 2. 배열 구조분해 + rest: 첫 요소와 나머지를 분리
        const [first, ...rest] = cart;
        // first = { name: '키보드', price: 50000 }
        // rest  = [{ name: '마우스', ... }]

        // 3. rest(모음): 낱개 인수를 배열로 받는 함수
        function getTotal(...prices) {
            return prices.reduce((sum, p) => sum + p, 0);
        }

        // 4. spread(펼침): 배열을 낱개 인수로 풀어서 넘김
        const prices = cart.map(item => item.price);
        getTotal(...prices); // getTotal(50000, 30000) 과 동일 -> 80000

        // 5. 중첩 + 기본값 구조분해: 없을 수도 있는 값을 안전하게 꺼냄
        const { spec: { color = '기본색' } = {} } = cart[1]; // 블랙
        // spec 값이 없을 때(undefined) 기본값 -> {}, 
        // color 값이 없을 때 기본값 -> '기본색'
    ```
