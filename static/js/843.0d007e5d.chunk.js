"use strict";(self.webpackChunknow_here=self.webpackChunknow_here||[]).push([[843],{9843:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var a=t(885),i=t(168),o=t(2791),r=t(6444),s=t(2186),c=t(598),d=t(7689),l=t(5117);var h=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};l.Z.get("taste-themes",{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){e(n.data)})).catch((function(n){console.log("\ucde8\ud5a5\uc120\ud0dd",n)}))};var u,m=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};l.Z.post("users/taste-themes",e,{headers:{authorization:"Bearer ".concat(n)}}).then((function(){t()})).catch((function(n){console.log("\ucde8\ud5a5\uc120\ud0dd \uc804\uc1a1",n)}))},f=t(2179),p=t(184),g=r.ZP.section(u||(u=(0,i.Z)(["\n  .choose{\n    .options{\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      gap: 2.5rem;\n      max-height: 55rem;\n      padding-bottom: var(--space-small);\n      overflow-y: scroll;\n      @media screen and (max-width: 1000px) {\n        grid-template-columns: repeat(4, 1fr);\n        gap: 2rem;\n      }\n      @media screen and (max-width: 600px) {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 1rem;\n      }\n      .option_box{\n        position: relative;\n        width: 100%;\n        aspect-ratio: 1;\n        border-radius: var(--border-radius-mid);\n        box-shadow: var(--box-shadow02);\n        overflow: hidden;\n        cursor: pointer;\n        &.on{\n          h3{\n            background-color: rgba(198, 128, 255, 0.7);\n          }\n        }\n        &:hover{\n          img{\n            transform: scale(1.05);\n          }\n        }\n        img{\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n          transition: var(--transition-default);\n        }\n        h3{\n          position: absolute;\n          top: 0;\n          width: 100%;\n          padding: 1em;\n          color: #fff;\n          font-size: var(--font-size-large);\n          font-weight: var(--font-w-bold);\n          background-color: rgba(0,0,0,0.5);\n          transition: var(--transition-default);\n          @media screen and (max-width: 600px) {\n            font-size: var(--font-size-mid);\n            padding: 0.6em 1em;\n          }\n        }\n      }\n    }\n    .submit{\n      display: block;\n      height: 3.2em;\n      width: 100%;\n      max-width: 25rem;\n      margin: var(--space-small) auto 0;\n    }\n  }\n"])));var v=function(){var n=(0,s.FV)(c.r.T),e=(0,a.Z)(n,2),t=e[0],i=(e[1],(0,s.Zl)(c.HX.Z9)),r=(0,o.useState)([]),l=(0,a.Z)(r,2),u=l[0],v=l[1],x=(0,o.useState)([]),b=(0,a.Z)(x,2),w=b[0],j=b[1],_=(0,d.s0)();return(0,o.useEffect)((function(){h(t,(function(n){v(n)}))}),[]),(0,p.jsxs)(g,{className:"c_main_section",children:[(0,p.jsx)("section",{className:"c_section",children:(0,p.jsx)("h2",{className:"c_title",children:"\uc6d0\ud558\ub294 \ud14c\ub9c8 \uc120\ud0dd"})}),(0,p.jsx)("section",{className:"c_section choose",children:(0,p.jsxs)("div",{className:"c_inner",children:[(0,p.jsx)("div",{className:"options",children:u.map((function(n){var e;return(0,p.jsxs)("div",{className:"option_box",onClick:function(e){!function(n,e){n.currentTarget.classList.toggle("on");var t=w.slice(),a=w.findIndex((function(n){return n==e.id}));a>=0?t.splice(a,1):t.push(e.id),j(t)}(e,n)},children:[(0,p.jsx)("img",{src:null!==(e=n.photoUrl)&&void 0!==e?e:f,alt:"".concat(n.name," \uc0ac\uc9c4")}),(0,p.jsx)("h3",{children:n.name})]},n.id)}))}),(0,p.jsx)("button",{className:"c_btn-primary submit",onClick:function(){w.length<5?i("\ucd5c\uc18c 5\uac1c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"):m(t,{tasteThemes:w},(function(){i("\ud14c\ub9c8 \uc120\ud0dd\uc744 \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4"),_("/")}))},children:"\uc120\ud0dd \uc644\ub8cc"})]})})]})}}}]);
//# sourceMappingURL=843.0d007e5d.chunk.js.map