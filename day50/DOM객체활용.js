// [1 data ] 할일목록(배열) 전역변수 선언 , 샘플 데이터 포함 
let 할일목록 = [
    {할일코드 : 1 , 할일내용 : '1교시수업듣기' , 할일상태:false},
    {할일코드 : 2 , 할일내용 : '여행준비하기' , 할일상태:true }
]
// [2 data ] 할일코드(pk역할) 부여하기 위한 식별번호 , auto_increment
let 식별번호 = 3;

// [3 C] 등록함수 정의 , 
// 사용처 [등록]버튼 onclick 클릭했을때 , 매개변수 : X  , 반환값 : X 
function 등록함수(){ 
    // 1. HTML로부터 INPUT 마크업 DOM 객체 가져오기
    const contInput = document.querySelector('.contInput'); console.log( contInput);
    // 2. 가져온 DOM객체의 VALUE 속성 가져온다.     
    const 할일내용 = contInput.value;                       console.log( 할일내용 );
    // 3. 할일 객체 구성한다.
    const 할일 = {          
        할일코드 : 식별번호 , 
        할일내용 : 할일내용 , 
        할일상태 : false ,
    };                                                      console.log( 할일 );
    // 4. 구성한 객체를 배열에 저장한다.
    할일목록.push( 할일 );                                  console.log( 할일목록 );
    // 5. 객체 저장 완료시 할일코드 +1 증가한다.
    식별번호++;                                             console.log( 식별번호 );
    // 6. 결과 및 종료 
    alert('[할일 등록 되었습니다.]');
    contInput.value = ``;
    return; //
} // f end 

// [4 R] 출력함수 정의 , 
// 사용처 : JS가 실행될때 , 등록/수정/삭제 했을때 , 매개변수 : X , 반환값 : X
function 출력함수(){ }

// [5 U] 수정함수 정의 , 상태변경 
// 사용처 : [수정]버튼 onclick 클릭했을때 , 매개변수 : 수정할할일코드 , 반환값 : X 
function 수정함수( 할일코드 ){ }

// [6 D] 삭제함수 정의 , 
// 사용처 : [삭제]버튼 onclick 클릭했을때 , 매개변수 : 삭제할할일코드 , 반환값 : X
function 삭제함수( 할일코드 ){ }

