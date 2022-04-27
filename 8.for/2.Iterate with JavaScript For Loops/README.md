# 2. Iterate with JavaScript For Loops

## for문

for 반복문은 어떤 특정한 조건이 거짓으로 판별될 때까지 반복합니다.

for문의 구성은 이런 식으로 되어 있습니다.

for ([초기문]; [조건문]; [증감문])

```js
let ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

//ourArray will now contain [0,1,2,3,4].
```

위의 예시를 살펴본다면 [초기조건 : i = 0] / [조건 : i < 5 ] / [증감 : i++ : 하나씩 증가] 형태로 이루어졌습니다.

## Assignment

예시를 참고해서 forLoops() 함수를 작성해주세요.

for문을 사용하여 myArray 배열에 1부터 5까지의 숫자가 요소로 포함될 수 있도록 해주세요.
