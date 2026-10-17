(()=>{var P0=Object.defineProperty;var I0=(r,t,e)=>t in r?P0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var zt=(r,t,e)=>I0(r,typeof t!="symbol"?t+"":t,e);function Ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},hh,rn,Re,ni=1e8,be=1/ni,jc=Math.PI*2,L0=jc/4,D0=0,kd=Math.sqrt,U0=Math.cos,N0=Math.sin,Ze=function(t){return typeof t=="string"},Fe=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},qa=function(t){return typeof t=="undefined"},Ei=function(t){return typeof t=="object"},On=function(t){return t!==!1},uh=function(){return typeof window!="undefined"},Fa=function(t){return Fe(t)||Ze(t)},Vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,th=/(?:-?\.?\d|\.)+/gi,fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dh=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,O0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,wi,eh,ph,Wn={},Va={},Gd,Wd=function(t){return(Va=Rs(t,Wn))&&hn},Ya=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},Xd=function(t,e){return t&&(Wn[t]=e)&&Va&&(Va[t]=e)||Wn},Vo=function(){return 0},F0={suppressEvents:!0,isStart:!0,kill:!1},Ba={suppressEvents:!0,kill:!1},B0={suppressEvents:!0},mh={},hr=[],nh={},qd,Un={},Yc={},Ld=30,za=[],gh="",_h=function(t){var e=t[0],n,i;if(Ei(e)||Fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=za.length;i--&&!za[i].targetTest(e););n=za[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Mh(t[i],n)))||t.splice(i,1);return t},ur=function(t){return t._gsap||_h(ii(t))[0]._gsap},xh=function(t,e,n){return(n=t[e])&&Fe(n)?t[e]():qa(n)&&t.getAttribute&&t.getAttribute(e)||n},vn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},z0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ha=function(){var t=hr.length,e=hr.slice(0),n,i;for(nh={},hr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(t){return!!(t._initted||t._startAt||t.add)},Yd=function(t,e,n,i){hr.length&&!rn&&Ha(),t.render(e,n,i||!!(rn&&e<0&&vh(t))),hr.length&&!rn&&Ha()},Zd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Hd).length<2?e:Ze(t)?t.trim():t},$d=function(t){return t},Xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},k0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Rs=function(t,e){for(var n in e)t[n]=e[n];return t},Dd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ei(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Fo=function(t){var e=t.parent||Le,n=t.keyframes?k0(cn(t.keyframes)):Xn;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},V0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Za=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},H0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ih=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(Ba):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},G0=function r(t){return!t||t._ts&&r(t.parent)},Ud=function(t){return t._repeat?Ps(t._tTime,t=t.duration()+t._rDelay)*t:0},Ps=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},$a=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},Ja=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),$a(t),n._dirty||Fr(n,t)),t},Kd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wa(t.rawTime(),e),(!e._dur||Wo(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),Fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},Ti=function(t,e,n,i){return e.parent&&fr(e),e._start=Ge((Fi(n)?n:n||t!==Le?ei(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jd(t,e,"_first","_last",t._sort?"_start":0),rh(e)||(t._recent=e),i||Kd(t,e),t._ts<0&&Ja(t,t._tTime),t},Qd=function(t,e){return(Wn.ScrollTrigger||Ya("scrollTrigger",e))&&Wn.ScrollTrigger.create(e,t)},jd=function(t,e,n,i,s){if(wh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&qd!==Nn.frame)return hr.push(t),t._lazy=[s,i],1},W0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},rh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},X0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&W0(t)&&!(!t._initted&&rh(t))||(t._ts<0||t._dp._ts<0)&&!rh(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Wo(0,t._tDur,e),h=Ps(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ps(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&jd(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ih(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&fr(t,1),!n&&!rn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},q0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Is=function(t,e,n,i){var s=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ge(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ja(t,t._tTime=t._tDur*a),t.parent&&$a(t),n||Fr(t.parent,t),t},Nd=function(t){return t instanceof nn?Fr(t):Is(t,t._dur)},Y0={_start:0,endTime:Vo,totalDuration:Vo},ei=function r(t,e,n){var i=t.labels,s=t._recent||Y0,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Bo=function(t,e,n){var i=Fi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},dr=function(t,e){return t||t===0?e(t):e},Wo=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ze(t)||!(e=O0.exec(t))?"":e[1]},Z0=function(t,e,n){return dr(n,function(i){return Wo(t,e,i)})},sh=[].slice,tp=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==wi},$0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||tp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ze(t)&&!n&&(eh||!Ls())?sh.call((e||ph).querySelectorAll(t),0):cn(t)?$0(t,n):tp(t)?sh.call(t,0):t?[t]:[]},oh=function(t){return t=ii(t)[0]||ko("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?ko("Invalid scope")||ph.createElement("div"):t)}},ep=function(t){return t.sort(function(){return .5-Math.random()})},np=function(t){if(Fe(t))return t;var e=Ei(t)?t:{each:t},n=Br(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ze(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||e).length,g=o[_],m,S,y,x,C,E,w,R,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,ni])[1],!M){for(w=-ni;w<(w=p[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],m=l?Math.min(M,_)*h-.5:i%M,S=M===ni?0:l?_*u/M-.5:i/M|0,w=0,R=ni,E=0;E<_;E++)y=E%M-m,x=S-(E/M|0),g[E]=C=c?Math.abs(c==="y"?x:y):kd(y*y+x*x),C>w&&(w=C),C<R&&(R=C);i==="random"&&ep(g),g.max=w-R,g.min=R,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=sn(e.amount||e.each)||0,n=n&&_<0?up(n):n}return _=(g[f]-g.min)/g.max||0,Ge(g.b+(n?n(_):_)*g.v)+g.u}},ah=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Fi(n)?0:sn(n))}},ip=function(t,e){var n=cn(t),i,s;return!n&&Ei(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!Fi(t[0]))&&(i*=i)):t=ah(t.increment)),dr(e,n?Fe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Fi(o)?h:h+sn(o)}:ah(t))},rp=function(t,e,n,i){return dr(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},J0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},K0=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},Q0=function(t,e,n){return op(t,e,0,1,n)},sp=function(t,e,n){return dr(n,function(i){return t[~~e(i)]})},j0=function r(t,e,n){var i=e-t;return cn(t)?sp(t,r(0,t.length),e):dr(n,function(s){return(i+(s-t)%i)%i+t})},t_=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?sp(t,r(0,t.length-1),e):dr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ds=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Hd:th),n+=t.substr(e,i-e)+rp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},op=function(t,e,n,i,s){var o=e-t,a=i-n;return dr(s,function(l){return n+((l-t)/o*a||0)})},e_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ze(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=e}else i||(t=Rs(cn(t)?[]:{},t));if(!h){for(l in e)Sh.call(a,t,l,"get",e[l]);s=function(p){return Ah(p,a)||(o?t.p:t)}}}return dr(n,s)},Od=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&hr.length&&Ha(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},No=function(t){return fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Gn(t,"onInterrupt"),t},As,ap=[],lp=function(t){if(t)if(t=!t.name&&t.default||t,uh()||t.headless){var e=t.name,n=Fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Vo,render:Ah,add:Sh,kill:__,modifier:g_,rawVars:0},o={targetTest:0,get:0,getSetter:Ka,aliases:{},register:0};if(Ls(),t!==i){if(Un[e])return;Xn(i,Xn(Ga(t,s),o)),Rs(i.prototype,Rs(s,Ga(t,o))),Un[i.prop=e]=i,t.targetTest&&(za.push(i),mh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xd(e,i),t.register&&t.register(hn,i,yn)}else ap.push(t)},Se=255,Oo={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Zc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},cp=function(t,e,n){var i=t?Fi(t)?[t>>16,t>>8&Se,t&Se]:0:Oo.black,s,o,a,l,c,h,u,f,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Oo[t])i=Oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(th),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Zc(l+1/3,s,o),i[1]=Zc(l,s,o),i[2]=Zc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(fh),n&&i.length<4&&(i[3]=1),i}else i=t.match(th)||Oo.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},hp=function(t){var e=[],n=[],i=-1;return t.split(Oi).forEach(function(s){var o=s.match(kr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fd=function(t,e,n){var i="",s=(t+i).match(Oi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=cp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=hp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Oi,"1").split(kr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Oi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Oi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Oo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),n_=/hsl[a]?\(/,yh=function(t){var e=t.join(" "),n;if(Oi.lastIndex=0,Oi.test(e))return n=n_.test(e),t[1]=Fd(t[1],n),t[0]=Fd(t[0],n,hp(t[1])),!0},Ho,Nn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,p=function _(g){var m=r()-i,S=g===!0,y,x,C,E;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,y=C-o,(y>0||S)&&(E=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,o+=y+(y>=s?4:s-y),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](C,f,E,g)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Gd&&(!eh&&uh()&&(wi=eh=window,ph=wi.document||{},Wn.gsap=hn,(wi.gsapVersions||(wi.gsapVersions=[])).push(hn.version),Wd(Va||wi.GreenSockGlobals||!wi.gsap&&wi||{}),ap.forEach(lp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},Ho=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ho=0,c=Vo},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,m,S){var y=m?function(x,C,E,w){g(x,C,E,w),u.remove(y)}:g;return u.remove(g),a[S?"unshift":"push"](y),Ls(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u})(),Ls=function(){return!Ho&&Nn.wake()},le={},i_=/^[\d.\-M][\d.\-,\s]/,r_=/["']/g,s_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(r_,"").trim():+c,i=l.substr(a+1).trim();return e},o_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},a_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[s_(e[1])]:o_(t).split(",").map(Zd)):le._CE&&i_.test(t)?le._CE("",t):n},up=function(t){return function(e){return 1-t(1-e)}},fp=function r(t,e){for(var n=t._first,i;n;)n instanceof nn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Br=function(t,e){return t&&(Fe(t)?t:le[t]||a_(t))||e},Hr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return vn(t,function(a){le[a]=Wn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},dp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},$c=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/jc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*N0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:dp(a);return s=jc/s,l.config=function(c,h){return r(t,c,h)},l},Jc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:dp(n);return i.config=function(s){return r(t,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Hr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;Hr("Elastic",$c("in"),$c("out"),$c());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Hr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Hr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Hr("Circ",function(r){return-(kd(1-r*r)-1)});Hr("Sine",function(r){return r===1?1:-U0(r*L0)+1});Hr("Back",Jc("in"),Jc("out"),Jc());le.SteppedEase=le.steps=Wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-be;return function(a){return((i*Wo(0,o,a)|0)+s)*n}}};Cs.ease=le["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gh+=r+","+r+"Params,"});var Mh=function(t,e){this.id=D0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xh,this.set=e?e.getSetter:Ka},Go=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Is(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Ho||Nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ja(this,n),!s._dp||s.parent||Kd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ps(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime(Wo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),$a(this),H0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=B0);var i=rn;return rn=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ei(this,n),On(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Fe(n)?n:$d,a=function(){var c=i.then;i.then=null,Fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){No(this)},r})();Xn(Go.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var nn=(function(r){zd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Le&&Ti(n.parent||Le,Ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qd(Ni(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Bo(0,arguments,this),this},e.from=function(i,s,o){return Bo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Bo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,ei(this,o),1),this},e.call=function(i,s,o){return Ti(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(i,o,ei(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Fo(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Fo(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,g,m,S,y,x,C,E,w;if(this!==Le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,y=this._ts,m=!y,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Ge(h%g),h===l?(_=this._repeat,f=c):(C=Ge(h/g),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Ps(this._tTime,g),!a&&this._tTime&&C!==_&&this._tTime-C*g-this._dur<=0&&(C=_),E&&_&1&&(f=c-f,w=1),_!==C&&!this._lock){var R=E&&C&1,M=R===(E&&_&1);if(_<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Ge(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;fp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=q0(this,Ge(a),Ge(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!C&&(Gn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=-be);break}}d=p}else{d=this._last;for(var v=i<0?i:f;d;){if(p=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||rn&&vh(d)),f!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=v?-be:be);break}}d=p}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-be)._zTime=f>=a?1:-1,this._ts))return this._start=x,$a(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Gn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Fi(s)||(s=ei(this,s,i)),!(i instanceof Go)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Fe(i))i=He.delayedCall(0,i);else return this}return this!==i?Ti(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Fe(i)?this.killTweensOf(i):(i.parent===this&&Za(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,Ti(this,a,ei(this,i))},e.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Fi(s),h;l;)l instanceof He?z0(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ei(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=He.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||be,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Is(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xn({startAt:{time:ei(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Od(this,ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Od(this,ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Is(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Le._ts&&(Yd(Le,Wa(i,Le)),qd=Nn.frame),Nn.frame>=Ld){Ld+=Fn.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&Fn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},t})(Go);Xn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var l_=function(t,e,n,i,s,o,a){var l=new yn(this._pt,t,e,0,1,Eh,null,s),c=0,h=0,u,f,d,p,_,g,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ds(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(qc)||[];u=qc.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Vr(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dh.test(i)||m)&&(l.e=0),this._pt=l,l},Sh=function(t,e,n,i,s,o,a,l,c,h){Fe(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Fe(u)?c?t[e.indexOf("set")||!Fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Fe(u)?c?d_:gp:Th,p;if(Ze(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(p=Vr(f,i)+(sn(f)||0),(p||p===0)&&(i=p))),!h||f!==i||lh)return!isNaN(f*i)&&i!==""?(p=new yn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?m_:_p,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!u&&!(e in t)&&Ya(e,i),l_.call(this,t,e,f,i,d,l||Fn.stringFilter,c))},c_=function(t,e,n,i,s){if(Fe(t)&&(t=zo(t,s,e,n,i)),!Ei(t)||t.style&&t.nodeType||cn(t)||Vd(t))return Ze(t)?zo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=zo(t[a],s,e,n,i);return o},bh=function(t,e,n,i,s,o){var a,l,c,h;if(Un[t]&&(a=new Un[t]).init(s,a.rawVars?e[t]:c_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new yn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==As))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},cr,lh,wh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:g,y=t._overwrite==="auto"&&!hh,x=t.timeline,C,E,w,R,M,v,I,U,F,z,J,X,K;if(x&&(!f||!s)&&(s="none"),t._ease=Br(s,Cs.ease),t._yEase=u?up(Br(u===!0?s:u,Cs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(U=g[0]?ur(g[0]).harness:0,X=U&&i[U.prop],C=Ga(i,mh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Ba:F0),_._lazy=0),o){if(fr(t._startAt=He.set(g,Xn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!d)&&t._startAt.revert(Ba),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),w=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&On(l),immediateRender:a,stagger:0,parent:m},C),X&&(w[U.prop]=X),fr(t._startAt=He.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(Ba):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&On(l)||l&&!p,E=0;E<g.length;E++){if(M=g[E],I=M._gsap||_h(g)[E]._gsap,t._ptLookup[E]=z={},nh[I.id]&&hr.length&&Ha(),J=S===g?E:S.indexOf(M),U&&(F=new U).init(M,X||C,t,J,S)!==!1&&(t._pt=R=new yn(t._pt,M,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(q){z[q]=R}),F.priority&&(v=1)),!U||X)for(w in C)Un[w]&&(F=bh(w,C,t,J,M,S))?F.priority&&(v=1):z[w]=R=Sh.call(t,M,w,"get",C[w],J,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(M,t._op[E]),y&&t._pt&&(cr=t,Le.killTweensOf(M,z,t.globalTime(e)),K=!t.parent,cr=0),t._pt&&l&&(nh[I.id]=1)}v&&Ch(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&x.render(ni,!0,!0)},h_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return lh=1,t.vars[e]="+=0",wh(t,a),lh=0,l?ko(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Be(n)+sn(u.e)),u.b&&(u.b=h.s+sn(u.b))},u_=function(t,e){var n=t[0]?ur(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Rs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},f_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},zo=function(t,e,n,i,s){return Fe(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?Ds(t):t},pp=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mp={};vn(pp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return mp[r]=1});var He=(function(r){zd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Fo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Le,y=(cn(n)||Vd(n)?Fi(n[0]):"length"in i)?[n]:ii(n),x,C,E,w,R,M,v,I;if(a._targets=y.length?_h(y):ko("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Fa(c)||Fa(h)){if(i=a.vars,x=a.timeline=new nn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),x.kill(),x.parent=x._dp=Ni(a),x._start=0,f||Fa(c)||Fa(h)){if(w=y.length,v=f&&np(f),Ei(f))for(R in f)~pp.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(C=0;C<w;C++)E=Ga(i,mp),E.stagger=0,m&&(E.yoyoEase=m),I&&Rs(E,I),M=y[C],E.duration=+zo(c,Ni(a),C,M,y),E.delay=(+zo(h,Ni(a),C,M,y)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(M,E,v?v(C,M,y):0),x._ease=le.none;x.duration()?c=h=0:a.timeline=0}else if(p){Fo(Xn(x.vars.defaults,{ease:"none"})),x._ease=Br(p.ease||i.ease||"none");var U=0,F,z,J;if(cn(p))p.forEach(function(X){return x.to(y,X,">")}),x.duration();else{E={};for(R in p)R==="ease"||R==="easeEach"||f_(R,p[R],E,p.easeEach);for(R in E)for(F=E[R].sort(function(X,K){return X.t-K.t}),U=0,C=0;C<F.length;C++)z=F[C],J={ease:z.e,duration:(z.t-(C?F[C-1].t:0))/100*c},J[R]=z.v,x.to(y,J,U),U+=J.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!hh&&(cr=Ni(a),Le.killTweensOf(y),cr=0),Ti(S,Ni(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!p&&a._start===Ge(S._time)&&On(u)&&G0(Ni(a))&&S.data!=="nested")&&(a._tTime=-be,a.render(Math.max(0,-h)||0)),g&&Qd(Ni(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-be&&!h?l:i<be?0:i,f,d,p,_,g,m,S,y,x;if(!c)X0(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=Ge(u%_),u===l?(p=this._repeat,f=c):(g=Ge(u/_),p=~~g,p&&p===g?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(x=this._yEase,f=c-f),g=Ps(this._tTime,_),f===a&&!o&&this._initted&&p===g)return this._tTime=u,this;p!==g&&(y&&this._yEase&&fp(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ge(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(jd(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&u&&!s&&!g&&(Gn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ih(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ih(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(h&&!a)&&(u||a||m)&&(Gn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ho||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wh(this,c),h=this._ease(c/this._dur),h_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ja(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,h=this._pt,u,f,d,p,_,g,m;if((!s||s==="all")&&V0(a,l))return s==="all"&&(this._pt=0),No(this);for(u=this._op=this._op||[],s!=="all"&&(Ze(s)&&(_={},vn(s,function(S){return _[S]=1}),s=_),s=u_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,p=f,d={}):(d=u[m]=u[m]||{},p=s);for(_ in p)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Za(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&No(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Bo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Bo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Le.killTweensOf(i,s,o)},t})(Go);Xn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new nn,e=sh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Th=function(t,e,n){return t[e]=n},gp=function(t,e,n){return t[e](n)},d_=function(t,e,n,i){return t[e](i.fp,n)},p_=function(t,e,n){return t.setAttribute(e,n)},Ka=function(t,e){return Fe(t[e])?gp:qa(t[e])&&t.setAttribute?p_:Th},_p=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},m_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Eh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ah=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},g_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},__=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Za(this,e,"_pt"):e.dep||(n=1),e=i;return!n},x_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ch=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},yn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||_p,this.d=l||this,this.set=c||Th,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=x_,this.m=n,this.mt=s,this.tween=i},r})();vn(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return mh[r]=1});Wn.TweenMax=Wn.TweenLite=He;Wn.TimelineLite=Wn.TimelineMax=nn;Le=new nn({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=yh;var zr=[],ka={},v_=[],Bd=0,y_=0,Kc=function(t){return(ka[t]||v_).map(function(e){return e()})},ch=function(){var t=Date.now(),e=[];t-Bd>2&&(Kc("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Kc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bd=t,Kc("matchMedia"))},xp=(function(){function r(e,n){this.selector=n&&oh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=y_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Fe(n)&&(s=i,i=n,n=Fe);var o=this,a=function(){var c=Re,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=oh(s)),Re=o,u=i.apply(o,arguments),Fe(u)&&o._r.push(u),Re=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Fe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zr.length;o--;)zr[o].id===this.id&&zr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),M_=(function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new xp(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wi.matchMedia(n[c]),l&&(zr.indexOf(o)<0&&zr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return lp(i)})},timeline:function(t){return new nn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=ii(t)[0]);var s=ur(t||{}).get,o=n?$d:Zd;return n==="native"&&(n=""),t&&(e?o((Un[e]&&Un[e].get||s)(t,e,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(h){return hn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Un[e],a=ur(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;As._pt=0,u.init(t,n?h+n:h,As,0,[t]),u.render(1,u),As._pt&&Ah(1,As)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=hn.to(t,Xn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Br(t.ease,Cs.ease)),Dd(Cs,t||{})},config:function(t){return Dd(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Wn[a]&&ko(e+" effect requires "+a+" plugin.")}),Yc[e]=function(a,l,c){return n(ii(a),Xn(l||{},s),c)},o&&(nn.prototype[e]=function(a,l,c){return this.add(Yc[e](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Br(e)},parseEase:function(t,e){return arguments.length?Br(t,e):le},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new nn(t),i,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Ti(n,i,i._start-i._delay),i=s;return Ti(Le,n,0),n},context:function(t,e){return t?new xp(t,e):Re},matchMedia:function(t){return new M_(t)},matchMediaRefresh:function(){return zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ch()},addEventListener:function(t,e){var n=ka[t]||(ka[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ka[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:j0,wrapYoyo:t_,distribute:np,random:rp,snap:ip,normalize:Q0,getUnit:sn,clamp:Z0,splitColor:cp,toArray:ii,selector:oh,mapRange:op,pipe:J0,unitize:K0,interpolate:e_,shuffle:ep},install:Wd,effects:Yc,ticker:Nn,updateRoot:nn.updateRoot,plugins:Un,globalTimeline:Le,core:{PropTween:yn,globals:Xd,Tween:He,Timeline:nn,Animation:Go,getCache:ur,_removeLinkedListItem:Za,reverting:function(){return rn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return hh=t}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=He[r]});Nn.add(nn.updateRoot);As=Xa.to({},{duration:0});var S_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},b_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=S_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Qc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},vn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}b_(a,s)}}}},hn=Xa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Qc("roundProps",ah),Qc("modifiers"),Qc("snap",ip))||Xa;He.version=nn.version=hn.version="3.13.0";Gd=1;uh()&&Ls();var w_=le.Power0,T_=le.Power1,E_=le.Power2,A_=le.Power3,C_=le.Power4,R_=le.Linear,P_=le.Quad,I_=le.Cubic,L_=le.Quart,D_=le.Quint,U_=le.Strong,N_=le.Elastic,O_=le.Back,F_=le.SteppedEase,B_=le.Bounce,z_=le.Sine,k_=le.Expo,V_=le.Circ;var vp,pr,Ns,Uh,qr,H_,yp,Nh,G_=function(){return typeof window!="undefined"},zi={},Xr=180/Math.PI,Os=Math.PI/180,Us=Math.atan2,Mp=1e8,Oh=/([A-Z])/g,W_=/(left|right|width|margin|padding|x)/i,X_=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ph=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},q_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Z_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$_=function(t,e,n){return t.style[e]=n},J_=function(t,e,n){return t.style.setProperty(e,n)},K_=function(t,e,n){return t._gsap[e]=n},Q_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},j_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},tx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},De="transform",Bn=De+"Origin",ex=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Bi(i,a)}):this.tfm[t]=o.x?o[t]:Bi(i,t),t===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},Ip=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},nx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Oh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Nh(),(!s||!s.isStart)&&!n[De]&&(Ip(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lp=function(t,e){var n={target:t,props:[],revert:nx,save:ex};return t._gsap||hn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Dp,Ih=function(t,e){var n=pr.createElementNS?pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pr.createElement(t);return n&&n.style?n:pr.createElement(t)},ri=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Oh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},Sp="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||qr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Sp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Sp[o]:"")+t},Lh=function(){G_()&&window.document&&(vp=window,pr=vp.document,Ns=pr.documentElement,qr=Ih("div")||{style:{}},H_=Ih("div"),De=Fs(De),Bn=De+"Origin",qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dp=!!Fs("perspective"),Nh=hn.core.reverting,Uh=1)},bp=function(t){var e=t.ownerSVGElement,n=Ih("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ns.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ns.removeChild(n),s},wp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Up=function(t){var e,n;try{e=t.getBBox()}catch{e=bp(t),n=1}return e&&(e.width||e.height)||n||(e=bp(t)),e&&!e.width&&!e.x&&!e.y?{x:+wp(t,["x","cx","x1"])||0,y:+wp(t,["y","cy","y1"])||0,width:0,height:0}:e},Np=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Up(t))},Yr=function(t,e){if(e){var n=t.style,i;e in zi&&e!==Bn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Oh,"-$1").toLowerCase())):n.removeAttribute(e)}},mr=function(t,e,n,i,s,o){var a=new yn(t._pt,e,n,0,1,o?Pp:Rp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Tp={deg:1,rad:1,turn:1},ix={grid:1,flex:1},gr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qr.style,l=W_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,g,m;if(i===o||!s||Tp[i]||Tp[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Np(t),(d||o==="%")&&(zi[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],Be(d?s/p*u:s/100*p);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===Nn.time&&!g.uncache)return Be(s/g.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,p=t[h],S?t.style[e]=S:Yr(t,e)}else(d||o==="%")&&!ix[ri(_,"display")]&&(a.position=ri(t,"position")),_===t&&(a.position="static"),_.appendChild(qr),p=qr[h],_.removeChild(qr),a.position="absolute";return l&&d&&(g=ur(_),g.time=Nn.time,g.width=_[h]),Be(f?p*s/u:p&&s?u/p*s:0)},Bi=function(t,e,n,i){var s;return Uh||Lh(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=Yo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ja(ri(t,Bn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Qa[e]&&Qa[e](t,e,n)||ri(t,e)||xh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gr(t,e,s,n)+n:s},rx=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),o=s&&ri(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ri(t,"borderTopColor"))}var a=new yn(this._pt,t.style,e,0,1,Eh),l=0,c=0,h,u,f,d,p,_,g,m,S,y,x,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ri(t,e)||i,_?t.style[e]=_:Yr(t,e)),h=[n,i],yh(h),n=h[0],i=h[1],f=n.match(kr)||[],C=i.match(kr)||[],C.length){for(;u=kr.exec(i);)g=u[0],S=i.substring(l,u.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),g.charAt(1)==="="&&(g=Vr(d,g)+x),m=parseFloat(g),y=g.substr((m+"").length),l=kr.lastIndex-y.length,y||(y=y||Fn.units[e]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(d=gr(t,e,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Pp:Rp;return dh.test(i)&&(a.e=0),this._pt=a,a},Ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ep[n]||n,e[1]=Ep[i]||i,e.join(" ")},ox=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?Bn:De),Yr(n,a);l&&(Yr(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Yo(n,1),o.uncache=1,Ip(i)))}},Qa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new yn(t._pt,e,n,0,0,ox);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},qo=[1,0,0,1,0,0],Op={},Fp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ap=function(t){var e=ri(t,De);return Fp(e)?qo:e.substr(7).match(fh).map(Be)},Fh=function(t,e){var n=t._gsap||ur(t),i=t.style,s=Ap(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qo:s):(s===qo&&!t.offsetParent&&t!==Ns&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ns.appendChild(t)),s=Ap(t),l?i.display=l:Yr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ns.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Fh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],S=l[5],y=e.split(" "),x=parseFloat(y[0])||0,C=parseFloat(y[1])||0,E,w,R,M;n?l!==qo&&(w=d*g-p*_)&&(R=x*(g/w)+C*(-_/w)+(_*S-g*m)/w,M=x*(-p/w)+C*(d/w)-(d*S-p*m)/w,x=R,C=M):(E=Up(t),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),C=E.y+(~(y[1]||y[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&a.smooth?(m=x-c,S=C-h,a.xOffset=u+(m*d+S*_)-m,a.yOffset=f+(m*p+S*g)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Bn]="0px 0px",o&&(mr(o,a,"xOrigin",c,x),mr(o,a,"yOrigin",h,C),mr(o,a,"xOffset",u,a.xOffset),mr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Yo=function(t,e){var n=t._gsap||new Mh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ri(t,Bn)||"0",h,u,f,d,p,_,g,m,S,y,x,C,E,w,R,M,v,I,U,F,z,J,X,K,q,et,L,ct,ut,It,D,V;return h=u=f=_=g=m=S=y=x=0,d=p=1,n.svg=!!(t.getCTM&&Np(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),w=Fh(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Dh(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,E=n.yOrigin||0,w!==qo&&(I=w[0],U=w[1],F=w[2],z=w[3],h=J=w[4],u=X=w[5],w.length===6?(d=Math.sqrt(I*I+U*U),p=Math.sqrt(z*z+F*F),_=I||U?Us(U,I)*Xr:0,S=F||z?Us(F,z)*Xr+_:0,S&&(p*=Math.abs(Math.cos(S*Os))),n.svg&&(h-=C-(C*I+E*F),u-=E-(C*U+E*z))):(V=w[6],It=w[7],L=w[8],ct=w[9],ut=w[10],D=w[11],h=w[12],u=w[13],f=w[14],R=Us(V,ut),g=R*Xr,R&&(M=Math.cos(-R),v=Math.sin(-R),K=J*M+L*v,q=X*M+ct*v,et=V*M+ut*v,L=J*-v+L*M,ct=X*-v+ct*M,ut=V*-v+ut*M,D=It*-v+D*M,J=K,X=q,V=et),R=Us(-F,ut),m=R*Xr,R&&(M=Math.cos(-R),v=Math.sin(-R),K=I*M-L*v,q=U*M-ct*v,et=F*M-ut*v,D=z*v+D*M,I=K,U=q,F=et),R=Us(U,I),_=R*Xr,R&&(M=Math.cos(R),v=Math.sin(R),K=I*M+U*v,q=J*M+X*v,U=U*M-I*v,X=X*M-J*v,I=K,J=q),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=Be(Math.sqrt(I*I+U*U+F*F)),p=Be(Math.sqrt(X*X+V*V)),R=Us(J,X),S=Math.abs(R)>2e-4?R*Xr:0,x=D?1/(D<0?-D:D):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fp(ri(t,De)),K&&t.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Be(d),n.scaleY=Be(p),n.rotation=Be(_)+a,n.rotationX=Be(g)+a,n.rotationY=Be(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Bn]=ja(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?lx:Dp?Bp:ax,n.uncache=0,n},ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},Rh=function(t,e,n){var i=sn(e);return Be(parseFloat(e)+parseFloat(gr(t,"x",n+"px",i)))+i},ax=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Bp(t,e)},Gr="0deg",Xo="0px",Wr=") ",Bp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,x="",C=m==="auto"&&t&&t!==1||m===!0;if(y&&(u!==Gr||h!==Gr)){var E=parseFloat(h)*Os,w=Math.sin(E),R=Math.cos(E),M;E=parseFloat(u)*Os,M=Math.cos(E),o=Rh(S,o,w*M*-y),a=Rh(S,a,-Math.sin(E)*-y),l=Rh(S,l,R*M*-y+y)}g!==Xo&&(x+="perspective("+g+Wr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Xo||a!==Xo||l!==Xo)&&(x+=l!==Xo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Wr),c!==Gr&&(x+="rotate("+c+Wr),h!==Gr&&(x+="rotateY("+h+Wr),u!==Gr&&(x+="rotateX("+u+Wr),(f!==Gr||d!==Gr)&&(x+="skew("+f+", "+d+Wr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Wr),S.style[De]=x||"translate(0, 0)"},lx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),x=parseFloat(a),C,E,w,R,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Os,c*=Os,C=Math.cos(l)*u,E=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Os,M=Math.tan(c-h),M=Math.sqrt(1+M*M),w*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),C*=M,E*=M)),C=Be(C),E=Be(E),w=Be(w),R=Be(R)):(C=u,R=f,E=w=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=gr(d,"x",o,"px"),x=gr(d,"y",a,"px")),(p||_||g||m)&&(y=Be(y+p-(p*C+_*w)+g),x=Be(x+_-(p*E+_*R)+m)),(i||s)&&(M=d.getBBox(),y=Be(y+i/100*M.width),x=Be(x+s/100*M.height)),M="matrix("+C+","+E+","+w+","+R+","+y+","+x+")",d.setAttribute("transform",M),S&&(d.style[De]=M)},cx=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Mp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Mp)%o-~~(c/o)*o)),t._pt=f=new yn(t._pt,e,n,i,c,q_),f.e=h,f.u="deg",t._props.push(n),f},Cp=function(t,e){for(var n in e)t[n]=e[n];return t},hx=function(t,e,n){var i=Cp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=Yo(n,1),Yr(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],o[De]=e,a=Yo(n,1),o[De]=c);for(l in zi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=sn(c),p=sn(h),u=d!==p?gr(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new yn(t._pt,a,l,u,f-u,Ph),t._pt.u=p||0,t._props.push(l));Cp(a,i)};vn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Qa[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(p){return Bi(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Bh={name:"css",register:Lh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,p,_,g,m,S,y,x,C,E,w,R;Uh||Lh(),this.styles=this.styles||Lp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Un[_]&&bh(_,e,n,i,t,s)))){if(d=typeof h,p=Qa[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ds(h)),p)p(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Oi.lastIndex=0,Oi.test(c)||(g=sn(c),m=sn(h)),m?g!==m&&(c=gr(t,_,c,m)+m):g&&(h+=g),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ze(c)&&~c.indexOf("random(")&&(c=Ds(c)),sn(c+"")||c==="auto"||(c+=Fn.units[_]||sn(Bi(t,_))||""),(c+"").charAt(1)==="="&&(c=Bi(t,_))):c=Bi(t,_),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Ai&&(_==="autoAlpha"&&(f===1&&Bi(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),mr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in zi,y){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=ri(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Yo(t,e.parseTransform),E=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new yn(this._pt,a,De,0,1,C.renderTransform,C,0,-1),x.dep=1),_==="scale")this._pt=new yn(this._pt,C,"scaleY",C.scaleY,(S?Vr(C.scaleY,S+u):u)-C.scaleY||0,Ph),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Bn,0,a[Bn]),h=sx(h),C.svg?Dh(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&mr(this,C,"zOrigin",C.zOrigin,m),mr(this,a,_,ja(c),ja(h)));continue}else if(_==="svgOrigin"){Dh(t,h,1,E,0,this);continue}else if(_ in Op){cx(this,C,_,f,S?Vr(f,S+h):h);continue}else if(_==="smoothOrigin"){mr(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){hx(this,h,t);continue}}else _ in a||(_=Fs(_)||_);if(y||(u||u===0)&&(f||f===0)&&!X_.test(h)&&_ in a)g=(c+"").substr((f+"").length),u||(u=0),m=sn(h)||(_ in Fn.units?Fn.units[_]:g),g!==m&&(f=gr(t,_,c,m)),this._pt=new yn(this._pt,y?C:a,_,f,(S?Vr(f,S+u):u)-f,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Z_:Ph),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Y_);else if(_ in a)rx.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Ya(_,h);continue}y||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}w&&Ch(this)},render:function(t,e){if(e.tween._time||!Nh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Bi,aliases:Ai,getSetter:function(t,e,n){var i=Ai[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==Bn&&(t._gsap.x||Bi(t,"x"))?n&&yp===n?e==="scale"?Q_:K_:(yp=n||{})&&(e==="scale"?j_:tx):t.style&&!qa(t.style[e])?$_:~e.indexOf("-")?J_:Ka(t,e)},core:{_removeProperty:Yr,_getMatrix:Fh}};hn.utils.checkPrefix=Fs;hn.core.getStyleSaver=Lp;(function(r,t,e,n){var i=vn(r+","+t+","+e,function(s){zi[s]=1});vn(t,function(s){Fn.units[s]="deg",Op[s]=1}),Ai[i[13]]=r+","+t,vn(n,function(s){var o=s.split(":");Ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fn.units[r]="px"});hn.registerPlugin(Bh);var ie=hn.registerPlugin(Bh)||hn,oT=ie.core.Tween;function zp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ux(r,t,e){return t&&zp(r.prototype,t),e&&zp(r,e),r}var on,nl,fx,qn,_r,xr,zs,Vp,Zr,$o,Hp,ki,mi,Gp,Wp=function(){return on||typeof window!="undefined"&&(on=window.gsap)&&on.registerPlugin&&on},Xp=1,Bs=[],re=[],gi=[],Jo=Date.now,zh=function(t,e){return e},dx=function(){var t=$o.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,gi),re=n,gi=i,zh=function(o,a){return e[o](a)}},Hi=function(t,e){return~gi.indexOf(t)&&gi[gi.indexOf(t)+1][e]},Ko=function(t){return!!~Hp.indexOf(t)},Sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},tl="scrollLeft",el="scrollTop",kh=function(){return ki&&ki.isPressed||re.cache++},il=function(t,e){var n=function i(s){if(s||s===0){Xp&&(qn.history.scrollRestoration="manual");var o=ki&&ki.isPressed;s=i.v=Math.round(s)||(ki&&ki.iOS?1:0),t(s),i.cacheID=re.cache,o&&zh("ss",s)}else(e||re.cache!==i.cacheID||zh("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},un={s:tl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:il(function(r){return arguments.length?qn.scrollTo(r,We.sc()):qn.pageXOffset||_r[tl]||xr[tl]||zs[tl]||0})},We={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:il(function(r){return arguments.length?qn.scrollTo(un.sc(),r):qn.pageYOffset||_r[el]||xr[el]||zs[el]||0})},bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||on.utils.toArray)(t)[0]||(typeof t=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},px=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Vi=function(t,e){var n=e.s,i=e.sc;Ko(t)&&(t=_r.scrollingElement||xr);var s=re.indexOf(t),o=i===We.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||Sn(t,"scroll",kh);var a=re[s+o],l=a||(re[s+o]=il(Hi(t,n),!0)||(Ko(t)?i:il(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=on.getProperty(t,"scrollBehavior")==="smooth"),l},rl=function(t,e,n){var i=t,s=t,o=Jo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=Jo();_||g-o>l?(s=i,i=p,a=o,o=g):n?i+=p:i=s+(p-s)/(g-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(p){var _=a,g=s,m=Jo();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:u,getVelocity:f}},Zo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},qp=function(){$o=on.core.globals().ScrollTrigger,$o&&$o.core&&dx()},Yp=function(t){return on=t||Wp(),!nl&&on&&typeof document!="undefined"&&document.body&&(qn=window,_r=document,xr=_r.documentElement,zs=_r.body,Hp=[qn,_r,xr,zs],fx=on.utils.clamp,Gp=on.core.context||function(){},Zr="onpointerenter"in zs?"pointer":"mouse",Vp=ze.isTouch=qn.matchMedia&&qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=ze.eventTypes=("ontouchstart"in xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xp=0},500),qp(),nl=1),nl};un.op=We;re.cache=0;var ze=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){nl||Yp(on)||console.warn("Please gsap.registerPlugin(Observer)"),$o||qp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,x=n.onRelease,C=n.onRight,E=n.onLeft,w=n.onUp,R=n.onDown,M=n.onChangeX,v=n.onChangeY,I=n.onChange,U=n.onToggleX,F=n.onToggleY,z=n.onHover,J=n.onHoverEnd,X=n.onMove,K=n.ignoreCheck,q=n.isNormalizer,et=n.onGestureStart,L=n.onGestureEnd,ct=n.onWheel,ut=n.onEnable,It=n.onDisable,D=n.onClick,V=n.scrollSpeed,H=n.capture,G=n.allowClicks,ht=n.lockAxis,at=n.onLockAxis;this.target=a=bn(a)||xr,this.vars=n,d&&(d=on.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,V=V||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qn.getComputedStyle(zs).lineHeight)||22);var lt,wt,j,Q,P,dt,st,O=this,ft=0,Nt=0,St=n.passive||!h&&n.passive!==!1,A=Vi(a,un),b=Vi(a,We),Y=A(),nt=b(),rt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&mi[0]==="pointerdown",it=Ko(a),xt=a.ownerDocument||_r,gt=[0,0,0],yt=[0,0,0],Ht=0,pt=function(){return Ht=Jo()},vt=function(Ft,te){return(O.event=Ft)&&d&&px(Ft.target,d)||te&&rt&&Ft.pointerType!=="touch"||K&&K(Ft,te)},Gt=function(){O._vx.reset(),O._vy.reset(),wt.pause(),u&&u(O)},Vt=function(){var Ft=O.deltaX=kp(gt),te=O.deltaY=kp(yt),At=Math.abs(Ft)>=i,$t=Math.abs(te)>=i;I&&(At||$t)&&I(O,Ft,te,gt,yt),At&&(C&&O.deltaX>0&&C(O),E&&O.deltaX<0&&E(O),M&&M(O),U&&O.deltaX<0!=ft<0&&U(O),ft=O.deltaX,gt[0]=gt[1]=gt[2]=0),$t&&(R&&O.deltaY>0&&R(O),w&&O.deltaY<0&&w(O),v&&v(O),F&&O.deltaY<0!=Nt<0&&F(O),Nt=O.deltaY,yt[0]=yt[1]=yt[2]=0),(Q||j)&&(X&&X(O),j&&(g&&j===1&&g(O),S&&S(O),j=0),Q=!1),dt&&!(dt=!1)&&at&&at(O),P&&(ct(O),P=!1),lt=0},Lt=function(Ft,te,At){gt[At]+=Ft,yt[At]+=te,O._vx.update(Ft),O._vy.update(te),c?lt||(lt=requestAnimationFrame(Vt)):Vt()},jt=function(Ft,te){ht&&!st&&(O.axis=st=Math.abs(Ft)>Math.abs(te)?"x":"y",dt=!0),st!=="y"&&(gt[2]+=Ft,O._vx.update(Ft,!0)),st!=="x"&&(yt[2]+=te,O._vy.update(te,!0)),c?lt||(lt=requestAnimationFrame(Vt)):Vt()},Xt=function(Ft){if(!vt(Ft,1)){Ft=Zo(Ft,h);var te=Ft.clientX,At=Ft.clientY,$t=te-O.x,Bt=At-O.y,Zt=O.isDragging;O.x=te,O.y=At,(Zt||($t||Bt)&&(Math.abs(O.startX-te)>=s||Math.abs(O.startY-At)>=s))&&(j=Zt?2:1,Zt||(O.isDragging=!0),jt($t,Bt))}},ce=O.onPress=function(Rt){vt(Rt,1)||Rt&&Rt.button||(O.axis=st=null,wt.pause(),O.isPressed=!0,Rt=Zo(Rt),ft=Nt=0,O.startX=O.x=Rt.clientX,O.startY=O.y=Rt.clientY,O._vx.reset(),O._vy.reset(),Sn(q?a:xt,mi[1],Xt,St,!0),O.deltaX=O.deltaY=0,y&&y(O))},N=O.onRelease=function(Rt){if(!vt(Rt,1)){Mn(q?a:xt,mi[1],Xt,!0);var Ft=!isNaN(O.y-O.startY),te=O.isDragging,At=te&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),$t=Zo(Rt);!At&&Ft&&(O._vx.reset(),O._vy.reset(),h&&G&&on.delayedCall(.08,function(){if(Jo()-Ht>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(xt.createEvent){var Bt=xt.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,qn,1,$t.screenX,$t.screenY,$t.clientX,$t.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Bt)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,u&&te&&!q&&wt.restart(!0),j&&Vt(),m&&te&&m(O),x&&x(O,At)}},bt=function(Ft){return Ft.touches&&Ft.touches.length>1&&(O.isGesturing=!0)&&et(Ft,O.isDragging)},tt=function(){return(O.isGesturing=!1)||L(O)},ot=function(Ft){if(!vt(Ft)){var te=A(),At=b();Lt((te-Y)*V,(At-nt)*V,1),Y=te,nt=At,u&&wt.restart(!0)}},Mt=function(Ft){if(!vt(Ft)){Ft=Zo(Ft,h),ct&&(P=!0);var te=(Ft.deltaMode===1?l:Ft.deltaMode===2?qn.innerHeight:1)*p;Lt(Ft.deltaX*te,Ft.deltaY*te,0),u&&!q&&wt.restart(!0)}},Tt=function(Ft){if(!vt(Ft)){var te=Ft.clientX,At=Ft.clientY,$t=te-O.x,Bt=At-O.y;O.x=te,O.y=At,Q=!0,u&&wt.restart(!0),($t||Bt)&&jt($t,Bt)}},qt=function(Ft){O.event=Ft,z(O)},ue=function(Ft){O.event=Ft,J(O)},Oe=function(Ft){return vt(Ft)||Zo(Ft,h)&&D(O)};wt=O._dc=on.delayedCall(f||.25,Gt).pause(),O.deltaX=O.deltaY=0,O._vx=rl(0,50,!0),O._vy=rl(0,50,!0),O.scrollX=A,O.scrollY=b,O.isDragging=O.isGesturing=O.isPressed=!1,Gp(this),O.enable=function(Rt){return O.isEnabled||(Sn(it?xt:a,"scroll",kh),o.indexOf("scroll")>=0&&Sn(it?xt:a,"scroll",ot,St,H),o.indexOf("wheel")>=0&&Sn(a,"wheel",Mt,St,H),(o.indexOf("touch")>=0&&Vp||o.indexOf("pointer")>=0)&&(Sn(a,mi[0],ce,St,H),Sn(xt,mi[2],N),Sn(xt,mi[3],N),G&&Sn(a,"click",pt,!0,!0),D&&Sn(a,"click",Oe),et&&Sn(xt,"gesturestart",bt),L&&Sn(xt,"gestureend",tt),z&&Sn(a,Zr+"enter",qt),J&&Sn(a,Zr+"leave",ue),X&&Sn(a,Zr+"move",Tt)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Q=j=!1,O._vx.reset(),O._vy.reset(),Y=A(),nt=b(),Rt&&Rt.type&&ce(Rt),ut&&ut(O)),O},O.disable=function(){O.isEnabled&&(Bs.filter(function(Rt){return Rt!==O&&Ko(Rt.target)}).length||Mn(it?xt:a,"scroll",kh),O.isPressed&&(O._vx.reset(),O._vy.reset(),Mn(q?a:xt,mi[1],Xt,!0)),Mn(it?xt:a,"scroll",ot,H),Mn(a,"wheel",Mt,H),Mn(a,mi[0],ce,H),Mn(xt,mi[2],N),Mn(xt,mi[3],N),Mn(a,"click",pt,!0),Mn(a,"click",Oe),Mn(xt,"gesturestart",bt),Mn(xt,"gestureend",tt),Mn(a,Zr+"enter",qt),Mn(a,Zr+"leave",ue),Mn(a,Zr+"move",Tt),O.isEnabled=O.isPressed=O.isDragging=!1,It&&It(O))},O.kill=O.revert=function(){O.disable();var Rt=Bs.indexOf(O);Rt>=0&&Bs.splice(Rt,1),ki===O&&(ki=0)},Bs.push(O),q&&Ko(a)&&(ki=O),O.enable(_)},ux(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ze.version="3.13.0";ze.create=function(r){return new ze(r)};ze.register=Yp;ze.getAll=function(){return Bs.slice()};ze.getById=function(r){return Bs.filter(function(t){return t.vars.id===r})[0]};Wp()&&on.registerPlugin(ze);var Ut,Hs,ae,Te,$n,xe,eu,yl,ha,ra,jo,sl,fn,wl,Zh,Tn,Zp,$p,Gs,um,Vh,fm,wn,$h,dm,pm,vr,Jh,nu,Ws,iu,Ml,Kh,Hh,ol=1,dn=Date.now,Gh=dn(),ai=0,ta=0,Jp=function(t,e,n){var i=Zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Kp=function(t,e){return e&&(!Zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},mx=function r(){return ta&&requestAnimationFrame(r)},Qp=function(){return wl=1},jp=function(){return wl=0},Ci=function(t){return t},ea=function(t){return Math.round(t*1e5)/1e5||0},mm=function(){return typeof window!="undefined"},gm=function(){return Ut||mm()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},ts=function(t){return!!~eu.indexOf(t)},_m=function(t){return(t==="Height"?iu:ae["inner"+t])||$n["client"+t]||xe["client"+t]},xm=function(t){return Hi(t,"getBoundingClientRect")||(ts(t)?function(){return vl.width=ae.innerWidth,vl.height=iu,vl}:function(){return Gi(t)})},gx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Hi(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?_m(s):t["client"+s])||0}},_x=function(t,e){return!e||~gi.indexOf(t)?xm(t):function(){return vl}},Ri=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Hi(t,n))?o()-xm(t)()[s]:ts(t)?($n[n]||xe[n])-_m(i):t[n]-t["offset"+i])},al=function(t,e){for(var n=0;n<Gs.length;n+=3)(!e||~e.indexOf(Gs[n+1]))&&t(Gs[n],Gs[n+1],Gs[n+2])},Zn=function(t){return typeof t=="string"},pn=function(t){return typeof t=="function"},na=function(t){return typeof t=="number"},$r=function(t){return typeof t=="object"},Qo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Wh=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ks=Math.abs,vm="left",ym="top",ru="right",su="bottom",Kr="width",Qr="height",sa="Right",oa="Left",aa="Top",la="Bottom",Xe="padding",si="margin",qs="Width",ou="Height",$e="px",oi=function(t){return ae.getComputedStyle(t)},xx=function(t){var e=oi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},tm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Gi=function(t,e){var n=e&&oi(t)[Zh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Mm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},vx=function(t){return function(e){return Ut.utils.snap(Mm(t),e)}},au=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},yx=function(t){return function(e,n){return au(Mm(t))(e,n.direction)}},ll=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},je=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},cl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},em={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},hl={toggleActions:"play",anticipatePin:0},bl={top:0,left:0,center:.5,bottom:1,right:1},ml=function(t,e){if(Zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in bl?bl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ul=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,p=Te.createElement("div"),_=ts(n)||Hi(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?xe:n,S=t.indexOf("start")!==-1,y=S?c:h,x="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===We?ru:su)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],gl(p,0,i,S),p},gl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+qs]=1,s["border"+a+qs]=0,s[n.p]=e+"px",Ut.set(t,s)},se=[],Qh={},ua,nm=function(){return dn()-ai>34&&(ua||(ua=requestAnimationFrame(Wi)))},Vs=function(){(!wn||!wn.isPressed||wn.startX>xe.clientWidth)&&(re.cache++,wn?ua||(ua=requestAnimationFrame(Wi)):Wi(),ai||ns("scrollStart"),ai=dn())},Xh=function(){pm=ae.innerWidth,dm=ae.innerHeight},ia=function(t){re.cache++,(t===!0||!fn&&!fm&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!$h||pm!==ae.innerWidth||Math.abs(ae.innerHeight-dm)>ae.innerHeight*.25))&&yl.restart(!0)},es={},Mx=[],Sm=function r(){return Qe(Wt,"scrollEnd",r)||Jr(!0)},ns=function(t){return es[t]&&es[t].map(function(e){return e()})||Mx},Yn=[],bm=function(t){for(var e=0;e<Yn.length;e+=5)(!t||Yn[e+4]&&Yn[e+4].query===t)&&(Yn[e].style.cssText=Yn[e+1],Yn[e].getBBox&&Yn[e].setAttribute("transform",Yn[e+2]||""),Yn[e+3].uncache=1)},lu=function(t,e){var n;for(Tn=0;Tn<se.length;Tn++)n=se[Tn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ml=!0,e&&bm(e),e||ns("revert")},wm=function(t,e){re.cache++,(e||!En)&&re.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Zn(t)&&(ae.history.scrollRestoration=nu=t)},En,jr=0,im,Sx=function(){if(im!==jr){var t=im=jr;requestAnimationFrame(function(){return t===jr&&Jr(!0)})}},Tm=function(){xe.appendChild(Ws),iu=!wn&&Ws.offsetHeight||ae.innerHeight,xe.removeChild(Ws)},rm=function(t){return ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Jr=function(t,e){if($n=Te.documentElement,xe=Te.body,eu=[ae,Te,$n,xe],ai&&!t&&!Ml){je(Wt,"scrollEnd",Sm);return}Tm(),En=Wt.isRefreshing=!0,re.forEach(function(i){return pn(i)&&++i.cacheID&&(i.rec=i())});var n=ns("refreshInit");um&&Wt.sort(),e||lu(),re.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),Ml=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Kh=1,rm(!0),se.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),rm(!1),Kh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wm(nu,1),yl.pause(),jr++,En=2,Wi(2),se.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Wt.isRefreshing=!1,ns("refresh")},jh=0,_l=1,ca,Wi=function(t){if(t===2||!En&&!Ml){Wt.isUpdating=!0,ca&&ca.update(0);var e=se.length,n=dn(),i=n-Gh>=50,s=e&&se[0].scroll();if(_l=jh>s?-1:1,En||(jh=s),i&&(ai&&!wl&&n-ai>200&&(ai=0,ns("scrollEnd")),jo=Gh,Gh=n),_l<0){for(Tn=e;Tn-- >0;)se[Tn]&&se[Tn].update(0,i);_l=1}else for(Tn=0;Tn<e;Tn++)se[Tn]&&se[Tn].update(0,i);Wt.isUpdating=!1}ua=0},tu=[vm,ym,su,ru,si+la,si+sa,si+aa,si+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xl=tu.concat([Kr,Qr,"boxSizing","max"+qs,"max"+ou,"position",si,Xe,Xe+aa,Xe+sa,Xe+la,Xe+oa]),bx=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},qh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=tu.length,o=e.style,a=t.style,l;s--;)l=tu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[su]=a[ru]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Kr]=Sl(t,un)+$e,o[Qr]=Sl(t,We)+$e,o[Xe]=a[si]=a[ym]=a[vm]="0",Xs(i),a[Kr]=a["max"+qs]=n[Kr],a[Qr]=a["max"+ou]=n[Qr],a[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},wx=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(wx,"-$1").toLowerCase())}},fl=function(t){for(var e=xl.length,n=t.style,i=[],s=0;s<e;s++)i.push(xl[s],n[xl[s]]);return i.t=t,i},Tx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},vl={left:0,top:0},sm=function(t,e,n,i,s,o,a,l,c,h,u,f,d,p){pn(t)&&(t=t(l)),Zn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?ml("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,S;if(d&&d.seek(0),isNaN(t)||(t=+t),na(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&gl(a,n,i,!0);else{pn(e)&&(e=e(l));var y=(t||"0").split(" "),x,C,E,w;S=bn(e,l)||xe,x=Gi(S)||{},(!x||!x.left&&!x.top)&&oi(S).display==="none"&&(w=S.style.display,S.style.display="block",x=Gi(S),w?S.style.display=w:S.style.removeProperty("display")),C=ml(y[0],x[i.d]),E=ml(y[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-E,a&&gl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var R=t+n,M=o._isStart;g="scroll"+i.d2,gl(o,R,i,M&&R>20||!M&&(u?Math.max(xe[g],$n[g]):o.parentNode[g])<=R+1),u&&(c=Gi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$e))}return d&&S&&(g=Gi(S),d.seek(f),m=Gi(S),d._caScrollDist=g[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},Ex=/(webkit|moz|length|cssText|inset)/i,om=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=oi(t);for(o in a)!+o&&!Ex.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},Em=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},dl=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},am=function(t,e){var n=Vi(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=Em(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Wi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},je(t,"wheel",n.wheelHandler),Wt.isTouch&&je(t,"touchmove",n.wheelHandler),s},Wt=(function(){function r(e,n){Hs||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ta){this.update=this.refresh=this.kill=Ci;return}n=tm(Zn(n)||na(n)||n.nodeType?{trigger:n}:n,hl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,y=s.once,x=s.snap,C=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:We,I=!u&&u!==0,U=bn(n.scroller||ae),F=Ut.core.getCache(U),z=ts(U),J=("pinType"in n?n.pinType:Hi(U,"pinType")||z&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=I&&n.toggleActions.split(" "),q="markers"in n?n.markers:hl.markers,et=z?0:parseFloat(oi(U)["border"+v.p2+qs])||0,L=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ut=gx(U,z,v),It=_x(U,z),D=0,V=0,H=0,G=Vi(U,v),ht,at,lt,wt,j,Q,P,dt,st,O,ft,Nt,St,A,b,Y,nt,rt,it,xt,gt,yt,Ht,pt,vt,Gt,Vt,Lt,jt,Xt,ce,N,bt,tt,ot,Mt,Tt,qt,ue;if(L._startClamp=L._endClamp=!1,L._dir=v,g*=45,L.scroller=U,L.scroll=w?w.time.bind(w):G,wt=G(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(um=1,n.refreshPriority===-9999&&(ca=L)),F.tweenScroll=F.tweenScroll||{top:am(U,We),left:am(U,un)},L.tweenTo=ht=F.tweenScroll[v.p],L.scrubDuration=function(At){bt=na(At)&&At,bt?N?N.duration(At):N=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:bt,paused:!0,onComplete:function(){return m&&m(L)}}):(N&&N.progress(1).kill(),N=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(u),Xt=0,l||(l=i.vars.id)),x&&((!$r(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xe.style&&Ut.set(z?[xe,$n]:U,{scrollBehavior:"auto"}),re.forEach(function(At){return pn(At)&&At.target===(z?Te.scrollingElement||$n:U)&&(At.smooth=!1)}),lt=pn(x.snapTo)?x.snapTo:x.snapTo==="labels"?vx(i):x.snapTo==="labelsDirectional"?yx(i):x.directional!==!1?function(At,$t){return au(x.snapTo)(At,dn()-V<500?0:$t.direction)}:Ut.utils.snap(x.snapTo),tt=x.duration||{min:.1,max:2},tt=$r(tt)?ra(tt.min,tt.max):ra(tt,tt),ot=Ut.delayedCall(x.delay||bt/2||.1,function(){var At=G(),$t=dn()-V<500,Bt=ht.tween;if(($t||Math.abs(L.getVelocity())<10)&&!Bt&&!wl&&D!==At){var Zt=(At-Q)/A,Ve=i&&!I?i.totalProgress():Zt,oe=$t?0:(Ve-ce)/(dn()-jo)*1e3||0,we=Ut.utils.clamp(-Zt,1-Zt,ks(oe/2)*oe/.185),Ye=Zt+(x.inertia===!1?0:we),ye,Me,pe=x,Vn=pe.onStart,Ee=pe.onInterrupt,xn=pe.onComplete;if(ye=lt(Ye,L),na(ye)||(ye=Ye),Me=Math.max(0,Math.round(Q+ye*A)),At<=P&&At>=Q&&Me!==At){if(Bt&&!Bt._initted&&Bt.data<=ks(Me-At))return;x.inertia===!1&&(we=ye-Zt),ht(Me,{duration:tt(ks(Math.max(ks(Ye-Ve),ks(ye-Ve))*.185/oe/.05||0)),ease:x.ease||"power3",data:ks(Me-At),onInterrupt:function(){return ot.restart(!0)&&Ee&&Ee(L)},onComplete:function(){L.update(),D=G(),i&&!I&&(N?N.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),Xt=ce=i&&!I?i.totalProgress():L.progress,S&&S(L),xn&&xn(L)}},At,we*A,Me-At-we*A),Vn&&Vn(L,ht.tween)}}else L.isActive&&D!==At&&ot.restart(!0)}).pause()),l&&(Qh[l]=L),f=L.trigger=bn(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(L)),d=d===!0?f:bn(d),Zn(a)&&(a={targets:f,className:a}),d&&(p===!1||p===si||(p=!p&&d.parentNode&&d.parentNode.style&&oi(d.parentNode).display==="flex"?!1:Xe),L.pin=d,at=Ut.core.getCache(d),at.spacer?b=at.pinState:(E&&(E=bn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),at.spacerIsNative=!!E,E&&(at.spacerState=fl(E))),at.spacer=rt=E||Te.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),at.pinState=b=fl(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),L.spacer=rt=at.spacer,jt=oi(d),pt=jt[p+v.os2],xt=Ut.getProperty(d),gt=Ut.quickSetter(d,v.a,$e),qh(d,rt,jt),nt=fl(d)),q){Nt=$r(q)?tm(q,em):em,O=ul("scroller-start",l,U,v,Nt,0),ft=ul("scroller-end",l,U,v,Nt,0,O),it=O["offset"+v.op.d2];var Oe=bn(Hi(U,"content")||U);dt=this.markerStart=ul("start",l,Oe,v,Nt,it,0,w),st=this.markerEnd=ul("end",l,Oe,v,Nt,it,0,w),w&&(qt=Ut.quickSetter([dt,st],v.a,$e)),!J&&!(gi.length&&Hi(U,"fixedMarkers")===!0)&&(xx(z?xe:U),Ut.set([O,ft],{force3D:!0}),Gt=Ut.quickSetter(O,v.a,$e),Lt=Ut.quickSetter(ft,v.a,$e))}if(w){var Rt=w.vars.onUpdate,Ft=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),Rt&&Rt.apply(w,Ft||[])})}if(L.previous=function(){return se[se.indexOf(L)-1]},L.next=function(){return se[se.indexOf(L)+1]},L.revert=function(At,$t){if(!$t)return L.kill(!0);var Bt=At!==!1||!L.enabled,Zt=fn;Bt!==L.isReverted&&(Bt&&(Mt=Math.max(G(),L.scroll.rec||0),H=L.progress,Tt=i&&i.progress()),dt&&[dt,st,O,ft].forEach(function(Ve){return Ve.style.display=Bt?"none":"block"}),Bt&&(fn=L,L.update(Bt)),d&&(!C||!L.isActive)&&(Bt?bx(d,rt,b):qh(d,rt,oi(d),vt)),Bt||L.update(Bt),fn=Zt,L.isReverted=Bt)},L.refresh=function(At,$t,Bt,Zt){if(!((fn||!L.enabled)&&!$t)){if(d&&At&&ai){je(r,"scrollEnd",Sm);return}!En&&ct&&ct(L),fn=L,ht.tween&&!Bt&&(ht.tween.kill(),ht.tween=0),N&&N.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ve=ut(),oe=It(),we=w?w.duration():Ri(U,v),Ye=A<=.01||!A,ye=0,Me=Zt||0,pe=$r(Bt)?Bt.end:n.end,Vn=n.endTrigger||f,Ee=$r(Bt)?Bt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),xn=L.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,L),T=f&&Math.max(0,se.indexOf(L))||0,B=T,Z,$,W,mt,_t,Et,Dt,Yt,Jt,Ot,Kt,fe,me;for(q&&$r(Bt)&&(fe=Ut.getProperty(O,v.p),me=Ut.getProperty(ft,v.p));B-- >0;)Et=se[B],Et.end||Et.refresh(0,1)||(fn=L),Dt=Et.pin,Dt&&(Dt===f||Dt===d||Dt===xn)&&!Et.isReverted&&(Ot||(Ot=[]),Ot.unshift(Et),Et.revert(!0,!0)),Et!==se[B]&&(T--,B--);for(pn(Ee)&&(Ee=Ee(L)),Ee=Jp(Ee,"start",L),Q=sm(Ee,f,Ve,v,G(),dt,O,L,oe,et,J,we,w,L._startClamp&&"_startClamp")||(d?-.001:0),pn(pe)&&(pe=pe(L)),Zn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Zn(Ee)?Ee.split(" ")[0]:"")+pe:(ye=ml(pe.substr(2),Ve),pe=Zn(Ee)?Ee:(w?Ut.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Q):Q)+ye,Vn=f)),pe=Jp(pe,"end",L),P=Math.max(Q,sm(pe||(Vn?"100% 0":we),Vn,Ve,v,G()+ye,st,ft,L,oe,et,J,we,w,L._endClamp&&"_endClamp"))||-.001,ye=0,B=T;B--;)Et=se[B],Dt=Et.pin,Dt&&Et.start-Et._pinPush<=Q&&!w&&Et.end>0&&(Z=Et.end-(L._startClamp?Math.max(0,Et.start):Et.start),(Dt===f&&Et.start-Et._pinPush<Q||Dt===xn)&&isNaN(Ee)&&(ye+=Z*(1-Et.progress)),Dt===d&&(Me+=Z));if(Q+=ye,P+=ye,L._startClamp&&(L._startClamp+=ye),L._endClamp&&!En&&(L._endClamp=P||-.001,P=Math.min(P,Ri(U,v))),A=P-Q||(Q-=.01)&&.001,Ye&&(H=Ut.utils.clamp(0,1,Ut.utils.normalize(Q,P,Mt))),L._pinPush=Me,dt&&ye&&(Z={},Z[v.a]="+="+ye,xn&&(Z[v.p]="-="+G()),Ut.set([dt,st],Z)),d&&!(Kh&&L.end>=Ri(U,v)))Z=oi(d),mt=v===We,W=G(),yt=parseFloat(xt(v.a))+Me,!we&&P>1&&(Kt=(z?Te.scrollingElement||$n:U).style,Kt={style:Kt,value:Kt["overflow"+v.a.toUpperCase()]},z&&oi(xe)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Kt.style["overflow"+v.a.toUpperCase()]="scroll")),qh(d,rt,Z),nt=fl(d),$=Gi(d,!0),Yt=J&&Vi(U,mt?un:We)(),p?(vt=[p+v.os2,A+Me+$e],vt.t=rt,B=p===Xe?Sl(d,v)+A+Me:0,B&&(vt.push(v.d,B+$e),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=B+$e)),Xs(vt),xn&&se.forEach(function(Ie){Ie.pin===xn&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),J&&G(Mt)):(B=Sl(d,v),B&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=B+$e)),J&&(_t={top:$.top+(mt?W-Q:Yt)+$e,left:$.left+(mt?Yt:W-Q)+$e,boxSizing:"border-box",position:"fixed"},_t[Kr]=_t["max"+qs]=Math.ceil($.width)+$e,_t[Qr]=_t["max"+ou]=Math.ceil($.height)+$e,_t[si]=_t[si+aa]=_t[si+sa]=_t[si+la]=_t[si+oa]="0",_t[Xe]=Z[Xe],_t[Xe+aa]=Z[Xe+aa],_t[Xe+sa]=Z[Xe+sa],_t[Xe+la]=Z[Xe+la],_t[Xe+oa]=Z[Xe+oa],Y=Tx(b,_t,C),En&&G(0)),i?(Jt=i._initted,Vh(1),i.render(i.duration(),!0,!0),Ht=xt(v.a)-yt+A+Me,Vt=Math.abs(A-Ht)>1,J&&Vt&&Y.splice(Y.length-2,2),i.render(0,!0,!0),Jt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vh(0)):Ht=A,Kt&&(Kt.value?Kt.style["overflow"+v.a.toUpperCase()]=Kt.value:Kt.style.removeProperty("overflow-"+v.a));else if(f&&G()&&!w)for($=f.parentNode;$&&$!==xe;)$._pinOffset&&(Q-=$._pinOffset,P-=$._pinOffset),$=$.parentNode;Ot&&Ot.forEach(function(Ie){return Ie.revert(!1,!0)}),L.start=Q,L.end=P,wt=j=En?Mt:G(),!w&&!En&&(wt<Mt&&G(Mt),L.scroll.rec=0),L.revert(!1,!0),V=dn(),ot&&(D=-1,ot.restart(!0)),fn=0,i&&I&&(i._initted||Tt)&&i.progress()!==Tt&&i.progress(Tt||0,!0).render(i.time(),!0,!0),(Ye||H!==L.progress||w||_||i&&!i._initted)&&(i&&!I&&(i._initted||H||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Q<-.001&&!H?Ut.utils.normalize(Q,P,0):H,!0),L.progress=Ye||(wt-Q)/A===H?0:H),d&&p&&(rt._pinOffset=Math.round(L.progress*Ht)),N&&N.invalidate(),isNaN(fe)||(fe-=Ut.getProperty(O,v.p),me-=Ut.getProperty(ft,v.p),dl(O,v,fe),dl(dt,v,fe-(Zt||0)),dl(ft,v,me),dl(st,v,me-(Zt||0))),Ye&&!En&&L.update(),h&&!En&&!St&&(St=!0,h(L),St=!1)}},L.getVelocity=function(){return(G()-j)/(dn()-jo)*1e3||0},L.endAnimation=function(){Qo(L.callbackAnimation),i&&(N?N.progress(1):i.paused()?I||Qo(i,L.direction<0,1):Qo(i,i.reversed()))},L.labelToScroll=function(At){return i&&i.labels&&(Q||L.refresh()||Q)+i.labels[At]/i.duration()*A||0},L.getTrailing=function(At){var $t=se.indexOf(L),Bt=L.direction>0?se.slice(0,$t).reverse():se.slice($t+1);return(Zn(At)?Bt.filter(function(Zt){return Zt.vars.preventOverlaps===At}):Bt).filter(function(Zt){return L.direction>0?Zt.end<=Q:Zt.start>=P})},L.update=function(At,$t,Bt){if(!(w&&!Bt&&!At)){var Zt=En===!0?Mt:L.scroll(),Ve=At?0:(Zt-Q)/A,oe=Ve<0?0:Ve>1?1:Ve||0,we=L.progress,Ye,ye,Me,pe,Vn,Ee,xn,T;if($t&&(j=wt,wt=w?G():Zt,x&&(ce=Xt,Xt=i&&!I?i.totalProgress():oe)),g&&d&&!fn&&!ol&&ai&&(!oe&&Q<Zt+(Zt-j)/(dn()-jo)*g?oe=1e-4:oe===1&&P>Zt+(Zt-j)/(dn()-jo)*g&&(oe=.9999)),oe!==we&&L.enabled){if(Ye=L.isActive=!!oe&&oe<1,ye=!!we&&we<1,Ee=Ye!==ye,Vn=Ee||!!oe!=!!we,L.direction=oe>we?1:-1,L.progress=oe,Vn&&!fn&&(Me=oe&&!we?0:oe===1?1:we===1?2:3,I&&(pe=!Ee&&K[Me+1]!=="none"&&K[Me+1]||K[Me],T=i&&(pe==="complete"||pe==="reset"||pe in i))),M&&(Ee||T)&&(T||u||!i)&&(pn(M)?M(L):L.getTrailing(M).forEach(function(W){return W.endAnimation()})),I||(N&&!fn&&!ol?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",oe,i._tTime/i._tDur):(N.vars.totalProgress=oe,N.invalidate().restart())):i&&i.totalProgress(oe,!!(fn&&(V||At)))),d){if(At&&p&&(rt.style[p+v.os2]=pt),!J)gt(ea(yt+Ht*oe));else if(Vn){if(xn=!At&&oe>we&&P+1>Zt&&Zt+1>=Ri(U,v),C)if(!At&&(Ye||xn)){var B=Gi(d,!0),Z=Zt-Q;om(d,xe,B.top+(v===We?Z:0)+$e,B.left+(v===We?0:Z)+$e)}else om(d,rt);Xs(Ye||xn?Y:nt),Vt&&oe<1&&Ye||gt(yt+(oe===1&&!xn?Ht:0))}}x&&!ht.tween&&!fn&&!ol&&ot.restart(!0),a&&(Ee||y&&oe&&(oe<1||!Hh))&&ha(a.targets).forEach(function(W){return W.classList[Ye||y?"add":"remove"](a.className)}),o&&!I&&!At&&o(L),Vn&&!fn?(I&&(T&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(L)),(Ee||!Hh)&&(c&&Ee&&Wh(L,c),X[Me]&&Wh(L,X[Me]),y&&(oe===1?L.kill(!1,1):X[Me]=0),Ee||(Me=oe===1?1:3,X[Me]&&Wh(L,X[Me]))),R&&!Ye&&Math.abs(L.getVelocity())>(na(R)?R:2500)&&(Qo(L.callbackAnimation),N?N.progress(1):Qo(i,pe==="reverse"?1:!oe,1))):I&&o&&!fn&&o(L)}if(Lt){var $=w?Zt/w.duration()*(w._caScrollDist||0):Zt;Gt($+(O._isFlipped?1:0)),Lt($)}qt&&qt(-Zt/w.duration()*(w._caScrollDist||0))}},L.enable=function(At,$t){L.enabled||(L.enabled=!0,je(U,"resize",ia),z||je(U,"scroll",Vs),ct&&je(r,"refreshInit",ct),At!==!1&&(L.progress=H=0,wt=j=D=G()),$t!==!1&&L.refresh())},L.getTween=function(At){return At&&ht?ht.tween:N},L.setPositions=function(At,$t,Bt,Zt){if(w){var Ve=w.scrollTrigger,oe=w.duration(),we=Ve.end-Ve.start;At=Ve.start+we*At/oe,$t=Ve.start+we*$t/oe}L.refresh(!1,!1,{start:Kp(At,Bt&&!!L._startClamp),end:Kp($t,Bt&&!!L._endClamp)},Zt),L.update()},L.adjustPinSpacing=function(At){if(vt&&At){var $t=vt.indexOf(v.d)+1;vt[$t]=parseFloat(vt[$t])+At+$e,vt[1]=parseFloat(vt[1])+At+$e,Xs(vt)}},L.disable=function(At,$t){if(L.enabled&&(At!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,$t||N&&N.pause(),Mt=0,at&&(at.uncache=1),ct&&Qe(r,"refreshInit",ct),ot&&(ot.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!z)){for(var Bt=se.length;Bt--;)if(se[Bt].scroller===U&&se[Bt]!==L)return;Qe(U,"resize",ia),z||Qe(U,"scroll",Vs)}},L.kill=function(At,$t){L.disable(At,$t),N&&!$t&&N.kill(),l&&delete Qh[l];var Bt=se.indexOf(L);Bt>=0&&se.splice(Bt,1),Bt===Tn&&_l>0&&Tn--,Bt=0,se.forEach(function(Zt){return Zt.scroller===L.scroller&&(Bt=1)}),Bt||En||(L.scroll.rec=0),i&&(i.scrollTrigger=null,At&&i.revert({kill:!1}),$t||i.kill()),dt&&[dt,st,O,ft].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),ca===L&&(ca=0),d&&(at&&(at.uncache=1),Bt=0,se.forEach(function(Zt){return Zt.pin===d&&Bt++}),Bt||(at.spacer=0)),n.onKill&&n.onKill(L)},se.push(L),L.enable(!1,!1),ue&&ue(L),i&&i.add&&!A){var te=L.update;L.update=function(){L.update=te,re.cache++,Q||P||L.refresh()},Ut.delayedCall(.01,L.update),A=.01,Q=P=0}else L.refresh();d&&Sx()},r.register=function(n){return Hs||(Ut=n||gm(),mm()&&window.document&&r.enable(),Hs=ta),Hs},r.defaults=function(n){if(n)for(var i in n)hl[i]=n[i];return hl},r.disable=function(n,i){ta=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),Qe(ae,"wheel",Vs),Qe(Te,"scroll",Vs),clearInterval(sl),Qe(Te,"touchcancel",Ci),Qe(xe,"touchstart",Ci),ll(Qe,Te,"pointerdown,touchstart,mousedown",Qp),ll(Qe,Te,"pointerup,touchend,mouseup",jp),yl.kill(),al(Qe);for(var s=0;s<re.length;s+=3)cl(Qe,re[s],re[s+1]),cl(Qe,re[s],re[s+2])},r.enable=function(){if(ae=window,Te=document,$n=Te.documentElement,xe=Te.body,Ut&&(ha=Ut.utils.toArray,ra=Ut.utils.clamp,Jh=Ut.core.context||Ci,Vh=Ut.core.suppressOverwrites||Ci,nu=ae.history.scrollRestoration||"auto",jh=ae.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),xe)){ta=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",Tm(),mx(),ze.register(Ut),r.isTouch=ze.isTouch,vr=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$h=ze.isTouch===1,je(ae,"wheel",Vs),eu=[ae,Te,$n,xe],Ut.matchMedia?(r.matchMedia=function(c){var h=Ut.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ut.addEventListener("matchMediaInit",function(){return lu()}),Ut.addEventListener("matchMediaRevert",function(){return bm()}),Ut.addEventListener("matchMedia",function(){Jr(0,1),ns("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return Xh(),Xh})):console.warn("Requires GSAP 3.11.0 or later"),Xh(),je(Te,"scroll",Vs);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Gi(xe),We.m=Math.round(a.top+We.sc())||0,un.m=Math.round(a.left+un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),sl=setInterval(nm,250),Ut.delayedCall(.5,function(){return ol=0}),je(Te,"touchcancel",Ci),je(xe,"touchstart",Ci),ll(je,Te,"pointerdown,touchstart,mousedown",Qp),ll(je,Te,"pointerup,touchend,mouseup",jp),Zh=Ut.utils.checkPrefix("transform"),xl.push(Zh),Hs=dn(),yl=Ut.delayedCall(.2,Jr).pause(),Gs=[Te,"visibilitychange",function(){var c=ae.innerWidth,h=ae.innerHeight;Te.hidden?(Zp=c,$p=h):(Zp!==c||$p!==h)&&ia()},Te,"DOMContentLoaded",Jr,ae,"load",Jr,ae,"resize",ia],al(je),se.forEach(function(c){return c.enable(0,1)}),l=0;l<re.length;l+=3)cl(Qe,re[l],re[l+1]),cl(Qe,re[l],re[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Hh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(sl)||(sl=i)&&setInterval(nm,i),"ignoreMobileResize"in n&&($h=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(al(Qe)||al(je,n.autoRefreshEvents||"none"),fm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=bn(n),o=re.indexOf(s),a=ts(s);~o&&re.splice(o,a?6:2),i&&(a?gi.unshift(ae,i,xe,i,$n,i):gi.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?bn(n):n).getBoundingClientRect(),a=o[s?Kr:Qr]*i||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=bn(n));var o=n.getBoundingClientRect(),a=o[s?Kr:Qr],l=i==null?a/2:i in bl?bl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=es.killAll||[];es={},i.forEach(function(s){return s()})}},r})();Wt.version="3.13.0";Wt.saveStyles=function(r){return r?ha(r).forEach(function(t){if(t&&t.style){var e=Yn.indexOf(t);e>=0&&Yn.splice(e,5),Yn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),Jh())}}):Yn};Wt.revert=function(r,t){return lu(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?ia(!0):(Hs||Wt.register())&&Jr(!0)};Wt.update=function(r){return++re.cache&&Wi(r===!0?2:0)};Wt.clearScrollMemory=wm;Wt.maxScroll=function(r,t){return Ri(r,t?un:We)};Wt.getScrollFunc=function(r,t){return Vi(bn(r),t?un:We)};Wt.getById=function(r){return Qh[r]};Wt.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!ai};Wt.snapDirectional=au;Wt.addEventListener=function(r,t){var e=es[r]||(es[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=es[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Ut.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(p){u.length||d.restart(!0),u.push(p.trigger),f.push(p),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&pn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return pn(s)&&(s=s(),je(Wt,"refresh",function(){return s=t.batchMax()})),ha(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Wt.create(c))}),e};var lm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Yh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===$n&&r(xe,e)},pl={auto:1,scroll:1},Ax=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pl[(l=oi(s)).overflowY]||pl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ts(s)&&(pl[(l=oi(s)).overflowY]||pl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Am=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Ax,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&je(Te,ze.eventTypes[0],hm,!1,!0)},onDisable:function(){return Qe(Te,ze.eventTypes[0],hm,!0)}})},Cx=/(input|label|select|textarea)/i,cm,hm=function(t){var e=Cx.test(t.target.tagName);(e||cm)&&(t._gsapAllow=!0,cm=e)},Rx=function(t){$r(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=bn(t.target)||$n,h=Ut.core.globals().ScrollSmoother,u=h&&h.get(),f=vr&&(t.content&&bn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=Vi(c,We),p=Vi(c,un),_=1,g=(ze.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,m=0,S=pn(i)?function(){return i(a)}:function(){return i||2.8},y,x,C=Am(c,t.type,!0,s),E=function(){return x=!1},w=Ci,R=Ci,M=function(){l=Ri(c,We),R=ra(vr?1:0,l),n&&(w=ra(0,Ri(c,un))),y=jr},v=function(){f._gsap.y=ea(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(E);var q=ea(a.deltaY/2),et=R(d.v-q);if(f&&et!==d.v+d.offset){d.offset=et-d.v;var L=ea((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=re.cache,Wi()}return!0}d.offset&&v(),x=!0},U,F,z,J,X=function(){M(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(K){return vr&&K.type==="touchmove"&&I(K)||_>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},t.onPress=function(){x=!1;var K=_;_=ea((ae.visualViewport&&ae.visualViewport.scale||1)/g),U.pause(),K!==_&&Yh(c,_>1.01?!0:n?!1:"x"),F=p(),z=d(),M(),y=jr},t.onRelease=t.onGestureStart=function(K,q){if(d.offset&&v(),!q)J.restart(!0);else{re.cache++;var et=S(),L,ct;n&&(L=p(),ct=L+et*.05*-K.velocityX/.227,et*=lm(p,L,ct,Ri(c,un)),U.vars.scrollX=w(ct)),L=d(),ct=L+et*.05*-K.velocityY/.227,et*=lm(d,L,ct,Ri(c,We)),U.vars.scrollY=R(ct),U.invalidate().duration(et).play(.01),(vr&&U.vars.scrollY>=l||L>=l-1)&&Ut.to({},{onUpdate:X,duration:et})}o&&o(K)},t.onWheel=function(){U._ts&&U.pause(),dn()-m>1e3&&(y=0,m=dn())},t.onChange=function(K,q,et,L,ct){if(jr!==y&&M(),q&&n&&p(w(L[2]===q?F+(K.startX-K.x):p()+q-L[1])),et){d.offset&&v();var ut=ct[2]===et,It=ut?z+K.startY-K.y:d()+et-ct[1],D=R(It);ut&&It!==D&&(z+=D-It),d(D)}(et||q)&&Wi()},t.onEnable=function(){Yh(c,n?!1:"x"),Wt.addEventListener("refresh",X),je(ae,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),C.enable()},t.onDisable=function(){Yh(c,!0),Qe(ae,"resize",X),Wt.removeEventListener("refresh",X),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=vr,vr&&!d()&&d(1),vr&&Ut.ticker.add(Ci),J=a._dc,U=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Em(d,d(),function(){return U.pause()})},onUpdate:Wi,onComplete:J.vars.onComplete}),a};Wt.sort=function(r){if(pn(r))return se.sort(r);var t=ae.pageYOffset||0;return Wt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),se.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new ze(r)};Wt.normalizeScroll=function(r){if(typeof r=="undefined")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var t=r instanceof ze?r:Rx(r);return wn&&wn.target===t.target&&wn.kill(),ts(t.target)&&(wn=t),t};Wt.core={_getVelocityProp:rl,_inputObserver:Am,_scrollers:re,_proxies:gi,bridge:{ss:function(){ai||ns("scrollStart"),ai=dn()},ref:function(){return fn}}};gm()&&Ut.registerPlugin(Wt);var Cm="1.3.23";function Im(r,t,e){return Math.max(r,Math.min(t,e))}function Px(r,t,e){return(1-e)*r+e*t}function Ix(r,t,e,n){return Px(r,t,1-Math.exp(-e*n))}function Lx(r,t){return(r%t+t)%t}var Dx=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=Im(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Ix(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Ux(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Nx=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Ux(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Lm=class{constructor(){zt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Ox=100/6,yr={passive:!1};function Rm(r,t){return r===1?Ox:r===2?t:1}var Fx=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new Lm);zt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});zt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});zt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});zt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Rm(n,this.window.width),s=Rm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yr),this.element.addEventListener("touchstart",this.onTouchStart,yr),this.element.addEventListener("touchmove",this.onTouchMove,yr),this.element.addEventListener("touchend",this.onTouchEnd,yr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,yr),this.element.removeEventListener("touchstart",this.onTouchStart,yr),this.element.removeEventListener("touchmove",this.onTouchMove,yr),this.element.removeEventListener("touchend",this.onTouchEnd,yr)}},Pm=r=>Math.min(1,1.001-2**(-10*r)),Dm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:S=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:R=w,stopInertiaOnNavigate:M=!1}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"isTouching");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new Dx);zt(this,"emitter",new Lm);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",r=>{r.button===1&&this.reset()});zt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,g,m,S,y;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-horizontal"))||i&&((S=p.hasAttribute)==null?void 0:S.call(p,"data-lenis-prevent-touch"))||s&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Cm,window.lenis||(window.lenis={}),window.lenis.version=Cm,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Pm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:S,autoRaf:y,anchors:x,autoToggle:C,allowNestedScroll:E,naiveDimensions:R,stopInertiaOnNavigate:M},this.dimensions=new Nx(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Fx(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(p=f),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),S=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(y)?0:y)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=Im(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Pm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var E;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,u,f,d,p;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=u>d,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,S,y,x,C;if(_==="horizontal")g=Math.round(r.scrollLeft),m=u-d,S=t,y=s,x=a,C=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=f-p,S=e,y=o,x=l,C=h;else return!1;return!C&&(g>=m||g<=0)?!0:(S>0?g<m:g>0)&&y&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?Lx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Um=1600,Nm=900,cu=4.97,mn=4.63,tn=4.37,Xi={x:858,y:200},is={x:805,y:500},qi={io:r=>r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2,out2:r=>1-(1-r)*(1-r),out3:r=>1-Math.pow(1-r,3),in2:r=>r*r};function _i(r,t,e=qi.io){if(t<=r[0][0])return r[0][1];for(let n=1;n<r.length;n++){let[i,s]=r[n];if(t<=i){let[o,a]=r[n-1],l=i===o?1:e((t-o)/(i-o));return Array.isArray(a)?a.map((c,h)=>c+(s[h]-c)*l):a+(s-a)*l}}return r[r.length-1][1]}var Bx=[[0,1.62],[.08,1.62],[2.4,1],[tn-.001,1],[tn,1.09],[mn,1.15]],zx=[[1.03,[1374,505,58]],[1.23,[1378,489,58]],[1.43,[1383,435,59]],[1.63,[1387,378,60]],[1.83,[1388,342,61]],[2.03,[1393,318,62]],[2.33,[1396,310,62]],[2.53,[1427,309,70]],[2.63,[1422,362,98]],[2.73,[1410,380,102]],[3.03,[1399,392,105]],[3.23,[1393,393,113]],[3.33,[1364,396,118]],[3.43,[1323,394,124]],[3.53,[1200,394,118]],[3.63,[1152,393,113]],[3.83,[1122,392,103]],[3.93,[1114,390,90]],[4.23,[1114,390,90]],[tn-.001,[1126,396,88]],[tn,[1236,444,72]],[4.43,[1243,446,70]],[4.53,[1259,451,69]],[mn,[1276,452,68]]],kx=[[1.9,[266,475,30]],[2.03,[272,385,46]],[2.13,[278,334,52]],[2.33,[280,309,56]],[2.53,[270,317,58]],[2.63,[220,367,66]],[2.73,[165,425,90]],[3.03,[141,452,99]],[3.23,[141,452,99]],[3.33,[155,435,74]],[3.43,[161,425,66]],[3.53,[166,417,59]],[4.03,[170,414,57]],[4.13,[186,419,52]],[4.23,[240,437,46]],[tn-.001,[259,443,41]],[tn,[270,447,40]],[4.53,[276,450,40]],[mn,[276,450,40]]],Om=[[0,[165,13]],[.35,[165,13]],[.43,[161,13]],[.63,[151,12.8]],[.83,[141,12.5]],[1.43,[140.5,13.3]],[1.83,[148.5,13.4]],[2.13,[151.5,13.4]],[2.43,[151.5,13.4]],[3.03,[148,23.9]],[3.43,[143,24]],[3.83,[131,20]],[4.23,[135.5,16.6]],[tn-.001,[137,16]],[tn,[150,8.5]],[4.43,[151.5,8]],[mn,[164,5.5]]],Vx=[[1.93,[36,8]],[2.03,[31,12.7]],[2.23,[30,13.4]],[2.43,[30,13.4]],[3.03,[19.5,24]],[3.43,[24.5,18]],[3.83,[26,15]],[4.23,[22.5,13]],[tn-.001,[22,12.5]],[tn,[21,11]],[mn,[14.5,10]]],Hx=[[1.2,[1300,900,181,4]],[1.43,[1320,480,181,5]],[1.63,[1328,280,181,6]],[1.73,[1331,178,181,6.6]],[1.93,[1341,145,175,9]],[2.33,[1351,127,177,11]],[2.45,[1351,127,177,11]],[2.63,[1403,160,238,16]],[2.9,[1395,178,258,18.5]],[3.23,[1393,181,261,18.8]],[3.33,[1343,175,259,16]],[3.43,[1276,172,256,12.8]],[3.75,[1060,200,190,0]],[3.93,[1039,205,176,-2]],[4.23,[1039,205,176,-2]],[tn-.001,[1087,211,174,-3]],[tn,[1450,326,160,-4.7]],[4.43,[1454,328,160,-4.7]],[4.53,[1490,350,160,-4]],[mn,[1505,356,160,-4]]],Gx=[[1.45,[500,1e3,176,-1]],[1.63,[470,540,176,-1.5]],[1.73,[488,280,176,-1.5]],[1.93,[478,236,176,-2]],[2.03,[472,200,176,-2]],[2.33,[467,172,176,-2]],[2.45,[467,172,176,-2]],[2.63,[370,259,193,-4.7]],[2.9,[290,292,230,-10]],[3.23,[275,300,238,-11]],[3.33,[230,270,225,-9]],[3.45,[150,210,205,-6]],[3.53,[138,194,200,-5.5]],[4.03,[137,178,197,-5.5]],[4.23,[128,261,172,-3]],[tn-.001,[137,289,163,-2.5]],[tn,[145,308,154,-2.5]],[mn,[150,314,154,-2.5]]],Wx=[[1.7,0],[1.95,1],[3.3,1],[3.43,0],[3.88,0],[4.06,.75],[tn,.75],[mn,.6]],Xx=[[1.73,0],[2,1],[3.2,1],[3.33,0],[3.45,0],[3.63,.85],[4.1,.85],[4.23,.5],[tn,.5],[mn,.45]],qx=[[0,[667,1115,195]],[2.4,[667,1115,195]],[3.03,[579,1113,230]],[3.9,[345,1320,300]],[tn-.001,[345,1320,300]],[tn,[690,1130,205]]],Fm={work:{head:[104,-30],sh:[94,-16],hip:[82,70],knee:[150,78],ankle:[142,124],el:[120,10],ha:[146,-2],el2:[112,14],ha2:[138,0]},up:{head:[88,-40],sh:[86,-24],hip:[82,70],knee:[150,78],ankle:[142,124],el:[104,14],ha:[100,-18],el2:[110,16],ha2:[140,0]},stretch:{head:[80,-44],sh:[83,-26],hip:[84,70],knee:[152,80],ankle:[146,126],el:[62,-52],ha:[78,-50],el2:[104,-56],ha2:[86,-50]},yawn:{head:[94,-36],sh:[91,-20],hip:[84,70],knee:[150,78],ankle:[142,124],el:[108,4],ha:[96,-34],el2:[116,12],ha2:[140,0]},leap:{head:[132,8],sh:[120,18],hip:[84,56],knee:[128,44],ankle:[104,84],el:[102,-6],ha:[118,-16],el2:[140,30],ha2:[152,14]}},Tl=[[0,"work"],[1.82,"work"],[1.98,"up"],[2.2,"up"],[2.36,"stretch"],[3.25,"stretch"],[3.4,"yawn"],[3.47,"yawn"],[3.6,"leap"]],rs=(r,t,e)=>r+(t-r)*e,Pi=r=>[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16)],Ys=(r,t,e)=>`rgb(${Math.round(rs(r[0],t[0],e))},${Math.round(rs(r[1],t[1],e))},${Math.round(rs(r[2],t[2],e))})`,li={dark:Pi("#4a1d14"),lit:Pi("#e88a76"),legLit:Pi("#d17261"),topDark:Pi("#5c2618"),topLit:Pi("#c0624e"),chairDark:Pi("#361a14"),chairLit:Pi("#562014"),hairDark:Pi("#2a0f09"),hairLit:Pi("#8a3a28"),lampOff:Pi("#e8a090"),lampOn:[254,254,252]},Yx=[[0,"rgba(255,254,252,1)"],[85/700,"rgba(253,229,220,1)"],[170/700,"rgba(249,210,195,1)"],[290/700,"rgba(248,186,168,1)"],[400/700,"rgba(232,140,117,0.85)"],[460/700,"rgba(210,118,95,0.6)"],[520/700,"rgba(175,80,60,0.4)"],[575/700,"rgba(153,58,38,0.2)"],[1,"rgba(120,40,25,0)"]];function hu({el:r,reduced:t,onReveal:e,onDone:n}){let i=r.querySelector(".preloader__canvas"),s=r.querySelector(".preloader__flash"),o=r.querySelector(".preloader__count"),a=r.querySelector(".preloader__num"),l=i.getContext("2d",{alpha:!1});r.style.setProperty("--grain",`url(${Zx().toDataURL()})`);let c=0,h=0,u=1,f=1,d=0,p=0,_={};function g(){u=Math.min(window.devicePixelRatio||1,1.5),c=window.innerWidth,h=window.innerHeight,i.width=Math.round(c*u),i.height=Math.round(h*u),c/h<.9?(f=c/1250,d=c/2-800*f,p=h*.44-420*f):(f=Math.max(c/Um,h/Nm),d=(c-Um*f)/2,p=(h-Nm*f)/2)}function m(D,V,H,G,ht){let at=document.createElement("canvas");at.width=D+H*4,at.height=V+H*4;let lt=at.getContext("2d");return lt.translate(H*2-1e4,H*2),lt.shadowColor=ht,lt.shadowBlur=H,lt.shadowOffsetX=1e4,lt.fillStyle=ht,G(lt),lt.fill(),at}function S(D,V,H,G,ht,at){D.beginPath(),D.moveTo(V+at,H),D.arcTo(V+G,H,V+G,H+ht,at),D.arcTo(V+G,H+ht,V,H+ht,at),D.arcTo(V,H+ht,V,H,at),D.arcTo(V,H,V+G,H,at),D.closePath()}_.pillar=m(600,600,40,D=>S(D,0,0,600,600,150),"rgb(78,8,16)"),_.shadow=m(494,40,14,D=>{D.beginPath(),D.ellipse(247,20,247,20,0,0,Math.PI*2)},"rgb(25,8,5)");{let D=document.createElement("canvas");D.width=D.height=256;let V=D.getContext("2d");V.fillStyle="rgba(192,96,72,0.55)";for(let H=0;H<160;H++){let G=Math.random()*Math.PI*2,ht=(1+Math.random()*1.2)*58;V.fillRect(128+Math.cos(G)*ht,128+Math.sin(G)*ht,1.4,1.4)}_.specks=D}function y(D,V,H,G){let ht=D*H,at=G.x*(1-H)+V.x*(1-D)*H,lt=G.y*(1-H)+V.y*(1-D)*H;l.setTransform(u*f*ht,0,0,u*f*ht,u*(d+f*at),u*(p+f*lt))}function x(D){let[V,H,G,ht]=D;if(H>1040)return;l.save(),l.translate(V,H),l.rotate(ht*Math.PI/180);let at=l.createLinearGradient(0,-1.6*G,0,.45*G);at.addColorStop(0,"#231816"),at.addColorStop(.45,"#2d1a13"),at.addColorStop(.8,"rgba(56,29,20,0.6)"),at.addColorStop(1,"rgba(62,29,20,0)"),l.fillStyle=at,l.beginPath(),l.moveTo(-3.5*G,.75*G),l.bezierCurveTo(-2.4*G,.5*G,-1.6*G,.3*G,-1.38*G,.2*G),l.lineTo(-1.3*G,-1.15*G),l.quadraticCurveTo(-1.3*G,-1.5*G,-.95*G,-1.52*G),l.quadraticCurveTo(0,-1.6*G,.95*G,-1.52*G),l.quadraticCurveTo(1.3*G,-1.5*G,1.3*G,-1.15*G),l.lineTo(1.38*G,.2*G),l.bezierCurveTo(1.6*G,.3*G,2.4*G,.5*G,3.5*G,.75*G),l.lineTo(3.5*G,1.2*G),l.lineTo(-3.5*G,1.2*G),l.closePath(),l.fill(),l.restore()}function C(D,V,H){if(V<=.02||D[1]>1040)return;let[G,ht,at,lt]=D;l.save(),l.translate(G,ht),l.rotate(lt*Math.PI/180);let wt=.76*at;E(-.5*at,0,wt,wt*H[0],V,!1),E(.5*at,0,wt,wt*H[1],V,!0),l.restore()}function E(D,V,H,G,ht,at){l.save(),l.translate(D,V),at&&l.scale(-1,1),l.rotate(16*Math.PI/180),l.save(),l.scale(1,.62);let lt=l.createRadialGradient(0,-.08*H,.1*H,0,-.08*H,.78*H);lt.addColorStop(0,`rgba(255,128,88,${.75*ht})`),lt.addColorStop(.42,`rgba(214,72,42,${.42*ht})`),lt.addColorStop(1,"rgba(120,36,22,0)"),l.fillStyle=lt,l.fillRect(-.8*H,-.9*H,1.6*H,1.6*H),l.restore(),l.scale(1,Math.max(.04,ht)),l.beginPath(),l.moveTo(-.5*H,.02*G),l.bezierCurveTo(-.4*H,-.78*G,.22*H,-.66*G,.5*H,.2*G),l.bezierCurveTo(.12*H,.42*G,-.3*H,.48*G,-.47*H,.3*G),l.quadraticCurveTo(-.56*H,.18*G,-.5*H,.02*G),l.closePath(),l.fillStyle="#fdf9f8",l.fill(),l.restore()}function w(D,V,H,G,ht,at,lt){if(lt<=.01)return;let wt=G*Math.PI/180,j=ht*Math.PI/180,Q=Math.cos(wt),P=Math.sin(wt),dt=-P,st=Q,O=.4*H,ft=.4*H+at*Math.tan(j),Nt=l.createLinearGradient(D,V,D+Q*at,V+P*at);for(let[St,A]of Yx)Nt.addColorStop(St,A);l.globalAlpha=lt,l.fillStyle=Nt,l.beginPath(),l.moveTo(D+dt*O,V+st*O),l.lineTo(D+Q*at+dt*ft,V+P*at+st*ft),l.lineTo(D+Q*at-dt*ft,V+P*at-st*ft),l.lineTo(D-dt*O,V-st*O),l.closePath(),l.fill(),l.globalAlpha=1}function R(D,V,H,G,ht,at=1){if(G<=.01)return;let lt=H/2,wt=Math.min(1,Math.max(0,(at-1.3)/4)),j=lt*(2.1+1.6*wt),Q=l.createRadialGradient(D,V,lt*.85,D,V,j);if(Q.addColorStop(0,`rgba(255,236,228,${.85*G})`),Q.addColorStop(.35,`rgba(255,170,148,${(.38+.3*wt)*G})`),Q.addColorStop(1,"rgba(226,116,96,0)"),l.fillStyle=Q,l.beginPath(),l.arc(D,V,j,0,Math.PI*2),l.fill(),wt>0){l.strokeStyle=`rgba(150,72,60,${.1*wt})`,l.lineWidth=lt*.05;for(let dt of[1.3,1.55,1.85])l.beginPath(),l.arc(D,V,lt*dt,0,Math.PI*2),l.stroke()}l.globalAlpha=G*(1-.6*wt);let P=lt/58*128;if(l.drawImage(_.specks,D-P,V-P,P*2,P*2),l.globalAlpha=1,wt>0){let dt=l.createRadialGradient(D,V,lt*.8,D,V,lt*1.18);dt.addColorStop(0,"rgba(255,254,252,1)"),dt.addColorStop(1,"rgba(255,240,234,0)"),l.fillStyle=dt,l.beginPath(),l.arc(D,V,lt*1.18,0,Math.PI*2),l.fill()}else{l.fillStyle=G<1?Ys(li.lampOff,li.lampOn,G):"#fefefc",l.beginPath(),l.arc(D,V,lt,0,Math.PI*2),l.fill(),l.globalAlpha=G*.45,l.strokeStyle="#7a3628",l.lineWidth=.04*H,l.lineCap="round";let dt=(ht+180)*Math.PI/180;for(let st of[-.75,-.1,.55])l.beginPath(),l.arc(D,V,.42*H,dt+st-.28,dt+st+.1),l.stroke();l.globalAlpha=1}}function M(D,V,H){let G=Math.atan2(D[1]-V[1],D[0]-V[0])*180/Math.PI,ht=Math.abs(((G-H[0])%360+540)%360-180);return ht<H[1]+3?1:ht<H[1]+9?1-(ht-H[1]-3)/6:0}function v(D){let V=0;for(;V<Tl.length-1&&Tl[V+1][0]<=D;)V++;let[H,G]=Tl[V],ht=Tl[V+1],at=Fm[G];if(!ht)return at;let[lt,wt]=ht,j=qi.io(Math.min(1,Math.max(0,(D-H)/(lt-H)))),Q=Fm[wt],P={};for(let dt in at)P[dt]=[rs(at[dt][0],Q[dt][0],j),rs(at[dt][1],Q[dt][1],j)];return P}function I(D,V,H,G){l.beginPath(),l.moveTo(D,V),l.lineTo(H,G),l.stroke()}function U(D,V){l.save(),l.translate(711,594),l.globalAlpha=.55,l.drawImage(_.shadow,-245,79),l.globalAlpha=1,l.fillStyle="#3d190f",l.fillRect(283,17,5,97),l.fillStyle=Ys(li.topDark,li.topLit,V.desk),l.fillRect(0,0,295,11),l.fillStyle="#892f1c",l.fillRect(0,11,295,6),l.fillStyle="#fee7e3",l.fillRect(158,-1,28,7),l.fillStyle="#5a2016",l.fillRect(109,-3,16,20),l.fillStyle="#3d190f";for(let ft of[28,50,84,104])l.fillRect(ft,98,3,62);l.fillStyle=Ys(li.chairDark,li.chairLit,V.fig),S(l,20,17,55,61,10),l.fill(),l.fillRect(24,84,83,14);let H=v(D),G=D>3.6&&D<mn?Math.sin((D-3.6)*12.5)*2.5:0,ht=Ys(li.dark,li.lit,V.fig),at=Ys(li.dark,li.legLit,V.fig),lt=ft=>ft[1]+G;l.lineCap="round",l.lineJoin="round",l.strokeStyle=at,l.lineWidth=11,I(H.hip[0],lt(H.hip),H.knee[0],lt(H.knee)),l.lineWidth=7,I(H.knee[0],lt(H.knee),H.ankle[0],lt(H.ankle)),l.fillStyle="#2a0f09",l.beginPath(),l.ellipse(H.ankle[0]+5,lt(H.ankle)+2,7,3,0,0,Math.PI*2),l.fill();let wt=H.sh[0],j=lt(H.sh),Q=H.hip[0],P=lt(H.hip),dt=Math.hypot(Q-wt,P-j)||1,st=-(P-j)/dt,O=(Q-wt)/dt;l.fillStyle=ht,l.beginPath(),l.moveTo(wt+st*10,j+O*10),l.lineTo(Q+st*8,P+O*8),l.lineTo(Q-st*8,P-O*8),l.lineTo(wt-st*10,j-O*10),l.closePath(),l.fill(),l.strokeStyle=ht,l.lineWidth=6,I(wt,j,H.el2[0],lt(H.el2)),l.lineWidth=5,I(H.el2[0],lt(H.el2),H.ha2[0],lt(H.ha2)),l.lineWidth=6,I(wt,j,H.el[0],lt(H.el)),l.lineWidth=5,I(H.el[0],lt(H.el),H.ha[0],lt(H.ha)),I(wt,j,H.head[0],lt(H.head)),l.beginPath(),l.arc(H.head[0],lt(H.head),7.5,0,Math.PI*2),l.fill(),l.fillStyle=Ys(li.hairDark,li.hairLit,V.fig),l.beginPath(),l.arc(H.head[0]-5,lt(H.head)-4,4,0,Math.PI*2),l.fill(),V.fig<.5&&(l.strokeStyle=`rgba(232,160,140,${.8*(1-V.fig*2)})`,l.lineWidth=1.5,I(wt+9,j,Q+7,P)),l.fillStyle="#3d190f",l.fillRect(-4,17,8,92),l.fillRect(290,17,7,114),l.restore()}let F=Array.from({length:320},(D,V)=>({a:V/320*Math.PI*2+Math.random()*.3,f:1.5+Math.random()*3,r:.6+Math.random()*1.4,c:Math.random()<.5?"#d27a62":"#f0a088"}));function z(D,V){if(D<1.9||D>2.36)return;let H=qi.out2(Math.min(1,(D-1.9)/.45)),G=D<1.98?(D-1.9)/.08*.9:.9*(1-(D-1.98)/.38),ht=V[2]/2;l.globalAlpha=Math.max(0,G);for(let at of F){let lt=ht*(1.2+(at.f-1.2)*H);l.fillStyle=at.c,l.fillRect(V[0]+Math.cos(at.a)*lt-20*H,V[1]+Math.sin(at.a)*lt-25*H,at.r,at.r)}l.globalAlpha=1}function J(D){let V=D<=mn?1:1+5*qi.in2(Math.min(1,(D-mn)/.12)),H=1+(V-1)*.6,G=V,ht=1+(V-1)*1.6,at=_i(Bx,D,qi.out3);l.setTransform(1,0,0,1,0,0),l.fillStyle="#3e1d14",l.fillRect(0,0,i.width,i.height),y(at,Xi,H,is);let lt=l.createRadialGradient(820,560,0,820,560,620);lt.addColorStop(0,"#742a16"),lt.addColorStop(1,"rgba(116,42,22,0)"),l.fillStyle=lt,l.fillRect(200,-60,1240,1240);let wt=l.createLinearGradient(0,690,0,900);wt.addColorStop(0,"rgba(30,12,8,0)"),wt.addColorStop(1,"rgba(30,12,8,0.25)"),l.fillStyle=wt,l.fillRect(-400,690,2400,600),y(1,Xi,ht,is);let j=_i(Hx,D),Q=_i(Gx,D),P=Math.min(1,Math.max(0,(D-1.2)/.15)),dt=Math.min(1,Math.max(0,(D-1.45)/.15));l.globalAlpha=dt,x(Q),l.globalAlpha=P,x(j),l.globalAlpha=.45,y(at,Xi,H,is);let[st,O,ft]=_i(qx,D),Nt=(O-st)/600,St=(ft+300)/600;l.drawImage(_.pillar,st-80*Nt,-300-80*St,760*Nt,760*St),l.globalAlpha=1;let A,b,Y=1;if(D<1.03){Y=Math.exp(2.95*(1-qi.out2(Math.min(1,Math.max(0,(D-.08)/1.05)))));let Ht=qi.io(Math.min(1,Math.max(0,(D-.05)/.75)));A=[rs(906,1370,Ht),rs(434,510,Ht),58*Y],b=_i(Om,D,qi.out2)}else A=_i(zx,D),b=_i(Om,D);let nt=_i(kx,D,qi.out2),rt=_i(Vx,D),it=D<1.9?0:Math.min(1,.35+.65*(D-1.9)/.13),xt=(Ht,pt)=>[Xi.x+(711+Ht-Xi.x)*at,Xi.y+(594+pt-Xi.y)*at],gt=Ht=>Math.min(1,M(Ht,A,b)+(it>.5?M(Ht,nt,rt):0)),yt={fig:gt(xt(90,20)),desk:Math.max(gt(xt(150,4)),gt(xt(260,0)))};y(at,Xi,G,is),U(D,yt),y(1,Xi,ht,is),l.globalCompositeOperation="screen",w(A[0],A[1],A[2],b[0],b[1],700*Y,1),w(nt[0],nt[1],nt[2],rt[0],rt[1],700,it),l.globalCompositeOperation="source-over",R(A[0],A[1],A[2],1,b[0],Y),R(nt[0],nt[1],nt[2],it,rt[0]),z(D,nt),l.globalAlpha=dt,C(Q,_i(Xx,D),[.29,.38]),l.globalAlpha=P,C(j,_i(Wx,D),[.45,.29]),l.globalAlpha=1}let X={tau:0},K=-1,q=ie.parseEase("power4.inOut"),et=()=>{let D=X.tau>=mn?100:Math.round(100*q(Math.min(1,(X.tau+.78)/6.48)));D!==K&&(K=D,a.textContent=D)},L=()=>{J(X.tau),et()};g(),window.addEventListener("resize",g),ie.ticker.add(L);let ct=()=>{ie.ticker.remove(L),window.removeEventListener("resize",g),r.remove(),n&&n()};if(t){X.tau=2.33,L(),ie.set(s,{opacity:0}),ie.timeline({delay:.5}).to(r,{opacity:0,duration:.5}).add(()=>{e&&e(),ct()});return}let ut=()=>{let D=o.getBoundingClientRect();return`${d+is.x*f-D.left}px ${p+is.y*f-D.top}px`},It=ie.timeline();return It.set(s,{opacity:0,backgroundColor:"#6a241a"}).fromTo(o,{y:60,opacity:0,filter:"blur(6px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"expo.out"},0).to(X,{tau:cu,duration:cu,ease:"none"},0).add(()=>{ie.to(o,{scale:6,opacity:0,transformOrigin:ut(),duration:.12,ease:"power2.in"})},mn).set(s,{opacity:1},mn+.12).to(s,{backgroundColor:"#c23f29",duration:.17,ease:"power1.in"},mn+.12).add(()=>{e&&e()},4.78).to(s,{opacity:0,duration:.07,ease:"none"},4.9).add(ct,cu),It}function Zx(){let r=document.createElement("canvas");r.width=r.height=160;let t=r.getContext("2d"),e=t.createImageData(160,160);for(let n=0;n<e.data.length;n+=4){let i=Math.random()*255;e.data[n]=e.data[n+1]=e.data[n+2]=i,e.data[n+3]=255}return t.putImageData(e,0,0),r}function El(r,t,e,n,i=[]){let a=e*.8*(1-.42*r)/18;for(let l=0;l<18;l++){let c=l/17,h=.975-c*.8,u=Math.max(0,h-r*1.02)*t,f=Math.max(0,a*(.84-c*.66)*(1-.35*r)),d=i[l]||(i[l]={x:0,y:0,w:0,h:0});d.w=u,d.h=u>0?f:0,d.x=(t-u)/2,d.y=n+l*a+2}return i}var $x=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,Jx=`
precision highp float;
uniform vec2 uRes;          // css px
uniform float uDpr;
uniform float uTime;
uniform float uMix;         // 0 burnt orange -> 1 lavender
uniform float uHeroBottom;  // css px from top
uniform float uWarp;        // intro hourglass warp, 1 -> 0
uniform float uReveal;      // 0 solid flash colour -> 1 full glass
uniform vec3 uBlack;
uniform vec4 uBars[${18}];

float hash(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 blob(vec3 col, vec2 q, vec2 c, float r, vec3 bc, float a, float aspect) {
  c.x *= aspect;
  vec2 d = q - c;
  float w = exp(-dot(d, d) / (r * r));
  return mix(col, bc, clamp(w * a, 0.0, 1.0));
}

vec3 field(vec2 p, float t, float m) {
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(p.x * aspect, p.y);
  vec3 base = mix(vec3(0.80, 0.29, 0.19), vec3(0.79, 0.77, 0.94), m);
  vec3 col = base;
  // left band
  col = blob(col, q, mix(vec2(0.05, 0.52), vec2(0.04, 0.55), m) + 0.03 * vec2(sin(t * 0.23), cos(t * 0.19)),
             0.32, mix(vec3(0.86, 0.40, 0.22), vec3(0.70, 0.64, 0.93), m), 0.8, aspect);
  // bottom-left warm / periwinkle
  col = blob(col, q, mix(vec2(0.14, 0.88), vec2(0.20, 0.90), m) + 0.04 * vec2(cos(t * 0.17), sin(t * 0.21)),
             0.42, mix(vec3(0.89, 0.50, 0.28), vec3(0.78, 0.79, 0.96), m), 0.85, aspect);
  // top-left deep red / violet
  col = blob(col, q, mix(vec2(0.32, 0.22), vec2(0.20, 0.10), m) + 0.05 * vec2(sin(t * 0.13 + 1.0), cos(t * 0.16)),
             mix(0.40, 0.34, m), mix(vec3(0.74, 0.17, 0.14), vec3(0.33, 0.22, 0.80), m), 0.95, aspect);
  // top-right red / violet
  col = blob(col, q, mix(vec2(0.80, 0.18), vec2(0.93, 0.05), m) + 0.04 * vec2(cos(t * 0.15 + 2.0), sin(t * 0.12)),
             mix(0.36, 0.28, m), mix(vec3(0.77, 0.22, 0.17), vec3(0.40, 0.28, 0.86), m), 0.92, aspect);
  // centre glow (salmon -> near white dome)
  col = blob(col, q, mix(vec2(0.55, 0.52), vec2(0.57, 0.40), m) + 0.035 * vec2(sin(t * 0.11), cos(t * 0.14 + 1.0)),
             mix(0.34, 0.40, m), mix(vec3(0.84, 0.40, 0.32), vec3(0.95, 0.95, 0.99), m), mix(0.7, 0.97, m), aspect);
  // bottom-right hot corner / lilac
  col = blob(col, q, mix(vec2(0.98, 0.96), vec2(0.92, 0.80), m) + 0.03 * vec2(cos(t * 0.2), sin(t * 0.18 + 2.0)),
             mix(0.24, 0.32, m), mix(vec3(0.96, 0.50, 0.15), vec3(0.78, 0.68, 0.95), m), 0.95, aspect);
  // mid-right accent
  col = blob(col, q, mix(vec2(0.86, 0.62), vec2(0.82, 0.55), m) + 0.03 * vec2(sin(t * 0.16 + 3.0), cos(t * 0.13)),
             0.22, mix(vec3(0.83, 0.33, 0.20), vec3(0.74, 0.70, 0.95), m), 0.6, aspect);
  return col;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  float ypx = uRes.y - frag.y;

  bool inside = ypx <= uHeroBottom;
  float barTop = 0.0;
  for (int i = 0; i < ${18}; i++) {
    vec4 b = uBars[i];
    if (b.z > 0.5 && frag.x >= b.x && frag.x <= b.x + b.z && ypx >= b.y && ypx <= b.y + b.w) {
      inside = true;
      barTop = ypx - b.y;
    }
  }
  if (!inside) { gl_FragColor = vec4(uBlack, 1.0); return; }

  float W = uRes.x, H = uRes.y;
  // intro hourglass: flutes bow outward top and bottom, then relax straight
  float cx = frag.x - W * 0.5;
  float yy = ypx / H - 0.5;
  float warped = cx / (1.0 + uWarp * 7.0 * yy * yy);
  float fw = mix(11.0, 46.0, uWarp);
  float fx = (warped + W * 0.5) / fw;
  float cell = floor(fx);
  float u = fract(fx);
  float jit = hash(cell);

  // convex flute: each rib shows a mirrored, compressed slice of the gradient
  float spread = (1.7 + jit * 1.1) * (1.0 + uWarp * 1.5);
  float sx = frag.x - (u - 0.5) * fw * spread;
  vec2 sp = vec2(sx / W, ypx / H);
  vec3 col = field(sp, uTime, uMix);

  // rib shading: soft highlight on the leading edge, hairline shadow on the trailing edge
  float shade = 1.0;
  shade += 0.05 * (1.0 - smoothstep(0.0, 0.22, u));
  shade -= 0.06 * smoothstep(0.82, 1.0, u);
  shade += (jit - 0.5) * 0.035;
  col *= mix(shade, 1.0 + (shade - 1.0) * 3.0, uWarp);
  col += 0.03 * (1.0 - smoothstep(0.0, 0.06, u)) * (1.0 + 3.0 * uWarp);

  // reveal from the solid flash colour
  col = mix(vec3(0.784, 0.263, 0.184), col, uReveal);

  // bars: faint lip on the top edge
  if (barTop > 0.0 && barTop < 1.2) col *= 0.82;

  // grain
  float g = hash2(gl_FragCoord.xy + fract(uTime * 13.0) * 91.0) - 0.5;
  col += g * 0.028;
  gl_FragColor = vec4(col, 1.0);
}
`,Al=class{constructor(t){this.canvas=t,this.state={mix:0,heroBottom:1,warp:1,reveal:0},this.bars=new Float32Array(72);let e=t.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!e){this.failed=!0,t.classList.add("is-fallback");return}this.gl=e;let n=e.createProgram(),i=(l,c)=>{let h=e.createShader(l);if(e.shaderSource(h,c),e.compileShader(h),!e.getShaderParameter(h,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(h));e.attachShader(n,h)};try{if(i(e.VERTEX_SHADER,$x),i(e.FRAGMENT_SHADER,Jx),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n))}catch(l){console.warn("[hero] shader failed, using CSS fallback",l),this.failed=!0,t.classList.add("is-fallback");return}e.useProgram(n);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let o=e.getAttribLocation(n,"aPos");e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0);let a=l=>e.getUniformLocation(n,l);this.u={res:a("uRes"),dpr:a("uDpr"),time:a("uTime"),mix:a("uMix"),heroBottom:a("uHeroBottom"),warp:a("uWarp"),reveal:a("uReveal"),black:a("uBlack"),bars:a("uBars")},e.uniform3f(this.u.black,11/255,11/255,12/255),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=Math.max(.75,Math.min(window.devicePixelRatio||1,1.25,Math.sqrt(22e5/(t*e))));this.w=t,this.h=e,this.dpr=n,this.canvas.width=Math.round(t*n),this.canvas.height=Math.round(e*n),this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}setBars(t){for(let e=0;e<18;e++){let n=t[e];this.bars[e*4]=n?n.x:0,this.bars[e*4+1]=n?n.y:0,this.bars[e*4+2]=n?n.w:0,this.bars[e*4+3]=n?n.h:0}}render(t){if(this.failed)return;let{gl:e,u:n,state:i}=this;e.uniform2f(n.res,this.canvas.width/this.dpr,this.canvas.height/this.dpr),e.uniform1f(n.dpr,this.dpr),e.uniform1f(n.time,t),e.uniform1f(n.mix,i.mix),e.uniform1f(n.heroBottom,i.heroBottom*this.h),e.uniform1f(n.warp,i.warp),e.uniform1f(n.reveal,i.reveal),e.uniform4fv(n.bars,this.bars),e.drawArrays(e.TRIANGLES,0,3)}};var Kx=0,Bm=1,Qx=2;var Yg=1,jx=2,Qi=3,Pr=0,zn=1,hi=2,Cr=0,fo=1,zm=2,km=3,Vm=4,tv=5,fs=100,ev=101,nv=102,iv=103,rv=104,sv=200,ov=201,av=202,lv=203,Gu=204,Wu=205,cv=206,hv=207,uv=208,fv=209,dv=210,pv=211,mv=212,gv=213,_v=214,Xu=0,qu=1,Yu=2,_o=3,Zu=4,$u=5,Ju=6,Ku=7,Zg=0,xv=1,vv=2,Rr=0,yv=1,Mv=2,Sv=3,bv=4,wv=5,Tv=6,Ev=7;var $g=300,xo=301,vo=302,Qu=303,ju=304,Oc=306,tf=1e3,ms=1001,ef=1002,In=1003,Av=1004;var Cl=1005;var Li=1006,uu=1007;var gs=1008;var ir=1009,Jg=1010,Kg=1011,wa=1012,pd=1013,_s=1014,tr=1015,Ua=1016,md=1017,gd=1018,yo=1020,Qg=35902,jg=1021,t0=1022,Mi=1023,e0=1024,n0=1025,po=1026,Mo=1027,Fc=1028,_d=1029,i0=1030,xd=1031;var vd=1033,ec=33776,nc=33777,ic=33778,rc=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,hf=37808,uf=37809,ff=37810,df=37811,pf=37812,mf=37813,gf=37814,_f=37815,xf=37816,vf=37817,yf=37818,Mf=37819,Sf=37820,bf=37821,sc=36492,wf=36494,Tf=36495,r0=36283,Ef=36284,Af=36285,Cf=36286;var oc=2300,Rf=2301,fu=2302,Hm=2400,Gm=2401,Wm=2402;var Cv=3200,Rv=3201;var s0=0,Pv=1,Ar="",Rn="srgb",Ao="srgb-linear",Bc="linear",ve="srgb";var $s=7680;var Xm=519,Iv=512,Lv=513,Dv=514,o0=515,Uv=516,Nv=517,Ov=518,Fv=519,qm=35044;var Ym="300 es",er=2e3,ac=2001,Ir=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zm=1234567,xa=Math.PI/180,Ta=180/Math.PI;function ws(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function an(r,t,e){return Math.max(t,Math.min(e,r))}function yd(r,t){return(r%t+t)%t}function Bv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function zv(r,t,e){return r!==t?(e-r)/(t-r):0}function va(r,t,e){return(1-e)*r+e*t}function kv(r,t,e,n){return va(r,t,1-Math.exp(-e*n))}function Vv(r,t=1){return t-Math.abs(yd(r,t*2)-t)}function Hv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Gv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Wv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Xv(r,t){return r+Math.random()*(t-r)}function qv(r){return r*(.5-Math.random())}function Yv(r){r!==void 0&&(Zm=r);let t=Zm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zv(r){return r*xa}function $v(r){return r*Ta}function Jv(r){return(r&r-1)===0&&r!==0}function Kv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jv(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function co(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function An(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var zc={DEG2RAD:xa,RAD2DEG:Ta,generateUUID:ws,clamp:an,euclideanModulo:yd,mapLinear:Bv,inverseLerp:zv,lerp:va,damp:kv,pingpong:Vv,smoothstep:Hv,smootherstep:Gv,randInt:Wv,randFloat:Xv,randFloatSpread:qv,seededRandom:Yv,degToRad:Zv,radToDeg:$v,isPowerOfTwo:Jv,ceilPowerOfTwo:Kv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:jv,normalize:An,denormalize:co},Pt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],S=i[1],y=i[4],x=i[7],C=i[2],E=i[5],w=i[8];return s[0]=o*_+a*S+l*C,s[3]=o*g+a*y+l*E,s[6]=o*m+a*x+l*w,s[1]=c*_+h*S+u*C,s[4]=c*g+h*y+u*E,s[7]=c*m+h*x+u*w,s[2]=f*_+d*S+p*C,s[5]=f*g+d*y+p*E,s[8]=f*m+d*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(du.makeScale(t,e)),this}rotate(t){return this.premultiply(du.makeRotation(-t)),this}translate(t,e){return this.premultiply(du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},du=new ee;function a0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ty(){let r=lc("canvas");return r.style.display="block",r}var $m={};function ga(r){r in $m||($m[r]=!0,console.warn(r))}function ey(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ny(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iy(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:Ao,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?Bc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Jm=[.64,.33,.3,.6,.15,.06],Km=[.2126,.7152,.0722],Qm=[.3127,.329],jm=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[Ao]:{primaries:Jm,whitePoint:Qm,transfer:Bc,toXYZ:jm,fromXYZ:tg,luminanceCoefficients:Km,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:Jm,whitePoint:Qm,transfer:ve,toXYZ:jm,fromXYZ:tg,luminanceCoefficients:Km,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});var Js,Pf=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Js===void 0&&(Js=lc("canvas")),Js.width=t.width,Js.height=t.height;let n=Js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=lc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nr(e[n]/255)*255):e[n]=nr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ry=0,cc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(pu(i[o].image)):s.push(pu(i[o]))}else s=pu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function pu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Pf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sy=0,kn=class r extends Ir{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ms,i=ms,s=Li,o=gs,a=Mi,l=ir,c=r.DEFAULT_ANISOTROPY,h=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ws(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$g)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tf:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case ef:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tf:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case ef:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=$g;kn.DEFAULT_ANISOTROPY=1;var ke=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(d+1)/2,C=(m+1)/2,E=(h+f)/4,w=(u+_)/4,R=(p+g)/4;return y>x&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=w/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},If=class extends Ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new kn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rr=class extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hc=class extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lf=class extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),E=Math.atan2(C,m*S);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}let x=a*S;if(l=l*g+f*x,c=c*g+d*x,h=h*g+p*x,u=u*g+_*x,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mu.copy(this).projectOnVector(t),this.sub(mu)}reflect(t){return this.sub(mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new k,eg=new Lr,xs=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(t.matrixWorld),this.union(Rl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),Pl.subVectors(this.max,fa),Ks.subVectors(t.a,fa),Qs.subVectors(t.b,fa),js.subVectors(t.c,fa),Mr.subVectors(Qs,Ks),Sr.subVectors(js,Qs),ss.subVectors(Ks,js);let e=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-ss.z,ss.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,ss.z,0,-ss.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-ss.y,ss.x,0];return!gu(e,Ks,Qs,js,Pl)||(e=[1,0,0,0,1,0,0,0,1],!gu(e,Ks,Qs,js,Pl))?!1:(Il.crossVectors(Mr,Sr),e=[Il.x,Il.y,Il.z],gu(e,Ks,Qs,js,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yi=[new k,new k,new k,new k,new k,new k,new k,new k],xi=new k,Rl=new xs,Ks=new k,Qs=new k,js=new k,Mr=new k,Sr=new k,ss=new k,fa=new k,Pl=new k,Il=new k,os=new k;function gu(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){os.fromArray(r,s);let a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var oy=new xs,da=new k,_u=new k,So=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):oy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);let e=da.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(da,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(_u)),this.expandByPoint(da.copy(t.center).sub(_u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new k,xu=new k,Ll=new k,br=new k,vu=new k,Dl=new k,yu=new k,uc=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xu.copy(t).add(e).multiplyScalar(.5),Ll.copy(e).sub(t).normalize(),br.copy(this.origin).sub(xu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ll),a=br.dot(this.direction),l=-br.dot(Ll),c=br.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xu).addScaledVector(Ll,f),d}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,i,s){vu.subVectors(e,t),Dl.subVectors(n,t),yu.crossVectors(vu,Dl);let o=this.direction.dot(yu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;br.subVectors(this.origin,t);let l=a*this.direction.dot(Dl.crossVectors(br,Dl));if(l<0)return null;let c=a*this.direction.dot(vu.cross(br));if(c<0||l+c>o)return null;let h=-a*br.dot(yu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/to.setFromMatrixColumn(t,0).length(),s=1/to.setFromMatrixColumn(t,1).length(),o=1/to.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ay,t,ly)}lookAt(t,e,n){let i=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),wr.crossVectors(n,Jn),wr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),wr.crossVectors(n,Jn)),wr.normalize(),Ul.crossVectors(Jn,wr),i[0]=wr.x,i[4]=Ul.x,i[8]=Jn.x,i[1]=wr.y,i[5]=Ul.y,i[9]=Jn.y,i[2]=wr.z,i[6]=Ul.z,i[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],y=n[7],x=n[11],C=n[15],E=i[0],w=i[4],R=i[8],M=i[12],v=i[1],I=i[5],U=i[9],F=i[13],z=i[2],J=i[6],X=i[10],K=i[14],q=i[3],et=i[7],L=i[11],ct=i[15];return s[0]=o*E+a*v+l*z+c*q,s[4]=o*w+a*I+l*J+c*et,s[8]=o*R+a*U+l*X+c*L,s[12]=o*M+a*F+l*K+c*ct,s[1]=h*E+u*v+f*z+d*q,s[5]=h*w+u*I+f*J+d*et,s[9]=h*R+u*U+f*X+d*L,s[13]=h*M+u*F+f*K+d*ct,s[2]=p*E+_*v+g*z+m*q,s[6]=p*w+_*I+g*J+m*et,s[10]=p*R+_*U+g*X+m*L,s[14]=p*M+_*F+g*K+m*ct,s[3]=S*E+y*v+x*z+C*q,s[7]=S*w+y*I+x*J+C*et,s[11]=S*R+y*U+x*X+C*L,s[15]=S*M+y*F+x*K+C*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+g*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=u*g*c-_*f*c+_*l*d-a*g*d-u*l*m+a*f*m,y=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,x=h*_*c-p*u*c+p*a*d-o*_*d-h*a*m+o*u*m,C=p*u*l-h*_*l-p*a*f+o*_*f+h*a*g-o*u*g,E=e*S+n*y+i*x+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=S*w,t[1]=(_*f*s-u*g*s-_*i*d+n*g*d+u*i*m-n*f*m)*w,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*m+n*l*m)*w,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,t[4]=y*w,t[5]=(h*g*s-p*f*s+p*i*d-e*g*d-h*i*m+e*f*m)*w,t[6]=(p*l*s-o*g*s-p*i*c+e*g*c+o*i*m-e*l*m)*w,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*w,t[8]=x*w,t[9]=(p*u*s-h*_*s-p*n*d+e*_*d+h*n*m-e*u*m)*w,t[10]=(o*_*s-p*a*s+p*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=C*w,t[13]=(h*_*i-p*u*i+p*n*f-e*_*f-h*n*g+e*u*g)*w,t[14]=(p*a*i-o*_*i-p*n*l+e*_*l+o*n*g-e*a*g)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,_=o*h,g=o*u,m=a*u,S=l*c,y=l*h,x=l*u,C=n.x,E=n.y,w=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+x)*C,i[2]=(p-y)*C,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+m))*E,i[6]=(g+S)*E,i[7]=0,i[8]=(p+y)*w,i[9]=(g-S)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=to.set(i[0],i[1],i[2]).length(),o=to.set(i[4],i[5],i[6]).length(),a=to.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vi.copy(this);let c=1/s,h=1/o,u=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,e.setFromRotationMatrix(vi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=er){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===er)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ac)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=er){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,p,_;if(a===er)p=(o+s)*u,_=-2*u;else if(a===ac)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},to=new k,vi=new Ne,ay=new k(0,0,0),ly=new k(1,1,1),wr=new k,Ul=new k,Jn=new k,ng=new Ne,ig=new Lr,sr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ng.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ng,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ig.setFromEuler(this),this.setFromQuaternion(ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sr.DEFAULT_ORDER="XYZ";var fc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cy=0,rg=new k,eo=new Lr,$i=new Ne,Nl=new k,pa=new k,hy=new k,uy=new Lr,sg=new k(1,0,0),og=new k(0,1,0),ag=new k(0,0,1),lg={type:"added"},fy={type:"removed"},no={type:"childadded",child:null},Mu={type:"childremoved",child:null},Ln=class r extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,e=new sr,n=new Lr,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ee}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(sg,t)}rotateY(t){return this.rotateOnAxis(og,t)}rotateZ(t){return this.rotateOnAxis(ag,t)}translateOnAxis(t,e){return rg.copy(t).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sg,t)}translateY(t){return this.translateOnAxis(og,t)}translateZ(t){return this.translateOnAxis(ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nl.copy(t):Nl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(pa,Nl,this.up):$i.lookAt(Nl,pa,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),eo.setFromRotationMatrix($i),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lg),no.child=t,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fy),Mu.child=t,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lg),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,uy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ln.DEFAULT_UP=new k(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new k,Ji=new k,Su=new k,Ki=new k,io=new k,ro=new k,cg=new k,bu=new k,wu=new k,Tu=new k,Eu=new ke,Au=new ke,Cu=new ke,ds=class r{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yi.subVectors(t,e),i.cross(yi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yi.subVectors(i,e),Ji.subVectors(n,e),Su.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(Ji),l=yi.dot(Su),c=Ji.dot(Ji),h=Ji.dot(Su),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Eu.setScalar(0),Au.setScalar(0),Cu.setScalar(0),Eu.fromBufferAttribute(t,e),Au.fromBufferAttribute(t,n),Cu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Eu,s.x),o.addScaledVector(Au,s.y),o.addScaledVector(Cu,s.z),o}static isFrontFacing(t,e,n,i){return yi.subVectors(n,e),Ji.subVectors(t,e),yi.cross(Ji).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;io.subVectors(i,n),ro.subVectors(s,n),bu.subVectors(t,n);let l=io.dot(bu),c=ro.dot(bu);if(l<=0&&c<=0)return e.copy(n);wu.subVectors(t,i);let h=io.dot(wu),u=ro.dot(wu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(io,o);Tu.subVectors(t,s);let d=io.dot(Tu),p=ro.dot(Tu);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ro,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return cg.subVectors(s,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(cg,a);let m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(io,o).addScaledVector(ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Ru(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=yd(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ru(o,s,t+1/3),this.g=Ru(o,s,t),this.b=Ru(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=l0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return he.fromWorkingColorSpace(_n.copy(this),t),Math.round(an(_n.r*255,0,255))*65536+Math.round(an(_n.g*255,0,255))*256+Math.round(an(_n.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(_n.copy(this),e);let n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Rn){he.fromWorkingColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,i=_n.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tr),this.setHSL(Tr.h+t,Tr.s+e,Tr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tr),t.getHSL(Ol);let n=va(Tr.h,Ol.h,e),i=va(Tr.s,Ol.s,e),s=va(Tr.l,Ol.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Qt;Qt.NAMES=l0;var dy=0,Dr=class extends Ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=ws(),this.name="",this.blending=fo,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==Pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gu&&(n.blendSrc=this.blendSrc),this.blendDst!==Wu&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bo=class extends Dr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new k,Fl=new Pt,ui=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qm,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fl.fromBufferAttribute(this,e),Fl.applyMatrix3(t),this.setXY(e,Fl.x,Fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=co(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=co(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=co(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=co(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=co(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array),s=An(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qm&&(t.usage=this.usage),t}};var dc=class extends ui{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pc=class extends ui{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends ui{constructor(t,e,n){super(new Float32Array(t),e,n)}},py=0,ci=new Ne,Pu=new Ln,so=new k,Kn=new xs,ma=new xs,en=new k,Dn=class r extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?pc:dc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,n){return ci.makeTranslation(t,e,n),this.applyMatrix4(ci),this}scale(t,e,n){return ci.makeScale(t,e,n),this.applyMatrix4(ci),this}lookAt(t){return Pu.lookAt(t),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Kn.min,ma.min),Kn.expandByPoint(en),en.addVectors(Kn.max,ma.max),Kn.expandByPoint(en)):(Kn.expandByPoint(ma.min),Kn.expandByPoint(ma.max))}Kn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(t,c),en.add(so)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;let c=new k,h=new k,u=new k,f=new Pt,d=new Pt,p=new Pt,_=new k,g=new k;function m(R,M,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[R].add(_),a[M].add(_),a[v].add(_),l[R].add(g),l[M].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){let v=S[R],I=v.start,U=v.count;for(let F=I,z=I+U;F<z;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new k,x=new k,C=new k,E=new k;function w(R){C.fromBufferAttribute(i,R),E.copy(C);let M=a[R];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(E,M);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,M=S.length;R<M;++R){let v=S[R],I=v.start,U=v.count;for(let F=I,z=I+U;F<z;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ui(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hg=new Ne,as=new uc,Bl=new So,ug=new k,zl=new k,kl=new k,Vl=new k,Iu=new k,Hl=new k,fg=new k,Gl=new k,de=class extends Ln{constructor(t=new Dn,e=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Iu.fromBufferAttribute(u,t),o?Hl.addScaledVector(Iu,h):Hl.addScaledVector(Iu.sub(e),h))}e.add(Hl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),as.copy(t.ray).recast(t.near),!(Bl.containsPoint(as.origin)===!1&&(as.intersectSphere(Bl,ug)===null||as.origin.distanceToSquared(ug)>(t.far-t.near)**2))&&(hg.copy(s).invert(),as.copy(t.ray).applyMatrix4(hg),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,C=y;x<C;x+=3){let E=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);i=Wl(this,m,t,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let S=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=Wl(this,o,t,n,c,h,u,S,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,C=y;x<C;x+=3){let E=x,w=x+1,R=x+2;i=Wl(this,m,t,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let S=g,y=g+1,x=g+2;i=Wl(this,o,t,n,c,h,u,S,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function my(r,t,e,n,i,s,o,a){let l;if(t.side===zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Pr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Gl);return c<e.near||c>e.far?null:{distance:c,point:Gl.clone(),object:r}}function Wl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,zl),r.getVertexPosition(l,kl),r.getVertexPosition(c,Vl);let h=my(r,t,e,n,zl,kl,Vl,fg);if(h){let u=new k;ds.getBarycoord(fg,zl,kl,Vl,u),i&&(h.uv=ds.getInterpolatedAttribute(i,a,l,c,u,new Pt)),s&&(h.uv1=ds.getInterpolatedAttribute(s,a,l,c,u,new Pt)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};ds.getNormal(zl,kl,Vl,f.normal),h.face=f,h.barycoord=u}return h}var vs=class r extends Dn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function p(_,g,m,S,y,x,C,E,w,R,M){let v=x/w,I=C/R,U=x/2,F=C/2,z=E/2,J=w+1,X=R+1,K=0,q=0,et=new k;for(let L=0;L<X;L++){let ct=L*I-F;for(let ut=0;ut<J;ut++){let It=ut*v-U;et[_]=It*S,et[g]=ct*y,et[m]=z,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[m]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(ut/w),u.push(1-L/R),K+=1}}for(let L=0;L<R;L++)for(let ct=0;ct<w;ct++){let ut=f+ct+J*L,It=f+ct+J*(L+1),D=f+(ct+1)+J*(L+1),V=f+(ct+1)+J*L;l.push(ut,It,V),l.push(It,D,V),q+=6}a.addGroup(d,q,M),d+=q,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wo(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Cn(r){let t={};for(let e=0;e<r.length;e++){let n=wo(r[e]);for(let i in n)t[i]=n[i]}return t}function gy(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function c0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var _y={clone:wo,merge:Cn},xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends Dr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mc=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=er}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Er=new k,dg=new Pt,pg=new Pt,Pn=class extends mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,e){return this.getViewBounds(t,dg,pg),e.subVectors(pg,dg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},oo=-90,ao=1,Df=class extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pn(oo,ao,t,e);i.layers=this.layers,this.add(i);let s=new Pn(oo,ao,t,e);s.layers=this.layers,this.add(s);let o=new Pn(oo,ao,t,e);o.layers=this.layers,this.add(o);let a=new Pn(oo,ao,t,e);a.layers=this.layers,this.add(a);let l=new Pn(oo,ao,t,e);l.layers=this.layers,this.add(l);let c=new Pn(oo,ao,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gc=class extends kn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Uf=class extends rr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vs(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Cr});s.uniforms.tEquirect.value=e;let o=new de(i,s),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=Li),new Df(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Lu=new k,yy=new k,My=new ee,ji=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lu.subVectors(n,e).cross(yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||My.getNormalMatrix(t),i=this.coplanarPoint(Lu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new So,Xl=new k,Ea=class{constructor(t=new ji,e=new ji,n=new ji,i=new ji,s=new ji,o=new ji){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=er){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],S=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,g-d,x-m).normalize(),n[1].setComponents(l+s,f+c,g+d,x+m).normalize(),n[2].setComponents(l+o,f+h,g+p,x+S).normalize(),n[3].setComponents(l-o,f-h,g-p,x-S).normalize(),n[4].setComponents(l-a,f-u,g-_,x-y).normalize(),e===er)n[5].setComponents(l+a,f+u,g+_,x+y).normalize();else if(e===ac)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Xl.x=i.normal.x>0?t.max.x:t.min.x,Xl.y=i.normal.y>0?t.max.y:t.min.y,Xl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function h0(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Sy(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ur=class r extends Dn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let S=m*f-o;for(let y=0;y<c;y++){let x=y*u-s;p.push(x,-S,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let y=S+c*m,x=S+c*(m+1),C=S+1+c*(m+1),E=S+1+c*m;d.push(y,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},by=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:by,alphahash_pars_fragment:wy,alphamap_fragment:Ty,alphamap_pars_fragment:Ey,alphatest_fragment:Ay,alphatest_pars_fragment:Cy,aomap_fragment:Ry,aomap_pars_fragment:Py,batching_pars_vertex:Iy,batching_vertex:Ly,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ny,iridescence_fragment:Oy,bumpmap_pars_fragment:Fy,clipping_planes_fragment:By,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Vy,color_fragment:Hy,color_pars_fragment:Gy,color_pars_vertex:Wy,color_vertex:Xy,common:qy,cube_uv_reflection_fragment:Yy,defaultnormal_vertex:Zy,displacementmap_pars_vertex:$y,displacementmap_vertex:Jy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Qy,colorspace_fragment:jy,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:m1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:l1,fog_pars_fragment:c1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:u1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:d1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:_1,lights_phong_fragment:x1,lights_phong_pars_fragment:v1,lights_physical_fragment:y1,lights_physical_pars_fragment:M1,lights_fragment_begin:S1,lights_fragment_maps:b1,lights_fragment_end:w1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:C1,map_fragment:R1,map_pars_fragment:P1,map_particle_fragment:I1,map_particle_pars_fragment:L1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:N1,morphcolor_vertex:O1,morphnormal_vertex:F1,morphtarget_pars_vertex:B1,morphtarget_vertex:z1,normal_fragment_begin:k1,normal_fragment_maps:V1,normal_pars_fragment:H1,normal_pars_vertex:G1,normal_vertex:W1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:$1,opaque_fragment:J1,packing:K1,premultiplied_alpha_fragment:Q1,project_vertex:j1,dithering_fragment:tM,dithering_pars_fragment:eM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:sM,shadowmap_vertex:oM,shadowmask_pars_fragment:aM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:hM,skinnormal_vertex:uM,specularmap_fragment:fM,specularmap_pars_fragment:dM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:_M,uv_pars_fragment:xM,uv_pars_vertex:vM,uv_vertex:yM,worldpos_vertex:MM,background_vert:SM,background_frag:bM,backgroundCube_vert:wM,backgroundCube_frag:TM,cube_vert:EM,cube_frag:AM,depth_vert:CM,depth_frag:RM,distanceRGBA_vert:PM,distanceRGBA_frag:IM,equirect_vert:LM,equirect_frag:DM,linedashed_vert:UM,linedashed_frag:NM,meshbasic_vert:OM,meshbasic_frag:FM,meshlambert_vert:BM,meshlambert_frag:zM,meshmatcap_vert:kM,meshmatcap_frag:VM,meshnormal_vert:HM,meshnormal_frag:GM,meshphong_vert:WM,meshphong_frag:XM,meshphysical_vert:qM,meshphysical_frag:YM,meshtoon_vert:ZM,meshtoon_frag:$M,points_vert:JM,points_frag:KM,shadow_vert:QM,shadow_frag:jM,sprite_vert:tS,sprite_frag:eS},Ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Ii={basic:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Cn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Cn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Cn([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Cn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Cn([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Cn([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Cn([Ct.common,Ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Cn([Ct.lights,Ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ii.physical={uniforms:Cn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var ql={r:0,b:0,g:0},cs=new sr,nS=new Ne;function iS(r,t,e,n,i,s,o){let a=new Qt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function p(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1,x=p(S);x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(S,y){let x=p(y);x&&(x.isCubeTexture||x.mapping===Oc)?(h===void 0&&(h=new de(new vs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:wo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(cs)),h.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Ur(2,2),new Di({name:"BackgroundMaterial",uniforms:wo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(ql,c0(r)),n.buffers.color.setClear(ql.r,ql.g,ql.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:g}}function rS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(v,I,U,F,z){let J=!1,X=u(F,U,I);s!==X&&(s=X,c(s.object)),J=d(v,F,U,z),J&&p(v,F,U,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(v,I,U,F),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,U){let F=U.wireframe===!0,z=n[v.id];z===void 0&&(z={},n[v.id]=z);let J=z[I.id];J===void 0&&(J={},z[I.id]=J);let X=J[F];return X===void 0&&(X=f(l()),J[F]=X),X}function f(v){let I=[],U=[],F=[];for(let z=0;z<e;z++)I[z]=0,U[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,I,U,F){let z=s.attributes,J=I.attributes,X=0,K=U.getAttributes();for(let q in K)if(K[q].location>=0){let L=z[q],ct=J[q];if(ct===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),L===void 0||L.attribute!==ct||ct&&L.data!==ct.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function p(v,I,U,F){let z={},J=I.attributes,X=0,K=U.getAttributes();for(let q in K)if(K[q].location>=0){let L=J[q];L===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));let ct={};ct.attribute=L,L&&L.data&&(ct.data=L.data),z[q]=ct,X++}s.attributes=z,s.attributesNum=X,s.index=F}function _(){let v=s.newAttributes;for(let I=0,U=v.length;I<U;I++)v[I]=0}function g(v){m(v,0)}function m(v,I){let U=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;U[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),z[v]!==I&&(r.vertexAttribDivisor(v,I),z[v]=I)}function S(){let v=s.newAttributes,I=s.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==v[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function y(v,I,U,F,z,J,X){X===!0?r.vertexAttribIPointer(v,I,U,z,J):r.vertexAttribPointer(v,I,U,F,z,J)}function x(v,I,U,F){_();let z=F.attributes,J=U.getAttributes(),X=I.defaultAttributeValues;for(let K in J){let q=J[K];if(q.location>=0){let et=z[K];if(et===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let L=et.normalized,ct=et.itemSize,ut=t.get(et);if(ut===void 0)continue;let It=ut.buffer,D=ut.type,V=ut.bytesPerElement,H=D===r.INT||D===r.UNSIGNED_INT||et.gpuType===pd;if(et.isInterleavedBufferAttribute){let G=et.data,ht=G.stride,at=et.offset;if(G.isInstancedInterleavedBuffer){for(let lt=0;lt<q.locationSize;lt++)m(q.location+lt,G.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let lt=0;lt<q.locationSize;lt++)g(q.location+lt);r.bindBuffer(r.ARRAY_BUFFER,It);for(let lt=0;lt<q.locationSize;lt++)y(q.location+lt,ct/q.locationSize,D,L,ht*V,(at+ct/q.locationSize*lt)*V,H)}else{if(et.isInstancedBufferAttribute){for(let G=0;G<q.locationSize;G++)m(q.location+G,et.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let G=0;G<q.locationSize;G++)g(q.location+G);r.bindBuffer(r.ARRAY_BUFFER,It);for(let G=0;G<q.locationSize;G++)y(q.location+G,ct/q.locationSize,D,L,ct*V,ct/q.locationSize*G*V,H)}}else if(X!==void 0){let L=X[K];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(q.location,L);break;case 3:r.vertexAttrib3fv(q.location,L);break;case 4:r.vertexAttrib4fv(q.location,L);break;default:r.vertexAttrib1fv(q.location,L)}}}}S()}function C(){R();for(let v in n){let I=n[v];for(let U in I){let F=I[U];for(let z in F)h(F[z].object),delete F[z];delete I[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let U in I){let F=I[U];for(let z in F)h(F[z].object),delete F[z];delete I[U]}delete n[v.id]}function w(v){for(let I in n){let U=n[I];if(U[v.id]===void 0)continue;let F=U[v.id];for(let z in F)h(F[z].object),delete F[z];delete U[v.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function sS(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Mi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===Ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ir&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tr&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function aS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ji,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{let S=s?0:n,y=S*4,x=m.clippingState||null;l.value=x,x=h(p,f,y,d);for(let C=0;C!==y;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function lS(r){let t=new WeakMap;function e(o,a){return a===Qu?o.mapping=xo:a===ju&&(o.mapping=vo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qu||a===ju)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Uf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var _c=class extends mc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ho=4,mg=[.125,.215,.35,.446,.526,.582],ps=20,Du=new _c,gg=new Qt,Uu=null,Nu=0,Ou=0,Fu=!1,us=(1+Math.sqrt(5))/2,lo=1/us,_g=[new k(-us,lo,0),new k(us,lo,0),new k(-lo,0,us),new k(lo,0,us),new k(0,us,-lo),new k(0,us,lo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uu,Nu,Ou),this._renderer.xr.enabled=Fu,t.scissorTest=!1,Yl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ua,format:Mi,colorSpace:Ao,depthBuffer:!1},i=xg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cS(s)),this._blurMaterial=hS(s,t,e)}return i}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Du)}_sceneToCubeUV(t,e,n,i){let a=new Pn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gg),h.toneMapping=Rr,h.autoClear=!1;let d=new bo({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),p=new de(new vs,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(gg),_=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Yl(i,S*y,m>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xo||t.mapping===vo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Yl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Du)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_g[(i-s-1)%_g.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ps-1),_=s/p,g=isFinite(s)?1+Math.floor(h*_):ps;g>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ps}`);let m=[],S=0;for(let w=0;w<ps;++w){let R=w/_,M=Math.exp(-R*R/2);m.push(M),w===0?S+=M:w<g&&(S+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;let x=this._sizeLods[i],C=3*x*(i>y-ho?i-y+ho:0),E=4*(this._cubeSize-x);Yl(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Du)}};function cS(r){let t=[],e=[],n=[],i=r,s=r-ho+1+mg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ho?l=mg[o-r+ho-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,S=new Float32Array(_*p*d),y=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,R=E>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(M,_*p*E),y.set(f,g*p*E);let v=[E,E,E,E,E,E];x.set(v,m*p*E)}let C=new Dn;C.setAttribute("position",new ui(S,_)),C.setAttribute("uv",new ui(y,g)),C.setAttribute("faceIndex",new ui(x,m)),t.push(C),i>ho&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xg(r,t,e){let n=new rr(r,t,e);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yl(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function hS(r,t,e){let n=new Float32Array(ps),i=new k(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function vg(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function yg(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qu||l===ju,h=l===xo||l===vo;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new xc(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ga("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dS(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let y=0,x=S.length;y<x;y+=3){let C=S[y+0],E=S[y+1],w=S[y+2];f.push(C,E,E,w,w,C)}}else if(p!==void 0){let S=p.array;_=p.version;for(let y=0,x=S.length/3-1;y<x;y+=3){let C=y+0,E=y+1,w=y+2;f.push(C,E,E,w,w,C)}}else return;let g=new(a0(f)?pc:dc)(f,1);g.version=_;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function pS(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let m=0;for(let S=0;S<p;S++)m+=d[S]*_[S];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gS(r,t,e){let n=new WeakMap,i=new ke;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*u),w=new hc(E,x,C,u);w.type=tr,w.needsUpdate=!0;let R=y*4;for(let v=0;v<u;v++){let I=g[v],U=m[v],F=S[v],z=x*C*4*v;for(let J=0;J<I.count;J++){let X=J*R;d===!0&&(i.fromBufferAttribute(I,J),E[z+X+0]=i.x,E[z+X+1]=i.y,E[z+X+2]=i.z,E[z+X+3]=0),p===!0&&(i.fromBufferAttribute(U,J),E[z+X+4]=i.x,E[z+X+5]=i.y,E[z+X+6]=i.z,E[z+X+7]=0),_===!0&&(i.fromBufferAttribute(F,J),E[z+X+8]=i.x,E[z+X+9]=i.y,E[z+X+10]=i.z,E[z+X+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Pt(x,C)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function _S(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var vc=class extends kn{constructor(t,e,n,i,s,o,a,l,c,h=po){if(h!==po&&h!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===po&&(n=_s),n===void 0&&h===Mo&&(n=yo),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},u0=new kn,Mg=new vc(1,1),f0=new hc,d0=new Lf,p0=new gc,Sg=[],bg=[],wg=new Float32Array(16),Tg=new Float32Array(9),Eg=new Float32Array(4);function Co(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Sg[i];if(s===void 0&&(s=new Float32Array(i),Sg[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function kc(r,t){let e=bg[t];e===void 0&&(e=new Int32Array(t),bg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function xS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function yS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function MS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function SS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Eg.set(n),r.uniformMatrix2fv(this.addr,!1,Eg),Ke(e,n)}}function bS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Tg.set(n),r.uniformMatrix3fv(this.addr,!1,Tg),Ke(e,n)}}function wS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;wg.set(n),r.uniformMatrix4fv(this.addr,!1,wg),Ke(e,n)}}function TS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ES(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function AS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function CS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function RS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function PS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function IS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function LS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function DS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mg.compareFunction=o0,s=Mg):s=u0,e.setTexture2D(t||s,i)}function US(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||d0,i)}function NS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||p0,i)}function OS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||f0,i)}function FS(r){switch(r){case 5126:return xS;case 35664:return vS;case 35665:return yS;case 35666:return MS;case 35674:return SS;case 35675:return bS;case 35676:return wS;case 5124:case 35670:return TS;case 35667:case 35671:return ES;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return PS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(r,t){r.uniform1fv(this.addr,t)}function zS(r,t){let e=Co(t,this.size,2);r.uniform2fv(this.addr,e)}function kS(r,t){let e=Co(t,this.size,3);r.uniform3fv(this.addr,e)}function VS(r,t){let e=Co(t,this.size,4);r.uniform4fv(this.addr,e)}function HS(r,t){let e=Co(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function GS(r,t){let e=Co(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function WS(r,t){let e=Co(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function XS(r,t){r.uniform1iv(this.addr,t)}function qS(r,t){r.uniform2iv(this.addr,t)}function YS(r,t){r.uniform3iv(this.addr,t)}function ZS(r,t){r.uniform4iv(this.addr,t)}function $S(r,t){r.uniform1uiv(this.addr,t)}function JS(r,t){r.uniform2uiv(this.addr,t)}function KS(r,t){r.uniform3uiv(this.addr,t)}function QS(r,t){r.uniform4uiv(this.addr,t)}function jS(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||u0,s[o])}function tb(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||d0,s[o])}function eb(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||p0,s[o])}function nb(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||f0,s[o])}function ib(r){switch(r){case 5126:return BS;case 35664:return zS;case 35665:return kS;case 35666:return VS;case 35674:return HS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return ZS;case 5125:return $S;case 36294:return JS;case 36295:return KS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}var Nf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FS(e.type)}},Of=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ib(e.type)}},Ff=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function Ag(r,t){r.seq.push(t),r.map[t.id]=t}function rb(r,t,e){let n=r.name,i=n.length;for(Bu.lastIndex=0;;){let s=Bu.exec(n),o=Bu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ag(e,c===void 0?new Nf(a,r,t):new Of(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Ff(a),Ag(e,u)),e=u}}}var go=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);rb(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Cg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var sb=37297,ob=0;function ab(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Rg=new ee;function lb(r){he._getMatrix(Rg,he.workingColorSpace,r);let t=`mat3( ${Rg.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Bc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Pg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ab(r.getShaderSource(t),o)}else return i}function cb(r,t){let e=lb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hb(r,t){let e;switch(t){case yv:e="Linear";break;case Mv:e="Reinhard";break;case Sv:e="Cineon";break;case bv:e="ACESFilmic";break;case Tv:e="AgX";break;case Ev:e="Neutral";break;case wv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zl=new k;function ub(){he.getLuminanceCoefficients(Zl);let r=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function db(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function _a(r){return r!==""}function Ig(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(r){return r.replace(mb,_b)}var gb=new Map;function _b(r,t){let e=ne[t];if(e===void 0){let n=gb.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bf(e)}var xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(r){return r.replace(xb,vb)}function vb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ug(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yg?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(t="SHADOWMAP_TYPE_VSM"),t}function Mb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case vo:t="ENVMAP_TYPE_CUBE";break;case Oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vo:t="ENVMAP_MODE_REFRACTION";break}return t}function bb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zg:t="ENVMAP_BLENDING_MULTIPLY";break;case xv:t="ENVMAP_BLENDING_MIX";break;case vv:t="ENVMAP_BLENDING_ADD";break}return t}function wb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tb(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yb(e),c=Mb(e),h=Sb(e),u=bb(e),f=wb(e),d=fb(e),p=db(s),_=i.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_a).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(g=[Ug(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Ug(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rr?"#define TONE_MAPPING":"",e.toneMapping!==Rr?ne.tonemapping_pars_fragment:"",e.toneMapping!==Rr?hb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,cb("linearToOutputTexel",e.outputColorSpace),ub(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),o=Bf(o),o=Ig(o,e),o=Lg(o,e),a=Bf(a),a=Ig(a,e),a=Lg(a,e),o=Dg(o),a=Dg(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=S+g+o,x=S+m+a,C=Cg(i,i.VERTEX_SHADER,y),E=Cg(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(E).trim(),J=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,E);else{let K=Pg(i,C,"vertex"),q=Pg(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+K+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||z==="")&&(X=!1);X&&(I.diagnostics={runnable:J,programLog:U,vertexShader:{log:F,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(C),i.deleteShader(E),R=new go(i,_),M=pb(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,sb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ob++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var Eb=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kf(t),e.set(t,n)),n}},kf=class{constructor(t){this.id=Eb++,this.code=t,this.usedTimes=0}};function Ab(r,t,e,n,i,s,o){let a=new fc,l=new zf,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,v,I,U,F){let z=U.fog,J=F.geometry,X=M.isMeshStandardMaterial?U.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),q=K&&K.mapping===Oc?K.image.height:null,et=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let L=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=L!==void 0?L.length:0,ut=0;J.morphAttributes.position!==void 0&&(ut=1),J.morphAttributes.normal!==void 0&&(ut=2),J.morphAttributes.color!==void 0&&(ut=3);let It,D,V,H;if(et){let Rt=Ii[et];It=Rt.vertexShader,D=Rt.fragmentShader}else It=M.vertexShader,D=M.fragmentShader,l.update(M),V=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);let G=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),at=F.isInstancedMesh===!0,lt=F.isBatchedMesh===!0,wt=!!M.map,j=!!M.matcap,Q=!!K,P=!!M.aoMap,dt=!!M.lightMap,st=!!M.bumpMap,O=!!M.normalMap,ft=!!M.displacementMap,Nt=!!M.emissiveMap,St=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,Y=M.clearcoat>0,nt=M.dispersion>0,rt=M.iridescence>0,it=M.sheen>0,xt=M.transmission>0,gt=b&&!!M.anisotropyMap,yt=Y&&!!M.clearcoatMap,Ht=Y&&!!M.clearcoatNormalMap,pt=Y&&!!M.clearcoatRoughnessMap,vt=rt&&!!M.iridescenceMap,Gt=rt&&!!M.iridescenceThicknessMap,Vt=it&&!!M.sheenColorMap,Lt=it&&!!M.sheenRoughnessMap,jt=!!M.specularMap,Xt=!!M.specularColorMap,ce=!!M.specularIntensityMap,N=xt&&!!M.transmissionMap,bt=xt&&!!M.thicknessMap,tt=!!M.gradientMap,ot=!!M.alphaMap,Mt=M.alphaTest>0,Tt=!!M.alphaHash,qt=!!M.extensions,ue=Rr;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ue=r.toneMapping);let Oe={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:It,fragmentShader:D,defines:M.defines,customVertexShaderID:V,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:lt,batchingColor:lt&&F._colorsTexture!==null,instancing:at,instancingColor:at&&F.instanceColor!==null,instancingMorph:at&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ao,alphaToCoverage:!!M.alphaToCoverage,map:wt,matcap:j,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:q,aoMap:P,lightMap:dt,bumpMap:st,normalMap:O,displacementMap:f&&ft,emissiveMap:Nt,normalMapObjectSpace:O&&M.normalMapType===Pv,normalMapTangentSpace:O&&M.normalMapType===s0,metalnessMap:St,roughnessMap:A,anisotropy:b,anisotropyMap:gt,clearcoat:Y,clearcoatMap:yt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:pt,dispersion:nt,iridescence:rt,iridescenceMap:vt,iridescenceThicknessMap:Gt,sheen:it,sheenColorMap:Vt,sheenRoughnessMap:Lt,specularMap:jt,specularColorMap:Xt,specularIntensityMap:ce,transmission:xt,transmissionMap:N,thicknessMap:bt,gradientMap:tt,opaque:M.transparent===!1&&M.blending===fo&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:Mt,alphaHash:Tt,combine:M.combine,mapUv:wt&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:dt&&_(M.lightMap.channel),bumpMapUv:st&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:ft&&_(M.displacementMap.channel),emissiveMapUv:Nt&&_(M.emissiveMap.channel),metalnessMapUv:St&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:gt&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(M.sheenRoughnessMap.channel),specularMapUv:jt&&_(M.specularMap.channel),specularColorMapUv:Xt&&_(M.specularColorMap.channel),specularIntensityMapUv:ce&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:bt&&_(M.thicknessMap.channel),alphaMapUv:ot&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(O||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(wt||ot),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ut,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===ve,decodeVideoTextureEmissive:Nt&&M.emissiveMap.isVideoTexture===!0&&he.getTransfer(M.emissiveMap.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&M.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(v,M),y(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let v=p[M.type],I;if(v){let U=Ii[v];I=_y.clone(U.uniforms)}else I=M.uniforms;return I}function C(M,v){let I;for(let U=0,F=h.length;U<F;U++){let z=h[U];if(z.cacheKey===v){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Tb(r,v,M,s),h.push(I)),I}function E(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function Cb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Rb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ng(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Og(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Rb),n.length>1&&n.sort(f||Ng),i.length>1&&i.sort(f||Ng)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Pb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Og,r.set(n,[o])):i>=s.length?(o=new Og,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ib(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Qt};break;case"SpotLight":e={position:new k,direction:new k,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function Lb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Db=0;function Ub(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Nb(r){let t=new Ib,e=Lb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new Ne,o=new Ne;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,S=0,y=0,x=0,C=0,E=0,w=0;c.sort(Ub);for(let M=0,v=c.length;M<v;M++){let I=c[M],U=I.color,F=I.intensity,z=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*F,u+=U.g*F,f+=U.b*F;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],F);w++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,q=e.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=X,d++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(F),X.distance=z,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[_]=X;let K=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,K.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=K.matrix,I.castShadow){let q=e.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=X,g++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let K=I.shadow,q=e.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=X,p++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(F),X.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[m]=X,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==S||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=S,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=w,n.version=Db++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let y=c[m];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Fg(r){let t=new Nb(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ob(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Fg(r),t.set(i,[a])):s>=o.length?(a=new Fg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vf=class extends Dr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hf=class extends Dr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zb(r,t,e){let n=new Ea,i=new Pt,s=new Pt,o=new ke,a=new Vf({depthPacking:Rv}),l=new Hf,c={},h=e.maxTextureSize,u={[Pr]:zn,[zn]:Pr,[hi]:hi},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Fb,fragmentShader:Bb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Dn;p.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let m=this.type;this.render=function(E,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let M=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=m!==Qi&&this.type===Qi,z=m===Qi&&this.type!==Qi;for(let J=0,X=E.length;J<X;J++){let K=E[J],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let et=q.getFrameExtents();if(i.multiply(et),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,q.mapSize.y=s.y)),q.map===null||F===!0||z===!0){let ct=this.type!==Qi?{minFilter:In,magFilter:In}:{};q.map!==null&&q.map.dispose(),q.map=new rr(i.x,i.y,ct),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let L=q.getViewportCount();for(let ct=0;ct<L;ct++){let ut=q.getViewport(ct);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),U.viewport(o),q.updateMatrices(K,ct),n=q.getFrustum(),x(w,R,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Qi&&S(q,R),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,v,I)};function S(E,w){let R=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,R,d,_,null)}function y(E,w,R,M){let v=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)v=I;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=v.uuid,F=w.uuid,z=c[U];z===void 0&&(z={},c[U]=z);let J=z[F];J===void 0&&(J=v.clone(),z[F]=J,w.addEventListener("dispose",C)),v=J}if(v.visible=w.visible,v.wireframe=w.wireframe,M===Qi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=r.properties.get(v);U.light=R}return v}function x(E,w,R,M,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Qi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),z=E.material;if(Array.isArray(z)){let J=F.groups;for(let X=0,K=J.length;X<K;X++){let q=J[X],et=z[q.materialIndex];if(et&&et.visible){let L=y(E,et,M,v);E.onBeforeShadow(r,E,w,R,F,L,q),r.renderBufferDirect(R,null,F,L,E,q),E.onAfterShadow(r,E,w,R,F,L,q)}}}else if(z.visible){let J=y(E,z,M,v);E.onBeforeShadow(r,E,w,R,F,J,null),r.renderBufferDirect(R,null,F,J,E,null),E.onAfterShadow(r,E,w,R,F,J,null)}}let U=E.children;for(let F=0,z=U.length;F<z;F++)x(U[F],w,R,M,v)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let M=c[R],v=E.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var kb={[Xu]:qu,[Yu]:Ju,[Zu]:Ku,[_o]:$u,[qu]:Xu,[Ju]:Yu,[Ku]:Zu,[$u]:_o};function Vb(r,t){function e(){let N=!1,bt=new ke,tt=null,ot=new ke(0,0,0,0);return{setMask:function(Mt){tt!==Mt&&!N&&(r.colorMask(Mt,Mt,Mt,Mt),tt=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,Tt,qt,ue,Oe){Oe===!0&&(Mt*=ue,Tt*=ue,qt*=ue),bt.set(Mt,Tt,qt,ue),ot.equals(bt)===!1&&(r.clearColor(Mt,Tt,qt,ue),ot.copy(bt))},reset:function(){N=!1,tt=null,ot.set(-1,0,0,0)}}}function n(){let N=!1,bt=!1,tt=null,ot=null,Mt=null;return{setReversed:function(Tt){if(bt!==Tt){let qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let ue=Mt;Mt=null,this.setClear(ue)}bt=Tt},getReversed:function(){return bt},setTest:function(Tt){Tt?G(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(Tt){tt!==Tt&&!N&&(r.depthMask(Tt),tt=Tt)},setFunc:function(Tt){if(bt&&(Tt=kb[Tt]),ot!==Tt){switch(Tt){case Xu:r.depthFunc(r.NEVER);break;case qu:r.depthFunc(r.ALWAYS);break;case Yu:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Zu:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ju:r.depthFunc(r.GREATER);break;case Ku:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=Tt}},setLocked:function(Tt){N=Tt},setClear:function(Tt){Mt!==Tt&&(bt&&(Tt=1-Tt),r.clearDepth(Tt),Mt=Tt)},reset:function(){N=!1,tt=null,ot=null,Mt=null,bt=!1}}}function i(){let N=!1,bt=null,tt=null,ot=null,Mt=null,Tt=null,qt=null,ue=null,Oe=null;return{setTest:function(Rt){N||(Rt?G(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Rt){bt!==Rt&&!N&&(r.stencilMask(Rt),bt=Rt)},setFunc:function(Rt,Ft,te){(tt!==Rt||ot!==Ft||Mt!==te)&&(r.stencilFunc(Rt,Ft,te),tt=Rt,ot=Ft,Mt=te)},setOp:function(Rt,Ft,te){(Tt!==Rt||qt!==Ft||ue!==te)&&(r.stencilOp(Rt,Ft,te),Tt=Rt,qt=Ft,ue=te)},setLocked:function(Rt){N=Rt},setClear:function(Rt){Oe!==Rt&&(r.clearStencil(Rt),Oe=Rt)},reset:function(){N=!1,bt=null,tt=null,ot=null,Mt=null,Tt=null,qt=null,ue=null,Oe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,S=null,y=null,x=null,C=null,E=null,w=new Qt(0,0,0),R=0,M=!1,v=null,I=null,U=null,F=null,z=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=K>=2);let et=null,L={},ct=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),It=new ke().fromArray(ct),D=new ke().fromArray(ut);function V(N,bt,tt,ot){let Mt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(N,Tt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<tt;qt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(bt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return Tt}let H={};H[r.TEXTURE_2D]=V(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=V(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[r.TEXTURE_2D_ARRAY]=V(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=V(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(r.DEPTH_TEST),o.setFunc(_o),st(!1),O(Bm),G(r.CULL_FACE),P(Cr);function G(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function ht(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function at(N,bt){return u[N]!==bt?(r.bindFramebuffer(N,bt),u[N]=bt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=bt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function lt(N,bt){let tt=d,ot=!1;if(N){tt=f.get(bt),tt===void 0&&(tt=[],f.set(bt,tt));let Mt=N.textures;if(tt.length!==Mt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,qt=Mt.length;Tt<qt;Tt++)tt[Tt]=r.COLOR_ATTACHMENT0+Tt;tt.length=Mt.length,ot=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ot=!0);ot&&r.drawBuffers(tt)}function wt(N){return p!==N?(r.useProgram(N),p=N,!0):!1}let j={[fs]:r.FUNC_ADD,[ev]:r.FUNC_SUBTRACT,[nv]:r.FUNC_REVERSE_SUBTRACT};j[iv]=r.MIN,j[rv]=r.MAX;let Q={[sv]:r.ZERO,[ov]:r.ONE,[av]:r.SRC_COLOR,[Gu]:r.SRC_ALPHA,[dv]:r.SRC_ALPHA_SATURATE,[uv]:r.DST_COLOR,[cv]:r.DST_ALPHA,[lv]:r.ONE_MINUS_SRC_COLOR,[Wu]:r.ONE_MINUS_SRC_ALPHA,[fv]:r.ONE_MINUS_DST_COLOR,[hv]:r.ONE_MINUS_DST_ALPHA,[pv]:r.CONSTANT_COLOR,[mv]:r.ONE_MINUS_CONSTANT_COLOR,[gv]:r.CONSTANT_ALPHA,[_v]:r.ONE_MINUS_CONSTANT_ALPHA};function P(N,bt,tt,ot,Mt,Tt,qt,ue,Oe,Rt){if(N===Cr){_===!0&&(ht(r.BLEND),_=!1);return}if(_===!1&&(G(r.BLEND),_=!0),N!==tv){if(N!==g||Rt!==M){if((m!==fs||x!==fs)&&(r.blendEquation(r.FUNC_ADD),m=fs,x=fs),Rt)switch(N){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zm:r.blendFunc(r.ONE,r.ONE);break;case km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,y=null,C=null,E=null,w.set(0,0,0),R=0,g=N,M=Rt}return}Mt=Mt||bt,Tt=Tt||tt,qt=qt||ot,(bt!==m||Mt!==x)&&(r.blendEquationSeparate(j[bt],j[Mt]),m=bt,x=Mt),(tt!==S||ot!==y||Tt!==C||qt!==E)&&(r.blendFuncSeparate(Q[tt],Q[ot],Q[Tt],Q[qt]),S=tt,y=ot,C=Tt,E=qt),(ue.equals(w)===!1||Oe!==R)&&(r.blendColor(ue.r,ue.g,ue.b,Oe),w.copy(ue),R=Oe),g=N,M=!1}function dt(N,bt){N.side===hi?ht(r.CULL_FACE):G(r.CULL_FACE);let tt=N.side===zn;bt&&(tt=!tt),st(tt),N.blending===fo&&N.transparent===!1?P(Cr):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ot=N.stencilWrite;a.setTest(ot),ot&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?G(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){v!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),v=N)}function O(N){N!==Kx?(G(r.CULL_FACE),N!==I&&(N===Bm?r.cullFace(r.BACK):N===Qx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),I=N}function ft(N){N!==U&&(X&&r.lineWidth(N),U=N)}function Nt(N,bt,tt){N?(G(r.POLYGON_OFFSET_FILL),(F!==bt||z!==tt)&&(r.polygonOffset(bt,tt),F=bt,z=tt)):ht(r.POLYGON_OFFSET_FILL)}function St(N){N?G(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function A(N){N===void 0&&(N=r.TEXTURE0+J-1),et!==N&&(r.activeTexture(N),et=N)}function b(N,bt,tt){tt===void 0&&(et===null?tt=r.TEXTURE0+J-1:tt=et);let ot=L[tt];ot===void 0&&(ot={type:void 0,texture:void 0},L[tt]=ot),(ot.type!==N||ot.texture!==bt)&&(et!==tt&&(r.activeTexture(tt),et=tt),r.bindTexture(N,bt||H[N]),ot.type=N,ot.texture=bt)}function Y(){let N=L[et];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){It.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),It.copy(N))}function Lt(N){D.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),D.copy(N))}function jt(N,bt){let tt=c.get(bt);tt===void 0&&(tt=new WeakMap,c.set(bt,tt));let ot=tt.get(N);ot===void 0&&(ot=r.getUniformBlockIndex(bt,N.name),tt.set(N,ot))}function Xt(N,bt){let ot=c.get(bt).get(N);l.get(bt)!==ot&&(r.uniformBlockBinding(bt,ot,N.__bindingPointIndex),l.set(bt,ot))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,L={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,S=null,y=null,x=null,C=null,E=null,w=new Qt(0,0,0),R=0,M=!1,v=null,I=null,U=null,F=null,z=null,It.set(0,0,r.canvas.width,r.canvas.height),D.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:G,disable:ht,bindFramebuffer:at,drawBuffers:lt,useProgram:wt,setBlending:P,setMaterial:dt,setFlipSided:st,setCullFace:O,setLineWidth:ft,setPolygonOffset:Nt,setScissorTest:St,activeTexture:A,bindTexture:b,unbindTexture:Y,compressedTexImage2D:nt,compressedTexImage3D:rt,texImage2D:vt,texImage3D:Gt,updateUBOMapping:jt,uniformBlockBinding:Xt,texStorage2D:Ht,texStorage3D:pt,texSubImage2D:it,texSubImage3D:xt,compressedTexSubImage2D:gt,compressedTexSubImage3D:yt,scissor:Vt,viewport:Lt,reset:ce}}function Bg(r,t,e,n){let i=Hb(n);switch(e){case jg:return r*t;case e0:return r*t;case n0:return r*t*2;case Fc:return r*t/i.components*i.byteLength;case _d:return r*t/i.components*i.byteLength;case i0:return r*t*2/i.components*i.byteLength;case xd:return r*t*2/i.components*i.byteLength;case t0:return r*t*3/i.components*i.byteLength;case Mi:return r*t*4/i.components*i.byteLength;case vd:return r*t*4/i.components*i.byteLength;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ic:case rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rf:case of:return Math.max(r,16)*Math.max(t,8)/4;case nf:case sf:return Math.max(r,8)*Math.max(t,8)/2;case af:case lf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ff:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case df:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case pf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case mf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case gf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _f:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Mf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Sf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case sc:case wf:case Tf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case r0:case Ef:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Af:case Cf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hb(r){switch(r){case ir:case Jg:return{byteLength:1,components:1};case wa:case Kg:case Ua:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case _s:case pd:case tr:return{byteLength:4,components:1};case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Gb(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return d?new OffscreenCanvas(A,b):lc("canvas")}function _(A,b,Y){let nt=1,rt=St(A);if((rt.width>Y||rt.height>Y)&&(nt=Y/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let it=Math.floor(nt*rt.width),xt=Math.floor(nt*rt.height);u===void 0&&(u=p(it,xt));let gt=b?p(it,xt):u;return gt.width=it,gt.height=xt,gt.getContext("2d").drawImage(A,0,0,it,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+it+"x"+xt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,b,Y,nt,rt=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=b;if(b===r.RED&&(Y===r.FLOAT&&(it=r.R32F),Y===r.HALF_FLOAT&&(it=r.R16F),Y===r.UNSIGNED_BYTE&&(it=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(it=r.R8UI),Y===r.UNSIGNED_SHORT&&(it=r.R16UI),Y===r.UNSIGNED_INT&&(it=r.R32UI),Y===r.BYTE&&(it=r.R8I),Y===r.SHORT&&(it=r.R16I),Y===r.INT&&(it=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(it=r.RG32F),Y===r.HALF_FLOAT&&(it=r.RG16F),Y===r.UNSIGNED_BYTE&&(it=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(it=r.RG8UI),Y===r.UNSIGNED_SHORT&&(it=r.RG16UI),Y===r.UNSIGNED_INT&&(it=r.RG32UI),Y===r.BYTE&&(it=r.RG8I),Y===r.SHORT&&(it=r.RG16I),Y===r.INT&&(it=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(it=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(it=r.RGB16UI),Y===r.UNSIGNED_INT&&(it=r.RGB32UI),Y===r.BYTE&&(it=r.RGB8I),Y===r.SHORT&&(it=r.RGB16I),Y===r.INT&&(it=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(it=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(it=r.RGBA16UI),Y===r.UNSIGNED_INT&&(it=r.RGBA32UI),Y===r.BYTE&&(it=r.RGBA8I),Y===r.SHORT&&(it=r.RGBA16I),Y===r.INT&&(it=r.RGBA32I)),b===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),b===r.RGBA){let xt=rt?Bc:he.getTransfer(nt);Y===r.FLOAT&&(it=r.RGBA32F),Y===r.HALF_FLOAT&&(it=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(it=xt===ve?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(A,b){let Y;return A?b===null||b===_s||b===yo?Y=r.DEPTH24_STENCIL8:b===tr?Y=r.DEPTH32F_STENCIL8:b===wa&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_s||b===yo?Y=r.DEPTH_COMPONENT24:b===tr?Y=r.DEPTH_COMPONENT32F:b===wa&&(Y=r.DEPTH_COMPONENT16),Y}function C(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==In&&A.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function w(A){let b=A.target;b.removeEventListener("dispose",w),v(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let Y=A.source,nt=f.get(Y);if(nt){let rt=nt[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(A),Object.keys(nt).length===0&&f.delete(Y)}n.remove(A)}function M(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let Y=A.source,nt=f.get(Y);delete nt[b.__cacheKey],o.memory.textures--}function v(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let rt=0;rt<b.__webglFramebuffer[nt].length;rt++)r.deleteFramebuffer(b.__webglFramebuffer[nt][rt]);else r.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[nt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=A.textures;for(let nt=0,rt=Y.length;nt<rt;nt++){let it=n.get(Y[nt]);it.__webglTexture&&(r.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(Y[nt])}n.remove(A)}let I=0;function U(){I=0}function F(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function z(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function J(A,b){let Y=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){let nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(Y,A,b);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function X(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){D(Y,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function K(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){D(Y,A,b);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function q(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){V(Y,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}let et={[tf]:r.REPEAT,[ms]:r.CLAMP_TO_EDGE,[ef]:r.MIRRORED_REPEAT},L={[In]:r.NEAREST,[Av]:r.NEAREST_MIPMAP_NEAREST,[Cl]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[uu]:r.LINEAR_MIPMAP_NEAREST,[gs]:r.LINEAR_MIPMAP_LINEAR},ct={[Iv]:r.NEVER,[Fv]:r.ALWAYS,[Lv]:r.LESS,[o0]:r.LEQUAL,[Dv]:r.EQUAL,[Ov]:r.GEQUAL,[Uv]:r.GREATER,[Nv]:r.NOTEQUAL};function ut(A,b){if(b.type===tr&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===uu||b.magFilter===Cl||b.magFilter===gs||b.minFilter===Li||b.minFilter===uu||b.minFilter===Cl||b.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,et[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===In||b.minFilter!==Cl&&b.minFilter!==gs||b.type===tr&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function It(A,b){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let nt=b.source,rt=f.get(nt);rt===void 0&&(rt={},f.set(nt,rt));let it=z(b);if(it!==A.__cacheKey){rt[it]===void 0&&(rt[it]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),rt[it].usedTimes++;let xt=rt[A.__cacheKey];xt!==void 0&&(rt[A.__cacheKey].usedTimes--,xt.usedTimes===0&&M(b)),A.__cacheKey=it,A.__webglTexture=rt[it].texture}return Y}function D(A,b,Y){let nt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=r.TEXTURE_3D);let rt=It(A,b),it=b.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+Y);let xt=n.get(it);if(it.version!==xt.__version||rt===!0){e.activeTexture(r.TEXTURE0+Y);let gt=he.getPrimaries(he.workingColorSpace),yt=b.colorSpace===Ar?null:he.getPrimaries(b.colorSpace),Ht=b.colorSpace===Ar||gt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let pt=_(b.image,!1,i.maxTextureSize);pt=Nt(b,pt);let vt=s.convert(b.format,b.colorSpace),Gt=s.convert(b.type),Vt=y(b.internalFormat,vt,Gt,b.colorSpace,b.isVideoTexture);ut(nt,b);let Lt,jt=b.mipmaps,Xt=b.isVideoTexture!==!0,ce=xt.__version===void 0||rt===!0,N=it.dataReady,bt=C(b,pt);if(b.isDepthTexture)Vt=x(b.format===Mo,b.type),ce&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,Vt,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Vt,pt.width,pt.height,0,vt,Gt,null));else if(b.isDataTexture)if(jt.length>0){Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,bt,Vt,jt[0].width,jt[0].height);for(let tt=0,ot=jt.length;tt<ot;tt++)Lt=jt[tt],Xt?N&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,vt,Gt,Lt.data):e.texImage2D(r.TEXTURE_2D,tt,Vt,Lt.width,Lt.height,0,vt,Gt,Lt.data);b.generateMipmaps=!1}else Xt?(ce&&e.texStorage2D(r.TEXTURE_2D,bt,Vt,pt.width,pt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt.width,pt.height,vt,Gt,pt.data)):e.texImage2D(r.TEXTURE_2D,0,Vt,pt.width,pt.height,0,vt,Gt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Vt,jt[0].width,jt[0].height,pt.depth);for(let tt=0,ot=jt.length;tt<ot;tt++)if(Lt=jt[tt],b.format!==Mi)if(vt!==null)if(Xt){if(N)if(b.layerUpdates.size>0){let Mt=Bg(Lt.width,Lt.height,b.format,b.type);for(let Tt of b.layerUpdates){let qt=Lt.data.subarray(Tt*Mt/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Mt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Tt,Lt.width,Lt.height,1,vt,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,pt.depth,vt,Lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Vt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,pt.depth,vt,Gt,Lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Vt,Lt.width,Lt.height,pt.depth,0,vt,Gt,Lt.data)}else{Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,bt,Vt,jt[0].width,jt[0].height);for(let tt=0,ot=jt.length;tt<ot;tt++)Lt=jt[tt],b.format!==Mi?vt!==null?Xt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,vt,Lt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Vt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,vt,Gt,Lt.data):e.texImage2D(r.TEXTURE_2D,tt,Vt,Lt.width,Lt.height,0,vt,Gt,Lt.data)}else if(b.isDataArrayTexture)if(Xt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Vt,pt.width,pt.height,pt.depth),N)if(b.layerUpdates.size>0){let tt=Bg(pt.width,pt.height,b.format,b.type);for(let ot of b.layerUpdates){let Mt=pt.data.subarray(ot*tt/pt.data.BYTES_PER_ELEMENT,(ot+1)*tt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,vt,Gt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,vt,Gt,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,pt.width,pt.height,pt.depth,0,vt,Gt,pt.data);else if(b.isData3DTexture)Xt?(ce&&e.texStorage3D(r.TEXTURE_3D,bt,Vt,pt.width,pt.height,pt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,vt,Gt,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Vt,pt.width,pt.height,pt.depth,0,vt,Gt,pt.data);else if(b.isFramebufferTexture){if(ce)if(Xt)e.texStorage2D(r.TEXTURE_2D,bt,Vt,pt.width,pt.height);else{let tt=pt.width,ot=pt.height;for(let Mt=0;Mt<bt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,Vt,tt,ot,0,vt,Gt,null),tt>>=1,ot>>=1}}else if(jt.length>0){if(Xt&&ce){let tt=St(jt[0]);e.texStorage2D(r.TEXTURE_2D,bt,Vt,tt.width,tt.height)}for(let tt=0,ot=jt.length;tt<ot;tt++)Lt=jt[tt],Xt?N&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,vt,Gt,Lt):e.texImage2D(r.TEXTURE_2D,tt,Vt,vt,Gt,Lt);b.generateMipmaps=!1}else if(Xt){if(ce){let tt=St(pt);e.texStorage2D(r.TEXTURE_2D,bt,Vt,tt.width,tt.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Gt,pt)}else e.texImage2D(r.TEXTURE_2D,0,Vt,vt,Gt,pt);g(b)&&m(nt),xt.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function V(A,b,Y){if(b.image.length!==6)return;let nt=It(A,b),rt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+Y);let it=n.get(rt);if(rt.version!==it.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y);let xt=he.getPrimaries(he.workingColorSpace),gt=b.colorSpace===Ar?null:he.getPrimaries(b.colorSpace),yt=b.colorSpace===Ar||xt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ht=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!Ht&&!pt?vt[ot]=_(b.image[ot],!0,i.maxCubemapSize):vt[ot]=pt?b.image[ot].image:b.image[ot],vt[ot]=Nt(b,vt[ot]);let Gt=vt[0],Vt=s.convert(b.format,b.colorSpace),Lt=s.convert(b.type),jt=y(b.internalFormat,Vt,Lt,b.colorSpace),Xt=b.isVideoTexture!==!0,ce=it.__version===void 0||nt===!0,N=rt.dataReady,bt=C(b,Gt);ut(r.TEXTURE_CUBE_MAP,b);let tt;if(Ht){Xt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,jt,Gt.width,Gt.height);for(let ot=0;ot<6;ot++){tt=vt[ot].mipmaps;for(let Mt=0;Mt<tt.length;Mt++){let Tt=tt[Mt];b.format!==Mi?Vt!==null?Xt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,Tt.width,Tt.height,Vt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,jt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,Tt.width,Tt.height,Vt,Lt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,jt,Tt.width,Tt.height,0,Vt,Lt,Tt.data)}}}else{if(tt=b.mipmaps,Xt&&ce){tt.length>0&&bt++;let ot=St(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Vt,Lt,vt[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,vt[ot].width,vt[ot].height,0,Vt,Lt,vt[ot].data);for(let Mt=0;Mt<tt.length;Mt++){let qt=tt[Mt].image[ot].image;Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,qt.width,qt.height,Vt,Lt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,jt,qt.width,qt.height,0,Vt,Lt,qt.data)}}else{Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Vt,Lt,vt[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,Vt,Lt,vt[ot]);for(let Mt=0;Mt<tt.length;Mt++){let Tt=tt[Mt];Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,Vt,Lt,Tt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,jt,Vt,Lt,Tt.image[ot])}}}g(b)&&m(r.TEXTURE_CUBE_MAP),it.__version=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function H(A,b,Y,nt,rt,it){let xt=s.convert(Y.format,Y.colorSpace),gt=s.convert(Y.type),yt=y(Y.internalFormat,xt,gt,Y.colorSpace),Ht=n.get(b),pt=n.get(Y);if(pt.__renderTarget=b,!Ht.__hasExternalTextures){let vt=Math.max(1,b.width>>it),Gt=Math.max(1,b.height>>it);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,it,yt,vt,Gt,b.depth,0,xt,gt,null):e.texImage2D(rt,it,yt,vt,Gt,0,xt,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),O(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,rt,pt.__webglTexture,0,st(b)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,rt,pt.__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function G(A,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let nt=b.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,it=x(b.stencilBuffer,rt),xt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=st(b);O(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,it,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,it,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,it,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,A)}else{let nt=b.textures;for(let rt=0;rt<nt.length;rt++){let it=nt[rt],xt=s.convert(it.format,it.colorSpace),gt=s.convert(it.type),yt=y(it.internalFormat,xt,gt,it.colorSpace),Ht=st(b);Y&&O(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,yt,b.width,b.height):O(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,yt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,yt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let rt=nt.__webglTexture,it=st(b);if(b.depthTexture.format===po)O(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(b.depthTexture.format===Mo)O(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function at(A){let b=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=nt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ht(b.__webglFramebuffer,A)}else if(Y){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=r.createRenderbuffer(),G(b.__webglDepthbuffer[nt],A,!1);else{let rt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,it)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),G(b.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(A,b,Y){let nt=n.get(A);b!==void 0&&H(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&at(A)}function wt(A){let b=A.texture,Y=n.get(A),nt=n.get(b);A.addEventListener("dispose",w);let rt=A.textures,it=A.isWebGLCubeRenderTarget===!0,xt=rt.length>1;if(xt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=b.version,o.memory.textures++),it){Y.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[gt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)Y.__webglFramebuffer[gt][yt]=r.createFramebuffer()}else Y.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)Y.__webglFramebuffer[gt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(xt)for(let gt=0,yt=rt.length;gt<yt;gt++){let Ht=n.get(rt[gt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&O(A)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let gt=0;gt<rt.length;gt++){let yt=rt[gt];Y.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[gt]);let Ht=s.convert(yt.format,yt.colorSpace),pt=s.convert(yt.type),vt=y(yt.internalFormat,Ht,pt,yt.colorSpace,A.isXRRenderTarget===!0),Gt=st(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,vt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),G(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),ut(r.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)H(Y.__webglFramebuffer[gt][yt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else H(Y.__webglFramebuffer[gt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let gt=0,yt=rt.length;gt<yt;gt++){let Ht=rt[gt],pt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,pt.__webglTexture),ut(r.TEXTURE_2D,Ht),H(Y.__webglFramebuffer,A,Ht,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),g(Ht)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),ut(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)H(Y.__webglFramebuffer[yt],A,b,r.COLOR_ATTACHMENT0,gt,yt);else H(Y.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,gt,0);g(b)&&m(gt),e.unbindTexture()}A.depthBuffer&&at(A)}function j(A){let b=A.textures;for(let Y=0,nt=b.length;Y<nt;Y++){let rt=b[Y];if(g(rt)){let it=S(A),xt=n.get(rt).__webglTexture;e.bindTexture(it,xt),m(it),e.unbindTexture()}}}let Q=[],P=[];function dt(A){if(A.samples>0){if(O(A)===!1){let b=A.textures,Y=A.width,nt=A.height,rt=r.COLOR_BUFFER_BIT,it=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(A),gt=b.length>1;if(gt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ht=n.get(b[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,rt,r.NEAREST),l===!0&&(Q.length=0,P.length=0,Q.push(r.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(it),P.push(it),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ht=n.get(b[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function st(A){return Math.min(i.maxSamples,A.samples)}function O(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ft(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Nt(A,b){let Y=A.colorSpace,nt=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Y!==Ao&&Y!==Ar&&(he.getTransfer(Y)===ve?(nt!==Mi||rt!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function St(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=lt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=H,this.useMultisampledRTT=O}function Wb(r,t){function e(n,i=Ar){let s,o=he.getTransfer(i);if(n===ir)return r.UNSIGNED_BYTE;if(n===md)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jg)return r.BYTE;if(n===Kg)return r.SHORT;if(n===wa)return r.UNSIGNED_SHORT;if(n===pd)return r.INT;if(n===_s)return r.UNSIGNED_INT;if(n===tr)return r.FLOAT;if(n===Ua)return r.HALF_FLOAT;if(n===jg)return r.ALPHA;if(n===t0)return r.RGB;if(n===Mi)return r.RGBA;if(n===e0)return r.LUMINANCE;if(n===n0)return r.LUMINANCE_ALPHA;if(n===po)return r.DEPTH_COMPONENT;if(n===Mo)return r.DEPTH_STENCIL;if(n===Fc)return r.RED;if(n===_d)return r.RED_INTEGER;if(n===i0)return r.RG;if(n===xd)return r.RG_INTEGER;if(n===vd)return r.RGBA_INTEGER;if(n===ec||n===nc||n===ic||n===rc)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nf||n===rf||n===sf||n===of)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===af||n===lf||n===cf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===af||n===lf)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hf||n===uf||n===ff||n===df||n===pf||n===mf||n===gf||n===_f||n===xf||n===vf||n===yf||n===Mf||n===Sf||n===bf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ff)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===df)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_f)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===wf||n===Tf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===r0||n===Ef||n===Af||n===Cf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ef)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Gf=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ln=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xb={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new kn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Di({vertexShader:qb,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends Ir{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=new Wf,g=e.getContextAttributes(),m=null,S=null,y=[],x=[],C=new Pt,E=null,w=new Pn;w.viewport=new ke;let R=new Pn;R.viewport=new ke;let M=[w,R],v=new Gf,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=y[D];return V===void 0&&(V=new ya,y[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=y[D];return V===void 0&&(V=new ya,y[D]=V),V.getGripSpace()},this.getHand=function(D){let V=y[D];return V===void 0&&(V=new ya,y[D]=V),V.getHandSpace()};function F(D){let V=x.indexOf(D.inputSource);if(V===-1)return;let H=y[V];H!==void 0&&(H.update(D.inputSource,D.frame,c||o),H.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",J);for(let D=0;D<y.length;D++){let V=x[D];V!==null&&(x[D]=null,y[D].disconnect(V))}I=null,U=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,S=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let V={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new rr(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:ir,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,H=null,G=null;g.depth&&(G=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=g.stencil?Mo:po,H=g.stencil?yo:_s);let ht={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(ht),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new rr(f.textureWidth,f.textureHeight,{format:Mi,type:ir,depthTexture:new vc(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),It.setContext(i),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(D){for(let V=0;V<D.removed.length;V++){let H=D.removed[V],G=x.indexOf(H);G>=0&&(x[G]=null,y[G].disconnect(H))}for(let V=0;V<D.added.length;V++){let H=D.added[V],G=x.indexOf(H);if(G===-1){for(let at=0;at<y.length;at++)if(at>=x.length){x.push(H),G=at;break}else if(x[at]===null){x[at]=H,G=at;break}if(G===-1)break}let ht=y[G];ht&&ht.connect(H)}}let X=new k,K=new k;function q(D,V,H){X.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(H.matrixWorld);let G=X.distanceTo(K),ht=V.projectionMatrix.elements,at=H.projectionMatrix.elements,lt=ht[14]/(ht[10]-1),wt=ht[14]/(ht[10]+1),j=(ht[9]+1)/ht[5],Q=(ht[9]-1)/ht[5],P=(ht[8]-1)/ht[0],dt=(at[8]+1)/at[0],st=lt*P,O=lt*dt,ft=G/(-P+dt),Nt=ft*-P;if(V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Nt),D.translateZ(ft),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),ht[10]===-1)D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let St=lt+ft,A=wt+ft,b=st-Nt,Y=O+(G-Nt),nt=j*wt/A*St,rt=Q*wt/A*St;D.projectionMatrix.makePerspective(b,Y,nt,rt,St,A),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function et(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let V=D.near,H=D.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(H=_.depthFar)),v.near=R.near=w.near=V,v.far=R.far=w.far=H,(I!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,U=v.far),w.layers.mask=D.layers.mask|2,R.layers.mask=D.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;let G=D.parent,ht=v.cameras;et(v,G);for(let at=0;at<ht.length;at++)et(ht[at],G);ht.length===2?q(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),L(D,v,G)};function L(D,V,H){H===null?D.matrix.copy(V.matrixWorld):(D.matrix.copy(H.matrixWorld),D.matrix.invert(),D.matrix.multiply(V.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ta*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ct=null;function ut(D,V){if(h=V.getViewerPose(c||o),p=V,h!==null){let H=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let G=!1;H.length!==v.cameras.length&&(v.cameras.length=0,G=!0);for(let at=0;at<H.length;at++){let lt=H[at],wt=null;if(d!==null)wt=d.getViewport(lt);else{let Q=u.getViewSubImage(f,lt);wt=Q.viewport,at===0&&(t.setRenderTargetTextures(S,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(S))}let j=M[at];j===void 0&&(j=new Pn,j.layers.enable(at),j.viewport=new ke,M[at]=j),j.matrix.fromArray(lt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(lt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(wt.x,wt.y,wt.width,wt.height),at===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),G===!0&&v.cameras.push(j)}let ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let at=u.getDepthInformation(H[0]);at&&at.isValid&&at.texture&&_.init(t,at,i.renderState)}}for(let H=0;H<y.length;H++){let G=x[H],ht=y[H];G!==null&&ht!==void 0&&ht.update(G,V,c||o)}ct&&ct(D,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),p=null}let It=new h0;It.setAnimationLoop(ut),this.setAnimationLoop=function(D){ct=D},this.dispose=function(){}}},hs=new sr,Zb=new Ne;function $b(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,c0(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),y=S.envMap,x=S.envMapRotation;y&&(g.envMap.value=y,hs.copy(x),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(hs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=i[S.id];x===void 0&&(p(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",g));let C=y.program;n.updateUBOMapping(S,C);let E=t.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function h(S){let y=u();S.__bindingPointIndex=y;let x=r.createBuffer(),C=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=i[S.id],x=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,v=R.length;M<v;M++){let I=R[M];if(d(I,E,M,C)===!0){let U=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],z=0;for(let J=0;J<F.length;J++){let X=F[J],K=_(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+z,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,y,x,C){let E=S.value,w=y+"_"+x;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{let R=C[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function p(S){let y=S.uniforms,x=0,C=16;for(let w=0,R=y.length;w<R;w++){let M=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,I=M.length;v<I;v++){let U=M[v],F=Array.isArray(U.value)?U.value:[U.value];for(let z=0,J=F.length;z<J;z++){let X=F[z],K=_(X),q=x%C,et=q%K.boundary,L=q+et;x+=et,L!==0&&C-L<K.storage&&(x+=C-L),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=K.storage}}}let E=x%C;return E>0&&(x+=C-E),S.__size=x,S.__cache={},this}function _(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){let y=S.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(let S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var yc=class{constructor(t={}){let{canvas:e=ty(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Rr,this.toneMappingExposure=1;let x=this,C=!1,E=0,w=0,R=null,M=-1,v=null,I=new ke,U=new ke,F=null,z=new Qt(0),J=0,X=e.width,K=e.height,q=1,et=null,L=null,ct=new ke(0,0,X,K),ut=new ke(0,0,X,K),It=!1,D=new Ea,V=!1,H=!1,G=new Ne,ht=new Ne,at=new k,lt=new ke,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function Q(){return R===null?q:1}let P=n;function dt(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),P===null){let B="webgl2";if(P=dt(B,T),P===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,O,ft,Nt,St,A,b,Y,nt,rt,it,xt,gt,yt,Ht,pt,vt,Gt,Vt,Lt,jt,Xt,ce,N;function bt(){st=new fS(P),st.init(),Xt=new Wb(P,st),O=new oS(P,st,t,Xt),ft=new Vb(P,st),O.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),Nt=new mS(P),St=new Cb,A=new Gb(P,st,ft,St,O,Xt,Nt),b=new lS(x),Y=new uS(x),nt=new Sy(P),ce=new rS(P,nt),rt=new dS(P,nt,Nt,ce),it=new _S(P,rt,nt,Nt),Vt=new gS(P,O,A),pt=new aS(St),xt=new Ab(x,b,Y,st,O,ce,pt),gt=new $b(x,St),yt=new Pb,Ht=new Ob(st),Gt=new iS(x,b,Y,ft,it,d,l),vt=new zb(x,it,O),N=new Jb(P,Nt,O,ft),Lt=new sS(P,st,Nt),jt=new pS(P,st,Nt),Nt.programs=xt.programs,x.capabilities=O,x.extensions=st,x.properties=St,x.renderLists=yt,x.shadowMap=vt,x.state=ft,x.info=Nt}bt();let tt=new Xf(x,P);this.xr=tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,B,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=B,e.width=Math.floor(T*q),e.height=Math.floor(B*q),Z===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*q,K*q).floor()},this.setDrawingBufferSize=function(T,B,Z){X=T,K=B,q=Z,e.width=Math.floor(T*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ct)},this.setViewport=function(T,B,Z,$){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,B,Z,$),ft.viewport(I.copy(ct).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,B,Z,$){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,B,Z,$),ft.scissor(U.copy(ut).multiplyScalar(q).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(T){ft.setScissorTest(It=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,B=!0,Z=!0){let $=0;if(T){let W=!1;if(R!==null){let mt=R.texture.format;W=mt===vd||mt===xd||mt===_d}if(W){let mt=R.texture.type,_t=mt===ir||mt===_s||mt===wa||mt===yo||mt===md||mt===gd,Et=Gt.getClearColor(),Dt=Gt.getClearAlpha(),Yt=Et.r,Jt=Et.g,Ot=Et.b;_t?(p[0]=Yt,p[1]=Jt,p[2]=Ot,p[3]=Dt,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=Yt,_[1]=Jt,_[2]=Ot,_[3]=Dt,P.clearBufferiv(P.COLOR,0,_))}else $|=P.COLOR_BUFFER_BIT}B&&($|=P.DEPTH_BUFFER_BIT),Z&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),yt.dispose(),Ht.dispose(),St.dispose(),b.dispose(),Y.dispose(),it.dispose(),ce.dispose(),N.dispose(),xt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",At),tt.removeEventListener("sessionend",$t),Bt.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=Nt.autoReset,B=vt.enabled,Z=vt.autoUpdate,$=vt.needsUpdate,W=vt.type;bt(),Nt.autoReset=T,vt.enabled=B,vt.autoUpdate=Z,vt.needsUpdate=$,vt.type=W}function Tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){let B=T.target;B.removeEventListener("dispose",qt),ue(B)}function ue(T){Oe(T),St.remove(T)}function Oe(T){let B=St.get(T).programs;B!==void 0&&(B.forEach(function(Z){xt.releaseProgram(Z)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Z,$,W,mt){B===null&&(B=wt);let _t=W.isMesh&&W.matrixWorld.determinant()<0,Et=Vn(T,B,Z,$,W);ft.setMaterial($,_t);let Dt=Z.index,Yt=1;if($.wireframe===!0){if(Dt=rt.getWireframeAttribute(Z),Dt===void 0)return;Yt=2}let Jt=Z.drawRange,Ot=Z.attributes.position,Kt=Jt.start*Yt,fe=(Jt.start+Jt.count)*Yt;mt!==null&&(Kt=Math.max(Kt,mt.start*Yt),fe=Math.min(fe,(mt.start+mt.count)*Yt)),Dt!==null?(Kt=Math.max(Kt,0),fe=Math.min(fe,Dt.count)):Ot!=null&&(Kt=Math.max(Kt,0),fe=Math.min(fe,Ot.count));let me=fe-Kt;if(me<0||me===1/0)return;ce.setup(W,$,Et,Z,Dt);let Ie,ge=Lt;if(Dt!==null&&(Ie=nt.get(Dt),ge=jt,ge.setIndex(Ie)),W.isMesh)$.wireframe===!0?(ft.setLineWidth($.wireframeLinewidth*Q()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if(W.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),ft.setLineWidth(kt*Q()),W.isLineSegments?ge.setMode(P.LINES):W.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else W.isPoints?ge.setMode(P.POINTS):W.isSprite&&ge.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ge.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let kt=W._multiDrawStarts,Ui=W._multiDrawCounts,_e=W._multiDrawCount,pi=Dt?nt.get(Dt).bytesPerElement:1,Es=St.get($).currentProgram.getUniforms();for(let Hn=0;Hn<_e;Hn++)Es.setValue(P,"_gl_DrawID",Hn),ge.render(kt[Hn]/pi,Ui[Hn])}else if(W.isInstancedMesh)ge.renderInstances(Kt,me,W.count);else if(Z.isInstancedBufferGeometry){let kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ui=Math.min(Z.instanceCount,kt);ge.renderInstances(Kt,me,Ui)}else ge.render(Kt,me)};function Rt(T,B,Z){T.transparent===!0&&T.side===hi&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,ye(T,B,Z),T.side=Pr,T.needsUpdate=!0,ye(T,B,Z),T.side=hi):ye(T,B,Z)}this.compile=function(T,B,Z=null){Z===null&&(Z=T),m=Ht.get(Z),m.init(B),y.push(m),Z.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();let $=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let _t=0;_t<mt.length;_t++){let Et=mt[_t];Rt(Et,Z,W),$.add(Et)}else Rt(mt,Z,W),$.add(mt)}),y.pop(),m=null,$},this.compileAsync=function(T,B,Z=null){let $=this.compile(T,B,Z);return new Promise(W=>{function mt(){if($.forEach(function(_t){St.get(_t).currentProgram.isReady()&&$.delete(_t)}),$.size===0){W(T);return}setTimeout(mt,10)}st.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ft=null;function te(T){Ft&&Ft(T)}function At(){Bt.stop()}function $t(){Bt.start()}let Bt=new h0;Bt.setAnimationLoop(te),typeof self!="undefined"&&Bt.setContext(self),this.setAnimationLoop=function(T){Ft=T,tt.setAnimationLoop(T),T===null?Bt.stop():Bt.start()},tt.addEventListener("sessionstart",At),tt.addEventListener("sessionend",$t),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,R),m=Ht.get(T,y.length),m.init(B),y.push(m),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),D.setFromProjectionMatrix(ht),H=this.localClippingEnabled,V=pt.init(this.clippingPlanes,H),g=yt.get(T,S.length),g.init(),S.push(g),tt.enabled===!0&&tt.isPresenting===!0){let mt=x.xr.getDepthSensingMesh();mt!==null&&Zt(mt,B,-1/0,x.sortObjects)}Zt(T,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,L),j=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,j&&Gt.addToRenderList(g,T),this.info.render.frame++,V===!0&&pt.beginShadows();let Z=m.state.shadowsArray;vt.render(Z,T,B),V===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,W=g.transmissive;if(m.setupLights(),B.isArrayCamera){let mt=B.cameras;if(W.length>0)for(let _t=0,Et=mt.length;_t<Et;_t++){let Dt=mt[_t];oe($,W,T,Dt)}j&&Gt.render(T);for(let _t=0,Et=mt.length;_t<Et;_t++){let Dt=mt[_t];Ve(g,T,Dt,Dt.viewport)}}else W.length>0&&oe($,W,T,B),j&&Gt.render(T),Ve(g,T,B);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,B),ce.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(m=y[y.length-1],V===!0&&pt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Zt(T,B,Z,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){$&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);let _t=it.update(T),Et=T.material;Et.visible&&g.push(T,_t,Et,Z,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){let _t=it.update(T),Et=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),lt.copy(_t.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Et)){let Dt=_t.groups;for(let Yt=0,Jt=Dt.length;Yt<Jt;Yt++){let Ot=Dt[Yt],Kt=Et[Ot.materialIndex];Kt&&Kt.visible&&g.push(T,_t,Kt,Z,lt.z,Ot)}}else Et.visible&&g.push(T,_t,Et,Z,lt.z,null)}}let mt=T.children;for(let _t=0,Et=mt.length;_t<Et;_t++)Zt(mt[_t],B,Z,$)}function Ve(T,B,Z,$){let W=T.opaque,mt=T.transmissive,_t=T.transparent;m.setupLightsView(Z),V===!0&&pt.setGlobalState(x.clippingPlanes,Z),$&&ft.viewport(I.copy($)),W.length>0&&we(W,B,Z),mt.length>0&&we(mt,B,Z),_t.length>0&&we(_t,B,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function oe(T,B,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new rr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ua:ir,minFilter:gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let mt=m.state.transmissionRenderTarget[$.id],_t=$.viewport||I;mt.setSize(_t.z,_t.w);let Et=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(z),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),j&&Gt.render(Z);let Dt=x.toneMapping;x.toneMapping=Rr;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),V===!0&&pt.setGlobalState(x.clippingPlanes,$),we(T,Z,$),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ot=0,Kt=B.length;Ot<Kt;Ot++){let fe=B[Ot],me=fe.object,Ie=fe.geometry,ge=fe.material,kt=fe.group;if(ge.side===hi&&me.layers.test($.layers)){let Ui=ge.side;ge.side=zn,ge.needsUpdate=!0,Ye(me,Z,$,Ie,ge,kt),ge.side=Ui,ge.needsUpdate=!0,Jt=!0}}Jt===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}x.setRenderTarget(Et),x.setClearColor(z,J),Yt!==void 0&&($.viewport=Yt),x.toneMapping=Dt}function we(T,B,Z){let $=B.isScene===!0?B.overrideMaterial:null;for(let W=0,mt=T.length;W<mt;W++){let _t=T[W],Et=_t.object,Dt=_t.geometry,Yt=$===null?_t.material:$,Jt=_t.group;Et.layers.test(Z.layers)&&Ye(Et,B,Z,Dt,Yt,Jt)}}function Ye(T,B,Z,$,W,mt){T.onBeforeRender(x,B,Z,$,W,mt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(x,B,Z,$,T,mt),W.transparent===!0&&W.side===hi&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,x.renderBufferDirect(Z,B,$,W,T,mt),W.side=Pr,W.needsUpdate=!0,x.renderBufferDirect(Z,B,$,W,T,mt),W.side=hi):x.renderBufferDirect(Z,B,$,W,T,mt),T.onAfterRender(x,B,Z,$,W,mt)}function ye(T,B,Z){B.isScene!==!0&&(B=wt);let $=St.get(T),W=m.state.lights,mt=m.state.shadowsArray,_t=W.state.version,Et=xt.getParameters(T,W.state,mt,B,Z),Dt=xt.getProgramCacheKey(Et),Yt=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?Y:b).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",qt),Yt=new Map,$.programs=Yt);let Jt=Yt.get(Dt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===_t)return pe(T,Et),Jt}else Et.uniforms=xt.getUniforms(T),T.onBeforeCompile(Et,x),Jt=xt.acquireProgram(Et,Dt),Yt.set(Dt,Jt),$.uniforms=Et.uniforms;let Ot=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),pe(T,Et),$.needsLights=xn(T),$.lightsStateVersion=_t,$.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.directionalShadowMap.value=W.state.directionalShadowMap,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotShadowMap.value=W.state.spotShadowMap,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMap.value=W.state.pointShadowMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function Me(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=go.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function pe(T,B){let Z=St.get(T);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Vn(T,B,Z,$,W){B.isScene!==!0&&(B=wt),A.resetTextureUnits();let mt=B.fog,_t=$.isMeshStandardMaterial?B.environment:null,Et=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ao,Dt=($.isMeshStandardMaterial?Y:b).get($.envMap||_t),Yt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ot=!!Z.morphAttributes.position,Kt=!!Z.morphAttributes.normal,fe=!!Z.morphAttributes.color,me=Rr;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=x.toneMapping);let Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,kt=St.get($),Ui=m.state.lights;if(V===!0&&(H===!0||T!==v)){let ti=T===v&&$.id===M;pt.setState($,T,ti)}let _e=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ui.state.version||kt.outputColorSpace!==Et||W.isBatchedMesh&&kt.batching===!1||!W.isBatchedMesh&&kt.batching===!0||W.isBatchedMesh&&kt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&kt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&kt.instancing===!1||!W.isInstancedMesh&&kt.instancing===!0||W.isSkinnedMesh&&kt.skinning===!1||!W.isSkinnedMesh&&kt.skinning===!0||W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&kt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&kt.instancingMorph===!1&&W.morphTexture!==null||kt.envMap!==Dt||$.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==pt.numPlanes||kt.numIntersection!==pt.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Jt||kt.morphTargets!==Ot||kt.morphNormals!==Kt||kt.morphColors!==fe||kt.toneMapping!==me||kt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,kt.__version=$.version);let pi=kt.currentProgram;_e===!0&&(pi=ye($,B,W));let Es=!1,Hn=!1,Do=!1,Ae=pi.getUniforms(),bi=kt.uniforms;if(ft.useProgram(pi.program)&&(Es=!0,Hn=!0,Do=!0),$.id!==M&&(M=$.id,Hn=!0),Es||v!==T){ft.buffers.depth.getReversed()?(G.copy(T.projectionMatrix),ny(G),iy(G),Ae.setValue(P,"projectionMatrix",G)):Ae.setValue(P,"projectionMatrix",T.projectionMatrix),Ae.setValue(P,"viewMatrix",T.matrixWorldInverse);let ar=Ae.map.cameraPosition;ar!==void 0&&ar.setValue(P,at.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&Ae.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Hn=!0,Do=!0)}if(W.isSkinnedMesh){Ae.setOptional(P,W,"bindMatrix"),Ae.setOptional(P,W,"bindMatrixInverse");let ti=W.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),Ae.setValue(P,"boneTexture",ti.boneTexture,A))}W.isBatchedMesh&&(Ae.setOptional(P,W,"batchingTexture"),Ae.setValue(P,"batchingTexture",W._matricesTexture,A),Ae.setOptional(P,W,"batchingIdTexture"),Ae.setValue(P,"batchingIdTexture",W._indirectTexture,A),Ae.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(P,"batchingColorTexture",W._colorsTexture,A));let Uo=Z.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0)&&Vt.update(W,Z,pi),(Hn||kt.receiveShadow!==W.receiveShadow)&&(kt.receiveShadow=W.receiveShadow,Ae.setValue(P,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bi.envMap.value=Dt,bi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(bi.envMapIntensity.value=B.environmentIntensity),Hn&&(Ae.setValue(P,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Ee(bi,Do),mt&&$.fog===!0&&gt.refreshFogUniforms(bi,mt),gt.refreshMaterialUniforms(bi,$,q,K,m.state.transmissionRenderTarget[T.id]),go.upload(P,Me(kt),bi,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(go.upload(P,Me(kt),bi,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(P,"center",W.center),Ae.setValue(P,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(P,"normalMatrix",W.normalMatrix),Ae.setValue(P,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let ti=$.uniformsGroups;for(let ar=0,lr=ti.length;ar<lr;ar++){let Id=ti[ar];N.update(Id,pi),N.bind(Id,pi)}}return pi}function Ee(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function xn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,Z){St.get(T.texture).__webglTexture=B,St.get(T.depthTexture).__webglTexture=Z;let $=St.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let Z=St.get(T);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Z=0){R=T,E=B,w=Z;let $=!0,W=null,mt=!1,_t=!1;if(T){let Dt=St.get(T);if(Dt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Dt.__hasExternalTextures)A.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ot=T.depthTexture;if(Dt.__boundDepthTexture!==Ot){if(Ot!==null&&St.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(_t=!0);let Jt=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[B])?W=Jt[B][Z]:W=Jt[B],mt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?W=St.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?W=Jt[Z]:W=Jt,I.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else I.copy(ct).multiplyScalar(q).floor(),U.copy(ut).multiplyScalar(q).floor(),F=It;if(ft.bindFramebuffer(P.FRAMEBUFFER,W)&&$&&ft.drawBuffers(T,W),ft.viewport(I),ft.scissor(U),ft.setScissorTest(F),mt){let Dt=St.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,Z)}else if(_t){let Dt=St.get(T.texture),Yt=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,Z||0,Yt)}M=-1},this.readRenderTargetPixels=function(T,B,Z,$,W,mt,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){ft.bindFramebuffer(P.FRAMEBUFFER,Et);try{let Dt=T.texture,Yt=Dt.format,Jt=Dt.type;if(!O.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&Z>=0&&Z<=T.height-W&&P.readPixels(B,Z,$,W,Xt.convert(Yt),Xt.convert(Jt),mt)}finally{let Dt=R!==null?St.get(R).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,B,Z,$,W,mt,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){let Dt=T.texture,Yt=Dt.format,Jt=Dt.type;if(!O.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-$&&Z>=0&&Z<=T.height-W){ft.bindFramebuffer(P.FRAMEBUFFER,Et);let Ot=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ot),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),P.readPixels(B,Z,$,W,Xt.convert(Yt),Xt.convert(Jt),0);let Kt=R!==null?St.get(R).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Kt);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ey(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ot),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(Ot),P.deleteSync(fe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,Z=0){T.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let $=Math.pow(2,-Z),W=Math.floor(T.image.width*$),mt=Math.floor(T.image.height*$),_t=B!==null?B.x:0,Et=B!==null?B.y:0;A.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,_t,Et,W,mt),ft.unbindTexture()},this.copyTextureToTexture=function(T,B,Z=null,$=null,W=0){T.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],B=arguments[2],W=arguments[3]||0,Z=null);let mt,_t,Et,Dt,Yt,Jt,Ot,Kt,fe,me=T.isCompressedTexture?T.mipmaps[W]:T.image;Z!==null?(mt=Z.max.x-Z.min.x,_t=Z.max.y-Z.min.y,Et=Z.isBox3?Z.max.z-Z.min.z:1,Dt=Z.min.x,Yt=Z.min.y,Jt=Z.isBox3?Z.min.z:0):(mt=me.width,_t=me.height,Et=me.depth||1,Dt=0,Yt=0,Jt=0),$!==null?(Ot=$.x,Kt=$.y,fe=$.z):(Ot=0,Kt=0,fe=0);let Ie=Xt.convert(B.format),ge=Xt.convert(B.type),kt;B.isData3DTexture?(A.setTexture3D(B,0),kt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),kt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Ui=P.getParameter(P.UNPACK_ROW_LENGTH),_e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),Es=P.getParameter(P.UNPACK_SKIP_ROWS),Hn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);let Do=T.isDataArrayTexture||T.isData3DTexture,Ae=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let bi=St.get(T),Uo=St.get(B),ti=St.get(bi.__renderTarget),ar=St.get(Uo.__renderTarget);ft.bindFramebuffer(P.READ_FRAMEBUFFER,ti.__webglFramebuffer),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let lr=0;lr<Et;lr++)Do&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(T).__webglTexture,W,Jt+lr),T.isDepthTexture?(Ae&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(B).__webglTexture,W,fe+lr),P.blitFramebuffer(Dt,Yt,mt,_t,Ot,Kt,mt,_t,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ae?P.copyTexSubImage3D(kt,W,Ot,Kt,fe+lr,Dt,Yt,mt,_t):P.copyTexSubImage2D(kt,W,Ot,Kt,fe+lr,Dt,Yt,mt,_t);ft.bindFramebuffer(P.READ_FRAMEBUFFER,null),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ae?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(kt,W,Ot,Kt,fe,mt,_t,Et,Ie,ge,me.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,W,Ot,Kt,fe,mt,_t,Et,Ie,me.data):P.texSubImage3D(kt,W,Ot,Kt,fe,mt,_t,Et,Ie,ge,me):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,Ot,Kt,mt,_t,Ie,ge,me.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,Ot,Kt,me.width,me.height,Ie,me.data):P.texSubImage2D(P.TEXTURE_2D,W,Ot,Kt,mt,_t,Ie,ge,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ui),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Es),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hn),W===0&&B.generateMipmaps&&P.generateMipmap(kt),ft.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Z=null,$=null,W=0){return T.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,T=arguments[2],B=arguments[3],W=arguments[4]||0),ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,Z,$,W)},this.initRenderTarget=function(T){St.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ft.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,ft.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Mc=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Sc=class extends kn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=In,h=In,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=class extends Dr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zg=new Ne,qf=new uc,$l=new So,Jl=new k,bc=class extends Ln{constructor(t=new Dn,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,t.ray.intersectsSphere($l)===!1)return;zg.copy(i).invert(),qf.copy(t.ray).applyMatrix4(zg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let g=c.getX(p);Jl.fromBufferAttribute(u,g),kg(Jl,g,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Jl.fromBufferAttribute(u,p),kg(Jl,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function kg(r,t,e,n,i,s,o){let a=qf.distanceSqToPoint(r);if(a<e){let l=new k;qf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var wc=class extends kn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Pt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new k,i=[],s=[],o=[],a=new k,l=new Ne;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(an(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(an(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ca=class extends fi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yf=class extends Ca{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Kl=new k,zu=new Sd,ku=new Sd,Vu=new Sd,Zf=class extends fi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Kl.subVectors(i[0],i[1]).add(i[0]),c=Kl);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Kl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),zu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,g),ku.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,g),Vu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(zu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ku.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(zu.calc(l),ku.calc(l),Vu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vg(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Kb(r,t){let e=1-r;return e*e*t}function Qb(r,t){return 2*(1-r)*r*t}function jb(r,t){return r*r*t}function Ma(r,t,e,n){return Kb(r,t)+Qb(r,e)+jb(r,n)}function tw(r,t){let e=1-r;return e*e*e*t}function ew(r,t){let e=1-r;return 3*e*e*r*t}function nw(r,t){return 3*(1-r)*r*r*t}function iw(r,t){return r*r*r*t}function Sa(r,t,e,n,i){return tw(r,t)+ew(r,e)+nw(r,n)+iw(r,i)}var Tc=class extends fi{constructor(t=new Pt,e=new Pt,n=new Pt,i=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Sa(t,i.x,s.x,o.x,a.x),Sa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$f=class extends fi{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Sa(t,i.x,s.x,o.x,a.x),Sa(t,i.y,s.y,o.y,a.y),Sa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ec=class extends fi{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jf=class extends fi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends fi{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ma(t,i.x,s.x,o.x),Ma(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kf=class extends fi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ma(t,i.x,s.x,o.x),Ma(t,i.y,s.y,o.y),Ma(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Vg(a,l.x,c.x,h.x,u.x),Vg(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Pt().fromArray(i))}return this}},Qf=Object.freeze({__proto__:null,ArcCurve:Yf,CatmullRomCurve3:Zf,CubicBezierCurve:Tc,CubicBezierCurve3:$f,EllipseCurve:Ca,LineCurve:Ec,LineCurve3:Jf,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:Kf,SplineCurve:Cc}),jf=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Qf[i.type]().fromJSON(i))}return this}},To=class extends jf{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ec(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ac(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Tc(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i),new Pt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Cc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Ca(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Nr=class r extends Dn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,_=[],g=n/2,m=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function S(){let x=new k,C=new k,E=0,w=(e-t)/n;for(let R=0;R<=s;R++){let M=[],v=R/s,I=v*(e-t)+t;for(let U=0;U<=i;U++){let F=U/i,z=F*l+a,J=Math.sin(z),X=Math.cos(z);C.x=I*J,C.y=-v*n+g,C.z=I*X,u.push(C.x,C.y,C.z),x.set(J,w,X).normalize(),f.push(x.x,x.y,x.z),d.push(F,1-v),M.push(p++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){let v=_[M][R],I=_[M+1][R],U=_[M+1][R+1],F=_[M][R+1];(t>0||M!==0)&&(h.push(v,I,F),E+=3),(e>0||M!==s-1)&&(h.push(I,U,F),E+=3)}c.addGroup(m,E,0),m+=E}function y(x){let C=p,E=new Pt,w=new k,R=0,M=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),p++;let I=p;for(let U=0;U<=i;U++){let z=U/i*l+a,J=Math.cos(z),X=Math.sin(z);w.x=M*X,w.y=g*v,w.z=M*J,u.push(w.x,w.y,w.z),f.push(0,v,0),E.x=J*.5+.5,E.y=X*.5*v+.5,d.push(E.x,E.y),p++}for(let U=0;U<i;U++){let F=C+U,z=I+U;x===!0?h.push(z,z+1,F):h.push(z+1,z,F),R+=3}c.addGroup(m,R,x===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rc=class r extends Nr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ra=class extends To{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new To().fromJSON(i))}return this}},rw={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=m0(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=cw(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let p=e;p<i;p+=e)u=r[p],f=r[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Pa(s,o,e,a,l,d,0),o}};function m0(r,t,e,n,i){let s,o;if(i===yw(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Hg(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Hg(s,r[s],r[s+1],o);return o&&Vc(o,o.next)&&(La(o),o=o.next),o}function ys(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Vc(e,e.next)||Ue(e.prev,e,e.next)===0)){if(La(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pa(r,t,e,n,i,s,o){if(!r)return;!o&&s&&pw(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ow(r,n,i,s):sw(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),La(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=aw(ys(r),t,e),Pa(r,t,e,n,i,s,2)):o===2&&lw(r,t,e,n,i,s):Pa(ys(r),t,e,n,i,s,1);break}}}function sw(r){let t=r.prev,e=r,n=r.next;if(Ue(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&uo(i,a,s,l,o,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ow(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ue(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=td(d,p,t,e,n),S=td(_,g,t,e,n),y=r.prevZ,x=r.nextZ;for(;y&&y.z>=m&&x&&x.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&uo(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&uo(a,h,l,u,c,f,x.x,x.y)&&Ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&uo(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&uo(a,h,l,u,c,f,x.x,x.y)&&Ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function aw(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Vc(i,s)&&g0(i,n,n.next,s)&&Ia(i,s)&&Ia(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),La(n),La(n.next),n=r=s),n=n.next}while(n!==r);return ys(n)}function lw(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_w(o,a)){let l=_0(o,a);o=ys(o,o.next),l=ys(l,l.next),Pa(o,t,e,n,i,s,0),Pa(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function cw(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=m0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(gw(c));for(i.sort(hw),s=0;s<i.length;s++)e=uw(i[s],e);return e}function hw(r,t){return r.x-t.x}function uw(r,t){let e=fw(r,t);if(!e)return t;let n=_0(e,r);return ys(n,n.next),ys(e,e.next)}function fw(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&uo(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Ia(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&dw(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function dw(r,t){return Ue(r.prev,r,t.prev)<0&&Ue(t.next,r,r.next)<0}function pw(r,t,e,n){let i=r;do i.z===0&&(i.z=td(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,mw(i)}function mw(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function td(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function gw(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function uo(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function _w(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!xw(r,t)&&(Ia(r,t)&&Ia(t,r)&&vw(r,t)&&(Ue(r.prev,r,t.prev)||Ue(r,t.prev,t))||Vc(r,t)&&Ue(r.prev,r,r.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Vc(r,t){return r.x===t.x&&r.y===t.y}function g0(r,t,e,n){let i=jl(Ue(r,t,e)),s=jl(Ue(r,t,n)),o=jl(Ue(e,n,r)),a=jl(Ue(e,n,t));return!!(i!==s&&o!==a||i===0&&Ql(r,e,t)||s===0&&Ql(r,n,t)||o===0&&Ql(e,r,n)||a===0&&Ql(e,t,n))}function Ql(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function jl(r){return r>0?1:r<0?-1:0}function xw(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&g0(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ia(r,t){return Ue(r.prev,r,r.next)<0?Ue(r,t,r.next)>=0&&Ue(r,r.prev,t)>=0:Ue(r,t,r.prev)<0||Ue(r,r.next,t)<0}function vw(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function _0(r,t){let e=new ed(r.i,r.x,r.y),n=new ed(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Hg(r,t,e,n){let i=new ed(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function La(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ed(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yw(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var ba=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Gg(t),Wg(n,t);let o=t.length;e.forEach(Gg);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Wg(n,e[l]);let a=rw.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Gg(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Wg(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Pc=class r extends Dn{constructor(t=new Ra([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Mw,y,x=!1,C,E,w,R;m&&(y=m.getSpacedPoints(h),x=!0,f=!1,C=m.computeFrenetFrames(h,!1),E=new k,w=new k,R=new k),f||(g=0,d=0,p=0,_=0);let M=a.extractPoints(c),v=M.shape,I=M.holes;if(!ba.isClockWise(v)){v=v.reverse();for(let j=0,Q=I.length;j<Q;j++){let P=I[j];ba.isClockWise(P)&&(I[j]=P.reverse())}}let F=ba.triangulateShape(v,I),z=v;for(let j=0,Q=I.length;j<Q;j++){let P=I[j];v=v.concat(P)}function J(j,Q,P){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(Q,P)}let X=v.length,K=F.length;function q(j,Q,P){let dt,st,O,ft=j.x-Q.x,Nt=j.y-Q.y,St=P.x-j.x,A=P.y-j.y,b=ft*ft+Nt*Nt,Y=ft*A-Nt*St;if(Math.abs(Y)>Number.EPSILON){let nt=Math.sqrt(b),rt=Math.sqrt(St*St+A*A),it=Q.x-Nt/nt,xt=Q.y+ft/nt,gt=P.x-A/rt,yt=P.y+St/rt,Ht=((gt-it)*A-(yt-xt)*St)/(ft*A-Nt*St);dt=it+ft*Ht-j.x,st=xt+Nt*Ht-j.y;let pt=dt*dt+st*st;if(pt<=2)return new Pt(dt,st);O=Math.sqrt(pt/2)}else{let nt=!1;ft>Number.EPSILON?St>Number.EPSILON&&(nt=!0):ft<-Number.EPSILON?St<-Number.EPSILON&&(nt=!0):Math.sign(Nt)===Math.sign(A)&&(nt=!0),nt?(dt=-Nt,st=ft,O=Math.sqrt(b)):(dt=ft,st=Nt,O=Math.sqrt(b/2))}return new Pt(dt/O,st/O)}let et=[];for(let j=0,Q=z.length,P=Q-1,dt=j+1;j<Q;j++,P++,dt++)P===Q&&(P=0),dt===Q&&(dt=0),et[j]=q(z[j],z[P],z[dt]);let L=[],ct,ut=et.concat();for(let j=0,Q=I.length;j<Q;j++){let P=I[j];ct=[];for(let dt=0,st=P.length,O=st-1,ft=dt+1;dt<st;dt++,O++,ft++)O===st&&(O=0),ft===st&&(ft=0),ct[dt]=q(P[dt],P[O],P[ft]);L.push(ct),ut=ut.concat(ct)}for(let j=0;j<g;j++){let Q=j/g,P=d*Math.cos(Q*Math.PI/2),dt=p*Math.sin(Q*Math.PI/2)+_;for(let st=0,O=z.length;st<O;st++){let ft=J(z[st],et[st],dt);G(ft.x,ft.y,-P)}for(let st=0,O=I.length;st<O;st++){let ft=I[st];ct=L[st];for(let Nt=0,St=ft.length;Nt<St;Nt++){let A=J(ft[Nt],ct[Nt],dt);G(A.x,A.y,-P)}}}let It=p+_;for(let j=0;j<X;j++){let Q=f?J(v[j],ut[j],It):v[j];x?(w.copy(C.normals[0]).multiplyScalar(Q.x),E.copy(C.binormals[0]).multiplyScalar(Q.y),R.copy(y[0]).add(w).add(E),G(R.x,R.y,R.z)):G(Q.x,Q.y,0)}for(let j=1;j<=h;j++)for(let Q=0;Q<X;Q++){let P=f?J(v[Q],ut[Q],It):v[Q];x?(w.copy(C.normals[j]).multiplyScalar(P.x),E.copy(C.binormals[j]).multiplyScalar(P.y),R.copy(y[j]).add(w).add(E),G(R.x,R.y,R.z)):G(P.x,P.y,u/h*j)}for(let j=g-1;j>=0;j--){let Q=j/g,P=d*Math.cos(Q*Math.PI/2),dt=p*Math.sin(Q*Math.PI/2)+_;for(let st=0,O=z.length;st<O;st++){let ft=J(z[st],et[st],dt);G(ft.x,ft.y,u+P)}for(let st=0,O=I.length;st<O;st++){let ft=I[st];ct=L[st];for(let Nt=0,St=ft.length;Nt<St;Nt++){let A=J(ft[Nt],ct[Nt],dt);x?G(A.x,A.y+y[h-1].y,y[h-1].x+P):G(A.x,A.y,u+P)}}}D(),V();function D(){let j=i.length/3;if(f){let Q=0,P=X*Q;for(let dt=0;dt<K;dt++){let st=F[dt];ht(st[2]+P,st[1]+P,st[0]+P)}Q=h+g*2,P=X*Q;for(let dt=0;dt<K;dt++){let st=F[dt];ht(st[0]+P,st[1]+P,st[2]+P)}}else{for(let Q=0;Q<K;Q++){let P=F[Q];ht(P[2],P[1],P[0])}for(let Q=0;Q<K;Q++){let P=F[Q];ht(P[0]+X*h,P[1]+X*h,P[2]+X*h)}}n.addGroup(j,i.length/3-j,0)}function V(){let j=i.length/3,Q=0;H(z,Q),Q+=z.length;for(let P=0,dt=I.length;P<dt;P++){let st=I[P];H(st,Q),Q+=st.length}n.addGroup(j,i.length/3-j,1)}function H(j,Q){let P=j.length;for(;--P>=0;){let dt=P,st=P-1;st<0&&(st=j.length-1);for(let O=0,ft=h+g*2;O<ft;O++){let Nt=X*O,St=X*(O+1),A=Q+dt+Nt,b=Q+st+Nt,Y=Q+st+St,nt=Q+dt+St;at(A,b,Y,nt)}}}function G(j,Q,P){l.push(j),l.push(Q),l.push(P)}function ht(j,Q,P){lt(j),lt(Q),lt(P);let dt=i.length/3,st=S.generateTopUV(n,i,dt-3,dt-2,dt-1);wt(st[0]),wt(st[1]),wt(st[2])}function at(j,Q,P,dt){lt(j),lt(Q),lt(dt),lt(Q),lt(P),lt(dt);let st=i.length/3,O=S.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);wt(O[0]),wt(O[1]),wt(O[3]),wt(O[1]),wt(O[2]),wt(O[3])}function lt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function wt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sw(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qf[i.type]().fromJSON(i)),new r(n,t.options)}},Mw={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Pt(s,o),new Pt(a,l),new Pt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pt(o,1-l),new Pt(c,1-u),new Pt(f,1-p),new Pt(_,1-m)]:[new Pt(a,1-l),new Pt(h,1-u),new Pt(d,1-p),new Pt(g,1-m)]}};function Sw(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Da=class r extends Dn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let S=[],y=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+x,1-y),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let y=h[m][S+1],x=h[m][S],C=h[m+1][S],E=h[m+1][S+1];(m!==0||o>0)&&d.push(y,x,E),(m!==n-1||l<Math.PI)&&d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ms=class r extends Dn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new k,u=new k,f=new k;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let _=p/i*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,S=(i+1)*d+p;o.push(_,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ic=class r extends Dn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new k,f=new k,d=new k,p=new k,_=new k,g=new k,m=new k;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;S(x,s,o,t,d),S(x+.01,s,o,t,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let C=0;C<=i;++C){let E=C/i*Math.PI*2,w=-e*Math.cos(E),R=e*Math.sin(E);u.x=d.x+(w*m.x+R*_.x),u.y=d.y+(w*m.y+R*_.y),u.z=d.z+(w*m.z+R*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(y/n),h.push(C/i)}}for(let y=1;y<=n;y++)for(let x=1;x<=i;x++){let C=(i+1)*(y-1)+(x-1),E=(i+1)*y+(x-1),w=(i+1)*y+x,R=(i+1)*(y-1)+x;a.push(C,E,R),a.push(E,w,R)}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2));function S(y,x,C,E,w){let R=Math.cos(y),M=Math.sin(y),v=C/x*y,I=Math.cos(v);w.x=E*(2+I)*.5*R,w.y=E*(2+I)*M*.5,w.z=E*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Or=class extends Dr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=s0,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function tc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function bw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Eo=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nd=class extends Eo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hm,endingEnd:Hm}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gm:s=t,a=2*e-n;break;case Wm:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gm:o=t,l=2*n-e;break;case Wm:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,S=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*_+.5*p,x=d*g-d*_;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+S*o[c+C]+y*o[l+C]+x*o[u+C];return s}},id=class extends Eo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},rd=class extends Eo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tc(e,this.TimeBufferType),this.values=tc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tc(t.times,Array),values:tc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new id(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oc:e=this.InterpolantFactoryMethodDiscrete;break;case Rf:e=this.InterpolantFactoryMethodLinear;break;case fu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oc;case this.InterpolantFactoryMethodLinear:return Rf;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&bw(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fu,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Rf;var Ss=class extends Si{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=oc;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class extends Si{};sd.prototype.ValueTypeName="color";var od=class extends Si{};od.prototype.ValueTypeName="number";var ad=class extends Eo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Lr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Lc=class extends Si{InterpolantFactoryMethodLinear(t){return new ad(this.times,this.values,this.getValueSize(),t)}};Lc.prototype.ValueTypeName="quaternion";Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Si{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=oc;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ld=class extends Si{};ld.prototype.ValueTypeName="vector";var cd=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},ww=new cd,hd=class{constructor(t){this.manager=t!==void 0?t:ww,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dc=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Hu=new Ne,Xg=new k,qg=new k,ud=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xg),qg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qg),e.updateMatrixWorld(),Hu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fd=class extends ud{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uc=class extends Dc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new fd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Nc=class extends Dc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bd="\\[\\]\\.:\\/",Tw=new RegExp("["+bd+"]","g"),wd="[^"+bd+"]",Ew="[^"+bd.replace("\\.","")+"]",Aw=/((?:WC+[\/:])*)/.source.replace("WC",wd),Cw=/(WCOD+)?/.source.replace("WCOD",Ew),Rw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wd),Pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wd),Iw=new RegExp("^"+Aw+Cw+Rw+Pw+"$"),Lw=["material","materials","bones","map"],dd=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tw,"")}static parseTrackName(t){let e=Iw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Lw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=dd;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Na=new k;function di(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Na.copy(t),Na[n]=0,Na.normalize();let c=.5*o/(o+a),h=1-Na.angleTo(r)/l;return Math.sign(Na[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ro=class extends vs{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new k,l=new k,c=new k(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,p=new k,_=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:p.set(1,0,0),f[m+0]=di(p,l,"z","y",s,n),f[m+1]=1-di(p,l,"y","z",s,e);break;case 1:p.set(-1,0,0),f[m+0]=1-di(p,l,"z","y",s,n),f[m+1]=1-di(p,l,"y","z",s,e);break;case 2:p.set(0,1,0),f[m+0]=1-di(p,l,"x","z",s,t),f[m+1]=di(p,l,"z","x",s,n);break;case 3:p.set(0,-1,0),f[m+0]=1-di(p,l,"x","z",s,t),f[m+1]=1-di(p,l,"z","x",s,n);break;case 4:p.set(0,0,1),f[m+0]=1-di(p,l,"x","y",s,t),f[m+1]=1-di(p,l,"y","x",s,e);break;case 5:p.set(0,0,-1),f[m+0]=di(p,l,"x","y",s,t),f[m+1]=1-di(p,l,"y","x",s,e);break}}};var Dw="#2a62c8",Uw="#3c86e6";function Nw(){let r=new Sc(new Uint8Array([70,150,255]),3,1,Fc);return r.minFilter=r.magFilter=In,r.needsUpdate=!0,r}function Ow(r){let t=document.createElement("canvas");t.width=192,t.height=256;let e=t.getContext("2d");e.fillStyle="#f3f0e9",e.fillRect(0,0,192,256),e.strokeStyle="rgba(40,40,48,0.75)",e.lineWidth=2;let n=r*9301+49297,i=()=>(n=(n*9301+49297)%233280,n/233280);for(let o=0;o<11;o++){let a=26+o*20,l=18;e.beginPath(),e.moveTo(l,a);let c=120+i()*54;for(;l<c;)l+=6+i()*8,e.lineTo(l,a+(i()-.5)*7);e.stroke()}let s=new wc(t);return s.colorSpace=Rn,s}function Fw(){let r=new Ur(.62,.82,10,12),t=r.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),i=t.getY(e);t.setZ(e,Math.sin(n*9+i*4)*.025+Math.sin(i*13-n*3)*.02+(Math.random()-.5)*.018)}return r.computeVertexNormals(),r}function Bw(){let r=new Ra,t=10,e=.62,n=.78;for(let s=0;s<t*2;s++){let o=s/(t*2)*Math.PI*2,a=(s+1)/(t*2)*Math.PI*2,l=s%2?e:n;s===0&&r.moveTo(Math.cos(o)*l,Math.sin(o)*l),r.lineTo(Math.cos(o+.04)*l,Math.sin(o+.04)*l),r.lineTo(Math.cos(a-.04)*l,Math.sin(a-.04)*l)}let i=new To;return i.absarc(0,0,.24,0,Math.PI*2,!0),r.holes.push(i),new Pc(r,{depth:.22,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:6}).center()}var Hc=class{constructor(t){this.canvas=t,this.progress=0,this.visible=!1;try{this.renderer=new yc({canvas:t,antialias:(window.devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"})}catch(ut){console.warn("[services] WebGL unavailable",ut),this.failed=!0;return}let e=this.renderer;e.setClearColor(0,0),e.outputColorSpace=Rn;let n=this.scene=new Mc;this.camera=new Pn(34,1,.1,100),this.camera.position.set(0,0,9);let i=Nw(),s=new Or({color:new Qt(Dw),gradientMap:i}),o=new Or({color:new Qt(Uw),gradientMap:i}),a=new Or({color:new Qt("#173c86"),gradientMap:i}),l=new bo({color:new Qt("#0d2348")}),c=[],h=(ut,It)=>(n.add(ut),c.push({obj:ut,...It}),ut.visible=!1,ut),u=new ln,f=new ln,d=new ln,p=new ln;f.add(new de(new Ms(1.75,.09,12,120),s)),d.add(new de(new Ms(1.4,.075,12,100),s)),p.add(new de(new Ms(1.08,.065,12,90),o));let _=new de(new Ic(.46,.15,140,18,2,3),o);p.add(_),d.add(p),f.add(d),u.add(f);let g=new de(new Nr(.05,.05,5.4,10),a);g.rotation.z=Math.PI/2,u.add(g);for(let ut of[-1,1]){let It=new de(new Da(.2,20,14),o);It.position.x=ut*2.7,u.add(It)}this.rings=[f,d,p,_],h(u,{c0:.22,c1:.95,from:[-6.5,4.2,-3],to:[6.2,-3.4,.8],scale:1.15,spin:[.5,1.6,.4],base:[.4,-.5,.2]});let m=new ln,S=new de(new Ro(1.5,.08,1,2,.03),s),y=new ln,x=new de(new Ro(1.5,1,.07,2,.03),s),C=new de(new Ur(1.32,.84),l);C.position.z=.04,x.position.y=.5,C.position.y=.5,y.add(x,C),y.position.set(0,.04,-.5),y.rotation.x=-.35,m.add(S,y),h(m,{c0:0,c1:.42,from:[5.8,-4.2,-1.5],to:[-5.2,3.8,-2.5],scale:1,spin:[.9,1.3,.4],base:[.5,.6,0]});let E=new ln;E.add(new de(new Ro(.62,1.22,.08,3,.08),o));let w=new de(new Ur(.52,1.08),l);w.position.z=.045,E.add(w),h(E,{c0:.1,c1:.55,from:[-5.6,-3.9,.5],to:[3.4,4.6,-1.2],scale:.95,spin:[1.6,1.1,.9],base:[.3,.2,.6]});let R=new de(Bw(),s);h(R,{c0:.32,c1:.78,from:[6.4,1.2,-2.5],to:[-6.4,-2.6,-.5],scale:1,spin:[.4,.8,2.2],base:[.6,.4,0]});let M=new ln;for(let[ut,It,D]of[[-.55,-.05,.42],[0,.18,.58],[.55,-.02,.45],[.22,-.18,.4],[-.25,-.2,.38]]){let V=new de(new Da(D,20,14),o);V.position.set(ut,It,0),V.scale.z=.7,M.add(V)}h(M,{c0:.52,c1:1,from:[-6.5,-3.2,-2.5],to:[5.6,3.4,-3.5],scale:1.25,spin:[.2,.9,.3],base:[0,0,0]});let v=new ln;v.add(new de(new Ms(.42,.08,10,40),s));let I=new de(new Nr(.38,.38,.03,32),new Or({color:new Qt("#9fd3ff"),gradientMap:i,transparent:!0,opacity:.35}));I.rotation.x=Math.PI/2,v.add(I);let U=new de(new Nr(.07,.09,.9,12),a);U.position.set(.52,-.52,0),U.rotation.z=Math.PI/4,v.add(U),h(v,{c0:.44,c1:.92,from:[4.6,-5,.2],to:[-3.6,4.8,-1.4],scale:1.1,spin:[1.1,.7,1.4],base:[.2,.5,.3]});let F=new ln,z=new de(new Rc(.5,1.1,24,1,!0),s);z.material=s.clone(),z.material.side=hi,z.rotation.z=-Math.PI/2,F.add(z);let J=new de(new Nr(.08,.08,.45,10),a);J.position.set(-.25,-.3,0),F.add(J),h(F,{c0:.68,c1:1.12,from:[6.2,3.2,-1.2],to:[-2.6,-5.2,1],scale:1,spin:[.8,1.5,.6],base:[.3,.8,0]});let X=Fw();for(let ut=0;ut<8;ut++){let It=new de(X,new Or({map:Ow(ut+1),gradientMap:i,side:hi})),D=ut/7*2-1,V=.04+ut*.11;h(It,{c0:V,c1:V+.38,from:[6.5-ut%3,-4.6+D*1.4,-2+ut%4*1.1],to:[-6.5+ut%2*2,4.4+D*1.2,-1.5+ut%3*1.2],scale:.8+ut%3*.35,spin:[2.4+ut*.2,1.8,2.9-ut*.15],base:[ut,ut*2,ut*.5],paper:!0})}this.props=c;let K=220,q=new Float32Array(K*3);for(let ut=0;ut<K;ut++)q[ut*3]=(Math.random()-.5)*16,q[ut*3+1]=(Math.random()-.5)*10,q[ut*3+2]=(Math.random()-.5)*6-1;let et=new Dn;et.setAttribute("position",new Ce(q,3)),this.specks=new bc(et,new Aa({color:16777215,size:.04,transparent:!0,opacity:.8,depthWrite:!1})),n.add(this.specks);let L=new Uc(new Qt("#d8f4ff"),2.6);L.position.set(-3,5,6);let ct=new Nc(new Qt("#25427e"),1.1);n.add(L,ct),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.narrow=t/e<.9}setProgress(t){this.progress=t}render(t){if(this.failed||!this.visible)return;let e=this.progress,n=this.narrow?.55:1;for(let l of this.props){let c=(e-l.c0)/(l.c1-l.c0),h=c>-.02&&c<1.02;if(l.obj.visible=h,!h)continue;let u=c*c*(3-2*c),f=Math.sin(c*Math.PI)*.9;l.obj.position.set((zc.lerp(l.from[0],l.to[0],u)+f*.4)*n,zc.lerp(l.from[1],l.to[1],u)+f*.3+Math.sin(t*.6+l.base[0])*.05,zc.lerp(l.from[2],l.to[2],u));let d=l.paper?t*.35:t*.12;l.obj.rotation.set(l.base[0]+l.spin[0]*(c+d),l.base[1]+l.spin[1]*(c+d),l.base[2]+l.spin[2]*(c+d)*.6),l.obj.scale.setScalar(l.scale*(this.narrow?.75:1))}let[i,s,o,a]=this.rings;i.rotation.y=e*Math.PI*1.6+t*.18,s.rotation.x=e*Math.PI*2.2+t*.23,o.rotation.y=-e*Math.PI*2.8-t*.3,a.rotation.z=t*.4+e*4,this.specks.rotation.y=t*.02+e*.6,this.specks.position.y=-e*1.5,this.renderer.render(this.scene,this.camera)}};var x0=880,zw={about:125,services:350},Ts=[{x:72,y:58,z:-240,ry:42,rz:-5,s:.9,o:0},{x:35,y:29,z:-60,ry:24,rz:-3,s:.95,o:1},{x:3,y:11,z:60,ry:0,rz:0,s:1,o:1},{x:-30,y:-6,z:-140,ry:-30,rz:1.5,s:.92,o:1},{x:-50,y:-21,z:-380,ry:-96,rz:3,s:.86,o:.8},{x:-64,y:-33,z:-640,ry:-150,rz:4,s:.8,o:0}],kw=Object.keys(Ts[0]);function Vw(r,t,e,n,i){let s=i*i,o=s*i;return .5*(2*t+(-r+e)*i+(2*r-5*t+4*e-n)*s+(-r+3*t-3*e+n)*o)}function Hw(r,t){let e=Math.min(Ts.length-1.0001,Math.max(0,r+1)),n=Math.floor(e),i=e-n,s=Ts[Math.max(0,n-1)],o=Ts[n],a=Ts[n+1],l=Ts[Math.min(Ts.length-1,n+2)];for(let c of kw)t[c]=Vw(s[c],o[c],a[c],l[c],i);return t}function Gw(r){let t=r.textContent.trim().split(/\s+/);r.textContent="";let e=[];return t.forEach((n,i)=>{let s=document.createElement("span");s.className="word";for(let o of n){let a=document.createElement("span");a.className="ch",a.textContent=o,s.appendChild(a),e.push(a)}r.appendChild(s),i<t.length-1&&r.appendChild(document.createTextNode(" "))}),e}function v0({reduced:r,smooth:t}){let e=document.querySelector(".story"),n=e.querySelector(".story__pin"),i=e.querySelector(".about__title"),s=e.querySelector(".about__video"),o=s.querySelector("video"),a=e.querySelector(".services"),l=a.querySelector(".services__title"),c=[...a.querySelectorAll(".svc-card")],h=e.querySelector(".story__fade"),u=e.querySelector(".about__line path"),f=[...i.querySelectorAll(".aline")],d=[{spread:.55,rise:-.16,curve:.02,z:-260,ry:34,rx:18,rz:-12},{spread:.42,rise:-.05,curve:.03,z:-520,ry:-26,rx:30,rz:-6},{spread:.9,rise:.06,curve:.05,z:-1100,ry:40,rx:50,rz:8}],p=()=>parseFloat(getComputedStyle(i).fontSize)||100,_=f.map((et,L)=>{let ct=[];return et.querySelectorAll(".split").forEach(ut=>ct.push(...Gw(ut))),{chars:ct,cfg:d[L]}}),g=()=>Math.min(Math.max(window.innerWidth*(window.innerWidth<640?.26:.215),96),460),m=[...i.querySelectorAll(".aline--mid > .split")],S={k:0},y=0,x=()=>{y=g(),s.style.width=`${y}px`},C=()=>{let et=(y/2+2)*(1-S.k);m[0].style.transform=`translate3d(${et.toFixed(2)}px, 0, 0)`,m[1].style.transform=`translate3d(${(-et).toFixed(2)}px, 0, 0)`;let L=(50*(1-S.k)).toFixed(3);s.style.clipPath=`inset(0 ${L}% 0 ${L}%)`};x();let E={fade:0,t:0},w={c:0},R=null,M=null,v=()=>{let et=s.getBoundingClientRect(),L=n.getBoundingClientRect();M={top:et.top-L.top,left:et.left-L.left,right:L.right-et.right,bottom:L.bottom-et.bottom}},I=()=>{if(E.fade<=.001){a.classList.remove("is-open");return}a.classList.add("is-open"),M||v();let et=E.t,L=M.top*(1-et),ct=M.left*(1-et),ut=M.right*(1-et),It=M.bottom*(1-et);a.style.clipPath=`inset(${L.toFixed(1)}px ${ut.toFixed(1)}px ${It.toFixed(1)}px ${ct.toFixed(1)}px)`,a.style.opacity=E.fade},U={},F=()=>{let et=window.innerWidth<760,L=c.length;c.forEach((ct,ut)=>{let It=.25+w.c*(L-1+1.45)-ut,D=It>=-1&&It<=4;if(ct._on!==D&&(ct._on=D,ct.style.visibility=D?"visible":"hidden",D||(ct.style.opacity=0)),!D)return;Hw(It,U);let V=et?U.x*.55:U.x,H=et?U.y*1.05:U.y;ct.style.opacity=Math.max(0,Math.min(1,U.o)).toFixed(3),ct.style.transform=`translate(-50%, -50%) translate3d(${V}vw, ${H}vh, ${U.z}px) rotateY(${U.ry}deg) rotateZ(${U.rz}deg) scale(${U.s})`}),R&&R.setProgress(w.c)},z=ie.timeline({defaults:{ease:"none"}});_.forEach(({chars:et,cfg:L},ct)=>{let ut=(et.length-1)/2;z.fromTo(et,{x:It=>(It-ut)*L.spread*p(),y:It=>((It-ut)*L.rise+Math.pow(It-ut,2)*L.curve)*p(),z:It=>L.z-Math.abs(It-ut)*30,rotationY:It=>L.ry+(It-ut)*4,rotationX:L.rx,rotationZ:It=>L.rz+(It-ut)*1.5,opacity:.35},{x:0,y:0,z:0,rotationY:0,rotationX:0,rotationZ:0,opacity:1,duration:62,ease:"power2.out",stagger:{each:1.1,from:"center"}},ct*6)});let J=u.getTotalLength();ie.set(u,{strokeDasharray:J,strokeDashoffset:J}),z.to(u,{strokeDashoffset:0,duration:190,ease:"power1.inOut"},0);let X=e.querySelectorAll(".about__grid .eyebrow, .founder, .about__copy p");z.fromTo(X,{opacity:0,y:34},{opacity:1,y:0,duration:40,stagger:7,ease:"power2.out"},52),z.to(S,{k:1,duration:80,ease:"power2.inOut",onUpdate:C},112),z.to(E,{fade:1,duration:26,onUpdate:I},214),z.to(E,{t:1,duration:104,ease:"power3.inOut",onUpdate:I},236),z.fromTo(l,{opacity:.25,y:40},{opacity:1,y:0,duration:80,ease:"power2.out"},262),z.to(w,{c:1,duration:520,onUpdate:F},300),z.to(h,{opacity:1,duration:54},826),z.set({},{},x0);let K=Wt.create({trigger:e,start:"top top",end:"bottom bottom",animation:z,scrub:t||r?!0:.5,invalidateOnRefresh:!0,onRefreshInit:()=>{x(),M=null},onRefresh:()=>{C(),I(),F()}}),q=!1;return Wt.create({trigger:e,start:"top bottom",end:()=>`top+=${window.innerHeight*3.4} top`,onToggle:et=>{r||(et.isActive&&!q?(q=!0,o.play().catch(()=>{})):!et.isActive&&q&&(q=!1,o.pause()))}}),Wt.create({trigger:e,start:"top 200%",once:!0,onEnter:()=>{R=new Hc(a.querySelector(".services__gl")),R.setProgress(w.c)}}),C(),F(),{st:K,anchor(et){let L=zw[et];return K.start+(K.end-K.start)*(L/x0)},resize(){R&&R.resize(),x(),M=null,C(),F(),I()},tick(et,L){if(!R)return;let ct=window.innerHeight;R.visible=E.fade>.01&&L>K.start-ct&&L<K.end+ct,R.render(et)}}}var Td=(r,t)=>r.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function y0(r){let t=Math.max(14,Math.round((r.clientWidth||300)/8.6));return r.childElementCount===t?[...r.children]:(r.textContent="",Array.from({length:t},()=>r.appendChild(document.createElement("i"))))}function M0(r,t){let e=1-Math.pow(1-t,2.2),n=.22+2.4*Math.pow(t,1.6),i=r<n?Math.sqrt(1-r/n*(r/n)):0,s=Math.min(1,Math.max(0,(t-.78)/.22));return e*(i+(1-i)*s*s*(3-2*s))}function S0({reduced:r}){let t=document.querySelector(".metrics"),e=t.querySelector(".metrics__num"),n=t.querySelector(".metrics__big em"),i=t.querySelector(".metrics__aside"),s=[...t.querySelectorAll(".stat")].map(u=>{let f=u.querySelector(".stat__bars"),d=u.querySelector(".stat__value");return{bars:f,value:d,text:u.querySelector(".stat__text"),stripes:y0(f),target:parseFloat(d.dataset.count),dec:+(d.dataset.decimals||0),suffix:d.dataset.suffix||"",g:0,h:0}}),o=()=>s.forEach(u=>{u.h=u.bars.offsetHeight});o();let a=u=>{let f=u.stripes.length;for(let _=0;_<f;_++)u.stripes[_].style.transform=`scaleY(${M0(_/(f-1),u.g).toFixed(4)})`;let d=M0(0,u.g);u.text.style.transform=`translate3d(0, ${((1-d)*u.h).toFixed(1)}px, 0)`;let p=u.target*Math.min(1,u.g*1.05);u.value.textContent=Td(p,u.g<1&&u.target<10?Math.max(u.dec,2):u.dec)+u.suffix};if(r)return{resize(){}};let l={v:7.2};ie.set([e,n],{opacity:0,filter:"blur(14px)"}),ie.set(i,{opacity:0,y:20}),ie.set(s.map(u=>u.text),{opacity:0}),e.textContent="$7.2",s.forEach(a);let c=!1,h=()=>{if(c)return;c=!0;let u=ie.timeline();u.to([e,n],{opacity:1,filter:"blur(0px)",duration:1.1,ease:"power2.out",stagger:.2},0).to(l,{v:11.2,duration:2.4,ease:"power3.out",onUpdate:()=>{e.textContent="$"+Td(l.v,1)}},0).to(i,{opacity:1,y:0,duration:.9,ease:"power3.out"},.3),s.forEach((f,d)=>{let p=.2+d*.2;u.to(f.text,{opacity:1,duration:.6,ease:"power1.out"},p).to(f,{g:1,duration:2,ease:"power1.inOut",onUpdate:()=>a(f),onComplete:()=>{f.value.textContent=Td(f.target,f.dec)+f.suffix}},p)})};return Wt.create({trigger:t,start:()=>window.innerWidth<=980?"top 65%":"top 22%",once:!0,onEnter:h}),{resize(){s.forEach(u=>{u.stripes=y0(u.bars)}),o(),s.forEach(a)}}}var b0=()=>window.innerWidth>980;function w0({reduced:r}){let t=document.querySelector(".team"),e=t.querySelector(".team__bars"),n=t.querySelector(".team__head"),i=[...t.querySelectorAll(".member")],s=Array.from({length:18},()=>e.appendChild(document.createElement("i"))),o=[],a=0,l=()=>{El(a,window.innerWidth,window.innerHeight,0,o),o.forEach((u,f)=>{s[f].style.transform=`translate3d(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px, 0) scale(${(u.w/100).toFixed(4)}, ${(u.h/100).toFixed(4)})`})};l(),Wt.create({trigger:t,start:"top bottom",end:"top -60%",scrub:!0,onUpdate:u=>{a=ie.utils.clamp(0,1,(u.progress-100/160)/(60/160)),l()}});let c=i.map(u=>u.querySelector(".member__num"));if(r)return{resize:l};let h=n.querySelectorAll(".team__title, .team__sub");return ie.set(h,{opacity:0,filter:"blur(14px)",y:24}),ie.set(i,{opacity:0,y:46}),c.forEach(u=>{u.textContent="0+"}),Wt.create({trigger:t,start:()=>b0()?"top -38%":"top -10%",once:!0,onEnter:()=>ie.to(h,{opacity:1,filter:"blur(0px)",y:0,duration:1.2,stagger:.16,ease:"power3.out"})}),Wt.create({trigger:t,start:()=>b0()?"top -52%":"top -40%",once:!0,onEnter:()=>{ie.to(i,{opacity:1,y:0,duration:1.1,stagger:.14,ease:"power3.out"}),c.forEach((u,f)=>{let d=parseFloat(u.dataset.count),p={v:0};ie.to(p,{v:d,duration:2.6,delay:.25+f*.12,ease:"power2.out",onUpdate:()=>{u.textContent=Math.round(p.v).toLocaleString("en-US")+(u.dataset.suffix||"")}})})}}),{resize:l}}ie.registerPlugin(Wt);Wt.config({ignoreMobileResize:!0});var Lo=window.matchMedia("(prefers-reduced-motion: reduce)").matches;"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);var jn=null;Lo||(jn=new Dm({lerp:.085,smoothWheel:!0,wheelMultiplier:.95,touchMultiplier:1.4}),jn.on("scroll",Wt.update),ie.ticker.add(r=>jn.raf(r*1e3)),ie.ticker.lagSmoothing(0),jn.stop());var Xc=()=>jn?jn.scroll:window.scrollY,Ww=document.querySelector(".hero"),Xw=document.querySelector(".hero__content"),or=new Al(document.querySelector(".hero__gl")),Qn={y:0,bottom:1,q:0,smix:0},Rd={mix:0},qw=[],Ed=window.innerWidth,Po=window.innerHeight,Oa=()=>{Xw.style.transform=`translate3d(0, ${(Qn.y*Po).toFixed(2)}px, 0)`,or.state.heroBottom=Qn.bottom,or.state.mix=Math.max(Rd.mix,Qn.smix),or.setBars(Qn.bottom<1.02?El(Qn.q,Ed,Po,Qn.bottom*Po,qw):[])},A0=ie.timeline({defaults:{ease:"none"},onUpdate:Oa});A0.to(Qn,{smix:1,duration:34},0).to(Qn,{y:-.8,duration:40},0).to(Qn,{bottom:.26,duration:18,ease:"power1.inOut"},34).to(Qn,{q:.15,duration:18},34).to(Qn,{q:.55,duration:22},52).to(Qn,{y:-1.2,bottom:-.03,duration:26,ease:"power1.in"},74).to(Qn,{q:1,duration:26},74);var C0=1/0;Wt.create({trigger:Ww,start:"top top",end:"bottom bottom",animation:A0,scrub:!0,onRefresh:r=>{C0=r.end+Po}});Oa();var Wc=v0({reduced:Lo,smooth:!!jn}),Yw=S0({reduced:Lo}),Zw=w0({reduced:Lo}),Io=document.getElementById("nav"),Ad=document.getElementById("nav-toggle");Ad.addEventListener("click",()=>{let r=!Io.classList.contains("is-open");Io.classList.toggle("is-open",r),Ad.setAttribute("aria-expanded",String(r))});var Gc=0,T0=()=>{let r=Xc();if(Io.classList.contains("is-open")){Gc=r;return}r>140&&r>Gc+2?Io.classList.add("is-hidden"):(r<Gc-2||r<=140)&&Io.classList.remove("is-hidden"),Gc=r};jn?jn.on("scroll",T0):window.addEventListener("scroll",T0,{passive:!0});var $w=r=>{if(r==="#top")return 0;if(r==="#about")return Wc.anchor("about");if(r==="#services")return Wc.anchor("services");let t=document.querySelector(r);return t?t.getBoundingClientRect().top+Xc():null};document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e.length<2)return;let n=$w(e);if(n!=null)if(r.preventDefault(),Io.classList.remove("is-open"),Ad.setAttribute("aria-expanded","false"),jn){let i=Math.abs(n-Xc());jn.scrollTo(n,{duration:Math.min(2.6,.9+i/(Po*8))})}else window.scrollTo({top:n,behavior:Lo?"auto":"smooth"})});var Pd=!1;ie.ticker.add(r=>{let t=Xc();Pd&&t<C0&&or.render(r),Wc.tick(r,t)});var E0=0,Jw=window.matchMedia("(pointer: coarse)").matches;window.addEventListener("resize",()=>{Jw&&window.innerWidth===Ed||(clearTimeout(E0),E0=setTimeout(()=>{Ed=window.innerWidth,Po=window.innerHeight,or.resize(),Wc.resize(),Yw.resize(),Zw.resize(),Oa(),Wt.refresh()},120))});document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Wt.refresh());var Cd=window.matchMedia("(min-width: 981px)").matches,R0={logo:document.querySelector(".nav__logo"),menu:document.querySelector(".nav__menu"),menuLinks:document.querySelectorAll(".nav__menu a"),right:document.querySelector(".nav__right"),words:document.querySelectorAll(".hero__title .w"),sub:document.querySelector(".hero__sub"),cta:document.querySelector(".hero__cta")};function Kw(){Pd=!0;let r=R0,t=ie.timeline({onComplete:()=>{Cd&&ie.set(r.menu,{clearProps:"clipPath"})}});t.to(or.state,{reveal:1,duration:.8,ease:"power2.out"},0).to(or.state,{warp:0,duration:2.2,ease:"power3.inOut"},.1).to(r.logo,{opacity:1,scale:1,duration:.8,ease:"power3.out"},.9).to(r.right,{opacity:1,x:0,duration:.8,ease:"power3.out"},1.05).to(r.words,{opacity:1,filter:"blur(0px)",yPercent:0,duration:1.2,stagger:.09,ease:"power3.out"},1.1).to(r.sub,{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power3.out"},1.6).to(r.cta,{opacity:1,y:0,duration:.9,ease:"power3.out"},1.8).add(()=>{document.body.classList.remove("is-loading"),jn&&jn.start()},1.4).to(Rd,{mix:1,duration:7,ease:"sine.inOut",onUpdate:Oa},2.8),Cd&&t.fromTo(r.menu,{opacity:1,clipPath:"inset(0% 50% 0% 50% round 9px)"},{clipPath:"inset(0% 0% 0% 0% round 9px)",duration:1.1,ease:"power3.inOut"},.95).to(r.menuLinks,{opacity:1,y:0,duration:.6,stagger:.07,ease:"power2.out"},1.25)}if(Lo)Pd=!0,or.state.reveal=1,or.state.warp=0,Rd.mix=1,Oa(),hu({el:document.getElementById("preloader"),reduced:!0,onDone:()=>document.body.classList.remove("is-loading")});else{let r=R0;ie.set(r.logo,{opacity:0,scale:.7}),ie.set(r.right,{opacity:0,x:24}),ie.set(r.words,{opacity:0,filter:"blur(14px)",yPercent:35}),ie.set(r.sub,{opacity:0,y:18,filter:"blur(6px)"}),ie.set(r.cta,{opacity:0,y:18}),Cd&&(ie.set(r.menu,{clipPath:"inset(0% 50% 0% 50% round 9px)"}),ie.set(r.menuLinks,{opacity:0,y:6})),hu({el:document.getElementById("preloader"),reduced:!1,onReveal:Kw})}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
