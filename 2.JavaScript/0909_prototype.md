## 개념 정의

- 프로토타입(Prototype): 객체가 자신에게 없는 프로퍼티나 메서드를 찾을 때 참조하는 다른 객체
    - 객체는 내부적으로 `[[Prototype]]`이라는 숨겨진 연결을 가진다. 
    - 현재 객체에 원하는 프로퍼티가 없으면 `[[Prototype]]`이 가리키는 객체에서 다시 찾는다.
    - 이 탐색이 이어지는 구조를 **프로토타입 체인(Prototype Chain)**이라고 한다.
```javascript
const user = {
    login() {
        console.log('로그인');
    }
};

const student = Object.create(user);

student.login(); // '로그인'
```

- 생성자를 통해 생성된 객체의 [[Prototype]]이 생성자 함수의 `prototype` 객체를 참조한다.
```javascript
function Student(name) {
    this.name = name;
}

const student1 = new Student('철수');

console.log(
    Object.getPrototypeOf(student1) === Student.prototype
);
// true
```

구조: 
```
Student 함수
    │
    │ .prototype
    ↓
Student.prototype
    ↑
    │ [[Prototype]]
student1
```
- 프로토타입과 `this` : 메서드를 프로토타입에서 찾아 실행하더라도 `this`는 메서드가 저장된 객체가 아니라 **실제로 메서드를 호출한 객체**를 가리킨다.
```javascript
const user = {
    name: 'user',

    getName() {
        console.log(this.name);
    }
};

const student = Object.create(user);
student.name = 'student';

student.getName(); // student
```

- `Object.create(proto)`: 새로운 빈 객체를 만들고, 해당 객체의 [[Prototype]]을 proto로 설정한다.

```javascript
const student = Object.create(user);
```

- `Object.getPrototypeOf(obj)`: 해당 객체(obj)의 [[Prototype]]이 어떤 객체를 참조하고 있는지 확인할 수 있다.
```javascript
console.log(Object.getPrototypeOf(student) === user);
// true
```

- `Object.hasOwn(obj, key)`:해당 프로퍼티가 객체 자신에게 직접 존재하는지 확인한다.프로토타입에서 상속받은 프로퍼티라면 `false`이다.
```javascript
Student.prototype.getInfo = function() {};

console.log(Object.hasOwn(student1, 'name'));   // true
console.log(Object.hasOwn(student1, 'getInfo')); // false
```


## 추가 학습
- 프로토타입은 상속의 개념인가?

맞다. 자바스크립트에서는 객체가 다른 객체의 프로퍼티와 메서드를 프로토타입 체인을 통해 사용할 수 있는데, 이를 **프로토타입 상속(Prototype Inheritance)**이라고 한다.

```javascript
student
   ↓
user
   ↓
Object.prototype
   ↓
null
```

### 차이점
| 구분           | 클래스 기반 상속             | 프로토타입 상속                                 |
| ------------ | --------------------- | ---------------------------------------- |
| 상속 관계        | 클래스 → 클래스             | 객체 → 객체                                  |
| 핵심 구조        | 부모 클래스 / 자식 클래스       | `[[Prototype]]` 연결                       |
| 기능 사용 방식     | 자식 클래스가 부모의 구조/행동을 상속 | 객체에 없으면 프로토타입 체인에서 탐색                    |
| 중심 개념        | 클래스                   | 객체                                       |

- prototype, [[prototype]]
    - `Student.prototype`은 생성자 함수가 가지고 있는 프로퍼티
    - `student1`t의 [[Prototype]]이 어떤 객체를 프로토타입으로 참조하는지 나타내는 내부 연결

## 배운 점
- 자바스크립트의 프로토타입 상속에 대해 배웠다. 처음에는 `prototyp`e과 `[[Prototype]]`처럼 비슷한 용어가 많아 어렵게 느껴졌지만, 객체가 자신에게 없는 프로퍼티나 메서드를 다른 객체에서 찾아 사용하는 구조라는 점을 이해했다.
- 프로토타입에서 가져온 메서드를 실행하더라도 `this`는 메서드가 정의된 객체가 아니라 실제로 호출한 객체를 가리킨다는 점도 알게 되었다.