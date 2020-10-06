// Whole-script strict mode syntax
// Javascript is very flexible.
// flexible === dangerous
// added ECMAScript 5
// 자바스크립트 엔진 조금 더 효율적으로 자바스크립트 코드를 해석.
'use strict';

// console is API
// API : Application Programming Interface.
// 자바스크립트 자체에 포함된 언어가 아니라 브라우저가 제공하는 함수
console.log('hello JS');

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
    <script src="main.js"></script>
</head>
<body></body>
</html> 

1. head 태그에 script 태그를 넣음.
한 줄 한 줄 파싱하며 내려오다 main.js를 다운 받고 실행한 뒤 다시 파싱.
단점 : js파일이 매우 heavy하고 인터넷 연결이 느리다면 user는 웹사이트를 보는 시간이 길어짐
`

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
    </head>
    <body>
    <div></div>
    <script src="main.js"></script>
    </body>
</html> 

2. body 태그 안 제일 마지막에 script 태그를 넣음.
- 한 줄 한 줄 파싱하며 내려와 페이지를 완전히 준비를 한 다음 script를 만나 다운을 받고 실행함
단점 
- 웹사이트가 자바스크립트에 굉장히 의존적이라면 전부 파싱을 하고 준비하기 전까지는 
  사용자는 의미있는 컨텐츠를 보지 못함.
`

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
    <script async src="main.js"></script>
    </head>
    <body>
    <div></div>
    </body>
</html> 

3. async 선언.
- boolean 타입 속성이기 때문에 선언만 해도 true로 설정이 되어 옵션 사용 가능.
- parsing을 하다 async 옵션의 script 태그를 만나면 병렬로 다운을 받음.
- 다운을 다 받으면 그 때 parsing 하는 것을 멈추고 다운 받은 js 파일을 실행한 뒤 다시 parsing.
장점 : 병렬적으로 처리 되기 때문에 시간 절약
단점
- parsing이 다 되기 전에 실행이 되기 때문에 HTML 내 DOM 요소를 조작하려 하는 시점에 HTML 요소가 정의 안 될 위험.
- 언제든지 실행하기 위해 멈출 수 있음. 사용자가 페이지를 보기까지 시간이 조금 더 걸리는 단점.
- 만일 async 옵션의 script 태그가 여러 개 있다면 순서에 상관 없이 다운이 먼저 된 js 파일부터 실행.
- 만약 순서에 의존적이라면 문제가 생길 수 있음.
`

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
    <script defer src="main.js"></script>
    </head>
    <body>
    <div></div>
    </body>
</html> 

3. defer 선언.
- boolean 타입 속성이기 때문에 선언만 해도 true로 설정이 되어 옵션 사용 가능.
- parsing을 하다 defer 옵션이 있는 script 태그를 만나면 병렬로 다운을 받음.
- 끝까지 parsing을 한 뒤 페이지가 준비가 되면 그 때 js 파일 실행.
장점
- 병렬적으로 처리 되기 때문에 시간 절약
- 만일 defer 옵션의 sript 태그가 여러 개라면 다운을 전부 다 받은 뒤 정렬한 순서대로 
  js 파일을 실행하므로 위험 부담을 줄임
단점
- parsing이 다 되기 전에 실행이 되기 때문에 HTML 내 DOM 요소를 조작하려 하는 시점에 HTML 요소가 정의 안 될 위험.
- 언제든지 실행하기 위해 멈출 수 있음. 사용자가 페이지를 보기까지 시간이 조금 더 걸리는 단점.
`