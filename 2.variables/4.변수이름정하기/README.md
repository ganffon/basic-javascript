# 04. 변수 이름 정하기

변수 이름은 원하는대로 정할 수 있지만 몇 가지 주의할 점이 있습니다. 기억하시나요?

- 대소문자 구문

변수이름, 함수이름, 연산자 모두 대소문자를 구분합니다. 따라서 `myName`과 `MyName`은 다른 변수입니다.

- 변수 이름을 정할 때, 첫 번째 문자는 반드시 글자나 밑줄(\_), 달러기호($)중 하나 입니다.
- 두 번째 문자부터는 글자, 밑줄, 달러, 숫자 중에서 자유롭게 쓸 수 있습니다.
- 변수이름, 함수이름 등 camelCase(카멜케이스) 방식으로 쓸 것.
- snake*case 표현법도 있지만 잘 사용하지 않음(변수이름에 -는 사용할 수 없으므로, *를 사용한 것)

## camelCase - Example:

```js
let someVariable;
let anotherVariableName;
let thisVariableNameIsSoLong;
```

## snake_case - Example:

```js
let first_second;
let my_profile_img;
let to_do_list_array;
```

## Assignment

index.js에서 현재 선언되어 있는 변수의 이름을 수정해주세요.

- camelCase를 사용해주세요.
- 새로운 변수 선언하시면 안 됩니다. 기존 변수를 수정해주세요.
- Run 버튼을 눌러 콘솔창을 확인해주세요.
- 콘솔창에 아래과 같이 출력된다면, 정답입니다.

```js
Variable 2021
```
