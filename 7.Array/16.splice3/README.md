# 15. splice 3

Array 공부하면서 다차원배열에 접근 하는 방법을 배우셨을텐데요!

이번 시간엔 다차원 배열에 for문을 돌리는 방법을 알아보도록 할 것입니다.

for문의 중괄호 안에는 또 다른 for문을 작성할 수 있습니다.

아래의 코드는 10 이상의 숫자만 배열에 담아 리턴하는 함수입니다.

```js
let numBox = [
  [1, 2, 15, 3],
  [4, 5, 6, 10],
  [31, 7, 8, 9, 20],
];

function extractOverTen(list) {
  let temp = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] >= 10) {
        temp.push(list[i][j]);
      }
    }
  }
  return temp;
}

extractOverTen(numBox); // [ 15, 10, 31, 20 ]
```

console창에 i와 j 값을 찍어서 확인해보세요.

그래도 헷갈린다면 아래의 그림을 참고해보세요!

![https://storage.googleapis.com/replit/images/1601643567585_5fd0682bf8194671e4cd69125d2ba42d.png](https://storage.googleapis.com/replit/images/1601643567585_5fd0682bf8194671e4cd69125d2ba42d.png)

## Assignment

시장을 봐왔는데 바구니를 보니 곰팡이가 피어있습니다.

바구니에서 곰팡이를 제거하는 함수를 작성해주세요!

```js
let basket = [
  ['양파', '곰팡이'],
  ['곰팡이', '빵', '딸기잼'],
  ['귤', '곰팡이', '사과'],
];

removeGerm(basket); // [ [ '양파' ], [ '빵', '딸기잼' ], [ '귤', '사과' ] ];
```
