(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{58:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(7),s=n(8),l=n(10),u=n(9),j=n(39),b=n(91),d=n(20),h=n(2),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{onClick:this.props.onLogout,children:"Log Out"})}}]),n}(a.Component),p=(n(58),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(h.jsx)(j.a.Brand,{children:"My Favorite Books"}),Object(h.jsx)(b.a,{children:Object(h.jsx)(d.b,{to:"/",className:"nav-link",children:"Home"})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(d.b,{to:"/Profile",className:"nav-link",children:"Profile"})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(d.b,{to:"/Login",className:"nav-link",children:"Login"})}),Object(h.jsx)(O,{onLogout:this.props.onLogout})]})}}]),n}(r.a.Component)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(h.jsx)(j.a.Brand,{children:"Code Fellows"})})}}]),n}(r.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{})}}]),n}(a.Component),f=n(23),k=n.n(f),v=n(38),g=n(24),y=n.n(g),S=n(52),L=n(94),C=n(92),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{width:"50%"},children:Object(h.jsxs)(L.a,{onSubmit:function(t){e.props.handleSubmit(t)},children:[Object(h.jsx)(L.a.Label,{children:"Book name"}),Object(h.jsx)(L.a.Control,{name:"name",required:!0}),Object(h.jsx)(L.a.Label,{children:"description"}),Object(h.jsx)(L.a.Control,{as:"textarea",rows:3,name:"description",required:!0}),Object(h.jsx)(L.a.Label,{children:"Status"}),Object(h.jsx)(L.a.Control,{name:"status",required:!0}),Object(h.jsx)(L.a.Label,{children:"Email address"}),Object(h.jsx)(L.a.Control,{type:"email",placeholder:"name@example.com",name:"email",required:!0}),Object(h.jsx)(C.a,{variant:"outline-primary",type:"submit",children:"Submit"})]})})})}}]),n}(a.Component),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{width:"50%"},children:Object(h.jsxs)(L.a,{onSubmit:function(t){e.props.handleUpdateSubmit(t)},children:[Object(h.jsx)(L.a.Label,{children:"Book name"}),Object(h.jsx)(L.a.Control,{name:"name",required:!0}),Object(h.jsx)(L.a.Label,{children:"description"}),Object(h.jsx)(L.a.Control,{as:"textarea",rows:3,name:"description",required:!0}),Object(h.jsx)(L.a.Label,{children:"Status"}),Object(h.jsx)(L.a.Control,{name:"status",required:!0}),Object(h.jsx)(L.a.Label,{children:"Email address"}),Object(h.jsx)(L.a.Control,{type:"email",placeholder:"name@example.com",name:"email",required:!0}),Object(h.jsx)(C.a,{variant:"outline-danger",type:"submit",children:"update"})]})})})}}]),n}(a.Component),N=n(93),B=n(25),F=n(95),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){y.a.get("http://".concat("can-of-books-yousef.herokuapp.com","/books")).then((function(e){a.setState({book:e.data})}))},a.handleSubmit=function(){var e=Object(v.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({bookName:t.target[0].value,description:t.target[1].value,boookStatus:t.target[2].value,email:t.target[3].value});case 3:return e.next=5,{method:"POST",baseURL:"http://".concat("can-of-books-yousef.herokuapp.com"),url:"/creat-books",data:{title:a.state.bookName,description:a.state.description,status:a.state.boookStatus,email:a.state.email}};case 5:n=e.sent,y()(n).then((function(e){a.setState({book:e.data})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleUpdate=function(e,t,n,r,o){a.setState({updateId:e,bookName:t,description:n,boookStatus:r,email:o,showUpdateForm:!0})},a.handleUpdateSubmit=function(){var e=Object(v.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({bookName:t.target[0].value,description:t.target[1].value,boookStatus:t.target[2].value,email:t.target[3].value});case 3:return e.next=5,{method:"PUT",baseURL:"http://".concat("can-of-books-yousef.herokuapp.com"),url:"/update-book/".concat(a.state.updateId),data:{title:a.state.bookName,description:a.state.description,status:a.state.boookStatus,email:a.state.email}};case 5:return n=e.sent,e.next=8,y()(n).then((function(e){a.setState({book:e.data}),console.log(e.data)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleDelete=function(e){var t=e,n={method:"DELETE",baseURL:"http://".concat("can-of-books-yousef.herokuapp.com"),url:"/delete-book/".concat(t)};y()(n).then((function(e){a.setState({book:e.data})}))},a.state={book:[],bookName:"",description:"",boookStatus:"",email:"",showUpdateForm:!1,updateId:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[this.state.showUpdateForm?Object(h.jsx)(U,{handleUpdateSubmit:this.handleUpdateSubmit}):Object(h.jsx)(w,{handleSubmit:this.handleSubmit}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"The best books"}),Object(h.jsx)(N.a,{children:0!==this.state.book.length?this.state.book.map((function(t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(B.a,{style:{width:"18rem"},children:Object(h.jsxs)(B.a.Body,{children:[Object(h.jsx)(B.a.Title,{children:t.title}),Object(h.jsx)(B.a.Subtitle,{className:"mb-2 text-muted",children:t.status}),Object(h.jsx)(B.a.Text,{children:t.description}),Object(h.jsx)(B.a.Link,{href:"#",children:t.email}),Object(h.jsx)(C.a,{style:{margin:"18px"},variant:"primary",onClick:function(){return e.handleDelete(t._id)},children:"click to Delete book"}),Object(h.jsx)(C.a,{style:{margin:"18px"},variant:"primary",onClick:function(){return e.handleUpdate(t._id,t.title,t.description,t.status,t.email)},children:"click to update book"})]})})})})})):Object(h.jsx)(F.a,{variant:"danger",children:"There's no books."})})]})]})}}]),n}(r.a.Component),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(C.a,{variant:"outline-info",children:"Login"})}}]),n}(a.Component),D=(n(87),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(B.a,{style:{width:"18rem"},children:Object(h.jsxs)(B.a.Body,{children:[Object(h.jsx)(B.a.Title,{children:"Log In"}),Object(h.jsx)(B.a.Text,{children:"Click Below to Log In"}),Object(h.jsx)(q,{onLogin:this.props.onLogin})]})})}}]),n}(r.a.Component)),E=(n(88),n(6)),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).loginHandler=function(e){a.setState({user:e})},a.logoutHandler=function(){a.setState({user:null})},a.state={user:null},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(p,{user:this.state.user,onLogout:this.logoutHandler}),Object(h.jsxs)(E.c,{children:[Object(h.jsx)(E.a,{exact:!0,path:"/",children:Object(h.jsx)(T,{})}),Object(h.jsx)(E.a,{path:"/Profile",children:Object(h.jsx)(x,{})}),Object(h.jsx)(E.a,{path:"/Login",children:Object(h.jsx)(D,{onLogin:this.loginHandler})})]}),Object(h.jsx)(m,{})]})})}}]),n}(r.a.Component);c.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.7c08b54e.chunk.js.map