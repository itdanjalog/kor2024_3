
// [문제1 구현]
    // (1) 영화의 제목과 영화 평점을 배열로 선언 
let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
let movieRating = [ 8 , 4 , 7 , 6 ]

    // (2) HTML에 출력할 문자열 를 구성하기.
let outHTML = `<table>`;                                    // <table> 마크업 시작 
for( let index = 0 ; index <= movieNames.length-1 ; index++ ){
    // index는 0 부터 마지막인덱스까지 1씩 증가 반복 
    let names = movieNames[index]; // index번째의 영화제목을 반환 

    outHTML += `<tr> <td> ${ names } </td>`                 // <tr> 마크업 시작 // <td> 영화제목 
        // (4) 영화평점 만큼 별 출력하기 , 남은 별은 흰별
        let starHTML = ``                                       // -- 별을 출력할 HTML 구성 
        for( let star = 1 ; star<=10 ; star++ ){
            // star(별) 는 1부터 10까지 1씩증가 반복 [ 별 만점이 10점 만점 ]

            if( movieRating[index] >= star ){// 만약에 평점이 star보다 이상이면 검은별 추가  
                starHTML += `★`
            }else{                          // 아니고 평점이 star보다 작으면 흰별 추가 
                starHTML += `☆`
            } // if end 

        } // for end 
    outHTML += `<td> ${ starHTML } </td> </tr>`             // <tr> 마크업 종료     // <td> 구성된 10개의 별 
} // for end 

outHTML += `</table>`                                       // </table> 마크업 종료 
console.log( outHTML )

    // (3) DOM객체를 이용한 html에 변수값 출력하기 
let exampleDIV1객체 = document.querySelector('#exampleDIV1')    // 특정한 선택자의 마크업을 JS객체로 가져온다. 
exampleDIV1객체.innerHTML = outHTML; // 가져온 마크업 객체의 innerHTML를 이용하여 구성한 HTML를 대입한다.


