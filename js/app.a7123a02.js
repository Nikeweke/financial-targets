(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/financial-targets/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navbar",{directives:[{name:"show",rawName:"v-show",value:!t.addingMode,expression:"!addingMode"}],on:{"click-add-btn":t.toggleAddingMode}}),i("div",{staticClass:"row justify-content-center m-0"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.addingMode,expression:"addingMode"}],staticClass:"col-12  col-sm-6 "},[i("form-crud",{staticClass:"ui segment",on:{submit:t.addItem,cancel:t.toggleAddingMode}})],1)]),t._m(0),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},t._l(t.items,function(e,r){return i("div",{key:r,staticClass:"col-12 col-sm-6 mb-4"},[i("Card",t._b({key:r+"c",on:{"change-item":t.changeItem}},"Card",Object.assign({},e,{index:r}),!1))],1)}),0)])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h5",{staticClass:"ui horizontal divider header",staticStyle:{display:"flex",margin:"10px 0px 20px 0px"}},[i("i",{staticClass:"flag icon",staticStyle:{"font-size":"1.1rem"}}),t._v("\n    Targets\n  ")])}],s=(i("ac6a"),i("456d"),i("a8db")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui segment"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center justify-content-between"},[t._m(0),i("div",{staticClass:"col pr-0"},[i("button",{staticClass:"ui primary button tiny  float-right",on:{click:function(e){return t.$emit("click-add-btn")}}},[t._v("Add new target")])])])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col pl-0"},[i("h4",[i("b",[t._v("Financial Targets")])])])}],l=i("2877"),d={},u=Object(l["a"])(d,o,c,!1,null,null,null),f=u.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui card",staticStyle:{cursor:"pointer"}},[i("div",{staticClass:"ui olive top attached progress indicating",attrs:{"data-percent":t.procents}},[i("div",{staticClass:"bar",style:t.progressBarStyle})]),i("div",{staticClass:"content"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("div",[t.editMode?i("form-crud",t._b({on:{submit:t.onSubmit,cancel:t.toggleEdditingMode}},"form-crud",{title:t.title,balance:t.balance,target:t.target,editMode:!0},!1)):i("div",[i("h4",{staticClass:"ui sub header"},[t._v(t._s(t.title))]),i("a",{staticClass:"ui tag label"},[t._v(t._s(t.balance)+"/"+t._s(t.target))])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticStyle:{display:"flex"}},[i("button",{staticClass:"ui tiny icon button",on:{click:t.toggleEdditingMode}},[i("i",{staticClass:"pencil alternate icon"})])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore||t.editMode,expression:"showMore || editMode"}],staticClass:"ui olive progress indicating",staticStyle:{margin:"10px 0px"},attrs:{"data-percent":t.procents}},[i("div",{staticClass:"bar",style:t.progressBarStyle},[i("div",{staticClass:"progress"},[t._v(t._s(t.procents)+"%")])])])])])},p=[],g=(i("8e6e"),i("bd86")),v=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("label",[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],attrs:{placeholder:"Title...",type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col field"},[i("label",[t._v("Target")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.target,expression:"form.target",modifiers:{number:!0}}],attrs:{placeholder:"Target...",type:"text"},domProps:{value:t.form.target},on:{input:function(e){e.target.composing||t.$set(t.form,"target",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"col field"},[i("label",[t._v("Actual balance")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.balance,expression:"form.balance",modifiers:{number:!0}}],attrs:{placeholder:"Actual balance...",type:"text"},domProps:{value:t.form.balance},on:{input:function(e){e.target.composing||t.$set(t.form,"balance",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t.errors.length?i("div",{staticClass:"ui red message tiny"},[i("div",{staticClass:"ui bulleted list"},t._l(t.errors,function(e,r){return i("div",{key:r,staticClass:"item"},[t._v(t._s(e))])}),0)]):t._e(),i("button",{staticClass:"ui tiny submit button",on:{click:t.submit}},[t._v("Submit")]),i("button",{staticClass:"ui tiny button",on:{click:function(e){return t.$emit("cancel")}}},[t._v("Cancel")])])}),b=[],h={props:{title:String,target:Number,balance:Number,editMode:{type:Boolean,default:!1}},data:function(){var t=this.title,e=this.target,i=this.balance;return{errors:[],form:{title:t||"",target:e||0,balance:i||0}}},methods:{submit:function(){this.errors=[],this.checkFields()||(this.$emit("submit",this.form),this.editMode||(this.form={title:"",target:0,balance:0}))},checkFields:function(){var t=this.form,e=t.title,i=t.balance,r=t.target;return""===e&&this.errors.push("Title is not filled"),i>r&&this.errors.push("Balance cant be bigger than target"),0==r&&this.errors.push("Target cant be a zero"),this.errors.length>0}}},y=h,w=Object(l["a"])(y,v,b,!1,null,null,null),_=w.exports;function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(i,!0).forEach(function(e){Object(g["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var M={components:{FormCrud:_},props:{title:String,target:Number,balance:Number,index:Number},data:function(){return{editMode:!1,showMore:!1}},computed:{progressBarStyle:function(){return{"transition-duration":"300ms",width:this.procents+"%"}},procents:function(){return(100*this.balance/this.target).toFixed(0)}},methods:{onSubmit:function(t,e){this.editMode=!this.editMode;var i=this.index;this.$emit("change-item",x({},t,{index:i}))},toggleEdditingMode:function(){this.editMode=!this.editMode}}},O=M,j=Object(l["a"])(O,m,p,!1,null,null,null),S=j.exports,$={components:{Navbar:f,Card:S,FormCrud:_},data:function(){return{addingMode:!1,newItem:{title:"",target:0,balance:0},errors:[],items:[{title:"Save up money",target:1e4,balance:250},{title:"Buy a car",target:900,balance:650}]}},methods:{toggleAddingMode:function(){this.addingMode=!this.addingMode},addItem:function(t){this.items.push(t),this.toggleAddingMode(),this.$notify({message:"Item was created",type:"success"})},changeItem:function(t){for(var e=t.index,i=Object(s["a"])(t,["index"]),r=0,n=Object.keys(i);r<n.length;r++){var a=n[r];this.items[e][a]=i[a]}this.$notify({message:"Item was changed",type:"info"})}}},P=$,k=(i("df36"),Object(l["a"])(P,n,a,!1,null,null,null)),N=k.exports,E=i("8c4f");r["a"].use(E["a"]);var T=new E["a"]({routes:[]}),A=i("2f62");r["a"].use(A["a"]);var I=new A["a"].Store({state:{},mutations:{},actions:{}}),B=i("d10e");r["a"].use(B["a"]),r["a"].config.productionTip=!1,new r["a"]({router:T,store:I,render:function(t){return t(N)}}).$mount("#app")},"8e95":function(t,e,i){},df36:function(t,e,i){"use strict";var r=i("8e95"),n=i.n(r);n.a}});
//# sourceMappingURL=app.a7123a02.js.map