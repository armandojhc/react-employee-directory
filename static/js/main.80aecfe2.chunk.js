(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=(a(36),a(7)),s=a(8),u=a(10),m=a(9),i=a(26),h=a.n(i),p=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us&inc=picture,name,phone,email,dob")},d=a(30),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{alt:"Employee",src:this.props.picture})),l.a.createElement("td",null,this.props.name),l.a.createElement("td",null,this.props.phone),l.a.createElement("td",null,this.props.email),l.a.createElement("td",null,this.props.dob),l.a.createElement("td",null))}}]),a}(n.Component),f=a(29),y=a(27),b=a(11),g=a(6),v=a(12),w=(a(54),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",employees:[{name:{first:"Test"}}],results:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.search=function(t){for(var a=t.target.value.toLowerCase(),n=[],l=0;l<e.state.employees.length;l++){var r=e.state.employees[l];(r.name.first.toLowerCase().includes(a)||r.name.last.toLowerCase().includes(a))&&n.push(r)}console.log("There are ".concat(n.length," results")),e.setState({results:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results,results:t.data.results}),console.log(t.data.results[0])})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(y.a,{fluid:!0},l.a.createElement(f.a,{fluid:!0,className:"jumboTron"},l.a.createElement("h1",null,"Employee Search App"),l.a.createElement("p",null)),l.a.createElement(b.a,null,l.a.createElement(g.a,{md:4}),l.a.createElement(g.a,{md:4}," ",l.a.createElement("h4",null," Search Employee")),l.a.createElement(g.a,{md:4})),l.a.createElement(b.a,null,l.a.createElement(g.a,{md:4}),l.a.createElement(g.a,{md:4},l.a.createElement(v.a,null,l.a.createElement(v.a.Group,{controlId:"search"},l.a.createElement(v.a.Control,{type:"text",placeholder:"",onChange:this.search})))),l.a.createElement(g.a,{md:4})),l.a.createElement(b.a,null,l.a.createElement(g.a,null,l.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Dob"))),l.a.createElement("tbody",null,this.state.results.map((function(e,t){return l.a.createElement(E,{key:t,picture:e.picture.thumbnail,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date})})))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.80aecfe2.chunk.js.map