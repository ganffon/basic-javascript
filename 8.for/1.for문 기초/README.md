# 1. for문 기초

## for문이란 무엇일까요?

javascript 세상에서는 생각보다 반복적으로 해야할 일들이 많습니다.

자료의 개수가 5개 정도라면 일일히 세거나 특정 단어를 입력하는 등의 일이 쉽습니다.

하지만 자료의 개수가 20개라면..?! 100개라면..? 생각이 달라지겠죠?

그래서 필요한 것이 반복문입니다.

반복문은 여러 종류가 있는데 이번 시간에는 javascript 세상에서 가장 널리 쓰이는 for문에 대해 알아보도록 합시다.

![https://storage.googleapis.com/replit/images/1600679050924_1acfdaa5ddf6268ccea5a54d14d6a85d.png](https://storage.googleapis.com/replit/images/1600679050924_1acfdaa5ddf6268ccea5a54d14d6a85d.png)

위의 그림과 같이 for문을 작성할 때는 소괄호 안에 초기화문, 조건문, 증감식을 쓰고

사이사이에 세미콜론(;)을 입력해주어야 합니다.

예를 들어 1부터 10까지의 합을 구해보겠습니다.

```js
let result = 0;
for (let i = 0; i <= 10; i++) {
  result += i;
}
console.log(result); // 45
```

> 초기화문

- 초기화문 작성 시 변수 선언자를 써주어야 합니다.
- 변수명은 보통 index를 의미하는 i로 선언합니다.
- index가 증가할 경우 숫자는 보통 0부터 시작합니다.

> 조건문

- index의 범위를 설정합니다.
- index가 증가할 경우 특정한 숫자 미만 혹은 이하로 설정합니다.
- index가 감소할 경우 0 이상으로 설정합니다.
- 조건문이 true일 경우 반복문을 계속 실행합니다.
- 조건문이 false일 경우 반복문이 종료됩니다.

> 증감식

- index가 1씩 증가할 경우 ++을 써줍니다.(index의 숫자가 하나씩 증가)
- index가 1씩 감소할 경우 --를 써줍니다.(index의 숫자가 하나씩 감소)
- i++은 i = i+1 을 줄여서 쓴 것입니다. i += 1 로 표현할 수도 있습니다.
- i++는 ++1로 표현할 수 있습니다.

## for문이 어떻게 동작 하는지 알아볼까요?

종이와 펜을 꺼내주세요!

1부터 10까지의 합을 구하는 for문 코드를 표를 그려보며 익혀봅시다.

![https://storage.googleapis.com/replit/images/1600685887296_6dd12561c134da0e65c40e109310553f.png](https://storage.googleapis.com/replit/images/1600685887296_6dd12561c134da0e65c40e109310553f.png)

위의 그림처럼 i값과 n값 그리고 result값을 쭉 적어보세요.

우리가 위의 조건문에서 i <= 10 이라는 조건을 주었기 때문에 n이 10이 될 때까지 작성해줍니다.

결과값을 확인하고 싶다구요?

Run.js 혹은 개발자도구의 console 창을 열어서 for문을 작성하고 console.table로 결과를 확인해주세요!

```js
let result = 0;
for (let i = 0; i <= 10; i++) {
  result += i;
  console.table({
    index: i,
    result: result,
  });
}

console.log(result);
```

표를 다 완성하셨고, for문이 돌아가는 원리에 대해 이해하신 분들은 submit 버튼을 힘차게 눌러주세요! :)
