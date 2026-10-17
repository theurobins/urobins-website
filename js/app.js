(()=>{var Ig=Object.defineProperty;var Lg=(r,t,e)=>t in r?Ig(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Dt=(r,t,e)=>Lg(r,typeof t!="symbol"?t+"":t,e);function Ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Rc,en,Re,$n=1e8,we=1/$n,xc=Math.PI*2,Dg=xc/4,Ug=0,Zf=Math.sqrt,Ng=Math.cos,Og=Math.sin,Ye=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},Pi=function(t){return typeof t=="number"},Ea=function(t){return typeof t=="undefined"},vi=function(t){return typeof t=="object"},In=function(t){return t!==!1},Pc=function(){return typeof window!="undefined"},_a=function(t){return Oe(t)||Ye(t)},$f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,vc=/(?:-?\.?\d|\.)+/gi,Ic=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lc=/[+-]=-?[.\d]+/,Jf=/[^,'"\[\]\s]+/gi,Fg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,_i,yc,Dc,Bn={},Ma={},Kf,Qf=function(t){return(Ma=fs(t,Bn))&&on},Aa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},To=function(t,e){return!e&&console.warn(t)},jf=function(t,e){return t&&(Bn[t]=e)&&Ma&&(Ma[t]=e)||Bn},Eo=function(){return 0},Bg={suppressEvents:!0,isStart:!0,kill:!1},xa={suppressEvents:!0,kill:!1},zg={suppressEvents:!0},Uc={},er=[],Mc={},td,Rn={},fc={},kf=30,va=[],Nc="",Oc=function(t){var e=t[0],n,i;if(vi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=va.length;i--&&!va[i].targetTest(e););n=va[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new kc(t[i],n)))||t.splice(i,1);return t},nr=function(t){return t._gsap||Oc(Jn(t))[0]._gsap},Fc=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Ea(n)&&t.getAttribute&&t.getAttribute(e)||n},_n=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},Pr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Sa=function(){var t=er.length,e=er.slice(0),n,i;for(Mc={},er.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bc=function(t){return!!(t._initted||t._startAt||t.add)},ed=function(t,e,n,i){er.length&&!en&&Sa(),t.render(e,n,i||!!(en&&e<0&&Bc(t))),er.length&&!en&&Sa()},nd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Jf).length<2?e:Ye(t)?t.trim():t},id=function(t){return t},zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fs=function(t,e){for(var n in e)t[n]=e[n];return t},Vf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ba=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},So=function(t){var e=t.parent||Le,n=t.keyframes?Vg(sn(t.keyframes)):zn;if(In(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Hg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ca=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Er=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Sc=function(t,e,n,i){return t._startAt&&(en?t._startAt.revert(xa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Wg=function r(t){return!t||t._ts&&r(t.parent)},Hf=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t=Ve(t/e));return t&&n===t?n-1:n},wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ra=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Pa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ra(t),n._dirty||Er(n,t)),t},sd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=wa(t.rawTime(),e),(!e._dur||Ro(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Er(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},xi=function(t,e,n,i){return e.parent&&ir(e),e._start=Ve((Pi(n)?n:n||t!==Le?Zn(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rd(t,e,"_first","_last",t._sort?"_start":0),bc(e)||(t._recent=e),i||sd(t,e),t._ts<0&&Pa(t,t._tTime),t},od=function(t,e){return(Bn.ScrollTrigger||Aa("scrollTrigger",e))&&Bn.ScrollTrigger.create(e,t)},ad=function(t,e,n,i,s){if(Gc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&td!==Pn.frame)return er.push(t),t._lazy=[s,i],1},Xg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},bc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Xg(t)&&!(!t._initted&&bc(t))||(t._ts<0||t._dp._ts<0)&&!bc(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Ro(0,t._tDur,e),h=ds(l,a),t._yoyo&&h&1&&(o=1-o),h!==ds(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||en||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&ad(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Sc(t,e,n,!0),t._onUpdate&&!n&&Fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ir(t,1),!n&&!en&&(Fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ps=function(t,e,n,i){var s=t._repeat,o=Ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ve(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Pa(t,t._tTime=t._tDur*a),t.parent&&Ra(t),n||Er(t.parent,t),t},Gf=function(t){return t instanceof tn?Er(t):ps(t,t._dur)},Zg={_start:0,endTime:Eo,totalDuration:Eo},Zn=function r(t,e,n){var i=t.labels,s=t._recent||Zg,o=t.duration()>=$n?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},bo=function(t,e,n){var i=Pi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},rr=function(t,e){return t||t===0?e(t):e},Ro=function(t,e,n){return n<t?t:n>e?e:n},nn=function(t,e){return!Ye(t)||!(e=Fg.exec(t))?"":e[1]},$g=function(t,e,n){return rr(n,function(i){return Ro(t,e,i)})},wc=[].slice,ld=function(t,e){return t&&vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vi(t[0]))&&!t.nodeType&&t!==_i},Jg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||ld(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ye(t)&&!n&&(yc||!ms())?wc.call((e||Dc).querySelectorAll(t),0):sn(t)?Jg(t,n):ld(t)?wc.call(t,0):t?[t]:[]},Tc=function(t){return t=Jn(t)[0]||To("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Jn(e,n.querySelectorAll?n:n===t?To("Invalid scope")||Dc.createElement("div"):t)}},cd=function(t){return t.sort(function(){return .5-Math.random()})},hd=function(t){if(Oe(t))return t;var e=vi(t)?t:{each:t},n=Ar(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Ye(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,_){var m=(_||e).length,g=o[m],p,y,v,x,C,E,T,R,S;if(!g){if(S=e.grid==="auto"?0:(e.grid||[1,$n])[1],!S){for(T=-$n;T<(T=_[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(g=o[m]=[],p=l?Math.min(S,m)*h-.5:i%S,y=S===$n?0:l?m*f/S-.5:i/S|0,T=0,R=$n,E=0;E<m;E++)v=E%S-p,x=y-(E/S|0),g[E]=C=c?Math.abs(c==="y"?x:v):Zf(v*v+x*x),C>T&&(T=C),C<R&&(R=C);i==="random"&&cd(g),g.max=T-R,g.min=R,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=nn(e.amount||e.each)||0,n=n&&m<0?vd(n):n}return m=(g[u]-g.min)/g.max||0,Ve(g.b+(n?n(m):m)*g.v)+g.u}},Ec=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Pi(n)?0:nn(n))}},ud=function(t,e){var n=sn(t),i,s;return!n&&vi(t)&&(i=n=t.radius||$n,t.values?(t=Jn(t.values),(s=!Pi(t[0]))&&(i*=i)):t=Ec(t.increment)),rr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=$n,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Pi(o)?h:h+nn(o)}:Ec(t))},fd=function(t,e,n,i){return rr(sn(t)?!e:n===!0?!!(n=0):!i,function(){return sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Qg=function(t,e){return function(n){return t(parseFloat(n))+(e||nn(n))}},jg=function(t,e,n){return pd(t,e,0,1,n)},dd=function(t,e,n){return rr(n,function(i){return t[~~e(i)]})},t0=function r(t,e,n){var i=e-t;return sn(t)?dd(t,r(0,t.length),e):rr(n,function(s){return(i+(s-t)%i)%i+t})},e0=function r(t,e,n){var i=e-t,s=i*2;return sn(t)?dd(t,r(0,t.length-1),e):rr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},gs=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Jf:vc),n+=t.substr(e,i-e)+fd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},pd=function(t,e,n,i,s){var o=e-t,a=i-n;return rr(s,function(l){return n+((l-t)/o*a||0)})},n0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ye(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(sn(t)&&!sn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var m=Math.min(u,~~_);return h[m](_-m)},n=e}else i||(t=fs(sn(t)?[]:{},t));if(!h){for(l in e)Vc.call(a,t,l,"get",e[l]);s=function(_){return qc(_,a)||(o?t.p:t)}}}return rr(n,s)},Wf=function(t,e,n){var i=t.labels,s=$n,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&er.length&&Sa(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},yo=function(t){return ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&Fn(t,"onInterrupt"),t},hs,md=[],gd=function(t){if(t)if(t=!t.name&&t.default||t,Pc()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Eo,render:qc,add:Vc,kill:x0,modifier:_0,rawVars:0},o={targetTest:0,get:0,getSetter:Ia,aliases:{},register:0};if(ms(),t!==i){if(Rn[e])return;zn(i,zn(ba(t,s),o)),fs(i.prototype,fs(s,ba(t,o))),Rn[i.prop=e]=i,t.targetTest&&(va.push(i),Uc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jf(e,i),t.register&&t.register(on,i,xn)}else md.push(t)},be=255,Mo={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},dc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},_d=function(t,e,n){var i=t?Pi(t)?[t>>16,t>>8&be,t&be]:0:Mo.black,s,o,a,l,c,h,f,u,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Mo[t])i=Mo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(vc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=dc(l+1/3,s,o),i[1]=dc(l,s,o),i[2]=dc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ic),n&&i.length<4&&(i[3]=1),i}else i=t.match(vc)||Mo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},xd=function(t){var e=[],n=[],i=-1;return t.split(Ri).forEach(function(s){var o=s.match(Rr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Xf=function(t,e,n){var i="",s=(t+i).match(Ri),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=_d(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=xd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ri,"1").split(Rr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ri),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ri=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Mo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),i0=/hsl[a]?\(/,zc=function(t){var e=t.join(" "),n;if(Ri.lastIndex=0,Ri.test(e))return n=i0.test(e),t[1]=Xf(t[1],n),t[0]=Xf(t[0],n,xd(t[1])),!0},Ao,Pn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,_=function m(g){var p=r()-i,y=g===!0,v,x,C,E;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,v=C-o,(v>0||y)&&(E=++f.frame,u=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(m)),x)for(d=0;d<a.length;d++)a[d](C,u,E,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Kf&&(!yc&&Pc()&&(_i=yc=window,Dc=_i.document||{},Bn.gsap=on,(_i.gsapVersions||(_i.gsapVersions=[])).push(on.version),Qf(Ma||_i.GreenSockGlobals||!_i.gsap&&_i||{}),md.forEach(gd)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Ao=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=Eo},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,p,y){var v=p?function(x,C,E,T){g(x,C,E,T),f.remove(v)}:g;return f.remove(g),a[y?"unshift":"push"](v),ms(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),ms=function(){return!Ao&&Pn.wake()},oe={},r0=/^[\d.\-M][\d.\-,\s]/,s0=/["']/g,o0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(s0,"").trim():+c,i=l.substr(a+1).trim();return e},a0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},l0=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[o0(e[1])]:a0(t).split(",").map(nd)):oe._CE&&r0.test(t)?oe._CE("",t):n},vd=function(t){return function(e){return 1-t(1-e)}},yd=function r(t,e){for(var n=t._first,i;n;)n instanceof tn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ar=function(t,e){return t&&(Oe(t)?t:oe[t]||l0(t))||e},Ir=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return _n(t,function(a){oe[a]=Bn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Md=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/xc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Og((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Md(a);return s=xc/s,l.config=function(c,h){return r(t,c,h)},l},mc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Md(n);return i.config=function(s){return r(t,s)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ir(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Ir("Elastic",pc("in"),pc("out"),pc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ir("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ir("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ir("Circ",function(r){return-(Zf(1-r*r)-1)});Ir("Sine",function(r){return r===1?1:-Ng(r*Dg)+1});Ir("Back",mc("in"),mc("out"),mc());oe.SteppedEase=oe.steps=Bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*Ro(0,o,a)|0)+s)*n}}};us.ease=oe["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nc+=r+","+r+"Params,"});var kc=function(t,e){this.id=Ug++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fc,this.set=e?e.getSetter:Ia},Co=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Ao||Pn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pa(this,n),!s._dp||s.parent||sd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ed(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Ro(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ra(this),Gg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zg);var i=en;return en=n,Bc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Zn(this,n),In(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:id,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){yo(this)},r})();zn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var tn=(function(r){Yf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Le&&xi(n.parent||Le,Ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&od(Ci(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return bo(0,arguments,this),this},e.from=function(i,s,o){return bo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return bo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Zn(this,o),1),this},e.call=function(i,s,o){return xi(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ke(i,o,Zn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,So(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,So(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ve(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,_,m,g,p,y,v,x,C,E,T;if(this!==Le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(u=Ve(h%g),h===l?(m=this._repeat,u=c):(C=Ve(h/g),m=~~C,m&&m===C&&(u=c,m--),u>c&&(u=c)),C=ds(this._tTime,g),!a&&this._tTime&&C!==m&&this._tTime-C*g-this._dur<=0&&(C=m),E&&m&1&&(u=c-u,T=1),m!==C&&!this._lock){var R=E&&C&1,S=R===(E&&m&1);if(m<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ve(m*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;yd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Yg(this,Ve(a),Ve(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!C&&(Fn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-we);break}}d=_}else{d=this._last;for(var M=i<0?i:u;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||en&&Bc(d)),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=M?-we:we);break}}d=_}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-we)._zTime=u>=a?1:-1,this._ts))return this._start=x,Ra(this),this.render(i,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ir(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Fn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Pi(s)||(s=Zn(this,s,i)),!(i instanceof Co)){if(sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Oe(i))i=ke.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-$n);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&Ca(this,i),i===this._recent&&(this._recent=this._last),Er(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||Eo,o);return a.data="isPause",this._hasPause=1,xi(this,a,Zn(this,i))},e.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&ir(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Jn(i),l=this._first,c=Pi(s),h;l;)l instanceof ke?kg(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Zn(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,_=ke.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&ps(_,g,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,zn({startAt:{time:Zn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wf(this,Zn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wf(this,Zn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Er(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Er(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=$n,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ps(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Le._ts&&(ed(Le,wa(i,Le)),td=Pn.frame),Pn.frame>=kf){kf+=Ln.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&Ln.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},t})(Co);zn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var c0=function(t,e,n,i,s,o,a){var l=new xn(this._pt,t,e,0,1,Xc,null,s),c=0,h=0,f,u,d,_,m,g,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=gs(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(uc)||[];f=uc.exec(i);)_=f[0],m=i.substring(c,f.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),_!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:m||h===1?m:",",s:g,c:_.charAt(1)==="="?Pr(g,_)-g:parseFloat(_)-g,m:d&&d<4?Math.round:0},c=uc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Lc.test(i)||p)&&(l.e=0),this._pt=l,l},Vc=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:Oe(f)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Oe(f)?c?p0:wd:Wc,_;if(Ye(i)&&(~i.indexOf("random(")&&(i=gs(i)),i.charAt(1)==="="&&(_=Pr(u,i)+(nn(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Ac)return!isNaN(u*i)&&i!==""?(_=new xn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?g0:Td,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Aa(e,i),c0.call(this,t,e,u,i,d,l||Ln.stringFilter,c))},h0=function(t,e,n,i,s){if(Oe(t)&&(t=wo(t,s,e,n,i)),!vi(t)||t.style&&t.nodeType||sn(t)||$f(t))return Ye(t)?wo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=wo(t[a],s,e,n,i);return o},Hc=function(t,e,n,i,s,o){var a,l,c,h;if(Rn[t]&&(a=new Rn[t]).init(s,a.rawVars?e[t]:h0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new xn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},tr,Ac,Gc=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,_=t._dur,m=t._startAt,g=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:g,v=t._overwrite==="auto"&&!Rc,x=t.timeline,C,E,T,R,S,M,P,D,O,k,Y,W,Z;if(x&&(!u||!s)&&(s="none"),t._ease=Ar(s,us.ease),t._yEase=f?vd(Ar(f===!0?s:f,us.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||u&&!i.stagger){if(D=g[0]?nr(g[0]).harness:0,W=D&&i[D.prop],C=ba(i,Uc),m&&(m._zTime<0&&m.progress(1),e<0&&h&&a&&!d?m.render(-1,!0):m.revert(h&&_?xa:Bg),m._lazy=0),o){if(ir(t._startAt=ke.set(g,zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!a&&!d)&&t._startAt.revert(xa),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!m){if(e&&(a=!1),T=zn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&In(l),immediateRender:a,stagger:0,parent:p},C),W&&(T[D.prop]=W),ir(t._startAt=ke.set(g,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(xa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&In(l)||l&&!_,E=0;E<g.length;E++){if(S=g[E],P=S._gsap||Oc(g)[E]._gsap,t._ptLookup[E]=k={},Mc[P.id]&&er.length&&Sa(),Y=y===g?E:y.indexOf(S),D&&(O=new D).init(S,W||C,t,Y,y)!==!1&&(t._pt=R=new xn(t._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){k[H]=R}),O.priority&&(M=1)),!D||W)for(T in C)Rn[T]&&(O=Hc(T,C,t,Y,S,y))?O.priority&&(M=1):k[T]=R=Vc.call(t,S,T,"get",C[T],Y,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),v&&t._pt&&(tr=t,Le.killTweensOf(S,k,t.globalTime(e)),Z=!t.parent,tr=0),t._pt&&l&&(Mc[P.id]=1)}M&&Yc(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,u&&e<=0&&x.render($n,!0,!0)},u0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ac=1,t.vars[e]="+=0",Gc(t,a),Ac=0,l?To(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Fe(n)+nn(f.e)),f.b&&(f.b=h.s+nn(f.b))},f0=function(t,e){var n=t[0]?nr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=fs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},d0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},wo=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?gs(t):t},Sd=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bd={};_n(Sd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return bd[r]=1});var ke=(function(r){Yf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:So(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Le,v=(sn(n)||$f(n)?Pi(n[0]):"length"in i)?[n]:Jn(n),x,C,E,T,R,S,M,P;if(a._targets=v.length?Oc(v):To("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||u||_a(c)||_a(h)){if(i=a.vars,x=a.timeline=new tn({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Ci(a),x._start=0,u||_a(c)||_a(h)){if(T=v.length,M=u&&hd(u),vi(u))for(R in u)~Sd.indexOf(R)&&(P||(P={}),P[R]=u[R]);for(C=0;C<T;C++)E=ba(i,bd),E.stagger=0,p&&(E.yoyoEase=p),P&&fs(E,P),S=v[C],E.duration=+wo(c,Ci(a),C,S,v),E.delay=(+wo(h,Ci(a),C,S,v)||0)-a._delay,!u&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(S,E,M?M(C,S,v):0),x._ease=oe.none;x.duration()?c=h=0:a.timeline=0}else if(_){So(zn(x.vars.defaults,{ease:"none"})),x._ease=Ar(_.ease||i.ease||"none");var D=0,O,k,Y;if(sn(_))_.forEach(function(W){return x.to(v,W,">")}),x.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||d0(R,_[R],E,_.easeEach);for(R in E)for(O=E[R].sort(function(W,Z){return W.t-Z.t}),D=0,C=0;C<O.length;C++)k=O[C],Y={ease:k.e,duration:(k.t-(C?O[C-1].t:0))/100*c},Y[R]=k.v,x.to(v,Y,D),D+=Y.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Rc&&(tr=Ci(a),Le.killTweensOf(v),tr=0),xi(y,Ci(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ve(y._time)&&In(f)&&Wg(Ci(a))&&y.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),g&&od(Ci(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,u,d,_,m,g,p,y,v,x;if(!c)qg(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,o);if(u=Ve(f%m),f===l?(_=this._repeat,u=c):(g=Ve(f/m),_=~~g,_&&_===g?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,u=c-u),g=ds(this._tTime,m),u===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(v&&this._yEase&&yd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(Ve(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(ad(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(u/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!g&&(Fn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Sc(this,i,s,o),Fn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Sc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ir(this,1),!s&&!(h&&!a)&&(f||a||p)&&(Fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ao||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gc(this,c),h=this._ease(c/this._dur),u0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Pa(this,0),this.parent||rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||yo(this),this.parent&&o!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Jn(i):a,c=this._ptLookup,h=this._pt,f,u,d,_,m,g,p;if((!s||s==="all")&&Hg(a,l))return s==="all"&&(this._pt=0),yo(this);for(f=this._op=this._op||[],s!=="all"&&(Ye(s)&&(m={},_n(s,function(y){return m[y]=1}),s=m),s=f0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(f[p]=s,_=u,d={}):(d=f[p]=f[p]||{},_=s);for(m in _)g=u&&u[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Ca(this,g,"_pt"),delete u[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&h&&yo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return bo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return bo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Le.killTweensOf(i,s,o)},t})(Co);zn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new tn,e=wc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Wc=function(t,e,n){return t[e]=n},wd=function(t,e,n){return t[e](n)},p0=function(t,e,n,i){return t[e](i.fp,n)},m0=function(t,e,n){return t.setAttribute(e,n)},Ia=function(t,e){return Oe(t[e])?wd:Ea(t[e])&&t.setAttribute?m0:Wc},Td=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},g0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xc=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},qc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},x0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ca(this,e,"_pt"):e.dep||(n=1),e=i;return!n},v0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Yc=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},xn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Td,this.d=l||this,this.set=c||Wc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=v0,this.m=n,this.mt=s,this.tween=i},r})();_n(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Uc[r]=1});Bn.TweenMax=Bn.TweenLite=ke;Bn.TimelineLite=Bn.TimelineMax=tn;Le=new tn({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=zc;var Cr=[],ya={},y0=[],qf=0,M0=0,gc=function(t){return(ya[t]||y0).map(function(e){return e()})},Cc=function(){var t=Date.now(),e=[];t-qf>2&&(gc("matchMediaInit"),Cr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),gc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qf=t,gc("matchMedia"))},Ed=(function(){function r(e,n){this.selector=n&&Tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tc(s)),Re=o,f=i.apply(o,arguments),Oe(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Cr.length;o--;)Cr[o].id===this.id&&Cr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),S0=(function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){vi(n)||(n={matches:n});var o=new Ed(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=_i.matchMedia(n[c]),l&&(Cr.indexOf(o)<0&&Cr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cc):l.addEventListener("change",Cc)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ta={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gd(i)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=Jn(t)[0]);var s=nr(t||{}).get,o=n?id:nd;return n==="native"&&(n=""),t&&(e?o((Rn[e]&&Rn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Rn[a]&&Rn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Jn(t),t.length>1){var i=t.map(function(h){return on.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Rn[e],a=nr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;hs._pt=0,f.init(t,n?h+n:h,hs,0,[t]),f.render(1,f),hs._pt&&qc(1,hs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=on.to(t,zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ar(t.ease,us.ease)),Vf(us,t||{})},config:function(t){return Vf(Ln,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!Bn[a]&&To(e+" effect requires "+a+" plugin.")}),fc[e]=function(a,l,c){return n(Jn(a),zn(l||{},s),c)},o&&(tn.prototype[e]=function(a,l,c){return this.add(fc[e](a,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Ar(e)},parseEase:function(t,e){return arguments.length?Ar(t,e):oe},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new tn(t),i,s;for(n.smoothChildTiming=In(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Le,n,0),n},context:function(t,e){return t?new Ed(t,e):Re},matchMedia:function(t){return new S0(t)},matchMediaRefresh:function(){return Cr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cc()},addEventListener:function(t,e){var n=ya[t]||(ya[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ya[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:t0,wrapYoyo:e0,distribute:hd,random:fd,snap:ud,normalize:jg,getUnit:nn,clamp:$g,splitColor:_d,toArray:Jn,selector:Tc,mapRange:pd,pipe:Kg,unitize:Qg,interpolate:n0,shuffle:cd},install:Qf,effects:fc,ticker:Pn,updateRoot:tn.updateRoot,plugins:Rn,globalTimeline:Le,core:{PropTween:xn,globals:jf,Tween:ke,Timeline:tn,Animation:Co,getCache:nr,_removeLinkedListItem:Ca,reverting:function(){return en},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Rc=t}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ta[r]=ke[r]});Pn.add(tn.updateRoot);hs=Ta.to({},{duration:0});var b0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},w0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=b0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},_c=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},_n(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}w0(a,s)}}}},on=Ta.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_c("roundProps",Ec),_c("modifiers"),_c("snap",ud))||Ta;ke.version=tn.version=on.version="3.13.0";Kf=1;Pc()&&ms();var T0=oe.Power0,E0=oe.Power1,A0=oe.Power2,C0=oe.Power3,R0=oe.Power4,P0=oe.Linear,I0=oe.Quad,L0=oe.Cubic,D0=oe.Quart,U0=oe.Quint,N0=oe.Strong,O0=oe.Elastic,F0=oe.Back,B0=oe.SteppedEase,z0=oe.Bounce,k0=oe.Sine,V0=oe.Expo,H0=oe.Circ;var Ad,sr,xs,jc,Nr,G0,Cd,th,W0=function(){return typeof window!="undefined"},Li={},Ur=180/Math.PI,vs=Math.PI/180,_s=Math.atan2,Rd=1e8,eh=/([A-Z])/g,X0=/(left|right|width|margin|padding|x)/i,q0=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$c=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Z0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Bd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},J0=function(t,e,n){return t.style[e]=n},K0=function(t,e,n){return t.style.setProperty(e,n)},Q0=function(t,e,n){return t._gsap[e]=n},j0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},t_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},e_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},De="transform",Dn=De+"Origin",n_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ii(i,a)}):this.tfm[t]=o.x?o[t]:Ii(i,t),t===Dn&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},zd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},i_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(eh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=th(),(!s||!s.isStart)&&!n[De]&&(zd(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},kd=function(t,e){var n={target:t,props:[],revert:i_,save:n_};return t._gsap||on.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Vd,Jc=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},Kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(eh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ys(e)||e,1)||""},Pd="O,Moz,ms,Ms,Webkit".split(","),ys=function(t,e,n){var i=e||Nr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Pd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Pd[o]:"")+t},Kc=function(){W0()&&window.document&&(Ad=window,sr=Ad.document,xs=sr.documentElement,Nr=Jc("div")||{style:{}},G0=Jc("div"),De=ys(De),Dn=De+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vd=!!ys("perspective"),th=on.core.reverting,jc=1)},Id=function(t){var e=t.ownerSVGElement,n=Jc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),xs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),xs.removeChild(n),s},Ld=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Hd=function(t){var e,n;try{e=t.getBBox()}catch{e=Id(t),n=1}return e&&(e.width||e.height)||n||(e=Id(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ld(t,["x","cx","x1"])||0,y:+Ld(t,["y","cy","y1"])||0,width:0,height:0}:e},Gd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hd(t))},Or=function(t,e){if(e){var n=t.style,i;e in Li&&e!==Dn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(eh,"-$1").toLowerCase())):n.removeAttribute(e)}},or=function(t,e,n,i,s,o){var a=new xn(t._pt,e,n,0,1,o?Bd:Fd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Dd={deg:1,rad:1,turn:1},r_={grid:1,flex:1},ar=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Nr.style,l=X0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",_,m,g,p;if(i===o||!s||Dd[i]||Dd[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Gd(t),(d||o==="%")&&(Li[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Fe(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(u?o:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===sr||!m.appendChild)&&(m=sr.body),g=m._gsap,g&&d&&g.width&&l&&g.time===Pn.time&&!g.uncache)return Fe(s/g.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[h],y?t.style[e]=y:Or(t,e)}else(d||o==="%")&&!r_[Kn(m,"display")]&&(a.position=Kn(t,"position")),m===t&&(a.position="static"),m.appendChild(Nr),_=Nr[h],m.removeChild(Nr),a.position="absolute";return l&&d&&(g=nr(m),g.time=Pn.time,g.width=m[h]),Fe(u?_*s/f:_&&s?f/_*s:0)},Ii=function(t,e,n,i){var s;return jc||Kc(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Li[e]&&e!=="transform"?(s=Lo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Da(Kn(t,Dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=La[e]&&La[e](t,e,n)||Kn(t,e)||Fc(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(t,e,s,n)+n:s},s_=function(t,e,n,i){if(!n||n==="none"){var s=ys(e,t,1),o=s&&Kn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Kn(t,"borderTopColor"))}var a=new xn(this._pt,t.style,e,0,1,Xc),l=0,c=0,h,f,u,d,_,m,g,p,y,v,x,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=Kn(t,e)||i,m?t.style[e]=m:Or(t,e)),h=[n,i],zc(h),n=h[0],i=h[1],u=n.match(Rr)||[],C=i.match(Rr)||[],C.length){for(;f=Rr.exec(i);)g=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(m=u[c++]||"")&&(d=parseFloat(m)||0,x=m.substr((d+"").length),g.charAt(1)==="="&&(g=Pr(d,g)+x),p=parseFloat(g),v=g.substr((p+"").length),l=Rr.lastIndex-v.length,v||(v=v||Ln.units[e]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=ar(t,e,m,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Bd:Fd;return Lc.test(i)&&(a.e=0),this._pt=a,a},Ud={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ud[n]||n,e[1]=Ud[i]||i,e.join(" ")},a_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Li[a]&&(l=1,a=a==="transformOrigin"?Dn:De),Or(n,a);l&&(Or(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),o.uncache=1,zd(i)))}},La={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new xn(t._pt,e,n,0,0,a_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Io=[1,0,0,1,0,0],Wd={},Xd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Nd=function(t){var e=Kn(t,De);return Xd(e)?Io:e.substr(7).match(Ic).map(Fe)},nh=function(t,e){var n=t._gsap||nr(t),i=t.style,s=Nd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Io:s):(s===Io&&!t.offsetParent&&t!==xs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,xs.appendChild(t)),s=Nd(t),l?i.display=l:Or(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):xs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qc=function(t,e,n,i,s,o){var a=t._gsap,l=s||nh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],_=l[1],m=l[2],g=l[3],p=l[4],y=l[5],v=e.split(" "),x=parseFloat(v[0])||0,C=parseFloat(v[1])||0,E,T,R,S;n?l!==Io&&(T=d*g-_*m)&&(R=x*(g/T)+C*(-m/T)+(m*y-g*p)/T,S=x*(-_/T)+C*(d/T)-(d*y-_*p)/T,x=R,C=S):(E=Hd(t),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),C=E.y+(~(v[1]||v[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&a.smooth?(p=x-c,y=C-h,a.xOffset=f+(p*d+y*m)-p,a.yOffset=u+(p*_+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Dn]="0px 0px",o&&(or(o,a,"xOrigin",c,x),or(o,a,"yOrigin",h,C),or(o,a,"xOffset",f,a.xOffset),or(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Lo=function(t,e){var n=t._gsap||new kc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Kn(t,Dn)||"0",h,f,u,d,_,m,g,p,y,v,x,C,E,T,R,S,M,P,D,O,k,Y,W,Z,H,rt,I,J,it,st,V,K;return h=f=u=m=g=p=y=v=x=0,d=_=1,n.svg=!!(t.getCTM&&Gd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),T=nh(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Qc(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,E=n.yOrigin||0,T!==Io&&(P=T[0],D=T[1],O=T[2],k=T[3],h=Y=T[4],f=W=T[5],T.length===6?(d=Math.sqrt(P*P+D*D),_=Math.sqrt(k*k+O*O),m=P||D?_s(D,P)*Ur:0,y=O||k?_s(O,k)*Ur+m:0,y&&(_*=Math.abs(Math.cos(y*vs))),n.svg&&(h-=C-(C*P+E*O),f-=E-(C*D+E*k))):(K=T[6],st=T[7],I=T[8],J=T[9],it=T[10],V=T[11],h=T[12],f=T[13],u=T[14],R=_s(K,it),g=R*Ur,R&&(S=Math.cos(-R),M=Math.sin(-R),Z=Y*S+I*M,H=W*S+J*M,rt=K*S+it*M,I=Y*-M+I*S,J=W*-M+J*S,it=K*-M+it*S,V=st*-M+V*S,Y=Z,W=H,K=rt),R=_s(-O,it),p=R*Ur,R&&(S=Math.cos(-R),M=Math.sin(-R),Z=P*S-I*M,H=D*S-J*M,rt=O*S-it*M,V=k*M+V*S,P=Z,D=H,O=rt),R=_s(D,P),m=R*Ur,R&&(S=Math.cos(R),M=Math.sin(R),Z=P*S+D*M,H=Y*S+W*M,D=D*S-P*M,W=W*S-Y*M,P=Z,Y=H),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),d=Fe(Math.sqrt(P*P+D*D+O*O)),_=Fe(Math.sqrt(W*W+K*K)),R=_s(Y,W),y=Math.abs(R)>2e-4?R*Ur:0,x=V?1/(V<0?-V:V):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Xd(Kn(t,De)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Fe(d),n.scaleY=Fe(_),n.rotation=Fe(m)+a,n.rotationX=Fe(g)+a,n.rotationY=Fe(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Dn]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?c_:Vd?qd:l_,n.uncache=0,n},Da=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zc=function(t,e,n){var i=nn(e);return Fe(parseFloat(e)+parseFloat(ar(t,"x",n+"px",i)))+i},l_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qd(t,e)},Lr="0deg",Po="0px",Dr=") ",qd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(v&&(f!==Lr||h!==Lr)){var E=parseFloat(h)*vs,T=Math.sin(E),R=Math.cos(E),S;E=parseFloat(f)*vs,S=Math.cos(E),o=Zc(y,o,T*S*-v),a=Zc(y,a,-Math.sin(E)*-v),l=Zc(y,l,R*S*-v+v)}g!==Po&&(x+="perspective("+g+Dr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Po||a!==Po||l!==Po)&&(x+=l!==Po||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Dr),c!==Lr&&(x+="rotate("+c+Dr),h!==Lr&&(x+="rotateY("+h+Dr),f!==Lr&&(x+="rotateX("+f+Dr),(u!==Lr||d!==Lr)&&(x+="skew("+u+", "+d+Dr),(_!==1||m!==1)&&(x+="scale("+_+", "+m+Dr),y.style[De]=x||"translate(0, 0)"},c_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),C,E,T,R,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=vs,c*=vs,C=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-u,R=Math.cos(l-c)*u,c&&(h*=vs,S=Math.tan(c-h),S=Math.sqrt(1+S*S),T*=S,R*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),C*=S,E*=S)),C=Fe(C),E=Fe(E),T=Fe(T),R=Fe(R)):(C=f,R=u,E=T=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=ar(d,"x",o,"px"),x=ar(d,"y",a,"px")),(_||m||g||p)&&(v=Fe(v+_-(_*C+m*T)+g),x=Fe(x+m-(_*E+m*R)+p)),(i||s)&&(S=d.getBBox(),v=Fe(v+i/100*S.width),x=Fe(x+s/100*S.height)),S="matrix("+C+","+E+","+T+","+R+","+v+","+x+")",d.setAttribute("transform",S),y&&(d.style[De]=S)},h_=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ur:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Rd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Rd)%o-~~(c/o)*o)),t._pt=u=new xn(t._pt,e,n,i,c,Y0),u.e=h,u.u="deg",t._props.push(n),u},Od=function(t,e){for(var n in e)t[n]=e[n];return t},u_=function(t,e,n){var i=Od({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=Lo(n,1),Or(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],o[De]=e,a=Lo(n,1),o[De]=c);for(l in Li)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=nn(c),_=nn(h),f=d!==_?ar(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new xn(t._pt,a,l,f,u-f,$c),t._pt.u=_||0,t._props.push(l));Od(a,i)};_n("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});La[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(_){return Ii(a,_,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(_,m){return d[_]=u[m]=u[m]||u[(m-1)/2|0]}),a.init(l,d,f)}});var ih={name:"css",register:Kc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,_,m,g,p,y,v,x,C,E,T,R;jc||Kc(),this.styles=this.styles||kd(t),R=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(h=e[m],!(Rn[m]&&Hc(m,e,n,i,t,s)))){if(d=typeof h,_=La[m],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=gs(h)),_)_(this,t,m,h,n)&&(T=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(m)+"").trim(),h+="",Ri.lastIndex=0,Ri.test(c)||(g=nn(c),p=nn(h)),p?g!==p&&(c=ar(t,m,c,p)+p):g&&(h+=g),this.add(a,"setProperty",c,h,i,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,t,s):l[m],Ye(c)&&~c.indexOf("random(")&&(c=gs(c)),nn(c+"")||c==="auto"||(c+=Ln.units[m]||nn(Ii(t,m))||""),(c+"").charAt(1)==="="&&(c=Ii(t,m))):c=Ii(t,m),u=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),m in yi&&(m==="autoAlpha"&&(u===1&&Ii(t,"visibility")==="hidden"&&f&&(u=0),R.push("visibility",0,a.visibility),or(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=yi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Li,v){if(this.styles.save(m),d==="string"&&h.substring(0,6)==="var(--"&&(h=Kn(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Lo(t,e.parseTransform),E=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new xn(this._pt,a,De,0,1,C.renderTransform,C,0,-1),x.dep=1),m==="scale")this._pt=new xn(this._pt,C,"scaleY",C.scaleY,(y?Pr(C.scaleY,y+f):f)-C.scaleY||0,$c),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(Dn,0,a[Dn]),h=o_(h),C.svg?Qc(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&or(this,C,"zOrigin",C.zOrigin,p),or(this,a,m,Da(c),Da(h)));continue}else if(m==="svgOrigin"){Qc(t,h,1,E,0,this);continue}else if(m in Wd){h_(this,C,m,u,y?Pr(u,y+h):h);continue}else if(m==="smoothOrigin"){or(this,C,"smooth",C.smooth,h);continue}else if(m==="force3D"){C[m]=h;continue}else if(m==="transform"){u_(this,h,t);continue}}else m in a||(m=ys(m)||m);if(v||(f||f===0)&&(u||u===0)&&!q0.test(h)&&m in a)g=(c+"").substr((u+"").length),f||(f=0),p=nn(h)||(m in Ln.units?Ln.units[m]:g),g!==p&&(u=ar(t,m,c,p)),this._pt=new xn(this._pt,v?C:a,m,u,(y?Pr(u,y+f):f)-u,!v&&(p==="px"||m==="zIndex")&&e.autoRound!==!1?$0:$c),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Z0);else if(m in a)s_.call(this,t,m,c,y?y+h:h);else if(m in t)this.add(t,m,c||t[m],y?y+h:h,i,s);else if(m!=="parseTransform"){Aa(m,h);continue}v||(m in a?R.push(m,0,a[m]):typeof t[m]=="function"?R.push(m,2,t[m]()):R.push(m,1,c||t[m])),o.push(m)}}T&&Yc(this)},render:function(t,e){if(e.tween._time||!th())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ii,aliases:yi,getSetter:function(t,e,n){var i=yi[e];return i&&i.indexOf(",")<0&&(e=i),e in Li&&e!==Dn&&(t._gsap.x||Ii(t,"x"))?n&&Cd===n?e==="scale"?j0:Q0:(Cd=n||{})&&(e==="scale"?t_:e_):t.style&&!Ea(t.style[e])?J0:~e.indexOf("-")?K0:Ia(t,e)},core:{_removeProperty:Or,_getMatrix:nh}};on.utils.checkPrefix=ys;on.core.getStyleSaver=kd;(function(r,t,e,n){var i=_n(r+","+t+","+e,function(s){Li[s]=1});_n(t,function(s){Ln.units[s]="deg",Wd[s]=1}),yi[i[13]]=r+","+t,_n(n,function(s){var o=s.split(":");yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ln.units[r]="px"});on.registerPlugin(ih);var re=on.registerPlugin(ih)||on,_1=re.core.Tween;function Yd(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function f_(r,t,e){return t&&Yd(r.prototype,t),e&&Yd(r,e),r}var rn,Oa,d_,kn,lr,cr,Ss,$d,Fr,Uo,Jd,Di,ai,Kd,Qd=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},jd=1,Ms=[],te=[],li=[],No=Date.now,rh=function(t,e){return e},p_=function(){var t=Uo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,li),te=n,li=i,rh=function(o,a){return e[o](a)}},Ni=function(t,e){return~li.indexOf(t)&&li[li.indexOf(t)+1][e]},Oo=function(t){return!!~Jd.indexOf(t)},yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ua="scrollLeft",Na="scrollTop",sh=function(){return Di&&Di.isPressed||te.cache++},Fa=function(t,e){var n=function i(s){if(s||s===0){jd&&(kn.history.scrollRestoration="manual");var o=Di&&Di.isPressed;s=i.v=Math.round(s)||(Di&&Di.iOS?1:0),t(s),i.cacheID=te.cache,o&&rh("ss",s)}else(e||te.cache!==i.cacheID||rh("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},an={s:Ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fa(function(r){return arguments.length?kn.scrollTo(r,He.sc()):kn.pageXOffset||lr[Ua]||cr[Ua]||Ss[Ua]||0})},He={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:an,sc:Fa(function(r){return arguments.length?kn.scrollTo(an.sc(),r):kn.pageYOffset||lr[Na]||cr[Na]||Ss[Na]||0})},Mn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},m_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ui=function(t,e){var n=e.s,i=e.sc;Oo(t)&&(t=lr.scrollingElement||cr);var s=te.indexOf(t),o=i===He.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||yn(t,"scroll",sh);var a=te[s+o],l=a||(te[s+o]=Fa(Ni(t,n),!0)||(Oo(t)?i:Fa(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},Ba=function(t,e,n){var i=t,s=t,o=No(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,m){var g=No();m||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(_){var m=a,g=s,p=No();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-m)*1e3};return{update:h,reset:f,getVelocity:u}},Do=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Zd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},tp=function(){Uo=rn.core.globals().ScrollTrigger,Uo&&Uo.core&&p_()},ep=function(t){return rn=t||Qd(),!Oa&&rn&&typeof document!="undefined"&&document.body&&(kn=window,lr=document,cr=lr.documentElement,Ss=lr.body,Jd=[kn,lr,cr,Ss],d_=rn.utils.clamp,Kd=rn.core.context||function(){},Fr="onpointerenter"in Ss?"pointer":"mouse",$d=Be.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Be.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jd=0},500),tp(),Oa=1),Oa};an.op=He;te.cache=0;var Be=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Oa||ep(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Uo||tp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,x=n.onRelease,C=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,M=n.onChangeY,P=n.onChange,D=n.onToggleX,O=n.onToggleY,k=n.onHover,Y=n.onHoverEnd,W=n.onMove,Z=n.ignoreCheck,H=n.isNormalizer,rt=n.onGestureStart,I=n.onGestureEnd,J=n.onWheel,it=n.onEnable,st=n.onDisable,V=n.onClick,K=n.scrollSpeed,ot=n.capture,et=n.allowClicks,ht=n.lockAxis,pt=n.onLockAxis;this.target=a=Mn(a)||cr,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,K=K||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(Ss).lineHeight)||22);var It,Vt,Nt,Lt,U,ce,Ft,B=this,Tt=0,se=0,Pt=n.passive||!h&&n.passive!==!1,A=Ui(a,an),b=Ui(a,He),X=A(),nt=b(),tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ai[0]==="pointerdown",Q=Oo(a),gt=a.ownerDocument||lr,ft=[0,0,0],vt=[0,0,0],Yt=0,at=function(){return Yt=No()},ut=function(Ct,Kt){return(B.event=Ct)&&d&&m_(Ct.target,d)||Kt&&tt&&Ct.pointerType!=="touch"||Z&&Z(Ct,Kt)},Bt=function(){B._vx.reset(),B._vy.reset(),Vt.pause(),f&&f(B)},Ot=function(){var Ct=B.deltaX=Zd(ft),Kt=B.deltaY=Zd(vt),yt=Math.abs(Ct)>=i,Xt=Math.abs(Kt)>=i;P&&(yt||Xt)&&P(B,Ct,Kt,ft,vt),yt&&(C&&B.deltaX>0&&C(B),E&&B.deltaX<0&&E(B),S&&S(B),D&&B.deltaX<0!=Tt<0&&D(B),Tt=B.deltaX,ft[0]=ft[1]=ft[2]=0),Xt&&(R&&B.deltaY>0&&R(B),T&&B.deltaY<0&&T(B),M&&M(B),O&&B.deltaY<0!=se<0&&O(B),se=B.deltaY,vt[0]=vt[1]=vt[2]=0),(Lt||Nt)&&(W&&W(B),Nt&&(g&&Nt===1&&g(B),y&&y(B),Nt=0),Lt=!1),ce&&!(ce=!1)&&pt&&pt(B),U&&(J(B),U=!1),It=0},bt=function(Ct,Kt,yt){ft[yt]+=Ct,vt[yt]+=Kt,B._vx.update(Ct),B._vy.update(Kt),c?It||(It=requestAnimationFrame(Ot)):Ot()},Jt=function(Ct,Kt){ht&&!Ft&&(B.axis=Ft=Math.abs(Ct)>Math.abs(Kt)?"x":"y",ce=!0),Ft!=="y"&&(ft[2]+=Ct,B._vx.update(Ct,!0)),Ft!=="x"&&(vt[2]+=Kt,B._vy.update(Kt,!0)),c?It||(It=requestAnimationFrame(Ot)):Ot()},kt=function(Ct){if(!ut(Ct,1)){Ct=Do(Ct,h);var Kt=Ct.clientX,yt=Ct.clientY,Xt=Kt-B.x,Rt=yt-B.y,Wt=B.isDragging;B.x=Kt,B.y=yt,(Wt||(Xt||Rt)&&(Math.abs(B.startX-Kt)>=s||Math.abs(B.startY-yt)>=s))&&(Nt=Wt?2:1,Wt||(B.isDragging=!0),Jt(Xt,Rt))}},ae=B.onPress=function(St){ut(St,1)||St&&St.button||(B.axis=Ft=null,Vt.pause(),B.isPressed=!0,St=Do(St),Tt=se=0,B.startX=B.x=St.clientX,B.startY=B.y=St.clientY,B._vx.reset(),B._vy.reset(),yn(H?a:gt,ai[1],kt,Pt,!0),B.deltaX=B.deltaY=0,v&&v(B))},L=B.onRelease=function(St){if(!ut(St,1)){vn(H?a:gt,ai[1],kt,!0);var Ct=!isNaN(B.y-B.startY),Kt=B.isDragging,yt=Kt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Xt=Do(St);!yt&&Ct&&(B._vx.reset(),B._vy.reset(),h&&et&&rn.delayedCall(.08,function(){if(No()-Yt>300&&!St.defaultPrevented){if(St.target.click)St.target.click();else if(gt.createEvent){var Rt=gt.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,kn,1,Xt.screenX,Xt.screenY,Xt.clientX,Xt.clientY,!1,!1,!1,!1,0,null),St.target.dispatchEvent(Rt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,f&&Kt&&!H&&Vt.restart(!0),Nt&&Ot(),p&&Kt&&p(B),x&&x(B,yt)}},mt=function(Ct){return Ct.touches&&Ct.touches.length>1&&(B.isGesturing=!0)&&rt(Ct,B.isDragging)},$=function(){return(B.isGesturing=!1)||I(B)},j=function(Ct){if(!ut(Ct)){var Kt=A(),yt=b();bt((Kt-X)*K,(yt-nt)*K,1),X=Kt,nt=yt,f&&Vt.restart(!0)}},dt=function(Ct){if(!ut(Ct)){Ct=Do(Ct,h),J&&(U=!0);var Kt=(Ct.deltaMode===1?l:Ct.deltaMode===2?kn.innerHeight:1)*_;bt(Ct.deltaX*Kt,Ct.deltaY*Kt,0),f&&!H&&Vt.restart(!0)}},_t=function(Ct){if(!ut(Ct)){var Kt=Ct.clientX,yt=Ct.clientY,Xt=Kt-B.x,Rt=yt-B.y;B.x=Kt,B.y=yt,Lt=!0,f&&Vt.restart(!0),(Xt||Rt)&&Jt(Xt,Rt)}},Ht=function(Ct){B.event=Ct,k(B)},ue=function(Ct){B.event=Ct,Y(B)},Ne=function(Ct){return ut(Ct)||Do(Ct,h)&&V(B)};Vt=B._dc=rn.delayedCall(u||.25,Bt).pause(),B.deltaX=B.deltaY=0,B._vx=Ba(0,50,!0),B._vy=Ba(0,50,!0),B.scrollX=A,B.scrollY=b,B.isDragging=B.isGesturing=B.isPressed=!1,Kd(this),B.enable=function(St){return B.isEnabled||(yn(Q?gt:a,"scroll",sh),o.indexOf("scroll")>=0&&yn(Q?gt:a,"scroll",j,Pt,ot),o.indexOf("wheel")>=0&&yn(a,"wheel",dt,Pt,ot),(o.indexOf("touch")>=0&&$d||o.indexOf("pointer")>=0)&&(yn(a,ai[0],ae,Pt,ot),yn(gt,ai[2],L),yn(gt,ai[3],L),et&&yn(a,"click",at,!0,!0),V&&yn(a,"click",Ne),rt&&yn(gt,"gesturestart",mt),I&&yn(gt,"gestureend",$),k&&yn(a,Fr+"enter",Ht),Y&&yn(a,Fr+"leave",ue),W&&yn(a,Fr+"move",_t)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Lt=Nt=!1,B._vx.reset(),B._vy.reset(),X=A(),nt=b(),St&&St.type&&ae(St),it&&it(B)),B},B.disable=function(){B.isEnabled&&(Ms.filter(function(St){return St!==B&&Oo(St.target)}).length||vn(Q?gt:a,"scroll",sh),B.isPressed&&(B._vx.reset(),B._vy.reset(),vn(H?a:gt,ai[1],kt,!0)),vn(Q?gt:a,"scroll",j,ot),vn(a,"wheel",dt,ot),vn(a,ai[0],ae,ot),vn(gt,ai[2],L),vn(gt,ai[3],L),vn(a,"click",at,!0),vn(a,"click",Ne),vn(gt,"gesturestart",mt),vn(gt,"gestureend",$),vn(a,Fr+"enter",Ht),vn(a,Fr+"leave",ue),vn(a,Fr+"move",_t),B.isEnabled=B.isPressed=B.isDragging=!1,st&&st(B))},B.kill=B.revert=function(){B.disable();var St=Ms.indexOf(B);St>=0&&Ms.splice(St,1),Di===B&&(Di=0)},Ms.push(B),H&&Oo(a)&&(Di=B),B.enable(m)},f_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Be.version="3.13.0";Be.create=function(r){return new Be(r)};Be.register=ep;Be.getAll=function(){return Ms.slice()};Be.getById=function(r){return Ms.filter(function(t){return t.vars.id===r})[0]};Qd()&&rn.registerPlugin(Be);var Et,Ts,ie,Ee,Gn,xe,yh,tl,$o,Go,Bo,za,ln,rl,dh,bn,np,ip,Es,vp,oh,yp,Sn,ph,Mp,Sp,hr,mh,Mh,As,Sh,el,gh,ah,ka=1,cn=Date.now,lh=cn(),ti=0,zo=0,rp=function(t,e,n){var i=Hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},sp=function(t,e){return e&&(!Hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},g_=function r(){return zo&&requestAnimationFrame(r)},op=function(){return rl=1},ap=function(){return rl=0},Mi=function(t){return t},ko=function(t){return Math.round(t*1e5)/1e5||0},bp=function(){return typeof window!="undefined"},wp=function(){return Et||bp()&&(Et=window.gsap)&&Et.registerPlugin&&Et},Gr=function(t){return!!~yh.indexOf(t)},Tp=function(t){return(t==="Height"?Sh:ie["inner"+t])||Gn["client"+t]||xe["client"+t]},Ep=function(t){return Ni(t,"getBoundingClientRect")||(Gr(t)?function(){return ja.width=ie.innerWidth,ja.height=Sh,ja}:function(){return Oi(t)})},__=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Ni(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Tp(s):t["client"+s])||0}},x_=function(t,e){return!e||~li.indexOf(t)?Ep(t):function(){return ja}},Si=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ni(t,n))?o()-Ep(t)()[s]:Gr(t)?(Gn[n]||xe[n])-Tp(i):t[n]-t["offset"+i])},Va=function(t,e){for(var n=0;n<Es.length;n+=3)(!e||~e.indexOf(Es[n+1]))&&t(Es[n],Es[n+1],Es[n+2])},Hn=function(t){return typeof t=="string"},hn=function(t){return typeof t=="function"},Vo=function(t){return typeof t=="number"},Br=function(t){return typeof t=="object"},Fo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ch=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},bs=Math.abs,Ap="left",Cp="top",bh="right",wh="bottom",kr="width",Vr="height",Wo="Right",Xo="Left",qo="Top",Yo="Bottom",Ge="padding",Qn="margin",Rs="Width",Th="Height",Ze="px",jn=function(t){return ie.getComputedStyle(t)},v_=function(t){var e=jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},lp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Oi=function(t,e){var n=e&&jn(t)[dh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},nl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Rp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},y_=function(t){return function(e){return Et.utils.snap(Rp(t),e)}},Eh=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},M_=function(t){return function(e,n){return Eh(Rp(t))(e,n.direction)}},Ha=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ga=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},cp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wa={toggleActions:"play",anticipatePin:0},il={top:0,left:0,center:.5,bottom:1,right:1},$a=function(t,e){if(Hn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in il?il[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Xa=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,_=Ee.createElement("div"),m=Gr(n)||Ni(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,p=m?xe:n,y=t.indexOf("start")!==-1,v=y?c:h,x="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(x+=(i===He?bh:wh)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Ja(_,0,i,y),_},Ja=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Rs]=1,s["border"+a+Rs]=0,s[n.p]=e+"px",Et.set(t,s)},ee=[],_h={},Jo,hp=function(){return cn()-ti>34&&(Jo||(Jo=requestAnimationFrame(Fi)))},ws=function(){(!Sn||!Sn.isPressed||Sn.startX>xe.clientWidth)&&(te.cache++,Sn?Jo||(Jo=requestAnimationFrame(Fi)):Fi(),ti||Xr("scrollStart"),ti=cn())},hh=function(){Sp=ie.innerWidth,Mp=ie.innerHeight},Ho=function(t){te.cache++,(t===!0||!ln&&!yp&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!ph||Sp!==ie.innerWidth||Math.abs(ie.innerHeight-Mp)>ie.innerHeight*.25))&&tl.restart(!0)},Wr={},S_=[],Pp=function r(){return Ke(zt,"scrollEnd",r)||zr(!0)},Xr=function(t){return Wr[t]&&Wr[t].map(function(e){return e()})||S_},Vn=[],Ip=function(t){for(var e=0;e<Vn.length;e+=5)(!t||Vn[e+4]&&Vn[e+4].query===t)&&(Vn[e].style.cssText=Vn[e+1],Vn[e].getBBox&&Vn[e].setAttribute("transform",Vn[e+2]||""),Vn[e+3].uncache=1)},Ah=function(t,e){var n;for(bn=0;bn<ee.length;bn++)n=ee[bn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));el=!0,e&&Ip(e),e||Xr("revert")},Lp=function(t,e){te.cache++,(e||!wn)&&te.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Hn(t)&&(ie.history.scrollRestoration=Mh=t)},wn,Hr=0,up,b_=function(){if(up!==Hr){var t=up=Hr;requestAnimationFrame(function(){return t===Hr&&zr(!0)})}},Dp=function(){xe.appendChild(As),Sh=!Sn&&As.offsetHeight||ie.innerHeight,xe.removeChild(As)},fp=function(t){return $o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},zr=function(t,e){if(Gn=Ee.documentElement,xe=Ee.body,yh=[ie,Ee,Gn,xe],ti&&!t&&!el){Qe(zt,"scrollEnd",Pp);return}Dp(),wn=zt.isRefreshing=!0,te.forEach(function(i){return hn(i)&&++i.cacheID&&(i.rec=i())});var n=Xr("refreshInit");vp&&zt.sort(),e||Ah(),te.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),el=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),gh=1,fp(!0),ee.forEach(function(i){var s=Si(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),fp(!1),gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lp(Mh,1),tl.pause(),Hr++,wn=2,Fi(2),ee.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=zt.isRefreshing=!1,Xr("refresh")},xh=0,Ka=1,Zo,Fi=function(t){if(t===2||!wn&&!el){zt.isUpdating=!0,Zo&&Zo.update(0);var e=ee.length,n=cn(),i=n-lh>=50,s=e&&ee[0].scroll();if(Ka=xh>s?-1:1,wn||(xh=s),i&&(ti&&!rl&&n-ti>200&&(ti=0,Xr("scrollEnd")),Bo=lh,lh=n),Ka<0){for(bn=e;bn-- >0;)ee[bn]&&ee[bn].update(0,i);Ka=1}else for(bn=0;bn<e;bn++)ee[bn]&&ee[bn].update(0,i);zt.isUpdating=!1}Jo=0},vh=[Ap,Cp,wh,bh,Qn+Yo,Qn+Wo,Qn+qo,Qn+Xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qa=vh.concat([kr,Vr,"boxSizing","max"+Rs,"max"+Th,"position",Qn,Ge,Ge+qo,Ge+Wo,Ge+Yo,Ge+Xo]),w_=function(t,e,n){Cs(n);var i=t._gsap;if(i.spacerIsNative)Cs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},uh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=vh.length,o=e.style,a=t.style,l;s--;)l=vh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[wh]=a[bh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[kr]=nl(t,an)+Ze,o[Vr]=nl(t,He)+Ze,o[Ge]=a[Qn]=a[Cp]=a[Ap]="0",Cs(i),a[kr]=a["max"+Rs]=n[kr],a[Vr]=a["max"+Th]=n[Vr],a[Ge]=n[Ge],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},T_=/([A-Z])/g,Cs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(T_,"-$1").toLowerCase())}},qa=function(t){for(var e=Qa.length,n=t.style,i=[],s=0;s<e;s++)i.push(Qa[s],n[Qa[s]]);return i.t=t,i},E_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ja={left:0,top:0},dp=function(t,e,n,i,s,o,a,l,c,h,f,u,d,_){hn(t)&&(t=t(l)),Hn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?$a("0"+t.substr(3),n):0));var m=d?d.time():0,g,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Vo(t))d&&(t=Et.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Ja(a,n,i,!0);else{hn(e)&&(e=e(l));var v=(t||"0").split(" "),x,C,E,T;y=Mn(e,l)||xe,x=Oi(y)||{},(!x||!x.left&&!x.top)&&jn(y).display==="none"&&(T=y.style.display,y.style.display="block",x=Oi(y),T?y.style.display=T:y.style.removeProperty("display")),C=$a(v[0],x[i.d]),E=$a(v[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-E,a&&Ja(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,S=o._isStart;g="scroll"+i.d2,Ja(o,R,i,S&&R>20||!S&&(f?Math.max(xe[g],Gn[g]):o.parentNode[g])<=R+1),f&&(c=Oi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ze))}return d&&y&&(g=Oi(y),d.seek(u),p=Oi(y),d._caScrollDist=g[i.p]-p[i.p],t=t/d._caScrollDist*u),d&&d.seek(m),d?t:Math.round(t)},A_=/(webkit|moz|length|cssText|inset)/i,pp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=jn(t);for(o in a)!+o&&!A_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},Up=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ya=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},mp=function(t,e){var n=Ui(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,_={};c=c||n();var m=Up(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return m(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){te.cache++,o.tween&&Fi()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Et.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),zt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},zt=(function(){function r(e,n){Ts||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zo){this.update=this.refresh=this.kill=Mi;return}n=lp(Hn(n)||Vo(n)||n.nodeType?{trigger:n}:n,Wa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,C=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?an:He,P=!f&&f!==0,D=Mn(n.scroller||ie),O=Et.core.getCache(D),k=Gr(D),Y=("pinType"in n?n.pinType:Ni(D,"pinType")||k&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:Wa.markers,rt=k?0:parseFloat(jn(D)["border"+M.p2+Rs])||0,I=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(I)},it=__(D,k,M),st=x_(D,k),V=0,K=0,ot=0,et=Ui(D,M),ht,pt,It,Vt,Nt,Lt,U,ce,Ft,B,Tt,se,Pt,A,b,X,nt,tt,Q,gt,ft,vt,Yt,at,ut,Bt,Ot,bt,Jt,kt,ae,L,mt,$,j,dt,_t,Ht,ue;if(I._startClamp=I._endClamp=!1,I._dir=M,g*=45,I.scroller=D,I.scroll=T?T.time.bind(T):et,Vt=et(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(vp=1,n.refreshPriority===-9999&&(Zo=I)),O.tweenScroll=O.tweenScroll||{top:mp(D,He),left:mp(D,an)},I.tweenTo=ht=O.tweenScroll[M.p],I.scrubDuration=function(yt){mt=Vo(yt)&&yt,mt?L?L.duration(yt):L=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:mt,paused:!0,onComplete:function(){return p&&p(I)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),kt=0,l||(l=i.vars.id)),x&&((!Br(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xe.style&&Et.set(k?[xe,Gn]:D,{scrollBehavior:"auto"}),te.forEach(function(yt){return hn(yt)&&yt.target===(k?Ee.scrollingElement||Gn:D)&&(yt.smooth=!1)}),It=hn(x.snapTo)?x.snapTo:x.snapTo==="labels"?y_(i):x.snapTo==="labelsDirectional"?M_(i):x.directional!==!1?function(yt,Xt){return Eh(x.snapTo)(yt,cn()-K<500?0:Xt.direction)}:Et.utils.snap(x.snapTo),$=x.duration||{min:.1,max:2},$=Br($)?Go($.min,$.max):Go($,$),j=Et.delayedCall(x.delay||mt/2||.1,function(){var yt=et(),Xt=cn()-K<500,Rt=ht.tween;if((Xt||Math.abs(I.getVelocity())<10)&&!Rt&&!rl&&V!==yt){var Wt=(yt-Lt)/A,ze=i&&!P?i.totalProgress():Wt,ne=Xt?0:(ze-ae)/(cn()-Bo)*1e3||0,Te=Et.utils.clamp(-Wt,1-Wt,bs(ne/2)*ne/.185),qe=Wt+(x.inertia===!1?0:Te),Me,Se,pe=x,Nn=pe.onStart,Ae=pe.onInterrupt,gn=pe.onComplete;if(Me=It(qe,I),Vo(Me)||(Me=qe),Se=Math.max(0,Math.round(Lt+Me*A)),yt<=U&&yt>=Lt&&Se!==yt){if(Rt&&!Rt._initted&&Rt.data<=bs(Se-yt))return;x.inertia===!1&&(Te=Me-Wt),ht(Se,{duration:$(bs(Math.max(bs(qe-ze),bs(Me-ze))*.185/ne/.05||0)),ease:x.ease||"power3",data:bs(Se-yt),onInterrupt:function(){return j.restart(!0)&&Ae&&Ae(I)},onComplete:function(){I.update(),V=et(),i&&!P&&(L?L.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),kt=ae=i&&!P?i.totalProgress():I.progress,y&&y(I),gn&&gn(I)}},yt,Te*A,Se-yt-Te*A),Nn&&Nn(I,ht.tween)}}else I.isActive&&V!==yt&&j.restart(!0)}).pause()),l&&(_h[l]=I),u=I.trigger=Mn(u||d!==!0&&d),ue=u&&u._gsap&&u._gsap.stRevert,ue&&(ue=ue(I)),d=d===!0?u:Mn(d),Hn(a)&&(a={targets:u,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&jn(d.parentNode).display==="flex"?!1:Ge),I.pin=d,pt=Et.core.getCache(d),pt.spacer?b=pt.pinState:(E&&(E=Mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),pt.spacerIsNative=!!E,E&&(pt.spacerState=qa(E))),pt.spacer=tt=E||Ee.createElement("div"),tt.classList.add("pin-spacer"),l&&tt.classList.add("pin-spacer-"+l),pt.pinState=b=qa(d)),n.force3D!==!1&&Et.set(d,{force3D:!0}),I.spacer=tt=pt.spacer,Jt=jn(d),at=Jt[_+M.os2],gt=Et.getProperty(d),ft=Et.quickSetter(d,M.a,Ze),uh(d,tt,Jt),nt=qa(d)),H){se=Br(H)?lp(H,cp):cp,B=Xa("scroller-start",l,D,M,se,0),Tt=Xa("scroller-end",l,D,M,se,0,B),Q=B["offset"+M.op.d2];var Ne=Mn(Ni(D,"content")||D);ce=this.markerStart=Xa("start",l,Ne,M,se,Q,0,T),Ft=this.markerEnd=Xa("end",l,Ne,M,se,Q,0,T),T&&(Ht=Et.quickSetter([ce,Ft],M.a,Ze)),!Y&&!(li.length&&Ni(D,"fixedMarkers")===!0)&&(v_(k?xe:D),Et.set([B,Tt],{force3D:!0}),Bt=Et.quickSetter(B,M.a,Ze),bt=Et.quickSetter(Tt,M.a,Ze))}if(T){var St=T.vars.onUpdate,Ct=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),St&&St.apply(T,Ct||[])})}if(I.previous=function(){return ee[ee.indexOf(I)-1]},I.next=function(){return ee[ee.indexOf(I)+1]},I.revert=function(yt,Xt){if(!Xt)return I.kill(!0);var Rt=yt!==!1||!I.enabled,Wt=ln;Rt!==I.isReverted&&(Rt&&(dt=Math.max(et(),I.scroll.rec||0),ot=I.progress,_t=i&&i.progress()),ce&&[ce,Ft,B,Tt].forEach(function(ze){return ze.style.display=Rt?"none":"block"}),Rt&&(ln=I,I.update(Rt)),d&&(!C||!I.isActive)&&(Rt?w_(d,tt,b):uh(d,tt,jn(d),ut)),Rt||I.update(Rt),ln=Wt,I.isReverted=Rt)},I.refresh=function(yt,Xt,Rt,Wt){if(!((ln||!I.enabled)&&!Xt)){if(d&&yt&&ti){Qe(r,"scrollEnd",Pp);return}!wn&&J&&J(I),ln=I,ht.tween&&!Rt&&(ht.tween.kill(),ht.tween=0),L&&L.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var ze=it(),ne=st(),Te=T?T.duration():Si(D,M),qe=A<=.01||!A,Me=0,Se=Wt||0,pe=Br(Rt)?Rt.end:n.end,Nn=n.endTrigger||u,Ae=Br(Rt)?Rt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),gn=I.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,I),w=u&&Math.max(0,ee.indexOf(I))||0,N=w,G,q,F,lt,ct,xt,wt,Gt,qt,At,Zt,fe,me;for(H&&Br(Rt)&&(fe=Et.getProperty(B,M.p),me=Et.getProperty(Tt,M.p));N-- >0;)xt=ee[N],xt.end||xt.refresh(0,1)||(ln=I),wt=xt.pin,wt&&(wt===u||wt===d||wt===gn)&&!xt.isReverted&&(At||(At=[]),At.unshift(xt),xt.revert(!0,!0)),xt!==ee[N]&&(w--,N--);for(hn(Ae)&&(Ae=Ae(I)),Ae=rp(Ae,"start",I),Lt=dp(Ae,u,ze,M,et(),ce,B,I,ne,rt,Y,Te,T,I._startClamp&&"_startClamp")||(d?-.001:0),hn(pe)&&(pe=pe(I)),Hn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Hn(Ae)?Ae.split(" ")[0]:"")+pe:(Me=$a(pe.substr(2),ze),pe=Hn(Ae)?Ae:(T?Et.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Lt):Lt)+Me,Nn=u)),pe=rp(pe,"end",I),U=Math.max(Lt,dp(pe||(Nn?"100% 0":Te),Nn,ze,M,et()+Me,Ft,Tt,I,ne,rt,Y,Te,T,I._endClamp&&"_endClamp"))||-.001,Me=0,N=w;N--;)xt=ee[N],wt=xt.pin,wt&&xt.start-xt._pinPush<=Lt&&!T&&xt.end>0&&(G=xt.end-(I._startClamp?Math.max(0,xt.start):xt.start),(wt===u&&xt.start-xt._pinPush<Lt||wt===gn)&&isNaN(Ae)&&(Me+=G*(1-xt.progress)),wt===d&&(Se+=G));if(Lt+=Me,U+=Me,I._startClamp&&(I._startClamp+=Me),I._endClamp&&!wn&&(I._endClamp=U||-.001,U=Math.min(U,Si(D,M))),A=U-Lt||(Lt-=.01)&&.001,qe&&(ot=Et.utils.clamp(0,1,Et.utils.normalize(Lt,U,dt))),I._pinPush=Se,ce&&Me&&(G={},G[M.a]="+="+Me,gn&&(G[M.p]="-="+et()),Et.set([ce,Ft],G)),d&&!(gh&&I.end>=Si(D,M)))G=jn(d),lt=M===He,F=et(),vt=parseFloat(gt(M.a))+Se,!Te&&U>1&&(Zt=(k?Ee.scrollingElement||Gn:D).style,Zt={style:Zt,value:Zt["overflow"+M.a.toUpperCase()]},k&&jn(xe)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Zt.style["overflow"+M.a.toUpperCase()]="scroll")),uh(d,tt,G),nt=qa(d),q=Oi(d,!0),Gt=Y&&Ui(D,lt?an:He)(),_?(ut=[_+M.os2,A+Se+Ze],ut.t=tt,N=_===Ge?nl(d,M)+A+Se:0,N&&(ut.push(M.d,N+Ze),tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=N+Ze)),Cs(ut),gn&&ee.forEach(function(Ie){Ie.pin===gn&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),Y&&et(dt)):(N=nl(d,M),N&&tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=N+Ze)),Y&&(ct={top:q.top+(lt?F-Lt:Gt)+Ze,left:q.left+(lt?Gt:F-Lt)+Ze,boxSizing:"border-box",position:"fixed"},ct[kr]=ct["max"+Rs]=Math.ceil(q.width)+Ze,ct[Vr]=ct["max"+Th]=Math.ceil(q.height)+Ze,ct[Qn]=ct[Qn+qo]=ct[Qn+Wo]=ct[Qn+Yo]=ct[Qn+Xo]="0",ct[Ge]=G[Ge],ct[Ge+qo]=G[Ge+qo],ct[Ge+Wo]=G[Ge+Wo],ct[Ge+Yo]=G[Ge+Yo],ct[Ge+Xo]=G[Ge+Xo],X=E_(b,ct,C),wn&&et(0)),i?(qt=i._initted,oh(1),i.render(i.duration(),!0,!0),Yt=gt(M.a)-vt+A+Se,Ot=Math.abs(A-Yt)>1,Y&&Ot&&X.splice(X.length-2,2),i.render(0,!0,!0),qt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),oh(0)):Yt=A,Zt&&(Zt.value?Zt.style["overflow"+M.a.toUpperCase()]=Zt.value:Zt.style.removeProperty("overflow-"+M.a));else if(u&&et()&&!T)for(q=u.parentNode;q&&q!==xe;)q._pinOffset&&(Lt-=q._pinOffset,U-=q._pinOffset),q=q.parentNode;At&&At.forEach(function(Ie){return Ie.revert(!1,!0)}),I.start=Lt,I.end=U,Vt=Nt=wn?dt:et(),!T&&!wn&&(Vt<dt&&et(dt),I.scroll.rec=0),I.revert(!1,!0),K=cn(),j&&(V=-1,j.restart(!0)),ln=0,i&&P&&(i._initted||_t)&&i.progress()!==_t&&i.progress(_t||0,!0).render(i.time(),!0,!0),(qe||ot!==I.progress||T||m||i&&!i._initted)&&(i&&!P&&(i._initted||ot||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Lt<-.001&&!ot?Et.utils.normalize(Lt,U,0):ot,!0),I.progress=qe||(Vt-Lt)/A===ot?0:ot),d&&_&&(tt._pinOffset=Math.round(I.progress*Yt)),L&&L.invalidate(),isNaN(fe)||(fe-=Et.getProperty(B,M.p),me-=Et.getProperty(Tt,M.p),Ya(B,M,fe),Ya(ce,M,fe-(Wt||0)),Ya(Tt,M,me),Ya(Ft,M,me-(Wt||0))),qe&&!wn&&I.update(),h&&!wn&&!Pt&&(Pt=!0,h(I),Pt=!1)}},I.getVelocity=function(){return(et()-Nt)/(cn()-Bo)*1e3||0},I.endAnimation=function(){Fo(I.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||Fo(i,I.direction<0,1):Fo(i,i.reversed()))},I.labelToScroll=function(yt){return i&&i.labels&&(Lt||I.refresh()||Lt)+i.labels[yt]/i.duration()*A||0},I.getTrailing=function(yt){var Xt=ee.indexOf(I),Rt=I.direction>0?ee.slice(0,Xt).reverse():ee.slice(Xt+1);return(Hn(yt)?Rt.filter(function(Wt){return Wt.vars.preventOverlaps===yt}):Rt).filter(function(Wt){return I.direction>0?Wt.end<=Lt:Wt.start>=U})},I.update=function(yt,Xt,Rt){if(!(T&&!Rt&&!yt)){var Wt=wn===!0?dt:I.scroll(),ze=yt?0:(Wt-Lt)/A,ne=ze<0?0:ze>1?1:ze||0,Te=I.progress,qe,Me,Se,pe,Nn,Ae,gn,w;if(Xt&&(Nt=Vt,Vt=T?et():Wt,x&&(ae=kt,kt=i&&!P?i.totalProgress():ne)),g&&d&&!ln&&!ka&&ti&&(!ne&&Lt<Wt+(Wt-Nt)/(cn()-Bo)*g?ne=1e-4:ne===1&&U>Wt+(Wt-Nt)/(cn()-Bo)*g&&(ne=.9999)),ne!==Te&&I.enabled){if(qe=I.isActive=!!ne&&ne<1,Me=!!Te&&Te<1,Ae=qe!==Me,Nn=Ae||!!ne!=!!Te,I.direction=ne>Te?1:-1,I.progress=ne,Nn&&!ln&&(Se=ne&&!Te?0:ne===1?1:Te===1?2:3,P&&(pe=!Ae&&Z[Se+1]!=="none"&&Z[Se+1]||Z[Se],w=i&&(pe==="complete"||pe==="reset"||pe in i))),S&&(Ae||w)&&(w||f||!i)&&(hn(S)?S(I):I.getTrailing(S).forEach(function(F){return F.endAnimation()})),P||(L&&!ln&&!ka?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ne,i._tTime/i._tDur):(L.vars.totalProgress=ne,L.invalidate().restart())):i&&i.totalProgress(ne,!!(ln&&(K||yt)))),d){if(yt&&_&&(tt.style[_+M.os2]=at),!Y)ft(ko(vt+Yt*ne));else if(Nn){if(gn=!yt&&ne>Te&&U+1>Wt&&Wt+1>=Si(D,M),C)if(!yt&&(qe||gn)){var N=Oi(d,!0),G=Wt-Lt;pp(d,xe,N.top+(M===He?G:0)+Ze,N.left+(M===He?0:G)+Ze)}else pp(d,tt);Cs(qe||gn?X:nt),Ot&&ne<1&&qe||ft(vt+(ne===1&&!gn?Yt:0))}}x&&!ht.tween&&!ln&&!ka&&j.restart(!0),a&&(Ae||v&&ne&&(ne<1||!ah))&&$o(a.targets).forEach(function(F){return F.classList[qe||v?"add":"remove"](a.className)}),o&&!P&&!yt&&o(I),Nn&&!ln?(P&&(w&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(I)),(Ae||!ah)&&(c&&Ae&&ch(I,c),W[Se]&&ch(I,W[Se]),v&&(ne===1?I.kill(!1,1):W[Se]=0),Ae||(Se=ne===1?1:3,W[Se]&&ch(I,W[Se]))),R&&!qe&&Math.abs(I.getVelocity())>(Vo(R)?R:2500)&&(Fo(I.callbackAnimation),L?L.progress(1):Fo(i,pe==="reverse"?1:!ne,1))):P&&o&&!ln&&o(I)}if(bt){var q=T?Wt/T.duration()*(T._caScrollDist||0):Wt;Bt(q+(B._isFlipped?1:0)),bt(q)}Ht&&Ht(-Wt/T.duration()*(T._caScrollDist||0))}},I.enable=function(yt,Xt){I.enabled||(I.enabled=!0,Qe(D,"resize",Ho),k||Qe(D,"scroll",ws),J&&Qe(r,"refreshInit",J),yt!==!1&&(I.progress=ot=0,Vt=Nt=V=et()),Xt!==!1&&I.refresh())},I.getTween=function(yt){return yt&&ht?ht.tween:L},I.setPositions=function(yt,Xt,Rt,Wt){if(T){var ze=T.scrollTrigger,ne=T.duration(),Te=ze.end-ze.start;yt=ze.start+Te*yt/ne,Xt=ze.start+Te*Xt/ne}I.refresh(!1,!1,{start:sp(yt,Rt&&!!I._startClamp),end:sp(Xt,Rt&&!!I._endClamp)},Wt),I.update()},I.adjustPinSpacing=function(yt){if(ut&&yt){var Xt=ut.indexOf(M.d)+1;ut[Xt]=parseFloat(ut[Xt])+yt+Ze,ut[1]=parseFloat(ut[1])+yt+Ze,Cs(ut)}},I.disable=function(yt,Xt){if(I.enabled&&(yt!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Xt||L&&L.pause(),dt=0,pt&&(pt.uncache=1),J&&Ke(r,"refreshInit",J),j&&(j.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!k)){for(var Rt=ee.length;Rt--;)if(ee[Rt].scroller===D&&ee[Rt]!==I)return;Ke(D,"resize",Ho),k||Ke(D,"scroll",ws)}},I.kill=function(yt,Xt){I.disable(yt,Xt),L&&!Xt&&L.kill(),l&&delete _h[l];var Rt=ee.indexOf(I);Rt>=0&&ee.splice(Rt,1),Rt===bn&&Ka>0&&bn--,Rt=0,ee.forEach(function(Wt){return Wt.scroller===I.scroller&&(Rt=1)}),Rt||wn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,yt&&i.revert({kill:!1}),Xt||i.kill()),ce&&[ce,Ft,B,Tt].forEach(function(Wt){return Wt.parentNode&&Wt.parentNode.removeChild(Wt)}),Zo===I&&(Zo=0),d&&(pt&&(pt.uncache=1),Rt=0,ee.forEach(function(Wt){return Wt.pin===d&&Rt++}),Rt||(pt.spacer=0)),n.onKill&&n.onKill(I)},ee.push(I),I.enable(!1,!1),ue&&ue(I),i&&i.add&&!A){var Kt=I.update;I.update=function(){I.update=Kt,te.cache++,Lt||U||I.refresh()},Et.delayedCall(.01,I.update),A=.01,Lt=U=0}else I.refresh();d&&b_()},r.register=function(n){return Ts||(Et=n||wp(),bp()&&window.document&&r.enable(),Ts=zo),Ts},r.defaults=function(n){if(n)for(var i in n)Wa[i]=n[i];return Wa},r.disable=function(n,i){zo=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(ie,"wheel",ws),Ke(Ee,"scroll",ws),clearInterval(za),Ke(Ee,"touchcancel",Mi),Ke(xe,"touchstart",Mi),Ha(Ke,Ee,"pointerdown,touchstart,mousedown",op),Ha(Ke,Ee,"pointerup,touchend,mouseup",ap),tl.kill(),Va(Ke);for(var s=0;s<te.length;s+=3)Ga(Ke,te[s],te[s+1]),Ga(Ke,te[s],te[s+2])},r.enable=function(){if(ie=window,Ee=document,Gn=Ee.documentElement,xe=Ee.body,Et&&($o=Et.utils.toArray,Go=Et.utils.clamp,mh=Et.core.context||Mi,oh=Et.core.suppressOverwrites||Mi,Mh=ie.history.scrollRestoration||"auto",xh=ie.pageYOffset||0,Et.core.globals("ScrollTrigger",r),xe)){zo=1,As=document.createElement("div"),As.style.height="100vh",As.style.position="absolute",Dp(),g_(),Be.register(Et),r.isTouch=Be.isTouch,hr=Be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=Be.isTouch===1,Qe(ie,"wheel",ws),yh=[ie,Ee,Gn,xe],Et.matchMedia?(r.matchMedia=function(c){var h=Et.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Et.addEventListener("matchMediaInit",function(){return Ah()}),Et.addEventListener("matchMediaRevert",function(){return Ip()}),Et.addEventListener("matchMedia",function(){zr(0,1),Xr("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return hh(),hh})):console.warn("Requires GSAP 3.11.0 or later"),hh(),Qe(Ee,"scroll",ws);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=Et.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(xe),He.m=Math.round(a.top+He.sc())||0,an.m=Math.round(a.left+an.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),za=setInterval(hp,250),Et.delayedCall(.5,function(){return ka=0}),Qe(Ee,"touchcancel",Mi),Qe(xe,"touchstart",Mi),Ha(Qe,Ee,"pointerdown,touchstart,mousedown",op),Ha(Qe,Ee,"pointerup,touchend,mouseup",ap),dh=Et.utils.checkPrefix("transform"),Qa.push(dh),Ts=cn(),tl=Et.delayedCall(.2,zr).pause(),Es=[Ee,"visibilitychange",function(){var c=ie.innerWidth,h=ie.innerHeight;Ee.hidden?(np=c,ip=h):(np!==c||ip!==h)&&Ho()},Ee,"DOMContentLoaded",zr,ie,"load",zr,ie,"resize",Ho],Va(Qe),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<te.length;l+=3)Ga(Ke,te[l],te[l+1]),Ga(Ke,te[l],te[l+2])}},r.config=function(n){"limitCallbacks"in n&&(ah=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(za)||(za=i)&&setInterval(hp,i),"ignoreMobileResize"in n&&(ph=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Va(Ke)||Va(Qe,n.autoRefreshEvents||"none"),yp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),o=te.indexOf(s),a=Gr(s);~o&&te.splice(o,a?6:2),i&&(a?li.unshift(ie,i,xe,i,Gn,i):li.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hn(n)?Mn(n):n).getBoundingClientRect(),a=o[s?kr:Vr]*i||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?kr:Vr],l=i==null?a/2:i in il?il[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Wr.killAll||[];Wr={},i.forEach(function(s){return s()})}},r})();zt.version="3.13.0";zt.saveStyles=function(r){return r?$o(r).forEach(function(t){if(t&&t.style){var e=Vn.indexOf(t);e>=0&&Vn.splice(e,5),Vn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),mh())}}):Vn};zt.revert=function(r,t){return Ah(!r,t)};zt.create=function(r,t){return new zt(r,t)};zt.refresh=function(r){return r?Ho(!0):(Ts||zt.register())&&zr(!0)};zt.update=function(r){return++te.cache&&Fi(r===!0?2:0)};zt.clearScrollMemory=Lp;zt.maxScroll=function(r,t){return Si(r,t?an:He)};zt.getScrollFunc=function(r,t){return Ui(Mn(r),t?an:He)};zt.getById=function(r){return _h[r]};zt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!ti};zt.snapDirectional=Eh;zt.addEventListener=function(r,t){var e=Wr[r]||(Wr[r]=[]);~e.indexOf(t)||e.push(t)};zt.removeEventListener=function(r,t){var e=Wr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Et.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),u.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&hn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return hn(s)&&(s=s(),Qe(zt,"refresh",function(){return s=t.batchMax()})),$o(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(zt.create(c))}),e};var gp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},fh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Be.isTouch?" pinch-zoom":""):"none",t===Gn&&r(xe,e)},Za={auto:1,scroll:1},C_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Et.core.getCache(s),a=cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Za[(l=jn(s)).overflowY]||Za[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gr(s)&&(Za[(l=jn(s)).overflowY]||Za[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Np=function(t,e,n,i){return Be.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&C_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(Ee,Be.eventTypes[0],xp,!1,!0)},onDisable:function(){return Ke(Ee,Be.eventTypes[0],xp,!0)}})},R_=/(input|label|select|textarea)/i,_p,xp=function(t){var e=R_.test(t.target.tagName);(e||_p)&&(t._gsapAllow=!0,_p=e)},P_=function(t){Br(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Mn(t.target)||Gn,h=Et.core.globals().ScrollSmoother,f=h&&h.get(),u=hr&&(t.content&&Mn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=Ui(c,He),_=Ui(c,an),m=1,g=(Be.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,y=hn(i)?function(){return i(a)}:function(){return i||2.8},v,x,C=Np(c,t.type,!0,s),E=function(){return x=!1},T=Mi,R=Mi,S=function(){l=Si(c,He),R=Go(hr?1:0,l),n&&(T=Go(0,Si(c,an))),v=Hr},M=function(){u._gsap.y=ko(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(E);var H=ko(a.deltaY/2),rt=R(d.v-H);if(u&&rt!==d.v+d.offset){d.offset=rt-d.v;var I=ko((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",u._gsap.y=I+"px",d.cacheID=te.cache,Fi()}return!0}d.offset&&M(),x=!0},D,O,k,Y,W=function(){S(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return u&&Et.set(u,{y:"+=0"}),t.ignoreCheck=function(Z){return hr&&Z.type==="touchmove"&&P(Z)||m>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},t.onPress=function(){x=!1;var Z=m;m=ko((ie.visualViewport&&ie.visualViewport.scale||1)/g),D.pause(),Z!==m&&fh(c,m>1.01?!0:n?!1:"x"),O=_(),k=d(),S(),v=Hr},t.onRelease=t.onGestureStart=function(Z,H){if(d.offset&&M(),!H)Y.restart(!0);else{te.cache++;var rt=y(),I,J;n&&(I=_(),J=I+rt*.05*-Z.velocityX/.227,rt*=gp(_,I,J,Si(c,an)),D.vars.scrollX=T(J)),I=d(),J=I+rt*.05*-Z.velocityY/.227,rt*=gp(d,I,J,Si(c,He)),D.vars.scrollY=R(J),D.invalidate().duration(rt).play(.01),(hr&&D.vars.scrollY>=l||I>=l-1)&&Et.to({},{onUpdate:W,duration:rt})}o&&o(Z)},t.onWheel=function(){D._ts&&D.pause(),cn()-p>1e3&&(v=0,p=cn())},t.onChange=function(Z,H,rt,I,J){if(Hr!==v&&S(),H&&n&&_(T(I[2]===H?O+(Z.startX-Z.x):_()+H-I[1])),rt){d.offset&&M();var it=J[2]===rt,st=it?k+Z.startY-Z.y:d()+rt-J[1],V=R(st);it&&st!==V&&(k+=V-st),d(V)}(rt||H)&&Fi()},t.onEnable=function(){fh(c,n?!1:"x"),zt.addEventListener("refresh",W),Qe(ie,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){fh(c,!0),Ke(ie,"resize",W),zt.removeEventListener("refresh",W),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Be(t),a.iOS=hr,hr&&!d()&&d(1),hr&&Et.ticker.add(Mi),Y=a._dc,D=Et.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Up(d,d(),function(){return D.pause()})},onUpdate:Fi,onComplete:Y.vars.onComplete}),a};zt.sort=function(r){if(hn(r))return ee.sort(r);var t=ie.pageYOffset||0;return zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};zt.observe=function(r){return new Be(r)};zt.normalizeScroll=function(r){if(typeof r=="undefined")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1){Sn&&Sn.kill(),Sn=r;return}var t=r instanceof Be?r:P_(r);return Sn&&Sn.target===t.target&&Sn.kill(),Gr(t.target)&&(Sn=t),t};zt.core={_getVelocityProp:Ba,_inputObserver:Np,_scrollers:te,_proxies:li,bridge:{ss:function(){ti||Xr("scrollStart"),ti=cn()},ref:function(){return ln}}};wp()&&Et.registerPlugin(zt);var Op="1.3.23";function zp(r,t,e){return Math.max(r,Math.min(t,e))}function I_(r,t,e){return(1-e)*r+e*t}function L_(r,t,e,n){return I_(r,t,1-Math.exp(-e*n))}function D_(r,t){return(r%t+t)%t}var U_=class{constructor(){Dt(this,"isRunning",!1);Dt(this,"value",0);Dt(this,"from",0);Dt(this,"to",0);Dt(this,"currentTime",0);Dt(this,"lerp");Dt(this,"duration");Dt(this,"easing");Dt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=zp(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=L_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function N_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var O_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Dt(this,"width",0);Dt(this,"height",0);Dt(this,"scrollHeight",0);Dt(this,"scrollWidth",0);Dt(this,"debouncedResize");Dt(this,"wrapperResizeObserver");Dt(this,"contentResizeObserver");Dt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Dt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Dt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=N_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},kp=class{constructor(){Dt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},F_=100/6,ur={passive:!1};function Fp(r,t){return r===1?F_:r===2?t:1}var B_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Dt(this,"touchStart",{x:0,y:0});Dt(this,"lastDelta",{x:0,y:0});Dt(this,"window",{width:0,height:0});Dt(this,"emitter",new kp);Dt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Dt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Dt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Dt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Fp(n,this.window.width),s=Fp(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Dt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}},Bp=r=>Math.min(1,1.001-2**(-10*r)),Vp=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:m=!0,prevent:g,virtualScroll:p,overscroll:y=!0,autoRaf:v=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:S=!1}={}){Dt(this,"_isScrolling",!1);Dt(this,"_isStopped",!1);Dt(this,"_isLocked",!1);Dt(this,"_preventNextNativeScrollEvent",!1);Dt(this,"_resetVelocityTimeout",null);Dt(this,"_rafId",null);Dt(this,"isTouching");Dt(this,"time",0);Dt(this,"userData",{});Dt(this,"lastVelocity",0);Dt(this,"velocity",0);Dt(this,"direction",0);Dt(this,"options");Dt(this,"targetScroll");Dt(this,"animatedScroll");Dt(this,"animate",new U_);Dt(this,"emitter",new kp);Dt(this,"dimensions");Dt(this,"virtualScroll");Dt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Dt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Dt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Dt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Dt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Dt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var m,g,p,y,v;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent"))||h==="vertical"&&((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Dt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Dt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Op,window.lenis||(window.lenis={}),window.lenis.version=Op,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Bp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:m,prevent:g,virtualScroll:p,overscroll:y,autoRaf:v,anchors:x,autoToggle:C,allowNestedScroll:E,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new O_(r,t,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new B_(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let _=null;if(typeof u=="string"?(_=document.querySelector(u),_||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(_=u),_){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let m=_.getBoundingClientRect(),g=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),y=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?m.left:m.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let _=u-this.animatedScroll;_>this.limit/2?u-=this.limit:_<-this.limit/2&&(u+=this.limit)}}else u=zp(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f!=null?f:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Bp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),m||this.emit(),m&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var E;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,_;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let T=window.getComputedStyle(r);if(i.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=f>d,l=u>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let m=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,p,y,v,x,C;if(m==="horizontal")g=Math.round(r.scrollLeft),p=f-d,y=t,v=s,x=a,C=c;else if(m==="vertical")g=Math.round(r.scrollTop),p=u-_,y=e,v=o,x=l,C=h;else return!1;return!C&&(g>=p||g<=0)?!0:(y>0?g<p:g>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?D_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Hp=1600,Gp=900,Ch=[1,2,4,6,8,12,17,23,31,41,52,63,72,80,85,89,93,95,97,98,99],Rh={x:1338,y:515},Wp={x:268,y:520},Xp={x:800,y:760};function Ph({el:r,reduced:t,onReveal:e,onDone:n}){let i=r.querySelector(".preloader__canvas"),s=r.querySelector(".preloader__flash"),o=r.querySelector(".preloader__count"),a=r.querySelector(".preloader__num"),l=i.getContext("2d"),c=document.createElement("canvas"),h=c.getContext("2d"),f=z_(),u=0,d=0,_=1,m=1,g=0,p=0,y=J=>g+J*m,v=J=>p+J*m,x={p:0,right:0,left:0,giants:0,eyes:0,aimR:188,aimL:-24,spread:.7,glow:1},C=Array.from({length:90},(J,it)=>({x:300+Math.random()*1e3,y:450+Math.random()*420,r:.6+Math.random()*1.6,v:4+Math.random()*10,ph:Math.random()*Math.PI*2}));function E(){_=Math.min(window.devicePixelRatio||1,2),u=window.innerWidth,d=window.innerHeight,i.width=Math.round(u*_),i.height=Math.round(d*_),u/d<.9?(m=Math.max(u/1180,d/2400),g=u/2-800*m,p=d*.47-560*m):(m=Math.max(u/Hp,d/Gp),g=(u-Hp*m)/2,p=(d-Gp*m)/2),c.width=Math.max(2,Math.ceil(u/4)),c.height=Math.max(2,Math.ceil(d/4))}E(),window.addEventListener("resize",E);function T(J,it,st,V,K,ot,et){if(et<=.001)return;let ht=V*Math.PI/180,pt=K*Math.PI/180,It=y(st.x)*it,Vt=v(st.y)*it,Nt=ot*m*it,Lt=It+Math.cos(ht)*Nt,U=Vt+Math.sin(ht)*Nt,ce=J.createLinearGradient(It,Vt,Lt,U);ce.addColorStop(0,`rgba(255,222,210,${.95*et})`),ce.addColorStop(.3,`rgba(255,170,145,${.62*et})`),ce.addColorStop(.7,`rgba(232,110,88,${.34*et})`),ce.addColorStop(1,"rgba(200,70,50,0)"),J.fillStyle=ce;for(let[Ft,B]of[[pt,.55],[pt*.72,.6]]){J.globalAlpha=B,J.beginPath();let Tt=ht+Math.PI/2;J.moveTo(It+Math.cos(Tt)*6*m*it,Vt+Math.sin(Tt)*6*m*it),J.lineTo(It+Math.cos(ht-Ft)*Nt,Vt+Math.sin(ht-Ft)*Nt),J.lineTo(It+Math.cos(ht+Ft)*Nt,Vt+Math.sin(ht+Ft)*Nt),J.lineTo(It-Math.cos(Tt)*6*m*it,Vt-Math.sin(Tt)*6*m*it),J.closePath(),J.fill()}J.globalAlpha=1}function R(J){let it=c.width/u,st=h;st.setTransform(1,0,0,1,0,0),st.globalCompositeOperation="source-over";let V=st.createRadialGradient(y(810)*it,v(330)*it,0,y(810)*it,v(330)*it,980*m*it);V.addColorStop(0,"#6e2016"),V.addColorStop(.45,"#3d110c"),V.addColorStop(1,"#170605"),st.fillStyle=V,st.fillRect(0,0,c.width,c.height),st.save(),st.translate(y(810)*it,v(150)*it),st.scale(1,2.6);let K=st.createRadialGradient(0,0,0,0,0,230*m*it);if(K.addColorStop(0,"rgba(150,34,24,0.55)"),K.addColorStop(1,"rgba(150,34,24,0)"),st.fillStyle=K,st.beginPath(),st.arc(0,0,230*m*it,0,Math.PI*2),st.fill(),st.restore(),x.giants>0){st.fillStyle=`rgba(16,4,3,${.88*x.giants})`;let pt=Math.sin(J*.6)*6;S(st,it,300+pt,395,235,270),S(st,it,330+pt,960,560,360),S(st,it,1325-pt,300,300,335),S(st,it,1310-pt,930,640,400)}let ot=st.createLinearGradient(0,v(780)*it,0,v(900)*it);ot.addColorStop(0,"rgba(25,6,5,0)"),ot.addColorStop(1,"rgba(25,6,5,0.65)"),st.fillStyle=ot,st.fillRect(0,v(780)*it,c.width,c.height),st.globalCompositeOperation="lighter";let et=.96+.04*Math.sin(J*23)*Math.sin(J*7);T(st,it,Rh,x.aimR+Math.sin(J*.7)*1.2,21*x.spread,1050,x.right*et),T(st,it,Wp,x.aimL-Math.sin(J*.8)*1.2,21*x.spread,1050,x.left*et);let ht=(x.right+x.left)*.5;if(ht>0){st.save(),st.translate(y(Xp.x)*it,v(842)*it),st.scale(1,.17);let pt=st.createRadialGradient(0,0,0,0,0,420*m*it);pt.addColorStop(0,`rgba(255,170,150,${.5*ht})`),pt.addColorStop(1,"rgba(255,170,150,0)"),st.fillStyle=pt,st.beginPath(),st.arc(0,0,420*m*it,0,Math.PI*2),st.fill(),st.restore()}st.globalCompositeOperation="source-over"}function S(J,it,st,V,K,ot){J.beginPath(),J.ellipse(y(st)*it,v(V)*it,K*m*it,ot*m*it,0,0,Math.PI*2),J.fill()}function M(J,it,st,V,K,ot){ot<=.02||(l.save(),l.translate(y(J),v(it)),l.rotate(K),l.scale(1,ot),l.beginPath(),l.moveTo(-st*m,0),l.quadraticCurveTo(-st*.1*m,-V*2*m,st*m,-V*.2*m),l.quadraticCurveTo(st*.1*m,V*1.4*m,-st*m,0),l.closePath(),l.shadowColor="rgba(255,120,90,0.9)",l.shadowBlur=26*m,l.fillStyle="#fff4ee",l.fill(),l.restore())}function P(J,it,st){if(it<=.01)return;let V=y(J.x),K=v(J.y),ot=l.createRadialGradient(V,K,0,V,K,70*m);ot.addColorStop(0,`rgba(255,255,255,${it})`),ot.addColorStop(.25,`rgba(255,226,214,${.85*it})`),ot.addColorStop(1,"rgba(255,150,120,0)"),l.fillStyle=ot,l.beginPath(),l.arc(V,K,70*m,0,Math.PI*2),l.fill(),l.fillStyle=`rgba(255,255,255,${it})`,l.beginPath(),l.arc(V,K,(13+Math.sin(st*9)*.6)*m,0,Math.PI*2),l.fill()}function D(J){let it=Math.min(1,x.right+x.left*.6),st=.25+.7*it,V=`rgba(255,228,218,${st})`,K=`rgba(255,214,200,${st*.55})`,ot=6.5*m;l.save(),l.lineCap="round",l.lineJoin="round",l.fillStyle="rgba(20,4,3,0.5)",l.beginPath(),l.ellipse(y(Xp.x),v(850),190*m,14*m,0,0,Math.PI*2),l.fill(),l.fillStyle=V,l.fillRect(y(700),v(726),272*m,8*m),l.fillStyle=K,l.fillRect(y(708),v(734),6*m,112*m),l.fillRect(y(958),v(734),6*m,112*m),l.fillStyle=`rgba(255,214,200,${st*.18})`,l.fillRect(y(714),v(736),244*m,62*m),l.strokeStyle=V,l.lineWidth=3*m,l.beginPath(),l.moveTo(y(838),v(723)),l.lineTo(y(900),v(723)),l.lineTo(y(912),v(688)),l.stroke(),l.fillStyle=`rgba(255,255,255,${.35+.25*Math.sin(J*3)})`,l.beginPath(),l.arc(y(905),v(706),10*m,0,Math.PI*2),l.fill(),l.fillStyle=V,l.fillRect(y(930),v(712),12*m,14*m),l.strokeStyle=K,l.lineWidth=6*m,l.beginPath(),l.moveTo(y(742),v(742)),l.lineTo(y(748),v(796)),l.lineTo(y(800),v(796)),l.moveTo(y(752),v(796)),l.lineTo(y(746),v(846)),l.moveTo(y(796),v(796)),l.lineTo(y(800),v(846)),l.stroke();let et=Math.sin(J*2.2)*1.2,ht=Math.sin(J*14)*1.6,pt=V,It=`rgba(255,236,228,${st})`;l.fillStyle=It,l.beginPath(),l.moveTo(y(768),v(724+et)),l.quadraticCurveTo(y(781),v(716+et),y(795),v(726+et)),l.quadraticCurveTo(y(800),v(760),y(797),v(792)),l.lineTo(y(770),v(794)),l.quadraticCurveTo(y(760),v(758),y(768),v(724+et)),l.fill(),l.strokeStyle=`rgba(255,214,200,${st*.9})`,l.lineWidth=10*m,l.beginPath(),l.moveTo(y(780),v(788)),l.lineTo(y(836),v(790)),l.lineTo(y(840),v(838)),l.stroke(),l.fillStyle=`rgba(255,214,200,${st})`,l.beginPath(),l.ellipse(y(848),v(842),12*m,4.5*m,0,0,Math.PI*2),l.fill(),l.strokeStyle=pt,l.lineWidth=7*m,l.beginPath(),l.moveTo(y(786),v(732+et)),l.lineTo(y(806),v(762)),l.lineTo(y(846+ht*.3),v(721+ht)),l.stroke(),l.fillStyle=pt,l.beginPath(),l.ellipse(y(784),v(699+et),13*m,15*m,.15,0,Math.PI*2),l.fill(),l.fillStyle=`rgba(60,16,12,${.55+.3*it})`,l.beginPath(),l.ellipse(y(780),v(693+et),13.5*m,10*m,.25,Math.PI*.95,Math.PI*2.05),l.fill(),l.lineWidth=6*m,l.strokeStyle=pt,l.beginPath(),l.moveTo(y(782),v(712+et)),l.lineTo(y(781),v(722+et)),l.stroke(),l.restore()}function O(J){l.setTransform(1,0,0,1,0,0),R(J),l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(c,0,0,i.width,i.height),l.setTransform(_,0,0,_,0,0),D(J),l.globalCompositeOperation="lighter";let it=Math.max(x.right,x.left);for(let ht of C){let pt=450+((ht.y-450-J*ht.v)%420+420)%420,It=ht.x+Math.sin(J*.8+ht.ph)*8,Vt=.5+.5*Math.sin(J*3+ht.ph);l.fillStyle=`rgba(255,220,205,${.35*Vt*it})`,l.beginPath(),l.arc(y(It),v(pt),ht.r*m,0,Math.PI*2),l.fill()}l.globalCompositeOperation="source-over",P(Rh,x.right,J),P(Wp,x.left,J+1.3);let st=ht=>{let pt=(J+ht)%4.2;return pt<.16?Math.abs(pt-.08)/.08:1},V=Math.sin(J*.5)*6,K=x.eyes*st(.7),ot=x.eyes*st(2.1);M(300+V,410,46,12,.18,K),M(452+V,398,46,12,-.12,K),M(1205+V,310,60,15,.32,ot),M(1440+V,372,60,15,-.05,ot),l.globalAlpha=.07,l.fillStyle=l.createPattern(f,"repeat"),l.save(),l.translate(Math.random()*200,Math.random()*200),l.fillRect(-200,-200,u+400,d+400),l.restore(),l.globalAlpha=1;let et=l.createRadialGradient(u/2,d*.55,Math.min(u,d)*.3,u/2,d*.55,Math.max(u,d)*.8);et.addColorStop(0,"rgba(0,0,0,0)"),et.addColorStop(1,"rgba(8,2,1,0.55)"),l.fillStyle=et,l.fillRect(0,0,u,d)}let k=!0,Y=performance.now();function W(){k&&(O((performance.now()-Y)/1e3),requestAnimationFrame(W))}requestAnimationFrame(W);let Z=()=>{let J=Math.min(Ch.length-1,Math.floor(x.p*Ch.length));a.textContent=Ch[J]},H=()=>{k=!1,window.removeEventListener("resize",E),r.remove(),n&&n()};if(t){x.right=x.left=x.giants=x.eyes=1,x.aimR=152,x.aimL=28,x.p=1,Z(),re.set(s,{opacity:0}),re.timeline({delay:.4}).to(r,{opacity:0,duration:.5}).add(()=>{e&&e(),H()});return}let rt=J=>`${y(J.x)}px ${v(J.y)}px`,I=re.timeline();return I.set(i,{scale:7,transformOrigin:rt(Rh)}).set(s,{opacity:1,backgroundColor:"#ffe9e0"}).set(o,{opacity:0,y:30}).set(x,{right:1}).to(i,{scale:1,duration:1.5,ease:"power3.out"},0).to(s,{opacity:0,duration:1,ease:"power2.out"},.05).to(o,{opacity:1,y:0,duration:.8,ease:"power3.out"},.35).to(x,{aimR:152,duration:2.2,ease:"power2.inOut"},.2).to(x,{p:1,duration:4.6,ease:"power1.inOut",onUpdate:Z},.3).to(x,{giants:1,duration:1.6,ease:"power2.out"},1).to(x,{eyes:.25,duration:.35,ease:"power2.out"},1.25).to(x,{eyes:1,duration:.9,ease:"power2.inOut"},2).to(x,{left:.7,duration:.08,repeat:3,yoyo:!0,ease:"none"},1.55).to(x,{left:1,duration:.3},1.9).to(x,{aimL:29,duration:1.8,ease:"power2.inOut"},1.6).to(x,{spread:1,duration:2.6,ease:"power2.inOut"},1.4).addLabel("zoom",5.2).to(o,{opacity:0,y:-20,duration:.35,ease:"power2.in"},"zoom").to(i,{scale:18,duration:1.15,ease:"power3.in",transformOrigin:rt({x:805,y:655})},"zoom").to(s,{backgroundColor:"#c8432f",opacity:1,duration:.55,ease:"power2.in"},"zoom+=0.6").add(()=>{e&&e()},"zoom+=1.15").add(H,"zoom+=1.2"),I}function z_(){let r=document.createElement("canvas");r.width=r.height=160;let t=r.getContext("2d"),e=t.createImageData(160,160);for(let n=0;n<e.data.length;n+=4){let i=Math.random()*255;e.data[n]=e.data[n+1]=e.data[n+2]=i,e.data[n+3]=255}return t.putImageData(e,0,0),r}function sl(r,t,e,n,i=[]){let a=e*.8*(1-.42*r)/18;for(let l=0;l<18;l++){let c=l/17,h=.975-c*.8,f=Math.max(0,h-r*1.02)*t,u=Math.max(0,a*(.84-c*.66)*(1-.35*r)),d=i[l]||(i[l]={x:0,y:0,w:0,h:0});d.w=f,d.h=f>0?u:0,d.x=(t-f)/2,d.y=n+l*a+2}return i}var k_=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,V_=`
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
`,ol=class{constructor(t){this.canvas=t,this.state={mix:0,heroBottom:1,warp:1,reveal:0},this.bars=new Float32Array(72);let e=t.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!e){this.failed=!0,t.classList.add("is-fallback");return}this.gl=e;let n=e.createProgram(),i=(l,c)=>{let h=e.createShader(l);if(e.shaderSource(h,c),e.compileShader(h),!e.getShaderParameter(h,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(h));e.attachShader(n,h)};try{if(i(e.VERTEX_SHADER,k_),i(e.FRAGMENT_SHADER,V_),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n))}catch(l){console.warn("[hero] shader failed, using CSS fallback",l),this.failed=!0,t.classList.add("is-fallback");return}e.useProgram(n);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let o=e.getAttribLocation(n,"aPos");e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0);let a=l=>e.getUniformLocation(n,l);this.u={res:a("uRes"),dpr:a("uDpr"),time:a("uTime"),mix:a("uMix"),heroBottom:a("uHeroBottom"),warp:a("uWarp"),reveal:a("uReveal"),black:a("uBlack"),bars:a("uBars")},e.uniform3f(this.u.black,11/255,11/255,12/255),this.resize()}resize(){if(this.failed)return;let t=Math.min(window.devicePixelRatio||1,1.5),e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight;this.w=e,this.h=n,this.dpr=t,this.canvas.width=Math.round(e*t),this.canvas.height=Math.round(n*t),this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}setBars(t){for(let e=0;e<18;e++){let n=t[e];this.bars[e*4]=n?n.x:0,this.bars[e*4+1]=n?n.y:0,this.bars[e*4+2]=n?n.w:0,this.bars[e*4+3]=n?n.h:0}}render(t){if(this.failed)return;let{gl:e,u:n,state:i}=this;e.uniform2f(n.res,this.canvas.width/this.dpr,this.canvas.height/this.dpr),e.uniform1f(n.dpr,this.dpr),e.uniform1f(n.time,t),e.uniform1f(n.mix,i.mix),e.uniform1f(n.heroBottom,i.heroBottom*this.h),e.uniform1f(n.warp,i.warp),e.uniform1f(n.reveal,i.reveal),e.uniform4fv(n.bars,this.bars),e.drawArrays(e.TRIANGLES,0,3)}};var H_=0,qp=1,G_=2;var Qm=1,W_=2,Gi=3,Mr=0,mn=1,fi=2,vr=0,Ys=1,Yp=2,Zp=3,$p=4,X_=5,jr=100,q_=101,Y_=102,Z_=103,$_=104,J_=200,K_=201,Q_=202,j_=203,au=204,lu=205,tx=206,ex=207,nx=208,ix=209,rx=210,sx=211,ox=212,ax=213,lx=214,cu=0,hu=1,uu=2,Ks=3,fu=4,du=5,pu=6,mu=7,jm=0,cx=1,hx=2,yr=0,ux=1,fx=2,dx=3,bf=4,px=5,mx=6,gx=7;var tg=300,Qs=301,js=302,gu=303,_u=304,nc=306,xu=1e3,ns=1001,vu=1002,pi=1003,_x=1004;var al=1005;var wi=1006,Ih=1007;var is=1008;var Zi=1009,eg=1010,ng=1011,aa=1012,wf=1013,rs=1014,Xi=1015,pa=1016,Tf=1017,Ef=1018,to=1020,ig=35902,rg=1021,sg=1022,di=1023,og=1024,ag=1025,Zs=1026,eo=1027,lg=1028,Af=1029,cg=1030,Cf=1031;var Rf=1033,Il=33776,Ll=33777,Dl=33778,Ul=33779,yu=35840,Mu=35841,Su=35842,bu=35843,wu=36196,Tu=37492,Eu=37496,Au=37808,Cu=37809,Ru=37810,Pu=37811,Iu=37812,Lu=37813,Du=37814,Uu=37815,Nu=37816,Ou=37817,Fu=37818,Bu=37819,zu=37820,ku=37821,Nl=36492,Vu=36494,Hu=36495,hg=36283,Gu=36284,Wu=36285,Xu=36286;var Ol=2300,qu=2301,Lh=2302,Jp=2400,Kp=2401,Qp=2402;var xx=3200,vx=3201;var ug=0,yx=1,xr="",Un="srgb",ho="srgb-linear",ic="linear",ve="srgb";var Is=7680;var jp=519,Mx=512,Sx=513,bx=514,fg=515,wx=516,Tx=517,Ex=518,Ax=519,tm=35044;var em="300 es",qi=2e3,Fl=2001,Sr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nm=1234567,ra=Math.PI/180,la=180/Math.PI;function uo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function dn(r,t,e){return Math.max(t,Math.min(e,r))}function Pf(r,t){return(r%t+t)%t}function Cx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Rx(r,t,e){return r!==t?(e-r)/(t-r):0}function sa(r,t,e){return(1-e)*r+e*t}function Px(r,t,e,n){return sa(r,t,1-Math.exp(-e*n))}function Ix(r,t=1){return t-Math.abs(Pf(r,t*2)-t)}function Lx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Dx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ux(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Nx(r,t){return r+Math.random()*(t-r)}function Ox(r){return r*(.5-Math.random())}function Fx(r){r!==void 0&&(nm=r);let t=nm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bx(r){return r*ra}function zx(r){return r*la}function kx(r){return(r&r-1)===0&&r!==0}function Vx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gx(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var fo={DEG2RAD:ra,RAD2DEG:la,generateUUID:uo,clamp:dn,euclideanModulo:Pf,mapLinear:Cx,inverseLerp:Rx,lerp:sa,damp:Px,pingpong:Ix,smoothstep:Lx,smootherstep:Dx,randInt:Ux,randFloat:Nx,randFloatSpread:Ox,seededRandom:Fx,degToRad:Bx,radToDeg:zx,isPowerOfTwo:kx,ceilPowerOfTwo:Vx,floorPowerOfTwo:Hx,setQuaternionFromProperEuler:Gx,normalize:Tn,denormalize:Xs},de=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],C=i[2],E=i[5],T=i[8];return s[0]=o*m+a*y+l*C,s[3]=o*g+a*v+l*E,s[6]=o*p+a*x+l*T,s[1]=c*m+h*y+f*C,s[4]=c*g+h*v+f*E,s[7]=c*p+h*x+f*T,s[2]=u*m+d*y+_*C,s[5]=u*g+d*v+_*E,s[8]=u*p+d*x+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,_=e*f+n*u+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/_;return t[0]=f*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=u*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dh.makeScale(t,e)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dh=new Qt;function dg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wx(){let r=Bl("canvas");return r.style.display="block",r}var im={};function na(r){r in im||(im[r]=!0,console.warn(r))}function Xx(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qx(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yx(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?ic:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],om=[.3127,.329],am=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[ho]:{primaries:rm,whitePoint:om,transfer:ic,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:rm,whitePoint:om,transfer:ve,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});var Ls,Yu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=Bl("canvas")),Ls.width=t.width,Ls.height=t.height;let n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Bl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zx=0,zl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=uo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Uh(i[o].image)):s.push(Uh(i[o]))}else s=Uh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Uh(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Yu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $x=0,ri=class r extends Sr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ns,i=ns,s=wi,o=is,a=di,l=Zi,c=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=uo(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xu:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case vu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xu:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case vu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=tg;ri.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(d+1)/2,C=(p+1)/2,E=(h+u)/4,T=(f+m)/4,R=(_+g)/4;return v>x&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=T/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(f-m)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zu=class extends Sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ri(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends Zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kl=class extends ri{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $u=class extends ri{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],_=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=_,t[e+3]=m;return}if(f!==m||l!==u||c!==d||h!==_){let g=1-a,p=l*u+c*d+h*_+f*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),E=Math.atan2(C,p*y);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}let x=a*y;if(l=l*g+u*x,c=c*g+d*x,h=h*g+_*x,f=f*g+m*x,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*f+l*d-c*u,t[e+1]=l*_+h*u+c*f-a*d,t[e+2]=c*_+h*d+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nh=new z,cm=new br,ss=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),cl.subVectors(this.max,Ko),Ds.subVectors(t.a,Ko),Us.subVectors(t.b,Ko),Ns.subVectors(t.c,Ko),fr.subVectors(Us,Ds),dr.subVectors(Ns,Us),qr.subVectors(Ds,Ns);let e=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-qr.z,qr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,qr.z,0,-qr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-qr.y,qr.x,0];return!Oh(e,Ds,Us,Ns,cl)||(e=[1,0,0,0,1,0,0,0,1],!Oh(e,Ds,Us,Ns,cl))?!1:(hl.crossVectors(fr,dr),e=[hl.x,hl.y,hl.z],Oh(e,Ds,Us,Ns,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bi=[new z,new z,new z,new z,new z,new z,new z,new z],ci=new z,ll=new ss,Ds=new z,Us=new z,Ns=new z,fr=new z,dr=new z,qr=new z,Ko=new z,cl=new z,hl=new z,Yr=new z;function Oh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Yr.fromArray(r,s);let a=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),l=t.dot(Yr),c=e.dot(Yr),h=n.dot(Yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jx=new ss,Qo=new z,Fh=new z,no=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);let e=Qo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Fh)),this.expandByPoint(Qo.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new z,Bh=new z,ul=new z,pr=new z,zh=new z,fl=new z,kh=new z,Vl=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bh.copy(t).add(e).multiplyScalar(.5),ul.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Bh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ul),a=pr.dot(this.direction),l=-pr.dot(ul),c=pr.lengthSq(),h=Math.abs(1-o*o),f,u,d,_;if(h>0)if(f=o*l-a,u=o*a-l,_=s*h,f>=0)if(u>=-_)if(u<=_){let m=1/h;f*=m,u*=m,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bh).addScaledVector(ul,u),d}intersectSphere(t,e){zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,s){zh.subVectors(e,t),fl.subVectors(n,t),kh.crossVectors(zh,fl);let o=this.direction.dot(kh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,t);let l=a*this.direction.dot(fl.crossVectors(pr,fl));if(l<0)return null;let c=a*this.direction.dot(zh.cross(pr));if(c<0||l+c>o)return null;let h=-a*pr.dot(kh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,_,m,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,_,m,g)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,_,m,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Os.setFromMatrixColumn(t,0).length(),s=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,_=a*h,m=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=u-m*c,e[9]=-a*l,e[2]=m-u*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,_=c*h,m=c*f;e[0]=u+m*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=m+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,_=c*h,m=c*f;e[0]=u-m*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=m-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,_=a*h,m=a*f;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+m,e[1]=l*f,e[5]=m*c+u,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,_=a*l,m=a*c;e[0]=l*h,e[4]=m-u*f,e[8]=_*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+_,e[10]=u-m*f}else if(t.order==="XZY"){let u=o*l,d=o*c,_=a*l,m=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+m,e[5]=o*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*h,e[10]=m*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kx,t,Qx)}lookAt(t,e,n){let i=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),mr.crossVectors(n,Wn),mr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),mr.crossVectors(n,Wn)),mr.normalize(),dl.crossVectors(Wn,mr),i[0]=mr.x,i[4]=dl.x,i[8]=Wn.x,i[1]=mr.y,i[5]=dl.y,i[9]=Wn.y,i[2]=mr.z,i[6]=dl.z,i[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],C=n[15],E=i[0],T=i[4],R=i[8],S=i[12],M=i[1],P=i[5],D=i[9],O=i[13],k=i[2],Y=i[6],W=i[10],Z=i[14],H=i[3],rt=i[7],I=i[11],J=i[15];return s[0]=o*E+a*M+l*k+c*H,s[4]=o*T+a*P+l*Y+c*rt,s[8]=o*R+a*D+l*W+c*I,s[12]=o*S+a*O+l*Z+c*J,s[1]=h*E+f*M+u*k+d*H,s[5]=h*T+f*P+u*Y+d*rt,s[9]=h*R+f*D+u*W+d*I,s[13]=h*S+f*O+u*Z+d*J,s[2]=_*E+m*M+g*k+p*H,s[6]=_*T+m*P+g*Y+p*rt,s[10]=_*R+m*D+g*W+p*I,s[14]=_*S+m*O+g*Z+p*J,s[3]=y*E+v*M+x*k+C*H,s[7]=y*T+v*P+x*Y+C*rt,s[11]=y*R+v*D+x*W+C*I,s[15]=y*S+v*O+x*Z+C*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],m=t[7],g=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+m*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+g*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],m=t[13],g=t[14],p=t[15],y=f*g*c-m*u*c+m*l*d-a*g*d-f*l*p+a*u*p,v=_*u*c-h*g*c-_*l*d+o*g*d+h*l*p-o*u*p,x=h*m*c-_*f*c+_*a*d-o*m*d-h*a*p+o*f*p,C=_*f*l-h*m*l-_*a*u+o*m*u+h*a*g-o*f*g,E=e*y+n*v+i*x+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=y*T,t[1]=(m*u*s-f*g*s-m*i*d+n*g*d+f*i*p-n*u*p)*T,t[2]=(a*g*s-m*l*s+m*i*c-n*g*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*T,t[4]=v*T,t[5]=(h*g*s-_*u*s+_*i*d-e*g*d-h*i*p+e*u*p)*T,t[6]=(_*l*s-o*g*s-_*i*c+e*g*c+o*i*p-e*l*p)*T,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(_*f*s-h*m*s-_*n*d+e*m*d+h*n*p-e*f*p)*T,t[10]=(o*m*s-_*a*s+_*n*c-e*m*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(h*m*i-_*f*i+_*n*u-e*m*u-h*n*g+e*f*g)*T,t[14]=(_*a*i-o*m*i-_*n*l+e*m*l+o*n*g-e*a*g)*T,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,_=s*f,m=o*h,g=o*f,p=a*f,y=l*c,v=l*h,x=l*f,C=n.x,E=n.y,T=n.z;return i[0]=(1-(m+p))*C,i[1]=(d+x)*C,i[2]=(_-v)*C,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(u+p))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(_+v)*T,i[9]=(g-y)*T,i[10]=(1-(u+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Os.set(i[0],i[1],i[2]).length(),o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],hi.copy(this);let c=1/s,h=1/o,f=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,e.setFromRotationMatrix(hi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=qi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,_;if(a===qi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Fl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qi){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h,_,m;if(a===qi)_=(o+s)*f,m=-2*f;else if(a===Fl)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new z,hi=new Ue,Kx=new z(0,0,0),Qx=new z(1,1,1),mr=new z,dl=new z,Wn=new z,hm=new Ue,um=new br,Ti=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return um.setFromEuler(this),this.setFromQuaternion(um,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Hl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jx=0,fm=new z,Fs=new br,ki=new Ue,pl=new z,jo=new z,tv=new z,ev=new br,dm=new z(1,0,0),pm=new z(0,1,0),mm=new z(0,0,1),gm={type:"added"},nv={type:"removed"},Bs={type:"childadded",child:null},Vh={type:"childremoved",child:null},An=class r extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new z,e=new Ti,n=new br,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(pm,t)}rotateZ(t){return this.rotateOnAxis(mm,t)}translateOnAxis(t,e){return fm.copy(t).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(pm,t)}translateZ(t){return this.translateOnAxis(mm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pl.copy(t):pl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(jo,pl,this.up):ki.lookAt(pl,jo,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ki),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gm),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nv),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gm),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,tv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};An.DEFAULT_UP=new z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new z,Vi=new z,Hh=new z,Hi=new z,zs=new z,ks=new z,_m=new z,Gh=new z,Wh=new z,Xh=new z,qh=new ye,Yh=new ye,Zh=new ye,ts=class r{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ui.subVectors(t,e),i.cross(ui);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ui.subVectors(i,e),Vi.subVectors(n,e),Hh.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Vi),l=ui.dot(Hh),c=Vi.dot(Vi),h=Vi.dot(Hh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,_=(o*h-a*l)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return qh.setScalar(0),Yh.setScalar(0),Zh.setScalar(0),qh.fromBufferAttribute(t,e),Yh.fromBufferAttribute(t,n),Zh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qh,s.x),o.addScaledVector(Yh,s.y),o.addScaledVector(Zh,s.z),o}static isFrontFacing(t,e,n,i){return ui.subVectors(n,e),Vi.subVectors(t,e),ui.cross(Vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ui.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;zs.subVectors(i,n),ks.subVectors(s,n),Gh.subVectors(t,n);let l=zs.dot(Gh),c=ks.dot(Gh);if(l<=0&&c<=0)return e.copy(n);Wh.subVectors(t,i);let h=zs.dot(Wh),f=ks.dot(Wh);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zs,o);Xh.subVectors(t,s);let d=zs.dot(Xh),_=ks.dot(Xh);if(_>=0&&d<=_)return e.copy(s);let m=d*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ks,a);let g=h*_-d*f;if(g<=0&&f-h>=0&&d-_>=0)return _m.subVectors(s,i),a=(f-h)/(f-h+(d-_)),e.copy(i).addScaledVector(_m,a);let p=1/(g+m+u);return o=m*p,a=u*p,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function $h(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Pf(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=$h(o,s,t+1/3),this.g=$h(o,s,t),this.b=$h(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){let n=pg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return he.fromWorkingColorSpace(fn.copy(this),t),Math.round(dn(fn.r*255,0,255))*65536+Math.round(dn(fn.g*255,0,255))*256+Math.round(dn(fn.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Un){he.fromWorkingColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,i=fn.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+e,gr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gr),t.getHSL(ml);let n=sa(gr.h,ml.h,e),i=sa(gr.s,ml.s,e),s=sa(gr.l,ml.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new $t;$t.NAMES=pg;var iv=0,wr=class extends Sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=uo(),this.name="",this.blending=Ys,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==au&&(n.blendSrc=this.blendSrc),this.blendDst!==lu&&(n.blendDst=this.blendDst),this.blendEquation!==jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},io=class extends wr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new z,gl=new de,ii=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tm&&(t.usage=this.usage),t}};var Gl=class extends ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wl=class extends ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xe=class extends ii{constructor(t,e,n){super(new Float32Array(t),e,n)}},rv=0,ei=new Ue,Jh=new An,Vs=new z,Xn=new ss,ta=new ss,je=new z,qn=class r extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dg(t)?Wl:Gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Xn.min,ta.min),Xn.expandByPoint(je),je.addVectors(Xn.max,ta.max),Xn.expandByPoint(je)):(Xn.expandByPoint(ta.min),Xn.expandByPoint(ta.max))}Xn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),je.add(Vs)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;let c=new z,h=new z,f=new z,u=new de,d=new de,_=new de,m=new z,g=new z;function p(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),u.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),h.sub(c),f.sub(c),d.sub(u),_.sub(u);let P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),a[R].add(m),a[S].add(m),a[M].add(m),l[R].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,S=y.length;R<S;++R){let M=y[R],P=M.start,D=M.count;for(let O=P,k=P+D;O<k;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new z,x=new z,C=new z,E=new z;function T(R){C.fromBufferAttribute(i,R),E.copy(C);let S=a[R];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(E,S);let P=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,S=y.length;R<S;++R){let M=y[R],P=M.start,D=M.count;for(let O=P,k=P+D;O<k;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),m=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let p=0;p<h;p++)u[_++]=c[d++]}return new ii(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xm=new Ue,Zr=new Vl,_l=new no,vm=new z,xl=new z,vl=new z,yl=new z,Kh=new z,Ml=new z,ym=new z,Sl=new z,le=class extends An{constructor(t=new qn,e=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Kh.fromBufferAttribute(f,t),o?Ml.addScaledVector(Kh,h):Ml.addScaledVector(Kh.sub(e),h))}e.add(Ml)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),Zr.copy(t.ray).recast(t.near),!(_l.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(_l,vm)===null||Zr.origin.distanceToSquared(vm)>(t.far-t.near)**2))&&(xm.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(xm),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=u.length;_<m;_++){let g=u[_],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,C=v;x<C;x+=3){let E=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=bl(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=bl(this,o,t,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=u.length;_<m;_++){let g=u[_],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,C=v;x<C;x+=3){let E=x,T=x+1,R=x+2;i=bl(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){let y=g,v=g+1,x=g+2;i=bl(this,o,t,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function sv(r,t,e,n,i,s,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Sl);return c<e.near||c>e.far?null:{distance:c,point:Sl.clone(),object:r}}function bl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,xl),r.getVertexPosition(l,vl),r.getVertexPosition(c,yl);let h=sv(r,t,e,n,xl,vl,yl,ym);if(h){let f=new z;ts.getBarycoord(ym,xl,vl,yl,f),i&&(h.uv=ts.getInterpolatedAttribute(i,a,l,c,f,new de)),s&&(h.uv1=ts.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};ts.getNormal(xl,vl,yl,u.normal),h.face=u,h.barycoord=f}return h}var Ji=class r extends qn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function _(m,g,p,y,v,x,C,E,T,R,S){let M=x/T,P=C/R,D=x/2,O=C/2,k=E/2,Y=T+1,W=R+1,Z=0,H=0,rt=new z;for(let I=0;I<W;I++){let J=I*P-O;for(let it=0;it<Y;it++){let st=it*M-D;rt[m]=st*y,rt[g]=J*v,rt[p]=k,c.push(rt.x,rt.y,rt.z),rt[m]=0,rt[g]=0,rt[p]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(it/T),f.push(1-I/R),Z+=1}}for(let I=0;I<R;I++)for(let J=0;J<T;J++){let it=u+J+Y*I,st=u+J+Y*(I+1),V=u+(J+1)+Y*(I+1),K=u+(J+1)+Y*I;l.push(it,st,K),l.push(st,V,K),H+=6}a.addGroup(d,H,S),d+=H,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ro(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function En(r){let t={};for(let e=0;e<r.length;e++){let n=ro(r[e]);for(let i in n)t[i]=n[i]}return t}function ov(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mg(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var av={clone:ro,merge:En},lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends wr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lv,this.fragmentShader=cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xl=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_r=new z,Mm=new de,Sm=new de,pn=class extends Xl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,e){return this.getViewBounds(t,Mm,Sm),e.subVectors(Sm,Mm)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,Gs=1,Ju=class extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pn(Hs,Gs,t,e);i.layers=this.layers,this.add(i);let s=new pn(Hs,Gs,t,e);s.layers=this.layers,this.add(s);let o=new pn(Hs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new pn(Hs,Gs,t,e);a.layers=this.layers,this.add(a);let l=new pn(Hs,Gs,t,e);l.layers=this.layers,this.add(l);let c=new pn(Hs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ql=class extends ri{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ku=class extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ql(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ji(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:vr});s.uniforms.tEquirect.value=e;let o=new le(i,s),a=e.minFilter;return e.minFilter===is&&(e.minFilter=wi),new Ju(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Qh=new z,hv=new z,uv=new Qt,Wi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Qh.subVectors(n,e).cross(hv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uv.getNormalMatrix(t),i=this.coplanarPoint(Qh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$r=new no,wl=new z,ca=class{constructor(t=new Wi,e=new Wi,n=new Wi,i=new Wi,s=new Wi,o=new Wi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],_=i[9],m=i[10],g=i[11],p=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,u-c,g-d,x-p).normalize(),n[1].setComponents(l+s,u+c,g+d,x+p).normalize(),n[2].setComponents(l+o,u+h,g+_,x+y).normalize(),n[3].setComponents(l-o,u-h,g-_,x-y).normalize(),n[4].setComponents(l-a,u-f,g-m,x-v).normalize(),e===qi)n[5].setComponents(l+a,u+f,g+m,x+v).normalize();else if(e===Fl)n[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wl.x=i.normal.x>0?t.max.x:t.min.x,wl.y=i.normal.y>0?t.max.y:t.min.y,wl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gg(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){let _=f[u],m=f[d];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++u,f[u]=m)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){let m=f[d];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var so=class r extends qn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],_=[],m=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let v=0;v<c;v++){let x=v*f-s;_.push(x,-y,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),E=y+1+c*p;d.push(v,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pv=`#ifdef USE_ALPHAHASH
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
#endif`,mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vv=`#ifdef USE_AOMAP
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
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mv=`#ifdef USE_BATCHING
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
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ev=`#ifdef USE_IRIDESCENCE
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
#endif`,Av=`#ifdef USE_BUMPMAP
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ov=`#define PI 3.141592653589793
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
} // validated`,Fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bv=`vec3 transformedNormal = objectNormal;
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
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,uy=`struct PhysicalMaterial {
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
}`,fy=`
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,By=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ky=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,TM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define MATCAP
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
}`,IM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,UM=`#define PHONG
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
}`,NM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,kM=`uniform float size;
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
}`,VM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:dv,alphahash_pars_fragment:pv,alphamap_fragment:mv,alphamap_pars_fragment:gv,alphatest_fragment:_v,alphatest_pars_fragment:xv,aomap_fragment:vv,aomap_pars_fragment:yv,batching_pars_vertex:Mv,batching_vertex:Sv,begin_vertex:bv,beginnormal_vertex:wv,bsdfs:Tv,iridescence_fragment:Ev,bumpmap_pars_fragment:Av,clipping_planes_fragment:Cv,clipping_planes_pars_fragment:Rv,clipping_planes_pars_vertex:Pv,clipping_planes_vertex:Iv,color_fragment:Lv,color_pars_fragment:Dv,color_pars_vertex:Uv,color_vertex:Nv,common:Ov,cube_uv_reflection_fragment:Fv,defaultnormal_vertex:Bv,displacementmap_pars_vertex:zv,displacementmap_vertex:kv,emissivemap_fragment:Vv,emissivemap_pars_fragment:Hv,colorspace_fragment:Gv,colorspace_pars_fragment:Wv,envmap_fragment:Xv,envmap_common_pars_fragment:qv,envmap_pars_fragment:Yv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:sy,envmap_vertex:$v,fog_vertex:Jv,fog_pars_vertex:Kv,fog_fragment:Qv,fog_pars_fragment:jv,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ey,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ry,lights_toon_fragment:oy,lights_toon_pars_fragment:ay,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:hy,lights_physical_pars_fragment:uy,lights_fragment_begin:fy,lights_fragment_maps:dy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:xy,map_fragment:vy,map_pars_fragment:yy,map_particle_fragment:My,map_particle_pars_fragment:Sy,metalnessmap_fragment:by,metalnessmap_pars_fragment:wy,morphinstance_vertex:Ty,morphcolor_vertex:Ey,morphnormal_vertex:Ay,morphtarget_pars_vertex:Cy,morphtarget_vertex:Ry,normal_fragment_begin:Py,normal_fragment_maps:Iy,normal_pars_fragment:Ly,normal_pars_vertex:Dy,normal_vertex:Uy,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:By,iridescence_pars_fragment:zy,opaque_fragment:ky,packing:Vy,premultiplied_alpha_fragment:Hy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:$y,shadowmap_vertex:Jy,shadowmask_pars_fragment:Ky,skinbase_vertex:Qy,skinning_pars_vertex:jy,skinning_vertex:tM,skinnormal_vertex:eM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:hM,worldpos_vertex:uM,background_vert:fM,background_frag:dM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:xM,depth_frag:vM,distanceRGBA_vert:yM,distanceRGBA_frag:MM,equirect_vert:SM,equirect_frag:bM,linedashed_vert:wM,linedashed_frag:TM,meshbasic_vert:EM,meshbasic_frag:AM,meshlambert_vert:CM,meshlambert_frag:RM,meshmatcap_vert:PM,meshmatcap_frag:IM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:UM,meshphong_frag:NM,meshphysical_vert:OM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:kM,points_frag:VM,shadow_vert:HM,shadow_frag:GM,sprite_vert:WM,sprite_frag:XM},Mt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},bi={basic:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:En([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:En([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:En([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:En([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:En([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:En([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:En([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:En([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:En([Mt.common,Mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:En([Mt.lights,Mt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};bi.physical={uniforms:En([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Tl={r:0,b:0,g:0},Jr=new Ti,qM=new Ue;function YM(r,t,e,n,i,s,o){let a=new $t(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function m(y){let v=!1,x=_(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){let x=_(v);x&&(x.isCubeTexture||x.mapping===nc)?(h===void 0&&(h=new le(new Ji(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:ro(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jr.copy(v.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Jr)),h.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,(f!==x||u!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new le(new so(2,2),new Ei({name:"BackgroundMaterial",uniforms:ro(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Tl,mg(r)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:m,addToRenderList:g}}function ZM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(M,P,D,O,k){let Y=!1,W=f(O,D,P);s!==W&&(s=W,c(s.object)),Y=d(M,O,D,k),Y&&_(M,O,D,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(M,P,D,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function f(M,P,D){let O=D.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Y=k[P.id];Y===void 0&&(Y={},k[P.id]=Y);let W=Y[O];return W===void 0&&(W=u(l()),Y[O]=W),W}function u(M){let P=[],D=[],O=[];for(let k=0;k<e;k++)P[k]=0,D[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,P,D,O){let k=s.attributes,Y=P.attributes,W=0,Z=D.getAttributes();for(let H in Z)if(Z[H].location>=0){let I=k[H],J=Y[H];if(J===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function _(M,P,D,O){let k={},Y=P.attributes,W=0,Z=D.getAttributes();for(let H in Z)if(Z[H].location>=0){let I=Y[H];I===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(I=M.instanceColor));let J={};J.attribute=I,I&&I.data&&(J.data=I.data),k[H]=J,W++}s.attributes=k,s.attributesNum=W,s.index=O}function m(){let M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){let D=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;D[M]=1,O[M]===0&&(r.enableVertexAttribArray(M),O[M]=1),k[M]!==P&&(r.vertexAttribDivisor(M,P),k[M]=P)}function y(){let M=s.newAttributes,P=s.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==M[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function v(M,P,D,O,k,Y,W){W===!0?r.vertexAttribIPointer(M,P,D,k,Y):r.vertexAttribPointer(M,P,D,O,k,Y)}function x(M,P,D,O){m();let k=O.attributes,Y=D.getAttributes(),W=P.defaultAttributeValues;for(let Z in Y){let H=Y[Z];if(H.location>=0){let rt=k[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let I=rt.normalized,J=rt.itemSize,it=t.get(rt);if(it===void 0)continue;let st=it.buffer,V=it.type,K=it.bytesPerElement,ot=V===r.INT||V===r.UNSIGNED_INT||rt.gpuType===wf;if(rt.isInterleavedBufferAttribute){let et=rt.data,ht=et.stride,pt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,et.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<H.locationSize;It++)g(H.location+It);r.bindBuffer(r.ARRAY_BUFFER,st);for(let It=0;It<H.locationSize;It++)v(H.location+It,J/H.locationSize,V,I,ht*K,(pt+J/H.locationSize*It)*K,ot)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)p(H.location+et,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<H.locationSize;et++)g(H.location+et);r.bindBuffer(r.ARRAY_BUFFER,st);for(let et=0;et<H.locationSize;et++)v(H.location+et,J/H.locationSize,V,I,J*K,J/H.locationSize*et*K,ot)}}else if(W!==void 0){let I=W[Z];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(H.location,I);break;case 3:r.vertexAttrib3fv(H.location,I);break;case 4:r.vertexAttrib4fv(H.location,I);break;default:r.vertexAttrib1fv(H.location,I)}}}}y()}function C(){R();for(let M in n){let P=n[M];for(let D in P){let O=P[D];for(let k in O)h(O[k].object),delete O[k];delete P[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let D in P){let O=P[D];for(let k in O)h(O[k].object),delete O[k];delete P[D]}delete n[M.id]}function T(M){for(let P in n){let D=n[P];if(D[M.id]===void 0)continue;let O=D[M.id];for(let k in O)h(O[k].object),delete O[k];delete D[M.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function $M(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m]*u[m];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==di&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Zi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function KM(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Wi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!g)s?h(null):c();else{let y=s?0:n,v=y*4,x=p.clippingState||null;l.value=x,x=h(_,u,v,d);for(let C=0;C!==v;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){let m=f!==null?f.length:0,g=null;if(m!==0){if(g=l.value,_!==!0||g===null){let p=d+m*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=d;v!==m;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function QM(r){let t=new WeakMap;function e(o,a){return a===gu?o.mapping=Qs:a===_u&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gu||a===_u)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ku(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yl=class extends Xl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qs=4,bm=[.125,.215,.35,.446,.526,.582],es=20,jh=new Yl,wm=new $t,tu=null,eu=0,nu=0,iu=!1,Qr=(1+Math.sqrt(5))/2,Ws=1/Qr,Tm=[new z(-Qr,Ws,0),new z(Qr,Ws,0),new z(-Ws,0,Qr),new z(Ws,0,Qr),new z(0,Qr,-Ws),new z(0,Qr,Ws),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],oo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,El(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:pa,format:di,colorSpace:ho,depthBuffer:!1},i=Em(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jM(s)),this._blurMaterial=tS(s,t,e)}return i}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,jh)}_sceneToCubeUV(t,e,n,i){let a=new pn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(wm),h.toneMapping=yr,h.autoClear=!1;let d=new io({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new le(new Ji,d),m=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,m=!0):(d.color.copy(wm),m=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;El(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qs||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;El(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tm[(i-s-1)%Tm.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new le(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*es-1),m=s/_,g=isFinite(s)?1+Math.floor(h*m):es;g>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let p=[],y=0;for(let T=0;T<es;++T){let R=T/m,S=Math.exp(-R*R/2);p.push(S),T===0?y+=S:T<g&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-n;let x=this._sizeLods[i],C=3*x*(i>v-qs?i-v+qs:0),E=4*(this._cubeSize-x);El(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(f,jh)}};function jM(r){let t=[],e=[],n=[],i=r,s=r-qs+1+bm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-qs?l=bm[o-r+qs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,m=3,g=2,p=1,y=new Float32Array(m*_*d),v=new Float32Array(g*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,m*_*E),v.set(u,g*_*E);let M=[E,E,E,E,E,E];x.set(M,p*_*E)}let C=new qn;C.setAttribute("position",new ii(y,m)),C.setAttribute("uv",new ii(v,g)),C.setAttribute("faceIndex",new ii(x,p)),t.push(C),i>qs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Em(r,t,e){let n=new $i(r,t,e);return n.texture.mapping=nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function El(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function tS(r,t,e){let n=new Float32Array(es),i=new z(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:If(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Am(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Cm(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}function eS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===gu||l===_u,h=l===Qs||l===js;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new oo(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new oo(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&na("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iS(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let m=u.morphAttributes[_];for(let g=0,p=m.length;g<p;g++)t.remove(m[g])}u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let _ in d){let m=d[_];for(let g=0,p=m.length;g<p;g++)t.update(m[g],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,_=f.attributes.position,m=0;if(d!==null){let y=d.array;m=d.version;for(let v=0,x=y.length;v<x;v+=3){let C=y[v+0],E=y[v+1],T=y[v+2];u.push(C,E,E,T,T,C)}}else if(_!==void 0){let y=_.array;m=_.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let C=v+0,E=v+1,T=v+2;u.push(C,E,E,T,T,C)}}else return;let g=new(dg(u)?Wl:Gl)(u,1);g.version=m;let p=s.get(f);p&&t.remove(p),s.set(f,g)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function rS(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,u*o,_),e.update(d,n,_))}function h(u,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];e.update(g,n,1)}function f(u,d,_,m){if(_===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,m,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*m[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function sS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function oS(r,t,e){let n=new WeakMap,i=new ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*f),T=new kl(E,x,C,f);T.type=Xi,T.needsUpdate=!0;let R=v*4;for(let M=0;M<f;M++){let P=g[M],D=p[M],O=y[M],k=x*C*4*M;for(let Y=0;Y<P.count;Y++){let W=Y*R;d===!0&&(i.fromBufferAttribute(P,Y),E[k+W+0]=i.x,E[k+W+1]=i.y,E[k+W+2]=i.z,E[k+W+3]=0),_===!0&&(i.fromBufferAttribute(D,Y),E[k+W+4]=i.x,E[k+W+5]=i.y,E[k+W+6]=i.z,E[k+W+7]=0),m===!0&&(i.fromBufferAttribute(O,Y),E[k+W+8]=i.x,E[k+W+9]=i.y,E[k+W+10]=i.z,E[k+W+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new de(x,C)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function aS(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Zl=class extends ri{constructor(t,e,n,i,s,o,a,l,c,h=Zs){if(h!==Zs&&h!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=rs),n===void 0&&h===eo&&(n=to),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pi,this.minFilter=l!==void 0?l:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_g=new ri,Rm=new Zl(1,1),xg=new kl,vg=new $u,yg=new ql,Pm=[],Im=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Um=new Float32Array(4);function po(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Pm[i];if(s===void 0&&(s=new Float32Array(i),Pm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function rc(r,t){let e=Im[t];e===void 0&&(e=new Int32Array(t),Im[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function lS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Je(e,t)}}function hS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Je(e,t)}}function uS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Je(e,t)}}function fS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Um.set(n),r.uniformMatrix2fv(this.addr,!1,Um),Je(e,n)}}function dS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Dm.set(n),r.uniformMatrix3fv(this.addr,!1,Dm),Je(e,n)}}function pS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Lm.set(n),r.uniformMatrix4fv(this.addr,!1,Lm),Je(e,n)}}function mS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Je(e,t)}}function _S(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Je(e,t)}}function xS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Je(e,t)}}function vS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Je(e,t)}}function MS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Je(e,t)}}function SS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Je(e,t)}}function bS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rm.compareFunction=fg,s=Rm):s=_g,e.setTexture2D(t||s,i)}function wS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vg,i)}function TS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yg,i)}function ES(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xg,i)}function AS(r){switch(r){case 5126:return lS;case 35664:return cS;case 35665:return hS;case 35666:return uS;case 35674:return fS;case 35675:return dS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return xS;case 5125:return vS;case 36294:return yS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return ES}}function CS(r,t){r.uniform1fv(this.addr,t)}function RS(r,t){let e=po(t,this.size,2);r.uniform2fv(this.addr,e)}function PS(r,t){let e=po(t,this.size,3);r.uniform3fv(this.addr,e)}function IS(r,t){let e=po(t,this.size,4);r.uniform4fv(this.addr,e)}function LS(r,t){let e=po(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function DS(r,t){let e=po(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function US(r,t){let e=po(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function NS(r,t){r.uniform1iv(this.addr,t)}function OS(r,t){r.uniform2iv(this.addr,t)}function FS(r,t){r.uniform3iv(this.addr,t)}function BS(r,t){r.uniform4iv(this.addr,t)}function zS(r,t){r.uniform1uiv(this.addr,t)}function kS(r,t){r.uniform2uiv(this.addr,t)}function VS(r,t){r.uniform3uiv(this.addr,t)}function HS(r,t){r.uniform4uiv(this.addr,t)}function GS(r,t,e){let n=this.cache,i=t.length,s=rc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||_g,s[o])}function WS(r,t,e){let n=this.cache,i=t.length,s=rc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vg,s[o])}function XS(r,t,e){let n=this.cache,i=t.length,s=rc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yg,s[o])}function qS(r,t,e){let n=this.cache,i=t.length,s=rc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xg,s[o])}function YS(r){switch(r){case 5126:return CS;case 35664:return RS;case 35665:return PS;case 35666:return IS;case 35674:return LS;case 35675:return DS;case 35676:return US;case 5124:case 35670:return NS;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return BS;case 5125:return zS;case 36294:return kS;case 36295:return VS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}var Qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=AS(e.type)}},ju=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YS(e.type)}},tf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ru=/(\w+)(\])?(\[|\.)?/g;function Nm(r,t){r.seq.push(t),r.map[t.id]=t}function ZS(r,t,e){let n=r.name,i=n.length;for(ru.lastIndex=0;;){let s=ru.exec(n),o=ru.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nm(e,c===void 0?new Qu(a,r,t):new ju(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new tf(a),Nm(e,f)),e=f}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ZS(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Om(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var $S=37297,JS=0;function KS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Fm=new Qt;function QS(r){he._getMatrix(Fm,he.workingColorSpace,r);let t=`mat3( ${Fm.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case ic:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Bm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+KS(r.getShaderSource(t),o)}else return i}function jS(r,t){let e=QS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tb(r,t){let e;switch(t){case ux:e="Linear";break;case fx:e="Reinhard";break;case dx:e="Cineon";break;case bf:e="ACESFilmic";break;case mx:e="AgX";break;case gx:e="Neutral";break;case px:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new z;function eb(){he.getLuminanceCoefficients(Al);let r=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function ib(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ia(r){return r!==""}function zm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function km(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(r){return r.replace(sb,ab)}var ob=new Map;function ab(r,t){let e=jt[t];if(e===void 0){let n=ob.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ef(e)}var lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(r){return r.replace(lb,cb)}function cb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hm(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function hb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===W_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function ub(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case js:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function db(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jm:t="ENVMAP_BLENDING_MULTIPLY";break;case cx:t="ENVMAP_BLENDING_MIX";break;case hx:t="ENVMAP_BLENDING_ADD";break}return t}function pb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mb(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hb(e),c=ub(e),h=fb(e),f=db(e),u=pb(e),d=nb(e),_=ib(s),m=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ia).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(g=[Hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[Hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yr?"#define TONE_MAPPING":"",e.toneMapping!==yr?jt.tonemapping_pars_fragment:"",e.toneMapping!==yr?tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,jS("linearToOutputTexel",e.outputColorSpace),eb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),o=ef(o),o=zm(o,e),o=km(o,e),a=ef(a),a=zm(a,e),a=km(a,e),o=Vm(o),a=Vm(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,x=y+p+a,C=Om(i,i.VERTEX_SHADER,v),E=Om(i,i.FRAGMENT_SHADER,x);i.attachShader(m,C),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(C).trim(),k=i.getShaderInfoLog(E).trim(),Y=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,C,E);else{let Z=Bm(i,C,"vertex"),H=Bm(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Z+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(C),i.deleteShader(E),R=new Js(i,m),S=rb(i,m)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,$S)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=JS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=E,this}var gb=0,nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rf(t),e.set(t,n)),n}},rf=class{constructor(t){this.id=gb++,this.code=t,this.usedTimes=0}};function _b(r,t,e,n,i,s,o){let a=new Hl,l=new nf,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,D,O){let k=D.fog,Y=O.geometry,W=S.isMeshStandardMaterial?D.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),H=Z&&Z.mapping===nc?Z.image.height:null,rt=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=I!==void 0?I.length:0,it=0;Y.morphAttributes.position!==void 0&&(it=1),Y.morphAttributes.normal!==void 0&&(it=2),Y.morphAttributes.color!==void 0&&(it=3);let st,V,K,ot;if(rt){let St=bi[rt];st=St.vertexShader,V=St.fragmentShader}else st=S.vertexShader,V=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ot=l.getFragmentShaderID(S);let et=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),pt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Vt=!!S.map,Nt=!!S.matcap,Lt=!!Z,U=!!S.aoMap,ce=!!S.lightMap,Ft=!!S.bumpMap,B=!!S.normalMap,Tt=!!S.displacementMap,se=!!S.emissiveMap,Pt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,X=S.clearcoat>0,nt=S.dispersion>0,tt=S.iridescence>0,Q=S.sheen>0,gt=S.transmission>0,ft=b&&!!S.anisotropyMap,vt=X&&!!S.clearcoatMap,Yt=X&&!!S.clearcoatNormalMap,at=X&&!!S.clearcoatRoughnessMap,ut=tt&&!!S.iridescenceMap,Bt=tt&&!!S.iridescenceThicknessMap,Ot=Q&&!!S.sheenColorMap,bt=Q&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,kt=!!S.specularColorMap,ae=!!S.specularIntensityMap,L=gt&&!!S.transmissionMap,mt=gt&&!!S.thicknessMap,$=!!S.gradientMap,j=!!S.alphaMap,dt=S.alphaTest>0,_t=!!S.alphaHash,Ht=!!S.extensions,ue=yr;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ue=r.toneMapping);let Ne={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:V,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:pt,instancingColor:pt&&O.instanceColor!==null,instancingMorph:pt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ho,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:Nt,envMap:Lt,envMapMode:Lt&&Z.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:ce,bumpMap:Ft,normalMap:B,displacementMap:u&&Tt,emissiveMap:se,normalMapObjectSpace:B&&S.normalMapType===yx,normalMapTangentSpace:B&&S.normalMapType===ug,metalnessMap:Pt,roughnessMap:A,anisotropy:b,anisotropyMap:ft,clearcoat:X,clearcoatMap:vt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:at,dispersion:nt,iridescence:tt,iridescenceMap:ut,iridescenceThicknessMap:Bt,sheen:Q,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:Jt,specularColorMap:kt,specularIntensityMap:ae,transmission:gt,transmissionMap:L,thicknessMap:mt,gradientMap:$,opaque:S.transparent===!1&&S.blending===Ys&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:dt,alphaHash:_t,combine:S.combine,mapUv:Vt&&m(S.map.channel),aoMapUv:U&&m(S.aoMap.channel),lightMapUv:ce&&m(S.lightMap.channel),bumpMapUv:Ft&&m(S.bumpMap.channel),normalMapUv:B&&m(S.normalMap.channel),displacementMapUv:Tt&&m(S.displacementMap.channel),emissiveMapUv:se&&m(S.emissiveMap.channel),metalnessMapUv:Pt&&m(S.metalnessMap.channel),roughnessMapUv:A&&m(S.roughnessMap.channel),anisotropyMapUv:ft&&m(S.anisotropyMap.channel),clearcoatMapUv:vt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&m(S.sheenRoughnessMap.channel),specularMapUv:Jt&&m(S.specularMap.channel),specularColorMapUv:kt&&m(S.specularColorMap.channel),specularIntensityMapUv:ae&&m(S.specularIntensityMap.channel),transmissionMapUv:L&&m(S.transmissionMap.channel),thicknessMapUv:mt&&m(S.thicknessMap.channel),alphaMapUv:j&&m(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(B||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Vt||j),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ht,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:it,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fi,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&S.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let M=_[S.type],P;if(M){let D=bi[M];P=av.clone(D.uniforms)}else P=S.uniforms;return P}function C(S,M){let P;for(let D=0,O=h.length;D<O;D++){let k=h[D];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new mb(r,M,S,s),h.push(P)),P}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function xb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function vb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,_,m,g){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=m,p.group=g),t++,p}function a(f,u,d,_,m,g){let p=o(f,u,d,_,m,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,_,m,g){let p=o(f,u,d,_,m,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||vb),n.length>1&&n.sort(u||Gm),i.length>1&&i.sort(u||Gm)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function yb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Wm,r.set(n,[o])):i>=s.length?(o=new Wm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new $t};break;case"SpotLight":e={position:new z,direction:new z,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Sb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var bb=0;function wb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Tb(r){let t=new Mb,e=Sb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new Ue,o=new Ue;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,m=0,g=0,p=0,y=0,v=0,x=0,C=0,E=0,T=0;c.sort(wb);for(let S=0,M=c.length;S<M;S++){let P=c[S],D=P.color,O=P.intensity,k=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*O,f+=D.g*O,u+=D.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);T++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=W,d++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(O),W.distance=k,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[m]=W;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[m]=Z.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[m]=H,n.spotShadowMap[m]=Y,x++}m++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(D).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,v++}n.point[_]=W,_++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==m||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,n.version=bb++)}function l(c,h){let f=0,u=0,d=0,_=0,m=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(v.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let x=n.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Xm(r){let t=new Tb(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Eb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Xm(r),t.set(i,[a])):s>=o.length?(a=new Xm(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sf=class extends wr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},of=class extends wr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`;function Rb(r,t,e){let n=new ca,i=new de,s=new de,o=new ye,a=new sf({depthPacking:vx}),l=new of,c={},h=e.maxTextureSize,f={[Mr]:mn,[mn]:Mr,[fi]:fi},u=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ab,fragmentShader:Cb}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new qn;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new le(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qm;let p=this.type;this.render=function(E,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==Gi&&this.type===Gi,k=p===Gi&&this.type!==Gi;for(let Y=0,W=E.length;Y<W;Y++){let Z=E[Y],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let rt=H.getFrameExtents();if(i.multiply(rt),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,H.mapSize.y=s.y)),H.map===null||O===!0||k===!0){let J=this.type!==Gi?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new $i(i.x,i.y,J),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();let I=H.getViewportCount();for(let J=0;J<I;J++){let it=H.getViewport(J);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),D.viewport(o),H.updateMatrices(Z,J),n=H.getFrustum(),x(T,R,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&y(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,M,P)};function y(E,T){let R=t.update(m);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $i(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,d,m,null)}function v(E,T,R,S){let M=null,P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=M.uuid,O=T.uuid,k=c[D];k===void 0&&(k={},c[D]=k);let Y=k[O];Y===void 0&&(Y=M.clone(),k[O]=Y,T.addEventListener("dispose",C)),M=Y}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Gi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=r.properties.get(M);D.light=R}return M}function x(E,T,R,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let O=t.update(E),k=E.material;if(Array.isArray(k)){let Y=O.groups;for(let W=0,Z=Y.length;W<Z;W++){let H=Y[W],rt=k[H.materialIndex];if(rt&&rt.visible){let I=v(E,rt,S,M);E.onBeforeShadow(r,E,T,R,O,I,H),r.renderBufferDirect(R,null,O,I,E,H),E.onAfterShadow(r,E,T,R,O,I,H)}}}else if(k.visible){let Y=v(E,k,S,M);E.onBeforeShadow(r,E,T,R,O,Y,null),r.renderBufferDirect(R,null,O,Y,E,null),E.onAfterShadow(r,E,T,R,O,Y,null)}}let D=E.children;for(let O=0,k=D.length;O<k;O++)x(D[O],T,R,S,M)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let S=c[R],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Pb={[cu]:hu,[uu]:pu,[fu]:mu,[Ks]:du,[hu]:cu,[pu]:uu,[mu]:fu,[du]:Ks};function Ib(r,t){function e(){let L=!1,mt=new ye,$=null,j=new ye(0,0,0,0);return{setMask:function(dt){$!==dt&&!L&&(r.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){L=dt},setClear:function(dt,_t,Ht,ue,Ne){Ne===!0&&(dt*=ue,_t*=ue,Ht*=ue),mt.set(dt,_t,Ht,ue),j.equals(mt)===!1&&(r.clearColor(dt,_t,Ht,ue),j.copy(mt))},reset:function(){L=!1,$=null,j.set(-1,0,0,0)}}}function n(){let L=!1,mt=!1,$=null,j=null,dt=null;return{setReversed:function(_t){if(mt!==_t){let Ht=t.get("EXT_clip_control");mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let ue=dt;dt=null,this.setClear(ue)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?et(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(_t){$!==_t&&!L&&(r.depthMask(_t),$=_t)},setFunc:function(_t){if(mt&&(_t=Pb[_t]),j!==_t){switch(_t){case cu:r.depthFunc(r.NEVER);break;case hu:r.depthFunc(r.ALWAYS);break;case uu:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case fu:r.depthFunc(r.EQUAL);break;case du:r.depthFunc(r.GEQUAL);break;case pu:r.depthFunc(r.GREATER);break;case mu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=_t}},setLocked:function(_t){L=_t},setClear:function(_t){dt!==_t&&(mt&&(_t=1-_t),r.clearDepth(_t),dt=_t)},reset:function(){L=!1,$=null,j=null,dt=null,mt=!1}}}function i(){let L=!1,mt=null,$=null,j=null,dt=null,_t=null,Ht=null,ue=null,Ne=null;return{setTest:function(St){L||(St?et(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(St){mt!==St&&!L&&(r.stencilMask(St),mt=St)},setFunc:function(St,Ct,Kt){($!==St||j!==Ct||dt!==Kt)&&(r.stencilFunc(St,Ct,Kt),$=St,j=Ct,dt=Kt)},setOp:function(St,Ct,Kt){(_t!==St||Ht!==Ct||ue!==Kt)&&(r.stencilOp(St,Ct,Kt),_t=St,Ht=Ct,ue=Kt)},setLocked:function(St){L=St},setClear:function(St){Ne!==St&&(r.clearStencil(St),Ne=St)},reset:function(){L=!1,mt=null,$=null,j=null,dt=null,_t=null,Ht=null,ue=null,Ne=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],_=null,m=!1,g=null,p=null,y=null,v=null,x=null,C=null,E=null,T=new $t(0,0,0),R=0,S=!1,M=null,P=null,D=null,O=null,k=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Z=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let rt=null,I={},J=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),st=new ye().fromArray(J),V=new ye().fromArray(it);function K(L,mt,$,j){let dt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(L,_t),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<$;Ht++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(mt+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return _t}let ot={};ot[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ot[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ot[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(r.DEPTH_TEST),o.setFunc(Ks),Ft(!1),B(qp),et(r.CULL_FACE),U(vr);function et(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function ht(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function pt(L,mt){return f[L]!==mt?(r.bindFramebuffer(L,mt),f[L]=mt,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=mt),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(L,mt){let $=d,j=!1;if(L){$=u.get(mt),$===void 0&&($=[],u.set(mt,$));let dt=L.textures;if($.length!==dt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Ht=dt.length;_t<Ht;_t++)$[_t]=r.COLOR_ATTACHMENT0+_t;$.length=dt.length,j=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,j=!0);j&&r.drawBuffers($)}function Vt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Nt={[jr]:r.FUNC_ADD,[q_]:r.FUNC_SUBTRACT,[Y_]:r.FUNC_REVERSE_SUBTRACT};Nt[Z_]=r.MIN,Nt[$_]=r.MAX;let Lt={[J_]:r.ZERO,[K_]:r.ONE,[Q_]:r.SRC_COLOR,[au]:r.SRC_ALPHA,[rx]:r.SRC_ALPHA_SATURATE,[nx]:r.DST_COLOR,[tx]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[lu]:r.ONE_MINUS_SRC_ALPHA,[ix]:r.ONE_MINUS_DST_COLOR,[ex]:r.ONE_MINUS_DST_ALPHA,[sx]:r.CONSTANT_COLOR,[ox]:r.ONE_MINUS_CONSTANT_COLOR,[ax]:r.CONSTANT_ALPHA,[lx]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,mt,$,j,dt,_t,Ht,ue,Ne,St){if(L===vr){m===!0&&(ht(r.BLEND),m=!1);return}if(m===!1&&(et(r.BLEND),m=!0),L!==X_){if(L!==g||St!==S){if((p!==jr||x!==jr)&&(r.blendEquation(r.FUNC_ADD),p=jr,x=jr),St)switch(L){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yp:r.blendFunc(r.ONE,r.ONE);break;case Zp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $p:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $p:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,C=null,E=null,T.set(0,0,0),R=0,g=L,S=St}return}dt=dt||mt,_t=_t||$,Ht=Ht||j,(mt!==p||dt!==x)&&(r.blendEquationSeparate(Nt[mt],Nt[dt]),p=mt,x=dt),($!==y||j!==v||_t!==C||Ht!==E)&&(r.blendFuncSeparate(Lt[$],Lt[j],Lt[_t],Lt[Ht]),y=$,v=j,C=_t,E=Ht),(ue.equals(T)===!1||Ne!==R)&&(r.blendColor(ue.r,ue.g,ue.b,Ne),T.copy(ue),R=Ne),g=L,S=!1}function ce(L,mt){L.side===fi?ht(r.CULL_FACE):et(r.CULL_FACE);let $=L.side===mn;mt&&($=!$),Ft($),L.blending===Ys&&L.transparent===!1?U(vr):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function B(L){L!==H_?(et(r.CULL_FACE),L!==P&&(L===qp?r.cullFace(r.BACK):L===G_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),P=L}function Tt(L){L!==D&&(W&&r.lineWidth(L),D=L)}function se(L,mt,$){L?(et(r.POLYGON_OFFSET_FILL),(O!==mt||k!==$)&&(r.polygonOffset(mt,$),O=mt,k=$)):ht(r.POLYGON_OFFSET_FILL)}function Pt(L){L?et(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+Y-1),rt!==L&&(r.activeTexture(L),rt=L)}function b(L,mt,$){$===void 0&&(rt===null?$=r.TEXTURE0+Y-1:$=rt);let j=I[$];j===void 0&&(j={type:void 0,texture:void 0},I[$]=j),(j.type!==L||j.texture!==mt)&&(rt!==$&&(r.activeTexture($),rt=$),r.bindTexture(L,mt||ot[L]),j.type=L,j.texture=mt)}function X(){let L=I[rt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){st.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function bt(L){V.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),V.copy(L))}function Jt(L,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let j=$.get(L);j===void 0&&(j=r.getUniformBlockIndex(mt,L.name),$.set(L,j))}function kt(L,mt){let j=c.get(mt).get(L);l.get(mt)!==j&&(r.uniformBlockBinding(mt,j,L.__bindingPointIndex),l.set(mt,j))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,I={},f={},u=new WeakMap,d=[],_=null,m=!1,g=null,p=null,y=null,v=null,x=null,C=null,E=null,T=new $t(0,0,0),R=0,S=!1,M=null,P=null,D=null,O=null,k=null,st.set(0,0,r.canvas.width,r.canvas.height),V.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:ht,bindFramebuffer:pt,drawBuffers:It,useProgram:Vt,setBlending:U,setMaterial:ce,setFlipSided:Ft,setCullFace:B,setLineWidth:Tt,setPolygonOffset:se,setScissorTest:Pt,activeTexture:A,bindTexture:b,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:tt,texImage2D:ut,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:kt,texStorage2D:Yt,texStorage3D:at,texSubImage2D:Q,texSubImage3D:gt,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ot,viewport:bt,reset:ae}}function qm(r,t,e,n){let i=Lb(n);switch(e){case rg:return r*t;case og:return r*t;case ag:return r*t*2;case lg:return r*t/i.components*i.byteLength;case Af:return r*t/i.components*i.byteLength;case cg:return r*t*2/i.components*i.byteLength;case Cf:return r*t*2/i.components*i.byteLength;case sg:return r*t*3/i.components*i.byteLength;case di:return r*t*4/i.components*i.byteLength;case Rf:return r*t*4/i.components*i.byteLength;case Il:case Ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mu:case bu:return Math.max(r,16)*Math.max(t,8)/4;case yu:case Su:return Math.max(r,8)*Math.max(t,8)/2;case wu:case Tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Du:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ku:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Vu:case Hu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hg:case Gu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wu:case Xu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lb(r){switch(r){case Zi:case eg:return{byteLength:1,components:1};case aa:case ng:case pa:return{byteLength:2,components:1};case Tf:case Ef:return{byteLength:2,components:4};case rs:case wf:case Xi:return{byteLength:4,components:1};case ig:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Db(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return d?new OffscreenCanvas(A,b):Bl("canvas")}function m(A,b,X){let nt=1,tt=Pt(A);if((tt.width>X||tt.height>X)&&(nt=X/Math.max(tt.width,tt.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Q=Math.floor(nt*tt.width),gt=Math.floor(nt*tt.height);f===void 0&&(f=_(Q,gt));let ft=b?_(Q,gt):f;return ft.width=Q,ft.height=gt,ft.getContext("2d").drawImage(A,0,0,Q,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Q+"x"+gt+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(A,b,X,nt,tt=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=b;if(b===r.RED&&(X===r.FLOAT&&(Q=r.R32F),X===r.HALF_FLOAT&&(Q=r.R16F),X===r.UNSIGNED_BYTE&&(Q=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.R8UI),X===r.UNSIGNED_SHORT&&(Q=r.R16UI),X===r.UNSIGNED_INT&&(Q=r.R32UI),X===r.BYTE&&(Q=r.R8I),X===r.SHORT&&(Q=r.R16I),X===r.INT&&(Q=r.R32I)),b===r.RG&&(X===r.FLOAT&&(Q=r.RG32F),X===r.HALF_FLOAT&&(Q=r.RG16F),X===r.UNSIGNED_BYTE&&(Q=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RG8UI),X===r.UNSIGNED_SHORT&&(Q=r.RG16UI),X===r.UNSIGNED_INT&&(Q=r.RG32UI),X===r.BYTE&&(Q=r.RG8I),X===r.SHORT&&(Q=r.RG16I),X===r.INT&&(Q=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),X===r.UNSIGNED_INT&&(Q=r.RGB32UI),X===r.BYTE&&(Q=r.RGB8I),X===r.SHORT&&(Q=r.RGB16I),X===r.INT&&(Q=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),X===r.UNSIGNED_INT&&(Q=r.RGBA32UI),X===r.BYTE&&(Q=r.RGBA8I),X===r.SHORT&&(Q=r.RGBA16I),X===r.INT&&(Q=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),b===r.RGBA){let gt=tt?ic:he.getTransfer(nt);X===r.FLOAT&&(Q=r.RGBA32F),X===r.HALF_FLOAT&&(Q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Q=gt===ve?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(A,b){let X;return A?b===null||b===rs||b===to?X=r.DEPTH24_STENCIL8:b===Xi?X=r.DEPTH32F_STENCIL8:b===aa&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===rs||b===to?X=r.DEPTH_COMPONENT24:b===Xi?X=r.DEPTH_COMPONENT32F:b===aa&&(X=r.DEPTH_COMPONENT16),X}function C(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==pi&&A.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),M(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let X=A.source,nt=u.get(X);if(nt){let tt=nt[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(A),Object.keys(nt).length===0&&u.delete(X)}n.remove(A)}function S(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let X=A.source,nt=u.get(X);delete nt[b.__cacheKey],o.memory.textures--}function M(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let tt=0;tt<b.__webglFramebuffer[nt].length;tt++)r.deleteFramebuffer(b.__webglFramebuffer[nt][tt]);else r.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[nt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let X=A.textures;for(let nt=0,tt=X.length;nt<tt;nt++){let Q=n.get(X[nt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[nt])}n.remove(A)}let P=0;function D(){P=0}function O(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function k(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Y(A,b){let X=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(X,A,b);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function W(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){V(X,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function Z(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){V(X,A,b);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function H(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){K(X,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}let rt={[xu]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[vu]:r.MIRRORED_REPEAT},I={[pi]:r.NEAREST,[_x]:r.NEAREST_MIPMAP_NEAREST,[al]:r.NEAREST_MIPMAP_LINEAR,[wi]:r.LINEAR,[Ih]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},J={[Mx]:r.NEVER,[Ax]:r.ALWAYS,[Sx]:r.LESS,[fg]:r.LEQUAL,[bx]:r.EQUAL,[Ex]:r.GEQUAL,[wx]:r.GREATER,[Tx]:r.NOTEQUAL};function it(A,b){if(b.type===Xi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===Ih||b.magFilter===al||b.magFilter===is||b.minFilter===wi||b.minFilter===Ih||b.minFilter===al||b.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,rt[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,rt[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,rt[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,I[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pi||b.minFilter!==al&&b.minFilter!==is||b.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function st(A,b){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let nt=b.source,tt=u.get(nt);tt===void 0&&(tt={},u.set(nt,tt));let Q=k(b);if(Q!==A.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[Q].usedTimes++;let gt=tt[A.__cacheKey];gt!==void 0&&(tt[A.__cacheKey].usedTimes--,gt.usedTimes===0&&S(b)),A.__cacheKey=Q,A.__webglTexture=tt[Q].texture}return X}function V(A,b,X){let nt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=r.TEXTURE_3D);let tt=st(A,b),Q=b.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+X);let gt=n.get(Q);if(Q.version!==gt.__version||tt===!0){e.activeTexture(r.TEXTURE0+X);let ft=he.getPrimaries(he.workingColorSpace),vt=b.colorSpace===xr?null:he.getPrimaries(b.colorSpace),Yt=b.colorSpace===xr||ft===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let at=m(b.image,!1,i.maxTextureSize);at=se(b,at);let ut=s.convert(b.format,b.colorSpace),Bt=s.convert(b.type),Ot=v(b.internalFormat,ut,Bt,b.colorSpace,b.isVideoTexture);it(nt,b);let bt,Jt=b.mipmaps,kt=b.isVideoTexture!==!0,ae=gt.__version===void 0||tt===!0,L=Q.dataReady,mt=C(b,at);if(b.isDepthTexture)Ot=x(b.format===eo,b.type),ae&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Ot,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,Ot,at.width,at.height,0,ut,Bt,null));else if(b.isDataTexture)if(Jt.length>0){kt&&ae&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,Jt[0].width,Jt[0].height);for(let $=0,j=Jt.length;$<j;$++)bt=Jt[$],kt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ut,Bt,bt.data):e.texImage2D(r.TEXTURE_2D,$,Ot,bt.width,bt.height,0,ut,Bt,bt.data);b.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,at.width,at.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at.width,at.height,ut,Bt,at.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,at.width,at.height,0,ut,Bt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ot,Jt[0].width,Jt[0].height,at.depth);for(let $=0,j=Jt.length;$<j;$++)if(bt=Jt[$],b.format!==di)if(ut!==null)if(kt){if(L)if(b.layerUpdates.size>0){let dt=qm(bt.width,bt.height,b.format,b.type);for(let _t of b.layerUpdates){let Ht=bt.data.subarray(_t*dt/bt.data.BYTES_PER_ELEMENT,(_t+1)*dt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,_t,bt.width,bt.height,1,ut,Ht)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,at.depth,ut,bt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ot,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,at.depth,ut,Bt,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ot,bt.width,bt.height,at.depth,0,ut,Bt,bt.data)}else{kt&&ae&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,Jt[0].width,Jt[0].height);for(let $=0,j=Jt.length;$<j;$++)bt=Jt[$],b.format!==di?ut!==null?kt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ut,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ut,Bt,bt.data):e.texImage2D(r.TEXTURE_2D,$,Ot,bt.width,bt.height,0,ut,Bt,bt.data)}else if(b.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ot,at.width,at.height,at.depth),L)if(b.layerUpdates.size>0){let $=qm(at.width,at.height,b.format,b.type);for(let j of b.layerUpdates){let dt=at.data.subarray(j*$/at.data.BYTES_PER_ELEMENT,(j+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,at.width,at.height,1,ut,Bt,dt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ut,Bt,at.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,ut,Bt,at.data);else if(b.isData3DTexture)kt?(ae&&e.texStorage3D(r.TEXTURE_3D,mt,Ot,at.width,at.height,at.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ut,Bt,at.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,ut,Bt,at.data);else if(b.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(r.TEXTURE_2D,mt,Ot,at.width,at.height);else{let $=at.width,j=at.height;for(let dt=0;dt<mt;dt++)e.texImage2D(r.TEXTURE_2D,dt,Ot,$,j,0,ut,Bt,null),$>>=1,j>>=1}}else if(Jt.length>0){if(kt&&ae){let $=Pt(Jt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Ot,$.width,$.height)}for(let $=0,j=Jt.length;$<j;$++)bt=Jt[$],kt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ut,Bt,bt):e.texImage2D(r.TEXTURE_2D,$,Ot,ut,Bt,bt);b.generateMipmaps=!1}else if(kt){if(ae){let $=Pt(at);e.texStorage2D(r.TEXTURE_2D,mt,Ot,$.width,$.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Bt,at)}else e.texImage2D(r.TEXTURE_2D,0,Ot,ut,Bt,at);g(b)&&p(nt),gt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function K(A,b,X){if(b.image.length!==6)return;let nt=st(A,b),tt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+X);let Q=n.get(tt);if(tt.version!==Q.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);let gt=he.getPrimaries(he.workingColorSpace),ft=b.colorSpace===xr?null:he.getPrimaries(b.colorSpace),vt=b.colorSpace===xr||gt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Yt&&!at?ut[j]=m(b.image[j],!0,i.maxCubemapSize):ut[j]=at?b.image[j].image:b.image[j],ut[j]=se(b,ut[j]);let Bt=ut[0],Ot=s.convert(b.format,b.colorSpace),bt=s.convert(b.type),Jt=v(b.internalFormat,Ot,bt,b.colorSpace),kt=b.isVideoTexture!==!0,ae=Q.__version===void 0||nt===!0,L=tt.dataReady,mt=C(b,Bt);it(r.TEXTURE_CUBE_MAP,b);let $;if(Yt){kt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Jt,Bt.width,Bt.height);for(let j=0;j<6;j++){$=ut[j].mipmaps;for(let dt=0;dt<$.length;dt++){let _t=$[dt];b.format!==di?Ot!==null?kt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,_t.width,_t.height,Ot,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Jt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,_t.width,_t.height,Ot,bt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Jt,_t.width,_t.height,0,Ot,bt,_t.data)}}}else{if($=b.mipmaps,kt&&ae){$.length>0&&mt++;let j=Pt(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Jt,j.width,j.height)}for(let j=0;j<6;j++)if(at){kt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,Ot,bt,ut[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,ut[j].width,ut[j].height,0,Ot,bt,ut[j].data);for(let dt=0;dt<$.length;dt++){let Ht=$[dt].image[j].image;kt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Ht.width,Ht.height,Ot,bt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Jt,Ht.width,Ht.height,0,Ot,bt,Ht.data)}}else{kt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ot,bt,ut[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,Ot,bt,ut[j]);for(let dt=0;dt<$.length;dt++){let _t=$[dt];kt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Ot,bt,_t.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Jt,Ot,bt,_t.image[j])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),Q.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,X,nt,tt,Q){let gt=s.convert(X.format,X.colorSpace),ft=s.convert(X.type),vt=v(X.internalFormat,gt,ft,X.colorSpace),Yt=n.get(b),at=n.get(X);if(at.__renderTarget=b,!Yt.__hasExternalTextures){let ut=Math.max(1,b.width>>Q),Bt=Math.max(1,b.height>>Q);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,Q,vt,ut,Bt,b.depth,0,gt,ft,null):e.texImage2D(tt,Q,vt,ut,Bt,0,gt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,at.__webglTexture,0,Ft(b)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,at.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function et(A,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let nt=b.depthTexture,tt=nt&&nt.isDepthTexture?nt.type:null,Q=x(b.stencilBuffer,tt),gt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=Ft(b);B(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Q,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Q,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Q,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,A)}else{let nt=b.textures;for(let tt=0;tt<nt.length;tt++){let Q=nt[tt],gt=s.convert(Q.format,Q.colorSpace),ft=s.convert(Q.type),vt=v(Q.internalFormat,gt,ft,Q.colorSpace),Yt=Ft(b);X&&B(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,vt,b.width,b.height):B(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,vt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,vt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let tt=nt.__webglTexture,Q=Ft(b);if(b.depthTexture.format===Zs)B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(b.depthTexture.format===eo)B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function pt(A){let b=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",tt)};nt.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=nt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ht(b.__webglFramebuffer,A)}else if(X){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=r.createRenderbuffer(),et(b.__webglDepthbuffer[nt],A,!1);else{let tt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),et(b.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(A,b,X){let nt=n.get(A);b!==void 0&&ot(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&pt(A)}function Vt(A){let b=A.texture,X=n.get(A),nt=n.get(b);A.addEventListener("dispose",T);let tt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=b.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let vt=0;vt<b.mipmaps.length;vt++)X.__webglFramebuffer[ft][vt]=r.createFramebuffer()}else X.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)X.__webglFramebuffer[ft]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(gt)for(let ft=0,vt=tt.length;ft<vt;ft++){let Yt=n.get(tt[ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&B(A)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){let vt=tt[ft];X.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);let Yt=s.convert(vt.format,vt.colorSpace),at=s.convert(vt.type),ut=v(vt.internalFormat,Yt,at,vt.colorSpace,A.isXRRenderTarget===!0),Bt=Ft(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,ut,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),et(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),it(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)ot(X.__webglFramebuffer[ft][vt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else ot(X.__webglFramebuffer[ft],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ft=0,vt=tt.length;ft<vt;ft++){let Yt=tt[ft],at=n.get(Yt);e.bindTexture(r.TEXTURE_2D,at.__webglTexture),it(r.TEXTURE_2D,Yt),ot(X.__webglFramebuffer,A,Yt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),g(Yt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,nt.__webglTexture),it(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)ot(X.__webglFramebuffer[vt],A,b,r.COLOR_ATTACHMENT0,ft,vt);else ot(X.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ft,0);g(b)&&p(ft),e.unbindTexture()}A.depthBuffer&&pt(A)}function Nt(A){let b=A.textures;for(let X=0,nt=b.length;X<nt;X++){let tt=b[X];if(g(tt)){let Q=y(A),gt=n.get(tt).__webglTexture;e.bindTexture(Q,gt),p(Q),e.unbindTexture()}}}let Lt=[],U=[];function ce(A){if(A.samples>0){if(B(A)===!1){let b=A.textures,X=A.width,nt=A.height,tt=r.COLOR_BUFFER_BIT,Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(A),ft=b.length>1;if(ft)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Yt=n.get(b[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,X,nt,0,0,X,nt,tt,r.NEAREST),l===!0&&(Lt.length=0,U.length=0,Lt.push(r.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Lt.push(Q),U.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Yt=n.get(b[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ft(A){return Math.min(i.maxSamples,A.samples)}function B(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function se(A,b){let X=A.colorSpace,nt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==ho&&X!==xr&&(he.getTransfer(X)===ve?(nt!==di||tt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Pt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=B}function Ub(r,t){function e(n,i=xr){let s,o=he.getTransfer(i);if(n===Zi)return r.UNSIGNED_BYTE;if(n===Tf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ef)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ig)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===eg)return r.BYTE;if(n===ng)return r.SHORT;if(n===aa)return r.UNSIGNED_SHORT;if(n===wf)return r.INT;if(n===rs)return r.UNSIGNED_INT;if(n===Xi)return r.FLOAT;if(n===pa)return r.HALF_FLOAT;if(n===rg)return r.ALPHA;if(n===sg)return r.RGB;if(n===di)return r.RGBA;if(n===og)return r.LUMINANCE;if(n===ag)return r.LUMINANCE_ALPHA;if(n===Zs)return r.DEPTH_COMPONENT;if(n===eo)return r.DEPTH_STENCIL;if(n===lg)return r.RED;if(n===Af)return r.RED_INTEGER;if(n===cg)return r.RG;if(n===Cf)return r.RG_INTEGER;if(n===Rf)return r.RGBA_INTEGER;if(n===Il||n===Ll||n===Dl||n===Ul)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yu||n===Mu||n===Su||n===bu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wu||n===Tu||n===Eu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wu||n===Tu)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Au||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Au)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ru)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ou)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ku)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Vu||n===Hu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Nl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hg||n===Gu||n===Wu||n===Xu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var af=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ni=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nb={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let g=e.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
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

}`,lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ri,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ei({vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cf=class extends Sr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null,m=new lf,g=e.getContextAttributes(),p=null,y=null,v=[],x=[],C=new de,E=null,T=new pn;T.viewport=new ye;let R=new pn;R.viewport=new ye;let S=[T,R],M=new af,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=v[V];return K===void 0&&(K=new oa,v[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=v[V];return K===void 0&&(K=new oa,v[V]=K),K.getGripSpace()},this.getHand=function(V){let K=v[V];return K===void 0&&(K=new oa,v[V]=K),K.getHandSpace()};function O(V){let K=x.indexOf(V.inputSource);if(K===-1)return;let ot=v[K];ot!==void 0&&(ot.update(V.inputSource,V.frame,c||o),ot.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let V=0;V<v.length;V++){let K=x[V];K!==null&&(x[V]=null,v[V].disconnect(K))}P=null,D=null,m.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,y=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new $i(d.framebufferWidth,d.framebufferHeight,{format:di,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ot=null,et=null;g.depth&&(et=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?eo:Zs,ot=g.stencil?to:rs);let ht={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new $i(u.textureWidth,u.textureHeight,{format:di,type:Zi,depthTexture:new Zl(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(V){for(let K=0;K<V.removed.length;K++){let ot=V.removed[K],et=x.indexOf(ot);et>=0&&(x[et]=null,v[et].disconnect(ot))}for(let K=0;K<V.added.length;K++){let ot=V.added[K],et=x.indexOf(ot);if(et===-1){for(let pt=0;pt<v.length;pt++)if(pt>=x.length){x.push(ot),et=pt;break}else if(x[pt]===null){x[pt]=ot,et=pt;break}if(et===-1)break}let ht=v[et];ht&&ht.connect(ot)}}let W=new z,Z=new z;function H(V,K,ot){W.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ot.matrixWorld);let et=W.distanceTo(Z),ht=K.projectionMatrix.elements,pt=ot.projectionMatrix.elements,It=ht[14]/(ht[10]-1),Vt=ht[14]/(ht[10]+1),Nt=(ht[9]+1)/ht[5],Lt=(ht[9]-1)/ht[5],U=(ht[8]-1)/ht[0],ce=(pt[8]+1)/pt[0],Ft=It*U,B=It*ce,Tt=et/(-U+ce),se=Tt*-U;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(se),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ht[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Pt=It+Tt,A=Vt+Tt,b=Ft-se,X=B+(et-se),nt=Nt*Vt/A*Pt,tt=Lt*Vt/A*Pt;V.projectionMatrix.makePerspective(b,X,nt,tt,Pt,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function rt(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let K=V.near,ot=V.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),M.near=R.near=T.near=K,M.far=R.far=T.far=ot,(P!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),T.layers.mask=V.layers.mask|2,R.layers.mask=V.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;let et=V.parent,ht=M.cameras;rt(M,et);for(let pt=0;pt<ht.length;pt++)rt(ht[pt],et);ht.length===2?H(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),I(V,M,et)};function I(V,K,ot){ot===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ot.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=la*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let J=null;function it(V,K){if(h=K.getViewerPose(c||o),_=K,h!==null){let ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let et=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,et=!0);for(let pt=0;pt<ot.length;pt++){let It=ot[pt],Vt=null;if(d!==null)Vt=d.getViewport(It);else{let Lt=f.getViewSubImage(u,It);Vt=Lt.viewport,pt===0&&(t.setRenderTargetTextures(y,Lt.colorTexture,u.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(y))}let Nt=S[pt];Nt===void 0&&(Nt=new pn,Nt.layers.enable(pt),Nt.viewport=new ye,S[pt]=Nt),Nt.matrix.fromArray(It.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(It.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),pt===0&&(M.matrix.copy(Nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),et===!0&&M.cameras.push(Nt)}let ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let pt=f.getDepthInformation(ot[0]);pt&&pt.isValid&&pt.texture&&m.init(t,pt,i.renderState)}}for(let ot=0;ot<v.length;ot++){let et=x[ot],ht=v[ot];et!==null&&ht!==void 0&&ht.update(et,K,c||o)}J&&J(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let st=new gg;st.setAnimationLoop(it),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}},Kr=new Ti,Bb=new Ue;function zb(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mg(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,Kr.copy(x),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Kr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(_(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));let C=v.program;n.updateUBOMapping(y,C);let E=t.render.frame;s[y.id]!==E&&(u(y),s[y.id]=E)}function h(y){let v=f();y.__bindingPointIndex=v;let x=r.createBuffer(),C=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=i[y.id],x=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,T=x.length;E<T;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=R.length;S<M;S++){let P=R[S];if(d(P,E,S,C)===!0){let D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],k=0;for(let Y=0;Y<O.length;Y++){let W=O[Y],Z=m(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,D+k,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,x,C){let E=y.value,T=v+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(y){let v=y.uniforms,x=0,C=16;for(let T=0,R=v.length;T<R;T++){let S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,P=S.length;M<P;M++){let D=S[M],O=Array.isArray(D.value)?D.value:[D.value];for(let k=0,Y=O.length;k<Y;k++){let W=O[k],Z=m(W),H=x%C,rt=H%Z.boundary,I=H+rt;x+=rt,I!==0&&C-I<Z.storage&&(x+=C-I),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=Z.storage}}}let E=x%C;return E>0&&(x+=C-E),y.__size=x,y.__cache={},this}function m(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var $l=class{constructor(t={}){let{canvas:e=Wx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),m=new Int32Array(4),g=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=yr,this.toneMappingExposure=1;let x=this,C=!1,E=0,T=0,R=null,S=-1,M=null,P=new ye,D=new ye,O=null,k=new $t(0),Y=0,W=e.width,Z=e.height,H=1,rt=null,I=null,J=new ye(0,0,W,Z),it=new ye(0,0,W,Z),st=!1,V=new ca,K=!1,ot=!1,et=new Ue,ht=new Ue,pt=new z,It=new ye,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Lt(){return R===null?H:1}let U=n;function ce(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){let N="webgl2";if(U=ce(N,w),U===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,B,Tt,se,Pt,A,b,X,nt,tt,Q,gt,ft,vt,Yt,at,ut,Bt,Ot,bt,Jt,kt,ae,L;function mt(){Ft=new nS(U),Ft.init(),kt=new Ub(U,Ft),B=new JM(U,Ft,t,kt),Tt=new Ib(U,Ft),B.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),se=new sS(U),Pt=new xb,A=new Db(U,Ft,Tt,Pt,B,kt,se),b=new QM(x),X=new eS(x),nt=new fv(U),ae=new ZM(U,nt),tt=new iS(U,nt,se,ae),Q=new aS(U,tt,nt,se),Ot=new oS(U,B,A),at=new KM(Pt),gt=new _b(x,b,X,Ft,B,ae,at),ft=new zb(x,Pt),vt=new yb,Yt=new Eb(Ft),Bt=new YM(x,b,X,Tt,Q,d,l),ut=new Rb(x,Q,B),L=new kb(U,se,B,Tt),bt=new $M(U,Ft,se),Jt=new rS(U,Ft,se),se.programs=gt.programs,x.capabilities=B,x.extensions=Ft,x.properties=Pt,x.renderLists=vt,x.shadowMap=ut,x.state=Tt,x.info=se}mt();let $=new cf(x,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Z,!1))},this.getSize=function(w){return w.set(W,Z)},this.setSize=function(w,N,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Z=N,e.width=Math.floor(w*H),e.height=Math.floor(N*H),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(w,N,G){W=w,Z=N,H=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,N,G,q){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,N,G,q),Tt.viewport(P.copy(J).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,N,G,q){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,N,G,q),Tt.scissor(D.copy(it).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){Tt.setScissorTest(st=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let q=0;if(w){let F=!1;if(R!==null){let lt=R.texture.format;F=lt===Rf||lt===Cf||lt===Af}if(F){let lt=R.texture.type,ct=lt===Zi||lt===rs||lt===aa||lt===to||lt===Tf||lt===Ef,xt=Bt.getClearColor(),wt=Bt.getClearAlpha(),Gt=xt.r,qt=xt.g,At=xt.b;ct?(_[0]=Gt,_[1]=qt,_[2]=At,_[3]=wt,U.clearBufferuiv(U.COLOR,0,_)):(m[0]=Gt,m[1]=qt,m[2]=At,m[3]=wt,U.clearBufferiv(U.COLOR,0,m))}else q|=U.COLOR_BUFFER_BIT}N&&(q|=U.DEPTH_BUFFER_BIT),G&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),vt.dispose(),Yt.dispose(),Pt.dispose(),b.dispose(),X.dispose(),Q.dispose(),ae.dispose(),L.dispose(),gt.dispose(),$.dispose(),$.removeEventListener("sessionstart",yt),$.removeEventListener("sessionend",Xt),Rt.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=se.autoReset,N=ut.enabled,G=ut.autoUpdate,q=ut.needsUpdate,F=ut.type;mt(),se.autoReset=w,ut.enabled=N,ut.autoUpdate=G,ut.needsUpdate=q,ut.type=F}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){let N=w.target;N.removeEventListener("dispose",Ht),ue(N)}function ue(w){Ne(w),Pt.remove(w)}function Ne(w){let N=Pt.get(w).programs;N!==void 0&&(N.forEach(function(G){gt.releaseProgram(G)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,q,F,lt){N===null&&(N=Vt);let ct=F.isMesh&&F.matrixWorld.determinant()<0,xt=Nn(w,N,G,q,F);Tt.setMaterial(q,ct);let wt=G.index,Gt=1;if(q.wireframe===!0){if(wt=tt.getWireframeAttribute(G),wt===void 0)return;Gt=2}let qt=G.drawRange,At=G.attributes.position,Zt=qt.start*Gt,fe=(qt.start+qt.count)*Gt;lt!==null&&(Zt=Math.max(Zt,lt.start*Gt),fe=Math.min(fe,(lt.start+lt.count)*Gt)),wt!==null?(Zt=Math.max(Zt,0),fe=Math.min(fe,wt.count)):At!=null&&(Zt=Math.max(Zt,0),fe=Math.min(fe,At.count));let me=fe-Zt;if(me<0||me===1/0)return;ae.setup(F,q,xt,G,wt);let Ie,ge=bt;if(wt!==null&&(Ie=nt.get(wt),ge=Jt,ge.setIndex(Ie)),F.isMesh)q.wireframe===!0?(Tt.setLineWidth(q.wireframeLinewidth*Lt()),ge.setMode(U.LINES)):ge.setMode(U.TRIANGLES);else if(F.isLine){let Ut=q.linewidth;Ut===void 0&&(Ut=1),Tt.setLineWidth(Ut*Lt()),F.isLineSegments?ge.setMode(U.LINES):F.isLineLoop?ge.setMode(U.LINE_LOOP):ge.setMode(U.LINE_STRIP)}else F.isPoints?ge.setMode(U.POINTS):F.isSprite&&ge.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ge.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ge.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ut=F._multiDrawStarts,Ai=F._multiDrawCounts,_e=F._multiDrawCount,oi=wt?nt.get(wt).bytesPerElement:1,cs=Pt.get(q).currentProgram.getUniforms();for(let On=0;On<_e;On++)cs.setValue(U,"_gl_DrawID",On),ge.render(Ut[On]/oi,Ai[On])}else if(F.isInstancedMesh)ge.renderInstances(Zt,me,F.count);else if(G.isInstancedBufferGeometry){let Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ai=Math.min(G.instanceCount,Ut);ge.renderInstances(Zt,me,Ai)}else ge.render(Zt,me)};function St(w,N,G){w.transparent===!0&&w.side===fi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,Me(w,N,G),w.side=Mr,w.needsUpdate=!0,Me(w,N,G),w.side=fi):Me(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),p=Yt.get(G),p.init(N),v.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let q=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let lt=F.material;if(lt)if(Array.isArray(lt))for(let ct=0;ct<lt.length;ct++){let xt=lt[ct];St(xt,G,F),q.add(xt)}else St(lt,G,F),q.add(lt)}),v.pop(),p=null,q},this.compileAsync=function(w,N,G=null){let q=this.compile(w,N,G);return new Promise(F=>{function lt(){if(q.forEach(function(ct){Pt.get(ct).currentProgram.isReady()&&q.delete(ct)}),q.size===0){F(w);return}setTimeout(lt,10)}Ft.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ct=null;function Kt(w){Ct&&Ct(w)}function yt(){Rt.stop()}function Xt(){Rt.start()}let Rt=new gg;Rt.setAnimationLoop(Kt),typeof self!="undefined"&&Rt.setContext(self),this.setAnimationLoop=function(w){Ct=w,$.setAnimationLoop(w),w===null?Rt.stop():Rt.start()},$.addEventListener("sessionstart",yt),$.addEventListener("sessionend",Xt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,R),p=Yt.get(w,v.length),p.init(N),v.push(p),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(ht),ot=this.localClippingEnabled,K=at.init(this.clippingPlanes,ot),g=vt.get(w,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){let lt=x.xr.getDepthSensingMesh();lt!==null&&Wt(lt,N,-1/0,x.sortObjects)}Wt(w,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(rt,I),Nt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Nt&&Bt.addToRenderList(g,w),this.info.render.frame++,K===!0&&at.beginShadows();let G=p.state.shadowsArray;ut.render(G,w,N),K===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){let lt=N.cameras;if(F.length>0)for(let ct=0,xt=lt.length;ct<xt;ct++){let wt=lt[ct];ne(q,F,w,wt)}Nt&&Bt.render(w);for(let ct=0,xt=lt.length;ct<xt;ct++){let wt=lt[ct];ze(g,w,wt,wt.viewport)}}else F.length>0&&ne(q,F,w,N),Nt&&Bt.render(w),ze(g,w,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,N),ae.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],K===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Wt(w,N,G,q){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){q&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);let ct=Q.update(w),xt=w.material;xt.visible&&g.push(w,ct,xt,G,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){let ct=Q.update(w),xt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),It.copy(ct.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(xt)){let wt=ct.groups;for(let Gt=0,qt=wt.length;Gt<qt;Gt++){let At=wt[Gt],Zt=xt[At.materialIndex];Zt&&Zt.visible&&g.push(w,ct,Zt,G,It.z,At)}}else xt.visible&&g.push(w,ct,xt,G,It.z,null)}}let lt=w.children;for(let ct=0,xt=lt.length;ct<xt;ct++)Wt(lt[ct],N,G,q)}function ze(w,N,G,q){let F=w.opaque,lt=w.transmissive,ct=w.transparent;p.setupLightsView(G),K===!0&&at.setGlobalState(x.clippingPlanes,G),q&&Tt.viewport(P.copy(q)),F.length>0&&Te(F,N,G),lt.length>0&&Te(lt,N,G),ct.length>0&&Te(ct,N,G),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ne(w,N,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new $i(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?pa:Zi,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let lt=p.state.transmissionRenderTarget[q.id],ct=q.viewport||P;lt.setSize(ct.z,ct.w);let xt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(k),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&Bt.render(G);let wt=x.toneMapping;x.toneMapping=yr;let Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),K===!0&&at.setGlobalState(x.clippingPlanes,q),Te(w,G,q),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let At=0,Zt=N.length;At<Zt;At++){let fe=N[At],me=fe.object,Ie=fe.geometry,ge=fe.material,Ut=fe.group;if(ge.side===fi&&me.layers.test(q.layers)){let Ai=ge.side;ge.side=mn,ge.needsUpdate=!0,qe(me,G,q,Ie,ge,Ut),ge.side=Ai,ge.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}x.setRenderTarget(xt),x.setClearColor(k,Y),Gt!==void 0&&(q.viewport=Gt),x.toneMapping=wt}function Te(w,N,G){let q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=w.length;F<lt;F++){let ct=w[F],xt=ct.object,wt=ct.geometry,Gt=q===null?ct.material:q,qt=ct.group;xt.layers.test(G.layers)&&qe(xt,N,G,wt,Gt,qt)}}function qe(w,N,G,q,F,lt){w.onBeforeRender(x,N,G,q,F,lt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,G,q,w,lt),F.transparent===!0&&F.side===fi&&F.forceSinglePass===!1?(F.side=mn,F.needsUpdate=!0,x.renderBufferDirect(G,N,q,F,w,lt),F.side=Mr,F.needsUpdate=!0,x.renderBufferDirect(G,N,q,F,w,lt),F.side=fi):x.renderBufferDirect(G,N,q,F,w,lt),w.onAfterRender(x,N,G,q,F,lt)}function Me(w,N,G){N.isScene!==!0&&(N=Vt);let q=Pt.get(w),F=p.state.lights,lt=p.state.shadowsArray,ct=F.state.version,xt=gt.getParameters(w,F.state,lt,N,G),wt=gt.getProgramCacheKey(xt),Gt=q.programs;q.environment=w.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(w.isMeshStandardMaterial?X:b).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Ht),Gt=new Map,q.programs=Gt);let qt=Gt.get(wt);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===ct)return pe(w,xt),qt}else xt.uniforms=gt.getUniforms(w),w.onBeforeCompile(xt,x),qt=gt.acquireProgram(xt,wt),Gt.set(wt,qt),q.uniforms=xt.uniforms;let At=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=at.uniform),pe(w,xt),q.needsLights=gn(w),q.lightsStateVersion=ct,q.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function Se(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function pe(w,N){let G=Pt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Nn(w,N,G,q,F){N.isScene!==!0&&(N=Vt),A.resetTextureUnits();let lt=N.fog,ct=q.isMeshStandardMaterial?N.environment:null,xt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ho,wt=(q.isMeshStandardMaterial?X:b).get(q.envMap||ct),Gt=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,me=yr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=x.toneMapping);let Ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,Ut=Pt.get(q),Ai=p.state.lights;if(K===!0&&(ot===!0||w!==M)){let Yn=w===M&&q.id===S;at.setState(q,w,Yn)}let _e=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ai.state.version||Ut.outputColorSpace!==xt||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==wt||q.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==qt||Ut.morphTargets!==At||Ut.morphNormals!==Zt||Ut.morphColors!==fe||Ut.toneMapping!==me||Ut.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,Ut.__version=q.version);let oi=Ut.currentProgram;_e===!0&&(oi=Me(q,N,F));let cs=!1,On=!1,xo=!1,Ce=oi.getUniforms(),gi=Ut.uniforms;if(Tt.useProgram(oi.program)&&(cs=!0,On=!0,xo=!0),q.id!==S&&(S=q.id,On=!0),cs||M!==w){Tt.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),qx(et),Yx(et),Ce.setValue(U,"projectionMatrix",et)):Ce.setValue(U,"projectionMatrix",w.projectionMatrix),Ce.setValue(U,"viewMatrix",w.matrixWorldInverse);let Qi=Ce.map.cameraPosition;Qi!==void 0&&Qi.setValue(U,pt.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,On=!0,xo=!0)}if(F.isSkinnedMesh){Ce.setOptional(U,F,"bindMatrix"),Ce.setOptional(U,F,"bindMatrixInverse");let Yn=F.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ce.setValue(U,"boneTexture",Yn.boneTexture,A))}F.isBatchedMesh&&(Ce.setOptional(U,F,"batchingTexture"),Ce.setValue(U,"batchingTexture",F._matricesTexture,A),Ce.setOptional(U,F,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",F._indirectTexture,A),Ce.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",F._colorsTexture,A));let vo=G.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Ot.update(F,G,oi),(On||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,Ce.setValue(U,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gi.envMap.value=wt,gi.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(gi.envMapIntensity.value=N.environmentIntensity),On&&(Ce.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Ae(gi,xo),lt&&q.fog===!0&&ft.refreshFogUniforms(gi,lt),ft.refreshMaterialUniforms(gi,q,H,Z,p.state.transmissionRenderTarget[w.id]),Js.upload(U,Se(Ut),gi,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Js.upload(U,Se(Ut),gi,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue(U,"center",F.center),Ce.setValue(U,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(U,"normalMatrix",F.normalMatrix),Ce.setValue(U,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Yn=q.uniformsGroups;for(let Qi=0,ji=Yn.length;Qi<ji;Qi++){let zf=Yn[Qi];L.update(zf,oi),L.bind(zf,oi)}}return oi}function Ae(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function gn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,G){Pt.get(w.texture).__webglTexture=N,Pt.get(w.depthTexture).__webglTexture=G;let q=Pt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let G=Pt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){R=w,E=N,T=G;let q=!0,F=null,lt=!1,ct=!1;if(w){let wt=Pt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(wt.__hasExternalTextures)A.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&Pt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ct=!0);let qt=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][G]:F=qt[N],lt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[G]:F=qt,P.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else P.copy(J).multiplyScalar(H).floor(),D.copy(it).multiplyScalar(H).floor(),O=st;if(Tt.bindFramebuffer(U.FRAMEBUFFER,F)&&q&&Tt.drawBuffers(w,F),Tt.viewport(P),Tt.scissor(D),Tt.setScissorTest(O),lt){let wt=Pt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,G)}else if(ct){let wt=Pt.get(w.texture),Gt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Gt)}S=-1},this.readRenderTargetPixels=function(w,N,G,q,F,lt,ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){Tt.bindFramebuffer(U.FRAMEBUFFER,xt);try{let wt=w.texture,Gt=wt.format,qt=wt.type;if(!B.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-q&&G>=0&&G<=w.height-F&&U.readPixels(N,G,q,F,kt.convert(Gt),kt.convert(qt),lt)}finally{let wt=R!==null?Pt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,q,F,lt,ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){let wt=w.texture,Gt=wt.format,qt=wt.type;if(!B.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-q&&G>=0&&G<=w.height-F){Tt.bindFramebuffer(U.FRAMEBUFFER,xt);let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),U.readPixels(N,G,q,F,kt.convert(Gt),kt.convert(qt),0);let Zt=R!==null?Pt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Zt);let fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xx(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt),U.deleteBuffer(At),U.deleteSync(fe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-G),F=Math.floor(w.image.width*q),lt=Math.floor(w.image.height*q),ct=N!==null?N.x:0,xt=N!==null?N.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,ct,xt,F,lt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,q=null,F=0){w.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let lt,ct,xt,wt,Gt,qt,At,Zt,fe,me=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(lt=G.max.x-G.min.x,ct=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Gt=G.min.y,qt=G.isBox3?G.min.z:0):(lt=me.width,ct=me.height,xt=me.depth||1,wt=0,Gt=0,qt=0),q!==null?(At=q.x,Zt=q.y,fe=q.z):(At=0,Zt=0,fe=0);let Ie=kt.convert(N.format),ge=kt.convert(N.type),Ut;N.isData3DTexture?(A.setTexture3D(N,0),Ut=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ut=U.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Ai=U.getParameter(U.UNPACK_ROW_LENGTH),_e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),oi=U.getParameter(U.UNPACK_SKIP_PIXELS),cs=U.getParameter(U.UNPACK_SKIP_ROWS),On=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);let xo=w.isDataArrayTexture||w.isData3DTexture,Ce=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let gi=Pt.get(w),vo=Pt.get(N),Yn=Pt.get(gi.__renderTarget),Qi=Pt.get(vo.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ji=0;ji<xt;ji++)xo&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,F,qt+ji),w.isDepthTexture?(Ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(N).__webglTexture,F,fe+ji),U.blitFramebuffer(wt,Gt,lt,ct,At,Zt,lt,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ce?U.copyTexSubImage3D(Ut,F,At,Zt,fe+ji,wt,Gt,lt,ct):U.copyTexSubImage2D(Ut,F,At,Zt,fe+ji,wt,Gt,lt,ct);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ut,F,At,Zt,fe,lt,ct,xt,Ie,ge,me.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,F,At,Zt,fe,lt,ct,xt,Ie,me.data):U.texSubImage3D(Ut,F,At,Zt,fe,lt,ct,xt,Ie,ge,me):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,At,Zt,lt,ct,Ie,ge,me.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,At,Zt,me.width,me.height,Ie,me.data):U.texSubImage2D(U.TEXTURE_2D,F,At,Zt,lt,ct,Ie,ge,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ai),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oi),U.pixelStorei(U.UNPACK_SKIP_ROWS,cs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,On),F===0&&N.generateMipmaps&&U.generateMipmap(Ut),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,q=null,F=0){return w.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,q,F)},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Tt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var ao=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ha=class extends wr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ym=new Ue,hf=new Vl,Cl=new no,Rl=new z,Jl=class extends An{constructor(t=new qn,e=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(i),Cl.radius+=s,t.ray.intersectsSphere(Cl)===!1)return;Ym.copy(i).invert(),hf.copy(t.ray).applyMatrix4(Ym);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=u,m=d;_<m;_++){let g=c.getX(_);Rl.fromBufferAttribute(f,g),Zm(Rl,g,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=u,m=d;_<m;_++)Rl.fromBufferAttribute(f,_),Zm(Rl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Zm(r,t,e,n,i,s,o){let a=hf.distanceSqToPoint(r);if(a<e){let l=new z;hf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class r extends qn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new z,u=new z,d=[],_=[],m=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let E=C/e;f.x=-t*Math.cos(i+E*s)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(i+E*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),m.push(u.x,u.y,u.z),g.push(E+x,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],x=h[p][y],C=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&d.push(v,x,E),(p!==n-1||l<Math.PI)&&d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lo=class r extends qn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new z,f=new z,u=new z;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){let m=_/i*s,g=d/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(m),f.y=(t+e*Math.cos(g))*Math.sin(m),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){let m=(i+1)*d+_-1,g=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,y=(i+1)*d+_;o.push(m,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kl=class r extends qn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],f=new z,u=new z,d=new z,_=new z,m=new z,g=new z,p=new z;for(let v=0;v<=n;++v){let x=v/n*s*Math.PI*2;y(x,s,o,t,d),y(x+.01,s,o,t,_),g.subVectors(_,d),p.addVectors(_,d),m.crossVectors(g,p),p.crossVectors(m,g),m.normalize(),p.normalize();for(let C=0;C<=i;++C){let E=C/i*Math.PI*2,T=-e*Math.cos(E),R=e*Math.sin(E);f.x=d.x+(T*p.x+R*m.x),f.y=d.y+(T*p.y+R*m.y),f.z=d.z+(T*p.z+R*m.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(C/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){let C=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),T=(i+1)*v+x,R=(i+1)*(v-1)+x;a.push(C,E,R),a.push(E,T,R)}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2));function y(v,x,C,E,T){let R=Math.cos(v),S=Math.sin(v),M=C/x*v,P=Math.cos(M);T.x=E*(2+P)*.5*R,T.y=E*(2+P)*S*.5,T.z=E*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Tr=class extends wr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ug,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fa=class extends Tr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Pl(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Vb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var co=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uf=class extends co{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jp,endingEnd:Jp}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kp:s=t,a=2*e-n;break;case Qp:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kp:o=t,l=2*n-e;break;case Qp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),m=_*_,g=m*_,p=-u*g+2*u*m-u*_,y=(1+u)*g+(-1.5-2*u)*m+(-.5+u)*_+1,v=(-1-d)*g+(1.5+d)*m+.5*_,x=d*g-d*m;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+y*o[c+C]+v*o[l+C]+x*o[f+C];return s}},ff=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},df=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pl(e,this.TimeBufferType),this.values=Pl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pl(t.times,Array),values:Pl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ff(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ol:e=this.InterpolantFactoryMethodDiscrete;break;case qu:e=this.InterpolantFactoryMethodLinear;break;case Lh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ol;case this.InterpolantFactoryMethodLinear:return qu;case this.InterpolantFactoryMethodSmooth:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Vb(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let _=0;_!==n;++_){let m=e[f+_];if(m!==e[u+_]||m!==e[d+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=qu;var os=class extends mi{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ol;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var pf=class extends mi{};pf.prototype.ValueTypeName="color";var mf=class extends mi{};mf.prototype.ValueTypeName="number";var gf=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)br.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ql=class extends mi{InterpolantFactoryMethodLinear(t){return new gf(this.times,this.values,this.getValueSize(),t)}};Ql.prototype.ValueTypeName="quaternion";Ql.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends mi{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ol;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends mi{};_f.prototype.ValueTypeName="vector";var xf=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},Hb=new xf,vf=class{constructor(t){this.manager=t!==void 0?t:Hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vf.DEFAULT_MATERIAL_NAME="__DEFAULT";var jl=class extends An{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var su=new Ue,$m=new z,Jm=new z,tc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$m.setFromMatrixPosition(t.matrixWorld),e.position.copy($m),Jm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jm),e.updateMatrixWorld(),su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(su)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Km=new Ue,ea=new z,ou=new z,yf=class extends tc{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ea.setFromMatrixPosition(t.matrixWorld),n.position.copy(ea),ou.copy(n.position),ou.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ou),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),Km.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}},ec=class extends jl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Mf=class extends tc{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends jl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Lf="\\[\\]\\.:\\/",Gb=new RegExp("["+Lf+"]","g"),Df="[^"+Lf+"]",Wb="[^"+Lf.replace("\\.","")+"]",Xb=/((?:WC+[\/:])*)/.source.replace("WC",Df),qb=/(WCOD+)?/.source.replace("WCOD",Wb),Yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Df),Zb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Df),$b=new RegExp("^"+Xb+qb+Yb+Zb+"$"),Jb=["material","materials","bones","map"],Sf=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gb,"")}static parseTrackName(t){let e=$b.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Jb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Sf;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var sc=class extends ao{constructor(){super();let t=new Ji;t.deleteAttribute("uv");let e=new Tr({side:mn}),n=new Tr,i=new ec(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new le(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new le(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new le(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new le(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new le(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new le(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new le(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let u=new le(t,mo(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let d=new le(t,mo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let _=new le(t,mo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let m=new le(t,mo(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let g=new le(t,mo(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new le(t,mo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function mo(r){let t=new io;return t.color.setScalar(r),t}var oc=class{constructor(t){this.canvas=t,this.progress=0,this.visible=!1;try{this.renderer=new $l({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(R){console.warn("[services] WebGL unavailable",R),this.failed=!0;return}let e=this.renderer;e.setClearColor(0,0),e.toneMapping=bf,e.toneMappingExposure=1.05,e.outputColorSpace=Un;let n=this.scene=new ao,i=new oo(e);n.environment=i.fromScene(new sc,.04).texture,i.dispose(),this.camera=new pn(34,1,.1,100),this.camera.position.set(0,0,9);let s=new fa({color:new $t("#2d66cf"),metalness:1,roughness:.3,clearcoat:.6,clearcoatRoughness:.25}),o=new fa({color:new $t("#4f8cf0"),metalness:1,roughness:.16,clearcoat:1,clearcoatRoughness:.08}),a=this.rig=new ni,l=new ni,c=new ni,h=new ni,f=new le(new lo(1.75,.085,40,220),s),u=new le(new lo(1.42,.07,36,200),s),d=new le(new lo(1.12,.06,32,180),s);l.add(f),c.add(u),h.add(d);let _=new ua(.12,32,24);for(let[R,S]of[[l,1.75],[c,1.42],[h,1.12]])for(let M of[-1,1]){let P=new le(_,o);P.position.set(M*S,0,0),R.add(P)}let m=new le(new Kl(.5,.17,260,36,2,3),o);h.add(m),c.add(h),l.add(c),a.add(l),this.g1=l,this.g2=c,this.g3=h,this.core=m;let g=new le(new Ji(5.6,.07,.07),s);g.position.y=-.02,this.arm=new ni,this.arm.add(g);for(let R of[-1,1]){let S=new le(new ua(.2,40,30),o);S.position.set(R*2.8,0,0),this.arm.add(S)}a.add(this.arm),n.add(a);let p=new Tr({color:new $t("#f3f1ea"),roughness:.85,metalness:0,side:fi,emissive:new $t("#1a1a1a")}),y=new so(.5,.66,1,1);this.panels=Array.from({length:9},(R,S)=>{let M=new le(y,p);M.userData={seed:S*1.618,lane:S/9*2-1,speed:.6+S%3*.25,spin:{r:.4+Math.random(),g:.4+Math.random(),b:.4+Math.random()}};let P=.55+S*37%10/14;return M.scale.setScalar(P),n.add(M),M});let v=260,x=new Float32Array(v*3);for(let R=0;R<v;R++)x[R*3]=(Math.random()-.5)*16,x[R*3+1]=(Math.random()-.5)*10,x[R*3+2]=(Math.random()-.5)*6-1;let C=new qn;C.setAttribute("position",new Xe(x,3)),this.specks=new Jl(C,new ha({color:16777215,size:.035,transparent:!0,opacity:.75,depthWrite:!1})),n.add(this.specks);let E=new da(14412031,2.2);E.position.set(-4,6,6);let T=new da(8380671,1.6);T.position.set(5,-2,-6),n.add(E,T),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.narrow=t/e<.9}setProgress(t){this.progress=t}render(t){if(this.failed||!this.visible)return;let e=this.progress,n=t,i=this.narrow,s=fo.lerp(i?1.2:2.6,i?-.8:-2.1,e)+Math.sin(n*.35)*.12,o=fo.lerp(1.5,-.9,e)+Math.sin(n*.5)*.1,a=fo.lerp(-1.2,.4,Math.sin(e*Math.PI));this.rig.position.set(s,o,a),this.rig.rotation.set(.35+e*.9,-.6+e*2.6+n*.05,-.25+e*.5);let l=i?.72:1;this.rig.scale.setScalar(l),this.g1.rotation.y=e*Math.PI*1.6+n*.18,this.g2.rotation.x=e*Math.PI*2.2+n*.23,this.g3.rotation.y=-e*Math.PI*2.8-n*.3,this.core.rotation.z=n*.4+e*4,this.arm.rotation.z=Math.sin(n*.6+e*6)*.18+e*.9,this.arm.rotation.y=e*1.4;for(let c of this.panels){let h=c.userData,f=(e*1.8*h.speed+n*.03*h.speed+h.seed)%1.4-.2;c.position.set(fo.lerp(7.5,-7.5,f)+Math.sin(h.seed*3)*1.2,fo.lerp(-4.2,4.4,f)+h.lane*1.6+Math.sin(n*.7+h.seed)*.25,-1.5+h.lane*2.2),c.rotation.set(n*.6*h.spin.r+f*6,n*.5*h.spin.g+f*4,n*.4*h.spin.b+h.seed)}this.specks.rotation.y=n*.02+e*.6,this.specks.position.y=-e*1.5,this.renderer.render(this.scene,this.camera)}};var Mg=880,Kb={about:125,services:350},ls=[{x:72,y:58,z:-240,ry:42,rz:-5,s:.9,o:0},{x:35,y:29,z:-60,ry:24,rz:-3,s:.95,o:1},{x:3,y:11,z:60,ry:0,rz:0,s:1,o:1},{x:-30,y:-6,z:-140,ry:-30,rz:1.5,s:.92,o:1},{x:-50,y:-21,z:-380,ry:-96,rz:3,s:.86,o:.8},{x:-64,y:-33,z:-640,ry:-150,rz:4,s:.8,o:0}],Qb=Object.keys(ls[0]);function jb(r,t,e,n,i){let s=i*i,o=s*i;return .5*(2*t+(-r+e)*i+(2*r-5*t+4*e-n)*s+(-r+3*t-3*e+n)*o)}function t1(r,t){let e=Math.min(ls.length-1.0001,Math.max(0,r+1)),n=Math.floor(e),i=e-n,s=ls[Math.max(0,n-1)],o=ls[n],a=ls[n+1],l=ls[Math.min(ls.length-1,n+2)];for(let c of Qb)t[c]=jb(s[c],o[c],a[c],l[c],i);return t}function e1(r){let t=r.textContent.trim().split(/\s+/);r.textContent="";let e=[];return t.forEach((n,i)=>{let s=document.createElement("span");s.className="word";for(let o of n){let a=document.createElement("span");a.className="ch",a.textContent=o,s.appendChild(a),e.push(a)}r.appendChild(s),i<t.length-1&&r.appendChild(document.createTextNode(" "))}),e}function Sg({reduced:r}){let t=document.querySelector(".story"),e=t.querySelector(".story__pin"),n=t.querySelector(".about__title"),i=t.querySelector(".about__video"),s=i.querySelector("video"),o=t.querySelector(".services"),a=o.querySelector(".services__title"),l=[...o.querySelectorAll(".svc-card")],c=t.querySelector(".story__fade"),h=t.querySelector(".about__line path"),f=[...n.querySelectorAll(".aline")],u=[{spread:.55,rise:-.16,curve:.02,z:-260,ry:34,rx:18,rz:-12},{spread:.42,rise:-.05,curve:.03,z:-520,ry:-26,rx:30,rz:-6},{spread:.9,rise:.06,curve:.05,z:-1100,ry:40,rx:50,rz:8}],d=()=>parseFloat(getComputedStyle(n).fontSize)||100,_=f.map((P,D)=>{let O=[];return P.querySelectorAll(".split").forEach(k=>O.push(...e1(k))),{chars:O,cfg:u[D]}}),m=()=>Math.min(Math.max(window.innerWidth*(window.innerWidth<640?.26:.215),96),460),g={fade:0,t:0},p={c:0},y=null,v=()=>{if(g.fade<=.001){o.classList.remove("is-open");return}o.classList.add("is-open");let P=i.getBoundingClientRect(),D=e.getBoundingClientRect(),O=g.t,k=(P.top-D.top)*(1-O),Y=(P.left-D.left)*(1-O),W=(D.right-P.right)*(1-O),Z=(D.bottom-P.bottom)*(1-O);o.style.clipPath=`inset(${k}px ${W}px ${Z}px ${Y}px round ${2*(1-O)}px)`,o.style.opacity=g.fade},x={},C=()=>{let P=window.innerWidth<760,D=l.length;l.forEach((O,k)=>{let Y=.25+p.c*(D-1+1.45)-k;if(Y<-1||Y>4){O.style.opacity=0,O.style.visibility="hidden";return}t1(Y,x);let W=P?x.x*.55:x.x,Z=P?x.y*1.05:x.y;O.style.visibility="visible",O.style.opacity=Math.max(0,Math.min(1,x.o)),O.style.zIndex=String(Math.round(1e3+x.z)),O.style.transform=`translate(-50%, -50%) translate3d(${W}vw, ${Z}vh, ${x.z}px) rotateY(${x.ry}deg) rotateZ(${x.rz}deg) scale(${x.s})`}),y&&y.setProgress(p.c)},E=re.timeline({defaults:{ease:"none"}});_.forEach(({chars:P,cfg:D},O)=>{let k=(P.length-1)/2;E.fromTo(P,{x:Y=>(Y-k)*D.spread*d(),y:Y=>((Y-k)*D.rise+Math.pow(Y-k,2)*D.curve)*d(),z:Y=>D.z-Math.abs(Y-k)*30,rotationY:Y=>D.ry+(Y-k)*4,rotationX:D.rx,rotationZ:Y=>D.rz+(Y-k)*1.5,opacity:.35},{x:0,y:0,z:0,rotationY:0,rotationX:0,rotationZ:0,opacity:1,duration:62,ease:"power2.out",stagger:{each:1.1,from:"center"}},O*6)});let T=h.getTotalLength();re.set(h,{strokeDasharray:T,strokeDashoffset:T}),E.to(h,{strokeDashoffset:0,duration:190,ease:"power1.inOut"},0);let R=t.querySelectorAll(".about__grid .eyebrow, .founder, .about__copy p");E.fromTo(R,{opacity:0,y:34},{opacity:1,y:0,duration:40,stagger:7,ease:"power2.out"},52),E.fromTo(i,{width:0},{width:m,duration:80,ease:"power2.inOut"},112),E.to(g,{fade:1,duration:26,onUpdate:v},214),E.to(g,{t:1,duration:104,ease:"power3.inOut",onUpdate:v},236),E.fromTo(a,{opacity:.25,y:40},{opacity:1,y:0,duration:80,ease:"power2.out"},262),E.to(p,{c:1,duration:520,onUpdate:C},300),E.to(c,{opacity:1,duration:54},826),E.set({},{},Mg);let S=zt.create({trigger:t,start:"top top",end:"bottom bottom",animation:E,scrub:r?!0:.6,invalidateOnRefresh:!0,onRefresh:()=>{v(),C()}}),M=!1;return zt.create({trigger:t,start:"top bottom",end:()=>`top+=${window.innerHeight*3.4} top`,onToggle:P=>{r||(P.isActive&&!M?(M=!0,s.play().catch(()=>{})):!P.isActive&&M&&(M=!1,s.pause()))}}),zt.create({trigger:t,start:"top 200%",once:!0,onEnter:()=>{y=new oc(o.querySelector(".services__gl")),y.setProgress(p.c)}}),C(),{st:S,anchor(P){let D=Kb[P];return S.start+(S.end-S.start)*(D/Mg)},resize(){y&&y.resize(),C(),v()},tick(P,D){if(!y)return;let O=window.innerHeight;y.visible=g.fade>.01&&D>S.start-O&&D<S.end+O,y.render(P)}}}var ac=(r,t)=>r.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function bg(r){let t=r.querySelector(".stat__bars"),e=t.clientWidth||300,n=Math.max(14,Math.round(e/8.6));if(t.childElementCount===n)return[...t.children];t.textContent="";let i=r.dataset.slope==="true",s=[];for(let o=0;o<n;o++){let a=o/(n-1),l=1;if(i&&a>.58){let h=(a-.58)/.42;l=Math.sqrt(1-h*h*.5)}let c=document.createElement("i");c.style.height=`${l*100}%`,t.appendChild(c),s.push(c)}return s}function wg({reduced:r}){let t=document.querySelector(".metrics"),e=t.querySelector(".metrics__num"),n=t.querySelector(".metrics__big em"),i=t.querySelector(".metrics__aside"),s=[...t.querySelectorAll(".stat")],o=s.map(bg);if(r)return{resize(){}};let a={v:7.2};re.set(o.flat(),{scaleY:0}),re.set([e,n],{opacity:0,filter:"blur(14px)"}),re.set(i,{opacity:0,y:20}),s.forEach(h=>re.set(h.querySelectorAll(".stat__value, .stat__label, .stat__sub"),{opacity:0,y:14})),e.textContent="$7.2",s.forEach(h=>{let f=h.querySelector(".stat__value");f.textContent=ac(0,+(f.dataset.decimals||0))+(f.dataset.suffix||"")});let l=!1,c=()=>{if(l)return;l=!0;let h=re.timeline();h.to([e,n],{opacity:1,filter:"blur(0px)",duration:1.2,ease:"power2.out",stagger:.25},0).to(a,{v:11.2,duration:2.6,ease:"power3.out",onUpdate:()=>{e.textContent="$"+ac(a.v,1)}},0).to(i,{opacity:1,y:0,duration:.9,ease:"power3.out"},.5),s.forEach((f,u)=>{let d=.45+u*.22,_=f.querySelector(".stat__value"),m=parseFloat(_.dataset.count),g=+(_.dataset.decimals||0),p={v:0};h.to(f.querySelectorAll(".stat__value, .stat__label, .stat__sub"),{opacity:1,y:0,duration:.8,stagger:.08,ease:"power3.out"},d).to(p,{v:m,duration:2.2,ease:"power3.out",onUpdate:()=>{_.textContent=ac(p.v,p.v<m?Math.max(g,m<10?2:0):g)+(_.dataset.suffix||"")},onComplete:()=>{_.textContent=ac(m,g)+(_.dataset.suffix||"")}},d).to(o[u],{scaleY:1,duration:1.5,ease:"power3.out",stagger:{each:.028}},d+.05)})};return zt.create({trigger:t,start:"top 62%",once:!0,onEnter:c}),{resize(){let h=o.map(f=>f.length);o=s.map(bg),o.some((f,u)=>f.length!==h[u])&&re.set(o.flat(),{scaleY:l?1:0})}}}function Tg({reduced:r}){let t=document.querySelector(".team"),e=t.querySelector(".team__shift"),n=t.querySelector(".team__bars"),i=t.querySelector(".team__head"),s=[...t.querySelectorAll(".member")],o=Array.from({length:18},()=>{let u=document.createElement("i");return n.appendChild(u),u}),a=[],l=0,c=()=>{sl(l,window.innerWidth,window.innerHeight,0,a),a.forEach((u,d)=>{let _=o[d];_.style.width=`${u.w}px`,_.style.height=`${u.h}px`,_.style.transform=`translate3d(${u.x}px, ${u.y}px, 0)`})};c(),zt.create({trigger:e,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:u=>{l=re.utils.clamp(0,1,(u.progress-100/170)/(70/170)),c()}});let h=s.map(u=>u.querySelector(".member__num"));if(r)return{resize:c};let f=i.querySelectorAll(".team__title, .team__sub");return re.set(f,{opacity:0,filter:"blur(14px)",y:24}),re.set(s,{opacity:0,y:46}),h.forEach(u=>{u.textContent="0+"}),zt.create({trigger:i,start:"top 86%",once:!0,onEnter:()=>re.to(f,{opacity:1,filter:"blur(0px)",y:0,duration:1.3,stagger:.18,ease:"power3.out"})}),zt.create({trigger:t.querySelector(".team__grid"),start:"top 88%",once:!0,onEnter:()=>{re.to(s,{opacity:1,y:0,duration:1.2,stagger:.16,ease:"power3.out"}),h.forEach((u,d)=>{let _=parseFloat(u.dataset.count),m={v:0};re.to(m,{v:_,duration:2.4,delay:.35+d*.16,ease:"power3.out",onUpdate:()=>{u.textContent=Math.round(m.v).toLocaleString("en-US")+(u.dataset.suffix||"")}})})}}),{resize:c}}re.registerPlugin(zt);var _o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);var si=null;_o||(si=new Vp({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!0,wheelMultiplier:.9}),si.on("scroll",zt.update),re.ticker.add(r=>si.raf(r*1e3)),re.ticker.lagSmoothing(0),si.stop());var hc=()=>si?si.scroll:window.scrollY,Uf=document.querySelector(".hero"),n1=document.querySelector(".hero__content"),i1=document.querySelector(".hero__layer"),Ki=new ol(document.querySelector(".hero__gl")),Cn={y:0,bottom:1,q:0,smix:0},Ff={mix:0},r1=[],Cg=window.innerWidth,ma=window.innerHeight,ga=()=>{n1.style.transform=`translate3d(0, ${Cn.y*ma}px, 0)`,i1.style.clipPath=Cn.bottom<1?`inset(0 0 ${Math.max(0,(1-Cn.bottom)*100)}% 0)`:"",Ki.state.heroBottom=Cn.bottom,Ki.state.mix=Math.max(Ff.mix,Cn.smix),Ki.setBars(Cn.bottom<1.02?sl(Cn.q,Cg,ma,Cn.bottom*ma,r1):[])},Rg=re.timeline({defaults:{ease:"none"},onUpdate:ga});Rg.to(Cn,{smix:1,duration:34},0).to(Cn,{y:-.8,duration:40},0).to(Cn,{bottom:.26,duration:18,ease:"power1.inOut"},34).to(Cn,{q:.15,duration:18},34).to(Cn,{q:.55,duration:22},52).to(Cn,{y:-1.2,bottom:-.03,duration:26,ease:"power1.in"},74).to(Cn,{q:1,duration:26},74);zt.create({trigger:Uf,start:"top top",end:"bottom bottom",animation:Rg,scrub:!0});ga();var cc=Sg({reduced:_o}),s1=wg({reduced:_o}),o1=Tg({reduced:_o}),go=document.getElementById("nav"),Nf=document.getElementById("nav-toggle");Nf.addEventListener("click",()=>{let r=!go.classList.contains("is-open");go.classList.toggle("is-open",r),Nf.setAttribute("aria-expanded",String(r))});var lc=0,Eg=()=>{let r=hc();if(go.classList.contains("is-open")){lc=r;return}r>140&&r>lc+2?go.classList.add("is-hidden"):(r<lc-2||r<=140)&&go.classList.remove("is-hidden"),lc=r};si?si.on("scroll",Eg):window.addEventListener("scroll",Eg,{passive:!0});var a1=r=>{if(r==="#top")return 0;if(r==="#about")return cc.anchor("about");if(r==="#services")return cc.anchor("services");let t=document.querySelector(r);return t?t.getBoundingClientRect().top+hc():null};document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e.length<2)return;let n=a1(e);if(n!=null)if(r.preventDefault(),go.classList.remove("is-open"),Nf.setAttribute("aria-expanded","false"),si){let i=Math.abs(n-hc());si.scrollTo(n,{duration:Math.min(2.6,.9+i/(ma*8))})}else window.scrollTo({top:n,behavior:_o?"auto":"smooth"})});var Bf=!1;re.ticker.add(r=>{let t=hc();Bf&&t<Uf.offsetTop+Uf.offsetHeight&&Ki.render(r),cc.tick(r,t)});var Ag=0;window.addEventListener("resize",()=>{clearTimeout(Ag),Ag=setTimeout(()=>{Cg=window.innerWidth,ma=window.innerHeight,Ki.resize(),cc.resize(),s1.resize(),o1.resize(),ga(),zt.refresh()},120)});document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>zt.refresh());var Of=window.matchMedia("(min-width: 981px)").matches,Pg={logo:document.querySelector(".nav__logo"),menu:document.querySelector(".nav__menu"),menuLinks:document.querySelectorAll(".nav__menu a"),right:document.querySelector(".nav__right"),words:document.querySelectorAll(".hero__title .w"),sub:document.querySelector(".hero__sub"),cta:document.querySelector(".hero__cta")};function l1(){Bf=!0;let r=Pg,t=re.timeline({onComplete:()=>{Of&&re.set(r.menu,{clearProps:"clipPath"})}});t.to(Ki.state,{reveal:1,duration:.8,ease:"power2.out"},0).to(Ki.state,{warp:0,duration:2.2,ease:"power3.inOut"},.1).to(r.logo,{opacity:1,scale:1,duration:.8,ease:"power3.out"},.9).to(r.right,{opacity:1,x:0,duration:.8,ease:"power3.out"},1.05).to(r.words,{opacity:1,filter:"blur(0px)",yPercent:0,duration:1.2,stagger:.09,ease:"power3.out"},1.1).to(r.sub,{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power3.out"},1.6).to(r.cta,{opacity:1,y:0,duration:.9,ease:"power3.out"},1.8).add(()=>{document.body.classList.remove("is-loading"),si&&si.start()},1.4).to(Ff,{mix:1,duration:7,ease:"sine.inOut",onUpdate:ga},2.8),Of&&t.fromTo(r.menu,{opacity:1,clipPath:"inset(0% 50% 0% 50% round 9px)"},{clipPath:"inset(0% 0% 0% 0% round 9px)",duration:1.1,ease:"power3.inOut"},.95).to(r.menuLinks,{opacity:1,y:0,duration:.6,stagger:.07,ease:"power2.out"},1.25)}if(_o)Bf=!0,Ki.state.reveal=1,Ki.state.warp=0,Ff.mix=1,ga(),Ph({el:document.getElementById("preloader"),reduced:!0,onDone:()=>document.body.classList.remove("is-loading")});else{let r=Pg;re.set(r.logo,{opacity:0,scale:.7}),re.set(r.right,{opacity:0,x:24}),re.set(r.words,{opacity:0,filter:"blur(14px)",yPercent:35}),re.set(r.sub,{opacity:0,y:18,filter:"blur(6px)"}),re.set(r.cta,{opacity:0,y:18}),Of&&(re.set(r.menu,{clipPath:"inset(0% 50% 0% 50% round 9px)"}),re.set(r.menuLinks,{opacity:0,y:6})),Ph({el:document.getElementById("preloader"),reduced:!1,onReveal:l1})}})();
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
