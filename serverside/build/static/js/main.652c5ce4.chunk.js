(this["webpackJsonplogger-inner"]=this["webpackJsonplogger-inner"]||[]).push([[0],{141:function(e,t,a){e.exports=a(286)},286:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(6),s=a(11),o=a(8),u=a(12),m=a(13),h=a(14),p=a(319),d=a(322),b=a(332),E=a(47),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement("h1",null,"Bookbuy"),r.a.createElement("br",null),r.a.createElement("div",{id:"nav"},r.a.createElement(b.a,{onClick:function(){return e.props.history.push("/")}},"Login"),r.a.createElement(b.a,{onClick:function(){return e.props.history.push("/register")}},"Register"),r.a.createElement(b.a,{onClick:function(){return e.props.history.push("/About")}},"About")))))}}]),t}(r.a.Component),g=Object(E.f)(f),v=a(19),j=a.n(v),O=a(34),y=a(10),k=a(73),x=a.n(k),C=a(74),w=a.n(C),A=a(48),S=a.n(A),z=a(35),L=a.n(z),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:""},a.handleAuthUser=a.handleAuthUser.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleAuthUser",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t,a,n,r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.email,n=t.password,r={email:a,password:n},e.prev=2,e.next=5,L.a.post("/api/auth",r);case 5:200===(l=e.sent).status?this.props.history.push("/bookpage",{username:a}):400===l.status&&alert("Username/Password Invalid"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert("Username/Password Invalid");case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"blue"}}," Login"),r.a.createElement(S.a,{floatingLabelText:"Username",onChange:function(t,a){return e.setState({email:a})}}),r.a.createElement("br",null),r.a.createElement(S.a,{type:"password",floatingLabelText:"Password",onChange:function(t,a){return e.setState({password:a})}}),r.a.createElement("br",null),r.a.createElement(w.a,{label:"submit",onClick:this.handleAuthUser}," "))))}}]),t}(r.a.Component),N=Object(E.f)(R),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={firstname:"",lastname:"",email:"",password:""},a.handleRegisterClick=a.handleRegisterClick.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleRegisterClick",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t,a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I am in handleclick"),t=this.state,a=t.email,n=t.password,e.prev=2,r={email:a,password:n},e.next=6,L.a.post("/api/bfa",r);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"blue"}},"User Registration"),r.a.createElement(S.a,{floatingLabelText:"First Name",onChange:function(t,a){return e.setState({firstname:a})}}),r.a.createElement(S.a,{floatingLabelText:"Last Name",onChange:function(t,a){return e.setState({last_name:a})}}),r.a.createElement("br",null),r.a.createElement(S.a,{floatingLabelText:"username",type:"email",LabelText:"username",onChange:function(t,a){return e.setState({email:a})}}),r.a.createElement("br",null),r.a.createElement(S.a,{type:"password",floatingLabelText:"Password",onChange:function(t,a){return e.setState({password:a})}}),r.a.createElement("br",null),r.a.createElement(w.a,{label:"Register",onClick:this.handleRegisterClick}))))}}]),t}(r.a.Component),U=Object(E.f)(T),B=a(42),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null," I am in Home Page "),r.a.createElement(b.a,{onClick:function(){return e.props.history.push("/login")}}," Logout "))}}]),t}(r.a.Component),H=Object(E.f)(W),P=a(326),q=a(329),J=a(328),F=a(327),I=a(333),Y=a(325),D=a(324),Q=a(323),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logout=a.logout.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(b.a,{onClick:this.logout}," Logout "))))}}]),t}(r.a.Component),K=Object(E.f)(_),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fname,a=e.lname,n=e.street,l=e.zipcode,c=e.city;return r.a.createElement("div",null,r.a.createElement("p",null," Delivery Address: "),r.a.createElement("p",null," ",t),r.a.createElement("p",null," ",a," "),r.a.createElement("p",null," ",n," "),r.a.createElement("p",null," ",l," "),r.a.createElement("p",null," ",c," "))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={allorders:[]},a.bookbutton=a.bookbutton.bind(Object(y.a)(a)),a.fetchAddresses=a.fetchAddresses.bind(Object(y.a)(a)),a.deleteUsers=a.deleteUsers.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"bookbutton",value:function(){var e=this.props.location.state.username;this.props.history.push("/delivery",{uname:e})}},{key:"deleteUsers",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.state.username,e.prev=1,e.next=4,L.a.delete("/api/account/",{params:{foo:t}});case 4:200===e.sent.status&&(console.log("Delete Successful"),this.props.history.push("/")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error in clint side deleting"+e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAddresses",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.state.username,e.next=3,L.a.get("/app/address/"+t);case 3:a=e.sent,n=a.data,console.log("I am here....."),this.props.history.push("/printaddress",{allorders:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[1];return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null),r.a.createElement(K,null),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(Q.a,{maxWidth:"sm"},r.a.createElement(D.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"choose the book you wish to"),r.a.createElement("div",null,r.a.createElement(Y.a,{container:!0,spacing:8,justify:"center"},r.a.createElement(Y.a,{item:!0}),r.a.createElement(Y.a,{item:!0}))))),r.a.createElement(Q.a,{maxWidth:"md"},r.a.createElement(Y.a,{container:!0,spacing:8},t.map((function(t){return r.a.createElement(Y.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(P.a,null,r.a.createElement(F.a,{image:"http://t0.gstatic.com/images?q=tbn%3AANd9GcRO-kfeYvwKQE6QZJhJr7xVGS-6JFYHjYTwQYCfZPaBTPAx0_Ca__s4xKQAcAiuH01FOzkicwyH&usqp=CAc",title:"Harry Potter"}),r.a.createElement(J.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Harry Potter and the Sorcerer's Stone"),r.a.createElement(D.a,null,"Novel by J. K. Rowling")),r.a.createElement(q.a,null,r.a.createElement(b.a,{onClick:e.bookbutton,size:"small",color:"primary"},"buy"))))}))))),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(Q.a,{maxWidth:"sm"},r.a.createElement("div",null,r.a.createElement(Y.a,{container:!0},r.a.createElement(Y.a,{item:!0}),r.a.createElement(Y.a,{item:!0}))))),r.a.createElement(Q.a,{maxWidth:"md"},r.a.createElement(Y.a,{container:!0,spacing:4},t.map((function(t){return r.a.createElement(Y.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(P.a,null,r.a.createElement(F.a,{image:"https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg",title:"Hound of the Baskervilles"}),r.a.createElement(J.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Hound of the Baskervilles"),r.a.createElement(D.a,null,"Aurther Conan Doyle")),r.a.createElement(q.a,null,r.a.createElement(b.a,{onClick:e.bookbutton,size:"small",color:"primary"},"buy"))))})))),r.a.createElement(Q.a,{maxWidth:"md"},r.a.createElement(Y.a,{container:!0,spacing:4},t.map((function(t){return r.a.createElement(Y.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(P.a,null,r.a.createElement(F.a,{image:"https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg",title:"Hound of the Baskervilles"}),r.a.createElement(J.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},"The Lord of the Rings"),r.a.createElement(D.a,null,"Novel by J. R. R. Tolkien")),r.a.createElement(q.a,null,r.a.createElement(b.a,{onClick:e.bookbutton,size:"small",color:"primary"},"buy"))))}))))),r.a.createElement("div",{id:"logoutbtn"},r.a.createElement(b.a,{onClick:this.fetchAddresses}," Addresses "),r.a.createElement(b.a,{onClick:this.deleteUsers}," Delete Account ")),r.a.createElement("footer",null,r.a.createElement(D.a,{variant:"h6",align:"center",gutterBottom:!0},"ASR limited"),r.a.createElement(D.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Copyright 2019"))))}}]),t}(r.a.Component),V=Object(E.f)(G),M=a(330),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={firstName:"",lastname:"",street:"",city:"",zipcode:""},a.handledelivery=a.handledelivery.bind(Object(y.a)(a)),a.fnamechange=a.fnamechange.bind(Object(y.a)(a)),a.lnamechange=a.lnamechange.bind(Object(y.a)(a)),a.streetchange=a.streetchange.bind(Object(y.a)(a)),a.citychange=a.citychange.bind(Object(y.a)(a)),a.zipchange=a.zipchange.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handledelivery",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t,a,n,r,l,c,i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.state.uname,a=this.state,n=a.firstname,r=a.lastname,l=a.street,c=a.city,i=a.zipcode,console.log("The values of the form are:   "),console.log(n),console.log(r),console.log(l),console.log(c),console.log(i),s={firstname:n,lastname:r,street:l,city:c,zipcode:i,username:t},e.next=11,L.a.post("/app/order",s);case 11:o=e.sent,console.log("The response of the status is: "+o.status),200===o.status?alert("Your order is placed"):console.log("Some problem in placing order");case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fnamechange",value:function(e){this.setState({firstname:e.target.value})}},{key:"lnamechange",value:function(e){this.setState({lastname:e.target.value})}},{key:"streetchange",value:function(e){this.setState({street:e.target.value})}},{key:"citychange",value:function(e){this.setState({city:e.target.value})}},{key:"zipchange",value:function(e){this.setState({zipcode:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.firstname,a=e.lastname,n=e.street,l=e.city,c=e.zipcode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,r.a.createElement("h1",{style:{color:"blue"}},"Shipping Address")),r.a.createElement(Y.a,{container:!0,spacing:3},r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(M.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"fname",value:t,onChange:this.fnamechange})),r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(M.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"lname",value:a,onChange:this.lnamechange})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(M.a,{required:!0,id:"address1",name:"address1",label:"Address for delivery",fullWidth:!0,autoComplete:"billing address-line1",value:n,onChange:this.streetchange})),r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(M.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",value:l,onChange:this.citychange})),r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(M.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code",value:c,onChange:this.zipchange}))),r.a.createElement("button",{onClick:this.handledelivery},"submit"))}}]),t}(r.a.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",width:"400",height:"300"}),r.a.createElement("br",null),r.a.createElement("div",null," "),r.a.createElement("h2",{style:{color:"blue"}},"Contact us:"),r.a.createElement("p",null,"bookbuy.a@gmail.com",r.a.createElement("br",null),"100 Bost Road",r.a.createElement("br",null),"West Haven",r.a.createElement("br",null),"Ct 06516")))}}]),t}(r.a.Component),ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.location.state.allorders.map((function(e){return r.a.createElement(Z,{fname:e.firstname,lname:e.lastname,street:e.street,zipcode:e.zipcode,city:e.city})}));return r.a.createElement("div",null,e)}}]),t}(r.a.Component),te=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t,a,n,l,c;return r.a.createElement("div",{className:"App"},r.a.createElement(B.a,null,r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,(e={exact:!0,path:"/"},Object(i.a)(e,"exact",!0),Object(i.a)(e,"strict",!0),Object(i.a)(e,"component",N),e)),r.a.createElement(E.a,{exact:!0,path:"/register"},r.a.createElement(U,null)),r.a.createElement(E.a,(t={exact:!0,path:"/homepage"},Object(i.a)(t,"exact",!0),Object(i.a)(t,"strict",!0),Object(i.a)(t,"component",H),t)),r.a.createElement(E.a,(a={exact:!0,path:"/bookpage"},Object(i.a)(a,"exact",!0),Object(i.a)(a,"strict",!0),Object(i.a)(a,"component",V),a)),r.a.createElement(E.a,(n={exact:!0,path:"/delivery"},Object(i.a)(n,"exact",!0),Object(i.a)(n,"strict",!0),Object(i.a)(n,"component",X),n)),r.a.createElement(E.a,(l={exact:!0,path:"/about"},Object(i.a)(l,"exact",!0),Object(i.a)(l,"strict",!0),Object(i.a)(l,"component",$),l)),r.a.createElement(E.a,(c={exact:!0,path:"/printaddress"},Object(i.a)(c,"exact",!0),Object(i.a)(c,"strict",!0),Object(i.a)(c,"component",ee),c))))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(te,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.652c5ce4.chunk.js.map