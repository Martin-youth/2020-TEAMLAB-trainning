# CHECK LIST  
- CSS를 HTML에 적용하는 세 가지 방법의 장단점은 무엇인가요?
- 여러 개의 CSS 규칙이 한 개의 대상에 적용될 때, 어떤 규칙이 우선순위를 가지게 되나요?
- 어떤 박스가 `position: absolute;`인 속성을 갖는다면, 그 위치의 기준점은 어디가 되나요?
- 가로나 세로로 여러 개의 박스가 공간을 채우되, 그 중 한 개의 박스만 가변적인 크기를 가지고 나머지 박스는
고정된 크기를 갖게 하려면 어떻게 해야 할까요? 
- `float` 속성은 왜 좋지 않을까요?
- Flexbox(Flexible box)를 사용할 때의 한계점은 무엇인가요?

# ANSWER
## A1. CSS를 HTML에 적용하는 세 가지 방법의 장단점
### 1. Inline style sheet
Inline style sheet는 HTML 태그의 style 속성에 CSS 코드를 넣어 적용시키는 방법이다.
>> - ex) `<p style = "color: red"> Hellow World.</p>`
>> - 꾸미는 데 한계가 있고, 재사용이 불가능 하다는 단점이 있다.
### 2. Internal style sheet
Internal style sheetHTML는 문서 안의 <style> 과 </style> 사이에 css 코드를 넣는 방법이다.
>> - ex) `<style> h1 {color : green;} </style>` 
>>> 위와 같은 코드를 넣으면, 문서 안의 모든 h1 글자는 초록색이 된다.
>> - 문서 안의 동일한 요소를 코드 하나로 손쉽게 꾸밀 수 있다는 장점이 있다.
>> - 하지만 다른 HTML 문서에 적용할 수 없다는 한계가 있다.
### 3. Linking style sheet
별도의 CSS파일을 만들어 HTML 문서와 연결하는 방법이다.
>> - ex) `<link rel="stylesheet" href="css/style.css">`
>> - HTML파일과 CSS 파일이 같은 폴더 안에 있어야 적용 가능하다.
>> - <link> 태그로 연결만 하면 여러 파일에 손쉽게 CSS를 적용할 수 있다.

## A2. CSS Style Precedence
CSS 규칙의 우선 순위는 다음과 같다.
1. 속성값 뒤에 제시된 !important
2. 태그에 inline으로 style 속성을 지정할 때
3. 선택자가 #id일 때
4. 선택자가 .class 및 pseudo 클래스 일때
5. 선택자가 tag이름일 때

## A3. `position: absolute;`인 속성의 위치 기준점
`position: absolute;`의 속성은, `position : static;`속성을 가지고 있지 않은 부모를 기준으로<br> 
위치를 조정할 수 있다.<br>
또한, 부모의 포지션이 할당되지 않으면, body를 기준으로 위치를 조정할 수 있다.

## A4. 가변적인 크기의 박스와 고정된 크기의 박스
1. 우선 `flex-basis : ??px;`를 통해 각 박스가 차지할 공간을 할당한다.
2. 그 중 가변적인 크기를 가져야 하는 박스는 페이지 크기 변화에 맞춰<br>
줄어들고 (`flex- shirnk:1;`) 늘어날 수 있게(`flex - grow :1;`) 해줘야 한다.
3. 고정된 크기의 박스들은 `flex - grow :0;`과 `flex- shirnk:0;`을 적용해주면 된다. 

## A5. `float` 속성의 문제점
#### Float 속성을 쓰면, 화면이 깨지기 쉽다.
- 겹침 문제
>> float 속성을 가진 객체의 부모 객체 밖으로 삐져나오는 문제 발생
>>> 이러한 문제가 발생될 때 마다 overflow와 같은 clear 기법을 사용하여 문제를 해결해야 하는 번거로움이 있다
- 밀려내려가는 문제
>> float된 객체가 영역보다 커서, 영역 밖으로 밀려내려가는 증상

## A6. Flexbox(Flexible box)를 사용할 때의 한계점
1. ie11 이상 버전에서만 사용할 수 있다는 점에서, 버전이 낮은 브라우저에는 적용할 수 없다.<br>
(호환성이 떨어진다.)
2. CSS 코드 자체의 직관성이 떨어진다.<br>
즉, 레이아웃을 설계할 때, CSS 코드 만으로, 시각적인 이해를 하기에 한계가 있다.
3. float 기반 레이아웃보다 훨씬 효율적이지만, grid 기반 레이아웃에 비하면 비효율 적이다.
>> flexbox는 한 개의 열 또는 행의 요소만 배치할 수 있기 때문에, 전체 페이지 레이아웃을 디자인 하려면,<br> 상당히 많은 flexbox 코드를 실행해야 한다.
