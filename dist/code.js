!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{f(r.next(e))}catch(e){i(e)}}function c(e){try{f(r.throw(e))}catch(e){i(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}f((r=r.apply(e,t||[])).next())}))};figma.showUI(__html__,{width:300,height:276}),figma.ui.onmessage=e=>n(this,void 0,void 0,(function*(){const t=figma.currentPage.selection.length;if("populate"===e.type&&e.response.products.list.length>0){let o=e.response.products.list,i=e.images;function r(e,t){const a=e.type;if("GROUP"===a||"FRAME"===a)for(const n of e.children)r(n,t);else"TEXT"===a&&0===e.name.indexOf("$")?function(e,t){n(this,void 0,void 0,(function*(){let n=e.name.replace("$","");yield figma.loadFontAsync(e.fontName),e.characters=String(o[t][n])}))}(e,t):"RECTANGLE"===a&&0===e.name.indexOf("$")&&function(e,t){let n=i[t],r=figma.createImage(new Uint8Array(n)).hash,o=e.fills.scaleMode||"FIT";e.fills=[{type:"IMAGE",scaleMode:o,imageHash:r}]}(e,t)}if(t>0){i.length=t,o.length=t,o=o.map(e=>({title:e.title,brand:e.brand,discount_percent:e.discount_percent,price:e.price.price,price_before:e.price.price_before,url:e.url,id:e.id,meta_id:e.meta_id,photo_url:e.photo_url}));let e=0;for(const t of figma.currentPage.selection){for(const n of t.children)r(n,e);e++}const n=["🤘","🙌","👌","💅","🎉","🚀"],a=n[n.length*Math.random()|0];figma.notify(`Updated ${t} items ${a}`),figma.ui.postMessage("toggleSpinner")}else figma.notify("Select at least one Frame or Group 👆")}else"renameLayer"===e.type&&(t>0?figma.currentPage.selection.forEach(t=>{t.name=e.value,figma.notify(`Changed name to: ${e.value} 🖍`)}):figma.notify("Select a layer to rename 👆"))}))}});