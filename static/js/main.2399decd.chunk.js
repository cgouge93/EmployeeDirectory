(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l);a(23);var c=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("b",null,"Employee Directory")),r.a.createElement("p",{className:"lead"},"Search by first or last name or click column headings to sort."))))},m=a(13),u=a(14),o=a(17),i=a(16),d=a(15),h=a.n(d),E=function(){return h.a.get("https://randomuser.me/api/?results=20&nat=us")},f=(a(41),function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group search-widget"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search directory for Employee",id:"search"}))))}),p=(a(42),a(2)),b=a.n(p),v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sortOrder:"",results:[],search:""},e.handleInputChange=function(t){if("search"===t.target.name){var a=t.target.value.toLowerCase();e.setState({search:a})}},e.sortByFName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){e.setState({results:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{handleInputChange:this.handleInputChange,search:this.state.search}),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-resposive text-center table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",{onClick:this.sortByFName,className:"sortable"},"First Name"),r.a.createElement("th",{onClick:this.sortByLName,className:"sortable"},"Last Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB "))),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?r.a.createElement("tbody",{key:t.login.uuid},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})),r.a.createElement("td",null,t.name.first),r.a.createElement("td",null,t.name.last),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.email),r.a.createElement("td",null,b()(t.dob.date,"mediumDate")))):t.name.last.toLowerCase().includes(e.state.search)?r.a.createElement("tbody",{key:t.login.uuid},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})),r.a.createElement("td",null,t.name.first),r.a.createElement("td",null,t.name.last),r.a.createElement("td",null,t.phone," "),r.a.createElement("td",null,t.email),r.a.createElement("td",null,b()(t.dob.date,"mediumDate")))):null})))))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(v,null))};a(43);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2399decd.chunk.js.map