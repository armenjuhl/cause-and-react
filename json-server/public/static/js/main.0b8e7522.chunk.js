(this["webpackJsonpcause-and-react"]=this["webpackJsonpcause-and-react"]||[]).push([[0],{102:function(e,t,a){e.exports=a(173)},110:function(e,t,a){},117:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),s=a.n(l),o=(a(107),a(108),a(109),a(110),a(18)),c=a(19),m=a(21),i=a(22),u=a(7),d=(a(117),a(2)),E={textAlign:"center",width:"100%"},h=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",{style:E},"Loading . . ."))},f="http://localhost:3001/";function p(e){var t=e.dish;e.onClick;return console.log("DISH ITEM: "+JSON.stringify(t)),r.a.createElement(d.d,null,r.a.createElement(u.b,{to:"/menu/".concat(t.id)},r.a.createElement(d.g,{width:"100%",src:f+t.image,alt:t.name}),r.a.createElement(d.h,null,r.a.createElement(d.k,null,t.name))))}var g=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(p,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},b=a(17),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNav=n.toggleNav.bind(Object(b.a)(n)),n.toggleModal=n.toggleModal.bind(Object(b.a)(n)),n.handleLogin=n.handleLogin.bind(Object(b.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(d.A,{onClick:this.toggleNav}),r.a.createElement(d.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.w,{navbar:!0},r.a.createElement(d.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(d.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(d.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(d.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(d.w,{className:"ml-auto",navbar:!0},r.a.createElement(d.x,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg text-white"}," Login"))))))),r.a.createElement(d.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Login"),r.a.createElement(d.u,null,r.a.createElement(d.n,{onSubmit:this.handleLogin},r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"username"},"Username"),r.a.createElement(d.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"password"},"Password"),r.a.createElement(d.p,{type:"text",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.o,{check:!0},r.a.createElement(d.r,{check:!0},r.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me")),r.a.createElement(d.c,{type:"submit",value:"submit",color:"primary",className:"mt-2"},"Login")))))}}]),a}(n.Component);var v=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Menu")),r.a.createElement("li",null,r.a.createElement("a",{href:"contactus.html"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},y=a(32);function w(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(h,null):n?r.a.createElement("h4",null,n):(console.log("ITEM: "+JSON.stringify(t)),r.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{src:f+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),t.designation?r.a.createElement(d.i,null,t.designation):null,r.a.createElement(d.j,null,t.description)))))}var O=function(e){return null!==e.dish?(console.log("\n\nDISH: "+JSON.stringify(e.dish)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(w,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(w,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(w,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leaderErrMess}))))):r.a.createElement("div",null)},M=a(8),k=a(98),L=function(e){return e&&e.length},S=function(e){return function(t){return!t||t.length<=e}},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(d.u,null,r.a.createElement(M.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement(d.r,{htmlFor:"rating"},"Rating"),r.a.createElement(M.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(d.r,{htmlFor:"formName"},"Your Name"),r.a.createElement(M.Control.text,{model:".formName",name:"formName",id:"formName",className:"form-control",placeholder:"Your Name",validators:{required:L,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:S(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".formName",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(d.r,{htmlFor:"comment"},"Comment"),r.a.createElement(M.Control.textarea,{model:".comment",name:"comment",id:"comment",className:"form-control",row:"5",validators:{required:L}}),r.a.createElement(M.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(d.c,{type:"submit",color:"primary"},"Submit"))))))}}]),a}(n.Component);function x(e){var t=e.dish;return null!==t?r.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{top:!0,src:f+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),r.a.createElement(d.j,null,t.description)))):r.a.createElement("div",null)}function D(e){var t=e.comments,a=e.postComment,n=e.dishId;if(null==t)return r.a.createElement("div",null);var l=t.map((function(e){var t=e.date,a=k(t).utc().format("MMM, DD, YYYY");return r.a.createElement("div",null,r.a.createElement("ul",{key:e.id,className:"list-unstyled"},r.a.createElement(y.Stagger,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,"- ",a)))))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},l),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(C,{dishId:n,postComment:a}))))}var F=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(x,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(D,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},j=function(e){return e&&e.length},A=function(e){return function(t){return!t||t.length<=e}},T=function(e){return function(t){return t&&t.length>=e}},I=function(e){return!isNaN(Number(e))},R=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.message,e.agree,e.contactType),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"#"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(M.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(d.l,{md:10},r.a.createElement(M.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:j,minLength:T(3),maxLength:A(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(d.l,{md:10},r.a.createElement(M.Control.text,{className:"form-control",model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",validators:{required:j,minLength:T(3),maxLength:A(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(d.l,{md:10},r.a.createElement(M.Control.text,{className:"form-control",model:".telnum",type:"tel",id:"telnum",name:"telnum",placeholder:"Tel. Number",validators:{required:j,minLength:T(3),maxLength:A(15),isNumber:I}}),r.a.createElement(M.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.l,{md:10},r.a.createElement(M.Control.text,{className:"form-control",model:".email",type:"email",id:"email",name:"email",placeholder:"Email",validators:{required:j,validEmail:R}}),r.a.createElement(M.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.r,{check:!0},r.a.createElement(M.Control.checkbox,{model:".agree",name:"agree",id:"contactType",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(d.l,{md:{size:3,offset:1}},r.a.createElement(M.Control.select,{model:".contactType",id:"contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(d.l,{md:10},r.a.createElement(M.Control.textarea,{model:".message",className:"form-control",id:"message",name:"message",rows:"12"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),H=function(e){var t=e.leaders.map((function(e){return r.a.createElement(a,{leader:e})}));function a(e){var t=e.leader;return console.log("LEADER: "+JSON.stringify(t)),r.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.s,{className:"mb-3"},r.a.createElement(d.s,{className:"mr-5",left:!0,href:t.image,target:"_blank"},r.a.createElement(d.s,{object:!0,src:f+t.image,alt:"Leader image"})),r.a.createElement(d.s,{body:!0},r.a.createElement(d.s,{heading:!0},t.name),t.designation,r.a.createElement("br",null),r.a.createElement("br",null),t.description)))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.d,null,r.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.s,{list:!0},t))))},q=a(24),_=function(){return{type:"DISHES_LOADING"}},B=function(e){return{type:"DISHES_FAILED",payload:e}},Y=function(e){return{type:"ADD_DISHES",payload:e}},J=function(e){return{type:"COMMENTS_FAILED",payload:e}},W=function(e){return{type:"ADD_COMMENTS",payload:e}},z=function(){return{type:"PROMOS_LOADING"}},G=function(e){return{type:"PROMOS_FAILED",payload:e}},K=function(e){return{type:"ADD_PROMOS",payload:e}},U=function(){return{type:"LEADERS_LOADING"}},Z=function(e){return{type:"LEADERS_FAILED",payload:e}},$=function(e){return{type:"ADD_LEADERS",payload:e}},V=function(e){return{type:"FEEDBACK_FAILED",payload:e}},Q=a(54),X=a(91),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(Q.a,null,r.a.createElement(X.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(u.f,{location:this.props.location},r.a.createElement(u.e,{path:"/home",component:function(){return console.log("\n\n***ATTENTION\nCOMMENTS : "+JSON.stringify(e.props.comments)),r.a.createElement(O,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.leadersLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(u.e,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(H,{leaders:e.props.leaders})}}),"} />",r.a.createElement(u.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(g,{dishes:e.props.dishes})}}),r.a.createElement(u.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return console.log("LISTEN HERE\n\n\n"+JSON.stringify(e.props.comments)),r.a.createElement(F,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(u.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(P,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(u.d,{to:"/home"})))),r.a.createElement(v,null))}}]),a}(n.Component),te=Object(u.g)(Object(q.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={comment:n,dishId:e,rating:t,author:a};return l.date=(new Date).toISOString(),fetch(f+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).then((function(e){console.log("Post comments ",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(_(!0)),fetch(f+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Y(t))})).catch((function(t){return e(B(t.message))}))}))},resetFeedbackForm:function(){e(M.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(f+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(W(t))})).catch((function(t){return e(J(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(z()),fetch(f+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(K(t))})).catch((function(t){return e(G(t.message))}))}))},fetchLeaders:function(){return e((function(e){return e(U()),fetch(f+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e($(t))})).catch((function(t){return e(Z(t.message))}))}))},postFeedback:function(t,a,n,r,l){return e(function(e,t,a,n,r,l,s){return function(o){var c={firstname:e,lastname:t,telnum:a,email:n,message:r,agree:l,contactType:s};return alert("FEEDBACK VALUES: "+JSON.stringify(c)),c.date=(new Date).toISOString(),fetch(f+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){return o(V(e.message))}))}}(t,a,n,r,l))}}}))(ee)),ae=a(14),ne=a(25),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(ae.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(ae.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ae.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(ae.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(ae.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(ae.a)({},e,{comments:e.comments.concat(a)});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(ae.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(ae.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ae.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},oe=[{id:0,name:"Peter Pan",image:"images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Armen Juhl",image:"images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},me=a(99),ie=a.n(me),ue=a(100),de=a.n(ue),Ee={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},he=Object(ne.createStore)(Object(ne.combineReducers)(Object(ae.a)({dishes:re,comments:le,promotions:se,leaders:ce},Object(M.createForms)({feedback:Ee}))),Object(ne.applyMiddleware)(ie.a,de.a)),fe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(q.Provider,{store:he},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(te,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.0b8e7522.chunk.js.map