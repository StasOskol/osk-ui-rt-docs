import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./AccordionTabs-BpDtSnyi.js";import"./index-JhL3uwfD.js";const d=e=>(console.log(e==null?void 0:e.children),r.jsx("ol",{className:"accordion-list",children:e.children}));d.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""}}};const l={label:"ReactComponentLibrary/Accordion",component:d},i=[{header:"header1",content:r.jsx("p",{children:"Lorem1"})},{header:"header2",content:r.jsx("p",{children:"Lorem2"})},{header:"header3",content:r.jsx("p",{children:"Lorem5"})},{header:"header4",content:r.jsx("p",{children:"Lorem5"})},{header:"header5",content:r.jsx("p",{children:"Lorem5"})}],o={argTypes:{activeIndex:{description:"Активированный элемент списка",control:"number"},children:{description:"Дочерние элементы списка"}},args:{children:i.map(e=>r.jsx(t,{header:e.header,children:e.content},e.header))}};var n,c,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    activeIndex: {
      description: "Активированный элемент списка",
      control: 'number'
    },
    children: {
      description: "Дочерние элементы списка"
    }
  },
  args: {
    children: arrayAccordion.map(el => <AccordionTabs header={el.header} key={el.header}>{el.content}</AccordionTabs>)
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const p=["Common"];export{o as Common,p as __namedExportsOrder,l as default};
