# 🚀 try-again
> 과연 나는 sass를 스스로 이해하고 사용하고 있는걸까?  
> 이번엔 스스로 만들어보는 오늘의집 클론 코딩 페이지!  
> 자바스크립트는 온전히 내 힘으로 구현할 것이다!

### [개발배경](https://github.com/DuetoPark/try-again/wiki/%EA%B0%9C%EB%B0%9C-%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/try-again/wiki)
### [오늘의집 클론 Github](https://github.com/DuetoPark/tomorrow-house)
https://user-images.githubusercontent.com/69448900/156908897-6fdd1e98-dbbe-4130-8c5a-47e09057b351.mov

https://user-images.githubusercontent.com/69448900/156909013-c65ed13f-3476-4573-8c21-874782cd4f2f.mov

## 📌 소개
- **자바스크립트**에 집중한 페이지입니다.
- 토글되는 버튼 구현
- 동시에 모든 Form이 업데이트되는 change 이벤트 구현
- 스크롤 위치에 따라 특정 탭이 활성화되는 메뉴를 구현





## 🔖 특징
- 반응형 디자인
- lodash 라이브러리로 scroll 이벤트의 간헐적 실행
- 자료구조(Map 객체, Set 객체, 일반 객체)로 Form 데이터 관리
- `element.getBoundingClientRect` + `window.scrollY`( 뷰포트 위치 + 스크롤한 양 )으로 요소의 위치를 찾음

## 🔥 Javascript 구현
요약하자면
1. Class로 구현 👉 사용 미숙으로 장렬히 전사
2. 일반함수로 구현 👉 가독성 장렬히 전사
3. Class로 다시 구현 👉 사용법을 익힘에 의의를 둠
4. 다시 일반함수로 구현 👉 이벤트 대상별로 파일 생성 ➡️ 관리 쉬워짐

### 코드 비교
클래스 내부의 메소드를 바인딩하기위해, 이전에는 bind메소드를 사용했지만, **화살표 함수를 선언하는 방식으로 수정**  
**콜백함수**를 통해 원하는 동작을 외부에서 클래스 내부로 전달

- 개선 전
   ```javascript
   class Modal {
     constructor(target, trigger, closeButton) {
       this.modal = document.querySelector(target)
       this.overlay = document.querySelector('.overlay')
       this.triggers = document.querySelectorAll(trigger) || null
     }

     addEvent() {
       this.triggers?.forEach((trigger) => {
         trigger.addEventListener('click', this.active.bind(this))
       })
       this.overlay.addEventListener('click', this.inactive.bind(this))
     }

     active() {
       // 모달 활성
     }

     inactive() {
       // 모달 비활성
     }
   }

   const sidebar = new Modal('.sidebar', '.gnb-icon-button.is-menu')
   sidebar.addEvent()
   ```

- 개선 후
   ```javascript
   // main.js
   import * as tab from './_tab.js'

   const pageNavigation = new Scroll('product-tab-list')
   pageNavigation.setClickListenr((selectedTab) => {
     tab.inactiveAll(pageNavigation.tabItems)
     tab.highlight(selectedTab)
   })

   // scroll.js
   export default class Scroll {
     constructor(className) {
       this.tabList = document.querySelector(`.${className}`)
       this.tabList.addEventListener('click', this.onClick)
     }

     setClickListenr(callback) {
       this.callback = callback
     }

     onClick = (event) => {
       // 클릭이벤트 동작
       this.callback && this.callback(selectedTab)
     }
   }
   ```

[Modal 동작 구현에 관한 이슈](https://github.com/DuetoPark/try-again/issues/7)  
[Class 모듈화 정리한 Wiki](https://github.com/DuetoPark/try-again/wiki/%E2%9C%A8-%EA%B0%80%EB%8F%85%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-Class%EC%99%80-%EB%AA%A8%EB%93%88%ED%99%94)

## 📆 제작기간
- 페이지 구현: 2021.10.07 ~ 2022.12.31
- 자바스크립트 구현: 2022.01.07 ~ 2022.02.21

## 🙌 사용언어
- HTML
- CSS, Sass
- Javascript

### 라이브러리
- tiny-slider.js
- lodash.js

## ♻️ 아쉬운 점
- 클래스를 구현하여 중복되는 코드를 줄여야 합니다.
- React를 사용하여 중복되는 UI를 관리해야 합니다.
