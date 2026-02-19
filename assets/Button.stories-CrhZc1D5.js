import{R as d}from"./index-JhL3uwfD.js";import{j as o}from"./jsx-runtime-D_zvdyIk.js";const w=t=>{const e=["osk-ui-rt-button"];switch(t.severity){case"Secondary":e.push("osk-ui-rt-button-secondary");break;case"Success":e.push("osk-ui-rt-button-success");break;case"Warning":e.push("osk-ui-rt-button-warning");break;case"Help":e.push("osk-ui-rt-button-help");break;case"Danger":e.push("osk-ui-rt-button-danger");break}switch(t.impulseHover&&e.push("osk-ui-rt-button-hover"),t.raised&&e.push("osk-ui-rt-button-raised"),t.text){case"Primary":case"Info":e.push("osk-ui-rt-button-text");break;case"Secondary":e.push("osk-ui-rt-button-secondary-text");break;case"Success":e.push("osk-ui-rt-button-success-text");break;case"Warning":e.push("osk-ui-rt-button-warning-text");break;case"Help":e.push("osk-ui-rt-button-help-text");break;case"Danger":e.push("osk-ui-rt-button-danger-text");break}return e.join(" ")},S=t=>{const e=w(t);return o.jsxs("button",{className:e+" "+(t.className||""),onClick:t.onClick,type:t.type||"button",disabled:t.disabled,style:{width:t.fullWidth?"100%":void 0,borderRadius:t.borderRaduis?`${t.borderRaduis}px`:void 0,border:t.outlined?"1px solid currentColor":"none",display:"flex",...t.sc},children:[t.startIcon&&t.startIcon,o.jsx("span",{className:"osk-ui-rt-button-label",children:t.label}),t.endIcon&&t.endIcon]})};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},severity:{required:!1,tsType:{name:"string"},description:""},impulseHover:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},borderRaduis:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},raised:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},outlined:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sc:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const u=({iconName:t,size:e=20,color:r="currentColor",className:n,sc:s})=>({star:o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,className:n,style:s,children:o.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"})}),arrow:o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,className:n,style:s,children:o.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})}),heart:o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,className:n,style:s,children:o.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),check:o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,className:n,style:s,children:o.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}),close:o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,className:n,style:s,children:o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})[t],q={label:"ReactComponentLibrary/Button",component:S,tags:["autodocs"]},a={argTypes:{label:{description:"Текст на кнопке",control:"text"},severity:{description:"Тип кнопки (степень серьёзности)",control:"radio",options:["Primary","Secondary","Success","Info","Warning","Help","Danger"]},impulseHover:{description:"Эффект импульса при наведении на кнопку",control:"boolean"},fullWidth:{description:"На полный экран",control:"boolean"},type:{description:"type button",control:"radio",options:["button","submit","reset"]},disabled:{description:"disabled",control:"boolean"},raised:{description:"Рельефный тип кнопки (основанный на тени)",control:"boolean"},text:{description:"Текст на прозрачном фоне с эффектом наведения",control:"radio",options:["None","Primary","Secondary","Success","Info","Warning","Help","Danger"]},borderRaduis:{description:"Радиус скругления углов",control:"number"},outlined:{description:"Контурный стиль",control:"boolean"},icon:{description:"Иконка в кнопке (устаревшее, используйте startIcon)",control:!1},startIcon:{description:"Иконка в начале кнопки",control:!1},endIcon:{description:"Иконка в конце кнопки",control:!1},onClick:{description:"Обработчик клика",action:"clicked"}},args:{label:"Button",onClick:()=>console.log(1),severity:"Success",impulseHover:!1,fullWidth:!1,borderRaduis:10,type:"button",disabled:!1,raised:!1,text:"None",outlined:!1}},i={args:{label:"",severity:"Primary",startIcon:d.createElement(u,{iconName:"close",sc:{color:"red"}})}},c={args:{label:"Text",severity:"Success",startIcon:d.createElement(u,{iconName:"star"})}},l={args:{label:"Text",severity:"Warning",endIcon:d.createElement(u,{iconName:"check"}),borderRaduis:10}};var p,b,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    label: {
      description: 'Текст на кнопке',
      control: 'text'
    },
    severity: {
      description: 'Тип кнопки (степень серьёзности)',
      control: 'radio',
      options: ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Help', 'Danger']
    },
    impulseHover: {
      description: 'Эффект импульса при наведении на кнопку',
      control: 'boolean'
    },
    fullWidth: {
      description: "На полный экран",
      control: 'boolean'
    },
    type: {
      description: "type button",
      control: 'radio',
      options: ['button', 'submit', 'reset']
    },
    disabled: {
      description: 'disabled',
      control: 'boolean'
    },
    raised: {
      description: 'Рельефный тип кнопки (основанный на тени)',
      control: 'boolean'
    },
    text: {
      description: 'Текст на прозрачном фоне с эффектом наведения',
      control: 'radio',
      options: ['None', 'Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Help', 'Danger']
    },
    borderRaduis: {
      description: 'Радиус скругления углов',
      control: 'number'
    },
    outlined: {
      description: 'Контурный стиль',
      control: 'boolean'
    },
    icon: {
      description: 'Иконка в кнопке (устаревшее, используйте startIcon)',
      control: false
    },
    startIcon: {
      description: 'Иконка в начале кнопки',
      control: false
    },
    endIcon: {
      description: 'Иконка в конце кнопки',
      control: false
    },
    onClick: {
      description: 'Обработчик клика',
      action: 'clicked'
    }
  },
  args: {
    label: "Button",
    onClick: () => console.log(1),
    severity: "Success",
    impulseHover: false,
    fullWidth: false,
    borderRaduis: 10,
    type: 'button',
    disabled: false,
    raised: false,
    text: 'None',
    outlined: false
  }
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "",
    severity: "Primary",
    startIcon: React.createElement(OskolIcons.default, {
      iconName: "close",
      sc: {
        color: 'red'
      }
    })
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,k,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Text",
    severity: "Success",
    startIcon: React.createElement(OskolIcons.default, {
      iconName: "star"
    })
  }
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,I,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Text",
    severity: "Warning",
    endIcon: React.createElement(OskolIcons.default, {
      iconName: "check"
    }),
    borderRaduis: 10
  }
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const L=["Common","IconCenter","IconStart","IconEnd"];export{a as Common,i as IconCenter,l as IconEnd,c as IconStart,L as __namedExportsOrder,q as default};
