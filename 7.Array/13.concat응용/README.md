# 12. concat 응용

우리는 이전 세션에서 concat() 에 대해 배웠습니다.

concat()을 사용하면 두 배열이 같은 요소를 가졌다해도 합쳐져서 새로운 배열을 반환할때 중복된 값이 나오는 것을 확인했습니다.

```js
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let result = array1.concat(array2);
console.log(result);

// 결과 (3,4,5 가 중복)
[1, 2, 3, 4, 5, 3, 4, 5, 6, 7];
```

그러면 이제는 중복된 값이 없는 배열이 되도록 해봅시다.

우리가 배웠던 filter() 를 사용하겠습니다.

```js
let eraseDuplicates = result.filter(
  (el, index) => result.indexOf(el) === index
);

console.log(eraseDuplicates);

// 결과 (중복된 값이 사라짐)
[1, 2, 3, 4, 5, 6, 7];
```

filter()가 어떻게 작동됐는지 살펴봅시다.

3을 보면 3은 중복된 값으로 result.indexOf(3)은 2가 나옵니다. 처음 3은 index[2]로 조건을 만족하지만 두번째 3은 index[5]로 조건을 만족하지 않아서 통과되지 않습니다. 그래서 두번째 3은 지워지게 됩니다. 이런식으로 중복된 3, 4,5가 지워지고 하나만 남게된 것입니다!

혹은 Set 객체를 사용해서 위와 같은 결과를 얻을 수도 있습니다.

Set객체는 요소의 값이 유일하기 위해 검사를 수행하기 때문에 중복된 값을 제거하고 싶을 때 사용합니다.

이번 세션에서는 Set을 다루지 않기 때문에 궁금하신 분들은 검색해서 공부하시는 것을 추천합니다 :)

```js
console.log([...new Set(eraseDuplicates)]);

// 결과 (중복된 값이 사라짐)
[1, 2, 3, 4, 5, 6, 7];
```

## Assignment

파스타와 피자의 재료가 배열로 나타나있습니다. 위의 코드를 참고해서 중복된 재료를 뺀 전체 재료의 배열 한 개를만들어주세요.

아래와 같은 결과가 나와야 합니다.

```

// 중복된 재료를 뺀 전체 재료
[ 'tomato', 'basil', 'onion', 'chicken', 'cheese', 'olive', 'beef' ]

```
