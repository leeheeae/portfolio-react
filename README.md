# React로 제작한 포트폴리오 사이트

## 사용한 것 🍔

**라이브러리**
`react`, `react-router-dom`,`styeld-components`,`react-helmet-async`

**폰트**
`SpoqaHanSansNeo`, `Averta-Regular`

---

## Page

1. 메인페이지

---

## 공통

#### Header 구성하기

- logo, lnb, Talk 버튼으로 나열하기
- logo 클릭 시 home으로 이동
- 모바일 해상도에서는 lnb가 숨겨지고 햄버거 버튼으로 변경
- 모바일 해상도에서 Talk 버튼이 아이콘으로 변경
- lnb에 hover시 흰색으로 변경 (기본 회색)
- 상단에 fixed

---

## 메인페이지

#### 00

- 스크롤을 하면 아래 컨텐츠가 있음을 알려주기 위해 스크롤 표시 아이콘을 하단 가운데에 배치

#### Section 01 - 나를 나타내는 글

- 'A passionate developer who wants to run together'
- 함께 달리고 싶은 열정적인 프론트앤드 개발자 이희애입니다.
- Talk, Proejct View 버튼 배치
  - 빠른 연락을 위해 배치
  - 아래의 컨텐츠 확인 전 Proejct List로 바로 이동 가능하도록 하기 위해 배치

#### Section 02 - 나의 정보 및 코멘트

- 간략한 소개말
- 나의 키워드 (이름, 생년월일, 거주지역, Frontend Developer, UI/UX Designer)
- 나를 표현할 수 있는 무드보드

#### Section 03 - 사용 가능 스킬

- 사용해본 경험이 있는 툴들을 배치
- 어느정도 가능한지에 대한 정보는 따로 표시 X, 대신 자신있는 순서대로 배치
- '새로운 것을 배우는 것에 두려워하지 않습니다.'
- Frontend Tools
  - HTML, CSS, JAVASCRIPT, REACTJS, VUEJS, JQUERY
- Backend Tools
  - NodeJS(express, koa), MYSQL, MONGODB
- Design Tools
  - Adobe Photoshop, Adobe Illustrator, Adobe XD

#### Section 04 - 작업한 프로젝트

- UI/UX Designer로 일했을 때의 작업물과 Frontend 공부를 위해 제작한 프로젝트들을 배치
- 제일 최신의 프로젝트 4개만 메인에 배치
- 마우스 올리면 그 프로젝트에 대한 제목과 키워드 표시
- List로 이동가능한 버튼 배치

#### Section 05 - 연락가능한 정보

- 'I look forward to hearing from you. '
- '함께 성장하고자 하는 곳의 연락을 기다립니다.'
- 이메일, 연락처, Github 표시
