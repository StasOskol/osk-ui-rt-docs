import{j as a}from"./jsx-runtime-D_zvdyIk.js";const r=e=>{const p=n=>n.virtualScroll&&n.size?n.size:n.virtualScroll?5:n.size?n.size:1,s=n=>n.fullWidth?"100%":n.width?`${n.width}px`:"194px";return a.jsxs("select",{className:"selectdropdown",id:e.id,disabled:e.disabled,multiple:e.multiple,name:e.name,onChange:e.onChange,size:p(e),style:{width:s(e),paddingLeft:e.marginsFlank?`${e.marginsFlank}px`:"10px",paddingRight:e.marginsFlank?`${e.marginsFlank}px`:"10px",paddingTop:e.marginsUpDown?`${e.marginsUpDown}px`:"10px",paddingBottom:e.marginsUpDown?`${e.marginsUpDown}px`:"10px"},children:[e.placeholder?a.jsx("option",{value:"",children:e.placeholder}):null,e.options.map(n=>a.jsx("option",{value:n.value,children:n.name}))]})};r.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"IOptionsSelect"}],raw:"IOptionsSelect[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:""},virtualScroll:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"number"},description:""},marginsFlank:{required:!1,tsType:{name:"number"},description:""},marginsUpDown:{required:!1,tsType:{name:"number"},description:""}}};const d={label:"ReactComponentLibrary/Dropdown",component:r},o={argTypes:{options:{description:"Список с отображаемым именем + значением привыборе"},multiple:{description:"В списке можно выбрать несколько опций"},name:{description:"Используется для указания имени элемента управления"},required:{description:"Логический атрибут, указывающий, что должен быть выбран параметр с непустым строковым значением"},size:{description:"Представляет количество строк в списке"},virtualScroll:{description:"Виртуальная прокрутка"}},args:{options:[{name:"option1",value:"opt1"},{name:"option2",value:"opt2"},{name:"option3",value:"opt3"},{name:"option4",value:"opt4"},{name:"option5",value:"opt5"},{name:"option6",value:"opt6"},{name:"option7",value:"opt7"},{name:"option8",value:"opt8"},{name:"option9",value:"opt9"},{name:"option10",value:"opt10"},{name:"option11",value:"opt11"},{name:"option12",value:"opt12"},{name:"option13",value:"opt13"},{name:"option14",value:"opt14"},{name:"option15",value:"opt15"},{name:"option16",value:"opt16"},{name:"option17",value:"opt17"},{name:"option18",value:"opt18"}],onChange:()=>console.log("select"),placeholder:"Выберите",disabled:!1,multiple:!1,virtualScroll:!1,fullWidth:!1}};var t,i,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  argTypes: {
    options: {
      description: "Список с отображаемым именем + значением привыборе"
    },
    multiple: {
      description: "В списке можно выбрать несколько опций"
    },
    name: {
      description: "Используется для указания имени элемента управления"
    },
    required: {
      // Пока не понятно, скорее всего используется с form
      description: "Логический атрибут, указывающий, что должен быть выбран параметр с непустым строковым значением"
    },
    size: {
      description: "Представляет количество строк в списке"
    },
    virtualScroll: {
      description: "Виртуальная прокрутка"
    }
  },
  args: {
    options: [{
      name: 'option1',
      value: 'opt1'
    }, {
      name: 'option2',
      value: 'opt2'
    }, {
      name: 'option3',
      value: 'opt3'
    }, {
      name: 'option4',
      value: 'opt4'
    }, {
      name: 'option5',
      value: 'opt5'
    }, {
      name: 'option6',
      value: 'opt6'
    }, {
      name: 'option7',
      value: 'opt7'
    }, {
      name: 'option8',
      value: 'opt8'
    }, {
      name: 'option9',
      value: 'opt9'
    }, {
      name: 'option10',
      value: 'opt10'
    }, {
      name: 'option11',
      value: 'opt11'
    }, {
      name: 'option12',
      value: 'opt12'
    }, {
      name: 'option13',
      value: 'opt13'
    }, {
      name: 'option14',
      value: 'opt14'
    }, {
      name: 'option15',
      value: 'opt15'
    }, {
      name: 'option16',
      value: 'opt16'
    }, {
      name: 'option17',
      value: 'opt17'
    }, {
      name: 'option18',
      value: 'opt18'
    }],
    onChange: () => console.log("select"),
    placeholder: 'Выберите',
    disabled: false,
    multiple: false,
    virtualScroll: false,
    fullWidth: false
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["Common"];export{o as Common,u as __namedExportsOrder,d as default};
