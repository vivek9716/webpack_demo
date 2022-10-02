"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3758],{63758:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(67294),i=a(34475),r=a(23470);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,i,r=[],n=!0,o=!1;try{for(a=a.call(e);!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}const m=function(){return l.createElement(i.rb,null,l.createElement(i.b7,{xs:12},l.createElement(i.xH,{className:"mb-4"},l.createElement(i.bn,null,l.createElement("strong",null,"Validation")," ",l.createElement("small",null,"Custom styles")),l.createElement(i.sl,null,l.createElement("p",{className:"text-medium-emphasis small"},"For custom CoreUI form validation messages, you'll need to add the"," ",l.createElement("code",null,"noValidate")," boolean property to your ",l.createElement("code",null,"<CForm>"),". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the ",l.createElement("code",null,":invalid")," and ",l.createElement("code",null,":valid")," styles applied to your form controls."),l.createElement("p",{className:"text-medium-emphasis small"},"Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback."," "),l.createElement(r.q3,{href:"forms/validation"},(t=(e=n((0,l.useState)(!1),2))[0],a=e[1],l.createElement(i.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:t,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),a(!0)}},l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationCustom01"},"Email"),l.createElement(i.jO,{type:"text",id:"validationCustom01",defaultValue:"Mark",required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationCustom02"},"Email"),l.createElement(i.jO,{type:"text",id:"validationCustom02",defaultValue:"Otto",required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationCustomUsername"},"Username"),l.createElement(i.YR,{className:"has-validation"},l.createElement(i.wV,{id:"inputGroupPrepend"},"@"),l.createElement(i.jO,{type:"text",id:"validationCustomUsername",defaultValue:"","aria-describedby":"inputGroupPrepend",required:!0}),l.createElement(i.CO,{invalid:!0},"Please choose a username."))),l.createElement(i.b7,{md:6},l.createElement(i.L8,{htmlFor:"validationCustom03"},"City"),l.createElement(i.jO,{type:"text",id:"validationCustom03",required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationCustom04"},"City"),l.createElement(i.LX,{id:"validationCustom04"},l.createElement("option",{disabled:!0},"Choose..."),l.createElement("option",null,"...")),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationCustom05"},"City"),l.createElement(i.jO,{type:"text",id:"validationCustom05",required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid zip.")),l.createElement(i.b7,{xs:12},l.createElement(i.EC,{type:"checkbox",id:"invalidCheck",label:"Agree to terms and conditions",required:!0}),l.createElement(i.CO,{invalid:!0},"You must agree before submitting.")),l.createElement(i.b7,{xs:12},l.createElement(i.u5,{color:"primary",type:"submit"},"Submit form")))))))),l.createElement(i.b7,{xs:12},l.createElement(i.xH,{className:"mb-4"},l.createElement(i.bn,null,l.createElement("strong",null,"Validation")," ",l.createElement("small",null,"Browser defaults")),l.createElement(i.sl,null,l.createElement("p",{className:"text-medium-emphasis small"},"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback."),l.createElement("p",{className:"text-medium-emphasis small"},"While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."),l.createElement(r.q3,{href:"forms/validation#browser-defaults"},function(){var e=n((0,l.useState)(!1),2),t=e[0],a=e[1];return l.createElement(i.lx,{className:"row g-3 needs-validation",validated:t,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),a(!0)}},l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationDefault01"},"Email"),l.createElement(i.jO,{type:"text",id:"validationDefault01",defaultValue:"Mark",required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationDefault02"},"Email"),l.createElement(i.jO,{type:"text",id:"validationDefault02",defaultValue:"Otto",required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationDefaultUsername"},"Username"),l.createElement(i.YR,{className:"has-validation"},l.createElement(i.wV,{id:"inputGroupPrepend02"},"@"),l.createElement(i.jO,{type:"text",id:"validationDefaultUsername",defaultValue:"","aria-describedby":"inputGroupPrepend02",required:!0}),l.createElement(i.CO,{invalid:!0},"Please choose a username."))),l.createElement(i.b7,{md:6},l.createElement(i.L8,{htmlFor:"validationDefault03"},"City"),l.createElement(i.jO,{type:"text",id:"validationDefault03",required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationDefault04"},"City"),l.createElement(i.LX,{id:"validationDefault04"},l.createElement("option",{disabled:!0},"Choose..."),l.createElement("option",null,"...")),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationDefault05"},"City"),l.createElement(i.jO,{type:"text",id:"validationDefault05",required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid zip.")),l.createElement(i.b7,{xs:12},l.createElement(i.EC,{type:"checkbox",id:"invalidCheck",label:"Agree to terms and conditions",required:!0}),l.createElement(i.CO,{invalid:!0},"You must agree before submitting.")),l.createElement(i.b7,{xs:12},l.createElement(i.u5,{color:"primary",type:"submit"},"Submit form")))}())))),l.createElement(i.b7,{xs:12},l.createElement(i.xH,{className:"mb-4"},l.createElement(i.bn,null,l.createElement("strong",null,"Validation")," ",l.createElement("small",null,"Server side")),l.createElement(i.sl,null,l.createElement("p",{className:"text-medium-emphasis small"},"We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ",l.createElement("code",null,"invalid")," ","and ",l.createElement("code",null,"valid")," boolean properties."),l.createElement("p",{className:"text-medium-emphasis small"},"For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using ",l.createElement("code",null,"aria-describedby")," (noting that this attribute allows more than one ",l.createElement("code",null,"id")," to be referenced, in case the field already points to additional form text)."),l.createElement(r.q3,{href:"forms/validation#server-side"},l.createElement(i.lx,{className:"row g-3 needs-validation"},l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationServer01"},"Email"),l.createElement(i.jO,{type:"text",id:"validationServer01",defaultValue:"Mark",valid:!0,required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationServer02"},"Email"),l.createElement(i.jO,{type:"text",id:"validationServer02",defaultValue:"Otto",valid:!0,required:!0}),l.createElement(i.CO,{valid:!0},"Looks good!")),l.createElement(i.b7,{md:4},l.createElement(i.L8,{htmlFor:"validationServerUsername"},"Username"),l.createElement(i.YR,{className:"has-validation"},l.createElement(i.wV,{id:"inputGroupPrepend03"},"@"),l.createElement(i.jO,{type:"text",id:"validationServerUsername",defaultValue:"","aria-describedby":"inputGroupPrepend03",invalid:!0,required:!0}),l.createElement(i.CO,{invalid:!0},"Please choose a username."))),l.createElement(i.b7,{md:6},l.createElement(i.L8,{htmlFor:"validationServer03"},"City"),l.createElement(i.jO,{type:"text",id:"validationServer03",invalid:!0,required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationServer04"},"City"),l.createElement(i.LX,{id:"validationServer04",invalid:!0},l.createElement("option",{disabled:!0},"Choose..."),l.createElement("option",null,"...")),l.createElement(i.CO,{invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3},l.createElement(i.L8,{htmlFor:"validationServer05"},"City"),l.createElement(i.jO,{type:"text",id:"validationServer05",invalid:!0,required:!0}),l.createElement(i.CO,{invalid:!0},"Please provide a valid zip.")),l.createElement(i.b7,{xs:12},l.createElement(i.EC,{type:"checkbox",id:"invalidCheck",label:"Agree to terms and conditions",invalid:!0,required:!0}),l.createElement(i.CO,{invalid:!0},"You must agree before submitting.")),l.createElement(i.b7,{xs:12},l.createElement(i.u5,{color:"primary",type:"submit"},"Submit form"))))))),l.createElement(i.b7,{xs:12},l.createElement(i.xH,{className:"mb-4"},l.createElement(i.bn,null,l.createElement("strong",null,"Validation")," ",l.createElement("small",null,"Supported elements")),l.createElement(i.sl,null,l.createElement("p",{className:"text-medium-emphasis small"},"Validation styles are available for the following form controls and components:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"<CFormInput>"),"s"),l.createElement("li",null,l.createElement("code",null,"<CFormSelect>"),"s"),l.createElement("li",null,l.createElement("code",null,"<CFormCheck>"),"s")),l.createElement(r.q3,{href:"forms/validation#supported-elements"},l.createElement(i.lx,{validated:!0},l.createElement("div",{className:"mb-3"},l.createElement(i.L8,{htmlFor:"validationTextarea",className:"form-label"},"Textarea"),l.createElement(i.PB,{id:"validationTextarea",placeholder:"Required example textarea",invalid:!0,required:!0}),l.createElement(i.CO,{invalid:!0},"Please enter a message in the textarea.")),l.createElement(i.EC,{className:"mb-3",id:"validationFormCheck1",label:"Check this checkbox",required:!0}),l.createElement(i.CO,{invalid:!0},"Example invalid feedback text"),l.createElement(i.EC,{type:"radio",name:"radio-stacked",id:"validationFormCheck2",label:"Check this checkbox",required:!0}),l.createElement(i.EC,{className:"mb-3",type:"radio",name:"radio-stacked",id:"validationFormCheck3",label:"Or toggle this other radio",required:!0}),l.createElement(i.CO,{invalid:!0},"More example invalid feedback text"),l.createElement("div",{className:"mb-3"},l.createElement(i.LX,{required:!0,"aria-label":"select example"},l.createElement("option",null,"Open this select menu"),l.createElement("option",{value:"1"},"One"),l.createElement("option",{value:"2"},"Two"),l.createElement("option",{value:"3"},"Three")),l.createElement(i.CO,{invalid:!0},"Example invalid select feedback")),l.createElement("div",{className:"mb-3"},l.createElement(i.jO,{type:"file",id:"validationTextarea","aria-label":"file example",required:!0}),l.createElement(i.CO,{invalid:!0},"Example invalid form file feedback")),l.createElement("div",{className:"mb-3"},l.createElement(i.u5,{type:"submit",color:"primary",disabled:!0},"Submit form"))))))),l.createElement(i.b7,{xs:12},l.createElement(i.xH,{className:"mb-4"},l.createElement(i.bn,null,l.createElement("strong",null,"Validation")," ",l.createElement("small",null,"Tooltips")),l.createElement(i.sl,null,l.createElement("p",{className:"text-medium-emphasis small"},"If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with"," ",l.createElement("code",null,"position: relative")," on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup."),l.createElement(r.q3,{href:"forms/validation#tooltips"},function(){var e=n((0,l.useState)(!1),2),t=e[0],a=e[1];return l.createElement(i.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:t,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),a(!0)}},l.createElement(i.b7,{md:4,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltip01"},"Email"),l.createElement(i.jO,{type:"text",id:"validationTooltip01",defaultValue:"Mark",required:!0}),l.createElement(i.CO,{tooltip:!0,valid:!0},"Looks good!")),l.createElement(i.b7,{md:4,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltip02"},"Email"),l.createElement(i.jO,{type:"text",id:"validationTooltip02",defaultValue:"Otto",required:!0}),l.createElement(i.CO,{tooltip:!0,valid:!0},"Looks good!")),l.createElement(i.b7,{md:4,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltipUsername"},"Username"),l.createElement(i.YR,{className:"has-validation"},l.createElement(i.wV,{id:"inputGroupPrepend"},"@"),l.createElement(i.jO,{type:"text",id:"validationTooltipUsername",defaultValue:"","aria-describedby":"inputGroupPrepend",required:!0}),l.createElement(i.CO,{tooltip:!0,invalid:!0},"Please choose a username."))),l.createElement(i.b7,{md:6,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltip03"},"City"),l.createElement(i.jO,{type:"text",id:"validationTooltip03",required:!0}),l.createElement(i.CO,{tooltip:!0,invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltip04"},"City"),l.createElement(i.LX,{id:"validationTooltip04",required:!0},l.createElement("option",{disabled:!0,defaultValue:""},"Choose..."),l.createElement("option",null,"...")),l.createElement(i.CO,{tooltip:!0,invalid:!0},"Please provide a valid city.")),l.createElement(i.b7,{md:3,className:"position-relative"},l.createElement(i.L8,{htmlFor:"validationTooltip05"},"City"),l.createElement(i.jO,{type:"text",id:"validationTooltip05",required:!0}),l.createElement(i.CO,{tooltip:!0,invalid:!0},"Please provide a valid zip.")),l.createElement(i.b7,{xs:12,className:"position-relative"},l.createElement(i.u5,{color:"primary",type:"submit"},"Submit form")))}())))));var e,t,a}}}]);