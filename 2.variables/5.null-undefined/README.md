# 05. null & undefined

[Variables] 5. `null` & `undefined`

`null`과 `undefined`는 모두 자바스크립트의 데이터 타입입니다.

`undefined`는 선언은 됐지만 아직 value가 할당되지 않은 경우를 의미합니다.
null은 '빈 값(blank)'을 의미하는데 사용자가 준 value입니다. 그래서 `undefined`와 다르게 자바스크립트가 자동적으로 null 이란 값을 줄 수는 없습니다.

포괄적인 의미로 '값이 없다'는 점에서 `null`과 `undefined`가 비슷한 것 같지만 둘은 엄격하게는 같지 않습니다.

```js
let name; // undefined
let name = null; // null

console.log(null == undefined); // true
console.log(null === undefined); // false
```

엄격일치연산(`===`)는 value뿐만 아니라 `type`도 같아야 true가 나옵니다.

그러면 `null`과 `undefined`의 type은 어떤 타입일까요?
타입을 알아보기 위해서 'typeof' 연산자를 사용해봅시다.

```js
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

`null`의 type이 object가 나왔습니다. 왜일까요?
`null`은 위에 설명한대로 '값이 없음(blank)'을 의미하는 '할당된' value이기 때문입니다.

> 이번 세션은 과제가 없습니다. 다음으로 진행해주세요 :)
