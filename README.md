# π try-again
> κ³Όμ° λλ sassλ₯Ό μ€μ€λ‘ μ΄ν΄νκ³  μ¬μ©νκ³  μλκ±ΈκΉ?  
> μ΄λ²μ μ€μ€λ‘ λ§λ€μ΄λ³΄λ μ€λμμ§ ν΄λ‘  μ½λ© νμ΄μ§!  
> μλ°μ€ν¬λ¦½νΈλ μ¨μ ν λ΄ νμΌλ‘ κ΅¬νν  κ²μ΄λ€!

### [κ°λ°λ°°κ²½](https://github.com/DuetoPark/try-again/wiki/%EA%B0%9C%EB%B0%9C-%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/try-again/wiki)
### [μ€λμμ§ ν΄λ‘  Github](https://github.com/DuetoPark/tomorrow-house)
https://user-images.githubusercontent.com/69448900/156908897-6fdd1e98-dbbe-4130-8c5a-47e09057b351.mov

https://user-images.githubusercontent.com/69448900/156909013-c65ed13f-3476-4573-8c21-874782cd4f2f.mov

## π μκ°
- **μλ°μ€ν¬λ¦½νΈ**μ μ§μ€ν νμ΄μ§μλλ€.
- ν κΈλλ λ²νΌ κ΅¬ν
- λμμ λͺ¨λ  Formμ΄ μλ°μ΄νΈλλ change μ΄λ²€νΈ κ΅¬ν
- μ€ν¬λ‘€ μμΉμ λ°λΌ νΉμ  ν­μ΄ νμ±νλλ λ©λ΄λ₯Ό κ΅¬ν





## π νΉμ§
- λ°μν λμμΈ
- lodash λΌμ΄λΈλ¬λ¦¬λ‘ scroll μ΄λ²€νΈμ κ°νμ  μ€ν
- μλ£κ΅¬μ‘°(Map κ°μ²΄, Set κ°μ²΄, μΌλ° κ°μ²΄)λ‘ Form λ°μ΄ν° κ΄λ¦¬
- `element.getBoundingClientRect` + `window.scrollY`( λ·°ν¬νΈ μμΉ + μ€ν¬λ‘€ν μ )μΌλ‘ μμμ μμΉλ₯Ό μ°Ύμ

## π₯ Javascript κ΅¬ν
μμ½νμλ©΄
1. Classλ‘ κ΅¬ν π μ¬μ© λ―ΈμμΌλ‘ μ₯λ ¬ν μ μ¬
2. μΌλ°ν¨μλ‘ κ΅¬ν π κ°λμ± μ₯λ ¬ν μ μ¬
3. Classλ‘ λ€μ κ΅¬ν π μ¬μ©λ²μ μ΅νμ μμλ₯Ό λ 
4. λ€μ μΌλ°ν¨μλ‘ κ΅¬ν π μ΄λ²€νΈ λμλ³λ‘ νμΌ μμ± β‘οΈ κ΄λ¦¬ μ¬μμ§

### μ½λ λΉκ΅
ν΄λμ€ λ΄λΆμ λ©μλλ₯Ό λ°μΈλ©νκΈ°μν΄, μ΄μ μλ bindλ©μλλ₯Ό μ¬μ©νμ§λ§, **νμ΄ν ν¨μλ₯Ό μ μΈνλ λ°©μμΌλ‘ μμ **  
**μ½λ°±ν¨μ**λ₯Ό ν΅ν΄ μνλ λμμ μΈλΆμμ ν΄λμ€ λ΄λΆλ‘ μ λ¬

- κ°μ  μ 
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
       // λͺ¨λ¬ νμ±
     }

     inactive() {
       // λͺ¨λ¬ λΉνμ±
     }
   }

   const sidebar = new Modal('.sidebar', '.gnb-icon-button.is-menu')
   sidebar.addEvent()
   ```

- κ°μ  ν
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
       // ν΄λ¦­μ΄λ²€νΈ λμ
       this.callback && this.callback(selectedTab)
     }
   }
   ```

[Modal λμ κ΅¬νμ κ΄ν μ΄μ](https://github.com/DuetoPark/try-again/issues/7)  
[Class λͺ¨λν μ λ¦¬ν Wiki](https://github.com/DuetoPark/try-again/wiki/%E2%9C%A8-%EA%B0%80%EB%8F%85%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-Class%EC%99%80-%EB%AA%A8%EB%93%88%ED%99%94)

## π μ μκΈ°κ°
- νμ΄μ§ κ΅¬ν: 2021.10.07 ~ 2022.12.31
- μλ°μ€ν¬λ¦½νΈ κ΅¬ν: 2022.01.07 ~ 2022.02.21

## π μ¬μ©μΈμ΄
- HTML
- CSS, Sass
- Javascript

### λΌμ΄λΈλ¬λ¦¬
- tiny-slider.js
- lodash.js

## β»οΈ μμ¬μ΄ μ 
- ν΄λμ€λ₯Ό κ΅¬ννμ¬ μ€λ³΅λλ μ½λλ₯Ό μ€μ¬μΌ ν©λλ€.
- Reactλ₯Ό μ¬μ©νμ¬ μ€λ³΅λλ UIλ₯Ό κ΄λ¦¬ν΄μΌ ν©λλ€.
