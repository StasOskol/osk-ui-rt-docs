import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as m}from"./index-JhL3uwfD.js";const d=n=>{const e=u.useRef(null),[r,a]=m.useState(!!n.children),s=()=>{e.current!=null&&!r?(e.current.style.display="block",e.current.classList.add("panel-inlet"),e.current.classList.remove("panel-exit"),a(!r)):e.current!=null&&r&&(e.current.classList.add("panel-exit"),e.current.classList.remove("panel-inlet"),setTimeout(()=>{e.current!=null&&(e.current.style.display="none")},200),a(!r))};return t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"panel-header",children:[t.jsx("span",{className:"panel-header-text",children:n.header}),n.toggle?r?t.jsx("button",{className:"panel-header-btnhide",onClick:s,children:"‒"}):t.jsx("button",{className:"panel-header-btnhide",onClick:s,children:"+"}):null]}),n.children?t.jsx("div",{ref:e,className:"panel-content",children:n.children}):null]})};d.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{header:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""}}};const g={label:"ReactComponentLibrary/Panel",component:d},i={argTypes:{header:{description:"Заголовок",control:"text"},children:{description:"Любые теги, внутри компонента",control:"object"},toggle:{description:"hide/visible block",control:"boolean"}},args:{header:"Header",children:t.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi laborum similique numquam maiores! Accusantium sapiente numquam voluptates, velit natus ea eaque praesentium? Tenetur molestias neque officiis id at"}),toggle:!0}};var l,o,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    header: {
      description: "Заголовок",
      control: 'text'
    },
    children: {
      description: "Любые теги, внутри компонента",
      control: 'object'
    },
    toggle: {
      description: "hide/visible block",
      control: 'boolean'
    }
  },
  args: {
    header: "Header",
    children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi laborum similique numquam maiores! Accusantium sapiente numquam voluptates, velit natus ea eaque praesentium? Tenetur molestias neque officiis id at</p>,
    toggle: true
  }
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const b=["Common"];export{i as Common,b as __namedExportsOrder,g as default};
