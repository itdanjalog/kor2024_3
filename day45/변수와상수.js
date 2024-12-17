// [1] 변수 선언 
let value1;
console.log( value1 );  // undefined
// [2] 변수 값 초기화
let value2 = 10;
console.log( value2 );  // 10
// [3] 변수 값 호출 
value2;                 // 변수값 호출
console.log( value2 );  // 변수값 호출 하고 콘솔에 출력한다. // 10
// [4] 변수 값 수정 
value2 = 30;            // 특정 변수의 새로운 값 대입(변수는 하나의 값만 저장한다.) 
console.log( value2 );  // 30
// [5] 변수의 연산(계산)
let value3 = value2 + 100;  // value2(30) + 100 => 130 
console.log( value3 );  // 130 

// [6] 상수 선언 * 주의할점:무조건 초기화를 한다.
const value4 = `유재석`;
// [7] 상수 값 호출 
console.log( value4 );  // 유재석
// [8] 상수 값 수정 
// value4 = `강호동`;  // Assignment to constant variable. 오류발생 
// [9] 상수 연산[계산]
const value5 = value4 + `님 안녕하세요.`;
console.log( value5 );

// 실습1 : prompt() 함수로 하나의 점수를 입력받아서 console.log() 함수로 console탭에 입력받은 점수를 출력하시오.

















