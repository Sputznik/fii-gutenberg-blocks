!function(){"use strict";var e,t={748:function(){var e=window.wp.richText,t=window.wp.element,r=window.wp.data,n=window.wp.primitives,o=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})),i=window.wp.blockEditor;const l="Underline",c="fiigbl-format/underline",a={name:c,title:l,tagName:"u",className:null,edit(n){let{isActive:a,onChange:u,value:s}=n;const f=(0,r.useSelect)((e=>e("core/block-editor").getSelectedBlock()),[]);if(f&&"fiigbl/editors-note"!==f.name)return null;const d=()=>{u((0,e.toggleFormat)(s,{type:c,title:l}))};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.RichTextShortcut,{type:"primary",character:"u",onUse:d}),(0,t.createElement)(i.RichTextToolbarButton,{icon:o,title:l,onClick:d,isActive:a,shortcutCharacter:"u",shortcutType:"primary",role:"menuitemcheckbox"}))}};(0,e.registerFormatType)("fiigbl-format/underline",a);var u=window.wp.blocks,s=JSON.parse('{"u2":"fiigbl/editors-note"}');(0,u.registerBlockType)(s.u2,{edit:function(e){let{attributes:r,setAttributes:n}=e;return(0,t.createElement)("div",(0,i.useBlockProps)(),(0,t.createElement)("h3",null,"Editors Note"),(0,t.createElement)(i.RichText,{placeholder:"Editors Note",allowedFormats:["core/bold","core/italic","core/link","fiigbl-format/underline"],value:r.note,onChange:e=>n({note:e})}))},save:function(){return null}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(c=!1,i<l&&(l=i));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,l=r[0],c=r[1],a=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(a)var s=a(n)}for(t&&t(r);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkfii_gutenberg_blocks=self.webpackChunkfii_gutenberg_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(748)}));o=n.O(o)}();