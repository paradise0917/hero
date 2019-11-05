# Hero

Hahow 徵才專案作業 :relaxed::relaxed:

## 安裝與執行

Step1. Install Dependencies

```Terminal
npm install
```
Step2. 使用 webpack-dev-server 運行在 localhost:8080
```Terminal
npm run start
```

其他：產生 Production 壓縮版本
```Terminal
npm run deploy
```

## 專案架構

![](https://i.imgur.com/f6CHvPL.png)

資料夾架構分為三個部分 
* components
  主要依照 UI 切割分為共用、cards 和 profile 三個部分
    * common
      放置共用的 component 與 css 變數等檔案
    * cards
      放置與 heroCard 相關的 component
    * profile
      放置與 heroProfile 相關的 component 
* reucers
  放置 app 所用到的 reducer
* store
  放置 app 的 redux 的 store



## 使用的第三方 Library
Dependencies
* React
  前端框架之一，相較於傳統的開發模式更方便多人協作，適合大型專案開發，強調單向資料流、Component 等概念
* React Router DOM
  用來做 Router 的套件，可以讓 UI 與 URL 同步
* React-bootstrap
  搭配 react 使用的 CSS Framework
* Redux
  state 管理工具，從 Flux 的概念發展而來並且加以簡化，

DevDependencies
* Babel
  JacaScript 的編譯器，可幫我們把較新版本的 JavaScript 轉換成瀏覽器可兼容的版本
* Eslint
  一個 JavaScript Linter，可協助開發人員檢查並統一 coding style，確保程式碼品質與
* Webpack
  模組打包工具，當我們使用很多較新的套件時，需要額外安裝轉換工具幫我們轉換成瀏覽器可閱讀的語言，Webpack 在安裝相關套件後可統一幫我們做轉換，另外也提供壓縮程式碼等很多方便的服務
* css-loader, sass-loader, style-loader
  讓開發人員在 js 中可以引入 css、sass 檔案（搭配 Webpack 使用）

## 寫註解的原則
在每個 Component 與較為複雜的 function 開頭加入註解，因雖然有些在自己的角度上看起來很直覺，但怕是自我感覺良好 :joy: 所以都會盡可能的補上

## 遇到的困難、問題、解決的方法
* 第一次使用 Redux 較不熟悉
    * 困難與問題：之前在開發時皆使用 React Context 來管理 Global State，因看到 Hahow 徵才的需求有提到 Redux 便想嘗試學習使用，但因第一次使用較不熟悉因此延長了許多開發時間，在 Redux 的使用上也掌握的不是很好
    * 解決方法：在時間有限的情況下，便先排定了想做功能與效果的優先順序，先將主要的功能完成，剩下的時間再去做優化，Redux 的部分則盡量爬文看別人是如何使用的
* 第一次在 React 專案中使用 CSS framework
    * 困難與問題：因先前未曾在 React 專案中使用 CSS Framework，但想嘗試練習看看，但也因較不熟悉所以花了一些時間摸索
    * 解決方法：在使用前先閱讀官網的相關文件，查看可能可以用到的 Component，加快開發速度

## 執行畫面
![](https://i.imgur.com/eCPhlb6.jpg)
![](https://i.imgur.com/ltrzOao.png)


