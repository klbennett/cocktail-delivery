(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"W+IF":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=(n("VtrM"),n("YFqc")),a=n.n(i),u=n("bD2i"),c=o.a.createElement;e.default=function(){var t=Object(u.a)(),e=t.user,n=t.logout;return e?c("div",null,c("div",null,c("p",null,"You're signed in. Email: ",e.email),c("p",{style:{display:"inlinelock",color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:function(){return n()}},"Log out"))):c(o.a.Fragment,null,c("p",null,"Hi there!"),c("p",null,"You are not signed in."," ",c(a.a,{href:"/auth"},c("a",null,"Sign in"))))}},YFqc:function(t,e,n){t.exports=n("cTJO")},bD2i:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("o0o1"),o=n.n(r),i=n("HaE+"),a=n("q1tI"),u=n("nOHt"),c=n("p46w"),s=n.n(c),f=n("Wcq6"),l=n.n(f),p=(n("6nsN"),n("dchS"));Object(p.a)();var h=function(){var t=Object(a.useState)(),e=t[0],n=t[1],r=Object(u.useRouter)(),c=function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.a.auth().signOut().then((function(){s.a.remove("auth"),r.push("/auth")})).catch((function(t){console.error(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var t=s.a.get("auth");t?n(JSON.parse(t)):r.push("/")}),[]),{user:e,logout:c}}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),u=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=s(n("nOHt")),y=n("elyg");function g(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var w=new Map,m=window.IntersectionObserver,b={};function k(){return l||(m?l=new m((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var E=function(t){i(n,t);var e=c(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,y.addBasePath)(g(t)),as:e?(0,y.addBasePath)(g(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,u=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),u=u?(0,h.resolve)(c,u):a,t.preventDefault();var s=o.props.scroll;null==s&&(s=u.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](a,u,{shallow:o.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),w.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}w.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);e.default=E},u1GD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",0,2,3,5,1,4,8]]]);