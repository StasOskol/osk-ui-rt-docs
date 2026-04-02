import{j as R}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-JhL3uwfD.js";const z=({data:t,width:n=600,height:a=400,color:m="#3b82f6",pointSize:l=6})=>{const u=x.useRef(null);return x.useEffect(()=>{const p=u.current;if(!p)return;const r=p.getContext("2d");if(!r||(r.clearRect(0,0,n,a),t.length===0))return;const d=Math.min(...t.map(e=>e.x)),P=Math.max(...t.map(e=>e.x)),f=Math.min(...t.map(e=>e.y)),C=Math.max(...t.map(e=>e.y)),D=e=>(e-d)/(P-d)*n,T=e=>a-(e-f)/(C-f)*a;r.fillStyle=m,t.forEach(e=>{const E=D(e.x),j=T(e.y);r.beginPath(),r.arc(E,j,l,0,Math.PI*2),r.fill()})},[t,n,a,m,l]),R.jsx("canvas",{ref:u,width:n,height:a})};z.__docgenInfo={description:"",methods:[],displayName:"ScatterPlot",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}],raw:"{ x: number; y: number }[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},pointSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}}}};const k={title:"Charts/ScatterPlot",component:z,tags:["autodocs"],argTypes:{color:{control:"color"},pointSize:{control:{type:"range",min:2,max:20}},width:{control:{type:"range",min:300,max:800}},height:{control:{type:"range",min:200,max:600}}}},i=[{x:1,y:2},{x:2,y:4},{x:3,y:3},{x:4,y:5},{x:5,y:7},{x:6,y:6},{x:7,y:8},{x:8,y:9}],o={args:{data:i,width:600,height:400,color:"#3b82f6",pointSize:6}},s={args:{data:i,width:600,height:400,color:"#ef4444",pointSize:12}},c={args:{data:i,width:600,height:400,color:"#10b981",pointSize:8}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    color: '#3b82f6',
    pointSize: 6
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,S,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    color: '#ef4444',
    pointSize: 12
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var M,q,w;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    color: '#10b981',
    pointSize: 8
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const I=["Default","LargePoints","CustomColors"];export{c as CustomColors,o as Default,s as LargePoints,I as __namedExportsOrder,k as default};
