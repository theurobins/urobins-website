(()=>{var kg=Object.defineProperty;var Vg=(r,t,e)=>t in r?kg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ot=(r,t,e)=>Vg(r,typeof t!="symbol"?t+"":t,e);function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},zc,nn,Re,Qn=1e8,we=1/Qn,Cc=Math.PI*2,Hg=Cc/4,Gg=0,id=Math.sqrt,Wg=Math.cos,Xg=Math.sin,Ye=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},Ni=function(t){return typeof t=="number"},Na=function(t){return typeof t=="undefined"},bi=function(t){return typeof t=="object"},Ln=function(t){return t!==!1},kc=function(){return typeof window!="undefined"},Ea=function(t){return Oe(t)||Ye(t)},rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Rc=/(?:-?\.?\d|\.)+/gi,Vc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hc=/[+-]=-?[.\d]+/,sd=/[^,'"\[\]\s]+/gi,qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,Mi,Pc,Gc,zn={},Pa={},od,ad=function(t){return(Pa=Ms(t,zn))&&an},Oa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},ld=function(t,e){return t&&(zn[t]=e)&&Pa&&(Pa[t]=e)||zn},Fo=function(){return 0},Yg={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},Zg={suppressEvents:!0},Wc={},cr=[],Ic={},cd,Pn={},Sc={},$f=30,Ca=[],Xc="",qc=function(t){var e=t[0],n,i;if(bi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ca.length;i--&&!Ca[i].targetTest(e););n=Ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Jc(t[i],n)))||t.splice(i,1);return t},hr=function(t){return t._gsap||qc(jn(t))[0]._gsap},Yc=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Na(n)&&t.getAttribute&&t.getAttribute(e)||n},xn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},Fr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$g=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ia=function(){var t=cr.length,e=cr.slice(0),n,i;for(Ic={},cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zc=function(t){return!!(t._initted||t._startAt||t.add)},hd=function(t,e,n,i){cr.length&&!nn&&Ia(),t.render(e,n,i||!!(nn&&e<0&&Zc(t))),cr.length&&!nn&&Ia()},ud=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sd).length<2?e:Ye(t)?t.trim():t},fd=function(t){return t},kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Jg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ms=function(t,e){for(var n in e)t[n]=e[n];return t},Jf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},La=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Do=function(t){var e=t.parent||Le,n=t.keyframes?Jg(on(t.keyframes)):kn;if(Ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Kg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},dd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Fa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Dr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Qg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lc=function(t,e,n,i){return t._startAt&&(nn?t._startAt.revert(Aa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},jg=function r(t){return!t||t._ts&&r(t.parent)},Kf=function(t){return t._repeat?Ss(t._tTime,t=t.duration()+t._rDelay)*t:0},Ss=function(t,e){var n=Math.floor(t=Ve(t/e));return t&&n===t?n-1:n},Da=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ba=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},za=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ba(t),n._dirty||Dr(n,t)),t},pd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Da(t.rawTime(),e),(!e._dur||ko(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Dr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Si=function(t,e,n,i){return e.parent&&ur(e),e._start=Ve((Ni(n)?n:n||t!==Le?Kn(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),dd(t,e,"_first","_last",t._sort?"_start":0),Dc(e)||(t._recent=e),i||pd(t,e),t._ts<0&&za(t,t._tTime),t},md=function(t,e){return(zn.ScrollTrigger||Oa("scrollTrigger",e))&&zn.ScrollTrigger.create(e,t)},gd=function(t,e,n,i,s){if(jc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cd!==In.frame)return cr.push(t),t._lazy=[s,i],1},t0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Dc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},e0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&t0(t)&&!(!t._initted&&Dc(t))||(t._ts<0||t._dp._ts<0)&&!Dc(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=ko(0,t._tDur,e),h=Ss(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ss(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||nn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&gd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Lc(t,e,n,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ur(t,1),!n&&!nn&&(Bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},n0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},bs=function(t,e,n,i){var s=t._repeat,o=Ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ve(o*(s+1)+t._rDelay*s):o,a>0&&!i&&za(t,t._tTime=t._tDur*a),t.parent&&Ba(t),n||Dr(t.parent,t),t},Qf=function(t){return t instanceof en?Dr(t):bs(t,t._dur)},i0={_start:0,endTime:Fo,totalDuration:Fo},Kn=function r(t,e,n){var i=t.labels,s=t._recent||i0,o=t.duration()>=Qn?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Uo=function(t,e,n){var i=Ni(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},fr=function(t,e){return t||t===0?e(t):e},ko=function(t,e,n){return n<t?t:n>e?e:n},rn=function(t,e){return!Ye(t)||!(e=qg.exec(t))?"":e[1]},r0=function(t,e,n){return fr(n,function(i){return ko(t,e,i)})},Uc=[].slice,_d=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==Mi},s0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||_d(i,1)?(s=n).push.apply(s,jn(i)):n.push(i)})||n},jn=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ye(t)&&!n&&(Pc||!ws())?Uc.call((e||Gc).querySelectorAll(t),0):on(t)?s0(t,n):_d(t)?Uc.call(t,0):t?[t]:[]},Nc=function(t){return t=jn(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return jn(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||Gc.createElement("div"):t)}},xd=function(t){return t.sort(function(){return .5-Math.random()})},vd=function(t){if(Oe(t))return t;var e=bi(t)?t:{each:t},n=Ur(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Ye(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||e).length,m=o[_],p,S,M,x,C,E,T,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!y){for(T=-Qn;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,S=y===Qn?0:l?_*f/y-.5:i/y|0,T=0,R=Qn,E=0;E<_;E++)M=E%y-p,x=S-(E/y|0),m[E]=C=c?Math.abs(c==="y"?x:M):id(M*M+x*x),C>T&&(T=C),C<R&&(R=C);i==="random"&&xd(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=rn(e.amount||e.each)||0,n=n&&_<0?Cd(n):n}return _=(m[u]-m.min)/m.max||0,Ve(m.b+(n?n(_):_)*m.v)+m.u}},Oc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ni(n)?0:rn(n))}},yd=function(t,e){var n=on(t),i,s;return!n&&bi(t)&&(i=n=t.radius||Qn,t.values?(t=jn(t.values),(s=!Ni(t[0]))&&(i*=i)):t=Oc(t.increment)),fr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Ni(o)?h:h+rn(o)}:Oc(t))},Md=function(t,e,n,i){return fr(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},o0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},a0=function(t,e){return function(n){return t(parseFloat(n))+(e||rn(n))}},l0=function(t,e,n){return bd(t,e,0,1,n)},Sd=function(t,e,n){return fr(n,function(i){return t[~~e(i)]})},c0=function r(t,e,n){var i=e-t;return on(t)?Sd(t,r(0,t.length),e):fr(n,function(s){return(i+(s-t)%i)%i+t})},h0=function r(t,e,n){var i=e-t,s=i*2;return on(t)?Sd(t,r(0,t.length-1),e):fr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ts=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?sd:Rc),n+=t.substr(e,i-e)+Md(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},bd=function(t,e,n,i,s){var o=e-t,a=i-n;return fr(s,function(l){return n+((l-t)/o*a||0)})},u0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ye(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Ms(on(t)?[]:{},t));if(!h){for(l in e)Kc.call(a,t,l,"get",e[l]);s=function(g){return nh(g,a)||(o?t.p:t)}}}return fr(n,s)},jf=function(t,e,n){var i=t.labels,s=Qn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&cr.length&&Ia(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},Io=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!nn),t.progress()<1&&Bn(t,"onInterrupt"),t},vs,wd=[],Td=function(t){if(t)if(t=!t.name&&t.default||t,kc()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Fo,render:nh,add:Kc,kill:A0,modifier:E0,rawVars:0},o={targetTest:0,get:0,getSetter:ka,aliases:{},register:0};if(ws(),t!==i){if(Pn[e])return;kn(i,kn(La(t,s),o)),Ms(i.prototype,Ms(s,La(t,o))),Pn[i.prop=e]=i,t.targetTest&&(Ca.push(i),Wc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ld(e,i),t.register&&t.register(an,i,vn)}else wd.push(t)},be=255,Lo={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},bc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Ed=function(t,e,n){var i=t?Ni(t)?[t>>16,t>>8&be,t&be]:0:Lo.black,s,o,a,l,c,h,f,u,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lo[t])i=Lo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Rc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=bc(l+1/3,s,o),i[1]=bc(l,s,o),i[2]=bc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Vc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Rc)||Lo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(t){var e=[],n=[],i=-1;return t.split(Ui).forEach(function(s){var o=s.match(Or)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},td=function(t,e,n){var i="",s=(t+i).match(Ui),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Ed(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Ad(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ui,"1").split(Or),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ui),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ui=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),f0=/hsl[a]?\(/,$c=function(t){var e=t.join(" "),n;if(Ui.lastIndex=0,Ui.test(e))return n=f0.test(e),t[1]=td(t[1],n),t[0]=td(t[0],n,Ad(t[1])),!0},Bo,In=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,g=function _(m){var p=r()-i,S=m===!0,M,x,C,E;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,M=C-o,(M>0||S)&&(E=++f.frame,u=C-f.time*1e3,f.time=C=C/1e3,o+=M+(M>=s?4:s-M),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](C,u,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){od&&(!Pc&&kc()&&(Mi=Pc=window,Gc=Mi.document||{},zn.gsap=an,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(an.version),ad(Pa||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),wd.forEach(Td)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=Fo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var M=p?function(x,C,E,T){m(x,C,E,T),f.remove(M)}:m;return f.remove(m),a[S?"unshift":"push"](M),ws(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),ws=function(){return!Bo&&In.wake()},ae={},d0=/^[\d.\-M][\d.\-,\s]/,p0=/["']/g,m0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(p0,"").trim():+c,i=l.substr(a+1).trim();return e},g0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},_0=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[m0(e[1])]:g0(t).split(",").map(ud)):ae._CE&&d0.test(t)?ae._CE("",t):n},Cd=function(t){return function(e){return 1-t(1-e)}},Rd=function r(t,e){for(var n=t._first,i;n;)n instanceof en?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ur=function(t,e){return t&&(Oe(t)?t:ae[t]||_0(t))||e},Br=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return xn(t,function(a){ae[a]=zn[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},Pd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Cc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Xg((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Pd(a);return s=Cc/s,l.config=function(c,h){return r(t,c,h)},l},Tc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Pd(n);return i.config=function(s){return r(t,s)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Br(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;Br("Elastic",wc("in"),wc("out"),wc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Br("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Br("Circ",function(r){return-(id(1-r*r)-1)});Br("Sine",function(r){return r===1?1:-Wg(r*Hg)+1});Br("Back",Tc("in"),Tc("out"),Tc());ae.SteppedEase=ae.steps=zn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*ko(0,o,a)|0)+s)*n}}};ys.ease=ae["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xc+=r+","+r+"Params,"});var Jc=function(t,e){this.id=Gg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yc,this.set=e?e.getSetter:ka},zo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bs(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Bo||In.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(za(this,n),!s._dp||s.parent||pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ss(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Da(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(ko(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ba(this),Qg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Da(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Zg);var i=nn;return nn=n,Zc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Kn(this,n),Ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:fd,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Io(this)},r})();kn(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var en=(function(r){nd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Le&&Si(n.parent||Le,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&md(Di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Uo(0,arguments,this),this},e.from=function(i,s,o){return Uo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Uo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Kn(this,o),1),this},e.call=function(i,s,o){return Si(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ke(i,o,Kn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Do(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Do(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ve(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,_,m,p,S,M,x,C,E,T;if(this!==Le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ve(h%m),h===l?(_=this._repeat,u=c):(C=Ve(h/m),_=~~C,_&&_===C&&(u=c,_--),u>c&&(u=c)),C=Ss(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),E&&_&1&&(u=c-u,T=1),_!==C&&!this._lock){var R=E&&C&1,y=R===(E&&_&1);if(_<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ve(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Rd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=n0(this,Ve(a),Ve(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!C&&(Bn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-we);break}}d=g}else{d=this._last;for(var v=i<0?i:u;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||nn&&Zc(d)),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=v?-we:we);break}}d=g}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-we)._zTime=u>=a?1:-1,this._ts))return this._start=x,Ba(this),this.render(i,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Bn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ni(s)||(s=Kn(this,s,i)),!(i instanceof zo)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Oe(i))i=ke.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&Fa(this,i),i===this._recent&&(this._recent=this._last),Dr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve(In.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||Fo,o);return a.data="isPause",this._hasPause=1,Si(this,a,Kn(this,i))},e.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=jn(i),l=this._first,c=Ni(s),h;l;)l instanceof ke?$g(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Kn(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=ke.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&bs(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,kn({startAt:{time:Kn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),jf(this,Kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),jf(this,Kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Dr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Dr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Si(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bs(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Le._ts&&(hd(Le,Da(i,Le)),cd=In.frame),In.frame>=$f){$f+=Dn.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&Dn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},t})(zo);kn(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var x0=function(t,e,n,i,s,o,a){var l=new vn(this._pt,t,e,0,1,eh,null,s),c=0,h=0,f,u,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ts(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(Mc)||[];f=Mc.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Fr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Hc.test(i)||p)&&(l.e=0),this._pt=l,l},Kc=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:Oe(f)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Oe(f)?c?b0:Dd:th,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=Ts(i)),i.charAt(1)==="="&&(g=Fr(u,i)+(rn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Fc)return!isNaN(u*i)&&i!==""?(g=new vn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?T0:Ud,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Oa(e,i),x0.call(this,t,e,u,i,d,l||Dn.stringFilter,c))},v0=function(t,e,n,i,s){if(Oe(t)&&(t=No(t,s,e,n,i)),!bi(t)||t.style&&t.nodeType||on(t)||rd(t))return Ye(t)?No(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=No(t[a],s,e,n,i);return o},Qc=function(t,e,n,i,s,o){var a,l,c,h;if(Pn[t]&&(a=new Pn[t]).init(s,a.rawVars?e[t]:v0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==vs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},lr,Fc,jc=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!zc,x=t.timeline,C,E,T,R,y,v,I,N,H,X,Q,Z,J;if(x&&(!u||!s)&&(s="none"),t._ease=Ur(s,ys.ease),t._yEase=f?Cd(Ur(f===!0?s:f,ys.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||u&&!i.stagger){if(N=m[0]?hr(m[0]).harness:0,Z=N&&i[N.prop],C=La(i,Wc),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Aa:Yg),_._lazy=0),o){if(ur(t._startAt=ke.set(m,kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn||!a&&!d)&&t._startAt.revert(Aa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ln(l),immediateRender:a,stagger:0,parent:p},C),Z&&(T[N.prop]=Z),ur(t._startAt=ke.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn?t._startAt.revert(Aa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ln(l)||l&&!g,E=0;E<m.length;E++){if(y=m[E],I=y._gsap||qc(m)[E]._gsap,t._ptLookup[E]=X={},Ic[I.id]&&cr.length&&Ia(),Q=S===m?E:S.indexOf(y),N&&(H=new N).init(y,Z||C,t,Q,S)!==!1&&(t._pt=R=new vn(t._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(W){X[W]=R}),H.priority&&(v=1)),!N||Z)for(T in C)Pn[T]&&(H=Qc(T,C,t,Q,y,S))?H.priority&&(v=1):X[T]=R=Kc.call(t,y,T,"get",C[T],Q,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(y,t._op[E]),M&&t._pt&&(lr=t,Le.killTweensOf(y,X,t.globalTime(e)),J=!t.parent,lr=0),t._pt&&l&&(Ic[I.id]=1)}v&&ih(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,u&&e<=0&&x.render(Qn,!0,!0)},y0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Fc=1,t.vars[e]="+=0",jc(t,a),Fc=0,l?Oo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Fe(n)+rn(f.e)),f.b&&(f.b=h.s+rn(f.b))},M0=function(t,e){var n=t[0]?hr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ms({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},S0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(on(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},No=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?Ts(t):t},Id=Xc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ld={};xn(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ld[r]=1});var ke=(function(r){nd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Do(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Le,M=(on(n)||rd(n)?Ni(n[0]):"length"in i)?[n]:jn(n),x,C,E,T,R,y,v,I;if(a._targets=M.length?qc(M):Oo("GSAP target "+n+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||u||Ea(c)||Ea(h)){if(i=a.vars,x=a.timeline=new en({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),x.kill(),x.parent=x._dp=Di(a),x._start=0,u||Ea(c)||Ea(h)){if(T=M.length,v=u&&vd(u),bi(u))for(R in u)~Id.indexOf(R)&&(I||(I={}),I[R]=u[R]);for(C=0;C<T;C++)E=La(i,Ld),E.stagger=0,p&&(E.yoyoEase=p),I&&Ms(E,I),y=M[C],E.duration=+No(c,Di(a),C,y,M),E.delay=(+No(h,Di(a),C,y,M)||0)-a._delay,!u&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(y,E,v?v(C,y,M):0),x._ease=ae.none;x.duration()?c=h=0:a.timeline=0}else if(g){Do(kn(x.vars.defaults,{ease:"none"})),x._ease=Ur(g.ease||i.ease||"none");var N=0,H,X,Q;if(on(g))g.forEach(function(Z){return x.to(M,Z,">")}),x.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||S0(R,g[R],E,g.easeEach);for(R in E)for(H=E[R].sort(function(Z,J){return Z.t-J.t}),N=0,C=0;C<H.length;C++)X=H[C],Q={ease:X.e,duration:(X.t-(C?H[C-1].t:0))/100*c},Q[R]=X.v,x.to(M,Q,N),N+=Q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!zc&&(lr=Di(a),Le.killTweensOf(M),lr=0),Si(S,Di(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ve(S._time)&&Ln(f)&&jg(Di(a))&&S.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),m&&md(Di(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,u,d,g,_,m,p,S,M,x;if(!c)e0(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Ve(f%_),f===l?(g=this._repeat,u=c):(m=Ve(f/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,u=c-u),m=Ss(this._tTime,_),u===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(M&&this._yEase&&Rd(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ve(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(gd(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(u/c),this._from&&(this.ratio=S=1-S),!a&&f&&!s&&!m&&(Bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Lc(this,i,s,o),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Lc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ur(this,1),!s&&!(h&&!a)&&(f||a||p)&&(Bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Bo||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||jc(this,c),h=this._ease(c/this._dur),y0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(za(this,0),this.parent||dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||Io(this),this.parent&&o!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?jn(i):a,c=this._ptLookup,h=this._pt,f,u,d,g,_,m,p;if((!s||s==="all")&&Kg(a,l))return s==="all"&&(this._pt=0),Io(this);for(f=this._op=this._op||[],s!=="all"&&(Ye(s)&&(_={},xn(s,function(S){return _[S]=1}),s=_),s=M0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(f[p]=s,g=u,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Fa(this,m,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Io(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Uo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Uo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Le.killTweensOf(i,s,o)},t})(zo);kn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new en,e=Uc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var th=function(t,e,n){return t[e]=n},Dd=function(t,e,n){return t[e](n)},b0=function(t,e,n,i){return t[e](i.fp,n)},w0=function(t,e,n){return t.setAttribute(e,n)},ka=function(t,e){return Oe(t[e])?Dd:Na(t[e])&&t.setAttribute?w0:th},Ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},T0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},eh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},E0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},A0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Fa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},C0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ih=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},vn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ud,this.d=l||this,this.set=c||th,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=C0,this.m=n,this.mt=s,this.tween=i},r})();xn(Xc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Wc[r]=1});zn.TweenMax=zn.TweenLite=ke;zn.TimelineLite=zn.TimelineMax=en;Le=new en({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=$c;var Nr=[],Ra={},R0=[],ed=0,P0=0,Ec=function(t){return(Ra[t]||R0).map(function(e){return e()})},Bc=function(){var t=Date.now(),e=[];t-ed>2&&(Ec("matchMediaInit"),Nr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ec("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ed=t,Ec("matchMedia"))},Nd=(function(){function r(e,n){this.selector=n&&Nc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=P0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Nc(s)),Re=o,f=i.apply(o,arguments),Oe(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Nr.length;o--;)Nr[o].id===this.id&&Nr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),I0=(function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bi(n)||(n={matches:n});var o=new Nd(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Mi.matchMedia(n[c]),l&&(Nr.indexOf(o)<0&&Nr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Bc):l.addEventListener("change",Bc)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ua={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Td(i)})},timeline:function(t){return new en(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=jn(t)[0]);var s=hr(t||{}).get,o=n?fd:ud;return n==="native"&&(n=""),t&&(e?o((Pn[e]&&Pn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Pn[a]&&Pn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=jn(t),t.length>1){var i=t.map(function(h){return an.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Pn[e],a=hr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;vs._pt=0,f.init(t,n?h+n:h,vs,0,[t]),f.render(1,f),vs._pt&&nh(1,vs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=an.to(t,kn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ur(t.ease,ys.ease)),Jf(ys,t||{})},config:function(t){return Jf(Dn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Pn[a]&&!zn[a]&&Oo(e+" effect requires "+a+" plugin.")}),Sc[e]=function(a,l,c){return n(jn(a),kn(l||{},s),c)},o&&(en.prototype[e]=function(a,l,c){return this.add(Sc[e](a,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Ur(e)},parseEase:function(t,e){return arguments.length?Ur(t,e):ae},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new en(t),i,s;for(n.smoothChildTiming=Ln(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Le,n,0),n},context:function(t,e){return t?new Nd(t,e):Re},matchMedia:function(t){return new I0(t)},matchMediaRefresh:function(){return Nr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Bc()},addEventListener:function(t,e){var n=Ra[t]||(Ra[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ra[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:c0,wrapYoyo:h0,distribute:vd,random:Md,snap:yd,normalize:l0,getUnit:rn,clamp:r0,splitColor:Ed,toArray:jn,selector:Nc,mapRange:bd,pipe:o0,unitize:a0,interpolate:u0,shuffle:xd},install:ad,effects:Sc,ticker:In,updateRoot:en.updateRoot,plugins:Pn,globalTimeline:Le,core:{PropTween:vn,globals:ld,Tween:ke,Timeline:en,Animation:zo,getCache:hr,_removeLinkedListItem:Fa,reverting:function(){return nn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return zc=t}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ua[r]=ke[r]});In.add(en.updateRoot);vs=Ua.to({},{duration:0});var L0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},D0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=L0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ac=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},xn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}D0(a,s)}}}},an=Ua.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ac("roundProps",Oc),Ac("modifiers"),Ac("snap",yd))||Ua;ke.version=en.version=an.version="3.13.0";od=1;kc()&&ws();var U0=ae.Power0,N0=ae.Power1,O0=ae.Power2,F0=ae.Power3,B0=ae.Power4,z0=ae.Linear,k0=ae.Quad,V0=ae.Cubic,H0=ae.Quart,G0=ae.Quint,W0=ae.Strong,X0=ae.Elastic,q0=ae.Back,Y0=ae.SteppedEase,Z0=ae.Bounce,$0=ae.Sine,J0=ae.Expo,K0=ae.Circ;var Od,dr,As,ch,Hr,Q0,Fd,hh,j0=function(){return typeof window!="undefined"},Fi={},Vr=180/Math.PI,Cs=Math.PI/180,Es=Math.atan2,Bd=1e8,uh=/([A-Z])/g,t_=/(left|right|width|margin|padding|x)/i,e_=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},n_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},i_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},r_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},qd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Yd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},s_=function(t,e,n){return t.style[e]=n},o_=function(t,e,n){return t.style.setProperty(e,n)},a_=function(t,e,n){return t._gsap[e]=n},l_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},c_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},h_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},De="transform",Un=De+"Origin",u_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Fi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Oi(i,a)}):this.tfm[t]=o.x?o[t]:Oi(i,t),t===Un&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},Zd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},f_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hh(),(!s||!s.isStart)&&!n[De]&&(Zd(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$d=function(t,e){var n={target:t,props:[],revert:f_,save:u_};return t._gsap||an.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Jd,oh=function(t,e){var n=dr.createElementNS?dr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):dr.createElement(t);return n&&n.style?n:dr.createElement(t)},ti=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Rs(e)||e,1)||""},zd="O,Moz,ms,Ms,Webkit".split(","),Rs=function(t,e,n){var i=e||Hr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(zd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?zd[o]:"")+t},ah=function(){j0()&&window.document&&(Od=window,dr=Od.document,As=dr.documentElement,Hr=oh("div")||{style:{}},Q0=oh("div"),De=Rs(De),Un=De+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jd=!!Rs("perspective"),hh=an.core.reverting,ch=1)},kd=function(t){var e=t.ownerSVGElement,n=oh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),As.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),s},Vd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Kd=function(t){var e,n;try{e=t.getBBox()}catch{e=kd(t),n=1}return e&&(e.width||e.height)||n||(e=kd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Vd(t,["x","cx","x1"])||0,y:+Vd(t,["y","cy","y1"])||0,width:0,height:0}:e},Qd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kd(t))},Gr=function(t,e){if(e){var n=t.style,i;e in Fi&&e!==Un&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uh,"-$1").toLowerCase())):n.removeAttribute(e)}},pr=function(t,e,n,i,s,o){var a=new vn(t._pt,e,n,0,1,o?Yd:qd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Hd={deg:1,rad:1,turn:1},d_={grid:1,flex:1},mr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hr.style,l=t_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Hd[i]||Hd[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Qd(t),(d||o==="%")&&(Fi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Fe(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===dr||!_.appendChild)&&(_=dr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===In.time&&!m.uncache)return Fe(s/m.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,g=t[h],S?t.style[e]=S:Gr(t,e)}else(d||o==="%")&&!d_[ti(_,"display")]&&(a.position=ti(t,"position")),_===t&&(a.position="static"),_.appendChild(Hr),g=Hr[h],_.removeChild(Hr),a.position="absolute";return l&&d&&(m=hr(_),m.time=In.time,m.width=_[h]),Fe(u?g*s/f:g&&s?f/g*s:0)},Oi=function(t,e,n,i){var s;return ch||ah(),e in wi&&e!=="transform"&&(e=wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fi[e]&&e!=="transform"?(s=Go(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ha(ti(t,Un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Va[e]&&Va[e](t,e,n)||ti(t,e)||Yc(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?mr(t,e,s,n)+n:s},p_=function(t,e,n,i){if(!n||n==="none"){var s=Rs(e,t,1),o=s&&ti(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ti(t,"borderTopColor"))}var a=new vn(this._pt,t.style,e,0,1,eh),l=0,c=0,h,f,u,d,g,_,m,p,S,M,x,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ti(t,e)||i,_?t.style[e]=_:Gr(t,e)),h=[n,i],$c(h),n=h[0],i=h[1],u=n.match(Or)||[],C=i.match(Or)||[],C.length){for(;f=Or.exec(i);)m=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Fr(d,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=Or.lastIndex-M.length,M||(M=M||Dn.units[e]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(d=mr(t,e,_,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Yd:qd;return Hc.test(i)&&(a.e=0),this._pt=a,a},Gd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gd[n]||n,e[1]=Gd[i]||i,e.join(" ")},g_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fi[a]&&(l=1,a=a==="transformOrigin"?Un:De),Gr(n,a);l&&(Gr(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Go(n,1),o.uncache=1,Zd(i)))}},Va={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new vn(t._pt,e,n,0,0,g_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ho=[1,0,0,1,0,0],jd={},tp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Wd=function(t){var e=ti(t,De);return tp(e)?Ho:e.substr(7).match(Vc).map(Fe)},fh=function(t,e){var n=t._gsap||hr(t),i=t.style,s=Wd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ho:s):(s===Ho&&!t.offsetParent&&t!==As&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,As.appendChild(t)),s=Wd(t),l?i.display=l:Gr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lh=function(t,e,n,i,s,o){var a=t._gsap,l=s||fh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],M=e.split(" "),x=parseFloat(M[0])||0,C=parseFloat(M[1])||0,E,T,R,y;n?l!==Ho&&(T=d*m-g*_)&&(R=x*(m/T)+C*(-_/T)+(_*S-m*p)/T,y=x*(-g/T)+C*(d/T)-(d*S-g*p)/T,x=R,C=y):(E=Kd(t),x=E.x+(~M[0].indexOf("%")?x/100*E.width:x),C=E.y+(~(M[1]||M[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&a.smooth?(p=x-c,S=C-h,a.xOffset=f+(p*d+S*_)-p,a.yOffset=u+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Un]="0px 0px",o&&(pr(o,a,"xOrigin",c,x),pr(o,a,"yOrigin",h,C),pr(o,a,"xOffset",f,a.xOffset),pr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Go=function(t,e){var n=t._gsap||new Jc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ti(t,Un)||"0",h,f,u,d,g,_,m,p,S,M,x,C,E,T,R,y,v,I,N,H,X,Q,Z,J,W,j,P,at,At,Nt,L,k;return h=f=u=_=m=p=S=M=x=0,d=g=1,n.svg=!!(t.getCTM&&Qd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),T=fh(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",J=""):J=!e&&t.getAttribute("data-svg-origin"),lh(t,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,E=n.yOrigin||0,T!==Ho&&(I=T[0],N=T[1],H=T[2],X=T[3],h=Q=T[4],f=Z=T[5],T.length===6?(d=Math.sqrt(I*I+N*N),g=Math.sqrt(X*X+H*H),_=I||N?Es(N,I)*Vr:0,S=H||X?Es(H,X)*Vr+_:0,S&&(g*=Math.abs(Math.cos(S*Cs))),n.svg&&(h-=C-(C*I+E*H),f-=E-(C*N+E*X))):(k=T[6],Nt=T[7],P=T[8],at=T[9],At=T[10],L=T[11],h=T[12],f=T[13],u=T[14],R=Es(k,At),m=R*Vr,R&&(y=Math.cos(-R),v=Math.sin(-R),J=Q*y+P*v,W=Z*y+at*v,j=k*y+At*v,P=Q*-v+P*y,at=Z*-v+at*y,At=k*-v+At*y,L=Nt*-v+L*y,Q=J,Z=W,k=j),R=Es(-H,At),p=R*Vr,R&&(y=Math.cos(-R),v=Math.sin(-R),J=I*y-P*v,W=N*y-at*v,j=H*y-At*v,L=X*v+L*y,I=J,N=W,H=j),R=Es(N,I),_=R*Vr,R&&(y=Math.cos(R),v=Math.sin(R),J=I*y+N*v,W=Q*y+Z*v,N=N*y-I*v,Z=Z*y-Q*v,I=J,Q=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Fe(Math.sqrt(I*I+N*N+H*H)),g=Fe(Math.sqrt(Z*Z+k*k)),R=Es(Q,Z),S=Math.abs(R)>2e-4?R*Vr:0,x=L?1/(L<0?-L:L):0),n.svg&&(J=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!tp(ti(t,De)),J&&t.setAttribute("transform",J))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Fe(d),n.scaleY=Fe(g),n.rotation=Fe(_)+a,n.rotationX=Fe(m)+a,n.rotationY=Fe(p)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Un]=Ha(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?x_:Jd?ep:__,n.uncache=0,n},Ha=function(t){return(t=t.split(" "))[0]+" "+t[1]},rh=function(t,e,n){var i=rn(e);return Fe(parseFloat(e)+parseFloat(mr(t,"x",n+"px",i)))+i},__=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ep(t,e)},zr="0deg",Vo="0px",kr=") ",ep=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,M=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(M&&(f!==zr||h!==zr)){var E=parseFloat(h)*Cs,T=Math.sin(E),R=Math.cos(E),y;E=parseFloat(f)*Cs,y=Math.cos(E),o=rh(S,o,T*y*-M),a=rh(S,a,-Math.sin(E)*-M),l=rh(S,l,R*y*-M+M)}m!==Vo&&(x+="perspective("+m+kr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Vo||a!==Vo||l!==Vo)&&(x+=l!==Vo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+kr),c!==zr&&(x+="rotate("+c+kr),h!==zr&&(x+="rotateY("+h+kr),f!==zr&&(x+="rotateX("+f+kr),(u!==zr||d!==zr)&&(x+="skew("+u+", "+d+kr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+kr),S.style[De]=x||"translate(0, 0)"},x_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,M=parseFloat(o),x=parseFloat(a),C,E,T,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Cs,c*=Cs,C=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-u,R=Math.cos(l-c)*u,c&&(h*=Cs,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),C*=y,E*=y)),C=Fe(C),E=Fe(E),T=Fe(T),R=Fe(R)):(C=f,R=u,E=T=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=mr(d,"x",o,"px"),x=mr(d,"y",a,"px")),(g||_||m||p)&&(M=Fe(M+g-(g*C+_*T)+m),x=Fe(x+_-(g*E+_*R)+p)),(i||s)&&(y=d.getBBox(),M=Fe(M+i/100*y.width),x=Fe(x+s/100*y.height)),y="matrix("+C+","+E+","+T+","+R+","+M+","+x+")",d.setAttribute("transform",y),S&&(d.style[De]=y)},v_=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Vr:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Bd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Bd)%o-~~(c/o)*o)),t._pt=u=new vn(t._pt,e,n,i,c,n_),u.e=h,u.u="deg",t._props.push(n),u},Xd=function(t,e){for(var n in e)t[n]=e[n];return t},y_=function(t,e,n){var i=Xd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=Go(n,1),Gr(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],o[De]=e,a=Go(n,1),o[De]=c);for(l in Fi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=rn(c),g=rn(h),f=d!==g?mr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new vn(t._pt,a,l,f,u-f,sh),t._pt.u=g||0,t._props.push(l));Xd(a,i)};xn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Va[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(g){return Oi(a,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var dh={name:"css",register:ah,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,g,_,m,p,S,M,x,C,E,T,R;ch||ah(),this.styles=this.styles||$d(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Pn[_]&&Qc(_,e,n,i,t,s)))){if(d=typeof h,g=Va[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ts(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ui.lastIndex=0,Ui.test(c)||(m=rn(c),p=rn(h)),p?m!==p&&(c=mr(t,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ye(c)&&~c.indexOf("random(")&&(c=Ts(c)),rn(c+"")||c==="auto"||(c+=Dn.units[_]||rn(Oi(t,_))||""),(c+"").charAt(1)==="="&&(c=Oi(t,_))):c=Oi(t,_),u=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in wi&&(_==="autoAlpha"&&(u===1&&Oi(t,"visibility")==="hidden"&&f&&(u=0),R.push("visibility",0,a.visibility),pr(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Fi,M){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=ti(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Go(t,e.parseTransform),E=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new vn(this._pt,a,De,0,1,C.renderTransform,C,0,-1),x.dep=1),_==="scale")this._pt=new vn(this._pt,C,"scaleY",C.scaleY,(S?Fr(C.scaleY,S+f):f)-C.scaleY||0,sh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Un,0,a[Un]),h=m_(h),C.svg?lh(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&pr(this,C,"zOrigin",C.zOrigin,p),pr(this,a,_,Ha(c),Ha(h)));continue}else if(_==="svgOrigin"){lh(t,h,1,E,0,this);continue}else if(_ in jd){v_(this,C,_,u,S?Fr(u,S+h):h);continue}else if(_==="smoothOrigin"){pr(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){y_(this,h,t);continue}}else _ in a||(_=Rs(_)||_);if(M||(f||f===0)&&(u||u===0)&&!e_.test(h)&&_ in a)m=(c+"").substr((u+"").length),f||(f=0),p=rn(h)||(_ in Dn.units?Dn.units[_]:m),m!==p&&(u=mr(t,_,c,p)),this._pt=new vn(this._pt,M?C:a,_,u,(S?Fr(u,S+f):f)-u,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?r_:sh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=i_);else if(_ in a)p_.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Oa(_,h);continue}M||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}T&&ih(this)},render:function(t,e){if(e.tween._time||!hh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Oi,aliases:wi,getSetter:function(t,e,n){var i=wi[e];return i&&i.indexOf(",")<0&&(e=i),e in Fi&&e!==Un&&(t._gsap.x||Oi(t,"x"))?n&&Fd===n?e==="scale"?l_:a_:(Fd=n||{})&&(e==="scale"?c_:h_):t.style&&!Na(t.style[e])?s_:~e.indexOf("-")?o_:ka(t,e)},core:{_removeProperty:Gr,_getMatrix:fh}};an.utils.checkPrefix=Rs;an.core.getStyleSaver=$d;(function(r,t,e,n){var i=xn(r+","+t+","+e,function(s){Fi[s]=1});xn(t,function(s){Dn.units[s]="deg",jd[s]=1}),wi[i[13]]=r+","+t,xn(n,function(s){var o=s.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Dn.units[r]="px"});an.registerPlugin(dh);var jt=an.registerPlugin(dh)||an,Fb=jt.core.Tween;function np(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function M_(r,t,e){return t&&np(r.prototype,t),e&&np(r,e),r}var sn,Xa,S_,Vn,gr,_r,Is,rp,Wr,Xo,sp,Bi,hi,op,ap=function(){return sn||typeof window!="undefined"&&(sn=window.gsap)&&sn.registerPlugin&&sn},lp=1,Ps=[],ne=[],ui=[],qo=Date.now,ph=function(t,e){return e},b_=function(){var t=Xo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,ui),ne=n,ui=i,ph=function(o,a){return e[o](a)}},ki=function(t,e){return~ui.indexOf(t)&&ui[ui.indexOf(t)+1][e]},Yo=function(t){return!!~sp.indexOf(t)},Mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},yn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ga="scrollLeft",Wa="scrollTop",mh=function(){return Bi&&Bi.isPressed||ne.cache++},qa=function(t,e){var n=function i(s){if(s||s===0){lp&&(Vn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),t(s),i.cacheID=ne.cache,o&&ph("ss",s)}else(e||ne.cache!==i.cacheID||ph("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},ln={s:Ga,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qa(function(r){return arguments.length?Vn.scrollTo(r,He.sc()):Vn.pageXOffset||gr[Ga]||_r[Ga]||Is[Ga]||0})},He={s:Wa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ln,sc:qa(function(r){return arguments.length?Vn.scrollTo(ln.sc(),r):Vn.pageYOffset||gr[Wa]||_r[Wa]||Is[Wa]||0})},Sn=function(t,e){return(e&&e._ctx&&e._ctx.selector||sn.utils.toArray)(t)[0]||(typeof t=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},w_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},zi=function(t,e){var n=e.s,i=e.sc;Yo(t)&&(t=gr.scrollingElement||_r);var s=ne.indexOf(t),o=i===He.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||Mn(t,"scroll",mh);var a=ne[s+o],l=a||(ne[s+o]=qa(ki(t,n),!0)||(Yo(t)?i:qa(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=sn.getProperty(t,"scrollBehavior")==="smooth"),l},Ya=function(t,e,n){var i=t,s=t,o=qo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=qo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,m=s,p=qo();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},Wo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ip=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},cp=function(){Xo=sn.core.globals().ScrollTrigger,Xo&&Xo.core&&b_()},hp=function(t){return sn=t||ap(),!Xa&&sn&&typeof document!="undefined"&&document.body&&(Vn=window,gr=document,_r=gr.documentElement,Is=gr.body,sp=[Vn,gr,_r,Is],S_=sn.utils.clamp,op=sn.core.context||function(){},Wr="onpointerenter"in Is?"pointer":"mouse",rp=Be.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=Be.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lp=0},500),cp(),Xa=1),Xa};ln.op=He;ne.cache=0;var Be=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Xa||hp(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Xo||cp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,M=n.onPress,x=n.onRelease,C=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,I=n.onChange,N=n.onToggleX,H=n.onToggleY,X=n.onHover,Q=n.onHoverEnd,Z=n.onMove,J=n.ignoreCheck,W=n.isNormalizer,j=n.onGestureStart,P=n.onGestureEnd,at=n.onWheel,At=n.onEnable,Nt=n.onDisable,L=n.onClick,k=n.scrollSpeed,B=n.capture,V=n.allowClicks,st=n.lockAxis,rt=n.onLockAxis;this.target=a=Sn(a)||_r,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,k=k||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Is).lineHeight)||22);var ot,Tt,Ct,vt,U,zt,Pt,z=this,St=0,Jt=0,It=n.passive||!h&&n.passive!==!1,A=zi(a,ln),b=zi(a,He),q=A(),et=b(),nt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hi[0]==="pointerdown",tt=Yo(a),dt=a.ownerDocument||gr,ht=[0,0,0],gt=[0,0,0],Ht=0,lt=function(){return Ht=qo()},ft=function(Dt,Qt){return(z.event=Dt)&&d&&w_(Dt.target,d)||Qt&&nt&&Dt.pointerType!=="touch"||J&&J(Dt,Qt)},kt=function(){z._vx.reset(),z._vy.reset(),Tt.pause(),f&&f(z)},Bt=function(){var Dt=z.deltaX=ip(ht),Qt=z.deltaY=ip(gt),yt=Math.abs(Dt)>=i,Yt=Math.abs(Qt)>=i;I&&(yt||Yt)&&I(z,Dt,Qt,ht,gt),yt&&(C&&z.deltaX>0&&C(z),E&&z.deltaX<0&&E(z),y&&y(z),N&&z.deltaX<0!=St<0&&N(z),St=z.deltaX,ht[0]=ht[1]=ht[2]=0),Yt&&(R&&z.deltaY>0&&R(z),T&&z.deltaY<0&&T(z),v&&v(z),H&&z.deltaY<0!=Jt<0&&H(z),Jt=z.deltaY,gt[0]=gt[1]=gt[2]=0),(vt||Ct)&&(Z&&Z(z),Ct&&(m&&Ct===1&&m(z),S&&S(z),Ct=0),vt=!1),zt&&!(zt=!1)&&rt&&rt(z),U&&(at(z),U=!1),ot=0},wt=function(Dt,Qt,yt){ht[yt]+=Dt,gt[yt]+=Qt,z._vx.update(Dt),z._vy.update(Qt),c?ot||(ot=requestAnimationFrame(Bt)):Bt()},Kt=function(Dt,Qt){st&&!Pt&&(z.axis=Pt=Math.abs(Dt)>Math.abs(Qt)?"x":"y",zt=!0),Pt!=="y"&&(ht[2]+=Dt,z._vx.update(Dt,!0)),Pt!=="x"&&(gt[2]+=Qt,z._vy.update(Qt,!0)),c?ot||(ot=requestAnimationFrame(Bt)):Bt()},Gt=function(Dt){if(!ft(Dt,1)){Dt=Wo(Dt,h);var Qt=Dt.clientX,yt=Dt.clientY,Yt=Qt-z.x,Ut=yt-z.y,qt=z.isDragging;z.x=Qt,z.y=yt,(qt||(Yt||Ut)&&(Math.abs(z.startX-Qt)>=s||Math.abs(z.startY-yt)>=s))&&(Ct=qt?2:1,qt||(z.isDragging=!0),Kt(Yt,Ut))}},le=z.onPress=function(bt){ft(bt,1)||bt&&bt.button||(z.axis=Pt=null,Tt.pause(),z.isPressed=!0,bt=Wo(bt),St=Jt=0,z.startX=z.x=bt.clientX,z.startY=z.y=bt.clientY,z._vx.reset(),z._vy.reset(),Mn(W?a:dt,hi[1],Gt,It,!0),z.deltaX=z.deltaY=0,M&&M(z))},D=z.onRelease=function(bt){if(!ft(bt,1)){yn(W?a:dt,hi[1],Gt,!0);var Dt=!isNaN(z.y-z.startY),Qt=z.isDragging,yt=Qt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Yt=Wo(bt);!yt&&Dt&&(z._vx.reset(),z._vy.reset(),h&&V&&sn.delayedCall(.08,function(){if(qo()-Ht>300&&!bt.defaultPrevented){if(bt.target.click)bt.target.click();else if(dt.createEvent){var Ut=dt.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,Vn,1,Yt.screenX,Yt.screenY,Yt.clientX,Yt.clientY,!1,!1,!1,!1,0,null),bt.target.dispatchEvent(Ut)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&Qt&&!W&&Tt.restart(!0),Ct&&Bt(),p&&Qt&&p(z),x&&x(z,yt)}},mt=function(Dt){return Dt.touches&&Dt.touches.length>1&&(z.isGesturing=!0)&&j(Dt,z.isDragging)},K=function(){return(z.isGesturing=!1)||P(z)},it=function(Dt){if(!ft(Dt)){var Qt=A(),yt=b();wt((Qt-q)*k,(yt-et)*k,1),q=Qt,et=yt,f&&Tt.restart(!0)}},pt=function(Dt){if(!ft(Dt)){Dt=Wo(Dt,h),at&&(U=!0);var Qt=(Dt.deltaMode===1?l:Dt.deltaMode===2?Vn.innerHeight:1)*g;wt(Dt.deltaX*Qt,Dt.deltaY*Qt,0),f&&!W&&Tt.restart(!0)}},_t=function(Dt){if(!ft(Dt)){var Qt=Dt.clientX,yt=Dt.clientY,Yt=Qt-z.x,Ut=yt-z.y;z.x=Qt,z.y=yt,vt=!0,f&&Tt.restart(!0),(Yt||Ut)&&Kt(Yt,Ut)}},Wt=function(Dt){z.event=Dt,X(z)},ue=function(Dt){z.event=Dt,Q(z)},Ne=function(Dt){return ft(Dt)||Wo(Dt,h)&&L(z)};Tt=z._dc=sn.delayedCall(u||.25,kt).pause(),z.deltaX=z.deltaY=0,z._vx=Ya(0,50,!0),z._vy=Ya(0,50,!0),z.scrollX=A,z.scrollY=b,z.isDragging=z.isGesturing=z.isPressed=!1,op(this),z.enable=function(bt){return z.isEnabled||(Mn(tt?dt:a,"scroll",mh),o.indexOf("scroll")>=0&&Mn(tt?dt:a,"scroll",it,It,B),o.indexOf("wheel")>=0&&Mn(a,"wheel",pt,It,B),(o.indexOf("touch")>=0&&rp||o.indexOf("pointer")>=0)&&(Mn(a,hi[0],le,It,B),Mn(dt,hi[2],D),Mn(dt,hi[3],D),V&&Mn(a,"click",lt,!0,!0),L&&Mn(a,"click",Ne),j&&Mn(dt,"gesturestart",mt),P&&Mn(dt,"gestureend",K),X&&Mn(a,Wr+"enter",Wt),Q&&Mn(a,Wr+"leave",ue),Z&&Mn(a,Wr+"move",_t)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=vt=Ct=!1,z._vx.reset(),z._vy.reset(),q=A(),et=b(),bt&&bt.type&&le(bt),At&&At(z)),z},z.disable=function(){z.isEnabled&&(Ps.filter(function(bt){return bt!==z&&Yo(bt.target)}).length||yn(tt?dt:a,"scroll",mh),z.isPressed&&(z._vx.reset(),z._vy.reset(),yn(W?a:dt,hi[1],Gt,!0)),yn(tt?dt:a,"scroll",it,B),yn(a,"wheel",pt,B),yn(a,hi[0],le,B),yn(dt,hi[2],D),yn(dt,hi[3],D),yn(a,"click",lt,!0),yn(a,"click",Ne),yn(dt,"gesturestart",mt),yn(dt,"gestureend",K),yn(a,Wr+"enter",Wt),yn(a,Wr+"leave",ue),yn(a,Wr+"move",_t),z.isEnabled=z.isPressed=z.isDragging=!1,Nt&&Nt(z))},z.kill=z.revert=function(){z.disable();var bt=Ps.indexOf(z);bt>=0&&Ps.splice(bt,1),Bi===z&&(Bi=0)},Ps.push(z),W&&Yo(a)&&(Bi=z),z.enable(_)},M_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Be.version="3.13.0";Be.create=function(r){return new Be(r)};Be.register=hp;Be.getAll=function(){return Ps.slice()};Be.getById=function(r){return Ps.filter(function(t){return t.vars.id===r})[0]};ap()&&sn.registerPlugin(Be);var Rt,Us,oe,Ee,Wn,xe,Ph,cl,oa,ta,$o,Za,cn,dl,bh,wn,up,fp,Ns,Cp,gh,Rp,bn,wh,Pp,Ip,xr,Th,Ih,Os,Lh,hl,Eh,_h,$a=1,hn=Date.now,xh=hn(),ii=0,Jo=0,dp=function(t,e,n){var i=Gn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},pp=function(t,e){return e&&(!Gn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},T_=function r(){return Jo&&requestAnimationFrame(r)},mp=function(){return dl=1},gp=function(){return dl=0},Ti=function(t){return t},Ko=function(t){return Math.round(t*1e5)/1e5||0},Lp=function(){return typeof window!="undefined"},Dp=function(){return Rt||Lp()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Jr=function(t){return!!~Ph.indexOf(t)},Up=function(t){return(t==="Height"?Lh:oe["inner"+t])||Wn["client"+t]||xe["client"+t]},Np=function(t){return ki(t,"getBoundingClientRect")||(Jr(t)?function(){return ll.width=oe.innerWidth,ll.height=Lh,ll}:function(){return Vi(t)})},E_=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ki(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Up(s):t["client"+s])||0}},A_=function(t,e){return!e||~ui.indexOf(t)?Np(t):function(){return ll}},Ei=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ki(t,n))?o()-Np(t)()[s]:Jr(t)?(Wn[n]||xe[n])-Up(i):t[n]-t["offset"+i])},Ja=function(t,e){for(var n=0;n<Ns.length;n+=3)(!e||~e.indexOf(Ns[n+1]))&&t(Ns[n],Ns[n+1],Ns[n+2])},Gn=function(t){return typeof t=="string"},un=function(t){return typeof t=="function"},Qo=function(t){return typeof t=="number"},Xr=function(t){return typeof t=="object"},Zo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},vh=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ls=Math.abs,Op="left",Fp="top",Dh="right",Uh="bottom",Yr="width",Zr="height",ea="Right",na="Left",ia="Top",ra="Bottom",Ge="padding",ei="margin",Bs="Width",Nh="Height",Ze="px",ni=function(t){return oe.getComputedStyle(t)},C_=function(t){var e=ni(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},_p=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vi=function(t,e){var n=e&&ni(t)[bh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Bp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},R_=function(t){return function(e){return Rt.utils.snap(Bp(t),e)}},Oh=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},P_=function(t){return function(e,n){return Oh(Bp(t))(e,n.direction)}},Ka=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Qa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},xp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ja={toggleActions:"play",anticipatePin:0},fl={top:0,left:0,center:.5,bottom:1,right:1},rl=function(t,e){if(Gn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in fl?fl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},tl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,g=Ee.createElement("div"),_=Jr(n)||ki(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?xe:n,S=t.indexOf("start")!==-1,M=S?c:h,x="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===He?Dh:Uh)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],sl(g,0,i,S),g},sl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Bs]=1,s["border"+a+Bs]=0,s[n.p]=e+"px",Rt.set(t,s)},ie=[],Ah={},aa,vp=function(){return hn()-ii>34&&(aa||(aa=requestAnimationFrame(Hi)))},Ds=function(){(!bn||!bn.isPressed||bn.startX>xe.clientWidth)&&(ne.cache++,bn?aa||(aa=requestAnimationFrame(Hi)):Hi(),ii||Qr("scrollStart"),ii=hn())},yh=function(){Ip=oe.innerWidth,Pp=oe.innerHeight},jo=function(t){ne.cache++,(t===!0||!cn&&!Rp&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!wh||Ip!==oe.innerWidth||Math.abs(oe.innerHeight-Pp)>oe.innerHeight*.25))&&cl.restart(!0)},Kr={},I_=[],zp=function r(){return Ke(Vt,"scrollEnd",r)||qr(!0)},Qr=function(t){return Kr[t]&&Kr[t].map(function(e){return e()})||I_},Hn=[],kp=function(t){for(var e=0;e<Hn.length;e+=5)(!t||Hn[e+4]&&Hn[e+4].query===t)&&(Hn[e].style.cssText=Hn[e+1],Hn[e].getBBox&&Hn[e].setAttribute("transform",Hn[e+2]||""),Hn[e+3].uncache=1)},Fh=function(t,e){var n;for(wn=0;wn<ie.length;wn++)n=ie[wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));hl=!0,e&&kp(e),e||Qr("revert")},Vp=function(t,e){ne.cache++,(e||!Tn)&&ne.forEach(function(n){return un(n)&&n.cacheID++&&(n.rec=0)}),Gn(t)&&(oe.history.scrollRestoration=Ih=t)},Tn,$r=0,yp,L_=function(){if(yp!==$r){var t=yp=$r;requestAnimationFrame(function(){return t===$r&&qr(!0)})}},Hp=function(){xe.appendChild(Os),Lh=!bn&&Os.offsetHeight||oe.innerHeight,xe.removeChild(Os)},Mp=function(t){return oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},qr=function(t,e){if(Wn=Ee.documentElement,xe=Ee.body,Ph=[oe,Ee,Wn,xe],ii&&!t&&!hl){Qe(Vt,"scrollEnd",zp);return}Hp(),Tn=Vt.isRefreshing=!0,ne.forEach(function(i){return un(i)&&++i.cacheID&&(i.rec=i())});var n=Qr("refreshInit");Cp&&Vt.sort(),e||Fh(),ne.forEach(function(i){un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),hl=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Eh=1,Mp(!0),ie.forEach(function(i){var s=Ei(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Mp(!1),Eh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vp(Ih,1),cl.pause(),$r++,Tn=2,Hi(2),ie.forEach(function(i){return un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=Vt.isRefreshing=!1,Qr("refresh")},Ch=0,ol=1,sa,Hi=function(t){if(t===2||!Tn&&!hl){Vt.isUpdating=!0,sa&&sa.update(0);var e=ie.length,n=hn(),i=n-xh>=50,s=e&&ie[0].scroll();if(ol=Ch>s?-1:1,Tn||(Ch=s),i&&(ii&&!dl&&n-ii>200&&(ii=0,Qr("scrollEnd")),$o=xh,xh=n),ol<0){for(wn=e;wn-- >0;)ie[wn]&&ie[wn].update(0,i);ol=1}else for(wn=0;wn<e;wn++)ie[wn]&&ie[wn].update(0,i);Vt.isUpdating=!1}aa=0},Rh=[Op,Fp,Uh,Dh,ei+ra,ei+ea,ei+ia,ei+na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],al=Rh.concat([Yr,Zr,"boxSizing","max"+Bs,"max"+Nh,"position",ei,Ge,Ge+ia,Ge+ea,Ge+ra,Ge+na]),D_=function(t,e,n){Fs(n);var i=t._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Mh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Rh.length,o=e.style,a=t.style,l;s--;)l=Rh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Uh]=a[Dh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Yr]=ul(t,ln)+Ze,o[Zr]=ul(t,He)+Ze,o[Ge]=a[ei]=a[Fp]=a[Op]="0",Fs(i),a[Yr]=a["max"+Bs]=n[Yr],a[Zr]=a["max"+Nh]=n[Zr],a[Ge]=n[Ge],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},U_=/([A-Z])/g,Fs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(U_,"-$1").toLowerCase())}},el=function(t){for(var e=al.length,n=t.style,i=[],s=0;s<e;s++)i.push(al[s],n[al[s]]);return i.t=t,i},N_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ll={left:0,top:0},Sp=function(t,e,n,i,s,o,a,l,c,h,f,u,d,g){un(t)&&(t=t(l)),Gn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?rl("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Qo(t))d&&(t=Rt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&sl(a,n,i,!0);else{un(e)&&(e=e(l));var M=(t||"0").split(" "),x,C,E,T;S=Sn(e,l)||xe,x=Vi(S)||{},(!x||!x.left&&!x.top)&&ni(S).display==="none"&&(T=S.style.display,S.style.display="block",x=Vi(S),T?S.style.display=T:S.style.removeProperty("display")),C=rl(M[0],x[i.d]),E=rl(M[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-E,a&&sl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,sl(o,R,i,y&&R>20||!y&&(f?Math.max(xe[m],Wn[m]):o.parentNode[m])<=R+1),f&&(c=Vi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ze))}return d&&S&&(m=Vi(S),d.seek(u),p=Vi(S),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},O_=/(webkit|moz|length|cssText|inset)/i,bp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=ni(t);for(o in a)!+o&&!O_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Gp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},nl=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},wp=function(t,e){var n=zi(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,g={};c=c||n();var _=Gp(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&Hi()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Rt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Vt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Vt=(function(){function r(e,n){Us||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Th(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jo){this.update=this.refresh=this.kill=Ti;return}n=_p(Gn(n)||Qo(n)||n.nodeType?{trigger:n}:n,ja);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,M=s.once,x=s.snap,C=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ln:He,I=!f&&f!==0,N=Sn(n.scroller||oe),H=Rt.core.getCache(N),X=Jr(N),Q=("pinType"in n?n.pinType:ki(N,"pinType")||X&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=I&&n.toggleActions.split(" "),W="markers"in n?n.markers:ja.markers,j=X?0:parseFloat(ni(N)["border"+v.p2+Bs])||0,P=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(P)},At=E_(N,X,v),Nt=A_(N,X),L=0,k=0,B=0,V=zi(N,v),st,rt,ot,Tt,Ct,vt,U,zt,Pt,z,St,Jt,It,A,b,q,et,nt,tt,dt,ht,gt,Ht,lt,ft,kt,Bt,wt,Kt,Gt,le,D,mt,K,it,pt,_t,Wt,ue;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=N,P.scroll=T?T.time.bind(T):V,Tt=V(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cp=1,n.refreshPriority===-9999&&(sa=P)),H.tweenScroll=H.tweenScroll||{top:wp(N,He),left:wp(N,ln)},P.tweenTo=st=H.tweenScroll[v.p],P.scrubDuration=function(yt){mt=Qo(yt)&&yt,mt?D?D.duration(yt):D=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:mt,paused:!0,onComplete:function(){return p&&p(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Gt=0,l||(l=i.vars.id)),x&&((!Xr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xe.style&&Rt.set(X?[xe,Wn]:N,{scrollBehavior:"auto"}),ne.forEach(function(yt){return un(yt)&&yt.target===(X?Ee.scrollingElement||Wn:N)&&(yt.smooth=!1)}),ot=un(x.snapTo)?x.snapTo:x.snapTo==="labels"?R_(i):x.snapTo==="labelsDirectional"?P_(i):x.directional!==!1?function(yt,Yt){return Oh(x.snapTo)(yt,hn()-k<500?0:Yt.direction)}:Rt.utils.snap(x.snapTo),K=x.duration||{min:.1,max:2},K=Xr(K)?ta(K.min,K.max):ta(K,K),it=Rt.delayedCall(x.delay||mt/2||.1,function(){var yt=V(),Yt=hn()-k<500,Ut=st.tween;if((Yt||Math.abs(P.getVelocity())<10)&&!Ut&&!dl&&L!==yt){var qt=(yt-vt)/A,ze=i&&!I?i.totalProgress():qt,se=Yt?0:(ze-le)/(hn()-$o)*1e3||0,Te=Rt.utils.clamp(-qt,1-qt,Ls(se/2)*se/.185),qe=qt+(x.inertia===!1?0:Te),Me,Se,pe=x,On=pe.onStart,Ae=pe.onInterrupt,_n=pe.onComplete;if(Me=ot(qe,P),Qo(Me)||(Me=qe),Se=Math.max(0,Math.round(vt+Me*A)),yt<=U&&yt>=vt&&Se!==yt){if(Ut&&!Ut._initted&&Ut.data<=Ls(Se-yt))return;x.inertia===!1&&(Te=Me-qt),st(Se,{duration:K(Ls(Math.max(Ls(qe-ze),Ls(Me-ze))*.185/se/.05||0)),ease:x.ease||"power3",data:Ls(Se-yt),onInterrupt:function(){return it.restart(!0)&&Ae&&Ae(P)},onComplete:function(){P.update(),L=V(),i&&!I&&(D?D.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Gt=le=i&&!I?i.totalProgress():P.progress,S&&S(P),_n&&_n(P)}},yt,Te*A,Se-yt-Te*A),On&&On(P,st.tween)}}else P.isActive&&L!==yt&&it.restart(!0)}).pause()),l&&(Ah[l]=P),u=P.trigger=Sn(u||d!==!0&&d),ue=u&&u._gsap&&u._gsap.stRevert,ue&&(ue=ue(P)),d=d===!0?u:Sn(d),Gn(a)&&(a={targets:u,className:a}),d&&(g===!1||g===ei||(g=!g&&d.parentNode&&d.parentNode.style&&ni(d.parentNode).display==="flex"?!1:Ge),P.pin=d,rt=Rt.core.getCache(d),rt.spacer?b=rt.pinState:(E&&(E=Sn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),rt.spacerIsNative=!!E,E&&(rt.spacerState=el(E))),rt.spacer=nt=E||Ee.createElement("div"),nt.classList.add("pin-spacer"),l&&nt.classList.add("pin-spacer-"+l),rt.pinState=b=el(d)),n.force3D!==!1&&Rt.set(d,{force3D:!0}),P.spacer=nt=rt.spacer,Kt=ni(d),lt=Kt[g+v.os2],dt=Rt.getProperty(d),ht=Rt.quickSetter(d,v.a,Ze),Mh(d,nt,Kt),et=el(d)),W){Jt=Xr(W)?_p(W,xp):xp,z=tl("scroller-start",l,N,v,Jt,0),St=tl("scroller-end",l,N,v,Jt,0,z),tt=z["offset"+v.op.d2];var Ne=Sn(ki(N,"content")||N);zt=this.markerStart=tl("start",l,Ne,v,Jt,tt,0,T),Pt=this.markerEnd=tl("end",l,Ne,v,Jt,tt,0,T),T&&(Wt=Rt.quickSetter([zt,Pt],v.a,Ze)),!Q&&!(ui.length&&ki(N,"fixedMarkers")===!0)&&(C_(X?xe:N),Rt.set([z,St],{force3D:!0}),kt=Rt.quickSetter(z,v.a,Ze),wt=Rt.quickSetter(St,v.a,Ze))}if(T){var bt=T.vars.onUpdate,Dt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),bt&&bt.apply(T,Dt||[])})}if(P.previous=function(){return ie[ie.indexOf(P)-1]},P.next=function(){return ie[ie.indexOf(P)+1]},P.revert=function(yt,Yt){if(!Yt)return P.kill(!0);var Ut=yt!==!1||!P.enabled,qt=cn;Ut!==P.isReverted&&(Ut&&(pt=Math.max(V(),P.scroll.rec||0),B=P.progress,_t=i&&i.progress()),zt&&[zt,Pt,z,St].forEach(function(ze){return ze.style.display=Ut?"none":"block"}),Ut&&(cn=P,P.update(Ut)),d&&(!C||!P.isActive)&&(Ut?D_(d,nt,b):Mh(d,nt,ni(d),ft)),Ut||P.update(Ut),cn=qt,P.isReverted=Ut)},P.refresh=function(yt,Yt,Ut,qt){if(!((cn||!P.enabled)&&!Yt)){if(d&&yt&&ii){Qe(r,"scrollEnd",zp);return}!Tn&&at&&at(P),cn=P,st.tween&&!Ut&&(st.tween.kill(),st.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ze=At(),se=Nt(),Te=T?T.duration():Ei(N,v),qe=A<=.01||!A,Me=0,Se=qt||0,pe=Xr(Ut)?Ut.end:n.end,On=n.endTrigger||u,Ae=Xr(Ut)?Ut.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),_n=P.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,P),w=u&&Math.max(0,ie.indexOf(P))||0,O=w,Y,$,F,ct,ut,xt,Et,Xt,Zt,Lt,$t,fe,me;for(W&&Xr(Ut)&&(fe=Rt.getProperty(z,v.p),me=Rt.getProperty(St,v.p));O-- >0;)xt=ie[O],xt.end||xt.refresh(0,1)||(cn=P),Et=xt.pin,Et&&(Et===u||Et===d||Et===_n)&&!xt.isReverted&&(Lt||(Lt=[]),Lt.unshift(xt),xt.revert(!0,!0)),xt!==ie[O]&&(w--,O--);for(un(Ae)&&(Ae=Ae(P)),Ae=dp(Ae,"start",P),vt=Sp(Ae,u,ze,v,V(),zt,z,P,se,j,Q,Te,T,P._startClamp&&"_startClamp")||(d?-.001:0),un(pe)&&(pe=pe(P)),Gn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Gn(Ae)?Ae.split(" ")[0]:"")+pe:(Me=rl(pe.substr(2),ze),pe=Gn(Ae)?Ae:(T?Rt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,vt):vt)+Me,On=u)),pe=dp(pe,"end",P),U=Math.max(vt,Sp(pe||(On?"100% 0":Te),On,ze,v,V()+Me,Pt,St,P,se,j,Q,Te,T,P._endClamp&&"_endClamp"))||-.001,Me=0,O=w;O--;)xt=ie[O],Et=xt.pin,Et&&xt.start-xt._pinPush<=vt&&!T&&xt.end>0&&(Y=xt.end-(P._startClamp?Math.max(0,xt.start):xt.start),(Et===u&&xt.start-xt._pinPush<vt||Et===_n)&&isNaN(Ae)&&(Me+=Y*(1-xt.progress)),Et===d&&(Se+=Y));if(vt+=Me,U+=Me,P._startClamp&&(P._startClamp+=Me),P._endClamp&&!Tn&&(P._endClamp=U||-.001,U=Math.min(U,Ei(N,v))),A=U-vt||(vt-=.01)&&.001,qe&&(B=Rt.utils.clamp(0,1,Rt.utils.normalize(vt,U,pt))),P._pinPush=Se,zt&&Me&&(Y={},Y[v.a]="+="+Me,_n&&(Y[v.p]="-="+V()),Rt.set([zt,Pt],Y)),d&&!(Eh&&P.end>=Ei(N,v)))Y=ni(d),ct=v===He,F=V(),gt=parseFloat(dt(v.a))+Se,!Te&&U>1&&($t=(X?Ee.scrollingElement||Wn:N).style,$t={style:$t,value:$t["overflow"+v.a.toUpperCase()]},X&&ni(xe)["overflow"+v.a.toUpperCase()]!=="scroll"&&($t.style["overflow"+v.a.toUpperCase()]="scroll")),Mh(d,nt,Y),et=el(d),$=Vi(d,!0),Xt=Q&&zi(N,ct?ln:He)(),g?(ft=[g+v.os2,A+Se+Ze],ft.t=nt,O=g===Ge?ul(d,v)+A+Se:0,O&&(ft.push(v.d,O+Ze),nt.style.flexBasis!=="auto"&&(nt.style.flexBasis=O+Ze)),Fs(ft),_n&&ie.forEach(function(Ie){Ie.pin===_n&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),Q&&V(pt)):(O=ul(d,v),O&&nt.style.flexBasis!=="auto"&&(nt.style.flexBasis=O+Ze)),Q&&(ut={top:$.top+(ct?F-vt:Xt)+Ze,left:$.left+(ct?Xt:F-vt)+Ze,boxSizing:"border-box",position:"fixed"},ut[Yr]=ut["max"+Bs]=Math.ceil($.width)+Ze,ut[Zr]=ut["max"+Nh]=Math.ceil($.height)+Ze,ut[ei]=ut[ei+ia]=ut[ei+ea]=ut[ei+ra]=ut[ei+na]="0",ut[Ge]=Y[Ge],ut[Ge+ia]=Y[Ge+ia],ut[Ge+ea]=Y[Ge+ea],ut[Ge+ra]=Y[Ge+ra],ut[Ge+na]=Y[Ge+na],q=N_(b,ut,C),Tn&&V(0)),i?(Zt=i._initted,gh(1),i.render(i.duration(),!0,!0),Ht=dt(v.a)-gt+A+Se,Bt=Math.abs(A-Ht)>1,Q&&Bt&&q.splice(q.length-2,2),i.render(0,!0,!0),Zt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gh(0)):Ht=A,$t&&($t.value?$t.style["overflow"+v.a.toUpperCase()]=$t.value:$t.style.removeProperty("overflow-"+v.a));else if(u&&V()&&!T)for($=u.parentNode;$&&$!==xe;)$._pinOffset&&(vt-=$._pinOffset,U-=$._pinOffset),$=$.parentNode;Lt&&Lt.forEach(function(Ie){return Ie.revert(!1,!0)}),P.start=vt,P.end=U,Tt=Ct=Tn?pt:V(),!T&&!Tn&&(Tt<pt&&V(pt),P.scroll.rec=0),P.revert(!1,!0),k=hn(),it&&(L=-1,it.restart(!0)),cn=0,i&&I&&(i._initted||_t)&&i.progress()!==_t&&i.progress(_t||0,!0).render(i.time(),!0,!0),(qe||B!==P.progress||T||_||i&&!i._initted)&&(i&&!I&&(i._initted||B||i.vars.immediateRender!==!1)&&i.totalProgress(T&&vt<-.001&&!B?Rt.utils.normalize(vt,U,0):B,!0),P.progress=qe||(Tt-vt)/A===B?0:B),d&&g&&(nt._pinOffset=Math.round(P.progress*Ht)),D&&D.invalidate(),isNaN(fe)||(fe-=Rt.getProperty(z,v.p),me-=Rt.getProperty(St,v.p),nl(z,v,fe),nl(zt,v,fe-(qt||0)),nl(St,v,me),nl(Pt,v,me-(qt||0))),qe&&!Tn&&P.update(),h&&!Tn&&!It&&(It=!0,h(P),It=!1)}},P.getVelocity=function(){return(V()-Ct)/(hn()-$o)*1e3||0},P.endAnimation=function(){Zo(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?I||Zo(i,P.direction<0,1):Zo(i,i.reversed()))},P.labelToScroll=function(yt){return i&&i.labels&&(vt||P.refresh()||vt)+i.labels[yt]/i.duration()*A||0},P.getTrailing=function(yt){var Yt=ie.indexOf(P),Ut=P.direction>0?ie.slice(0,Yt).reverse():ie.slice(Yt+1);return(Gn(yt)?Ut.filter(function(qt){return qt.vars.preventOverlaps===yt}):Ut).filter(function(qt){return P.direction>0?qt.end<=vt:qt.start>=U})},P.update=function(yt,Yt,Ut){if(!(T&&!Ut&&!yt)){var qt=Tn===!0?pt:P.scroll(),ze=yt?0:(qt-vt)/A,se=ze<0?0:ze>1?1:ze||0,Te=P.progress,qe,Me,Se,pe,On,Ae,_n,w;if(Yt&&(Ct=Tt,Tt=T?V():qt,x&&(le=Gt,Gt=i&&!I?i.totalProgress():se)),m&&d&&!cn&&!$a&&ii&&(!se&&vt<qt+(qt-Ct)/(hn()-$o)*m?se=1e-4:se===1&&U>qt+(qt-Ct)/(hn()-$o)*m&&(se=.9999)),se!==Te&&P.enabled){if(qe=P.isActive=!!se&&se<1,Me=!!Te&&Te<1,Ae=qe!==Me,On=Ae||!!se!=!!Te,P.direction=se>Te?1:-1,P.progress=se,On&&!cn&&(Se=se&&!Te?0:se===1?1:Te===1?2:3,I&&(pe=!Ae&&J[Se+1]!=="none"&&J[Se+1]||J[Se],w=i&&(pe==="complete"||pe==="reset"||pe in i))),y&&(Ae||w)&&(w||f||!i)&&(un(y)?y(P):P.getTrailing(y).forEach(function(F){return F.endAnimation()})),I||(D&&!cn&&!$a?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",se,i._tTime/i._tDur):(D.vars.totalProgress=se,D.invalidate().restart())):i&&i.totalProgress(se,!!(cn&&(k||yt)))),d){if(yt&&g&&(nt.style[g+v.os2]=lt),!Q)ht(Ko(gt+Ht*se));else if(On){if(_n=!yt&&se>Te&&U+1>qt&&qt+1>=Ei(N,v),C)if(!yt&&(qe||_n)){var O=Vi(d,!0),Y=qt-vt;bp(d,xe,O.top+(v===He?Y:0)+Ze,O.left+(v===He?0:Y)+Ze)}else bp(d,nt);Fs(qe||_n?q:et),Bt&&se<1&&qe||ht(gt+(se===1&&!_n?Ht:0))}}x&&!st.tween&&!cn&&!$a&&it.restart(!0),a&&(Ae||M&&se&&(se<1||!_h))&&oa(a.targets).forEach(function(F){return F.classList[qe||M?"add":"remove"](a.className)}),o&&!I&&!yt&&o(P),On&&!cn?(I&&(w&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(P)),(Ae||!_h)&&(c&&Ae&&vh(P,c),Z[Se]&&vh(P,Z[Se]),M&&(se===1?P.kill(!1,1):Z[Se]=0),Ae||(Se=se===1?1:3,Z[Se]&&vh(P,Z[Se]))),R&&!qe&&Math.abs(P.getVelocity())>(Qo(R)?R:2500)&&(Zo(P.callbackAnimation),D?D.progress(1):Zo(i,pe==="reverse"?1:!se,1))):I&&o&&!cn&&o(P)}if(wt){var $=T?qt/T.duration()*(T._caScrollDist||0):qt;kt($+(z._isFlipped?1:0)),wt($)}Wt&&Wt(-qt/T.duration()*(T._caScrollDist||0))}},P.enable=function(yt,Yt){P.enabled||(P.enabled=!0,Qe(N,"resize",jo),X||Qe(N,"scroll",Ds),at&&Qe(r,"refreshInit",at),yt!==!1&&(P.progress=B=0,Tt=Ct=L=V()),Yt!==!1&&P.refresh())},P.getTween=function(yt){return yt&&st?st.tween:D},P.setPositions=function(yt,Yt,Ut,qt){if(T){var ze=T.scrollTrigger,se=T.duration(),Te=ze.end-ze.start;yt=ze.start+Te*yt/se,Yt=ze.start+Te*Yt/se}P.refresh(!1,!1,{start:pp(yt,Ut&&!!P._startClamp),end:pp(Yt,Ut&&!!P._endClamp)},qt),P.update()},P.adjustPinSpacing=function(yt){if(ft&&yt){var Yt=ft.indexOf(v.d)+1;ft[Yt]=parseFloat(ft[Yt])+yt+Ze,ft[1]=parseFloat(ft[1])+yt+Ze,Fs(ft)}},P.disable=function(yt,Yt){if(P.enabled&&(yt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Yt||D&&D.pause(),pt=0,rt&&(rt.uncache=1),at&&Ke(r,"refreshInit",at),it&&(it.pause(),st.tween&&st.tween.kill()&&(st.tween=0)),!X)){for(var Ut=ie.length;Ut--;)if(ie[Ut].scroller===N&&ie[Ut]!==P)return;Ke(N,"resize",jo),X||Ke(N,"scroll",Ds)}},P.kill=function(yt,Yt){P.disable(yt,Yt),D&&!Yt&&D.kill(),l&&delete Ah[l];var Ut=ie.indexOf(P);Ut>=0&&ie.splice(Ut,1),Ut===wn&&ol>0&&wn--,Ut=0,ie.forEach(function(qt){return qt.scroller===P.scroller&&(Ut=1)}),Ut||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,yt&&i.revert({kill:!1}),Yt||i.kill()),zt&&[zt,Pt,z,St].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),sa===P&&(sa=0),d&&(rt&&(rt.uncache=1),Ut=0,ie.forEach(function(qt){return qt.pin===d&&Ut++}),Ut||(rt.spacer=0)),n.onKill&&n.onKill(P)},ie.push(P),P.enable(!1,!1),ue&&ue(P),i&&i.add&&!A){var Qt=P.update;P.update=function(){P.update=Qt,ne.cache++,vt||U||P.refresh()},Rt.delayedCall(.01,P.update),A=.01,vt=U=0}else P.refresh();d&&L_()},r.register=function(n){return Us||(Rt=n||Dp(),Lp()&&window.document&&r.enable(),Us=Jo),Us},r.defaults=function(n){if(n)for(var i in n)ja[i]=n[i];return ja},r.disable=function(n,i){Jo=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(oe,"wheel",Ds),Ke(Ee,"scroll",Ds),clearInterval(Za),Ke(Ee,"touchcancel",Ti),Ke(xe,"touchstart",Ti),Ka(Ke,Ee,"pointerdown,touchstart,mousedown",mp),Ka(Ke,Ee,"pointerup,touchend,mouseup",gp),cl.kill(),Ja(Ke);for(var s=0;s<ne.length;s+=3)Qa(Ke,ne[s],ne[s+1]),Qa(Ke,ne[s],ne[s+2])},r.enable=function(){if(oe=window,Ee=document,Wn=Ee.documentElement,xe=Ee.body,Rt&&(oa=Rt.utils.toArray,ta=Rt.utils.clamp,Th=Rt.core.context||Ti,gh=Rt.core.suppressOverwrites||Ti,Ih=oe.history.scrollRestoration||"auto",Ch=oe.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),xe)){Jo=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",Hp(),T_(),Be.register(Rt),r.isTouch=Be.isTouch,xr=Be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wh=Be.isTouch===1,Qe(oe,"wheel",Ds),Ph=[oe,Ee,Wn,xe],Rt.matchMedia?(r.matchMedia=function(c){var h=Rt.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Rt.addEventListener("matchMediaInit",function(){return Fh()}),Rt.addEventListener("matchMediaRevert",function(){return kp()}),Rt.addEventListener("matchMedia",function(){qr(0,1),Qr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return yh(),yh})):console.warn("Requires GSAP 3.11.0 or later"),yh(),Qe(Ee,"scroll",Ds);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vi(xe),He.m=Math.round(a.top+He.sc())||0,ln.m=Math.round(a.left+ln.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Za=setInterval(vp,250),Rt.delayedCall(.5,function(){return $a=0}),Qe(Ee,"touchcancel",Ti),Qe(xe,"touchstart",Ti),Ka(Qe,Ee,"pointerdown,touchstart,mousedown",mp),Ka(Qe,Ee,"pointerup,touchend,mouseup",gp),bh=Rt.utils.checkPrefix("transform"),al.push(bh),Us=hn(),cl=Rt.delayedCall(.2,qr).pause(),Ns=[Ee,"visibilitychange",function(){var c=oe.innerWidth,h=oe.innerHeight;Ee.hidden?(up=c,fp=h):(up!==c||fp!==h)&&jo()},Ee,"DOMContentLoaded",qr,oe,"load",qr,oe,"resize",jo],Ja(Qe),ie.forEach(function(c){return c.enable(0,1)}),l=0;l<ne.length;l+=3)Qa(Ke,ne[l],ne[l+1]),Qa(Ke,ne[l],ne[l+2])}},r.config=function(n){"limitCallbacks"in n&&(_h=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(vp,i),"ignoreMobileResize"in n&&(wh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ja(Ke)||Ja(Qe,n.autoRefreshEvents||"none"),Rp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=ne.indexOf(s),a=Jr(s);~o&&ne.splice(o,a?6:2),i&&(a?ui.unshift(oe,i,xe,i,Wn,i):ui.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Gn(n)?Sn(n):n).getBoundingClientRect(),a=o[s?Yr:Zr]*i||0;return s?o.right-a>0&&o.left+a<oe.innerWidth:o.bottom-a>0&&o.top+a<oe.innerHeight},r.positionInViewport=function(n,i,s){Gn(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?Yr:Zr],l=i==null?a/2:i in fl?fl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/oe.innerWidth:(o.top+l)/oe.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r})();Vt.version="3.13.0";Vt.saveStyles=function(r){return r?oa(r).forEach(function(t){if(t&&t.style){var e=Hn.indexOf(t);e>=0&&Hn.splice(e,5),Hn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Th())}}):Hn};Vt.revert=function(r,t){return Fh(!r,t)};Vt.create=function(r,t){return new Vt(r,t)};Vt.refresh=function(r){return r?jo(!0):(Us||Vt.register())&&qr(!0)};Vt.update=function(r){return++ne.cache&&Hi(r===!0?2:0)};Vt.clearScrollMemory=Vp;Vt.maxScroll=function(r,t){return Ei(r,t?ln:He)};Vt.getScrollFunc=function(r,t){return zi(Sn(r),t?ln:He)};Vt.getById=function(r){return Ah[r]};Vt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Vt.isScrolling=function(){return!!ii};Vt.snapDirectional=Oh;Vt.addEventListener=function(r,t){var e=Kr[r]||(Kr[r]=[]);~e.indexOf(t)||e.push(t)};Vt.removeEventListener=function(r,t){var e=Kr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Vt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Rt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),u.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&un(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return un(s)&&(s=s(),Qe(Vt,"refresh",function(){return s=t.batchMax()})),oa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Vt.create(c))}),e};var Tp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Sh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Be.isTouch?" pinch-zoom":""):"none",t===Wn&&r(xe,e)},il={auto:1,scroll:1},F_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Rt.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(il[(l=ni(s)).overflowY]||il[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Jr(s)&&(il[(l=ni(s)).overflowY]||il[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Wp=function(t,e,n,i){return Be.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&F_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(Ee,Be.eventTypes[0],Ap,!1,!0)},onDisable:function(){return Ke(Ee,Be.eventTypes[0],Ap,!0)}})},B_=/(input|label|select|textarea)/i,Ep,Ap=function(t){var e=B_.test(t.target.tagName);(e||Ep)&&(t._gsapAllow=!0,Ep=e)},z_=function(t){Xr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Sn(t.target)||Wn,h=Rt.core.globals().ScrollSmoother,f=h&&h.get(),u=xr&&(t.content&&Sn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=zi(c,He),g=zi(c,ln),_=1,m=(Be.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,p=0,S=un(i)?function(){return i(a)}:function(){return i||2.8},M,x,C=Wp(c,t.type,!0,s),E=function(){return x=!1},T=Ti,R=Ti,y=function(){l=Ei(c,He),R=ta(xr?1:0,l),n&&(T=ta(0,Ei(c,ln))),M=$r},v=function(){u._gsap.y=Ko(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(E);var W=Ko(a.deltaY/2),j=R(d.v-W);if(u&&j!==d.v+d.offset){d.offset=j-d.v;var P=Ko((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",d.cacheID=ne.cache,Hi()}return!0}d.offset&&v(),x=!0},N,H,X,Q,Z=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return u&&Rt.set(u,{y:"+=0"}),t.ignoreCheck=function(J){return xr&&J.type==="touchmove"&&I(J)||_>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},t.onPress=function(){x=!1;var J=_;_=Ko((oe.visualViewport&&oe.visualViewport.scale||1)/m),N.pause(),J!==_&&Sh(c,_>1.01?!0:n?!1:"x"),H=g(),X=d(),y(),M=$r},t.onRelease=t.onGestureStart=function(J,W){if(d.offset&&v(),!W)Q.restart(!0);else{ne.cache++;var j=S(),P,at;n&&(P=g(),at=P+j*.05*-J.velocityX/.227,j*=Tp(g,P,at,Ei(c,ln)),N.vars.scrollX=T(at)),P=d(),at=P+j*.05*-J.velocityY/.227,j*=Tp(d,P,at,Ei(c,He)),N.vars.scrollY=R(at),N.invalidate().duration(j).play(.01),(xr&&N.vars.scrollY>=l||P>=l-1)&&Rt.to({},{onUpdate:Z,duration:j})}o&&o(J)},t.onWheel=function(){N._ts&&N.pause(),hn()-p>1e3&&(M=0,p=hn())},t.onChange=function(J,W,j,P,at){if($r!==M&&y(),W&&n&&g(T(P[2]===W?H+(J.startX-J.x):g()+W-P[1])),j){d.offset&&v();var At=at[2]===j,Nt=At?X+J.startY-J.y:d()+j-at[1],L=R(Nt);At&&Nt!==L&&(X+=L-Nt),d(L)}(j||W)&&Hi()},t.onEnable=function(){Sh(c,n?!1:"x"),Vt.addEventListener("refresh",Z),Qe(oe,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},t.onDisable=function(){Sh(c,!0),Ke(oe,"resize",Z),Vt.removeEventListener("refresh",Z),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Be(t),a.iOS=xr,xr&&!d()&&d(1),xr&&Rt.ticker.add(Ti),Q=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gp(d,d(),function(){return N.pause()})},onUpdate:Hi,onComplete:Q.vars.onComplete}),a};Vt.sort=function(r){if(un(r))return ie.sort(r);var t=oe.pageYOffset||0;return Vt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+oe.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Vt.observe=function(r){return new Be(r)};Vt.normalizeScroll=function(r){if(typeof r=="undefined")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var t=r instanceof Be?r:z_(r);return bn&&bn.target===t.target&&bn.kill(),Jr(t.target)&&(bn=t),t};Vt.core={_getVelocityProp:Ya,_inputObserver:Wp,_scrollers:ne,_proxies:ui,bridge:{ss:function(){ii||Qr("scrollStart"),ii=hn()},ref:function(){return cn}}};Dp()&&Rt.registerPlugin(Vt);var Xp="1.3.23";function Zp(r,t,e){return Math.max(r,Math.min(t,e))}function k_(r,t,e){return(1-e)*r+e*t}function V_(r,t,e,n){return k_(r,t,1-Math.exp(-e*n))}function H_(r,t){return(r%t+t)%t}var G_=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=Zp(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=V_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function W_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var X_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=W_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$p=class{constructor(){Ot(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},q_=100/6,vr={passive:!1};function qp(r,t){return r===1?q_:r===2?t:1}var Y_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new $p);Ot(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ot(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ot(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ot(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=qp(n,this.window.width),s=qp(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vr),this.element.addEventListener("touchstart",this.onTouchStart,vr),this.element.addEventListener("touchmove",this.onTouchMove,vr),this.element.addEventListener("touchend",this.onTouchEnd,vr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vr),this.element.removeEventListener("touchstart",this.onTouchStart,vr),this.element.removeEventListener("touchmove",this.onTouchMove,vr),this.element.removeEventListener("touchend",this.onTouchEnd,vr)}},Yp=r=>Math.min(1,1.001-2**(-10*r)),Jp=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:M=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:y=!1}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"_rafId",null);Ot(this,"isTouching");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new G_);Ot(this,"emitter",new $p);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ot(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ot(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ot(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ot(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ot(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,S,M;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||h==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||i&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-touch"))||s&&((M=g.hasAttribute)==null?void 0:M.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Xp,window.lenis||(window.lenis={}),window.lenis.version=Xp,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Yp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:M,anchors:x,autoToggle:C,allowNestedScroll:E,naiveDimensions:R,stopInertiaOnNavigate:y},this.dimensions=new X_(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Y_(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(g=u),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Zp(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f!=null?f:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Yp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var E;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,g;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let T=window.getComputedStyle(r);if(i.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,S,M,x,C;if(_==="horizontal")m=Math.round(r.scrollLeft),p=f-d,S=t,M=s,x=a,C=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=u-g,S=e,M=o,x=l,C=h;else return!1;return!C&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&M&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?H_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Kp=1600,Qp=900,Bh=4.97,fn=4.63,je=4.37,Gi={x:858,y:200},jr={x:805,y:500},Wi={io:r=>r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2,out2:r=>1-(1-r)*(1-r),out3:r=>1-Math.pow(1-r,3),in2:r=>r*r};function fi(r,t,e=Wi.io){if(t<=r[0][0])return r[0][1];for(let n=1;n<r.length;n++){let[i,s]=r[n];if(t<=i){let[o,a]=r[n-1],l=i===o?1:e((t-o)/(i-o));return Array.isArray(a)?a.map((c,h)=>c+(s[h]-c)*l):a+(s-a)*l}}return r[r.length-1][1]}var Z_=[[0,1.62],[.08,1.62],[2.4,1],[je-.001,1],[je,1.09],[fn,1.15]],$_=[[1.03,[1374,505,58]],[1.23,[1378,489,58]],[1.43,[1383,435,59]],[1.63,[1387,378,60]],[1.83,[1388,342,61]],[2.03,[1393,318,62]],[2.33,[1396,310,62]],[2.53,[1427,309,70]],[2.63,[1422,362,98]],[2.73,[1410,380,102]],[3.03,[1399,392,105]],[3.23,[1393,393,113]],[3.33,[1364,396,118]],[3.43,[1323,394,124]],[3.53,[1200,394,118]],[3.63,[1152,393,113]],[3.83,[1122,392,103]],[3.93,[1114,390,90]],[4.23,[1114,390,90]],[je-.001,[1126,396,88]],[je,[1236,444,72]],[4.43,[1243,446,70]],[4.53,[1259,451,69]],[fn,[1276,452,68]]],J_=[[1.9,[266,475,30]],[2.03,[272,385,46]],[2.13,[278,334,52]],[2.33,[280,309,56]],[2.53,[270,317,58]],[2.63,[220,367,66]],[2.73,[165,425,90]],[3.03,[141,452,99]],[3.23,[141,452,99]],[3.33,[155,435,74]],[3.43,[161,425,66]],[3.53,[166,417,59]],[4.03,[170,414,57]],[4.13,[186,419,52]],[4.23,[240,437,46]],[je-.001,[259,443,41]],[je,[270,447,40]],[4.53,[276,450,40]],[fn,[276,450,40]]],jp=[[0,[165,13]],[.35,[165,13]],[.43,[161,13]],[.63,[151,12.8]],[.83,[141,12.5]],[1.43,[140.5,13.3]],[1.83,[148.5,13.4]],[2.13,[151.5,13.4]],[2.43,[151.5,13.4]],[3.03,[148,23.9]],[3.43,[143,24]],[3.83,[131,20]],[4.23,[135.5,16.6]],[je-.001,[137,16]],[je,[150,8.5]],[4.43,[151.5,8]],[fn,[164,5.5]]],K_=[[1.93,[36,8]],[2.03,[31,12.7]],[2.23,[30,13.4]],[2.43,[30,13.4]],[3.03,[19.5,24]],[3.43,[24.5,18]],[3.83,[26,15]],[4.23,[22.5,13]],[je-.001,[22,12.5]],[je,[21,11]],[fn,[14.5,10]]],Q_=[[1.2,[1300,900,181,4]],[1.43,[1320,480,181,5]],[1.63,[1328,280,181,6]],[1.73,[1331,178,181,6.6]],[1.93,[1341,145,175,9]],[2.33,[1351,127,177,11]],[2.45,[1351,127,177,11]],[2.63,[1403,160,238,16]],[2.9,[1395,178,258,18.5]],[3.23,[1393,181,261,18.8]],[3.33,[1343,175,259,16]],[3.43,[1276,172,256,12.8]],[3.75,[1060,200,190,0]],[3.93,[1039,205,176,-2]],[4.23,[1039,205,176,-2]],[je-.001,[1087,211,174,-3]],[je,[1450,326,160,-4.7]],[4.43,[1454,328,160,-4.7]],[4.53,[1490,350,160,-4]],[fn,[1505,356,160,-4]]],j_=[[1.45,[500,1e3,176,-1]],[1.63,[470,540,176,-1.5]],[1.73,[488,280,176,-1.5]],[1.93,[478,236,176,-2]],[2.03,[472,200,176,-2]],[2.33,[467,172,176,-2]],[2.45,[467,172,176,-2]],[2.63,[370,259,193,-4.7]],[2.9,[290,292,230,-10]],[3.23,[275,300,238,-11]],[3.33,[230,270,225,-9]],[3.45,[150,210,205,-6]],[3.53,[138,194,200,-5.5]],[4.03,[137,178,197,-5.5]],[4.23,[128,261,172,-3]],[je-.001,[137,289,163,-2.5]],[je,[145,308,154,-2.5]],[fn,[150,314,154,-2.5]]],tx=[[1.7,0],[1.95,1],[3.3,1],[3.43,0],[3.88,0],[4.06,.75],[je,.75],[fn,.6]],ex=[[1.73,0],[2,1],[3.2,1],[3.33,0],[3.45,0],[3.63,.85],[4.1,.85],[4.23,.5],[je,.5],[fn,.45]],nx=[[0,[667,1115,195]],[2.4,[667,1115,195]],[3.03,[579,1113,230]],[3.9,[345,1320,300]],[je-.001,[345,1320,300]],[je,[690,1130,205]]],tm={work:{head:[104,-30],sh:[94,-16],hip:[82,70],knee:[150,78],ankle:[142,124],el:[120,10],ha:[146,-2],el2:[112,14],ha2:[138,0]},up:{head:[88,-40],sh:[86,-24],hip:[82,70],knee:[150,78],ankle:[142,124],el:[104,14],ha:[100,-18],el2:[110,16],ha2:[140,0]},stretch:{head:[80,-44],sh:[83,-26],hip:[84,70],knee:[152,80],ankle:[146,126],el:[62,-52],ha:[78,-50],el2:[104,-56],ha2:[86,-50]},yawn:{head:[94,-36],sh:[91,-20],hip:[84,70],knee:[150,78],ankle:[142,124],el:[108,4],ha:[96,-34],el2:[116,12],ha2:[140,0]},leap:{head:[132,8],sh:[120,18],hip:[84,56],knee:[128,44],ankle:[104,84],el:[102,-6],ha:[118,-16],el2:[140,30],ha2:[152,14]}},pl=[[0,"work"],[1.82,"work"],[1.98,"up"],[2.2,"up"],[2.36,"stretch"],[3.25,"stretch"],[3.4,"yawn"],[3.47,"yawn"],[3.6,"leap"]],ts=(r,t,e)=>r+(t-r)*e,Ai=r=>[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16)],zs=(r,t,e)=>`rgb(${Math.round(ts(r[0],t[0],e))},${Math.round(ts(r[1],t[1],e))},${Math.round(ts(r[2],t[2],e))})`,ri={dark:Ai("#4a1d14"),lit:Ai("#e88a76"),legLit:Ai("#d17261"),topDark:Ai("#5c2618"),topLit:Ai("#c0624e"),chairDark:Ai("#361a14"),chairLit:Ai("#562014"),hairDark:Ai("#2a0f09"),hairLit:Ai("#8a3a28"),lampOff:Ai("#e8a090"),lampOn:[254,254,252]},ix=[[0,"rgba(255,254,252,1)"],[85/700,"rgba(253,229,220,1)"],[170/700,"rgba(249,210,195,1)"],[290/700,"rgba(248,186,168,1)"],[400/700,"rgba(232,140,117,0.85)"],[460/700,"rgba(210,118,95,0.6)"],[520/700,"rgba(175,80,60,0.4)"],[575/700,"rgba(153,58,38,0.2)"],[1,"rgba(120,40,25,0)"]];function zh({el:r,reduced:t,onReveal:e,onDone:n}){let i=r.querySelector(".preloader__canvas"),s=r.querySelector(".preloader__flash"),o=r.querySelector(".preloader__count"),a=r.querySelector(".preloader__num"),l=i.getContext("2d",{alpha:!1});r.style.setProperty("--grain",`url(${rx().toDataURL()})`);let c=0,h=0,f=1,u=1,d=0,g=0,_={};function m(){f=Math.min(window.devicePixelRatio||1,1.5),c=window.innerWidth,h=window.innerHeight,i.width=Math.round(c*f),i.height=Math.round(h*f),c/h<.9?(u=c/1250,d=c/2-800*u,g=h*.44-420*u):(u=Math.max(c/Kp,h/Qp),d=(c-Kp*u)/2,g=(h-Qp*u)/2)}function p(L,k,B,V,st){let rt=document.createElement("canvas");rt.width=L+B*4,rt.height=k+B*4;let ot=rt.getContext("2d");return ot.translate(B*2-1e4,B*2),ot.shadowColor=st,ot.shadowBlur=B,ot.shadowOffsetX=1e4,ot.fillStyle=st,V(ot),ot.fill(),rt}function S(L,k,B,V,st,rt){L.beginPath(),L.moveTo(k+rt,B),L.arcTo(k+V,B,k+V,B+st,rt),L.arcTo(k+V,B+st,k,B+st,rt),L.arcTo(k,B+st,k,B,rt),L.arcTo(k,B,k+V,B,rt),L.closePath()}_.pillar=p(600,600,40,L=>S(L,0,0,600,600,150),"rgb(78,8,16)"),_.shadow=p(494,40,14,L=>{L.beginPath(),L.ellipse(247,20,247,20,0,0,Math.PI*2)},"rgb(25,8,5)");{let L=document.createElement("canvas");L.width=L.height=256;let k=L.getContext("2d");k.fillStyle="rgba(192,96,72,0.55)";for(let B=0;B<160;B++){let V=Math.random()*Math.PI*2,st=(1+Math.random()*1.2)*58;k.fillRect(128+Math.cos(V)*st,128+Math.sin(V)*st,1.4,1.4)}_.specks=L}function M(L,k,B,V){let st=L*B,rt=V.x*(1-B)+k.x*(1-L)*B,ot=V.y*(1-B)+k.y*(1-L)*B;l.setTransform(f*u*st,0,0,f*u*st,f*(d+u*rt),f*(g+u*ot))}function x(L){let[k,B,V,st]=L;if(B>1040)return;l.save(),l.translate(k,B),l.rotate(st*Math.PI/180);let rt=l.createLinearGradient(0,-1.6*V,0,.45*V);rt.addColorStop(0,"#231816"),rt.addColorStop(.45,"#2d1a13"),rt.addColorStop(.8,"rgba(56,29,20,0.6)"),rt.addColorStop(1,"rgba(62,29,20,0)"),l.fillStyle=rt,l.beginPath(),l.moveTo(-3.5*V,.75*V),l.bezierCurveTo(-2.4*V,.5*V,-1.6*V,.3*V,-1.38*V,.2*V),l.lineTo(-1.3*V,-1.15*V),l.quadraticCurveTo(-1.3*V,-1.5*V,-.95*V,-1.52*V),l.quadraticCurveTo(0,-1.6*V,.95*V,-1.52*V),l.quadraticCurveTo(1.3*V,-1.5*V,1.3*V,-1.15*V),l.lineTo(1.38*V,.2*V),l.bezierCurveTo(1.6*V,.3*V,2.4*V,.5*V,3.5*V,.75*V),l.lineTo(3.5*V,1.2*V),l.lineTo(-3.5*V,1.2*V),l.closePath(),l.fill(),l.restore()}function C(L,k,B){if(k<=.02||L[1]>1040)return;let[V,st,rt,ot]=L;l.save(),l.translate(V,st),l.rotate(ot*Math.PI/180);let Tt=.76*rt;E(-.5*rt,0,Tt,Tt*B[0],k,!1),E(.5*rt,0,Tt,Tt*B[1],k,!0),l.restore()}function E(L,k,B,V,st,rt){l.save(),l.translate(L,k),rt&&l.scale(-1,1),l.rotate(16*Math.PI/180),l.save(),l.scale(1,.62);let ot=l.createRadialGradient(0,-.08*B,.1*B,0,-.08*B,.78*B);ot.addColorStop(0,`rgba(255,128,88,${.75*st})`),ot.addColorStop(.42,`rgba(214,72,42,${.42*st})`),ot.addColorStop(1,"rgba(120,36,22,0)"),l.fillStyle=ot,l.fillRect(-.8*B,-.9*B,1.6*B,1.6*B),l.restore(),l.scale(1,Math.max(.04,st)),l.beginPath(),l.moveTo(-.5*B,.02*V),l.bezierCurveTo(-.4*B,-.78*V,.22*B,-.66*V,.5*B,.2*V),l.bezierCurveTo(.12*B,.42*V,-.3*B,.48*V,-.47*B,.3*V),l.quadraticCurveTo(-.56*B,.18*V,-.5*B,.02*V),l.closePath(),l.fillStyle="#fdf9f8",l.fill(),l.restore()}function T(L,k,B,V,st,rt,ot){if(ot<=.01)return;let Tt=V*Math.PI/180,Ct=st*Math.PI/180,vt=Math.cos(Tt),U=Math.sin(Tt),zt=-U,Pt=vt,z=.4*B,St=.4*B+rt*Math.tan(Ct),Jt=l.createLinearGradient(L,k,L+vt*rt,k+U*rt);for(let[It,A]of ix)Jt.addColorStop(It,A);l.globalAlpha=ot,l.fillStyle=Jt,l.beginPath(),l.moveTo(L+zt*z,k+Pt*z),l.lineTo(L+vt*rt+zt*St,k+U*rt+Pt*St),l.lineTo(L+vt*rt-zt*St,k+U*rt-Pt*St),l.lineTo(L-zt*z,k-Pt*z),l.closePath(),l.fill(),l.globalAlpha=1}function R(L,k,B,V,st,rt=1){if(V<=.01)return;let ot=B/2,Tt=Math.min(1,Math.max(0,(rt-1.3)/4)),Ct=ot*(2.1+1.6*Tt),vt=l.createRadialGradient(L,k,ot*.85,L,k,Ct);if(vt.addColorStop(0,`rgba(255,236,228,${.85*V})`),vt.addColorStop(.35,`rgba(255,170,148,${(.38+.3*Tt)*V})`),vt.addColorStop(1,"rgba(226,116,96,0)"),l.fillStyle=vt,l.beginPath(),l.arc(L,k,Ct,0,Math.PI*2),l.fill(),Tt>0){l.strokeStyle=`rgba(150,72,60,${.1*Tt})`,l.lineWidth=ot*.05;for(let zt of[1.3,1.55,1.85])l.beginPath(),l.arc(L,k,ot*zt,0,Math.PI*2),l.stroke()}l.globalAlpha=V*(1-.6*Tt);let U=ot/58*128;if(l.drawImage(_.specks,L-U,k-U,U*2,U*2),l.globalAlpha=1,Tt>0){let zt=l.createRadialGradient(L,k,ot*.8,L,k,ot*1.18);zt.addColorStop(0,"rgba(255,254,252,1)"),zt.addColorStop(1,"rgba(255,240,234,0)"),l.fillStyle=zt,l.beginPath(),l.arc(L,k,ot*1.18,0,Math.PI*2),l.fill()}else{l.fillStyle=V<1?zs(ri.lampOff,ri.lampOn,V):"#fefefc",l.beginPath(),l.arc(L,k,ot,0,Math.PI*2),l.fill(),l.globalAlpha=V*.45,l.strokeStyle="#7a3628",l.lineWidth=.04*B,l.lineCap="round";let zt=(st+180)*Math.PI/180;for(let Pt of[-.75,-.1,.55])l.beginPath(),l.arc(L,k,.42*B,zt+Pt-.28,zt+Pt+.1),l.stroke();l.globalAlpha=1}}function y(L,k,B){let V=Math.atan2(L[1]-k[1],L[0]-k[0])*180/Math.PI,st=Math.abs(((V-B[0])%360+540)%360-180);return st<B[1]+3?1:st<B[1]+9?1-(st-B[1]-3)/6:0}function v(L){let k=0;for(;k<pl.length-1&&pl[k+1][0]<=L;)k++;let[B,V]=pl[k],st=pl[k+1],rt=tm[V];if(!st)return rt;let[ot,Tt]=st,Ct=Wi.io(Math.min(1,Math.max(0,(L-B)/(ot-B)))),vt=tm[Tt],U={};for(let zt in rt)U[zt]=[ts(rt[zt][0],vt[zt][0],Ct),ts(rt[zt][1],vt[zt][1],Ct)];return U}function I(L,k,B,V){l.beginPath(),l.moveTo(L,k),l.lineTo(B,V),l.stroke()}function N(L,k){l.save(),l.translate(711,594),l.globalAlpha=.55,l.drawImage(_.shadow,-245,79),l.globalAlpha=1,l.fillStyle="#3d190f",l.fillRect(283,17,5,97),l.fillStyle=zs(ri.topDark,ri.topLit,k.desk),l.fillRect(0,0,295,11),l.fillStyle="#892f1c",l.fillRect(0,11,295,6),l.fillStyle="#fee7e3",l.fillRect(158,-1,28,7),l.fillStyle="#5a2016",l.fillRect(109,-3,16,20),l.fillStyle="#3d190f";for(let St of[28,50,84,104])l.fillRect(St,98,3,62);l.fillStyle=zs(ri.chairDark,ri.chairLit,k.fig),S(l,20,17,55,61,10),l.fill(),l.fillRect(24,84,83,14);let B=v(L),V=L>3.6&&L<fn?Math.sin((L-3.6)*12.5)*2.5:0,st=zs(ri.dark,ri.lit,k.fig),rt=zs(ri.dark,ri.legLit,k.fig),ot=St=>St[1]+V;l.lineCap="round",l.lineJoin="round",l.strokeStyle=rt,l.lineWidth=11,I(B.hip[0],ot(B.hip),B.knee[0],ot(B.knee)),l.lineWidth=7,I(B.knee[0],ot(B.knee),B.ankle[0],ot(B.ankle)),l.fillStyle="#2a0f09",l.beginPath(),l.ellipse(B.ankle[0]+5,ot(B.ankle)+2,7,3,0,0,Math.PI*2),l.fill();let Tt=B.sh[0],Ct=ot(B.sh),vt=B.hip[0],U=ot(B.hip),zt=Math.hypot(vt-Tt,U-Ct)||1,Pt=-(U-Ct)/zt,z=(vt-Tt)/zt;l.fillStyle=st,l.beginPath(),l.moveTo(Tt+Pt*10,Ct+z*10),l.lineTo(vt+Pt*8,U+z*8),l.lineTo(vt-Pt*8,U-z*8),l.lineTo(Tt-Pt*10,Ct-z*10),l.closePath(),l.fill(),l.strokeStyle=st,l.lineWidth=6,I(Tt,Ct,B.el2[0],ot(B.el2)),l.lineWidth=5,I(B.el2[0],ot(B.el2),B.ha2[0],ot(B.ha2)),l.lineWidth=6,I(Tt,Ct,B.el[0],ot(B.el)),l.lineWidth=5,I(B.el[0],ot(B.el),B.ha[0],ot(B.ha)),I(Tt,Ct,B.head[0],ot(B.head)),l.beginPath(),l.arc(B.head[0],ot(B.head),7.5,0,Math.PI*2),l.fill(),l.fillStyle=zs(ri.hairDark,ri.hairLit,k.fig),l.beginPath(),l.arc(B.head[0]-5,ot(B.head)-4,4,0,Math.PI*2),l.fill(),k.fig<.5&&(l.strokeStyle=`rgba(232,160,140,${.8*(1-k.fig*2)})`,l.lineWidth=1.5,I(Tt+9,Ct,vt+7,U)),l.fillStyle="#3d190f",l.fillRect(-4,17,8,92),l.fillRect(290,17,7,114),l.restore()}let H=Array.from({length:320},(L,k)=>({a:k/320*Math.PI*2+Math.random()*.3,f:1.5+Math.random()*3,r:.6+Math.random()*1.4,c:Math.random()<.5?"#d27a62":"#f0a088"}));function X(L,k){if(L<1.9||L>2.36)return;let B=Wi.out2(Math.min(1,(L-1.9)/.45)),V=L<1.98?(L-1.9)/.08*.9:.9*(1-(L-1.98)/.38),st=k[2]/2;l.globalAlpha=Math.max(0,V);for(let rt of H){let ot=st*(1.2+(rt.f-1.2)*B);l.fillStyle=rt.c,l.fillRect(k[0]+Math.cos(rt.a)*ot-20*B,k[1]+Math.sin(rt.a)*ot-25*B,rt.r,rt.r)}l.globalAlpha=1}function Q(L){let k=L<=fn?1:1+5*Wi.in2(Math.min(1,(L-fn)/.12)),B=1+(k-1)*.6,V=k,st=1+(k-1)*1.6,rt=fi(Z_,L,Wi.out3);l.setTransform(1,0,0,1,0,0),l.fillStyle="#3e1d14",l.fillRect(0,0,i.width,i.height),M(rt,Gi,B,jr);let ot=l.createRadialGradient(820,560,0,820,560,620);ot.addColorStop(0,"#742a16"),ot.addColorStop(1,"rgba(116,42,22,0)"),l.fillStyle=ot,l.fillRect(200,-60,1240,1240);let Tt=l.createLinearGradient(0,690,0,900);Tt.addColorStop(0,"rgba(30,12,8,0)"),Tt.addColorStop(1,"rgba(30,12,8,0.25)"),l.fillStyle=Tt,l.fillRect(-400,690,2400,600),M(1,Gi,st,jr);let Ct=fi(Q_,L),vt=fi(j_,L),U=Math.min(1,Math.max(0,(L-1.2)/.15)),zt=Math.min(1,Math.max(0,(L-1.45)/.15));l.globalAlpha=zt,x(vt),l.globalAlpha=U,x(Ct),l.globalAlpha=.45,M(rt,Gi,B,jr);let[Pt,z,St]=fi(nx,L),Jt=(z-Pt)/600,It=(St+300)/600;l.drawImage(_.pillar,Pt-80*Jt,-300-80*It,760*Jt,760*It),l.globalAlpha=1;let A,b,q=1;if(L<1.03){q=Math.exp(2.95*(1-Wi.out2(Math.min(1,Math.max(0,(L-.08)/1.05)))));let Ht=Wi.io(Math.min(1,Math.max(0,(L-.05)/.75)));A=[ts(906,1370,Ht),ts(434,510,Ht),58*q],b=fi(jp,L,Wi.out2)}else A=fi($_,L),b=fi(jp,L);let et=fi(J_,L,Wi.out2),nt=fi(K_,L),tt=L<1.9?0:Math.min(1,.35+.65*(L-1.9)/.13),dt=(Ht,lt)=>[Gi.x+(711+Ht-Gi.x)*rt,Gi.y+(594+lt-Gi.y)*rt],ht=Ht=>Math.min(1,y(Ht,A,b)+(tt>.5?y(Ht,et,nt):0)),gt={fig:ht(dt(90,20)),desk:Math.max(ht(dt(150,4)),ht(dt(260,0)))};M(rt,Gi,V,jr),N(L,gt),M(1,Gi,st,jr),l.globalCompositeOperation="screen",T(A[0],A[1],A[2],b[0],b[1],700*q,1),T(et[0],et[1],et[2],nt[0],nt[1],700,tt),l.globalCompositeOperation="source-over",R(A[0],A[1],A[2],1,b[0],q),R(et[0],et[1],et[2],tt,nt[0]),X(L,et),l.globalAlpha=zt,C(vt,fi(ex,L),[.29,.38]),l.globalAlpha=U,C(Ct,fi(tx,L),[.45,.29]),l.globalAlpha=1}let Z={tau:0},J=-1,W=jt.parseEase("power4.inOut"),j=()=>{let L=Z.tau>=fn?100:Math.round(100*W(Math.min(1,(Z.tau+.78)/6.48)));L!==J&&(J=L,a.textContent=L)},P=()=>{Q(Z.tau),j()};m(),window.addEventListener("resize",m),jt.ticker.add(P);let at=()=>{jt.ticker.remove(P),window.removeEventListener("resize",m),r.remove(),n&&n()};if(t){Z.tau=2.33,P(),jt.set(s,{opacity:0}),jt.timeline({delay:.5}).to(r,{opacity:0,duration:.5}).add(()=>{e&&e(),at()});return}let At=()=>{let L=o.getBoundingClientRect();return`${d+jr.x*u-L.left}px ${g+jr.y*u-L.top}px`},Nt=jt.timeline();return Nt.set(s,{opacity:0,backgroundColor:"#6a241a"}).fromTo(o,{y:60,opacity:0,filter:"blur(6px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"expo.out"},0).to(Z,{tau:Bh,duration:Bh,ease:"none"},0).add(()=>{jt.to(o,{scale:6,opacity:0,transformOrigin:At(),duration:.12,ease:"power2.in"})},fn).set(s,{opacity:1},fn+.12).to(s,{backgroundColor:"#c23f29",duration:.17,ease:"power1.in"},fn+.12).add(()=>{e&&e()},4.78).to(s,{opacity:0,duration:.07,ease:"none"},4.9).add(at,Bh),Nt}function rx(){let r=document.createElement("canvas");r.width=r.height=160;let t=r.getContext("2d"),e=t.createImageData(160,160);for(let n=0;n<e.data.length;n+=4){let i=Math.random()*255;e.data[n]=e.data[n+1]=e.data[n+2]=i,e.data[n+3]=255}return t.putImageData(e,0,0),r}function ml(r,t,e,n,i=[]){let a=e*.8*(1-.42*r)/18;for(let l=0;l<18;l++){let c=l/17,h=.975-c*.8,f=Math.max(0,h-r*1.02)*t,u=Math.max(0,a*(.84-c*.66)*(1-.35*r)),d=i[l]||(i[l]={x:0,y:0,w:0,h:0});d.w=f,d.h=f>0?u:0,d.x=(t-f)/2,d.y=n+l*a+2}return i}var sx=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,ox=`
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
`,gl=class{constructor(t){this.canvas=t,this.state={mix:0,heroBottom:1,warp:1,reveal:0},this.bars=new Float32Array(72);let e=t.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!e){this.failed=!0,t.classList.add("is-fallback");return}this.gl=e;let n=e.createProgram(),i=(l,c)=>{let h=e.createShader(l);if(e.shaderSource(h,c),e.compileShader(h),!e.getShaderParameter(h,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(h));e.attachShader(n,h)};try{if(i(e.VERTEX_SHADER,sx),i(e.FRAGMENT_SHADER,ox),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n))}catch(l){console.warn("[hero] shader failed, using CSS fallback",l),this.failed=!0,t.classList.add("is-fallback");return}e.useProgram(n);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let o=e.getAttribLocation(n,"aPos");e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0);let a=l=>e.getUniformLocation(n,l);this.u={res:a("uRes"),dpr:a("uDpr"),time:a("uTime"),mix:a("uMix"),heroBottom:a("uHeroBottom"),warp:a("uWarp"),reveal:a("uReveal"),black:a("uBlack"),bars:a("uBars")},e.uniform3f(this.u.black,11/255,11/255,12/255),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=Math.max(.75,Math.min(window.devicePixelRatio||1,1.25,Math.sqrt(22e5/(t*e))));this.w=t,this.h=e,this.dpr=n,this.canvas.width=Math.round(t*n),this.canvas.height=Math.round(e*n),this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}setBars(t){for(let e=0;e<18;e++){let n=t[e];this.bars[e*4]=n?n.x:0,this.bars[e*4+1]=n?n.y:0,this.bars[e*4+2]=n?n.w:0,this.bars[e*4+3]=n?n.h:0}}render(t){if(this.failed)return;let{gl:e,u:n,state:i}=this;e.uniform2f(n.res,this.canvas.width/this.dpr,this.canvas.height/this.dpr),e.uniform1f(n.dpr,this.dpr),e.uniform1f(n.time,t),e.uniform1f(n.mix,i.mix),e.uniform1f(n.heroBottom,i.heroBottom*this.h),e.uniform1f(n.warp,i.warp),e.uniform1f(n.reveal,i.reveal),e.uniform4fv(n.bars,this.bars),e.drawArrays(e.TRIANGLES,0,3)}};var ax=0,em=1,lx=2;var ag=1,cx=2,Ji=3,Rr=0,gn=1,gi=2,Ar=0,io=1,nm=2,im=3,rm=4,hx=5,ls=100,ux=101,fx=102,dx=103,px=104,mx=200,gx=201,_x=202,xx=203,gu=204,_u=205,vx=206,yx=207,Mx=208,Sx=209,bx=210,wx=211,Tx=212,Ex=213,Ax=214,xu=0,vu=1,yu=2,ao=3,Mu=4,Su=5,bu=6,wu=7,lg=0,Cx=1,Rx=2,Cr=0,Px=1,Ix=2,Lx=3,Lf=4,Dx=5,Ux=6,Nx=7;var cg=300,lo=301,co=302,Tu=303,Eu=304,fc=306,Au=1e3,us=1001,Cu=1002,xi=1003,Ox=1004;var _l=1005;var Ri=1006,kh=1007;var fs=1008;var er=1009,hg=1010,ug=1011,xa=1012,Df=1013,ds=1014,Qi=1015,wa=1016,Uf=1017,Nf=1018,ho=1020,fg=35902,dg=1021,pg=1022,_i=1023,mg=1024,gg=1025,ro=1026,uo=1027,_g=1028,Of=1029,xg=1030,Ff=1031;var Bf=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Ru=35840,Pu=35841,Iu=35842,Lu=35843,Du=36196,Uu=37492,Nu=37496,Ou=37808,Fu=37809,Bu=37810,zu=37811,ku=37812,Vu=37813,Hu=37814,Gu=37815,Wu=37816,Xu=37817,qu=37818,Yu=37819,Zu=37820,$u=37821,Xl=36492,Ju=36494,Ku=36495,vg=36283,Qu=36284,ju=36285,tf=36286;var ql=2300,ef=2301,Vh=2302,sm=2400,om=2401,am=2402;var Fx=3200,Bx=3201;var yg=0,zx=1,Er="",Nn="srgb",Mo="srgb-linear",dc="linear",ve="srgb";var Vs=7680;var lm=519,kx=512,Vx=513,Hx=514,Mg=515,Gx=516,Wx=517,Xx=518,qx=519,cm=35044;var hm="300 es",ji=2e3,Yl=2001,Pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],um=1234567,ma=Math.PI/180,va=180/Math.PI;function So(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Cn(r,t,e){return Math.max(t,Math.min(e,r))}function zf(r,t){return(r%t+t)%t}function Yx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Zx(r,t,e){return r!==t?(e-r)/(t-r):0}function ga(r,t,e){return(1-e)*r+e*t}function $x(r,t,e,n){return ga(r,t,1-Math.exp(-e*n))}function Jx(r,t=1){return t-Math.abs(zf(r,t*2)-t)}function Kx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Qx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function jx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function tv(r,t){return r+Math.random()*(t-r)}function ev(r){return r*(.5-Math.random())}function nv(r){r!==void 0&&(um=r);let t=um+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iv(r){return r*ma}function rv(r){return r*va}function sv(r){return(r&r-1)===0&&r!==0}function ov(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function av(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lv(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function eo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var bo={DEG2RAD:ma,RAD2DEG:va,generateUUID:So,clamp:Cn,euclideanModulo:zf,mapLinear:Yx,inverseLerp:Zx,lerp:ga,damp:$x,pingpong:Jx,smoothstep:Kx,smootherstep:Qx,randInt:jx,randFloat:tv,randFloatSpread:ev,seededRandom:nv,degToRad:iv,radToDeg:rv,isPowerOfTwo:sv,ceilPowerOfTwo:ov,floorPowerOfTwo:av,setQuaternionFromProperEuler:lv,normalize:En,denormalize:eo},de=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],M=i[4],x=i[7],C=i[2],E=i[5],T=i[8];return s[0]=o*_+a*S+l*C,s[3]=o*m+a*M+l*E,s[6]=o*p+a*x+l*T,s[1]=c*_+h*S+f*C,s[4]=c*m+h*M+f*E,s[7]=c*p+h*x+f*T,s[2]=u*_+d*S+g*C,s[5]=u*m+d*M+g*E,s[8]=u*p+d*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hh.makeScale(t,e)),this}rotate(t){return this.premultiply(Hh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hh=new te;function Sg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cv(){let r=Zl("canvas");return r.style.display="block",r}var fm={};function da(r){r in fm||(fm[r]=!0,console.warn(r))}function hv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function uv(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fv(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=so(r.r),r.g=so(r.g),r.b=so(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?dc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var dm=[.64,.33,.3,.6,.15,.06],pm=[.2126,.7152,.0722],mm=[.3127,.329],gm=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[Mo]:{primaries:dm,whitePoint:mm,transfer:dc,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:dm,whitePoint:mm,transfer:ve,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}});var Hs,nf=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=Zl("canvas")),Hs.width=t.width,Hs.height=t.height;let n=Hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(tr(e[n]/255)*255):e[n]=tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dv=0,$l=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=So(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gh(i[o].image)):s.push(Gh(i[o]))}else s=Gh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Gh(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?nf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pv=0,li=class r extends Pr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=us,i=us,s=Ri,o=fs,a=_i,l=er,c=r.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=So(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Au:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Cu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Au:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Cu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=cg;li.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(d+1)/2,C=(p+1)/2,E=(h+u)/4,T=(f+_)/4,R=(g+m)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=T/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rf=class extends Pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new li(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $l(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nr=class extends rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jl=class extends li{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xi,this.minFilter=xi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sf=class extends li{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xi,this.minFilter=xi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let m=1-a,p=l*u+c*d+h*g+f*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),E=Math.atan2(C,p*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let x=a*S;if(l=l*m+u*x,c=c*m+d*x,h=h*m+g*x,f=f*m+_*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wh.copy(this).projectOnVector(t),this.sub(Wh)}reflect(t){return this.sub(Wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wh=new G,xm=new Ir,ps=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(t.matrixWorld),this.union(xl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),vl.subVectors(this.max,la),Gs.subVectors(t.a,la),Ws.subVectors(t.b,la),Xs.subVectors(t.c,la),yr.subVectors(Ws,Gs),Mr.subVectors(Xs,Ws),es.subVectors(Gs,Xs);let e=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-es.z,es.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,es.z,0,-es.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-es.y,es.x,0];return!Xh(e,Gs,Ws,Xs,vl)||(e=[1,0,0,0,1,0,0,0,1],!Xh(e,Gs,Ws,Xs,vl))?!1:(yl.crossVectors(yr,Mr),e=[yl.x,yl.y,yl.z],Xh(e,Gs,Ws,Xs,vl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xi=[new G,new G,new G,new G,new G,new G,new G,new G],di=new G,xl=new ps,Gs=new G,Ws=new G,Xs=new G,yr=new G,Mr=new G,es=new G,la=new G,vl=new G,yl=new G,ns=new G;function Xh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ns.fromArray(r,s);let a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mv=new ps,ca=new G,qh=new G,fo=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);let e=ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(qh)),this.expandByPoint(ca.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new G,Yh=new G,Ml=new G,Sr=new G,Zh=new G,Sl=new G,$h=new G,Kl=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yh.copy(t).add(e).multiplyScalar(.5),Ml.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(Yh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ml),a=Sr.dot(this.direction),l=-Sr.dot(Ml),c=Sr.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Yh).addScaledVector(Ml,u),d}intersectSphere(t,e){qi.subVectors(t.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,n,i,s){Zh.subVectors(e,t),Sl.subVectors(n,t),$h.crossVectors(Zh,Sl);let o=this.direction.dot($h),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,t);let l=a*this.direction.dot(Sl.crossVectors(Sr,Sl));if(l<0)return null;let c=a*this.direction.dot(Zh.cross(Sr));if(c<0||l+c>o)return null;let h=-a*Sr.dot($h);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/qs.setFromMatrixColumn(t,0).length(),s=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gv,t,_v)}lookAt(t,e,n){let i=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),br.crossVectors(n,Xn),br.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),br.crossVectors(n,Xn)),br.normalize(),bl.crossVectors(Xn,br),i[0]=br.x,i[4]=bl.x,i[8]=Xn.x,i[1]=br.y,i[5]=bl.y,i[9]=Xn.y,i[2]=br.z,i[6]=bl.z,i[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],C=n[15],E=i[0],T=i[4],R=i[8],y=i[12],v=i[1],I=i[5],N=i[9],H=i[13],X=i[2],Q=i[6],Z=i[10],J=i[14],W=i[3],j=i[7],P=i[11],at=i[15];return s[0]=o*E+a*v+l*X+c*W,s[4]=o*T+a*I+l*Q+c*j,s[8]=o*R+a*N+l*Z+c*P,s[12]=o*y+a*H+l*J+c*at,s[1]=h*E+f*v+u*X+d*W,s[5]=h*T+f*I+u*Q+d*j,s[9]=h*R+f*N+u*Z+d*P,s[13]=h*y+f*H+u*J+d*at,s[2]=g*E+_*v+m*X+p*W,s[6]=g*T+_*I+m*Q+p*j,s[10]=g*R+_*N+m*Z+p*P,s[14]=g*y+_*H+m*J+p*at,s[3]=S*E+M*v+x*X+C*W,s[7]=S*T+M*I+x*Q+C*j,s[11]=S*R+M*N+x*Z+C*P,s[15]=S*y+M*H+x*J+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+_*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+m*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=f*m*c-_*u*c+_*l*d-a*m*d-f*l*p+a*u*p,M=g*u*c-h*m*c-g*l*d+o*m*d+h*l*p-o*u*p,x=h*_*c-g*f*c+g*a*d-o*_*d-h*a*p+o*f*p,C=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,E=e*S+n*M+i*x+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=S*T,t[1]=(_*u*s-f*m*s-_*i*d+n*m*d+f*i*p-n*u*p)*T,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*T,t[4]=M*T,t[5]=(h*m*s-g*u*s+g*i*d-e*m*d-h*i*p+e*u*p)*T,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(g*f*s-h*_*s-g*n*d+e*_*d+h*n*p-e*f*p)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(h*_*i-g*f*i+g*n*u-e*_*u-h*n*m+e*f*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,g=s*f,_=o*h,m=o*f,p=a*f,S=l*c,M=l*h,x=l*f,C=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+x)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+M)*T,i[9]=(m-S)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=qs.set(i[0],i[1],i[2]).length(),o=qs.set(i[4],i[5],i[6]).length(),a=qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pi.copy(this);let c=1/s,h=1/o,f=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,e.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=ji){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,g;if(a===ji)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Yl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ji){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h,g,_;if(a===ji)g=(o+s)*f,_=-2*f;else if(a===Yl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qs=new G,pi=new Ue,gv=new G(0,0,0),_v=new G(1,1,1),br=new G,bl=new G,Xn=new G,vm=new Ue,ym=new Ir,Pi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ym.setFromEuler(this),this.setFromQuaternion(ym,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Ql=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xv=0,Mm=new G,Ys=new Ir,Yi=new Ue,wl=new G,ha=new G,vv=new G,yv=new Ir,Sm=new G(1,0,0),bm=new G(0,1,0),wm=new G(0,0,1),Tm={type:"added"},Mv={type:"removed"},Zs={type:"childadded",child:null},Jh={type:"childremoved",child:null},Rn=class r extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new G,e=new Pi,n=new Ir,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new te}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Sm,t)}rotateY(t){return this.rotateOnAxis(bm,t)}rotateZ(t){return this.rotateOnAxis(wm,t)}translateOnAxis(t,e){return Mm.copy(t).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sm,t)}translateY(t){return this.translateOnAxis(bm,t)}translateZ(t){return this.translateOnAxis(wm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wl.copy(t):wl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ha,wl,this.up):Yi.lookAt(wl,ha,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tm),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mv),Jh.child=t,this.dispatchEvent(Jh),Jh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tm),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,vv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,yv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Rn.DEFAULT_UP=new G(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new G,Zi=new G,Kh=new G,$i=new G,$s=new G,Js=new G,Em=new G,Qh=new G,jh=new G,tu=new G,eu=new ye,nu=new ye,iu=new ye,cs=class r{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mi.subVectors(t,e),i.cross(mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mi.subVectors(i,e),Zi.subVectors(n,e),Kh.subVectors(t,e);let o=mi.dot(mi),a=mi.dot(Zi),l=mi.dot(Kh),c=Zi.dot(Zi),h=Zi.dot(Kh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return eu.setScalar(0),nu.setScalar(0),iu.setScalar(0),eu.fromBufferAttribute(t,e),nu.fromBufferAttribute(t,n),iu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(eu,s.x),o.addScaledVector(nu,s.y),o.addScaledVector(iu,s.z),o}static isFrontFacing(t,e,n,i){return mi.subVectors(n,e),Zi.subVectors(t,e),mi.cross(Zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),mi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;$s.subVectors(i,n),Js.subVectors(s,n),Qh.subVectors(t,n);let l=$s.dot(Qh),c=Js.dot(Qh);if(l<=0&&c<=0)return e.copy(n);jh.subVectors(t,i);let h=$s.dot(jh),f=Js.dot(jh);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($s,o);tu.subVectors(t,s);let d=$s.dot(tu),g=Js.dot(tu);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Js,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Em.subVectors(s,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(Em,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector($s,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function ru(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=zf(t,1),e=Cn(e,0,1),n=Cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ru(o,s,t+1/3),this.g=ru(o,s,t),this.b=ru(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){let n=bg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return he.fromWorkingColorSpace(pn.copy(this),t),Math.round(Cn(pn.r*255,0,255))*65536+Math.round(Cn(pn.g*255,0,255))*256+Math.round(Cn(pn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Nn){he.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,i=pn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wr),this.setHSL(wr.h+t,wr.s+e,wr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wr),t.getHSL(Tl);let n=ga(wr.h,Tl.h,e),i=ga(wr.s,Tl.s,e),s=ga(wr.l,Tl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new re;re.NAMES=bg;var Sv=0,Lr=class extends Pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=So(),this.name="",this.blending=io,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(n.blending=this.blending),this.side!==Rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},po=class extends Lr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new G,El=new de,ai=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cm,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)El.fromBufferAttribute(this,e),El.applyMatrix3(t),this.setXY(e,El.x,El.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cm&&(t.usage=this.usage),t}};var jl=class extends ai{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tc=class extends ai{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xe=class extends ai{constructor(t,e,n){super(new Float32Array(t),e,n)}},bv=0,si=new Ue,su=new Rn,Ks=new G,qn=new ps,ua=new ps,tn=new G,Yn=class r extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sg(t)?tc:jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return su.lookAt(t),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(qn.min,ua.min),qn.expandByPoint(tn),tn.addVectors(qn.max,ua.max),qn.expandByPoint(tn)):(qn.expandByPoint(ua.min),qn.expandByPoint(ua.max))}qn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)tn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(tn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),tn.add(Ks)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new G,l[R]=new G;let c=new G,h=new G,f=new G,u=new de,d=new de,g=new de,_=new G,m=new G;function p(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,v),u.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(_),a[y].add(_),a[v].add(_),l[R].add(m),l[y].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){let v=S[R],I=v.start,N=v.count;for(let H=I,X=I+N;H<X;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let M=new G,x=new G,C=new G,E=new G;function T(R){C.fromBufferAttribute(i,R),E.copy(C);let y=a[R];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(E,y);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,y=S.length;R<y;++R){let v=S[R],I=v.start,N=v.count;for(let H=I,X=I+N;H<X;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new ai(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Am=new Ue,is=new Kl,Al=new fo,Cm=new G,Cl=new G,Rl=new G,Pl=new G,ou=new G,Il=new G,Rm=new G,Ll=new G,ce=class extends Rn{constructor(t=new Yn,e=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(ou.fromBufferAttribute(f,t),o?Il.addScaledVector(ou,h):Il.addScaledVector(ou.sub(e),h))}e.add(Il)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),is.copy(t.ray).recast(t.near),!(Al.containsPoint(is.origin)===!1&&(is.intersectSphere(Al,Cm)===null||is.origin.distanceToSquared(Cm)>(t.far-t.near)**2))&&(Am.copy(s).invert(),is.copy(t.ray).applyMatrix4(Am),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=M;x<C;x+=3){let E=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=Dl(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=Dl(this,o,t,n,c,h,f,S,M,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=M;x<C;x+=3){let E=x,T=x+1,R=x+2;i=Dl(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,M=m+1,x=m+2;i=Dl(this,o,t,n,c,h,f,S,M,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function wv(r,t,e,n,i,s,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Rr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ll);return c<e.near||c>e.far?null:{distance:c,point:Ll.clone(),object:r}}function Dl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Cl),r.getVertexPosition(l,Rl),r.getVertexPosition(c,Pl);let h=wv(r,t,e,n,Cl,Rl,Pl,Rm);if(h){let f=new G;cs.getBarycoord(Rm,Cl,Rl,Pl,f),i&&(h.uv=cs.getInterpolatedAttribute(i,a,l,c,f,new de)),s&&(h.uv1=cs.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(h.normal=cs.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};cs.getNormal(Cl,Rl,Pl,u.normal),h.face=u,h.barycoord=f}return h}var ir=class r extends Yn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function g(_,m,p,S,M,x,C,E,T,R,y){let v=x/T,I=C/R,N=x/2,H=C/2,X=E/2,Q=T+1,Z=R+1,J=0,W=0,j=new G;for(let P=0;P<Z;P++){let at=P*I-H;for(let At=0;At<Q;At++){let Nt=At*v-N;j[_]=Nt*S,j[m]=at*M,j[p]=X,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=E>0?1:-1,h.push(j.x,j.y,j.z),f.push(At/T),f.push(1-P/R),J+=1}}for(let P=0;P<R;P++)for(let at=0;at<T;at++){let At=u+at+Q*P,Nt=u+at+Q*(P+1),L=u+(at+1)+Q*(P+1),k=u+(at+1)+Q*P;l.push(At,Nt,k),l.push(Nt,L,k),W+=6}a.addGroup(d,W,y),d+=W,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mo(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function An(r){let t={};for(let e=0;e<r.length;e++){let n=mo(r[e]);for(let i in n)t[i]=n[i]}return t}function Tv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wg(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ev={clone:mo,merge:An},Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ii=class extends Lr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mo(t.uniforms),this.uniformsGroups=Tv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ec=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tr=new G,Pm=new de,Im=new de,mn=class extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z)}getViewSize(t,e){return this.getViewBounds(t,Pm,Im),e.subVectors(Im,Pm)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,js=1,of=class extends Rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mn(Qs,js,t,e);i.layers=this.layers,this.add(i);let s=new mn(Qs,js,t,e);s.layers=this.layers,this.add(s);let o=new mn(Qs,js,t,e);o.layers=this.layers,this.add(o);let a=new mn(Qs,js,t,e);a.layers=this.layers,this.add(a);let l=new mn(Qs,js,t,e);l.layers=this.layers,this.add(l);let c=new mn(Qs,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nc=class extends li{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:lo,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},af=class extends nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ir(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ar});s.uniforms.tEquirect.value=e;let o=new ce(i,s),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Ri),new of(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},au=new G,Rv=new G,Pv=new te,Ki=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=au.subVectors(n,e).cross(Rv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pv.getNormalMatrix(t),i=this.coplanarPoint(au).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new fo,Ul=new G,ya=class{constructor(t=new Ki,e=new Ki,n=new Ki,i=new Ki,s=new Ki,o=new Ki){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ji){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,u-c,m-d,x-p).normalize(),n[1].setComponents(l+s,u+c,m+d,x+p).normalize(),n[2].setComponents(l+o,u+h,m+g,x+S).normalize(),n[3].setComponents(l-o,u-h,m-g,x-S).normalize(),n[4].setComponents(l-a,u-f,m-_,x-M).normalize(),e===ji)n[5].setComponents(l+a,u+f,m+_,x+M).normalize();else if(e===Yl)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ul.x=i.normal.x>0?t.max.x:t.min.x,Ul.y=i.normal.y>0?t.max.y:t.min.y,Ul.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tg(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Iv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var go=class r extends Yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let M=0;M<c;M++){let x=M*f-s;g.push(x,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),E=S+1+c*p;d.push(M,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
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
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
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
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
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
#endif`,qv=`#ifdef USE_BUMPMAP
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iy=`vec3 transformedNormal = objectNormal;
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
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#endif`,Py=`struct PhysicalMaterial {
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
}`,Iy=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,By=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
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
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g1=`float getShadowMask() {
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
}`,_1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`#include <common>
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
}`,B1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,k1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#define LAMBERT
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
}`,Z1=`#define LAMBERT
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
}`,$1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,nM=`#define STANDARD
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
}`,iM=`#define TOON
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
}`,rM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Lv,alphahash_pars_fragment:Dv,alphamap_fragment:Uv,alphamap_pars_fragment:Nv,alphatest_fragment:Ov,alphatest_pars_fragment:Fv,aomap_fragment:Bv,aomap_pars_fragment:zv,batching_pars_vertex:kv,batching_vertex:Vv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Wv,iridescence_fragment:Xv,bumpmap_pars_fragment:qv,clipping_planes_fragment:Yv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:$v,clipping_planes_vertex:Jv,color_fragment:Kv,color_pars_fragment:Qv,color_pars_vertex:jv,color_vertex:ty,common:ey,cube_uv_reflection_fragment:ny,defaultnormal_vertex:iy,displacementmap_pars_vertex:ry,displacementmap_vertex:sy,emissivemap_fragment:oy,emissivemap_pars_fragment:ay,colorspace_fragment:ly,colorspace_pars_fragment:cy,envmap_fragment:hy,envmap_common_pars_fragment:uy,envmap_pars_fragment:fy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:wy,envmap_vertex:py,fog_vertex:my,fog_pars_vertex:gy,fog_fragment:_y,fog_pars_fragment:xy,gradientmap_pars_fragment:vy,lightmap_pars_fragment:yy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:by,lights_toon_fragment:Ty,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ay,lights_phong_pars_fragment:Cy,lights_physical_fragment:Ry,lights_physical_pars_fragment:Py,lights_fragment_begin:Iy,lights_fragment_maps:Ly,lights_fragment_end:Dy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Fy,map_fragment:By,map_pars_fragment:zy,map_particle_fragment:ky,map_particle_pars_fragment:Vy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Wy,morphcolor_vertex:Xy,morphnormal_vertex:qy,morphtarget_pars_vertex:Yy,morphtarget_vertex:Zy,normal_fragment_begin:$y,normal_fragment_maps:Jy,normal_pars_fragment:Ky,normal_pars_vertex:Qy,normal_vertex:jy,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:n1,clearcoat_pars_fragment:i1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:a1,project_vertex:l1,dithering_fragment:c1,dithering_pars_fragment:h1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:d1,shadowmap_pars_vertex:p1,shadowmap_vertex:m1,shadowmask_pars_fragment:g1,skinbase_vertex:_1,skinning_pars_vertex:x1,skinning_vertex:v1,skinnormal_vertex:y1,specularmap_fragment:M1,specularmap_pars_fragment:S1,tonemapping_fragment:b1,tonemapping_pars_fragment:w1,transmission_fragment:T1,transmission_pars_fragment:E1,uv_pars_fragment:A1,uv_pars_vertex:C1,uv_vertex:R1,worldpos_vertex:P1,background_vert:I1,background_frag:L1,backgroundCube_vert:D1,backgroundCube_frag:U1,cube_vert:N1,cube_frag:O1,depth_vert:F1,depth_frag:B1,distanceRGBA_vert:z1,distanceRGBA_frag:k1,equirect_vert:V1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:W1,meshbasic_vert:X1,meshbasic_frag:q1,meshlambert_vert:Y1,meshlambert_frag:Z1,meshmatcap_vert:$1,meshmatcap_frag:J1,meshnormal_vert:K1,meshnormal_frag:Q1,meshphong_vert:j1,meshphong_frag:tM,meshphysical_vert:eM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:hM},Mt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ci={basic:{uniforms:An([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:An([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:An([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:An([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:An([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:An([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:An([Mt.points,Mt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:An([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:An([Mt.common,Mt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:An([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:An([Mt.sprite,Mt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:An([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:An([Mt.lights,Mt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ci.physical={uniforms:An([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Nl={r:0,b:0,g:0},ss=new Pi,uM=new Ue;function fM(r,t,e,n,i,s,o){let a=new re(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function _(S){let M=!1,x=g(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,M){let x=g(M);x&&(x.isCubeTexture||x.mapping===fc)?(h===void 0&&(h=new ce(new ir(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:mo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ss.copy(M.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(ss)),h.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,(f!==x||u!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ce(new go(2,2),new Ii({name:"BackgroundMaterial",uniforms:mo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Nl,wg(r)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function dM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(v,I,N,H,X){let Q=!1,Z=f(H,N,I);s!==Z&&(s=Z,c(s.object)),Q=d(v,H,N,X),Q&&g(v,H,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(v,I,N,H),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function f(v,I,N){let H=N.wireframe===!0,X=n[v.id];X===void 0&&(X={},n[v.id]=X);let Q=X[I.id];Q===void 0&&(Q={},X[I.id]=Q);let Z=Q[H];return Z===void 0&&(Z=u(l()),Q[H]=Z),Z}function u(v){let I=[],N=[],H=[];for(let X=0;X<e;X++)I[X]=0,N[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:H,object:v,attributes:{},index:null}}function d(v,I,N,H){let X=s.attributes,Q=I.attributes,Z=0,J=N.getAttributes();for(let W in J)if(J[W].location>=0){let P=X[W],at=Q[W];if(at===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),P===void 0||P.attribute!==at||at&&P.data!==at.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function g(v,I,N,H){let X={},Q=I.attributes,Z=0,J=N.getAttributes();for(let W in J)if(J[W].location>=0){let P=Q[W];P===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));let at={};at.attribute=P,P&&P.data&&(at.data=P.data),X[W]=at,Z++}s.attributes=X,s.attributesNum=Z,s.index=H}function _(){let v=s.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let N=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;N[v]=1,H[v]===0&&(r.enableVertexAttribArray(v),H[v]=1),X[v]!==I&&(r.vertexAttribDivisor(v,I),X[v]=I)}function S(){let v=s.newAttributes,I=s.enabledAttributes;for(let N=0,H=I.length;N<H;N++)I[N]!==v[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function M(v,I,N,H,X,Q,Z){Z===!0?r.vertexAttribIPointer(v,I,N,X,Q):r.vertexAttribPointer(v,I,N,H,X,Q)}function x(v,I,N,H){_();let X=H.attributes,Q=N.getAttributes(),Z=I.defaultAttributeValues;for(let J in Q){let W=Q[J];if(W.location>=0){let j=X[J];if(j===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){let P=j.normalized,at=j.itemSize,At=t.get(j);if(At===void 0)continue;let Nt=At.buffer,L=At.type,k=At.bytesPerElement,B=L===r.INT||L===r.UNSIGNED_INT||j.gpuType===Df;if(j.isInterleavedBufferAttribute){let V=j.data,st=V.stride,rt=j.offset;if(V.isInstancedInterleavedBuffer){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,V.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let ot=0;ot<W.locationSize;ot++)M(W.location+ot,at/W.locationSize,L,P,st*k,(rt+at/W.locationSize*ot)*k,B)}else{if(j.isInstancedBufferAttribute){for(let V=0;V<W.locationSize;V++)p(W.location+V,j.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let V=0;V<W.locationSize;V++)m(W.location+V);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let V=0;V<W.locationSize;V++)M(W.location+V,at/W.locationSize,L,P,at*k,at/W.locationSize*V*k,B)}}else if(Z!==void 0){let P=Z[J];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(W.location,P);break;case 3:r.vertexAttrib3fv(W.location,P);break;case 4:r.vertexAttrib4fv(W.location,P);break;default:r.vertexAttrib1fv(W.location,P)}}}}S()}function C(){R();for(let v in n){let I=n[v];for(let N in I){let H=I[N];for(let X in H)h(H[X].object),delete H[X];delete I[N]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let N in I){let H=I[N];for(let X in H)h(H[X].object),delete H[X];delete I[N]}delete n[v.id]}function T(v){for(let I in n){let N=n[I];if(N[v.id]===void 0)continue;let H=N[v.id];for(let X in H)h(H[X].object),delete H[X];delete N[v.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function pM(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==_i&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==er&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function gM(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ki,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let S=s?0:n,M=S*4,x=p.clippingState||null;l.value=x,x=h(g,u,M,d);for(let C=0;C!==M;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _M(r){let t=new WeakMap;function e(o,a){return a===Tu?o.mapping=lo:a===Eu&&(o.mapping=co),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tu||a===Eu)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new af(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ic=class extends ec{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},no=4,Lm=[.125,.215,.35,.446,.526,.582],hs=20,lu=new ic,Dm=new re,cu=null,hu=0,uu=0,fu=!1,as=(1+Math.sqrt(5))/2,to=1/as,Um=[new G(-as,to,0),new G(as,to,0),new G(-to,0,as),new G(to,0,as),new G(0,as,-to),new G(0,as,to),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=fu,t.scissorTest=!1,Ol(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lo||t.mapping===co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:wa,format:_i,colorSpace:Mo,depthBuffer:!1},i=Nm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(s)),this._blurMaterial=vM(s,t,e)}return i}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,lu)}_sceneToCubeUV(t,e,n,i){let a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Dm),h.toneMapping=Cr,h.autoClear=!1;let d=new po({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new ce(new ir,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Dm),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Ol(i,S*M,p>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===lo||t.mapping===co;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ol(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Um[(i-s-1)%Um.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ce(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):hs;m>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);let p=[],S=0;for(let T=0;T<hs;++T){let R=T/_,y=Math.exp(-R*R/2);p.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;let x=this._sizeLods[i],C=3*x*(i>M-no?i-M+no:0),E=4*(this._cubeSize-x);Ol(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(f,lu)}};function xM(r){let t=[],e=[],n=[],i=r,s=r-no+1+Lm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-no?l=Lm[o-r+no-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(y,_*g*E),M.set(u,m*g*E);let v=[E,E,E,E,E,E];x.set(v,p*g*E)}let C=new Yn;C.setAttribute("position",new ai(S,_)),C.setAttribute("uv",new ai(M,m)),C.setAttribute("faceIndex",new ai(x,p)),t.push(C),i>no&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nm(r,t,e){let n=new nr(r,t,e);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ol(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function vM(r,t,e){let n=new Float32Array(hs),i=new G(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Om(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Fm(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function yM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tu||l===Eu,h=l===lo||l===co;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new _o(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new _o(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function MM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function SM(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let M=0,x=S.length;M<x;M+=3){let C=S[M+0],E=S[M+1],T=S[M+2];u.push(C,E,E,T,T,C)}}else if(g!==void 0){let S=g.array;_=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){let C=M+0,E=M+1,T=M+2;u.push(C,E,E,T,T,C)}}else return;let m=new(Sg(u)?tc:jl)(u,1);m.version=_;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function bM(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,u*o,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function wM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function TM(r,t,e){let n=new WeakMap,i=new ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*f),T=new Jl(E,x,C,f);T.type=Qi,T.needsUpdate=!0;let R=M*4;for(let v=0;v<f;v++){let I=m[v],N=p[v],H=S[v],X=x*C*4*v;for(let Q=0;Q<I.count;Q++){let Z=Q*R;d===!0&&(i.fromBufferAttribute(I,Q),E[X+Z+0]=i.x,E[X+Z+1]=i.y,E[X+Z+2]=i.z,E[X+Z+3]=0),g===!0&&(i.fromBufferAttribute(N,Q),E[X+Z+4]=i.x,E[X+Z+5]=i.y,E[X+Z+6]=i.z,E[X+Z+7]=0),_===!0&&(i.fromBufferAttribute(H,Q),E[X+Z+8]=i.x,E[X+Z+9]=i.y,E[X+Z+10]=i.z,E[X+Z+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new de(x,C)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function EM(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var rc=class extends li{constructor(t,e,n,i,s,o,a,l,c,h=ro){if(h!==ro&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ro&&(n=ds),n===void 0&&h===uo&&(n=ho),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xi,this.minFilter=l!==void 0?l:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eg=new li,Bm=new rc(1,1),Ag=new Jl,Cg=new sf,Rg=new nc,zm=[],km=[],Vm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function wo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=zm[i];if(s===void 0&&(s=new Float32Array(i),zm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function pc(r,t){let e=km[t];e===void 0&&(e=new Int32Array(t),km[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function AM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function CM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Je(e,t)}}function RM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Je(e,t)}}function PM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Je(e,t)}}function IM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Gm.set(n),r.uniformMatrix2fv(this.addr,!1,Gm),Je(e,n)}}function LM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Hm.set(n),r.uniformMatrix3fv(this.addr,!1,Hm),Je(e,n)}}function DM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Vm.set(n),r.uniformMatrix4fv(this.addr,!1,Vm),Je(e,n)}}function UM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function NM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Je(e,t)}}function OM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Je(e,t)}}function FM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Je(e,t)}}function BM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Je(e,t)}}function kM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Je(e,t)}}function VM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Je(e,t)}}function HM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bm.compareFunction=Mg,s=Bm):s=Eg,e.setTexture2D(t||s,i)}function GM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cg,i)}function WM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rg,i)}function XM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ag,i)}function qM(r){switch(r){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return IM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return UM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function YM(r,t){r.uniform1fv(this.addr,t)}function ZM(r,t){let e=wo(t,this.size,2);r.uniform2fv(this.addr,e)}function $M(r,t){let e=wo(t,this.size,3);r.uniform3fv(this.addr,e)}function JM(r,t){let e=wo(t,this.size,4);r.uniform4fv(this.addr,e)}function KM(r,t){let e=wo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function QM(r,t){let e=wo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function jM(r,t){let e=wo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function tS(r,t){r.uniform1iv(this.addr,t)}function eS(r,t){r.uniform2iv(this.addr,t)}function nS(r,t){r.uniform3iv(this.addr,t)}function iS(r,t){r.uniform4iv(this.addr,t)}function rS(r,t){r.uniform1uiv(this.addr,t)}function sS(r,t){r.uniform2uiv(this.addr,t)}function oS(r,t){r.uniform3uiv(this.addr,t)}function aS(r,t){r.uniform4uiv(this.addr,t)}function lS(r,t,e){let n=this.cache,i=t.length,s=pc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Eg,s[o])}function cS(r,t,e){let n=this.cache,i=t.length,s=pc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Cg,s[o])}function hS(r,t,e){let n=this.cache,i=t.length,s=pc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rg,s[o])}function uS(r,t,e){let n=this.cache,i=t.length,s=pc(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ag,s[o])}function fS(r){switch(r){case 5126:return YM;case 35664:return ZM;case 35665:return $M;case 35666:return JM;case 35674:return KM;case 35675:return QM;case 35676:return jM;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return uS}}var lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qM(e.type)}},cf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fS(e.type)}},hf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},du=/(\w+)(\])?(\[|\.)?/g;function Wm(r,t){r.seq.push(t),r.map[t.id]=t}function dS(r,t,e){let n=r.name,i=n.length;for(du.lastIndex=0;;){let s=du.exec(n),o=du.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wm(e,c===void 0?new lf(a,r,t):new cf(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new hf(a),Wm(e,f)),e=f}}}var oo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);dS(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Xm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var pS=37297,mS=0;function gS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qm=new te;function _S(r){he._getMatrix(qm,he.workingColorSpace,r);let t=`mat3( ${qm.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case dc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ym(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+gS(r.getShaderSource(t),o)}else return i}function xS(r,t){let e=_S(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vS(r,t){let e;switch(t){case Px:e="Linear";break;case Ix:e="Reinhard";break;case Lx:e="Cineon";break;case Lf:e="ACESFilmic";break;case Ux:e="AgX";break;case Nx:e="Neutral";break;case Dx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fl=new G;function yS(){he.getLuminanceCoefficients(Fl);let r=Fl.x.toFixed(4),t=Fl.y.toFixed(4),e=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function SS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function pa(r){return r!==""}function Zm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $m(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(r){return r.replace(wS,ES)}var TS=new Map;function ES(r,t){let e=ee[t];if(e===void 0){let n=TS.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uf(e)}var AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(r){return r.replace(AS,CS)}function CS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Km(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function RS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===cx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function PS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case lo:case co:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function IS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case co:t="ENVMAP_MODE_REFRACTION";break}return t}function LS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lg:t="ENVMAP_BLENDING_MULTIPLY";break;case Cx:t="ENVMAP_BLENDING_MIX";break;case Rx:t="ENVMAP_BLENDING_ADD";break}return t}function DS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function US(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=RS(e),c=PS(e),h=IS(e),f=LS(e),u=DS(e),d=MS(e),g=SS(s),_=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cr?"#define TONE_MAPPING":"",e.toneMapping!==Cr?ee.tonemapping_pars_fragment:"",e.toneMapping!==Cr?vS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,xS("linearToOutputTexel",e.outputColorSpace),yS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pa).join(`
`)),o=uf(o),o=Zm(o,e),o=$m(o,e),a=uf(a),a=Zm(a,e),a=$m(a,e),o=Jm(o),a=Jm(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,x=S+p+a,C=Xm(i,i.VERTEX_SHADER,M),E=Xm(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(E).trim(),Q=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,E);else{let J=Ym(i,C,"vertex"),W=Ym(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+J+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:Q,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(E),R=new oo(i,_),y=bS(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,pS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var NS=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new df(t),e.set(t,n)),n}},df=class{constructor(t){this.id=NS++,this.code=t,this.usedTimes=0}};function OS(r,t,e,n,i,s,o){let a=new Ql,l=new ff,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,I,N,H){let X=N.fog,Q=H.geometry,Z=y.isMeshStandardMaterial?N.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),W=J&&J.mapping===fc?J.image.height:null,j=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let P=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,at=P!==void 0?P.length:0,At=0;Q.morphAttributes.position!==void 0&&(At=1),Q.morphAttributes.normal!==void 0&&(At=2),Q.morphAttributes.color!==void 0&&(At=3);let Nt,L,k,B;if(j){let bt=Ci[j];Nt=bt.vertexShader,L=bt.fragmentShader}else Nt=y.vertexShader,L=y.fragmentShader,l.update(y),k=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);let V=r.getRenderTarget(),st=r.state.buffers.depth.getReversed(),rt=H.isInstancedMesh===!0,ot=H.isBatchedMesh===!0,Tt=!!y.map,Ct=!!y.matcap,vt=!!J,U=!!y.aoMap,zt=!!y.lightMap,Pt=!!y.bumpMap,z=!!y.normalMap,St=!!y.displacementMap,Jt=!!y.emissiveMap,It=!!y.metalnessMap,A=!!y.roughnessMap,b=y.anisotropy>0,q=y.clearcoat>0,et=y.dispersion>0,nt=y.iridescence>0,tt=y.sheen>0,dt=y.transmission>0,ht=b&&!!y.anisotropyMap,gt=q&&!!y.clearcoatMap,Ht=q&&!!y.clearcoatNormalMap,lt=q&&!!y.clearcoatRoughnessMap,ft=nt&&!!y.iridescenceMap,kt=nt&&!!y.iridescenceThicknessMap,Bt=tt&&!!y.sheenColorMap,wt=tt&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,Gt=!!y.specularColorMap,le=!!y.specularIntensityMap,D=dt&&!!y.transmissionMap,mt=dt&&!!y.thicknessMap,K=!!y.gradientMap,it=!!y.alphaMap,pt=y.alphaTest>0,_t=!!y.alphaHash,Wt=!!y.extensions,ue=Cr;y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ue=r.toneMapping);let Ne={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Nt,fragmentShader:L,defines:y.defines,customVertexShaderID:k,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ot,batchingColor:ot&&H._colorsTexture!==null,instancing:rt,instancingColor:rt&&H.instanceColor!==null,instancingMorph:rt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Mo,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:Ct,envMap:vt,envMapMode:vt&&J.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:zt,bumpMap:Pt,normalMap:z,displacementMap:u&&St,emissiveMap:Jt,normalMapObjectSpace:z&&y.normalMapType===zx,normalMapTangentSpace:z&&y.normalMapType===yg,metalnessMap:It,roughnessMap:A,anisotropy:b,anisotropyMap:ht,clearcoat:q,clearcoatMap:gt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:lt,dispersion:et,iridescence:nt,iridescenceMap:ft,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:Bt,sheenRoughnessMap:wt,specularMap:Kt,specularColorMap:Gt,specularIntensityMap:le,transmission:dt,transmissionMap:D,thicknessMap:mt,gradientMap:K,opaque:y.transparent===!1&&y.blending===io&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:pt,alphaHash:_t,combine:y.combine,mapUv:Tt&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:zt&&_(y.lightMap.channel),bumpMapUv:Pt&&_(y.bumpMap.channel),normalMapUv:z&&_(y.normalMap.channel),displacementMapUv:St&&_(y.displacementMap.channel),emissiveMapUv:Jt&&_(y.emissiveMap.channel),metalnessMapUv:It&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:gt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(y.sheenRoughnessMap.channel),specularMapUv:Kt&&_(y.specularMap.channel),specularColorMapUv:Gt&&_(y.specularColorMap.channel),specularIntensityMapUv:le&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:mt&&_(y.thicknessMap.channel),alphaMapUv:it&&_(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(z||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Tt||it),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:st,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:At,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)v.push(I),v.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(S(v,y),M(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=g[y.type],I;if(v){let N=Ci[v];I=Ev.clone(N.uniforms)}else I=y.uniforms;return I}function C(y,v){let I;for(let N=0,H=h.length;N<H;N++){let X=h[N];if(X.cacheKey===v){I=X,++I.usedTimes;break}}return I===void 0&&(I=new US(r,v,y,s),h.push(I)),I}function E(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function FS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function BS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function jm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,g,_,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,u,d,g,_,m){let p=o(f,u,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,g,_,m){let p=o(f,u,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||BS),n.length>1&&n.sort(u||Qm),i.length>1&&i.sort(u||Qm)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function zS(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new jm,r.set(n,[o])):i>=s.length?(o=new jm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function kS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new re};break;case"SpotLight":e={position:new G,direction:new G,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function VS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var HS=0;function GS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function WS(r){let t=new kS,e=VS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new Ue,o=new Ue;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,M=0,x=0,C=0,E=0,T=0;c.sort(GS);for(let y=0,v=c.length;y<v;y++){let I=c[y],N=I.color,H=I.intensity,X=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*H,f+=N.g*H,u+=N.b*H;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],H);T++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,W=e.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=Z,d++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(N).multiplyScalar(H),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[_]=Z;let J=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Q,x++}_++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(N).multiplyScalar(H),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let J=I.shadow,W=e.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(H),Z.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=Z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,n.version=HS++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function tg(r){let t=new WS(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XS(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new tg(r),t.set(i,[a])):s>=o.length?(a=new tg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var pf=class extends Lr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mf=class extends Lr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
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
}`;function ZS(r,t,e){let n=new ya,i=new de,s=new de,o=new ye,a=new pf({depthPacking:Bx}),l=new mf,c={},h=e.maxTextureSize,f={[Rr]:gn,[gn]:Rr,[gi]:gi},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:qS,fragmentShader:YS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Yn;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ce(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Ar),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==Ji&&this.type===Ji,X=p===Ji&&this.type!==Ji;for(let Q=0,Z=E.length;Q<Z;Q++){let J=E[Q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let j=W.getFrameExtents();if(i.multiply(j),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,W.mapSize.y=s.y)),W.map===null||H===!0||X===!0){let at=this.type!==Ji?{minFilter:xi,magFilter:xi}:{};W.map!==null&&W.map.dispose(),W.map=new nr(i.x,i.y,at),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let P=W.getViewportCount();for(let at=0;at<P;at++){let At=W.getViewport(at);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),N.viewport(o),W.updateMatrices(J,at),n=W.getFrustum(),x(T,R,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Ji&&S(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,I)};function S(E,T){let R=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nr(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,d,_,null)}function M(E,T,R,y){let v=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)v=I;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=v.uuid,H=T.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let Q=X[H];Q===void 0&&(Q=v.clone(),X[H]=Q,T.addEventListener("dispose",C)),v=Q}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Ji?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=r.properties.get(v);N.light=R}return v}function x(E,T,R,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ji)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let H=t.update(E),X=E.material;if(Array.isArray(X)){let Q=H.groups;for(let Z=0,J=Q.length;Z<J;Z++){let W=Q[Z],j=X[W.materialIndex];if(j&&j.visible){let P=M(E,j,y,v);E.onBeforeShadow(r,E,T,R,H,P,W),r.renderBufferDirect(R,null,H,P,E,W),E.onAfterShadow(r,E,T,R,H,P,W)}}}else if(X.visible){let Q=M(E,X,y,v);E.onBeforeShadow(r,E,T,R,H,Q,null),r.renderBufferDirect(R,null,H,Q,E,null),E.onAfterShadow(r,E,T,R,H,Q,null)}}let N=E.children;for(let H=0,X=N.length;H<X;H++)x(N[H],T,R,y,v)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let y=c[R],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var $S={[xu]:vu,[yu]:bu,[Mu]:wu,[ao]:Su,[vu]:xu,[bu]:yu,[wu]:Mu,[Su]:ao};function JS(r,t){function e(){let D=!1,mt=new ye,K=null,it=new ye(0,0,0,0);return{setMask:function(pt){K!==pt&&!D&&(r.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){D=pt},setClear:function(pt,_t,Wt,ue,Ne){Ne===!0&&(pt*=ue,_t*=ue,Wt*=ue),mt.set(pt,_t,Wt,ue),it.equals(mt)===!1&&(r.clearColor(pt,_t,Wt,ue),it.copy(mt))},reset:function(){D=!1,K=null,it.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,K=null,it=null,pt=null;return{setReversed:function(_t){if(mt!==_t){let Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let ue=pt;pt=null,this.setClear(ue)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?V(r.DEPTH_TEST):st(r.DEPTH_TEST)},setMask:function(_t){K!==_t&&!D&&(r.depthMask(_t),K=_t)},setFunc:function(_t){if(mt&&(_t=$S[_t]),it!==_t){switch(_t){case xu:r.depthFunc(r.NEVER);break;case vu:r.depthFunc(r.ALWAYS);break;case yu:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case Mu:r.depthFunc(r.EQUAL);break;case Su:r.depthFunc(r.GEQUAL);break;case bu:r.depthFunc(r.GREATER);break;case wu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}it=_t}},setLocked:function(_t){D=_t},setClear:function(_t){pt!==_t&&(mt&&(_t=1-_t),r.clearDepth(_t),pt=_t)},reset:function(){D=!1,K=null,it=null,pt=null,mt=!1}}}function i(){let D=!1,mt=null,K=null,it=null,pt=null,_t=null,Wt=null,ue=null,Ne=null;return{setTest:function(bt){D||(bt?V(r.STENCIL_TEST):st(r.STENCIL_TEST))},setMask:function(bt){mt!==bt&&!D&&(r.stencilMask(bt),mt=bt)},setFunc:function(bt,Dt,Qt){(K!==bt||it!==Dt||pt!==Qt)&&(r.stencilFunc(bt,Dt,Qt),K=bt,it=Dt,pt=Qt)},setOp:function(bt,Dt,Qt){(_t!==bt||Wt!==Dt||ue!==Qt)&&(r.stencilOp(bt,Dt,Qt),_t=bt,Wt=Dt,ue=Qt)},setLocked:function(bt){D=bt},setClear:function(bt){Ne!==bt&&(r.clearStencil(bt),Ne=bt)},reset:function(){D=!1,mt=null,K=null,it=null,pt=null,_t=null,Wt=null,ue=null,Ne=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,C=null,E=null,T=new re(0,0,0),R=0,y=!1,v=null,I=null,N=null,H=null,X=null,Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,J=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=J>=2);let j=null,P={},at=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Nt=new ye().fromArray(at),L=new ye().fromArray(At);function k(D,mt,K,it){let pt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(D,_t),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<K;Wt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,it,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(mt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return _t}let B={};B[r.TEXTURE_2D]=k(r.TEXTURE_2D,r.TEXTURE_2D,1),B[r.TEXTURE_CUBE_MAP]=k(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[r.TEXTURE_2D_ARRAY]=k(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),B[r.TEXTURE_3D]=k(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(r.DEPTH_TEST),o.setFunc(ao),Pt(!1),z(em),V(r.CULL_FACE),U(Ar);function V(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function st(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function rt(D,mt){return f[D]!==mt?(r.bindFramebuffer(D,mt),f[D]=mt,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=mt),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function ot(D,mt){let K=d,it=!1;if(D){K=u.get(mt),K===void 0&&(K=[],u.set(mt,K));let pt=D.textures;if(K.length!==pt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Wt=pt.length;_t<Wt;_t++)K[_t]=r.COLOR_ATTACHMENT0+_t;K.length=pt.length,it=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,it=!0);it&&r.drawBuffers(K)}function Tt(D){return g!==D?(r.useProgram(D),g=D,!0):!1}let Ct={[ls]:r.FUNC_ADD,[ux]:r.FUNC_SUBTRACT,[fx]:r.FUNC_REVERSE_SUBTRACT};Ct[dx]=r.MIN,Ct[px]=r.MAX;let vt={[mx]:r.ZERO,[gx]:r.ONE,[_x]:r.SRC_COLOR,[gu]:r.SRC_ALPHA,[bx]:r.SRC_ALPHA_SATURATE,[Mx]:r.DST_COLOR,[vx]:r.DST_ALPHA,[xx]:r.ONE_MINUS_SRC_COLOR,[_u]:r.ONE_MINUS_SRC_ALPHA,[Sx]:r.ONE_MINUS_DST_COLOR,[yx]:r.ONE_MINUS_DST_ALPHA,[wx]:r.CONSTANT_COLOR,[Tx]:r.ONE_MINUS_CONSTANT_COLOR,[Ex]:r.CONSTANT_ALPHA,[Ax]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,mt,K,it,pt,_t,Wt,ue,Ne,bt){if(D===Ar){_===!0&&(st(r.BLEND),_=!1);return}if(_===!1&&(V(r.BLEND),_=!0),D!==hx){if(D!==m||bt!==y){if((p!==ls||x!==ls)&&(r.blendEquation(r.FUNC_ADD),p=ls,x=ls),bt)switch(D){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nm:r.blendFunc(r.ONE,r.ONE);break;case im:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case im:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,M=null,C=null,E=null,T.set(0,0,0),R=0,m=D,y=bt}return}pt=pt||mt,_t=_t||K,Wt=Wt||it,(mt!==p||pt!==x)&&(r.blendEquationSeparate(Ct[mt],Ct[pt]),p=mt,x=pt),(K!==S||it!==M||_t!==C||Wt!==E)&&(r.blendFuncSeparate(vt[K],vt[it],vt[_t],vt[Wt]),S=K,M=it,C=_t,E=Wt),(ue.equals(T)===!1||Ne!==R)&&(r.blendColor(ue.r,ue.g,ue.b,Ne),T.copy(ue),R=Ne),m=D,y=!1}function zt(D,mt){D.side===gi?st(r.CULL_FACE):V(r.CULL_FACE);let K=D.side===gn;mt&&(K=!K),Pt(K),D.blending===io&&D.transparent===!1?U(Ar):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let it=D.stencilWrite;a.setTest(it),it&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):st(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(D){v!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),v=D)}function z(D){D!==ax?(V(r.CULL_FACE),D!==I&&(D===em?r.cullFace(r.BACK):D===lx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):st(r.CULL_FACE),I=D}function St(D){D!==N&&(Z&&r.lineWidth(D),N=D)}function Jt(D,mt,K){D?(V(r.POLYGON_OFFSET_FILL),(H!==mt||X!==K)&&(r.polygonOffset(mt,K),H=mt,X=K)):st(r.POLYGON_OFFSET_FILL)}function It(D){D?V(r.SCISSOR_TEST):st(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+Q-1),j!==D&&(r.activeTexture(D),j=D)}function b(D,mt,K){K===void 0&&(j===null?K=r.TEXTURE0+Q-1:K=j);let it=P[K];it===void 0&&(it={type:void 0,texture:void 0},P[K]=it),(it.type!==D||it.texture!==mt)&&(j!==K&&(r.activeTexture(K),j=K),r.bindTexture(D,mt||B[D]),it.type=D,it.texture=mt)}function q(){let D=P[j];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){Nt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Nt.copy(D))}function wt(D){L.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),L.copy(D))}function Kt(D,mt){let K=c.get(mt);K===void 0&&(K=new WeakMap,c.set(mt,K));let it=K.get(D);it===void 0&&(it=r.getUniformBlockIndex(mt,D.name),K.set(D,it))}function Gt(D,mt){let it=c.get(mt).get(D);l.get(mt)!==it&&(r.uniformBlockBinding(mt,it,D.__bindingPointIndex),l.set(mt,it))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,P={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,C=null,E=null,T=new re(0,0,0),R=0,y=!1,v=null,I=null,N=null,H=null,X=null,Nt.set(0,0,r.canvas.width,r.canvas.height),L.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:st,bindFramebuffer:rt,drawBuffers:ot,useProgram:Tt,setBlending:U,setMaterial:zt,setFlipSided:Pt,setCullFace:z,setLineWidth:St,setPolygonOffset:Jt,setScissorTest:It,activeTexture:A,bindTexture:b,unbindTexture:q,compressedTexImage2D:et,compressedTexImage3D:nt,texImage2D:ft,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:Gt,texStorage2D:Ht,texStorage3D:lt,texSubImage2D:tt,texSubImage3D:dt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Bt,viewport:wt,reset:le}}function eg(r,t,e,n){let i=KS(n);switch(e){case dg:return r*t;case mg:return r*t;case gg:return r*t*2;case _g:return r*t/i.components*i.byteLength;case Of:return r*t/i.components*i.byteLength;case xg:return r*t*2/i.components*i.byteLength;case Ff:return r*t*2/i.components*i.byteLength;case pg:return r*t*3/i.components*i.byteLength;case _i:return r*t*4/i.components*i.byteLength;case Bf:return r*t*4/i.components*i.byteLength;case Vl:case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pu:case Lu:return Math.max(r,16)*Math.max(t,8)/4;case Ru:case Iu:return Math.max(r,8)*Math.max(t,8)/2;case Du:case Uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ku:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Xu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case qu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Yu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Zu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case $u:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xl:case Ju:case Ku:return Math.ceil(r/4)*Math.ceil(t/4)*16;case vg:case Qu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ju:case tf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function KS(r){switch(r){case er:case hg:return{byteLength:1,components:1};case xa:case ug:case wa:return{byteLength:2,components:1};case Uf:case Nf:return{byteLength:2,components:4};case ds:case Df:case Qi:return{byteLength:4,components:1};case fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function QS(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):Zl("canvas")}function _(A,b,q){let et=1,nt=It(A);if((nt.width>q||nt.height>q)&&(et=q/Math.max(nt.width,nt.height)),et<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let tt=Math.floor(et*nt.width),dt=Math.floor(et*nt.height);f===void 0&&(f=g(tt,dt));let ht=b?g(tt,dt):f;return ht.width=tt,ht.height=dt,ht.getContext("2d").drawImage(A,0,0,tt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+tt+"x"+dt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(A,b,q,et,nt=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=b;if(b===r.RED&&(q===r.FLOAT&&(tt=r.R32F),q===r.HALF_FLOAT&&(tt=r.R16F),q===r.UNSIGNED_BYTE&&(tt=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.R8UI),q===r.UNSIGNED_SHORT&&(tt=r.R16UI),q===r.UNSIGNED_INT&&(tt=r.R32UI),q===r.BYTE&&(tt=r.R8I),q===r.SHORT&&(tt=r.R16I),q===r.INT&&(tt=r.R32I)),b===r.RG&&(q===r.FLOAT&&(tt=r.RG32F),q===r.HALF_FLOAT&&(tt=r.RG16F),q===r.UNSIGNED_BYTE&&(tt=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RG8UI),q===r.UNSIGNED_SHORT&&(tt=r.RG16UI),q===r.UNSIGNED_INT&&(tt=r.RG32UI),q===r.BYTE&&(tt=r.RG8I),q===r.SHORT&&(tt=r.RG16I),q===r.INT&&(tt=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),q===r.UNSIGNED_INT&&(tt=r.RGB32UI),q===r.BYTE&&(tt=r.RGB8I),q===r.SHORT&&(tt=r.RGB16I),q===r.INT&&(tt=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),q===r.UNSIGNED_INT&&(tt=r.RGBA32UI),q===r.BYTE&&(tt=r.RGBA8I),q===r.SHORT&&(tt=r.RGBA16I),q===r.INT&&(tt=r.RGBA32I)),b===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),b===r.RGBA){let dt=nt?dc:he.getTransfer(et);q===r.FLOAT&&(tt=r.RGBA32F),q===r.HALF_FLOAT&&(tt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(tt=dt===ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(A,b){let q;return A?b===null||b===ds||b===ho?q=r.DEPTH24_STENCIL8:b===Qi?q=r.DEPTH32F_STENCIL8:b===xa&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ds||b===ho?q=r.DEPTH_COMPONENT24:b===Qi?q=r.DEPTH_COMPONENT32F:b===xa&&(q=r.DEPTH_COMPONENT16),q}function C(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xi&&A.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),v(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let q=A.source,et=u.get(q);if(et){let nt=et[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(A),Object.keys(et).length===0&&u.delete(q)}n.remove(A)}function y(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let q=A.source,et=u.get(q);delete et[b.__cacheKey],o.memory.textures--}function v(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let nt=0;nt<b.__webglFramebuffer[et].length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[et][nt]);else r.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)r.deleteFramebuffer(b.__webglFramebuffer[et]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=A.textures;for(let et=0,nt=q.length;et<nt;et++){let tt=n.get(q[et]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(q[et])}n.remove(A)}let I=0;function N(){I=0}function H(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function X(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Q(A,b){let q=n.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(q,A,b);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function Z(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){L(q,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function J(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){L(q,A,b);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function W(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){k(q,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}let j={[Au]:r.REPEAT,[us]:r.CLAMP_TO_EDGE,[Cu]:r.MIRRORED_REPEAT},P={[xi]:r.NEAREST,[Ox]:r.NEAREST_MIPMAP_NEAREST,[_l]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[kh]:r.LINEAR_MIPMAP_NEAREST,[fs]:r.LINEAR_MIPMAP_LINEAR},at={[kx]:r.NEVER,[qx]:r.ALWAYS,[Vx]:r.LESS,[Mg]:r.LEQUAL,[Hx]:r.EQUAL,[Xx]:r.GEQUAL,[Gx]:r.GREATER,[Wx]:r.NOTEQUAL};function At(A,b){if(b.type===Qi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===kh||b.magFilter===_l||b.magFilter===fs||b.minFilter===Ri||b.minFilter===kh||b.minFilter===_l||b.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,j[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,j[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,j[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xi||b.minFilter!==_l&&b.minFilter!==fs||b.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let et=b.source,nt=u.get(et);nt===void 0&&(nt={},u.set(et,nt));let tt=X(b);if(tt!==A.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),nt[tt].usedTimes++;let dt=nt[A.__cacheKey];dt!==void 0&&(nt[A.__cacheKey].usedTimes--,dt.usedTimes===0&&y(b)),A.__cacheKey=tt,A.__webglTexture=nt[tt].texture}return q}function L(A,b,q){let et=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=r.TEXTURE_3D);let nt=Nt(A,b),tt=b.source;e.bindTexture(et,A.__webglTexture,r.TEXTURE0+q);let dt=n.get(tt);if(tt.version!==dt.__version||nt===!0){e.activeTexture(r.TEXTURE0+q);let ht=he.getPrimaries(he.workingColorSpace),gt=b.colorSpace===Er?null:he.getPrimaries(b.colorSpace),Ht=b.colorSpace===Er||ht===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let lt=_(b.image,!1,i.maxTextureSize);lt=Jt(b,lt);let ft=s.convert(b.format,b.colorSpace),kt=s.convert(b.type),Bt=M(b.internalFormat,ft,kt,b.colorSpace,b.isVideoTexture);At(et,b);let wt,Kt=b.mipmaps,Gt=b.isVideoTexture!==!0,le=dt.__version===void 0||nt===!0,D=tt.dataReady,mt=C(b,lt);if(b.isDepthTexture)Bt=x(b.format===uo,b.type),le&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Bt,lt.width,lt.height,0,ft,kt,null));else if(b.isDataTexture)if(Kt.length>0){Gt&&le&&e.texStorage2D(r.TEXTURE_2D,mt,Bt,Kt[0].width,Kt[0].height);for(let K=0,it=Kt.length;K<it;K++)wt=Kt[K],Gt?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,wt.width,wt.height,ft,kt,wt.data):e.texImage2D(r.TEXTURE_2D,K,Bt,wt.width,wt.height,0,ft,kt,wt.data);b.generateMipmaps=!1}else Gt?(le&&e.texStorage2D(r.TEXTURE_2D,mt,Bt,lt.width,lt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,ft,kt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,lt.width,lt.height,0,ft,kt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Bt,Kt[0].width,Kt[0].height,lt.depth);for(let K=0,it=Kt.length;K<it;K++)if(wt=Kt[K],b.format!==_i)if(ft!==null)if(Gt){if(D)if(b.layerUpdates.size>0){let pt=eg(wt.width,wt.height,b.format,b.type);for(let _t of b.layerUpdates){let Wt=wt.data.subarray(_t*pt/wt.data.BYTES_PER_ELEMENT,(_t+1)*pt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,_t,wt.width,wt.height,1,ft,Wt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,wt.width,wt.height,lt.depth,ft,wt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Bt,wt.width,wt.height,lt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,wt.width,wt.height,lt.depth,ft,kt,wt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Bt,wt.width,wt.height,lt.depth,0,ft,kt,wt.data)}else{Gt&&le&&e.texStorage2D(r.TEXTURE_2D,mt,Bt,Kt[0].width,Kt[0].height);for(let K=0,it=Kt.length;K<it;K++)wt=Kt[K],b.format!==_i?ft!==null?Gt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,wt.width,wt.height,ft,wt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Bt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,wt.width,wt.height,ft,kt,wt.data):e.texImage2D(r.TEXTURE_2D,K,Bt,wt.width,wt.height,0,ft,kt,wt.data)}else if(b.isDataArrayTexture)if(Gt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Bt,lt.width,lt.height,lt.depth),D)if(b.layerUpdates.size>0){let K=eg(lt.width,lt.height,b.format,b.type);for(let it of b.layerUpdates){let pt=lt.data.subarray(it*K/lt.data.BYTES_PER_ELEMENT,(it+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,ft,kt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,ft,kt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,ft,kt,lt.data);else if(b.isData3DTexture)Gt?(le&&e.texStorage3D(r.TEXTURE_3D,mt,Bt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,ft,kt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,ft,kt,lt.data);else if(b.isFramebufferTexture){if(le)if(Gt)e.texStorage2D(r.TEXTURE_2D,mt,Bt,lt.width,lt.height);else{let K=lt.width,it=lt.height;for(let pt=0;pt<mt;pt++)e.texImage2D(r.TEXTURE_2D,pt,Bt,K,it,0,ft,kt,null),K>>=1,it>>=1}}else if(Kt.length>0){if(Gt&&le){let K=It(Kt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Bt,K.width,K.height)}for(let K=0,it=Kt.length;K<it;K++)wt=Kt[K],Gt?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,ft,kt,wt):e.texImage2D(r.TEXTURE_2D,K,Bt,ft,kt,wt);b.generateMipmaps=!1}else if(Gt){if(le){let K=It(lt);e.texStorage2D(r.TEXTURE_2D,mt,Bt,K.width,K.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,kt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Bt,ft,kt,lt);m(b)&&p(et),dt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function k(A,b,q){if(b.image.length!==6)return;let et=Nt(A,b),nt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+q);let tt=n.get(nt);if(nt.version!==tt.__version||et===!0){e.activeTexture(r.TEXTURE0+q);let dt=he.getPrimaries(he.workingColorSpace),ht=b.colorSpace===Er?null:he.getPrimaries(b.colorSpace),gt=b.colorSpace===Er||dt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ht=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!Ht&&!lt?ft[it]=_(b.image[it],!0,i.maxCubemapSize):ft[it]=lt?b.image[it].image:b.image[it],ft[it]=Jt(b,ft[it]);let kt=ft[0],Bt=s.convert(b.format,b.colorSpace),wt=s.convert(b.type),Kt=M(b.internalFormat,Bt,wt,b.colorSpace),Gt=b.isVideoTexture!==!0,le=tt.__version===void 0||et===!0,D=nt.dataReady,mt=C(b,kt);At(r.TEXTURE_CUBE_MAP,b);let K;if(Ht){Gt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Kt,kt.width,kt.height);for(let it=0;it<6;it++){K=ft[it].mipmaps;for(let pt=0;pt<K.length;pt++){let _t=K[pt];b.format!==_i?Bt!==null?Gt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt,0,0,_t.width,_t.height,Bt,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt,Kt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt,0,0,_t.width,_t.height,Bt,wt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt,Kt,_t.width,_t.height,0,Bt,wt,_t.data)}}}else{if(K=b.mipmaps,Gt&&le){K.length>0&&mt++;let it=It(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Kt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Gt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,Bt,wt,ft[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,ft[it].width,ft[it].height,0,Bt,wt,ft[it].data);for(let pt=0;pt<K.length;pt++){let Wt=K[pt].image[it].image;Gt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt+1,0,0,Wt.width,Wt.height,Bt,wt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt+1,Kt,Wt.width,Wt.height,0,Bt,wt,Wt.data)}}else{Gt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Bt,wt,ft[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Bt,wt,ft[it]);for(let pt=0;pt<K.length;pt++){let _t=K[pt];Gt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt+1,0,0,Bt,wt,_t.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt+1,Kt,Bt,wt,_t.image[it])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),tt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function B(A,b,q,et,nt,tt){let dt=s.convert(q.format,q.colorSpace),ht=s.convert(q.type),gt=M(q.internalFormat,dt,ht,q.colorSpace),Ht=n.get(b),lt=n.get(q);if(lt.__renderTarget=b,!Ht.__hasExternalTextures){let ft=Math.max(1,b.width>>tt),kt=Math.max(1,b.height>>tt);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,gt,ft,kt,b.depth,0,dt,ht,null):e.texImage2D(nt,tt,gt,ft,kt,0,dt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,nt,lt.__webglTexture,0,Pt(b)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,nt,lt.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function V(A,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let et=b.depthTexture,nt=et&&et.isDepthTexture?et.type:null,tt=x(b.stencilBuffer,nt),dt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=Pt(b);z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,tt,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,tt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,A)}else{let et=b.textures;for(let nt=0;nt<et.length;nt++){let tt=et[nt],dt=s.convert(tt.format,tt.colorSpace),ht=s.convert(tt.type),gt=M(tt.internalFormat,dt,ht,tt.colorSpace),Ht=Pt(b);q&&z(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,gt,b.width,b.height):z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,gt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,gt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(b.depthTexture);et.__renderTarget=b,(!et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);let nt=et.__webglTexture,tt=Pt(b);if(b.depthTexture.format===ro)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(b.depthTexture.format===uo)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function rt(A){let b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",nt)};et.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=et}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");st(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=r.createRenderbuffer(),V(b.__webglDepthbuffer[et],A,!1);else{let nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[et];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),V(b.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(A,b,q){let et=n.get(A);b!==void 0&&B(et.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&rt(A)}function Tt(A){let b=A.texture,q=n.get(A),et=n.get(b);A.addEventListener("dispose",T);let nt=A.textures,tt=A.isWebGLCubeRenderTarget===!0,dt=nt.length>1;if(dt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=b.version,o.memory.textures++),tt){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let gt=0;gt<b.mipmaps.length;gt++)q.__webglFramebuffer[ht][gt]=r.createFramebuffer()}else q.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)q.__webglFramebuffer[ht]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(dt)for(let ht=0,gt=nt.length;ht<gt;ht++){let Ht=n.get(nt[ht]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&z(A)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){let gt=nt[ht];q.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);let Ht=s.convert(gt.format,gt.colorSpace),lt=s.convert(gt.type),ft=M(gt.internalFormat,Ht,lt,gt.colorSpace,A.isXRRenderTarget===!0),kt=Pt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,ft,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),V(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),At(r.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)B(q.__webglFramebuffer[ht][gt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else B(q.__webglFramebuffer[ht],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ht=0,gt=nt.length;ht<gt;ht++){let Ht=nt[ht],lt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),At(r.TEXTURE_2D,Ht),B(q.__webglFramebuffer,A,Ht,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(Ht)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),At(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)B(q.__webglFramebuffer[gt],A,b,r.COLOR_ATTACHMENT0,ht,gt);else B(q.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ht,0);m(b)&&p(ht),e.unbindTexture()}A.depthBuffer&&rt(A)}function Ct(A){let b=A.textures;for(let q=0,et=b.length;q<et;q++){let nt=b[q];if(m(nt)){let tt=S(A),dt=n.get(nt).__webglTexture;e.bindTexture(tt,dt),p(tt),e.unbindTexture()}}}let vt=[],U=[];function zt(A){if(A.samples>0){if(z(A)===!1){let b=A.textures,q=A.width,et=A.height,nt=r.COLOR_BUFFER_BIT,tt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(A),ht=b.length>1;if(ht)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ht=n.get(b[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,q,et,0,0,q,et,nt,r.NEAREST),l===!0&&(vt.length=0,U.length=0,vt.push(r.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(tt),U.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ht=n.get(b[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Pt(A){return Math.min(i.maxSamples,A.samples)}function z(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function St(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Jt(A,b){let q=A.colorSpace,et=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Mo&&q!==Er&&(he.getTransfer(q)===ve?(et!==_i||nt!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function It(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=ot,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=B,this.useMultisampledRTT=z}function jS(r,t){function e(n,i=Er){let s,o=he.getTransfer(i);if(n===er)return r.UNSIGNED_BYTE;if(n===Uf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Nf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===fg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hg)return r.BYTE;if(n===ug)return r.SHORT;if(n===xa)return r.UNSIGNED_SHORT;if(n===Df)return r.INT;if(n===ds)return r.UNSIGNED_INT;if(n===Qi)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===dg)return r.ALPHA;if(n===pg)return r.RGB;if(n===_i)return r.RGBA;if(n===mg)return r.LUMINANCE;if(n===gg)return r.LUMINANCE_ALPHA;if(n===ro)return r.DEPTH_COMPONENT;if(n===uo)return r.DEPTH_STENCIL;if(n===_g)return r.RED;if(n===Of)return r.RED_INTEGER;if(n===xg)return r.RG;if(n===Ff)return r.RG_INTEGER;if(n===Bf)return r.RGBA_INTEGER;if(n===Vl||n===Hl||n===Gl||n===Wl)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Pu||n===Iu||n===Lu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Uu||n===Nu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Du||n===Uu)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ou)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ku)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$u)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===Ju||n===Ku)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ju)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vg||n===Qu||n===ju||n===tf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ju)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var gf=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},oi=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tb={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
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

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new li,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ii({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends Pr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=new _f,m=e.getContextAttributes(),p=null,S=null,M=[],x=[],C=new de,E=null,T=new mn;T.viewport=new ye;let R=new mn;R.viewport=new ye;let y=[T,R],v=new gf,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let k=M[L];return k===void 0&&(k=new _a,M[L]=k),k.getTargetRaySpace()},this.getControllerGrip=function(L){let k=M[L];return k===void 0&&(k=new _a,M[L]=k),k.getGripSpace()},this.getHand=function(L){let k=M[L];return k===void 0&&(k=new _a,M[L]=k),k.getHandSpace()};function H(L){let k=x.indexOf(L.inputSource);if(k===-1)return;let B=M[k];B!==void 0&&(B.update(L.inputSource,L.frame,c||o),B.dispatchEvent({type:L.type,data:L.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Q);for(let L=0;L<M.length;L++){let k=x[L];k!==null&&(x[L]=null,M[L].disconnect(k))}I=null,N=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,S=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new nr(d.framebufferWidth,d.framebufferHeight,{format:_i,type:er,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,B=null,V=null;m.depth&&(V=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?uo:ro,B=m.stencil?ho:ds);let st={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(st),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new nr(u.textureWidth,u.textureHeight,{format:_i,type:er,depthTexture:new rc(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(L){for(let k=0;k<L.removed.length;k++){let B=L.removed[k],V=x.indexOf(B);V>=0&&(x[V]=null,M[V].disconnect(B))}for(let k=0;k<L.added.length;k++){let B=L.added[k],V=x.indexOf(B);if(V===-1){for(let rt=0;rt<M.length;rt++)if(rt>=x.length){x.push(B),V=rt;break}else if(x[rt]===null){x[rt]=B,V=rt;break}if(V===-1)break}let st=M[V];st&&st.connect(B)}}let Z=new G,J=new G;function W(L,k,B){Z.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(B.matrixWorld);let V=Z.distanceTo(J),st=k.projectionMatrix.elements,rt=B.projectionMatrix.elements,ot=st[14]/(st[10]-1),Tt=st[14]/(st[10]+1),Ct=(st[9]+1)/st[5],vt=(st[9]-1)/st[5],U=(st[8]-1)/st[0],zt=(rt[8]+1)/rt[0],Pt=ot*U,z=ot*zt,St=V/(-U+zt),Jt=St*-U;if(k.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Jt),L.translateZ(St),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),st[10]===-1)L.projectionMatrix.copy(k.projectionMatrix),L.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let It=ot+St,A=Tt+St,b=Pt-Jt,q=z+(V-Jt),et=Ct*Tt/A*It,nt=vt*Tt/A*It;L.projectionMatrix.makePerspective(b,q,et,nt,It,A),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function j(L,k){k===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(k.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;let k=L.near,B=L.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(B=_.depthFar)),v.near=R.near=T.near=k,v.far=R.far=T.far=B,(I!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,N=v.far),T.layers.mask=L.layers.mask|2,R.layers.mask=L.layers.mask|4,v.layers.mask=T.layers.mask|R.layers.mask;let V=L.parent,st=v.cameras;j(v,V);for(let rt=0;rt<st.length;rt++)j(st[rt],V);st.length===2?W(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),P(L,v,V)};function P(L,k,B){B===null?L.matrix.copy(k.matrixWorld):(L.matrix.copy(B.matrixWorld),L.matrix.invert(),L.matrix.multiply(k.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(k.projectionMatrix),L.projectionMatrixInverse.copy(k.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=va*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(L){l=L,u!==null&&(u.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let at=null;function At(L,k){if(h=k.getViewerPose(c||o),g=k,h!==null){let B=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let V=!1;B.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let rt=0;rt<B.length;rt++){let ot=B[rt],Tt=null;if(d!==null)Tt=d.getViewport(ot);else{let vt=f.getViewSubImage(u,ot);Tt=vt.viewport,rt===0&&(t.setRenderTargetTextures(S,vt.colorTexture,u.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(S))}let Ct=y[rt];Ct===void 0&&(Ct=new mn,Ct.layers.enable(rt),Ct.viewport=new ye,y[rt]=Ct),Ct.matrix.fromArray(ot.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(ot.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),rt===0&&(v.matrix.copy(Ct.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(Ct)}let st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){let rt=f.getDepthInformation(B[0]);rt&&rt.isValid&&rt.texture&&_.init(t,rt,i.renderState)}}for(let B=0;B<M.length;B++){let V=x[B],st=M[B];V!==null&&st!==void 0&&st.update(V,k,c||o)}at&&at(L,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let Nt=new Tg;Nt.setAnimationLoop(At),this.setAnimationLoop=function(L){at=L},this.dispose=function(){}}},os=new Pi,ib=new Ue;function rb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(os)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=i[S.id];x===void 0&&(g(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));let C=M.program;n.updateUBOMapping(S,C);let E=t.render.frame;s[S.id]!==E&&(u(S),s[S.id]=E)}function h(S){let M=f();S.__bindingPointIndex=M;let x=r.createBuffer(),C=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let M=i[S.id],x=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,T=x.length;E<T;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,v=R.length;y<v;y++){let I=R[y];if(d(I,E,y,C)===!0){let N=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Q=0;Q<H.length;Q++){let Z=H[Q],J=_(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,N+X,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,M,x,C){let E=S.value,T=M+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(S){let M=S.uniforms,x=0,C=16;for(let T=0,R=M.length;T<R;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,I=y.length;v<I;v++){let N=y[v],H=Array.isArray(N.value)?N.value:[N.value];for(let X=0,Q=H.length;X<Q;X++){let Z=H[X],J=_(Z),W=x%C,j=W%J.boundary,P=W+j;x+=j,P!==0&&C-P<J.storage&&(x+=C-P),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=J.storage}}}let E=x%C;return E>0&&(x+=C-E),S.__size=x,S.__cache={},this}function _(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var sc=class{constructor(t={}){let{canvas:e=cv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=Cr,this.toneMappingExposure=1;let x=this,C=!1,E=0,T=0,R=null,y=-1,v=null,I=new ye,N=new ye,H=null,X=new re(0),Q=0,Z=e.width,J=e.height,W=1,j=null,P=null,at=new ye(0,0,Z,J),At=new ye(0,0,Z,J),Nt=!1,L=new ya,k=!1,B=!1,V=new Ue,st=new Ue,rt=new G,ot=new ye,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function vt(){return R===null?W:1}let U=n;function zt(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){let O="webgl2";if(U=zt(O,w),U===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Pt,z,St,Jt,It,A,b,q,et,nt,tt,dt,ht,gt,Ht,lt,ft,kt,Bt,wt,Kt,Gt,le,D;function mt(){Pt=new MM(U),Pt.init(),Gt=new jS(U,Pt),z=new mM(U,Pt,t,Gt),St=new JS(U,Pt),z.reverseDepthBuffer&&u&&St.buffers.depth.setReversed(!0),Jt=new wM(U),It=new FS,A=new QS(U,Pt,St,It,z,Gt,Jt),b=new _M(x),q=new yM(x),et=new Iv(U),le=new dM(U,et),nt=new SM(U,et,Jt,le),tt=new EM(U,nt,et,Jt),Bt=new TM(U,z,A),lt=new gM(It),dt=new OS(x,b,q,Pt,z,le,lt),ht=new rb(x,It),gt=new zS,Ht=new XS(Pt),kt=new fM(x,b,q,St,tt,d,l),ft=new ZS(x,tt,z),D=new sb(U,Jt,z,St),wt=new pM(U,Pt,Jt),Kt=new bM(U,Pt,Jt),Jt.programs=dt.programs,x.capabilities=z,x.extensions=Pt,x.properties=It,x.renderLists=gt,x.shadowMap=ft,x.state=St,x.info=Jt}mt();let K=new xf(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(Z,J,!1))},this.getSize=function(w){return w.set(Z,J)},this.setSize=function(w,O,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,J=O,e.width=Math.floor(w*W),e.height=Math.floor(O*W),Y===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Z*W,J*W).floor()},this.setDrawingBufferSize=function(w,O,Y){Z=w,J=O,W=Y,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,O,Y,$){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,Y,$),St.viewport(I.copy(at).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(At)},this.setScissor=function(w,O,Y,$){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,O,Y,$),St.scissor(N.copy(At).multiplyScalar(W).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(w){St.setScissorTest(Nt=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,O=!0,Y=!0){let $=0;if(w){let F=!1;if(R!==null){let ct=R.texture.format;F=ct===Bf||ct===Ff||ct===Of}if(F){let ct=R.texture.type,ut=ct===er||ct===ds||ct===xa||ct===ho||ct===Uf||ct===Nf,xt=kt.getClearColor(),Et=kt.getClearAlpha(),Xt=xt.r,Zt=xt.g,Lt=xt.b;ut?(g[0]=Xt,g[1]=Zt,g[2]=Lt,g[3]=Et,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=Lt,_[3]=Et,U.clearBufferiv(U.COLOR,0,_))}else $|=U.COLOR_BUFFER_BIT}O&&($|=U.DEPTH_BUFFER_BIT),Y&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),gt.dispose(),Ht.dispose(),It.dispose(),b.dispose(),q.dispose(),tt.dispose(),le.dispose(),D.dispose(),dt.dispose(),K.dispose(),K.removeEventListener("sessionstart",yt),K.removeEventListener("sessionend",Yt),Ut.stop()};function it(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=Jt.autoReset,O=ft.enabled,Y=ft.autoUpdate,$=ft.needsUpdate,F=ft.type;mt(),Jt.autoReset=w,ft.enabled=O,ft.autoUpdate=Y,ft.needsUpdate=$,ft.type=F}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){let O=w.target;O.removeEventListener("dispose",Wt),ue(O)}function ue(w){Ne(w),It.remove(w)}function Ne(w){let O=It.get(w).programs;O!==void 0&&(O.forEach(function(Y){dt.releaseProgram(Y)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,$,F,ct){O===null&&(O=Tt);let ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=On(w,O,Y,$,F);St.setMaterial($,ut);let Et=Y.index,Xt=1;if($.wireframe===!0){if(Et=nt.getWireframeAttribute(Y),Et===void 0)return;Xt=2}let Zt=Y.drawRange,Lt=Y.attributes.position,$t=Zt.start*Xt,fe=(Zt.start+Zt.count)*Xt;ct!==null&&($t=Math.max($t,ct.start*Xt),fe=Math.min(fe,(ct.start+ct.count)*Xt)),Et!==null?($t=Math.max($t,0),fe=Math.min(fe,Et.count)):Lt!=null&&($t=Math.max($t,0),fe=Math.min(fe,Lt.count));let me=fe-$t;if(me<0||me===1/0)return;le.setup(F,$,xt,Y,Et);let Ie,ge=wt;if(Et!==null&&(Ie=et.get(Et),ge=Kt,ge.setIndex(Ie)),F.isMesh)$.wireframe===!0?(St.setLineWidth($.wireframeLinewidth*vt()),ge.setMode(U.LINES)):ge.setMode(U.TRIANGLES);else if(F.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),St.setLineWidth(Ft*vt()),F.isLineSegments?ge.setMode(U.LINES):F.isLineLoop?ge.setMode(U.LINE_LOOP):ge.setMode(U.LINE_STRIP)}else F.isPoints?ge.setMode(U.POINTS):F.isSprite&&ge.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ge.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))ge.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ft=F._multiDrawStarts,Li=F._multiDrawCounts,_e=F._multiDrawCount,ci=Et?et.get(Et).bytesPerElement:1,xs=It.get($).currentProgram.getUniforms();for(let Fn=0;Fn<_e;Fn++)xs.setValue(U,"_gl_DrawID",Fn),ge.render(Ft[Fn]/ci,Li[Fn])}else if(F.isInstancedMesh)ge.renderInstances($t,me,F.count);else if(Y.isInstancedBufferGeometry){let Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Li=Math.min(Y.instanceCount,Ft);ge.renderInstances($t,me,Li)}else ge.render($t,me)};function bt(w,O,Y){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Me(w,O,Y),w.side=Rr,w.needsUpdate=!0,Me(w,O,Y),w.side=gi):Me(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),p=Ht.get(Y),p.init(O),M.push(p),Y.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==Y&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let $=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let ut=0;ut<ct.length;ut++){let xt=ct[ut];bt(xt,Y,F),$.add(xt)}else bt(ct,Y,F),$.add(ct)}),M.pop(),p=null,$},this.compileAsync=function(w,O,Y=null){let $=this.compile(w,O,Y);return new Promise(F=>{function ct(){if($.forEach(function(ut){It.get(ut).currentProgram.isReady()&&$.delete(ut)}),$.size===0){F(w);return}setTimeout(ct,10)}Pt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Dt=null;function Qt(w){Dt&&Dt(w)}function yt(){Ut.stop()}function Yt(){Ut.start()}let Ut=new Tg;Ut.setAnimationLoop(Qt),typeof self!="undefined"&&Ut.setContext(self),this.setAnimationLoop=function(w){Dt=w,K.setAnimationLoop(w),w===null?Ut.stop():Ut.start()},K.addEventListener("sessionstart",yt),K.addEventListener("sessionend",Yt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,R),p=Ht.get(w,M.length),p.init(O),M.push(p),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),L.setFromProjectionMatrix(st),B=this.localClippingEnabled,k=lt.init(this.clippingPlanes,B),m=gt.get(w,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){let ct=x.xr.getDepthSensingMesh();ct!==null&&qt(ct,O,-1/0,x.sortObjects)}qt(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,P),Ct=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ct&&kt.addToRenderList(m,w),this.info.render.frame++,k===!0&&lt.beginShadows();let Y=p.state.shadowsArray;ft.render(Y,w,O),k===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ct=O.cameras;if(F.length>0)for(let ut=0,xt=ct.length;ut<xt;ut++){let Et=ct[ut];se($,F,w,Et)}Ct&&kt.render(w);for(let ut=0,xt=ct.length;ut<xt;ut++){let Et=ct[ut];ze(m,w,Et,Et.viewport)}}else F.length>0&&se($,F,w,O),Ct&&kt.render(w),ze(m,w,O);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,O),le.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function qt(w,O,Y,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||L.intersectsSprite(w)){$&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);let ut=tt.update(w),xt=w.material;xt.visible&&m.push(w,ut,xt,Y,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||L.intersectsObject(w))){let ut=tt.update(w),xt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),ot.copy(ut.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(xt)){let Et=ut.groups;for(let Xt=0,Zt=Et.length;Xt<Zt;Xt++){let Lt=Et[Xt],$t=xt[Lt.materialIndex];$t&&$t.visible&&m.push(w,ut,$t,Y,ot.z,Lt)}}else xt.visible&&m.push(w,ut,xt,Y,ot.z,null)}}let ct=w.children;for(let ut=0,xt=ct.length;ut<xt;ut++)qt(ct[ut],O,Y,$)}function ze(w,O,Y,$){let F=w.opaque,ct=w.transmissive,ut=w.transparent;p.setupLightsView(Y),k===!0&&lt.setGlobalState(x.clippingPlanes,Y),$&&St.viewport(I.copy($)),F.length>0&&Te(F,O,Y),ct.length>0&&Te(ct,O,Y),ut.length>0&&Te(ut,O,Y),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function se(w,O,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new nr(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?wa:er,minFilter:fs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let ct=p.state.transmissionRenderTarget[$.id],ut=$.viewport||I;ct.setSize(ut.z,ut.w);let xt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(X),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Ct&&kt.render(Y);let Et=x.toneMapping;x.toneMapping=Cr;let Xt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),k===!0&&lt.setGlobalState(x.clippingPlanes,$),Te(w,Y,$),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Lt=0,$t=O.length;Lt<$t;Lt++){let fe=O[Lt],me=fe.object,Ie=fe.geometry,ge=fe.material,Ft=fe.group;if(ge.side===gi&&me.layers.test($.layers)){let Li=ge.side;ge.side=gn,ge.needsUpdate=!0,qe(me,Y,$,Ie,ge,Ft),ge.side=Li,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}x.setRenderTarget(xt),x.setClearColor(X,Q),Xt!==void 0&&($.viewport=Xt),x.toneMapping=Et}function Te(w,O,Y){let $=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ct=w.length;F<ct;F++){let ut=w[F],xt=ut.object,Et=ut.geometry,Xt=$===null?ut.material:$,Zt=ut.group;xt.layers.test(Y.layers)&&qe(xt,O,Y,Et,Xt,Zt)}}function qe(w,O,Y,$,F,ct){w.onBeforeRender(x,O,Y,$,F,ct),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,O,Y,$,w,ct),F.transparent===!0&&F.side===gi&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(Y,O,$,F,w,ct),F.side=Rr,F.needsUpdate=!0,x.renderBufferDirect(Y,O,$,F,w,ct),F.side=gi):x.renderBufferDirect(Y,O,$,F,w,ct),w.onAfterRender(x,O,Y,$,F,ct)}function Me(w,O,Y){O.isScene!==!0&&(O=Tt);let $=It.get(w),F=p.state.lights,ct=p.state.shadowsArray,ut=F.state.version,xt=dt.getParameters(w,F.state,ct,O,Y),Et=dt.getProgramCacheKey(xt),Xt=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?q:b).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",Wt),Xt=new Map,$.programs=Xt);let Zt=Xt.get(Et);if(Zt!==void 0){if($.currentProgram===Zt&&$.lightsStateVersion===ut)return pe(w,xt),Zt}else xt.uniforms=dt.getUniforms(w),w.onBeforeCompile(xt,x),Zt=dt.acquireProgram(xt,Et),Xt.set(Et,Zt),$.uniforms=xt.uniforms;let Lt=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),pe(w,xt),$.needsLights=_n(w),$.lightsStateVersion=ut,$.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Zt,$.uniformsList=null,Zt}function Se(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=oo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function pe(w,O){let Y=It.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function On(w,O,Y,$,F){O.isScene!==!0&&(O=Tt),A.resetTextureUnits();let ct=O.fog,ut=$.isMeshStandardMaterial?O.environment:null,xt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mo,Et=($.isMeshStandardMaterial?q:b).get($.envMap||ut),Xt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!Y.morphAttributes.position,$t=!!Y.morphAttributes.normal,fe=!!Y.morphAttributes.color,me=Cr;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=x.toneMapping);let Ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,Ft=It.get($),Li=p.state.lights;if(k===!0&&(B===!0||w!==v)){let Jn=w===v&&$.id===y;lt.setState($,w,Jn)}let _e=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Li.state.version||Ft.outputColorSpace!==xt||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Et||$.fog===!0&&Ft.fog!==ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==lt.numPlanes||Ft.numIntersection!==lt.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==Zt||Ft.morphTargets!==Lt||Ft.morphNormals!==$t||Ft.morphColors!==fe||Ft.toneMapping!==me||Ft.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,Ft.__version=$.version);let ci=Ft.currentProgram;_e===!0&&(ci=Me($,O,F));let xs=!1,Fn=!1,Ro=!1,Ce=ci.getUniforms(),yi=Ft.uniforms;if(St.useProgram(ci.program)&&(xs=!0,Fn=!0,Ro=!0),$.id!==y&&(y=$.id,Fn=!0),xs||v!==w){St.buffers.depth.getReversed()?(V.copy(w.projectionMatrix),uv(V),fv(V),Ce.setValue(U,"projectionMatrix",V)):Ce.setValue(U,"projectionMatrix",w.projectionMatrix),Ce.setValue(U,"viewMatrix",w.matrixWorldInverse);let or=Ce.map.cameraPosition;or!==void 0&&or.setValue(U,rt.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Fn=!0,Ro=!0)}if(F.isSkinnedMesh){Ce.setOptional(U,F,"bindMatrix"),Ce.setOptional(U,F,"bindMatrixInverse");let Jn=F.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),Ce.setValue(U,"boneTexture",Jn.boneTexture,A))}F.isBatchedMesh&&(Ce.setOptional(U,F,"batchingTexture"),Ce.setValue(U,"batchingTexture",F._matricesTexture,A),Ce.setOptional(U,F,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",F._indirectTexture,A),Ce.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",F._colorsTexture,A));let Po=Y.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0)&&Bt.update(F,Y,ci),(Fn||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,Ce.setValue(U,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yi.envMap.value=Et,yi.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(yi.envMapIntensity.value=O.environmentIntensity),Fn&&(Ce.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&Ae(yi,Ro),ct&&$.fog===!0&&ht.refreshFogUniforms(yi,ct),ht.refreshMaterialUniforms(yi,$,W,J,p.state.transmissionRenderTarget[w.id]),oo.upload(U,Se(Ft),yi,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(oo.upload(U,Se(Ft),yi,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ce.setValue(U,"center",F.center),Ce.setValue(U,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(U,"normalMatrix",F.normalMatrix),Ce.setValue(U,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Jn=$.uniformsGroups;for(let or=0,ar=Jn.length;or<ar;or++){let Zf=Jn[or];D.update(Zf,ci),D.bind(Zf,ci)}}return ci}function Ae(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function _n(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,Y){It.get(w.texture).__webglTexture=O,It.get(w.depthTexture).__webglTexture=Y;let $=It.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let Y=It.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){R=w,E=O,T=Y;let $=!0,F=null,ct=!1,ut=!1;if(w){let Et=It.get(w);if(Et.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Et.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Et.__hasExternalTextures)A.rebindTextures(w,It.get(w.texture).__webglTexture,It.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Lt=w.depthTexture;if(Et.__boundDepthTexture!==Lt){if(Lt!==null&&It.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(ut=!0);let Zt=It.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?F=Zt[O][Y]:F=Zt[O],ct=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=It.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[Y]:F=Zt,I.copy(w.viewport),N.copy(w.scissor),H=w.scissorTest}else I.copy(at).multiplyScalar(W).floor(),N.copy(At).multiplyScalar(W).floor(),H=Nt;if(St.bindFramebuffer(U.FRAMEBUFFER,F)&&$&&St.drawBuffers(w,F),St.viewport(I),St.scissor(N),St.setScissorTest(H),ct){let Et=It.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,Y)}else if(ut){let Et=It.get(w.texture),Xt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,Y||0,Xt)}y=-1},this.readRenderTargetPixels=function(w,O,Y,$,F,ct,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=It.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(U.FRAMEBUFFER,xt);try{let Et=w.texture,Xt=Et.format,Zt=Et.type;if(!z.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&Y>=0&&Y<=w.height-F&&U.readPixels(O,Y,$,F,Gt.convert(Xt),Gt.convert(Zt),ct)}finally{let Et=R!==null?It.get(R).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,$,F,ct,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=It.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){let Et=w.texture,Xt=Et.format,Zt=Et.type;if(!z.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-$&&Y>=0&&Y<=w.height-F){St.bindFramebuffer(U.FRAMEBUFFER,xt);let Lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Lt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(O,Y,$,F,Gt.convert(Xt),Gt.convert(Zt),0);let $t=R!==null?It.get(R).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,$t);let fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hv(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(Lt),U.deleteSync(fe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,Y=0){w.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-Y),F=Math.floor(w.image.width*$),ct=Math.floor(w.image.height*$),ut=O!==null?O.x:0,xt=O!==null?O.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,ut,xt,F,ct),St.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,$=null,F=0){w.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,Y=null);let ct,ut,xt,Et,Xt,Zt,Lt,$t,fe,me=w.isCompressedTexture?w.mipmaps[F]:w.image;Y!==null?(ct=Y.max.x-Y.min.x,ut=Y.max.y-Y.min.y,xt=Y.isBox3?Y.max.z-Y.min.z:1,Et=Y.min.x,Xt=Y.min.y,Zt=Y.isBox3?Y.min.z:0):(ct=me.width,ut=me.height,xt=me.depth||1,Et=0,Xt=0,Zt=0),$!==null?(Lt=$.x,$t=$.y,fe=$.z):(Lt=0,$t=0,fe=0);let Ie=Gt.convert(O.format),ge=Gt.convert(O.type),Ft;O.isData3DTexture?(A.setTexture3D(O,0),Ft=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ft=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ft=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Li=U.getParameter(U.UNPACK_ROW_LENGTH),_e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=U.getParameter(U.UNPACK_SKIP_PIXELS),xs=U.getParameter(U.UNPACK_SKIP_ROWS),Fn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);let Ro=w.isDataArrayTexture||w.isData3DTexture,Ce=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let yi=It.get(w),Po=It.get(O),Jn=It.get(yi.__renderTarget),or=It.get(Po.__renderTarget);St.bindFramebuffer(U.READ_FRAMEBUFFER,Jn.__webglFramebuffer),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let ar=0;ar<xt;ar++)Ro&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(w).__webglTexture,F,Zt+ar),w.isDepthTexture?(Ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(O).__webglTexture,F,fe+ar),U.blitFramebuffer(Et,Xt,ct,ut,Lt,$t,ct,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ce?U.copyTexSubImage3D(Ft,F,Lt,$t,fe+ar,Et,Xt,ct,ut):U.copyTexSubImage2D(Ft,F,Lt,$t,fe+ar,Et,Xt,ct,ut);St.bindFramebuffer(U.READ_FRAMEBUFFER,null),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ft,F,Lt,$t,fe,ct,ut,xt,Ie,ge,me.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,F,Lt,$t,fe,ct,ut,xt,Ie,me.data):U.texSubImage3D(Ft,F,Lt,$t,fe,ct,ut,xt,Ie,ge,me):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Lt,$t,ct,ut,Ie,ge,me.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Lt,$t,me.width,me.height,Ie,me.data):U.texSubImage2D(U.TEXTURE_2D,F,Lt,$t,ct,ut,Ie,ge,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Li),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),U.pixelStorei(U.UNPACK_SKIP_ROWS,xs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fn),F===0&&O.generateMipmaps&&U.generateMipmap(Ft),St.unbindTexture()},this.copyTextureToTexture3D=function(w,O,Y=null,$=null,F=0){return w.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,Y,$,F)},this.initRenderTarget=function(w){It.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,St.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var xo=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ma=class extends Lr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ng=new Ue,vf=new Kl,Bl=new fo,zl=new G,oc=class extends Rn{constructor(t=new Yn,e=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=s,t.ray.intersectsSphere(Bl)===!1)return;ng.copy(i).invert(),vf.copy(t.ray).applyMatrix4(ng);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){let m=c.getX(g);zl.fromBufferAttribute(f,m),ig(zl,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)zl.fromBufferAttribute(f,g),ig(zl,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ig(r,t,e,n,i,s,o){let a=vf.distanceSqToPoint(r);if(a<e){let l=new G;vf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class r extends Yn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new G,u=new G,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],M=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let E=C/e;f.x=-t*Math.cos(i+E*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+E*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(E+x,1-M),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let M=h[p][S+1],x=h[p][S],C=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&d.push(M,x,E),(p!==n-1||l<Math.PI)&&d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vo=class r extends Yn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new G,f=new G,u=new G;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*s,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ac=class r extends Yn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],f=new G,u=new G,d=new G,g=new G,_=new G,m=new G,p=new G;for(let M=0;M<=n;++M){let x=M/n*s*Math.PI*2;S(x,s,o,t,d),S(x+.01,s,o,t,g),m.subVectors(g,d),p.addVectors(g,d),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let C=0;C<=i;++C){let E=C/i*Math.PI*2,T=-e*Math.cos(E),R=e*Math.sin(E);f.x=d.x+(T*p.x+R*_.x),f.y=d.y+(T*p.y+R*_.y),f.z=d.z+(T*p.z+R*_.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(C/i)}}for(let M=1;M<=n;M++)for(let x=1;x<=i;x++){let C=(i+1)*(M-1)+(x-1),E=(i+1)*M+(x-1),T=(i+1)*M+x,R=(i+1)*(M-1)+x;a.push(C,E,R),a.push(E,T,R)}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2));function S(M,x,C,E,T){let R=Math.cos(M),y=Math.sin(M),v=C/x*M,I=Math.cos(v);T.x=E*(2+I)*.5*R,T.y=E*(2+I)*y*.5,T.z=E*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var rr=class extends Lr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yg,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kl(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function ob(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var yo=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yf=class extends yo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sm,endingEnd:sm}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case om:s=t,a=2*e-n;break;case am:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case om:o=t,l=2*n-e;break;case am:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+S*o[c+C]+M*o[l+C]+x*o[f+C];return s}},Mf=class extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},Sf=class extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kl(e,this.TimeBufferType),this.values=kl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kl(t.times,Array),values:kl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ql:e=this.InterpolantFactoryMethodDiscrete;break;case ef:e=this.InterpolantFactoryMethodLinear;break;case Vh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return ef;case this.InterpolantFactoryMethodSmooth:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ob(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=ef;var ms=class extends vi{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ql;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var bf=class extends vi{};bf.prototype.ValueTypeName="color";var wf=class extends vi{};wf.prototype.ValueTypeName="number";var Tf=class extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ir.slerpFlat(s,0,o,c-a,o,c,l);return s}},lc=class extends vi{InterpolantFactoryMethodLinear(t){return new Tf(this.times,this.values,this.getValueSize(),t)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends vi{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ql;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ef=class extends vi{};Ef.prototype.ValueTypeName="vector";var Af=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},ab=new Af,Cf=class{constructor(t){this.manager=t!==void 0?t:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cf.DEFAULT_MATERIAL_NAME="__DEFAULT";var cc=class extends Rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var pu=new Ue,rg=new G,sg=new G,hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rg.setFromMatrixPosition(t.matrixWorld),e.position.copy(rg),sg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sg),e.updateMatrixWorld(),pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var og=new Ue,fa=new G,mu=new G,Rf=class extends hc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fa.setFromMatrixPosition(t.matrixWorld),n.position.copy(fa),mu.copy(n.position),mu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mu),n.updateMatrixWorld(),i.makeTranslation(-fa.x,-fa.y,-fa.z),og.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og)}},uc=class extends cc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pf=class extends hc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends cc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new Pf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vf="\\[\\]\\.:\\/",lb=new RegExp("["+Vf+"]","g"),Hf="[^"+Vf+"]",cb="[^"+Vf.replace("\\.","")+"]",hb=/((?:WC+[\/:])*)/.source.replace("WC",Hf),ub=/(WCOD+)?/.source.replace("WCOD",cb),fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hf),db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hf),pb=new RegExp("^"+hb+ub+fb+db+"$"),mb=["material","materials","bones","map"],If=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lb,"")}static parseTrackName(t){let e=pb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);mb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=If;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tw=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var mc=class extends xo{constructor(){super();let t=new ir;t.deleteAttribute("uv");let e=new rr({side:gn}),n=new rr,i=new uc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new ce(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ce(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ce(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ce(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ce(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ce(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new ce(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let u=new ce(t,To(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let d=new ce(t,To(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new ce(t,To(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new ce(t,To(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new ce(t,To(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new ce(t,To(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function To(r){let t=new po;return t.color.setScalar(r),t}var gc=class{constructor(t){this.canvas=t,this.progress=0,this.visible=!1;try{this.renderer=new sc({canvas:t,antialias:(window.devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"})}catch(R){console.warn("[services] WebGL unavailable",R),this.failed=!0;return}let e=this.renderer;e.setClearColor(0,0),e.toneMapping=Lf,e.toneMappingExposure=1.05,e.outputColorSpace=Nn;let n=this.scene=new xo,i=new _o(e);n.environment=i.fromScene(new mc,.04).texture,i.dispose(),this.camera=new mn(34,1,.1,100),this.camera.position.set(0,0,9);let s=new rr({color:new re("#2d66cf"),metalness:1,roughness:.3}),o=new rr({color:new re("#4f8cf0"),metalness:1,roughness:.18}),a=this.rig=new oi,l=new oi,c=new oi,h=new oi,f=new ce(new vo(1.75,.085,20,160),s),u=new ce(new vo(1.42,.07,18,140),s),d=new ce(new vo(1.12,.06,16,120),s);l.add(f),c.add(u),h.add(d);let g=new Sa(.12,32,24);for(let[R,y]of[[l,1.75],[c,1.42],[h,1.12]])for(let v of[-1,1]){let I=new ce(g,o);I.position.set(v*y,0,0),R.add(I)}let _=new ce(new ac(.5,.17,180,24,2,3),o);h.add(_),c.add(h),l.add(c),a.add(l),this.g1=l,this.g2=c,this.g3=h,this.core=_;let m=new ce(new ir(5.6,.07,.07),s);m.position.y=-.02,this.arm=new oi,this.arm.add(m);for(let R of[-1,1]){let y=new ce(new Sa(.2,40,30),o);y.position.set(R*2.8,0,0),this.arm.add(y)}a.add(this.arm),n.add(a);let p=new rr({color:new re("#f3f1ea"),roughness:.85,metalness:0,side:gi,emissive:new re("#1a1a1a")}),S=new go(.5,.66,1,1);this.panels=Array.from({length:9},(R,y)=>{let v=new ce(S,p);v.userData={seed:y*1.618,lane:y/9*2-1,speed:.6+y%3*.25,spin:{r:.4+Math.random(),g:.4+Math.random(),b:.4+Math.random()}};let I=.55+y*37%10/14;return v.scale.setScalar(I),n.add(v),v});let M=260,x=new Float32Array(M*3);for(let R=0;R<M;R++)x[R*3]=(Math.random()-.5)*16,x[R*3+1]=(Math.random()-.5)*10,x[R*3+2]=(Math.random()-.5)*6-1;let C=new Yn;C.setAttribute("position",new Xe(x,3)),this.specks=new oc(C,new Ma({color:16777215,size:.035,transparent:!0,opacity:.75,depthWrite:!1})),n.add(this.specks);let E=new ba(14412031,2.2);E.position.set(-4,6,6);let T=new ba(8380671,1.6);T.position.set(5,-2,-6),n.add(E,T),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.narrow=t/e<.9}setProgress(t){this.progress=t}render(t){if(this.failed||!this.visible)return;let e=this.progress,n=t,i=this.narrow,s=bo.lerp(i?1.2:2.6,i?-.8:-2.1,e)+Math.sin(n*.35)*.12,o=bo.lerp(1.5,-.9,e)+Math.sin(n*.5)*.1,a=bo.lerp(-1.2,.4,Math.sin(e*Math.PI));this.rig.position.set(s,o,a),this.rig.rotation.set(.35+e*.9,-.6+e*2.6+n*.05,-.25+e*.5);let l=i?.72:1;this.rig.scale.setScalar(l),this.g1.rotation.y=e*Math.PI*1.6+n*.18,this.g2.rotation.x=e*Math.PI*2.2+n*.23,this.g3.rotation.y=-e*Math.PI*2.8-n*.3,this.core.rotation.z=n*.4+e*4,this.arm.rotation.z=Math.sin(n*.6+e*6)*.18+e*.9,this.arm.rotation.y=e*1.4;for(let c of this.panels){let h=c.userData,f=(e*1.8*h.speed+n*.03*h.speed+h.seed)%1.4-.2;c.position.set(bo.lerp(7.5,-7.5,f)+Math.sin(h.seed*3)*1.2,bo.lerp(-4.2,4.4,f)+h.lane*1.6+Math.sin(n*.7+h.seed)*.25,-1.5+h.lane*2.2),c.rotation.set(n*.6*h.spin.r+f*6,n*.5*h.spin.g+f*4,n*.4*h.spin.b+h.seed)}this.specks.rotation.y=n*.02+e*.6,this.specks.position.y=-e*1.5,this.renderer.render(this.scene,this.camera)}};var Pg=880,gb={about:125,services:350},_s=[{x:72,y:58,z:-240,ry:42,rz:-5,s:.9,o:0},{x:35,y:29,z:-60,ry:24,rz:-3,s:.95,o:1},{x:3,y:11,z:60,ry:0,rz:0,s:1,o:1},{x:-30,y:-6,z:-140,ry:-30,rz:1.5,s:.92,o:1},{x:-50,y:-21,z:-380,ry:-96,rz:3,s:.86,o:.8},{x:-64,y:-33,z:-640,ry:-150,rz:4,s:.8,o:0}],_b=Object.keys(_s[0]);function xb(r,t,e,n,i){let s=i*i,o=s*i;return .5*(2*t+(-r+e)*i+(2*r-5*t+4*e-n)*s+(-r+3*t-3*e+n)*o)}function vb(r,t){let e=Math.min(_s.length-1.0001,Math.max(0,r+1)),n=Math.floor(e),i=e-n,s=_s[Math.max(0,n-1)],o=_s[n],a=_s[n+1],l=_s[Math.min(_s.length-1,n+2)];for(let c of _b)t[c]=xb(s[c],o[c],a[c],l[c],i);return t}function yb(r){let t=r.textContent.trim().split(/\s+/);r.textContent="";let e=[];return t.forEach((n,i)=>{let s=document.createElement("span");s.className="word";for(let o of n){let a=document.createElement("span");a.className="ch",a.textContent=o,s.appendChild(a),e.push(a)}r.appendChild(s),i<t.length-1&&r.appendChild(document.createTextNode(" "))}),e}function Ig({reduced:r,smooth:t}){let e=document.querySelector(".story"),n=e.querySelector(".story__pin"),i=e.querySelector(".about__title"),s=e.querySelector(".about__video"),o=s.querySelector("video"),a=e.querySelector(".services"),l=a.querySelector(".services__title"),c=[...a.querySelectorAll(".svc-card")],h=e.querySelector(".story__fade"),f=e.querySelector(".about__line path"),u=[...i.querySelectorAll(".aline")],d=[{spread:.55,rise:-.16,curve:.02,z:-260,ry:34,rx:18,rz:-12},{spread:.42,rise:-.05,curve:.03,z:-520,ry:-26,rx:30,rz:-6},{spread:.9,rise:.06,curve:.05,z:-1100,ry:40,rx:50,rz:8}],g=()=>parseFloat(getComputedStyle(i).fontSize)||100,_=u.map((j,P)=>{let at=[];return j.querySelectorAll(".split").forEach(At=>at.push(...yb(At))),{chars:at,cfg:d[P]}}),m=()=>Math.min(Math.max(window.innerWidth*(window.innerWidth<640?.26:.215),96),460),p=[...i.querySelectorAll(".aline--mid > .split")],S={k:0},M=0,x=()=>{M=m(),s.style.width=`${M}px`},C=()=>{let j=(M/2+2)*(1-S.k);p[0].style.transform=`translate3d(${j.toFixed(2)}px, 0, 0)`,p[1].style.transform=`translate3d(${(-j).toFixed(2)}px, 0, 0)`;let P=(50*(1-S.k)).toFixed(3);s.style.clipPath=`inset(0 ${P}% 0 ${P}%)`};x();let E={fade:0,t:0},T={c:0},R=null,y=null,v=()=>{let j=s.getBoundingClientRect(),P=n.getBoundingClientRect();y={top:j.top-P.top,left:j.left-P.left,right:P.right-j.right,bottom:P.bottom-j.bottom}},I=()=>{if(E.fade<=.001){a.classList.remove("is-open");return}a.classList.add("is-open"),y||v();let j=E.t,P=y.top*(1-j),at=y.left*(1-j),At=y.right*(1-j),Nt=y.bottom*(1-j);a.style.clipPath=`inset(${P.toFixed(1)}px ${At.toFixed(1)}px ${Nt.toFixed(1)}px ${at.toFixed(1)}px)`,a.style.opacity=E.fade},N={},H=()=>{let j=window.innerWidth<760,P=c.length;c.forEach((at,At)=>{let Nt=.25+T.c*(P-1+1.45)-At,L=Nt>=-1&&Nt<=4;if(at._on!==L&&(at._on=L,at.style.visibility=L?"visible":"hidden",L||(at.style.opacity=0)),!L)return;vb(Nt,N);let k=j?N.x*.55:N.x,B=j?N.y*1.05:N.y;at.style.opacity=Math.max(0,Math.min(1,N.o)).toFixed(3),at.style.transform=`translate(-50%, -50%) translate3d(${k}vw, ${B}vh, ${N.z}px) rotateY(${N.ry}deg) rotateZ(${N.rz}deg) scale(${N.s})`}),R&&R.setProgress(T.c)},X=jt.timeline({defaults:{ease:"none"}});_.forEach(({chars:j,cfg:P},at)=>{let At=(j.length-1)/2;X.fromTo(j,{x:Nt=>(Nt-At)*P.spread*g(),y:Nt=>((Nt-At)*P.rise+Math.pow(Nt-At,2)*P.curve)*g(),z:Nt=>P.z-Math.abs(Nt-At)*30,rotationY:Nt=>P.ry+(Nt-At)*4,rotationX:P.rx,rotationZ:Nt=>P.rz+(Nt-At)*1.5,opacity:.35},{x:0,y:0,z:0,rotationY:0,rotationX:0,rotationZ:0,opacity:1,duration:62,ease:"power2.out",stagger:{each:1.1,from:"center"}},at*6)});let Q=f.getTotalLength();jt.set(f,{strokeDasharray:Q,strokeDashoffset:Q}),X.to(f,{strokeDashoffset:0,duration:190,ease:"power1.inOut"},0);let Z=e.querySelectorAll(".about__grid .eyebrow, .founder, .about__copy p");X.fromTo(Z,{opacity:0,y:34},{opacity:1,y:0,duration:40,stagger:7,ease:"power2.out"},52),X.to(S,{k:1,duration:80,ease:"power2.inOut",onUpdate:C},112),X.to(E,{fade:1,duration:26,onUpdate:I},214),X.to(E,{t:1,duration:104,ease:"power3.inOut",onUpdate:I},236),X.fromTo(l,{opacity:.25,y:40},{opacity:1,y:0,duration:80,ease:"power2.out"},262),X.to(T,{c:1,duration:520,onUpdate:H},300),X.to(h,{opacity:1,duration:54},826),X.set({},{},Pg);let J=Vt.create({trigger:e,start:"top top",end:"bottom bottom",animation:X,scrub:t||r?!0:.5,invalidateOnRefresh:!0,onRefreshInit:()=>{x(),y=null},onRefresh:()=>{C(),I(),H()}}),W=!1;return Vt.create({trigger:e,start:"top bottom",end:()=>`top+=${window.innerHeight*3.4} top`,onToggle:j=>{r||(j.isActive&&!W?(W=!0,o.play().catch(()=>{})):!j.isActive&&W&&(W=!1,o.pause()))}}),Vt.create({trigger:e,start:"top 200%",once:!0,onEnter:()=>{R=new gc(a.querySelector(".services__gl")),R.setProgress(T.c)}}),C(),H(),{st:J,anchor(j){let P=gb[j];return J.start+(J.end-J.start)*(P/Pg)},resize(){R&&R.resize(),x(),y=null,C(),H(),I()},tick(j,P){if(!R)return;let at=window.innerHeight;R.visible=E.fade>.01&&P>J.start-at&&P<J.end+at,R.render(j)}}}var _c=(r,t)=>r.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function Lg(r){let t=r.querySelector(".stat__bars"),e=t.clientWidth||300,n=Math.max(14,Math.round(e/8.6));if(t.childElementCount===n)return[...t.children];t.textContent="";let i=r.dataset.slope==="true",s=[];for(let o=0;o<n;o++){let a=o/(n-1),l=1;if(i&&a>.58){let h=(a-.58)/.42;l=Math.sqrt(1-h*h*.5)}let c=document.createElement("i");c.style.height=`${l*100}%`,t.appendChild(c),s.push(c)}return s}function Dg({reduced:r}){let t=document.querySelector(".metrics"),e=t.querySelector(".metrics__num"),n=t.querySelector(".metrics__big em"),i=t.querySelector(".metrics__aside"),s=[...t.querySelectorAll(".stat")],o=s.map(Lg);if(r)return{resize(){}};let a={v:7.2};jt.set(o.flat(),{scaleY:0}),jt.set([e,n],{opacity:0,filter:"blur(14px)"}),jt.set(i,{opacity:0,y:20}),s.forEach(h=>jt.set(h.querySelectorAll(".stat__value, .stat__label, .stat__sub"),{opacity:0,y:14})),e.textContent="$7.2",s.forEach(h=>{let f=h.querySelector(".stat__value");f.textContent=_c(0,+(f.dataset.decimals||0))+(f.dataset.suffix||"")});let l=!1,c=()=>{if(l)return;l=!0;let h=jt.timeline();h.to([e,n],{opacity:1,filter:"blur(0px)",duration:1.2,ease:"power2.out",stagger:.25},0).to(a,{v:11.2,duration:2.6,ease:"power3.out",onUpdate:()=>{e.textContent="$"+_c(a.v,1)}},0).to(i,{opacity:1,y:0,duration:.9,ease:"power3.out"},.5),s.forEach((f,u)=>{let d=.45+u*.22,g=f.querySelector(".stat__value"),_=parseFloat(g.dataset.count),m=+(g.dataset.decimals||0),p={v:0};h.to(f.querySelectorAll(".stat__value, .stat__label, .stat__sub"),{opacity:1,y:0,duration:.8,stagger:.08,ease:"power3.out"},d).to(p,{v:_,duration:2.2,ease:"power3.out",onUpdate:()=>{g.textContent=_c(p.v,p.v<_?Math.max(m,_<10?2:0):m)+(g.dataset.suffix||"")},onComplete:()=>{g.textContent=_c(_,m)+(g.dataset.suffix||"")}},d).to(o[u],{scaleY:1,duration:1.5,ease:"power3.out",stagger:{each:.028}},d+.05)})};return Vt.create({trigger:t,start:"top 62%",once:!0,onEnter:c}),{resize(){let h=o.map(f=>f.length);o=s.map(Lg),o.some((f,u)=>f.length!==h[u])&&jt.set(o.flat(),{scaleY:l?1:0})}}}function Ug({reduced:r}){let t=document.querySelector(".team"),e=t.querySelector(".team__shift"),n=t.querySelector(".team__bars"),i=t.querySelector(".team__head"),s=[...t.querySelectorAll(".member")],o=Array.from({length:18},()=>{let u=document.createElement("i");return n.appendChild(u),u}),a=[],l=0,c=()=>{ml(l,window.innerWidth,window.innerHeight,0,a),a.forEach((u,d)=>{o[d].style.transform=`translate3d(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px, 0) scale(${(u.w/100).toFixed(4)}, ${(u.h/100).toFixed(4)})`})};c(),Vt.create({trigger:e,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:u=>{l=jt.utils.clamp(0,1,(u.progress-100/170)/(70/170)),c()}});let h=s.map(u=>u.querySelector(".member__num"));if(r)return{resize:c};let f=i.querySelectorAll(".team__title, .team__sub");return jt.set(f,{opacity:0,filter:"blur(14px)",y:24}),jt.set(s,{opacity:0,y:46}),h.forEach(u=>{u.textContent="0+"}),Vt.create({trigger:i,start:"top 86%",once:!0,onEnter:()=>jt.to(f,{opacity:1,filter:"blur(0px)",y:0,duration:1.3,stagger:.18,ease:"power3.out"})}),Vt.create({trigger:t.querySelector(".team__grid"),start:"top 88%",once:!0,onEnter:()=>{jt.to(s,{opacity:1,y:0,duration:1.2,stagger:.16,ease:"power3.out"}),h.forEach((u,d)=>{let g=parseFloat(u.dataset.count),_={v:0};jt.to(_,{v:g,duration:2.4,delay:.35+d*.16,ease:"power3.out",onUpdate:()=>{u.textContent=Math.round(_.v).toLocaleString("en-US")+(u.dataset.suffix||"")}})})}}),{resize:c}}jt.registerPlugin(Vt);Vt.config({ignoreMobileResize:!0});var Co=window.matchMedia("(prefers-reduced-motion: reduce)").matches;"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);var $n=null;Co||($n=new Jp({lerp:.085,smoothWheel:!0,wheelMultiplier:.95,touchMultiplier:1.4}),$n.on("scroll",Vt.update),jt.ticker.add(r=>$n.raf(r*1e3)),jt.ticker.lagSmoothing(0),$n.stop());var yc=()=>$n?$n.scroll:window.scrollY,Mb=document.querySelector(".hero"),Sb=document.querySelector(".hero__content"),sr=new gl(document.querySelector(".hero__gl")),Zn={y:0,bottom:1,q:0,smix:0},qf={mix:0},bb=[],Gf=window.innerWidth,Eo=window.innerHeight,Ta=()=>{Sb.style.transform=`translate3d(0, ${(Zn.y*Eo).toFixed(2)}px, 0)`,sr.state.heroBottom=Zn.bottom,sr.state.mix=Math.max(qf.mix,Zn.smix),sr.setBars(Zn.bottom<1.02?ml(Zn.q,Gf,Eo,Zn.bottom*Eo,bb):[])},Fg=jt.timeline({defaults:{ease:"none"},onUpdate:Ta});Fg.to(Zn,{smix:1,duration:34},0).to(Zn,{y:-.8,duration:40},0).to(Zn,{bottom:.26,duration:18,ease:"power1.inOut"},34).to(Zn,{q:.15,duration:18},34).to(Zn,{q:.55,duration:22},52).to(Zn,{y:-1.2,bottom:-.03,duration:26,ease:"power1.in"},74).to(Zn,{q:1,duration:26},74);var Bg=1/0;Vt.create({trigger:Mb,start:"top top",end:"bottom bottom",animation:Fg,scrub:!0,onRefresh:r=>{Bg=r.end+Eo}});Ta();var vc=Ig({reduced:Co,smooth:!!$n}),wb=Dg({reduced:Co}),Tb=Ug({reduced:Co}),Ao=document.getElementById("nav"),Wf=document.getElementById("nav-toggle");Wf.addEventListener("click",()=>{let r=!Ao.classList.contains("is-open");Ao.classList.toggle("is-open",r),Wf.setAttribute("aria-expanded",String(r))});var xc=0,Ng=()=>{let r=yc();if(Ao.classList.contains("is-open")){xc=r;return}r>140&&r>xc+2?Ao.classList.add("is-hidden"):(r<xc-2||r<=140)&&Ao.classList.remove("is-hidden"),xc=r};$n?$n.on("scroll",Ng):window.addEventListener("scroll",Ng,{passive:!0});var Eb=r=>{if(r==="#top")return 0;if(r==="#about")return vc.anchor("about");if(r==="#services")return vc.anchor("services");let t=document.querySelector(r);return t?t.getBoundingClientRect().top+yc():null};document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e.length<2)return;let n=Eb(e);if(n!=null)if(r.preventDefault(),Ao.classList.remove("is-open"),Wf.setAttribute("aria-expanded","false"),$n){let i=Math.abs(n-yc());$n.scrollTo(n,{duration:Math.min(2.6,.9+i/(Eo*8))})}else window.scrollTo({top:n,behavior:Co?"auto":"smooth"})});var Yf=!1;jt.ticker.add(r=>{let t=yc();Yf&&t<Bg&&sr.render(r),vc.tick(r,t)});var Og=0,Ab=window.matchMedia("(pointer: coarse)").matches;window.addEventListener("resize",()=>{Ab&&window.innerWidth===Gf||(clearTimeout(Og),Og=setTimeout(()=>{Gf=window.innerWidth,Eo=window.innerHeight,sr.resize(),vc.resize(),wb.resize(),Tb.resize(),Ta(),Vt.refresh()},120))});document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Vt.refresh());var Xf=window.matchMedia("(min-width: 981px)").matches,zg={logo:document.querySelector(".nav__logo"),menu:document.querySelector(".nav__menu"),menuLinks:document.querySelectorAll(".nav__menu a"),right:document.querySelector(".nav__right"),words:document.querySelectorAll(".hero__title .w"),sub:document.querySelector(".hero__sub"),cta:document.querySelector(".hero__cta")};function Cb(){Yf=!0;let r=zg,t=jt.timeline({onComplete:()=>{Xf&&jt.set(r.menu,{clearProps:"clipPath"})}});t.to(sr.state,{reveal:1,duration:.8,ease:"power2.out"},0).to(sr.state,{warp:0,duration:2.2,ease:"power3.inOut"},.1).to(r.logo,{opacity:1,scale:1,duration:.8,ease:"power3.out"},.9).to(r.right,{opacity:1,x:0,duration:.8,ease:"power3.out"},1.05).to(r.words,{opacity:1,filter:"blur(0px)",yPercent:0,duration:1.2,stagger:.09,ease:"power3.out"},1.1).to(r.sub,{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power3.out"},1.6).to(r.cta,{opacity:1,y:0,duration:.9,ease:"power3.out"},1.8).add(()=>{document.body.classList.remove("is-loading"),$n&&$n.start()},1.4).to(qf,{mix:1,duration:7,ease:"sine.inOut",onUpdate:Ta},2.8),Xf&&t.fromTo(r.menu,{opacity:1,clipPath:"inset(0% 50% 0% 50% round 9px)"},{clipPath:"inset(0% 0% 0% 0% round 9px)",duration:1.1,ease:"power3.inOut"},.95).to(r.menuLinks,{opacity:1,y:0,duration:.6,stagger:.07,ease:"power2.out"},1.25)}if(Co)Yf=!0,sr.state.reveal=1,sr.state.warp=0,qf.mix=1,Ta(),zh({el:document.getElementById("preloader"),reduced:!0,onDone:()=>document.body.classList.remove("is-loading")});else{let r=zg;jt.set(r.logo,{opacity:0,scale:.7}),jt.set(r.right,{opacity:0,x:24}),jt.set(r.words,{opacity:0,filter:"blur(14px)",yPercent:35}),jt.set(r.sub,{opacity:0,y:18,filter:"blur(6px)"}),jt.set(r.cta,{opacity:0,y:18}),Xf&&(jt.set(r.menu,{clipPath:"inset(0% 50% 0% 50% round 9px)"}),jt.set(r.menuLinks,{opacity:0,y:6})),zh({el:document.getElementById("preloader"),reduced:!1,onReveal:Cb})}})();
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
