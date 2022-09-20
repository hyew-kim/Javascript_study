'use strict';
// input: Object, path: Object 탐색 경로
// input, path : Plane String으로 입력
function solution(input, path) {
  let answer = '';
  const pathArr = path.split('.');
  const inputObj = JSON.parse(input);
  // path의 depth가 실제 object의 depth보다 더 깊을 수 있음

  pathArr.forEach((path) => {
    let value = '';
    if (answer) value = answer[path]; // one depth만 조회할 수 있다.
    else value = inputObj[path];
    answer = value;
  });
  return answer;
}
const res = solution(
  '{ "repository": { "readme": { "extension": "md" } } }',
  'repository'
);
const res2 = solution('{}', 'repository');
const res3 = solution('{ "repository": {} }', 'repository.readme');
const res4 = solution(
  '{ "repository": { "readme": { "extension": "md" } } }',
  'repository.readme.extension'
);
console.log(res3);
