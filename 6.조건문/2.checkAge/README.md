# [조건문] 2. checkAge

## Assignment

checkAge 함수를 작성하세요.

- 이름(name)과 나이(age)를 입력받는 checkAge라는 함수는 나이에 따라 다른 메시지를 리턴합니다.
- 만일 나이가 21살보다 적으면, "Go home, (name)!"
- 나이가 21살이거나 더 많으면, "Nice to meet you, (name)!" 을 리턴하세요.
- 쉼표와 공백, 느낌표까지 정확히 리턴해야 합니다.

```js
let output = checkAge('Joon', 22);
console.log(output); // --> 'Nice to meet you, Joon!'

let output2 = checkAge('Joon', 17);
console.log(output2); // --> 'Go home, Joon!'
```

힌트) 문자열을 합칠 때에는 + 연산자를 사용합니다.

```js
'We' + 'Code'; // 'WeCode'
'Awesome ' + 'JavaScript'; // 'Awesome JavaScript'
```
