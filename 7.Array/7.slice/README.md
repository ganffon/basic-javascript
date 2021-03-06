# 06. slice

slice 메서드는 배열 내의 특정한 요소의 index 범위에 따라 새로운 배열을 리턴합니다.

splice 메서드와는 다르게 slice 메서드는 원본 배열을 변형시키지 않습니다.

그렇기 때문에 이 메서드를 사용할 때는 slice 메서드를 적용한 새로운 변수를 선언해주어야 합니다.

![https://storage.googleapis.com/replit/images/1600925408364_f6b87ff7f040565867827625a85831a5.png](https://storage.googleapis.com/replit/images/1600925408364_f6b87ff7f040565867827625a85831a5.png)

위의 그림에서는 인자 2개가 들어갔지만, slice 메서드는 필요에 따라 인자를 최소 1개만 쓸 수도 있습니다.

- 첫번째 인자 : 배열의 index의 시작점
- 두번째 인자 : 배열의 index의 끝점

예를 들어, [1,2,3,4,5] 라는 배열이 있을 때, 숫자 2~4까지만 남기고 싶을땐 다음과 같이 메서드를 활용하시면 됩니다.

```js
let nums = [1, 2, 3, 4, 5];
let nums_new = nums.slice(1, 4);

console.log(nums); // [ 1, 2, 3, 4, 5 ]
console.log(nums_new); // [ 2, 3, 4 ]
```

콘솔창을 확인해보면 시작점인 index가 1인 요소부터 끝점인 index가 4인 요소까지를 포함해 2,3,4를 담은 배열을 리턴합니다.

slice 메서드를 사용한 이후에 원본 배열인 nums를 콘솔창에서 확인해보면 변함없는 것을 확인할 수 있습니다.

그렇기 때문에 slice를 사용할 때는 꼭 새로운 변수명을 할당해주어야 합니다.

첫번째 인자에 음수가 들어가는 경우도 있습니다.

```js
let nums = [1, 2, 3, 4, 5];
let nums_new = nums.slice(-2);

console.log(nums); // [ 1, 2, 3, 4, 5 ]
console.log(nums_new); // [ 4, 5 ]
```

음수가 들어갈 경우 끝에서부터 해당하는 숫자 만큼의 요소를 배열에 담아 리턴하게 됩니다.

## Assignment

foodBox라는 배열이 있습니다. foodBox의 요소가 과일로만 이루어질 수 있도록 slice 메서드를 활용해 코드를 작성해주세요.

```js
findFruits(['🍕', '🍤', '🍇', '🥝', '🍒', '🍉', '🍗', '🍟']);
// 위의 코드를 실행하면 다음과 같은 결과가 나옵니다.
// [ '🍇', '🥝', '🍒', '🍉' ]
```
