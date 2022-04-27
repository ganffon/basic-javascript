# 13. Populating

우리가 배열을 만드는 방법은 간단히 `[]`를 쓰는 방법도 있지만, `new Array()` 메소드를 쓰는 방법도 있습니다.

`new Array(4)`를 콘솔창에 입력해봅시다.

```js
console.log(new Array(4));
```

콘솔창을 확인해보면 4개의 공간을 가진 배열이 나옵니다.

![https://storage.googleapis.com/replit/images/1600842372008_d00d7d4a73a83479f46c8bf415d871dc.png](https://storage.googleapis.com/replit/images/1600842372008_d00d7d4a73a83479f46c8bf415d871dc.png)

이처럼 n개의 공간을 가진 빈 배열을 만들기 위해서 우리는 new Array(n) 이라는 메소드를 사용합니다. 이렇게 만들어진 배열은 빈 배열이고 안에 요소를 포함하고 있지 않지만, 공간을 만들어주었기 때문에 arr.length를 콘솔창에 찍어보면 4가 나올 것입니다.

빈 배열에 값을 할당하려면 반복문을 이용하시면 됩니다.

예를 들어 1~4까지의 숫자를 위의 빈 배열에 할당해보겠습니다.

```js
let arr = new Array(4);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

console.log(arr); // [ 1, 2, 3, 4 ]
```

## Assignment

new Array 메소드를 이용하여 0부터 9까지 각자 제곱한 수를 배열에 넣어주세요.

- new Array 메소드를 활용하셔야 합니다.
- 반복문을 활용해주세요.
- 이렇게 만들어진 배열의 길이는 10이 되어야 합니다.

```js
console.log(makeSquare()); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
