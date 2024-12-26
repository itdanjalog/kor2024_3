
// [1] fetch 함수를 이용한 GET 요청 , 샘플 게시물 전체 요청 
/*
    - fetch( '요청할URL' , 옵션 )                    <--- 자바의 컨트롤러URL 작성.
        .then( respone => respone.json() )  <--- 요청 결과를 JSON(JS객체) 형식으로 변환
        .then( data => { 실행문; } )        <--- 요청 결과후 실행할 코드 작성.
        .catch( error => { 실행문; } )      <--- 예외 발생시 실행할 코드 작성.

    - 옵션 
        { 
            method : 'GET'/'POST'/'PUT'/'DELETE',                   <---- 4중에 사용할 HTTP메소드를 작성한다. 생략시 GET 이 된다.
            headers : { 'Content-Type' : 'application/json'} ,      <---- 서버에게 보낼 자료를 json 형식으로 보내기.
            body : JSON.stringify( 전송할객체 ),                    <--- 서버에게 보낼 객체
        }
*/
fetch( 'https://jsonplaceholder.typicode.com/posts' )
    .then( respone => respone.json() ) 
    .then( data => { console.log( data ) } )            // 100개의 게시물 
    .catch( error => { console.log( error) } );

// [2] fetch 함수를 이용한 GET 요청 , 샘플 게시물 1개 요청 , 3번 게시물 
fetch( 'https://jsonplaceholder.typicode.com/posts/3')
    .then( respone => respone.json() )
    .then( data => { console.log( data )} )             // 3번 게시물 1개 
    .catch( error => { consolelog( error) } );

// [3] fetch 함수를 이용한 POST 요청 , 임의의 게시물 저장/쓰기 요청
const board = { title : '새로운제목' , body : '새로운내용' , userId : 1 };  // 임의의 게시물 객체
const option1 = {                                       // fetch 함수의 전송 옵션 
    method : 'POST' ,                                   // 1. http 메소드 선택 ( GET/POST/PUT/DELETE 중 ) 
    headers : { 'Content-Type' : 'application/json' } , // 2. 보낼자료의 형식 설정 { 'Content-Type' : 'application/json' }
    body : JSON.stringify( board )                      // 3. 보낼자료 , JSON.stringify( 객체 ) 함수 : JSON타입 --> 문자열타입 변환 함수
}
fetch( 'https://jsonplaceholder.typicode.com/posts' , option1 )
    .then( r => r.json() )
    .then( data => { console.log( data ) } )        // {title: '새로운제목', body: '새로운내용', userId: 1, id: 101}
    .catch( e => { console.log( e ) } )

    









