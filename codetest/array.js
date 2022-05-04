//1. length
/*var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//2. push
var arr = [1, 2, 3, 4, 5];
arr.push(6); // push후 배열의 길이 return
console.log(arr);

//3. pop
var arr = [1, 2, 3, 4, 5];
arr.pop(); // pop후 배열의 길이 return
console.log(arr);


//4. shift : 맨앞의 요소 제거
var arr = [1, 2, 3, 4, 5];
arr.shift(); // 제거된 요소 return
console.log(arr);

//5. unshift : 맨앞에 원소 삽입
var arr = [1, 2, 3, 4, 5];
arr.unshift(6); // unshift후 배열의 길이 return
console.log(arr);


//6. join : 배열의 요소를 구분자를 포함하여 더함
var arr = [1, 2, 3, 4, 5];
const str = arr.join(); // separator default: ,
const str2 = arr.join(" ");
console.log(str);
console.log(str2);

//7. split : 구분자로 문자열 나누고 배열로 return
var str = "1,2,3,4,5";
var arr = str.split(","); // separator default 공백
console.log(arr);

//8. reverse : 배열 원본 reverse, reverse된 배열 return
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.reverse();
console.log(arr);
console.log(arr2);

//9. splice : 원본 변경, element 제거, 제거 당한 요소 return
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1)); // start index, delete count
console.log(arr); // delete count 입력 안 하면 끝까지 지정

//10. slice : start, end - 1만큼 배열 자른거 return
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2, 3)); // start, end
console.log(arr.slice(2, 7)); // 범위 넘어가는 end 기입 시 배열의 끝까지 slice
console.log(arr); //원본 변경 안됨

//11. find : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 return 그런 요소가 없다면 undefined를 return
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12

//12. findIndex: 주어진 판별 함수를 만족하는 값의 위치 return, 없다면 -1 return
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
*/
