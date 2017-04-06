(function(){"use strict"
function r(r){function t(t){return function(e){return r(t,e)}}return t.arity=2,t.func=r,t}function t(r){function t(t){return function(e){return function(n){return r(t,e,n)}}}return t.arity=3,t.func=r,t}function e(r){function t(t){return function(e){return function(n){return function(o){return r(t,e,n,o)}}}}return t.arity=4,t.func=r,t}function n(r){function t(t){return function(e){return function(n){return function(o){return function(u){return r(t,e,n,o,u)}}}}}return t.arity=5,t.func=r,t}function o(r){function t(t){return function(e){return function(n){return function(o){return function(u){return function(a){return r(t,e,n,o,u,a)}}}}}}return t.arity=6,t.func=r,t}function u(r){function t(t){return function(e){return function(n){return function(o){return function(u){return function(a){return function(c){return r(t,e,n,o,u,a,c)}}}}}}}return t.arity=7,t.func=r,t}function a(r){function t(t){return function(e){return function(n){return function(o){return function(u){return function(a){return function(c){return function(i){return r(t,e,n,o,u,a,c,i)}}}}}}}}return t.arity=8,t.func=r,t}function c(r){function t(t){return function(e){return function(n){return function(o){return function(u){return function(a){return function(c){return function(i){return function(_){return r(t,e,n,o,u,a,c,i,_)}}}}}}}}}return t.arity=9,t.func=r,t}function i(r,t,e){return 2===r.arity?r.func(t,e):r(t)(e)}function _(r,t,e,n){return 3===r.arity?r.func(t,e,n):r(t)(e)(n)}function l(r,t,e,n,o){return 4===r.arity?r.func(t,e,n,o):r(t)(e)(n)(o)}function f(r,t,e,n,o,u){return 5===r.arity?r.func(t,e,n,o,u):r(t)(e)(n)(o)(u)}var s=function(){function e(r,t){return r/t|0}function n(r,t){return r%t}function o(r,t){if(0===t)throw new Error("Cannot perform mod 0. Division by zero error.")
var e=r%t,n=0===r?0:t>0?r>=0?e:e+t:-o(-r,-t)
return n===t?0:n}function u(r,t){return Math.log(t)/Math.log(r)}function a(r){return-r}function c(r){return r<0?-r:r}function i(r,t){return d.cmp(r,t)<0?r:t}function _(r,t){return d.cmp(r,t)>0?r:t}function l(r,t,e){return d.cmp(e,r)<0?r:d.cmp(e,t)>0?t:e}function f(r,t){return{ctor:k[d.cmp(r,t)+1]}}function s(r,t){return r!==t}function h(r){return!r}function v(r){return r===1/0||r===-1/0}function p(r){return 0|r}function g(r){return r*Math.PI/180}function m(r){return 2*Math.PI*r}function b(r){var t=r._0,e=r._1
return d.Tuple2(t*Math.cos(e),t*Math.sin(e))}function y(r){var t=r._0,e=r._1
return d.Tuple2(Math.sqrt(t*t+e*e),Math.atan2(e,t))}var k=["LT","EQ","GT"]
return{div:r(e),rem:r(n),mod:r(o),pi:Math.PI,e:Math.E,cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,atan2:r(Math.atan2),degrees:g,turns:m,fromPolar:b,toPolar:y,sqrt:Math.sqrt,logBase:r(u),negate:a,abs:c,min:r(i),max:r(_),clamp:t(l),compare:r(f),xor:r(s),not:h,truncate:p,ceiling:Math.ceil,floor:Math.floor,round:Math.round,toFloat:function(r){return r},isNaN:isNaN,isInfinite:v}}(),d=function(){function t(r,t){for(var n,o=[],u=e(r,t,0,o);u&&(n=o.pop());)u=e(n.x,n.y,0,o)
return u}function e(r,t,n,o){if(n>100)return o.push({x:r,y:t}),!0
if(r===t)return!0
if("object"!=typeof r){if("function"==typeof r)throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.')
return!1}if(null===r||null===t)return!1
if(r instanceof Date)return r.getTime()===t.getTime()
if(!("ctor"in r)){for(var u in r)if(!e(r[u],t[u],n+1,o))return!1
return!0}if("RBNode_elm_builtin"!==r.ctor&&"RBEmpty_elm_builtin"!==r.ctor||(r=et(r),t=et(t)),"Set_elm_builtin"===r.ctor&&(r=_elm_lang$core$Set$toList(r),t=_elm_lang$core$Set$toList(t)),"::"===r.ctor){for(var a=r,c=t;"::"===a.ctor&&"::"===c.ctor;){if(!e(a._0,c._0,n+1,o))return!1
a=a._1,c=c._1}return a.ctor===c.ctor}if("_Array"===r.ctor){var i=Yr.toJSArray(r),_=Yr.toJSArray(t)
if(i.length!==_.length)return!1
for(var l=0;l<i.length;l++)if(!e(i[l],_[l],n+1,o))return!1
return!0}if(!e(r.ctor,t.ctor,n+1,o))return!1
for(var u in r)if(!e(r[u],t[u],n+1,o))return!1
return!0}function n(r,t){if("object"!=typeof r)return r===t?p:r<t?v:g
if(r instanceof String){var e=r.valueOf(),o=t.valueOf()
return e===o?p:e<o?v:g}if("::"===r.ctor||"[]"===r.ctor){for(;"::"===r.ctor&&"::"===t.ctor;){var u=n(r._0,t._0)
if(u!==p)return u
r=r._1,t=t._1}return r.ctor===t.ctor?p:"[]"===r.ctor?v:g}if("_Tuple"===r.ctor.slice(0,6)){var u,a=r.ctor.slice(6)-0
if(0===a)return p
if(a>=1){if((u=n(r._0,t._0))!==p)return u
if(a>=2){if((u=n(r._1,t._1))!==p)return u
if(a>=3){if((u=n(r._2,t._2))!==p)return u
if(a>=4){if((u=n(r._3,t._3))!==p)return u
if(a>=5){if((u=n(r._4,t._4))!==p)return u
if(a>=6){if((u=n(r._5,t._5))!==p)return u
if(a>=7)throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")}}}}}}return p}throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")}function o(r,t){return{ctor:"_Tuple2",_0:r,_1:t}}function u(r){return new String(r)}function a(r){return b++}function c(r,t){var e={}
for(var n in r)e[n]=r[n]
for(var n in t)e[n]=t[n]
return e}function i(r,t){return{ctor:"::",_0:r,_1:t}}function _(r,t){if("string"==typeof r)return r+t
if("[]"===r.ctor)return t
var e=i(r._0,y),n=e
for(r=r._1;"[]"!==r.ctor;)n._1=i(r._0,y),r=r._1,n=n._1
return n._1=t,e}function l(r,t){return function(e){throw new Error("Ran into a `Debug.crash` in module `"+r+"` "+s(t)+"\nThe message provided by the code author is:\n\n    "+e)}}function f(r,t,e){return function(n){throw new Error("Ran into a `Debug.crash` in module `"+r+"`\n\nThis was caused by the `case` expression "+s(t)+".\nOne of the branches ended with a crash and the following value got through:\n\n    "+d(e)+"\n\nThe message provided by the code author is:\n\n    "+n)}}function s(r){return r.start.line==r.end.line?"on line "+r.start.line:"between lines "+r.start.line+" and "+r.end.line}function d(r){var t=typeof r
if("function"===t)return"<function>"
if("boolean"===t)return r?"True":"False"
if("number"===t)return r+""
if(r instanceof String)return"'"+h(r,!0)+"'"
if("string"===t)return'"'+h(r,!1)+'"'
if(null===r)return"null"
if("object"===t&&"ctor"in r){var e=r.ctor.substring(0,5)
if("_Tupl"===e){var n=[]
for(var o in r)"ctor"!==o&&n.push(d(r[o]))
return"("+n.join(",")+")"}if("_Task"===e)return"<task>"
if("_Array"===r.ctor){return"Array.fromList "+d(Zr(r))}if("<decoder>"===r.ctor)return"<decoder>"
if("_Process"===r.ctor)return"<process:"+r.id+">"
if("::"===r.ctor){var n="["+d(r._0)
for(r=r._1;"::"===r.ctor;)n+=","+d(r._0),r=r._1
return n+"]"}if("[]"===r.ctor)return"[]"
if("Set_elm_builtin"===r.ctor)return"Set.fromList "+d(_elm_lang$core$Set$toList(r))
if("RBNode_elm_builtin"===r.ctor||"RBEmpty_elm_builtin"===r.ctor)return"Dict.fromList "+d(et(r))
var n=""
for(var u in r)if("ctor"!==u){var a=d(r[u]),c=a[0],i="{"===c||"("===c||"<"===c||'"'===c||a.indexOf(" ")<0
n+=" "+(i?a:"("+a+")")}return r.ctor+n}if("object"===t){if(r instanceof Date)return"<"+r.toString()+">"
if(r.elm_web_socket)return"<websocket>"
var n=[]
for(var o in r)n.push(o+" = "+d(r[o]))
return 0===n.length?"{}":"{ "+n.join(", ")+" }"}return"<internal structure>"}function h(r,t){var e=r.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0")
return t?e.replace(/\'/g,"\\'"):e.replace(/\"/g,'\\"')}var v=-1,p=0,g=1,m={ctor:"_Tuple0"},b=0,y={ctor:"[]"}
return{eq:t,cmp:n,Tuple0:m,Tuple2:o,chr:u,update:c,guid:a,append:r(_),crash:l,crashCase:f,toString:d}}(),h=(r(function(r,t){var e=t
return i(r,e._0,e._1)}),t(function(r,t,e){return r({ctor:"_Tuple2",_0:t,_1:e})}),t(function(r,t,e){return i(r,e,t)}),r(function(r,t){return r})),v=v||{}
v["<|"]=r(function(r,t){return r(t)})
var v=v||{}
v["|>"]=r(function(r,t){return t(r)})
var v=v||{}
v[">>"]=t(function(r,t,e){return t(r(e))})
var v=v||{}
v["<<"]=t(function(r,t,e){return r(t(e))})
var v=v||{}
v["++"]=d.append
var p=d.toString,g=(s.isInfinite,s.isNaN,s.toFloat),m=(s.ceiling,s.floor),b=(s.truncate,s.round),v=(s.not,s.xor,v||{})
v["||"]=s.or
var v=v||{}
v["&&"]=s.and
var y=s.max,k=s.min,w=s.compare,v=v||{}
v[">="]=s.ge
var v=v||{}
v["<="]=s.le
var v=v||{}
v[">"]=s.gt
var v=v||{}
v["<"]=s.lt
var v=v||{}
v["/="]=s.neq
var v=v||{}
v["=="]=s.eq
var T=(s.e,s.pi),N=(s.clamp,s.logBase,s.abs),v=(s.negate,s.sqrt,s.atan2,s.atan,s.asin,s.acos,s.tan,s.sin,s.cos,v||{})
v["^"]=s.exp
var v=v||{}
v["%"]=s.mod
var v=(s.rem,v||{})
v["//"]=s.div
var v=v||{}
v["/"]=s.floatDiv
var v=v||{}
v["*"]=s.mul
var v=v||{}
v["-"]=s.sub
var v=v||{}
v["+"]=s.add
var B=(s.toPolar,s.fromPolar,s.turns),E=s.degrees,R={ctor:"GT"},x={ctor:"EQ"},A={ctor:"LT"},C=function(){function t(r,t){var e=r+": "+d.toString(t),n=n||{}
return n.stdout?n.stdout.write(e):console.log(e),t}function e(r){throw new Error(r)}return{crash:e,log:r(t)}}(),S=(C.crash,C.log,r(function(r,t){var e=t
return"Just"===e.ctor?e._0:r})),L={ctor:"Nothing"},M=(r(function(r,t){var e=t
return"Just"===e.ctor?r(e._0):L}),function(r){return{ctor:"Just",_0:r}}),O=r(function(r,t){var e=t
return"Just"===e.ctor?M(r(e._0)):L}),I=(t(function(r,t,e){var n={ctor:"_Tuple2",_0:t,_1:e}
return"_Tuple2"===n.ctor&&"Just"===n._0.ctor&&"Just"===n._1.ctor?M(i(r,n._0._0,n._1._0)):L}),e(function(r,t,e,n){var o={ctor:"_Tuple3",_0:t,_1:e,_2:n}
return"_Tuple3"===o.ctor&&"Just"===o._0.ctor&&"Just"===o._1.ctor&&"Just"===o._2.ctor?M(_(r,o._0._0,o._1._0,o._2._0)):L}),n(function(r,t,e,n,o){var u={ctor:"_Tuple4",_0:t,_1:e,_2:n,_3:o}
return"_Tuple4"===u.ctor&&"Just"===u._0.ctor&&"Just"===u._1.ctor&&"Just"===u._2.ctor&&"Just"===u._3.ctor?M(l(r,u._0._0,u._1._0,u._2._0,u._3._0)):L}),o(function(r,t,e,n,o,u){var a={ctor:"_Tuple5",_0:t,_1:e,_2:n,_3:o,_4:u}
return"_Tuple5"===a.ctor&&"Just"===a._0.ctor&&"Just"===a._1.ctor&&"Just"===a._2.ctor&&"Just"===a._3.ctor&&"Just"===a._4.ctor?M(f(r,a._0._0,a._1._0,a._2._0,a._3._0,a._4._0)):L}),function(){function u(r,t){return{ctor:"::",_0:r,_1:t}}function a(r){for(var t=y,e=r.length;e--;)t=u(r[e],t)
return t}function c(r){for(var t=[];"[]"!==r.ctor;)t.push(r._0),r=r._1
return t}function s(r,t,e){for(var n=c(e),o=t,u=n.length;u--;)o=i(r,n[u],o)
return o}function h(r,t,e){for(var n=[];"[]"!==t.ctor&&"[]"!==e.ctor;)n.push(i(r,t._0,e._0)),t=t._1,e=e._1
return a(n)}function v(r,t,e,n){for(var o=[];"[]"!==t.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor;)o.push(_(r,t._0,e._0,n._0)),t=t._1,e=e._1,n=n._1
return a(o)}function p(r,t,e,n,o){for(var u=[];"[]"!==t.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor;)u.push(l(r,t._0,e._0,n._0,o._0)),t=t._1,e=e._1,n=n._1,o=o._1
return a(u)}function g(r,t,e,n,o,u){for(var c=[];"[]"!==t.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor&&"[]"!==u.ctor;)c.push(f(r,t._0,e._0,n._0,o._0,u._0)),t=t._1,e=e._1,n=n._1,o=o._1,u=u._1
return a(c)}function m(r,t){return a(c(t).sort(function(t,e){return d.cmp(r(t),r(e))}))}function b(r,t){return a(c(t).sort(function(t,e){var n=r(t)(e).ctor
return"EQ"===n?0:"LT"===n?-1:1}))}var y={ctor:"[]"}
return{Nil:y,Cons:u,cons:r(u),toArray:c,fromArray:a,foldr:t(s),map2:t(h),map3:e(v),map4:n(p),map5:o(g),sortBy:r(m),sortWith:r(b)}}()),P=I.sortWith,J=(I.sortBy,r(function(r,t){for(;;){if(d.cmp(r,0)<1)return t
var e=t
if("[]"===e.ctor)return t
var n=r-1,o=e._1
r=n,t=o}}),I.map5,I.map4,I.map3,I.map2),q=r(function(r,t){for(;;){var e=t
if("[]"===e.ctor)return!1
if(r(e._0))return!0
var n=r,o=e._1
r=n,t=o}}),j=r(function(r,t){return!i(q,function(t){return!r(t)},t)}),D=I.foldr,F=t(function(r,t,e){for(;;){var n=e
if("[]"===n.ctor)return t
var o=r,u=i(r,n._0,t),a=n._1
r=o,t=u,e=a}}),U=function(t){return _(F,r(function(r,t){return t+1}),0,t)},z=(r(function(r,t){return i(q,function(t){return d.eq(t,r)},t)}),z||{})
z["::"]=I.cons
var $=r(function(t,e){return _(D,r(function(r,e){return{ctor:"::",_0:t(r),_1:e}}),{ctor:"[]"},e)}),Q=(r(function(t,e){var n=r(function(r,e){return t(r)?{ctor:"::",_0:r,_1:e}:e})
return _(D,n,{ctor:"[]"},e)}),t(function(r,t,e){var n=r(t)
return"Just"===n.ctor?{ctor:"::",_0:n._0,_1:e}:e})),W=(r(function(r,t){return _(D,Q(r),{ctor:"[]"},t)}),function(t){return _(F,r(function(r,t){return{ctor:"::",_0:r,_1:t}}),{ctor:"[]"},t)}),G=(t(function(t,e,n){var o=r(function(r,e){var n=e
return"::"===n.ctor?{ctor:"::",_0:i(t,r,n._0),_1:e}:{ctor:"[]"}})
return W(_(F,o,{ctor:"::",_0:e,_1:{ctor:"[]"}},n))}),r(function(t,e){return"[]"===e.ctor?t:_(D,r(function(r,t){return{ctor:"::",_0:r,_1:t}}),e,t)})),K=function(r){return _(D,G,{ctor:"[]"},r)},V=(r(function(r,t){return K(i($,r,t))}),r(function(t,e){var n=r(function(r,e){var n=e,o=n._0,u=n._1
return t(r)?{ctor:"_Tuple2",_0:{ctor:"::",_0:r,_1:o},_1:u}:{ctor:"_Tuple2",_0:o,_1:{ctor:"::",_0:r,_1:u}}})
return _(D,n,{ctor:"_Tuple2",_0:{ctor:"[]"},_1:{ctor:"[]"}},e)}),r(function(t,e){var n=e
if("[]"===n.ctor)return{ctor:"[]"}
var o=r(function(r,e){return{ctor:"::",_0:t,_1:{ctor:"::",_0:r,_1:e}}}),u=_(D,o,{ctor:"[]"},n._1)
return{ctor:"::",_0:n._0,_1:u}}),t(function(r,t,e){for(;;){if(d.cmp(r,0)<1)return e
var n=t
if("[]"===n.ctor)return e
var o=r-1,u=n._1,a={ctor:"::",_0:n._0,_1:e}
r=o,t=u,e=a}})),H=r(function(r,t){return W(_(V,r,t,{ctor:"[]"}))}),X=t(function(r,t,e){if(d.cmp(t,0)<1)return{ctor:"[]"}
var n={ctor:"_Tuple2",_0:t,_1:e}
r:do{t:do{if("_Tuple2"!==n.ctor)break r
if("[]"===n._1.ctor)return e
if("::"!==n._1._1.ctor){if(1===n._0)break t
break r}switch(n._0){case 1:break t
case 2:return{ctor:"::",_0:n._1._0,_1:{ctor:"::",_0:n._1._1._0,_1:{ctor:"[]"}}}
case 3:if("::"===n._1._1._1.ctor)return{ctor:"::",_0:n._1._0,_1:{ctor:"::",_0:n._1._1._0,_1:{ctor:"::",_0:n._1._1._1._0,_1:{ctor:"[]"}}}}
break r
default:if("::"===n._1._1._1.ctor&&"::"===n._1._1._1._1.ctor){var o=n._1._1._1._0,u=n._1._1._0,a=n._1._0,c=n._1._1._1._1._0,l=n._1._1._1._1._1
return d.cmp(r,1e3)>0?{ctor:"::",_0:a,_1:{ctor:"::",_0:u,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:c,_1:i(H,t-4,l)}}}}:{ctor:"::",_0:a,_1:{ctor:"::",_0:u,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:c,_1:_(X,r+1,t-4,l)}}}}}break r}}while(!1)
return{ctor:"::",_0:n._1._0,_1:{ctor:"[]"}}}while(!1)
return e}),Y=(r(function(r,t){return _(X,0,r,t)}),t(function(r,t,e){for(;;){if(d.cmp(t,0)<1)return r
var n={ctor:"::",_0:e,_1:r},o=t-1,u=e
r=n,t=o,e=u}})),Z=r(function(r,t){return _(Y,{ctor:"[]"},r,t)}),rr=t(function(r,t,e){for(;;){if(!(d.cmp(r,t)<1))return e
var n=r,o=t-1,u={ctor:"::",_0:t,_1:e}
r=n,t=o,e=u}}),tr=r(function(r,t){return _(rr,r,t,{ctor:"[]"})}),er=(r(function(r,t){return _(J,r,i(tr,0,U(t)-1),t)}),r(function(r,t){var e=t
return"Ok"===e.ctor?e._0:r}),function(r){return{ctor:"Err",_0:r}}),nr=(r(function(r,t){var e=t
return"Ok"===e.ctor?r(e._0):er(e._0)}),function(r){return{ctor:"Ok",_0:r}}),or=(r(function(r,t){var e=t
return"Ok"===e.ctor?nr(r(e._0)):er(e._0)}),t(function(r,t,e){var n={ctor:"_Tuple2",_0:t,_1:e}
return"Ok"===n._0.ctor?"Ok"===n._1.ctor?nr(i(r,n._0._0,n._1._0)):er(n._1._0):er(n._0._0)}),e(function(r,t,e,n){var o={ctor:"_Tuple3",_0:t,_1:e,_2:n}
return"Ok"===o._0.ctor?"Ok"===o._1.ctor?"Ok"===o._2.ctor?nr(_(r,o._0._0,o._1._0,o._2._0)):er(o._2._0):er(o._1._0):er(o._0._0)}),n(function(r,t,e,n,o){var u={ctor:"_Tuple4",_0:t,_1:e,_2:n,_3:o}
return"Ok"===u._0.ctor?"Ok"===u._1.ctor?"Ok"===u._2.ctor?"Ok"===u._3.ctor?nr(l(r,u._0._0,u._1._0,u._2._0,u._3._0)):er(u._3._0):er(u._2._0):er(u._1._0):er(u._0._0)}),o(function(r,t,e,n,o,u){var a={ctor:"_Tuple5",_0:t,_1:e,_2:n,_3:o,_4:u}
return"Ok"===a._0.ctor?"Ok"===a._1.ctor?"Ok"===a._2.ctor?"Ok"===a._3.ctor?"Ok"===a._4.ctor?nr(f(r,a._0._0,a._1._0,a._2._0,a._3._0,a._4._0)):er(a._4._0):er(a._3._0):er(a._2._0):er(a._1._0):er(a._0._0)}),r(function(r,t){var e=t
return"Ok"===e.ctor?nr(e._0):er(r(e._0))}),r(function(r,t){var e=t
return"Just"===e.ctor?nr(e._0):er(r)}),function(){function e(r){return 0===r.length}function n(r,t){return r+t}function o(r){var t=r[0]
return t?M(d.Tuple2(d.chr(t),r.slice(1))):L}function u(r,t){return r+t}function a(r){return I.toArray(r).join("")}function c(r){return r.length}function _(r,t){for(var e=t.split(""),n=e.length;n--;)e[n]=r(d.chr(e[n]))
return e.join("")}function l(r,t){return t.split("").map(d.chr).filter(r).join("")}function f(r){return r.split("").reverse().join("")}function s(r,t,e){for(var n=e.length,o=0;o<n;++o)t=i(r,d.chr(e[o]),t)
return t}function h(r,t,e){for(var n=e.length;n--;)t=i(r,d.chr(e[n]),t)
return t}function v(r,t){return I.fromArray(t.split(r))}function p(r,t){return I.toArray(t).join(r)}function g(r,t){for(var e="";r>0;)1&r&&(e+=t),r>>=1,t+=t
return e}function m(r,t,e){return e.slice(r,t)}function b(r,t){return r<1?"":t.slice(0,r)}function y(r,t){return r<1?"":t.slice(-r)}function k(r,t){return r<1?t:t.slice(r)}function w(r,t){return r<1?t:t.slice(0,-r)}function T(r,t,e){var n=(r-e.length)/2
return g(Math.ceil(n),t)+e+g(0|n,t)}function N(r,t,e){return e+g(r-e.length,t)}function B(r,t,e){return g(r-e.length,t)+e}function E(r){return r.trim()}function R(r){return r.replace(/^\s+/,"")}function x(r){return r.replace(/\s+$/,"")}function A(r){return I.fromArray(r.trim().split(/\s+/g))}function C(r){return I.fromArray(r.split(/\r\n|\r|\n/g))}function S(r){return r.toUpperCase()}function O(r){return r.toLowerCase()}function P(r,t){for(var e=t.length;e--;)if(r(d.chr(t[e])))return!0
return!1}function J(r,t){for(var e=t.length;e--;)if(!r(d.chr(t[e])))return!1
return!0}function q(r,t){return t.indexOf(r)>-1}function j(r,t){return 0===t.indexOf(r)}function D(r,t){return t.length>=r.length&&t.lastIndexOf(r)===t.length-r.length}function F(r,t){var e=r.length
if(e<1)return I.Nil
for(var n=0,o=[];(n=t.indexOf(r,n))>-1;)o.push(n),n+=e
return I.fromArray(o)}function U(r){var t=r.length
if(0===t)return z(r)
var e=r[0]
if("0"===e&&"x"===r[1]){for(var n=2;n<t;++n){var e=r[n]
if(!("0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"))return z(r)}return nr(parseInt(r,16))}if(e>"9"||e<"0"&&"-"!==e&&"+"!==e)return z(r)
for(var n=1;n<t;++n){var e=r[n]
if(e<"0"||"9"<e)return z(r)}return nr(parseInt(r,10))}function z(r){return er("could not convert string '"+r+"' to an Int")}function $(r){if(0===r.length||/[\sxbo]/.test(r))return Q(r)
var t=+r
return t===t?nr(t):Q(r)}function Q(r){return er("could not convert string '"+r+"' to a Float")}function W(r){return I.fromArray(r.split("").map(d.chr))}function G(r){return I.toArray(r).join("")}return{isEmpty:e,cons:r(n),uncons:o,append:r(u),concat:a,length:c,map:r(_),filter:r(l),reverse:f,foldl:t(s),foldr:t(h),split:r(v),join:r(p),repeat:r(g),slice:t(m),left:r(b),right:r(y),dropLeft:r(k),dropRight:r(w),pad:t(T),padLeft:t(B),padRight:t(N),trim:E,trimLeft:R,trimRight:x,words:A,lines:C,toUpper:S,toLower:O,any:r(P),all:r(J),contains:r(q),startsWith:r(j),endsWith:r(D),indexes:r(F),toInt:U,toFloat:$,toList:W,fromList:G}}()),ur=function(){return{fromCode:function(r){return d.chr(String.fromCharCode(r))},toCode:function(r){return r.charCodeAt(0)},toUpper:function(r){return d.chr(r.toUpperCase())},toLower:function(r){return d.chr(r.toLowerCase())},toLocaleUpper:function(r){return d.chr(r.toLocaleUpperCase())},toLocaleLower:function(r){return d.chr(r.toLocaleLowerCase())}}}(),ar=(ur.fromCode,ur.toCode),cr=(ur.toLocaleLower,ur.toLocaleUpper,ur.toLower,ur.toUpper,t(function(r,t,e){var n=ar(e)
return d.cmp(n,ar(r))>-1&&d.cmp(n,ar(t))<1})),ir=(i(cr,d.chr("A"),d.chr("Z")),i(cr,d.chr("a"),d.chr("z")),i(cr,d.chr("0"),d.chr("9")),i(cr,d.chr("0"),d.chr("7")),or.fromList,or.toList,or.toFloat,or.toInt),_r=(or.indexes,or.indexes,or.endsWith,or.startsWith,or.contains,or.all,or.any,or.toLower,or.toUpper,or.lines,or.words,or.trimRight,or.trimLeft,or.trim,or.padRight,or.padLeft,or.pad,or.dropRight,or.dropLeft),lr=(or.right,or.left,or.slice,or.repeat,or.join),fr=(or.split,or.foldr,or.foldl,or.reverse,or.filter,or.map,or.length),sr=or.concat,dr=(or.append,or.uncons),hr=(or.cons,or.isEmpty),vr=(r(function(r,t){var e=t
return{ctor:"_Tuple2",_0:e._0,_1:r(e._1)}}),r(function(r,t){var e=t
return{ctor:"_Tuple2",_0:r(e._0),_1:e._1}}),function(){function e(r){return function(t){return function(t,e){t.worker=function(t){if(void 0!==t)throw new Error("The `"+e+"` module does not need flags.\nCall "+e+".worker() with no arguments and you should be all set!")
return a(r.init,r.update,r.subscriptions,o)}}}}function n(r){return function(t){return function(e,n){e.worker=function(e){if(void 0===t)throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+n+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.")
var u=i(Ft.run,t,e)
if("Err"===u.ctor)throw new Error(n+".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+u._0)
return a(r.init(u._0),r.update,r.subscriptions,o)}}}}function o(r,t){return function(r){}}function u(t){var e=g(I.Nil),n=d.Tuple2(d.Tuple0,e)
return Zt({init:n,view:function(r){return main},update:r(function(r,t){return n}),subscriptions:function(r){return e}})}function a(r,t,e,n){function o(r,n){return pr.nativeBinding(function(o){var u=i(t,r,n)
n=u._0,a(n)
var c=u._1,l=e(n)
b(_,c,l),o(pr.succeed(n))})}function u(r){pr.rawSend(f,r)}var a,_={},l=pr.nativeBinding(function(t){var o=r._0
a=n(u,o)
var c=r._1,i=e(o)
b(_,c,i),t(pr.succeed(o))}),f=v(l,o),s=c(_,u)
return s?{ports:s}:{}}function c(r,t){var e
for(var n in x){var o=x[n]
o.isForeign&&(e=e||{},e[n]="cmd"===o.tag?B(n):R(n,t)),r[n]=f(o,t)}return e}function f(r,t){function e(r,t){if("self"===r.ctor)return _(a,n,r._0,t)
var e=r._0
switch(o){case"cmd":return _(u,n,e.cmds,t)
case"sub":return _(u,n,e.subs,t)
case"fx":return l(u,n,e.cmds,e.subs,t)}}var n={main:t,self:void 0},o=r.tag,u=r.onEffects,a=r.onSelfMsg,c=v(r.init,e)
return n.self=c,c}function s(r,t){return pr.nativeBinding(function(e){r.main(t),e(pr.succeed(d.Tuple0))})}function h(r,t){return i(pr.send,r.self,{ctor:"self",_0:t})}function v(r,t){function e(r){var o=pr.receive(function(e){return t(e,r)})
return i(n,e,o)}var n=pr.andThen,o=i(n,e,r)
return pr.rawSpawn(o)}function p(r){return function(t){return{type:"leaf",home:r,value:t}}}function g(r){return{type:"node",branches:r}}function m(r,t){return{type:"map",tagger:r,tree:t}}function b(r,t,e){var n={}
y(!0,t,n,null),y(!1,e,n,null)
for(var o in r){var u=o in n?n[o]:{cmds:I.Nil,subs:I.Nil}
pr.rawSend(r[o],{ctor:"fx",_0:u})}}function y(r,t,e,n){switch(t.type){case"leaf":var o=t.home,u=k(r,o,n,t.value)
return void(e[o]=w(r,u,e[o]))
case"node":for(var a=t.branches;"[]"!==a.ctor;)y(r,a._0,e,n),a=a._1
return
case"map":return void y(r,t.tree,e,{tagger:t.tagger,rest:n})}}function k(r,t,e,n){function o(r){for(var t=e;t;)r=t.tagger(r),t=t.rest
return r}return i(r?x[t].cmdMap:x[t].subMap,o,n)}function w(r,t,e){return e=e||{cmds:I.Nil,subs:I.Nil},r?(e.cmds=I.Cons(t,e.cmds),e):(e.subs=I.Cons(t,e.subs),e)}function T(r){if(r in x)throw new Error("There can only be one port named `"+r+"`, but your program has multiple.")}function N(r,t){return T(r),x[r]={tag:"cmd",cmdMap:A,converter:t,isForeign:!0},p(r)}function B(r){function e(r,t,e){for(;"[]"!==t.ctor;){for(var n=u,o=a(t._0),i=0;i<n.length;i++)n[i](o)
t=t._1}return c}function n(r){u.push(r)}function o(r){u=u.slice()
var t=u.indexOf(r)
t>=0&&u.splice(t,1)}var u=[],a=x[r].converter,c=pr.succeed(null)
return x[r].init=c,x[r].onEffects=t(e),{subscribe:n,unsubscribe:o}}function E(r,t){return T(r),x[r]={tag:"sub",subMap:C,converter:t,isForeign:!0},p(r)}function R(r,e){function n(r,t,e){for(var n=o(r,t,e),u=0;u<l.length;u++)c(l[u])
return l=null,h=c,d=o,n}function o(r,t,e){return f=t,v}function u(r,t,e){return d(r,t,e)}function a(r){l.push(r)}function c(r){for(var t=f;"[]"!==t.ctor;)e(t._0(r)),t=t._1}function _(t){var e=i(Qt,s,t)
if("Err"===e.ctor)throw new Error("Trying to send an unexpected type of value through port `"+r+"`:\n"+e._0)
h(e._0)}var l=[],f=I.Nil,s=x[r].converter,d=n,h=a,v=pr.succeed(null)
return x[r].init=v,x[r].onEffects=t(u),{send:_}}var x={},A=r(function(r,t){return t}),C=r(function(r,t){return function(e){return r(t(e))}})
return{sendToApp:r(s),sendToSelf:r(h),effectManagers:x,outgoingPort:N,incomingPort:E,htmlToProgram:u,program:e,programWithFlags:n,initialize:a,leaf:p,batch:g,map:r(m)}}()),pr=function(){function t(r){return{ctor:"_Task_succeed",value:r}}function e(r){return{ctor:"_Task_fail",value:r}}function n(r){return{ctor:"_Task_nativeBinding",callback:r,cancel:null}}function o(r,t){return{ctor:"_Task_andThen",callback:r,task:t}}function u(r,t){return{ctor:"_Task_onError",callback:r,task:t}}function a(r){return{ctor:"_Task_receive",callback:r}}function c(r){var t={ctor:"_Process",id:d.guid(),root:r,stack:null,mailbox:[]}
return v(t),t}function i(r){return n(function(e){e(t(c(r)))})}function _(r,t){r.mailbox.push(t),v(r)}function l(r,e){return n(function(n){_(r,e),n(t(d.Tuple0))})}function f(r){return n(function(e){var n=r.root
"_Task_nativeBinding"===n.ctor&&n.cancel&&n.cancel(),r.root=null,e(t(d.Tuple0))})}function s(r){return n(function(e){var n=setTimeout(function(){e(t(d.Tuple0))},r)
return function(){clearTimeout(n)}})}function h(r,t){for(;r<g;){var e=t.root.ctor
if("_Task_succeed"!==e)if("_Task_fail"!==e)if("_Task_andThen"!==e)if("_Task_onError"!==e){if("_Task_nativeBinding"===e){t.root.cancel=t.root.callback(function(r){t.root=r,v(t)})
break}if("_Task_receive"!==e)throw new Error(e)
var n=t.mailbox
if(0===n.length)break
t.root=t.root.callback(n.shift()),++r}else t.stack={ctor:"_Task_onError",callback:t.root.callback,rest:t.stack},t.root=t.root.task,++r
else t.stack={ctor:"_Task_andThen",callback:t.root.callback,rest:t.stack},t.root=t.root.task,++r
else{for(;t.stack&&"_Task_andThen"===t.stack.ctor;)t.stack=t.stack.rest
if(null===t.stack)break
t.root=t.stack.callback(t.root.value),t.stack=t.stack.rest,++r}else{for(;t.stack&&"_Task_onError"===t.stack.ctor;)t.stack=t.stack.rest
if(null===t.stack)break
t.root=t.stack.callback(t.root.value),t.stack=t.stack.rest,++r}}return r<g?r+1:(v(t),r)}function v(r){b.push(r),m||(setTimeout(p,0),m=!0)}function p(){for(var r,t=0;t<g&&(r=b.shift());)r.root&&(t=h(t,r))
if(!r)return void(m=!1)
setTimeout(p,0)}var g=1e4,m=!1,b=[]
return{succeed:t,fail:e,nativeBinding:n,andThen:r(o),onError:r(u),receive:a,spawn:i,kill:f,sleep:s,send:r(l),rawSpawn:c,rawSend:_}}(),gr=vr.batch,mr=gr({ctor:"[]"}),br=br||{}
br["!"]=r(function(r,t){return{ctor:"_Tuple2",_0:r,_1:gr(t)}})
var yr=(vr.map,vr.batch),kr=yr({ctor:"[]"}),wr=(vr.map,pr.succeed,vr.sendToSelf,vr.sendToApp,vr.programWithFlags,vr.program,r(function(r,t){switch(i(w,r,t).ctor){case"LT":return R
case"EQ":return x
default:return A}})),Tr=function(r){return d.eq(r,i(P,wr,r))&&i(j,function(r){return d.cmp(r,0)>-1},r)},Nr=r(function(r,t){var e=t
if("[]"===e.ctor)return{ctor:"[]"}
var n=e._0
return{ctor:"::",_0:i(tr,r,r+n-1),_1:i(Nr,r+n,e._1)}}),Br=function(t){var e=t
if("::"===e.ctor){var n=e._0
return _(J,r(function(r,t){return{ctor:"::",_0:r,_1:t}}),n,i(v["++"],Br(e._1),i(Z,U(n),{ctor:"[]"})))}return{ctor:"[]"}},Er=function(r){return Br(i(Nr,1,i($,U,Br(i(Nr,1,r)))))},Rr=r(function(r,t){var e=function(t){return d.eq(t,r)?r+1:d.eq(t,r+1)?r:t}
return i(function(r){return $($(r))},e,t)}),xr=r(function(r,t){for(;;){var e=t
if("[]"===e.ctor)return L
var n=e._0
if("Just"===n.ctor)return M({ctor:"_Tuple2",_0:r,_1:n._0})
var o=r+1,u=e._1
r=o,t=u}}),Ar=xr(0),Cr=t(function(r,t,e){for(;;){var n=e
if("[]"===n.ctor)return L
if(d.eq(n._0,t))return M(r)
var o=r+1,u=t,a=n._1
r=o,t=u,e=a}}),Sr=Cr(0),Lr=function(r){return{ctor:"NotValidPartition",_0:r}},Mr=function(r){return Tr(r)?nr(i(Nr,1,r)):er(Lr(r))},Or=function(r){return{ctor:"ValueNotFound",_0:r}},Ir=r(function(r,t){var e=Ar(i($,Sr(r),t))
return"Nothing"===e.ctor?er(Or(r)):nr(e._0)}),Pr=r(function(r,t){var e=i(Ir,r+1,t),n=i(Ir,r,t),o=n
if("Err"===o.ctor)return er(o._0)
var u=e
return"Err"===u.ctor?er(u._0):nr(d.eq(o._0._0,u._0._0)||d.eq(o._0._1,u._0._1)?t:i(Rr,r,t))}),Jr=Jr||{}
Jr["<*>"]=r(function(r,t){return function(e){var n=r(e)
if("Err"===n.ctor)return er(n._0)
var o=t(n._0._0)
return"Err"===o.ctor?er(o._0):nr({ctor:"_Tuple2",_0:o._0._0,_1:n._0._1(o._0._1)})}})
var qr=function(r){return function(t){return er(r)}},jr=(function(){}(),function(r){return function(t){return nr({ctor:"_Tuple2",_0:t,_1:r})}}),Jr=Jr||{}
Jr["<$>"]=r(function(r,t){return i(Jr["<*>"],jr(r),t)})
var Dr=t(function(r,t,e){return i(Jr["<*>"],i(Jr["<$>"],r,t),e)}),Jr=Jr||{}
Jr["<*"]=r(function(t,e){var n=r(function(r,t){return r})
return _(Dr,n,t,e)})
var Jr=Jr||{}
Jr["*>"]=r(function(t,e){var n=r(function(r,t){return t})
return _(Dr,n,t,e)})
var Jr=(e(function(r,t,e,n){return i(Jr["<*>"],i(Jr["<*>"],i(Jr["<$>"],r,t),e),n)}),n(function(r,t,e,n,o){return i(Jr["<*>"],i(Jr["<*>"],i(Jr["<*>"],i(Jr["<$>"],r,t),e),n),o)}),o(function(r,t,e,n,o,u){return i(Jr["<*>"],i(Jr["<*>"],i(Jr["<*>"],i(Jr["<*>"],i(Jr["<$>"],r,t),e),n),o),u)}),r(function(r,t){return function(e){var n=r(e)
return"Err"===n.ctor?t(e):nr({ctor:"_Tuple2",_0:n._0._0,_1:n._0._1})}}),Jr||{})
Jr[">>="]=r(function(r,t){return function(e){var n=r(e)
return"Err"===n.ctor?er(n._0):i(t,n._0._1,n._0._0)}})
var Fr,Ur=function(){function n(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(r){return new RegExp(r.source,"gi")}function u(r){return new RegExp(r,"g")}function a(r,t){return null!==t.match(r)}function c(r,t,e){r="All"===r.ctor?1/0:r._0
for(var n,o=[],u=0,a=e,c=t.lastIndex,i=-1;u++<r&&(n=t.exec(a))&&i!==t.lastIndex;){for(var _=n.length-1,l=new Array(_);_>0;){var f=n[_]
l[--_]=void 0===f?L:M(f)}o.push({match:n[0],submatches:I.fromArray(l),index:n.index,number:u}),i=t.lastIndex}return t.lastIndex=c,I.fromArray(o)}function i(r,t,e,n){function o(t){if(u++>=r)return t
for(var n=arguments.length-3,o=new Array(n);n>0;){var a=arguments[n]
o[--n]=void 0===a?L:M(a)}return e({match:t,submatches:I.fromArray(o),index:arguments[arguments.length-2],number:u})}r="All"===r.ctor?1/0:r._0
var u=0
return n.replace(t,o)}function _(r,t,e){if((r="All"===r.ctor?1/0:r._0)===1/0)return I.fromArray(e.split(t))
for(var n,o=e,u=[],a=t.lastIndex,c=t.lastIndex;r--&&(n=t.exec(o));)u.push(o.slice(a,n.index)),a=t.lastIndex
return u.push(o.slice(a)),t.lastIndex=c,I.fromArray(u)}return{regex:u,caseInsensitive:o,escape:n,contains:r(a),find:t(c),replace:e(i),split:t(_)}}(),zr=(Ur.split,Ur.replace,Ur.find),$r=(Ur.contains,Ur.caseInsensitive,Ur.regex),Qr=(Ur.escape,e(function(r,t,e,n){return{match:r,submatches:t,index:e,number:n}}),function(r){return{ctor:"AtMost",_0:r}}),Wr={ctor:"StringEmpty"},Gr={ctor:"NoMatch"},Kr=r(function(r,t){if(hr(t))return er(Wr)
var e=_(zr,Qr(1),r,t)
if("[]"===e.ctor)return er(Gr)
var n=e._0,o=function(r){return r.index}(n),u=function(r){return r.match}(n)
return d.eq(o,0)?nr({ctor:"_Tuple2",_0:i(_r,fr(u),t),_1:u}):er(Gr)}),Vr=function(r){var t=r
return"Err"===t.ctor?qr(Gr):jr(t._0)},Hr=i(Jr[">>="],i(Jr["<$>"],ir,Kr($r("[0-9]+"))),Vr),Xr=function(r){for(;;){var t=Hr(r)
if("Ok"===t.ctor)return{ctor:"::",_0:t._0._1,_1:Xr(t._0._0)}
{if("NoMatch"!==t._0.ctor)return{ctor:"[]"}
var e=dr(r)
if("Nothing"===e.ctor)return{ctor:"[]"}
r=e._0._1}}},Yr=function(){function e(r,t){if(r<0||r>=J(t))throw new Error("Index "+r+" is out of range. Check the length of your array first or use getMaybe or getWithDefault.")
return n(r,t)}function n(r,t){for(var e=t.height;e>0;e--){for(var n=r>>5*e;t.lengths[n]<=r;)n++
n>0&&(r-=t.lengths[n-1]),t=t.table[n]}return t.table[r]}function o(r,t,e){return r<0||J(e)<=r?e:u(r,t,e)}function u(r,t,e){if(e=P(e),0===e.height)e.table[r]=t
else{var n=q(r,e)
n>0&&(r-=e.lengths[n-1]),e.table[n]=u(r,t,e.table[n])}return e}function a(r,t){return r<=0?K:c(t,Math.floor(Math.log(r)/Math.log(W)),0,r)}function c(r,t,e,n){if(0===t){for(var o=new Array((n-e)%(W+1)),u=0;u<o.length;u++)o[u]=r(e+u)
return{ctor:"_Array",height:0,table:o}}for(var a=Math.pow(W,t),o=new Array(Math.ceil((n-e)/a)),i=new Array(o.length),u=0;u<o.length;u++)o[u]=c(r,t-1,e+u*a,Math.min(e+(u+1)*a,n)),i[u]=J(o[u])+(u>0?i[u-1]:0)
return{ctor:"_Array",height:t,table:o,lengths:i}}function _(r){if("[]"===r.ctor)return K
for(var t=new Array(W),e=[],n=0;"[]"!==r.ctor;)if(t[n]=r._0,r=r._1,++n===W){var o={ctor:"_Array",height:0,table:t}
l(o,e),t=new Array(W),n=0}if(n>0){var o={ctor:"_Array",height:0,table:t.splice(0,n)}
l(o,e)}for(var u=0;u<e.length-1;u++)e[u].table.length>0&&l(e[u],e)
var a=e[e.length-1]
return a.height>0&&1===a.table.length?a.table[0]:a}function l(r,t){var e=r.height
if(t.length===e){var n={ctor:"_Array",height:e+1,table:[],lengths:[]}
t.push(n)}t[e].table.push(r)
var o=J(r)
t[e].lengths.length>0&&(o+=t[e].lengths[t[e].lengths.length-1]),t[e].lengths.push(o),t[e].table.length===W&&(l(t[e],t),t[e]={ctor:"_Array",height:e+1,table:[],lengths:[]})}function f(r,t){var e=s(r,t)
return null!==e?e:F(t,j(r,t.height))}function s(r,t){if(0===t.height){if(t.table.length<W){var e={ctor:"_Array",height:0,table:t.table.slice()}
return e.table.push(r),e}return null}var n=s(r,M(t))
if(null!==n){var e=P(t)
return e.table[e.table.length-1]=n,e.lengths[e.lengths.length-1]++,e}if(t.table.length<W){var o=j(r,t.height-1),e=P(t)
return e.table.push(o),e.lengths.push(e.lengths[e.lengths.length-1]+J(o)),e}return null}function d(r){return h(I.Nil,r)}function h(r,t){for(var e=t.table.length-1;e>=0;e--)r=0===t.height?I.Cons(t.table[e],r):h(r,t.table[e])
return r}function v(r,t){var e={ctor:"_Array",height:t.height,table:new Array(t.table.length)}
t.height>0&&(e.lengths=t.lengths)
for(var n=0;n<t.table.length;n++)e.table[n]=0===t.height?r(t.table[n]):v(r,t.table[n])
return e}function p(r,t){return g(r,t,0)}function g(r,t,e){var n={ctor:"_Array",height:t.height,table:new Array(t.table.length)}
t.height>0&&(n.lengths=t.lengths)
for(var o=0;o<t.table.length;o++)n.table[o]=0===t.height?i(r,e+o,t.table[o]):g(r,t.table[o],0==o?e:e+t.lengths[o-1])
return n}function m(r,t,e){if(0===e.height)for(var n=0;n<e.table.length;n++)t=i(r,e.table[n],t)
else for(var n=0;n<e.table.length;n++)t=m(r,t,e.table[n])
return t}function b(r,t,e){if(0===e.height)for(var n=e.table.length;n--;)t=i(r,e.table[n],t)
else for(var n=e.table.length;n--;)t=b(r,t,e.table[n])
return t}function y(r,t,e){return r<0&&(r+=J(e)),t<0&&(t+=J(e)),w(r,k(t,e))}function k(r,t){if(r===J(t))return t
if(0===t.height){var e={ctor:"_Array",height:0}
return e.table=t.table.slice(0,r),e}var n=q(r,t),o=k(r-(n>0?t.lengths[n-1]:0),t.table[n])
if(0===n)return o
var e={ctor:"_Array",height:t.height,table:t.table.slice(0,n),lengths:t.lengths.slice(0,n)}
return o.table.length>0&&(e.table[n]=o,e.lengths[n]=J(o)+(n>0?e.lengths[n-1]:0)),e}function w(r,t){if(0===r)return t
if(0===t.height){var e={ctor:"_Array",height:0}
return e.table=t.table.slice(r,t.table.length+1),e}var n=q(r,t),o=w(r-(n>0?t.lengths[n-1]:0),t.table[n])
if(n===t.table.length-1)return o
var e={ctor:"_Array",height:t.height,table:t.table.slice(n,t.table.length+1),lengths:new Array(t.table.length-n)}
e.table[0]=o
for(var u=0,a=0;a<e.table.length;a++)u+=J(e.table[a]),e.lengths[a]=u
return e}function T(r,t){if(0===r.table.length)return t
if(0===t.table.length)return r
var e=N(r,t)
if(e[0].table.length+e[1].table.length<=W){if(0===e[0].table.length)return e[1]
if(0===e[1].table.length)return e[0]
if(e[0].table=e[0].table.concat(e[1].table),e[0].height>0){for(var n=J(e[0]),o=0;o<e[1].lengths.length;o++)e[1].lengths[o]+=n
e[0].lengths=e[0].lengths.concat(e[1].lengths)}return e[0]}if(e[0].height>0){var u=R(r,t)
u>G&&(e=L(e[0],e[1],u))}return F(e[0],e[1])}function N(r,t){if(0===r.height&&0===t.height)return[r,t]
if(1!==r.height||1!==t.height)if(r.height===t.height){r=P(r),t=P(t)
var e=N(M(r),O(t))
B(r,e[1]),E(t,e[0])}else if(r.height>t.height){r=P(r)
var e=N(M(r),t)
B(r,e[0]),t=D(e[1],e[1].height+1)}else{t=P(t)
var e=N(r,O(t)),n=0===e[0].table.length?0:1,o=0===n?1:0
E(t,e[n]),r=D(e[o],e[o].height+1)}if(0===r.table.length||0===t.table.length)return[r,t]
var u=R(r,t)
return u<=G?[r,t]:L(r,t,u)}function B(r,t){var e=r.table.length-1
r.table[e]=t,r.lengths[e]=J(t),r.lengths[e]+=e>0?r.lengths[e-1]:0}function E(r,t){if(t.table.length>0){r.table[0]=t,r.lengths[0]=J(t)
for(var e=J(r.table[0]),n=1;n<r.lengths.length;n++)e+=J(r.table[n]),r.lengths[n]=e}else{r.table.shift()
for(var n=1;n<r.lengths.length;n++)r.lengths[n]=r.lengths[n]-r.lengths[0]
r.lengths.shift()}}function R(r,t){for(var e=0,n=0;n<r.table.length;n++)e+=r.table[n].table.length
for(var n=0;n<t.table.length;n++)e+=t.table[n].table.length
return r.table.length+t.table.length-(Math.floor((e-1)/W)+1)}function x(r,t,e){return e<r.length?r[e]:t[e-r.length]}function A(r,t,e,n){e<r.length?r[e]=n:t[e-r.length]=n}function C(r,t,e,n){A(r.table,t.table,e,n)
var o=0===e||e===r.lengths.length?0:x(r.lengths,r.lengths,e-1)
A(r.lengths,t.lengths,e,o+J(n))}function S(r,t){t<0&&(t=0)
var e={ctor:"_Array",height:r,table:new Array(t)}
return r>0&&(e.lengths=new Array(t)),e}function L(r,t,e){for(var n=S(r.height,Math.min(W,r.table.length+t.table.length-e)),o=S(r.height,n.table.length-(r.table.length+t.table.length-e)),u=0;x(r.table,t.table,u).table.length%W==0;)A(n.table,o.table,u,x(r.table,t.table,u)),A(n.lengths,o.lengths,u,x(r.lengths,t.lengths,u)),u++
for(var a=u,c=new S(r.height-1,0),i=0;u-a-(c.table.length>0?1:0)<e;){var _=x(r.table,t.table,u),l=Math.min(W-c.table.length,_.table.length)
if(c.table=c.table.concat(_.table.slice(i,l)),c.height>0)for(var f=c.lengths.length,s=f;s<f+l-i;s++)c.lengths[s]=J(c.table[s]),c.lengths[s]+=s>0?c.lengths[s-1]:0
i+=l,_.table.length<=l&&(u++,i=0),c.table.length===W&&(C(n,o,a,c),c=S(r.height-1,0),a++)}for(c.table.length>0&&(C(n,o,a,c),a++);u<r.table.length+t.table.length;)C(n,o,a,x(r.table,t.table,u)),u++,a++
return[n,o]}function M(r){return r.table[r.table.length-1]}function O(r){return r.table[0]}function P(r){var t={ctor:"_Array",height:r.height,table:r.table.slice()}
return r.height>0&&(t.lengths=r.lengths.slice()),t}function J(r){return 0===r.height?r.table.length:r.lengths[r.lengths.length-1]}function q(r,t){for(var e=r>>5*t.height;t.lengths[e]<=r;)e++
return e}function j(r,t){return 0===t?{ctor:"_Array",height:0,table:[r]}:{ctor:"_Array",height:t,table:[j(r,t-1)],lengths:[1]}}function D(r,t){return t===r.height?r:{ctor:"_Array",height:t,table:[D(r,t-1)],lengths:[J(r)]}}function F(r,t){return{ctor:"_Array",height:r.height+1,table:[r,t],lengths:[J(r),J(r)+J(t)]}}function U(r){var t=new Array(J(r))
return z(t,0,r),t}function z(r,t,e){for(var n=0;n<e.table.length;n++)if(0===e.height)r[t+n]=e.table[n]
else{var o=0===n?0:e.lengths[n-1]
z(r,t+o,e.table[n])}}function $(r){return 0===r.length?K:Q(r,Math.floor(Math.log(r.length)/Math.log(W)),0,r.length)}function Q(r,t,e,n){if(0===t)return{ctor:"_Array",height:0,table:r.slice(e,n)}
for(var o=Math.pow(W,t),u=new Array(Math.ceil((n-e)/o)),a=new Array(u.length),c=0;c<u.length;c++)u[c]=Q(r,t-1,e+c*o,Math.min(e+(c+1)*o,n)),a[c]=J(u[c])+(c>0?a[c-1]:0)
return{ctor:"_Array",height:t,table:u,lengths:a}}var W=32,G=2,K={ctor:"_Array",height:0,table:[]}
return{empty:K,fromList:_,toList:d,initialize:r(a),append:r(T),push:r(f),slice:t(y),get:r(e),set:t(o),map:r(v),indexedMap:r(p),foldl:t(m),foldr:t(b),length:J,toJSArray:U,fromJSArray:$}}(),Zr=(Yr.append,Yr.length,Yr.slice,Yr.set,r(function(r,t){return d.cmp(0,r)<1&&d.cmp(r,Yr.length(t))<0?M(i(Yr.get,r,t)):L}),Yr.push,Yr.empty,r(function(t,e){var n=r(function(r,e){return t(r)?i(Yr.push,r,e):e})
return _(Yr.foldl,n,Yr.empty,e)}),Yr.foldr,Yr.foldl,Yr.indexedMap,Yr.map,Yr.toList),rt=(Yr.fromList,Yr.initialize),tt=(r(function(r,t){return i(rt,r,h(t))}),t(function(r,t,e){for(;;){var n=e
if("RBEmpty_elm_builtin"===n.ctor)return t
var o=r,u=_(r,n._1,n._2,_(tt,r,t,n._4)),a=n._3
r=o,t=u,e=a}})),et=function(r){return _(tt,t(function(r,t,e){return{ctor:"::",_0:{ctor:"_Tuple2",_0:r,_1:t},_1:e}}),{ctor:"[]"},r)},nt=t(function(r,t,e){for(;;){var n=e
if("RBEmpty_elm_builtin"===n.ctor)return t
var o=r,u=_(r,n._1,n._2,_(nt,r,t,n._3)),a=n._4
r=o,t=u,e=a}}),ot=(o(function(e,n,o,u,a,c){var i=t(function(r,t,u){for(;;){var a=u,c=a._1,i=a._0,f=i
if("[]"===f.ctor)return{ctor:"_Tuple2",_0:i,_1:_(o,r,t,c)}
var s=f._1,h=f._0._1,v=f._0._0
if(!(d.cmp(v,r)<0))return d.cmp(v,r)>0?{ctor:"_Tuple2",_0:i,_1:_(o,r,t,c)}:{ctor:"_Tuple2",_0:s,_1:l(n,v,h,t,c)}
var p=r,g=t,m={ctor:"_Tuple2",_0:s,_1:_(e,v,h,c)}
r=p,t=g,u=m}}),f=_(nt,i,{ctor:"_Tuple2",_0:et(u),_1:c},a),s=f._0,h=f._1
return _(F,r(function(r,t){var n=r
return _(e,n._0,n._1,t)}),h,s)}),e(function(r,t,e,n){return C.crash(sr({ctor:"::",_0:"Internal red-black tree invariant violated, expected ",_1:{ctor:"::",_0:r,_1:{ctor:"::",_0:" and got ",_1:{ctor:"::",_0:p(t),_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:e,_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:"\nPlease report this bug to <https://github.com/elm-lang/core/issues>",_1:{ctor:"[]"}}}}}}}}}}))})),ut=function(r){var t=r
r:do{if("RBNode_elm_builtin"===t.ctor){if("BBlack"===t._0.ctor)return!0
break r}if("LBBlack"===t._0.ctor)return!0
break r}while(!1)
return!1},at=r(function(r,t){for(;;){var e=t
if("RBEmpty_elm_builtin"===e.ctor)return r
var n=i(at,r+1,e._4),o=e._3
r=n,t=o}}),ct=r(function(r,t){r:for(;;){var e=t
if("RBEmpty_elm_builtin"===e.ctor)return L
var n=i(w,r,e._1)
switch(n.ctor){case"LT":var o=r,u=e._3
r=o,t=u
continue r
case"EQ":return M(e._2)
default:var a=r,c=e._4
r=a,t=c
continue r}}}),it=r(function(r,t){return"Just"===i(ct,r,t).ctor}),_t=t(function(r,t,e){for(;;){var n=e
if("RBEmpty_elm_builtin"===n.ctor)return{ctor:"_Tuple2",_0:r,_1:t}
var o=n._1,u=n._2,a=n._4
r=o,t=u,e=a}}),lt={ctor:"NBlack"},ft={ctor:"BBlack"},st={ctor:"Black"},dt=function(r){var t=r
if("RBNode_elm_builtin"===t.ctor){var e=t._0
return d.eq(e,st)||d.eq(e,ft)}return!0},ht={ctor:"Red"},vt=function(r){switch(r.ctor){case"Black":return ft
case"Red":return st
case"NBlack":return ht
default:return C.crash("Can't make a double black node more black!")}},pt=function(r){switch(r.ctor){case"BBlack":return st
case"Black":return ht
case"Red":return lt
default:return C.crash("Can't make a negative black node less black!")}},gt={ctor:"LBBlack"},mt={ctor:"LBlack"},bt=function(r){return{ctor:"RBEmpty_elm_builtin",_0:r}},yt=bt(mt),kt=n(function(r,t,e,n,o){return{ctor:"RBNode_elm_builtin",_0:r,_1:t,_2:e,_3:n,_4:o}}),wt=function(r){var t=r
return"RBNode_elm_builtin"===t.ctor&&"Red"===t._0.ctor?f(kt,st,t._1,t._2,t._3,t._4):r},Tt=function(r){var t=r
return"RBNode_elm_builtin"===t.ctor?f(kt,pt(t._0),t._1,t._2,t._3,t._4):bt(mt)},Nt=function(r){return function(t){return function(e){return function(n){return function(o){return function(u){return function(a){return function(c){return function(i){return function(_){return function(l){return f(kt,pt(r),n,o,f(kt,st,t,e,c,i),f(kt,st,u,a,_,l))}}}}}}}}}}},Bt=function(r){var t=r
return"RBEmpty_elm_builtin"===t.ctor?bt(mt):f(kt,st,t._1,t._2,t._3,t._4)},Et=function(r){var t=r
return"RBEmpty_elm_builtin"===t.ctor?C.crash("can't make a Leaf red"):f(kt,ht,t._1,t._2,t._3,t._4)},Rt=function(r){var t=r
r:do{t:do{e:do{n:do{o:do{u:do{a:do{if("RBNode_elm_builtin"!==t.ctor)break r
if("RBNode_elm_builtin"===t._3.ctor)if("RBNode_elm_builtin"===t._4.ctor)switch(t._3._0.ctor){case"Red":switch(t._4._0.ctor){case"Red":if("RBNode_elm_builtin"===t._3._3.ctor&&"Red"===t._3._3._0.ctor)break a
if("RBNode_elm_builtin"===t._3._4.ctor&&"Red"===t._3._4._0.ctor)break u
if("RBNode_elm_builtin"===t._4._3.ctor&&"Red"===t._4._3._0.ctor)break o
if("RBNode_elm_builtin"===t._4._4.ctor&&"Red"===t._4._4._0.ctor)break n
break r
case"NBlack":if("RBNode_elm_builtin"===t._3._3.ctor&&"Red"===t._3._3._0.ctor)break a
if("RBNode_elm_builtin"===t._3._4.ctor&&"Red"===t._3._4._0.ctor)break u
if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._4._3.ctor&&"Black"===t._4._3._0.ctor&&"RBNode_elm_builtin"===t._4._4.ctor&&"Black"===t._4._4._0.ctor)break e
break r
default:if("RBNode_elm_builtin"===t._3._3.ctor&&"Red"===t._3._3._0.ctor)break a
if("RBNode_elm_builtin"===t._3._4.ctor&&"Red"===t._3._4._0.ctor)break u
break r}case"NBlack":switch(t._4._0.ctor){case"Red":if("RBNode_elm_builtin"===t._4._3.ctor&&"Red"===t._4._3._0.ctor)break o
if("RBNode_elm_builtin"===t._4._4.ctor&&"Red"===t._4._4._0.ctor)break n
if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._3._3.ctor&&"Black"===t._3._3._0.ctor&&"RBNode_elm_builtin"===t._3._4.ctor&&"Black"===t._3._4._0.ctor)break t
break r
case"NBlack":if("BBlack"===t._0.ctor){if("RBNode_elm_builtin"===t._4._3.ctor&&"Black"===t._4._3._0.ctor&&"RBNode_elm_builtin"===t._4._4.ctor&&"Black"===t._4._4._0.ctor)break e
if("RBNode_elm_builtin"===t._3._3.ctor&&"Black"===t._3._3._0.ctor&&"RBNode_elm_builtin"===t._3._4.ctor&&"Black"===t._3._4._0.ctor)break t
break r}break r
default:if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._3._3.ctor&&"Black"===t._3._3._0.ctor&&"RBNode_elm_builtin"===t._3._4.ctor&&"Black"===t._3._4._0.ctor)break t
break r}default:switch(t._4._0.ctor){case"Red":if("RBNode_elm_builtin"===t._4._3.ctor&&"Red"===t._4._3._0.ctor)break o
if("RBNode_elm_builtin"===t._4._4.ctor&&"Red"===t._4._4._0.ctor)break n
break r
case"NBlack":if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._4._3.ctor&&"Black"===t._4._3._0.ctor&&"RBNode_elm_builtin"===t._4._4.ctor&&"Black"===t._4._4._0.ctor)break e
break r
default:break r}}else switch(t._3._0.ctor){case"Red":if("RBNode_elm_builtin"===t._3._3.ctor&&"Red"===t._3._3._0.ctor)break a
if("RBNode_elm_builtin"===t._3._4.ctor&&"Red"===t._3._4._0.ctor)break u
break r
case"NBlack":if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._3._3.ctor&&"Black"===t._3._3._0.ctor&&"RBNode_elm_builtin"===t._3._4.ctor&&"Black"===t._3._4._0.ctor)break t
break r
default:break r}else{if("RBNode_elm_builtin"!==t._4.ctor)break r
switch(t._4._0.ctor){case"Red":if("RBNode_elm_builtin"===t._4._3.ctor&&"Red"===t._4._3._0.ctor)break o
if("RBNode_elm_builtin"===t._4._4.ctor&&"Red"===t._4._4._0.ctor)break n
break r
case"NBlack":if("BBlack"===t._0.ctor&&"RBNode_elm_builtin"===t._4._3.ctor&&"Black"===t._4._3._0.ctor&&"RBNode_elm_builtin"===t._4._4.ctor&&"Black"===t._4._4._0.ctor)break e
break r
default:break r}}}while(!1)
return Nt(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4)}while(!1)
return Nt(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4)}while(!1)
return Nt(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4)}while(!1)
return Nt(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4)}while(!1)
return f(kt,st,t._4._3._1,t._4._3._2,f(kt,st,t._1,t._2,t._3,t._4._3._3),f(xt,st,t._4._1,t._4._2,t._4._3._4,Et(t._4._4)))}while(!1)
return f(kt,st,t._3._4._1,t._3._4._2,f(xt,st,t._3._1,t._3._2,Et(t._3._3),t._3._4._3),f(kt,st,t._1,t._2,t._3._4._4,t._4))}while(!1)
return r},xt=n(function(r,t,e,n,o){var u=f(kt,r,t,e,n,o)
return dt(u)?Rt(u):u}),At=n(function(r,t,e,n,o){return ut(n)||ut(o)?f(xt,vt(r),t,e,Tt(n),Tt(o)):f(kt,r,t,e,n,o)}),Ct=n(function(r,t,e,n,o){var u=o
return"RBEmpty_elm_builtin"===u.ctor?_(St,r,n,o):f(At,r,t,e,n,f(Ct,u._0,u._1,u._2,u._3,u._4))}),St=t(function(r,t,e){var n={ctor:"_Tuple2",_0:t,_1:e}
if("RBEmpty_elm_builtin"!==n._0.ctor){if("RBEmpty_elm_builtin"===n._1.ctor){var o=n._1._0,u=n._0._0,a={ctor:"_Tuple3",_0:r,_1:u,_2:o}
return"_Tuple3"===a.ctor&&"Black"===a._0.ctor&&"Red"===a._1.ctor&&"LBlack"===a._2.ctor?f(kt,st,n._0._1,n._0._2,n._0._3,n._0._4):l(ot,"Black/Red/LBlack",r,p(u),p(o))}var c=n._0._2,i=n._0._4,s=n._0._1,d=f(Ct,n._0._0,s,c,n._0._3,i),h=_(_t,s,c,i),v=h._0,g=h._1
return f(At,r,v,g,d,e)}if("RBEmpty_elm_builtin"!==n._1.ctor){var m=n._1._0,b=n._0._0,y={ctor:"_Tuple3",_0:r,_1:b,_2:m}
return"_Tuple3"===y.ctor&&"Black"===y._0.ctor&&"LBlack"===y._1.ctor&&"Red"===y._2.ctor?f(kt,st,n._1._1,n._1._2,n._1._3,n._1._4):l(ot,"Black/LBlack/Red",r,p(b),p(m))}switch(r.ctor){case"Red":return bt(mt)
case"Black":return bt(gt)
default:return C.crash("cannot have bblack or nblack nodes at this point")}}),Lt=r(function(r,t){var e=t
if("RBEmpty_elm_builtin"===e.ctor)return bt(mt)
var n=e._1
return f(kt,e._0,n,i(r,n,e._2),i(Lt,r,e._3),i(Lt,r,e._4))}),Mt={ctor:"Same"},Ot={ctor:"Remove"},It={ctor:"Insert"},Pt=t(function(r,t,e){var n=function(e){var o=e
if("RBEmpty_elm_builtin"===o.ctor){var u=t(L)
return"Nothing"===u.ctor?{ctor:"_Tuple2",_0:Mt,_1:yt}:{ctor:"_Tuple2",_0:It,_1:f(kt,ht,r,u._0,yt,yt)}}var a=o._2,c=o._4,l=o._3,s=o._1,d=o._0
switch(i(w,r,s).ctor){case"EQ":var h=t(M(a))
return"Nothing"===h.ctor?{ctor:"_Tuple2",_0:Ot,_1:_(St,d,l,c)}:{ctor:"_Tuple2",_0:Mt,_1:f(kt,d,s,h._0,l,c)}
case"LT":var v=n(l),p=v._0,g=v._1
switch(p.ctor){case"Same":return{ctor:"_Tuple2",_0:Mt,_1:f(kt,d,s,a,g,c)}
case"Insert":return{ctor:"_Tuple2",_0:It,_1:f(xt,d,s,a,g,c)}
default:return{ctor:"_Tuple2",_0:Ot,_1:f(At,d,s,a,g,c)}}default:var m=n(c),p=m._0,b=m._1
switch(p.ctor){case"Same":return{ctor:"_Tuple2",_0:Mt,_1:f(kt,d,s,a,l,b)}
case"Insert":return{ctor:"_Tuple2",_0:It,_1:f(xt,d,s,a,l,b)}
default:return{ctor:"_Tuple2",_0:Ot,_1:f(At,d,s,a,l,b)}}}},o=n(e),u=o._0,a=o._1
switch(u.ctor){case"Same":return a
case"Insert":return wt(a)
default:return Bt(a)}}),Jt=t(function(r,t,e){return _(Pt,r,h(M(t)),e)}),qt=(r(function(r,t){return _(Jt,r,t,yt)}),r(function(r,t){return _(nt,Jt,t,r)}),r(function(r,e){var n=t(function(t,e,n){return i(r,t,e)?_(Jt,t,e,n):n})
return _(nt,n,yt,e)})),jt=(r(function(t,e){return i(qt,r(function(r,t){return i(it,r,e)}),t)}),r(function(r,e){var n=t(function(t,e,n){var o=n,u=o._1,a=o._0
return i(r,t,e)?{ctor:"_Tuple2",_0:_(Jt,t,e,a),_1:u}:{ctor:"_Tuple2",_0:a,_1:_(Jt,t,e,u)}})
return _(nt,n,{ctor:"_Tuple2",_0:yt,_1:yt},e)}),function(t){return _(F,r(function(r,t){var e=r
return _(Jt,e._0,e._1,t)}),yt,t)}),Dt=r(function(r,t){return _(Pt,r,h(L),t)}),Ft=(r(function(r,e){return _(nt,t(function(r,t,e){return i(Dt,r,e)}),r,e)}),function(){function i(r){return{ctor:"<decoder>",tag:"succeed",msg:r}}function _(r){return{ctor:"<decoder>",tag:"fail",msg:r}}function l(r){return{ctor:"<decoder>",tag:r}}function f(r,t){return{ctor:"<decoder>",tag:r,decoder:t}}function s(r){return{ctor:"<decoder>",tag:"null",value:r}}function h(r,t){return{ctor:"<decoder>",tag:"field",field:r,decoder:t}}function v(r,t){return{ctor:"<decoder>",tag:"index",index:r,decoder:t}}function p(r){return{ctor:"<decoder>",tag:"key-value",decoder:r}}function g(r,t){return{ctor:"<decoder>",tag:"map-many",func:r,decoders:t}}function m(r,t){return{ctor:"<decoder>",tag:"andThen",decoder:t,callback:r}}function b(r){return{ctor:"<decoder>",tag:"oneOf",decoders:r}}function y(r,t){return g(r,[t])}function k(r,t,e){return g(r,[t,e])}function w(r,t,e,n){return g(r,[t,e,n])}function T(r,t,e,n,o){return g(r,[t,e,n,o])}function N(r,t,e,n,o,u){return g(r,[t,e,n,o,u])}function B(r,t,e,n,o,u,a){return g(r,[t,e,n,o,u,a])}function E(r,t,e,n,o,u,a,c){return g(r,[t,e,n,o,u,a,c])}function R(r,t,e,n,o,u,a,c,i){return g(r,[t,e,n,o,u,a,c,i])}function x(r){return{tag:"ok",value:r}}function A(r,t){return{tag:"primitive",type:r,value:t}}function C(r,t){return{tag:"index",index:r,rest:t}}function S(r,t){return{tag:"field",field:r,rest:t}}function C(r,t){return{tag:"index",index:r,rest:t}}function O(r){return{tag:"oneOf",problems:r}}function P(r){return{tag:"fail",msg:r}}function J(r){for(var t="_";r;)switch(r.tag){case"primitive":return"Expecting "+r.type+("_"===t?"":" at "+t)+" but instead got: "+q(r.value)
case"index":t+="["+r.index+"]",r=r.rest
break
case"field":t+="."+r.field,r=r.rest
break
case"oneOf":for(var e=r.problems,n=0;n<e.length;n++)e[n]=J(e[n])
return"I ran into the following problems"+("_"===t?"":" at "+t)+":\n\n"+e.join("\n")
case"fail":return"I ran into a `fail` decoder"+("_"===t?"":" at "+t)+": "+r.msg}}function q(r){return void 0===r?"undefined":JSON.stringify(r)}function j(r,t){var e
try{e=JSON.parse(t)}catch(r){return er("Given an invalid JSON: "+r.message)}return D(r,e)}function D(r,t){var e=F(r,t)
return"ok"===e.tag?nr(e.value):er(J(e))}function F(r,t){switch(r.tag){case"bool":return"boolean"==typeof t?x(t):A("a Bool",t)
case"int":return"number"!=typeof t?A("an Int",t):-2147483647<t&&t<2147483647&&(0|t)===t?x(t):!isFinite(t)||t%1?A("an Int",t):x(t)
case"float":return"number"==typeof t?x(t):A("a Float",t)
case"string":return"string"==typeof t?x(t):t instanceof String?x(t+""):A("a String",t)
case"null":return null===t?x(r.value):A("null",t)
case"value":return x(t)
case"list":if(!(t instanceof Array))return A("a List",t)
for(var e=I.Nil,n=t.length;n--;){var o=F(r.decoder,t[n])
if("ok"!==o.tag)return C(n,o)
e=I.Cons(o.value,e)}return x(e)
case"array":if(!(t instanceof Array))return A("an Array",t)
for(var u=t.length,a=new Array(u),n=u;n--;){var o=F(r.decoder,t[n])
if("ok"!==o.tag)return C(n,o)
a[n]=o.value}return x(Yr.fromJSArray(a))
case"maybe":var o=F(r.decoder,t)
return x("ok"===o.tag?M(o.value):L)
case"field":var c=r.field
if("object"!=typeof t||null===t||!(c in t))return A("an object with a field named `"+c+"`",t)
var o=F(r.decoder,t[c])
return"ok"===o.tag?o:S(c,o)
case"index":var i=r.index
if(!(t instanceof Array))return A("an array",t)
if(i>=t.length)return A("a longer array. Need index "+i+" but there are only "+t.length+" entries",t)
var o=F(r.decoder,t[i])
return"ok"===o.tag?o:C(i,o)
case"key-value":if("object"!=typeof t||null===t||t instanceof Array)return A("an object",t)
var _=I.Nil
for(var l in t){var o=F(r.decoder,t[l])
if("ok"!==o.tag)return S(l,o)
var f=d.Tuple2(l,o.value)
_=I.Cons(f,_)}return x(_)
case"map-many":for(var s=r.func,h=r.decoders,n=0;n<h.length;n++){var o=F(h[n],t)
if("ok"!==o.tag)return o
s=s(o.value)}return x(s)
case"andThen":var o=F(r.decoder,t)
return"ok"!==o.tag?o:F(r.callback(o.value),t)
case"oneOf":for(var v=[],p=r.decoders;"[]"!==p.ctor;){var o=F(p._0,t)
if("ok"===o.tag)return o
v.push(o),p=p._1}return O(v)
case"fail":return P(r.msg)
case"succeed":return x(r.msg)}}function U(r,t){if(r===t)return!0
if(r.tag!==t.tag)return!1
switch(r.tag){case"succeed":case"fail":return r.msg===t.msg
case"bool":case"int":case"float":case"string":case"value":return!0
case"null":return r.value===t.value
case"list":case"array":case"maybe":case"key-value":return U(r.decoder,t.decoder)
case"field":return r.field===t.field&&U(r.decoder,t.decoder)
case"index":return r.index===t.index&&U(r.decoder,t.decoder)
case"map-many":return r.func===t.func&&z(r.decoders,t.decoders)
case"andThen":return r.callback===t.callback&&U(r.decoder,t.decoder)
case"oneOf":return z(r.decoders,t.decoders)}}function z(r,t){var e=r.length
if(e!==t.length)return!1
for(var n=0;n<e;n++)if(!U(r[n],t[n]))return!1
return!0}function $(r,t){return JSON.stringify(t,null,r)}function Q(r){return r}function W(r){for(var t={};"[]"!==r.ctor;){var e=r._0
t[e._0]=e._1,r=r._1}return t}return{encode:r($),runOnString:r(j),run:r(D),decodeNull:s,decodePrimitive:l,decodeContainer:r(f),decodeField:r(h),decodeIndex:r(v),map1:r(y),map2:t(k),map3:e(w),map4:n(T),map5:o(N),map6:u(B),map7:a(E),map8:c(R),decodeKeyValuePairs:p,andThen:r(m),fail:_,succeed:i,oneOf:b,identity:Q,encodeNull:null,encodeArray:Yr.toJSArray,encodeList:I.toArray,encodeObject:W,equality:U}}()),Ut=(Ft.encodeList,Ft.encodeArray,Ft.encodeObject,Ft.encodeNull,Ft.identity),zt=(Ft.identity,Ft.identity,Ft.identity),$t=(Ft.encode,Ft.decodeNull,Ft.decodePrimitive("value"),Ft.andThen,Ft.fail,Ft.succeed),Qt=Ft.run,Wt=(Ft.runOnString,Ft.map8,Ft.map7,Ft.map6,Ft.map5,Ft.map4,Ft.map3,Ft.map2,Ft.map1),Gt=(Ft.oneOf,Ft.decodeIndex,Ft.decodeField),Kt=r(function(r,t){return _(D,Gt,t,r)}),Vt=(Ft.decodeKeyValuePairs,Ft.decodePrimitive("float"),Ft.decodePrimitive("int")),Ht=Ft.decodePrimitive("bool"),Xt=Ft.decodePrimitive("string"),Yt=function(){function n(r){return{type:"text",text:r}}function o(t){return r(function(r,e){return u(t,r,e)})}function u(r,t,e){for(var n=p(t),o=n.namespace,u=n.facts,a=[],c=0;"[]"!==e.ctor;){var i=e._0
c+=i.descendantsCount||0,a.push(i),e=e._1}return c+=a.length,{type:"node",tag:r,facts:u,children:a,namespace:o,descendantsCount:c}}function a(r,t,e){for(var n=p(t),o=n.namespace,u=n.facts,a=[],c=0;"[]"!==e.ctor;){var i=e._0
c+=i._1.descendantsCount||0,a.push(i),e=e._1}return c+=a.length,{type:"keyed-node",tag:r,facts:u,children:a,namespace:o,descendantsCount:c}}function c(r,t,e){return{type:"custom",facts:p(r).facts,model:t,impl:e}}function l(r,t){return{type:"tagger",tagger:r,node:t,descendantsCount:1+(t.descendantsCount||0)}}function f(r,t,e){return{type:"thunk",func:r,args:t,thunk:e,node:void 0}}function s(r,t){return f(r,[t],function(){return r(t)})}function h(r,t,e){return f(r,[t,e],function(){return i(r,t,e)})}function v(r,t,e,n){return f(r,[t,e,n],function(){return _(r,t,e,n)})}function p(r){for(var t,e={};"[]"!==r.ctor;){var n=r._0,o=n.key
if(o===dr||o===hr||o===sr){var u=e[o]||{}
u[n.realKey]=n.value,e[o]=u}else if(o===fr){for(var a=e[o]||{},c=n.value;"[]"!==c.ctor;){var i=c._0
a[i._0]=i._1,c=c._1}e[o]=a}else if("namespace"===o)t=n.value
else if("className"===o){var _=e[o]
e[o]=void 0===_?n.value:_+" "+n.value}else e[o]=n.value
r=r._1}return{facts:e,namespace:t}}function g(r){return{key:fr,value:r}}function m(r,t){return{key:r,value:t}}function b(r,t){return{key:dr,realKey:r,value:t}}function y(r,t,e){return{key:hr,realKey:t,value:{value:e,namespace:r}}}function k(r,t,e){return{key:sr,realKey:r,value:{options:t,decoder:e}}}function w(r,t){return(r.options===t.options||r.options.stopPropagation===t.options.stopPropagation&&r.options.preventDefault===t.options.preventDefault)&&Ft.equality(r.decoder,t.decoder)}function T(r,t){return t.key!==sr?t:k(t.realKey,t.value.options,i(Wt,r,t.value.decoder))}function N(r,t){switch(r.type){case"thunk":return r.node||(r.node=r.thunk()),N(r.node,t)
case"tagger":for(var e=r.node,n=r.tagger;"tagger"===e.type;)"object"!=typeof n?n=[n,e.tagger]:n.push(e.tagger),e=e.node
var o={tagger:n,parent:t},u=N(e,o)
return u.elm_event_node_ref=o,u
case"text":return gr.createTextNode(r.text)
case"node":var u=r.namespace?gr.createElementNS(r.namespace,r.tag):gr.createElement(r.tag)
B(u,t,r.facts)
for(var a=r.children,c=0;c<a.length;c++)u.appendChild(N(a[c],t))
return u
case"keyed-node":var u=r.namespace?gr.createElementNS(r.namespace,r.tag):gr.createElement(r.tag)
B(u,t,r.facts)
for(var a=r.children,c=0;c<a.length;c++)u.appendChild(N(a[c]._1,t))
return u
case"custom":var u=r.impl.render(r.model)
return B(u,t,r.facts),u}}function B(r,t,e){for(var n in e){var o=e[n]
switch(n){case fr:E(r,o)
break
case sr:R(r,t,o)
break
case dr:A(r,o)
break
case hr:C(r,o)
break
case"value":r[n]!==o&&(r[n]=o)
break
default:r[n]=o}}}function E(r,t){var e=r.style
for(var n in t)e[n]=t[n]}function R(r,t,e){var n=r.elm_handlers||{}
for(var o in e){var u=n[o],a=e[o]
if(void 0===a)r.removeEventListener(o,u),n[o]=void 0
else if(void 0===u){var u=x(t,a)
r.addEventListener(o,u),n[o]=u}else u.info=a}r.elm_handlers=n}function x(r,t){function e(t){var n=e.info,o=i(Ft.run,n.decoder,t)
if("Ok"===o.ctor){var u=n.options
u.stopPropagation&&t.stopPropagation(),u.preventDefault&&t.preventDefault()
for(var a=o._0,c=r;c;){var _=c.tagger
if("function"==typeof _)a=_(a)
else for(var l=_.length;l--;)a=_[l](a)
c=c.parent}}}return e.info=t,e}function A(r,t){for(var e in t){var n=t[e]
void 0===n?r.removeAttribute(e):r.setAttribute(e,n)}}function C(r,t){for(var e in t){var n=t[e],o=n.namespace,u=n.value
void 0===u?r.removeAttributeNS(o,e):r.setAttributeNS(o,e,u)}}function S(r,t){var e=[]
return M(r,t,e,0),e}function L(r,t,e){return{index:t,type:r,data:e,domNode:void 0,eventNode:void 0}}function M(r,t,e,n){if(r!==t){var o=r.type,u=t.type
if(o!==u)return void e.push(L("p-redraw",n,t))
switch(u){case"thunk":for(var a=r.args,c=t.args,i=a.length,_=r.func===t.func&&i===c.length;_&&i--;)_=a[i]===c[i]
if(_)return void(t.node=r.node)
t.node=t.thunk()
var l=[]
return M(r.node,t.node,l,0),void(l.length>0&&e.push(L("p-thunk",n,l)))
case"tagger":for(var f=r.tagger,s=t.tagger,d=!1,h=r.node;"tagger"===h.type;)d=!0,"object"!=typeof f?f=[f,h.tagger]:f.push(h.tagger),h=h.node
for(var v=t.node;"tagger"===v.type;)d=!0,"object"!=typeof s?s=[s,v.tagger]:s.push(v.tagger),v=v.node
return d&&f.length!==s.length?void e.push(L("p-redraw",n,t)):((d?O(f,s):f===s)||e.push(L("p-tagger",n,s)),void M(h,v,e,n+1))
case"text":if(r.text!==t.text)return void e.push(L("p-text",n,t.text))
return
case"node":if(r.tag!==t.tag||r.namespace!==t.namespace)return void e.push(L("p-redraw",n,t))
var p=I(r.facts,t.facts)
return void 0!==p&&e.push(L("p-facts",n,p)),void P(r,t,e,n)
case"keyed-node":if(r.tag!==t.tag||r.namespace!==t.namespace)return void e.push(L("p-redraw",n,t))
var p=I(r.facts,t.facts)
return void 0!==p&&e.push(L("p-facts",n,p)),void J(r,t,e,n)
case"custom":if(r.impl!==t.impl)return void e.push(L("p-redraw",n,t))
var p=I(r.facts,t.facts)
void 0!==p&&e.push(L("p-facts",n,p))
var g=t.impl.diff(r,t)
if(g)return void e.push(L("p-custom",n,g))
return}}}function O(r,t){for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1
return!0}function I(r,t,e){var n
for(var o in r)if(o!==fr&&o!==sr&&o!==dr&&o!==hr)if(o in t){var u=r[o],a=t[o]
u===a&&"value"!==o||e===sr&&w(u,a)||(n=n||{},n[o]=a)}else n=n||{},n[o]=void 0===e?"string"==typeof r[o]?"":null:e===fr?"":e===sr||e===dr?void 0:{namespace:r[o].namespace,value:void 0}
else{var c=I(r[o],t[o]||{},o)
c&&(n=n||{},n[o]=c)}for(var i in t)i in r||(n=n||{},n[i]=t[i])
return n}function P(r,t,e,n){var o=r.children,u=t.children,a=o.length,c=u.length
a>c?e.push(L("p-remove-last",n,a-c)):a<c&&e.push(L("p-append",n,u.slice(a)))
for(var i=n,_=a<c?a:c,l=0;l<_;l++){i++
var f=o[l]
M(f,u[l],e,i),i+=f.descendantsCount||0}}function J(r,t,e,n){for(var o=[],u={},a=[],c=r.children,i=t.children,_=c.length,l=i.length,f=0,s=0,d=n;f<_&&s<l;){var h=c[f],v=i[s],p=h._0,g=v._0,m=h._1,b=v._1
if(p!==g){var y=f+1<_,k=s+1<l
if(y)var w=c[f+1],T=w._0,N=w._1,B=g===T
if(k)var E=i[s+1],R=E._0,x=E._1,A=p===R
if(y&&k&&A&&B)d++,M(m,x,o,d),q(u,o,p,b,s,a),d+=m.descendantsCount||0,d++,j(u,o,p,N,d),d+=N.descendantsCount||0,f+=2,s+=2
else if(k&&A)d++,q(u,o,g,b,s,a),M(m,x,o,d),d+=m.descendantsCount||0,f+=1,s+=2
else if(y&&B)d++,j(u,o,p,m,d),d+=m.descendantsCount||0,d++,M(N,b,o,d),d+=N.descendantsCount||0,f+=2,s+=1
else{if(!y||!k||T!==R)break
d++,j(u,o,p,m,d),q(u,o,g,b,s,a),d+=m.descendantsCount||0,d++,M(N,x,o,d),d+=N.descendantsCount||0,f+=2,s+=2}}else d++,M(m,b,o,d),d+=m.descendantsCount||0,f++,s++}for(;f<_;){d++
var h=c[f],m=h._1
j(u,o,h._0,m,d),d+=m.descendantsCount||0,f++}for(var C;s<l;){C=C||[]
var v=i[s]
q(u,o,v._0,v._1,void 0,C),s++}(o.length>0||a.length>0||void 0!==C)&&e.push(L("p-reorder",n,{patches:o,inserts:a,endInserts:C}))}function q(r,t,e,n,o,u){var a=r[e]
if(void 0===a)return a={tag:"insert",vnode:n,index:o,data:void 0},u.push({index:o,entry:a}),void(r[e]=a)
if("remove"===a.tag){u.push({index:o,entry:a}),a.tag="move"
var c=[]
return M(a.vnode,n,c,a.index),a.index=o,void(a.data.data={patches:c,entry:a})}q(r,t,e+br,n,o,u)}function j(r,t,e,n,o){var u=r[e]
if(void 0===u){var a=L("p-remove",o,void 0)
return t.push(a),void(r[e]={tag:"remove",vnode:n,index:o,data:a})}if("insert"===u.tag){u.tag="move"
var c=[]
M(n,u.vnode,c,o)
var a=L("p-remove",o,{patches:c,entry:u})
return void t.push(a)}j(r,t,e+br,n,o)}function D(r,t,e,n){F(r,t,e,0,0,t.descendantsCount,n)}function F(r,t,e,n,o,u,a){for(var c=e[n],i=c.index;i===o;){var _=c.type
if("p-thunk"===_)D(r,t.node,c.data,a)
else if("p-reorder"===_){c.domNode=r,c.eventNode=a
var l=c.data.patches
l.length>0&&F(r,t,l,0,o,u,a)}else if("p-remove"===_){c.domNode=r,c.eventNode=a
var f=c.data
if(void 0!==f){f.entry.data=r
var l=f.patches
l.length>0&&F(r,t,l,0,o,u,a)}}else c.domNode=r,c.eventNode=a
if(n++,!(c=e[n])||(i=c.index)>u)return n}switch(t.type){case"tagger":for(var s=t.node;"tagger"===s.type;)s=s.node
return F(r,s,e,n,o+1,u,r.elm_event_node_ref)
case"node":for(var d=t.children,h=r.childNodes,v=0;v<d.length;v++){o++
var p=d[v],g=o+(p.descendantsCount||0)
if(o<=i&&i<=g&&(n=F(h[v],p,e,n,o,g,a),!(c=e[n])||(i=c.index)>u))return n
o=g}return n
case"keyed-node":for(var d=t.children,h=r.childNodes,v=0;v<d.length;v++){o++
var p=d[v]._1,g=o+(p.descendantsCount||0)
if(o<=i&&i<=g&&(n=F(h[v],p,e,n,o,g,a),!(c=e[n])||(i=c.index)>u))return n
o=g}return n
case"text":case"thunk":throw new Error("should never traverse `text` or `thunk` nodes like this")}}function U(r,t,e,n){return 0===e.length?r:(D(r,t,e,n),z(r,e))}function z(r,t){for(var e=0;e<t.length;e++){var n=t[e],o=n.domNode,u=$(o,n)
o===r&&(r=u)}return r}function $(r,t){switch(t.type){case"p-redraw":return Q(r,t.data,t.eventNode)
case"p-facts":return B(r,t.eventNode,t.data),r
case"p-text":return r.replaceData(0,r.length,t.data),r
case"p-thunk":return z(r,t.data)
case"p-tagger":return void 0!==r.elm_event_node_ref?r.elm_event_node_ref.tagger=t.data:r.elm_event_node_ref={tagger:t.data,parent:t.eventNode},r
case"p-remove-last":for(var e=t.data;e--;)r.removeChild(r.lastChild)
return r
case"p-append":for(var n=t.data,e=0;e<n.length;e++)r.appendChild(N(n[e],t.eventNode))
return r
case"p-remove":var o=t.data
if(void 0===o)return r.parentNode.removeChild(r),r
var u=o.entry
return void 0!==u.index&&r.parentNode.removeChild(r),u.data=z(r,o.patches),r
case"p-reorder":return W(r,t)
case"p-custom":var a=t.data
return a.applyPatch(r,a.data)
default:throw new Error("Ran into an unknown patch!")}}function Q(r,t,e){var n=r.parentNode,o=N(t,e)
return void 0===o.elm_event_node_ref&&(o.elm_event_node_ref=r.elm_event_node_ref),n&&o!==r&&n.replaceChild(o,r),o}function W(r,t){var e=t.data,n=G(e.endInserts,t)
r=z(r,e.patches)
for(var o=e.inserts,u=0;u<o.length;u++){var a=o[u],c=a.entry,i="move"===c.tag?c.data:N(c.vnode,t.eventNode)
r.insertBefore(i,r.childNodes[a.index])}return void 0!==n&&r.appendChild(n),r}function G(r,t){if(void 0!==r){for(var e=gr.createDocumentFragment(),n=0;n<r.length;n++){var o=r[n],u=o.entry
e.appendChild("move"===u.tag?u.data:N(u.vnode,t.eventNode))}return e}}function K(t){return r(function(r,e){return function(n){return function(o,u,a){var c=t(n,u)
void 0===a?Z(e,o,u,c):er(i(r,a,e),o,u,c)}}})}function V(t){var e=d.Tuple2(d.Tuple0,mr)
return i(yr,Fr,{init:e,view:function(){return t},update:r(function(){return e}),subscriptions:function(){return kr}})()}function H(r,t){return function(r,e,n){if(void 0===e)return r
Y("The `"+t+"` module does not need flags.\nInitialize it with no arguments and you should be all set!",n)}}function X(r,t){return function(e,n,o){if(void 0===r){var u="Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+t+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags."
Y(u,o)}var a=i(Ft.run,r,n)
if("Ok"===a.ctor)return e(a._0)
var u="Trying to initialize the `"+t+"` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+a._0
Y(u,o)}}function Y(r,t){throw t&&(t.innerHTML='<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">'+r+"</pre></div>"),new Error(r)}function Z(r,t,e,n){t.embed=function(t,e){for(;t.lastChild;)t.removeChild(t.lastChild)
return vr.initialize(n(r.init,e,t),r.update,r.subscriptions,rr(t,r.view))},t.fullscreen=function(t){return vr.initialize(n(r.init,t,document.body),r.update,r.subscriptions,rr(document.body,r.view))}}function rr(r,t){return function(e,n){var o={tagger:e,parent:void 0},u=t(n),a=N(u,o)
return r.appendChild(a),tr(a,t,u,o)}}function tr(r,t,e,n){function o(){switch(a){case"NO_REQUEST":throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.")
case"PENDING_REQUEST":Tr(o),a="EXTRA_REQUEST"
var e=t(u),i=S(c,e)
return r=U(r,c,i,n),void(c=e)
case"EXTRA_REQUEST":return void(a="NO_REQUEST")}}var u,a="NO_REQUEST",c=e
return function(r){"NO_REQUEST"===a&&Tr(o),a="PENDING_REQUEST",u=r}}function er(r,t,e,n){t.fullscreen=function(t){var o={doc:void 0}
return vr.initialize(n(r.init,t,document.body),r.update(nr(o)),r.subscriptions,or(e,document.body,o,r.view,r.viewIn,r.viewOut))},t.embed=function(t,o){var u={doc:void 0}
return vr.initialize(n(r.init,o,t),r.update(nr(u)),r.subscriptions,or(e,t,u,r.view,r.viewIn,r.viewOut))}}function nr(r){return pr.nativeBinding(function(t){var e=r.doc
if(e){var n=e.getElementsByClassName("debugger-sidebar-messages")[0]
n&&(n.scrollTop=n.scrollHeight)}t(pr.succeed(d.Tuple0))})}function or(r,t,e,n,o,u){return function(a,c){var i={tagger:a,parent:void 0},_={tagger:a,parent:void 0},l=n(c),f=N(l,i)
t.appendChild(f)
var s=tr(f,n,l,i),d=o(c)._1,h=N(d,_)
t.appendChild(h)
var v=cr(i,h,o),p=tr(h,v,d,_),g=ur(c,u,_,t,r,e)
return function(r){s(r),p(r),g(r)}}}function ur(r,t,e,n,o,u){var a,c
return function(r){if(r.isDebuggerOpen){if(!u.doc)return a=t(r),void(c=ar(o,u,a,e))
gr=u.doc
var n=t(r),i=S(a,n)
c=U(c,a,i,e),a=n,gr=document}}}function ar(r,t,e,n){function o(){t.doc=void 0,c.close()}var u=screen.width-900,a=screen.height-360,c=window.open("","","width=900,height=360,left="+u+",top="+a)
gr=c.document,t.doc=gr,gr.title="Debugger - "+r,gr.body.style.margin="0",gr.body.style.padding="0"
var i=N(e,n)
return gr.body.appendChild(i),gr.addEventListener("keydown",function(r){r.metaKey&&82===r.which&&window.location.reload(),38===r.which&&(n.tagger({ctor:"Up"}),r.preventDefault()),40===r.which&&(n.tagger({ctor:"Down"}),r.preventDefault())}),window.addEventListener("unload",o),c.addEventListener("unload",function(){t.doc=void 0,window.removeEventListener("unload",o),n.tagger({ctor:"Close"})}),gr=document,i}function cr(r,t,e){var n,o=lr(t),u="Normal",a=r.tagger,c=function(){}
return function(t){var i=e(t),_=i._0.ctor
return r.tagger="Normal"===_?a:c,u!==_&&(ir("removeEventListener",o,u),ir("addEventListener",o,_),"Normal"===u&&(n=document.body.style.overflow,document.body.style.overflow="hidden"),"Normal"===_&&(document.body.style.overflow=n),u=_),i._1}}function ir(r,t,e){switch(e){case"Normal":return
case"Pause":return _r(r,t,Nr)
case"Message":return _r(r,t,Br)}}function _r(r,t,e){for(var n=0;n<e.length;n++)document.body[r](e[n],t,!0)}function lr(r){return function(t){if("keydown"!==t.type||!t.metaKey||82!==t.which){for(var e="scroll"===t.type||"wheel"===t.type,n=t.target;null!==n;){if("elm-overlay-message-details"===n.className&&e)return
if(n===r&&!e)return
n=n.parentNode}t.stopPropagation(),t.preventDefault()}}}var fr="STYLE",sr="EVENT",dr="ATTR",hr="ATTR_NS",gr="undefined"!=typeof document?document:{},br="_elmW6BL",yr=K(H),wr=K(X),Tr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)},Nr=["click","dblclick","mousemove","mouseup","mousedown","mouseenter","mouseleave","touchstart","touchend","touchcancel","touchmove","pointerdown","pointerup","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointercancel","dragstart","drag","dragend","dragenter","dragover","dragleave","drop","keyup","keydown","keypress","input","change","focus","blur"],Br=Nr.concat("wheel","scroll")
return{node:o,text:n,custom:c,map:r(l),on:t(k),style:g,property:r(m),attribute:r(b),attributeNS:t(y),mapProperty:r(T),lazy:r(s),lazy2:t(h),lazy3:e(v),keyedNode:t(a),program:yr,programWithFlags:wr,staticProgram:V}}(),Zt=function(r){return i(Yt.program,Fr,r)},re=(Yt.keyedNode,Yt.lazy3,Yt.lazy2,Yt.lazy,{stopPropagation:!1,preventDefault:!1}),te=Yt.on,ee=r(function(r,t){return _(te,r,re,t)}),ne=Yt.style,oe=(Yt.mapProperty,Yt.attributeNS,Yt.attribute,Yt.property),ue=(Yt.map,Yt.text),ae=Yt.node,ce=(r(function(r,t){return{stopPropagation:r,preventDefault:t}}),Zt),ie=ue,_e=ae,le=(_e("body"),_e("section"),_e("nav"),_e("article"),_e("aside"),_e("h1"),_e("h2"),_e("h3"),_e("h4"),_e("h5"),_e("h6"),_e("header"),_e("footer"),_e("address"),_e("main"),_e("p"),_e("hr"),_e("pre"),_e("blockquote"),_e("ol"),_e("ul"),_e("li"),_e("dl"),_e("dt"),_e("dd"),_e("figure"),_e("figcaption"),_e("div")),fe=(_e("a"),_e("em"),_e("strong"),_e("small"),_e("s"),_e("cite"),_e("q"),_e("dfn"),_e("abbr"),_e("time"),_e("code"),_e("var"),_e("samp"),_e("kbd"),_e("sub"),_e("sup"),_e("i"),_e("b"),_e("u"),_e("mark"),_e("ruby"),_e("rt"),_e("rp"),_e("bdi"),_e("bdo"),_e("span"),_e("br"),_e("wbr"),_e("ins"),_e("del"),_e("img"),_e("iframe"),_e("embed"),_e("object"),_e("param"),_e("video"),_e("audio"),_e("source"),_e("track"),_e("canvas"),_e("math"),_e("table"),_e("caption"),_e("colgroup"),_e("col"),_e("tbody"),_e("thead"),_e("tfoot"),_e("tr"),_e("td"),_e("th"),_e("form"),_e("fieldset"),_e("legend"),_e("label"),_e("input")),se=_e("button"),de=(_e("select"),_e("datalist"),_e("optgroup"),_e("option"),_e("textarea"),_e("keygen"),_e("output"),_e("progress"),_e("meter"),_e("details"),_e("summary"),_e("menuitem"),_e("menu"),oe),he=r(function(r,t){return i(de,r,zt(t))}),ve=(r(function(r,t){return i(de,r,Ut(t))}),ne),pe=(i(Gt,"keyCode",Vt),i(Kt,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"checked",_1:{ctor:"[]"}}},Ht),i(Kt,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"value",_1:{ctor:"[]"}}},Xt)),ge=re,me=ee,be=(d.update(ge,{preventDefault:!0}),function(r){return i(me,"click",$t(r))}),ye=(r(function(r,t){return{stopPropagation:r,preventDefault:t}}),r(function(r,t){var e=m(r)
return g(i(v["%"],e,t))+r-g(e)})),ke=(t(function(r,t,e){var n=g(e)/255,o=g(t)/255,u=g(r)/255,a=i(y,i(y,u,o),n),c=i(k,i(k,u,o),n),_=a-c,l=(a+c)/2,f=d.eq(l,0)?0:_/(1-N(2*l-1))
return{ctor:"_Tuple3",_0:E(60)*(d.eq(a,u)?i(ye,(o-n)/_,6):d.eq(a,o)?(n-u)/_+2:(u-o)/_+4),_1:f,_2:l}}),t(function(r,t,e){var n=r/E(60),o=(1-N(2*e-1))*t,u=o*(1-N(i(ye,n,2)-1)),a=d.cmp(n,0)<0?{ctor:"_Tuple3",_0:0,_1:0,_2:0}:d.cmp(n,1)<0?{ctor:"_Tuple3",_0:o,_1:u,_2:0}:d.cmp(n,2)<0?{ctor:"_Tuple3",_0:u,_1:o,_2:0}:d.cmp(n,3)<0?{ctor:"_Tuple3",_0:0,_1:o,_2:u}:d.cmp(n,4)<0?{ctor:"_Tuple3",_0:0,_1:u,_2:o}:d.cmp(n,5)<0?{ctor:"_Tuple3",_0:u,_1:0,_2:o}:d.cmp(n,6)<0?{ctor:"_Tuple3",_0:o,_1:0,_2:u}:{ctor:"_Tuple3",_0:0,_1:0,_2:0},c=a._0,_=a._1,l=a._2,f=e-o/2
return{ctor:"_Tuple3",_0:c+f,_1:_+f,_2:l+f}})),we=function(r){var t=r
if("RGBA"===t.ctor)return{red:t._0,green:t._1,blue:t._2,alpha:t._3}
var e=_(ke,t._0,t._1,t._2),n=e._0,o=e._1,u=e._2
return{red:b(255*n),green:b(255*o),blue:b(255*u),alpha:t._3}},Te=e(function(r,t,e,n){return{ctor:"HSLA",_0:r,_1:t,_2:e,_3:n}}),Ne=e(function(r,t,e,n){return l(Te,r-B(g(m(r/(2*T)))),t,e,n)}),Be=(t(function(r,t,e){return l(Ne,r,t,e,1)}),e(function(r,t,e,n){return{ctor:"RGBA",_0:r,_1:t,_2:e,_3:n}})),Ee=(t(function(r,t,e){return l(Be,r,t,e,1)}),l(Be,239,41,41,1)),Re=(l(Be,204,0,0,1),l(Be,164,0,0,1),l(Be,252,175,62,1)),xe=(l(Be,245,121,0,1),l(Be,206,92,0,1),l(Be,255,233,79,1)),Ae=(l(Be,237,212,0,1),l(Be,196,160,0,1),l(Be,138,226,52,1)),Ce=(l(Be,115,210,22,1),l(Be,78,154,6,1),l(Be,114,159,207,1)),Se=(l(Be,52,101,164,1),l(Be,32,74,135,1),l(Be,173,127,168,1)),Le=(l(Be,117,80,123,1),l(Be,92,53,102,1),l(Be,233,185,110,1),l(Be,193,125,17,1),l(Be,143,89,2,1),l(Be,0,0,0,1),l(Be,255,255,255,1),l(Be,238,238,236,1)),Me=(l(Be,211,215,207,1),l(Be,186,189,182,1),l(Be,238,238,236,1),l(Be,211,215,207,1),l(Be,186,189,182,1),l(Be,136,138,133,1),l(Be,85,87,83,1),l(Be,46,52,54,1),n(function(r,t,e,n,o){return{ctor:"Radial",_0:r,_1:t,_2:e,_3:n,_4:o}}),t(function(r,t,e){return{ctor:"Linear",_0:r,_1:t,_2:e}}),{ctor:"::",_0:ve({ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"15px"},_1:{ctor:"[]"}}}),_1:{ctor:"[]"}}),Oe=function(r){var t=r
return"Nothing"===t.ctor?ie(""):i(le,Me,{ctor:"::",_0:ie(i(v["++"],"finished in ",i(v["++"],p(t._0)," moves."))),_1:{ctor:"[]"}})},Ie=function(r){var t=r
return"Nothing"===t.ctor?ie(""):i(le,Me,{ctor:"::",_0:ie(p(t._0)),_1:{ctor:"[]"}})},Pe=function(r){var t=we(r),e=p(function(r){return r.red}(t)),n=p(function(r){return r.green}(t)),o=p(function(r){return r.blue}(t)),u=p(function(r){return r.alpha}(t))
return i(v["++"],"rgba(",i(v["++"],i(lr,",",{ctor:"::",_0:e,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:u,_1:{ctor:"[]"}}}}}),")"))},Je=function(r){return{ctor:"::",_0:ve({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:Pe(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-size",_1:"3px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-style",_1:"solid"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-color",_1:"white"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"width",_1:"50px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"text-align",_1:"center"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"user-select",_1:"none"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"cursor",_1:"default"},_1:{ctor:"[]"}}}}}}}}}}}}}}),_1:{ctor:"[]"}}},qe=r(function(r,t){return i(le,Je(i(S,Le,i(ct,t,r))),{ctor:"::",_0:ie(p(t)),_1:{ctor:"[]"}})}),je=r(function(r,t){var e=r
if("Nothing"===e.ctor)return i(le,{ctor:"[]"},{ctor:"[]"})
var n=t
return"Nothing"===n.ctor?i(le,{ctor:"[]"},{ctor:"[]"}):i(le,{ctor:"[]"},i($,le({ctor:"[]"}),i(function(r){return $($(r))},qe(n._0),e._0)))}),De=W({ctor:"::",_0:Ee,_1:{ctor:"::",_0:Re,_1:{ctor:"::",_0:xe,_1:{ctor:"::",_0:Ae,_1:{ctor:"::",_0:Ce,_1:{ctor:"::",_0:Se,_1:{ctor:"::",_0:Ee,_1:{ctor:"::",_0:Re,_1:{ctor:"::",_0:xe,_1:{ctor:"::",_0:Ae,_1:{ctor:"::",_0:Ce,_1:{ctor:"::",_0:Se,_1:{ctor:"[]"}}}}}}}}}}}}}),Fe=function(t){return jt(K(i($,function(r){var t=r
return i($,function(r){return{ctor:"_Tuple2",_0:r,_1:t._0}},t._1)},_(J,r(function(r,t){return{ctor:"_Tuple2",_0:r,_1:t}}),De,Br(Er(i($,U,t)))))))},Ue=(u(function(r,t,e,n,o,u,a){return{partitionString:r,gameState:t,tableauError:e,tableau:n,finalTableau:o,moveCounter:u,colorMap:a}}),{ctor:"Finished"}),ze={ctor:"Live"},$e={ctor:"InputPartition"},Qe={partitionString:"",gameState:$e,tableauError:L,tableau:L,finalTableau:L,moveCounter:L,colorMap:L},We=r(function(r,t){var e=r
switch(e.ctor){case"Play":var n=Mr(Xr(t.partitionString))
if("Err"===n.ctor)return d.update(t,{gameState:$e,tableauError:M(n._0),tableau:L,finalTableau:L,moveCounter:M(0),colorMap:L})
if("[]"===n._0.ctor)return t
var o=n._0
return d.update(t,{gameState:ze,tableauError:L,tableau:M(o),finalTableau:M(Er(i($,U,o))),moveCounter:M(0),colorMap:M(Fe(o))})
case"NewGame":return d.update(t,{partitionString:"",gameState:$e,tableauError:L,tableau:L,finalTableau:L,moveCounter:L,colorMap:L})
case"Swap":var u=t.tableau
if("Nothing"===u.ctor)return t
var a=i(Pr,e._0,u._0)
if("Err"===a.ctor)return d.eq(t.tableau,t.finalTableau)?d.update(t,{gameState:Ue,tableauError:L,moveCounter:i(O,function(r){return r+1},t.moveCounter)}):d.update(t,{tableauError:M(a._0),moveCounter:i(O,function(r){return r+1},t.moveCounter)})
var c=a._0
return d.eq(M(c),t.finalTableau)?d.update(t,{gameState:Ue,tableauError:L,tableau:M(c),moveCounter:i(O,function(r){return r+1},t.moveCounter)}):d.update(t,{tableauError:L,tableau:M(c),moveCounter:i(O,function(r){return r+1},t.moveCounter)})
default:return d.update(t,{partitionString:e._0})}}),Ge=function(r){return{ctor:"ReadPartition",_0:r}},Ke=i(fe,i(v["++"],{ctor:"::",_0:function(r){return i(he,"placeholder",r)}("Choose a partition."),_1:{ctor:"::",_0:function(r){return i(me,"input",i(Wt,r,pe))}(Ge),_1:{ctor:"[]"}}},Me),{ctor:"[]"}),Ve=function(r){return{ctor:"Swap",_0:r}},He=r(function(r,t){return i(le,i(v["++"],Je(i(S,Le,i(ct,t,r))),{ctor:"::",_0:be(Ve(t)),_1:{ctor:"[]"}}),{ctor:"::",_0:ie(p(t)),_1:{ctor:"[]"}})}),Xe=r(function(r,t){var e=r
if("Nothing"===e.ctor)return i(le,{ctor:"[]"},{ctor:"[]"})
var n=t
return"Nothing"===n.ctor?i(le,{ctor:"[]"},{ctor:"[]"}):i(le,{ctor:"[]"},i($,le({ctor:"[]"}),i(function(r){return $($(r))},He(n._0),e._0)))}),Ye={ctor:"NewGame"},Ze=i(se,i(v["++"],{ctor:"::",_0:be(Ye),_1:{ctor:"[]"}},Me),{ctor:"::",_0:ie("new game"),_1:{ctor:"[]"}}),rn={ctor:"Play"},tn=i(se,i(v["++"],{ctor:"::",_0:be(rn),_1:{ctor:"[]"}},Me),{ctor:"::",_0:ie("play"),_1:{ctor:"[]"}}),en=function(r){return i(le,{ctor:"[]"},{ctor:"::",_0:function(){switch(r.gameState.ctor){case"InputPartition":return i(le,{ctor:"[]"},{ctor:"::",_0:i(le,{ctor:"[]"},{ctor:"::",_0:Ke,_1:{ctor:"::",_0:tn,_1:{ctor:"[]"}}}),_1:{ctor:"::",_0:Ie(r.tableauError),_1:{ctor:"[]"}}})
case"Live":return i(le,{ctor:"[]"},{ctor:"::",_0:Ze,_1:{ctor:"::",_0:i(Xe,r.tableau,r.colorMap),_1:{ctor:"::",_0:Ie(r.tableauError),_1:{ctor:"[]"}}}})
default:return i(le,{ctor:"[]"},{ctor:"::",_0:i(le,{ctor:"[]"},{ctor:"::",_0:Ze,_1:{ctor:"::",_0:i(je,r.tableau,r.colorMap),_1:{ctor:"[]"}}}),_1:{ctor:"::",_0:Oe(r.moveCounter),_1:{ctor:"[]"}}})}}(),_1:{ctor:"[]"}})},nn=function(t){var e=t
return ce({init:i(br["!"],e.model,{ctor:"[]"}),update:r(function(r,t){return i(br["!"],i(e.update,r,t),{ctor:"[]"})}),view:e.view,subscriptions:function(r){return kr}})}({model:Qe,view:en,update:We})(),on={}
if(on.Main=on.Main||{},void 0!==nn&&nn(on.Main,"Main",void 0),"function"==typeof define&&define.amd)return void define([],function(){return on})
if("object"==typeof module)return void(module.exports=on)
var un=this.Elm
if(void 0===un)return void(this.Elm=on)
for(var an in on){if(an in un)throw new Error("There are two Elm modules called `"+an+"` on this page! Rename one of them.")
un[an]=on[an]}}).call(this)
