# 5. Count Backwards With a For Loop

for문은 아래와 같이 큰 숫자에서 작은 숫자로 진행하는 것도 가능합니다.

```js
let ourArray = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// ourArray will now contain [10,8,6,4,2]
```

#3 Assignment

9부터 1까지의 숫자 중에서 홀수인 숫자들을 큰 순서대로 앞에서부터 myArray에 포함시켜주세요.
