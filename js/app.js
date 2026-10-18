(()=>{var Kg=Object.defineProperty;var Qg=(r,t,e)=>t in r?Kg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var zt=(r,t,e)=>Qg(r,typeof t!="symbol"?t+"":t,e);function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ds={duration:.5,overwrite:!1,delay:0},Mh,on,Pe,ri=1e8,be=1/ri,hh=Math.PI*2,jg=hh/4,t_=0,Kd=Math.sqrt,e_=Math.cos,n_=Math.sin,$e=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},Vi=function(t){return typeof t=="number"},tl=function(t){return typeof t=="undefined"},Pi=function(t){return typeof t=="object"},Bn=function(t){return t!==!1},Sh=function(){return typeof window!="undefined"},Xa=function(t){return Be(t)||$e(t)},Qd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,uh=/(?:-?\.?\d|\.)+/gi,bh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ih=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wh=/[+-]=-?[.\d]+/,jd=/[^,'"\[\]\s]+/gi,i_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Ci,fh,Th,Yn={},$a={},tp,ep=function(t){return($a=Us(t,Yn))&&fn},el=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xo=function(t,e){return!e&&console.warn(t)},np=function(t,e){return t&&(Yn[t]=e)&&$a&&($a[t]=e)||Yn},qo=function(){return 0},r_={suppressEvents:!0,isStart:!0,kill:!1},qa={suppressEvents:!0,kill:!1},s_={suppressEvents:!0},Eh={},dr=[],dh={},ip,On={},rh={},Gd=30,Ya=[],Ah="",Ch=function(t){var e=t[0],n,i;if(Pi(e)||Be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ya.length;i--&&!Ya[i].targetTest(e););n=Ya[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Lh(t[i],n)))||t.splice(i,1);return t},pr=function(t){return t._gsap||Ch(si(t))[0]._gsap},Rh=function(t,e,n){return(n=t[e])&&Be(n)?t[e]():tl(n)&&t.getAttribute&&t.getAttribute(e)||n},Mn=function(t,e){return(t=t.split(",")).forEach(e)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},We=function(t){return Math.round(t*1e7)/1e7||0},Xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},o_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ja=function(){var t=dr.length,e=dr.slice(0),n,i;for(dh={},dr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ph=function(t){return!!(t._initted||t._startAt||t.add)},rp=function(t,e,n,i){dr.length&&!on&&Ja(),t.render(e,n,i||!!(on&&e<0&&Ph(t))),dr.length&&!on&&Ja()},sp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(jd).length<2?e:$e(t)?t.trim():t},op=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},a_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Us=function(t,e){for(var n in e)t[n]=e[n];return t},Wd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ka=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ho=function(t){var e=t.parent||De,n=t.keyframes?a_(un(t.keyframes)):Zn;if(Bn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},l_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ap=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},nl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},mr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},c_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ph=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(qa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},h_=function r(t){return!t||t._ts&&r(t.parent)},Xd=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t=We(t/e));return t&&n===t?n-1:n},Qa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},il=function(t){return t._end=We(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},rl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=We(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),il(t),n._dirty||Vr(n,t)),t},lp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Qa(t.rawTime(),e),(!e._dur||$o(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),Vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},Ri=function(t,e,n,i){return e.parent&&mr(e),e._start=We((Vi(n)?n:n||t!==De?ii(t,n,e):t._time)+e._delay),e._end=We(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ap(t,e,"_first","_last",t._sort?"_start":0),mh(e)||(t._recent=e),i||lp(t,e),t._ts<0&&rl(t,t._tTime),t},cp=function(t,e){return(Yn.ScrollTrigger||el("scrollTrigger",e))&&Yn.ScrollTrigger.create(e,t)},hp=function(t,e,n,i,s){if(Nh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ip!==Fn.frame)return dr.push(t),t._lazy=[s,i],1},u_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},mh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},f_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&u_(t)&&!(!t._initted&&mh(t))||(t._ts<0||t._dp._ts<0)&&!mh(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=$o(0,t._tDur,e),h=Ns(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ns(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||on||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&hp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ph(t,e,n,!0),t._onUpdate&&!n&&qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&mr(t,1),!n&&!on&&(qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},d_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Os=function(t,e,n,i){var s=t._repeat,o=We(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:We(o*(s+1)+t._rDelay*s):o,a>0&&!i&&rl(t,t._tTime=t._tDur*a),t.parent&&il(t),n||Vr(t.parent,t),t},qd=function(t){return t instanceof sn?Vr(t):Os(t,t._dur)},p_={_start:0,endTime:qo,totalDuration:qo},ii=function r(t,e,n){var i=t.labels,s=t._recent||p_,o=t.duration()>=ri?s.endTime(!1):t._dur,a,l,c;return $e(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Go=function(t,e,n){var i=Vi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;o.immediateRender=Bn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ge(e[0],o,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},$o=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!$e(t)||!(e=i_.exec(t))?"":e[1]},m_=function(t,e,n){return gr(n,function(i){return $o(t,e,i)})},gh=[].slice,up=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==Ci},g_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return $e(i)&&!e||up(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):$e(t)&&!n&&(fh||!Fs())?gh.call((e||Th).querySelectorAll(t),0):un(t)?g_(t,n):up(t)?gh.call(t,0):t?[t]:[]},_h=function(t){return t=si(t)[0]||Xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return si(e,n.querySelectorAll?n:n===t?Xo("Invalid scope")||Th.createElement("div"):t)}},fp=function(t){return t.sort(function(){return .5-Math.random()})},dp=function(t){if(Be(t))return t;var e=Pi(t)?t:{each:t},n=Hr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return $e(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||e).length,g=o[_],m,M,v,x,C,T,w,R,S;if(!g){if(S=e.grid==="auto"?0:(e.grid||[1,ri])[1],!S){for(w=-ri;w<(w=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],m=l?Math.min(S,_)*h-.5:i%S,M=S===ri?0:l?_*u/S-.5:i/S|0,w=0,R=ri,T=0;T<_;T++)v=T%S-m,x=M-(T/S|0),g[T]=C=c?Math.abs(c==="y"?x:v):Kd(v*v+x*x),C>w&&(w=C),C<R&&(R=C);i==="random"&&fp(g),g.max=w-R,g.min=R,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=an(e.amount||e.each)||0,n=n&&_<0?Sp(n):n}return _=(g[f]-g.min)/g.max||0,We(g.b+(n?n(_):_)*g.v)+g.u}},xh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=We(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Vi(n)?0:an(n))}},pp=function(t,e){var n=un(t),i,s;return!n&&Pi(t)&&(i=n=t.radius||ri,t.values?(t=si(t.values),(s=!Vi(t[0]))&&(i*=i)):t=xh(t.increment)),gr(e,n?Be(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Vi(o)?h:h+an(o)}:xh(t))},mp=function(t,e,n,i){return gr(un(t)?!e:n===!0?!!(n=0):!i,function(){return un(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},__=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},x_=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},v_=function(t,e,n){return _p(t,e,0,1,n)},gp=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},y_=function r(t,e,n){var i=e-t;return un(t)?gp(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},M_=function r(t,e,n){var i=e-t,s=i*2;return un(t)?gp(t,r(0,t.length-1),e):gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Bs=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?jd:uh),n+=t.substr(e,i-e)+mp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},_p=function(t,e,n,i,s){var o=e-t,a=i-n;return gr(s,function(l){return n+((l-t)/o*a||0)})},S_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=$e(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(un(t)&&!un(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=e}else i||(t=Us(un(t)?[]:{},t));if(!h){for(l in e)Dh.call(a,t,l,"get",e[l]);s=function(p){return Bh(p,a)||(o?t.p:t)}}}return gr(n,s)},Yd=function(t,e,n){var i=t.labels,s=ri,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(t,e,n){var i=t.vars,s=i[e],o=Pe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&dr.length&&Ja(),a&&(Pe=a),h=l?s.apply(c,l):s.call(c),Pe=o,h},ko=function(t){return mr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&qn(t,"onInterrupt"),t},Ls,xp=[],vp=function(t){if(t)if(t=!t.name&&t.default||t,Sh()||t.headless){var e=t.name,n=Be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:qo,render:Bh,add:Dh,kill:B_,modifier:F_,rawVars:0},o={targetTest:0,get:0,getSetter:sl,aliases:{},register:0};if(Fs(),t!==i){if(On[e])return;Zn(i,Zn(Ka(t,s),o)),Us(i.prototype,Us(s,Ka(t,o))),On[i.prop=e]=i,t.targetTest&&(Ya.push(i),Eh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}np(e,i),t.register&&t.register(fn,i,Sn)}else xp.push(t)},Se=255,Vo={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},sh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},yp=function(t,e,n){var i=t?Vi(t)?[t>>16,t>>8&Se,t&Se]:0:Vo.black,s,o,a,l,c,h,u,f,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vo[t])i=Vo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(uh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=sh(l+1/3,s,o),i[1]=sh(l,s,o),i[2]=sh(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(bh),n&&i.length<4&&(i[3]=1),i}else i=t.match(uh)||Vo.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Mp=function(t){var e=[],n=[],i=-1;return t.split(ki).forEach(function(s){var o=s.match(Wr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Zd=function(t,e,n){var i="",s=(t+i).match(ki),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=yp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Mp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ki,"1").split(Wr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ki),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ki=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),b_=/hsl[a]?\(/,Ih=function(t){var e=t.join(" "),n;if(ki.lastIndex=0,ki.test(e))return n=b_.test(e),t[1]=Zd(t[1],n),t[0]=Zd(t[0],n,Mp(t[1])),!0},Yo,Fn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,p=function _(g){var m=r()-i,M=g===!0,v,x,C,T;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,v=C-o,(v>0||M)&&(T=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,o+=v+(v>=s?4:s-v),x=1),M||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](C,f,T,g)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){tp&&(!fh&&Sh()&&(Ci=fh=window,Th=Ci.document||{},Yn.gsap=fn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(fn.version),ep($a||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),xp.forEach(vp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},Yo=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Yo=0,c=qo},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,m,M){var v=m?function(x,C,T,w){g(x,C,T,w),u.remove(v)}:g;return u.remove(g),a[M?"unshift":"push"](v),Fs(),v},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u})(),Fs=function(){return!Yo&&Fn.wake()},le={},w_=/^[\d.\-M][\d.\-,\s]/,T_=/["']/g,E_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(T_,"").trim():+c,i=l.substr(a+1).trim();return e},A_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},C_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[E_(e[1])]:A_(t).split(",").map(sp)):le._CE&&w_.test(t)?le._CE("",t):n},Sp=function(t){return function(e){return 1-t(1-e)}},bp=function r(t,e){for(var n=t._first,i;n;)n instanceof sn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Hr=function(t,e){return t&&(Be(t)?t:le[t]||C_(t))||e},qr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Mn(t,function(a){le[a]=Yn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},wp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/hh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*n_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:wp(a);return s=hh/s,l.config=function(c,h){return r(t,c,h)},l},ah=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:wp(n);return i.config=function(s){return r(t,s)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;qr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;qr("Elastic",oh("in"),oh("out"),oh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};qr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});qr("Circ",function(r){return-(Kd(1-r*r)-1)});qr("Sine",function(r){return r===1?1:-e_(r*jg)+1});qr("Back",ah("in"),ah("out"),ah());le.SteppedEase=le.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-be;return function(a){return((i*$o(0,o,a)|0)+s)*n}}};Ds.ease=le["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ah+=r+","+r+"Params,"});var Lh=function(t,e){this.id=t_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rh,this.set=e?e.getSetter:sl},Zo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Os(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Yo||Fn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rl(this,n),!s._dp||s.parent||lp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime($o(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),il(this),c_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=s_);var i=on;return on=n,Ph(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,qd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ii(this,n),Bn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i)),this._dur||(this._zTime=-be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Be(n)?n:op,a=function(){var c=i.then;i.then=null,Be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ko(this)},r})();Zn(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var sn=(function(r){Jd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),De&&Ri(n.parent||De,zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cp(zi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Go(0,arguments,this),this},e.from=function(i,s,o){return Go(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Go(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ho(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ge(i,s,ii(this,o),1),this},e.call=function(i,s,o){return Ri(this,Ge.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ge(i,o,ii(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ho(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ho(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:We(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,g,m,M,v,x,C,T,w;if(this!==De&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,v=this._ts,m=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=We(h%g),h===l?(_=this._repeat,f=c):(C=We(h/g),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Ns(this._tTime,g),!a&&this._tTime&&C!==_&&this._tTime-C*g-this._dur<=0&&(C=_),T&&_&1&&(f=c-f,w=1),_!==C&&!this._lock){var R=T&&C&1,S=R===(T&&_&1);if(_<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(w?0:We(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;bp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=d_(this,We(a),We(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!C&&(qn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=-be);break}}d=p}else{d=this._last;for(var y=i<0?i:f;d;){if(p=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||on&&Ph(d)),f!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=y?-be:be);break}}d=p}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-be)._zTime=f>=a?1:-1,this._ts))return this._start=x,il(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Vi(s)||(s=ii(this,s,i)),!(i instanceof Zo)){if(un(i))return i.forEach(function(a){return o.add(a,s)}),this;if($e(i))return this.addLabel(i,s);if(Be(i))i=Ge.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ge?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return $e(i)?this.removeLabel(i):Be(i)?this.killTweensOf(i):(i.parent===this&&nl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=We(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ge.delayedCall(0,s||qo,o);return a.data="isPause",this._hasPause=1,Ri(this,a,ii(this,i))},e.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&mr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=si(i),l=this._first,c=Vi(s),h;l;)l instanceof Ge?o_(l._targets,a)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ii(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=Ge.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||be,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Os(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:ii(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Yd(this,ii(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Yd(this,ii(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Vr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ri,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Os(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(rp(De,Qa(i,De)),ip=Fn.frame),Fn.frame>=Gd){Gd+=zn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&zn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},t})(Zo);Zn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var R_=function(t,e,n,i,s,o,a){var l=new Sn(this._pt,t,e,0,1,Fh,null,s),c=0,h=0,u,f,d,p,_,g,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Bs(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),f=n.match(ih)||[];u=ih.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Xr(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=ih.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wh.test(i)||m)&&(l.e=0),this._pt=l,l},Dh=function(t,e,n,i,s,o,a,l,c,h){Be(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Be(u)?c?t[e.indexOf("set")||!Be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Be(u)?c?U_:Ap:Oh,p;if($e(i)&&(~i.indexOf("random(")&&(i=Bs(i)),i.charAt(1)==="="&&(p=Xr(f,i)+(an(f)||0),(p||p===0)&&(i=p))),!h||f!==i||vh)return!isNaN(f*i)&&i!==""?(p=new Sn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?O_:Cp,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!u&&!(e in t)&&el(e,i),R_.call(this,t,e,f,i,d,l||zn.stringFilter,c))},P_=function(t,e,n,i,s){if(Be(t)&&(t=Wo(t,s,e,n,i)),!Pi(t)||t.style&&t.nodeType||un(t)||Qd(t))return $e(t)?Wo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Wo(t[a],s,e,n,i);return o},Uh=function(t,e,n,i,s,o){var a,l,c,h;if(On[t]&&(a=new On[t]).init(s,a.rawVars?e[t]:P_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Sn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},fr,vh,Nh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:g,v=t._overwrite==="auto"&&!Mh,x=t.timeline,C,T,w,R,S,y,I,U,z,H,Z,G,K;if(x&&(!f||!s)&&(s="none"),t._ease=Hr(s,Ds.ease),t._yEase=u?Sp(Hr(u===!0?s:u,Ds.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(U=g[0]?pr(g[0]).harness:0,G=U&&i[U.prop],C=Ka(i,Eh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?qa:r_),_._lazy=0),o){if(mr(t._startAt=Ge.set(g,Zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!a&&!d)&&t._startAt.revert(qa),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),w=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Bn(l),immediateRender:a,stagger:0,parent:m},C),G&&(w[U.prop]=G),mr(t._startAt=Ge.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(qa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Bn(l)||l&&!p,T=0;T<g.length;T++){if(S=g[T],I=S._gsap||Ch(g)[T]._gsap,t._ptLookup[T]=H={},dh[I.id]&&dr.length&&Ja(),Z=M===g?T:M.indexOf(S),U&&(z=new U).init(S,G||C,t,Z,M)!==!1&&(t._pt=R=new Sn(t._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(X){H[X]=R}),z.priority&&(y=1)),!U||G)for(w in C)On[w]&&(z=Uh(w,C,t,Z,S,M))?z.priority&&(y=1):H[w]=R=Dh.call(t,S,w,"get",C[w],Z,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(S,t._op[T]),v&&t._pt&&(fr=t,De.killTweensOf(S,H,t.globalTime(e)),K=!t.parent,fr=0),t._pt&&l&&(dh[I.id]=1)}y&&zh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&x.render(ri,!0,!0)},I_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return vh=1,t.vars[e]="+=0",Nh(t,a),vh=0,l?Xo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ze(n)+an(u.e)),u.b&&(u.b=h.s+an(u.b))},L_=function(t,e){var n=t[0]?pr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Us({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},D_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(un(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Wo=function(t,e,n,i,s){return Be(t)?t.call(e,n,i,s):$e(t)&&~t.indexOf("random(")?Bs(t):t},Tp=Ah+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ep={};Mn(Tp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});var Ge=(function(r){Jd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ho(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,M=i.parent||De,v=(un(n)||Qd(n)?Vi(n[0]):"length"in i)?[n]:si(n),x,C,T,w,R,S,y,I;if(a._targets=v.length?Ch(v):Xo("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Xa(c)||Xa(h)){if(i=a.vars,x=a.timeline=new sn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),x.kill(),x.parent=x._dp=zi(a),x._start=0,f||Xa(c)||Xa(h)){if(w=v.length,y=f&&dp(f),Pi(f))for(R in f)~Tp.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(C=0;C<w;C++)T=Ka(i,Ep),T.stagger=0,m&&(T.yoyoEase=m),I&&Us(T,I),S=v[C],T.duration=+Wo(c,zi(a),C,S,v),T.delay=(+Wo(h,zi(a),C,S,v)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),x.to(S,T,y?y(C,S,v):0),x._ease=le.none;x.duration()?c=h=0:a.timeline=0}else if(p){Ho(Zn(x.vars.defaults,{ease:"none"})),x._ease=Hr(p.ease||i.ease||"none");var U=0,z,H,Z;if(un(p))p.forEach(function(G){return x.to(v,G,">")}),x.duration();else{T={};for(R in p)R==="ease"||R==="easeEach"||D_(R,p[R],T,p.easeEach);for(R in T)for(z=T[R].sort(function(G,K){return G.t-K.t}),U=0,C=0;C<z.length;C++)H=z[C],Z={ease:H.e,duration:(H.t-(C?z[C-1].t:0))/100*c},Z[R]=H.v,x.to(v,Z,U),U+=Z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Mh&&(fr=zi(a),De.killTweensOf(v),fr=0),Ri(M,zi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!p&&a._start===We(M._time)&&Bn(u)&&h_(zi(a))&&M.data!=="nested")&&(a._tTime=-be,a.render(Math.max(0,-h)||0)),g&&cp(zi(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-be&&!h?l:i<be?0:i,f,d,p,_,g,m,M,v,x;if(!c)f_(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=We(u%_),u===l?(p=this._repeat,f=c):(g=We(u/_),p=~~g,p&&p===g?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(x=this._yEase,f=c-f),g=Ns(this._tTime,_),f===a&&!o&&this._initted&&p===g)return this._tTime=u,this;p!==g&&(v&&this._yEase&&bp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(We(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(hp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&u&&!s&&!g&&(qn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ph(this,i,s,o),qn(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ph(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(h&&!a)&&(u||a||m)&&(qn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Yo||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Nh(this,c),h=this._ease(c/this._dur),I_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(rl(this,0),this.parent||ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fr&&fr.vars.overwrite!==!0)._first||ko(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?si(i):a,c=this._ptLookup,h=this._pt,u,f,d,p,_,g,m;if((!s||s==="all")&&l_(a,l))return s==="all"&&(this._pt=0),ko(this);for(u=this._op=this._op||[],s!=="all"&&($e(s)&&(_={},Mn(s,function(M){return _[M]=1}),s=_),s=L_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,p=f,d={}):(d=u[m]=u[m]||{},p=s);for(_ in p)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&nl(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&ko(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Go(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Go(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t})(Zo);Zn(Ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(r){Ge[r]=function(){var t=new sn,e=gh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Oh=function(t,e,n){return t[e]=n},Ap=function(t,e,n){return t[e](n)},U_=function(t,e,n,i){return t[e](i.fp,n)},N_=function(t,e,n){return t.setAttribute(e,n)},sl=function(t,e){return Be(t[e])?Ap:tl(t[e])&&t.setAttribute?N_:Oh},Cp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},O_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Fh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},F_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},B_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?nl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},z_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zh=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Sn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cp,this.d=l||this,this.set=c||Oh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=z_,this.m=n,this.mt=s,this.tween=i},r})();Mn(Ah+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eh[r]=1});Yn.TweenMax=Yn.TweenLite=Ge;Yn.TimelineLite=Yn.TimelineMax=sn;De=new sn({sortChildren:!1,defaults:Ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Ih;var Gr=[],Za={},k_=[],$d=0,V_=0,lh=function(t){return(Za[t]||k_).map(function(e){return e()})},yh=function(){var t=Date.now(),e=[];t-$d>2&&(lh("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ci.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),lh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),$d=t,lh("matchMedia"))},Rp=(function(){function r(e,n){this.selector=n&&_h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=V_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Be(n)&&(s=i,i=n,n=Be);var o=this,a=function(){var c=Pe,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=_h(s)),Pe=o,u=i.apply(o,arguments),Be(u)&&o._r.push(u),Pe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Be?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ge)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Gr.length;o--;)Gr[o].id===this.id&&Gr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),H_=(function(){function r(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Pi(n)||(n={matches:n});var o=new Rp(0,s||this.scope),a=o.conditions={},l,c,h;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ci.matchMedia(n[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(yh):l.addEventListener("change",yh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return vp(i)})},timeline:function(t){return new sn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){$e(t)&&(t=si(t)[0]);var s=pr(t||{}).get,o=n?op:sp;return n==="native"&&(n=""),t&&(e?o((On[e]&&On[e].get||s)(t,e,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=si(t),t.length>1){var i=t.map(function(h){return fn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=On[e],a=pr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Ls._pt=0,u.init(t,n?h+n:h,Ls,0,[t]),u.render(1,u),Ls._pt&&Bh(1,Ls)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=fn.to(t,Zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Hr(t.ease,Ds.ease)),Wd(Ds,t||{})},config:function(t){return Wd(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Yn[a]&&Xo(e+" effect requires "+a+" plugin.")}),rh[e]=function(a,l,c){return n(si(a),Zn(l||{},s),c)},o&&(sn.prototype[e]=function(a,l,c){return this.add(rh[e](a,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Hr(e)},parseEase:function(t,e){return arguments.length?Hr(t,e):le},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new sn(t),i,s;for(n.smoothChildTiming=Bn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ge&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(De,n,0),n},context:function(t,e){return t?new Rp(t,e):Pe},matchMedia:function(t){return new H_(t)},matchMediaRefresh:function(){return Gr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||yh()},addEventListener:function(t,e){var n=Za[t]||(Za[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Za[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:y_,wrapYoyo:M_,distribute:dp,random:mp,snap:pp,normalize:v_,getUnit:an,clamp:m_,splitColor:yp,toArray:si,selector:_h,mapRange:_p,pipe:__,unitize:x_,interpolate:S_,shuffle:fp},install:ep,effects:rh,ticker:Fn,updateRoot:sn.updateRoot,plugins:On,globalTimeline:De,core:{PropTween:Sn,globals:np,Tween:Ge,Timeline:sn,Animation:Zo,getCache:pr,_removeLinkedListItem:nl,reverting:function(){return on},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return Mh=t}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ja[r]=Ge[r]});Fn.add(sn.updateRoot);Ls=ja.to({},{duration:0});var G_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},W_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=G_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ch=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if($e(s)&&(l={},Mn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}W_(a,s)}}}},fn=ja.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ch("roundProps",xh),ch("modifiers"),ch("snap",pp))||ja;Ge.version=sn.version=fn.version="3.13.0";tp=1;Sh()&&Fs();var X_=le.Power0,q_=le.Power1,Y_=le.Power2,Z_=le.Power3,$_=le.Power4,J_=le.Linear,K_=le.Quad,Q_=le.Cubic,j_=le.Quart,tx=le.Quint,ex=le.Strong,nx=le.Elastic,ix=le.Back,rx=le.SteppedEase,sx=le.Bounce,ox=le.Sine,ax=le.Expo,lx=le.Circ;var Pp,_r,ks,Xh,Jr,cx,Ip,qh,hx=function(){return typeof window!="undefined"},Gi={},$r=180/Math.PI,Vs=Math.PI/180,zs=Math.atan2,Lp=1e8,Yh=/([A-Z])/g,ux=/(left|right|width|margin|padding|x)/i,fx=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},px=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},kp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Vp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},gx=function(t,e,n){return t.style[e]=n},_x=function(t,e,n){return t.style.setProperty(e,n)},xx=function(t,e,n){return t._gsap[e]=n},vx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},yx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Mx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ue="transform",kn=Ue+"Origin",Sx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Gi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[t]=o.x?o[t]:Hi(i,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Ii.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},Hp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},bx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qh(),(!s||!s.isStart)&&!n[Ue]&&(Hp(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gp=function(t,e){var n={target:t,props:[],revert:bx,save:Sx};return t._gsap||fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Wp,Hh=function(t,e){var n=_r.createElementNS?_r.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):_r.createElement(t);return n&&n.style?n:_r.createElement(t)},oi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Hs(e)||e,1)||""},Dp="O,Moz,ms,Ms,Webkit".split(","),Hs=function(t,e,n){var i=e||Jr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Dp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Dp[o]:"")+t},Gh=function(){hx()&&window.document&&(Pp=window,_r=Pp.document,ks=_r.documentElement,Jr=Hh("div")||{style:{}},cx=Hh("div"),Ue=Hs(Ue),kn=Ue+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wp=!!Hs("perspective"),qh=fn.core.reverting,Xh=1)},Up=function(t){var e=t.ownerSVGElement,n=Hh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ks.removeChild(n),s},Np=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Xp=function(t){var e,n;try{e=t.getBBox()}catch{e=Up(t),n=1}return e&&(e.width||e.height)||n||(e=Up(t)),e&&!e.width&&!e.x&&!e.y?{x:+Np(t,["x","cx","x1"])||0,y:+Np(t,["y","cy","y1"])||0,width:0,height:0}:e},qp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Xp(t))},Kr=function(t,e){if(e){var n=t.style,i;e in Gi&&e!==kn&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(e)}},xr=function(t,e,n,i,s,o){var a=new Sn(t._pt,e,n,0,1,o?Vp:kp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Op={deg:1,rad:1,turn:1},wx={grid:1,flex:1},vr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Jr.style,l=ux.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,g,m;if(i===o||!s||Op[i]||Op[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&qp(t),(d||o==="%")&&(Gi[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],ze(d?s/p*u:s/100*p);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===_r||!_.appendChild)&&(_=_r.body),g=_._gsap,g&&d&&g.width&&l&&g.time===Fn.time&&!g.uncache)return ze(s/g.width*u);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,p=t[h],M?t.style[e]=M:Kr(t,e)}else(d||o==="%")&&!wx[oi(_,"display")]&&(a.position=oi(t,"position")),_===t&&(a.position="static"),_.appendChild(Jr),p=Jr[h],_.removeChild(Jr),a.position="absolute";return l&&d&&(g=pr(_),g.time=Fn.time,g.width=_[h]),ze(f?p*s/u:p&&s?u/p*s:0)},Hi=function(t,e,n,i){var s;return Xh||Gh(),e in Ii&&e!=="transform"&&(e=Ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gi[e]&&e!=="transform"?(s=Qo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:al(oi(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[e]&&ol[e](t,e,n)||oi(t,e)||Rh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(t,e,s,n)+n:s},Tx=function(t,e,n,i){if(!n||n==="none"){var s=Hs(e,t,1),o=s&&oi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new Sn(this._pt,t.style,e,0,1,Fh),l=0,c=0,h,u,f,d,p,_,g,m,M,v,x,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=oi(t,e)||i,_?t.style[e]=_:Kr(t,e)),h=[n,i],Ih(h),n=h[0],i=h[1],f=n.match(Wr)||[],C=i.match(Wr)||[],C.length){for(;u=Wr.exec(i);)g=u[0],M=i.substring(l,u.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),g.charAt(1)==="="&&(g=Xr(d,g)+x),m=parseFloat(g),v=g.substr((m+"").length),l=Wr.lastIndex-v.length,v||(v=v||zn.units[e]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=vr(t,e,_,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Vp:kp;return wh.test(i)&&(a.e=0),this._pt=a,a},Fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ex=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Fp[n]||n,e[1]=Fp[i]||i,e.join(" ")},Ax=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?kn:Ue),Kr(n,a);l&&(Kr(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qo(n,1),o.uncache=1,Hp(i)))}},ol={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Sn(t._pt,e,n,0,0,Ax);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ko=[1,0,0,1,0,0],Yp={},Zp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bp=function(t){var e=oi(t,Ue);return Zp(e)?Ko:e.substr(7).match(bh).map(ze)},Zh=function(t,e){var n=t._gsap||pr(t),i=t.style,s=Bp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!t.offsetParent&&t!==ks&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ks.appendChild(t)),s=Bp(t),l?i.display=l:Kr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ks.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Zh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],M=l[5],v=e.split(" "),x=parseFloat(v[0])||0,C=parseFloat(v[1])||0,T,w,R,S;n?l!==Ko&&(w=d*g-p*_)&&(R=x*(g/w)+C*(-_/w)+(_*M-g*m)/w,S=x*(-p/w)+C*(d/w)-(d*M-p*m)/w,x=R,C=S):(T=Xp(t),x=T.x+(~v[0].indexOf("%")?x/100*T.width:x),C=T.y+(~(v[1]||v[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(m=x-c,M=C-h,a.xOffset=u+(m*d+M*_)-m,a.yOffset=f+(m*p+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(xr(o,a,"xOrigin",c,x),xr(o,a,"yOrigin",h,C),xr(o,a,"xOffset",u,a.xOffset),xr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Qo=function(t,e){var n=t._gsap||new Lh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,kn)||"0",h,u,f,d,p,_,g,m,M,v,x,C,T,w,R,S,y,I,U,z,H,Z,G,K,X,ht,D,ct,ft,Dt,L,V;return h=u=f=_=g=m=M=v=x=0,d=p=1,n.svg=!!(t.getCTM&&qp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),w=Zh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Wh(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,T=n.yOrigin||0,w!==Ko&&(I=w[0],U=w[1],z=w[2],H=w[3],h=Z=w[4],u=G=w[5],w.length===6?(d=Math.sqrt(I*I+U*U),p=Math.sqrt(H*H+z*z),_=I||U?zs(U,I)*$r:0,M=z||H?zs(z,H)*$r+_:0,M&&(p*=Math.abs(Math.cos(M*Vs))),n.svg&&(h-=C-(C*I+T*z),u-=T-(C*U+T*H))):(V=w[6],Dt=w[7],D=w[8],ct=w[9],ft=w[10],L=w[11],h=w[12],u=w[13],f=w[14],R=zs(V,ft),g=R*$r,R&&(S=Math.cos(-R),y=Math.sin(-R),K=Z*S+D*y,X=G*S+ct*y,ht=V*S+ft*y,D=Z*-y+D*S,ct=G*-y+ct*S,ft=V*-y+ft*S,L=Dt*-y+L*S,Z=K,G=X,V=ht),R=zs(-z,ft),m=R*$r,R&&(S=Math.cos(-R),y=Math.sin(-R),K=I*S-D*y,X=U*S-ct*y,ht=z*S-ft*y,L=H*y+L*S,I=K,U=X,z=ht),R=zs(U,I),_=R*$r,R&&(S=Math.cos(R),y=Math.sin(R),K=I*S+U*y,X=Z*S+G*y,U=U*S-I*y,G=G*S-Z*y,I=K,Z=X),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=ze(Math.sqrt(I*I+U*U+z*z)),p=ze(Math.sqrt(G*G+V*V)),R=zs(Z,G),M=Math.abs(R)>2e-4?R*$r:0,x=L?1/(L<0?-L:L):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Zp(oi(t,Ue)),K&&t.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ze(d),n.scaleY=ze(p),n.rotation=ze(_)+a,n.rotationX=ze(g)+a,n.rotationY=ze(m)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[kn]=al(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?Rx:Wp?$p:Cx,n.uncache=0,n},al=function(t){return(t=t.split(" "))[0]+" "+t[1]},kh=function(t,e,n){var i=an(e);return ze(parseFloat(e)+parseFloat(vr(t,"x",n+"px",i)))+i},Cx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$p(t,e)},Yr="0deg",Jo="0px",Zr=") ",$p=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,x="",C=m==="auto"&&t&&t!==1||m===!0;if(v&&(u!==Yr||h!==Yr)){var T=parseFloat(h)*Vs,w=Math.sin(T),R=Math.cos(T),S;T=parseFloat(u)*Vs,S=Math.cos(T),o=kh(M,o,w*S*-v),a=kh(M,a,-Math.sin(T)*-v),l=kh(M,l,R*S*-v+v)}g!==Jo&&(x+="perspective("+g+Zr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Jo||a!==Jo||l!==Jo)&&(x+=l!==Jo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),c!==Yr&&(x+="rotate("+c+Zr),h!==Yr&&(x+="rotateY("+h+Zr),u!==Yr&&(x+="rotateX("+u+Zr),(f!==Yr||d!==Yr)&&(x+="skew("+f+", "+d+Zr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Zr),M.style[Ue]=x||"translate(0, 0)"},Rx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(o),x=parseFloat(a),C,T,w,R,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vs,c*=Vs,C=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Vs,S=Math.tan(c-h),S=Math.sqrt(1+S*S),w*=S,R*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),C*=S,T*=S)),C=ze(C),T=ze(T),w=ze(w),R=ze(R)):(C=u,R=f,T=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=vr(d,"x",o,"px"),x=vr(d,"y",a,"px")),(p||_||g||m)&&(v=ze(v+p-(p*C+_*w)+g),x=ze(x+_-(p*T+_*R)+m)),(i||s)&&(S=d.getBBox(),v=ze(v+i/100*S.width),x=ze(x+s/100*S.height)),S="matrix("+C+","+T+","+w+","+R+","+v+","+x+")",d.setAttribute("transform",S),M&&(d.style[Ue]=S)},Px=function(t,e,n,i,s){var o=360,a=$e(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$r:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Lp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Lp)%o-~~(c/o)*o)),t._pt=f=new Sn(t._pt,e,n,i,c,dx),f.e=h,f.u="deg",t._props.push(n),f},zp=function(t,e){for(var n in e)t[n]=e[n];return t},Ix=function(t,e,n){var i=zp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=Qo(n,1),Kr(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=Qo(n,1),o[Ue]=c);for(l in Gi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=an(c),p=an(h),u=d!==p?vr(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new Sn(t._pt,a,l,u,f-u,Vh),t._pt.u=p||0,t._props.push(l));zp(a,i)};Mn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ol[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(p){return Hi(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var $h={name:"css",register:Gh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,p,_,g,m,M,v,x,C,T,w,R;Xh||Gh(),this.styles=this.styles||Gp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(On[_]&&Uh(_,e,n,i,t,s)))){if(d=typeof h,p=ol[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Bs(h)),p)p(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ki.lastIndex=0,ki.test(c)||(g=an(c),m=an(h)),m?g!==m&&(c=vr(t,_,c,m)+m):g&&(h+=g),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],$e(c)&&~c.indexOf("random(")&&(c=Bs(c)),an(c+"")||c==="auto"||(c+=zn.units[_]||an(Hi(t,_))||""),(c+"").charAt(1)==="="&&(c=Hi(t,_))):c=Hi(t,_),f=parseFloat(c),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Ii&&(_==="autoAlpha"&&(f===1&&Hi(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),xr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Gi,v){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=oi(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Qo(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new Sn(this._pt,a,Ue,0,1,C.renderTransform,C,0,-1),x.dep=1),_==="scale")this._pt=new Sn(this._pt,C,"scaleY",C.scaleY,(M?Xr(C.scaleY,M+u):u)-C.scaleY||0,Vh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(kn,0,a[kn]),h=Ex(h),C.svg?Wh(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&xr(this,C,"zOrigin",C.zOrigin,m),xr(this,a,_,al(c),al(h)));continue}else if(_==="svgOrigin"){Wh(t,h,1,T,0,this);continue}else if(_ in Yp){Px(this,C,_,f,M?Xr(f,M+h):h);continue}else if(_==="smoothOrigin"){xr(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){Ix(this,h,t);continue}}else _ in a||(_=Hs(_)||_);if(v||(u||u===0)&&(f||f===0)&&!fx.test(h)&&_ in a)g=(c+"").substr((f+"").length),u||(u=0),m=an(h)||(_ in zn.units?zn.units[_]:g),g!==m&&(f=vr(t,_,c,m)),this._pt=new Sn(this._pt,v?C:a,_,f,(M?Xr(f,M+u):u)-f,!v&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?mx:Vh),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=px);else if(_ in a)Tx.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){el(_,h);continue}v||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}w&&zh(this)},render:function(t,e){if(e.tween._time||!qh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Hi,aliases:Ii,getSetter:function(t,e,n){var i=Ii[e];return i&&i.indexOf(",")<0&&(e=i),e in Gi&&e!==kn&&(t._gsap.x||Hi(t,"x"))?n&&Ip===n?e==="scale"?vx:xx:(Ip=n||{})&&(e==="scale"?yx:Mx):t.style&&!tl(t.style[e])?gx:~e.indexOf("-")?_x:sl(t,e)},core:{_removeProperty:Kr,_getMatrix:Zh}};fn.utils.checkPrefix=Hs;fn.core.getStyleSaver=Gp;(function(r,t,e,n){var i=Mn(r+","+t+","+e,function(s){Gi[s]=1});Mn(t,function(s){zn.units[s]="deg",Yp[s]=1}),Ii[i[13]]=r+","+t,Mn(n,function(s){var o=s.split(":");Ii[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});fn.registerPlugin($h);var Qt=fn.registerPlugin($h)||fn,kT=Qt.core.Tween;function Jp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Lx(r,t,e){return t&&Jp(r.prototype,t),e&&Jp(r,e),r}var ln,hl,Dx,$n,yr,Mr,Ws,Qp,Qr,ta,jp,Wi,vi,tm,em=function(){return ln||typeof window!="undefined"&&(ln=window.gsap)&&ln.registerPlugin&&ln},nm=1,Gs=[],re=[],yi=[],ea=Date.now,Jh=function(t,e){return e},Ux=function(){var t=ta.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,yi),re=n,yi=i,Jh=function(o,a){return e[o](a)}},qi=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},na=function(t){return!!~jp.indexOf(t)},wn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ll="scrollLeft",cl="scrollTop",Kh=function(){return Wi&&Wi.isPressed||re.cache++},ul=function(t,e){var n=function i(s){if(s||s===0){nm&&($n.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),t(s),i.cacheID=re.cache,o&&Jh("ss",s)}else(e||re.cache!==i.cacheID||Jh("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},dn={s:ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(r){return arguments.length?$n.scrollTo(r,Xe.sc()):$n.pageXOffset||yr[ll]||Mr[ll]||Ws[ll]||0})},Xe={s:cl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:ul(function(r){return arguments.length?$n.scrollTo(dn.sc(),r):$n.pageYOffset||yr[cl]||Mr[cl]||Ws[cl]||0})},Tn=function(t,e){return(e&&e._ctx&&e._ctx.selector||ln.utils.toArray)(t)[0]||(typeof t=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Nx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Xi=function(t,e){var n=e.s,i=e.sc;na(t)&&(t=yr.scrollingElement||Mr);var s=re.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||wn(t,"scroll",Kh);var a=re[s+o],l=a||(re[s+o]=ul(qi(t,n),!0)||(na(t)?i:ul(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=ln.getProperty(t,"scrollBehavior")==="smooth"),l},fl=function(t,e,n){var i=t,s=t,o=ea(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=ea();_||g-o>l?(s=i,i=p,a=o,o=g):n?i+=p:i=s+(p-s)/(g-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(p){var _=a,g=s,m=ea();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:u,getVelocity:f}},jo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Kp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},im=function(){ta=ln.core.globals().ScrollTrigger,ta&&ta.core&&Ux()},rm=function(t){return ln=t||em(),!hl&&ln&&typeof document!="undefined"&&document.body&&($n=window,yr=document,Mr=yr.documentElement,Ws=yr.body,jp=[$n,yr,Mr,Ws],Dx=ln.utils.clamp,tm=ln.core.context||function(){},Qr="onpointerenter"in Ws?"pointer":"mouse",Qp=ke.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=ke.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return nm=0},500),im(),hl=1),hl};dn.op=Xe;re.cache=0;var ke=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){hl||rm(ln)||console.warn("Please gsap.registerPlugin(Observer)"),ta||im();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,M=n.onDrag,v=n.onPress,x=n.onRelease,C=n.onRight,T=n.onLeft,w=n.onUp,R=n.onDown,S=n.onChangeX,y=n.onChangeY,I=n.onChange,U=n.onToggleX,z=n.onToggleY,H=n.onHover,Z=n.onHoverEnd,G=n.onMove,K=n.ignoreCheck,X=n.isNormalizer,ht=n.onGestureStart,D=n.onGestureEnd,ct=n.onWheel,ft=n.onEnable,Dt=n.onDisable,L=n.onClick,V=n.scrollSpeed,F=n.capture,O=n.allowClicks,it=n.lockAxis,rt=n.onLockAxis;this.target=a=Tn(a)||Mr,this.vars=n,d&&(d=ln.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,V=V||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Ws).lineHeight)||22);var j,xt,tt,Q,P,dt,at,B=this,ut=0,Nt=0,bt=n.passive||!h&&n.passive!==!1,A=Xi(a,dn),b=Xi(a,Xe),Y=A(),nt=b(),ot=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vi[0]==="pointerdown",st=na(a),vt=a.ownerDocument||yr,gt=[0,0,0],Mt=[0,0,0],Ht=0,pt=function(){return Ht=ea()},yt=function(Ft,ee){return(B.event=Ft)&&d&&Nx(Ft.target,d)||ee&&ot&&Ft.pointerType!=="touch"||K&&K(Ft,ee)},Gt=function(){B._vx.reset(),B._vy.reset(),xt.pause(),u&&u(B)},Vt=function(){var Ft=B.deltaX=Kp(gt),ee=B.deltaY=Kp(Mt),At=Math.abs(Ft)>=i,$t=Math.abs(ee)>=i;I&&(At||$t)&&I(B,Ft,ee,gt,Mt),At&&(C&&B.deltaX>0&&C(B),T&&B.deltaX<0&&T(B),S&&S(B),U&&B.deltaX<0!=ut<0&&U(B),ut=B.deltaX,gt[0]=gt[1]=gt[2]=0),$t&&(R&&B.deltaY>0&&R(B),w&&B.deltaY<0&&w(B),y&&y(B),z&&B.deltaY<0!=Nt<0&&z(B),Nt=B.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(Q||tt)&&(G&&G(B),tt&&(g&&tt===1&&g(B),M&&M(B),tt=0),Q=!1),dt&&!(dt=!1)&&rt&&rt(B),P&&(ct(B),P=!1),j=0},It=function(Ft,ee,At){gt[At]+=Ft,Mt[At]+=ee,B._vx.update(Ft),B._vy.update(ee),c?j||(j=requestAnimationFrame(Vt)):Vt()},te=function(Ft,ee){it&&!at&&(B.axis=at=Math.abs(Ft)>Math.abs(ee)?"x":"y",dt=!0),at!=="y"&&(gt[2]+=Ft,B._vx.update(Ft,!0)),at!=="x"&&(Mt[2]+=ee,B._vy.update(ee,!0)),c?j||(j=requestAnimationFrame(Vt)):Vt()},Xt=function(Ft){if(!yt(Ft,1)){Ft=jo(Ft,h);var ee=Ft.clientX,At=Ft.clientY,$t=ee-B.x,Bt=At-B.y,Zt=B.isDragging;B.x=ee,B.y=At,(Zt||($t||Bt)&&(Math.abs(B.startX-ee)>=s||Math.abs(B.startY-At)>=s))&&(tt=Zt?2:1,Zt||(B.isDragging=!0),te($t,Bt))}},ce=B.onPress=function(Rt){yt(Rt,1)||Rt&&Rt.button||(B.axis=at=null,xt.pause(),B.isPressed=!0,Rt=jo(Rt),ut=Nt=0,B.startX=B.x=Rt.clientX,B.startY=B.y=Rt.clientY,B._vx.reset(),B._vy.reset(),wn(X?a:vt,vi[1],Xt,bt,!0),B.deltaX=B.deltaY=0,v&&v(B))},N=B.onRelease=function(Rt){if(!yt(Rt,1)){bn(X?a:vt,vi[1],Xt,!0);var Ft=!isNaN(B.y-B.startY),ee=B.isDragging,At=ee&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),$t=jo(Rt);!At&&Ft&&(B._vx.reset(),B._vy.reset(),h&&O&&ln.delayedCall(.08,function(){if(ea()-Ht>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(vt.createEvent){var Bt=vt.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,$n,1,$t.screenX,$t.screenY,$t.clientX,$t.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Bt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,u&&ee&&!X&&xt.restart(!0),tt&&Vt(),m&&ee&&m(B),x&&x(B,At)}},wt=function(Ft){return Ft.touches&&Ft.touches.length>1&&(B.isGesturing=!0)&&ht(Ft,B.isDragging)},et=function(){return(B.isGesturing=!1)||D(B)},lt=function(Ft){if(!yt(Ft)){var ee=A(),At=b();It((ee-Y)*V,(At-nt)*V,1),Y=ee,nt=At,u&&xt.restart(!0)}},St=function(Ft){if(!yt(Ft)){Ft=jo(Ft,h),ct&&(P=!0);var ee=(Ft.deltaMode===1?l:Ft.deltaMode===2?$n.innerHeight:1)*p;It(Ft.deltaX*ee,Ft.deltaY*ee,0),u&&!X&&xt.restart(!0)}},Tt=function(Ft){if(!yt(Ft)){var ee=Ft.clientX,At=Ft.clientY,$t=ee-B.x,Bt=At-B.y;B.x=ee,B.y=At,Q=!0,u&&xt.restart(!0),($t||Bt)&&te($t,Bt)}},qt=function(Ft){B.event=Ft,H(B)},ue=function(Ft){B.event=Ft,Z(B)},Fe=function(Ft){return yt(Ft)||jo(Ft,h)&&L(B)};xt=B._dc=ln.delayedCall(f||.25,Gt).pause(),B.deltaX=B.deltaY=0,B._vx=fl(0,50,!0),B._vy=fl(0,50,!0),B.scrollX=A,B.scrollY=b,B.isDragging=B.isGesturing=B.isPressed=!1,tm(this),B.enable=function(Rt){return B.isEnabled||(wn(st?vt:a,"scroll",Kh),o.indexOf("scroll")>=0&&wn(st?vt:a,"scroll",lt,bt,F),o.indexOf("wheel")>=0&&wn(a,"wheel",St,bt,F),(o.indexOf("touch")>=0&&Qp||o.indexOf("pointer")>=0)&&(wn(a,vi[0],ce,bt,F),wn(vt,vi[2],N),wn(vt,vi[3],N),O&&wn(a,"click",pt,!0,!0),L&&wn(a,"click",Fe),ht&&wn(vt,"gesturestart",wt),D&&wn(vt,"gestureend",et),H&&wn(a,Qr+"enter",qt),Z&&wn(a,Qr+"leave",ue),G&&wn(a,Qr+"move",Tt)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Q=tt=!1,B._vx.reset(),B._vy.reset(),Y=A(),nt=b(),Rt&&Rt.type&&ce(Rt),ft&&ft(B)),B},B.disable=function(){B.isEnabled&&(Gs.filter(function(Rt){return Rt!==B&&na(Rt.target)}).length||bn(st?vt:a,"scroll",Kh),B.isPressed&&(B._vx.reset(),B._vy.reset(),bn(X?a:vt,vi[1],Xt,!0)),bn(st?vt:a,"scroll",lt,F),bn(a,"wheel",St,F),bn(a,vi[0],ce,F),bn(vt,vi[2],N),bn(vt,vi[3],N),bn(a,"click",pt,!0),bn(a,"click",Fe),bn(vt,"gesturestart",wt),bn(vt,"gestureend",et),bn(a,Qr+"enter",qt),bn(a,Qr+"leave",ue),bn(a,Qr+"move",Tt),B.isEnabled=B.isPressed=B.isDragging=!1,Dt&&Dt(B))},B.kill=B.revert=function(){B.disable();var Rt=Gs.indexOf(B);Rt>=0&&Gs.splice(Rt,1),Wi===B&&(Wi=0)},Gs.push(B),X&&na(a)&&(Wi=B),B.enable(_)},Lx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ke.version="3.13.0";ke.create=function(r){return new ke(r)};ke.register=rm;ke.getAll=function(){return Gs.slice()};ke.getById=function(r){return Gs.filter(function(t){return t.vars.id===r})[0]};em()&&ln.registerPlugin(ke);var Ut,Ys,ae,Te,Qn,xe,fu,Cl,ma,ca,ra,dl,pn,Ll,su,An,sm,om,Zs,Sm,Qh,bm,En,ou,wm,Tm,Sr,au,du,$s,pu,Rl,lu,jh,pl=1,mn=Date.now,tu=mn(),ci=0,sa=0,am=function(t,e,n){var i=Kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},lm=function(t,e){return e&&(!Kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Ox=function r(){return sa&&requestAnimationFrame(r)},cm=function(){return Ll=1},hm=function(){return Ll=0},Li=function(t){return t},oa=function(t){return Math.round(t*1e5)/1e5||0},Em=function(){return typeof window!="undefined"},Am=function(){return Ut||Em()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},rs=function(t){return!!~fu.indexOf(t)},Cm=function(t){return(t==="Height"?pu:ae["inner"+t])||Qn["client"+t]||xe["client"+t]},Rm=function(t){return qi(t,"getBoundingClientRect")||(rs(t)?function(){return Al.width=ae.innerWidth,Al.height=pu,Al}:function(){return Yi(t)})},Fx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=qi(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Cm(s):t["client"+s])||0}},Bx=function(t,e){return!e||~yi.indexOf(t)?Rm(t):function(){return Al}},Di=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=qi(t,n))?o()-Rm(t)()[s]:rs(t)?(Qn[n]||xe[n])-Cm(i):t[n]-t["offset"+i])},ml=function(t,e){for(var n=0;n<Zs.length;n+=3)(!e||~e.indexOf(Zs[n+1]))&&t(Zs[n],Zs[n+1],Zs[n+2])},Kn=function(t){return typeof t=="string"},gn=function(t){return typeof t=="function"},aa=function(t){return typeof t=="number"},jr=function(t){return typeof t=="object"},ia=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},eu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Xs=Math.abs,Pm="left",Im="top",mu="right",gu="bottom",es="width",ns="height",ha="Right",ua="Left",fa="Top",da="Bottom",qe="padding",ai="margin",Ks="Width",_u="Height",Je="px",li=function(t){return ae.getComputedStyle(t)},zx=function(t){var e=li(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},um=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yi=function(t,e){var n=e&&li(t)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Lm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},kx=function(t){return function(e){return Ut.utils.snap(Lm(t),e)}},xu=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Vx=function(t){return function(e,n){return xu(Lm(t))(e,n.direction)}},gl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},_l=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},fm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xl={toggleActions:"play",anticipatePin:0},Il={top:0,left:0,center:.5,bottom:1,right:1},bl=function(t,e){if(Kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Il?Il[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},vl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,p=Te.createElement("div"),_=rs(n)||qi(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?xe:n,M=t.indexOf("start")!==-1,v=M?c:h,x="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===Xe?mu:gu)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],wl(p,0,i,M),p},wl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ks]=1,s["border"+a+Ks]=0,s[n.p]=e+"px",Ut.set(t,s)},se=[],cu={},ga,dm=function(){return mn()-ci>34&&(ga||(ga=requestAnimationFrame(Zi)))},qs=function(){(!En||!En.isPressed||En.startX>xe.clientWidth)&&(re.cache++,En?ga||(ga=requestAnimationFrame(Zi)):Zi(),ci||os("scrollStart"),ci=mn())},nu=function(){Tm=ae.innerWidth,wm=ae.innerHeight},la=function(t){re.cache++,(t===!0||!pn&&!bm&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!ou||Tm!==ae.innerWidth||Math.abs(ae.innerHeight-wm)>ae.innerHeight*.25))&&Cl.restart(!0)},ss={},Hx=[],Dm=function r(){return tn(Wt,"scrollEnd",r)||ts(!0)},os=function(t){return ss[t]&&ss[t].map(function(e){return e()})||Hx},Jn=[],Um=function(t){for(var e=0;e<Jn.length;e+=5)(!t||Jn[e+4]&&Jn[e+4].query===t)&&(Jn[e].style.cssText=Jn[e+1],Jn[e].getBBox&&Jn[e].setAttribute("transform",Jn[e+2]||""),Jn[e+3].uncache=1)},vu=function(t,e){var n;for(An=0;An<se.length;An++)n=se[An],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Rl=!0,e&&Um(e),e||os("revert")},Nm=function(t,e){re.cache++,(e||!Cn)&&re.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Kn(t)&&(ae.history.scrollRestoration=du=t)},Cn,is=0,pm,Gx=function(){if(pm!==is){var t=pm=is;requestAnimationFrame(function(){return t===is&&ts(!0)})}},Om=function(){xe.appendChild($s),pu=!En&&$s.offsetHeight||ae.innerHeight,xe.removeChild($s)},mm=function(t){return ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ts=function(t,e){if(Qn=Te.documentElement,xe=Te.body,fu=[ae,Te,Qn,xe],ci&&!t&&!Rl){en(Wt,"scrollEnd",Dm);return}Om(),Cn=Wt.isRefreshing=!0,re.forEach(function(i){return gn(i)&&++i.cacheID&&(i.rec=i())});var n=os("refreshInit");Sm&&Wt.sort(),e||vu(),re.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),Rl=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lu=1,mm(!0),se.forEach(function(i){var s=Di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),mm(!1),lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Nm(du,1),Cl.pause(),is++,Cn=2,Zi(2),se.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=Wt.isRefreshing=!1,os("refresh")},hu=0,Tl=1,pa,Zi=function(t){if(t===2||!Cn&&!Rl){Wt.isUpdating=!0,pa&&pa.update(0);var e=se.length,n=mn(),i=n-tu>=50,s=e&&se[0].scroll();if(Tl=hu>s?-1:1,Cn||(hu=s),i&&(ci&&!Ll&&n-ci>200&&(ci=0,os("scrollEnd")),ra=tu,tu=n),Tl<0){for(An=e;An-- >0;)se[An]&&se[An].update(0,i);Tl=1}else for(An=0;An<e;An++)se[An]&&se[An].update(0,i);Wt.isUpdating=!1}ga=0},uu=[Pm,Im,gu,mu,ai+da,ai+ha,ai+fa,ai+ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],El=uu.concat([es,ns,"boxSizing","max"+Ks,"max"+_u,"position",ai,qe,qe+fa,qe+ha,qe+da,qe+ua]),Wx=function(t,e,n){Js(n);var i=t._gsap;if(i.spacerIsNative)Js(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},iu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=uu.length,o=e.style,a=t.style,l;s--;)l=uu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[gu]=a[mu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[es]=Pl(t,dn)+Je,o[ns]=Pl(t,Xe)+Je,o[qe]=a[ai]=a[Im]=a[Pm]="0",Js(i),a[es]=a["max"+Ks]=n[es],a[ns]=a["max"+_u]=n[ns],a[qe]=n[qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Xx=/([A-Z])/g,Js=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Xx,"-$1").toLowerCase())}},yl=function(t){for(var e=El.length,n=t.style,i=[],s=0;s<e;s++)i.push(El[s],n[El[s]]);return i.t=t,i},qx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Al={left:0,top:0},gm=function(t,e,n,i,s,o,a,l,c,h,u,f,d,p){gn(t)&&(t=t(l)),Kn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?bl("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,M;if(d&&d.seek(0),isNaN(t)||(t=+t),aa(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&wl(a,n,i,!0);else{gn(e)&&(e=e(l));var v=(t||"0").split(" "),x,C,T,w;M=Tn(e,l)||xe,x=Yi(M)||{},(!x||!x.left&&!x.top)&&li(M).display==="none"&&(w=M.style.display,M.style.display="block",x=Yi(M),w?M.style.display=w:M.style.removeProperty("display")),C=bl(v[0],x[i.d]),T=bl(v[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-T,a&&wl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var R=t+n,S=o._isStart;g="scroll"+i.d2,wl(o,R,i,S&&R>20||!S&&(u?Math.max(xe[g],Qn[g]):o.parentNode[g])<=R+1),u&&(c=Yi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Je))}return d&&M&&(g=Yi(M),d.seek(f),m=Yi(M),d._caScrollDist=g[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},Yx=/(webkit|moz|length|cssText|inset)/i,_m=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=li(t);for(o in a)!+o&&!Yx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},Fm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ml=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},xm=function(t,e){var n=Xi(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=Fm(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),Wt.isTouch&&en(t,"touchmove",n.wheelHandler),s},Wt=(function(){function r(e,n){Ys||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sa){this.update=this.refresh=this.kill=Li;return}n=um(Kn(n)||aa(n)||n.nodeType?{trigger:n}:n,xl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,x=s.snap,C=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Xe,I=!u&&u!==0,U=Tn(n.scroller||ae),z=Ut.core.getCache(U),H=rs(U),Z=("pinType"in n?n.pinType:qi(U,"pinType")||H&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=I&&n.toggleActions.split(" "),X="markers"in n?n.markers:xl.markers,ht=H?0:parseFloat(li(U)["border"+y.p2+Ks])||0,D=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ft=Fx(U,H,y),Dt=Bx(U,H),L=0,V=0,F=0,O=Xi(U,y),it,rt,j,xt,tt,Q,P,dt,at,B,ut,Nt,bt,A,b,Y,nt,ot,st,vt,gt,Mt,Ht,pt,yt,Gt,Vt,It,te,Xt,ce,N,wt,et,lt,St,Tt,qt,ue;if(D._startClamp=D._endClamp=!1,D._dir=y,g*=45,D.scroller=U,D.scroll=w?w.time.bind(w):O,xt=O(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sm=1,n.refreshPriority===-9999&&(pa=D)),z.tweenScroll=z.tweenScroll||{top:xm(U,Xe),left:xm(U,dn)},D.tweenTo=it=z.tweenScroll[y.p],D.scrubDuration=function(At){wt=aa(At)&&At,wt?N?N.duration(At):N=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:wt,paused:!0,onComplete:function(){return m&&m(D)}}):(N&&N.progress(1).kill(),N=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(u),Xt=0,l||(l=i.vars.id)),x&&((!jr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xe.style&&Ut.set(H?[xe,Qn]:U,{scrollBehavior:"auto"}),re.forEach(function(At){return gn(At)&&At.target===(H?Te.scrollingElement||Qn:U)&&(At.smooth=!1)}),j=gn(x.snapTo)?x.snapTo:x.snapTo==="labels"?kx(i):x.snapTo==="labelsDirectional"?Vx(i):x.directional!==!1?function(At,$t){return xu(x.snapTo)(At,mn()-V<500?0:$t.direction)}:Ut.utils.snap(x.snapTo),et=x.duration||{min:.1,max:2},et=jr(et)?ca(et.min,et.max):ca(et,et),lt=Ut.delayedCall(x.delay||wt/2||.1,function(){var At=O(),$t=mn()-V<500,Bt=it.tween;if(($t||Math.abs(D.getVelocity())<10)&&!Bt&&!Ll&&L!==At){var Zt=(At-Q)/A,He=i&&!I?i.totalProgress():Zt,oe=$t?0:(He-ce)/(mn()-ra)*1e3||0,we=Ut.utils.clamp(-Zt,1-Zt,Xs(oe/2)*oe/.185),Ze=Zt+(x.inertia===!1?0:we),ye,Me,pe=x,Wn=pe.onStart,Ae=pe.onInterrupt,yn=pe.onComplete;if(ye=j(Ze,D),aa(ye)||(ye=Ze),Me=Math.max(0,Math.round(Q+ye*A)),At<=P&&At>=Q&&Me!==At){if(Bt&&!Bt._initted&&Bt.data<=Xs(Me-At))return;x.inertia===!1&&(we=ye-Zt),it(Me,{duration:et(Xs(Math.max(Xs(Ze-He),Xs(ye-He))*.185/oe/.05||0)),ease:x.ease||"power3",data:Xs(Me-At),onInterrupt:function(){return lt.restart(!0)&&Ae&&Ae(D)},onComplete:function(){D.update(),L=O(),i&&!I&&(N?N.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),Xt=ce=i&&!I?i.totalProgress():D.progress,M&&M(D),yn&&yn(D)}},At,we*A,Me-At-we*A),Wn&&Wn(D,it.tween)}}else D.isActive&&L!==At&&lt.restart(!0)}).pause()),l&&(cu[l]=D),f=D.trigger=Tn(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(D)),d=d===!0?f:Tn(d),Kn(a)&&(a={targets:f,className:a}),d&&(p===!1||p===ai||(p=!p&&d.parentNode&&d.parentNode.style&&li(d.parentNode).display==="flex"?!1:qe),D.pin=d,rt=Ut.core.getCache(d),rt.spacer?b=rt.pinState:(T&&(T=Tn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),rt.spacerIsNative=!!T,T&&(rt.spacerState=yl(T))),rt.spacer=ot=T||Te.createElement("div"),ot.classList.add("pin-spacer"),l&&ot.classList.add("pin-spacer-"+l),rt.pinState=b=yl(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),D.spacer=ot=rt.spacer,te=li(d),pt=te[p+y.os2],vt=Ut.getProperty(d),gt=Ut.quickSetter(d,y.a,Je),iu(d,ot,te),nt=yl(d)),X){Nt=jr(X)?um(X,fm):fm,B=vl("scroller-start",l,U,y,Nt,0),ut=vl("scroller-end",l,U,y,Nt,0,B),st=B["offset"+y.op.d2];var Fe=Tn(qi(U,"content")||U);dt=this.markerStart=vl("start",l,Fe,y,Nt,st,0,w),at=this.markerEnd=vl("end",l,Fe,y,Nt,st,0,w),w&&(qt=Ut.quickSetter([dt,at],y.a,Je)),!Z&&!(yi.length&&qi(U,"fixedMarkers")===!0)&&(zx(H?xe:U),Ut.set([B,ut],{force3D:!0}),Gt=Ut.quickSetter(B,y.a,Je),It=Ut.quickSetter(ut,y.a,Je))}if(w){var Rt=w.vars.onUpdate,Ft=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),Rt&&Rt.apply(w,Ft||[])})}if(D.previous=function(){return se[se.indexOf(D)-1]},D.next=function(){return se[se.indexOf(D)+1]},D.revert=function(At,$t){if(!$t)return D.kill(!0);var Bt=At!==!1||!D.enabled,Zt=pn;Bt!==D.isReverted&&(Bt&&(St=Math.max(O(),D.scroll.rec||0),F=D.progress,Tt=i&&i.progress()),dt&&[dt,at,B,ut].forEach(function(He){return He.style.display=Bt?"none":"block"}),Bt&&(pn=D,D.update(Bt)),d&&(!C||!D.isActive)&&(Bt?Wx(d,ot,b):iu(d,ot,li(d),yt)),Bt||D.update(Bt),pn=Zt,D.isReverted=Bt)},D.refresh=function(At,$t,Bt,Zt){if(!((pn||!D.enabled)&&!$t)){if(d&&At&&ci){en(r,"scrollEnd",Dm);return}!Cn&&ct&&ct(D),pn=D,it.tween&&!Bt&&(it.tween.kill(),it.tween=0),N&&N.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var He=ft(),oe=Dt(),we=w?w.duration():Di(U,y),Ze=A<=.01||!A,ye=0,Me=Zt||0,pe=jr(Bt)?Bt.end:n.end,Wn=n.endTrigger||f,Ae=jr(Bt)?Bt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),yn=D.pinnedContainer=n.pinnedContainer&&Tn(n.pinnedContainer,D),E=f&&Math.max(0,se.indexOf(D))||0,k=E,$,J,q,mt,_t,Et,Lt,Yt,Jt,Ot,Kt,fe,me;for(X&&jr(Bt)&&(fe=Ut.getProperty(B,y.p),me=Ut.getProperty(ut,y.p));k-- >0;)Et=se[k],Et.end||Et.refresh(0,1)||(pn=D),Lt=Et.pin,Lt&&(Lt===f||Lt===d||Lt===yn)&&!Et.isReverted&&(Ot||(Ot=[]),Ot.unshift(Et),Et.revert(!0,!0)),Et!==se[k]&&(E--,k--);for(gn(Ae)&&(Ae=Ae(D)),Ae=am(Ae,"start",D),Q=gm(Ae,f,He,y,O(),dt,B,D,oe,ht,Z,we,w,D._startClamp&&"_startClamp")||(d?-.001:0),gn(pe)&&(pe=pe(D)),Kn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Kn(Ae)?Ae.split(" ")[0]:"")+pe:(ye=bl(pe.substr(2),He),pe=Kn(Ae)?Ae:(w?Ut.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Q):Q)+ye,Wn=f)),pe=am(pe,"end",D),P=Math.max(Q,gm(pe||(Wn?"100% 0":we),Wn,He,y,O()+ye,at,ut,D,oe,ht,Z,we,w,D._endClamp&&"_endClamp"))||-.001,ye=0,k=E;k--;)Et=se[k],Lt=Et.pin,Lt&&Et.start-Et._pinPush<=Q&&!w&&Et.end>0&&($=Et.end-(D._startClamp?Math.max(0,Et.start):Et.start),(Lt===f&&Et.start-Et._pinPush<Q||Lt===yn)&&isNaN(Ae)&&(ye+=$*(1-Et.progress)),Lt===d&&(Me+=$));if(Q+=ye,P+=ye,D._startClamp&&(D._startClamp+=ye),D._endClamp&&!Cn&&(D._endClamp=P||-.001,P=Math.min(P,Di(U,y))),A=P-Q||(Q-=.01)&&.001,Ze&&(F=Ut.utils.clamp(0,1,Ut.utils.normalize(Q,P,St))),D._pinPush=Me,dt&&ye&&($={},$[y.a]="+="+ye,yn&&($[y.p]="-="+O()),Ut.set([dt,at],$)),d&&!(lu&&D.end>=Di(U,y)))$=li(d),mt=y===Xe,q=O(),Mt=parseFloat(vt(y.a))+Me,!we&&P>1&&(Kt=(H?Te.scrollingElement||Qn:U).style,Kt={style:Kt,value:Kt["overflow"+y.a.toUpperCase()]},H&&li(xe)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Kt.style["overflow"+y.a.toUpperCase()]="scroll")),iu(d,ot,$),nt=yl(d),J=Yi(d,!0),Yt=Z&&Xi(U,mt?dn:Xe)(),p?(yt=[p+y.os2,A+Me+Je],yt.t=ot,k=p===qe?Pl(d,y)+A+Me:0,k&&(yt.push(y.d,k+Je),ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=k+Je)),Js(yt),yn&&se.forEach(function(Le){Le.pin===yn&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),Z&&O(St)):(k=Pl(d,y),k&&ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=k+Je)),Z&&(_t={top:J.top+(mt?q-Q:Yt)+Je,left:J.left+(mt?Yt:q-Q)+Je,boxSizing:"border-box",position:"fixed"},_t[es]=_t["max"+Ks]=Math.ceil(J.width)+Je,_t[ns]=_t["max"+_u]=Math.ceil(J.height)+Je,_t[ai]=_t[ai+fa]=_t[ai+ha]=_t[ai+da]=_t[ai+ua]="0",_t[qe]=$[qe],_t[qe+fa]=$[qe+fa],_t[qe+ha]=$[qe+ha],_t[qe+da]=$[qe+da],_t[qe+ua]=$[qe+ua],Y=qx(b,_t,C),Cn&&O(0)),i?(Jt=i._initted,Qh(1),i.render(i.duration(),!0,!0),Ht=vt(y.a)-Mt+A+Me,Vt=Math.abs(A-Ht)>1,Z&&Vt&&Y.splice(Y.length-2,2),i.render(0,!0,!0),Jt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qh(0)):Ht=A,Kt&&(Kt.value?Kt.style["overflow"+y.a.toUpperCase()]=Kt.value:Kt.style.removeProperty("overflow-"+y.a));else if(f&&O()&&!w)for(J=f.parentNode;J&&J!==xe;)J._pinOffset&&(Q-=J._pinOffset,P-=J._pinOffset),J=J.parentNode;Ot&&Ot.forEach(function(Le){return Le.revert(!1,!0)}),D.start=Q,D.end=P,xt=tt=Cn?St:O(),!w&&!Cn&&(xt<St&&O(St),D.scroll.rec=0),D.revert(!1,!0),V=mn(),lt&&(L=-1,lt.restart(!0)),pn=0,i&&I&&(i._initted||Tt)&&i.progress()!==Tt&&i.progress(Tt||0,!0).render(i.time(),!0,!0),(Ze||F!==D.progress||w||_||i&&!i._initted)&&(i&&!I&&(i._initted||F||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Q<-.001&&!F?Ut.utils.normalize(Q,P,0):F,!0),D.progress=Ze||(xt-Q)/A===F?0:F),d&&p&&(ot._pinOffset=Math.round(D.progress*Ht)),N&&N.invalidate(),isNaN(fe)||(fe-=Ut.getProperty(B,y.p),me-=Ut.getProperty(ut,y.p),Ml(B,y,fe),Ml(dt,y,fe-(Zt||0)),Ml(ut,y,me),Ml(at,y,me-(Zt||0))),Ze&&!Cn&&D.update(),h&&!Cn&&!bt&&(bt=!0,h(D),bt=!1)}},D.getVelocity=function(){return(O()-tt)/(mn()-ra)*1e3||0},D.endAnimation=function(){ia(D.callbackAnimation),i&&(N?N.progress(1):i.paused()?I||ia(i,D.direction<0,1):ia(i,i.reversed()))},D.labelToScroll=function(At){return i&&i.labels&&(Q||D.refresh()||Q)+i.labels[At]/i.duration()*A||0},D.getTrailing=function(At){var $t=se.indexOf(D),Bt=D.direction>0?se.slice(0,$t).reverse():se.slice($t+1);return(Kn(At)?Bt.filter(function(Zt){return Zt.vars.preventOverlaps===At}):Bt).filter(function(Zt){return D.direction>0?Zt.end<=Q:Zt.start>=P})},D.update=function(At,$t,Bt){if(!(w&&!Bt&&!At)){var Zt=Cn===!0?St:D.scroll(),He=At?0:(Zt-Q)/A,oe=He<0?0:He>1?1:He||0,we=D.progress,Ze,ye,Me,pe,Wn,Ae,yn,E;if($t&&(tt=xt,xt=w?O():Zt,x&&(ce=Xt,Xt=i&&!I?i.totalProgress():oe)),g&&d&&!pn&&!pl&&ci&&(!oe&&Q<Zt+(Zt-tt)/(mn()-ra)*g?oe=1e-4:oe===1&&P>Zt+(Zt-tt)/(mn()-ra)*g&&(oe=.9999)),oe!==we&&D.enabled){if(Ze=D.isActive=!!oe&&oe<1,ye=!!we&&we<1,Ae=Ze!==ye,Wn=Ae||!!oe!=!!we,D.direction=oe>we?1:-1,D.progress=oe,Wn&&!pn&&(Me=oe&&!we?0:oe===1?1:we===1?2:3,I&&(pe=!Ae&&K[Me+1]!=="none"&&K[Me+1]||K[Me],E=i&&(pe==="complete"||pe==="reset"||pe in i))),S&&(Ae||E)&&(E||u||!i)&&(gn(S)?S(D):D.getTrailing(S).forEach(function(q){return q.endAnimation()})),I||(N&&!pn&&!pl?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",oe,i._tTime/i._tDur):(N.vars.totalProgress=oe,N.invalidate().restart())):i&&i.totalProgress(oe,!!(pn&&(V||At)))),d){if(At&&p&&(ot.style[p+y.os2]=pt),!Z)gt(oa(Mt+Ht*oe));else if(Wn){if(yn=!At&&oe>we&&P+1>Zt&&Zt+1>=Di(U,y),C)if(!At&&(Ze||yn)){var k=Yi(d,!0),$=Zt-Q;_m(d,xe,k.top+(y===Xe?$:0)+Je,k.left+(y===Xe?0:$)+Je)}else _m(d,ot);Js(Ze||yn?Y:nt),Vt&&oe<1&&Ze||gt(Mt+(oe===1&&!yn?Ht:0))}}x&&!it.tween&&!pn&&!pl&&lt.restart(!0),a&&(Ae||v&&oe&&(oe<1||!jh))&&ma(a.targets).forEach(function(q){return q.classList[Ze||v?"add":"remove"](a.className)}),o&&!I&&!At&&o(D),Wn&&!pn?(I&&(E&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(D)),(Ae||!jh)&&(c&&Ae&&eu(D,c),G[Me]&&eu(D,G[Me]),v&&(oe===1?D.kill(!1,1):G[Me]=0),Ae||(Me=oe===1?1:3,G[Me]&&eu(D,G[Me]))),R&&!Ze&&Math.abs(D.getVelocity())>(aa(R)?R:2500)&&(ia(D.callbackAnimation),N?N.progress(1):ia(i,pe==="reverse"?1:!oe,1))):I&&o&&!pn&&o(D)}if(It){var J=w?Zt/w.duration()*(w._caScrollDist||0):Zt;Gt(J+(B._isFlipped?1:0)),It(J)}qt&&qt(-Zt/w.duration()*(w._caScrollDist||0))}},D.enable=function(At,$t){D.enabled||(D.enabled=!0,en(U,"resize",la),H||en(U,"scroll",qs),ct&&en(r,"refreshInit",ct),At!==!1&&(D.progress=F=0,xt=tt=L=O()),$t!==!1&&D.refresh())},D.getTween=function(At){return At&&it?it.tween:N},D.setPositions=function(At,$t,Bt,Zt){if(w){var He=w.scrollTrigger,oe=w.duration(),we=He.end-He.start;At=He.start+we*At/oe,$t=He.start+we*$t/oe}D.refresh(!1,!1,{start:lm(At,Bt&&!!D._startClamp),end:lm($t,Bt&&!!D._endClamp)},Zt),D.update()},D.adjustPinSpacing=function(At){if(yt&&At){var $t=yt.indexOf(y.d)+1;yt[$t]=parseFloat(yt[$t])+At+Je,yt[1]=parseFloat(yt[1])+At+Je,Js(yt)}},D.disable=function(At,$t){if(D.enabled&&(At!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,$t||N&&N.pause(),St=0,rt&&(rt.uncache=1),ct&&tn(r,"refreshInit",ct),lt&&(lt.pause(),it.tween&&it.tween.kill()&&(it.tween=0)),!H)){for(var Bt=se.length;Bt--;)if(se[Bt].scroller===U&&se[Bt]!==D)return;tn(U,"resize",la),H||tn(U,"scroll",qs)}},D.kill=function(At,$t){D.disable(At,$t),N&&!$t&&N.kill(),l&&delete cu[l];var Bt=se.indexOf(D);Bt>=0&&se.splice(Bt,1),Bt===An&&Tl>0&&An--,Bt=0,se.forEach(function(Zt){return Zt.scroller===D.scroller&&(Bt=1)}),Bt||Cn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,At&&i.revert({kill:!1}),$t||i.kill()),dt&&[dt,at,B,ut].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),pa===D&&(pa=0),d&&(rt&&(rt.uncache=1),Bt=0,se.forEach(function(Zt){return Zt.pin===d&&Bt++}),Bt||(rt.spacer=0)),n.onKill&&n.onKill(D)},se.push(D),D.enable(!1,!1),ue&&ue(D),i&&i.add&&!A){var ee=D.update;D.update=function(){D.update=ee,re.cache++,Q||P||D.refresh()},Ut.delayedCall(.01,D.update),A=.01,Q=P=0}else D.refresh();d&&Gx()},r.register=function(n){return Ys||(Ut=n||Am(),Em()&&window.document&&r.enable(),Ys=sa),Ys},r.defaults=function(n){if(n)for(var i in n)xl[i]=n[i];return xl},r.disable=function(n,i){sa=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(ae,"wheel",qs),tn(Te,"scroll",qs),clearInterval(dl),tn(Te,"touchcancel",Li),tn(xe,"touchstart",Li),gl(tn,Te,"pointerdown,touchstart,mousedown",cm),gl(tn,Te,"pointerup,touchend,mouseup",hm),Cl.kill(),ml(tn);for(var s=0;s<re.length;s+=3)_l(tn,re[s],re[s+1]),_l(tn,re[s],re[s+2])},r.enable=function(){if(ae=window,Te=document,Qn=Te.documentElement,xe=Te.body,Ut&&(ma=Ut.utils.toArray,ca=Ut.utils.clamp,au=Ut.core.context||Li,Qh=Ut.core.suppressOverwrites||Li,du=ae.history.scrollRestoration||"auto",hu=ae.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),xe)){sa=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Om(),Ox(),ke.register(Ut),r.isTouch=ke.isTouch,Sr=ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ou=ke.isTouch===1,en(ae,"wheel",qs),fu=[ae,Te,Qn,xe],Ut.matchMedia?(r.matchMedia=function(c){var h=Ut.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ut.addEventListener("matchMediaInit",function(){return vu()}),Ut.addEventListener("matchMediaRevert",function(){return Um()}),Ut.addEventListener("matchMedia",function(){ts(0,1),os("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return nu(),nu})):console.warn("Requires GSAP 3.11.0 or later"),nu(),en(Te,"scroll",qs);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Yi(xe),Xe.m=Math.round(a.top+Xe.sc())||0,dn.m=Math.round(a.left+dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),dl=setInterval(dm,250),Ut.delayedCall(.5,function(){return pl=0}),en(Te,"touchcancel",Li),en(xe,"touchstart",Li),gl(en,Te,"pointerdown,touchstart,mousedown",cm),gl(en,Te,"pointerup,touchend,mouseup",hm),su=Ut.utils.checkPrefix("transform"),El.push(su),Ys=mn(),Cl=Ut.delayedCall(.2,ts).pause(),Zs=[Te,"visibilitychange",function(){var c=ae.innerWidth,h=ae.innerHeight;Te.hidden?(sm=c,om=h):(sm!==c||om!==h)&&la()},Te,"DOMContentLoaded",ts,ae,"load",ts,ae,"resize",la],ml(en),se.forEach(function(c){return c.enable(0,1)}),l=0;l<re.length;l+=3)_l(tn,re[l],re[l+1]),_l(tn,re[l],re[l+2])}},r.config=function(n){"limitCallbacks"in n&&(jh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(dl)||(dl=i)&&setInterval(dm,i),"ignoreMobileResize"in n&&(ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ml(tn)||ml(en,n.autoRefreshEvents||"none"),bm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Tn(n),o=re.indexOf(s),a=rs(s);~o&&re.splice(o,a?6:2),i&&(a?yi.unshift(ae,i,xe,i,Qn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?Tn(n):n).getBoundingClientRect(),a=o[s?es:ns]*i||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=Tn(n));var o=n.getBoundingClientRect(),a=o[s?es:ns],l=i==null?a/2:i in Il?Il[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();Wt.version="3.13.0";Wt.saveStyles=function(r){return r?ma(r).forEach(function(t){if(t&&t.style){var e=Jn.indexOf(t);e>=0&&Jn.splice(e,5),Jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),au())}}):Jn};Wt.revert=function(r,t){return vu(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?la(!0):(Ys||Wt.register())&&ts(!0)};Wt.update=function(r){return++re.cache&&Zi(r===!0?2:0)};Wt.clearScrollMemory=Nm;Wt.maxScroll=function(r,t){return Di(r,t?dn:Xe)};Wt.getScrollFunc=function(r,t){return Xi(Tn(r),t?dn:Xe)};Wt.getById=function(r){return cu[r]};Wt.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!ci};Wt.snapDirectional=xu;Wt.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Ut.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(p){u.length||d.restart(!0),u.push(p.trigger),f.push(p),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&gn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return gn(s)&&(s=s(),en(Wt,"refresh",function(){return s=t.batchMax()})),ma(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Wt.create(c))}),e};var vm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ru=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ke.isTouch?" pinch-zoom":""):"none",t===Qn&&r(xe,e)},Sl={auto:1,scroll:1},Zx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sl[(l=li(s)).overflowY]||Sl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!rs(s)&&(Sl[(l=li(s)).overflowY]||Sl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Bm=function(t,e,n,i){return ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Zx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Te,ke.eventTypes[0],Mm,!1,!0)},onDisable:function(){return tn(Te,ke.eventTypes[0],Mm,!0)}})},$x=/(input|label|select|textarea)/i,ym,Mm=function(t){var e=$x.test(t.target.tagName);(e||ym)&&(t._gsapAllow=!0,ym=e)},Jx=function(t){jr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Tn(t.target)||Qn,h=Ut.core.globals().ScrollSmoother,u=h&&h.get(),f=Sr&&(t.content&&Tn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=Xi(c,Xe),p=Xi(c,dn),_=1,g=(ke.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,m=0,M=gn(i)?function(){return i(a)}:function(){return i||2.8},v,x,C=Bm(c,t.type,!0,s),T=function(){return x=!1},w=Li,R=Li,S=function(){l=Di(c,Xe),R=ca(Sr?1:0,l),n&&(w=ca(0,Di(c,dn))),v=is},y=function(){f._gsap.y=oa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(T);var X=oa(a.deltaY/2),ht=R(d.v-X);if(f&&ht!==d.v+d.offset){d.offset=ht-d.v;var D=oa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=re.cache,Zi()}return!0}d.offset&&y(),x=!0},U,z,H,Z,G=function(){S(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(K){return Sr&&K.type==="touchmove"&&I(K)||_>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},t.onPress=function(){x=!1;var K=_;_=oa((ae.visualViewport&&ae.visualViewport.scale||1)/g),U.pause(),K!==_&&ru(c,_>1.01?!0:n?!1:"x"),z=p(),H=d(),S(),v=is},t.onRelease=t.onGestureStart=function(K,X){if(d.offset&&y(),!X)Z.restart(!0);else{re.cache++;var ht=M(),D,ct;n&&(D=p(),ct=D+ht*.05*-K.velocityX/.227,ht*=vm(p,D,ct,Di(c,dn)),U.vars.scrollX=w(ct)),D=d(),ct=D+ht*.05*-K.velocityY/.227,ht*=vm(d,D,ct,Di(c,Xe)),U.vars.scrollY=R(ct),U.invalidate().duration(ht).play(.01),(Sr&&U.vars.scrollY>=l||D>=l-1)&&Ut.to({},{onUpdate:G,duration:ht})}o&&o(K)},t.onWheel=function(){U._ts&&U.pause(),mn()-m>1e3&&(v=0,m=mn())},t.onChange=function(K,X,ht,D,ct){if(is!==v&&S(),X&&n&&p(w(D[2]===X?z+(K.startX-K.x):p()+X-D[1])),ht){d.offset&&y();var ft=ct[2]===ht,Dt=ft?H+K.startY-K.y:d()+ht-ct[1],L=R(Dt);ft&&Dt!==L&&(H+=L-Dt),d(L)}(ht||X)&&Zi()},t.onEnable=function(){ru(c,n?!1:"x"),Wt.addEventListener("refresh",G),en(ae,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),C.enable()},t.onDisable=function(){ru(c,!0),tn(ae,"resize",G),Wt.removeEventListener("refresh",G),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new ke(t),a.iOS=Sr,Sr&&!d()&&d(1),Sr&&Ut.ticker.add(Li),Z=a._dc,U=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fm(d,d(),function(){return U.pause()})},onUpdate:Zi,onComplete:Z.vars.onComplete}),a};Wt.sort=function(r){if(gn(r))return se.sort(r);var t=ae.pageYOffset||0;return Wt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),se.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new ke(r)};Wt.normalizeScroll=function(r){if(typeof r=="undefined")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var t=r instanceof ke?r:Jx(r);return En&&En.target===t.target&&En.kill(),rs(t.target)&&(En=t),t};Wt.core={_getVelocityProp:fl,_inputObserver:Bm,_scrollers:re,_proxies:yi,bridge:{ss:function(){ci||os("scrollStart"),ci=mn()},ref:function(){return pn}}};Am()&&Ut.registerPlugin(Wt);var Kx=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var Qx=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var jx=Math.PI/180,XT=180/Math.PI,Dl=Math.sin,Ul=Math.cos,xa=Math.abs,_a=Math.sqrt;var tv=function(t){return typeof t=="number"};var zm=1e5;var br=function(t){return Math.round(t*zm)/zm||0};function km(r,t,e,n,i,s,o){for(var a=r.length,l,c,h,u,f;--a>-1;)for(l=r[a],c=l.length,h=0;h<c;h+=2)u=l[h],f=l[h+1],l[h]=u*t+f*n+s,l[h+1]=u*e+f*i+o;return r._dirty=1,r}function ev(r,t,e,n,i,s,o,a,l){if(!(r===a&&t===l)){e=xa(e),n=xa(n);var c=i%360*jx,h=Ul(c),u=Dl(c),f=Math.PI,d=f*2,p=(r-a)/2,_=(t-l)/2,g=h*p+u*_,m=-u*p+h*_,M=g*g,v=m*m,x=M/(e*e)+v/(n*n);x>1&&(e=_a(x)*e,n=_a(x)*n);var C=e*e,T=n*n,w=(C*T-C*v-T*M)/(C*v+T*M);w<0&&(w=0);var R=(s===o?-1:1)*_a(w),S=R*(e*m/n),y=R*-(n*g/e),I=(r+a)/2,U=(t+l)/2,z=I+(h*S-u*y),H=U+(u*S+h*y),Z=(g-S)/e,G=(m-y)/n,K=(-g-S)/e,X=(-m-y)/n,ht=Z*Z+G*G,D=(G<0?-1:1)*Math.acos(Z/_a(ht)),ct=(Z*X-G*K<0?-1:1)*Math.acos((Z*K+G*X)/_a(ht*(K*K+X*X)));isNaN(ct)&&(ct=f),!o&&ct>0?ct-=d:o&&ct<0&&(ct+=d),D%=d,ct%=d;var ft=Math.ceil(xa(ct)/(d/4)),Dt=[],L=ct/ft,V=4/3*Dl(L/2)/(1+Ul(L/2)),F=h*e,O=u*e,it=u*-n,rt=h*n,j;for(j=0;j<ft;j++)i=D+j*L,g=Ul(i),m=Dl(i),Z=Ul(i+=L),G=Dl(i),Dt.push(g-V*m,m+V*g,Z+V*G,G-V*Z,Z,G);for(j=0;j<Dt.length;j+=2)g=Dt[j],m=Dt[j+1],Dt[j]=g*F+m*it+z,Dt[j+1]=g*O+m*rt+H;return Dt[j-2]=a,Dt[j-1]=l,Dt}}function Vm(r){var t=(r+"").replace(Qx,function(S){var y=+S;return y<1e-4&&y>-1e-4?0:y}).match(Kx)||[],e=[],n=0,i=0,s=2/3,o=t.length,a=0,l="ERROR: malformed path: "+r,c,h,u,f,d,p,_,g,m,M,v,x,C,T,w,R=function(y,I,U,z){M=(U-y)/3,v=(z-I)/3,_.push(y+M,I+v,U-M,z-v,U,z)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<o;c++)if(C=d,isNaN(t[c])?(d=t[c].toUpperCase(),p=d!==t[c]):c--,u=+t[c+1],f=+t[c+2],p&&(u+=n,f+=i),c||(g=u,m=f),d==="M")_&&(_.length<8?e.length-=1:a+=_.length),n=g=u,i=m=f,_=[u,f],e.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),p||(n=i=0),_.push(u,f,n+t[c+3]*1,i+t[c+4]*1,n+=t[c+5]*1,i+=t[c+6]*1),c+=6;else if(d==="S")M=n,v=i,(C==="C"||C==="S")&&(M+=n-_[_.length-4],v+=i-_[_.length-3]),p||(n=i=0),_.push(M,v,u,f,n+=t[c+3]*1,i+=t[c+4]*1),c+=4;else if(d==="Q")M=n+(u-n)*s,v=i+(f-i)*s,p||(n=i=0),n+=t[c+3]*1,i+=t[c+4]*1,_.push(M,v,n+(u-n)*s,i+(f-i)*s,n,i),c+=4;else if(d==="T")M=n-_[_.length-4],v=i-_[_.length-3],_.push(n+M,i+v,u+(n+M*1.5-u)*s,f+(i+v*1.5-f)*s,n=u,i=f),c+=2;else if(d==="H")R(n,i,n=u,i),c+=1;else if(d==="V")R(n,i,n,i=u+(p?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(u=g,f=m,_.closed=!0),(d==="L"||xa(n-u)>.5||xa(i-f)>.5)&&(R(n,i,u,f),d==="L"&&(c+=2)),n=u,i=f;else if(d==="A"){if(T=t[c+4],w=t[c+5],M=t[c+6],v=t[c+7],h=7,T.length>1&&(T.length<3?(v=M,M=w,h--):(v=w,M=T.substr(2),h-=2),w=T.charAt(1),T=T.charAt(0)),x=ev(n,i,+t[c+1],+t[c+2],+t[c+3],+T,+w,(p?n:0)+M*1,(p?i:0)+v*1),c+=h,x)for(h=0;h<x.length;h++)_.push(x[h]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),e.totalPoints=a+c,e}function Hm(r){tv(r[0])&&(r=[r]);var t="",e=r.length,n,i,s,o;for(i=0;i<e;i++){for(o=r[i],t+="M"+br(o[0])+","+br(o[1])+" C",n=o.length,s=2;s<n;s++)t+=br(o[s++])+","+br(o[s++])+" "+br(o[s++])+","+br(o[s++])+" "+br(o[s++])+","+br(o[s])+" ";o.closed&&(t+="z")}return t}var Vn,Wm,Xm=function(){return Vn||typeof window!="undefined"&&(Vn=window.gsap)&&Vn.registerPlugin&&Vn},Gm=function(){Vn=Xm(),Vn?(Vn.registerEase("_CE",as.create),Wm=1):console.warn("Please gsap.registerPlugin(CustomEase)")},nv=1e20,Nl=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},iv=1,rv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,sv=/[cLlsSaAhHvVtTqQ]/g,ov=function(t){var e=t.length,n=nv,i;for(i=1;i<e;i+=6)+t[i]<n&&(n=+t[i]);return n},av=function(t,e,n){!n&&n!==0&&(n=Math.max(+t[t.length-1],+t[1]));var i=+t[0]*-1,s=-n,o=t.length,a=1/(+t[o-2]+i),l=-e||(Math.abs(+t[o-1]-+t[1])<.01*(+t[o-2]-+t[0])?ov(t)+s:+t[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)t[c]=(+t[c]+i)*a,t[c+1]=(+t[c+1]+s)*l},lv=function r(t,e,n,i,s,o,a,l,c,h,u){var f=(t+n)/2,d=(e+i)/2,p=(n+s)/2,_=(i+o)/2,g=(s+a)/2,m=(o+l)/2,M=(f+p)/2,v=(d+_)/2,x=(p+g)/2,C=(_+m)/2,T=(M+x)/2,w=(v+C)/2,R=a-t,S=l-e,y=Math.abs((n-a)*S-(i-l)*R),I=Math.abs((s-a)*S-(o-l)*R),U;return h||(h=[{x:t,y:e},{x:a,y:l}],u=1),h.splice(u||h.length-1,0,{x:T,y:w}),(y+I)*(y+I)>c*(R*R+S*S)&&(U=h.length,r(t,e,f,d,M,v,T,w,c,h,u),r(T,w,x,C,g,m,a,l,c,h,u+1+(h.length-U))),h},as=(function(){function r(e,n,i){Wm||Gm(),this.id=e,iv&&this.setData(n,i)}var t=r.prototype;return t.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(rv),o=1,a=[],l=[],c=i.precision||1,h=c<=1,u,f,d,p,_,g,m,M,v;if(this.data=n,(sv.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Vm(n)[0]),u=s.length,u===4)s.unshift(0,0),s.push(1,1),u=8;else if((u-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[u-2]!=1)&&av(s,i.height,i.originY),this.segment=s,p=2;p<u;p+=6)f={x:+s[p-2],y:+s[p-1]},d={x:+s[p+4],y:+s[p+5]},a.push(f,d),lv(f.x,f.y,+s[p],+s[p+1],+s[p+2],+s[p+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(u=a.length,p=0;p<u;p++)m=a[p],M=a[p-1]||m,(m.x>M.x||M.y!==m.y&&M.x===m.x||m===M)&&m.x<=1?(M.cx=m.x-M.x,M.cy=m.y-M.y,M.n=m,M.nx=m.x,h&&p>1&&Math.abs(M.cy/M.cx-a[p-2].cy/a[p-2].cx)>2&&(h=0),M.cx<o&&(M.cx?o=M.cx:(M.cx=.001,p===u-1&&(M.x-=.001,o=Math.min(o,.001),h=0)))):(a.splice(p--,1),u--);if(u=1/o+1|0,_=1/u,g=0,m=a[0],h){for(p=0;p<u;p++)v=p*_,m.nx<v&&(m=a[++g]),f=m.y+(v-m.x)/m.cx*m.cy,l[p]={x:v,cx:_,y:f,cy:0,nx:9},p&&(l[p-1].cy=f-l[p-1].y);g=a[a.length-1],l[u-1].cy=g.y-f,l[u-1].cx=g.x-l[l.length-1].x}else{for(p=0;p<u;p++)m.nx<p*_&&(m=a[++g]),l[p]=m;g<a.length-1&&(l[p-1]=a[a.length-2])}return this.ease=function(x){var C=l[x*u|0]||l[u-1];return C.nx<x&&(C=C.n),C.y+(x-C.x)/C.cx*C.cy},this.ease.custom=this,this.id&&Vn&&Vn.registerEase(this.id,this.ease),this},t.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Vn=n,Gm()},r.get=function(n){return Vn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Vn.utils.toArray(i.path)[0],h,u,f,d,p,_,g,m,M,v;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Vn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)h=Hm(km([n.segment],s,0,0,-o,a,l));else{for(h=[a,l],g=Math.max(5,(i.precision||1)*200),d=1/g,g+=2,m=5/g,M=Nl(a+d*s),v=Nl(l+n(d)*-o),u=(v-l)/(M-a),f=2;f<g;f++)p=Nl(a+f*d*s),_=Nl(l+n(f*d)*-o),(Math.abs((_-v)/(p-M)-u)>m||f===g-1)&&(h.push(M,v),u=(_-v)/(p-M)),M=p,v=_;h="M"+h.join(",")}return c&&c.setAttribute("d",h),h},r})();as.version="3.13.0";as.headless=!0;Xm()&&Vn.registerPlugin(as);var qm="1.3.23";function $m(r,t,e){return Math.max(r,Math.min(t,e))}function cv(r,t,e){return(1-e)*r+e*t}function hv(r,t,e,n){return cv(r,t,1-Math.exp(-e*n))}function uv(r,t){return(r%t+t)%t}var fv=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=$m(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=hv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function dv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var pv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=dv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Jm=class{constructor(){zt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},mv=100/6,wr={passive:!1};function Ym(r,t){return r===1?mv:r===2?t:1}var gv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new Jm);zt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});zt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});zt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});zt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Ym(n,this.window.width),s=Ym(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,wr),this.element.addEventListener("touchstart",this.onTouchStart,wr),this.element.addEventListener("touchmove",this.onTouchMove,wr),this.element.addEventListener("touchend",this.onTouchEnd,wr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,wr),this.element.removeEventListener("touchstart",this.onTouchStart,wr),this.element.removeEventListener("touchmove",this.onTouchMove,wr),this.element.removeEventListener("touchend",this.onTouchEnd,wr)}},Zm=r=>Math.min(1,1.001-2**(-10*r)),Km=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:M=!0,autoRaf:v=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:R=w,stopInertiaOnNavigate:S=!1}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"isTouching");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new fv);zt(this,"emitter",new Jm);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",r=>{r.button===1&&this.reset()});zt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,g,m,M,v;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-horizontal"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((v=p.hasAttribute)==null?void 0:v.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=qm,window.lenis||(window.lenis={}),window.lenis.version=qm,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Zm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:M,autoRaf:v,anchors:x,autoToggle:C,allowNestedScroll:T,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new pv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new gv(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(p=f),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(v)?0:v)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=$m(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Zm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var T;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,u,f,d,p;if(n-((T=i.time)!=null?T:0)>2e3){i.time=Date.now();let w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=u>d,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,M,v,x,C;if(_==="horizontal")g=Math.round(r.scrollLeft),m=u-d,M=t,v=s,x=a,C=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=f-p,M=e,v=o,x=l,C=h;else return!1;return!C&&(g>=m||g<=0)?!0:(M>0?g<m:g>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?uv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Qm=1600,jm=900,yu=4.97,_n=4.63,nn=4.37,$i={x:858,y:200},ls={x:805,y:500},Ji={io:r=>r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2,out2:r=>1-(1-r)*(1-r),out3:r=>1-Math.pow(1-r,3),in2:r=>r*r};function Mi(r,t,e=Ji.io){if(t<=r[0][0])return r[0][1];for(let n=1;n<r.length;n++){let[i,s]=r[n];if(t<=i){let[o,a]=r[n-1],l=i===o?1:e((t-o)/(i-o));return Array.isArray(a)?a.map((c,h)=>c+(s[h]-c)*l):a+(s-a)*l}}return r[r.length-1][1]}var _v=[[0,1.62],[.08,1.62],[2.4,1],[nn-.001,1],[nn,1.09],[_n,1.15]],xv=[[1.03,[1374,505,58]],[1.23,[1378,489,58]],[1.43,[1383,435,59]],[1.63,[1387,378,60]],[1.83,[1388,342,61]],[2.03,[1393,318,62]],[2.33,[1396,310,62]],[2.53,[1427,309,70]],[2.63,[1422,362,98]],[2.73,[1410,380,102]],[3.03,[1399,392,105]],[3.23,[1393,393,113]],[3.33,[1364,396,118]],[3.43,[1323,394,124]],[3.53,[1200,394,118]],[3.63,[1152,393,113]],[3.83,[1122,392,103]],[3.93,[1114,390,90]],[4.23,[1114,390,90]],[nn-.001,[1126,396,88]],[nn,[1236,444,72]],[4.43,[1243,446,70]],[4.53,[1259,451,69]],[_n,[1276,452,68]]],vv=[[1.9,[266,475,30]],[2.03,[272,385,46]],[2.13,[278,334,52]],[2.33,[280,309,56]],[2.53,[270,317,58]],[2.63,[220,367,66]],[2.73,[165,425,90]],[3.03,[141,452,99]],[3.23,[141,452,99]],[3.33,[155,435,74]],[3.43,[161,425,66]],[3.53,[166,417,59]],[4.03,[170,414,57]],[4.13,[186,419,52]],[4.23,[240,437,46]],[nn-.001,[259,443,41]],[nn,[270,447,40]],[4.53,[276,450,40]],[_n,[276,450,40]]],t0=[[0,[165,13]],[.35,[165,13]],[.43,[161,13]],[.63,[151,12.8]],[.83,[141,12.5]],[1.43,[140.5,13.3]],[1.83,[148.5,13.4]],[2.13,[151.5,13.4]],[2.43,[151.5,13.4]],[3.03,[148,23.9]],[3.43,[143,24]],[3.83,[131,20]],[4.23,[135.5,16.6]],[nn-.001,[137,16]],[nn,[150,8.5]],[4.43,[151.5,8]],[_n,[164,5.5]]],yv=[[1.93,[36,8]],[2.03,[31,12.7]],[2.23,[30,13.4]],[2.43,[30,13.4]],[3.03,[19.5,24]],[3.43,[24.5,18]],[3.83,[26,15]],[4.23,[22.5,13]],[nn-.001,[22,12.5]],[nn,[21,11]],[_n,[14.5,10]]],Mv=[[1.2,[1300,900,181,4]],[1.43,[1320,480,181,5]],[1.63,[1328,280,181,6]],[1.73,[1331,178,181,6.6]],[1.93,[1341,145,175,9]],[2.33,[1351,127,177,11]],[2.45,[1351,127,177,11]],[2.63,[1403,160,238,16]],[2.9,[1395,178,258,18.5]],[3.23,[1393,181,261,18.8]],[3.33,[1343,175,259,16]],[3.43,[1276,172,256,12.8]],[3.75,[1060,200,190,0]],[3.93,[1039,205,176,-2]],[4.23,[1039,205,176,-2]],[nn-.001,[1087,211,174,-3]],[nn,[1450,326,160,-4.7]],[4.43,[1454,328,160,-4.7]],[4.53,[1490,350,160,-4]],[_n,[1505,356,160,-4]]],Sv=[[1.45,[500,1e3,176,-1]],[1.63,[470,540,176,-1.5]],[1.73,[488,280,176,-1.5]],[1.93,[478,236,176,-2]],[2.03,[472,200,176,-2]],[2.33,[467,172,176,-2]],[2.45,[467,172,176,-2]],[2.63,[370,259,193,-4.7]],[2.9,[290,292,230,-10]],[3.23,[275,300,238,-11]],[3.33,[230,270,225,-9]],[3.45,[150,210,205,-6]],[3.53,[138,194,200,-5.5]],[4.03,[137,178,197,-5.5]],[4.23,[128,261,172,-3]],[nn-.001,[137,289,163,-2.5]],[nn,[145,308,154,-2.5]],[_n,[150,314,154,-2.5]]],bv=[[1.7,0],[1.95,1],[3.3,1],[3.43,0],[3.88,0],[4.06,.75],[nn,.75],[_n,.6]],wv=[[1.73,0],[2,1],[3.2,1],[3.33,0],[3.45,0],[3.63,.85],[4.1,.85],[4.23,.5],[nn,.5],[_n,.45]],Tv=[[0,[667,1115,195]],[2.4,[667,1115,195]],[3.03,[579,1113,230]],[3.9,[345,1320,300]],[nn-.001,[345,1320,300]],[nn,[690,1130,205]]],e0={work:{head:[104,-30],sh:[94,-16],hip:[82,70],knee:[150,78],ankle:[142,124],el:[120,10],ha:[146,-2],el2:[112,14],ha2:[138,0]},up:{head:[88,-40],sh:[86,-24],hip:[82,70],knee:[150,78],ankle:[142,124],el:[104,14],ha:[100,-18],el2:[110,16],ha2:[140,0]},stretch:{head:[80,-44],sh:[83,-26],hip:[84,70],knee:[152,80],ankle:[146,126],el:[62,-52],ha:[78,-50],el2:[104,-56],ha2:[86,-50]},yawn:{head:[94,-36],sh:[91,-20],hip:[84,70],knee:[150,78],ankle:[142,124],el:[108,4],ha:[96,-34],el2:[116,12],ha2:[140,0]},leap:{head:[132,8],sh:[120,18],hip:[84,56],knee:[128,44],ankle:[104,84],el:[102,-6],ha:[118,-16],el2:[140,30],ha2:[152,14]}},Ol=[[0,"work"],[1.82,"work"],[1.98,"up"],[2.2,"up"],[2.36,"stretch"],[3.25,"stretch"],[3.4,"yawn"],[3.47,"yawn"],[3.6,"leap"]],cs=(r,t,e)=>r+(t-r)*e,Ui=r=>[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16)],Qs=(r,t,e)=>`rgb(${Math.round(cs(r[0],t[0],e))},${Math.round(cs(r[1],t[1],e))},${Math.round(cs(r[2],t[2],e))})`,hi={dark:Ui("#4a1d14"),lit:Ui("#e88a76"),legLit:Ui("#d17261"),topDark:Ui("#5c2618"),topLit:Ui("#c0624e"),chairDark:Ui("#361a14"),chairLit:Ui("#562014"),hairDark:Ui("#2a0f09"),hairLit:Ui("#8a3a28"),lampOff:Ui("#e8a090"),lampOn:[254,254,252]},Ev=[[0,"rgba(255,254,252,1)"],[85/700,"rgba(253,229,220,1)"],[170/700,"rgba(249,210,195,1)"],[290/700,"rgba(248,186,168,1)"],[400/700,"rgba(232,140,117,0.85)"],[460/700,"rgba(210,118,95,0.6)"],[520/700,"rgba(175,80,60,0.4)"],[575/700,"rgba(153,58,38,0.2)"],[1,"rgba(120,40,25,0)"]];function Mu({el:r,reduced:t,onReveal:e,onDone:n}){let i=r.querySelector(".preloader__canvas"),s=r.querySelector(".preloader__flash"),o=r.querySelector(".preloader__count"),a=r.querySelector(".preloader__num"),l=i.getContext("2d",{alpha:!1});r.style.setProperty("--grain",`url(${Av().toDataURL()})`);let c=0,h=0,u=1,f=1,d=0,p=0,_={};function g(){u=Math.min(window.devicePixelRatio||1,1.5),c=window.innerWidth,h=window.innerHeight,i.width=Math.round(c*u),i.height=Math.round(h*u),c/h<.9?(f=c/1250,d=c/2-800*f,p=h*.44-420*f):(f=Math.max(c/Qm,h/jm),d=(c-Qm*f)/2,p=(h-jm*f)/2)}function m(L,V,F,O,it){let rt=document.createElement("canvas");rt.width=L+F*4,rt.height=V+F*4;let j=rt.getContext("2d");return j.translate(F*2-1e4,F*2),j.shadowColor=it,j.shadowBlur=F,j.shadowOffsetX=1e4,j.fillStyle=it,O(j),j.fill(),rt}function M(L,V,F,O,it,rt){L.beginPath(),L.moveTo(V+rt,F),L.arcTo(V+O,F,V+O,F+it,rt),L.arcTo(V+O,F+it,V,F+it,rt),L.arcTo(V,F+it,V,F,rt),L.arcTo(V,F,V+O,F,rt),L.closePath()}_.pillar=m(600,600,40,L=>M(L,0,0,600,600,150),"rgb(78,8,16)"),_.shadow=m(494,40,14,L=>{L.beginPath(),L.ellipse(247,20,247,20,0,0,Math.PI*2)},"rgb(25,8,5)");{let L=document.createElement("canvas");L.width=L.height=256;let V=L.getContext("2d");V.fillStyle="rgba(192,96,72,0.55)";for(let F=0;F<160;F++){let O=Math.random()*Math.PI*2,it=(1+Math.random()*1.2)*58;V.fillRect(128+Math.cos(O)*it,128+Math.sin(O)*it,1.4,1.4)}_.specks=L}function v(L,V,F,O){let it=L*F,rt=O.x*(1-F)+V.x*(1-L)*F,j=O.y*(1-F)+V.y*(1-L)*F;l.setTransform(u*f*it,0,0,u*f*it,u*(d+f*rt),u*(p+f*j))}function x(L){let[V,F,O,it]=L;if(F>1040)return;l.save(),l.translate(V,F),l.rotate(it*Math.PI/180);let rt=l.createLinearGradient(0,-1.6*O,0,.45*O);rt.addColorStop(0,"#231816"),rt.addColorStop(.45,"#2d1a13"),rt.addColorStop(.8,"rgba(56,29,20,0.6)"),rt.addColorStop(1,"rgba(62,29,20,0)"),l.fillStyle=rt,l.beginPath(),l.moveTo(-3.5*O,.75*O),l.bezierCurveTo(-2.4*O,.5*O,-1.6*O,.3*O,-1.38*O,.2*O),l.lineTo(-1.3*O,-1.15*O),l.quadraticCurveTo(-1.3*O,-1.5*O,-.95*O,-1.52*O),l.quadraticCurveTo(0,-1.6*O,.95*O,-1.52*O),l.quadraticCurveTo(1.3*O,-1.5*O,1.3*O,-1.15*O),l.lineTo(1.38*O,.2*O),l.bezierCurveTo(1.6*O,.3*O,2.4*O,.5*O,3.5*O,.75*O),l.lineTo(3.5*O,1.2*O),l.lineTo(-3.5*O,1.2*O),l.closePath(),l.fill(),l.restore()}function C(L,V,F){if(V<=.02||L[1]>1040)return;let[O,it,rt,j]=L;l.save(),l.translate(O,it),l.rotate(j*Math.PI/180);let xt=.76*rt;T(-.5*rt,0,xt,xt*F[0],V,!1),T(.5*rt,0,xt,xt*F[1],V,!0),l.restore()}function T(L,V,F,O,it,rt){l.save(),l.translate(L,V),rt&&l.scale(-1,1),l.rotate(16*Math.PI/180),l.save(),l.scale(1,.62);let j=l.createRadialGradient(0,-.08*F,.1*F,0,-.08*F,.78*F);j.addColorStop(0,`rgba(255,128,88,${.75*it})`),j.addColorStop(.42,`rgba(214,72,42,${.42*it})`),j.addColorStop(1,"rgba(120,36,22,0)"),l.fillStyle=j,l.fillRect(-.8*F,-.9*F,1.6*F,1.6*F),l.restore(),l.scale(1,Math.max(.04,it)),l.beginPath(),l.moveTo(-.5*F,.02*O),l.bezierCurveTo(-.4*F,-.78*O,.22*F,-.66*O,.5*F,.2*O),l.bezierCurveTo(.12*F,.42*O,-.3*F,.48*O,-.47*F,.3*O),l.quadraticCurveTo(-.56*F,.18*O,-.5*F,.02*O),l.closePath(),l.fillStyle="#fdf9f8",l.fill(),l.restore()}function w(L,V,F,O,it,rt,j){if(j<=.01)return;let xt=O*Math.PI/180,tt=it*Math.PI/180,Q=Math.cos(xt),P=Math.sin(xt),dt=-P,at=Q,B=.4*F,ut=.4*F+rt*Math.tan(tt),Nt=l.createLinearGradient(L,V,L+Q*rt,V+P*rt);for(let[bt,A]of Ev)Nt.addColorStop(bt,A);l.globalAlpha=j,l.fillStyle=Nt,l.beginPath(),l.moveTo(L+dt*B,V+at*B),l.lineTo(L+Q*rt+dt*ut,V+P*rt+at*ut),l.lineTo(L+Q*rt-dt*ut,V+P*rt-at*ut),l.lineTo(L-dt*B,V-at*B),l.closePath(),l.fill(),l.globalAlpha=1}function R(L,V,F,O,it,rt=1){if(O<=.01)return;let j=F/2,xt=Math.min(1,Math.max(0,(rt-1.3)/4)),tt=j*(2.1+1.6*xt),Q=l.createRadialGradient(L,V,j*.85,L,V,tt);if(Q.addColorStop(0,`rgba(255,236,228,${.85*O})`),Q.addColorStop(.35,`rgba(255,170,148,${(.38+.3*xt)*O})`),Q.addColorStop(1,"rgba(226,116,96,0)"),l.fillStyle=Q,l.beginPath(),l.arc(L,V,tt,0,Math.PI*2),l.fill(),xt>0){l.strokeStyle=`rgba(150,72,60,${.1*xt})`,l.lineWidth=j*.05;for(let dt of[1.3,1.55,1.85])l.beginPath(),l.arc(L,V,j*dt,0,Math.PI*2),l.stroke()}l.globalAlpha=O*(1-.6*xt);let P=j/58*128;if(l.drawImage(_.specks,L-P,V-P,P*2,P*2),l.globalAlpha=1,xt>0){let dt=l.createRadialGradient(L,V,j*.8,L,V,j*1.18);dt.addColorStop(0,"rgba(255,254,252,1)"),dt.addColorStop(1,"rgba(255,240,234,0)"),l.fillStyle=dt,l.beginPath(),l.arc(L,V,j*1.18,0,Math.PI*2),l.fill()}else{l.fillStyle=O<1?Qs(hi.lampOff,hi.lampOn,O):"#fefefc",l.beginPath(),l.arc(L,V,j,0,Math.PI*2),l.fill(),l.globalAlpha=O*.45,l.strokeStyle="#7a3628",l.lineWidth=.04*F,l.lineCap="round";let dt=(it+180)*Math.PI/180;for(let at of[-.75,-.1,.55])l.beginPath(),l.arc(L,V,.42*F,dt+at-.28,dt+at+.1),l.stroke();l.globalAlpha=1}}function S(L,V,F){let O=Math.atan2(L[1]-V[1],L[0]-V[0])*180/Math.PI,it=Math.abs(((O-F[0])%360+540)%360-180);return it<F[1]+3?1:it<F[1]+9?1-(it-F[1]-3)/6:0}function y(L){let V=0;for(;V<Ol.length-1&&Ol[V+1][0]<=L;)V++;let[F,O]=Ol[V],it=Ol[V+1],rt=e0[O];if(!it)return rt;let[j,xt]=it,tt=Ji.io(Math.min(1,Math.max(0,(L-F)/(j-F)))),Q=e0[xt],P={};for(let dt in rt)P[dt]=[cs(rt[dt][0],Q[dt][0],tt),cs(rt[dt][1],Q[dt][1],tt)];return P}function I(L,V,F,O){l.beginPath(),l.moveTo(L,V),l.lineTo(F,O),l.stroke()}function U(L,V){l.save(),l.translate(711,594),l.globalAlpha=.55,l.drawImage(_.shadow,-245,79),l.globalAlpha=1,l.fillStyle="#3d190f",l.fillRect(283,17,5,97),l.fillStyle=Qs(hi.topDark,hi.topLit,V.desk),l.fillRect(0,0,295,11),l.fillStyle="#892f1c",l.fillRect(0,11,295,6),l.fillStyle="#fee7e3",l.fillRect(158,-1,28,7),l.fillStyle="#5a2016",l.fillRect(109,-3,16,20),l.fillStyle="#3d190f";for(let ut of[28,50,84,104])l.fillRect(ut,98,3,62);l.fillStyle=Qs(hi.chairDark,hi.chairLit,V.fig),M(l,20,17,55,61,10),l.fill(),l.fillRect(24,84,83,14);let F=y(L),O=L>3.6&&L<_n?Math.sin((L-3.6)*12.5)*2.5:0,it=Qs(hi.dark,hi.lit,V.fig),rt=Qs(hi.dark,hi.legLit,V.fig),j=ut=>ut[1]+O;l.lineCap="round",l.lineJoin="round",l.strokeStyle=rt,l.lineWidth=11,I(F.hip[0],j(F.hip),F.knee[0],j(F.knee)),l.lineWidth=7,I(F.knee[0],j(F.knee),F.ankle[0],j(F.ankle)),l.fillStyle="#2a0f09",l.beginPath(),l.ellipse(F.ankle[0]+5,j(F.ankle)+2,7,3,0,0,Math.PI*2),l.fill();let xt=F.sh[0],tt=j(F.sh),Q=F.hip[0],P=j(F.hip),dt=Math.hypot(Q-xt,P-tt)||1,at=-(P-tt)/dt,B=(Q-xt)/dt;l.fillStyle=it,l.beginPath(),l.moveTo(xt+at*10,tt+B*10),l.lineTo(Q+at*8,P+B*8),l.lineTo(Q-at*8,P-B*8),l.lineTo(xt-at*10,tt-B*10),l.closePath(),l.fill(),l.strokeStyle=it,l.lineWidth=6,I(xt,tt,F.el2[0],j(F.el2)),l.lineWidth=5,I(F.el2[0],j(F.el2),F.ha2[0],j(F.ha2)),l.lineWidth=6,I(xt,tt,F.el[0],j(F.el)),l.lineWidth=5,I(F.el[0],j(F.el),F.ha[0],j(F.ha)),I(xt,tt,F.head[0],j(F.head)),l.beginPath(),l.arc(F.head[0],j(F.head),7.5,0,Math.PI*2),l.fill(),l.fillStyle=Qs(hi.hairDark,hi.hairLit,V.fig),l.beginPath(),l.arc(F.head[0]-5,j(F.head)-4,4,0,Math.PI*2),l.fill(),V.fig<.5&&(l.strokeStyle=`rgba(232,160,140,${.8*(1-V.fig*2)})`,l.lineWidth=1.5,I(xt+9,tt,Q+7,P)),l.fillStyle="#3d190f",l.fillRect(-4,17,8,92),l.fillRect(290,17,7,114),l.restore()}let z=Array.from({length:320},(L,V)=>({a:V/320*Math.PI*2+Math.random()*.3,f:1.5+Math.random()*3,r:.6+Math.random()*1.4,c:Math.random()<.5?"#d27a62":"#f0a088"}));function H(L,V){if(L<1.9||L>2.36)return;let F=Ji.out2(Math.min(1,(L-1.9)/.45)),O=L<1.98?(L-1.9)/.08*.9:.9*(1-(L-1.98)/.38),it=V[2]/2;l.globalAlpha=Math.max(0,O);for(let rt of z){let j=it*(1.2+(rt.f-1.2)*F);l.fillStyle=rt.c,l.fillRect(V[0]+Math.cos(rt.a)*j-20*F,V[1]+Math.sin(rt.a)*j-25*F,rt.r,rt.r)}l.globalAlpha=1}function Z(L){let V=L<=_n?1:1+5*Ji.in2(Math.min(1,(L-_n)/.12)),F=1+(V-1)*.6,O=V,it=1+(V-1)*1.6,rt=Mi(_v,L,Ji.out3);l.setTransform(1,0,0,1,0,0),l.fillStyle="#3e1d14",l.fillRect(0,0,i.width,i.height),v(rt,$i,F,ls);let j=l.createRadialGradient(820,560,0,820,560,620);j.addColorStop(0,"#742a16"),j.addColorStop(1,"rgba(116,42,22,0)"),l.fillStyle=j,l.fillRect(200,-60,1240,1240);let xt=l.createLinearGradient(0,690,0,900);xt.addColorStop(0,"rgba(30,12,8,0)"),xt.addColorStop(1,"rgba(30,12,8,0.25)"),l.fillStyle=xt,l.fillRect(-400,690,2400,600),v(1,$i,it,ls);let tt=Mi(Mv,L),Q=Mi(Sv,L),P=Math.min(1,Math.max(0,(L-1.2)/.15)),dt=Math.min(1,Math.max(0,(L-1.45)/.15));l.globalAlpha=dt,x(Q),l.globalAlpha=P,x(tt),l.globalAlpha=.45,v(rt,$i,F,ls);let[at,B,ut]=Mi(Tv,L),Nt=(B-at)/600,bt=(ut+300)/600;l.drawImage(_.pillar,at-80*Nt,-300-80*bt,760*Nt,760*bt),l.globalAlpha=1;let A,b,Y=1;if(L<1.03){Y=Math.exp(2.95*(1-Ji.out2(Math.min(1,Math.max(0,(L-.08)/1.05)))));let Ht=Ji.io(Math.min(1,Math.max(0,(L-.05)/.75)));A=[cs(906,1370,Ht),cs(434,510,Ht),58*Y],b=Mi(t0,L,Ji.out2)}else A=Mi(xv,L),b=Mi(t0,L);let nt=Mi(vv,L,Ji.out2),ot=Mi(yv,L),st=L<1.9?0:Math.min(1,.35+.65*(L-1.9)/.13),vt=(Ht,pt)=>[$i.x+(711+Ht-$i.x)*rt,$i.y+(594+pt-$i.y)*rt],gt=Ht=>Math.min(1,S(Ht,A,b)+(st>.5?S(Ht,nt,ot):0)),Mt={fig:gt(vt(90,20)),desk:Math.max(gt(vt(150,4)),gt(vt(260,0)))};v(rt,$i,O,ls),U(L,Mt),v(1,$i,it,ls),l.globalCompositeOperation="screen",w(A[0],A[1],A[2],b[0],b[1],700*Y,1),w(nt[0],nt[1],nt[2],ot[0],ot[1],700,st),l.globalCompositeOperation="source-over",R(A[0],A[1],A[2],1,b[0],Y),R(nt[0],nt[1],nt[2],st,ot[0]),H(L,nt),l.globalAlpha=dt,C(Q,Mi(wv,L),[.29,.38]),l.globalAlpha=P,C(tt,Mi(bv,L),[.45,.29]),l.globalAlpha=1}let G={tau:0},K=-1,X=Qt.parseEase("power4.inOut"),ht=()=>{let L=G.tau>=_n?100:Math.round(100*X(Math.min(1,(G.tau+.78)/6.48)));L!==K&&(K=L,a.textContent=L)},D=()=>{Z(G.tau),ht()};g(),window.addEventListener("resize",g),Qt.ticker.add(D);let ct=()=>{Qt.ticker.remove(D),window.removeEventListener("resize",g),r.remove(),n&&n()};if(t){G.tau=2.33,D(),Qt.set(s,{opacity:0}),Qt.timeline({delay:.5}).to(r,{opacity:0,duration:.5}).add(()=>{e&&e(),ct()});return}let ft=()=>{let L=o.getBoundingClientRect();return`${d+ls.x*f-L.left}px ${p+ls.y*f-L.top}px`},Dt=Qt.timeline();return Dt.set(s,{opacity:0,backgroundColor:"#6a241a"}).fromTo(o,{y:60,opacity:0,filter:"blur(6px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"expo.out"},0).to(G,{tau:yu,duration:yu,ease:"none"},0).add(()=>{Qt.to(o,{scale:6,opacity:0,transformOrigin:ft(),duration:.12,ease:"power2.in"})},_n).set(s,{opacity:1},_n+.12).to(s,{backgroundColor:"#c23f29",duration:.17,ease:"power1.in"},_n+.12).add(()=>{e&&e()},4.78).to(s,{opacity:0,duration:.07,ease:"none"},4.9).add(ct,yu),Dt}function Av(){let r=document.createElement("canvas");r.width=r.height=160;let t=r.getContext("2d"),e=t.createImageData(160,160);for(let n=0;n<e.data.length;n+=4){let i=Math.random()*255;e.data[n]=e.data[n+1]=e.data[n+2]=i,e.data[n+3]=255}return t.putImageData(e,0,0),r}function n0(r,t,e,n,i=[]){let a=e*.8*(1-.42*r)/18;for(let l=0;l<18;l++){let c=l/17,h=.975-c*.8,u=Math.max(0,h-r*1.02)*t,f=Math.max(0,a*(.84-c*.66)*(1-.35*r)),d=i[l]||(i[l]={x:0,y:0,w:0,h:0});d.w=u,d.h=u>0?f:0,d.x=(t-u)/2,d.y=n+l*a+2}return i}function i0(r,t,e,n,i,s,o,a=[]){let l=.046*o,c=0;for(let h=r;h<o+i&&c<18;h+=l,c++){let u=Math.pow(Math.max(0,1-(c+t)/e),2)*n,f=a[c]||(a[c]={x:0,y:0,w:0,h:0});f.w=.95*s*u,f.h=.041*o*u,f.h<.75&&(f.w=0,f.h=0),f.x=(s-f.w)/2,f.y=h+l/2-f.h/2-i}for(;c<18;c++)a[c]&&(a[c].w=0,a[c].h=0);return a}var Cv=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,Rv=`
precision highp float;
uniform vec2 uRes;          // css px
uniform float uDpr;
uniform float uTime;
uniform float uMix;         // 0 burnt orange -> 1 lavender
uniform float uHeroBottom;  // css px from top
uniform float uShift;       // css px the glass has scrolled up
uniform float uPitch;       // rib pitch, css px
uniform float uHyp;         // intro hourglass strength (0 = straight ribs)
uniform float uFlash;       // intro peach flash 0..1
uniform float uReveal;      // 0 dark red hand-off colour -> 1 full glass
uniform vec4 uBars[${18}];

float hash2(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 blob(vec3 col, vec2 q, vec2 c, float r, vec3 bc, float a, float aspect, float sx) {
  c.x *= aspect;
  vec2 d = q - c;
  d.x /= sx;
  float w = exp(-dot(d, d) / (r * r));
  return mix(col, bc, clamp(w * a, 0.0, 1.0));
}

vec3 field(vec2 p, float t, float m) {
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(p.x * aspect, p.y);
  vec2 dr = 0.015 * vec2(sin(t * 0.21), cos(t * 0.17));
  vec3 col = mix(vec3(0.76, 0.24, 0.19), vec3(0.79, 0.77, 0.94), m);
  // left band: saturated orange / lilac
  col = blob(col, q, mix(vec2(0.03, 0.45), vec2(0.0, 0.45), m) + dr, mix(0.30, 0.35, m),
             mix(vec3(0.84, 0.30, 0.13), vec3(0.67, 0.60, 0.88), m), mix(0.9, 0.8, m), aspect, 1.0);
  // bottom-left: light orange rising diagonally / periwinkle
  col = blob(col, q, mix(vec2(0.08, 0.97), vec2(0.20, 0.90), m) - dr, mix(0.45, 0.40, m),
             mix(vec3(0.87, 0.52, 0.30), vec3(0.78, 0.79, 0.96), m), mix(0.95, 0.85, m), aspect, 1.0);
  // deep crimson core / top-left violet
  col = blob(col, q, mix(vec2(0.45, 0.33), vec2(0.27, 0.02), m) + dr, mix(0.42, 0.30, m),
             mix(vec3(0.75, 0.20, 0.16), vec3(0.33, 0.24, 0.73), m), mix(0.9, 0.95, m), aspect, 1.0);
  // violet diagonal running down from the top-left (lavender only)
  col = blob(col, q, vec2(0.18, 0.36), 0.22, vec3(0.50, 0.42, 0.80), 0.7 * m, aspect, 1.0);
  // top-right: muted rose / grey violet
  col = blob(col, q, mix(vec2(0.88, 0.22), vec2(0.88, 0.04), m) - dr, mix(0.34, 0.22, m),
             mix(vec3(0.76, 0.36, 0.30), vec3(0.36, 0.30, 0.62), m), mix(0.85, 0.9, m), aspect, 1.0);
  // right edge violet (lavender only)
  col = blob(col, q, vec2(1.0, 0.32), 0.22, vec3(0.47, 0.40, 0.79), 0.7 * m, aspect, 1.0);
  // wide white dome (lavender only)
  col = blob(col, q, vec2(0.64, 0.33) + dr * 0.5, 0.40, vec3(0.93, 0.93, 0.98), 0.97 * m, aspect, 1.3);
  // right side: orange-red low / lilac
  col = blob(col, q, mix(vec2(1.0, 0.78), vec2(0.92, 0.80), m), mix(0.20, 0.32, m),
             mix(vec3(0.84, 0.36, 0.17), vec3(0.78, 0.68, 0.95), m), mix(0.9, 0.95, m), aspect, 1.0);
  // mid-right accent (lavender only)
  col = blob(col, q, vec2(0.82, 0.55), 0.22, vec3(0.74, 0.70, 0.95), 0.6 * m, aspect, 1.0);
  // orange-only corners: brown-rose top-right, salmon top-left
  col = blob(col, q, vec2(1.0, 0.0), 0.12, vec3(0.57, 0.29, 0.25), 0.8 * (1.0 - m), aspect, 1.0);
  col = blob(col, q, vec2(0.0, 0.0), 0.10, vec3(0.80, 0.42, 0.35), 0.6 * (1.0 - m), aspect, 1.0);
  // lower glass (only seen once it scrolls up): faint grey-blue curve at the right
  col = blob(col, q, vec2(1.0, 1.25), 0.25, vec3(0.62, 0.64, 0.80), 0.5 * m, aspect, 1.0);
  return col;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  float W = uRes.x, H = uRes.y;
  float ypx = H - frag.y;

  // coverage: the glass above the edge, plus antialiased rounded bars below it
  float cover = ypx <= uHeroBottom ? 1.0 : 0.0;
  for (int i = 0; i < ${18}; i++) {
    vec4 b = uBars[i];
    if (b.z > 0.5) {
      vec2 c = b.xy + b.zw * 0.5;
      float r = 0.27 * b.w;
      vec2 qd = abs(vec2(frag.x, ypx) - c) - (b.zw * 0.5 - r);
      float sd = length(max(qd, 0.0)) + min(max(qd.x, qd.y), 0.0) - r;
      cover = max(cover, clamp(0.5 - sd, 0.0, 1.0));
    }
  }
  if (cover <= 0.0) { gl_FragColor = vec4(0.0); return; }

  // rib coordinate: straight ribs at rest, an X-shaped hyperbola during the intro
  vec2 c = vec2(frag.x - W * 0.5, ypx - H * 0.5);
  float d2 = c.x * c.x - uHyp * c.y * c.y;
  float wedge = d2 < 0.0 ? 1.0 : 0.0;
  float xr = W * 0.5 + sign(c.x) * sqrt(abs(d2));
  float u = fract(xr / uPitch + 0.5);
  float hl = exp(-pow(u - 0.5, 2.0) / (2.0 * 0.11 * 0.11));

  vec3 col = field(vec2(frag.x / W, (ypx + uShift) / H), uTime, uMix);
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col += hl * 0.042 * (1.0 - smoothstep(0.55, 0.95, l)) * (1.0 - wedge) * (1.0 + 1.5 * uFlash);
  col = 1.0 - (1.0 - col) * (1.0 - uFlash * vec3(0.83, 0.38, 0.25));
  col = mix(vec3(0.592, 0.192, 0.125), col, uReveal);
  col += (hash2(gl_FragCoord.xy + fract(uTime * 13.0) * 91.0) - 0.5) * 0.006;
  gl_FragColor = vec4(col * cover, cover);
}
`,Fl=class{constructor(t){this.canvas=t,this.state={mix:0,heroBottom:1,shift:0,pitch:1400,hyp:12,flash:0,reveal:0},this.bars=new Float32Array(72);let e=t.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!e){this.failed=!0,t.classList.add("is-fallback");return}this.gl=e;let n=e.createProgram(),i=(l,c)=>{let h=e.createShader(l);if(e.shaderSource(h,c),e.compileShader(h),!e.getShaderParameter(h,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(h));e.attachShader(n,h)};try{if(i(e.VERTEX_SHADER,Cv),i(e.FRAGMENT_SHADER,Rv),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n))}catch(l){console.warn("[hero] shader failed, using CSS fallback",l),this.failed=!0,t.classList.add("is-fallback");return}e.useProgram(n);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let o=e.getAttribLocation(n,"aPos");e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),e.clearColor(0,0,0,0);let a=l=>e.getUniformLocation(n,l);this.u={res:a("uRes"),dpr:a("uDpr"),time:a("uTime"),mix:a("uMix"),heroBottom:a("uHeroBottom"),shift:a("uShift"),pitch:a("uPitch"),hyp:a("uHyp"),flash:a("uFlash"),reveal:a("uReveal"),bars:a("uBars")},this.resize()}get restPitch(){return(this.w||window.innerWidth)/101}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=Math.max(.75,Math.min(window.devicePixelRatio||1,1.25,Math.sqrt(22e5/(t*e))));this.w=t,this.h=e,this.dpr=n,this.canvas.width=Math.round(t*n),this.canvas.height=Math.round(e*n),this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}setBars(t){for(let e=0;e<18;e++){let n=t[e],i=n&&n.w>0;this.bars[e*4]=i?n.x:0,this.bars[e*4+1]=i?n.y:0,this.bars[e*4+2]=i?n.w:0,this.bars[e*4+3]=i?n.h:0}}render(t){if(this.failed)return;let{gl:e,u:n,state:i}=this;e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.res,this.canvas.width/this.dpr,this.canvas.height/this.dpr),e.uniform1f(n.dpr,this.dpr),e.uniform1f(n.time,t),e.uniform1f(n.mix,i.mix),e.uniform1f(n.heroBottom,i.heroBottom*this.h),e.uniform1f(n.shift,i.shift),e.uniform1f(n.pitch,i.pitch),e.uniform1f(n.hyp,i.hyp),e.uniform1f(n.flash,i.flash),e.uniform1f(n.reveal,i.reveal),e.uniform4fv(n.bars,this.bars),e.drawArrays(e.TRIANGLES,0,3)}};var Pv=0,r0=1,Iv=2;var dg=1,Lv=2,nr=3,Ur=0,Hn=1,fi=2,Lr=0,xo=1,s0=2,o0=3,a0=4,Dv=5,_s=100,Uv=101,Nv=102,Ov=103,Fv=104,Bv=200,zv=201,kv=202,Vv=203,tf=204,ef=205,Hv=206,Gv=207,Wv=208,Xv=209,qv=210,Yv=211,Zv=212,$v=213,Jv=214,nf=0,rf=1,sf=2,So=3,of=4,af=5,lf=6,cf=7,pg=0,Kv=1,Qv=2,Dr=0,jv=1,ty=2,ey=3,ny=4,iy=5,ry=6,sy=7;var mg=300,bo=301,wo=302,hf=303,uf=304,qc=306,ff=1e3,ys=1001,df=1002,Dn=1003,oy=1004;var Bl=1005;var Oi=1006,Su=1007;var Ms=1008;var ar=1009,gg=1010,_g=1011,Ia=1012,Td=1013,Ss=1014,rr=1015,Va=1016,Ed=1017,Ad=1018,To=1020,xg=35902,vg=1021,yg=1022,Ti=1023,Mg=1024,Sg=1025,vo=1026,Eo=1027,Yc=1028,Cd=1029,bg=1030,Rd=1031;var Pd=1033,uc=33776,fc=33777,dc=33778,pc=33779,pf=35840,mf=35841,gf=35842,_f=35843,xf=36196,vf=37492,yf=37496,Mf=37808,Sf=37809,bf=37810,wf=37811,Tf=37812,Ef=37813,Af=37814,Cf=37815,Rf=37816,Pf=37817,If=37818,Lf=37819,Df=37820,Uf=37821,mc=36492,Nf=36494,Of=36495,wg=36283,Ff=36284,Bf=36285,zf=36286;var gc=2300,kf=2301,bu=2302,l0=2400,c0=2401,h0=2402;var ay=3200,ly=3201;var Tg=0,cy=1,Ir="",In="srgb",Lo="srgb-linear",Zc="linear",ve="srgb";var to=7680;var u0=519,hy=512,uy=513,fy=514,Eg=515,dy=516,py=517,my=518,gy=519,f0=35044;var d0="300 es",sr=2e3,_c=2001,Nr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],p0=1234567,Ta=Math.PI/180,La=180/Math.PI;function Rs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function cn(r,t,e){return Math.max(t,Math.min(e,r))}function Id(r,t){return(r%t+t)%t}function _y(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function xy(r,t,e){return r!==t?(e-r)/(t-r):0}function Ea(r,t,e){return(1-e)*r+e*t}function vy(r,t,e,n){return Ea(r,t,1-Math.exp(-e*n))}function yy(r,t=1){return t-Math.abs(Id(r,t*2)-t)}function My(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Sy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function by(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wy(r,t){return r+Math.random()*(t-r)}function Ty(r){return r*(.5-Math.random())}function Ey(r){r!==void 0&&(p0=r);let t=p0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ay(r){return r*Ta}function Cy(r){return r*La}function Ry(r){return(r&r-1)===0&&r!==0}function Py(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Iy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ly(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var $c={DEG2RAD:Ta,RAD2DEG:La,generateUUID:Rs,clamp:cn,euclideanModulo:Id,mapLinear:_y,inverseLerp:xy,lerp:Ea,damp:vy,pingpong:yy,smoothstep:My,smootherstep:Sy,randInt:by,randFloat:wy,randFloatSpread:Ty,seededRandom:Ey,degToRad:Ay,radToDeg:Cy,isPowerOfTwo:Ry,ceilPowerOfTwo:Py,floorPowerOfTwo:Iy,setQuaternionFromProperEuler:Ly,normalize:Rn,denormalize:mo},Pt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],v=i[4],x=i[7],C=i[2],T=i[5],w=i[8];return s[0]=o*_+a*M+l*C,s[3]=o*g+a*v+l*T,s[6]=o*m+a*x+l*w,s[1]=c*_+h*M+u*C,s[4]=c*g+h*v+u*T,s[7]=c*m+h*x+u*w,s[2]=f*_+d*M+p*C,s[5]=f*g+d*v+p*T,s[8]=f*m+d*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wu.makeScale(t,e)),this}rotate(t){return this.premultiply(wu.makeRotation(-t)),this}translate(t,e){return this.premultiply(wu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wu=new ne;function Ag(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dy(){let r=xc("canvas");return r.style.display="block",r}var m0={};function ba(r){r in m0||(m0[r]=!0,console.warn(r))}function Uy(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ny(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Oy(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=yo(r.r),r.g=yo(r.g),r.b=yo(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?Zc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var g0=[.64,.33,.3,.6,.15,.06],_0=[.2126,.7152,.0722],x0=[.3127,.329],v0=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[Lo]:{primaries:g0,whitePoint:x0,transfer:Zc,toXYZ:v0,fromXYZ:y0,luminanceCoefficients:_0,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:g0,whitePoint:x0,transfer:ve,toXYZ:v0,fromXYZ:y0,luminanceCoefficients:_0,outputColorSpaceConfig:{drawingBufferColorSpace:In}}});var eo,Vf=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{eo===void 0&&(eo=xc("canvas")),eo.width=t.width,eo.height=t.height;let n=eo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=eo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(or(e[n]/255)*255):e[n]=or(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fy=0,vc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tu(i[o].image)):s.push(Tu(i[o]))}else s=Tu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Tu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var By=0,Gn=class r extends Nr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ys,i=ys,s=Oi,o=Ms,a=Ti,l=ar,c=r.DEFAULT_ANISOTROPY,h=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Rs(),this.name="",this.source=new vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ff:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case df:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ff:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case df:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=mg;Gn.DEFAULT_ANISOTROPY=1;var Ve=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(d+1)/2,C=(m+1)/2,T=(h+f)/4,w=(u+_)/4,R=(p+g)/4;return v>x&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=w/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hf=class extends Nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},lr=class extends Hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yc=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gf=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*M);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let x=a*M;if(l=l*g+f*x,c=c*g+d*x,h=h*g+p*x,u=u*g+_*x,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(M0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(M0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eu.copy(this).projectOnVector(t),this.sub(Eu)}reflect(t){return this.sub(Eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eu=new W,M0=new Or,bs=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(t.matrixWorld),this.union(zl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(va),kl.subVectors(this.max,va),no.subVectors(t.a,va),io.subVectors(t.b,va),ro.subVectors(t.c,va),Tr.subVectors(io,no),Er.subVectors(ro,io),hs.subVectors(no,ro);let e=[0,-Tr.z,Tr.y,0,-Er.z,Er.y,0,-hs.z,hs.y,Tr.z,0,-Tr.x,Er.z,0,-Er.x,hs.z,0,-hs.x,-Tr.y,Tr.x,0,-Er.y,Er.x,0,-hs.y,hs.x,0];return!Au(e,no,io,ro,kl)||(e=[1,0,0,0,1,0,0,0,1],!Au(e,no,io,ro,kl))?!1:(Vl.crossVectors(Tr,Er),e=[Vl.x,Vl.y,Vl.z],Au(e,no,io,ro,kl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ki=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,zl=new bs,no=new W,io=new W,ro=new W,Tr=new W,Er=new W,hs=new W,va=new W,kl=new W,Vl=new W,us=new W;function Au(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zy=new bs,ya=new W,Cu=new W,Ao=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);let e=ya.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(Cu)),this.expandByPoint(ya.copy(t.center).sub(Cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new W,Ru=new W,Hl=new W,Ar=new W,Pu=new W,Gl=new W,Iu=new W,Mc=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ru.copy(t).add(e).multiplyScalar(.5),Hl.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(Ru);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Hl),a=Ar.dot(this.direction),l=-Ar.dot(Hl),c=Ar.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ru).addScaledVector(Hl,f),d}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,i,s){Pu.subVectors(e,t),Gl.subVectors(n,t),Iu.crossVectors(Pu,Gl);let o=this.direction.dot(Iu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,t);let l=a*this.direction.dot(Gl.crossVectors(Ar,Gl));if(l<0)return null;let c=a*this.direction.dot(Pu.cross(Ar));if(c<0||l+c>o)return null;let h=-a*Ar.dot(Iu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/so.setFromMatrixColumn(t,0).length(),s=1/so.setFromMatrixColumn(t,1).length(),o=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ky,t,Vy)}lookAt(t,e,n){let i=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Cr.crossVectors(n,jn),Cr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Cr.crossVectors(n,jn)),Cr.normalize(),Wl.crossVectors(jn,Cr),i[0]=Cr.x,i[4]=Wl.x,i[8]=jn.x,i[1]=Cr.y,i[5]=Wl.y,i[9]=jn.y,i[2]=Cr.z,i[6]=Wl.z,i[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],x=n[11],C=n[15],T=i[0],w=i[4],R=i[8],S=i[12],y=i[1],I=i[5],U=i[9],z=i[13],H=i[2],Z=i[6],G=i[10],K=i[14],X=i[3],ht=i[7],D=i[11],ct=i[15];return s[0]=o*T+a*y+l*H+c*X,s[4]=o*w+a*I+l*Z+c*ht,s[8]=o*R+a*U+l*G+c*D,s[12]=o*S+a*z+l*K+c*ct,s[1]=h*T+u*y+f*H+d*X,s[5]=h*w+u*I+f*Z+d*ht,s[9]=h*R+u*U+f*G+d*D,s[13]=h*S+u*z+f*K+d*ct,s[2]=p*T+_*y+g*H+m*X,s[6]=p*w+_*I+g*Z+m*ht,s[10]=p*R+_*U+g*G+m*D,s[14]=p*S+_*z+g*K+m*ct,s[3]=M*T+v*y+x*H+C*X,s[7]=M*w+v*I+x*Z+C*ht,s[11]=M*R+v*U+x*G+C*D,s[15]=M*S+v*z+x*K+C*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+g*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=u*g*c-_*f*c+_*l*d-a*g*d-u*l*m+a*f*m,v=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,x=h*_*c-p*u*c+p*a*d-o*_*d-h*a*m+o*u*m,C=p*u*l-h*_*l-p*a*f+o*_*f+h*a*g-o*u*g,T=e*M+n*v+i*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(_*f*s-u*g*s-_*i*d+n*g*d+u*i*m-n*f*m)*w,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*m+n*l*m)*w,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,t[4]=v*w,t[5]=(h*g*s-p*f*s+p*i*d-e*g*d-h*i*m+e*f*m)*w,t[6]=(p*l*s-o*g*s-p*i*c+e*g*c+o*i*m-e*l*m)*w,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*w,t[8]=x*w,t[9]=(p*u*s-h*_*s-p*n*d+e*_*d+h*n*m-e*u*m)*w,t[10]=(o*_*s-p*a*s+p*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=C*w,t[13]=(h*_*i-p*u*i+p*n*f-e*_*f-h*n*g+e*u*g)*w,t[14]=(p*a*i-o*_*i-p*n*l+e*_*l+o*n*g-e*a*g)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,_=o*h,g=o*u,m=a*u,M=l*c,v=l*h,x=l*u,C=n.x,T=n.y,w=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+x)*C,i[2]=(p-v)*C,i[3]=0,i[4]=(d-x)*T,i[5]=(1-(f+m))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(p+v)*w,i[9]=(g-M)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=so.set(i[0],i[1],i[2]).length(),o=so.set(i[4],i[5],i[6]).length(),a=so.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bi.copy(this);let c=1/s,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=sr){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===sr)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===_c)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=sr){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,p,_;if(a===sr)p=(o+s)*u,_=-2*u;else if(a===_c)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},so=new W,bi=new Oe,ky=new W(0,0,0),Vy=new W(1,1,1),Cr=new W,Wl=new W,jn=new W,S0=new Oe,b0=new Or,cr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return S0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return b0.setFromEuler(this),this.setFromQuaternion(b0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var Sc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hy=0,w0=new W,oo=new Or,ji=new Oe,Xl=new W,Ma=new W,Gy=new W,Wy=new Or,T0=new W(1,0,0),E0=new W(0,1,0),A0=new W(0,0,1),C0={type:"added"},Xy={type:"removed"},ao={type:"childadded",child:null},Lu={type:"childremoved",child:null},Un=class r extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new W,e=new cr,n=new Or,i=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new ne}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(T0,t)}rotateY(t){return this.rotateOnAxis(E0,t)}rotateZ(t){return this.rotateOnAxis(A0,t)}translateOnAxis(t,e){return w0.copy(t).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(T0,t)}translateY(t){return this.translateOnAxis(E0,t)}translateZ(t){return this.translateOnAxis(A0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xl.copy(t):Xl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ma,Xl,this.up):ji.lookAt(Xl,Ma,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(ji),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C0),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xy),Lu.child=t,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C0),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Un.DEFAULT_UP=new W(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new W,tr=new W,Du=new W,er=new W,lo=new W,co=new W,R0=new W,Uu=new W,Nu=new W,Ou=new W,Fu=new Ve,Bu=new Ve,zu=new Ve,xs=class r{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wi.subVectors(t,e),i.cross(wi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wi.subVectors(i,e),tr.subVectors(n,e),Du.subVectors(t,e);let o=wi.dot(wi),a=wi.dot(tr),l=wi.dot(Du),c=tr.dot(tr),h=tr.dot(Du),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Fu.setScalar(0),Bu.setScalar(0),zu.setScalar(0),Fu.fromBufferAttribute(t,e),Bu.fromBufferAttribute(t,n),zu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fu,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(zu,s.z),o}static isFrontFacing(t,e,n,i){return wi.subVectors(n,e),tr.subVectors(t,e),wi.cross(tr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),wi.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;lo.subVectors(i,n),co.subVectors(s,n),Uu.subVectors(t,n);let l=lo.dot(Uu),c=co.dot(Uu);if(l<=0&&c<=0)return e.copy(n);Nu.subVectors(t,i);let h=lo.dot(Nu),u=co.dot(Nu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(lo,o);Ou.subVectors(t,s);let d=lo.dot(Ou),p=co.dot(Ou);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(co,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return R0.subVectors(s,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(R0,a);let m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function ku(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Id(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ku(o,s,t+1/3),this.g=ku(o,s,t),this.b=ku(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=In){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){let n=Cg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return he.fromWorkingColorSpace(vn.copy(this),t),Math.round(cn(vn.r*255,0,255))*65536+Math.round(cn(vn.g*255,0,255))*256+Math.round(cn(vn.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(vn.copy(this),e);let n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=In){he.fromWorkingColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,i=vn.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rr),this.setHSL(Rr.h+t,Rr.s+e,Rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rr),t.getHSL(ql);let n=Ea(Rr.h,ql.h,e),i=Ea(Rr.s,ql.s,e),s=Ea(Rr.l,ql.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new jt;jt.NAMES=Cg;var qy=0,Fr=class extends Nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Rs(),this.name="",this.blending=xo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=ef,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tf&&(n.blendSrc=this.blendSrc),this.blendDst!==ef&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Co=class extends Fr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ye=new W,Yl=new Pt,di=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=f0,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yl.fromBufferAttribute(this,e),Yl.applyMatrix3(t),this.setXY(e,Yl.x,Yl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f0&&(t.usage=this.usage),t}};var bc=class extends di{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wc=class extends di{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Re=class extends di{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yy=0,ui=new Oe,Vu=new Un,ho=new W,ti=new bs,Sa=new bs,rn=new W,Nn=class r extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ag(t)?wc:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return Vu.lookAt(t),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(ti.min,Sa.min),ti.expandByPoint(rn),rn.addVectors(ti.max,Sa.max),ti.expandByPoint(rn)):(ti.expandByPoint(Sa.min),ti.expandByPoint(Sa.max))}ti.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)rn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(t,c),rn.add(ho)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new W,l[R]=new W;let c=new W,h=new W,u=new W,f=new Pt,d=new Pt,p=new Pt,_=new W,g=new W;function m(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(g),l[S].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){let y=M[R],I=y.start,U=y.count;for(let z=I,H=I+U;z<H;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new W,x=new W,C=new W,T=new W;function w(R){C.fromBufferAttribute(i,R),T.copy(C);let S=a[R];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(T,S);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,S=M.length;R<S;++R){let y=M[R],I=y.start,U=y.count;for(let z=I,H=I+U;z<H;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new di(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},P0=new Oe,fs=new Mc,Zl=new Ao,I0=new W,$l=new W,Jl=new W,Kl=new W,Hu=new W,Ql=new W,L0=new W,jl=new W,de=class extends Un{constructor(t=new Nn,e=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Hu.fromBufferAttribute(u,t),o?Ql.addScaledVector(Hu,h):Ql.addScaledVector(Hu.sub(e),h))}e.add(Ql)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(s),fs.copy(t.ray).recast(t.near),!(Zl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Zl,I0)===null||fs.origin.distanceToSquared(I0)>(t.far-t.near)**2))&&(P0.copy(s).invert(),fs.copy(t.ray).applyMatrix4(P0),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,C=v;x<C;x+=3){let T=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);i=tc(this,m,t,n,c,h,u,T,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=tc(this,o,t,n,c,h,u,M,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,C=v;x<C;x+=3){let T=x,w=x+1,R=x+2;i=tc(this,m,t,n,c,h,u,T,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let M=g,v=g+1,x=g+2;i=tc(this,o,t,n,c,h,u,M,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Zy(r,t,e,n,i,s,o,a){let l;if(t.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ur,a),l===null)return null;jl.copy(a),jl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(jl);return c<e.near||c>e.far?null:{distance:c,point:jl.clone(),object:r}}function tc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,$l),r.getVertexPosition(l,Jl),r.getVertexPosition(c,Kl);let h=Zy(r,t,e,n,$l,Jl,Kl,L0);if(h){let u=new W;xs.getBarycoord(L0,$l,Jl,Kl,u),i&&(h.uv=xs.getInterpolatedAttribute(i,a,l,c,u,new Pt)),s&&(h.uv1=xs.getInterpolatedAttribute(s,a,l,c,u,new Pt)),o&&(h.normal=xs.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new W,materialIndex:0};xs.getNormal($l,Jl,Kl,f.normal),h.face=f,h.barycoord=u}return h}var ws=class r extends Nn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function p(_,g,m,M,v,x,C,T,w,R,S){let y=x/w,I=C/R,U=x/2,z=C/2,H=T/2,Z=w+1,G=R+1,K=0,X=0,ht=new W;for(let D=0;D<G;D++){let ct=D*I-z;for(let ft=0;ft<Z;ft++){let Dt=ft*y-U;ht[_]=Dt*M,ht[g]=ct*v,ht[m]=H,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[g]=0,ht[m]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(ft/w),u.push(1-D/R),K+=1}}for(let D=0;D<R;D++)for(let ct=0;ct<w;ct++){let ft=f+ct+Z*D,Dt=f+ct+Z*(D+1),L=f+(ct+1)+Z*(D+1),V=f+(ct+1)+Z*D;l.push(ft,Dt,V),l.push(Dt,L,V),X+=6}a.addGroup(d,X,S),d+=X,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ro(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pn(r){let t={};for(let e=0;e<r.length;e++){let n=Ro(r[e]);for(let i in n)t[i]=n[i]}return t}function $y(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rg(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Jy={clone:Ro,merge:Pn},Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends Fr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=$y(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Tc=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=sr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pr=new W,D0=new Pt,U0=new Pt,Ln=class extends Tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z)}getViewSize(t,e){return this.getViewBounds(t,D0,U0),e.subVectors(U0,D0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uo=-90,fo=1,Wf=class extends Un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ln(uo,fo,t,e);i.layers=this.layers,this.add(i);let s=new Ln(uo,fo,t,e);s.layers=this.layers,this.add(s);let o=new Ln(uo,fo,t,e);o.layers=this.layers,this.add(o);let a=new Ln(uo,fo,t,e);a.layers=this.layers,this.add(a);let l=new Ln(uo,fo,t,e);l.layers=this.layers,this.add(l);let c=new Ln(uo,fo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_c)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ec=class extends Gn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bo,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xf=class extends lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ws(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Lr});s.uniforms.tEquirect.value=e;let o=new de(i,s),a=e.minFilter;return e.minFilter===Ms&&(e.minFilter=Oi),new Wf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Gu=new W,jy=new W,t1=new ne,ir=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gu.subVectors(n,e).cross(jy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Gu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t1.getNormalMatrix(t),i=this.coplanarPoint(Gu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Ao,ec=new W,Da=class{constructor(t=new ir,e=new ir,n=new ir,i=new ir,s=new ir,o=new ir){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sr){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],M=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,g-d,x-m).normalize(),n[1].setComponents(l+s,f+c,g+d,x+m).normalize(),n[2].setComponents(l+o,f+h,g+p,x+M).normalize(),n[3].setComponents(l-o,f-h,g-p,x-M).normalize(),n[4].setComponents(l-a,f-u,g-_,x-v).normalize(),e===sr)n[5].setComponents(l+a,f+u,g+_,x+v).normalize();else if(e===_c)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ec.x=i.normal.x>0?t.max.x:t.min.x,ec.y=i.normal.y>0?t.max.y:t.min.y,ec.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pg(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function e1(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Br=class r extends Nn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let v=0;v<c;v++){let x=v*u-s;p.push(x,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let v=M+c*m,x=M+c*(m+1),C=M+1+c*(m+1),T=M+1+c*m;d.push(v,x,T),d.push(x,C,T)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},n1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i1=`#ifdef USE_ALPHAHASH
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
#endif`,r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l1=`#ifdef USE_AOMAP
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
#endif`,c1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
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
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m1=`#ifdef USE_IRIDESCENCE
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
#endif`,g1=`#ifdef USE_BUMPMAP
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
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T1=`#define PI 3.141592653589793
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
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A1=`vec3 transformedNormal = objectNormal;
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
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
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
}`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
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
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,tM=`struct PhysicalMaterial {
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
}`,eM=`
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
#endif`,nM=`#if defined( RE_IndirectDiffuse )
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
#endif`,iM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,fM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
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
#endif`,TM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WM=`#ifdef USE_SKINNING
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
#endif`,XM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$M=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#define LAMBERT
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
}`,xS=`#define LAMBERT
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
}`,vS=`#define MATCAP
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
}`,yS=`#define MATCAP
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
}`,MS=`#define NORMAL
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
}`,SS=`#define NORMAL
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
}`,bS=`#define PHONG
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
}`,wS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,ES=`#define STANDARD
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
}`,AS=`#define TOON
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
}`,CS=`#define TOON
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
}`,RS=`uniform float size;
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
}`,PS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,LS=`uniform vec3 color;
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
}`,DS=`uniform float rotation;
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
}`,US=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:n1,alphahash_pars_fragment:i1,alphamap_fragment:r1,alphamap_pars_fragment:s1,alphatest_fragment:o1,alphatest_pars_fragment:a1,aomap_fragment:l1,aomap_pars_fragment:c1,batching_pars_vertex:h1,batching_vertex:u1,begin_vertex:f1,beginnormal_vertex:d1,bsdfs:p1,iridescence_fragment:m1,bumpmap_pars_fragment:g1,clipping_planes_fragment:_1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:v1,clipping_planes_vertex:y1,color_fragment:M1,color_pars_fragment:S1,color_pars_vertex:b1,color_vertex:w1,common:T1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:A1,displacementmap_pars_vertex:C1,displacementmap_vertex:R1,emissivemap_fragment:P1,emissivemap_pars_fragment:I1,colorspace_fragment:L1,colorspace_pars_fragment:D1,envmap_fragment:U1,envmap_common_pars_fragment:N1,envmap_pars_fragment:O1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:Z1,envmap_vertex:B1,fog_vertex:z1,fog_pars_vertex:k1,fog_fragment:V1,fog_pars_fragment:H1,gradientmap_pars_fragment:G1,lightmap_pars_fragment:W1,lights_lambert_fragment:X1,lights_lambert_pars_fragment:q1,lights_pars_begin:Y1,lights_toon_fragment:$1,lights_toon_pars_fragment:J1,lights_phong_fragment:K1,lights_phong_pars_fragment:Q1,lights_physical_fragment:j1,lights_physical_pars_fragment:tM,lights_fragment_begin:eM,lights_fragment_maps:nM,lights_fragment_end:iM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:oM,logdepthbuf_vertex:aM,map_fragment:lM,map_pars_fragment:cM,map_particle_fragment:hM,map_particle_pars_fragment:uM,metalnessmap_fragment:fM,metalnessmap_pars_fragment:dM,morphinstance_vertex:pM,morphcolor_vertex:mM,morphnormal_vertex:gM,morphtarget_pars_vertex:_M,morphtarget_vertex:xM,normal_fragment_begin:vM,normal_fragment_maps:yM,normal_pars_fragment:MM,normal_pars_vertex:SM,normal_vertex:bM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:AM,iridescence_pars_fragment:CM,opaque_fragment:RM,packing:PM,premultiplied_alpha_fragment:IM,project_vertex:LM,dithering_fragment:DM,dithering_pars_fragment:UM,roughnessmap_fragment:NM,roughnessmap_pars_fragment:OM,shadowmap_pars_fragment:FM,shadowmap_pars_vertex:BM,shadowmap_vertex:zM,shadowmask_pars_fragment:kM,skinbase_vertex:VM,skinning_pars_vertex:HM,skinning_vertex:GM,skinnormal_vertex:WM,specularmap_fragment:XM,specularmap_pars_fragment:qM,tonemapping_fragment:YM,tonemapping_pars_fragment:ZM,transmission_fragment:$M,transmission_pars_fragment:JM,uv_pars_fragment:KM,uv_pars_vertex:QM,uv_vertex:jM,worldpos_vertex:tS,background_vert:eS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:hS,equirect_vert:uS,equirect_frag:fS,linedashed_vert:dS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:_S,meshlambert_frag:xS,meshmatcap_vert:vS,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:SS,meshphong_vert:bS,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:ES,meshtoon_vert:AS,meshtoon_frag:CS,points_vert:RS,points_frag:PS,shadow_vert:IS,shadow_frag:LS,sprite_vert:DS,sprite_frag:US},Ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Pn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Pn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Pn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Pn([Ct.points,Ct.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Pn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Pn([Ct.common,Ct.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Pn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Pn([Ct.sprite,Ct.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:Pn([Ct.common,Ct.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:Pn([Ct.lights,Ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var nc={r:0,b:0,g:0},ps=new cr,NS=new Oe;function OS(r,t,e,n,i,s,o){let a=new jt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1,x=p(M);x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(M,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===qc)?(h===void 0&&(h=new de(new ws(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ro(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(ps)),h.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Br(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ro(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(nc,Rg(r)),n.buffers.color.setClear(nc.r,nc.g,nc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:g}}function FS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(y,I,U,z,H){let Z=!1,G=u(z,U,I);s!==G&&(s=G,c(s.object)),Z=d(y,z,U,H),Z&&p(y,z,U,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(y,I,U,z),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,I,U){let z=U.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[I.id];Z===void 0&&(Z={},H[I.id]=Z);let G=Z[z];return G===void 0&&(G=f(l()),Z[z]=G),G}function f(y){let I=[],U=[],z=[];for(let H=0;H<e;H++)I[H]=0,U[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,I,U,z){let H=s.attributes,Z=I.attributes,G=0,K=U.getAttributes();for(let X in K)if(K[X].location>=0){let D=H[X],ct=Z[X];if(ct===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),D===void 0||D.attribute!==ct||ct&&D.data!==ct.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function p(y,I,U,z){let H={},Z=I.attributes,G=0,K=U.getAttributes();for(let X in K)if(K[X].location>=0){let D=Z[X];D===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));let ct={};ct.attribute=D,D&&D.data&&(ct.data=D.data),H[X]=ct,G++}s.attributes=H,s.attributesNum=G,s.index=z}function _(){let y=s.newAttributes;for(let I=0,U=y.length;I<U;I++)y[I]=0}function g(y){m(y,0)}function m(y,I){let U=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;U[y]=1,z[y]===0&&(r.enableVertexAttribArray(y),z[y]=1),H[y]!==I&&(r.vertexAttribDivisor(y,I),H[y]=I)}function M(){let y=s.newAttributes,I=s.enabledAttributes;for(let U=0,z=I.length;U<z;U++)I[U]!==y[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function v(y,I,U,z,H,Z,G){G===!0?r.vertexAttribIPointer(y,I,U,H,Z):r.vertexAttribPointer(y,I,U,z,H,Z)}function x(y,I,U,z){_();let H=z.attributes,Z=U.getAttributes(),G=I.defaultAttributeValues;for(let K in Z){let X=Z[K];if(X.location>=0){let ht=H[K];if(ht===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let D=ht.normalized,ct=ht.itemSize,ft=t.get(ht);if(ft===void 0)continue;let Dt=ft.buffer,L=ft.type,V=ft.bytesPerElement,F=L===r.INT||L===r.UNSIGNED_INT||ht.gpuType===Td;if(ht.isInterleavedBufferAttribute){let O=ht.data,it=O.stride,rt=ht.offset;if(O.isInstancedInterleavedBuffer){for(let j=0;j<X.locationSize;j++)m(X.location+j,O.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let j=0;j<X.locationSize;j++)v(X.location+j,ct/X.locationSize,L,D,it*V,(rt+ct/X.locationSize*j)*V,F)}else{if(ht.isInstancedBufferAttribute){for(let O=0;O<X.locationSize;O++)m(X.location+O,ht.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let O=0;O<X.locationSize;O++)g(X.location+O);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let O=0;O<X.locationSize;O++)v(X.location+O,ct/X.locationSize,L,D,ct*V,ct/X.locationSize*O*V,F)}}else if(G!==void 0){let D=G[K];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(X.location,D);break;case 3:r.vertexAttrib3fv(X.location,D);break;case 4:r.vertexAttrib4fv(X.location,D);break;default:r.vertexAttrib1fv(X.location,D)}}}}M()}function C(){R();for(let y in n){let I=n[y];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}delete n[y.id]}function w(y){for(let I in n){let U=n[I];if(U[y.id]===void 0)continue;let z=U[y.id];for(let H in z)h(z[H].object),delete z[H];delete U[y.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function BS(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ti&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===Va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ar&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rr&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function kS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ir,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{let M=s?0:n,v=M*4,x=m.clippingState||null;l.value=x,x=h(p,f,v,d);for(let C=0;C!==v;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function VS(r){let t=new WeakMap;function e(o,a){return a===hf?o.mapping=bo:a===uf&&(o.mapping=wo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hf||a===uf)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ac=class extends Tc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},go=4,N0=[.125,.215,.35,.446,.526,.582],vs=20,Wu=new Ac,O0=new jt,Xu=null,qu=0,Yu=0,Zu=!1,gs=(1+Math.sqrt(5))/2,po=1/gs,F0=[new W(-gs,po,0),new W(gs,po,0),new W(-po,0,gs),new W(po,0,gs),new W(0,gs,-po),new W(0,gs,po),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,t.scissorTest=!1,ic(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bo||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Va,format:Ti,colorSpace:Lo,depthBuffer:!1},i=B0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(s)),this._blurMaterial=GS(s,t,e)}return i}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Wu)}_sceneToCubeUV(t,e,n,i){let a=new Ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(O0),h.toneMapping=Dr,h.autoClear=!1;let d=new Co({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),p=new de(new ws,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(O0),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;ic(i,M*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===bo||t.mapping===wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ic(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=F0[(i-s-1)%F0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vs-1),_=s/p,g=isFinite(s)?1+Math.floor(h*_):vs;g>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vs}`);let m=[],M=0;for(let w=0;w<vs;++w){let R=w/_,S=Math.exp(-R*R/2);m.push(S),w===0?M+=S:w<g&&(M+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let x=this._sizeLods[i],C=3*x*(i>v-go?i-v+go:0),T=4*(this._cubeSize-x);ic(e,C,T,3*x,2*x),l.setRenderTarget(e),l.render(u,Wu)}};function HS(r){let t=[],e=[],n=[],i=r,s=r-go+1+N0.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-go?l=N0[o-r+go-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,M=new Float32Array(_*p*d),v=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,R=T>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*p*T),v.set(f,g*p*T);let y=[T,T,T,T,T,T];x.set(y,m*p*T)}let C=new Nn;C.setAttribute("position",new di(M,_)),C.setAttribute("uv",new di(v,g)),C.setAttribute("faceIndex",new di(x,m)),t.push(C),i>go&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function B0(r,t,e){let n=new lr(r,t,e);return n.texture.mapping=qc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ic(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function GS(r,t,e){let n=new Float32Array(vs),i=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function z0(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function k0(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function WS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hf||l===uf,h=l===bo||l===wo;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Cc(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function XS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ba("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qS(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let v=0,x=M.length;v<x;v+=3){let C=M[v+0],T=M[v+1],w=M[v+2];f.push(C,T,T,w,w,C)}}else if(p!==void 0){let M=p.array;_=p.version;for(let v=0,x=M.length/3-1;v<x;v+=3){let C=v+0,T=v+1,w=v+2;f.push(C,T,T,w,w,C)}}else return;let g=new(Ag(f)?wc:bc)(f,1);g.version=_;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function YS(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*_[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ZS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $S(r,t,e){let n=new WeakMap,i=new Ve;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*C*4*u),w=new yc(T,x,C,u);w.type=rr,w.needsUpdate=!0;let R=v*4;for(let y=0;y<u;y++){let I=g[y],U=m[y],z=M[y],H=x*C*4*y;for(let Z=0;Z<I.count;Z++){let G=Z*R;d===!0&&(i.fromBufferAttribute(I,Z),T[H+G+0]=i.x,T[H+G+1]=i.y,T[H+G+2]=i.z,T[H+G+3]=0),p===!0&&(i.fromBufferAttribute(U,Z),T[H+G+4]=i.x,T[H+G+5]=i.y,T[H+G+6]=i.z,T[H+G+7]=0),_===!0&&(i.fromBufferAttribute(z,Z),T[H+G+8]=i.x,T[H+G+9]=i.y,T[H+G+10]=i.z,T[H+G+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Pt(x,C)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function JS(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Rc=class extends Gn{constructor(t,e,n,i,s,o,a,l,c,h=vo){if(h!==vo&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vo&&(n=Ss),n===void 0&&h===Eo&&(n=To),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ig=new Gn,V0=new Rc(1,1),Lg=new yc,Dg=new Gf,Ug=new Ec,H0=[],G0=[],W0=new Float32Array(16),X0=new Float32Array(9),q0=new Float32Array(4);function Do(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=H0[i];if(s===void 0&&(s=new Float32Array(i),H0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ke(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Jc(r,t){let e=G0[t];e===void 0&&(e=new Int32Array(t),G0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function KS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function QS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2fv(this.addr,t),Qe(e,t)}}function jS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;r.uniform3fv(this.addr,t),Qe(e,t)}}function tb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4fv(this.addr,t),Qe(e,t)}}function eb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;q0.set(n),r.uniformMatrix2fv(this.addr,!1,q0),Qe(e,n)}}function nb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;X0.set(n),r.uniformMatrix3fv(this.addr,!1,X0),Qe(e,n)}}function ib(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;W0.set(n),r.uniformMatrix4fv(this.addr,!1,W0),Qe(e,n)}}function rb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2iv(this.addr,t),Qe(e,t)}}function ob(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3iv(this.addr,t),Qe(e,t)}}function ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4iv(this.addr,t),Qe(e,t)}}function lb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function cb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2uiv(this.addr,t),Qe(e,t)}}function hb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3uiv(this.addr,t),Qe(e,t)}}function ub(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4uiv(this.addr,t),Qe(e,t)}}function fb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(V0.compareFunction=Eg,s=V0):s=Ig,e.setTexture2D(t||s,i)}function db(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dg,i)}function pb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ug,i)}function mb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lg,i)}function gb(r){switch(r){case 5126:return KS;case 35664:return QS;case 35665:return jS;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return cb;case 36295:return hb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(r,t){r.uniform1fv(this.addr,t)}function xb(r,t){let e=Do(t,this.size,2);r.uniform2fv(this.addr,e)}function vb(r,t){let e=Do(t,this.size,3);r.uniform3fv(this.addr,e)}function yb(r,t){let e=Do(t,this.size,4);r.uniform4fv(this.addr,e)}function Mb(r,t){let e=Do(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sb(r,t){let e=Do(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function bb(r,t){let e=Do(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function wb(r,t){r.uniform1iv(this.addr,t)}function Tb(r,t){r.uniform2iv(this.addr,t)}function Eb(r,t){r.uniform3iv(this.addr,t)}function Ab(r,t){r.uniform4iv(this.addr,t)}function Cb(r,t){r.uniform1uiv(this.addr,t)}function Rb(r,t){r.uniform2uiv(this.addr,t)}function Pb(r,t){r.uniform3uiv(this.addr,t)}function Ib(r,t){r.uniform4uiv(this.addr,t)}function Lb(r,t,e){let n=this.cache,i=t.length,s=Jc(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ig,s[o])}function Db(r,t,e){let n=this.cache,i=t.length,s=Jc(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Dg,s[o])}function Ub(r,t,e){let n=this.cache,i=t.length,s=Jc(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ug,s[o])}function Nb(r,t,e){let n=this.cache,i=t.length,s=Jc(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lg,s[o])}function Ob(r){switch(r){case 5126:return _b;case 35664:return xb;case 35665:return vb;case 35666:return yb;case 35674:return Mb;case 35675:return Sb;case 35676:return bb;case 5124:case 35670:return wb;case 35667:case 35671:return Tb;case 35668:case 35672:return Eb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Nb}}var qf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gb(e.type)}},Yf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ob(e.type)}},Zf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Y0(r,t){r.seq.push(t),r.map[t.id]=t}function Fb(r,t,e){let n=r.name,i=n.length;for($u.lastIndex=0;;){let s=$u.exec(n),o=$u.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Y0(e,c===void 0?new qf(a,r,t):new Yf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Zf(a),Y0(e,u)),e=u}}}var Mo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Fb(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Z0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Bb=37297,zb=0;function kb(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $0=new ne;function Vb(r){he._getMatrix($0,he.workingColorSpace,r);let t=`mat3( ${$0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function J0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+kb(r.getShaderSource(t),o)}else return i}function Hb(r,t){let e=Vb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gb(r,t){let e;switch(t){case jv:e="Linear";break;case ty:e="Reinhard";break;case ey:e="Cineon";break;case ny:e="ACESFilmic";break;case ry:e="AgX";break;case sy:e="Neutral";break;case iy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new W;function Wb(){he.getLuminanceCoefficients(rc);let r=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function qb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wa(r){return r!==""}function K0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Q0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(r){return r.replace(Zb,Jb)}var $b=new Map;function Jb(r,t){let e=ie[t];if(e===void 0){let n=$b.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $f(e)}var Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j0(r){return r.replace(Kb,Qb)}function Qb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tg(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function jb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dg?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(t="SHADOWMAP_TYPE_VSM"),t}function tw(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bo:case wo:t="ENVMAP_TYPE_CUBE";break;case qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ew(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wo:t="ENVMAP_MODE_REFRACTION";break}return t}function nw(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pg:t="ENVMAP_BLENDING_MULTIPLY";break;case Kv:t="ENVMAP_BLENDING_MIX";break;case Qv:t="ENVMAP_BLENDING_ADD";break}return t}function iw(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rw(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jb(e),c=tw(e),h=ew(e),u=nw(e),f=iw(e),d=Xb(e),p=qb(s),_=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wa).join(`
`),m.length>0&&(m+=`
`)):(g=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),m=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dr?"#define TONE_MAPPING":"",e.toneMapping!==Dr?ie.tonemapping_pars_fragment:"",e.toneMapping!==Dr?Gb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Hb("linearToOutputTexel",e.outputColorSpace),Wb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wa).join(`
`)),o=$f(o),o=K0(o,e),o=Q0(o,e),a=$f(a),a=K0(a,e),a=Q0(a,e),o=j0(o),a=j0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===d0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===d0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=M+g+o,x=M+m+a,C=Z0(i,i.VERTEX_SHADER,v),T=Z0(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(T).trim(),Z=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{let K=J0(i,C,"vertex"),X=J0(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+K+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||H==="")&&(G=!1);G&&(I.diagnostics={runnable:Z,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:m}})}i.deleteShader(C),i.deleteShader(T),R=new Mo(i,_),S=Yb(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Bb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}var sw=0,Jf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kf(t),e.set(t,n)),n}},Kf=class{constructor(t){this.id=sw++,this.code=t,this.usedTimes=0}};function ow(r,t,e,n,i,s,o){let a=new Sc,l=new Jf,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,I,U,z){let H=U.fog,Z=z.geometry,G=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),X=K&&K.mapping===qc?K.image.height:null,ht=p[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let D=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=D!==void 0?D.length:0,ft=0;Z.morphAttributes.position!==void 0&&(ft=1),Z.morphAttributes.normal!==void 0&&(ft=2),Z.morphAttributes.color!==void 0&&(ft=3);let Dt,L,V,F;if(ht){let Rt=Ni[ht];Dt=Rt.vertexShader,L=Rt.fragmentShader}else Dt=S.vertexShader,L=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);let O=r.getRenderTarget(),it=r.state.buffers.depth.getReversed(),rt=z.isInstancedMesh===!0,j=z.isBatchedMesh===!0,xt=!!S.map,tt=!!S.matcap,Q=!!K,P=!!S.aoMap,dt=!!S.lightMap,at=!!S.bumpMap,B=!!S.normalMap,ut=!!S.displacementMap,Nt=!!S.emissiveMap,bt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,Y=S.clearcoat>0,nt=S.dispersion>0,ot=S.iridescence>0,st=S.sheen>0,vt=S.transmission>0,gt=b&&!!S.anisotropyMap,Mt=Y&&!!S.clearcoatMap,Ht=Y&&!!S.clearcoatNormalMap,pt=Y&&!!S.clearcoatRoughnessMap,yt=ot&&!!S.iridescenceMap,Gt=ot&&!!S.iridescenceThicknessMap,Vt=st&&!!S.sheenColorMap,It=st&&!!S.sheenRoughnessMap,te=!!S.specularMap,Xt=!!S.specularColorMap,ce=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,wt=vt&&!!S.thicknessMap,et=!!S.gradientMap,lt=!!S.alphaMap,St=S.alphaTest>0,Tt=!!S.alphaHash,qt=!!S.extensions,ue=Dr;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ue=r.toneMapping);let Fe={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Dt,fragmentShader:L,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:j,batchingColor:j&&z._colorsTexture!==null,instancing:rt,instancingColor:rt&&z.instanceColor!==null,instancingMorph:rt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?r.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Lo,alphaToCoverage:!!S.alphaToCoverage,map:xt,matcap:tt,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:dt,bumpMap:at,normalMap:B,displacementMap:f&&ut,emissiveMap:Nt,normalMapObjectSpace:B&&S.normalMapType===cy,normalMapTangentSpace:B&&S.normalMapType===Tg,metalnessMap:bt,roughnessMap:A,anisotropy:b,anisotropyMap:gt,clearcoat:Y,clearcoatMap:Mt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:pt,dispersion:nt,iridescence:ot,iridescenceMap:yt,iridescenceThicknessMap:Gt,sheen:st,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:te,specularColorMap:Xt,specularIntensityMap:ce,transmission:vt,transmissionMap:N,thicknessMap:wt,gradientMap:et,opaque:S.transparent===!1&&S.blending===xo&&S.alphaToCoverage===!1,alphaMap:lt,alphaTest:St,alphaHash:Tt,combine:S.combine,mapUv:xt&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:dt&&_(S.lightMap.channel),bumpMapUv:at&&_(S.bumpMap.channel),normalMapUv:B&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:gt&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:te&&_(S.specularMap.channel),specularColorMapUv:Xt&&_(S.specularColorMap.channel),specularIntensityMapUv:ce&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:wt&&_(S.thicknessMap.channel),alphaMapUv:lt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(B||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(xt||lt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:xt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function m(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=p[S.type],I;if(y){let U=Ni[y];I=Jy.clone(U.uniforms)}else I=S.uniforms;return I}function C(S,y){let I;for(let U=0,z=h.length;U<z;U++){let H=h[U];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new rw(r,y,S,s),h.push(I)),I}function T(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:R}}function aw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function lw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function eg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ng(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||lw),n.length>1&&n.sort(f||eg),i.length>1&&i.sort(f||eg)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function cw(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new ng,r.set(n,[o])):i>=s.length?(o=new ng,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function hw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new jt};break;case"SpotLight":e={position:new W,direction:new W,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=e,e}}}function uw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var fw=0;function dw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function pw(r){let t=new hw,e=uw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let i=new W,s=new Oe,o=new Oe;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,M=0,v=0,x=0,C=0,T=0,w=0;c.sort(dw);for(let S=0,y=c.length;S<y;S++){let I=c[S],U=I.color,z=I.intensity,H=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*z,u+=U.g*z,f+=U.b*z;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],z);w++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,X=e.get(I);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=G,d++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;let K=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,K.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,x++}_++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=G,g++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let K=I.shadow,X=e.get(I);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=I.shadow.matrix,v++}n.point[p]=G,p++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(z),G.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=G,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=w,n.version=fw++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let v=c[m];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(v.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function ig(r){let t=new pw(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mw(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new ig(r),t.set(i,[a])):s>=o.length?(a=new ig(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qf=class extends Fr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jf=class extends Fr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
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
}`;function xw(r,t,e){let n=new Da,i=new Pt,s=new Pt,o=new Ve,a=new Qf({depthPacking:ly}),l=new jf,c={},h=e.maxTextureSize,u={[Ur]:Hn,[Hn]:Ur,[fi]:fi},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:gw,fragmentShader:_w}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Nn;p.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let m=this.type;this.render=function(T,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Lr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=m!==nr&&this.type===nr,H=m===nr&&this.type!==nr;for(let Z=0,G=T.length;Z<G;Z++){let K=T[Z],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let ht=X.getFrameExtents();if(i.multiply(ht),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ht.x),i.x=s.x*ht.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ht.y),i.y=s.y*ht.y,X.mapSize.y=s.y)),X.map===null||z===!0||H===!0){let ct=this.type!==nr?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new lr(i.x,i.y,ct),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let D=X.getViewportCount();for(let ct=0;ct<D;ct++){let ft=X.getViewport(ct);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),U.viewport(o),X.updateMatrices(K,ct),n=X.getFrustum(),x(w,R,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===nr&&M(X,R),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(S,y,I)};function M(T,w){let R=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new lr(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,R,d,_,null)}function v(T,w,R,S){let y=null,I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=y.uuid,z=w.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let Z=H[z];Z===void 0&&(Z=y.clone(),H[z]=Z,w.addEventListener("dispose",C)),y=Z}if(y.visible=w.visible,y.wireframe=w.wireframe,S===nr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=r.properties.get(y);U.light=R}return y}function x(T,w,R,S,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===nr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let z=t.update(T),H=T.material;if(Array.isArray(H)){let Z=z.groups;for(let G=0,K=Z.length;G<K;G++){let X=Z[G],ht=H[X.materialIndex];if(ht&&ht.visible){let D=v(T,ht,S,y);T.onBeforeShadow(r,T,w,R,z,D,X),r.renderBufferDirect(R,null,z,D,T,X),T.onAfterShadow(r,T,w,R,z,D,X)}}}else if(H.visible){let Z=v(T,H,S,y);T.onBeforeShadow(r,T,w,R,z,Z,null),r.renderBufferDirect(R,null,z,Z,T,null),T.onAfterShadow(r,T,w,R,z,Z,null)}}let U=T.children;for(let z=0,H=U.length;z<H;z++)x(U[z],w,R,S,y)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let S=c[R],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var vw={[nf]:rf,[sf]:lf,[of]:cf,[So]:af,[rf]:nf,[lf]:sf,[cf]:of,[af]:So};function yw(r,t){function e(){let N=!1,wt=new Ve,et=null,lt=new Ve(0,0,0,0);return{setMask:function(St){et!==St&&!N&&(r.colorMask(St,St,St,St),et=St)},setLocked:function(St){N=St},setClear:function(St,Tt,qt,ue,Fe){Fe===!0&&(St*=ue,Tt*=ue,qt*=ue),wt.set(St,Tt,qt,ue),lt.equals(wt)===!1&&(r.clearColor(St,Tt,qt,ue),lt.copy(wt))},reset:function(){N=!1,et=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,wt=!1,et=null,lt=null,St=null;return{setReversed:function(Tt){if(wt!==Tt){let qt=t.get("EXT_clip_control");wt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let ue=St;St=null,this.setClear(ue)}wt=Tt},getReversed:function(){return wt},setTest:function(Tt){Tt?O(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(Tt){et!==Tt&&!N&&(r.depthMask(Tt),et=Tt)},setFunc:function(Tt){if(wt&&(Tt=vw[Tt]),lt!==Tt){switch(Tt){case nf:r.depthFunc(r.NEVER);break;case rf:r.depthFunc(r.ALWAYS);break;case sf:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case of:r.depthFunc(r.EQUAL);break;case af:r.depthFunc(r.GEQUAL);break;case lf:r.depthFunc(r.GREATER);break;case cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=Tt}},setLocked:function(Tt){N=Tt},setClear:function(Tt){St!==Tt&&(wt&&(Tt=1-Tt),r.clearDepth(Tt),St=Tt)},reset:function(){N=!1,et=null,lt=null,St=null,wt=!1}}}function i(){let N=!1,wt=null,et=null,lt=null,St=null,Tt=null,qt=null,ue=null,Fe=null;return{setTest:function(Rt){N||(Rt?O(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(Rt){wt!==Rt&&!N&&(r.stencilMask(Rt),wt=Rt)},setFunc:function(Rt,Ft,ee){(et!==Rt||lt!==Ft||St!==ee)&&(r.stencilFunc(Rt,Ft,ee),et=Rt,lt=Ft,St=ee)},setOp:function(Rt,Ft,ee){(Tt!==Rt||qt!==Ft||ue!==ee)&&(r.stencilOp(Rt,Ft,ee),Tt=Rt,qt=Ft,ue=ee)},setLocked:function(Rt){N=Rt},setClear:function(Rt){Fe!==Rt&&(r.clearStencil(Rt),Fe=Rt)},reset:function(){N=!1,wt=null,et=null,lt=null,St=null,Tt=null,qt=null,ue=null,Fe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,C=null,T=null,w=new jt(0,0,0),R=0,S=!1,y=null,I=null,U=null,z=null,H=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=K>=2);let ht=null,D={},ct=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),Dt=new Ve().fromArray(ct),L=new Ve().fromArray(ft);function V(N,wt,et,lt){let St=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(N,Tt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<et;qt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(wt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return Tt}let F={};F[r.TEXTURE_2D]=V(r.TEXTURE_2D,r.TEXTURE_2D,1),F[r.TEXTURE_CUBE_MAP]=V(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[r.TEXTURE_2D_ARRAY]=V(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),F[r.TEXTURE_3D]=V(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(r.DEPTH_TEST),o.setFunc(So),at(!1),B(r0),O(r.CULL_FACE),P(Lr);function O(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function it(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function rt(N,wt){return u[N]!==wt?(r.bindFramebuffer(N,wt),u[N]=wt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=wt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function j(N,wt){let et=d,lt=!1;if(N){et=f.get(wt),et===void 0&&(et=[],f.set(wt,et));let St=N.textures;if(et.length!==St.length||et[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,qt=St.length;Tt<qt;Tt++)et[Tt]=r.COLOR_ATTACHMENT0+Tt;et.length=St.length,lt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,lt=!0);lt&&r.drawBuffers(et)}function xt(N){return p!==N?(r.useProgram(N),p=N,!0):!1}let tt={[_s]:r.FUNC_ADD,[Uv]:r.FUNC_SUBTRACT,[Nv]:r.FUNC_REVERSE_SUBTRACT};tt[Ov]=r.MIN,tt[Fv]=r.MAX;let Q={[Bv]:r.ZERO,[zv]:r.ONE,[kv]:r.SRC_COLOR,[tf]:r.SRC_ALPHA,[qv]:r.SRC_ALPHA_SATURATE,[Wv]:r.DST_COLOR,[Hv]:r.DST_ALPHA,[Vv]:r.ONE_MINUS_SRC_COLOR,[ef]:r.ONE_MINUS_SRC_ALPHA,[Xv]:r.ONE_MINUS_DST_COLOR,[Gv]:r.ONE_MINUS_DST_ALPHA,[Yv]:r.CONSTANT_COLOR,[Zv]:r.ONE_MINUS_CONSTANT_COLOR,[$v]:r.CONSTANT_ALPHA,[Jv]:r.ONE_MINUS_CONSTANT_ALPHA};function P(N,wt,et,lt,St,Tt,qt,ue,Fe,Rt){if(N===Lr){_===!0&&(it(r.BLEND),_=!1);return}if(_===!1&&(O(r.BLEND),_=!0),N!==Dv){if(N!==g||Rt!==S){if((m!==_s||x!==_s)&&(r.blendEquation(r.FUNC_ADD),m=_s,x=_s),Rt)switch(N){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s0:r.blendFunc(r.ONE,r.ONE);break;case o0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case a0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case o0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case a0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,v=null,C=null,T=null,w.set(0,0,0),R=0,g=N,S=Rt}return}St=St||wt,Tt=Tt||et,qt=qt||lt,(wt!==m||St!==x)&&(r.blendEquationSeparate(tt[wt],tt[St]),m=wt,x=St),(et!==M||lt!==v||Tt!==C||qt!==T)&&(r.blendFuncSeparate(Q[et],Q[lt],Q[Tt],Q[qt]),M=et,v=lt,C=Tt,T=qt),(ue.equals(w)===!1||Fe!==R)&&(r.blendColor(ue.r,ue.g,ue.b,Fe),w.copy(ue),R=Fe),g=N,S=!1}function dt(N,wt){N.side===fi?it(r.CULL_FACE):O(r.CULL_FACE);let et=N.side===Hn;wt&&(et=!et),at(et),N.blending===xo&&N.transparent===!1?P(Lr):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let lt=N.stencilWrite;a.setTest(lt),lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){y!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),y=N)}function B(N){N!==Pv?(O(r.CULL_FACE),N!==I&&(N===r0?r.cullFace(r.BACK):N===Iv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),I=N}function ut(N){N!==U&&(G&&r.lineWidth(N),U=N)}function Nt(N,wt,et){N?(O(r.POLYGON_OFFSET_FILL),(z!==wt||H!==et)&&(r.polygonOffset(wt,et),z=wt,H=et)):it(r.POLYGON_OFFSET_FILL)}function bt(N){N?O(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function A(N){N===void 0&&(N=r.TEXTURE0+Z-1),ht!==N&&(r.activeTexture(N),ht=N)}function b(N,wt,et){et===void 0&&(ht===null?et=r.TEXTURE0+Z-1:et=ht);let lt=D[et];lt===void 0&&(lt={type:void 0,texture:void 0},D[et]=lt),(lt.type!==N||lt.texture!==wt)&&(ht!==et&&(r.activeTexture(et),ht=et),r.bindTexture(N,wt||F[N]),lt.type=N,lt.texture=wt)}function Y(){let N=D[ht];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){Dt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Dt.copy(N))}function It(N){L.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),L.copy(N))}function te(N,wt){let et=c.get(wt);et===void 0&&(et=new WeakMap,c.set(wt,et));let lt=et.get(N);lt===void 0&&(lt=r.getUniformBlockIndex(wt,N.name),et.set(N,lt))}function Xt(N,wt){let lt=c.get(wt).get(N);l.get(wt)!==lt&&(r.uniformBlockBinding(wt,lt,N.__bindingPointIndex),l.set(wt,lt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ht=null,D={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,C=null,T=null,w=new jt(0,0,0),R=0,S=!1,y=null,I=null,U=null,z=null,H=null,Dt.set(0,0,r.canvas.width,r.canvas.height),L.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:it,bindFramebuffer:rt,drawBuffers:j,useProgram:xt,setBlending:P,setMaterial:dt,setFlipSided:at,setCullFace:B,setLineWidth:ut,setPolygonOffset:Nt,setScissorTest:bt,activeTexture:A,bindTexture:b,unbindTexture:Y,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:yt,texImage3D:Gt,updateUBOMapping:te,uniformBlockBinding:Xt,texStorage2D:Ht,texStorage3D:pt,texSubImage2D:st,texSubImage3D:vt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:It,reset:ce}}function rg(r,t,e,n){let i=Mw(n);switch(e){case vg:return r*t;case Mg:return r*t;case Sg:return r*t*2;case Yc:return r*t/i.components*i.byteLength;case Cd:return r*t/i.components*i.byteLength;case bg:return r*t*2/i.components*i.byteLength;case Rd:return r*t*2/i.components*i.byteLength;case yg:return r*t*3/i.components*i.byteLength;case Ti:return r*t*4/i.components*i.byteLength;case Pd:return r*t*4/i.components*i.byteLength;case uc:case fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dc:case pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mf:case _f:return Math.max(r,16)*Math.max(t,8)/4;case pf:case gf:return Math.max(r,8)*Math.max(t,8)/2;case xf:case vf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Af:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case If:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Df:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mc:case Nf:case Of:return Math.ceil(r/4)*Math.ceil(t/4)*16;case wg:case Ff:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bf:case zf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mw(r){switch(r){case ar:case gg:return{byteLength:1,components:1};case Ia:case _g:case Va:return{byteLength:2,components:1};case Ed:case Ad:return{byteLength:2,components:4};case Ss:case Td:case rr:return{byteLength:4,components:1};case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Sw(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return d?new OffscreenCanvas(A,b):xc("canvas")}function _(A,b,Y){let nt=1,ot=bt(A);if((ot.width>Y||ot.height>Y)&&(nt=Y/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let st=Math.floor(nt*ot.width),vt=Math.floor(nt*ot.height);u===void 0&&(u=p(st,vt));let gt=b?p(st,vt):u;return gt.width=st,gt.height=vt,gt.getContext("2d").drawImage(A,0,0,st,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+st+"x"+vt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(A,b,Y,nt,ot=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=b;if(b===r.RED&&(Y===r.FLOAT&&(st=r.R32F),Y===r.HALF_FLOAT&&(st=r.R16F),Y===r.UNSIGNED_BYTE&&(st=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.R8UI),Y===r.UNSIGNED_SHORT&&(st=r.R16UI),Y===r.UNSIGNED_INT&&(st=r.R32UI),Y===r.BYTE&&(st=r.R8I),Y===r.SHORT&&(st=r.R16I),Y===r.INT&&(st=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(st=r.RG32F),Y===r.HALF_FLOAT&&(st=r.RG16F),Y===r.UNSIGNED_BYTE&&(st=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RG8UI),Y===r.UNSIGNED_SHORT&&(st=r.RG16UI),Y===r.UNSIGNED_INT&&(st=r.RG32UI),Y===r.BYTE&&(st=r.RG8I),Y===r.SHORT&&(st=r.RG16I),Y===r.INT&&(st=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGB16UI),Y===r.UNSIGNED_INT&&(st=r.RGB32UI),Y===r.BYTE&&(st=r.RGB8I),Y===r.SHORT&&(st=r.RGB16I),Y===r.INT&&(st=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGBA16UI),Y===r.UNSIGNED_INT&&(st=r.RGBA32UI),Y===r.BYTE&&(st=r.RGBA8I),Y===r.SHORT&&(st=r.RGBA16I),Y===r.INT&&(st=r.RGBA32I)),b===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(st=r.RGB9_E5),b===r.RGBA){let vt=ot?Zc:he.getTransfer(nt);Y===r.FLOAT&&(st=r.RGBA32F),Y===r.HALF_FLOAT&&(st=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(st=vt===ve?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function x(A,b){let Y;return A?b===null||b===Ss||b===To?Y=r.DEPTH24_STENCIL8:b===rr?Y=r.DEPTH32F_STENCIL8:b===Ia&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ss||b===To?Y=r.DEPTH_COMPONENT24:b===rr?Y=r.DEPTH_COMPONENT32F:b===Ia&&(Y=r.DEPTH_COMPONENT16),Y}function C(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Oi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){let b=A.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function w(A){let b=A.target;b.removeEventListener("dispose",w),y(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let Y=A.source,nt=f.get(Y);if(nt){let ot=nt[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(A),Object.keys(nt).length===0&&f.delete(Y)}n.remove(A)}function S(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let Y=A.source,nt=f.get(Y);delete nt[b.__cacheKey],o.memory.textures--}function y(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ot=0;ot<b.__webglFramebuffer[nt].length;ot++)r.deleteFramebuffer(b.__webglFramebuffer[nt][ot]);else r.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[nt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=A.textures;for(let nt=0,ot=Y.length;nt<ot;nt++){let st=n.get(Y[nt]);st.__webglTexture&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(Y[nt])}n.remove(A)}let I=0;function U(){I=0}function z(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function H(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Z(A,b){let Y=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){let nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(Y,A,b);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function G(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){L(Y,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function K(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){L(Y,A,b);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function X(A,b){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){V(Y,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}let ht={[ff]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[df]:r.MIRRORED_REPEAT},D={[Dn]:r.NEAREST,[oy]:r.NEAREST_MIPMAP_NEAREST,[Bl]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[Su]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},ct={[hy]:r.NEVER,[gy]:r.ALWAYS,[uy]:r.LESS,[Eg]:r.LEQUAL,[fy]:r.EQUAL,[my]:r.GEQUAL,[dy]:r.GREATER,[py]:r.NOTEQUAL};function ft(A,b){if(b.type===rr&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oi||b.magFilter===Su||b.magFilter===Bl||b.magFilter===Ms||b.minFilter===Oi||b.minFilter===Su||b.minFilter===Bl||b.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ht[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ht[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ht[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Bl&&b.minFilter!==Ms||b.type===rr&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Dt(A,b){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let nt=b.source,ot=f.get(nt);ot===void 0&&(ot={},f.set(nt,ot));let st=H(b);if(st!==A.__cacheKey){ot[st]===void 0&&(ot[st]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ot[st].usedTimes++;let vt=ot[A.__cacheKey];vt!==void 0&&(ot[A.__cacheKey].usedTimes--,vt.usedTimes===0&&S(b)),A.__cacheKey=st,A.__webglTexture=ot[st].texture}return Y}function L(A,b,Y){let nt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=r.TEXTURE_3D);let ot=Dt(A,b),st=b.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+Y);let vt=n.get(st);if(st.version!==vt.__version||ot===!0){e.activeTexture(r.TEXTURE0+Y);let gt=he.getPrimaries(he.workingColorSpace),Mt=b.colorSpace===Ir?null:he.getPrimaries(b.colorSpace),Ht=b.colorSpace===Ir||gt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let pt=_(b.image,!1,i.maxTextureSize);pt=Nt(b,pt);let yt=s.convert(b.format,b.colorSpace),Gt=s.convert(b.type),Vt=v(b.internalFormat,yt,Gt,b.colorSpace,b.isVideoTexture);ft(nt,b);let It,te=b.mipmaps,Xt=b.isVideoTexture!==!0,ce=vt.__version===void 0||ot===!0,N=st.dataReady,wt=C(b,pt);if(b.isDepthTexture)Vt=x(b.format===Eo,b.type),ce&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,Vt,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Vt,pt.width,pt.height,0,yt,Gt,null));else if(b.isDataTexture)if(te.length>0){Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,wt,Vt,te[0].width,te[0].height);for(let et=0,lt=te.length;et<lt;et++)It=te[et],Xt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,It.width,It.height,yt,Gt,It.data):e.texImage2D(r.TEXTURE_2D,et,Vt,It.width,It.height,0,yt,Gt,It.data);b.generateMipmaps=!1}else Xt?(ce&&e.texStorage2D(r.TEXTURE_2D,wt,Vt,pt.width,pt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt.width,pt.height,yt,Gt,pt.data)):e.texImage2D(r.TEXTURE_2D,0,Vt,pt.width,pt.height,0,yt,Gt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Vt,te[0].width,te[0].height,pt.depth);for(let et=0,lt=te.length;et<lt;et++)if(It=te[et],b.format!==Ti)if(yt!==null)if(Xt){if(N)if(b.layerUpdates.size>0){let St=rg(It.width,It.height,b.format,b.type);for(let Tt of b.layerUpdates){let qt=It.data.subarray(Tt*St/It.data.BYTES_PER_ELEMENT,(Tt+1)*St/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Tt,It.width,It.height,1,yt,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,It.width,It.height,pt.depth,yt,It.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,Vt,It.width,It.height,pt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,It.width,It.height,pt.depth,yt,Gt,It.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,Vt,It.width,It.height,pt.depth,0,yt,Gt,It.data)}else{Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,wt,Vt,te[0].width,te[0].height);for(let et=0,lt=te.length;et<lt;et++)It=te[et],b.format!==Ti?yt!==null?Xt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,It.width,It.height,yt,It.data):e.compressedTexImage2D(r.TEXTURE_2D,et,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,It.width,It.height,yt,Gt,It.data):e.texImage2D(r.TEXTURE_2D,et,Vt,It.width,It.height,0,yt,Gt,It.data)}else if(b.isDataArrayTexture)if(Xt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Vt,pt.width,pt.height,pt.depth),N)if(b.layerUpdates.size>0){let et=rg(pt.width,pt.height,b.format,b.type);for(let lt of b.layerUpdates){let St=pt.data.subarray(lt*et/pt.data.BYTES_PER_ELEMENT,(lt+1)*et/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,pt.width,pt.height,1,yt,Gt,St)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(b.isData3DTexture)Xt?(ce&&e.texStorage3D(r.TEXTURE_3D,wt,Vt,pt.width,pt.height,pt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Vt,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(b.isFramebufferTexture){if(ce)if(Xt)e.texStorage2D(r.TEXTURE_2D,wt,Vt,pt.width,pt.height);else{let et=pt.width,lt=pt.height;for(let St=0;St<wt;St++)e.texImage2D(r.TEXTURE_2D,St,Vt,et,lt,0,yt,Gt,null),et>>=1,lt>>=1}}else if(te.length>0){if(Xt&&ce){let et=bt(te[0]);e.texStorage2D(r.TEXTURE_2D,wt,Vt,et.width,et.height)}for(let et=0,lt=te.length;et<lt;et++)It=te[et],Xt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,yt,Gt,It):e.texImage2D(r.TEXTURE_2D,et,Vt,yt,Gt,It);b.generateMipmaps=!1}else if(Xt){if(ce){let et=bt(pt);e.texStorage2D(r.TEXTURE_2D,wt,Vt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Gt,pt)}else e.texImage2D(r.TEXTURE_2D,0,Vt,yt,Gt,pt);g(b)&&m(nt),vt.__version=st.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function V(A,b,Y){if(b.image.length!==6)return;let nt=Dt(A,b),ot=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+Y);let st=n.get(ot);if(ot.version!==st.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y);let vt=he.getPrimaries(he.workingColorSpace),gt=b.colorSpace===Ir?null:he.getPrimaries(b.colorSpace),Mt=b.colorSpace===Ir||vt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Ht=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!Ht&&!pt?yt[lt]=_(b.image[lt],!0,i.maxCubemapSize):yt[lt]=pt?b.image[lt].image:b.image[lt],yt[lt]=Nt(b,yt[lt]);let Gt=yt[0],Vt=s.convert(b.format,b.colorSpace),It=s.convert(b.type),te=v(b.internalFormat,Vt,It,b.colorSpace),Xt=b.isVideoTexture!==!0,ce=st.__version===void 0||nt===!0,N=ot.dataReady,wt=C(b,Gt);ft(r.TEXTURE_CUBE_MAP,b);let et;if(Ht){Xt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,te,Gt.width,Gt.height);for(let lt=0;lt<6;lt++){et=yt[lt].mipmaps;for(let St=0;St<et.length;St++){let Tt=et[St];b.format!==Ti?Vt!==null?Xt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Vt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,te,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Vt,It,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,te,Tt.width,Tt.height,0,Vt,It,Tt.data)}}}else{if(et=b.mipmaps,Xt&&ce){et.length>0&&wt++;let lt=bt(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,te,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(pt){Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Vt,It,yt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,yt[lt].width,yt[lt].height,0,Vt,It,yt[lt].data);for(let St=0;St<et.length;St++){let qt=et[St].image[lt].image;Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,qt.width,qt.height,Vt,It,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,te,qt.width,qt.height,0,Vt,It,qt.data)}}else{Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Vt,It,yt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,Vt,It,yt[lt]);for(let St=0;St<et.length;St++){let Tt=et[St];Xt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Vt,It,Tt.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,te,Vt,It,Tt.image[lt])}}}g(b)&&m(r.TEXTURE_CUBE_MAP),st.__version=ot.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function F(A,b,Y,nt,ot,st){let vt=s.convert(Y.format,Y.colorSpace),gt=s.convert(Y.type),Mt=v(Y.internalFormat,vt,gt,Y.colorSpace),Ht=n.get(b),pt=n.get(Y);if(pt.__renderTarget=b,!Ht.__hasExternalTextures){let yt=Math.max(1,b.width>>st),Gt=Math.max(1,b.height>>st);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,st,Mt,yt,Gt,b.depth,0,vt,gt,null):e.texImage2D(ot,st,Mt,yt,Gt,0,vt,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,ot,pt.__webglTexture,0,at(b)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,ot,pt.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function O(A,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let nt=b.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,st=x(b.stencilBuffer,ot),vt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=at(b);B(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,st,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,st,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,st,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,A)}else{let nt=b.textures;for(let ot=0;ot<nt.length;ot++){let st=nt[ot],vt=s.convert(st.format,st.colorSpace),gt=s.convert(st.type),Mt=v(st.internalFormat,vt,gt,st.colorSpace),Ht=at(b);Y&&B(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Mt,b.width,b.height):B(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,Mt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function it(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);let ot=nt.__webglTexture,st=at(b);if(b.depthTexture.format===vo)B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(b.depthTexture.format===Eo)B(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function rt(A){let b=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=nt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");it(b.__webglFramebuffer,A)}else if(Y){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=r.createRenderbuffer(),O(b.__webglDepthbuffer[nt],A,!1);else{let ot=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,st)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),O(b.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,ot)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function j(A,b,Y){let nt=n.get(A);b!==void 0&&F(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&rt(A)}function xt(A){let b=A.texture,Y=n.get(A),nt=n.get(b);A.addEventListener("dispose",w);let ot=A.textures,st=A.isWebGLCubeRenderTarget===!0,vt=ot.length>1;if(vt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=b.version,o.memory.textures++),st){Y.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)Y.__webglFramebuffer[gt][Mt]=r.createFramebuffer()}else Y.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)Y.__webglFramebuffer[gt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(vt)for(let gt=0,Mt=ot.length;gt<Mt;gt++){let Ht=n.get(ot[gt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&B(A)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){let Mt=ot[gt];Y.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[gt]);let Ht=s.convert(Mt.format,Mt.colorSpace),pt=s.convert(Mt.type),yt=v(Mt.internalFormat,Ht,pt,Mt.colorSpace,A.isXRRenderTarget===!0),Gt=at(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,yt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),O(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),ft(r.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)F(Y.__webglFramebuffer[gt][Mt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else F(Y.__webglFramebuffer[gt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let gt=0,Mt=ot.length;gt<Mt;gt++){let Ht=ot[gt],pt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,pt.__webglTexture),ft(r.TEXTURE_2D,Ht),F(Y.__webglFramebuffer,A,Ht,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),g(Ht)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),ft(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)F(Y.__webglFramebuffer[Mt],A,b,r.COLOR_ATTACHMENT0,gt,Mt);else F(Y.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,gt,0);g(b)&&m(gt),e.unbindTexture()}A.depthBuffer&&rt(A)}function tt(A){let b=A.textures;for(let Y=0,nt=b.length;Y<nt;Y++){let ot=b[Y];if(g(ot)){let st=M(A),vt=n.get(ot).__webglTexture;e.bindTexture(st,vt),m(st),e.unbindTexture()}}}let Q=[],P=[];function dt(A){if(A.samples>0){if(B(A)===!1){let b=A.textures,Y=A.width,nt=A.height,ot=r.COLOR_BUFFER_BIT,st=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(A),gt=b.length>1;if(gt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let Ht=n.get(b[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,ot,r.NEAREST),l===!0&&(Q.length=0,P.length=0,Q.push(r.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(st),P.push(st),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let Ht=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function at(A){return Math.min(i.maxSamples,A.samples)}function B(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Nt(A,b){let Y=A.colorSpace,nt=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Y!==Lo&&Y!==Ir&&(he.getTransfer(Y)===ve?(nt!==Ti||ot!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function bt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=j,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=B}function bw(r,t){function e(n,i=Ir){let s,o=he.getTransfer(i);if(n===ar)return r.UNSIGNED_BYTE;if(n===Ed)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return r.UNSIGNED_SHORT_5_5_5_1;if(n===xg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gg)return r.BYTE;if(n===_g)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===Td)return r.INT;if(n===Ss)return r.UNSIGNED_INT;if(n===rr)return r.FLOAT;if(n===Va)return r.HALF_FLOAT;if(n===vg)return r.ALPHA;if(n===yg)return r.RGB;if(n===Ti)return r.RGBA;if(n===Mg)return r.LUMINANCE;if(n===Sg)return r.LUMINANCE_ALPHA;if(n===vo)return r.DEPTH_COMPONENT;if(n===Eo)return r.DEPTH_STENCIL;if(n===Yc)return r.RED;if(n===Cd)return r.RED_INTEGER;if(n===bg)return r.RG;if(n===Rd)return r.RG_INTEGER;if(n===Pd)return r.RGBA_INTEGER;if(n===uc||n===fc||n===dc||n===pc)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===uc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===uc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pf||n===mf||n===gf||n===_f)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xf||n===vf||n===yf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xf||n===vf)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mf||n===Sf||n===bf||n===wf||n===Tf||n===Ef||n===Af||n===Cf||n===Rf||n===Pf||n===If||n===Lf||n===Df||n===Uf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ef)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Af)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===If)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Df)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===Nf||n===Of)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===mc)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wg||n===Ff||n===Bf||n===zf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ff)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===To?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var td=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hn=class extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}},ww={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ww)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`,ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Gn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fi({vertexShader:Tw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends Nr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=new ed,g=e.getContextAttributes(),m=null,M=null,v=[],x=[],C=new Pt,T=null,w=new Ln;w.viewport=new Ve;let R=new Ln;R.viewport=new Ve;let S=[w,R],y=new td,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=v[L];return V===void 0&&(V=new Aa,v[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=v[L];return V===void 0&&(V=new Aa,v[L]=V),V.getGripSpace()},this.getHand=function(L){let V=v[L];return V===void 0&&(V=new Aa,v[L]=V),V.getHandSpace()};function z(L){let V=x.indexOf(L.inputSource);if(V===-1)return;let F=v[V];F!==void 0&&(F.update(L.inputSource,L.frame,c||o),F.dispatchEvent({type:L.type,data:L.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let L=0;L<v.length;L++){let V=x[L];V!==null&&(x[L]=null,v[L].disconnect(V))}I=null,U=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,M=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let V={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new lr(d.framebufferWidth,d.framebufferHeight,{format:Ti,type:ar,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,F=null,O=null;g.depth&&(O=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=g.stencil?Eo:vo,F=g.stencil?To:Ss);let it={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(it),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new lr(f.textureWidth,f.textureHeight,{format:Ti,type:ar,depthTexture:new Rc(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(L){for(let V=0;V<L.removed.length;V++){let F=L.removed[V],O=x.indexOf(F);O>=0&&(x[O]=null,v[O].disconnect(F))}for(let V=0;V<L.added.length;V++){let F=L.added[V],O=x.indexOf(F);if(O===-1){for(let rt=0;rt<v.length;rt++)if(rt>=x.length){x.push(F),O=rt;break}else if(x[rt]===null){x[rt]=F,O=rt;break}if(O===-1)break}let it=v[O];it&&it.connect(F)}}let G=new W,K=new W;function X(L,V,F){G.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(F.matrixWorld);let O=G.distanceTo(K),it=V.projectionMatrix.elements,rt=F.projectionMatrix.elements,j=it[14]/(it[10]-1),xt=it[14]/(it[10]+1),tt=(it[9]+1)/it[5],Q=(it[9]-1)/it[5],P=(it[8]-1)/it[0],dt=(rt[8]+1)/rt[0],at=j*P,B=j*dt,ut=O/(-P+dt),Nt=ut*-P;if(V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Nt),L.translateZ(ut),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),it[10]===-1)L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let bt=j+ut,A=xt+ut,b=at-Nt,Y=B+(O-Nt),nt=tt*xt/A*bt,ot=Q*xt/A*bt;L.projectionMatrix.makePerspective(b,Y,nt,ot,bt,A),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function ht(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;let V=L.near,F=L.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(F=_.depthFar)),y.near=R.near=w.near=V,y.far=R.far=w.far=F,(I!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,U=y.far),w.layers.mask=L.layers.mask|2,R.layers.mask=L.layers.mask|4,y.layers.mask=w.layers.mask|R.layers.mask;let O=L.parent,it=y.cameras;ht(y,O);for(let rt=0;rt<it.length;rt++)ht(it[rt],O);it.length===2?X(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),D(L,y,O)};function D(L,V,F){F===null?L.matrix.copy(V.matrixWorld):(L.matrix.copy(F.matrixWorld),L.matrix.invert(),L.matrix.multiply(V.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=La*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ct=null;function ft(L,V){if(h=V.getViewerPose(c||o),p=V,h!==null){let F=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let O=!1;F.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let rt=0;rt<F.length;rt++){let j=F[rt],xt=null;if(d!==null)xt=d.getViewport(j);else{let Q=u.getViewSubImage(f,j);xt=Q.viewport,rt===0&&(t.setRenderTargetTextures(M,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(M))}let tt=S[rt];tt===void 0&&(tt=new Ln,tt.layers.enable(rt),tt.viewport=new Ve,S[rt]=tt),tt.matrix.fromArray(j.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(j.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(xt.x,xt.y,xt.width,xt.height),rt===0&&(y.matrix.copy(tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(tt)}let it=i.enabledFeatures;if(it&&it.includes("depth-sensing")){let rt=u.getDepthInformation(F[0]);rt&&rt.isValid&&rt.texture&&_.init(t,rt,i.renderState)}}for(let F=0;F<v.length;F++){let O=x[F],it=v[F];O!==null&&it!==void 0&&it.update(O,V,c||o)}ct&&ct(L,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),p=null}let Dt=new Pg;Dt.setAnimationLoop(ft),this.setAnimationLoop=function(L){ct=L},this.dispose=function(){}}},ms=new cr,Aw=new Oe;function Cw(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Rg(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),v=M.envMap,x=M.envMapRotation;v&&(g.envMap.value=v,ms.copy(x),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(ms)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rw(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=i[M.id];x===void 0&&(p(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",g));let C=v.program;n.updateUBOMapping(M,C);let T=t.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function h(M){let v=u();M.__bindingPointIndex=v;let x=r.createBuffer(),C=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=i[M.id],x=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,w=x.length;T<w;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,y=R.length;S<y;S++){let I=R[S];if(d(I,T,S,C)===!0){let U=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],H=0;for(let Z=0;Z<z.length;Z++){let G=z[Z],K=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,x,C){let T=M.value,w=v+"_"+x;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let R=C[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function p(M){let v=M.uniforms,x=0,C=16;for(let w=0,R=v.length;w<R;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,I=S.length;y<I;y++){let U=S[y],z=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Z=z.length;H<Z;H++){let G=z[H],K=_(G),X=x%C,ht=X%K.boundary,D=X+ht;x+=ht,D!==0&&C-D<K.storage&&(x+=C-D),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=K.storage}}}let T=x%C;return T>0&&(x+=C-T),M.__size=x,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var Pc=class{constructor(t={}){let{canvas:e=Dy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=Dr,this.toneMappingExposure=1;let x=this,C=!1,T=0,w=0,R=null,S=-1,y=null,I=new Ve,U=new Ve,z=null,H=new jt(0),Z=0,G=e.width,K=e.height,X=1,ht=null,D=null,ct=new Ve(0,0,G,K),ft=new Ve(0,0,G,K),Dt=!1,L=new Da,V=!1,F=!1,O=new Oe,it=new Oe,rt=new W,j=new Ve,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function Q(){return R===null?X:1}let P=n;function dt(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),P===null){let k="webgl2";if(P=dt(k,E),P===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let at,B,ut,Nt,bt,A,b,Y,nt,ot,st,vt,gt,Mt,Ht,pt,yt,Gt,Vt,It,te,Xt,ce,N;function wt(){at=new XS(P),at.init(),Xt=new bw(P,at),B=new zS(P,at,t,Xt),ut=new yw(P,at),B.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Nt=new ZS(P),bt=new aw,A=new Sw(P,at,ut,bt,B,Xt,Nt),b=new VS(x),Y=new WS(x),nt=new e1(P),ce=new FS(P,nt),ot=new qS(P,nt,Nt,ce),st=new JS(P,ot,nt,Nt),Vt=new $S(P,B,A),pt=new kS(bt),vt=new ow(x,b,Y,at,B,ce,pt),gt=new Cw(x,bt),Mt=new cw,Ht=new mw(at),Gt=new OS(x,b,Y,ut,st,d,l),yt=new xw(x,st,B),N=new Rw(P,Nt,B,ut),It=new BS(P,at,Nt),te=new YS(P,at,Nt),Nt.programs=vt.programs,x.capabilities=B,x.extensions=at,x.properties=bt,x.renderLists=Mt,x.shadowMap=yt,x.state=ut,x.info=Nt}wt();let et=new nd(x,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,k,$=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=k,e.width=Math.floor(E*X),e.height=Math.floor(k*X),$===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(G*X,K*X).floor()},this.setDrawingBufferSize=function(E,k,$){G=E,K=k,X=$,e.width=Math.floor(E*$),e.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,k,$,J){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,k,$,J),ut.viewport(I.copy(ct).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,k,$,J){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,k,$,J),ut.scissor(U.copy(ft).multiplyScalar(X).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){ut.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,k=!0,$=!0){let J=0;if(E){let q=!1;if(R!==null){let mt=R.texture.format;q=mt===Pd||mt===Rd||mt===Cd}if(q){let mt=R.texture.type,_t=mt===ar||mt===Ss||mt===Ia||mt===To||mt===Ed||mt===Ad,Et=Gt.getClearColor(),Lt=Gt.getClearAlpha(),Yt=Et.r,Jt=Et.g,Ot=Et.b;_t?(p[0]=Yt,p[1]=Jt,p[2]=Ot,p[3]=Lt,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=Yt,_[1]=Jt,_[2]=Ot,_[3]=Lt,P.clearBufferiv(P.COLOR,0,_))}else J|=P.COLOR_BUFFER_BIT}k&&(J|=P.DEPTH_BUFFER_BIT),$&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Mt.dispose(),Ht.dispose(),bt.dispose(),b.dispose(),Y.dispose(),st.dispose(),ce.dispose(),N.dispose(),vt.dispose(),et.dispose(),et.removeEventListener("sessionstart",At),et.removeEventListener("sessionend",$t),Bt.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let E=Nt.autoReset,k=yt.enabled,$=yt.autoUpdate,J=yt.needsUpdate,q=yt.type;wt(),Nt.autoReset=E,yt.enabled=k,yt.autoUpdate=$,yt.needsUpdate=J,yt.type=q}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){let k=E.target;k.removeEventListener("dispose",qt),ue(k)}function ue(E){Fe(E),bt.remove(E)}function Fe(E){let k=bt.get(E).programs;k!==void 0&&(k.forEach(function($){vt.releaseProgram($)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,J,q,mt){k===null&&(k=xt);let _t=q.isMesh&&q.matrixWorld.determinant()<0,Et=Wn(E,k,$,J,q);ut.setMaterial(J,_t);let Lt=$.index,Yt=1;if(J.wireframe===!0){if(Lt=ot.getWireframeAttribute($),Lt===void 0)return;Yt=2}let Jt=$.drawRange,Ot=$.attributes.position,Kt=Jt.start*Yt,fe=(Jt.start+Jt.count)*Yt;mt!==null&&(Kt=Math.max(Kt,mt.start*Yt),fe=Math.min(fe,(mt.start+mt.count)*Yt)),Lt!==null?(Kt=Math.max(Kt,0),fe=Math.min(fe,Lt.count)):Ot!=null&&(Kt=Math.max(Kt,0),fe=Math.min(fe,Ot.count));let me=fe-Kt;if(me<0||me===1/0)return;ce.setup(q,J,Et,$,Lt);let Le,ge=It;if(Lt!==null&&(Le=nt.get(Lt),ge=te,ge.setIndex(Le)),q.isMesh)J.wireframe===!0?(ut.setLineWidth(J.wireframeLinewidth*Q()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if(q.isLine){let kt=J.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*Q()),q.isLineSegments?ge.setMode(P.LINES):q.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else q.isPoints?ge.setMode(P.POINTS):q.isSprite&&ge.setMode(P.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ge.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let kt=q._multiDrawStarts,Bi=q._multiDrawCounts,_e=q._multiDrawCount,xi=Lt?nt.get(Lt).bytesPerElement:1,Is=bt.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<_e;Xn++)Is.setValue(P,"_gl_DrawID",Xn),ge.render(kt[Xn]/xi,Bi[Xn])}else if(q.isInstancedMesh)ge.renderInstances(Kt,me,q.count);else if($.isInstancedBufferGeometry){let kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bi=Math.min($.instanceCount,kt);ge.renderInstances(Kt,me,Bi)}else ge.render(Kt,me)};function Rt(E,k,$){E.transparent===!0&&E.side===fi&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,ye(E,k,$),E.side=Ur,E.needsUpdate=!0,ye(E,k,$),E.side=fi):ye(E,k,$)}this.compile=function(E,k,$=null){$===null&&($=E),m=Ht.get($),m.init(k),v.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==$&&E.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let J=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let mt=q.material;if(mt)if(Array.isArray(mt))for(let _t=0;_t<mt.length;_t++){let Et=mt[_t];Rt(Et,$,q),J.add(Et)}else Rt(mt,$,q),J.add(mt)}),v.pop(),m=null,J},this.compileAsync=function(E,k,$=null){let J=this.compile(E,k,$);return new Promise(q=>{function mt(){if(J.forEach(function(_t){bt.get(_t).currentProgram.isReady()&&J.delete(_t)}),J.size===0){q(E);return}setTimeout(mt,10)}at.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ft=null;function ee(E){Ft&&Ft(E)}function At(){Bt.stop()}function $t(){Bt.start()}let Bt=new Pg;Bt.setAnimationLoop(ee),typeof self!="undefined"&&Bt.setContext(self),this.setAnimationLoop=function(E){Ft=E,et.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},et.addEventListener("sessionstart",At),et.addEventListener("sessionend",$t),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(k),k=et.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,R),m=Ht.get(E,v.length),m.init(k),v.push(m),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),L.setFromProjectionMatrix(it),F=this.localClippingEnabled,V=pt.init(this.clippingPlanes,F),g=Mt.get(E,M.length),g.init(),M.push(g),et.enabled===!0&&et.isPresenting===!0){let mt=x.xr.getDepthSensingMesh();mt!==null&&Zt(mt,k,-1/0,x.sortObjects)}Zt(E,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,D),tt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,tt&&Gt.addToRenderList(g,E),this.info.render.frame++,V===!0&&pt.beginShadows();let $=m.state.shadowsArray;yt.render($,E,k),V===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,q=g.transmissive;if(m.setupLights(),k.isArrayCamera){let mt=k.cameras;if(q.length>0)for(let _t=0,Et=mt.length;_t<Et;_t++){let Lt=mt[_t];oe(J,q,E,Lt)}tt&&Gt.render(E);for(let _t=0,Et=mt.length;_t<Et;_t++){let Lt=mt[_t];He(g,E,Lt,Lt.viewport)}}else q.length>0&&oe(J,q,E,k),tt&&Gt.render(E),He(g,E,k);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,k),ce.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&pt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Zt(E,k,$,J){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||L.intersectsSprite(E)){J&&j.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);let _t=st.update(E),Et=E.material;Et.visible&&g.push(E,_t,Et,$,j.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||L.intersectsObject(E))){let _t=st.update(E),Et=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),j.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),j.copy(_t.boundingSphere.center)),j.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(Et)){let Lt=_t.groups;for(let Yt=0,Jt=Lt.length;Yt<Jt;Yt++){let Ot=Lt[Yt],Kt=Et[Ot.materialIndex];Kt&&Kt.visible&&g.push(E,_t,Kt,$,j.z,Ot)}}else Et.visible&&g.push(E,_t,Et,$,j.z,null)}}let mt=E.children;for(let _t=0,Et=mt.length;_t<Et;_t++)Zt(mt[_t],k,$,J)}function He(E,k,$,J){let q=E.opaque,mt=E.transmissive,_t=E.transparent;m.setupLightsView($),V===!0&&pt.setGlobalState(x.clippingPlanes,$),J&&ut.viewport(I.copy(J)),q.length>0&&we(q,k,$),mt.length>0&&we(mt,k,$),_t.length>0&&we(_t,k,$),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function oe(E,k,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new lr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Va:ar,minFilter:Ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let mt=m.state.transmissionRenderTarget[J.id],_t=J.viewport||I;mt.setSize(_t.z,_t.w);let Et=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Gt.render($);let Lt=x.toneMapping;x.toneMapping=Dr;let Yt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),V===!0&&pt.setGlobalState(x.clippingPlanes,J),we(E,$,J),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ot=0,Kt=k.length;Ot<Kt;Ot++){let fe=k[Ot],me=fe.object,Le=fe.geometry,ge=fe.material,kt=fe.group;if(ge.side===fi&&me.layers.test(J.layers)){let Bi=ge.side;ge.side=Hn,ge.needsUpdate=!0,Ze(me,$,J,Le,ge,kt),ge.side=Bi,ge.needsUpdate=!0,Jt=!0}}Jt===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}x.setRenderTarget(Et),x.setClearColor(H,Z),Yt!==void 0&&(J.viewport=Yt),x.toneMapping=Lt}function we(E,k,$){let J=k.isScene===!0?k.overrideMaterial:null;for(let q=0,mt=E.length;q<mt;q++){let _t=E[q],Et=_t.object,Lt=_t.geometry,Yt=J===null?_t.material:J,Jt=_t.group;Et.layers.test($.layers)&&Ze(Et,k,$,Lt,Yt,Jt)}}function Ze(E,k,$,J,q,mt){E.onBeforeRender(x,k,$,J,q,mt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(x,k,$,J,E,mt),q.transparent===!0&&q.side===fi&&q.forceSinglePass===!1?(q.side=Hn,q.needsUpdate=!0,x.renderBufferDirect($,k,J,q,E,mt),q.side=Ur,q.needsUpdate=!0,x.renderBufferDirect($,k,J,q,E,mt),q.side=fi):x.renderBufferDirect($,k,J,q,E,mt),E.onAfterRender(x,k,$,J,q,mt)}function ye(E,k,$){k.isScene!==!0&&(k=xt);let J=bt.get(E),q=m.state.lights,mt=m.state.shadowsArray,_t=q.state.version,Et=vt.getParameters(E,q.state,mt,k,$),Lt=vt.getProgramCacheKey(Et),Yt=J.programs;J.environment=E.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(E.isMeshStandardMaterial?Y:b).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",qt),Yt=new Map,J.programs=Yt);let Jt=Yt.get(Lt);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===_t)return pe(E,Et),Jt}else Et.uniforms=vt.getUniforms(E),E.onBeforeCompile(Et,x),Jt=vt.acquireProgram(Et,Lt),Yt.set(Lt,Jt),J.uniforms=Et.uniforms;let Ot=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),pe(E,Et),J.needsLights=yn(E),J.lightsStateVersion=_t,J.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.directionalShadowMap.value=q.state.directionalShadowMap,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotShadowMap.value=q.state.spotShadowMap,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMap.value=q.state.pointShadowMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function Me(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Mo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function pe(E,k){let $=bt.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Wn(E,k,$,J,q){k.isScene!==!0&&(k=xt),A.resetTextureUnits();let mt=k.fog,_t=J.isMeshStandardMaterial?k.environment:null,Et=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Lo,Lt=(J.isMeshStandardMaterial?Y:b).get(J.envMap||_t),Yt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Jt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!$.morphAttributes.position,Kt=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color,me=Dr;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=x.toneMapping);let Le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=Le!==void 0?Le.length:0,kt=bt.get(J),Bi=m.state.lights;if(V===!0&&(F===!0||E!==y)){let ni=E===y&&J.id===S;pt.setState(J,E,ni)}let _e=!1;J.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Bi.state.version||kt.outputColorSpace!==Et||q.isBatchedMesh&&kt.batching===!1||!q.isBatchedMesh&&kt.batching===!0||q.isBatchedMesh&&kt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&kt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&kt.instancing===!1||!q.isInstancedMesh&&kt.instancing===!0||q.isSkinnedMesh&&kt.skinning===!1||!q.isSkinnedMesh&&kt.skinning===!0||q.isInstancedMesh&&kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&kt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&kt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&kt.instancingMorph===!1&&q.morphTexture!==null||kt.envMap!==Lt||J.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==pt.numPlanes||kt.numIntersection!==pt.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Jt||kt.morphTargets!==Ot||kt.morphNormals!==Kt||kt.morphColors!==fe||kt.toneMapping!==me||kt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,kt.__version=J.version);let xi=kt.currentProgram;_e===!0&&(xi=ye(J,k,q));let Is=!1,Xn=!1,Bo=!1,Ce=xi.getUniforms(),Ai=kt.uniforms;if(ut.useProgram(xi.program)&&(Is=!0,Xn=!0,Bo=!0),J.id!==S&&(S=J.id,Xn=!0),Is||y!==E){ut.buffers.depth.getReversed()?(O.copy(E.projectionMatrix),Ny(O),Oy(O),Ce.setValue(P,"projectionMatrix",O)):Ce.setValue(P,"projectionMatrix",E.projectionMatrix),Ce.setValue(P,"viewMatrix",E.matrixWorldInverse);let hr=Ce.map.cameraPosition;hr!==void 0&&hr.setValue(P,rt.setFromMatrixPosition(E.matrixWorld)),B.logarithmicDepthBuffer&&Ce.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Xn=!0,Bo=!0)}if(q.isSkinnedMesh){Ce.setOptional(P,q,"bindMatrix"),Ce.setOptional(P,q,"bindMatrixInverse");let ni=q.skeleton;ni&&(ni.boneTexture===null&&ni.computeBoneTexture(),Ce.setValue(P,"boneTexture",ni.boneTexture,A))}q.isBatchedMesh&&(Ce.setOptional(P,q,"batchingTexture"),Ce.setValue(P,"batchingTexture",q._matricesTexture,A),Ce.setOptional(P,q,"batchingIdTexture"),Ce.setValue(P,"batchingIdTexture",q._indirectTexture,A),Ce.setOptional(P,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(P,"batchingColorTexture",q._colorsTexture,A));let zo=$.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0)&&Vt.update(q,$,xi),(Xn||kt.receiveShadow!==q.receiveShadow)&&(kt.receiveShadow=q.receiveShadow,Ce.setValue(P,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ai.envMap.value=Lt,Ai.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Ai.envMapIntensity.value=k.environmentIntensity),Xn&&(Ce.setValue(P,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Ae(Ai,Bo),mt&&J.fog===!0&&gt.refreshFogUniforms(Ai,mt),gt.refreshMaterialUniforms(Ai,J,X,K,m.state.transmissionRenderTarget[E.id]),Mo.upload(P,Me(kt),Ai,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Mo.upload(P,Me(kt),Ai,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(P,"center",q.center),Ce.setValue(P,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(P,"normalMatrix",q.normalMatrix),Ce.setValue(P,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let ni=J.uniformsGroups;for(let hr=0,ur=ni.length;hr<ur;hr++){let Hd=ni[hr];N.update(Hd,xi),N.bind(Hd,xi)}}return xi}function Ae(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function yn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,$){bt.get(E.texture).__webglTexture=k,bt.get(E.depthTexture).__webglTexture=$;let J=bt.get(E);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let $=bt.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){R=E,T=k,w=$;let J=!0,q=null,mt=!1,_t=!1;if(E){let Lt=bt.get(E);if(Lt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(P.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Lt.__hasExternalTextures)A.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ot=E.depthTexture;if(Lt.__boundDepthTexture!==Ot){if(Ot!==null&&bt.has(Ot)&&(E.width!==Ot.image.width||E.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(_t=!0);let Jt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?q=Jt[k][$]:q=Jt[k],mt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?q=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?q=Jt[$]:q=Jt,I.copy(E.viewport),U.copy(E.scissor),z=E.scissorTest}else I.copy(ct).multiplyScalar(X).floor(),U.copy(ft).multiplyScalar(X).floor(),z=Dt;if(ut.bindFramebuffer(P.FRAMEBUFFER,q)&&J&&ut.drawBuffers(E,q),ut.viewport(I),ut.scissor(U),ut.setScissorTest(z),mt){let Lt=bt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,$)}else if(_t){let Lt=bt.get(E.texture),Yt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.__webglTexture,$||0,Yt)}S=-1},this.readRenderTargetPixels=function(E,k,$,J,q,mt,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){ut.bindFramebuffer(P.FRAMEBUFFER,Et);try{let Lt=E.texture,Yt=Lt.format,Jt=Lt.type;if(!B.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-J&&$>=0&&$<=E.height-q&&P.readPixels(k,$,J,q,Xt.convert(Yt),Xt.convert(Jt),mt)}finally{let Lt=R!==null?bt.get(R).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,J,q,mt,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){let Lt=E.texture,Yt=Lt.format,Jt=Lt.type;if(!B.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-J&&$>=0&&$<=E.height-q){ut.bindFramebuffer(P.FRAMEBUFFER,Et);let Ot=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ot),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),P.readPixels(k,$,J,q,Xt.convert(Yt),Xt.convert(Jt),0);let Kt=R!==null?bt.get(R).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,Kt);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Uy(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ot),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(Ot),P.deleteSync(fe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,$=0){E.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let J=Math.pow(2,-$),q=Math.floor(E.image.width*J),mt=Math.floor(E.image.height*J),_t=k!==null?k.x:0,Et=k!==null?k.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,_t,Et,q,mt),ut.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,J=null,q=0){E.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,E=arguments[1],k=arguments[2],q=arguments[3]||0,$=null);let mt,_t,Et,Lt,Yt,Jt,Ot,Kt,fe,me=E.isCompressedTexture?E.mipmaps[q]:E.image;$!==null?(mt=$.max.x-$.min.x,_t=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Lt=$.min.x,Yt=$.min.y,Jt=$.isBox3?$.min.z:0):(mt=me.width,_t=me.height,Et=me.depth||1,Lt=0,Yt=0,Jt=0),J!==null?(Ot=J.x,Kt=J.y,fe=J.z):(Ot=0,Kt=0,fe=0);let Le=Xt.convert(k.format),ge=Xt.convert(k.type),kt;k.isData3DTexture?(A.setTexture3D(k,0),kt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),kt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let Bi=P.getParameter(P.UNPACK_ROW_LENGTH),_e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xi=P.getParameter(P.UNPACK_SKIP_PIXELS),Is=P.getParameter(P.UNPACK_SKIP_ROWS),Xn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);let Bo=E.isDataArrayTexture||E.isData3DTexture,Ce=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ai=bt.get(E),zo=bt.get(k),ni=bt.get(Ai.__renderTarget),hr=bt.get(zo.__renderTarget);ut.bindFramebuffer(P.READ_FRAMEBUFFER,ni.__webglFramebuffer),ut.bindFramebuffer(P.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let ur=0;ur<Et;ur++)Bo&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,q,Jt+ur),E.isDepthTexture?(Ce&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,q,fe+ur),P.blitFramebuffer(Lt,Yt,mt,_t,Ot,Kt,mt,_t,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ce?P.copyTexSubImage3D(kt,q,Ot,Kt,fe+ur,Lt,Yt,mt,_t):P.copyTexSubImage2D(kt,q,Ot,Kt,fe+ur,Lt,Yt,mt,_t);ut.bindFramebuffer(P.READ_FRAMEBUFFER,null),ut.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ce?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(kt,q,Ot,Kt,fe,mt,_t,Et,Le,ge,me.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,q,Ot,Kt,fe,mt,_t,Et,Le,me.data):P.texSubImage3D(kt,q,Ot,Kt,fe,mt,_t,Et,Le,ge,me):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,q,Ot,Kt,mt,_t,Le,ge,me.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,q,Ot,Kt,me.width,me.height,Le,me.data):P.texSubImage2D(P.TEXTURE_2D,q,Ot,Kt,mt,_t,Le,ge,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Is),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xn),q===0&&k.generateMipmaps&&P.generateMipmap(kt),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,k,$=null,J=null,q=0){return E.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,E=arguments[2],k=arguments[3],q=arguments[4]||0),ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,$,J,q)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,ut.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Ic=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Lc=class extends Gn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Dn,h=Dn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ua=class extends Fr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sg=new Oe,id=new Mc,sc=new Ao,oc=new W,Dc=class extends Un{constructor(t=new Nn,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=s,t.ray.intersectsSphere(sc)===!1)return;sg.copy(i).invert(),id.copy(t.ray).applyMatrix4(sg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let g=c.getX(p);oc.fromBufferAttribute(u,g),og(oc,g,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)oc.fromBufferAttribute(u,p),og(oc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function og(r,t,e,n,i,s,o){let a=id.distanceSqToPoint(r);if(a<e){let l=new W;id.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Uc=class extends Gn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Pt:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new W,i=[],s=[],o=[],a=new W,l=new Oe;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(cn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(cn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Na=class extends pi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rd=class extends Na{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var ac=new W,Ju=new Dd,Ku=new Dd,Qu=new Dd,sd=class extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new W){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ac.subVectors(i[0],i[1]).add(i[0]),c=ac);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ac.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ac),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ju.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,g),Ku.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,g),Qu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ku.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ju.calc(l),Ku.calc(l),Qu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new W().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ag(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Pw(r,t){let e=1-r;return e*e*t}function Iw(r,t){return 2*(1-r)*r*t}function Lw(r,t){return r*r*t}function Ca(r,t,e,n){return Pw(r,t)+Iw(r,e)+Lw(r,n)}function Dw(r,t){let e=1-r;return e*e*e*t}function Uw(r,t){let e=1-r;return 3*e*e*r*t}function Nw(r,t){return 3*(1-r)*r*r*t}function Ow(r,t){return r*r*r*t}function Ra(r,t,e,n,i){return Dw(r,t)+Uw(r,e)+Nw(r,n)+Ow(r,i)}var Nc=class extends pi{constructor(t=new Pt,e=new Pt,n=new Pt,i=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(t,i.x,s.x,o.x,a.x),Ra(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},od=class extends pi{constructor(t=new W,e=new W,n=new W,i=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new W){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(t,i.x,s.x,o.x,a.x),Ra(t,i.y,s.y,o.y,a.y),Ra(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends pi{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ad=class extends pi{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends pi{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(t,i.x,s.x,o.x),Ca(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ld=class extends pi{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(t,i.x,s.x,o.x),Ca(t,i.y,s.y,o.y),Ca(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ag(a,l.x,c.x,h.x,u.x),ag(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Pt().fromArray(i))}return this}},cd=Object.freeze({__proto__:null,ArcCurve:rd,CatmullRomCurve3:sd,CubicBezierCurve:Nc,CubicBezierCurve3:od,EllipseCurve:Na,LineCurve:Oc,LineCurve3:ad,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:ld,SplineCurve:Bc}),hd=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new cd[i.type]().fromJSON(i))}return this}},Po=class extends hd{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Oc(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Fc(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Nc(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i),new Pt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Bc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Na(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var zr=class r extends Nn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function M(){let x=new W,C=new W,T=0,w=(e-t)/n;for(let R=0;R<=s;R++){let S=[],y=R/s,I=y*(e-t)+t;for(let U=0;U<=i;U++){let z=U/i,H=z*l+a,Z=Math.sin(H),G=Math.cos(H);C.x=I*Z,C.y=-y*n+g,C.z=I*G,u.push(C.x,C.y,C.z),x.set(Z,w,G).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-y),S.push(p++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){let y=_[S][R],I=_[S+1][R],U=_[S+1][R+1],z=_[S][R+1];(t>0||S!==0)&&(h.push(y,I,z),T+=3),(e>0||S!==s-1)&&(h.push(I,U,z),T+=3)}c.addGroup(m,T,0),m+=T}function v(x){let C=p,T=new Pt,w=new W,R=0,S=x===!0?t:e,y=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),p++;let I=p;for(let U=0;U<=i;U++){let H=U/i*l+a,Z=Math.cos(H),G=Math.sin(H);w.x=S*G,w.y=g*y,w.z=S*Z,u.push(w.x,w.y,w.z),f.push(0,y,0),T.x=Z*.5+.5,T.y=G*.5*y+.5,d.push(T.x,T.y),p++}for(let U=0;U<i;U++){let z=C+U,H=I+U;x===!0?h.push(H,H+1,z):h.push(H+1,H,z),R+=3}c.addGroup(m,R,x===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zc=class r extends zr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Oa=class extends Po{constructor(t){super(t),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Po().fromJSON(i))}return this}},Fw={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Ng(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=Hw(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let p=e;p<i;p+=e)u=r[p],f=r[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Fa(s,o,e,a,l,d,0),o}};function Ng(r,t,e,n,i){let s,o;if(i===jw(r,t,e,n)>0)for(s=t;s<e;s+=n)o=lg(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=lg(s,r[s],r[s+1],o);return o&&Kc(o,o.next)&&(za(o),o=o.next),o}function Ts(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Kc(e,e.next)||Ne(e.prev,e,e.next)===0)){if(za(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fa(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Yw(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?zw(r,n,i,s):Bw(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),za(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=kw(Ts(r),t,e),Fa(r,t,e,n,i,s,2)):o===2&&Vw(r,t,e,n,i,s):Fa(Ts(r),t,e,n,i,s,1);break}}}function Bw(r){let t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&_o(i,a,s,l,o,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zw(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=ud(d,p,t,e,n),M=ud(_,g,t,e,n),v=r.prevZ,x=r.nextZ;for(;v&&v.z>=m&&x&&x.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&_o(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&_o(a,h,l,u,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&_o(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&_o(a,h,l,u,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kw(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Kc(i,s)&&Og(i,n,n.next,s)&&Ba(i,s)&&Ba(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),za(n),za(n.next),n=r=s),n=n.next}while(n!==r);return Ts(n)}function Vw(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jw(o,a)){let l=Fg(o,a);o=Ts(o,o.next),l=Ts(l,l.next),Fa(o,t,e,n,i,s,0),Fa(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Hw(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Ng(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($w(c));for(i.sort(Gw),s=0;s<i.length;s++)e=Ww(i[s],e);return e}function Gw(r,t){return r.x-t.x}function Ww(r,t){let e=Xw(r,t);if(!e)return t;let n=Fg(e,r);return Ts(n,n.next),Ts(e,e.next)}function Xw(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&_o(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Ba(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&qw(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function qw(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function Yw(r,t,e,n){let i=r;do i.z===0&&(i.z=ud(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Zw(i)}function Zw(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ud(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $w(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function _o(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Jw(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Kw(r,t)&&(Ba(r,t)&&Ba(t,r)&&Qw(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||Kc(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Kc(r,t){return r.x===t.x&&r.y===t.y}function Og(r,t,e,n){let i=cc(Ne(r,t,e)),s=cc(Ne(r,t,n)),o=cc(Ne(e,n,r)),a=cc(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&lc(r,e,t)||s===0&&lc(r,n,t)||o===0&&lc(e,r,n)||a===0&&lc(e,t,n))}function lc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function cc(r){return r>0?1:r<0?-1:0}function Kw(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Og(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ba(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function Qw(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Fg(r,t){let e=new fd(r.i,r.x,r.y),n=new fd(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function lg(r,t,e,n){let i=new fd(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function za(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fd(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jw(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Pa=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];cg(t),hg(n,t);let o=t.length;e.forEach(cg);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,hg(n,e[l]);let a=Fw.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function cg(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function hg(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var kc=class r extends Nn{constructor(t=new Oa([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:tT,v,x=!1,C,T,w,R;m&&(v=m.getSpacedPoints(h),x=!0,f=!1,C=m.computeFrenetFrames(h,!1),T=new W,w=new W,R=new W),f||(g=0,d=0,p=0,_=0);let S=a.extractPoints(c),y=S.shape,I=S.holes;if(!Pa.isClockWise(y)){y=y.reverse();for(let tt=0,Q=I.length;tt<Q;tt++){let P=I[tt];Pa.isClockWise(P)&&(I[tt]=P.reverse())}}let z=Pa.triangulateShape(y,I),H=y;for(let tt=0,Q=I.length;tt<Q;tt++){let P=I[tt];y=y.concat(P)}function Z(tt,Q,P){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,P)}let G=y.length,K=z.length;function X(tt,Q,P){let dt,at,B,ut=tt.x-Q.x,Nt=tt.y-Q.y,bt=P.x-tt.x,A=P.y-tt.y,b=ut*ut+Nt*Nt,Y=ut*A-Nt*bt;if(Math.abs(Y)>Number.EPSILON){let nt=Math.sqrt(b),ot=Math.sqrt(bt*bt+A*A),st=Q.x-Nt/nt,vt=Q.y+ut/nt,gt=P.x-A/ot,Mt=P.y+bt/ot,Ht=((gt-st)*A-(Mt-vt)*bt)/(ut*A-Nt*bt);dt=st+ut*Ht-tt.x,at=vt+Nt*Ht-tt.y;let pt=dt*dt+at*at;if(pt<=2)return new Pt(dt,at);B=Math.sqrt(pt/2)}else{let nt=!1;ut>Number.EPSILON?bt>Number.EPSILON&&(nt=!0):ut<-Number.EPSILON?bt<-Number.EPSILON&&(nt=!0):Math.sign(Nt)===Math.sign(A)&&(nt=!0),nt?(dt=-Nt,at=ut,B=Math.sqrt(b)):(dt=ut,at=Nt,B=Math.sqrt(b/2))}return new Pt(dt/B,at/B)}let ht=[];for(let tt=0,Q=H.length,P=Q-1,dt=tt+1;tt<Q;tt++,P++,dt++)P===Q&&(P=0),dt===Q&&(dt=0),ht[tt]=X(H[tt],H[P],H[dt]);let D=[],ct,ft=ht.concat();for(let tt=0,Q=I.length;tt<Q;tt++){let P=I[tt];ct=[];for(let dt=0,at=P.length,B=at-1,ut=dt+1;dt<at;dt++,B++,ut++)B===at&&(B=0),ut===at&&(ut=0),ct[dt]=X(P[dt],P[B],P[ut]);D.push(ct),ft=ft.concat(ct)}for(let tt=0;tt<g;tt++){let Q=tt/g,P=d*Math.cos(Q*Math.PI/2),dt=p*Math.sin(Q*Math.PI/2)+_;for(let at=0,B=H.length;at<B;at++){let ut=Z(H[at],ht[at],dt);O(ut.x,ut.y,-P)}for(let at=0,B=I.length;at<B;at++){let ut=I[at];ct=D[at];for(let Nt=0,bt=ut.length;Nt<bt;Nt++){let A=Z(ut[Nt],ct[Nt],dt);O(A.x,A.y,-P)}}}let Dt=p+_;for(let tt=0;tt<G;tt++){let Q=f?Z(y[tt],ft[tt],Dt):y[tt];x?(w.copy(C.normals[0]).multiplyScalar(Q.x),T.copy(C.binormals[0]).multiplyScalar(Q.y),R.copy(v[0]).add(w).add(T),O(R.x,R.y,R.z)):O(Q.x,Q.y,0)}for(let tt=1;tt<=h;tt++)for(let Q=0;Q<G;Q++){let P=f?Z(y[Q],ft[Q],Dt):y[Q];x?(w.copy(C.normals[tt]).multiplyScalar(P.x),T.copy(C.binormals[tt]).multiplyScalar(P.y),R.copy(v[tt]).add(w).add(T),O(R.x,R.y,R.z)):O(P.x,P.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){let Q=tt/g,P=d*Math.cos(Q*Math.PI/2),dt=p*Math.sin(Q*Math.PI/2)+_;for(let at=0,B=H.length;at<B;at++){let ut=Z(H[at],ht[at],dt);O(ut.x,ut.y,u+P)}for(let at=0,B=I.length;at<B;at++){let ut=I[at];ct=D[at];for(let Nt=0,bt=ut.length;Nt<bt;Nt++){let A=Z(ut[Nt],ct[Nt],dt);x?O(A.x,A.y+v[h-1].y,v[h-1].x+P):O(A.x,A.y,u+P)}}}L(),V();function L(){let tt=i.length/3;if(f){let Q=0,P=G*Q;for(let dt=0;dt<K;dt++){let at=z[dt];it(at[2]+P,at[1]+P,at[0]+P)}Q=h+g*2,P=G*Q;for(let dt=0;dt<K;dt++){let at=z[dt];it(at[0]+P,at[1]+P,at[2]+P)}}else{for(let Q=0;Q<K;Q++){let P=z[Q];it(P[2],P[1],P[0])}for(let Q=0;Q<K;Q++){let P=z[Q];it(P[0]+G*h,P[1]+G*h,P[2]+G*h)}}n.addGroup(tt,i.length/3-tt,0)}function V(){let tt=i.length/3,Q=0;F(H,Q),Q+=H.length;for(let P=0,dt=I.length;P<dt;P++){let at=I[P];F(at,Q),Q+=at.length}n.addGroup(tt,i.length/3-tt,1)}function F(tt,Q){let P=tt.length;for(;--P>=0;){let dt=P,at=P-1;at<0&&(at=tt.length-1);for(let B=0,ut=h+g*2;B<ut;B++){let Nt=G*B,bt=G*(B+1),A=Q+dt+Nt,b=Q+at+Nt,Y=Q+at+bt,nt=Q+dt+bt;rt(A,b,Y,nt)}}}function O(tt,Q,P){l.push(tt),l.push(Q),l.push(P)}function it(tt,Q,P){j(tt),j(Q),j(P);let dt=i.length/3,at=M.generateTopUV(n,i,dt-3,dt-2,dt-1);xt(at[0]),xt(at[1]),xt(at[2])}function rt(tt,Q,P,dt){j(tt),j(Q),j(dt),j(Q),j(P),j(dt);let at=i.length/3,B=M.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);xt(B[0]),xt(B[1]),xt(B[3]),xt(B[1]),xt(B[2]),xt(B[3])}function j(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function xt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eT(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new cd[i.type]().fromJSON(i)),new r(n,t.options)}},tT={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Pt(s,o),new Pt(a,l),new Pt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pt(o,1-l),new Pt(c,1-u),new Pt(f,1-p),new Pt(_,1-m)]:[new Pt(a,1-l),new Pt(h,1-u),new Pt(d,1-p),new Pt(g,1-m)]}};function eT(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ka=class r extends Nn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new W,f=new W,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(T+x,1-v),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let v=h[m][M+1],x=h[m][M],C=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&d.push(v,x,T),(m!==n-1||l<Math.PI)&&d.push(x,C,T)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Es=class r extends Nn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new W,u=new W,f=new W;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let _=p/i*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,M=(i+1)*d+p;o.push(_,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Vc=class r extends Nn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new W,f=new W,d=new W,p=new W,_=new W,g=new W,m=new W;for(let v=0;v<=n;++v){let x=v/n*s*Math.PI*2;M(x,s,o,t,d),M(x+.01,s,o,t,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let C=0;C<=i;++C){let T=C/i*Math.PI*2,w=-e*Math.cos(T),R=e*Math.sin(T);u.x=d.x+(w*m.x+R*_.x),u.y=d.y+(w*m.y+R*_.y),u.z=d.z+(w*m.z+R*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(v/n),h.push(C/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){let C=(i+1)*(v-1)+(x-1),T=(i+1)*v+(x-1),w=(i+1)*v+x,R=(i+1)*(v-1)+x;a.push(C,T,R),a.push(T,w,R)}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2));function M(v,x,C,T,w){let R=Math.cos(v),S=Math.sin(v),y=C/x*v,I=Math.cos(y);w.x=T*(2+I)*.5*R,w.y=T*(2+I)*S*.5,w.z=T*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var kr=class extends Fr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tg,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function hc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function nT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Io=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dd=class extends Io{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:l0,endingEnd:l0}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case c0:s=t,a=2*e-n;break;case h0:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case c0:o=t,l=2*n-e;break;case h0:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,x=d*g-d*_;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+M*o[c+C]+v*o[l+C]+x*o[u+C];return s}},pd=class extends Io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},md=class extends Io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ei=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hc(e,this.TimeBufferType),this.values=hc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hc(t.times,Array),values:hc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gc:e=this.InterpolantFactoryMethodDiscrete;break;case kf:e=this.InterpolantFactoryMethodLinear;break;case bu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gc;case this.InterpolantFactoryMethodLinear:return kf;case this.InterpolantFactoryMethodSmooth:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&nT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bu,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=kf;var As=class extends Ei{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=gc;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var gd=class extends Ei{};gd.prototype.ValueTypeName="color";var _d=class extends Ei{};_d.prototype.ValueTypeName="number";var xd=class extends Io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Or.slerpFlat(s,0,o,c-a,o,c,l);return s}},Hc=class extends Ei{InterpolantFactoryMethodLinear(t){return new xd(this.times,this.values,this.getValueSize(),t)}};Hc.prototype.ValueTypeName="quaternion";Hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Ei{constructor(t,e,n){super(t,e,n)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=gc;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var vd=class extends Ei{};vd.prototype.ValueTypeName="vector";var yd=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},iT=new yd,Md=class{constructor(t){this.manager=t!==void 0?t:iT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Md.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gc=class extends Un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ju=new Oe,ug=new W,fg=new W,Sd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ug.setFromMatrixPosition(t.matrixWorld),e.position.copy(ug),fg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fg),e.updateMatrixWorld(),ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ju)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bd=class extends Sd{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wc=class extends Gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new bd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xc=class extends Gc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ud="\\[\\]\\.:\\/",rT=new RegExp("["+Ud+"]","g"),Nd="[^"+Ud+"]",sT="[^"+Ud.replace("\\.","")+"]",oT=/((?:WC+[\/:])*)/.source.replace("WC",Nd),aT=/(WCOD+)?/.source.replace("WCOD",sT),lT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),cT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),hT=new RegExp("^"+oT+aT+lT+cT+"$"),uT=["material","materials","bones","map"],wd=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rT,"")}static parseTrackName(t){let e=hT.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);uT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=wd;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aE=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ha=new W;function mi(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ha.copy(t),Ha[n]=0,Ha.normalize();let c=.5*o/(o+a),h=1-Ha.angleTo(r)/l;return Math.sign(Ha[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Uo=class extends ws{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new W,l=new W,c=new W(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,p=new W,_=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:p.set(1,0,0),f[m+0]=mi(p,l,"z","y",s,n),f[m+1]=1-mi(p,l,"y","z",s,e);break;case 1:p.set(-1,0,0),f[m+0]=1-mi(p,l,"z","y",s,n),f[m+1]=1-mi(p,l,"y","z",s,e);break;case 2:p.set(0,1,0),f[m+0]=1-mi(p,l,"x","z",s,t),f[m+1]=mi(p,l,"z","x",s,n);break;case 3:p.set(0,-1,0),f[m+0]=1-mi(p,l,"x","z",s,t),f[m+1]=1-mi(p,l,"z","x",s,n);break;case 4:p.set(0,0,1),f[m+0]=1-mi(p,l,"x","y",s,t),f[m+1]=1-mi(p,l,"y","x",s,e);break;case 5:p.set(0,0,-1),f[m+0]=mi(p,l,"x","y",s,t),f[m+1]=1-mi(p,l,"y","x",s,e);break}}};var fT="#2a62c8",dT="#3c86e6";function pT(){let r=new Lc(new Uint8Array([70,150,255]),3,1,Yc);return r.minFilter=r.magFilter=Dn,r.needsUpdate=!0,r}function mT(r){let t=document.createElement("canvas");t.width=192,t.height=256;let e=t.getContext("2d");e.fillStyle="#f3f0e9",e.fillRect(0,0,192,256),e.strokeStyle="rgba(40,40,48,0.75)",e.lineWidth=2;let n=r*9301+49297,i=()=>(n=(n*9301+49297)%233280,n/233280);for(let o=0;o<11;o++){let a=26+o*20,l=18;e.beginPath(),e.moveTo(l,a);let c=120+i()*54;for(;l<c;)l+=6+i()*8,e.lineTo(l,a+(i()-.5)*7);e.stroke()}let s=new Uc(t);return s.colorSpace=In,s}function gT(){let r=new Br(.62,.82,10,12),t=r.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),i=t.getY(e);t.setZ(e,Math.sin(n*9+i*4)*.025+Math.sin(i*13-n*3)*.02+(Math.random()-.5)*.018)}return r.computeVertexNormals(),r}function _T(){let r=new Oa,t=10,e=.62,n=.78;for(let s=0;s<t*2;s++){let o=s/(t*2)*Math.PI*2,a=(s+1)/(t*2)*Math.PI*2,l=s%2?e:n;s===0&&r.moveTo(Math.cos(o)*l,Math.sin(o)*l),r.lineTo(Math.cos(o+.04)*l,Math.sin(o+.04)*l),r.lineTo(Math.cos(a-.04)*l,Math.sin(a-.04)*l)}let i=new Po;return i.absarc(0,0,.24,0,Math.PI*2,!0),r.holes.push(i),new kc(r,{depth:.22,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:6}).center()}var Qc=class{constructor(t){this.canvas=t,this.progress=0,this.visible=!1;try{this.renderer=new Pc({canvas:t,antialias:(window.devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"})}catch(ft){console.warn("[services] WebGL unavailable",ft),this.failed=!0;return}let e=this.renderer;e.setClearColor(0,0),e.outputColorSpace=In;let n=this.scene=new Ic;this.camera=new Ln(34,1,.1,100),this.camera.position.set(0,0,9);let i=pT(),s=new kr({color:new jt(fT),gradientMap:i}),o=new kr({color:new jt(dT),gradientMap:i}),a=new kr({color:new jt("#173c86"),gradientMap:i}),l=new Co({color:new jt("#0d2348")}),c=[],h=(ft,Dt)=>(n.add(ft),c.push({obj:ft,...Dt}),ft.visible=!1,ft),u=new hn,f=new hn,d=new hn,p=new hn;f.add(new de(new Es(1.75,.09,12,120),s)),d.add(new de(new Es(1.4,.075,12,100),s)),p.add(new de(new Es(1.08,.065,12,90),o));let _=new de(new Vc(.46,.15,140,18,2,3),o);p.add(_),d.add(p),f.add(d),u.add(f);let g=new de(new zr(.05,.05,5.4,10),a);g.rotation.z=Math.PI/2,u.add(g);for(let ft of[-1,1]){let Dt=new de(new ka(.2,20,14),o);Dt.position.x=ft*2.7,u.add(Dt)}this.rings=[f,d,p,_],h(u,{c0:.22,c1:.95,from:[-6.5,4.2,-3],to:[6.2,-3.4,.8],scale:1.15,spin:[.5,1.6,.4],base:[.4,-.5,.2]});let m=new hn,M=new de(new Uo(1.5,.08,1,2,.03),s),v=new hn,x=new de(new Uo(1.5,1,.07,2,.03),s),C=new de(new Br(1.32,.84),l);C.position.z=.04,x.position.y=.5,C.position.y=.5,v.add(x,C),v.position.set(0,.04,-.5),v.rotation.x=-.35,m.add(M,v),h(m,{c0:0,c1:.42,from:[5.8,-4.2,-1.5],to:[-5.2,3.8,-2.5],scale:1,spin:[.9,1.3,.4],base:[.5,.6,0]});let T=new hn;T.add(new de(new Uo(.62,1.22,.08,3,.08),o));let w=new de(new Br(.52,1.08),l);w.position.z=.045,T.add(w),h(T,{c0:.1,c1:.55,from:[-5.6,-3.9,.5],to:[3.4,4.6,-1.2],scale:.95,spin:[1.6,1.1,.9],base:[.3,.2,.6]});let R=new de(_T(),s);h(R,{c0:.32,c1:.78,from:[6.4,1.2,-2.5],to:[-6.4,-2.6,-.5],scale:1,spin:[.4,.8,2.2],base:[.6,.4,0]});let S=new hn;for(let[ft,Dt,L]of[[-.55,-.05,.42],[0,.18,.58],[.55,-.02,.45],[.22,-.18,.4],[-.25,-.2,.38]]){let V=new de(new ka(L,20,14),o);V.position.set(ft,Dt,0),V.scale.z=.7,S.add(V)}h(S,{c0:.52,c1:1,from:[-6.5,-3.2,-2.5],to:[5.6,3.4,-3.5],scale:1.25,spin:[.2,.9,.3],base:[0,0,0]});let y=new hn;y.add(new de(new Es(.42,.08,10,40),s));let I=new de(new zr(.38,.38,.03,32),new kr({color:new jt("#9fd3ff"),gradientMap:i,transparent:!0,opacity:.35}));I.rotation.x=Math.PI/2,y.add(I);let U=new de(new zr(.07,.09,.9,12),a);U.position.set(.52,-.52,0),U.rotation.z=Math.PI/4,y.add(U),h(y,{c0:.44,c1:.92,from:[4.6,-5,.2],to:[-3.6,4.8,-1.4],scale:1.1,spin:[1.1,.7,1.4],base:[.2,.5,.3]});let z=new hn,H=new de(new zc(.5,1.1,24,1,!0),s);H.material=s.clone(),H.material.side=fi,H.rotation.z=-Math.PI/2,z.add(H);let Z=new de(new zr(.08,.08,.45,10),a);Z.position.set(-.25,-.3,0),z.add(Z),h(z,{c0:.68,c1:1.12,from:[6.2,3.2,-1.2],to:[-2.6,-5.2,1],scale:1,spin:[.8,1.5,.6],base:[.3,.8,0]});let G=gT();for(let ft=0;ft<8;ft++){let Dt=new de(G,new kr({map:mT(ft+1),gradientMap:i,side:fi})),L=ft/7*2-1,V=.04+ft*.11;h(Dt,{c0:V,c1:V+.38,from:[6.5-ft%3,-4.6+L*1.4,-2+ft%4*1.1],to:[-6.5+ft%2*2,4.4+L*1.2,-1.5+ft%3*1.2],scale:.8+ft%3*.35,spin:[2.4+ft*.2,1.8,2.9-ft*.15],base:[ft,ft*2,ft*.5],paper:!0})}this.props=c;let K=220,X=new Float32Array(K*3);for(let ft=0;ft<K;ft++)X[ft*3]=(Math.random()-.5)*16,X[ft*3+1]=(Math.random()-.5)*10,X[ft*3+2]=(Math.random()-.5)*6-1;let ht=new Nn;ht.setAttribute("position",new Re(X,3)),this.specks=new Dc(ht,new Ua({color:16777215,size:.04,transparent:!0,opacity:.8,depthWrite:!1})),n.add(this.specks);let D=new Wc(new jt("#d8f4ff"),2.6);D.position.set(-3,5,6);let ct=new Xc(new jt("#25427e"),1.1);n.add(D,ct),this.resize()}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.narrow=t/e<.9}setProgress(t){this.progress=t}render(t){if(this.failed||!this.visible)return;let e=this.progress,n=this.narrow?.55:1;for(let l of this.props){let c=(e-l.c0)/(l.c1-l.c0),h=c>-.02&&c<1.02;if(l.obj.visible=h,!h)continue;let u=c*c*(3-2*c),f=Math.sin(c*Math.PI)*.9;l.obj.position.set(($c.lerp(l.from[0],l.to[0],u)+f*.4)*n,$c.lerp(l.from[1],l.to[1],u)+f*.3+Math.sin(t*.6+l.base[0])*.05,$c.lerp(l.from[2],l.to[2],u));let d=l.paper?t*.35:t*.12;l.obj.rotation.set(l.base[0]+l.spin[0]*(c+d),l.base[1]+l.spin[1]*(c+d),l.base[2]+l.spin[2]*(c+d)*.6),l.obj.scale.setScalar(l.scale*(this.narrow?.75:1))}let[i,s,o,a]=this.rings;i.rotation.y=e*Math.PI*1.6+t*.18,s.rotation.x=e*Math.PI*2.2+t*.23,o.rotation.y=-e*Math.PI*2.8-t*.3,a.rotation.z=t*.4+e*4,this.specks.rotation.y=t*.02+e*.6,this.specks.position.y=-e*1.5,this.renderer.render(this.scene,this.camera)}};var No=116,Bg=880+No,xT={about:125+No,services:350+No},Ps=[{x:72,y:58,z:-240,ry:42,rz:-5,s:.9,o:0},{x:35,y:29,z:-60,ry:24,rz:-3,s:.95,o:1},{x:3,y:11,z:60,ry:0,rz:0,s:1,o:1},{x:-30,y:-6,z:-140,ry:-30,rz:1.5,s:.92,o:1},{x:-50,y:-21,z:-380,ry:-96,rz:3,s:.86,o:.8},{x:-64,y:-33,z:-640,ry:-150,rz:4,s:.8,o:0}],vT=Object.keys(Ps[0]);function yT(r,t,e,n,i){let s=i*i,o=s*i;return .5*(2*t+(-r+e)*i+(2*r-5*t+4*e-n)*s+(-r+3*t-3*e+n)*o)}function MT(r,t){let e=Math.min(Ps.length-1.0001,Math.max(0,r+1)),n=Math.floor(e),i=e-n,s=Ps[Math.max(0,n-1)],o=Ps[n],a=Ps[n+1],l=Ps[Math.min(Ps.length-1,n+2)];for(let c of vT)t[c]=yT(s[c],o[c],a[c],l[c],i);return t}function ST(r){let t=r.textContent.trim().split(/\s+/);r.textContent="";let e=[];return t.forEach((n,i)=>{let s=document.createElement("span");s.className="word";for(let o of n){let a=document.createElement("span");a.className="ch",a.textContent=o,s.appendChild(a),e.push(a)}r.appendChild(s),i<t.length-1&&r.appendChild(document.createTextNode(" "))}),e}function zg({reduced:r,smooth:t}){let e=document.querySelector(".story"),n=e.querySelector(".story__pin"),i=e.querySelector(".about__title"),s=e.querySelector(".about__video"),o=s.querySelector("video"),a=e.querySelector(".services"),l=a.querySelector(".services__title"),c=[...a.querySelectorAll(".svc-card")],h=e.querySelector(".story__fade"),u=e.querySelector(".about__line path"),f=e.querySelector(".about"),d=.243,p={k:0},_=()=>(1-p.k)*d*window.innerHeight,g=()=>{f.style.transform=`translate3d(0, ${_().toFixed(2)}px, 0)`},m=[...i.querySelectorAll(".aline")],M=[{spread:.55,rise:-.16,curve:.02,z:-260,ry:34,rx:18,rz:-12},{spread:.42,rise:-.05,curve:.03,z:-520,ry:-26,rx:30,rz:-6},{spread:.9,rise:.06,curve:.05,z:-1100,ry:40,rx:50,rz:8}],v=()=>parseFloat(getComputedStyle(i).fontSize)||100,x=m.map((F,O)=>{let it=[];return F.querySelectorAll(".split").forEach(rt=>it.push(...ST(rt))),{chars:it,cfg:M[O]}}),C=()=>Math.min(Math.max(window.innerWidth*(window.innerWidth<640?.26:.215),96),460),T=[...i.querySelectorAll(".aline--mid > .split")],w={k:0},R=0,S=100,y=()=>{S=v(),R=C(),s.style.width=`${R}px`},I=()=>{let F=(R+.44*S-.26*S)/2*(1-w.k);T[0].style.transform=`translate3d(${F.toFixed(2)}px, 0, 0)`,T[1].style.transform=`translate3d(${(-F).toFixed(2)}px, 0, 0)`;let O=(50*(1-w.k)).toFixed(3);s.style.clipPath=`inset(0 ${O}% 0 ${O}%)`};y();let U={fade:0,t:0},z={c:0},H=null,Z=null,G=()=>{let F=s.getBoundingClientRect(),O=n.getBoundingClientRect(),it=_();Z={top:F.top-O.top-it,left:F.left-O.left,right:O.right-F.right,bottom:O.bottom-F.bottom+it}},K=()=>{if(U.fade<=.001){a.classList.remove("is-open");return}a.classList.add("is-open"),Z||G();let F=U.t,O=Z.top*(1-F),it=Z.left*(1-F),rt=Z.right*(1-F),j=Z.bottom*(1-F);a.style.clipPath=`inset(${O.toFixed(1)}px ${rt.toFixed(1)}px ${j.toFixed(1)}px ${it.toFixed(1)}px)`,a.style.opacity=U.fade},X={},ht=()=>{let F=window.innerWidth<760,O=c.length;c.forEach((it,rt)=>{let j=.25+z.c*(O-1+1.45)-rt,xt=j>=-1&&j<=4;if(it._on!==xt&&(it._on=xt,it.style.visibility=xt?"visible":"hidden",xt||(it.style.opacity=0)),!xt)return;MT(j,X);let tt=F?X.x*.55:X.x,Q=F?X.y*1.05:X.y;it.style.opacity=Math.max(0,Math.min(1,X.o)).toFixed(3),it.style.transform=`translate(-50%, -50%) translate3d(${tt}vw, ${Q}vh, ${X.z}px) rotateY(${X.ry}deg) rotateZ(${X.rz}deg) scale(${X.s})`}),H&&H.setProgress(z.c)},D=Qt.timeline({defaults:{ease:"none"}}),ct=Qt.timeline({defaults:{ease:"none"}});x.forEach(({chars:F,cfg:O},it)=>{let rt=(F.length-1)/2;ct.fromTo(F,{x:j=>(j-rt)*O.spread*v(),y:j=>((j-rt)*O.rise+Math.pow(j-rt,2)*O.curve)*v(),z:j=>O.z-Math.abs(j-rt)*30,rotationY:j=>O.ry+(j-rt)*4,rotationX:O.rx,rotationZ:j=>O.rz+(j-rt)*1.5,opacity:0},{x:0,y:0,z:0,rotationY:0,rotationX:0,rotationZ:0,opacity:1,duration:62,ease:"power2.out",stagger:{each:1.1,from:"center"}},6+it*6)});let ft=u.getTotalLength();Qt.set(u,{strokeDasharray:ft,strokeDashoffset:ft}),ct.to(u,{strokeDashoffset:0,duration:190,ease:"power1.inOut"},0);let Dt=e.querySelectorAll(".about__grid .eyebrow, .founder, .about__copy p");ct.fromTo(Dt,{opacity:0,y:34},{opacity:1,y:0,duration:40,stagger:9,ease:"power2.out"},40),ct.to(p,{k:1,duration:95,ease:"power2.out",onUpdate:g},100),ct.to(w,{k:1,duration:82,ease:"power2.inOut",onUpdate:I},104),ct.to(U,{fade:1,duration:26,onUpdate:K},214),ct.to(U,{t:1,duration:104,ease:"power3.inOut",onUpdate:K},236),ct.fromTo(l,{opacity:.25,y:40},{opacity:1,y:0,duration:80,ease:"power2.out"},262),ct.to(z,{c:1,duration:520,onUpdate:ht},300),ct.to(h,{opacity:1,duration:54},826),ct.set({},{},Bg-No),D.add(ct,No);let L=Wt.create({trigger:e,start:"top top",end:"bottom bottom",animation:D,scrub:t||r?!0:.5,invalidateOnRefresh:!0,onRefreshInit:()=>{y(),Z=null},onRefresh:()=>{g(),I(),K(),ht()}}),V=!1;return Wt.create({trigger:e,start:"top bottom",end:()=>`top+=${window.innerHeight*(3.4+No/100)} top`,onToggle:F=>{r||(F.isActive&&!V?(V=!0,o.play().catch(()=>{})):!F.isActive&&V&&(V=!1,o.pause()))}}),Wt.create({trigger:e,start:"top 200%",once:!0,onEnter:()=>{H=new Qc(a.querySelector(".services__gl")),H.setProgress(z.c)}}),I(),g(),K(),ht(),{st:L,anchor(F){let O=xT[F];return L.start+(L.end-L.start)*(O/Bg)},resize(){H&&H.resize(),y(),Z=null,I(),ht(),K()},tick(F,O){if(!H)return;let it=window.innerHeight;H.visible=U.fade>.01&&O>L.start-it&&O<L.end+it,H.render(F)}}}var Od=(r,t)=>r.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function kg(r){let t=Math.max(14,Math.round((r.clientWidth||300)/8.6));return r.childElementCount===t?[...r.children]:(r.textContent="",Array.from({length:t},()=>r.appendChild(document.createElement("i"))))}function Vg(r,t){let e=1-Math.pow(1-t,2.2),n=.22+2.4*Math.pow(t,1.6),i=r<n?Math.sqrt(1-r/n*(r/n)):0,s=Math.min(1,Math.max(0,(t-.78)/.22));return e*(i+(1-i)*s*s*(3-2*s))}function Hg({reduced:r}){let t=document.querySelector(".metrics"),e=t.querySelector(".metrics__num"),n=t.querySelector(".metrics__big em"),i=t.querySelector(".metrics__aside"),s=[...t.querySelectorAll(".stat")].map(u=>{let f=u.querySelector(".stat__bars"),d=u.querySelector(".stat__value");return{bars:f,value:d,text:u.querySelector(".stat__text"),stripes:kg(f),target:parseFloat(d.dataset.count),dec:+(d.dataset.decimals||0),suffix:d.dataset.suffix||"",g:0,h:0}}),o=()=>s.forEach(u=>{u.h=u.bars.offsetHeight});o();let a=u=>{let f=u.stripes.length;for(let _=0;_<f;_++)u.stripes[_].style.transform=`scaleY(${Vg(_/(f-1),u.g).toFixed(4)})`;let d=Vg(0,u.g);u.text.style.transform=`translate3d(0, ${((1-d)*u.h).toFixed(1)}px, 0)`;let p=u.target*Math.min(1,u.g*1.05);u.value.textContent=Od(p,u.g<1&&u.target<10?Math.max(u.dec,2):u.dec)+u.suffix};if(r)return{resize(){}};let l={v:7.2};Qt.set([e,n],{opacity:0,filter:"blur(14px)"}),Qt.set(i,{opacity:0,y:20}),Qt.set(s.map(u=>u.text),{opacity:0}),e.textContent="$7.2",s.forEach(a);let c=!1,h=()=>{if(c)return;c=!0;let u=Qt.timeline();u.to([e,n],{opacity:1,filter:"blur(0px)",duration:1.1,ease:"power2.out",stagger:.2},0).to(l,{v:11.2,duration:2.4,ease:"power3.out",onUpdate:()=>{e.textContent="$"+Od(l.v,1)}},0).to(i,{opacity:1,y:0,duration:.9,ease:"power3.out"},.3),s.forEach((f,d)=>{let p=.2+d*.2;u.to(f.text,{opacity:1,duration:.6,ease:"power1.out"},p).to(f,{g:1,duration:2,ease:"power1.inOut",onUpdate:()=>a(f),onComplete:()=>{f.value.textContent=Od(f.target,f.dec)+f.suffix}},p)})};return Wt.create({trigger:t,start:()=>window.innerWidth<=980?"top 65%":"top 22%",once:!0,onEnter:h}),{resize(){s.forEach(u=>{u.stripes=kg(u.bars)}),o(),s.forEach(a)}}}var Gg=()=>window.innerWidth>980;function Wg({reduced:r}){let t=document.querySelector(".team"),e=t.querySelector(".team__bars"),n=t.querySelector(".team__head"),i=[...t.querySelectorAll(".member")],s=Array.from({length:18},()=>e.appendChild(document.createElement("i"))),o=[],a=0,l=()=>{n0(a,window.innerWidth,window.innerHeight,0,o),o.forEach((u,f)=>{s[f].style.transform=`translate3d(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px, 0) scale(${(u.w/100).toFixed(4)}, ${(u.h/100).toFixed(4)})`})};l(),Wt.create({trigger:t,start:"top bottom",end:"top -60%",scrub:!0,onUpdate:u=>{a=Qt.utils.clamp(0,1,(u.progress-100/160)/(60/160)),l()}});let c=i.map(u=>u.querySelector(".member__num"));if(r)return{resize:l};let h=n.querySelectorAll(".team__title, .team__sub");return Qt.set(h,{opacity:0,filter:"blur(14px)",y:24}),Qt.set(i,{opacity:0,y:46}),c.forEach(u=>{u.textContent="0+"}),Wt.create({trigger:t,start:()=>Gg()?"top -38%":"top -10%",once:!0,onEnter:()=>Qt.to(h,{opacity:1,filter:"blur(0px)",y:0,duration:1.2,stagger:.16,ease:"power3.out"})}),Wt.create({trigger:t,start:()=>Gg()?"top -52%":"top -40%",once:!0,onEnter:()=>{Qt.to(i,{opacity:1,y:0,duration:1.1,stagger:.14,ease:"power3.out"}),c.forEach((u,f)=>{let d=parseFloat(u.dataset.count),p={v:0};Qt.to(p,{v:d,duration:2.6,delay:.25+f*.12,ease:"power2.out",onUpdate:()=>{u.textContent=Math.round(p.v).toLocaleString("en-US")+(u.dataset.suffix||"")}})})}}),{resize:l}}Qt.registerPlugin(Wt,as);Wt.config({ignoreMobileResize:!0});as.create("menuOpen","0.45,0,0.15,1");var Fo=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.classList.add("js");"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);var ei=null;Fo||(ei=new Km({lerp:.06,smoothWheel:!0,wheelMultiplier:.95,touchMultiplier:1.4}),ei.on("scroll",Wt.update),Qt.ticker.add(r=>ei.raf(r*1e3)),Qt.ticker.lagSmoothing(0),ei.stop());var eh=()=>ei?ei.scroll:window.scrollY,bT=document.querySelector(".hero"),wT=document.querySelector(".hero__content"),je=new Fl(document.querySelector(".hero__gl")),gi={y:0,e:0,out:0},Vd={mix:0},TT=[],Bd=window.innerWidth,_i=window.innerHeight,ET=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Wa=()=>{let r=.046*_i,t=(-gi.y+gi.out)*_i;wT.style.transform=`translate3d(0, ${(-t).toFixed(2)}px, 0)`,je.state.shift=t,je.state.mix=Vd.mix;let e=_i,n=0;if(gi.e>0){let i=_i-gi.e*_i;i<=5*r?e=5*r:(e=r*Math.floor(i/r),n=(e+r-i)/r)}if(je.state.heroBottom=(e-gi.out*_i)/_i,gi.e>0){let i=15.25+33*(1-ET(.3,.8,gi.e)),s=1-Math.pow(Math.min(1,gi.out/.33),3);je.setBars(i0(e,n,i,s,gi.out*_i,Bd,_i,TT))}else je.setBars([])},Zg=Qt.timeline({defaults:{ease:"none"},onUpdate:Wa});Zg.to(gi,{y:-.735,duration:73.5},0).to(gi,{e:.92,duration:92},73.5).to(gi,{out:.33,duration:33},165.5).set({},{},200);var $g=1/0;Wt.create({trigger:bT,start:"top top",end:"bottom bottom",animation:Zg,scrub:!0,onRefresh:r=>{$g=r.end+_i}});Wa();var Fd=Qt.to(Vd,{mix:1,duration:2.6,ease:"power4.out",paused:!0,onUpdate:Wa}),Jg=()=>{!Fd.isActive()&&Fd.progress()===0&&Fd.play()},th=zg({reduced:Fo,smooth:!!ei}),AT=Hg({reduced:Fo}),CT=Wg({reduced:Fo}),Oo=document.getElementById("nav"),zd=document.getElementById("nav-toggle");zd.addEventListener("click",()=>{let r=!Oo.classList.contains("is-open");Oo.classList.toggle("is-open",r),zd.setAttribute("aria-expanded",String(r))});var jc=0,Xg=()=>{let r=eh();if(r>2&&Jg(),Oo.classList.contains("is-open")){jc=r;return}r>2&&r>jc+.5?Oo.classList.add("is-hidden"):(r<=2||r<jc-2)&&Oo.classList.remove("is-hidden"),jc=r};ei?ei.on("scroll",Xg):window.addEventListener("scroll",Xg,{passive:!0});var RT=r=>{if(r==="#top")return 0;if(r==="#about")return th.anchor("about");if(r==="#services")return th.anchor("services");let t=document.querySelector(r);return t?t.getBoundingClientRect().top+eh():null};document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e.length<2)return;let n=RT(e);if(n!=null)if(r.preventDefault(),Oo.classList.remove("is-open"),zd.setAttribute("aria-expanded","false"),ei){let i=Math.abs(n-eh());ei.scrollTo(n,{duration:Math.min(2.6,.9+i/(_i*8))})}else window.scrollTo({top:n,behavior:Fo?"auto":"smooth"})});var nh=!1;Qt.ticker.add(r=>{let t=eh();nh&&t<$g&&je.render(r),th.tick(r,t)});var qg=0,PT=window.matchMedia("(pointer: coarse)").matches;window.addEventListener("resize",()=>{PT&&window.innerWidth===Bd||(clearTimeout(qg),qg=setTimeout(()=>{Bd=window.innerWidth,_i=window.innerHeight,je.resize(),nh&&je.state.hyp===0&&(je.state.pitch=je.restPitch),th.resize(),AT.resize(),CT.resize(),Wa(),Wt.refresh()},120))});document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Wt.refresh());var Ga=window.matchMedia("(min-width: 981px)").matches,kd=document.querySelector(".nav__logo");[...kd.childNodes].forEach(r=>{if(r.nodeType!==3)return;let t=document.createDocumentFragment();for(let e of r.textContent){let n=document.createElement("span");n.className="nav__logo-ch",n.textContent=e,t.appendChild(n)}r.replaceWith(t)});var Ee={logo:kd,logoParts:kd.querySelectorAll(".logo-u, .nav__logo-ch"),menu:document.querySelector(".nav__menu"),menuLinks:[...document.querySelectorAll(".nav__menu a")],cta:document.querySelector(".nav__cta"),toggle:document.querySelector(".nav__toggle"),words:document.querySelectorAll(".hero__title .w"),sub:document.querySelector(".hero__sub"),heroCta:document.querySelector(".hero__cta")},Yg=0;function IT(){if(nh=!0,Ga){let e=Ee.menu.style.width;Ee.menu.style.width="auto",Yg=Ee.menu.offsetWidth,Ee.menu.style.width=e}let r=Qt.timeline(),t=(e,n,i,s,o)=>{r.set(e,{scale:0,opacity:1,transformOrigin:o},n).to(e,{keyframes:[{scale:i,duration:s,ease:"none"},{scale:1,duration:.23,ease:"sine.inOut"}]},n)};r.set(je.state,{reveal:.15,pitch:1400,hyp:12,flash:0},0).to(je.state,{reveal:1,duration:.03,ease:"none"},.22).set(je.state,{flash:1},.24).to(je.state,{flash:0,duration:.5,ease:"power3.out"},.25).to(je.state,{pitch:()=>je.restPitch,duration:.75,ease:"expo.out"},.17).to(je.state,{keyframes:[{hyp:.64,duration:.15},{hyp:.08,duration:.18},{hyp:-.12,duration:.22},{hyp:0,duration:.4}],ease:"sine.inOut"},.12),t(Ee.logo,1,1.08,.32,"8px -16px"),r.to(Ee.logoParts,{opacity:1,duration:.15,stagger:.07},1.12),Ga&&(t(Ee.menu,1.22,1.06,.23,"50% 50%"),r.to(Ee.menu,{width:Yg,duration:.93,ease:"menuOpen"},1.69).to(Ee.menuLinks.slice(1),{opacity:1,y:0,duration:.3,ease:"power2.out",stagger:.15},1.95).add(()=>Qt.set(Ee.menu,{clearProps:"width,overflow,justifyContent"}),2.7)),t(Ee.cta,1.35,1.09,.3,"50% 50%"),Ga||t(Ee.toggle,1.4,1.08,.3,"50% 50%"),r.to(Ee.words,{opacity:1,filter:"blur(0px)",y:0,duration:.8,ease:"power2.out",stagger:.13},1.59).to(Ee.sub,{opacity:1,filter:"blur(0px)",y:0,duration:.8,ease:"power2.out"},2.32),t(Ee.heroCta,2.72,1.06,.35,"50% 50%"),r.add(()=>{document.body.classList.remove("is-loading"),ei&&ei.start()},2.9).add(Jg,4.37)}if(Fo)nh=!0,Object.assign(je.state,{reveal:1,hyp:0,flash:0,pitch:je.restPitch}),Vd.mix=1,Wa(),Mu({el:document.getElementById("preloader"),reduced:!0,onDone:()=>document.body.classList.remove("is-loading")});else{if(Qt.set([Ee.logo,Ee.cta,Ee.heroCta],{scale:0}),Ga||Qt.set(Ee.toggle,{scale:0}),Qt.set(Ee.logoParts,{opacity:0}),Qt.set(Ee.words,{opacity:0,filter:"blur(8px)",y:14}),Qt.set(Ee.sub,{opacity:0,filter:"blur(4px)",y:6}),Ga){Qt.set(Ee.menu,{xPercent:-50,x:0,scale:0});let r=Ee.menuLinks[0].offsetWidth+16;Qt.set(Ee.menu,{width:r,overflow:"hidden",justifyContent:"flex-start"}),Qt.set(Ee.menuLinks.slice(1),{opacity:0,y:6})}Mu({el:document.getElementById("preloader"),reduced:!1,onReveal:IT})}})();
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

gsap/utils/paths.js:
  (*!
   * paths 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.13.0
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
