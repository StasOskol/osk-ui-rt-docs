import{j as a}from"./jsx-runtime-D_zvdyIk.js";const r=e=>{let n="slider";return e.round&&(n+=" round"),e.invaled&&(n+=" invaledstatus"),n.trim()},d=e=>{const n=r(e);return a.jsxs("label",{className:"switch",style:{width:"62px",height:"34px"},children:[a.jsx("input",{type:"checkbox",checked:e.checked,disabled:e.disabled,onChange:e.onChange}),a.jsx("span",{className:n,style:{cursor:e.disabled?"auto":"cursor"}})]})};d.__docgenInfo={description:"",methods:[],displayName:"InputSwitch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},round:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invaled:{required:!1,tsType:{name:"boolean"},description:""}}};const l={label:"ReactComponentLibrary/InputSwitch",component:d},s={argTypes:{checked:{description:"Рабочее ли состояние switch"},round:{description:"Прямоугольный / закруглённый switch"},disabled:{description:"Заблокированный switch"},invaled:{description:"Подсветка (если забыли нажать) -> например отправка формы"}},args:{checked:!1,onChange:()=>console.log(1),round:!1,disabled:!1,invaled:!1}};var i,t,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      description: "Рабочее ли состояние switch"
    },
    round: {
      description: "Прямоугольный / закруглённый switch"
    },
    disabled: {
      description: "Заблокированный switch"
    },
    invaled: {
      description: "Подсветка (если забыли нажать) -> например отправка формы"
    }
  },
  args: {
    checked: false,
    onChange: () => console.log(1),
    round: false,
    disabled: false,
    invaled: false
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const p=["Common"];export{s as Common,p as __namedExportsOrder,l as default};
