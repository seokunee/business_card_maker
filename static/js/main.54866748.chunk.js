(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,a,t){e.exports={makerMainColor:"#a87359",makerWhite:"white",section:"login_section__1aiaL",login__list:"login_login__list__2JQe7",login__item:"login_login__item__38jGF",login:"login_login__29x3L",login__title:"login_login__title__1lMQk",login__type:"login_login__type__14fJ2"}},14:function(e,a,t){e.exports={makerPink:"pink",makerBlack:"black",makerBorderColor:"rgb(216, 216, 216)",makerMainColor:"#a87359",makerWhite:"white",tablePadding:"0.35rem",form:"card_add_form_form__230qD",input:"card_add_form_input__VT5xK",select:"card_add_form_select__3KaCG",textarea:"card_add_form_textarea__1LMDJ",image__input:"card_add_form_image__input__iPAMT"}},15:function(e,a,t){e.exports={makerPink:"pink",makerBlack:"black",makerBorderColor:"rgb(216, 216, 216)",makerMainColor:"#a87359",makerWhite:"white",tablePadding:"0.35rem",form:"card_edit_form_form__3dExc",input:"card_edit_form_input__2s8a5",select:"card_edit_form_select__2jrRg",textarea:"card_edit_form_textarea__15Wf3",image__input:"card_edit_form_image__input__3de_g"}},18:function(e,a,t){e.exports={makerLightPink:"#ffeae8",makerLightGrey:"#e8e7e6",makerBlack:"black",container:"profile_image_input_container__1YBoh",input:"profile_image_input_input__46vjg",button:"profile_image_input_button__3lVGh",grey:"profile_image_input_grey__5Gojz",pink:"profile_image_input_pink__1xkPg",loader:"profile_image_input_loader__owfiQ",spin:"profile_image_input_spin__2Ljak"}},22:function(e,a,t){e.exports={makerMainColor:"#a87359",makerBlack:"black",makerWhite:"white",header:"header_header__32py7",title:"header_title__3fqDc",logout:"header_logout__1zOXX"}},23:function(e,a,t){e.exports={mediaQuery:"62rem",makerGreen:"#385461",makerBorderColor:"rgb(216, 216, 216)",editor:"editor_editor__1hxif",cards:"editor_cards__1e-bh",title:"editor_title__1-WTf"}},24:function(e,a,t){e.exports={mediaQuery:"62rem",makerBlack:"black",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",preview:"preview_preview__2j9Of",main__title:"preview_main__title__2MoWO",container:"preview_container__3C8-r"}},30:function(e,a,t){e.exports={makerGrey:"#626262",container:"app_container__3ef6Q"}},31:function(e,a,t){e.exports={makerMainColor:"#a87359",footer:"footer_footer__3JKF8",footer__title:"footer_footer__title__wZkJJ"}},34:function(e,a,t){e.exports={makerWhite:"white",mediaQuery:"62rem",container:"maker_container__1TYtW",maker:"maker_maker__1EjDk"}},39:function(e,a,t){e.exports={makerMainColor:"#a87359",makerWhite:"white",button:"button_button__1C9id"}},46:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var r=t(9),n=t(2),c=t.n(n),i=t(37),o=t.n(i),s=(t(46),t(16)),l=t(30),u=t.n(l),_=t(13),m=t.n(_),d=t(22),j=t.n(d),f=t(1),p=Object(n.memo)((function(e){var a=e.logout;return Object(f.jsxs)("header",{className:j.a.header,children:[a&&Object(f.jsx)("div",{className:j.a.logout,onClick:a,children:"Logout"}),Object(f.jsx)("img",{src:"business_card_maker/images/logo.png",alt:"logo"}),Object(f.jsx)("span",{className:j.a.title,children:"Business Card Maker"})]})})),b=t(31),h=t.n(b),O=Object(n.memo)((function(){return Object(f.jsx)("footer",{className:h.a.footer,children:Object(f.jsx)("p",{className:h.a.footer__title,children:"Fly to your Dream"})})})),g=t(5),x=function(e){var a=e.authService,t=e.setUserId,r=Object(g.f)(),c=Object(n.useCallback)((function(e){r.push({pathname:"/business_card_maker/maker",state:{id:e}}),t(e)}),[r,t]),i=function(e){a.login(e.target.innerHTML).then((function(e){return c(e.user.uId)}))};return Object(n.useEffect)((function(){a.authState((function(e){e&&c(e.id)}))}),[a,c]),Object(f.jsxs)("section",{className:m.a.section,children:[Object(f.jsx)(p,{}),Object(f.jsxs)("main",{className:m.a.login,children:[Object(f.jsx)("span",{className:m.a.login__title,children:"Login"}),Object(f.jsxs)("ul",{className:m.a.login__list,children:[Object(f.jsx)("li",{className:m.a.login__item,children:Object(f.jsx)("button",{className:m.a.login__type,onClick:i,children:"Google"})}),Object(f.jsx)("li",{className:m.a.login__item,children:Object(f.jsx)("button",{className:m.a.login__type,onClick:i,children:"Github"})})]})]}),Object(f.jsx)(O,{})]})},k=t(29),v=t(21),N=t(34),C=t.n(N),y=t(39),R=t.n(y),A=Object(n.memo)((function(e){var a=e.name,t=e.onClick;return Object(f.jsx)("button",{className:R.a.button,onClick:t,children:a})})),E=t(14),U=t.n(E),P=Object(n.memo)((function(e){var a=e.FileUploader,t=e.onUpdate,r=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useRef)(),l=Object(n.useRef)(),u=Object(n.useRef)(),_=Object(n.useRef)(),m=Object(n.useState)({fileName:"",fileURL:""}),d=Object(s.a)(m,2),j=d[0],p=d[1];return Object(f.jsxs)("form",{ref:r,className:U.a.form,children:[Object(f.jsx)("input",{className:U.a.input,ref:c,type:"text",name:"name",placeholder:"Name"}),Object(f.jsx)("input",{className:U.a.input,ref:i,type:"text",name:"company",placeholder:"Company"}),Object(f.jsxs)("select",{ref:o,className:U.a.select,name:"theme",children:[Object(f.jsx)("option",{children:"Light"}),Object(f.jsx)("option",{children:"Dark"}),Object(f.jsx)("option",{children:"Colorful"})]}),Object(f.jsx)("input",{className:U.a.input,ref:l,type:"text",name:"field",placeholder:"Field"}),Object(f.jsx)("input",{className:U.a.input,ref:u,type:"text",name:"email",placeholder:"Email"}),Object(f.jsx)("textarea",{className:U.a.textarea,ref:_,type:"text",name:"message",placeholder:"Message"}),Object(f.jsx)("div",{className:U.a.image__input,children:Object(f.jsx)(a,{fileName:j.fileName,setImageFile:function(e){p({fileName:e.original_filename,fileURL:e.url})}})}),Object(f.jsx)(A,{name:"Add",onClick:function(e){e.preventDefault();var a={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,field:l.current.value||"",email:u.current.value||"",message:_.current.value||"",fileName:j.fileName||"",fileURL:j.fileURL||""};t(a,a.id),r.current.reset(),p({fileName:"",fileURL:""})}})]})})),w=t(15),D=t.n(w),I=function(e){var a=e.FileUploader,t=e.card,c=e.onUpdate,i=e.onDelete,o=Object(n.useRef)(),s=Object(n.useRef)(),l=Object(n.useRef)(),u=Object(n.useRef)(),_=Object(n.useRef)(),m=Object(n.useRef)(),d=t.id,j=t.name,p=t.company,b=t.field,h=t.theme,O=t.email,g=t.message,x=t.fileName,k=function(e){e.preventDefault();var a=Object(r.a)(Object(r.a)({},t),{},{name:o.current.value,company:s.current.value,theme:l.current.value,field:u.current.value,email:_.current.value,message:m.current.value});c(a,d)};return Object(f.jsxs)("form",{className:D.a.form,children:[Object(f.jsx)("input",{className:D.a.input,ref:o,type:"text",name:j,placeholder:"name",onChange:k,value:j}),Object(f.jsx)("input",{className:D.a.input,ref:s,type:"text",placeholder:"company",name:p,onChange:k,value:p}),Object(f.jsxs)("select",{ref:l,className:D.a.select,onChange:k,name:h,value:h,children:[Object(f.jsx)("option",{children:"Light"}),Object(f.jsx)("option",{children:"Dark"}),Object(f.jsx)("option",{children:"Colorful"})]}),Object(f.jsx)("input",{className:D.a.input,ref:u,type:"text",placeholder:"field",name:b,onChange:k,value:b}),Object(f.jsx)("input",{className:D.a.input,ref:_,type:"text",placeholder:"email",name:O,onChange:k,value:O}),Object(f.jsx)("textarea",{className:D.a.textarea,ref:m,type:"text",placeholder:"message",name:g,onChange:k,value:g}),Object(f.jsx)("div",{className:D.a.image__input,children:Object(f.jsx)(a,{fileName:x,setImageFile:function(e){var a=Object(r.a)(Object(r.a)({},t),{},{fileName:e.original_filename,fileURL:e.url});c(a,d)}})}),Object(f.jsx)(A,{name:"Delete",onClick:function(e){e.preventDefault(),i(d)}})]})},S=t(23),L=t.n(S),T=function(e){var a=e.FileUploader,t=e.cardsInfo,r=e.onUpdate,n=e.onDelete;return Object(f.jsxs)("section",{className:L.a.editor,children:[Object(f.jsx)("h1",{className:L.a.title,children:"Card Maker"}),Object(f.jsxs)("div",{className:L.a.cards,children:[Object.keys(t).map((function(e){return Object(f.jsx)(I,{FileUploader:a,card:t[e],onUpdate:r,onDelete:n},e)})),Object(f.jsx)(P,{cardsInfo:t,onUpdate:r,FileUploader:a})]})]})},F=t(8),B=t.n(F);function M(e){switch(e){case"Dark":return B.a.dark;case"Light":return B.a.light;case"Colorful":return B.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var W=Object(n.memo)((function(e){var a=e.card,t=a.name,r=a.company,n=a.field,c=a.theme,i=a.email,o=a.message,s=a.fileURL||"/images/default_logo.png";return Object(f.jsxs)("li",{className:"".concat(B.a.card," ").concat(M(c)),children:[Object(f.jsx)("div",{className:B.a.image_wrap,children:Object(f.jsx)("img",{className:B.a.image,src:s,alt:"profile_photo"})}),Object(f.jsxs)("div",{className:B.a.info,children:[Object(f.jsx)("h3",{className:B.a.name,children:t}),Object(f.jsx)("p",{className:B.a.company,children:r}),Object(f.jsx)("p",{className:B.a.field,children:n}),Object(f.jsx)("p",{className:B.a.email,children:i}),Object(f.jsx)("p",{className:B.a.message,children:o})]})]})})),G=t(24),J=t.n(G),Y=function(e){var a=e.cardsInfo;return Object(f.jsxs)("section",{className:J.a.preview,children:[Object(f.jsx)("h1",{className:J.a.main__title,children:"Card Preview"}),Object(f.jsx)("ul",{className:J.a.container,children:Object.keys(a).map((function(e){return Object(f.jsx)(W,{card:a[e]},e)}))})]})},K=function(e){var a=e.FileUploader,t=e.authService,c=e.userId,i=e.setUserId,o=e.cardRepository,l=Object(n.useState)({}),u=Object(s.a)(l,2),_=u[0],m=u[1],d=Object(g.f)(),j=Object(n.useCallback)((function(){t.signOut()}),[t]);Object(n.useEffect)((function(){if(c){var e=o.readUserData(c,m);return function(){return e()}}}),[c,o]),Object(n.useEffect)((function(){t.authState((function(e){e?i(e.uid):(d.push("/business_card_maker"),i(null))}))}),[t,i,d]);return Object(f.jsxs)("div",{className:C.a.container,children:[Object(f.jsx)(p,{logout:j}),Object(f.jsxs)("section",{className:C.a.maker,children:[Object(f.jsx)(T,{cardsInfo:_,FileUploader:a,onUpdate:function(e,a){m(Object(r.a)(Object(r.a)({},_),{},Object(v.a)({},a,e))),o.writeUserData(e,c)},onDelete:function(e){var a=Object(r.a)({},_);delete a[e],m(a),o.removeUserData(e,c)}}),Object(f.jsx)(Y,{cardsInfo:_})]}),Object(f.jsx)(O,{})]})},Q=function(e){var a=e.FileUploader,t=e.authService,r=e.cardRepository,c=Object(n.useState)(null),i=Object(s.a)(c,2),o=i[0],l=i[1];return Object(f.jsx)(k.a,{children:Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/business_card_maker",children:Object(f.jsx)("div",{className:u.a.container,children:Object(f.jsx)(x,{authService:t,setUserId:l})})}),Object(f.jsx)(g.a,{exact:!0,path:"/business_card_maker/maker",children:Object(f.jsx)("div",{className:u.a.container,children:Object(f.jsx)(K,{authService:t,FileUploader:a,cardRepository:r,userId:o,setUserId:l})})})]})})},z=t(19),q=t(40),H=t(25),X=(t(52),t(54),{apiKey:"AIzaSyCME1tYXokRxxskxs7i5TNGEv96ZLwGuCA",authDomain:"business-card-maker-25e33.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/business_card_maker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_API_KEY:"188242461323599",REACT_APP_CLOUDINARY_API_SECRET:"qxsFfLOmMSR7CQzdb2CLIdoPrbE",REACT_APP_CLOUDINARY_UPLOAD_PRESET:"jynqtglk",REACT_APP_CLOUDINARY_UPLOAD_URL:"https://api.cloudinary.com/v1_1/dbimypuvl/image/upload",REACT_APP_FIREBASE_API_KEY:"AIzaSyCME1tYXokRxxskxs7i5TNGEv96ZLwGuCA",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-25e33.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-25e33-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-25e33"}).REACT_APP_FIREBASE_DATA_BASE_URL,projectId:"business-card-maker-25e33"}),Z=H.a.initializeApp(X),V=Z.auth(),$=Z.database(),ee=new H.a.auth.GoogleAuthProvider,ae=new H.a.auth.GithubAuthProvider,te=function(){function e(){Object(z.a)(this,e)}return Object(q.a)(e,[{key:"login",value:function(e){var a=this.getProvider(e);return V.signInWithPopup(a)}},{key:"authState",value:function(e){V.onAuthStateChanged((function(a){e(a)}))}},{key:"signOut",value:function(){V.signOut()}},{key:"getProvider",value:function(e){switch(e){case"Google":return ee;case"Github":return ae;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),re=t(35),ne=t.n(re),ce=t(41),ie=function e(){Object(z.a)(this,e),this.upload=function(){var e=Object(ce.a)(ne.a.mark((function e(a){var t,r,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","".concat("jynqtglk")),e.next=5,fetch("".concat("https://api.cloudinary.com/v1_1/dbimypuvl/image/upload"),{method:"POST",body:t});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},oe=t(18),se=t.n(oe),le=Object(n.memo)((function(e){var a=e.fileName,t=e.imageUploader,r=e.setImageFile,c=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(f.jsx)("div",{className:se.a.container,children:l?Object(f.jsx)("div",{className:se.a.loader}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{ref:c,className:se.a.input,type:"file",name:"file",accept:"image/*",onChange:function(e){u(!0),t.upload(e.target.files[0]).then((function(e){return r(e)})).then((function(){return u(!1)}))}}),Object(f.jsx)("button",{className:"".concat(se.a.button," ").concat(a?se.a.pink:se.a.grey),onClick:function(e){e.preventDefault(),c.current.click()},children:a||"No file"})]})})})),ue=function e(){Object(z.a)(this,e),this.writeUserData=function(e,a){$.ref("".concat(a,"/cards/").concat(e.id)).set(e)},this.readUserData=function(e,a){var t=$.ref("".concat(e,"/cards"));return t.on("value",(function(e){var t=e.val();t&&a(t)})),function(){return t.off()}},this.removeUserData=function(e,a){$.ref("".concat(a,"/cards/").concat(e)).set(null)}},_e=new te,me=new ie,de=new ue,je=Object(n.memo)((function(e){return Object(f.jsx)(le,Object(r.a)(Object(r.a)({},e),{},{imageUploader:me}))}));o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Q,{authService:_e,FileUploader:je,cardRepository:de})}),document.getElementById("root"))},8:function(e,a,t){e.exports={mediaQuery:"62rem",makerBlack:"black",makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWhite:"white",card:"card_card__1_upv",light:"card_light__CnvI-",dark:"card_dark__35gCJ",colorful:"card_colorful__1vmIt",image:"card_image__1p-Nc",info:"card_info__1zh0r",name:"card_name__1oWAF",company:"card_company__2WBoU",field:"card_field__2Ra42",email:"card_email__cXCfC",message:"card_message__14EZ3"}}},[[59,1,2]]]);
//# sourceMappingURL=main.54866748.chunk.js.map