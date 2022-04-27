# 02. 함수의 반환

아래 과제를 수행하기 전에 index.js에 있는 예시 코드가 어떻게 동작하는지 확인해주세요.

## Assignment (Google Classroom)

1. 7을 반환하는 함수 `returnSeven`을 만들어주세요. 그리고 해당 함수를 호출해서 실행해주세요.
2. "I LOVE WECODE"의 길이를 계산해서 길이 값을 반환하는 함수 `getStringLength`를 만들어주세요. 그리고 해당 함수를 호출해서 실행해주세요.
3. 본인의 이름을 `name`이라는 변수에 저장해서 `name`을 반환하는 함수 `getMyName`를 만들어주세요. 그리고 해당 함수를 호출해서 실행해주세요.
4. 스스로 코드를 먼저 작성하신 후 아래 모범 답안 토글을 확인해주세요. 스스로의 성장을 위해 답안을 먼저 확인하지 않기를 추천드립니다.

<details>
<summary> 📍모범 답안</summary>
<pre>
<code>
function returnSeven() {
  return 7
}
returnSeven()
function getStringLength() {
  return "I LOVE WECODE".length
}
getStringLength()
function getMyName() {
  const name = '김코드'
  return name
}
getMyName()
</code>
  각 코드에 값을 return만 했을 뿐 출력하는 과정이 없기 때문에 콘솔에 값이 나타나지 않는 것을 확인하실 수 있습니다. (replit 특성상 가장 마지막 함수 return 값은 출력되지만, 일반적인 경우가 아닙니다.)
</pre>
</details>
