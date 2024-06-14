# 💸 월별 지출 가계부 마이그레이션 프로젝트
## 💲 프로젝트 소개 & 개발 기간
- 개인 가계부 프로젝트를 마이그레이션 한 프로젝트로, 여러 사용자가 공통의 월별 지출액을 작성할 때 사용되는 가계부입니다.  
- 추후 단체나 모임에서 공동 여행 경비를 관리하거나, 프로젝트 팀 예산 관리 등의 목적을 가진 프로젝트 진행시 해당 로직을 적용하여 기능을 구성할 수 있습니다.

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/681933a3-55c2-4590-af47-d3edd9fbfe70" alt="main-page" width="700" />

<br />

## 📅 프로젝트 기간
- 2024.06.11~13


<br />
<br />

## 🔎 사용 기술 스택 및 선정 이유
### 💻프론트엔드 
```
- React + Javascript // 컴포넌트 단위의 아키텍처로 유지보수하기 쉬운 UI 구축
- 스타일링: styled-components // 가독성 높은 jsx 코드 구성과 동적 스타일링을 위해 사용
- 전역 상태 관리: Zustand // 경량의 라이브러리로 가볍고 상태관리를 위한 복잡한 보일러 플레이트를 줄일 수 있어 사용
- 서버 상태 관리: Tanstack Query(React Query) // 서버 통신 성공/실패에 대한 분기 처리를 손쉽게 할 수 있음
- HTTP 클라이언트: axios // 요청/응답 인터셉터, 액세스 토큰 유지 시간 관리 등의 API 요청을 간편하게 처리 가능
```
### 🔌 백엔드
```
- glitch: json-server 배포 // 손쉬운 목업 데이터 세팅
```

<br />
<br />

## 📌 기본 기능(이전 프로젝트)
- 지출 항목에 대한 CRUD 기능 제공
  - 메인 페이지 내 지출 등록 기능(Create)
  - 월별 지출 목록 확인 기능(Read)
  - 작성 항목 수정/삭제 기능(상세 페이지 내 위치, Update/Delete)
<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/b4eaecfd-6c78-42bb-936a-733da7366be4" alt="" width="600" />
<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/6f1c3480-e3a6-4c69-9a00-3b219aaf9d41" alt="" width="600" />

- 🔗 이전 프로젝트 링크: https://github.com/hyeonseok98/account-book

<br />
<br />

## 🚀 추가 기능(현재 프로젝트)
### 1. Header Nav바 구현
- 헤더는 글래스 모피즘으로 구성하였고, 홈으로 이동할 수 있는 로고, 마이페이지 이동 이미지, 로그인/로그아웃 버튼이 위치해 있음   
- 마이페이지 이미지는 로그인했을 때만 노출된다.

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/5cf7b2c6-4589-4875-b979-98e49f9ec25c" alt="header" width="550" height="90" />


### 2. jwt 인증 서버를 통한 로그인/회원가입 기능
- 로그인을 하지 않으면 메인 페이지로 이동이 불가능하게 하였으며, 로그아웃 시 로그인 화면으로 되돌아 옴

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/ac1dcaba-1e80-4c76-a3b7-9c2b30939b18" alt="signinandout" width="500" />


### 3. 마이 페이지
- 프로필 사진 변경과 닉네임 변경 기능이 있는 마이 페이지

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/6e3129b1-c07f-4dc8-8adc-fadf885775d9" alt="mypage" width="400" />

### 4. 본인이 작성한 지출 목록에만 접근 가능
- 본인이 작성한 항목만 접근 및 수정/삭제 가능(user id 비교)

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/14bb82ae-6e80-43c4-875b-7691642f31a4" alt="authority" width="500" />


### 5. accessToken 만료시 로그아웃 처리
- 액세스 토큰 만료 이후 사용자의 움직임이 감지되면 세션 만료 alert 이후 로그아웃 처리 → 로그인 화면으로 바로 이동  
- 사용자의 click, keydown 이벤트에 반응하게 처리

<img src="https://github.com/hyeonseok98/account-book-migration/assets/157561573/8350046a-4fd1-401b-a0db-9e69d8a965c6" alt="accesstoken" width="500" />


<br />


## 📂 폴더 구조
```
📦 src
 ┣ 📂api
 ┃ ┣ 📜auth.api.js
 ┃ ┗ 📜spending.api.js // glitch 서버와 통신
 ┣ 📂assets
 ┃ ┣ 📜cat-logo.png
 ┃ ┣ 📜react.svg
 ┃ ┣ 📜tosim.png
 ┃ ┗ 📜user-black-24.png
 ┣ 📂components
 ┃ ┣ 📂AddSpendings
 ┃ ┃ ┗ 📜AddSpendings.jsx
 ┃ ┣ 📂Commons
 ┃ ┃ ┗ 📜Input.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂Layouts
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📂MonthlySpending
 ┃ ┃ ┗ 📜MonthlySpending.jsx // '월' 선택 컴포넌트
 ┃ ┣ 📂SpendingDetail
 ┃ ┃ ┗ 📜SpendingDetail.jsx // 메인 페이지 내 지출 항목
 ┃ ┣ 📂SpendingGraph
 ┃ ┃ ┗ 📜SpendingGraph.jsx // 추후 구현 예정
 ┃ ┗ 📂SpendingLists
 ┃ ┃ ┗ 📜SpendingLists.jsx // 메인 페이지 내 지출 항목 리스트
 ┣ 📂hooks
 ┃ ┗ 📜useSpendings.js // Tanstack-Query를 통한 서버 상태 관리
 ┣ 📂pages
 ┃ ┣ 📂Deatil
 ┃ ┃ ┗ 📜Detail.jsx
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┗ 📜MyPage.jsx 
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.jsx // Not Found 페이지 처리
 ┃ ┗ 📂SignUp
 ┃ ┃ ┗ 📜SignUp.jsx
 ┣ 📂routes
 ┃ ┗ 📜router.jsx
 ┣ 📂stores
 ┃ ┣ 📜selectedMonthStore.js // 월별 전역상태 관리
 ┃ ┗ 📜userInfoStore.js // user 정보 관리 
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.jsx
 ┣ 📂utils
 ┃ ┗ 📜authValidation.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

<br />


## ✅ 배운 점&아쉬운 점
- Axios-Tanstack Query를 통해 서버 통신에 대한 로직을 가독성 좋게 구현하는 방법을 익혔습니다.
- 전역 상태관리를 기존 RTK 기반에서 Zustand로 전환하면서 Zustand의 장점인 낮은 러닝커브와 손쉬운 사용법을 체감하였습니다.
- JWT 인증 서버를 통해 회원가입/로그인을 구현하였으며, 비로그인 회원에 대한 처리 방식을 고민해 볼 수 있었습니다.
- JSON-Server 사용법을 익혀, 백엔드 담당자가 없는 상태에서 서버 통신을 연습할 수 있는 방법을 익혀볼 수 있었습니다.
- 🔥 alert 대신 toast나 modal을 사용하면 더 좋은 UI/UX를 구성하는데 도움 될 것 같습니다.
- 🔥 상태 관리에 따른 성공/실패 로직을 좀 더 상세하게 구현하였으면 하는 아쉬움이 남습니다.
