(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(4),a=n.n(o),i=(n(14),n(3)),h=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"Robots"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},l=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",height:"80vh"},children:e.children})},d=n(5),u=n(6),O=n(8),f=n(7),p=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Oooops. That is not good!"}):this.props.children}}]),n}(r.Component);n(15);var x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),h=a[0],d=a[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{children:"RoboFriends"}),Object(c.jsx)(b,{searchChange:function(e){d(e.target.value)}}),Object(c.jsx)(l,{children:Object(c.jsx)(p,{children:Object(c.jsx)(j,{robots:u})})})]}):Object(c.jsx)("h1",{children:"Loading..."})};n(16);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0c62a5ab.chunk.js.map