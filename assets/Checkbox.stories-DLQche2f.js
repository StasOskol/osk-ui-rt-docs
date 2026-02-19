import{j as s}from"./jsx-runtime-D_zvdyIk.js";const a=e=>s.jsx("input",{type:"checkbox",onChange:e.onChange,checked:e.checked,id:e.inputId,disabled:e.disabled,className:"checkboxstyle",name:e.name,style:{width:`${e.size?e.size:18}px`,height:`${e.size?e.size:18}px`,accentColor:`${e.colorChecked?e.colorChecked:"#3a1078"}`,border:`2px solid ${e.colorChecked?e.colorChecked:"#3a1078"}`}});a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputId:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"string"},description:""},colorChecked:{required:!1,tsType:{name:"string"},description:""}}};const t={label:"ReactComponentLibrary/Checkbox",component:a},n={argTypes:{colorChecked:{description:"Окраска задего фона при checked",control:"color"}},args:{checked:!0,onChange:()=>console.log("checked"),disabled:!1}};var o,c,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes: {
    colorChecked: {
      description: 'Окраска задего фона при checked',
      control: 'color'
    }
  },
  args: {
    checked: true,
    onChange: () => console.log('checked'),
    disabled: false
  }
}`,...(r=(c=n.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const i=["Common"];export{n as Common,i as __namedExportsOrder,t as default};
