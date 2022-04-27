# 09. filter 1

## filter

filter() 메서드는 array 관련 메서드로 조건에 맞는 요소들만 모아서 새로운 배열을 반환합니다.

만약 조건에 부합되는 요소가 아무것도 없다면 빈 배열을 반환합니다.

filter() 메서드도 map() 메서드와 마찬가지로 크게 filter(callbackFunction, thisAgr) 2개의 인자를 가집니다.

그리고 callbackFunction 안에서 3개의 인자 (element, index, array) 를 가지는데 첫번째 부분인 element 인자만 필수로 지정되어야하고 나머지는 선택적입니다.

아래의 코드를 보면서 이해해봅시다.

`value > 10` 이라는 조건에 맞는 요소들로만 이루어진 새로운 배열이 생겼습니다.

```js
let numbers = [10, 4, 32, 17, 5, 2];

// 첫번째 방법 (filter()의 인자에서 바로 함수를 써주는 방법)
let result = numbers.filter((value) => value > 10);

console.log(result); // [ 32, 17 ]

// 두번째 방법 (밖에서 함수를 선언하고 filter()인자에서 callback하는 방법)
function isBiggerThanTen(value) {
  return value > 10;
}

let result = numbers.filter(isBiggerThanTen);

console.log(result); // [ 32, 17 ]
```

## Assignment

fruits 라는 배열이 있습니다. 'ap'가 들어간 과일들로 이루어진 새로운 배열을 filter()를 이용하여 반환해주세요.

결과는 아래와 같아야 합니다.

```js
['apple', 'grapes'];
```

- 힌트: includes()를 사용해보세요
