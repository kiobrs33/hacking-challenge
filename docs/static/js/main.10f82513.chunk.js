(this["webpackJsonpseguro-vehicular-app"]=this["webpackJsonpseguro-vehicular-app"]||[]).push([[0],{27:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=t(4),s=t(11),m=t(3),i=t(1),u=t(6),d=t(20),b=t.n(d),p=t(24),E="[User] Finish Loading",f="[User] Car Information",v="[Step] User",g="[Step] Car",h="[Step] Secure",N="[Coverage] Add",y="[Coverage] Remove",O="[Coverage] Delete",j=function(e){return{type:E,payload:Object(i.a)({},e)}},k=function(){return{type:v,payload:!0}},x=[{uid:"1",title:"Robo Parcial",description:"Robo parcial de algun componente del Vehiculo",monto:15},{uid:"2",title:"Choque y/o accidente de tr\xe1nsito",description:"Choque y/o accidente de tr\xe1nsito que vaya tener el vehiculo",monto:20},{uid:"3",title:"Perdida total por accidente",description:"Accidente producto de la imprudencia del peaton o el usuario.",monto:50}],C=[2015,2016,2017,2018,2020,2021],_=["Nissan","Toyota","Kia","Hyundai"],S=t(17),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(u.a)(a,2),c=t[0],r=t[1],l=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(a)},o=function(e){var a=e.target;r(Object(i.a)(Object(i.a)({},c),{},Object(S.a)({},a.name,"checkbox"===a.type?a.checked:a.value)))};return[c,o,l]},q=function(){var e=Object(m.g)(),a=Object(o.c)((function(e){return e.user})).nombres,t=Object(o.b)(),r=Object(n.useState)({}),l=Object(u.a)(r,2),s=l[0],d=l[1],b=Object(n.useState)(12500),p=Object(u.a)(b,2),E=p[0],v=p[1],h=w({year:"",marca:"",gas:""}),N=Object(u.a)(h,2),y=N[0],O=N[1],j=y.year,k=y.marca,x=y.gas;return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n=function(e){var a={};return e.year||(a.year="A\xf1o es requerido!"),e.marca||(a.marca="Marca es requerido!"),e.gas||(a.gas="Gas es requerido!"),a}(Object(i.a)({},y));d(n),Object.keys(n).length||(t(function(e,a,t,n){return{type:f,payload:{year:e,marca:a,gas:t,suma_asegurada:n}}}(j,k,x,E)),t({type:g,payload:!0}),e.push("/plan"))}},c.a.createElement("h2",null,"\xa1Hola, ",a,"!"),c.a.createElement("span",null,"Completa los datos de tu auto"),c.a.createElement("div",{className:"form-group mt-3"},c.a.createElement("label",null,"A\xf1o"),c.a.createElement("select",{className:"form-control",name:"year",value:j,onChange:O},C.map((function(e,a){return c.a.createElement("option",{key:a,value:e},e)}))),s.year&&c.a.createElement("small",{className:"form-text text-danger"},s.year)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Marca"),c.a.createElement("select",{className:"form-control",name:"marca",value:k,onChange:O},_.map((function(e,a){return c.a.createElement("option",{key:a,value:e},e)}))),s.marca&&c.a.createElement("small",{className:"form-text text-danger"},s.marca)),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("label",{className:"form-check-label"},"\xbfTu auto es a gas?")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"gas",value:"si",onChange:O}),c.a.createElement("label",{className:"form-check-label"},"Si")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"gas",value:"no",onChange:O}),c.a.createElement("label",{className:"form-check-label"},"No")),s.gas&&c.a.createElement("small",{className:"form-text text-danger"},s.gas)),c.a.createElement("div",{className:"row mt-5 mb-5"},c.a.createElement("div",{className:"col"},c.a.createElement("h5",null,"Indica la suma asegurada"),c.a.createElement("span",null,"MIN $12,500 | MAX $16,500")),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:function(){E>12500&&v(E-100)}},"-"),c.a.createElement("h5",null,"$",E,".00"),c.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:function(){E<16500&&v(E+100)}},"+")))),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{className:"btn btn-danger btn-sm",type:"button",onClick:function(){e.push("/user")}},"Volver"),c.a.createElement("button",{className:"btn btn-primary btn-sm",type:"submit"},"Continuar"))))},M=function(){var e=Object(o.c)((function(e){return e.user})),a=e.correo,t=e.nombres,n=Object(m.g)();return c.a.createElement("div",{className:"container pt-3 pb-3"},c.a.createElement("h2",{className:"text-danger"},"Te damos la Bienvenida! ",t),c.a.createElement("h4",null,"Cuenta con Nosotros para proteger tu veh\xedculo"),c.a.createElement("p",{className:"text-muted text-sm mt-4"},"Enviaremos la confirmacion de tu compra de tu Plan Vehicular Tracking a tu correo"),c.a.createElement("h5",null,a),c.a.createElement("button",{className:"btn btn-danger",onClick:function(){n.replace("/")}},"COMO USAR MI SEGURO"))},P=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},c.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Rimac"))},A=function(e){var a=e.uid,t=e.title,r=e.description,l=e.monto,s=Object(o.b)(),m=Object(n.useState)(!0),i=Object(u.a)(m,2),d=i[0],b=i[1];return c.a.createElement("div",{className:"container border border border-secondary rounded mt-3 mb-3 p-3"},c.a.createElement("h5",null,t),c.a.createElement("p",{className:"text-muted mb-1"},r),c.a.createElement("button",{className:d?"btn btn-secondary btn-sm":"btn btn-danger btn-sm",onClick:function(){d?(s(function(e,a,t,n){return{type:N,payload:{uid:e,title:a,description:t,monto:n}}}(a,t,r,l)),b(!1)):(s(function(e){return{type:y,payload:e}}(a)),b(!0))}},d?"Agregar":"Quitar"))},D=function(){var e=Object(n.useState)(1),a=Object(u.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:1===t?"nav-link active":"nav-link",onClick:function(){return r(1)}},"Protege tu auto")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:2===t?"nav-link active":"nav-link",onClick:function(){return r(2)}},"Protege a los que te rodean")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:3===t?"nav-link active":"nav-link",onClick:function(){return r(3)}},"Mejora tu plan"))),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{className:1===t?"tab-pane fade show active":"tab-pane fade",role:"tabpanel"},x.map((function(e){var a=e.uid,t=e.title,n=e.description,r=e.monto;return c.a.createElement(A,{key:a,uid:a,title:t,description:n,monto:r})}))),c.a.createElement("div",{className:2===t?"tab-pane fade show active":"tab-pane fade",role:"tabpanel"},c.a.createElement("div",{className:"container mt-3 mb-3"},c.a.createElement("h4",null,"Mas planes en unos momentos"))),c.a.createElement("div",{className:3===t?"tab-pane fade show active":"tab-pane fade",role:"tabpanel"},c.a.createElement("div",{className:"container mt-3 mb-3"},c.a.createElement("h4",null,"Mas planes en unos instantes")))))},T=function(){var e=Object(m.g)(),a=Object(o.b)(),t=Object(o.c)((function(e){return e.secure})),n=t.mensualidad,r=t.coberturas,l=Object(o.c)((function(e){return e.user})),i=l.placa,u=l.marca,d=l.year,b=Object(o.c)((function(e){return e}));return c.a.createElement("div",{className:"container mt-3 mb-3"},c.a.createElement("h2",null,"Mira las coberturas"),c.a.createElement("label",{htmlFor:"descripcion"},"Conoce las coberturas para tu plan"),c.a.createElement("div",{className:"card mb-5"},c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Placa ",i),c.a.createElement("h5",{className:"card-title"},"".concat(u," ").concat(d)),c.a.createElement(s.b,{to:"/car"},"Editar"))),c.a.createElement("div",null,c.a.createElement("h5",{className:"mb-0"},"$",n,".00"),c.a.createElement("span",{className:"text-muted text-sm"},"Mensuales"),c.a.createElement("h6",{className:"text-sm mt-3"},"El precio incluye :"),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",{key:e.uid},e.title)})))),c.a.createElement("hr",null),c.a.createElement(D,null),c.a.createElement("hr",null),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{className:"btn btn-danger btn-sm",type:"button",onClick:function(){a({type:O}),e.push("/car")}},"Volver"),c.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){a({type:h,payload:!0}),localStorage.setItem("rimac_seguro",JSON.stringify(b)),e.push("/thanks")}},"Lo quiero")))},I=function(){var e=Object(m.g)(),a=Object(o.b)(),t=Object(n.useState)({}),r=Object(u.a)(t,2),l=r[0],s=r[1],d=w({dni:"",celular:"",placa:"",terminos_condiciones:!1}),E=Object(u.a)(d,2),f=E[0],v=E[1],g=f.celular,h=f.placa,N=f.terminos_condiciones,y=f.dni;return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=function(e){var a={};return(e.dni.toString().length<8||e.dni.toString().length>8)&&(a.dni="Dni es requerido, debe tener 8 caracteres!"),(e.celular.toString().length<9||e.celular.toString().length>9)&&(a.celular="Celular es requerido, debe tener 9 digitos!"),(e.placa.length<7||e.placa.length>7)&&(a.placa="Placa es requerido!"),!1===e.terminos_condiciones&&(a.terminos_condiciones="Terminos y condiciones es requerido!"),a}(Object(i.a)({},f));s(n),Object.keys(n).length||a(function(e,a,t,n,c){return function(){var r=Object(p.a)(b.a.mark((function r(l){var o,s,m,i,u,d,p;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://randomuser.me/api/");case 3:return o=r.sent,r.next=6,o.json();case 6:s=r.sent,m=s.results,i=m[0],u=i.name,d=i.email,p={dni:e,celular:a,placa:t,terminos_condiciones:n,nombres:"".concat(u.first," ").concat(u.last),correo:d},l(j(p)),l(k()),c.push("/car"),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,15]])})));return function(e){return r.apply(this,arguments)}}()}(y,g,h,N,e))}},c.a.createElement("h2",null,"Dejanos tus datos"),c.a.createElement("div",{className:"form-group mt-4"},c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("select",{className:"custom-select"},c.a.createElement("option",{value:"1"},"Dni"))),c.a.createElement("input",{type:"number",className:"form-control",placeholder:"Nro dni 12345678",name:"dni",value:y,onChange:v})),l.dni&&c.a.createElement("small",{className:"form-text text-danger"},l.dni)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"number",placeholder:"987654321",name:"celular",value:g,onChange:v}),l.celular&&c.a.createElement("small",{className:"form-text text-danger"},l.celular)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"A3F-123",name:"placa",value:h,onChange:v}),l.placa&&c.a.createElement("small",{className:"form-text text-danger"},l.placa)),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"terminos_condiciones",value:N,onChange:v}),c.a.createElement("label",{className:"form-check-label"},"Acepto la Pol\xedtica de Protecci\xf2n de Datos Personales y los T\xe9rminos y Condiciones.")),l.terminos_condiciones&&c.a.createElement("small",{className:"form-text text-danger"},l.terminos_condiciones)),c.a.createElement("button",{className:"btn btn-primary btn-sm",type:"submit"},"Cotizalo")))},R=function(){return c.a.createElement(s.a,null,c.a.createElement(P,null),c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/car",component:q}),c.a.createElement(m.b,{exact:!0,path:"/plan",component:T}),c.a.createElement(m.b,{exact:!0,path:"/thanks",component:M}),c.a.createElement(m.b,{path:"/",component:I}),c.a.createElement(m.a,{to:"/"})))},U=t(14),V=t(25),$=t(26),F={suma_asegurada:0,coberturas:[],mensualidad:20,compra:!1,user_step:!1,car_step:!1,seguro_step:!1},J={dni:"",celular:"",terminos_condiciones:!1,nombres:"",correo:"",placa:"",year:"",marca:"",gas:!1},L="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.c,X=Object(U.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(i.a)(Object(i.a)({},e),{},{dni:a.payload.dni,celular:a.payload.celular,terminos_condiciones:a.payload.terminos_condiciones,nombres:a.payload.nombres,correo:a.payload.correo,placa:a.payload.placa});case f:return Object(i.a)(Object(i.a)({},e),{},{year:a.payload.year,marca:a.payload.marca,gas:a.payload.gas});default:return e}},secure:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(i.a)(Object(i.a)({},e),{},{user_step:!0});case g:return Object(i.a)(Object(i.a)({},e),{},{car_step:!0});case h:return Object(i.a)(Object(i.a)({},e),{},{seguro_step:!0});case N:return Object(i.a)(Object(i.a)({},e),{},{coberturas:[Object(i.a)({},a.payload)].concat(Object($.a)(e.coberturas)),mensualidad:e.mensualidad+a.payload.monto});case y:return Object(i.a)(Object(i.a)({},e),{},{coberturas:e.coberturas.filter((function(e){return e.uid!==a.payload})),mensualidad:e.mensualidad-e.coberturas.find((function(e){return e.uid===a.payload})).monto});case O:return Object(i.a)(Object(i.a)({},e),{},{coberturas:[]});case f:return Object(i.a)(Object(i.a)({},e),{},{suma_asegurada:a.payload.suma_asegurada});default:return e}}}),B=Object(U.d)(X,L(Object(U.a)(V.a))),G=function(){return c.a.createElement(o.a,{store:B},c.a.createElement(R,null))};l.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.10f82513.chunk.js.map