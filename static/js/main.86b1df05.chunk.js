(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(54)},22:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),s=a.n(r),c=(a(22),a(2)),o=a(3),l=a(5),m=a(4),h=a(6),u=a(1),f=a(16),p=a.n(f),b=(a(42),a(44),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("header",{className:"Header"},i.a.createElement("h1",null,i.a.createElement("a",{href:"/",title:"Home",onClick:function(t){return e.props.navigate(t,"/")}},"Simone Lippolis ",i.a.createElement("span",null,"| ",i.a.createElement("strong",null,"Bookmarks")))))}}]),t}(n.Component)),d=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).submit=a.submit.bind(Object(u.a)(Object(u.a)(a))),a.typing=a.typing.bind(Object(u.a)(Object(u.a)(a))),a.state={quicklinks:[],term:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({term:this.props.term,quicklinks:JSON.parse(this.props.content.quicklinks)})}},{key:"componentDidUpdate",value:function(e,t){this.props.content.quicklinks!==e.content.quicklinks&&this.setState({quicklinks:JSON.parse(this.props.content.quicklinks)}),this.props.term!==e.term&&this.setState({term:this.props.term})}},{key:"submit",value:function(e){this.props.navigate(e,"/filter/by/"+this.state.term)}},{key:"typing",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this.props.navigate;return i.a.createElement("section",{className:"Search"},i.a.createElement("form",{onSubmit:this.submit},i.a.createElement("input",{type:"search",name:"search",value:this.state.term,placeholder:"Filter by\u2026",onChange:this.typing})),i.a.createElement("ul",{className:"tags"},i.a.createElement("li",{className:"intro"},"Quick filters"),this.state.quicklinks.map(function(t,a){return i.a.createElement("li",{key:a,className:"tag"},i.a.createElement("a",{href:"/filter/by/"+escape(t),onClick:function(a){e(a,"/filter/by/"+t)}},"#",t))})))}}]),t}(n.Component)),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"Title"})}}]),t}(n.Component),g=(a(48),a(50),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).image=a.image.bind(Object(u.a)(Object(u.a)(a))),a.showmore=a.showmore.bind(Object(u.a)(Object(u.a)(a))),a.state={showall:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"image",value:function(e){return e.media&&""!==e.media&&"card"===this.props.layout?i.a.createElement("figure",null,i.a.createElement("img",{src:e.media,alt:e.title})):null}},{key:"showmore",value:function(e){e.preventDefault(),this.setState({showall:!this.state.showall})}},{key:"render",value:function(){var e=this.image,t=this.showmore,a=this.props.navigate,n=this.props.item,r=n.tags.split(","),s=r.length,c=0;return i.a.createElement("article",{className:"Article"},i.a.createElement("a",{href:n.link},i.a.createElement("header",null,e(n),i.a.createElement("h1",null,i.a.createElement("span",null,n.title))),i.a.createElement("p",null,n.content)),i.a.createElement("footer",null,i.a.createElement("ul",{className:"tags "+(this.state.showall?"expanded":"collapsed")},r.map(function(e,n){if(c<4)return c++,i.a.createElement("li",{key:n,className:"tag"},i.a.createElement("a",{href:"/filter/by/"+escape(e.trim()),onClick:function(t){a(t,"/filter/by/"+escape(e.trim()))}},"#",e.trim()));if(4===c&&s<=5)return c++,i.a.createElement("li",{key:n,className:"tag"},i.a.createElement("a",{href:"/filter/by/"+escape(e.trim()),onClick:function(t){a(t,"/filter/by/"+escape(e.trim()))}},"#",e.trim()));if(4===c){c++;var r=s-5;return r=r<11?"+"+r:"10+",i.a.createElement("li",{key:n,className:"tag with-switch"},i.a.createElement("a",{href:"/filter/by/"+escape(e.trim()),onClick:function(t){a(t,"/filter/by/"+escape(e.trim()))}},"#",e.trim())," ",i.a.createElement("a",{href:"#expand",className:"show",onClick:t},r))}return c===s-1?(c++,i.a.createElement("li",{key:n,className:"tag additional with-switch"},i.a.createElement("a",{href:"/filter/by/"+escape(e.trim()),onClick:function(t){a(t,"/filter/by/"+escape(e.trim()))}},"#",e.trim())," ",i.a.createElement("a",{href:"#collapse",className:"hide",onClick:t},"Collapse"))):(c++,i.a.createElement("li",{key:n,className:"tag additional"},i.a.createElement("a",{href:"/filter/by/"+escape(e.trim()),onClick:function(t){a(t,"/filter/by/"+escape(e.trim()))}},"#",e.trim())))}))))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).clear=a.clear.bind(Object(u.a)(Object(u.a)(a))),a.icon=a.icon.bind(Object(u.a)(Object(u.a)(a))),a.reset=a.reset.bind(Object(u.a)(Object(u.a)(a))),a.title=a.title.bind(Object(u.a)(Object(u.a)(a))),a.toggleView=a.toggleView.bind(Object(u.a)(Object(u.a)(a))),a.state={cards:"true"===window.localStorage.getItem("cards")},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"clear",value:function(){return this.props.term&&""!==this.props.term?i.a.createElement("button",{className:"clear",onClick:this.reset},"Clear filters"):null}},{key:"icon",value:function(){return this.state.cards?i.a.createElement("svg",{viewBox:"0 0 32 32"},i.a.createElement("g",null,i.a.createElement("rect",{x:"6",y:"6",width:"20",height:"3"}),i.a.createElement("rect",{x:"6",y:"15",width:"20",height:"3"}),i.a.createElement("rect",{x:"6",y:"24",width:"20",height:"3"}))):i.a.createElement("svg",{viewBox:"0 0 32 32"},i.a.createElement("g",null,i.a.createElement("rect",{x:"6",y:"6",width:"9",height:"9"}),i.a.createElement("rect",{x:"18",y:"6",width:"9",height:"9"}),i.a.createElement("rect",{x:"6",y:"18",width:"9",height:"9"}),i.a.createElement("rect",{x:"18",y:"18",width:"9",height:"9"})))}},{key:"reset",value:function(e){this.props.navigate(e,"/")}},{key:"title",value:function(){return this.props.term&&""!==this.props.term?"Bookmarks filtered by <em>"+this.props.term+"</em>":"Bookmarks"}},{key:"toggleView",value:function(e){e.preventDefault(),window.localStorage.setItem("cards",!this.state.cards),this.setState({cards:!this.state.cards})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"List"},i.a.createElement("h1",null,i.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.title()}})," ",this.clear()," ",i.a.createElement("button",{className:"toggle",onClick:this.toggleView},this.icon())),i.a.createElement("ul",{className:this.state.cards?"cards":"list"},this.props.bookmarks.map(function(t,a){return i.a.createElement("li",{key:a},i.a.createElement(g,{item:t,navigate:e.props.navigate,layout:e.state.cards?"card":"list"}))})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"Footer"})}}]),t}(n.Component),E=(a(52),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={ready:!1,visible:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.visible!==this.props.visible&&(this.props.visible?this.setState({ready:!0},function(){setTimeout(function(){a.setState({visible:!0})},10)}):this.setState({visible:!1},function(){setTimeout(function(){a.setState({ready:!1})},10)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"Loading "+(this.state.ready?"ready ":"")+(this.state.visible?"visible":"")},i.a.createElement("div",{className:"inside"},i.a.createElement("div",{className:"spinner"},i.a.createElement("svg",{viewBox:"0 0 16 16"},i.a.createElement("path",{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"})))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchURL=a.fetchURL.bind(Object(u.a)(Object(u.a)(a))),a.historyChange=a.historyChange.bind(Object(u.a)(Object(u.a)(a))),a.navigate=a.navigate.bind(Object(u.a)(Object(u.a)(a))),a.parseURL=a.parseURL.bind(Object(u.a)(Object(u.a)(a))),a.timeout=a.timeout.bind(Object(u.a)(Object(u.a)(a))),a.endpoint={bookmarks:"https://api.simonelippolis.com/api/bookmarks/",content:"https://api.simonelippolis.com/api/content/"},a.timer=0,a.state={bookmarks:[],content:{quicklinks:'[ "i", "love", "chocolate" ]'},loading:!0,started:!1,term:"",timeout:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",this.historyChange),this.timer=setTimeout(this.timeout,2e3),this.fetchURL(this.endpoint.content+"bookmarks",{},function(t){var a=t.data;if(clearTimeout(e.timer),a.error)console.log(a.errormessage);else{var n={};a.content.forEach(function(e){n[e.slug]=e.content}),e.setState({content:n})}}),this.parseURL()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.historyChange)}},{key:"fetchURL",value:function(e,t,a,n){p.a.get(e,{data:t}).then(function(e){"function"===typeof a&&a(e)}).catch(function(e){console.log(e),"function"===typeof n&&n(e)})}},{key:"historyChange",value:function(e){this.setState({loading:!0},this.parseURL)}},{key:"navigate",value:function(e,t){e.preventDefault(),window.history.pushState({url:t},"",t),this.setState({loading:!0},this.parseURL)}},{key:"parseURL",value:function(){var e=this,t=window.location.pathname,a=null,n=this.endpoint.bookmarks;0===t.indexOf("/filter/by")&&(a=t.replace(/\/filter\/by\//gi,""))&&(n=n+"filter/"+a,this.setState({term:unescape(a)})),this.fetchURL(n,{},function(t){200===t.status&&(t.data.error?console.log(t.data.errormessage):e.setState({bookmarks:t.data.documents,loading:!1,started:!0,term:t.data.term||""},function(){window.scrollTo(0,0)}))})}},{key:"timeout",value:function(){clearTimeout(this.timer),this.setState({timeout:!0})}},{key:"render",value:function(){return this.state.started?i.a.createElement("div",{className:"Bookmarks"},i.a.createElement(b,{bookmarks:this.state.bookmarks,content:this.state.content,term:this.state.term,fetch:this.fetchURL,navigate:this.navigate}),i.a.createElement(d,{bookmarks:this.state.bookmarks,content:this.state.content,term:this.state.term,fetch:this.fetchURL,navigate:this.navigate}),i.a.createElement(k,{bookmarks:this.state.bookmarks,content:this.state.content,term:this.state.term,fetch:this.fetchURL,navigate:this.navigate}),i.a.createElement(v,{bookmarks:this.state.bookmarks,content:this.state.content,term:this.state.term,fetch:this.fetchURL,navigate:this.navigate}),i.a.createElement(y,{bookmarks:this.state.bookmarks,content:this.state.content,term:this.state.term,fetch:this.fetchURL,navigate:this.navigate}),i.a.createElement(E,{visible:this.state.loading})):i.a.createElement("div",{className:"Bookmarks"},i.a.createElement(b,{navigate:this.navigate}),i.a.createElement("div",{className:"offline"},i.a.createElement("p",null,"Initializing"),i.a.createElement("p",null,i.a.createElement("em",null,this.state.timeout?"Maybe you are offline?":""))),i.a.createElement(y,{navigate:this.navigate}),i.a.createElement(E,{visible:this.state.loading}))}}]),t}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");j?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(t,e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.86b1df05.chunk.js.map