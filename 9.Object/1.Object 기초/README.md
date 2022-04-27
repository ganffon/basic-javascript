# 0. 왜 객체를 써야할까요?

## 객체란 무엇일까요?

객체는 자바스크립트 데이터 타입 중의 하나입니다. 영어로는 object라고 표현합니다.

key값과 value값을 쌍으로 이루어져 있고, 배열과는 다르게 순서가 중요하지 않습니다.

![https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png](https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png)

예를 들어 다음과 같은 배열이 있다고 생각해봅시다.

```js
let person1 = ['곽철용', 'AB형', 'ENFP', '바닐라라떼'];
```

위의 배열에는 특정 사람의 이름과 혈액형, MBTI, 좋아하는 커피에 대한 정보가 담겨있습니다.

우리가 원하는 정보를 얻기 위해서는 해당 배열에 있는 Index number를 기억해야 합니다.

또 다른 사람이 있다고 생각해봅시다.

```js
let person2 = ['아이스아메리카노', 'INTP', '홍혁팔', 'O형'];
```

person2는 person1의 정보와 다른 순서로 값이 뒤섞여 있습니다.

사람이 두 명일 때는 괜찮지만, 100명이라면 어떻게 될까요? 자료를 처리하기 힘들어지겠죠?

그래서 나온 개념이 바로 객체입니다.

## 객체만들기

객체를 생성할 때는 {} 안에 key와 value를 쌍으로 묶어서 만들어 줍니다.

key값이 여러개일 때는 쉼표(,)로 구분해줍니다.

객체를 만드는 방법은 여러가지인데 그 중에 아래와 같이 중괄호를 이용해 만드는 방식을 Object Literal이라고 합니다.

```js
let person1 = {
  name: '곽철용',
  bloodType: 'AB형',
  mbti: 'ENFP',
  favoriteCoffee: '바닐라라떼',
};
```

객체로 표현하면 순서가 없기 때문에 index number를 기억하지 않아도 됩니다.

우리가 원하는 정보의 key값만 알면 정보에 접근할 수 있습니다.

# Assignment

myself라는 이름의 객체가 있습니다.

본인의 이름, 혈액형, mbti, 좋아하는 커피를 토대로 객체를 만들어보세요!

- key 값으로는 name, bloodType, mbti, favoriteCoffee를 입력해주세요!
- key 값에 오타가 발생하면 채점에 문제가 생길 수 있습니다.
