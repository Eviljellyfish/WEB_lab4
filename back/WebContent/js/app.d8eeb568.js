(function(t){function n(n){for(var o,l,c=n[0],s=n[1],r=n[2],d=0,v=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&v.push(i[l][0]),i[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(n);while(v.length)v.shift()();return a.push.apply(a,r||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,c=1;c<e.length;c++){var s=e[c];0!==i[s]&&(o=!1)}o&&(a.splice(n--,1),t=l(l.s=e[0]))}return t}var o={},i={app:0},a=[];function l(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=o,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)l.d(e,o,function(n){return t[n]}.bind(null,o));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/TaskListManager/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var r=0;r<c.length;r++)n(c[r]);var u=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),i=e.n(o);i.a},2811:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("main-menu")],1)},a=[],l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid  p-0 main"},[e("cust-header",{attrs:{variant:"Кашигин С.С.",group:"P3210",name:"1055"}}),e("div",{staticClass:"row my-row"},[e("div",{staticClass:"col-sm-12 order-md-last col-md-6 my-col"},[e("Graph",{attrs:{r:t.r,x:t.x,y:t.y,trigger:t.trigger,points:t.points},on:{clear:function(n){return t.deleteAllPoints()},"add-point":t.addPoint}})],1),e("div",{staticClass:"col col-md-6 my-col"},[e("ControllPanel",{attrs:{r:t.r},on:{"change-r":t.changeR,"change-x":t.changeX,"change-y":t.changeY,"add-point":t.addPoint}})],1)]),e("div",{staticClass:"row justify-content-center my-row"},[t._m(0),e("div",{staticClass:"col-6 my-col"},[e("point-list",{attrs:{points:t.points},on:{"point-deleted":t.deletePoint}})],1)])],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-6 my-col"},[e("a",{attrs:{href:"/TaskListManager/login.html"}},[e("button",{attrs:{type:"button"}},[t._v("Log out")])])])}],s=(e("a434"),e("d3b7"),e("96cf"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row no-gutters header my-row"},[e("div",{staticClass:"col-4 my-col"},[t._v(" "+t._s(t.variant)+" ")]),e("div",{staticClass:"col-4 my-col"},[t._v(" "+t._s(t.group)+" ")]),e("div",{staticClass:"col-4 my-col"},[t._v(" "+t._s(t.name)+" ")])])}),r=[],u={props:["variant","group","name"]},d=u,v=e("2877"),f=Object(v["a"])(d,s,r,!1,null,null,null),h=f.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("form",{attrs:{onkeydown:"return event.key != 'Enter';",method:"post"}},[e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"}),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"-2"},on:{click:function(n){return t.changeX(-2)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"-1.5"},on:{click:function(n){return t.changeX(-1.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"-1"},on:{click:function(n){return t.changeX(-1)}}})])]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"},[t._v(" X: ")]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"-0.5"},on:{click:function(n){return t.changeX(-.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"0"},on:{click:function(n){return t.changeX(0)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"0.5"},on:{click:function(n){return t.changeX(.5)}}})])]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"}),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"1"},on:{click:function(n){return t.changeX(1)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"1.5"},on:{click:function(n){return t.changeX(1.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"X",value:"2"},on:{click:function(n){return t.changeX(2)}}})])]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col justify-content-start"},[t._v(" y: ")]),e("div",{staticClass:"col my-col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.localY,expression:"localY",modifiers:{number:!0}}],attrs:{type:"text",name:"Y",size:"5",placeholder:"(-5 ... 3)"},domProps:{value:t.localY},on:{change:function(n){return t.checkY(t.localY)},input:function(n){n.target.composing||(t.localY=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})]),e("div",{staticClass:"col my-col"}),e("div",{staticClass:"col my-col"})]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"}),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"-2"},on:{click:function(n){return t.changeR(-2)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"-1.5"},on:{click:function(n){return t.changeR(-1.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"-1"},on:{click:function(n){return t.changeR(-1)}}})])]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"},[t._v(" R: ")]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"-0.5"},on:{click:function(n){return t.changeR(-.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"0"},on:{click:function(n){return t.changeR(0)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"0.5"},on:{click:function(n){return t.changeR(.5)}}})])]),e("div",{staticClass:"row my-row justify-content-center"},[e("div",{staticClass:"col my-col"}),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"1"},on:{click:function(n){return t.changeR(1)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"1.5"},on:{click:function(n){return t.changeR(1.5)}}})]),e("div",{staticClass:"col my-col"},[e("input",{attrs:{type:"button",name:"R",value:"2"},on:{click:function(n){return t.changeR(2)}}})])]),e("div",{staticClass:"row my-row "},[e("div",{staticClass:"col my-col justify-content-center"},[t._v(" x="+t._s(t.localX)+" y="+t._s(t.localY)+" r="+t._s(t.localR)+" ")])]),e("div",{staticClass:"row my-row"},[e("div",{staticClass:"col my-col justify-content-center"},[e("input",{attrs:{type:"button",value:"Send"},on:{click:function(n){return t.addPoint(t.localX,t.localY,t.localR)}}})])])])])},m=[],y={props:["r"],data:function(){return{localR:this.r,localX:0,localY:0}},methods:{changeR:function(t){t>=0?(this.$emit("change-r",t),this.localR=t):alert("r less then 0")},changeX:function(t){this.localX=t,this.$emit("change-x",t)},checkY:function(t){t>-5&&t<3?(this.localY=t,this.$emit("change-y",t)):(alert("Y must be in range -5 to 3 excluded"),this.localY=0)},addPoint:function(t,n,e){this.$emit("add-point",t,n,e)}}},g=y,C=Object(v["a"])(g,p,m,!1,null,null,null),b=C.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col"},[e("canvas",{attrs:{id:"canvas",width:"300",height:"300"},on:{click:t.addPointOnClick}})])]),e("div",{staticClass:"col"},[e("div",{staticClass:"row justify-content-center"},[e("button",{on:{click:t.clearCanvas}},[t._v("Clear Canvas")])])])])},T=[],_=(e("cb29"),e("159b"),{props:["points","trigger","r","x","y"],data:function(){return{localR:this.r,localX:this.x,localY:this.y}},watch:{trigger:function(){this.drawCanvas(),this.loadPoints(),this.drawTarger(this.localX,this.localY),this.$emit("graph-redrawed")},r:function(){this.localR=this.r,this.drawCanvas(),this.loadPoints(),this.drawTarger(this.localX,this.localY)},x:function(){this.localX=this.x,this.drawCanvas(),this.loadPoints(),this.drawTarger(this.localX,this.localY)},y:function(){this.localY=this.y,this.drawCanvas(),this.loadPoints(),this.drawTarger(this.localX,this.localY)}},methods:{drawCanvas:function(){var t=this.localR,n=document.getElementById("canvas"),e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);var o=26*t;e.beginPath(),e.rect(150,150,o/2,-o),e.closePath(),e.strokeStyle="blue",e.fillStyle="blue",e.fill(),e.stroke(),e.beginPath(),e.moveTo(150,150),e.arc(150,150,o,.5*Math.PI,2*Math.PI,!0),e.closePath(),e.strokeStyle="blue",e.fillStyle="blue",e.fill(),e.stroke(),e.beginPath(),e.moveTo(150,150),e.lineTo(150-o,150),e.lineTo(150,150+o/2),e.lineTo(150,150),e.closePath(),e.strokeStyle="blue",e.fillStyle="blue",e.fill(),e.stroke(),e.beginPath(),e.font="10px Verdana",e.moveTo(150,0),e.lineTo(150,300),e.moveTo(150,0),e.lineTo(145,15),e.moveTo(150,0),e.lineTo(155,15),e.fillText("Y",160,10),e.moveTo(0,150),e.lineTo(300,150),e.moveTo(300,150),e.lineTo(285,145),e.moveTo(300,150),e.lineTo(285,155),e.fillText("X",290,135),e.moveTo(145,20),e.lineTo(155,20),e.fillText(5,160,20),e.moveTo(145,85),e.lineTo(155,85),e.fillText(2.5,160,78),e.moveTo(145,215),e.lineTo(155,215),e.fillText(-2.5,160,215),e.moveTo(145,280),e.lineTo(155,280),e.fillText(-5,160,280),e.moveTo(20,145),e.lineTo(20,155),e.fillText(-5,20,170),e.moveTo(85,145),e.lineTo(85,155),e.fillText(-2.5,70,170),e.moveTo(215,145),e.lineTo(215,155),e.fillText(2.5,215,170),e.moveTo(280,145),e.lineTo(280,155),e.fillText(5,280,170),e.closePath(),e.strokeStyle="black",e.fillStyle="black",e.stroke(),console.log("redrawing canwas done!")},clearCanvas:function(){this.drawCanvas(),this.$emit("clear")},drawTarger:function(t,n){var e=150+130*t/5,o=150-130*n/5;console.log(e,o);var i=document.getElementById("canvas"),a=i.getContext("2d");console.log("begin drawing target..."),a.beginPath(),a.moveTo(e-10,o),a.lineTo(e+10,o),a.moveTo(e,o-10),a.lineTo(e,o+10),a.closePath(),a.strokeStyle="grey",a.stroke()},isArea:function(t,n,e){return t>=0&&n<=0&&t*t+n*n<=e*e||(t<=0&&n<=0&&n/(-e/2)<=(t+e)/e||t>=0&&n>=0&&t<=e/2&&n<=e)},drawPoint:function(t,n,e){var o=document.getElementById("canvas"),i=o.getContext("2d");i.beginPath(),i.rect(t-2,n-2,4,4),i.closePath(),!0===e?(i.strokeStyle="orange",i.fillStyle="orange"):(i.strokeStyle="red",i.fillStyle="red"),i.fill(),i.stroke()},addPointOnClick:function(){var t=document.getElementById("canvas"),n=this.localR;if(n>=0){var e=t.getBoundingClientRect(),o=e.left,i=e.top,a=window.event,l=a.clientX-o,c=a.clientY-i;this.drawPoint(l,c,this.isArea((l-150)/130*5,(150-c)/130*5,n)),this.sendPoint(Math.floor((l-150)/130*5*100)/100,Math.floor((150-c)/130*5*100)/100,this.r)}else alert("Undefined R.")},sendPoint:function(t,n,e){this.$emit("add-point",t,n,e)},loadPoints:function(){var t=this;this.points.forEach((function(n){t.drawPoint(150+130*n.x/5,150-130*n.y/5,t.isArea(n.x,n.y,t.localR))})),console.log("all points drawed!")}},mounted:function(){this.drawCanvas(),this.loadPoints()}}),P=_,k=(e("8e60"),Object(v["a"])(P,w,T,!1,null,null,null)),x=k.exports,R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"point-list"},[e("table",[t._m(0),t._l(t.points.slice().reverse(),(function(n){return e("point-ent",{key:n.id,tag:"tr",attrs:{point:n},on:{"delete-point":function(e){return t.deletePoint(n)}}})}))],2)])},X=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[t._v("id")]),e("td",[t._v("x")]),e("td",[t._v("y")]),e("td",[t._v("R")]),e("td",[t._v("checked")]),e("td")])}],j=(e("c975"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[t._v(" "+t._s(t.point.id)+" ")]),e("td",[t._v(" "+t._s(t.point.x)+" ")]),e("td",[t._v(" "+t._s(t.point.y)+" ")]),e("td",[t._v(" "+t._s(t.point.r)+" ")]),e("td",[t._v(" "+t._s(t.point.checked)+" ")]),e("td",[e("button",{on:{click:function(n){return t.deletePoint(t.point)}}},[t._v("X")])])])}),Y=[],O={props:["point"],methods:{deletePoint:function(t){this.$emit("delete-point",t)}}},$=O,S=Object(v["a"])($,j,Y,!1,null,null,null),E=S.exports,M={props:["points"],methods:{deletePoint:function(t){var n=this.points[this.points.indexOf(t)].id;this.$emit("point-deleted",n)}},components:{PointEnt:E}},L=M,I=Object(v["a"])(L,R,X,!1,null,null,null),A=I.exports,B=e("1157"),G=e.n(B),J={data:function(){return{trigger:!1,points:[],r:2,x:0,y:0}},components:{CustHeader:h,ControllPanel:b,Graph:x,PointList:A},methods:{deleteAllPoints:function(){var t=this;G.a.ajax({type:"head",url:"/TaskListManager/rest/point/clear",success:function(){t.points.splice(0,t.points.length),t.callTrigger()}})},deletePoint:function(t){var n=this;G.a.post("/TaskListManager/rest/point/deletepoint",{pointid:t},(function(){n.loadPoints()}))},callTrigger:function(){this.trigger=!this.trigger},addPoint:function(t,n,e){var o=this;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:G.a.post("/TaskListManager/rest/point/check",{X:t,Y:n,R:e},(function(t){console.log(t),o.points.push(t),o.callTrigger()}));case 1:case"end":return i.stop()}}))},showPoints:function(){console.log(this.points),console.log(this.r)},changeR:function(t){this.r=t},changeX:function(t){this.x=t},changeY:function(t){this.y=t},loadPoints:function(){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:G.a.ajax({type:"get",url:"/TaskListManager/rest/point/getpoints",success:function(n){console.log(n),t.points=n,t.callTrigger()}});case 1:case"end":return n.stop()}}))}},mounted:function(){this.loadPoints()}},U=J,z=(e("dc26"),Object(v["a"])(U,l,c,!1,null,null,null)),H=z.exports,N={name:"app",components:{MainMenu:H}},V=N,q=(e("034f"),Object(v["a"])(V,i,a,!1,null,null,null)),D=q.exports,F=e("2a2e"),K=e.n(F);e("4989"),e("f9e3"),e("2dd8");o["a"].use(K.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(D)}}).$mount("#app")},"5f4c":function(t,n,e){},"85ec":function(t,n,e){},"8e60":function(t,n,e){"use strict";var o=e("2811"),i=e.n(o);i.a},dc26:function(t,n,e){"use strict";var o=e("5f4c"),i=e.n(o);i.a}});
//# sourceMappingURL=app.d8eeb568.js.map