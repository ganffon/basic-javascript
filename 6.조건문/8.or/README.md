# 03. or

## Assignment

or 함수를 작성하세요.

- 인자로 주어진 expression1과 expression2는 boolean 타입입니다.
- 두 인자가 모두 `false`인 경우에는 `false`를 반환하며 그 이외의 경우에는 모두 `true`를 반환합니다.

```js
let output = or(true, false);
console.log(output); // --> true;

let output2 = or(false, false);
console.log(output2); // --> false;
```

주의)

- `||` 연산자를 사용하지 마세요.
- 대신 `!` 와 `&&` 연산자를 사용하세요.
