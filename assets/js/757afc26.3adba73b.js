"use strict";(self.webpackChunkpier_doc=self.webpackChunkpier_doc||[]).push([[46],{9365:(e,t,a)=>{a.d(t,{A:()=>u});var l=a(6540),n=a(53);const r={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,u),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(8168),n=a(6540),r=a(53),u=a(3104),i=a(6347),o=a(7485),s=a(1682),c=a(9466);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[u,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[o,s]=m({queryString:a,groupId:l}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),b=(()=>{const e=o??d;return g({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,r]),tabValues:r}}var b=a(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),l=s[a].value;l!==i&&(d(t),o(l))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,l.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:p},u,{className:(0,r.A)("tabs__item",h.tabItem,u?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function N(e){const t=y(e);return n.createElement("div",{className:(0,r.A)("tabs-container",h.tabList)},n.createElement(f,(0,l.A)({},e,t)),n.createElement(v,(0,l.A)({},e,t)))}function E(e){const t=(0,b.A)();return n.createElement(N,(0,l.A)({key:String(t)},e))}},3207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var l=a(8168),n=a(6540),r=a(5680);const u={yesno:"yesno_ZNTz"};function i(e){let{yesData:t,noData:a,yesLabel:l="\u0e04\u0e27\u0e23\u0e17\u0e33",noLabel:r="\u0e44\u0e21\u0e48\u0e04\u0e27\u0e23\u0e17\u0e33"}=e;return n.createElement("table",{className:u.yesno},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{width:"50%"},l),n.createElement("th",{width:"50%"},r))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,t.map((e=>n.createElement(n.Fragment,null,n.createElement("code",null,e),n.createElement("br",null))))),n.createElement("td",null,a.map((e=>n.createElement(n.Fragment,null,n.createElement("code",null,e),n.createElement("br",null))))))))}a(1470),a(9365);const o={},s="\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e01\u0e14\u0e04\u0e33",c={unversionedId:"spellings",id:"spellings",title:"\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e01\u0e14\u0e04\u0e33",description:"\u0e2b\u0e25\u0e31\u0e01\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",source:"@site/content/style-guide/02-spellings.md",sourceDirName:".",slug:"/spellings",permalink:"/style-guide/spellings",draft:!1,editUrl:"https://github.com/pier-x/pier-x/edit/main/content/style-guide/02-spellings.md",tags:[],version:"current",lastUpdatedBy:"artt",lastUpdatedAt:1634286163,formattedLastUpdatedAt:"Oct 15, 2021",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e31\u0e15\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c",permalink:"/style-guide/identity"},next:{title:"\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e41\u0e25\u0e30\u0e15\u0e32\u0e23\u0e32\u0e07",permalink:"/style-guide/floats"}},d={},p=[{value:"\u0e2b\u0e25\u0e31\u0e01\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",id:"\u0e2b\u0e25\u0e31\u0e01\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",level:2},{value:"\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e2f",id:"\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e2f",level:2},{value:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e27\u0e23\u0e23\u0e04\u0e15\u0e2d\u0e19",id:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e27\u0e23\u0e23\u0e04\u0e15\u0e2d\u0e19",level:2},{value:"\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01 <code>\u0e46</code>",id:"\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01-\u0e46",level:3},{value:"\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04 <code>:</code>",id:"\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04-",level:3},{value:"\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02",id:"\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02",level:3},{value:"\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29",id:"\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29",level:2},{value:"\u0e15\u0e31\u0e27\u0e22\u0e48\u0e2d",id:"\u0e15\u0e31\u0e27\u0e22\u0e48\u0e2d",level:2},{value:"\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e1a\u0e48\u0e2d\u0e22",id:"\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e1a\u0e48\u0e2d\u0e22",level:2},{value:"\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e22\u0e48\u0e2d",id:"\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e22\u0e48\u0e2d",level:3}],g={toc:p},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,l.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e01\u0e14\u0e04\u0e33"},"\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e01\u0e14\u0e04\u0e33"),(0,r.yg)("h2",{id:"\u0e2b\u0e25\u0e31\u0e01\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"},"\u0e2b\u0e25\u0e31\u0e01\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),(0,r.yg)("p",null,"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 \u0e43\u0e0a\u0e49\u0e15\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e01\u0e13\u0e11\u0e4c\u0e02\u0e2d\u0e07",(0,r.yg)("a",{parentName:"p",href:"https://www.orst.go.th/iwfm_table.asp?a=36"},"\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e23\u0e32\u0e0a\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15\u0e22\u0e2a\u0e20\u0e32")," \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e27\u0e48\u0e32\u0e08\u0e30\u0e21\u0e35\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e43\u0e19\u0e19\u0e35\u0e49"),(0,r.yg)("h2",{id:"\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e2f"},"\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e2f"),(0,r.yg)("p",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e15\u0e47\u0e21\u0e02\u0e2d\u0e07 PIER \u0e04\u0e37\u0e2d ",(0,r.yg)("strong",{parentName:"p"},'"\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1b\u0e4b\u0e27\u0e22 \u0e2d\u0e36\u0e4a\u0e07\u0e20\u0e32\u0e01\u0e23\u0e13\u0e4c"')," \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e22\u0e48\u0e2d\u0e27\u0e48\u0e32 \u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22\u0e2f (\u0e21\u0e35\u0e44\u0e1b\u0e22\u0e32\u0e25\u0e19\u0e49\u0e2d\u0e22) \u0e44\u0e14\u0e49 \u0e43\u0e19\u0e01\u0e23\u0e13\u0e35\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e43\u0e0a\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32 PIER \u0e44\u0e14\u0e49"),(0,r.yg)("h2",{id:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e27\u0e23\u0e23\u0e04\u0e15\u0e2d\u0e19"},"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e27\u0e23\u0e23\u0e04\u0e15\u0e2d\u0e19"),(0,r.yg)("h3",{id:"\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01-\u0e46"},"\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01 ",(0,r.yg)("inlineCode",{parentName:"h3"},"\u0e46")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u0e43\u0e0a\u0e49\u0e15\u0e32\u0e21\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e23\u0e32\u0e0a\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15\u0e22\u0e2a\u0e20\u0e32 \u0e04\u0e37\u0e2d \u0e21\u0e35\u0e40\u0e27\u0e49\u0e19\u0e27\u0e23\u0e23\u0e04\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e30\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07"),(0,r.yg)("li",{parentName:"ul"},'\u0e23\u0e30\u0e21\u0e31\u0e14\u0e23\u0e30\u0e27\u0e31\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e04\u0e33\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e0b\u0e49\u0e33 \u0e40\u0e0a\u0e48\u0e19 "\u0e1c\u0e39\u0e49\u0e2d\u0e48\u0e32\u0e19 \u0e46 \u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48"')),(0,r.yg)("h3",{id:"\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04-"},"\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04 ",(0,r.yg)("inlineCode",{parentName:"h3"},":")),(0,r.yg)("p",null,"\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e23\u0e32\u0e0a\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15\u0e22\u0e2a\u0e20\u0e32\u0e08\u0e30\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49\u0e21\u0e35\u0e40\u0e27\u0e49\u0e19\u0e27\u0e23\u0e23\u0e04\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04\n\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a PIER ",(0,r.yg)("em",{parentName:"p"},"\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07"),"\u0e21\u0e35\u0e40\u0e27\u0e49\u0e19\u0e27\u0e23\u0e23\u0e04\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e17\u0e27\u0e34\u0e20\u0e32\u0e04 \u0e17\u0e31\u0e49\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e17\u0e31\u0e49\u0e07\u0e02\u0e2d\u0e07\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e41\u0e25\u0e30\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29"),(0,r.yg)("h3",{id:"\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02"},"\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02"),(0,r.yg)("p",null,"\u0e43\u0e0a\u0e49 ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dash#En_dash"},(0,r.yg)("strong",{parentName:"a"},"en dash (\u2013)"))," \u0e43\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e2d\u0e01\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02 \u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e40\u0e27\u0e49\u0e19\u0e27\u0e23\u0e23\u0e04\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e19\u0e31\u0e49\u0e19"),(0,r.yg)(i,{yesData:["\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 3\u20135 \u0e40\u0e17\u0e48\u0e32","\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e35 \u0e1e.\u0e28. 2561\u20132563"],noData:["\u0e0a\u0e48\u0e27\u0e07\u0e2d\u0e32\u0e22\u0e38 30 \u2013 35 \u0e1b\u0e35","\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e23\u0e49\u0e2d\u0e22\u0e25\u0e30 1-2"],mdxType:"YesNo"}),(0,r.yg)("admonition",{title:"\u0e27\u0e34\u0e18\u0e35\u0e1e\u0e34\u0e21\u0e1e\u0e4c en dash \u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e15\u0e48\u0e32\u0e07 \u0e46",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Windows"),": \u0e01\u0e14 ",(0,r.yg)("kbd",null,"Alt")," \u0e04\u0e49\u0e32\u0e07\u0e44\u0e27\u0e49 \u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e40\u0e25\u0e02 ",(0,r.yg)("kbd",null,"0"),(0,r.yg)("kbd",null,"1"),(0,r.yg)("kbd",null,"5"),(0,r.yg)("kbd",null,"0")," \u0e43\u0e19 NumPad\n\u0e2b\u0e23\u0e37\u0e2d \u0e01\u0e14 ",(0,r.yg)("kbd",null,"\u229e Win")," + ",(0,r.yg)("kbd",null,".")," \u0e41\u0e25\u0e49\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01 en dash"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"MacOS"),": \u0e01\u0e14 ",(0,r.yg)("kbd",null,"\u2325 Option")," + ",(0,r.yg)("kbd",null,"-")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Linux"),": \u0e01\u0e14 ",(0,r.yg)("kbd",null,"Scroll Lock")," \u0e15\u0e32\u0e21\u0e14\u0e49\u0e27\u0e22 ",(0,r.yg)("kbd",null,"-"),(0,r.yg)("kbd",null,"-"),(0,r.yg)("kbd",null,".")))),(0,r.yg)("h2",{id:"\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29"},"\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u0e16\u0e49\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e43\u0e2b\u0e49\u0e43\u0e0a\u0e49\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 \u0e40\u0e0a\u0e48\u0e19 ",(0,r.yg)("strong",{parentName:"li"},"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1e\u0e31\u0e12\u0e19\u0e32")," \u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19 developing countries"),(0,r.yg)("li",{parentName:"ul"},"\u0e16\u0e49\u0e32\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e15\u0e31\u0e27\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e15\u0e2d\u0e19\u0e02\u0e36\u0e49\u0e19\u0e15\u0e49\u0e19\u0e04\u0e33 \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e27\u0e48\u0e32\u0e04\u0e33\u0e19\u0e31\u0e49\u0e19\u0e16\u0e49\u0e32\u0e40\u0e02\u0e35\u0e22\u0e19\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e0a\u0e48\u0e19 \u0e04\u0e33\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e15\u0e48\u0e32\u0e07 \u0e46 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e17\u0e35\u0e48\u0e02\u0e36\u0e49\u0e19\u0e15\u0e49\u0e19\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32 (\u0e41\u0e15\u0e48\u0e08\u0e23\u0e34\u0e07 \u0e46 \u0e04\u0e27\u0e23\u0e2b\u0e25\u0e35\u0e01\u0e40\u0e25\u0e35\u0e48\u0e22\u0e07\u0e01\u0e32\u0e23\u0e02\u0e36\u0e49\u0e19\u0e15\u0e49\u0e19\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32\u0e14\u0e49\u0e27\u0e22\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29)"),(0,r.yg)("li",{parentName:"ul"},"\u0e04\u0e33\u0e17\u0e31\u0e1a\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e01\u0e31\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e35\u0e22\u0e19\u0e17\u0e31\u0e1a\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22 (\u0e41\u0e15\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e30\u0e27\u0e31\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e01\u0e14) \u0e40\u0e0a\u0e48\u0e19 ",(0,r.yg)("inlineCode",{parentName:"li"},"\u0e2d\u0e35\u0e40\u0e21\u0e25")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u0e2d\u0e34\u0e19\u0e40\u0e17\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e47\u0e15")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u0e14\u0e34\u0e08\u0e34\u0e17\u0e31\u0e25")," \u0e41\u0e15\u0e48\u0e16\u0e49\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e17\u0e35\u0e48\u0e04\u0e19\u0e2d\u0e32\u0e08\u0e08\u0e30\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e19\u0e31\u0e01 \u0e40\u0e0a\u0e48\u0e19 \u0e41\u0e1e\u0e25\u0e15\u0e1f\u0e2d\u0e23\u0e4c\u0e21 \u0e08\u0e30\u0e40\u0e02\u0e35\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e01\u0e47\u0e44\u0e14\u0e49"),(0,r.yg)("li",{parentName:"ul"},"\u0e2b\u0e32\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e44\u0e14\u0e49\u0e08\u0e32\u0e01",(0,r.yg)("a",{parentName:"li",href:"https://transliteration.orst.go.th/search"},"\u0e23\u0e30\u0e1a\u0e1a\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e04\u0e33\u0e17\u0e31\u0e1a\u0e28\u0e31\u0e1e\u0e17\u0e4c")," \u0e41\u0e25\u0e30",(0,r.yg)("a",{parentName:"li",href:"https://coined-word.orst.go.th"},"\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e1a\u0e31\u0e0d\u0e0d\u0e31\u0e15\u0e34"),"\u0e02\u0e2d\u0e07\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e23\u0e32\u0e0a\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15\u0e22\u0e2a\u0e20\u0e32")),(0,r.yg)("h2",{id:"\u0e15\u0e31\u0e27\u0e22\u0e48\u0e2d"},"\u0e15\u0e31\u0e27\u0e22\u0e48\u0e2d"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e08\u0e32\u0e01\u0e2b\u0e21\u0e27\u0e14",(0,r.yg)("a",{parentName:"li",href:"#%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%A2%E0%B9%88%E0%B8%AD"},"\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e22\u0e48\u0e2d"),"\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e01\u0e48\u0e2d\u0e19"),(0,r.yg)("li",{parentName:"ul"},"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e0a\u0e37\u0e48\u0e2d \u0e40\u0e27\u0e49\u0e19\u0e27\u0e23\u0e23\u0e04\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2b\u0e21\u0e27\u0e14 \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e01\u0e48\u0e2d\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e15\u0e49\u0e19 \u0e40\u0e0a\u0e48\u0e19 ",(0,r.yg)("inlineCode",{parentName:"li"},"\u0e23\u0e28. \u0e14\u0e23.\u0e2a\u0e21\u0e0a\u0e32\u0e22"))),(0,r.yg)("h2",{id:"\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e1a\u0e48\u0e2d\u0e22"},"\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e1a\u0e48\u0e2d\u0e22"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u0e42\u0e04\u0e27\u0e34\u0e14 19")," (\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e02\u0e35\u0e14\u0e04\u0e31\u0e48\u0e19) \u0e41\u0e15\u0e48\u0e16\u0e49\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29 \u0e40\u0e02\u0e35\u0e22\u0e19\u0e27\u0e48\u0e32 ",(0,r.yg)("strong",{parentName:"li"},"COVID-19"))),(0,r.yg)("h3",{id:"\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e22\u0e48\u0e2d"},"\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e22\u0e48\u0e2d"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u0e18\u0e1b\u0e17.")," \u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e41\u0e2b\u0e48\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22")))}y.isMDXComponent=!0}}]);