// 종이를 하나 꺼내서 1부터 10까지의 합을 구하는 for문 코드의 작동원리를
// 표를 그려보며 익혀봅시다.
// 자세한 설명은 가이드를 잘 읽어보세요!


let result = 0;
for (let i = 0; i <= 10; i++) {
  result += i;
  console.table({
    index: i,
    result: result,
  });
}

console.log(result);