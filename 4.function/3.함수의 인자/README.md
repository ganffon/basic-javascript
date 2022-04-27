# 03. 함수의 인자

## Assignment (Google Classroom)

1. 함수의 인자로 이름을 받아서 이름의 길이를 **반환하는** 함수 `getLengthOfName`을 구현해주세요.
2. 함수의 인자로 나이를 받아서 나이를 **콘솔창에 출력**하는 함수 `getAge`를 구현해주세요.
3. 함수의 인자로 성과 이름(두 개의 인자)을 받아서 합친 후, 전체 이름을 출력하고 반환하는 함수 `getFullName`을 구현해주세요.
4. 함수를 아래 예시와 같이 호출하여 실행해서 함수가 잘 동작하는지 확인해주세요. 콘솔창에 아래와 같이 출력된다면 정답입니다.

```js
getLengthOfName('김코드');
// 출력되는 값 없음.
getAge(13) > 13;
getFullName('코드', '김') > '김코드';
```

5. 스스로 코드를 먼저 작성하신 후 아래 모범 답안 토글ㅇ르 확인해주세요. 스스로의 성장을 위해 답안을 먼저 확인하지 않기를 추천드립니다.

<details>
<summary> 📍 모범 답안</summary>
<pre>
<code>
function getLenghtOfName(name) {
  return name.length
}
function getAge(age) {
  console.log(age)
}
function getFullName(firstName, lastName) {
  const fullName = firstName + lastName
  console.log(fullName)
  return fullName
}
getLengthOfName('김코드')
getAge(13)
getFullName('코드', '김')
</code>
</pre>
다른 인자를 넣어 다양하게 테스트해보세요.
</details>
