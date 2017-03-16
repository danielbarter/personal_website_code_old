(function(){"use strict"
function r(r){function e(e){return function(t){return r(e,t)}}return e.arity=2,e.func=r,e}function e(r){function e(e){return function(t){return function(_){return r(e,t,_)}}}return e.arity=3,e.func=r,e}function t(r){function e(e){return function(t){return function(_){return function(n){return r(e,t,_,n)}}}}return e.arity=4,e.func=r,e}function _(r){function e(e){return function(t){return function(_){return function(n){return function(o){return r(e,t,_,n,o)}}}}}return e.arity=5,e.func=r,e}function n(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(u){return r(e,t,_,n,o,u)}}}}}}return e.arity=6,e.func=r,e}function o(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(u){return function(c){return r(e,t,_,n,o,u,c)}}}}}}}return e.arity=7,e.func=r,e}function u(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(u){return function(c){return function(a){return r(e,t,_,n,o,u,c,a)}}}}}}}}return e.arity=8,e.func=r,e}function c(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(u){return function(c){return function(a){return function(i){return r(e,t,_,n,o,u,c,a,i)}}}}}}}}}return e.arity=9,e.func=r,e}function a(r,e,t){return 2===r.arity?r.func(e,t):r(e)(t)}function i(r,e,t,_){return 3===r.arity?r.func(e,t,_):r(e)(t)(_)}function l(r,e,t,_,n){return 4===r.arity?r.func(e,t,_,n):r(e)(t)(_)(n)}function s(r,e,t,_,n,o){return 5===r.arity?r.func(e,t,_,n,o):r(e)(t)(_)(n)(o)}function p(r,e,t,_,n,o,u,c){return 7===r.arity?r.func(e,t,_,n,o,u,c):r(e)(t)(_)(n)(o)(u)(c)}function f(r,e,t,_,n,o,u,c,a){return 8===r.arity?r.func(e,t,_,n,o,u,c,a):r(e)(t)(_)(n)(o)(u)(c)(a)}var d=function(){function t(r,e){return r/e|0}function _(r,e){return r%e}function n(r,e){if(0===e)throw new Error("Cannot perform mod 0. Division by zero error.")
var t=r%e,_=0===r?0:e>0?r>=0?t:t+e:-n(-r,-e)
return _===e?0:_}function o(r,e){return Math.log(e)/Math.log(r)}function u(r){return-r}function c(r){return r<0?-r:r}function a(r,e){return v.cmp(r,e)<0?r:e}function i(r,e){return v.cmp(r,e)>0?r:e}function l(r,e,t){return v.cmp(t,r)<0?r:v.cmp(t,e)>0?e:t}function s(r,e){return{ctor:I[v.cmp(r,e)+1]}}function p(r,e){return r!==e}function f(r){return!r}function d(r){return r===1/0||r===-(1/0)}function m(r){return 0|r}function g(r){return r*Math.PI/180}function h(r){return 2*Math.PI*r}function T(r){var e=r._0,t=r._1
return v.Tuple2(e*Math.cos(t),e*Math.sin(t))}function N(r){var e=r._0,t=r._1
return v.Tuple2(Math.sqrt(e*e+t*t),Math.atan2(t,e))}var I=["LT","EQ","GT"]
return{div:r(t),rem:r(_),mod:r(n),pi:Math.PI,e:Math.E,cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,atan2:r(Math.atan2),degrees:g,turns:h,fromPolar:T,toPolar:N,sqrt:Math.sqrt,logBase:r(o),negate:u,abs:c,min:r(a),max:r(i),clamp:e(l),compare:r(s),xor:r(p),not:f,truncate:m,ceiling:Math.ceil,floor:Math.floor,round:Math.round,toFloat:function(r){return r},isNaN:isNaN,isInfinite:d}}(),v=function(){function e(r,e){for(var _,n=[],o=t(r,e,0,n);o&&(_=n.pop());)o=t(_.x,_.y,0,n)
return o}function t(r,e,_,n){if(_>100)return n.push({x:r,y:e}),!0
if(r===e)return!0
if("object"!=typeof r){if("function"==typeof r)throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.')
return!1}if(null===r||null===e)return!1
if(r instanceof Date)return r.getTime()===e.getTime()
if(!("ctor"in r)){for(var o in r)if(!t(r[o],e[o],_+1,n))return!1
return!0}if("RBNode_elm_builtin"!==r.ctor&&"RBEmpty_elm_builtin"!==r.ctor||(r=bn(r),e=bn(e)),"Set_elm_builtin"===r.ctor&&(r=_elm_lang$core$Set$toList(r),e=_elm_lang$core$Set$toList(e)),"::"===r.ctor){for(var u=r,c=e;"::"===u.ctor&&"::"===c.ctor;){if(!t(u._0,c._0,_+1,n))return!1
u=u._1,c=c._1}return u.ctor===c.ctor}if("_Array"===r.ctor){var a=Wu.toJSArray(r),i=Wu.toJSArray(e)
if(a.length!==i.length)return!1
for(var l=0;l<a.length;l++)if(!t(a[l],i[l],_+1,n))return!1
return!0}if(!t(r.ctor,e.ctor,_+1,n))return!1
for(var o in r)if(!t(r[o],e[o],_+1,n))return!1
return!0}function _(r,e){if("object"!=typeof r)return r===e?m:r<e?v:g
if(r instanceof String){var t=r.valueOf(),n=e.valueOf()
return t===n?m:t<n?v:g}if("::"===r.ctor||"[]"===r.ctor){for(;"::"===r.ctor&&"::"===e.ctor;){var o=_(r._0,e._0)
if(o!==m)return o
r=r._1,e=e._1}return r.ctor===e.ctor?m:"[]"===r.ctor?v:g}if("_Tuple"===r.ctor.slice(0,6)){var o,u=r.ctor.slice(6)-0
if(0===u)return m
if(u>=1){if((o=_(r._0,e._0))!==m)return o
if(u>=2){if((o=_(r._1,e._1))!==m)return o
if(u>=3){if((o=_(r._2,e._2))!==m)return o
if(u>=4){if((o=_(r._3,e._3))!==m)return o
if(u>=5){if((o=_(r._4,e._4))!==m)return o
if(u>=6){if((o=_(r._5,e._5))!==m)return o
if(u>=7)throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")}}}}}}return m}throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")}function n(r,e){return{ctor:"_Tuple2",_0:r,_1:e}}function o(r){return new String(r)}function u(r){return T++}function c(r,e){var t={}
for(var _ in r)t[_]=r[_]
for(var _ in e)t[_]=e[_]
return t}function a(r,e){return{ctor:"::",_0:r,_1:e}}function i(r,e){if("string"==typeof r)return r+e
if("[]"===r.ctor)return e
var t=a(r._0,N),_=t
for(r=r._1;"[]"!==r.ctor;)_._1=a(r._0,N),r=r._1,_=_._1
return _._1=e,t}function l(r,e){return function(t){throw new Error("Ran into a `Debug.crash` in module `"+r+"` "+p(e)+"\nThe message provided by the code author is:\n\n    "+t)}}function s(r,e,t){return function(_){throw new Error("Ran into a `Debug.crash` in module `"+r+"`\n\nThis was caused by the `case` expression "+p(e)+".\nOne of the branches ended with a crash and the following value got through:\n\n    "+f(t)+"\n\nThe message provided by the code author is:\n\n    "+_)}}function p(r){return r.start.line==r.end.line?"on line "+r.start.line:"between lines "+r.start.line+" and "+r.end.line}function f(r){var e=typeof r
if("function"===e)return"<function>"
if("boolean"===e)return r?"True":"False"
if("number"===e)return r+""
if(r instanceof String)return"'"+d(r,!0)+"'"
if("string"===e)return'"'+d(r,!1)+'"'
if(null===r)return"null"
if("object"===e&&"ctor"in r){var t=r.ctor.substring(0,5)
if("_Tupl"===t){var _=[]
for(var n in r)"ctor"!==n&&_.push(f(r[n]))
return"("+_.join(",")+")"}if("_Task"===t)return"<task>"
if("_Array"===r.ctor){return"Array.fromList "+f(Qu(r))}if("<decoder>"===r.ctor)return"<decoder>"
if("_Process"===r.ctor)return"<process:"+r.id+">"
if("::"===r.ctor){var _="["+f(r._0)
for(r=r._1;"::"===r.ctor;)_+=","+f(r._0),r=r._1
return _+"]"}if("[]"===r.ctor)return"[]"
if("Set_elm_builtin"===r.ctor)return"Set.fromList "+f(_elm_lang$core$Set$toList(r))
if("RBNode_elm_builtin"===r.ctor||"RBEmpty_elm_builtin"===r.ctor)return"Dict.fromList "+f(bn(r))
var _=""
for(var o in r)if("ctor"!==o){var u=f(r[o]),c=u[0],a="{"===c||"("===c||"<"===c||'"'===c||u.indexOf(" ")<0
_+=" "+(a?u:"("+u+")")}return r.ctor+_}if("object"===e){if(r instanceof Date)return"<"+r.toString()+">"
if(r.elm_web_socket)return"<websocket>"
var _=[]
for(var n in r)_.push(n+" = "+f(r[n]))
return 0===_.length?"{}":"{ "+_.join(", ")+" }"}return"<internal structure>"}function d(r,e){var t=r.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0")
return e?t.replace(/\'/g,"\\'"):t.replace(/\"/g,'\\"')}var v=-1,m=0,g=1,h={ctor:"_Tuple0"},T=0,N={ctor:"[]"}
return{eq:e,cmp:_,Tuple0:h,Tuple2:n,chr:o,update:c,guid:u,append:r(i),crash:l,crashCase:s,toString:f}}(),m=(r(function(r,e){var t=e
return a(r,t._0,t._1)}),e(function(r,e,t){return r({ctor:"_Tuple2",_0:e,_1:t})}),e(function(r,e,t){return a(r,t,e)})),g=r(function(r,e){return r}),h=function(r){return r},T=T||{}
T["<|"]=r(function(r,e){return r(e)})
var T=T||{}
T["|>"]=r(function(r,e){return e(r)})
var T=T||{}
T[">>"]=e(function(r,e,t){return e(r(t))})
var T=T||{}
T["<<"]=e(function(r,e,t){return r(e(t))})
var T=T||{}
T["++"]=v.append
var N=v.toString,I=(d.isInfinite,d.isNaN,d.toFloat),b=(d.ceiling,d.floor),J=(d.truncate,d.round),T=(d.not,d.xor,T||{})
T["||"]=d.or
var T=T||{}
T["&&"]=d.and
var w=d.max,y=d.min,k=d.compare,T=T||{}
T[">="]=d.ge
var T=T||{}
T["<="]=d.le
var T=T||{}
T[">"]=d.gt
var T=T||{}
T["<"]=d.lt
var T=T||{}
T["/="]=d.neq
var T=T||{}
T["=="]=d.eq
var E=(d.e,d.pi),A=(d.clamp,d.logBase,d.abs),X=d.negate,T=(d.sqrt,d.atan2,d.atan,d.asin,d.acos,d.tan,d.sin,d.cos,T||{})
T["^"]=d.exp
var T=T||{}
T["%"]=d.mod
var T=(d.rem,T||{})
T["//"]=d.div
var T=T||{}
T["/"]=d.floatDiv
var T=T||{}
T["*"]=d.mul
var T=T||{}
T["-"]=d.sub
var T=T||{}
T["+"]=d.add
var L=(d.toPolar,d.fromPolar,d.turns),S=d.degrees,C=function(){function e(r,e){var t=r+": "+v.toString(e),_=_||{}
return _.stdout?_.stdout.write(t):console.log(t),e}function t(r){throw new Error(r)}return{crash:t,log:r(e)}}(),x=(C.crash,C.log,r(function(r,e){var t=e
return"Just"===t.ctor?t._0:r})),P={ctor:"Nothing"},M=(r(function(r,e){var t=e
return"Just"===t.ctor?r(t._0):P}),function(r){return{ctor:"Just",_0:r}}),O=(r(function(r,e){var t=e
return"Just"===t.ctor?M(r(t._0)):P}),e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
return"_Tuple2"===_.ctor&&"Just"===_._0.ctor&&"Just"===_._1.ctor?M(a(r,_._0._0,_._1._0)):P}),t(function(r,e,t,_){var n={ctor:"_Tuple3",_0:e,_1:t,_2:_}
return"_Tuple3"===n.ctor&&"Just"===n._0.ctor&&"Just"===n._1.ctor&&"Just"===n._2.ctor?M(i(r,n._0._0,n._1._0,n._2._0)):P}),_(function(r,e,t,_,n){var o={ctor:"_Tuple4",_0:e,_1:t,_2:_,_3:n}
return"_Tuple4"===o.ctor&&"Just"===o._0.ctor&&"Just"===o._1.ctor&&"Just"===o._2.ctor&&"Just"===o._3.ctor?M(l(r,o._0._0,o._1._0,o._2._0,o._3._0)):P}),n(function(r,e,t,_,n,o){var u={ctor:"_Tuple5",_0:e,_1:t,_2:_,_3:n,_4:o}
return"_Tuple5"===u.ctor&&"Just"===u._0.ctor&&"Just"===u._1.ctor&&"Just"===u._2.ctor&&"Just"===u._3.ctor&&"Just"===u._4.ctor?M(s(r,u._0._0,u._1._0,u._2._0,u._3._0,u._4._0)):P}),function(){function o(r,e){return{ctor:"::",_0:r,_1:e}}function u(r){for(var e=N,t=r.length;t--;)e=o(r[t],e)
return e}function c(r){for(var e=[];"[]"!==r.ctor;)e.push(r._0),r=r._1
return e}function p(r,e,t){for(var _=c(t),n=e,o=_.length;o--;)n=a(r,_[o],n)
return n}function f(r,e,t){for(var _=[];"[]"!==e.ctor&&"[]"!==t.ctor;)_.push(a(r,e._0,t._0)),e=e._1,t=t._1
return u(_)}function d(r,e,t,_){for(var n=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor;)n.push(i(r,e._0,t._0,_._0)),e=e._1,t=t._1,_=_._1
return u(n)}function m(r,e,t,_,n){for(var o=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor&&"[]"!==n.ctor;)o.push(l(r,e._0,t._0,_._0,n._0)),e=e._1,t=t._1,_=_._1,n=n._1
return u(o)}function g(r,e,t,_,n,o){for(var c=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor;)c.push(s(r,e._0,t._0,_._0,n._0,o._0)),e=e._1,t=t._1,_=_._1,n=n._1,o=o._1
return u(c)}function h(r,e){return u(c(e).sort(function(e,t){return v.cmp(r(e),r(t))}))}function T(r,e){return u(c(e).sort(function(e,t){var _=r(e)(t).ctor
return"EQ"===_?0:"LT"===_?-1:1}))}var N={ctor:"[]"}
return{Nil:N,Cons:o,cons:r(o),toArray:c,fromArray:u,foldr:e(p),map2:e(f),map3:t(d),map4:_(m),map5:n(g),sortBy:r(h),sortWith:r(T)}}()),B=(O.sortWith,O.sortBy,r(function(r,e){for(;;){if(v.cmp(r,0)<1)return e
var t=e
if("[]"===t.ctor)return e
var _=r-1,n=t._1
r=_,e=n}})),j=(O.map5,O.map4,O.map3,O.map2),D=r(function(r,e){for(;;){var t=e
if("[]"===t.ctor)return!1
if(r(t._0))return!0
var _=r,n=t._1
r=_,e=n}}),R=(r(function(r,e){return!a(D,function(e){return!r(e)},e)}),O.foldr),Z=e(function(r,e,t){for(;;){var _=t
if("[]"===_.ctor)return e
var n=r,o=a(r,_._0,e),u=_._1
r=n,e=o,t=u}}),q=function(e){return i(Z,r(function(r,e){return e+1}),0,e)},V=function(e){return i(Z,r(function(r,e){return r+e}),0,e)},U=(r(function(r,e){return a(D,function(e){return v.eq(e,r)},e)}),U||{})
U["::"]=O.cons
var z=r(function(e,t){return i(R,r(function(r,t){return{ctor:"::",_0:e(r),_1:t}}),{ctor:"[]"},t)}),F=r(function(e,t){return i(R,r(function(r,t){return e(r)?{ctor:"::",_0:r,_1:t}:t}),{ctor:"[]"},t)}),$=e(function(r,e,t){var _=r(e)
return"Just"===_.ctor?{ctor:"::",_0:_._0,_1:t}:t}),G=(r(function(r,e){return i(R,$(r),{ctor:"[]"},e)}),function(e){return i(Z,r(function(r,e){return{ctor:"::",_0:r,_1:e}}),{ctor:"[]"},e)}),W=(e(function(e,t,_){return G(i(Z,r(function(r,t){var _=t
return"::"===_.ctor?{ctor:"::",_0:a(e,r,_._0),_1:t}:{ctor:"[]"}}),{ctor:"::",_0:t,_1:{ctor:"[]"}},_))}),r(function(e,t){return"[]"===t.ctor?e:i(R,r(function(r,e){return{ctor:"::",_0:r,_1:e}}),t,e)})),Q=function(r){return i(R,W,{ctor:"[]"},r)},K=(r(function(r,e){return Q(a(z,r,e))}),r(function(e,t){return i(R,r(function(r,t){var _=t,n=_._0,o=_._1
return e(r)?{ctor:"_Tuple2",_0:{ctor:"::",_0:r,_1:n},_1:o}:{ctor:"_Tuple2",_0:n,_1:{ctor:"::",_0:r,_1:o}}}),{ctor:"_Tuple2",_0:{ctor:"[]"},_1:{ctor:"[]"}},t)}),r(function(e,t){var _=t
if("[]"===_.ctor)return{ctor:"[]"}
var n=r(function(r,t){return{ctor:"::",_0:e,_1:{ctor:"::",_0:r,_1:t}}}),o=i(R,n,{ctor:"[]"},_._1)
return{ctor:"::",_0:_._0,_1:o}}),e(function(r,e,t){for(;;){if(v.cmp(r,0)<1)return t
var _=e
if("[]"===_.ctor)return t
var n=r-1,o=_._1,u={ctor:"::",_0:_._0,_1:t}
r=n,e=o,t=u}})),H=r(function(r,e){return G(i(K,r,e,{ctor:"[]"}))}),Y=e(function(r,e,t){if(v.cmp(e,0)<1)return{ctor:"[]"}
var _={ctor:"_Tuple2",_0:e,_1:t}
r:do{e:do{if("_Tuple2"!==_.ctor)break r
if("[]"===_._1.ctor)return t
if("::"!==_._1._1.ctor){if(1===_._0)break e
break r}switch(_._0){case 1:break e
case 2:return{ctor:"::",_0:_._1._0,_1:{ctor:"::",_0:_._1._1._0,_1:{ctor:"[]"}}}
case 3:if("::"===_._1._1._1.ctor)return{ctor:"::",_0:_._1._0,_1:{ctor:"::",_0:_._1._1._0,_1:{ctor:"::",_0:_._1._1._1._0,_1:{ctor:"[]"}}}}
break r
default:if("::"===_._1._1._1.ctor&&"::"===_._1._1._1._1.ctor){var n=_._1._1._1._0,o=_._1._1._0,u=_._1._0,c=_._1._1._1._1._0,l=_._1._1._1._1._1
return v.cmp(r,1e3)>0?{ctor:"::",_0:u,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:c,_1:a(H,e-4,l)}}}}:{ctor:"::",_0:u,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:c,_1:i(Y,r+1,e-4,l)}}}}}break r}}while(!1)
return{ctor:"::",_0:_._1._0,_1:{ctor:"[]"}}}while(!1)
return t}),rr=(r(function(r,e){return i(Y,0,r,e)}),e(function(r,e,t){for(;;){if(v.cmp(e,0)<1)return r
var _={ctor:"::",_0:t,_1:r},n=e-1,o=t
r=_,e=n,t=o}})),er=r(function(r,e){return i(rr,{ctor:"[]"},r,e)}),tr=e(function(r,e,t){for(;;){if(!(v.cmp(r,e)<1))return t
var _=r,n=e-1,o={ctor:"::",_0:e,_1:t}
r=_,e=n,t=o}}),_r=r(function(r,e){return i(tr,r,e,{ctor:"[]"})}),nr=(r(function(r,e){return i(j,r,a(_r,0,q(e)-1),e)}),r(function(r,e){var t=e
return"Ok"===t.ctor?t._0:r})),or=function(r){return{ctor:"Err",_0:r}},ur=(r(function(r,e){var t=e
return"Ok"===t.ctor?r(t._0):or(t._0)}),function(r){return{ctor:"Ok",_0:r}}),cr=r(function(r,e){var t=e
return"Ok"===t.ctor?ur(r(t._0)):or(t._0)}),ar=(e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
return"Ok"===_._0.ctor?"Ok"===_._1.ctor?ur(a(r,_._0._0,_._1._0)):or(_._1._0):or(_._0._0)}),t(function(r,e,t,_){var n={ctor:"_Tuple3",_0:e,_1:t,_2:_}
return"Ok"===n._0.ctor?"Ok"===n._1.ctor?"Ok"===n._2.ctor?ur(i(r,n._0._0,n._1._0,n._2._0)):or(n._2._0):or(n._1._0):or(n._0._0)}),_(function(r,e,t,_,n){var o={ctor:"_Tuple4",_0:e,_1:t,_2:_,_3:n}
return"Ok"===o._0.ctor?"Ok"===o._1.ctor?"Ok"===o._2.ctor?"Ok"===o._3.ctor?ur(l(r,o._0._0,o._1._0,o._2._0,o._3._0)):or(o._3._0):or(o._2._0):or(o._1._0):or(o._0._0)}),n(function(r,e,t,_,n,o){var u={ctor:"_Tuple5",_0:e,_1:t,_2:_,_3:n,_4:o}
return"Ok"===u._0.ctor?"Ok"===u._1.ctor?"Ok"===u._2.ctor?"Ok"===u._3.ctor?"Ok"===u._4.ctor?ur(s(r,u._0._0,u._1._0,u._2._0,u._3._0,u._4._0)):or(u._4._0):or(u._3._0):or(u._2._0):or(u._1._0):or(u._0._0)}),r(function(r,e){var t=e
return"Ok"===t.ctor?ur(t._0):or(r(t._0))}),r(function(r,e){var t=e
return"Just"===t.ctor?ur(t._0):or(r)}),function(){function t(r){return 0===r.length}function _(r,e){return r+e}function n(r){var e=r[0]
return e?M(v.Tuple2(v.chr(e),r.slice(1))):P}function o(r,e){return r+e}function u(r){return O.toArray(r).join("")}function c(r){return r.length}function i(r,e){for(var t=e.split(""),_=t.length;_--;)t[_]=r(v.chr(t[_]))
return t.join("")}function l(r,e){return e.split("").map(v.chr).filter(r).join("")}function s(r){return r.split("").reverse().join("")}function p(r,e,t){for(var _=t.length,n=0;n<_;++n)e=a(r,v.chr(t[n]),e)
return e}function f(r,e,t){for(var _=t.length;_--;)e=a(r,v.chr(t[_]),e)
return e}function d(r,e){return O.fromArray(e.split(r))}function m(r,e){return O.toArray(e).join(r)}function g(r,e){for(var t="";r>0;)1&r&&(t+=e),r>>=1,e+=e
return t}function h(r,e,t){return t.slice(r,e)}function T(r,e){return r<1?"":e.slice(0,r)}function N(r,e){return r<1?"":e.slice(-r)}function I(r,e){return r<1?e:e.slice(r)}function b(r,e){return r<1?e:e.slice(0,-r)}function J(r,e,t){var _=(r-t.length)/2
return g(Math.ceil(_),e)+t+g(0|_,e)}function w(r,e,t){return t+g(r-t.length,e)}function y(r,e,t){return g(r-t.length,e)+t}function k(r){return r.trim()}function E(r){return r.replace(/^\s+/,"")}function A(r){return r.replace(/\s+$/,"")}function X(r){return O.fromArray(r.trim().split(/\s+/g))}function L(r){return O.fromArray(r.split(/\r\n|\r|\n/g))}function S(r){return r.toUpperCase()}function C(r){return r.toLowerCase()}function x(r,e){for(var t=e.length;t--;)if(r(v.chr(e[t])))return!0
return!1}function B(r,e){for(var t=e.length;t--;)if(!r(v.chr(e[t])))return!1
return!0}function j(r,e){return e.indexOf(r)>-1}function D(r,e){return 0===e.indexOf(r)}function R(r,e){return e.length>=r.length&&e.lastIndexOf(r)===e.length-r.length}function Z(r,e){var t=r.length
if(t<1)return O.Nil
for(var _=0,n=[];(_=e.indexOf(r,_))>-1;)n.push(_),_+=t
return O.fromArray(n)}function q(r){var e=r.length
if(0===e)return V(r)
var t=r[0]
if("0"===t&&"x"===r[1]){for(var _=2;_<e;++_){var t=r[_]
if(!("0"<=t&&t<="9"||"A"<=t&&t<="F"||"a"<=t&&t<="f"))return V(r)}return ur(parseInt(r,16))}if(t>"9"||t<"0"&&"-"!==t&&"+"!==t)return V(r)
for(var _=1;_<e;++_){var t=r[_]
if(t<"0"||"9"<t)return V(r)}return ur(parseInt(r,10))}function V(r){return or("could not convert string '"+r+"' to an Int")}function U(r){if(0===r.length||/[\sxbo]/.test(r))return z(r)
var e=+r
return e===e?ur(e):z(r)}function z(r){return or("could not convert string '"+r+"' to a Float")}function F(r){return O.fromArray(r.split("").map(v.chr))}function $(r){return O.toArray(r).join("")}return{isEmpty:t,cons:r(_),uncons:n,append:r(o),concat:u,length:c,map:r(i),filter:r(l),reverse:s,foldl:e(p),foldr:e(f),split:r(d),join:r(m),repeat:r(g),slice:e(h),left:r(T),right:r(N),dropLeft:r(I),dropRight:r(b),pad:e(J),padLeft:e(y),padRight:e(w),trim:k,trimLeft:E,trimRight:A,words:X,lines:L,toUpper:S,toLower:C,any:r(x),all:r(B),contains:r(j),startsWith:r(D),endsWith:r(R),indexes:r(Z),toInt:q,toFloat:U,toList:F,fromList:$}}()),ir=function(){return{fromCode:function(r){return v.chr(String.fromCharCode(r))},toCode:function(r){return r.charCodeAt(0)},toUpper:function(r){return v.chr(r.toUpperCase())},toLower:function(r){return v.chr(r.toLowerCase())},toLocaleUpper:function(r){return v.chr(r.toLocaleUpperCase())},toLocaleLower:function(r){return v.chr(r.toLocaleLowerCase())}}}(),lr=(ir.fromCode,ir.toCode),sr=(ir.toLocaleLower,ir.toLocaleUpper,ir.toLower,ir.toUpper,e(function(r,e,t){var _=lr(t)
return v.cmp(_,lr(r))>-1&&v.cmp(_,lr(e))<1})),pr=(a(sr,v.chr("A"),v.chr("Z")),a(sr,v.chr("a"),v.chr("z")),a(sr,v.chr("0"),v.chr("9")),a(sr,v.chr("0"),v.chr("7")),ar.fromList,ar.toList,ar.toFloat,ar.toInt),fr=(ar.indexes,ar.indexes,ar.endsWith,ar.startsWith,ar.contains,ar.all,ar.any,ar.toLower,ar.toUpper,ar.lines),dr=(ar.words,ar.trimRight,ar.trimLeft,ar.trim,ar.padRight,ar.padLeft,ar.pad,ar.dropRight,ar.dropLeft),vr=(ar.right,ar.left,ar.slice,ar.repeat,ar.join),mr=(ar.split,ar.foldr,ar.foldl,ar.reverse,ar.filter,ar.map,ar.length),gr=ar.concat,hr=(ar.append,ar.uncons),Tr=(ar.cons,ar.isEmpty),Nr=(r(function(r,e){var t=e
return{ctor:"_Tuple2",_0:t._0,_1:r(t._1)}}),r(function(r,e){var t=e
return{ctor:"_Tuple2",_0:r(t._0),_1:t._1}}),function(r){return r._1}),Ir=function(r){return r._0},br=function(){function t(r){return function(e){return function(e,t){e.worker=function(e){if(void 0!==e)throw new Error("The `"+t+"` module does not need flags.\nCall "+t+".worker() with no arguments and you should be all set!")
return u(r.init,r.update,r.subscriptions,n)}}}}function _(r){return function(e){return function(t,_){t.worker=function(t){if(void 0===e)throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+_+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.")
var o=a(Hu.run,e,t)
if("Err"===o.ctor)throw new Error(_+".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+o._0)
return u(r.init(o._0),r.update,r.subscriptions,n)}}}}function n(r,e){return function(r){}}function o(e){var t=g(O.Nil),_=v.Tuple2(v.Tuple0,t)
return lc({init:_,view:function(r){return main},update:r(function(r,e){return _}),subscriptions:function(r){return t}})}function u(r,e,t,_){function n(r,_){return Jr.nativeBinding(function(n){var o=a(e,r,_)
_=o._0,u(_),T(i,o._1,t(_)),n(Jr.succeed(_))})}function o(r){Jr.rawSend(s,r)}var u,i={},l=Jr.nativeBinding(function(e){var n=r._0
u=_(o,n),T(i,r._1,t(n)),e(Jr.succeed(n))}),s=d(l,n),p=c(i,o)
return p?{ports:p}:{}}function c(r,e){var t
for(var _ in A){var n=A[_]
n.isForeign&&(t=t||{},t[_]="cmd"===n.tag?y(_):E(_,e)),r[_]=s(n,e)}return t}function s(r,e){function t(r,e){if("self"===r.ctor)return i(u,_,r._0,e)
var t=r._0
switch(n){case"cmd":return i(o,_,t.cmds,e)
case"sub":return i(o,_,t.subs,e)
case"fx":return l(o,_,t.cmds,t.subs,e)}}var _={main:e,self:void 0},n=r.tag,o=r.onEffects,u=r.onSelfMsg,c=d(r.init,t)
return _.self=c,c}function p(r,e){return Jr.nativeBinding(function(t){r.main(e),t(Jr.succeed(v.Tuple0))})}function f(r,e){return a(Jr.send,r.self,{ctor:"self",_0:e})}function d(r,e){function t(r){return a(_,t,Jr.receive(function(t){return e(t,r)}))}var _=Jr.andThen,n=a(_,t,r)
return Jr.rawSpawn(n)}function m(r){return function(e){return{type:"leaf",home:r,value:e}}}function g(r){return{type:"node",branches:r}}function h(r,e){return{type:"map",tagger:r,tree:e}}function T(r,e,t){var _={}
N(!0,e,_,null),N(!1,t,_,null)
for(var n in r){var o=n in _?_[n]:{cmds:O.Nil,subs:O.Nil}
Jr.rawSend(r[n],{ctor:"fx",_0:o})}}function N(r,e,t,_){switch(e.type){case"leaf":var n=e.home,o=I(r,n,_,e.value)
return void(t[n]=b(r,o,t[n]))
case"node":for(var u=e.branches;"[]"!==u.ctor;)N(r,u._0,t,_),u=u._1
return
case"map":return void N(r,e.tree,t,{tagger:e.tagger,rest:_})}}function I(r,e,t,_){function n(r){for(var e=t;e;)r=e.tagger(r),e=e.rest
return r}return a(r?A[e].cmdMap:A[e].subMap,n,_)}function b(r,e,t){return t=t||{cmds:O.Nil,subs:O.Nil},r?(t.cmds=O.Cons(e,t.cmds),t):(t.subs=O.Cons(e,t.subs),t)}function J(r){if(r in A)throw new Error("There can only be one port named `"+r+"`, but your program has multiple.")}function w(r,e){return J(r),A[r]={tag:"cmd",cmdMap:X,converter:e,isForeign:!0},m(r)}function y(r){function t(r,e,t){for(;"[]"!==e.ctor;){for(var _=o,n=u(e._0),a=0;a<_.length;a++)_[a](n)
e=e._1}return c}function _(r){o.push(r)}function n(r){o=o.slice()
var e=o.indexOf(r)
e>=0&&o.splice(e,1)}var o=[],u=A[r].converter,c=Jr.succeed(null)
return A[r].init=c,A[r].onEffects=e(t),{subscribe:_,unsubscribe:n}}function k(r,e){return J(r),A[r]={tag:"sub",subMap:L,converter:e,isForeign:!0},m(r)}function E(r,t){function _(r,e,t){for(var _=n(r,e,t),o=0;o<l.length;o++)c(l[o])
return l=null,d=c,f=n,_}function n(r,e,t){return s=e,v}function o(r,e,t){return f(r,e,t)}function u(r){l.push(r)}function c(r){for(var e=s;"[]"!==e.ctor;)t(e._0(r)),e=e._1}function i(e){var t=a(tc,p,e)
if("Err"===t.ctor)throw new Error("Trying to send an unexpected type of value through port `"+r+"`:\n"+t._0)
d(t._0)}var l=[],s=O.Nil,p=A[r].converter,f=_,d=u,v=Jr.succeed(null)
return A[r].init=v,A[r].onEffects=e(o),{send:i}}var A={},X=r(function(r,e){return e}),L=r(function(r,e){return function(t){return r(e(t))}})
return{sendToApp:r(p),sendToSelf:r(f),effectManagers:A,outgoingPort:w,incomingPort:k,htmlToProgram:o,program:t,programWithFlags:_,initialize:u,leaf:m,batch:g,map:r(h)}}(),Jr=function(){function e(r){return{ctor:"_Task_succeed",value:r}}function t(r){return{ctor:"_Task_fail",value:r}}function _(r){return{ctor:"_Task_nativeBinding",callback:r,cancel:null}}function n(r,e){return{ctor:"_Task_andThen",callback:r,task:e}}function o(r,e){return{ctor:"_Task_onError",callback:r,task:e}}function u(r){return{ctor:"_Task_receive",callback:r}}function c(r){var e={ctor:"_Process",id:v.guid(),root:r,stack:null,mailbox:[]}
return d(e),e}function a(r){return _(function(t){t(e(c(r)))})}function i(r,e){r.mailbox.push(e),d(r)}function l(r,t){return _(function(_){i(r,t),_(e(v.Tuple0))})}function s(r){return _(function(t){var _=r.root
"_Task_nativeBinding"===_.ctor&&_.cancel&&_.cancel(),r.root=null,t(e(v.Tuple0))})}function p(r){return _(function(t){var _=setTimeout(function(){t(e(v.Tuple0))},r)
return function(){clearTimeout(_)}})}function f(r,e){for(;r<g;){var t=e.root.ctor
if("_Task_succeed"!==t)if("_Task_fail"!==t)if("_Task_andThen"!==t)if("_Task_onError"!==t){if("_Task_nativeBinding"===t){e.root.cancel=e.root.callback(function(r){e.root=r,d(e)})
break}if("_Task_receive"!==t)throw new Error(t)
var _=e.mailbox
if(0===_.length)break
e.root=e.root.callback(_.shift()),++r}else e.stack={ctor:"_Task_onError",callback:e.root.callback,rest:e.stack},e.root=e.root.task,++r
else e.stack={ctor:"_Task_andThen",callback:e.root.callback,rest:e.stack},e.root=e.root.task,++r
else{for(;e.stack&&"_Task_andThen"===e.stack.ctor;)e.stack=e.stack.rest
if(null===e.stack)break
e.root=e.stack.callback(e.root.value),e.stack=e.stack.rest,++r}else{for(;e.stack&&"_Task_onError"===e.stack.ctor;)e.stack=e.stack.rest
if(null===e.stack)break
e.root=e.stack.callback(e.root.value),e.stack=e.stack.rest,++r}}return r<g?r+1:(d(e),r)}function d(r){T.push(r),h||(setTimeout(m,0),h=!0)}function m(){for(var r,e=0;e<g&&(r=T.shift());)r.root&&(e=f(e,r))
if(!r)return void(h=!1)
setTimeout(m,0)}var g=1e4,h=!1,T=[]
return{succeed:e,fail:t,nativeBinding:_,andThen:r(n),onError:r(o),receive:u,spawn:a,kill:s,sleep:p,send:r(l),rawSpawn:c,rawSend:i}}(),wr=br.batch,yr=wr({ctor:"[]"}),kr=kr||{}
kr["!"]=r(function(r,e){return{ctor:"_Tuple2",_0:r,_1:wr(e)}})
var Er=(br.map,br.batch),Ar=Er({ctor:"[]"}),Xr=(br.map,Jr.succeed,br.sendToSelf,br.sendToApp,br.programWithFlags,br.program,u(function(r,e,t,_,n,o,u,c){var i=u,l=c
return{ctor:"_Tuple6",_0:a(r,i._0,l._0),_1:a(e,i._1,l._1),_2:a(t,i._2,l._2),_3:a(_,i._3,l._3),_4:a(n,i._4,l._4),_5:a(o,i._5,l._5)}})),Lr=o(function(r,e,t,_,n,o,u){var c=u
return{ctor:"_Tuple6",_0:r(c._0),_1:e(c._1),_2:t(c._2),_3:_(c._3),_4:n(c._4),_5:o(c._5)}}),Sr=(_(function(r,e,t,_,n){var o=n
return{ctor:"_Tuple4",_0:r(o._0),_1:e(o._1),_2:t(o._2),_3:_(o._3)}}),t(function(r,e,t,_){var n=_
return{ctor:"_Tuple3",_0:r(n._0),_1:e(n._1),_2:t(n._2)}}),e(function(r,e,t){return"On"===r.ctor?t:e})),Cr=e(function(r,e,t){var _=r
return f(Xr,Sr(_._0),Sr(_._1),Sr(_._2),Sr(_._3),Sr(_._4),Sr(_._5),e,t)}),xr=function(r){var e=r
return{ctor:"_Tuple3",_0:e._0,_1:e._4,_2:e._5}},Pr=function(r){return r._0},Mr=Math.pow(10,2),Or=r(function(e,t){var _=q(t),n=a(_r,0,_-1),o=a(z,r(function(r,e){return Math.pow(r,e)})(e),n)
return V(i(j,r(function(r,e){return r*e}),t,o))}),Br=r(function(r,e){return a(Or,r,G(e))}),jr=r(function(r,e){var t=e,_=t._1
return"Pos"===t._0.ctor?a(Br,r,_):X(a(Br,r,_))}),Dr=function(r){var e=r
return a(jr,Mr,{ctor:"_Tuple2",_0:e._0,_1:a(z,Pr,{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"::",_0:e._3,_1:{ctor:"::",_0:e._4,_1:{ctor:"::",_0:e._5,_1:{ctor:"[]"}}}}}})})},Rr=function(r){var e=r
return a(jr,Mr,{ctor:"_Tuple2",_0:e._0,_1:a(z,Pr,{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"[]"}}})})},Zr=function(r){var e=r
return{ctor:"_Tuple4",_0:Rr({ctor:"_Tuple3",_0:e._0,_1:e._1,_2:e._2}),_1:Pr(e._3),_2:Pr(e._4),_3:Pr(e._5)}},qr=r(function(r,e){if(v.cmp(e,r)<0)return{ctor:"::",_0:e,_1:{ctor:"[]"}}
var t=e/r|0,_=a(qr,r,t)
return{ctor:"::",_0:a(T["%"],e,r),_1:_}}),Vr=r(function(r,e){return G(a(qr,r,e))}),Ur=e(function(r,e,t){var _=a(Vr,r,e),n=q(_)
return a(T["++"],a(er,t-n,0),_)}),zr={ctor:"Neg"},Fr={ctor:"Pos"},$r=function(r){return"Pos"===r.ctor?zr:Fr},Gr=function(r){return p(Lr,$r,h,h,h,h,h,r)},Wr=(r(function(r,e){return v.cmp(e,0)<0?{ctor:"_Tuple2",_0:zr,_1:a(Vr,r,0-e)}:{ctor:"_Tuple2",_0:Fr,_1:a(Vr,r,e)}}),e(function(r,e,t){return v.cmp(e,0)<0?{ctor:"_Tuple2",_0:zr,_1:i(Ur,r,0-e,t)}:{ctor:"_Tuple2",_0:Fr,_1:i(Ur,r,e,t)}})),Qr=function(r){return{ctor:"Byte",_0:r}},Kr=function(r){return Qr(a(T["%"],r,Mr))},Hr=Kr(0),Yr={ctor:"_Tuple6",_0:Fr,_1:Hr,_2:Hr,_3:Hr,_4:Hr,_5:Hr},re={ctor:"_Tuple3",_0:Fr,_1:Hr,_2:Hr},ee=function(r){var e=r
return{ctor:"_Tuple6",_0:e._0,_1:Hr,_2:Hr,_3:Hr,_4:e._1,_5:e._2}},te=r(function(r,e){for(;;){var t=e,_=t._0,n=t._5,o=t._4,u=t._3,c=t._2,a=t._1
if(v.cmp(r,0)>0){var i=r-1,l={ctor:"_Tuple6",_0:_,_1:Hr,_2:a,_3:c,_4:u,_5:o}
r=i,e=l}else{if(v.eq(r,0))return{ctor:"_Tuple6",_0:_,_1:a,_2:c,_3:u,_4:o,_5:n}
var s=r+1,p={ctor:"_Tuple6",_0:_,_1:c,_2:u,_3:o,_4:n,_5:Hr}
r=s,e=p}}}),_e=r(function(r,e){var t=e,_=t._0,n=t._5,o=t._4,u=t._3,c=t._2,i=t._1
return v.cmp(r,0)>0?a(te,r-1,{ctor:"_Tuple6",_0:_,_1:n,_2:i,_3:c,_4:u,_5:o}):v.eq(r,0)?{ctor:"_Tuple6",_0:_,_1:i,_2:c,_3:u,_4:o,_5:n}:a(te,r+1,{ctor:"_Tuple6",_0:_,_1:c,_2:u,_3:o,_4:n,_5:i})}),ne=function(r){var e=r
return Kr(a(jr,2,{ctor:"_Tuple2",_0:Fr,_1:a(z,function(r){return"Off"===r.ctor?0:1},{ctor:"::",_0:e._0,_1:{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"::",_0:e._3,_1:{ctor:"::",_0:e._4,_1:{ctor:"::",_0:e._5,_1:{ctor:"[]"}}}}}}})}))},oe={ctor:"Off"},ue={ctor:"On"},ce=function(r){var e=r,t=function(r){return v.eq(r,0)?oe:ue},_=i(Wr,2,e._0,6)
r:do{if("_Tuple2"===_.ctor&&"::"===_._1.ctor&&"::"===_._1._1.ctor&&"::"===_._1._1._1.ctor&&"::"===_._1._1._1._1.ctor&&"::"===_._1._1._1._1._1.ctor&&"::"===_._1._1._1._1._1._1.ctor){if("[]"===_._1._1._1._1._1._1._1.ctor)return{ctor:"_Tuple6",_0:t(_._1._0),_1:t(_._1._1._0),_2:t(_._1._1._1._0),_3:t(_._1._1._1._1._0),_4:t(_._1._1._1._1._1._0),_5:t(_._1._1._1._1._1._1._0)}
if("[]"===_._1._1._1._1._1._1._1._1.ctor)return{ctor:"_Tuple6",_0:t(_._1._1._0),_1:t(_._1._1._1._0),_2:t(_._1._1._1._1._0),_3:t(_._1._1._1._1._1._0),_4:t(_._1._1._1._1._1._1._0),_5:t(_._1._1._1._1._1._1._1._0)}
break r}break r}while(!1)
return{ctor:"_Tuple6",_0:oe,_1:oe,_2:oe,_3:oe,_4:oe,_5:oe}},ae={ctor:"Ignored"},ie={ctor:"Good"},le={ctor:"Overflow"},se=r(function(r,e){var t=i(Wr,Mr,r,6),_=t._0,n=t._1,o=q(n),u=a(B,o-6,n)
return"::"===u.ctor&&"::"===u._1.ctor&&"::"===u._1._1.ctor&&"::"===u._1._1._1.ctor&&"::"===u._1._1._1._1.ctor&&"::"===u._1._1._1._1._1.ctor&&"[]"===u._1._1._1._1._1._1.ctor?0===u._0?{ctor:"_Tuple2",_0:ie,_1:{ctor:"_Tuple6",_0:_,_1:Kr(u._1._0),_2:Kr(u._1._1._0),_3:Kr(u._1._1._1._0),_4:Kr(u._1._1._1._1._0),_5:Kr(u._1._1._1._1._1._0)}}:{ctor:"_Tuple2",_0:le,_1:{ctor:"_Tuple6",_0:_,_1:Kr(u._1._0),_2:Kr(u._1._1._0),_3:Kr(u._1._1._1._0),_4:Kr(u._1._1._1._1._0),_5:Kr(u._1._1._1._1._1._0)}}:{ctor:"_Tuple2",_0:ae,_1:e}}),pe=t(function(r,e,t,_){return a(se,a(r,Dr(t),Dr(i(Cr,e,_,Yr))),t)}),fe=r(function(r,e){var t=i(Wr,Mr,r,3),_=t._0,n=t._1,o=q(n),u=a(B,o-3,n)
return"::"===u.ctor&&"::"===u._1.ctor&&"::"===u._1._1.ctor&&"[]"===u._1._1._1.ctor?0===u._0?{ctor:"_Tuple2",_0:ie,_1:{ctor:"_Tuple3",_0:_,_1:Kr(u._1._0),_2:Kr(u._1._1._0)}}:{ctor:"_Tuple2",_0:le,_1:{ctor:"_Tuple3",_0:_,_1:Kr(u._1._0),_2:Kr(u._1._1._0)}}:{ctor:"_Tuple2",_0:ae,_1:e}}),de=function(r){var e=r,t=Nr(a(fe,e._0,re))
return{ctor:"_Tuple6",_0:t._0,_1:t._1,_2:t._2,_3:Kr(e._1),_4:Kr(e._2),_5:Kr(e._3)}},ve={ctor:"G"},me={ctor:"E"},ge={ctor:"L"},he=e(function(r,e,t){var _=i(Cr,r,e,Yr),n=Dr(_),o=i(Cr,r,t,Yr),u=Dr(o)
return v.cmp(n,u)<0?ge:v.eq(n,u)?me:ve}),Te=function(r){var e=r,t=e._3,_=e._2,n=e._1,o=e._0
switch(t.ctor){case"LoadA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadANeg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadXNeg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI1Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI2Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI3Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI4Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI5Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"LoadI6Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreJ":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"StoreZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"Add":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"Sub":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"AddX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"SubX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"EnterA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterANeg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterXNeg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI1Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI2Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI3Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI4Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI5Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"EnterI6Neg":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"IncrementI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"DecrementI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"CompareA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI1":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI2":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI3":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI4":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI5":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"CompareI6":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:M(_),_3:t}
case"Jump":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpSaveJ":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnOverflow":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnNoOverflow":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnLess":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnEqual":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnGreater":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnGreaterEqual":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnUnEqual":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpOnLessEqual":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpANegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpAZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpAPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpANonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpANonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpANonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXNonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXNonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpXNonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI1NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI2NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI3NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI4NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI5NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6Negative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6Zero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6Positive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6NonNegative":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6NonZero":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"JumpI6NonPositive":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"ShiftA":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"ShiftX":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"ShiftACircular":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"ShiftXCircular":return{ctor:"_Tuple4",_0:M(o),_1:M(n),_2:P,_3:t}
case"SwapAX":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI1":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI2":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI3":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI4":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI5":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveXI6":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI1X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI2X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI3X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI4X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI5X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveI6X":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"MoveJX":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
case"NoOperation":return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}
default:return{ctor:"_Tuple4",_0:P,_1:P,_2:P,_3:t}}},Ne=function(r){var e=r,t=e._1,_=e._0,n=Pr(ne(e._2))
switch(e._3.ctor){case"LoadA":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:8}
case"LoadX":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:15}
case"LoadI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:9}
case"LoadI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:10}
case"LoadI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:11}
case"LoadI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:12}
case"LoadI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:13}
case"LoadI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:14}
case"LoadANeg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:16}
case"LoadXNeg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:23}
case"LoadI1Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:17}
case"LoadI2Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:18}
case"LoadI3Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:19}
case"LoadI4Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:20}
case"LoadI5Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:21}
case"LoadI6Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:22}
case"StoreA":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:24}
case"StoreX":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:31}
case"StoreI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:25}
case"StoreI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:26}
case"StoreI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:27}
case"StoreI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:28}
case"StoreI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:29}
case"StoreI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:30}
case"StoreJ":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:32}
case"StoreZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:33}
case"Add":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:1}
case"Sub":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:2}
case"AddX":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:3}
case"SubX":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:4}
case"EnterA":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:48}
case"EnterX":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:55}
case"EnterI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:49}
case"EnterI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:50}
case"EnterI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:51}
case"EnterI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:52}
case"EnterI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:53}
case"EnterI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:54}
case"EnterANeg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:48}
case"EnterXNeg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:55}
case"EnterI1Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:49}
case"EnterI2Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:50}
case"EnterI3Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:51}
case"EnterI4Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:52}
case"EnterI5Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:53}
case"EnterI6Neg":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:54}
case"IncrementA":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:48}
case"IncrementX":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:55}
case"IncrementI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:49}
case"IncrementI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:50}
case"IncrementI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:51}
case"IncrementI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:52}
case"IncrementI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:53}
case"IncrementI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:54}
case"DecrementA":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:48}
case"DecrementX":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:55}
case"DecrementI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:49}
case"DecrementI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:50}
case"DecrementI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:51}
case"DecrementI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:52}
case"DecrementI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:53}
case"DecrementI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:54}
case"CompareA":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:56}
case"CompareX":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:63}
case"CompareI1":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:57}
case"CompareI2":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:58}
case"CompareI3":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:59}
case"CompareI4":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:60}
case"CompareI5":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:61}
case"CompareI6":return{ctor:"_Tuple4",_0:_,_1:t,_2:n,_3:62}
case"Jump":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:39}
case"JumpSaveJ":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:39}
case"JumpOnOverflow":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:39}
case"JumpOnNoOverflow":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:39}
case"JumpOnLess":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:39}
case"JumpOnEqual":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:39}
case"JumpOnGreater":return{ctor:"_Tuple4",_0:_,_1:t,_2:6,_3:39}
case"JumpOnGreaterEqual":return{ctor:"_Tuple4",_0:_,_1:t,_2:7,_3:39}
case"JumpOnUnEqual":return{ctor:"_Tuple4",_0:_,_1:t,_2:8,_3:39}
case"JumpOnLessEqual":return{ctor:"_Tuple4",_0:_,_1:t,_2:9,_3:39}
case"JumpANegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:40}
case"JumpAZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:40}
case"JumpAPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:40}
case"JumpANonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:40}
case"JumpANonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:40}
case"JumpANonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:40}
case"JumpXNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:47}
case"JumpXZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:47}
case"JumpXPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:47}
case"JumpXNonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:47}
case"JumpXNonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:47}
case"JumpXNonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:47}
case"JumpI1Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:41}
case"JumpI1Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:41}
case"JumpI1Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:41}
case"JumpI1NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:41}
case"JumpI1NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:41}
case"JumpI1NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:41}
case"JumpI2Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:42}
case"JumpI2Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:42}
case"JumpI2Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:42}
case"JumpI2NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:42}
case"JumpI2NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:42}
case"JumpI2NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:42}
case"JumpI3Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:43}
case"JumpI3Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:43}
case"JumpI3Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:43}
case"JumpI3NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:43}
case"JumpI3NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:43}
case"JumpI3NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:43}
case"JumpI4Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:44}
case"JumpI4Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:44}
case"JumpI4Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:44}
case"JumpI4NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:44}
case"JumpI4NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:44}
case"JumpI4NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:44}
case"JumpI5Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:45}
case"JumpI5Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:45}
case"JumpI5Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:45}
case"JumpI5NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:45}
case"JumpI5NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:45}
case"JumpI5NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:45}
case"JumpI6Negative":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:46}
case"JumpI6Zero":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:46}
case"JumpI6Positive":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:46}
case"JumpI6NonNegative":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:46}
case"JumpI6NonZero":return{ctor:"_Tuple4",_0:_,_1:t,_2:4,_3:46}
case"JumpI6NonPositive":return{ctor:"_Tuple4",_0:_,_1:t,_2:5,_3:46}
case"ShiftA":return{ctor:"_Tuple4",_0:_,_1:t,_2:0,_3:6}
case"ShiftX":return{ctor:"_Tuple4",_0:_,_1:t,_2:1,_3:6}
case"ShiftACircular":return{ctor:"_Tuple4",_0:_,_1:t,_2:2,_3:6}
case"ShiftXCircular":return{ctor:"_Tuple4",_0:_,_1:t,_2:3,_3:6}
case"SwapAX":return{ctor:"_Tuple4",_0:0,_1:0,_2:4,_3:6}
case"MoveXI1":return{ctor:"_Tuple4",_0:0,_1:0,_2:0,_3:7}
case"MoveXI2":return{ctor:"_Tuple4",_0:0,_1:0,_2:1,_3:7}
case"MoveXI3":return{ctor:"_Tuple4",_0:0,_1:0,_2:2,_3:7}
case"MoveXI4":return{ctor:"_Tuple4",_0:0,_1:0,_2:3,_3:7}
case"MoveXI5":return{ctor:"_Tuple4",_0:0,_1:0,_2:4,_3:7}
case"MoveXI6":return{ctor:"_Tuple4",_0:0,_1:0,_2:5,_3:7}
case"MoveI1X":return{ctor:"_Tuple4",_0:0,_1:0,_2:6,_3:7}
case"MoveI2X":return{ctor:"_Tuple4",_0:0,_1:0,_2:7,_3:7}
case"MoveI3X":return{ctor:"_Tuple4",_0:0,_1:0,_2:8,_3:7}
case"MoveI4X":return{ctor:"_Tuple4",_0:0,_1:0,_2:9,_3:7}
case"MoveI5X":return{ctor:"_Tuple4",_0:0,_1:0,_2:10,_3:7}
case"MoveI6X":return{ctor:"_Tuple4",_0:0,_1:0,_2:11,_3:7}
case"MoveJX":return{ctor:"_Tuple4",_0:0,_1:0,_2:12,_3:7}
case"NoOperation":return{ctor:"_Tuple4",_0:0,_1:0,_2:0,_3:0}
default:return{ctor:"_Tuple4",_0:0,_1:0,_2:2,_3:5}}},Ie=function(r){switch(r.ctor){case"LoadA":return"LDA"
case"LoadX":return"LDX"
case"LoadI1":return"LD1"
case"LoadI2":return"LD2"
case"LoadI3":return"LD3"
case"LoadI4":return"LD4"
case"LoadI5":return"LD5"
case"LoadI6":return"LD6"
case"LoadANeg":return"LDAN"
case"LoadXNeg":return"LDXN"
case"LoadI1Neg":return"LD1N"
case"LoadI2Neg":return"LD2N"
case"LoadI3Neg":return"LD3N"
case"LoadI4Neg":return"LD4N"
case"LoadI5Neg":return"LD5N"
case"LoadI6Neg":return"LD6N"
case"StoreA":return"STA"
case"StoreX":return"STX"
case"StoreI1":return"ST1"
case"StoreI2":return"ST2"
case"StoreI3":return"ST3"
case"StoreI4":return"ST4"
case"StoreI5":return"ST5"
case"StoreI6":return"ST6"
case"StoreJ":return"STJ"
case"StoreZero":return"STZ"
case"Add":return"ADD"
case"Sub":return"SUB"
case"AddX":return"ADDX"
case"SubX":return"SUBX"
case"EnterA":return"ENTA"
case"EnterX":return"ENTX"
case"EnterI1":return"ENT1"
case"EnterI2":return"ENT2"
case"EnterI3":return"ENT3"
case"EnterI4":return"ENT4"
case"EnterI5":return"ENT5"
case"EnterI6":return"ENT6"
case"EnterANeg":return"ENNA"
case"EnterXNeg":return"ENNX"
case"EnterI1Neg":return"ENN1"
case"EnterI2Neg":return"ENN2"
case"EnterI3Neg":return"ENN3"
case"EnterI4Neg":return"ENN4"
case"EnterI5Neg":return"ENN5"
case"EnterI6Neg":return"ENN6"
case"IncrementA":return"INCA"
case"IncrementX":return"INCX"
case"IncrementI1":return"INC1"
case"IncrementI2":return"INC2"
case"IncrementI3":return"INC3"
case"IncrementI4":return"INC4"
case"IncrementI5":return"INC5"
case"IncrementI6":return"INC6"
case"DecrementA":return"DECA"
case"DecrementX":return"DECX"
case"DecrementI1":return"DEC1"
case"DecrementI2":return"DEC2"
case"DecrementI3":return"DEC3"
case"DecrementI4":return"DEC4"
case"DecrementI5":return"DEC5"
case"DecrementI6":return"DEC6"
case"CompareA":return"CMPA"
case"CompareX":return"CMPX"
case"CompareI1":return"CMP1"
case"CompareI2":return"CMP2"
case"CompareI3":return"CMP3"
case"CompareI4":return"CMP4"
case"CompareI5":return"CMP5"
case"CompareI6":return"CMP6"
case"Jump":return"JMP"
case"JumpSaveJ":return"JSJ"
case"JumpOnOverflow":return"JOV"
case"JumpOnNoOverflow":return"JNOV"
case"JumpOnLess":return"JL"
case"JumpOnEqual":return"JE"
case"JumpOnGreater":return"JG"
case"JumpOnGreaterEqual":return"JGE"
case"JumpOnUnEqual":return"JNE"
case"JumpOnLessEqual":return"JLE"
case"JumpANegative":return"JAN"
case"JumpAZero":return"JAZ"
case"JumpAPositive":return"JAP"
case"JumpANonNegative":return"JANN"
case"JumpANonZero":return"JANZ"
case"JumpANonPositive":return"JANP"
case"JumpXNegative":return"JXN"
case"JumpXZero":return"JXZ"
case"JumpXPositive":return"JXP"
case"JumpXNonNegative":return"JXNN"
case"JumpXNonZero":return"JXNZ"
case"JumpXNonPositive":return"JXNP"
case"JumpI1Negative":return"J1N"
case"JumpI1Zero":return"J1Z"
case"JumpI1Positive":return"J1P"
case"JumpI1NonNegative":return"J1NN"
case"JumpI1NonZero":return"J1NZ"
case"JumpI1NonPositive":return"J1NP"
case"JumpI2Negative":return"J2N"
case"JumpI2Zero":return"J2Z"
case"JumpI2Positive":return"J2P"
case"JumpI2NonNegative":return"J2NN"
case"JumpI2NonZero":return"J2NZ"
case"JumpI2NonPositive":return"J2NP"
case"JumpI3Negative":return"J3N"
case"JumpI3Zero":return"J3Z"
case"JumpI3Positive":return"J3P"
case"JumpI3NonNegative":return"J3NN"
case"JumpI3NonZero":return"J3NZ"
case"JumpI3NonPositive":return"J3NP"
case"JumpI4Negative":return"J4N"
case"JumpI4Zero":return"J4Z"
case"JumpI4Positive":return"J4P"
case"JumpI4NonNegative":return"J4NN"
case"JumpI4NonZero":return"J4NZ"
case"JumpI4NonPositive":return"J4NP"
case"JumpI5Negative":return"J5N"
case"JumpI5Zero":return"J5Z"
case"JumpI5Positive":return"J5P"
case"JumpI5NonNegative":return"J5NN"
case"JumpI5NonZero":return"J5NZ"
case"JumpI5NonPositive":return"J5NP"
case"JumpI6Negative":return"J6N"
case"JumpI6Zero":return"J6Z"
case"JumpI6Positive":return"J6P"
case"JumpI6NonNegative":return"J6NN"
case"JumpI6NonZero":return"J6NZ"
case"JumpI6NonPositive":return"J6NP"
case"ShiftA":return"SA"
case"ShiftX":return"SX"
case"ShiftACircular":return"SAC"
case"ShiftXCircular":return"SAX"
case"SwapAX":return"SWAP"
case"MoveXI1":return"MOVX1"
case"MoveXI2":return"MOVX2"
case"MoveXI3":return"MOVX3"
case"MoveXI4":return"MOVX4"
case"MoveXI5":return"MOVX5"
case"MoveXI6":return"MOVX6"
case"MoveI1X":return"MOV1X"
case"MoveI2X":return"MOV2X"
case"MoveI3X":return"MOV3X"
case"MoveI4X":return"MOV4X"
case"MoveI5X":return"MOV5X"
case"MoveI6X":return"MOV6X"
case"MoveJX":return"MOVJX"
case"NoOperation":return"NOP"
default:return"HLT"}},be=function(r){return{ctor:"Value",_0:r}},Je=function(r){return{ctor:"Label",_0:r}},we={ctor:"Halt"},ye={ctor:"NoOperation"},ke={ctor:"MoveJX"},Ee={ctor:"MoveI6X"},Ae={ctor:"MoveI5X"},Xe={ctor:"MoveI4X"},Le={ctor:"MoveI3X"},Se={ctor:"MoveI2X"},Ce={ctor:"MoveI1X"},xe={ctor:"MoveXI6"},Pe={ctor:"MoveXI5"},Me={ctor:"MoveXI4"},Oe={ctor:"MoveXI3"},Be={ctor:"MoveXI2"},je={ctor:"MoveXI1"},De={ctor:"SwapAX"},Re={ctor:"ShiftXCircular"},Ze={ctor:"ShiftACircular"},qe={ctor:"ShiftX"},Ve={ctor:"ShiftA"},Ue={ctor:"JumpI6NonPositive"},ze={ctor:"JumpI6NonZero"},Fe={ctor:"JumpI6NonNegative"},$e={ctor:"JumpI6Positive"},Ge={ctor:"JumpI6Zero"},We={ctor:"JumpI6Negative"},Qe={ctor:"JumpI5NonPositive"},Ke={ctor:"JumpI5NonZero"},He={ctor:"JumpI5NonNegative"},Ye={ctor:"JumpI5Positive"},rt={ctor:"JumpI5Zero"},et={ctor:"JumpI5Negative"},tt={ctor:"JumpI4NonPositive"},_t={ctor:"JumpI4NonZero"},nt={ctor:"JumpI4NonNegative"},ot={ctor:"JumpI4Positive"},ut={ctor:"JumpI4Zero"},ct={ctor:"JumpI4Negative"},at={ctor:"JumpI3NonPositive"},it={ctor:"JumpI3NonZero"},lt={ctor:"JumpI3NonNegative"},st={ctor:"JumpI3Positive"},pt={ctor:"JumpI3Zero"},ft={ctor:"JumpI3Negative"},dt={ctor:"JumpI2NonPositive"},vt={ctor:"JumpI2NonZero"},mt={ctor:"JumpI2NonNegative"},gt={ctor:"JumpI2Positive"},ht={ctor:"JumpI2Zero"},Tt={ctor:"JumpI2Negative"},Nt={ctor:"JumpI1NonPositive"},It={ctor:"JumpI1NonZero"},bt={ctor:"JumpI1NonNegative"},Jt={ctor:"JumpI1Positive"},wt={ctor:"JumpI1Zero"},yt={ctor:"JumpI1Negative"},kt={ctor:"JumpXNonPositive"},Et={ctor:"JumpXNonZero"},At={ctor:"JumpXNonNegative"},Xt={ctor:"JumpXPositive"},Lt={ctor:"JumpXZero"},St={ctor:"JumpXNegative"},Ct={ctor:"JumpANonPositive"},xt={ctor:"JumpANonZero"},Pt={ctor:"JumpANonNegative"},Mt={ctor:"JumpAPositive"},Ot={ctor:"JumpAZero"},Bt={ctor:"JumpANegative"},jt={ctor:"JumpOnLessEqual"},Dt={ctor:"JumpOnUnEqual"},Rt={ctor:"JumpOnGreaterEqual"},Zt={ctor:"JumpOnGreater"},qt={ctor:"JumpOnEqual"},Vt={ctor:"JumpOnLess"},Ut={ctor:"JumpOnNoOverflow"},zt={ctor:"JumpOnOverflow"},Ft={ctor:"JumpSaveJ"},$t={ctor:"Jump"},Gt={ctor:"CompareI6"},Wt={ctor:"CompareI5"},Qt={ctor:"CompareI4"},Kt={ctor:"CompareI3"},Ht={ctor:"CompareI2"},Yt={ctor:"CompareI1"},r_={ctor:"CompareX"},e_={ctor:"CompareA"},t_={ctor:"DecrementI6"},__={ctor:"DecrementI5"},n_={ctor:"DecrementI4"},o_={ctor:"DecrementI3"},u_={ctor:"DecrementI2"},c_={ctor:"DecrementI1"},a_={ctor:"DecrementX"},i_={ctor:"DecrementA"},l_={ctor:"IncrementI6"},s_={ctor:"IncrementI5"},p_={ctor:"IncrementI4"},f_={ctor:"IncrementI3"},d_={ctor:"IncrementI2"},v_={ctor:"IncrementI1"},m_={ctor:"IncrementX"},g_={ctor:"IncrementA"},h_={ctor:"EnterI6Neg"},T_={ctor:"EnterI5Neg"},N_={ctor:"EnterI4Neg"},I_={ctor:"EnterI3Neg"},b_={ctor:"EnterI2Neg"},J_={ctor:"EnterI1Neg"},w_={ctor:"EnterXNeg"},y_={ctor:"EnterANeg"},k_={ctor:"EnterI6"},E_={ctor:"EnterI5"},A_={ctor:"EnterI4"},X_={ctor:"EnterI3"},L_={ctor:"EnterI2"},S_={ctor:"EnterI1"},C_={ctor:"EnterX"},x_={ctor:"EnterA"},P_={ctor:"SubX"},M_={ctor:"AddX"},O_={ctor:"Sub"},B_={ctor:"Add"},j_={ctor:"StoreZero"},D_={ctor:"StoreJ"},R_={ctor:"StoreI6"},Z_={ctor:"StoreI5"},q_={ctor:"StoreI4"},V_={ctor:"StoreI3"},U_={ctor:"StoreI2"},z_={ctor:"StoreI1"},F_={ctor:"StoreX"},$_={ctor:"StoreA"},G_={ctor:"LoadI6Neg"},W_={ctor:"LoadI5Neg"},Q_={ctor:"LoadI4Neg"},K_={ctor:"LoadI3Neg"},H_={ctor:"LoadI2Neg"},Y_={ctor:"LoadI1Neg"},rn={ctor:"LoadXNeg"},en={ctor:"LoadANeg"},tn={ctor:"LoadI6"},_n={ctor:"LoadI5"},nn={ctor:"LoadI4"},on={ctor:"LoadI3"},un={ctor:"LoadI2"},cn={ctor:"LoadI1"},an={ctor:"LoadX"},ln={ctor:"LoadA"},sn=function(r){return{ctor:"UnrecognizedInstructionCode",_0:r}},pn=function(r){return{ctor:"InvalidModification",_0:r}},fn=function(r){var e=r,t=e._1,_=e._2,n=e._0,o=ce(Kr(_)),u=e._3
switch(u){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ye})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ln})
case 15:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:an})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:cn})
case 10:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:un})
case 11:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:on})
case 12:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:nn})
case 13:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:_n})
case 14:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:tn})
case 16:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:en})
case 23:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:rn})
case 17:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Y_})
case 18:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:H_})
case 19:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:K_})
case 20:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Q_})
case 21:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:W_})
case 22:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:G_})
case 24:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$_})
case 31:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:F_})
case 25:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:z_})
case 26:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:U_})
case 27:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:V_})
case 28:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:q_})
case 29:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Z_})
case 30:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:R_})
case 32:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:D_})
case 33:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:j_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:B_})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:O_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:M_})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:P_})
case 56:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:e_})
case 63:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:r_})
case 57:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Yt})
case 58:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ht})
case 59:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Kt})
case 60:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Qt})
case 61:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Wt})
case 62:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Gt})
case 48:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:x_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:y_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:g_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:i_})
default:return or(pn(_))}case 55:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:C_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:w_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:m_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:a_})
default:return or(pn(_))}case 49:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:S_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:J_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:v_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:c_})
default:return or(pn(_))}case 50:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:L_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:b_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:d_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:u_})
default:return or(pn(_))}case 51:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:X_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:I_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:f_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:o_})
default:return or(pn(_))}case 52:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:A_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:N_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:p_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:n_})
default:return or(pn(_))}case 53:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:E_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:T_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:s_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:__})
default:return or(pn(_))}case 54:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:k_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:h_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:l_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:t_})
default:return or(pn(_))}case 39:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$t})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ft})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:zt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ut})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Vt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:qt})
case 6:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Zt})
case 7:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Rt})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Dt})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:jt})
default:return or(pn(_))}case 40:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Bt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ot})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Mt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Pt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:xt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ct})
default:return or(pn(_))}case 47:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:St})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Lt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Xt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:At})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Et})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:kt})
default:return or(pn(_))}case 41:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:yt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:wt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Jt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:bt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:It})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Nt})
default:return or(pn(_))}case 42:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Tt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ht})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:gt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:mt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:vt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:dt})
default:return or(pn(_))}case 43:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ft})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:pt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:st})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:lt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:it})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:at})
default:return or(pn(_))}case 44:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ct})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ut})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ot})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:nt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:_t})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:tt})
default:return or(pn(_))}case 45:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:et})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:rt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ye})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:He})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ke})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Qe})
default:return or(pn(_))}case 46:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:We})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ge})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$e})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Fe})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ze})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ue})
default:return or(pn(_))}case 6:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ve})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:qe})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ze})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Re})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:De})
default:return or(pn(_))}case 7:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:je})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Be})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Oe})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Me})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Pe})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:xe})
case 6:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ce})
case 7:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Se})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Le})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Xe})
case 10:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ae})
case 11:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ee})
case 12:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ke})
default:return or(pn(_))}case 5:return 2===_?ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:we}):or(pn(_))
default:return or(sn(u))}},dn=function(r){return r._0},vn=function(r){return{ctor:"DataInstruction",_0:r}},mn=function(r){return{ctor:"DataNumber",_0:r}},gn=r(function(r,e){return{ctor:"Code",_0:r,_1:e}}),hn=t(function(r,e,t,_){var n=_,o=n._0,u=n._1
return"DataNumber"===u.ctor?a(gn,r(o),mn(e(u._0))):a(gn,r(o),vn(t(u._0)))}),Tn=function(r){var e=r,t=e._0,_=e._1
if("DataNumber"===_.ctor){var n=_._0
return"Err"===n.ctor?or(n._0):ur(a(gn,t,mn(n._0)))}var o=_._0
return"Err"===o.ctor?or(o._0):ur(a(gn,t,vn(o._0)))},Nn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return e
var n=r,o=i(r,_._1,_._2,i(Nn,r,e,_._4)),u=_._3
r=n,e=o,t=u}}),In=function(r){return i(Nn,e(function(r,e,t){return{ctor:"::",_0:r,_1:t}}),{ctor:"[]"},r)},bn=function(r){return i(Nn,e(function(r,e,t){return{ctor:"::",_0:{ctor:"_Tuple2",_0:r,_1:e},_1:t}}),{ctor:"[]"},r)},Jn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return e
var n=r,o=i(r,_._1,_._2,i(Jn,r,e,_._3)),u=_._4
r=n,e=o,t=u}}),wn=(n(function(t,_,n,o,u,c){var a=e(function(r,e,o){for(;;){var u=o,c=u._1,a=u._0,s=a
if("[]"===s.ctor)return{ctor:"_Tuple2",_0:a,_1:i(n,r,e,c)}
var p=s._1,f=s._0._1,d=s._0._0
if(!(v.cmp(d,r)<0))return v.cmp(d,r)>0?{ctor:"_Tuple2",_0:a,_1:i(n,r,e,c)}:{ctor:"_Tuple2",_0:p,_1:l(_,d,f,e,c)}
var m=r,g=e,h={ctor:"_Tuple2",_0:p,_1:i(t,d,f,c)}
r=m,e=g,o=h}}),s=i(Jn,a,{ctor:"_Tuple2",_0:bn(o),_1:c},u),p=s._0,f=s._1
return i(Z,r(function(r,e){var _=r
return i(t,_._0,_._1,e)}),f,p)}),t(function(r,e,t,_){return C.crash(gr({ctor:"::",_0:"Internal red-black tree invariant violated, expected ",_1:{ctor:"::",_0:r,_1:{ctor:"::",_0:" and got ",_1:{ctor:"::",_0:N(e),_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:t,_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:_,_1:{ctor:"::",_0:"\nPlease report this bug to <https://github.com/elm-lang/core/issues>",_1:{ctor:"[]"}}}}}}}}}}))})),yn=function(r){var e=r
r:do{if("RBNode_elm_builtin"===e.ctor){if("BBlack"===e._0.ctor)return!0
break r}if("LBBlack"===e._0.ctor)return!0
break r}while(!1)
return!1},kn=r(function(r,e){for(;;){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return r
var _=a(kn,r+1,t._4),n=t._3
r=_,e=n}}),En=r(function(r,e){r:for(;;){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return P
var _=a(k,r,t._1)
switch(_.ctor){case"LT":var n=r,o=t._3
r=n,e=o
continue r
case"EQ":return M(t._2)
default:var u=r,c=t._4
r=u,e=c
continue r}}}),An=r(function(r,e){return"Just"===a(En,r,e).ctor}),Xn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return{ctor:"_Tuple2",_0:r,_1:e}
var n=_._1,o=_._2,u=_._4
r=n,e=o,t=u}}),Ln={ctor:"NBlack"},Sn={ctor:"BBlack"},Cn={ctor:"Black"},xn=function(r){var e=r
if("RBNode_elm_builtin"===e.ctor){var t=e._0
return v.eq(t,Cn)||v.eq(t,Sn)}return!0},Pn={ctor:"Red"},Mn=function(r){switch(r.ctor){case"Black":return Sn
case"Red":return Cn
case"NBlack":return Pn
default:return C.crash("Can't make a double black node more black!")}},On=function(r){switch(r.ctor){case"BBlack":return Cn
case"Black":return Pn
case"Red":return Ln
default:return C.crash("Can't make a negative black node less black!")}},Bn={ctor:"LBBlack"},jn={ctor:"LBlack"},Dn=function(r){return{ctor:"RBEmpty_elm_builtin",_0:r}},Rn=Dn(jn),Zn=_(function(r,e,t,_,n){return{ctor:"RBNode_elm_builtin",_0:r,_1:e,_2:t,_3:_,_4:n}}),qn=function(r){var e=r
return"RBNode_elm_builtin"===e.ctor&&"Red"===e._0.ctor?s(Zn,Cn,e._1,e._2,e._3,e._4):r},Vn=function(r){var e=r
return"RBNode_elm_builtin"===e.ctor?s(Zn,On(e._0),e._1,e._2,e._3,e._4):Dn(jn)},Un=function(r){return function(e){return function(t){return function(_){return function(n){return function(o){return function(u){return function(c){return function(a){return function(i){return function(l){return s(Zn,On(r),_,n,s(Zn,Cn,e,t,c,a),s(Zn,Cn,o,u,i,l))}}}}}}}}}}},zn=function(r){var e=r
return"RBEmpty_elm_builtin"===e.ctor?Dn(jn):s(Zn,Cn,e._1,e._2,e._3,e._4)},Fn=function(r){var e=r
return"RBEmpty_elm_builtin"===e.ctor?C.crash("can't make a Leaf red"):s(Zn,Pn,e._1,e._2,e._3,e._4)},$n=function(r){var e=r
r:do{e:do{t:do{_:do{n:do{o:do{u:do{if("RBNode_elm_builtin"!==e.ctor)break r
if("RBNode_elm_builtin"===e._3.ctor)if("RBNode_elm_builtin"===e._4.ctor)switch(e._3._0.ctor){case"Red":switch(e._4._0.ctor){case"Red":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break u
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
if("RBNode_elm_builtin"===e._4._3.ctor&&"Red"===e._4._3._0.ctor)break n
if("RBNode_elm_builtin"===e._4._4.ctor&&"Red"===e._4._4._0.ctor)break _
break r
case"NBlack":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break u
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._4._3.ctor&&"Black"===e._4._3._0.ctor&&"RBNode_elm_builtin"===e._4._4.ctor&&"Black"===e._4._4._0.ctor)break t
break r
default:if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break u
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
break r}case"NBlack":switch(e._4._0.ctor){case"Red":if("RBNode_elm_builtin"===e._4._3.ctor&&"Red"===e._4._3._0.ctor)break n
if("RBNode_elm_builtin"===e._4._4.ctor&&"Red"===e._4._4._0.ctor)break _
if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._3._3.ctor&&"Black"===e._3._3._0.ctor&&"RBNode_elm_builtin"===e._3._4.ctor&&"Black"===e._3._4._0.ctor)break e
break r
case"NBlack":if("BBlack"===e._0.ctor){if("RBNode_elm_builtin"===e._4._3.ctor&&"Black"===e._4._3._0.ctor&&"RBNode_elm_builtin"===e._4._4.ctor&&"Black"===e._4._4._0.ctor)break t
if("RBNode_elm_builtin"===e._3._3.ctor&&"Black"===e._3._3._0.ctor&&"RBNode_elm_builtin"===e._3._4.ctor&&"Black"===e._3._4._0.ctor)break e
break r}break r
default:if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._3._3.ctor&&"Black"===e._3._3._0.ctor&&"RBNode_elm_builtin"===e._3._4.ctor&&"Black"===e._3._4._0.ctor)break e
break r}default:switch(e._4._0.ctor){case"Red":if("RBNode_elm_builtin"===e._4._3.ctor&&"Red"===e._4._3._0.ctor)break n
if("RBNode_elm_builtin"===e._4._4.ctor&&"Red"===e._4._4._0.ctor)break _
break r
case"NBlack":if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._4._3.ctor&&"Black"===e._4._3._0.ctor&&"RBNode_elm_builtin"===e._4._4.ctor&&"Black"===e._4._4._0.ctor)break t
break r
default:break r}}else switch(e._3._0.ctor){case"Red":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break u
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
break r
case"NBlack":if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._3._3.ctor&&"Black"===e._3._3._0.ctor&&"RBNode_elm_builtin"===e._3._4.ctor&&"Black"===e._3._4._0.ctor)break e
break r
default:break r}else{if("RBNode_elm_builtin"!==e._4.ctor)break r
switch(e._4._0.ctor){case"Red":if("RBNode_elm_builtin"===e._4._3.ctor&&"Red"===e._4._3._0.ctor)break n
if("RBNode_elm_builtin"===e._4._4.ctor&&"Red"===e._4._4._0.ctor)break _
break r
case"NBlack":if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._4._3.ctor&&"Black"===e._4._3._0.ctor&&"RBNode_elm_builtin"===e._4._4.ctor&&"Black"===e._4._4._0.ctor)break t
break r
default:break r}}}while(!1)
return Un(e._0)(e._3._3._1)(e._3._3._2)(e._3._1)(e._3._2)(e._1)(e._2)(e._3._3._3)(e._3._3._4)(e._3._4)(e._4)}while(!1)
return Un(e._0)(e._3._1)(e._3._2)(e._3._4._1)(e._3._4._2)(e._1)(e._2)(e._3._3)(e._3._4._3)(e._3._4._4)(e._4)}while(!1)
return Un(e._0)(e._1)(e._2)(e._4._3._1)(e._4._3._2)(e._4._1)(e._4._2)(e._3)(e._4._3._3)(e._4._3._4)(e._4._4)}while(!1)
return Un(e._0)(e._1)(e._2)(e._4._1)(e._4._2)(e._4._4._1)(e._4._4._2)(e._3)(e._4._3)(e._4._4._3)(e._4._4._4)}while(!1)
return s(Zn,Cn,e._4._3._1,e._4._3._2,s(Zn,Cn,e._1,e._2,e._3,e._4._3._3),s(Gn,Cn,e._4._1,e._4._2,e._4._3._4,Fn(e._4._4)))}while(!1)
return s(Zn,Cn,e._3._4._1,e._3._4._2,s(Gn,Cn,e._3._1,e._3._2,Fn(e._3._3),e._3._4._3),s(Zn,Cn,e._1,e._2,e._3._4._4,e._4))}while(!1)
return r},Gn=_(function(r,e,t,_,n){var o=s(Zn,r,e,t,_,n)
return xn(o)?$n(o):o}),Wn=_(function(r,e,t,_,n){return yn(_)||yn(n)?s(Gn,Mn(r),e,t,Vn(_),Vn(n)):s(Zn,r,e,t,_,n)}),Qn=_(function(r,e,t,_,n){var o=n
return"RBEmpty_elm_builtin"===o.ctor?i(Kn,r,_,n):s(Wn,r,e,t,_,s(Qn,o._0,o._1,o._2,o._3,o._4))}),Kn=e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
if("RBEmpty_elm_builtin"!==_._0.ctor){if("RBEmpty_elm_builtin"===_._1.ctor){var n=_._1._0,o=_._0._0,u={ctor:"_Tuple3",_0:r,_1:o,_2:n}
return"_Tuple3"===u.ctor&&"Black"===u._0.ctor&&"Red"===u._1.ctor&&"LBlack"===u._2.ctor?s(Zn,Cn,_._0._1,_._0._2,_._0._3,_._0._4):l(wn,"Black/Red/LBlack",r,N(o),N(n))}var c=_._0._2,a=_._0._4,p=_._0._1,f=s(Qn,_._0._0,p,c,_._0._3,a),d=i(Xn,p,c,a)
return s(Wn,r,d._0,d._1,f,t)}if("RBEmpty_elm_builtin"!==_._1.ctor){var v=_._1._0,m=_._0._0,g={ctor:"_Tuple3",_0:r,_1:m,_2:v}
return"_Tuple3"===g.ctor&&"Black"===g._0.ctor&&"LBlack"===g._1.ctor&&"Red"===g._2.ctor?s(Zn,Cn,_._1._1,_._1._2,_._1._3,_._1._4):l(wn,"Black/LBlack/Red",r,N(m),N(v))}switch(r.ctor){case"Red":return Dn(jn)
case"Black":return Dn(Bn)
default:return C.crash("cannot have bblack or nblack nodes at this point")}}),Hn=r(function(r,e){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return Dn(jn)
var _=t._1
return s(Zn,t._0,_,a(r,_,t._2),a(Hn,r,t._3),a(Hn,r,t._4))}),Yn={ctor:"Same"},ro={ctor:"Remove"},eo={ctor:"Insert"},to=e(function(r,e,t){var _=function(t){var n=t
if("RBEmpty_elm_builtin"===n.ctor){var o=e(P)
return"Nothing"===o.ctor?{ctor:"_Tuple2",_0:Yn,_1:Rn}:{ctor:"_Tuple2",_0:eo,_1:s(Zn,Pn,r,o._0,Rn,Rn)}}var u=n._2,c=n._4,l=n._3,p=n._1,f=n._0
switch(a(k,r,p).ctor){case"EQ":var d=e(M(u))
return"Nothing"===d.ctor?{ctor:"_Tuple2",_0:ro,_1:i(Kn,f,l,c)}:{ctor:"_Tuple2",_0:Yn,_1:s(Zn,f,p,d._0,l,c)}
case"LT":var v=_(l),m=v._0,g=v._1
switch(m.ctor){case"Same":return{ctor:"_Tuple2",_0:Yn,_1:s(Zn,f,p,u,g,c)}
case"Insert":return{ctor:"_Tuple2",_0:eo,_1:s(Gn,f,p,u,g,c)}
default:return{ctor:"_Tuple2",_0:ro,_1:s(Wn,f,p,u,g,c)}}default:var h=_(c),m=h._0,T=h._1
switch(m.ctor){case"Same":return{ctor:"_Tuple2",_0:Yn,_1:s(Zn,f,p,u,l,T)}
case"Insert":return{ctor:"_Tuple2",_0:eo,_1:s(Gn,f,p,u,l,T)}
default:return{ctor:"_Tuple2",_0:ro,_1:s(Wn,f,p,u,l,T)}}}},n=_(t),o=n._0,u=n._1
switch(o.ctor){case"Same":return u
case"Insert":return qn(u)
default:return zn(u)}}),_o=e(function(r,e,t){return i(to,r,g(M(e)),t)}),no=(r(function(r,e){return i(_o,r,e,Rn)}),r(function(r,e){return i(Jn,_o,e,r)}),r(function(r,t){return i(Jn,e(function(e,t,_){return a(r,e,t)?i(_o,e,t,_):_}),Rn,t)})),oo=(r(function(e,t){return a(no,r(function(r,e){return a(An,r,t)}),e)}),r(function(r,t){return i(Jn,e(function(e,t,_){var n=_,o=n._1,u=n._0
return a(r,e,t)?{ctor:"_Tuple2",_0:i(_o,e,t,u),_1:o}:{ctor:"_Tuple2",_0:u,_1:i(_o,e,t,o)}}),{ctor:"_Tuple2",_0:Rn,_1:Rn},t)}),function(e){return i(Z,r(function(r,e){var t=r
return i(_o,t._0,t._1,e)}),Rn,e)}),uo=r(function(r,e){return i(to,r,g(P),e)}),co=(r(function(r,t){return i(Jn,e(function(r,e,t){return a(uo,r,t)}),r,t)}),function(r){var e=r
return{a:Yr,x:Yr,i1:re,i2:re,i3:re,i4:re,i5:re,i6:re,j:re,p:0,mem:e._1,meta:e._0,symbolTable:e._2,reverseSymbolTable:e._3,overflow:ie,comparison:me}}),ao=r(function(r,e){return a(x,Yr,a(En,r,e))}),io=r(function(e,t){var _=e,n=_._1,o=_._0
switch(_._2.ctor){case"LoadA":return v.update(t,{a:i(Cr,n,a(ao,o,t.mem),t.a)})
case"LoadX":return v.update(t,{x:i(Cr,n,a(ao,o,t.mem),t.x)})
case"LoadI1":return v.update(t,{i1:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i1)))})
case"LoadI2":return v.update(t,{i2:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i2)))})
case"LoadI3":return v.update(t,{i3:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i3)))})
case"LoadI4":return v.update(t,{i4:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i4)))})
case"LoadI5":return v.update(t,{i5:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i5)))})
case"LoadI6":return v.update(t,{i6:xr(i(Cr,n,a(ao,o,t.mem),ee(t.i6)))})
case"LoadANeg":return v.update(t,{a:i(Cr,n,Gr(a(ao,o,t.mem)),t.a)})
case"LoadXNeg":return v.update(t,{x:i(Cr,n,Gr(a(ao,o,t.mem)),t.x)})
case"LoadI1Neg":return v.update(t,{i1:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i1)))})
case"LoadI2Neg":return v.update(t,{i2:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i2)))})
case"LoadI3Neg":return v.update(t,{i3:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i3)))})
case"LoadI4Neg":return v.update(t,{i4:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i4)))})
case"LoadI5Neg":return v.update(t,{i5:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i5)))})
case"LoadI6Neg":return v.update(t,{i6:xr(i(Cr,n,Gr(a(ao,o,t.mem)),ee(t.i6)))})
case"StoreA":return v.update(t,{mem:i(_o,o,i(Cr,n,t.a,a(ao,o,t.mem)),t.mem)})
case"StoreX":return v.update(t,{mem:i(_o,o,i(Cr,n,t.x,a(ao,o,t.mem)),t.mem)})
case"StoreI1":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i1),a(ao,o,t.mem)),t.mem)})
case"StoreI2":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i2),a(ao,o,t.mem)),t.mem)})
case"StoreI3":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i3),a(ao,o,t.mem)),t.mem)})
case"StoreI4":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i4),a(ao,o,t.mem)),t.mem)})
case"StoreI5":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i5),a(ao,o,t.mem)),t.mem)})
case"StoreI6":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.i6),a(ao,o,t.mem)),t.mem)})
case"StoreJ":return v.update(t,{mem:i(_o,o,i(Cr,n,ee(t.j),a(ao,o,t.mem)),t.mem)})
case"StoreZero":return v.update(t,{mem:i(_o,o,i(Cr,n,Yr,a(ao,o,t.mem)),t.mem)})
case"Add":var u=l(pe,r(function(r,e){return r+e}),n,t.a,a(ao,o,t.mem)),c=u._0,s=u._1
return v.update(t,{a:s,overflow:c})
case"Sub":var p=l(pe,r(function(r,e){return r-e}),n,t.a,a(ao,o,t.mem)),c=p._0,s=p._1
return v.update(t,{a:s,overflow:c})
case"AddX":var f=l(pe,r(function(r,e){return r+e}),n,t.a,t.x),c=f._0,s=f._1
return v.update(t,{a:s,overflow:c})
case"SubX":var d=l(pe,r(function(r,e){return r-e}),n,t.a,t.x),c=d._0,s=d._1
return v.update(t,{a:s,overflow:c})
case"EnterA":var m=a(se,o,t.a),c=m._0,s=m._1
return v.update(t,{a:s,overflow:c})
case"EnterX":var g=a(se,o,t.x),c=g._0,s=g._1
return v.update(t,{x:s,overflow:c})
case"EnterI1":var h=a(fe,o,t.i1),c=h._0,s=h._1
return v.update(t,{i1:s,overflow:c})
case"EnterI2":var T=a(fe,o,t.i2),c=T._0,s=T._1
return v.update(t,{i2:s,overflow:c})
case"EnterI3":var N=a(fe,o,t.i3),c=N._0,s=N._1
return v.update(t,{i3:s,overflow:c})
case"EnterI4":var I=a(fe,o,t.i4),c=I._0,s=I._1
return v.update(t,{i4:s,overflow:c})
case"EnterI5":var b=a(fe,o,t.i5),c=b._0,s=b._1
return v.update(t,{i5:s,overflow:c})
case"EnterI6":var J=a(fe,o,t.i6),c=J._0,s=J._1
return v.update(t,{i6:s,overflow:c})
case"EnterANeg":var w=a(se,X(o),t.a),c=w._0,s=w._1
return v.update(t,{a:s,overflow:c})
case"EnterXNeg":var y=a(se,X(o),t.x),c=y._0,s=y._1
return v.update(t,{x:s,overflow:c})
case"EnterI1Neg":var k=a(fe,X(o),t.i1),c=k._0,s=k._1
return v.update(t,{i1:s,overflow:c})
case"EnterI2Neg":var E=a(fe,X(o),t.i2),c=E._0,s=E._1
return v.update(t,{i2:s,overflow:c})
case"EnterI3Neg":var A=a(fe,X(o),t.i3),c=A._0,s=A._1
return v.update(t,{i3:s,overflow:c})
case"EnterI4Neg":var L=a(fe,X(o),t.i4),c=L._0,s=L._1
return v.update(t,{i4:s,overflow:c})
case"EnterI5Neg":var S=a(fe,X(o),t.i5),c=S._0,s=S._1
return v.update(t,{i5:s,overflow:c})
case"EnterI6Neg":var C=a(fe,X(o),t.i6),c=C._0,s=C._1
return v.update(t,{i6:s,overflow:c})
case"IncrementA":var x=a(se,Dr(t.a)+o,t.a),c=x._0,s=x._1
return v.update(t,{a:s,overflow:c})
case"IncrementX":var P=a(se,Dr(t.x)+o,t.x),c=P._0,s=P._1
return v.update(t,{x:s,overflow:c})
case"IncrementI1":var M=a(fe,Rr(t.i1)+o,t.i1),c=M._0,s=M._1
return v.update(t,{i1:s,overflow:c})
case"IncrementI2":var O=a(fe,Rr(t.i2)+o,t.i2),c=O._0,s=O._1
return v.update(t,{i2:s,overflow:c})
case"IncrementI3":var B=a(fe,Rr(t.i3)+o,t.i3),c=B._0,s=B._1
return v.update(t,{i3:s,overflow:c})
case"IncrementI4":var j=a(fe,Rr(t.i4)+o,t.i4),c=j._0,s=j._1
return v.update(t,{i4:s,overflow:c})
case"IncrementI5":var D=a(fe,Rr(t.i5)+o,t.i5),c=D._0,s=D._1
return v.update(t,{i5:s,overflow:c})
case"IncrementI6":var R=a(fe,Rr(t.i6)+o,t.i6),c=R._0,s=R._1
return v.update(t,{i6:s,overflow:c})
case"DecrementA":var Z=a(se,Dr(t.a)-o,t.a),c=Z._0,s=Z._1
return v.update(t,{a:s,overflow:c})
case"DecrementX":var q=a(se,Dr(t.x)-o,t.x),c=q._0,s=q._1
return v.update(t,{x:s,overflow:c})
case"DecrementI1":var V=a(fe,Rr(t.i1)-o,t.i1),c=V._0,s=V._1
return v.update(t,{i1:s,overflow:c})
case"DecrementI2":var U=a(fe,Rr(t.i2)-o,t.i2),c=U._0,s=U._1
return v.update(t,{i2:s,overflow:c})
case"DecrementI3":var z=a(fe,Rr(t.i3)-o,t.i3),c=z._0,s=z._1
return v.update(t,{i3:s,overflow:c})
case"DecrementI4":var F=a(fe,Rr(t.i4)-o,t.i4),c=F._0,s=F._1
return v.update(t,{i4:s,overflow:c})
case"DecrementI5":var $=a(fe,Rr(t.i5)-o,t.i5),c=$._0,s=$._1
return v.update(t,{i5:s,overflow:c})
case"DecrementI6":var G=a(fe,Rr(t.i6)-o,t.i6),c=G._0,s=G._1
return v.update(t,{i6:s,overflow:c})
case"CompareA":var W=i(he,n,t.a,a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareX":var W=i(he,n,t.x,a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI1":var W=i(he,n,ee(t.i1),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI2":var W=i(he,n,ee(t.i2),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI3":var W=i(he,n,ee(t.i3),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI4":var W=i(he,n,ee(t.i4),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI5":var W=i(he,n,ee(t.i5),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"CompareI6":var W=i(he,n,ee(t.i6),a(ao,o,t.mem))
return v.update(t,{comparison:W})
case"Jump":var Q=a(fe,t.p,t.j),c=Q._0,K=Q._1
return v.update(t,{p:o,j:K})
case"JumpSaveJ":return v.update(t,{p:o})
case"JumpOnOverflow":if(v.eq(t.overflow,le)){var H=a(fe,t.p,t.j),c=H._0,K=H._1
return v.update(t,{p:o,j:K,overflow:ie})}return t
case"JumpOnNoOverflow":if(v.eq(t.overflow,ie)){var Y=a(fe,t.p,t.j),c=Y._0,K=Y._1
return v.update(t,{p:o,j:K})}return v.update(t,{overflow:ie})
case"JumpOnLess":if(v.eq(t.comparison,ge)){var rr=a(fe,t.p,t.j),c=rr._0,K=rr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnEqual":if(v.eq(t.comparison,me)){var er=a(fe,t.p,t.j),c=er._0,K=er._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnGreater":if(v.eq(t.comparison,ve)){var tr=a(fe,t.p,t.j),c=tr._0,K=tr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnGreaterEqual":if(v.eq(t.comparison,ve)||v.eq(t.comparison,me)){var _r=a(fe,t.p,t.j),c=_r._0,K=_r._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnUnEqual":if(v.eq(t.comparison,ge)||v.eq(t.comparison,ve)){var nr=a(fe,t.p,t.j),c=nr._0,K=nr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnLessEqual":if(v.eq(t.comparison,ge)||v.eq(t.comparison,me)){var or=a(fe,t.p,t.j),c=or._0,K=or._1
return v.update(t,{p:o,j:K})}return t
case"JumpANegative":if(v.cmp(Dr(t.a),0)<0){var ur=a(fe,t.p,t.j),c=ur._0,K=ur._1
return v.update(t,{p:o,j:K})}return t
case"JumpAZero":if(v.eq(Dr(t.a),0)){var cr=a(fe,t.p,t.j),c=cr._0,K=cr._1
return v.update(t,{p:o,j:K})}return t
case"JumpAPositive":if(v.cmp(Dr(t.a),0)>0){var ar=a(fe,t.p,t.j),c=ar._0,K=ar._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonNegative":if(v.cmp(Dr(t.a),0)>0||v.eq(Dr(t.a),0)){var ir=a(fe,t.p,t.j),c=ir._0,K=ir._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonZero":if(v.cmp(Dr(t.a),0)<0||v.cmp(Dr(t.a),0)>0){var lr=a(fe,t.p,t.j),c=lr._0,K=lr._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonPositive":if(v.cmp(Dr(t.a),0)<0||v.eq(Dr(t.a),0)){var sr=a(fe,t.p,t.j),c=sr._0,K=sr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNegative":if(v.cmp(Dr(t.x),0)<0){var pr=a(fe,t.p,t.j),c=pr._0,K=pr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXZero":if(v.eq(Dr(t.x),0)){var fr=a(fe,t.p,t.j),c=fr._0,K=fr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXPositive":if(v.cmp(Dr(t.x),0)>0){var dr=a(fe,t.p,t.j),c=dr._0,K=dr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonNegative":if(v.cmp(Dr(t.x),0)>0||v.eq(Dr(t.x),0)){var vr=a(fe,t.p,t.j),c=vr._0,K=vr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonZero":if(v.cmp(Dr(t.x),0)<0||v.cmp(Dr(t.x),0)>0){var mr=a(fe,t.p,t.j),c=mr._0,K=mr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonPositive":if(v.cmp(Dr(t.x),0)<0||v.eq(Dr(t.x),0)){var gr=a(fe,t.p,t.j),c=gr._0,K=gr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Negative":if(v.cmp(Rr(t.i1),0)<0){var hr=a(fe,t.p,t.j),c=hr._0,K=hr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Zero":if(v.eq(Rr(t.i1),0)){var Tr=a(fe,t.p,t.j),c=Tr._0,K=Tr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Positive":if(v.cmp(Rr(t.i1),0)>0){var Nr=a(fe,t.p,t.j),c=Nr._0,K=Nr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonNegative":if(v.cmp(Rr(t.i1),0)>0||v.eq(Rr(t.i1),0)){var Ir=a(fe,t.p,t.j),c=Ir._0,K=Ir._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonZero":if(v.cmp(Rr(t.i1),0)<0||v.cmp(Rr(t.i1),0)>0){var br=a(fe,t.p,t.j),c=br._0,K=br._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonPositive":if(v.cmp(Rr(t.i1),0)<0||v.eq(Rr(t.i1),0)){var Jr=a(fe,t.p,t.j),c=Jr._0,K=Jr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Negative":if(v.cmp(Rr(t.i2),0)<0){var wr=a(fe,t.p,t.j),c=wr._0,K=wr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Zero":if(v.eq(Rr(t.i2),0)){var yr=a(fe,t.p,t.j),c=yr._0,K=yr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Positive":if(v.cmp(Rr(t.i2),0)>0){var kr=a(fe,t.p,t.j),c=kr._0,K=kr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonNegative":if(v.cmp(Rr(t.i2),0)>0||v.eq(Rr(t.i2),0)){var Er=a(fe,t.p,t.j),c=Er._0,K=Er._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonZero":if(v.cmp(Rr(t.i2),0)<0||v.cmp(Rr(t.i2),0)>0){var Ar=a(fe,t.p,t.j),c=Ar._0,K=Ar._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonPositive":if(v.cmp(Rr(t.i2),0)<0||v.eq(Rr(t.i2),0)){var Xr=a(fe,t.p,t.j),c=Xr._0,K=Xr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Negative":if(v.cmp(Rr(t.i3),0)<0){var Lr=a(fe,t.p,t.j),c=Lr._0,K=Lr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Zero":if(v.eq(Rr(t.i3),0)){var Sr=a(fe,t.p,t.j),c=Sr._0,K=Sr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Positive":if(v.cmp(Rr(t.i3),0)>0){var Pr=a(fe,t.p,t.j),c=Pr._0,K=Pr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonNegative":if(v.cmp(Rr(t.i3),0)>0||v.eq(Rr(t.i3),0)){var Mr=a(fe,t.p,t.j),c=Mr._0,K=Mr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonZero":if(v.cmp(Rr(t.i3),0)<0||v.cmp(Rr(t.i3),0)>0){var Or=a(fe,t.p,t.j),c=Or._0,K=Or._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonPositive":if(v.cmp(Rr(t.i3),0)<0||v.eq(Rr(t.i3),0)){var Br=a(fe,t.p,t.j),c=Br._0,K=Br._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Negative":if(v.cmp(Rr(t.i4),0)<0){var jr=a(fe,t.p,t.j),c=jr._0,K=jr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Zero":if(v.eq(Rr(t.i4),0)){var Zr=a(fe,t.p,t.j),c=Zr._0,K=Zr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Positive":if(v.cmp(Rr(t.i4),0)>0){var qr=a(fe,t.p,t.j),c=qr._0,K=qr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonNegative":if(v.cmp(Rr(t.i4),0)>0||v.eq(Rr(t.i4),0)){var Vr=a(fe,t.p,t.j),c=Vr._0,K=Vr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonZero":if(v.cmp(Rr(t.i4),0)<0||v.cmp(Rr(t.i4),0)>0){var Ur=a(fe,t.p,t.j),c=Ur._0,K=Ur._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonPositive":if(v.cmp(Rr(t.i4),0)<0||v.eq(Rr(t.i4),0)){var zr=a(fe,t.p,t.j),c=zr._0,K=zr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Negative":if(v.cmp(Rr(t.i5),0)<0){var Fr=a(fe,t.p,t.j),c=Fr._0,K=Fr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Zero":if(v.eq(Rr(t.i5),0)){var $r=a(fe,t.p,t.j),c=$r._0,K=$r._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Positive":if(v.cmp(Rr(t.i5),0)>0){var Wr=a(fe,t.p,t.j),c=Wr._0,K=Wr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonNegative":if(v.cmp(Rr(t.i5),0)>0||v.eq(Rr(t.i5),0)){var Qr=a(fe,t.p,t.j),c=Qr._0,K=Qr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonZero":if(v.cmp(Rr(t.i5),0)<0||v.cmp(Rr(t.i5),0)>0){var Kr=a(fe,t.p,t.j),c=Kr._0,K=Kr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonPositive":if(v.cmp(Rr(t.i5),0)<0||v.eq(Rr(t.i5),0)){var Hr=a(fe,t.p,t.j),c=Hr._0,K=Hr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Negative":if(v.cmp(Rr(t.i6),0)<0){var re=a(fe,t.p,t.j),c=re._0,K=re._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Zero":if(v.eq(Rr(t.i6),0)){var ne=a(fe,t.p,t.j),c=ne._0,K=ne._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Positive":if(v.cmp(Rr(t.i6),0)>0){var oe=a(fe,t.p,t.j),c=oe._0,K=oe._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonNegative":if(v.cmp(Rr(t.i6),0)>0||v.eq(Rr(t.i6),0)){var ue=a(fe,t.p,t.j),c=ue._0,K=ue._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonZero":if(v.cmp(Rr(t.i6),0)<0||v.cmp(Rr(t.i6),0)>0){var ce=a(fe,t.p,t.j),c=ce._0,K=ce._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonPositive":if(v.cmp(Rr(t.i6),0)<0||v.eq(Rr(t.i6),0)){var ae=a(fe,t.p,t.j),c=ae._0,K=ae._1
return v.update(t,{p:o,j:K})}return t
case"ShiftA":return v.update(t,{a:a(te,o,t.a)})
case"ShiftX":return v.update(t,{x:a(te,o,t.x)})
case"ShiftACircular":return v.update(t,{a:a(_e,o,t.a)})
case"ShiftXCircular":return v.update(t,{x:a(_e,o,t.x)})
case"SwapAX":return v.update(t,{a:t.x,x:t.a})
case"MoveXI1":return v.update(t,{i1:xr(t.x)})
case"MoveXI2":return v.update(t,{i2:xr(t.x)})
case"MoveXI3":return v.update(t,{i3:xr(t.x)})
case"MoveXI4":return v.update(t,{i4:xr(t.x)})
case"MoveXI5":return v.update(t,{i5:xr(t.x)})
case"MoveXI6":return v.update(t,{i6:xr(t.x)})
case"MoveI1X":return v.update(t,{x:ee(t.i1)})
case"MoveI2X":return v.update(t,{x:ee(t.i2)})
case"MoveI3X":return v.update(t,{x:ee(t.i3)})
case"MoveI4X":return v.update(t,{x:ee(t.i4)})
case"MoveI5X":return v.update(t,{x:ee(t.i5)})
case"MoveI6X":return v.update(t,{x:ee(t.i6)})
case"MoveJX":return v.update(t,{x:ee(t.j)})
case"NoOperation":return t
default:return t}}),lo={ctor:"Instruction"},so={ctor:"Number"},po=r(function(r,e){return a(x,so,a(En,r,e))}),fo=function(r){var e=r,t=e._0,_=e._1
return"DataNumber"===_.ctor?{ctor:"_Tuple2",_0:{ctor:"_Tuple2",_0:t,_1:Nr(a(se,_._0,Yr))},_1:{ctor:"_Tuple2",_0:t,_1:so}}:{ctor:"_Tuple2",_0:{ctor:"_Tuple2",_0:t,_1:de(Ne(_._0))},_1:{ctor:"_Tuple2",_0:t,_1:lo}}},vo=function(r){var e=oo(a(z,function(r){return Ir(fo(r))},r))
return{ctor:"_Tuple2",_0:oo(a(z,function(r){return Nr(fo(r))},r)),_1:e}},mo=mo||{}
mo["<*>"]=r(function(r,e){return function(t){var _=r(t)
if("Err"===_.ctor)return or(_._0)
var n=e(_._0._0)
return"Err"===n.ctor?or(n._0):ur({ctor:"_Tuple2",_0:n._0._0,_1:_._0._1(n._0._1)})}})
var go=function(r){return function(e){return or(r)}},ho=function(r){return function(e){return ur({ctor:"_Tuple2",_0:r,_1:{ctor:"_Tuple0"}})}},To=function(){return function(r){return ur({ctor:"_Tuple2",_0:r,_1:r})}}(),No=function(r){return function(e){return ur({ctor:"_Tuple2",_0:e,_1:r})}},mo=mo||{}
mo["<$>"]=r(function(r,e){return a(mo["<*>"],No(r),e)})
var Io=e(function(r,e,t){return a(mo["<*>"],a(mo["<$>"],r,e),t)}),mo=mo||{}
mo["<*"]=r(function(e,t){return i(Io,r(function(r,e){return r}),e,t)})
var mo=mo||{}
mo["*>"]=r(function(e,t){return i(Io,r(function(r,e){return e}),e,t)})
var bo=(t(function(r,e,t,_){return a(mo["<*>"],a(mo["<*>"],a(mo["<$>"],r,e),t),_)}),_(function(r,e,t,_,n){return a(mo["<*>"],a(mo["<*>"],a(mo["<*>"],a(mo["<$>"],r,e),t),_),n)}),n(function(r,e,t,_,n,o){return a(mo["<*>"],a(mo["<*>"],a(mo["<*>"],a(mo["<*>"],a(mo["<$>"],r,e),t),_),n),o)}),r(function(r,e){return function(t){var _=r(t)
return"Err"===_.ctor?e(t):ur({ctor:"_Tuple2",_0:_._0._0,_1:_._0._1})}})),mo=mo||{}
mo[">>="]=r(function(r,e){return function(t){var _=r(t)
return"Err"===_.ctor?or(_._0):a(e,_._0._1,_._0._0)}})
var Jo,wo=function(){function _(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function n(r){return new RegExp(r.source,"gi")}function o(r){return new RegExp(r,"g")}function u(r,e){return null!==e.match(r)}function c(r,e,t){r="All"===r.ctor?1/0:r._0
for(var _,n=[],o=0,u=t,c=e.lastIndex,a=-1;o++<r&&(_=e.exec(u))&&a!==e.lastIndex;){for(var i=_.length-1,l=new Array(i);i>0;){var s=_[i]
l[--i]=void 0===s?P:M(s)}n.push({match:_[0],submatches:O.fromArray(l),index:_.index,number:o}),a=e.lastIndex}return e.lastIndex=c,O.fromArray(n)}function a(r,e,t,_){function n(e){if(o++>=r)return e
for(var _=arguments.length-3,n=new Array(_);_>0;){var u=arguments[_]
n[--_]=void 0===u?P:M(u)}return t({match:e,submatches:O.fromArray(n),index:arguments[arguments.length-2],number:o})}r="All"===r.ctor?1/0:r._0
var o=0
return _.replace(e,n)}function i(r,e,t){if((r="All"===r.ctor?1/0:r._0)===1/0)return O.fromArray(t.split(e))
for(var _,n=t,o=[],u=e.lastIndex,c=e.lastIndex;r--&&(_=e.exec(n));)o.push(n.slice(u,_.index)),u=e.lastIndex
return o.push(n.slice(u)),e.lastIndex=c,O.fromArray(o)}return{regex:o,caseInsensitive:n,escape:_,contains:r(u),find:e(c),replace:t(a),split:e(i)}}(),yo=(wo.split,wo.replace,wo.find),ko=(wo.contains,wo.caseInsensitive,wo.regex),Eo=(wo.escape,t(function(r,e,t,_){return{match:r,submatches:e,index:t,number:_}}),function(r){return{ctor:"AtMost",_0:r}}),Ao=function(r){var e=r
return"::"!==e.ctor||"Comment"!==e._0.ctor},Xo=function(e){var t=e
if("[]"===t.ctor)return ur({ctor:"[]"})
var _=t._0
return"Err"===_.ctor?or(_._0):a(cr,r(function(r,e){return{ctor:"::",_0:r,_1:e}})(_._0),Xo(t._1))},Lo=function(r){for(;;){var e=r
if("[]"===e.ctor)return{ctor:"[]"}
var t=e._1,_=e._0
if("Just"===_.ctor)return{ctor:"::",_0:_._0,_1:Lo(t)}
r=t}},So=function(r){return"[]"===r.ctor?P:M(r)},Co={ctor:"StringEmpty"},xo={ctor:"NoMatch"},Po=r(function(r,e){if(Tr(e))return or(Co)
var t=i(yo,Eo(1),r,e)
if("[]"===t.ctor)return or(xo)
var _=t._0,n=function(r){return r.index}(_),o=function(r){return r.match}(_)
return v.eq(n,0)?ur({ctor:"_Tuple2",_0:a(dr,mr(o),e),_1:o}):or(xo)}),Mo=function(r){return{ctor:"Comment",_0:r}},Oo=a(mo["<$>"],function(r){return Mo(a(dr,1,r))},Po(ko("#(.)*"))),Bo=function(r){return{ctor:"IndexTag",_0:r}},jo=a(mo["<$>"],function(r){return Bo(a(nr,0,pr(a(dr,1,r))))},Po(ko("[+][0-9]+"))),Do=function(r){return{ctor:"MaskTag",_0:r}},Ro=a(mo["<$>"],function(r){return Do(a(nr,0,pr(a(dr,1,r))))},Po(ko("[/][0-9]+"))),Zo=function(r){return{ctor:"LabelTag",_0:r}},qo=a(mo["<$>"],function(r){return Zo(a(dr,1,r))},Po(ko("[:][a-z]([a-z]|_)*"))),Vo=function(r){return{ctor:"RelativeTag",_0:r}},Uo=a(mo["<$>"],function(r){return function(r){return Vo(be(r))}(a(nr,0,pr(r)))},Po(ko("-?[0-9]+"))),zo=a(mo["<$>"],function(r){return Vo(Je(r))},Po(ko("[a-z]([a-z]|_)*"))),Fo=a(bo,Uo,zo),$o=function(r){return{ctor:"InstructionTag",_0:r}},Go=r(function(r,e){return a(mo["<*"],No($o(r)),Po(ko(e)))}),Wo=i(Z,bo,a(Go,we,"HLT"),{ctor:"::",_0:a(Go,ln,"LDA"),_1:{ctor:"::",_0:a(Go,an,"LDX"),_1:{ctor:"::",_0:a(Go,cn,"LD1"),_1:{ctor:"::",_0:a(Go,un,"LD2"),_1:{ctor:"::",_0:a(Go,on,"LD3"),_1:{ctor:"::",_0:a(Go,nn,"LD4"),_1:{ctor:"::",_0:a(Go,_n,"LD5"),_1:{ctor:"::",_0:a(Go,tn,"LD6"),_1:{ctor:"::",_0:a(Go,en,"LDAN"),_1:{ctor:"::",_0:a(Go,rn,"LDXN"),_1:{ctor:"::",_0:a(Go,Y_,"LD1N"),_1:{ctor:"::",_0:a(Go,H_,"LD2N"),_1:{ctor:"::",_0:a(Go,K_,"LD3N"),_1:{ctor:"::",_0:a(Go,Q_,"LD4N"),_1:{ctor:"::",_0:a(Go,W_,"LD5N"),_1:{ctor:"::",_0:a(Go,G_,"LD6N"),_1:{ctor:"::",_0:a(Go,$_,"STA"),_1:{ctor:"::",_0:a(Go,F_,"STX"),_1:{ctor:"::",_0:a(Go,z_,"ST1"),_1:{ctor:"::",_0:a(Go,U_,"ST2"),_1:{ctor:"::",_0:a(Go,V_,"ST3"),_1:{ctor:"::",_0:a(Go,q_,"ST4"),_1:{ctor:"::",_0:a(Go,Z_,"ST5"),_1:{ctor:"::",_0:a(Go,R_,"ST6"),_1:{ctor:"::",_0:a(Go,D_,"STJ"),_1:{ctor:"::",_0:a(Go,j_,"STZ"),_1:{ctor:"::",_0:a(Go,B_,"ADD"),_1:{ctor:"::",_0:a(Go,O_,"SUB"),_1:{ctor:"::",_0:a(Go,M_,"ADDX"),_1:{ctor:"::",_0:a(Go,P_,"SUBX"),_1:{ctor:"::",_0:a(Go,x_,"ENTA"),_1:{ctor:"::",_0:a(Go,C_,"ENTX"),_1:{ctor:"::",_0:a(Go,S_,"ENT1"),_1:{ctor:"::",_0:a(Go,L_,"ENT2"),_1:{ctor:"::",_0:a(Go,X_,"ENT3"),_1:{ctor:"::",_0:a(Go,A_,"ENT4"),_1:{ctor:"::",_0:a(Go,E_,"ENT5"),_1:{ctor:"::",_0:a(Go,k_,"ENT6"),_1:{ctor:"::",_0:a(Go,y_,"ENNA"),_1:{ctor:"::",_0:a(Go,w_,"ENNX"),_1:{ctor:"::",_0:a(Go,J_,"ENN1"),_1:{ctor:"::",_0:a(Go,b_,"ENN2"),_1:{ctor:"::",_0:a(Go,I_,"ENN3"),_1:{ctor:"::",_0:a(Go,N_,"ENN4"),_1:{ctor:"::",_0:a(Go,T_,"ENN5"),_1:{ctor:"::",_0:a(Go,h_,"ENN6"),_1:{ctor:"::",_0:a(Go,g_,"INCA"),_1:{ctor:"::",_0:a(Go,m_,"INCX"),_1:{ctor:"::",_0:a(Go,v_,"INC1"),_1:{ctor:"::",_0:a(Go,d_,"INC2"),_1:{ctor:"::",_0:a(Go,f_,"INC3"),_1:{ctor:"::",_0:a(Go,p_,"INC4"),_1:{ctor:"::",_0:a(Go,s_,"INC5"),_1:{ctor:"::",_0:a(Go,l_,"INC6"),_1:{ctor:"::",_0:a(Go,i_,"DECA"),_1:{ctor:"::",_0:a(Go,a_,"DECX"),_1:{ctor:"::",_0:a(Go,c_,"DEC1"),_1:{ctor:"::",_0:a(Go,u_,"DEC2"),_1:{ctor:"::",_0:a(Go,o_,"DEC3"),_1:{ctor:"::",_0:a(Go,n_,"DEC4"),_1:{ctor:"::",_0:a(Go,__,"DEC5"),_1:{ctor:"::",_0:a(Go,t_,"DEC6"),_1:{ctor:"::",_0:a(Go,e_,"CMPA"),_1:{ctor:"::",_0:a(Go,r_,"CMPX"),_1:{ctor:"::",_0:a(Go,Yt,"CMP1"),_1:{ctor:"::",_0:a(Go,Ht,"CMP2"),_1:{ctor:"::",_0:a(Go,Kt,"CMP3"),_1:{ctor:"::",_0:a(Go,Qt,"CMP4"),_1:{ctor:"::",_0:a(Go,Wt,"CMP5"),_1:{ctor:"::",_0:a(Go,Gt,"CMP6"),_1:{ctor:"::",_0:a(Go,$t,"JMP"),_1:{ctor:"::",_0:a(Go,Ft,"JSJ"),_1:{ctor:"::",_0:a(Go,zt,"JOV"),_1:{ctor:"::",_0:a(Go,Ut,"JNOV"),_1:{ctor:"::",_0:a(Go,Vt,"JL"),_1:{ctor:"::",_0:a(Go,qt,"JE"),_1:{ctor:"::",_0:a(Go,Zt,"JG"),_1:{ctor:"::",_0:a(Go,Rt,"JGE"),_1:{ctor:"::",_0:a(Go,Dt,"JNE"),_1:{ctor:"::",_0:a(Go,jt,"JLE"),_1:{ctor:"::",_0:a(Go,Bt,"JAN"),_1:{ctor:"::",_0:a(Go,Ot,"JAZ"),_1:{ctor:"::",_0:a(Go,Mt,"JAP"),_1:{ctor:"::",_0:a(Go,Pt,"JANN"),_1:{ctor:"::",_0:a(Go,xt,"JANZ"),_1:{ctor:"::",_0:a(Go,Ct,"JANP"),_1:{ctor:"::",_0:a(Go,St,"JXN"),_1:{ctor:"::",_0:a(Go,Lt,"JXZ"),_1:{ctor:"::",_0:a(Go,Xt,"JXP"),_1:{ctor:"::",_0:a(Go,At,"JXNN"),_1:{ctor:"::",_0:a(Go,Et,"JXNZ"),_1:{ctor:"::",_0:a(Go,kt,"JXNP"),_1:{ctor:"::",_0:a(Go,yt,"J1N"),_1:{ctor:"::",_0:a(Go,wt,"J1Z"),_1:{ctor:"::",_0:a(Go,Jt,"J1P"),_1:{ctor:"::",_0:a(Go,bt,"J1NN"),_1:{ctor:"::",_0:a(Go,It,"J1NZ"),_1:{ctor:"::",_0:a(Go,Nt,"J1NP"),_1:{ctor:"::",_0:a(Go,Tt,"J2N"),_1:{ctor:"::",_0:a(Go,ht,"J2Z"),_1:{ctor:"::",_0:a(Go,gt,"J2P"),_1:{ctor:"::",_0:a(Go,mt,"J2NN"),_1:{ctor:"::",_0:a(Go,vt,"J2NZ"),_1:{ctor:"::",_0:a(Go,dt,"J2NP"),_1:{ctor:"::",_0:a(Go,ft,"J3N"),_1:{ctor:"::",_0:a(Go,pt,"J3Z"),_1:{ctor:"::",_0:a(Go,st,"J3P"),_1:{ctor:"::",_0:a(Go,lt,"J3NN"),_1:{ctor:"::",_0:a(Go,it,"J3NZ"),_1:{ctor:"::",_0:a(Go,at,"J3NP"),_1:{ctor:"::",_0:a(Go,ct,"J4N"),_1:{ctor:"::",_0:a(Go,ut,"J4Z"),_1:{ctor:"::",_0:a(Go,ot,"J4P"),_1:{ctor:"::",_0:a(Go,nt,"J4NN"),_1:{ctor:"::",_0:a(Go,_t,"J4NZ"),_1:{ctor:"::",_0:a(Go,tt,"J4NP"),_1:{ctor:"::",_0:a(Go,et,"J5N"),_1:{ctor:"::",_0:a(Go,rt,"J5Z"),_1:{ctor:"::",_0:a(Go,Ye,"J5P"),_1:{ctor:"::",_0:a(Go,He,"J5NN"),_1:{ctor:"::",_0:a(Go,Ke,"J5NZ"),_1:{ctor:"::",_0:a(Go,Qe,"J5NP"),_1:{ctor:"::",_0:a(Go,We,"J6N"),_1:{ctor:"::",_0:a(Go,Ge,"J6Z"),_1:{ctor:"::",_0:a(Go,$e,"J6P"),_1:{ctor:"::",_0:a(Go,Fe,"J6NN"),_1:{ctor:"::",_0:a(Go,ze,"J6NZ"),_1:{ctor:"::",_0:a(Go,Ue,"J6NP"),_1:{ctor:"::",_0:a(Go,Ve,"SA"),_1:{ctor:"::",_0:a(Go,qe,"SX"),_1:{ctor:"::",_0:a(Go,Ze,"SAC"),_1:{ctor:"::",_0:a(Go,Re,"SAX"),_1:{ctor:"::",_0:a(Go,De,"SWAP"),_1:{ctor:"::",_0:a(Go,je,"MOVX1"),_1:{ctor:"::",_0:a(Go,Be,"MOVX2"),_1:{ctor:"::",_0:a(Go,Oe,"MOVX3"),_1:{ctor:"::",_0:a(Go,Me,"MOVX4"),_1:{ctor:"::",_0:a(Go,Pe,"MOVX5"),_1:{ctor:"::",_0:a(Go,xe,"MOVX6"),_1:{ctor:"::",_0:a(Go,Ce,"MOV1X"),_1:{ctor:"::",_0:a(Go,Se,"MOV2X"),_1:{ctor:"::",_0:a(Go,Le,"MOV3X"),_1:{ctor:"::",_0:a(Go,Xe,"MOV4X"),_1:{ctor:"::",_0:a(Go,Ae,"MOV5X"),_1:{ctor:"::",_0:a(Go,Ee,"MOV6X"),_1:{ctor:"::",_0:a(Go,ke,"MOVJX"),_1:{ctor:"::",_0:a(Go,ye,"NOP"),_1:{ctor:"[]"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}),Qo=i(Z,bo,Wo,{ctor:"::",_0:Fo,_1:{ctor:"::",_0:qo,_1:{ctor:"::",_0:Ro,_1:{ctor:"::",_0:jo,_1:{ctor:"::",_0:Oo,_1:{ctor:"[]"}}}}}}),Ko=function(r){for(;;){var e=Qo(r)
if("Ok"===e.ctor)return{ctor:"::",_0:e._0._1,_1:Ko(e._0._0)}
{if("NoMatch"!==e._0.ctor)return{ctor:"[]"}
var t=hr(r)
if("Nothing"===t.ctor)return{ctor:"[]"}
r=t._0._1}}},Ho=function(r){return a(F,Ao,Lo(a(z,function(r){return So(Ko(r))},fr(r))))},Yo=function(r){for(;;){var e=r
if("[]"===e.ctor)return P
var t=e._0
if("IndexTag"===t.ctor)return M(t._0)
r=e._1}},ru=function(r){return a(x,0,Yo(r))},eu=function(r){for(;;){var e=r
if("[]"===e.ctor)return P
var t=e._0
if("MaskTag"===t.ctor)return M(t._0)
r=e._1}},tu=function(r){return ce(Kr(a(x,0,eu(r))))},_u=function(r){for(;;){var e=r
if("[]"===e.ctor)return P
var t=e._0
if("LabelTag"===t.ctor)return M(t._0)
r=e._1}},nu=function(r){for(;;){var e=r
if("[]"===e.ctor)return P
var t=e._0
if("RelativeTag"===t.ctor)return M(t._0)
r=e._1}},ou=function(r){return a(x,be(0),nu(r))},uu=function(r){for(;;){var e=r
if("[]"===e.ctor)return P
var t=e._0
if("InstructionTag"===t.ctor)return M(t._0)
r=e._1}},cu=function(r){var e=ru(r),t=ou(r),_=uu(r),n=tu(r),o=_u(r),u=_
return ur("Nothing"===u.ctor?a(gn,o,mn(t)):a(gn,o,vn({ctor:"_Tuple4",_0:t,_1:e,_2:n,_3:u._0})))},au=function(r){return Xo(a(z,cu,r))},iu=function(r){var e=r,t=e._0
return"Nothing"===t.ctor?P:M({ctor:"_Tuple2",_0:t._0,_1:e._1})},lu=function(r){return oo(Lo(a(z,function(r){return iu(dn(r))},r)))},su=r(function(r,e){return l(hn,function(e){return{ctor:"_Tuple2",_0:e,_1:r}},h,h,e)}),pu=function(r){return i(j,su,a(_r,0,q(r)-1),r)},fu=function(r){return{ctor:"NonDeclaredLabel",_0:r}},du=r(function(r,e){var t=e
if("Value"===t.ctor)return ur(t._0)
var _=t._0,n=a(En,_,r)
return"Nothing"===n.ctor?or(fu(_)):ur(n._0)}),vu=r(function(r,e){var t=e
return a(cr,function(r){return{ctor:"_Tuple4",_0:r,_1:t._1,_2:t._2,_3:t._3}},a(du,r,t._0))}),mu=r(function(r,e){return Tn(l(hn,Nr,du(r),vu(r),e))}),gu=function(r){var e=pu(r),t=lu(e)
return a(cr,function(r){return{ctor:"_Tuple2",_0:r,_1:t}},Xo(a(z,mu(t),e)))},hu=function(r){return oo(a(z,function(r){var e=r
return{ctor:"_Tuple2",_0:e._1,_1:e._0}},bn(r)))},Tu=function(r){return{ctor:"TranspilePhaseError",_0:r}},Nu=function(r){return{ctor:"ParserPhaseError",_0:r}},Iu=function(r){var e=Ho(r),t=au(e),_=t
if("Err"===_.ctor)return or(Nu(_._0))
var n=gu(_._0)
if("Err"===n.ctor)return or(Tu(n._0))
var o=n._0._1,u=vo(n._0._0)
return ur({ctor:"_Tuple4",_0:u._0,_1:u._1,_2:o,_3:hu(o)})},bu=function(r){return a(mo["*>"],a(mo[">>="],a(mo["<$>"],io(r),To),ho),No(r))},Ju=function(){var r=function(r){return v.update(r,{p:r.p+1})}
return a(mo[">>="],a(mo["<$>"],r,To),ho)}(),wu=function(r){return No(Zr(r))},yu=function(r){return{ctor:"InvalidIndex",_0:r}},ku=r(function(r,e){var t=e,_=t._3,n=t._2,o=t._0,u=t._1
switch(u){case 0:return No({ctor:"_Tuple3",_0:o,_1:n,_2:_})
case 1:return No({ctor:"_Tuple3",_0:o+Rr(r.i1),_1:n,_2:_})
case 2:return No({ctor:"_Tuple3",_0:o+Rr(r.i2),_1:n,_2:_})
case 3:return No({ctor:"_Tuple3",_0:o+Rr(r.i3),_1:n,_2:_})
case 4:return No({ctor:"_Tuple3",_0:o+Rr(r.i4),_1:n,_2:_})
case 5:return No({ctor:"_Tuple3",_0:o+Rr(r.i5),_1:n,_2:_})
case 6:return No({ctor:"_Tuple3",_0:o+Rr(r.i6),_1:n,_2:_})
default:return go(yu(u))}}),Eu=function(r){return a(mo[">>="],To,a(m,ku,r))},Au=function(r){return{ctor:"InstructionDecodeError",_0:r}},Xu=function(r){var e=fn(r)
return"Err"===e.ctor?go(Au(e._0)):No(e._0)},Lu=function(r){return{ctor:"NoMemoryValue",_0:r}},Su=function(r){var e=a(En,r.p,r.mem)
return"Nothing"===e.ctor?go(Lu(r.p)):No(e._0)},Cu=a(mo[">>="],a(mo[">>="],a(mo[">>="],To,Su),wu),Xu),xu=a(mo[">>="],a(mo[">>="],a(mo["<*"],Cu,Ju),Eu),bu),Pu=r(function(r,e){var t=b(r)
return I(a(T["%"],t,e))+r-I(t)}),Mu=(e(function(r,e,t){var _=I(t)/255,n=I(e)/255,o=I(r)/255,u=a(w,a(w,o,n),_),c=a(y,a(y,o,n),_),i=u-c,l=(u+c)/2,s=v.eq(l,0)?0:i/(1-A(2*l-1))
return{ctor:"_Tuple3",_0:S(60)*(v.eq(u,o)?a(Pu,(n-_)/i,6):v.eq(u,n)?(_-o)/i+2:(o-n)/i+4),_1:s,_2:l}}),e(function(r,e,t){var _=r/S(60),n=(1-A(2*t-1))*e,o=n*(1-A(a(Pu,_,2)-1)),u=v.cmp(_,0)<0?{ctor:"_Tuple3",_0:0,_1:0,_2:0}:v.cmp(_,1)<0?{ctor:"_Tuple3",_0:n,_1:o,_2:0}:v.cmp(_,2)<0?{ctor:"_Tuple3",_0:o,_1:n,_2:0}:v.cmp(_,3)<0?{ctor:"_Tuple3",_0:0,_1:n,_2:o}:v.cmp(_,4)<0?{ctor:"_Tuple3",_0:0,_1:o,_2:n}:v.cmp(_,5)<0?{ctor:"_Tuple3",_0:o,_1:0,_2:n}:v.cmp(_,6)<0?{ctor:"_Tuple3",_0:n,_1:0,_2:o}:{ctor:"_Tuple3",_0:0,_1:0,_2:0},c=u._0,i=u._1,l=u._2,s=t-n/2
return{ctor:"_Tuple3",_0:c+s,_1:i+s,_2:l+s}})),Ou=function(r){var e=r
if("RGBA"===e.ctor)return{red:e._0,green:e._1,blue:e._2,alpha:e._3}
var t=i(Mu,e._0,e._1,e._2),_=t._0,n=t._1,o=t._2
return{red:J(255*_),green:J(255*n),blue:J(255*o),alpha:e._3}},Bu=t(function(r,e,t,_){return{ctor:"HSLA",_0:r,_1:e,_2:t,_3:_}}),ju=t(function(r,e,t,_){return l(Bu,r-L(I(b(r/(2*E)))),e,t,_)}),Du=(e(function(r,e,t){return l(ju,r,e,t,1)}),t(function(r,e,t,_){return{ctor:"RGBA",_0:r,_1:e,_2:t,_3:_}})),Ru=(e(function(r,e,t){return l(Du,r,e,t,1)}),l(Du,239,41,41,1),l(Du,204,0,0,1),l(Du,164,0,0,1)),Zu=(l(Du,252,175,62,1),l(Du,245,121,0,1),l(Du,206,92,0,1)),qu=(l(Du,255,233,79,1),l(Du,237,212,0,1),l(Du,196,160,0,1),l(Du,138,226,52,1),l(Du,115,210,22,1),l(Du,78,154,6,1)),Vu=(l(Du,114,159,207,1),l(Du,52,101,164,1),l(Du,32,74,135,1)),Uu=(l(Du,173,127,168,1),l(Du,117,80,123,1),l(Du,92,53,102,1),l(Du,233,185,110,1),l(Du,193,125,17,1),l(Du,143,89,2,1),l(Du,0,0,0,1)),zu=l(Du,255,255,255,1),Fu=(l(Du,238,238,236,1),l(Du,211,215,207,1),l(Du,186,189,182,1)),$u=(l(Du,238,238,236,1),l(Du,211,215,207,1),l(Du,186,189,182,1),l(Du,136,138,133,1)),Gu=(l(Du,85,87,83,1),l(Du,46,52,54,1)),Wu=(_(function(r,e,t,_,n){return{ctor:"Radial",_0:r,_1:e,_2:t,_3:_,_4:n}}),e(function(r,e,t){return{ctor:"Linear",_0:r,_1:e,_2:t}}),function(){function t(r,e){if(r<0||r>=B(e))throw new Error("Index "+r+" is out of range. Check the length of your array first or use getMaybe or getWithDefault.")
return _(r,e)}function _(r,e){for(var t=e.height;t>0;t--){for(var _=r>>5*t;e.lengths[_]<=r;)_++
_>0&&(r-=e.lengths[_-1]),e=e.table[_]}return e.table[r]}function n(r,e,t){return r<0||B(t)<=r?t:o(r,e,t)}function o(r,e,t){if(t=M(t),0===t.height)t.table[r]=e
else{var _=j(r,t)
_>0&&(r-=t.lengths[_-1]),t.table[_]=o(r,e,t.table[_])}return t}function u(r,e){return r<=0?G:c(e,Math.floor(Math.log(r)/Math.log(F)),0,r)}function c(r,e,t,_){if(0===e){for(var n=new Array((_-t)%(F+1)),o=0;o<n.length;o++)n[o]=r(t+o)
return{ctor:"_Array",height:0,table:n}}for(var u=Math.pow(F,e),n=new Array(Math.ceil((_-t)/u)),a=new Array(n.length),o=0;o<n.length;o++)n[o]=c(r,e-1,t+o*u,Math.min(t+(o+1)*u,_)),a[o]=B(n[o])+(o>0?a[o-1]:0)
return{ctor:"_Array",height:e,table:n,lengths:a}}function i(r){if("[]"===r.ctor)return G
for(var e=new Array(F),t=[],_=0;"[]"!==r.ctor;)if(e[_]=r._0,r=r._1,++_===F){var n={ctor:"_Array",height:0,table:e}
l(n,t),e=new Array(F),_=0}if(_>0){var n={ctor:"_Array",height:0,table:e.splice(0,_)}
l(n,t)}for(var o=0;o<t.length-1;o++)t[o].table.length>0&&l(t[o],t)
var u=t[t.length-1]
return u.height>0&&1===u.table.length?u.table[0]:u}function l(r,e){var t=r.height
if(e.length===t){var _={ctor:"_Array",height:t+1,table:[],lengths:[]}
e.push(_)}e[t].table.push(r)
var n=B(r)
e[t].lengths.length>0&&(n+=e[t].lengths[e[t].lengths.length-1]),e[t].lengths.push(n),e[t].table.length===F&&(l(e[t],e),e[t]={ctor:"_Array",height:t+1,table:[],lengths:[]})}function s(r,e){var t=p(r,e)
return null!==t?t:Z(e,D(r,e.height))}function p(r,e){if(0===e.height){if(e.table.length<F){var t={ctor:"_Array",height:0,table:e.table.slice()}
return t.table.push(r),t}return null}var _=p(r,x(e))
if(null!==_){var t=M(e)
return t.table[t.table.length-1]=_,t.lengths[t.lengths.length-1]++,t}if(e.table.length<F){var n=D(r,e.height-1),t=M(e)
return t.table.push(n),t.lengths.push(t.lengths[t.lengths.length-1]+B(n)),t}return null}function f(r){return d(O.Nil,r)}function d(r,e){for(var t=e.table.length-1;t>=0;t--)r=0===e.height?O.Cons(e.table[t],r):d(r,e.table[t])
return r}function v(r,e){var t={ctor:"_Array",height:e.height,table:new Array(e.table.length)}
e.height>0&&(t.lengths=e.lengths)
for(var _=0;_<e.table.length;_++)t.table[_]=0===e.height?r(e.table[_]):v(r,e.table[_])
return t}function m(r,e){return g(r,e,0)}function g(r,e,t){var _={ctor:"_Array",height:e.height,table:new Array(e.table.length)}
e.height>0&&(_.lengths=e.lengths)
for(var n=0;n<e.table.length;n++)_.table[n]=0===e.height?a(r,t+n,e.table[n]):g(r,e.table[n],0==n?t:t+e.lengths[n-1])
return _}function h(r,e,t){if(0===t.height)for(var _=0;_<t.table.length;_++)e=a(r,t.table[_],e)
else for(var _=0;_<t.table.length;_++)e=h(r,e,t.table[_])
return e}function T(r,e,t){if(0===t.height)for(var _=t.table.length;_--;)e=a(r,t.table[_],e)
else for(var _=t.table.length;_--;)e=T(r,e,t.table[_])
return e}function N(r,e,t){return r<0&&(r+=B(t)),e<0&&(e+=B(t)),b(r,I(e,t))}function I(r,e){if(r===B(e))return e
if(0===e.height){var t={ctor:"_Array",height:0}
return t.table=e.table.slice(0,r),t}var _=j(r,e),n=I(r-(_>0?e.lengths[_-1]:0),e.table[_])
if(0===_)return n
var t={ctor:"_Array",height:e.height,table:e.table.slice(0,_),lengths:e.lengths.slice(0,_)}
return n.table.length>0&&(t.table[_]=n,t.lengths[_]=B(n)+(_>0?t.lengths[_-1]:0)),t}function b(r,e){if(0===r)return e
if(0===e.height){var t={ctor:"_Array",height:0}
return t.table=e.table.slice(r,e.table.length+1),t}var _=j(r,e),n=b(r-(_>0?e.lengths[_-1]:0),e.table[_])
if(_===e.table.length-1)return n
var t={ctor:"_Array",height:e.height,table:e.table.slice(_,e.table.length+1),lengths:new Array(e.table.length-_)}
t.table[0]=n
for(var o=0,u=0;u<t.table.length;u++)o+=B(t.table[u]),t.lengths[u]=o
return t}function J(r,e){if(0===r.table.length)return e
if(0===e.table.length)return r
var t=w(r,e)
if(t[0].table.length+t[1].table.length<=F){if(0===t[0].table.length)return t[1]
if(0===t[1].table.length)return t[0]
if(t[0].table=t[0].table.concat(t[1].table),t[0].height>0){for(var _=B(t[0]),n=0;n<t[1].lengths.length;n++)t[1].lengths[n]+=_
t[0].lengths=t[0].lengths.concat(t[1].lengths)}return t[0]}if(t[0].height>0){var o=E(r,e)
o>$&&(t=C(t[0],t[1],o))}return Z(t[0],t[1])}function w(r,e){if(0===r.height&&0===e.height)return[r,e]
if(1!==r.height||1!==e.height)if(r.height===e.height){r=M(r),e=M(e)
var t=w(x(r),P(e))
y(r,t[1]),k(e,t[0])}else if(r.height>e.height){r=M(r)
var t=w(x(r),e)
y(r,t[0]),e=R(t[1],t[1].height+1)}else{e=M(e)
var t=w(r,P(e)),_=0===t[0].table.length?0:1,n=0===_?1:0
k(e,t[_]),r=R(t[n],t[n].height+1)}if(0===r.table.length||0===e.table.length)return[r,e]
var o=E(r,e)
return o<=$?[r,e]:C(r,e,o)}function y(r,e){var t=r.table.length-1
r.table[t]=e,r.lengths[t]=B(e),r.lengths[t]+=t>0?r.lengths[t-1]:0}function k(r,e){if(e.table.length>0){r.table[0]=e,r.lengths[0]=B(e)
for(var t=B(r.table[0]),_=1;_<r.lengths.length;_++)t+=B(r.table[_]),r.lengths[_]=t}else{r.table.shift()
for(var _=1;_<r.lengths.length;_++)r.lengths[_]=r.lengths[_]-r.lengths[0]
r.lengths.shift()}}function E(r,e){for(var t=0,_=0;_<r.table.length;_++)t+=r.table[_].table.length
for(var _=0;_<e.table.length;_++)t+=e.table[_].table.length
return r.table.length+e.table.length-(Math.floor((t-1)/F)+1)}function A(r,e,t){return t<r.length?r[t]:e[t-r.length]}function X(r,e,t,_){t<r.length?r[t]=_:e[t-r.length]=_}function L(r,e,t,_){X(r.table,e.table,t,_)
var n=0===t||t===r.lengths.length?0:A(r.lengths,r.lengths,t-1)
X(r.lengths,e.lengths,t,n+B(_))}function S(r,e){e<0&&(e=0)
var t={ctor:"_Array",height:r,table:new Array(e)}
return r>0&&(t.lengths=new Array(e)),t}function C(r,e,t){for(var _=S(r.height,Math.min(F,r.table.length+e.table.length-t)),n=S(r.height,_.table.length-(r.table.length+e.table.length-t)),o=0;A(r.table,e.table,o).table.length%F==0;)X(_.table,n.table,o,A(r.table,e.table,o)),X(_.lengths,n.lengths,o,A(r.lengths,e.lengths,o)),o++
for(var u=o,c=new S(r.height-1,0),a=0;o-u-(c.table.length>0?1:0)<t;){var i=A(r.table,e.table,o),l=Math.min(F-c.table.length,i.table.length)
if(c.table=c.table.concat(i.table.slice(a,l)),c.height>0)for(var s=c.lengths.length,p=s;p<s+l-a;p++)c.lengths[p]=B(c.table[p]),c.lengths[p]+=p>0?c.lengths[p-1]:0
a+=l,i.table.length<=l&&(o++,a=0),c.table.length===F&&(L(_,n,u,c),c=S(r.height-1,0),u++)}for(c.table.length>0&&(L(_,n,u,c),u++);o<r.table.length+e.table.length;)L(_,n,u,A(r.table,e.table,o)),o++,u++
return[_,n]}function x(r){return r.table[r.table.length-1]}function P(r){return r.table[0]}function M(r){var e={ctor:"_Array",height:r.height,table:r.table.slice()}
return r.height>0&&(e.lengths=r.lengths.slice()),e}function B(r){return 0===r.height?r.table.length:r.lengths[r.lengths.length-1]}function j(r,e){for(var t=r>>5*e.height;e.lengths[t]<=r;)t++
return t}function D(r,e){return 0===e?{ctor:"_Array",height:0,table:[r]}:{ctor:"_Array",height:e,table:[D(r,e-1)],lengths:[1]}}function R(r,e){return e===r.height?r:{ctor:"_Array",height:e,table:[R(r,e-1)],lengths:[B(r)]}}function Z(r,e){return{ctor:"_Array",height:r.height+1,table:[r,e],lengths:[B(r),B(r)+B(e)]}}function q(r){var e=new Array(B(r))
return V(e,0,r),e}function V(r,e,t){for(var _=0;_<t.table.length;_++)if(0===t.height)r[e+_]=t.table[_]
else{var n=0===_?0:t.lengths[_-1]
V(r,e+n,t.table[_])}}function U(r){return 0===r.length?G:z(r,Math.floor(Math.log(r.length)/Math.log(F)),0,r.length)}function z(r,e,t,_){if(0===e)return{ctor:"_Array",height:0,table:r.slice(t,_)}
for(var n=Math.pow(F,e),o=new Array(Math.ceil((_-t)/n)),u=new Array(o.length),c=0;c<o.length;c++)o[c]=z(r,e-1,t+c*n,Math.min(t+(c+1)*n,_)),u[c]=B(o[c])+(c>0?u[c-1]:0)
return{ctor:"_Array",height:e,table:o,lengths:u}}var F=32,$=2,G={ctor:"_Array",height:0,table:[]}
return{empty:G,fromList:i,toList:f,initialize:r(u),append:r(J),push:r(s),slice:e(N),get:r(t),set:e(n),map:r(v),indexedMap:r(m),foldl:e(h),foldr:e(T),length:B,toJSArray:q,fromJSArray:U}}()),Qu=(Wu.append,Wu.length,Wu.slice,Wu.set,r(function(r,e){return v.cmp(0,r)<1&&v.cmp(r,Wu.length(e))<0?M(a(Wu.get,r,e)):P}),Wu.push,Wu.empty,r(function(e,t){var _=r(function(r,t){return e(r)?a(Wu.push,r,t):t})
return i(Wu.foldl,_,Wu.empty,t)}),Wu.foldr,Wu.foldl,Wu.indexedMap,Wu.map,Wu.toList),Ku=(Wu.fromList,Wu.initialize),Hu=(r(function(r,e){return a(Ku,r,g(e))}),function(){function a(r){return{ctor:"<decoder>",tag:"succeed",msg:r}}function i(r){return{ctor:"<decoder>",tag:"fail",msg:r}}function l(r){return{ctor:"<decoder>",tag:r}}function s(r,e){return{ctor:"<decoder>",tag:r,decoder:e}}function p(r){return{ctor:"<decoder>",tag:"null",value:r}}function f(r,e){return{ctor:"<decoder>",tag:"field",field:r,decoder:e}}function d(r,e){return{ctor:"<decoder>",tag:"index",index:r,decoder:e}}function m(r){return{ctor:"<decoder>",tag:"key-value",decoder:r}}function g(r,e){return{ctor:"<decoder>",tag:"map-many",func:r,decoders:e}}function h(r,e){return{ctor:"<decoder>",tag:"andThen",decoder:e,callback:r}}function T(r){return{ctor:"<decoder>",tag:"oneOf",decoders:r}}function N(r,e){return g(r,[e])}function I(r,e,t){return g(r,[e,t])}function b(r,e,t,_){return g(r,[e,t,_])}function J(r,e,t,_,n){return g(r,[e,t,_,n])}function w(r,e,t,_,n,o){return g(r,[e,t,_,n,o])}function y(r,e,t,_,n,o,u){return g(r,[e,t,_,n,o,u])}function k(r,e,t,_,n,o,u,c){return g(r,[e,t,_,n,o,u,c])}function E(r,e,t,_,n,o,u,c,a){return g(r,[e,t,_,n,o,u,c,a])}function A(r){return{tag:"ok",value:r}}function X(r,e){return{tag:"primitive",type:r,value:e}}function L(r,e){return{tag:"index",index:r,rest:e}}function S(r,e){return{tag:"field",field:r,rest:e}}function L(r,e){return{tag:"index",index:r,rest:e}}function C(r){return{tag:"oneOf",problems:r}}function x(r){return{tag:"fail",msg:r}}function B(r){for(var e="_";r;)switch(r.tag){case"primitive":return"Expecting "+r.type+("_"===e?"":" at "+e)+" but instead got: "+j(r.value)
case"index":e+="["+r.index+"]",r=r.rest
break
case"field":e+="."+r.field,r=r.rest
break
case"oneOf":for(var t=r.problems,_=0;_<t.length;_++)t[_]=B(t[_])
return"I ran into the following problems"+("_"===e?"":" at "+e)+":\n\n"+t.join("\n")
case"fail":return"I ran into a `fail` decoder"+("_"===e?"":" at "+e)+": "+r.msg}}function j(r){return void 0===r?"undefined":JSON.stringify(r)}function D(r,e){var t
try{t=JSON.parse(e)}catch(r){return or("Given an invalid JSON: "+r.message)}return R(r,t)}function R(r,e){var t=Z(r,e)
return"ok"===t.tag?ur(t.value):or(B(t))}function Z(r,e){switch(r.tag){case"bool":return"boolean"==typeof e?A(e):X("a Bool",e)
case"int":return"number"!=typeof e?X("an Int",e):-2147483647<e&&e<2147483647&&(0|e)===e?A(e):!isFinite(e)||e%1?X("an Int",e):A(e)
case"float":return"number"==typeof e?A(e):X("a Float",e)
case"string":return"string"==typeof e?A(e):e instanceof String?A(e+""):X("a String",e)
case"null":return null===e?A(r.value):X("null",e)
case"value":return A(e)
case"list":if(!(e instanceof Array))return X("a List",e)
for(var t=O.Nil,_=e.length;_--;){var n=Z(r.decoder,e[_])
if("ok"!==n.tag)return L(_,n)
t=O.Cons(n.value,t)}return A(t)
case"array":if(!(e instanceof Array))return X("an Array",e)
for(var o=e.length,u=new Array(o),_=o;_--;){var n=Z(r.decoder,e[_])
if("ok"!==n.tag)return L(_,n)
u[_]=n.value}return A(Wu.fromJSArray(u))
case"maybe":var n=Z(r.decoder,e)
return A("ok"===n.tag?M(n.value):P)
case"field":var c=r.field
if("object"!=typeof e||null===e||!(c in e))return X("an object with a field named `"+c+"`",e)
var n=Z(r.decoder,e[c])
return"ok"===n.tag?n:S(c,n)
case"index":var a=r.index
if(!(e instanceof Array))return X("an array",e)
if(a>=e.length)return X("a longer array. Need index "+a+" but there are only "+e.length+" entries",e)
var n=Z(r.decoder,e[a])
return"ok"===n.tag?n:L(a,n)
case"key-value":if("object"!=typeof e||null===e||e instanceof Array)return X("an object",e)
var i=O.Nil
for(var l in e){var n=Z(r.decoder,e[l])
if("ok"!==n.tag)return S(l,n)
var s=v.Tuple2(l,n.value)
i=O.Cons(s,i)}return A(i)
case"map-many":for(var p=r.func,f=r.decoders,_=0;_<f.length;_++){var n=Z(f[_],e)
if("ok"!==n.tag)return n
p=p(n.value)}return A(p)
case"andThen":var n=Z(r.decoder,e)
return"ok"!==n.tag?n:Z(r.callback(n.value),e)
case"oneOf":for(var d=[],m=r.decoders;"[]"!==m.ctor;){var n=Z(m._0,e)
if("ok"===n.tag)return n
d.push(n),m=m._1}return C(d)
case"fail":return x(r.msg)
case"succeed":return A(r.msg)}}function q(r,e){if(r===e)return!0
if(r.tag!==e.tag)return!1
switch(r.tag){case"succeed":case"fail":return r.msg===e.msg
case"bool":case"int":case"float":case"string":case"value":return!0
case"null":return r.value===e.value
case"list":case"array":case"maybe":case"key-value":return q(r.decoder,e.decoder)
case"field":return r.field===e.field&&q(r.decoder,e.decoder)
case"index":return r.index===e.index&&q(r.decoder,e.decoder)
case"map-many":return r.func===e.func&&V(r.decoders,e.decoders)
case"andThen":return r.callback===e.callback&&q(r.decoder,e.decoder)
case"oneOf":return V(r.decoders,e.decoders)}}function V(r,e){var t=r.length
if(t!==e.length)return!1
for(var _=0;_<t;_++)if(!q(r[_],e[_]))return!1
return!0}function U(r,e){return JSON.stringify(e,null,r)}function z(r){return r}function F(r){for(var e={};"[]"!==r.ctor;){var t=r._0
e[t._0]=t._1,r=r._1}return e}return{encode:r(U),runOnString:r(D),run:r(R),decodeNull:p,decodePrimitive:l,decodeContainer:r(s),decodeField:r(f),decodeIndex:r(d),map1:r(N),map2:e(I),map3:t(b),map4:_(J),map5:n(w),map6:o(y),map7:u(k),map8:c(E),decodeKeyValuePairs:m,andThen:r(h),fail:i,succeed:a,oneOf:T,identity:z,encodeNull:null,encodeArray:Wu.toJSArray,encodeList:O.toArray,encodeObject:F,equality:q}}()),Yu=(Hu.encodeList,Hu.encodeArray,Hu.encodeObject,Hu.encodeNull,Hu.identity),rc=(Hu.identity,Hu.identity,Hu.identity),ec=(Hu.encode,Hu.decodeNull,Hu.decodePrimitive("value"),Hu.andThen,Hu.fail,Hu.succeed),tc=Hu.run,_c=(Hu.runOnString,Hu.map8,Hu.map7,Hu.map6,Hu.map5,Hu.map4,Hu.map3,Hu.map2,Hu.map1),nc=(Hu.oneOf,Hu.decodeIndex,Hu.decodeField),oc=r(function(r,e){return i(R,nc,e,r)}),uc=(Hu.decodeKeyValuePairs,Hu.decodePrimitive("float"),Hu.decodePrimitive("int")),cc=Hu.decodePrimitive("bool"),ac=Hu.decodePrimitive("string"),ic=function(){function _(r){return{type:"text",text:r}}function n(e){return r(function(r,t){return o(e,r,t)})}function o(r,e,t){for(var _=m(e),n=_.namespace,o=_.facts,u=[],c=0;"[]"!==t.ctor;){var a=t._0
c+=a.descendantsCount||0,u.push(a),t=t._1}return c+=u.length,{type:"node",tag:r,facts:o,children:u,namespace:n,descendantsCount:c}}function u(r,e,t){for(var _=m(e),n=_.namespace,o=_.facts,u=[],c=0;"[]"!==t.ctor;){var a=t._0
c+=a._1.descendantsCount||0,u.push(a),t=t._1}return c+=u.length,{type:"keyed-node",tag:r,facts:o,children:u,namespace:n,descendantsCount:c}}function c(r,e,t){return{type:"custom",facts:m(r).facts,model:e,impl:t}}function l(r,e){return{type:"tagger",tagger:r,node:e,descendantsCount:1+(e.descendantsCount||0)}}function s(r,e,t){return{type:"thunk",func:r,args:e,thunk:t,node:void 0}}function p(r,e){return s(r,[e],function(){return r(e)})}function f(r,e,t){return s(r,[e,t],function(){return a(r,e,t)})}function d(r,e,t,_){return s(r,[e,t,_],function(){return i(r,e,t,_)})}function m(r){for(var e,t={};"[]"!==r.ctor;){var _=r._0,n=_.key
if(n===fr||n===dr||n===pr){var o=t[n]||{}
o[_.realKey]=_.value,t[n]=o}else if(n===sr){for(var u=t[n]||{},c=_.value;"[]"!==c.ctor;){var a=c._0
u[a._0]=a._1,c=c._1}t[n]=u}else if("namespace"===n)e=_.value
else if("className"===n){var i=t[n]
t[n]=void 0===i?_.value:i+" "+_.value}else t[n]=_.value
r=r._1}return{facts:t,namespace:e}}function g(r){return{key:sr,value:r}}function h(r,e){return{key:r,value:e}}function T(r,e){return{key:fr,realKey:r,value:e}}function N(r,e,t){return{key:dr,realKey:e,value:{value:t,namespace:r}}}function I(r,e,t){return{key:pr,realKey:r,value:{options:e,decoder:t}}}function b(r,e){return(r.options===e.options||r.options.stopPropagation===e.options.stopPropagation&&r.options.preventDefault===e.options.preventDefault)&&Hu.equality(r.decoder,e.decoder)}function J(r,e){return e.key!==pr?e:I(e.realKey,e.value.options,a(_c,r,e.value.decoder))}function w(r,e){switch(r.type){case"thunk":return r.node||(r.node=r.thunk()),w(r.node,e)
case"tagger":for(var t=r.node,_=r.tagger;"tagger"===t.type;)"object"!=typeof _?_=[_,t.tagger]:_.push(t.tagger),t=t.node
var n={tagger:_,parent:e},o=w(t,n)
return o.elm_event_node_ref=n,o
case"text":return vr.createTextNode(r.text)
case"node":var o=r.namespace?vr.createElementNS(r.namespace,r.tag):vr.createElement(r.tag)
y(o,e,r.facts)
for(var u=r.children,c=0;c<u.length;c++)o.appendChild(w(u[c],e))
return o
case"keyed-node":var o=r.namespace?vr.createElementNS(r.namespace,r.tag):vr.createElement(r.tag)
y(o,e,r.facts)
for(var u=r.children,c=0;c<u.length;c++)o.appendChild(w(u[c]._1,e))
return o
case"custom":var o=r.impl.render(r.model)
return y(o,e,r.facts),o}}function y(r,e,t){for(var _ in t){var n=t[_]
switch(_){case sr:k(r,n)
break
case pr:E(r,e,n)
break
case fr:X(r,n)
break
case dr:L(r,n)
break
case"value":r[_]!==n&&(r[_]=n)
break
default:r[_]=n}}}function k(r,e){var t=r.style
for(var _ in e)t[_]=e[_]}function E(r,e,t){var _=r.elm_handlers||{}
for(var n in t){var o=_[n],u=t[n]
if(void 0===u)r.removeEventListener(n,o),_[n]=void 0
else if(void 0===o){var o=A(e,u)
r.addEventListener(n,o),_[n]=o}else o.info=u}r.elm_handlers=_}function A(r,e){function t(e){var _=t.info,n=a(Hu.run,_.decoder,e)
if("Ok"===n.ctor){var o=_.options
o.stopPropagation&&e.stopPropagation(),o.preventDefault&&e.preventDefault()
for(var u=n._0,c=r;c;){var i=c.tagger
if("function"==typeof i)u=i(u)
else for(var l=i.length;l--;)u=i[l](u)
c=c.parent}}}return t.info=e,t}function X(r,e){for(var t in e){var _=e[t]
void 0===_?r.removeAttribute(t):r.setAttribute(t,_)}}function L(r,e){for(var t in e){var _=e[t],n=_.namespace,o=_.value
void 0===o?r.removeAttributeNS(n,t):r.setAttributeNS(n,t,o)}}function S(r,e){var t=[]
return x(r,e,t,0),t}function C(r,e,t){return{index:e,type:r,data:t,domNode:void 0,eventNode:void 0}}function x(r,e,t,_){if(r!==e){var n=r.type,o=e.type
if(n!==o)return void t.push(C("p-redraw",_,e))
switch(o){case"thunk":for(var u=r.args,c=e.args,a=u.length,i=r.func===e.func&&a===c.length;i&&a--;)i=u[a]===c[a]
if(i)return void(e.node=r.node)
e.node=e.thunk()
var l=[]
return x(r.node,e.node,l,0),void(l.length>0&&t.push(C("p-thunk",_,l)))
case"tagger":for(var s=r.tagger,p=e.tagger,f=!1,d=r.node;"tagger"===d.type;)f=!0,"object"!=typeof s?s=[s,d.tagger]:s.push(d.tagger),d=d.node
for(var v=e.node;"tagger"===v.type;)f=!0,"object"!=typeof p?p=[p,v.tagger]:p.push(v.tagger),v=v.node
return f&&s.length!==p.length?void t.push(C("p-redraw",_,e)):((f?P(s,p):s===p)||t.push(C("p-tagger",_,p)),void x(d,v,t,_+1))
case"text":if(r.text!==e.text)return void t.push(C("p-text",_,e.text))
return
case"node":if(r.tag!==e.tag||r.namespace!==e.namespace)return void t.push(C("p-redraw",_,e))
var m=M(r.facts,e.facts)
return void 0!==m&&t.push(C("p-facts",_,m)),void O(r,e,t,_)
case"keyed-node":if(r.tag!==e.tag||r.namespace!==e.namespace)return void t.push(C("p-redraw",_,e))
var m=M(r.facts,e.facts)
return void 0!==m&&t.push(C("p-facts",_,m)),void B(r,e,t,_)
case"custom":if(r.impl!==e.impl)return void t.push(C("p-redraw",_,e))
var m=M(r.facts,e.facts)
void 0!==m&&t.push(C("p-facts",_,m))
var g=e.impl.diff(r,e)
if(g)return void t.push(C("p-custom",_,g))
return}}}function P(r,e){for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1
return!0}function M(r,e,t){var _
for(var n in r)if(n!==sr&&n!==pr&&n!==fr&&n!==dr)if(n in e){var o=r[n],u=e[n]
o===u&&"value"!==n||t===pr&&b(o,u)||(_=_||{},_[n]=u)}else _=_||{},_[n]=void 0===t?"string"==typeof r[n]?"":null:t===sr?"":t===pr||t===fr?void 0:{namespace:r[n].namespace,value:void 0}
else{var c=M(r[n],e[n]||{},n)
c&&(_=_||{},_[n]=c)}for(var a in e)a in r||(_=_||{},_[a]=e[a])
return _}function O(r,e,t,_){var n=r.children,o=e.children,u=n.length,c=o.length
u>c?t.push(C("p-remove-last",_,u-c)):u<c&&t.push(C("p-append",_,o.slice(u)))
for(var a=_,i=u<c?u:c,l=0;l<i;l++){a++
var s=n[l]
x(s,o[l],t,a),a+=s.descendantsCount||0}}function B(r,e,t,_){for(var n=[],o={},u=[],c=r.children,a=e.children,i=c.length,l=a.length,s=0,p=0,f=_;s<i&&p<l;){var d=c[s],v=a[p],m=d._0,g=v._0,h=d._1,T=v._1
if(m!==g){var N=s+1<i,I=p+1<l
if(N)var b=c[s+1],J=b._0,w=b._1,y=g===J
if(I)var k=a[p+1],E=k._0,A=k._1,X=m===E
if(N&&I&&X&&y)f++,x(h,A,n,f),j(o,n,m,T,p,u),f+=h.descendantsCount||0,f++,D(o,n,m,w,f),f+=w.descendantsCount||0,s+=2,p+=2
else if(I&&X)f++,j(o,n,g,T,p,u),x(h,A,n,f),f+=h.descendantsCount||0,s+=1,p+=2
else if(N&&y)f++,D(o,n,m,h,f),f+=h.descendantsCount||0,f++,x(w,T,n,f),f+=w.descendantsCount||0,s+=2,p+=1
else{if(!N||!I||J!==E)break
f++,D(o,n,m,h,f),j(o,n,g,T,p,u),f+=h.descendantsCount||0,f++,x(w,A,n,f),f+=w.descendantsCount||0,s+=2,p+=2}}else f++,x(h,T,n,f),f+=h.descendantsCount||0,s++,p++}for(;s<i;){f++
var d=c[s],h=d._1
D(o,n,d._0,h,f),f+=h.descendantsCount||0,s++}for(var L;p<l;){L=L||[]
var v=a[p]
j(o,n,v._0,v._1,void 0,L),p++}(n.length>0||u.length>0||void 0!==L)&&t.push(C("p-reorder",_,{patches:n,inserts:u,endInserts:L}))}function j(r,e,t,_,n,o){var u=r[t]
if(void 0===u)return u={tag:"insert",vnode:_,index:n,data:void 0},o.push({index:n,entry:u}),void(r[t]=u)
if("remove"===u.tag){o.push({index:n,entry:u}),u.tag="move"
var c=[]
return x(u.vnode,_,c,u.index),u.index=n,void(u.data.data={patches:c,entry:u})}j(r,e,t+mr,_,n,o)}function D(r,e,t,_,n){var o=r[t]
if(void 0===o){var u=C("p-remove",n,void 0)
return e.push(u),void(r[t]={tag:"remove",vnode:_,index:n,data:u})}if("insert"===o.tag){o.tag="move"
var c=[]
x(_,o.vnode,c,n)
var u=C("p-remove",n,{patches:c,entry:o})
return void e.push(u)}D(r,e,t+mr,_,n)}function R(r,e,t,_){Z(r,e,t,0,0,e.descendantsCount,_)}function Z(r,e,t,_,n,o,u){for(var c=t[_],a=c.index;a===n;){var i=c.type
if("p-thunk"===i)R(r,e.node,c.data,u)
else if("p-reorder"===i){c.domNode=r,c.eventNode=u
var l=c.data.patches
l.length>0&&Z(r,e,l,0,n,o,u)}else if("p-remove"===i){c.domNode=r,c.eventNode=u
var s=c.data
if(void 0!==s){s.entry.data=r
var l=s.patches
l.length>0&&Z(r,e,l,0,n,o,u)}}else c.domNode=r,c.eventNode=u
if(_++,!(c=t[_])||(a=c.index)>o)return _}switch(e.type){case"tagger":for(var p=e.node;"tagger"===p.type;)p=p.node
return Z(r,p,t,_,n+1,o,r.elm_event_node_ref)
case"node":for(var f=e.children,d=r.childNodes,v=0;v<f.length;v++){n++
var m=f[v],g=n+(m.descendantsCount||0)
if(n<=a&&a<=g&&(_=Z(d[v],m,t,_,n,g,u),!(c=t[_])||(a=c.index)>o))return _
n=g}return _
case"keyed-node":for(var f=e.children,d=r.childNodes,v=0;v<f.length;v++){n++
var m=f[v]._1,g=n+(m.descendantsCount||0)
if(n<=a&&a<=g&&(_=Z(d[v],m,t,_,n,g,u),!(c=t[_])||(a=c.index)>o))return _
n=g}return _
case"text":case"thunk":throw new Error("should never traverse `text` or `thunk` nodes like this")}}function q(r,e,t,_){return 0===t.length?r:(R(r,e,t,_),V(r,t))}function V(r,e){for(var t=0;t<e.length;t++){var _=e[t],n=_.domNode,o=U(n,_)
n===r&&(r=o)}return r}function U(r,e){switch(e.type){case"p-redraw":return z(r,e.data,e.eventNode)
case"p-facts":return y(r,e.eventNode,e.data),r
case"p-text":return r.replaceData(0,r.length,e.data),r
case"p-thunk":return V(r,e.data)
case"p-tagger":return void 0!==r.elm_event_node_ref?r.elm_event_node_ref.tagger=e.data:r.elm_event_node_ref={tagger:e.data,parent:e.eventNode},r
case"p-remove-last":for(var t=e.data;t--;)r.removeChild(r.lastChild)
return r
case"p-append":for(var _=e.data,t=0;t<_.length;t++)r.appendChild(w(_[t],e.eventNode))
return r
case"p-remove":var n=e.data
if(void 0===n)return r.parentNode.removeChild(r),r
var o=n.entry
return void 0!==o.index&&r.parentNode.removeChild(r),o.data=V(r,n.patches),r
case"p-reorder":return F(r,e)
case"p-custom":var u=e.data
return u.applyPatch(r,u.data)
default:throw new Error("Ran into an unknown patch!")}}function z(r,e,t){var _=r.parentNode,n=w(e,t)
return void 0===n.elm_event_node_ref&&(n.elm_event_node_ref=r.elm_event_node_ref),_&&n!==r&&_.replaceChild(n,r),n}function F(r,e){var t=e.data,_=$(t.endInserts,e)
r=V(r,t.patches)
for(var n=t.inserts,o=0;o<n.length;o++){var u=n[o],c=u.entry,a="move"===c.tag?c.data:w(c.vnode,e.eventNode)
r.insertBefore(a,r.childNodes[u.index])}return void 0!==_&&r.appendChild(_),r}function $(r,e){if(void 0!==r){for(var t=vr.createDocumentFragment(),_=0;_<r.length;_++){var n=r[_],o=n.entry
t.appendChild("move"===o.tag?o.data:w(o.vnode,e.eventNode))}return t}}function G(e){return r(function(r,t){return function(_){return function(n,o,u){var c=e(_,o)
void 0===u?Y(t,n,o,c):tr(a(r,u,t),n,o,c)}}})}function W(e){var t=v.Tuple2(v.Tuple0,yr)
return a(gr,Jo,{init:t,view:function(){return e},update:r(function(){return t}),subscriptions:function(){return Ar}})()}function Q(r,e){return function(r,t,_){if(void 0===t)return r
H("The `"+e+"` module does not need flags.\nInitialize it with no arguments and you should be all set!",_)}}function K(r,e){return function(t,_,n){if(void 0===r){var o="Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+e+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags."
H(o,n)}var u=a(Hu.run,r,_)
if("Ok"===u.ctor)return t(u._0)
var o="Trying to initialize the `"+e+"` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+u._0
H(o,n)}}function H(r,e){throw e&&(e.innerHTML='<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">'+r+"</pre></div>"),new Error(r)}function Y(r,e,t,_){e.embed=function(e,t){for(;e.lastChild;)e.removeChild(e.lastChild)
return br.initialize(_(r.init,t,e),r.update,r.subscriptions,rr(e,r.view))},e.fullscreen=function(e){return br.initialize(_(r.init,e,document.body),r.update,r.subscriptions,rr(document.body,r.view))}}function rr(r,e){return function(t,_){var n={tagger:t,parent:void 0},o=e(_),u=w(o,n)
return r.appendChild(u),er(u,e,o,n)}}function er(r,e,t,_){function n(){switch(u){case"NO_REQUEST":throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.")
case"PENDING_REQUEST":Tr(n),u="EXTRA_REQUEST"
var t=e(o)
return r=q(r,c,S(c,t),_),void(c=t)
case"EXTRA_REQUEST":return void(u="NO_REQUEST")}}var o,u="NO_REQUEST",c=t
return function(r){"NO_REQUEST"===u&&Tr(n),u="PENDING_REQUEST",o=r}}function tr(r,e,t,_){e.fullscreen=function(e){var n={doc:void 0}
return br.initialize(_(r.init,e,document.body),r.update(_r(n)),r.subscriptions,nr(t,document.body,n,r.view,r.viewIn,r.viewOut))},e.embed=function(e,n){var o={doc:void 0}
return br.initialize(_(r.init,n,e),r.update(_r(o)),r.subscriptions,nr(t,e,o,r.view,r.viewIn,r.viewOut))}}function _r(r){return Jr.nativeBinding(function(e){var t=r.doc
if(t){var _=t.getElementsByClassName("debugger-sidebar-messages")[0]
_&&(_.scrollTop=_.scrollHeight)}e(Jr.succeed(v.Tuple0))})}function nr(r,e,t,_,n,o){return function(u,c){var a={tagger:u,parent:void 0},i={tagger:u,parent:void 0},l=_(c),s=w(l,a)
e.appendChild(s)
var p=er(s,_,l,a),f=n(c)._1,d=w(f,i)
e.appendChild(d)
var v=cr(a,d,n),m=er(d,v,f,i),g=or(c,o,i,e,r,t)
return function(r){p(r),m(r),g(r)}}}function or(r,e,t,_,n,o){var u,c
return function(r){if(r.isDebuggerOpen){if(!o.doc)return u=e(r),void(c=ur(n,o,u,t))
vr=o.doc
var _=e(r)
c=q(c,u,S(u,_),t),u=_,vr=document}}}function ur(r,e,t,_){function n(){e.doc=void 0,c.close()}var o=screen.width-900,u=screen.height-360,c=window.open("","","width=900,height=360,left="+o+",top="+u)
vr=c.document,e.doc=vr,vr.title="Debugger - "+r,vr.body.style.margin="0",vr.body.style.padding="0"
var a=w(t,_)
return vr.body.appendChild(a),vr.addEventListener("keydown",function(r){r.metaKey&&82===r.which&&window.location.reload(),38===r.which&&(_.tagger({ctor:"Up"}),r.preventDefault()),40===r.which&&(_.tagger({ctor:"Down"}),r.preventDefault())}),window.addEventListener("unload",n),c.addEventListener("unload",function(){e.doc=void 0,window.removeEventListener("unload",n),_.tagger({ctor:"Close"})}),vr=document,a}function cr(r,e,t){var _,n=lr(e),o="Normal",u=r.tagger,c=function(){}
return function(e){var a=t(e),i=a._0.ctor
return r.tagger="Normal"===i?u:c,o!==i&&(ar("removeEventListener",n,o),ar("addEventListener",n,i),"Normal"===o&&(_=document.body.style.overflow,document.body.style.overflow="hidden"),"Normal"===i&&(document.body.style.overflow=_),o=i),a._1}}function ar(r,e,t){switch(t){case"Normal":return
case"Pause":return ir(r,e,Nr)
case"Message":return ir(r,e,Ir)}}function ir(r,e,t){for(var _=0;_<t.length;_++)document.body[r](t[_],e,!0)}function lr(r){return function(e){if("keydown"!==e.type||!e.metaKey||82!==e.which){for(var t="scroll"===e.type||"wheel"===e.type,_=e.target;null!==_;){if("elm-overlay-message-details"===_.className&&t)return
if(_===r&&!t)return
_=_.parentNode}e.stopPropagation(),e.preventDefault()}}}var sr="STYLE",pr="EVENT",fr="ATTR",dr="ATTR_NS",vr="undefined"!=typeof document?document:{},mr="_elmW6BL",gr=G(Q),hr=G(K),Tr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)},Nr=["click","dblclick","mousemove","mouseup","mousedown","mouseenter","mouseleave","touchstart","touchend","touchcancel","touchmove","pointerdown","pointerup","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointercancel","dragstart","drag","dragend","dragenter","dragover","dragleave","drop","keyup","keydown","keypress","input","change","focus","blur"],Ir=Nr.concat("wheel","scroll")
return{node:n,text:_,custom:c,map:r(l),on:e(I),style:g,property:r(h),attribute:r(T),attributeNS:e(N),mapProperty:r(J),lazy:r(p),lazy2:e(f),lazy3:t(d),keyedNode:e(u),program:gr,programWithFlags:hr,staticProgram:W}}(),lc=function(r){return a(ic.program,Jo,r)},sc=(ic.keyedNode,ic.lazy3,ic.lazy2,ic.lazy,{stopPropagation:!1,preventDefault:!1}),pc=ic.on,fc=r(function(r,e){return i(pc,r,sc,e)}),dc=ic.style,vc=(ic.mapProperty,ic.attributeNS,ic.attribute,ic.property),mc=(ic.map,ic.text),gc=ic.node,hc=(r(function(r,e){return{stopPropagation:r,preventDefault:e}}),lc),Tc=mc,Nc=gc,Ic=(Nc("body"),Nc("section"),Nc("nav"),Nc("article"),Nc("aside"),Nc("h1"),Nc("h2"),Nc("h3"),Nc("h4"),Nc("h5"),Nc("h6"),Nc("header"),Nc("footer"),Nc("address"),Nc("main"),Nc("p"),Nc("hr"),Nc("pre"),Nc("blockquote"),Nc("ol"),Nc("ul"),Nc("li"),Nc("dl"),Nc("dt"),Nc("dd"),Nc("figure"),Nc("figcaption"),Nc("div")),bc=(Nc("a"),Nc("em"),Nc("strong"),Nc("small"),Nc("s"),Nc("cite"),Nc("q"),Nc("dfn"),Nc("abbr"),Nc("time"),Nc("code"),Nc("var"),Nc("samp"),Nc("kbd"),Nc("sub"),Nc("sup"),Nc("i"),Nc("b"),Nc("u"),Nc("mark"),Nc("ruby"),Nc("rt"),Nc("rp"),Nc("bdi"),Nc("bdo"),Nc("span"),Nc("br"),Nc("wbr"),Nc("ins"),Nc("del"),Nc("img"),Nc("iframe"),Nc("embed"),Nc("object"),Nc("param"),Nc("video"),Nc("audio"),Nc("source"),Nc("track"),Nc("canvas"),Nc("math"),Nc("table"),Nc("caption"),Nc("colgroup"),Nc("col"),Nc("tbody"),Nc("thead"),Nc("tfoot"),Nc("tr"),Nc("td"),Nc("th"),Nc("form"),Nc("fieldset"),Nc("legend"),Nc("label"),Nc("input"),Nc("button")),Jc=(Nc("select"),Nc("datalist"),Nc("optgroup"),Nc("option"),Nc("textarea")),wc=(Nc("keygen"),Nc("output"),Nc("progress"),Nc("meter"),Nc("details"),Nc("summary"),Nc("menuitem"),Nc("menu"),vc),yc=r(function(r,e){return a(wc,r,rc(e))}),kc=(r(function(r,e){return a(wc,r,Yu(e))}),dc),Ec=(a(nc,"keyCode",uc),a(oc,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"checked",_1:{ctor:"[]"}}},cc),a(oc,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"value",_1:{ctor:"[]"}}},ac)),Ac=sc,Xc=fc,Lc=(v.update(Ac,{preventDefault:!0}),function(r){return a(Xc,"click",ec(r))}),Sc=(r(function(r,e){return{stopPropagation:r,preventDefault:e}}),function(r){return N(r)}),Cc=r(function(r,e){var t=N(r),_=e
return"Nothing"===_.ctor?a(T["++"],t," "):a(T["++"],t,a(T["++"],":",a(T["++"],_._0," ")))}),xc=function(r){var e=r
if("Nothing"===e.ctor)return""
var t=function(r){return Pr(ne(r))}(e._0)
return 0===t?"":a(T["++"],"/",N(t))},Pc=function(r){var e=r
if("Nothing"===e.ctor)return""
var t=e._0
return 0===t?"":a(T["++"],"+",N(t))},Mc=function(r){var e=r
return"Nothing"===e.ctor?"":N(e._0)},Oc=r(function(r,e){var t=e,_=xc(t._2),n=Pc(t._1),o=Mc(t._0)
return a(vr," ",{ctor:"::",_0:_,_1:{ctor:"::",_0:Ie(t._3),_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"[]"}}}}})}),Bc=r(function(r,e){for(;;){var t=e,_=t._0,n=t._1,o=t._2,u=t._3,c=t._4,i=t._5,l=a(Cc,_,n),s=Sc(u)
if("Number"===o.ctor)return i?{ctor:"_Tuple6",_0:l,_1:Gu,_2:zu,_3:s,_4:Zu,_5:zu}:{ctor:"_Tuple6",_0:l,_1:Gu,_2:zu,_3:s,_4:$u,_5:Uu}
var p=c
if("Err"!==p.ctor){var f=a(Oc,r,p._0)
return i?{ctor:"_Tuple6",_0:l,_1:Gu,_2:zu,_3:f,_4:Zu,_5:zu}:{ctor:"_Tuple6",_0:l,_1:Gu,_2:zu,_3:f,_4:$u,_5:Uu}}var d=r,v={ctor:"_Tuple6",_0:_,_1:n,_2:so,_3:u,_4:c,_5:i}
r=d,e=v}}),jc=function(r){switch(r.ctor){case"L":return{ctor:"_Tuple3",_0:"<",_1:Ru,_2:zu}
case"E":return{ctor:"_Tuple3",_0:"=",_1:Fu,_2:zu}
default:return{ctor:"_Tuple3",_0:">",_1:qu,_2:zu}}},Dc=function(r){switch(r.ctor){case"Overflow":return{ctor:"_Tuple3",_0:"Overflow",_1:Ru,_2:zu}
case"Good":return{ctor:"_Tuple3",_0:"Good",_1:qu,_2:zu}
default:return{ctor:"_Tuple3",_0:"Fuck!",_1:Uu,_2:zu}}},Rc=function(r){return{ctor:"_Tuple3",_0:N(Rr(r)),_1:Gu,_2:zu}},Zc=function(r){return{ctor:"_Tuple3",_0:N(Rr(r)),_1:Vu,_2:zu}},qc=function(r){return{ctor:"_Tuple3",_0:N(Dr(r)),_1:$u,_2:Uu}},Vc=r(function(r,e){return{ctor:"_Tuple6",_0:e,_1:a(En,e,r.reverseSymbolTable),_2:a(po,e,r.meta),_3:Dr(a(ao,e,r.mem)),_4:a(cr,Te,fn(Zr(a(ao,e,r.mem)))),_5:v.eq(r.p,e)}}),Uc=function(r){return a(z,Vc(r),In(r.mem))},zc={ctor:"::",_0:kc({ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-size",_1:"3px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-style",_1:"solid"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-color",_1:"white"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}),_1:{ctor:"[]"}},Fc={ctor:"::",_0:kc({ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"15px"},_1:{ctor:"[]"}}}),_1:{ctor:"[]"}},$c=function(r){var e=Ou(r),t=N(function(r){return r.red}(e)),_=N(function(r){return r.green}(e)),n=N(function(r){return r.blue}(e)),o=N(function(r){return r.alpha}(e))
return a(T["++"],"rgba(",a(T["++"],a(vr,",",{ctor:"::",_0:t,_1:{ctor:"::",_0:_,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:o,_1:{ctor:"[]"}}}}}),")"))},Gc=r(function(r,e){return{ctor:"::",_0:kc({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:$c(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:$c(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-size",_1:"3px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-style",_1:"solid"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-color",_1:"white"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}}}}),_1:{ctor:"[]"}}}),Wc=function(r){var e=qc(r),t=e._0
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(t),_1:{ctor:"[]"}})},Qc=function(r){var e=qc(Yr)
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(r),_1:{ctor:"[]"}})},Kc=function(r){var e=Zc(re)
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(r),_1:{ctor:"[]"}})},Hc=function(r){var e=Zc(r),t=e._0
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(t),_1:{ctor:"[]"}})},Yc=function(r){var e=Rc(r),t=e._0
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(t),_1:{ctor:"[]"}})},ra=function(r){var e=Dc(r),t=e._0
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(t),_1:{ctor:"[]"}})},ea=function(r){var e=jc(r),t=e._0
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(t),_1:{ctor:"[]"}})},ta=function(r){return a(Ic,{ctor:"[]"},{ctor:"::",_0:Wc(r.a),_1:{ctor:"::",_0:Wc(r.x),_1:{ctor:"::",_0:Hc(r.i1),_1:{ctor:"::",_0:Hc(r.i2),_1:{ctor:"::",_0:Hc(r.i3),_1:{ctor:"::",_0:Hc(r.i4),_1:{ctor:"::",_0:Hc(r.i5),_1:{ctor:"::",_0:Hc(r.i6),_1:{ctor:"::",_0:Yc(r.j),_1:{ctor:"::",_0:ra(r.overflow),_1:{ctor:"::",_0:ea(r.comparison),_1:{ctor:"[]"}}}}}}}}}}}})},_a=a(Ic,{ctor:"[]"},{ctor:"::",_0:Qc("A"),_1:{ctor:"::",_0:Qc("X"),_1:{ctor:"::",_0:Kc("I1"),_1:{ctor:"::",_0:Kc("I2"),_1:{ctor:"::",_0:Kc("I3"),_1:{ctor:"::",_0:Kc("I4"),_1:{ctor:"::",_0:Kc("I5"),_1:{ctor:"::",_0:Kc("I6"),_1:{ctor:"::",_0:function(r){var e=Rc(re)
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(r),_1:{ctor:"[]"}})}("J"),_1:{ctor:"::",_0:function(r){var e=Dc(ie)
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(r),_1:{ctor:"[]"}})}("Overflow"),_1:{ctor:"::",_0:function(r){var e=jc(me)
return a(Ic,a(Gc,e._1,e._2),{ctor:"::",_0:Tc(r),_1:{ctor:"[]"}})}("Comparison"),_1:{ctor:"[]"}}}}}}}}}}}}),na=r(function(r,e){return{ctor:"::",_0:kc({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:$c(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:$c(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"10px 0px 0px 10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}),_1:{ctor:"[]"}}}),oa=r(function(r,e){return{ctor:"::",_0:kc({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:$c(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:$c(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"0px 10px 10px 0px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}),_1:{ctor:"[]"}}}),ua=r(function(r,e){var t=a(Bc,r,e),_=t._0,n=t._1,o=t._2,u=t._3,c=t._4,i=t._5
return a(Ic,zc,{ctor:"::",_0:a(Ic,a(na,n,o),{ctor:"::",_0:Tc(_),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(Ic,a(oa,c,i),{ctor:"::",_0:Tc(u),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}})}),ca=function(r){var e=Uc(r)
return a(Ic,{ctor:"[]"},a(z,ua(r),e))},aa=function(r){return a(Ic,{ctor:"[]"},{ctor:"::",_0:ta(r),_1:{ctor:"::",_0:ca(r),_1:{ctor:"[]"}}})},ia=function(r){var e=r
return"Nothing"===e.ctor?Tc(""):a(Ic,a(Gc,Ru,zu),{ctor:"::",_0:Tc(N(e._0)),_1:{ctor:"[]"}})},la=(_(function(r,e,t,_,n){return{sourceCode:r,compileError:e,mix:t,runtimeError:_,power:n}}),{ctor:"Off"}),sa={sourceCode:"",compileError:P,mix:{ctor:"[]"},runtimeError:P,power:la},pa={ctor:"On"},fa=r(function(r,e){var t=r
switch(t.ctor){case"Compile":var _=Iu(e.sourceCode)
return"Err"===_.ctor?v.update(e,{compileError:M(_._0),mix:{ctor:"[]"},power:la}):v.update(e,{compileError:P,mix:{ctor:"::",_0:co(_._0),_1:{ctor:"[]"}},power:pa})
case"KillCurrentCore":return v.update(e,{compileError:P,mix:{ctor:"[]"},runtimeError:P,power:la})
case"StepForward":var n=e.mix
if("[]"===n.ctor)return e
var o=n._1,u=n._0,c=xu(u)
if("Err"===c.ctor)return v.update(e,{runtimeError:M(c._0)})
var a=c._0._0,i=c._0._1
return"_Tuple3"===i.ctor&&"Halt"===i._2.ctor?v.update(e,{mix:{ctor:"::",_0:a,_1:{ctor:"::",_0:u,_1:o}},runtimeError:P,power:la}):v.update(e,{mix:{ctor:"::",_0:a,_1:{ctor:"::",_0:u,_1:o}},runtimeError:P,power:pa})
case"StepBackward":var l=e.mix
return"[]"===l.ctor?e:v.update(e,{mix:l._1,runtimeError:P,power:pa})
default:return v.update(e,{sourceCode:t._0})}}),da=function(r){return{ctor:"ReadCode",_0:r}},va=a(Ic,{ctor:"[]"},{ctor:"::",_0:a(Jc,a(T["++"],{ctor:"::",_0:function(r){return a(yc,"placeholder",r)}("Write source code here."),_1:{ctor:"::",_0:function(r){return a(Xc,"input",a(_c,r,Ec))}(da),_1:{ctor:"[]"}}},Fc),{ctor:"[]"}),_1:{ctor:"[]"}}),ma={ctor:"StepBackward"},ga={ctor:"StepForward"},ha={ctor:"KillCurrentCore"},Ta=function(r){return"On"===r.ctor?a(Ic,{ctor:"[]"},{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(ga),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("step"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(ma),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("back"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(ha),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("kill core"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}):a(Ic,{ctor:"[]"},{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(ma),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("back"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(ha),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("kill core"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}})},Na={ctor:"Compile"},Ia=a(Ic,{ctor:"[]"},{ctor:"::",_0:a(bc,a(T["++"],{ctor:"::",_0:Lc(Na),_1:{ctor:"[]"}},Fc),{ctor:"::",_0:Tc("compile"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),ba=function(r){return a(Ic,{ctor:"[]"},{ctor:"::",_0:function(){var e=r.mix
return"[]"===e.ctor?a(Ic,{ctor:"[]"},{ctor:"::",_0:va,_1:{ctor:"::",_0:Ia,_1:{ctor:"::",_0:_a,_1:{ctor:"::",_0:ia(r.compileError),_1:{ctor:"[]"}}}}}):a(Ic,{ctor:"[]"},{ctor:"::",_0:va,_1:{ctor:"::",_0:Ta(r.power),_1:{ctor:"::",_0:aa(e._0),_1:{ctor:"::",_0:ia(r.runtimeError),_1:{ctor:"[]"}}}}})}(),_1:{ctor:"[]"}})},Ja=function(e){var t=e
return hc({init:a(kr["!"],t.model,{ctor:"[]"}),update:r(function(r,e){return a(kr["!"],a(t.update,r,e),{ctor:"[]"})}),view:t.view,subscriptions:function(r){return Ar}})}({model:sa,view:ba,update:fa})(),wa={}
if(wa.Main=wa.Main||{},void 0!==Ja&&Ja(wa.Main,"Main",void 0),"function"==typeof define&&define.amd)return void define([],function(){return wa})
if("object"==typeof module)return void(module.exports=wa)
var ya=this.Elm
if(void 0===ya)return void(this.Elm=wa)
for(var ka in wa){if(ka in ya)throw new Error("There are two Elm modules called `"+ka+"` on this page! Rename one of them.")
ya[ka]=wa[ka]}}).call(this)
