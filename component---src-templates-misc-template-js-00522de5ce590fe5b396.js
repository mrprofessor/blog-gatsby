(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{229:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return a}));var r=n(0),i=n.n(r),c=n(225),o=n(224),a=(n(253),"997976791");e.default=function(t){var e=t.data.markdownRemark,n=(e.frontmatter,e.html);return i.a.createElement(c.a,{bottomNav:!0},i.a.createElement(o.a,null),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:n}})),i.a.createElement("div",null,i.a.createElement("withUtterances",null)))}},253:function(t,e,n){t.exports=n(254).default},254:function(t,e,n){"use strict";n(34),n(16),n(54),n(83);var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=function(t,e,n,r,a){return void 0===n&&(n="github-light"),void 0===r&&(r="pathname"),function(s){function u(){var t=null!==s&&s.apply(this,arguments)||this;return t.withUtterancesContainer=o.createRef(),t.injectScript=function(){var i=document.createElement("script");i.src="https://utteranc.es/client.js",i.async=!0,i.setAttribute("repo",e),i.setAttribute("theme",n),i.setAttribute("issue-term",r),a&&i.setAttribute("label",a),t.withUtterancesContainer.current.appendChild(i)},t.injectPrefetch=function(){document.head.insertAdjacentHTML("beforeend",'<link rel="prefetch" href="https://utteranc.es/client.js" />')},t.injectPreload=function(){document.head.insertAdjacentHTML("beforeend",'<link rel="preload" href="https://utteranc.es/client.js" as="script" />')},t.initUtterances=function(){t.injectPrefetch(),t.injectPreload(),t.injectScript()},t}return i(u,s),u.prototype.componentDidMount=function(){this.initUtterances()},u.prototype.render=function(){return o.createElement("div",{ref:this.withUtterancesContainer},o.createElement(t,c({},this.props)))},u}(o.Component)}}}]);
//# sourceMappingURL=component---src-templates-misc-template-js-00522de5ce590fe5b396.js.map