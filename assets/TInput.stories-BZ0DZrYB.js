import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-JhL3uwfD.js";const x=e=>{var o,l,c,d,u,p,m,g;const a=(t,r)=>r?`${t} ${r}`:t;return n.jsxs("div",{style:(o=e.sc)==null?void 0:o.wrapper,className:a("osk-ui-rt-text-input-wrapper",(l=e.className)==null?void 0:l.wrapper),children:[e.label&&n.jsxs("label",{style:(c=e.sc)==null?void 0:c.label,className:a("osk-ui-rt-text-input-label",(d=e.className)==null?void 0:d.label),children:[e.label,e.required&&n.jsx("span",{style:{color:"#d32f2f",marginLeft:2},children:"*"})]}),n.jsx("input",{value:e.value,onChange:t=>{var r;return(r=e.onChange)==null?void 0:r.call(e,t.target.value)},type:e.type||"text",name:e.name?e.name:"default-name-btn",placeholder:e.placeholder||"",disabled:e.disabled,style:(u=e.sc)==null?void 0:u.inp,"aria-invalid":!!e.error,className:a("osk-ui-rt-text-input",(p=e.className)==null?void 0:p.inp)}),e.error&&n.jsx("span",{className:a("osk-ui-rt-text-input-error-message",(m=e.className)==null?void 0:m.error),style:{color:"#d32f2f",fontSize:12,...(g=e.sc)==null?void 0:g.error},children:e.error})]})};x.__docgenInfo={description:"",methods:[],displayName:"TInput",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    inp: string,
    label: string,
    error: string,
    wrapper: string
}`,signature:{properties:[{key:"inp",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"wrapper",value:{name:"string",required:!0}}]}},description:""},sc:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    inp?: React.CSSProperties,
    label?: React.CSSProperties,
    error?: React.CSSProperties,
    wrapper?: React.CSSProperties
}`,signature:{properties:[{key:"inp",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"label",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"error",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"wrapper",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}},description:""}}};const w={label:"ReactComponentLibrary/TInput",component:x,tags:["autodocs"]},i={argTypes:{value:{description:"Значение по умолчанию",control:"text"},onChange:{description:"Обработчик изменений",action:"change"},name:{description:"",control:"text"},placeholder:{description:"Пояснение поля ввода",control:"text"},type:{description:"Тип поля ввода",control:"radio"},disabled:{description:"Блокировка поля",control:"boolean"},label:{description:"Текст описания поля",control:"text"},error:{description:"Текст при ошибке",control:"text"},required:{description:"Подсвечивание обязательного поля",control:"boolean"}},args:{onChange:e=>console.log("Новое значение:",e),placeholder:"Введите текст"}},s={args:{value:"",placeholder:"Пароль",type:"password",disabled:!1,required:!0,label:"Пароль",error:"Неправильный пароль"}};var y,b,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    value: {
      description: 'Значение по умолчанию',
      control: 'text'
    },
    onChange: {
      description: 'Обработчик изменений',
      action: 'change'
    },
    name: {
      description: '',
      control: 'text'
    },
    placeholder: {
      description: 'Пояснение поля ввода',
      control: 'text'
    },
    type: {
      description: 'Тип поля ввода',
      control: 'radio'
    },
    disabled: {
      description: 'Блокировка поля',
      control: 'boolean'
    },
    label: {
      description: 'Текст описания поля',
      control: 'text'
    },
    error: {
      description: 'Текст при ошибке',
      control: 'text'
    },
    required: {
      description: 'Подсвечивание обязательного поля',
      control: 'boolean'
    }
  },
  args: {
    onChange: (value: string) => console.log('Новое значение:', value),
    placeholder: 'Введите текст'
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,S,q;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: "",
    placeholder: "Пароль",
    type: "password",
    disabled: false,
    required: true,
    label: "Пароль",
    error: "Неправильный пароль"
  }
}`,...(q=(S=s.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const T=["Common","LabelError"];export{i as Common,s as LabelError,T as __namedExportsOrder,w as default};
