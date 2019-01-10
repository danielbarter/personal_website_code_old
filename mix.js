(function(){"use strict"
function r(r){function e(e){return function(t){return r(e,t)}}return e.arity=2,e.func=r,e}function e(r){function e(e){return function(t){return function(_){return r(e,t,_)}}}return e.arity=3,e.func=r,e}function t(r){function e(e){return function(t){return function(_){return function(n){return r(e,t,_,n)}}}}return e.arity=4,e.func=r,e}function _(r){function e(e){return function(t){return function(_){return function(n){return function(o){return r(e,t,_,n,o)}}}}}return e.arity=5,e.func=r,e}function n(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(c){return r(e,t,_,n,o,c)}}}}}}return e.arity=6,e.func=r,e}function o(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(c){return function(u){return r(e,t,_,n,o,c,u)}}}}}}}return e.arity=7,e.func=r,e}function c(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(c){return function(u){return function(a){return r(e,t,_,n,o,c,u,a)}}}}}}}}return e.arity=8,e.func=r,e}function u(r){function e(e){return function(t){return function(_){return function(n){return function(o){return function(c){return function(u){return function(a){return function(i){return r(e,t,_,n,o,c,u,a,i)}}}}}}}}}return e.arity=9,e.func=r,e}function a(r,e,t){return 2===r.arity?r.func(e,t):r(e)(t)}function i(r,e,t,_){return 3===r.arity?r.func(e,t,_):r(e)(t)(_)}function l(r,e,t,_,n){return 4===r.arity?r.func(e,t,_,n):r(e)(t)(_)(n)}function s(r,e,t,_,n,o){return 5===r.arity?r.func(e,t,_,n,o):r(e)(t)(_)(n)(o)}function p(r,e,t,_,n,o,c,u){return 7===r.arity?r.func(e,t,_,n,o,c,u):r(e)(t)(_)(n)(o)(c)(u)}function f(r,e,t,_,n,o,c,u,a){return 8===r.arity?r.func(e,t,_,n,o,c,u,a):r(e)(t)(_)(n)(o)(c)(u)(a)}var d=function(){function t(r,e){return r/e|0}function _(r,e){return r%e}function n(r,e){if(0===e)throw new Error("Cannot perform mod 0. Division by zero error.")
var t=r%e,_=0===r?0:e>0?r>=0?t:t+e:-n(-r,-e)
return _===e?0:_}function o(r,e){return Math.log(e)/Math.log(r)}function c(r){return-r}function u(r){return r<0?-r:r}function a(r,e){return v.cmp(r,e)<0?r:e}function i(r,e){return v.cmp(r,e)>0?r:e}function l(r,e,t){return v.cmp(t,r)<0?r:v.cmp(t,e)>0?e:t}function s(r,e){return{ctor:I[v.cmp(r,e)+1]}}function p(r,e){return r!==e}function f(r){return!r}function d(r){return r===1/0||r===-(1/0)}function m(r){return 0|r}function g(r){return r*Math.PI/180}function h(r){return 2*Math.PI*r}function T(r){var e=r._0,t=r._1
return v.Tuple2(e*Math.cos(t),e*Math.sin(t))}function N(r){var e=r._0,t=r._1
return v.Tuple2(Math.sqrt(e*e+t*t),Math.atan2(t,e))}var I=["LT","EQ","GT"]
return{div:r(t),rem:r(_),mod:r(n),pi:Math.PI,e:Math.E,cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,atan2:r(Math.atan2),degrees:g,turns:h,fromPolar:T,toPolar:N,sqrt:Math.sqrt,logBase:r(o),negate:c,abs:u,min:r(a),max:r(i),clamp:e(l),compare:r(s),xor:r(p),not:f,truncate:m,ceiling:Math.ceil,floor:Math.floor,round:Math.round,toFloat:function(r){return r},isNaN:isNaN,isInfinite:d}}(),v=function(){function e(r,e){for(var _,n=[],o=t(r,e,0,n);o&&(_=n.pop());)o=t(_.x,_.y,0,n)
return o}function t(r,e,_,n){if(_>100)return n.push({x:r,y:e}),!0
if(r===e)return!0
if("object"!=typeof r){if("function"==typeof r)throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.')
return!1}if(null===r||null===e)return!1
if(r instanceof Date)return r.getTime()===e.getTime()
if(!("ctor"in r)){for(var o in r)if(!t(r[o],e[o],_+1,n))return!1
return!0}if("RBNode_elm_builtin"!==r.ctor&&"RBEmpty_elm_builtin"!==r.ctor||(r=Zn(r),e=Zn(e)),"Set_elm_builtin"===r.ctor&&(r=_elm_lang$core$Set$toList(r),e=_elm_lang$core$Set$toList(e)),"::"===r.ctor){for(var c=r,u=e;"::"===c.ctor&&"::"===u.ctor;){if(!t(c._0,u._0,_+1,n))return!1
c=c._1,u=u._1}return c.ctor===u.ctor}if("_Array"===r.ctor){var a=qu.toJSArray(r),i=qu.toJSArray(e)
if(a.length!==i.length)return!1
for(var l=0;l<a.length;l++)if(!t(a[l],i[l],_+1,n))return!1
return!0}if(!t(r.ctor,e.ctor,_+1,n))return!1
for(var o in r)if(!t(r[o],e[o],_+1,n))return!1
return!0}function _(r,e){if("object"!=typeof r)return r===e?m:r<e?v:g
if(r instanceof String){var t=r.valueOf(),n=e.valueOf()
return t===n?m:t<n?v:g}if("::"===r.ctor||"[]"===r.ctor){for(;"::"===r.ctor&&"::"===e.ctor;){var o=_(r._0,e._0)
if(o!==m)return o
r=r._1,e=e._1}return r.ctor===e.ctor?m:"[]"===r.ctor?v:g}if("_Tuple"===r.ctor.slice(0,6)){var o,c=r.ctor.slice(6)-0
if(0===c)return m
if(c>=1){if((o=_(r._0,e._0))!==m)return o
if(c>=2){if((o=_(r._1,e._1))!==m)return o
if(c>=3){if((o=_(r._2,e._2))!==m)return o
if(c>=4){if((o=_(r._3,e._3))!==m)return o
if(c>=5){if((o=_(r._4,e._4))!==m)return o
if(c>=6){if((o=_(r._5,e._5))!==m)return o
if(c>=7)throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")}}}}}}return m}throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")}function n(r,e){return{ctor:"_Tuple2",_0:r,_1:e}}function o(r){return new String(r)}function c(r){return T++}function u(r,e){var t={}
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
if("_Array"===r.ctor){return"Array.fromList "+f(Wu(r))}if("<decoder>"===r.ctor)return"<decoder>"
if("_Process"===r.ctor)return"<process:"+r.id+">"
if("::"===r.ctor){var _="["+f(r._0)
for(r=r._1;"::"===r.ctor;)_+=","+f(r._0),r=r._1
return _+"]"}if("[]"===r.ctor)return"[]"
if("Set_elm_builtin"===r.ctor)return"Set.fromList "+f(_elm_lang$core$Set$toList(r))
if("RBNode_elm_builtin"===r.ctor||"RBEmpty_elm_builtin"===r.ctor)return"Dict.fromList "+f(Zn(r))
var _=""
for(var o in r)if("ctor"!==o){var c=f(r[o]),u=c[0],a="{"===u||"("===u||"<"===u||'"'===u||c.indexOf(" ")<0
_+=" "+(a?c:"("+c+")")}return r.ctor+_}if("object"===e){if(r instanceof Date)return"<"+r.toString()+">"
if(r.elm_web_socket)return"<websocket>"
var _=[]
for(var n in r)_.push(n+" = "+f(r[n]))
return 0===_.length?"{}":"{ "+_.join(", ")+" }"}return"<internal structure>"}function d(r,e){var t=r.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0")
return e?t.replace(/\'/g,"\\'"):t.replace(/\"/g,'\\"')}var v=-1,m=0,g=1,h={ctor:"_Tuple0"},T=0,N={ctor:"[]"}
return{eq:e,cmp:_,Tuple0:h,Tuple2:n,chr:o,update:u,guid:c,append:r(i),crash:l,crashCase:s,toString:f}}(),m=(r(function(r,e){var t=e
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
var w=d.max,k=d.min,y=d.compare,T=T||{}
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
var B=(d.toPolar,d.fromPolar,d.turns),L=d.degrees,S=function(){function e(r,e){var t=r+": "+v.toString(e),_=_||{}
return _.stdout?_.stdout.write(t):console.log(t),e}function t(r){throw new Error(r)}return{crash:t,log:r(e)}}(),C=(S.crash,S.log,r(function(r,e){var t=e
return"Just"===t.ctor?t._0:r})),x={ctor:"Nothing"},P=(r(function(r,e){var t=e
return"Just"===t.ctor?r(t._0):x}),function(r){return{ctor:"Just",_0:r}}),M=(r(function(r,e){var t=e
return"Just"===t.ctor?P(r(t._0)):x}),e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
return"_Tuple2"===_.ctor&&"Just"===_._0.ctor&&"Just"===_._1.ctor?P(a(r,_._0._0,_._1._0)):x}),t(function(r,e,t,_){var n={ctor:"_Tuple3",_0:e,_1:t,_2:_}
return"_Tuple3"===n.ctor&&"Just"===n._0.ctor&&"Just"===n._1.ctor&&"Just"===n._2.ctor?P(i(r,n._0._0,n._1._0,n._2._0)):x}),_(function(r,e,t,_,n){var o={ctor:"_Tuple4",_0:e,_1:t,_2:_,_3:n}
return"_Tuple4"===o.ctor&&"Just"===o._0.ctor&&"Just"===o._1.ctor&&"Just"===o._2.ctor&&"Just"===o._3.ctor?P(l(r,o._0._0,o._1._0,o._2._0,o._3._0)):x}),n(function(r,e,t,_,n,o){var c={ctor:"_Tuple5",_0:e,_1:t,_2:_,_3:n,_4:o}
return"_Tuple5"===c.ctor&&"Just"===c._0.ctor&&"Just"===c._1.ctor&&"Just"===c._2.ctor&&"Just"===c._3.ctor&&"Just"===c._4.ctor?P(s(r,c._0._0,c._1._0,c._2._0,c._3._0,c._4._0)):x}),function(){function o(r,e){return{ctor:"::",_0:r,_1:e}}function c(r){for(var e=N,t=r.length;t--;)e=o(r[t],e)
return e}function u(r){for(var e=[];"[]"!==r.ctor;)e.push(r._0),r=r._1
return e}function p(r,e,t){for(var _=u(t),n=e,o=_.length;o--;)n=a(r,_[o],n)
return n}function f(r,e,t){for(var _=[];"[]"!==e.ctor&&"[]"!==t.ctor;)_.push(a(r,e._0,t._0)),e=e._1,t=t._1
return c(_)}function d(r,e,t,_){for(var n=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor;)n.push(i(r,e._0,t._0,_._0)),e=e._1,t=t._1,_=_._1
return c(n)}function m(r,e,t,_,n){for(var o=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor&&"[]"!==n.ctor;)o.push(l(r,e._0,t._0,_._0,n._0)),e=e._1,t=t._1,_=_._1,n=n._1
return c(o)}function g(r,e,t,_,n,o){for(var u=[];"[]"!==e.ctor&&"[]"!==t.ctor&&"[]"!==_.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor;)u.push(s(r,e._0,t._0,_._0,n._0,o._0)),e=e._1,t=t._1,_=_._1,n=n._1,o=o._1
return c(u)}function h(r,e){return c(u(e).sort(function(e,t){return v.cmp(r(e),r(t))}))}function T(r,e){return c(u(e).sort(function(e,t){var _=r(e)(t).ctor
return"EQ"===_?0:"LT"===_?-1:1}))}var N={ctor:"[]"}
return{Nil:N,Cons:o,cons:r(o),toArray:u,fromArray:c,foldr:e(p),map2:e(f),map3:t(d),map4:_(m),map5:n(g),sortBy:r(h),sortWith:r(T)}}()),O=(M.sortWith,M.sortBy,r(function(r,e){for(;;){if(v.cmp(r,0)<1)return e
var t=e
if("[]"===t.ctor)return e
var _=r-1,n=t._1
r=_,e=n}})),j=(M.map5,M.map4,M.map3,M.map2),D=r(function(r,e){for(;;){var t=e
if("[]"===t.ctor)return!1
if(r(t._0))return!0
var _=r,n=t._1
r=_,e=n}}),R=(r(function(r,e){return!a(D,function(e){return!r(e)},e)}),M.foldr),Z=e(function(r,e,t){for(;;){var _=t
if("[]"===_.ctor)return e
var n=r,o=a(r,_._0,e),c=_._1
r=n,e=o,t=c}}),q=function(e){return i(Z,r(function(r,e){return e+1}),0,e)},W=function(e){return i(Z,r(function(r,e){return r+e}),0,e)},V=(r(function(r,e){return a(D,function(e){return v.eq(e,r)},e)}),function(r){var e=r
return"::"===e.ctor?P(e._0):x}),U=U||{}
U["::"]=M.cons
var z=r(function(e,t){return i(R,r(function(r,t){return{ctor:"::",_0:e(r),_1:t}}),{ctor:"[]"},t)}),$=r(function(e,t){return i(R,r(function(r,t){return e(r)?{ctor:"::",_0:r,_1:t}:t}),{ctor:"[]"},t)}),F=e(function(r,e,t){var _=r(e)
return"Just"===_.ctor?{ctor:"::",_0:_._0,_1:t}:t}),G=(r(function(r,e){return i(R,F(r),{ctor:"[]"},e)}),function(e){return i(Z,r(function(r,e){return{ctor:"::",_0:r,_1:e}}),{ctor:"[]"},e)}),Q=(e(function(e,t,_){return G(i(Z,r(function(r,t){var _=t
return"::"===_.ctor?{ctor:"::",_0:a(e,r,_._0),_1:t}:{ctor:"[]"}}),{ctor:"::",_0:t,_1:{ctor:"[]"}},_))}),r(function(e,t){return"[]"===t.ctor?e:i(R,r(function(r,e){return{ctor:"::",_0:r,_1:e}}),t,e)})),K=function(r){return i(R,Q,{ctor:"[]"},r)},H=(r(function(r,e){return K(a(z,r,e))}),r(function(e,t){return i(R,r(function(r,t){var _=t,n=_._0,o=_._1
return e(r)?{ctor:"_Tuple2",_0:{ctor:"::",_0:r,_1:n},_1:o}:{ctor:"_Tuple2",_0:n,_1:{ctor:"::",_0:r,_1:o}}}),{ctor:"_Tuple2",_0:{ctor:"[]"},_1:{ctor:"[]"}},t)}),r(function(e,t){var _=t
if("[]"===_.ctor)return{ctor:"[]"}
var n=r(function(r,t){return{ctor:"::",_0:e,_1:{ctor:"::",_0:r,_1:t}}}),o=i(R,n,{ctor:"[]"},_._1)
return{ctor:"::",_0:_._0,_1:o}}),e(function(r,e,t){for(;;){if(v.cmp(r,0)<1)return t
var _=e
if("[]"===_.ctor)return t
var n=r-1,o=_._1,c={ctor:"::",_0:_._0,_1:t}
r=n,e=o,t=c}})),Y=r(function(r,e){return G(i(H,r,e,{ctor:"[]"}))}),rr=e(function(r,e,t){if(v.cmp(e,0)<1)return{ctor:"[]"}
var _={ctor:"_Tuple2",_0:e,_1:t}
r:do{e:do{if("_Tuple2"!==_.ctor)break r
if("[]"===_._1.ctor)return t
if("::"!==_._1._1.ctor){if(1===_._0)break e
break r}switch(_._0){case 1:break e
case 2:return{ctor:"::",_0:_._1._0,_1:{ctor:"::",_0:_._1._1._0,_1:{ctor:"[]"}}}
case 3:if("::"===_._1._1._1.ctor)return{ctor:"::",_0:_._1._0,_1:{ctor:"::",_0:_._1._1._0,_1:{ctor:"::",_0:_._1._1._1._0,_1:{ctor:"[]"}}}}
break r
default:if("::"===_._1._1._1.ctor&&"::"===_._1._1._1._1.ctor){var n=_._1._1._1._0,o=_._1._1._0,c=_._1._0,u=_._1._1._1._1._0,l=_._1._1._1._1._1
return v.cmp(r,1e3)>0?{ctor:"::",_0:c,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:u,_1:a(Y,e-4,l)}}}}:{ctor:"::",_0:c,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:u,_1:i(rr,r+1,e-4,l)}}}}}break r}}while(!1)
return{ctor:"::",_0:_._1._0,_1:{ctor:"[]"}}}while(!1)
return t}),er=(r(function(r,e){return i(rr,0,r,e)}),e(function(r,e,t){for(;;){if(v.cmp(e,0)<1)return r
var _={ctor:"::",_0:t,_1:r},n=e-1,o=t
r=_,e=n,t=o}})),tr=r(function(r,e){return i(er,{ctor:"[]"},r,e)}),_r=e(function(r,e,t){for(;;){if(!(v.cmp(r,e)<1))return t
var _=r,n=e-1,o={ctor:"::",_0:e,_1:t}
r=_,e=n,t=o}}),nr=r(function(r,e){return i(_r,r,e,{ctor:"[]"})}),or=(r(function(r,e){return i(j,r,a(nr,0,q(e)-1),e)}),r(function(r,e){var t=e
return"Ok"===t.ctor?t._0:r})),cr=function(r){return{ctor:"Err",_0:r}},ur=(r(function(r,e){var t=e
return"Ok"===t.ctor?r(t._0):cr(t._0)}),function(r){return{ctor:"Ok",_0:r}}),ar=r(function(r,e){var t=e
return"Ok"===t.ctor?ur(r(t._0)):cr(t._0)}),ir=(e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
return"Ok"===_._0.ctor?"Ok"===_._1.ctor?ur(a(r,_._0._0,_._1._0)):cr(_._1._0):cr(_._0._0)}),t(function(r,e,t,_){var n={ctor:"_Tuple3",_0:e,_1:t,_2:_}
return"Ok"===n._0.ctor?"Ok"===n._1.ctor?"Ok"===n._2.ctor?ur(i(r,n._0._0,n._1._0,n._2._0)):cr(n._2._0):cr(n._1._0):cr(n._0._0)}),_(function(r,e,t,_,n){var o={ctor:"_Tuple4",_0:e,_1:t,_2:_,_3:n}
return"Ok"===o._0.ctor?"Ok"===o._1.ctor?"Ok"===o._2.ctor?"Ok"===o._3.ctor?ur(l(r,o._0._0,o._1._0,o._2._0,o._3._0)):cr(o._3._0):cr(o._2._0):cr(o._1._0):cr(o._0._0)}),n(function(r,e,t,_,n,o){var c={ctor:"_Tuple5",_0:e,_1:t,_2:_,_3:n,_4:o}
return"Ok"===c._0.ctor?"Ok"===c._1.ctor?"Ok"===c._2.ctor?"Ok"===c._3.ctor?"Ok"===c._4.ctor?ur(s(r,c._0._0,c._1._0,c._2._0,c._3._0,c._4._0)):cr(c._4._0):cr(c._3._0):cr(c._2._0):cr(c._1._0):cr(c._0._0)}),r(function(r,e){var t=e
return"Ok"===t.ctor?ur(t._0):cr(r(t._0))}),r(function(r,e){var t=e
return"Just"===t.ctor?ur(t._0):cr(r)}),function(){function t(r){return 0===r.length}function _(r,e){return r+e}function n(r){var e=r[0]
return e?P(v.Tuple2(v.chr(e),r.slice(1))):x}function o(r,e){return r+e}function c(r){return M.toArray(r).join("")}function u(r){return r.length}function i(r,e){for(var t=e.split(""),_=t.length;_--;)t[_]=r(v.chr(t[_]))
return t.join("")}function l(r,e){return e.split("").map(v.chr).filter(r).join("")}function s(r){return r.split("").reverse().join("")}function p(r,e,t){for(var _=t.length,n=0;n<_;++n)e=a(r,v.chr(t[n]),e)
return e}function f(r,e,t){for(var _=t.length;_--;)e=a(r,v.chr(t[_]),e)
return e}function d(r,e){return M.fromArray(e.split(r))}function m(r,e){return M.toArray(e).join(r)}function g(r,e){for(var t="";r>0;)1&r&&(t+=e),r>>=1,e+=e
return t}function h(r,e,t){return t.slice(r,e)}function T(r,e){return r<1?"":e.slice(0,r)}function N(r,e){return r<1?"":e.slice(-r)}function I(r,e){return r<1?e:e.slice(r)}function b(r,e){return r<1?e:e.slice(0,-r)}function J(r,e,t){var _=(r-t.length)/2
return g(Math.ceil(_),e)+t+g(0|_,e)}function w(r,e,t){return t+g(r-t.length,e)}function k(r,e,t){return g(r-t.length,e)+t}function y(r){return r.trim()}function E(r){return r.replace(/^\s+/,"")}function A(r){return r.replace(/\s+$/,"")}function X(r){return M.fromArray(r.trim().split(/\s+/g))}function B(r){return M.fromArray(r.split(/\r\n|\r|\n/g))}function L(r){return r.toUpperCase()}function S(r){return r.toLowerCase()}function C(r,e){for(var t=e.length;t--;)if(r(v.chr(e[t])))return!0
return!1}function O(r,e){for(var t=e.length;t--;)if(!r(v.chr(e[t])))return!1
return!0}function j(r,e){return e.indexOf(r)>-1}function D(r,e){return 0===e.indexOf(r)}function R(r,e){return e.length>=r.length&&e.lastIndexOf(r)===e.length-r.length}function Z(r,e){var t=r.length
if(t<1)return M.Nil
for(var _=0,n=[];(_=e.indexOf(r,_))>-1;)n.push(_),_+=t
return M.fromArray(n)}function q(r){var e=r.length
if(0===e)return W(r)
var t=r[0]
if("0"===t&&"x"===r[1]){for(var _=2;_<e;++_){var t=r[_]
if(!("0"<=t&&t<="9"||"A"<=t&&t<="F"||"a"<=t&&t<="f"))return W(r)}return ur(parseInt(r,16))}if(t>"9"||t<"0"&&"-"!==t&&"+"!==t)return W(r)
for(var _=1;_<e;++_){var t=r[_]
if(t<"0"||"9"<t)return W(r)}return ur(parseInt(r,10))}function W(r){return cr("could not convert string '"+r+"' to an Int")}function V(r){if(0===r.length||/[\sxbo]/.test(r))return U(r)
var e=+r
return e===e?ur(e):U(r)}function U(r){return cr("could not convert string '"+r+"' to a Float")}function z(r){return M.fromArray(r.split("").map(v.chr))}function $(r){return M.toArray(r).join("")}return{isEmpty:t,cons:r(_),uncons:n,append:r(o),concat:c,length:u,map:r(i),filter:r(l),reverse:s,foldl:e(p),foldr:e(f),split:r(d),join:r(m),repeat:r(g),slice:e(h),left:r(T),right:r(N),dropLeft:r(I),dropRight:r(b),pad:e(J),padLeft:e(k),padRight:e(w),trim:y,trimLeft:E,trimRight:A,words:X,lines:B,toUpper:L,toLower:S,any:r(C),all:r(O),contains:r(j),startsWith:r(D),endsWith:r(R),indexes:r(Z),toInt:q,toFloat:V,toList:z,fromList:$}}()),lr=function(){return{fromCode:function(r){return v.chr(String.fromCharCode(r))},toCode:function(r){return r.charCodeAt(0)},toUpper:function(r){return v.chr(r.toUpperCase())},toLower:function(r){return v.chr(r.toLowerCase())},toLocaleUpper:function(r){return v.chr(r.toLocaleUpperCase())},toLocaleLower:function(r){return v.chr(r.toLocaleLowerCase())}}}(),sr=(lr.fromCode,lr.toCode),pr=(lr.toLocaleLower,lr.toLocaleUpper,lr.toLower,lr.toUpper,e(function(r,e,t){var _=sr(t)
return v.cmp(_,sr(r))>-1&&v.cmp(_,sr(e))<1})),fr=(a(pr,v.chr("A"),v.chr("Z")),a(pr,v.chr("a"),v.chr("z")),a(pr,v.chr("0"),v.chr("9")),a(pr,v.chr("0"),v.chr("7")),ir.fromList,ir.toList,ir.toFloat,ir.toInt),dr=(ir.indexes,ir.indexes,ir.endsWith,ir.startsWith,ir.contains,ir.all,ir.any,ir.toLower,ir.toUpper,ir.lines),vr=(ir.words,ir.trimRight,ir.trimLeft,ir.trim,ir.padRight,ir.padLeft,ir.pad,ir.dropRight,ir.dropLeft),mr=(ir.right,ir.left,ir.slice,ir.repeat,ir.join),gr=(ir.split,ir.foldr,ir.foldl,ir.reverse,ir.filter,ir.map,ir.length),hr=ir.concat,Tr=(ir.append,ir.uncons),Nr=(ir.cons,ir.isEmpty),Ir=r(function(r,e){var t=e
return{ctor:"_Tuple2",_0:t._0,_1:r(t._1)}}),br=(r(function(r,e){var t=e
return{ctor:"_Tuple2",_0:r(t._0),_1:t._1}}),function(r){return r._1}),Jr=function(r){return r._0},wr=function(){function t(r){return function(e){return function(e,t){e.worker=function(e){if(void 0!==e)throw new Error("The `"+t+"` module does not need flags.\nCall "+t+".worker() with no arguments and you should be all set!")
return c(r.init,r.update,r.subscriptions,n)}}}}function _(r){return function(e){return function(t,_){t.worker=function(t){if(void 0===e)throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+_+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.")
var o=a(Uu.run,e,t)
if("Err"===o.ctor)throw new Error(_+".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+o._0)
return c(r.init(o._0),r.update,r.subscriptions,n)}}}}function n(r,e){return function(r){}}function o(e){var t=g(M.Nil),_=v.Tuple2(v.Tuple0,t)
return _a({init:_,view:function(r){return main},update:r(function(r,e){return _}),subscriptions:function(r){return t}})}function c(r,e,t,_){function n(r,_){return kr.nativeBinding(function(n){var o=a(e,r,_)
_=o._0,c(_),T(i,o._1,t(_)),n(kr.succeed(_))})}function o(r){kr.rawSend(s,r)}var c,i={},l=kr.nativeBinding(function(e){var n=r._0
c=_(o,n),T(i,r._1,t(n)),e(kr.succeed(n))}),s=d(l,n),p=u(i,o)
return p?{ports:p}:{}}function u(r,e){var t
for(var _ in A){var n=A[_]
n.isForeign&&(t=t||{},t[_]="cmd"===n.tag?k(_):E(_,e)),r[_]=s(n,e)}return t}function s(r,e){function t(r,e){if("self"===r.ctor)return i(c,_,r._0,e)
var t=r._0
switch(n){case"cmd":return i(o,_,t.cmds,e)
case"sub":return i(o,_,t.subs,e)
case"fx":return l(o,_,t.cmds,t.subs,e)}}var _={main:e,self:void 0},n=r.tag,o=r.onEffects,c=r.onSelfMsg,u=d(r.init,t)
return _.self=u,u}function p(r,e){return kr.nativeBinding(function(t){r.main(e),t(kr.succeed(v.Tuple0))})}function f(r,e){return a(kr.send,r.self,{ctor:"self",_0:e})}function d(r,e){function t(r){return a(_,t,kr.receive(function(t){return e(t,r)}))}var _=kr.andThen,n=a(_,t,r)
return kr.rawSpawn(n)}function m(r){return function(e){return{type:"leaf",home:r,value:e}}}function g(r){return{type:"node",branches:r}}function h(r,e){return{type:"map",tagger:r,tree:e}}function T(r,e,t){var _={}
N(!0,e,_,null),N(!1,t,_,null)
for(var n in r){var o=n in _?_[n]:{cmds:M.Nil,subs:M.Nil}
kr.rawSend(r[n],{ctor:"fx",_0:o})}}function N(r,e,t,_){switch(e.type){case"leaf":var n=e.home,o=I(r,n,_,e.value)
return void(t[n]=b(r,o,t[n]))
case"node":for(var c=e.branches;"[]"!==c.ctor;)N(r,c._0,t,_),c=c._1
return
case"map":return void N(r,e.tree,t,{tagger:e.tagger,rest:_})}}function I(r,e,t,_){function n(r){for(var e=t;e;)r=e.tagger(r),e=e.rest
return r}return a(r?A[e].cmdMap:A[e].subMap,n,_)}function b(r,e,t){return t=t||{cmds:M.Nil,subs:M.Nil},r?(t.cmds=M.Cons(e,t.cmds),t):(t.subs=M.Cons(e,t.subs),t)}function J(r){if(r in A)throw new Error("There can only be one port named `"+r+"`, but your program has multiple.")}function w(r,e){return J(r),A[r]={tag:"cmd",cmdMap:X,converter:e,isForeign:!0},m(r)}function k(r){function t(r,e,t){for(;"[]"!==e.ctor;){for(var _=o,n=c(e._0),a=0;a<_.length;a++)_[a](n)
e=e._1}return u}function _(r){o.push(r)}function n(r){o=o.slice()
var e=o.indexOf(r)
e>=0&&o.splice(e,1)}var o=[],c=A[r].converter,u=kr.succeed(null)
return A[r].init=u,A[r].onEffects=e(t),{subscribe:_,unsubscribe:n}}function y(r,e){return J(r),A[r]={tag:"sub",subMap:B,converter:e,isForeign:!0},m(r)}function E(r,t){function _(r,e,t){for(var _=n(r,e,t),o=0;o<l.length;o++)u(l[o])
return l=null,d=u,f=n,_}function n(r,e,t){return s=e,v}function o(r,e,t){return f(r,e,t)}function c(r){l.push(r)}function u(r){for(var e=s;"[]"!==e.ctor;)t(e._0(r)),e=e._1}function i(e){var t=a(Gu,p,e)
if("Err"===t.ctor)throw new Error("Trying to send an unexpected type of value through port `"+r+"`:\n"+t._0)
d(t._0)}var l=[],s=M.Nil,p=A[r].converter,f=_,d=c,v=kr.succeed(null)
return A[r].init=v,A[r].onEffects=e(o),{send:i}}var A={},X=r(function(r,e){return e}),B=r(function(r,e){return function(t){return r(e(t))}})
return{sendToApp:r(p),sendToSelf:r(f),effectManagers:A,outgoingPort:w,incomingPort:y,htmlToProgram:o,program:t,programWithFlags:_,initialize:c,leaf:m,batch:g,map:r(h)}}(),kr=function(){function e(r){return{ctor:"_Task_succeed",value:r}}function t(r){return{ctor:"_Task_fail",value:r}}function _(r){return{ctor:"_Task_nativeBinding",callback:r,cancel:null}}function n(r,e){return{ctor:"_Task_andThen",callback:r,task:e}}function o(r,e){return{ctor:"_Task_onError",callback:r,task:e}}function c(r){return{ctor:"_Task_receive",callback:r}}function u(r){var e={ctor:"_Process",id:v.guid(),root:r,stack:null,mailbox:[]}
return d(e),e}function a(r){return _(function(t){t(e(u(r)))})}function i(r,e){r.mailbox.push(e),d(r)}function l(r,t){return _(function(_){i(r,t),_(e(v.Tuple0))})}function s(r){return _(function(t){var _=r.root
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
return{succeed:e,fail:t,nativeBinding:_,andThen:r(n),onError:r(o),receive:c,spawn:a,kill:s,sleep:p,send:r(l),rawSpawn:u,rawSend:i}}(),yr=wr.batch,Er=yr({ctor:"[]"}),Ar=Ar||{}
Ar["!"]=r(function(r,e){return{ctor:"_Tuple2",_0:r,_1:yr(e)}})
var Xr=(wr.map,wr.batch),Br=Xr({ctor:"[]"}),Lr=(wr.map,kr.succeed,wr.sendToSelf,wr.sendToApp,wr.programWithFlags,wr.program,c(function(r,e,t,_,n,o,c,u){var i=c,l=u
return{ctor:"_Tuple6",_0:a(r,i._0,l._0),_1:a(e,i._1,l._1),_2:a(t,i._2,l._2),_3:a(_,i._3,l._3),_4:a(n,i._4,l._4),_5:a(o,i._5,l._5)}})),Sr=o(function(r,e,t,_,n,o,c){var u=c
return{ctor:"_Tuple6",_0:r(u._0),_1:e(u._1),_2:t(u._2),_3:_(u._3),_4:n(u._4),_5:o(u._5)}}),Cr=(_(function(r,e,t,_,n){var o=n
return{ctor:"_Tuple4",_0:r(o._0),_1:e(o._1),_2:t(o._2),_3:_(o._3)}}),t(function(r,e,t,_){var n=_
return{ctor:"_Tuple3",_0:r(n._0),_1:e(n._1),_2:t(n._2)}}),r(function(r,e){return V(a(O,r,e))})),xr=e(function(r,e,t){return"On"===r.ctor?t:e}),Pr=e(function(r,e,t){var _=r
return f(Lr,xr(_._0),xr(_._1),xr(_._2),xr(_._3),xr(_._4),xr(_._5),e,t)}),Mr=function(r){var e=r
return{ctor:"_Tuple3",_0:e._0,_1:e._4,_2:e._5}},Or=function(r){return r._0},jr=Math.pow(10,2),Dr=r(function(e,t){var _=q(t),n=a(nr,0,_-1),o=a(z,r(function(r,e){return Math.pow(r,e)})(e),n)
return W(i(j,r(function(r,e){return r*e}),t,o))}),Rr=r(function(r,e){return a(Dr,r,G(e))}),Zr=r(function(r,e){var t=e,_=t._1
return"Pos"===t._0.ctor?a(Rr,r,_):X(a(Rr,r,_))}),qr=function(r){var e=r
return a(Zr,jr,{ctor:"_Tuple2",_0:e._0,_1:a(z,Or,{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"::",_0:e._3,_1:{ctor:"::",_0:e._4,_1:{ctor:"::",_0:e._5,_1:{ctor:"[]"}}}}}})})},Wr=function(r){var e=r
return a(Zr,jr,{ctor:"_Tuple2",_0:e._0,_1:a(z,Or,{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"[]"}}})})},Vr=function(r){var e=r
return{ctor:"_Tuple4",_0:Wr({ctor:"_Tuple3",_0:e._0,_1:e._1,_2:e._2}),_1:Or(e._3),_2:Or(e._4),_3:Or(e._5)}},Ur=r(function(r,e){if(v.cmp(e,r)<0)return{ctor:"::",_0:e,_1:{ctor:"[]"}}
var t=e/r|0,_=a(Ur,r,t)
return{ctor:"::",_0:a(T["%"],e,r),_1:_}}),zr=r(function(r,e){return G(a(Ur,r,e))}),$r=e(function(r,e,t){var _=a(zr,r,e),n=q(_)
return a(T["++"],a(tr,t-n,0),_)}),Fr=function(e){var t=e
if("[]"===t.ctor)return ur({ctor:"[]"})
var _=t._0
return"Err"===_.ctor?cr(_._0):a(ar,r(function(r,e){return{ctor:"::",_0:r,_1:e}})(_._0),Fr(t._1))},Gr={ctor:"Neg"},Qr={ctor:"Pos"},Kr=function(r){return"Pos"===r.ctor?Gr:Qr},Hr=function(r){return p(Sr,Kr,h,h,h,h,h,r)},Yr=(r(function(r,e){return v.cmp(e,0)<0?{ctor:"_Tuple2",_0:Gr,_1:a(zr,r,0-e)}:{ctor:"_Tuple2",_0:Qr,_1:a(zr,r,e)}}),e(function(r,e,t){return v.cmp(e,0)<0?{ctor:"_Tuple2",_0:Gr,_1:i($r,r,0-e,t)}:{ctor:"_Tuple2",_0:Qr,_1:i($r,r,e,t)}})),re=function(r){return{ctor:"Byte",_0:r}},ee=function(r){return re(a(T["%"],r,jr))},te=ee(0),_e={ctor:"_Tuple6",_0:Qr,_1:te,_2:te,_3:te,_4:te,_5:te},ne={ctor:"_Tuple3",_0:Qr,_1:te,_2:te},oe=function(r){var e=r
return{ctor:"_Tuple6",_0:e._0,_1:te,_2:te,_3:te,_4:e._1,_5:e._2}},ce=r(function(r,e){for(;;){var t=e,_=t._0,n=t._5,o=t._4,c=t._3,u=t._2,a=t._1
if(v.cmp(r,0)>0){var i=r-1,l={ctor:"_Tuple6",_0:_,_1:te,_2:a,_3:u,_4:c,_5:o}
r=i,e=l}else{if(v.eq(r,0))return{ctor:"_Tuple6",_0:_,_1:a,_2:u,_3:c,_4:o,_5:n}
var s=r+1,p={ctor:"_Tuple6",_0:_,_1:u,_2:c,_3:o,_4:n,_5:te}
r=s,e=p}}}),ue=r(function(r,e){var t=e,_=t._0,n=t._5,o=t._4,c=t._3,u=t._2,i=t._1
return v.cmp(r,0)>0?a(ce,r-1,{ctor:"_Tuple6",_0:_,_1:n,_2:i,_3:u,_4:c,_5:o}):v.eq(r,0)?{ctor:"_Tuple6",_0:_,_1:i,_2:u,_3:c,_4:o,_5:n}:a(ce,r+1,{ctor:"_Tuple6",_0:_,_1:u,_2:c,_3:o,_4:n,_5:i})}),ae=function(r){var e=r
return ee(a(Zr,2,{ctor:"_Tuple2",_0:Qr,_1:a(z,function(r){return"Off"===r.ctor?0:1},{ctor:"::",_0:e._0,_1:{ctor:"::",_0:e._1,_1:{ctor:"::",_0:e._2,_1:{ctor:"::",_0:e._3,_1:{ctor:"::",_0:e._4,_1:{ctor:"::",_0:e._5,_1:{ctor:"[]"}}}}}}})}))},ie={ctor:"Off"},le={ctor:"On"},se=function(r){var e=r,t=function(r){return v.eq(r,0)?ie:le},_=i(Yr,2,e._0,6)
r:do{if("_Tuple2"===_.ctor&&"::"===_._1.ctor&&"::"===_._1._1.ctor&&"::"===_._1._1._1.ctor&&"::"===_._1._1._1._1.ctor&&"::"===_._1._1._1._1._1.ctor&&"::"===_._1._1._1._1._1._1.ctor){if("[]"===_._1._1._1._1._1._1._1.ctor)return{ctor:"_Tuple6",_0:t(_._1._0),_1:t(_._1._1._0),_2:t(_._1._1._1._0),_3:t(_._1._1._1._1._0),_4:t(_._1._1._1._1._1._0),_5:t(_._1._1._1._1._1._1._0)}
if("[]"===_._1._1._1._1._1._1._1._1.ctor)return{ctor:"_Tuple6",_0:t(_._1._1._0),_1:t(_._1._1._1._0),_2:t(_._1._1._1._1._0),_3:t(_._1._1._1._1._1._0),_4:t(_._1._1._1._1._1._1._0),_5:t(_._1._1._1._1._1._1._1._0)}
break r}break r}while(!1)
return{ctor:"_Tuple6",_0:ie,_1:ie,_2:ie,_3:ie,_4:ie,_5:ie}},pe={ctor:"Ignored"},fe={ctor:"Good"},de={ctor:"Overflow"},ve=r(function(r,e){var t=i(Yr,jr,r,6),_=t._0,n=t._1,o=q(n),c=a(O,o-6,n)
return"::"===c.ctor&&"::"===c._1.ctor&&"::"===c._1._1.ctor&&"::"===c._1._1._1.ctor&&"::"===c._1._1._1._1.ctor&&"::"===c._1._1._1._1._1.ctor&&"[]"===c._1._1._1._1._1._1.ctor?0===c._0?{ctor:"_Tuple2",_0:fe,_1:{ctor:"_Tuple6",_0:_,_1:ee(c._1._0),_2:ee(c._1._1._0),_3:ee(c._1._1._1._0),_4:ee(c._1._1._1._1._0),_5:ee(c._1._1._1._1._1._0)}}:{ctor:"_Tuple2",_0:de,_1:{ctor:"_Tuple6",_0:_,_1:ee(c._1._0),_2:ee(c._1._1._0),_3:ee(c._1._1._1._0),_4:ee(c._1._1._1._1._0),_5:ee(c._1._1._1._1._1._0)}}:{ctor:"_Tuple2",_0:pe,_1:e}}),me=t(function(r,e,t,_){return a(ve,a(r,qr(t),qr(i(Pr,e,_,_e))),t)}),ge=r(function(r,e){var t=i(Yr,jr,r,3),_=t._0,n=t._1,o=q(n),c=a(O,o-3,n)
return"::"===c.ctor&&"::"===c._1.ctor&&"::"===c._1._1.ctor&&"[]"===c._1._1._1.ctor?0===c._0?{ctor:"_Tuple2",_0:fe,_1:{ctor:"_Tuple3",_0:_,_1:ee(c._1._0),_2:ee(c._1._1._0)}}:{ctor:"_Tuple2",_0:de,_1:{ctor:"_Tuple3",_0:_,_1:ee(c._1._0),_2:ee(c._1._1._0)}}:{ctor:"_Tuple2",_0:pe,_1:e}}),he=r(function(r,e){var t=a(C,0,a(Cr,4,e)),_=ee(t),n=a(ge,t,ne),o=(n._1._0,n._1._1,n._1._2,a(C,0,a(Cr,3,e))),c=ee(o),u=a(ge,o,ne),i=(u._1._0,u._1._1),l=u._1._2,s=a(C,0,a(Cr,2,e)),p=ee(s),f=a(ge,s,ne),d=(f._1._0,f._1._1),v=f._1._2,m=a(C,0,a(Cr,1,e)),g=ee(m),h=a(ge,m,ne),T=(h._1._0,h._1._1),N=h._1._2,I=a(C,0,a(Cr,0,e)),b=ee(I),J=a(ge,I,ne),w=J._1._0,k=J._1._1,y=J._1._2
switch(r.ctor){case"BBBBB":return{ctor:"_Tuple6",_0:Qr,_1:b,_2:g,_3:p,_4:c,_5:_}
case"WBBB":return{ctor:"_Tuple6",_0:w,_1:k,_2:y,_3:g,_4:p,_5:c}
case"BWBB":return{ctor:"_Tuple6",_0:Qr,_1:b,_2:T,_3:N,_4:p,_5:c}
case"BBWB":return{ctor:"_Tuple6",_0:Qr,_1:b,_2:g,_3:d,_4:v,_5:c}
case"BBBW":return{ctor:"_Tuple6",_0:Qr,_1:b,_2:g,_3:p,_4:i,_5:l}
case"WWB":return{ctor:"_Tuple6",_0:w,_1:k,_2:y,_3:T,_4:N,_5:p}
case"WBW":return{ctor:"_Tuple6",_0:w,_1:k,_2:y,_3:g,_4:d,_5:v}
default:return{ctor:"_Tuple6",_0:Qr,_1:b,_2:T,_3:N,_4:d,_5:v}}}),Te=r(function(r,e){return qr(a(he,r,e))}),Ne=function(r){var e=r,t=br(a(ge,e._0,ne))
return{ctor:"_Tuple6",_0:t._0,_1:t._1,_2:t._2,_3:ee(e._1),_4:ee(e._2),_5:ee(e._3)}},Ie={ctor:"G"},be={ctor:"E"},Je={ctor:"L"},we=e(function(r,e,t){var _=i(Pr,r,e,_e),n=qr(_),o=i(Pr,r,t,_e),c=qr(o)
return v.cmp(n,c)<0?Je:v.eq(n,c)?be:Ie}),ke={ctor:"BWW"},ye={ctor:"WBW"},Ee={ctor:"WWB"},Ae={ctor:"BBBW"},Xe={ctor:"BBWB"},Be={ctor:"BWBB"},Le={ctor:"WBBB"},Se={ctor:"BBBBB"},Ce=function(r){var e=r,t=e._3,_=e._2,n=e._1,o=e._0
switch(t.ctor){case"LoadA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadANeg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadXNeg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI1Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI2Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI3Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI4Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI5Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"LoadI6Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreJ":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"StoreZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"Add":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"Sub":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"AddX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"SubX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"EnterA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterANeg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterXNeg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI1Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI2Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI3Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI4Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI5Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"EnterI6Neg":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"IncrementI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"DecrementI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"CompareA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI1":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI2":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI3":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI4":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI5":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"CompareI6":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:P(_),_3:t}
case"Jump":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpSaveJ":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnOverflow":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnNoOverflow":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnLess":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnEqual":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnGreater":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnGreaterEqual":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnUnEqual":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpOnLessEqual":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpANegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpAZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpAPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpANonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpANonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpANonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXNonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXNonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpXNonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI1NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI2NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI3NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI4NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI5NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6Negative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6Zero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6Positive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6NonNegative":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6NonZero":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"JumpI6NonPositive":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"ShiftA":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"ShiftX":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"ShiftACircular":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"ShiftXCircular":return{ctor:"_Tuple4",_0:P(o),_1:P(n),_2:x,_3:t}
case"SwapAX":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI1":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI2":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI3":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI4":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI5":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveXI6":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI1X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI2X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI3X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI4X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI5X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveI6X":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"MoveJX":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
case"NoOperation":return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}
default:return{ctor:"_Tuple4",_0:x,_1:x,_2:x,_3:t}}},xe=function(r){var e=r,t=e._1,_=e._0,n=Or(ae(e._2))
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
default:return{ctor:"_Tuple4",_0:0,_1:0,_2:2,_3:5}}},Pe=function(r){switch(r.ctor){case"LoadA":return"LDA"
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
default:return"HLT"}},Me=function(r){return{ctor:"Value",_0:r}},Oe=function(r){return{ctor:"Label",_0:r}},je={ctor:"Halt"},De={ctor:"NoOperation"},Re={ctor:"MoveJX"},Ze={ctor:"MoveI6X"},qe={ctor:"MoveI5X"},We={ctor:"MoveI4X"},Ve={ctor:"MoveI3X"},Ue={ctor:"MoveI2X"},ze={ctor:"MoveI1X"},$e={ctor:"MoveXI6"},Fe={ctor:"MoveXI5"},Ge={ctor:"MoveXI4"},Qe={ctor:"MoveXI3"},Ke={ctor:"MoveXI2"},He={ctor:"MoveXI1"},Ye={ctor:"SwapAX"},rt={ctor:"ShiftXCircular"},et={ctor:"ShiftACircular"},tt={ctor:"ShiftX"},_t={ctor:"ShiftA"},nt={ctor:"JumpI6NonPositive"},ot={ctor:"JumpI6NonZero"},ct={ctor:"JumpI6NonNegative"},ut={ctor:"JumpI6Positive"},at={ctor:"JumpI6Zero"},it={ctor:"JumpI6Negative"},lt={ctor:"JumpI5NonPositive"},st={ctor:"JumpI5NonZero"},pt={ctor:"JumpI5NonNegative"},ft={ctor:"JumpI5Positive"},dt={ctor:"JumpI5Zero"},vt={ctor:"JumpI5Negative"},mt={ctor:"JumpI4NonPositive"},gt={ctor:"JumpI4NonZero"},ht={ctor:"JumpI4NonNegative"},Tt={ctor:"JumpI4Positive"},Nt={ctor:"JumpI4Zero"},It={ctor:"JumpI4Negative"},bt={ctor:"JumpI3NonPositive"},Jt={ctor:"JumpI3NonZero"},wt={ctor:"JumpI3NonNegative"},kt={ctor:"JumpI3Positive"},yt={ctor:"JumpI3Zero"},Et={ctor:"JumpI3Negative"},At={ctor:"JumpI2NonPositive"},Xt={ctor:"JumpI2NonZero"},Bt={ctor:"JumpI2NonNegative"},Lt={ctor:"JumpI2Positive"},St={ctor:"JumpI2Zero"},Ct={ctor:"JumpI2Negative"},xt={ctor:"JumpI1NonPositive"},Pt={ctor:"JumpI1NonZero"},Mt={ctor:"JumpI1NonNegative"},Ot={ctor:"JumpI1Positive"},jt={ctor:"JumpI1Zero"},Dt={ctor:"JumpI1Negative"},Rt={ctor:"JumpXNonPositive"},Zt={ctor:"JumpXNonZero"},qt={ctor:"JumpXNonNegative"},Wt={ctor:"JumpXPositive"},Vt={ctor:"JumpXZero"},Ut={ctor:"JumpXNegative"},zt={ctor:"JumpANonPositive"},$t={ctor:"JumpANonZero"},Ft={ctor:"JumpANonNegative"},Gt={ctor:"JumpAPositive"},Qt={ctor:"JumpAZero"},Kt={ctor:"JumpANegative"},Ht={ctor:"JumpOnLessEqual"},Yt={ctor:"JumpOnUnEqual"},r_={ctor:"JumpOnGreaterEqual"},e_={ctor:"JumpOnGreater"},t_={ctor:"JumpOnEqual"},__={ctor:"JumpOnLess"},n_={ctor:"JumpOnNoOverflow"},o_={ctor:"JumpOnOverflow"},c_={ctor:"JumpSaveJ"},u_={ctor:"Jump"},a_={ctor:"CompareI6"},i_={ctor:"CompareI5"},l_={ctor:"CompareI4"},s_={ctor:"CompareI3"},p_={ctor:"CompareI2"},f_={ctor:"CompareI1"},d_={ctor:"CompareX"},v_={ctor:"CompareA"},m_={ctor:"DecrementI6"},g_={ctor:"DecrementI5"},h_={ctor:"DecrementI4"},T_={ctor:"DecrementI3"},N_={ctor:"DecrementI2"},I_={ctor:"DecrementI1"},b_={ctor:"DecrementX"},J_={ctor:"DecrementA"},w_={ctor:"IncrementI6"},k_={ctor:"IncrementI5"},y_={ctor:"IncrementI4"},E_={ctor:"IncrementI3"},A_={ctor:"IncrementI2"},X_={ctor:"IncrementI1"},B_={ctor:"IncrementX"},L_={ctor:"IncrementA"},S_={ctor:"EnterI6Neg"},C_={ctor:"EnterI5Neg"},x_={ctor:"EnterI4Neg"},P_={ctor:"EnterI3Neg"},M_={ctor:"EnterI2Neg"},O_={ctor:"EnterI1Neg"},j_={ctor:"EnterXNeg"},D_={ctor:"EnterANeg"},R_={ctor:"EnterI6"},Z_={ctor:"EnterI5"},q_={ctor:"EnterI4"},W_={ctor:"EnterI3"},V_={ctor:"EnterI2"},U_={ctor:"EnterI1"},z_={ctor:"EnterX"},$_={ctor:"EnterA"},F_={ctor:"SubX"},G_={ctor:"AddX"},Q_={ctor:"Sub"},K_={ctor:"Add"},H_={ctor:"StoreZero"},Y_={ctor:"StoreJ"},rn={ctor:"StoreI6"},en={ctor:"StoreI5"},tn={ctor:"StoreI4"},_n={ctor:"StoreI3"},nn={ctor:"StoreI2"},on={ctor:"StoreI1"},cn={ctor:"StoreX"},un={ctor:"StoreA"},an={ctor:"LoadI6Neg"},ln={ctor:"LoadI5Neg"},sn={ctor:"LoadI4Neg"},pn={ctor:"LoadI3Neg"},fn={ctor:"LoadI2Neg"},dn={ctor:"LoadI1Neg"},vn={ctor:"LoadXNeg"},mn={ctor:"LoadANeg"},gn={ctor:"LoadI6"},hn={ctor:"LoadI5"},Tn={ctor:"LoadI4"},Nn={ctor:"LoadI3"},In={ctor:"LoadI2"},bn={ctor:"LoadI1"},Jn={ctor:"LoadX"},wn={ctor:"LoadA"},kn=function(r){return{ctor:"UnrecognizedInstructionCode",_0:r}},yn=function(r){return{ctor:"InvalidModification",_0:r}},En=function(r){var e=r,t=e._1,_=e._2,n=e._0,o=se(ee(_)),c=e._3
switch(c){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:De})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:wn})
case 15:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Jn})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:bn})
case 10:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:In})
case 11:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Nn})
case 12:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Tn})
case 13:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:hn})
case 14:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:gn})
case 16:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:mn})
case 23:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:vn})
case 17:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:dn})
case 18:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:fn})
case 19:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:pn})
case 20:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:sn})
case 21:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ln})
case 22:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:an})
case 24:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:un})
case 31:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:cn})
case 25:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:on})
case 26:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:nn})
case 27:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:_n})
case 28:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:tn})
case 29:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:en})
case 30:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:rn})
case 32:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Y_})
case 33:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:H_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:K_})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Q_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:G_})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:F_})
case 56:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:v_})
case 63:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:d_})
case 57:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:f_})
case 58:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:p_})
case 59:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:s_})
case 60:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:l_})
case 61:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:i_})
case 62:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:a_})
case 48:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:D_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:L_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:J_})
default:return cr(yn(_))}case 55:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:z_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:j_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:B_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:b_})
default:return cr(yn(_))}case 49:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:U_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:O_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:X_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:I_})
default:return cr(yn(_))}case 50:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:V_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:M_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:A_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:N_})
default:return cr(yn(_))}case 51:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:W_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:P_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:E_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:T_})
default:return cr(yn(_))}case 52:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:q_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:x_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:y_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:h_})
default:return cr(yn(_))}case 53:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Z_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:C_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:k_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:g_})
default:return cr(yn(_))}case 54:switch(_){case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:R_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:S_})
case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:w_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:m_})
default:return cr(yn(_))}case 39:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:u_})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:c_})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:o_})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:n_})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:__})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:t_})
case 6:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:e_})
case 7:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:r_})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Yt})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ht})
default:return cr(yn(_))}case 40:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Kt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Qt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Gt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ft})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$t})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:zt})
default:return cr(yn(_))}case 47:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ut})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Vt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Wt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:qt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Zt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Rt})
default:return cr(yn(_))}case 41:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Dt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:jt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ot})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Mt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Pt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:xt})
default:return cr(yn(_))}case 42:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ct})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:St})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Lt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Bt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Xt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:At})
default:return cr(yn(_))}case 43:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Et})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:yt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:kt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:wt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Jt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:bt})
default:return cr(yn(_))}case 44:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:It})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Nt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Tt})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ht})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:gt})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:mt})
default:return cr(yn(_))}case 45:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:vt})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:dt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ft})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:pt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:st})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:lt})
default:return cr(yn(_))}case 46:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:it})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:at})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ut})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ct})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ot})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:nt})
default:return cr(yn(_))}case 6:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:_t})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:tt})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:et})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:rt})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ye})
default:return cr(yn(_))}case 7:switch(_){case 0:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:He})
case 1:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ke})
case 2:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Qe})
case 3:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ge})
case 4:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Fe})
case 5:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:$e})
case 6:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:ze})
case 7:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ue})
case 8:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ve})
case 9:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:We})
case 10:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:qe})
case 11:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Ze})
case 12:return ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:Re})
default:return cr(yn(_))}case 5:return 2===_?ur({ctor:"_Tuple4",_0:n,_1:t,_2:o,_3:je}):cr(yn(_))
default:return cr(kn(c))}},An=function(r){return r._0},Xn=function(r){var e=r
return"DataAddress"===e.ctor?e._0:a(Te,e._0,e._1)},Bn=r(function(r,e){return{ctor:"DataPacked",_0:r,_1:e}}),Ln=function(r){return{ctor:"DataAddress",_0:r}},Sn=function(r){var e=r
if("DataAddress"===e.ctor){var t=e._0
return"Err"===t.ctor?cr(t._0):ur(Ln(t._0))}var _=Fr(e._1)
return"Err"===_.ctor?cr(_._0):ur(a(Bn,e._0,_._0))},Cn=r(function(r,e){var t=e
return"DataAddress"===t.ctor?Ln(r(t._0)):a(Bn,t._0,a(z,r,t._1))}),xn=function(r){return{ctor:"DataInstruction",_0:r}},Pn=function(r){return{ctor:"DataNumber",_0:r}},Mn=r(function(r,e){return{ctor:"Code",_0:r,_1:e}}),On=t(function(r,e,t,_){var n=_,o=n._0,c=n._1
return"DataNumber"===c.ctor?a(Mn,r(o),Pn(e(c._0))):a(Mn,r(o),xn(t(c._0)))}),jn=function(r){var e=r,t=e._0,_=e._1
if("DataNumber"===_.ctor){var n=_._0
return"Err"===n.ctor?cr(n._0):ur(a(Mn,t,Pn(n._0)))}var o=_._0
return"Err"===o.ctor?cr(o._0):ur(a(Mn,t,xn(o._0)))},Dn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return e
var n=r,o=i(r,_._1,_._2,i(Dn,r,e,_._4)),c=_._3
r=n,e=o,t=c}}),Rn=function(r){return i(Dn,e(function(r,e,t){return{ctor:"::",_0:r,_1:t}}),{ctor:"[]"},r)},Zn=function(r){return i(Dn,e(function(r,e,t){return{ctor:"::",_0:{ctor:"_Tuple2",_0:r,_1:e},_1:t}}),{ctor:"[]"},r)},qn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return e
var n=r,o=i(r,_._1,_._2,i(qn,r,e,_._3)),c=_._4
r=n,e=o,t=c}}),Wn=(n(function(t,_,n,o,c,u){var a=e(function(r,e,o){for(;;){var c=o,u=c._1,a=c._0,s=a
if("[]"===s.ctor)return{ctor:"_Tuple2",_0:a,_1:i(n,r,e,u)}
var p=s._1,f=s._0._1,d=s._0._0
if(!(v.cmp(d,r)<0))return v.cmp(d,r)>0?{ctor:"_Tuple2",_0:a,_1:i(n,r,e,u)}:{ctor:"_Tuple2",_0:p,_1:l(_,d,f,e,u)}
var m=r,g=e,h={ctor:"_Tuple2",_0:p,_1:i(t,d,f,u)}
r=m,e=g,o=h}}),s=i(qn,a,{ctor:"_Tuple2",_0:Zn(o),_1:u},c),p=s._0,f=s._1
return i(Z,r(function(r,e){var _=r
return i(t,_._0,_._1,e)}),f,p)}),t(function(r,e,t,_){return S.crash(hr({ctor:"::",_0:"Internal red-black tree invariant violated, expected ",_1:{ctor:"::",_0:r,_1:{ctor:"::",_0:" and got ",_1:{ctor:"::",_0:N(e),_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:t,_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:_,_1:{ctor:"::",_0:"\nPlease report this bug to <https://github.com/elm-lang/core/issues>",_1:{ctor:"[]"}}}}}}}}}}))})),Vn=function(r){var e=r
r:do{if("RBNode_elm_builtin"===e.ctor){if("BBlack"===e._0.ctor)return!0
break r}if("LBBlack"===e._0.ctor)return!0
break r}while(!1)
return!1},Un=r(function(r,e){for(;;){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return r
var _=a(Un,r+1,t._4),n=t._3
r=_,e=n}}),zn=r(function(r,e){r:for(;;){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return x
var _=a(y,r,t._1)
switch(_.ctor){case"LT":var n=r,o=t._3
r=n,e=o
continue r
case"EQ":return P(t._2)
default:var c=r,u=t._4
r=c,e=u
continue r}}}),$n=r(function(r,e){return"Just"===a(zn,r,e).ctor}),Fn=e(function(r,e,t){for(;;){var _=t
if("RBEmpty_elm_builtin"===_.ctor)return{ctor:"_Tuple2",_0:r,_1:e}
var n=_._1,o=_._2,c=_._4
r=n,e=o,t=c}}),Gn={ctor:"NBlack"},Qn={ctor:"BBlack"},Kn={ctor:"Black"},Hn=function(r){var e=r
if("RBNode_elm_builtin"===e.ctor){var t=e._0
return v.eq(t,Kn)||v.eq(t,Qn)}return!0},Yn={ctor:"Red"},ro=function(r){switch(r.ctor){case"Black":return Qn
case"Red":return Kn
case"NBlack":return Yn
default:return S.crash("Can't make a double black node more black!")}},eo=function(r){switch(r.ctor){case"BBlack":return Kn
case"Black":return Yn
case"Red":return Gn
default:return S.crash("Can't make a negative black node less black!")}},to={ctor:"LBBlack"},_o={ctor:"LBlack"},no=function(r){return{ctor:"RBEmpty_elm_builtin",_0:r}},oo=no(_o),co=_(function(r,e,t,_,n){return{ctor:"RBNode_elm_builtin",_0:r,_1:e,_2:t,_3:_,_4:n}}),uo=function(r){var e=r
return"RBNode_elm_builtin"===e.ctor&&"Red"===e._0.ctor?s(co,Kn,e._1,e._2,e._3,e._4):r},ao=function(r){var e=r
return"RBNode_elm_builtin"===e.ctor?s(co,eo(e._0),e._1,e._2,e._3,e._4):no(_o)},io=function(r){return function(e){return function(t){return function(_){return function(n){return function(o){return function(c){return function(u){return function(a){return function(i){return function(l){return s(co,eo(r),_,n,s(co,Kn,e,t,u,a),s(co,Kn,o,c,i,l))}}}}}}}}}}},lo=function(r){var e=r
return"RBEmpty_elm_builtin"===e.ctor?no(_o):s(co,Kn,e._1,e._2,e._3,e._4)},so=function(r){var e=r
return"RBEmpty_elm_builtin"===e.ctor?S.crash("can't make a Leaf red"):s(co,Yn,e._1,e._2,e._3,e._4)},po=function(r){var e=r
r:do{e:do{t:do{_:do{n:do{o:do{c:do{if("RBNode_elm_builtin"!==e.ctor)break r
if("RBNode_elm_builtin"===e._3.ctor)if("RBNode_elm_builtin"===e._4.ctor)switch(e._3._0.ctor){case"Red":switch(e._4._0.ctor){case"Red":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break c
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
if("RBNode_elm_builtin"===e._4._3.ctor&&"Red"===e._4._3._0.ctor)break n
if("RBNode_elm_builtin"===e._4._4.ctor&&"Red"===e._4._4._0.ctor)break _
break r
case"NBlack":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break c
if("RBNode_elm_builtin"===e._3._4.ctor&&"Red"===e._3._4._0.ctor)break o
if("BBlack"===e._0.ctor&&"RBNode_elm_builtin"===e._4._3.ctor&&"Black"===e._4._3._0.ctor&&"RBNode_elm_builtin"===e._4._4.ctor&&"Black"===e._4._4._0.ctor)break t
break r
default:if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break c
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
default:break r}}else switch(e._3._0.ctor){case"Red":if("RBNode_elm_builtin"===e._3._3.ctor&&"Red"===e._3._3._0.ctor)break c
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
return io(e._0)(e._3._3._1)(e._3._3._2)(e._3._1)(e._3._2)(e._1)(e._2)(e._3._3._3)(e._3._3._4)(e._3._4)(e._4)}while(!1)
return io(e._0)(e._3._1)(e._3._2)(e._3._4._1)(e._3._4._2)(e._1)(e._2)(e._3._3)(e._3._4._3)(e._3._4._4)(e._4)}while(!1)
return io(e._0)(e._1)(e._2)(e._4._3._1)(e._4._3._2)(e._4._1)(e._4._2)(e._3)(e._4._3._3)(e._4._3._4)(e._4._4)}while(!1)
return io(e._0)(e._1)(e._2)(e._4._1)(e._4._2)(e._4._4._1)(e._4._4._2)(e._3)(e._4._3)(e._4._4._3)(e._4._4._4)}while(!1)
return s(co,Kn,e._4._3._1,e._4._3._2,s(co,Kn,e._1,e._2,e._3,e._4._3._3),s(fo,Kn,e._4._1,e._4._2,e._4._3._4,so(e._4._4)))}while(!1)
return s(co,Kn,e._3._4._1,e._3._4._2,s(fo,Kn,e._3._1,e._3._2,so(e._3._3),e._3._4._3),s(co,Kn,e._1,e._2,e._3._4._4,e._4))}while(!1)
return r},fo=_(function(r,e,t,_,n){var o=s(co,r,e,t,_,n)
return Hn(o)?po(o):o}),vo=_(function(r,e,t,_,n){return Vn(_)||Vn(n)?s(fo,ro(r),e,t,ao(_),ao(n)):s(co,r,e,t,_,n)}),mo=_(function(r,e,t,_,n){var o=n
return"RBEmpty_elm_builtin"===o.ctor?i(go,r,_,n):s(vo,r,e,t,_,s(mo,o._0,o._1,o._2,o._3,o._4))}),go=e(function(r,e,t){var _={ctor:"_Tuple2",_0:e,_1:t}
if("RBEmpty_elm_builtin"!==_._0.ctor){if("RBEmpty_elm_builtin"===_._1.ctor){var n=_._1._0,o=_._0._0,c={ctor:"_Tuple3",_0:r,_1:o,_2:n}
return"_Tuple3"===c.ctor&&"Black"===c._0.ctor&&"Red"===c._1.ctor&&"LBlack"===c._2.ctor?s(co,Kn,_._0._1,_._0._2,_._0._3,_._0._4):l(Wn,"Black/Red/LBlack",r,N(o),N(n))}var u=_._0._2,a=_._0._4,p=_._0._1,f=s(mo,_._0._0,p,u,_._0._3,a),d=i(Fn,p,u,a)
return s(vo,r,d._0,d._1,f,t)}if("RBEmpty_elm_builtin"!==_._1.ctor){var v=_._1._0,m=_._0._0,g={ctor:"_Tuple3",_0:r,_1:m,_2:v}
return"_Tuple3"===g.ctor&&"Black"===g._0.ctor&&"LBlack"===g._1.ctor&&"Red"===g._2.ctor?s(co,Kn,_._1._1,_._1._2,_._1._3,_._1._4):l(Wn,"Black/LBlack/Red",r,N(m),N(v))}switch(r.ctor){case"Red":return no(_o)
case"Black":return no(to)
default:return S.crash("cannot have bblack or nblack nodes at this point")}}),ho=r(function(r,e){var t=e
if("RBEmpty_elm_builtin"===t.ctor)return no(_o)
var _=t._1
return s(co,t._0,_,a(r,_,t._2),a(ho,r,t._3),a(ho,r,t._4))}),To={ctor:"Same"},No={ctor:"Remove"},Io={ctor:"Insert"},bo=e(function(r,e,t){var _=function(t){var n=t
if("RBEmpty_elm_builtin"===n.ctor){var o=e(x)
return"Nothing"===o.ctor?{ctor:"_Tuple2",_0:To,_1:oo}:{ctor:"_Tuple2",_0:Io,_1:s(co,Yn,r,o._0,oo,oo)}}var c=n._2,u=n._4,l=n._3,p=n._1,f=n._0
switch(a(y,r,p).ctor){case"EQ":var d=e(P(c))
return"Nothing"===d.ctor?{ctor:"_Tuple2",_0:No,_1:i(go,f,l,u)}:{ctor:"_Tuple2",_0:To,_1:s(co,f,p,d._0,l,u)}
case"LT":var v=_(l),m=v._0,g=v._1
switch(m.ctor){case"Same":return{ctor:"_Tuple2",_0:To,_1:s(co,f,p,c,g,u)}
case"Insert":return{ctor:"_Tuple2",_0:Io,_1:s(fo,f,p,c,g,u)}
default:return{ctor:"_Tuple2",_0:No,_1:s(vo,f,p,c,g,u)}}default:var h=_(u),m=h._0,T=h._1
switch(m.ctor){case"Same":return{ctor:"_Tuple2",_0:To,_1:s(co,f,p,c,l,T)}
case"Insert":return{ctor:"_Tuple2",_0:Io,_1:s(fo,f,p,c,l,T)}
default:return{ctor:"_Tuple2",_0:No,_1:s(vo,f,p,c,l,T)}}}},n=_(t),o=n._0,c=n._1
switch(o.ctor){case"Same":return c
case"Insert":return uo(c)
default:return lo(c)}}),Jo=e(function(r,e,t){return i(bo,r,g(P(e)),t)}),wo=(r(function(r,e){return i(Jo,r,e,oo)}),r(function(r,e){return i(qn,Jo,e,r)}),r(function(r,t){return i(qn,e(function(e,t,_){return a(r,e,t)?i(Jo,e,t,_):_}),oo,t)})),ko=(r(function(e,t){return a(wo,r(function(r,e){return a($n,r,t)}),e)}),r(function(r,t){return i(qn,e(function(e,t,_){var n=_,o=n._1,c=n._0
return a(r,e,t)?{ctor:"_Tuple2",_0:i(Jo,e,t,c),_1:o}:{ctor:"_Tuple2",_0:c,_1:i(Jo,e,t,o)}}),{ctor:"_Tuple2",_0:oo,_1:oo},t)}),function(e){return i(Z,r(function(r,e){var t=r
return i(Jo,t._0,t._1,e)}),oo,e)}),yo=r(function(r,e){return i(bo,r,g(x),e)}),Eo=(r(function(r,t){return i(qn,e(function(r,e,t){return a(yo,r,t)}),r,t)}),function(r){var e=r
return{a:_e,x:_e,i1:ne,i2:ne,i3:ne,i4:ne,i5:ne,i6:ne,j:ne,p:0,mem:e._1,meta:e._0,symbolTable:e._2,reverseSymbolTable:e._3,overflow:fe,comparison:be}}),Ao=r(function(r,e){return a(C,_e,a(zn,r,e))}),Xo=r(function(e,t){var _=e,n=_._1,o=_._0
switch(_._2.ctor){case"LoadA":return v.update(t,{a:i(Pr,n,a(Ao,o,t.mem),t.a)})
case"LoadX":return v.update(t,{x:i(Pr,n,a(Ao,o,t.mem),t.x)})
case"LoadI1":return v.update(t,{i1:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i1)))})
case"LoadI2":return v.update(t,{i2:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i2)))})
case"LoadI3":return v.update(t,{i3:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i3)))})
case"LoadI4":return v.update(t,{i4:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i4)))})
case"LoadI5":return v.update(t,{i5:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i5)))})
case"LoadI6":return v.update(t,{i6:Mr(i(Pr,n,a(Ao,o,t.mem),oe(t.i6)))})
case"LoadANeg":return v.update(t,{a:i(Pr,n,Hr(a(Ao,o,t.mem)),t.a)})
case"LoadXNeg":return v.update(t,{x:i(Pr,n,Hr(a(Ao,o,t.mem)),t.x)})
case"LoadI1Neg":return v.update(t,{i1:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i1)))})
case"LoadI2Neg":return v.update(t,{i2:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i2)))})
case"LoadI3Neg":return v.update(t,{i3:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i3)))})
case"LoadI4Neg":return v.update(t,{i4:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i4)))})
case"LoadI5Neg":return v.update(t,{i5:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i5)))})
case"LoadI6Neg":return v.update(t,{i6:Mr(i(Pr,n,Hr(a(Ao,o,t.mem)),oe(t.i6)))})
case"StoreA":return v.update(t,{mem:i(Jo,o,i(Pr,n,t.a,a(Ao,o,t.mem)),t.mem)})
case"StoreX":return v.update(t,{mem:i(Jo,o,i(Pr,n,t.x,a(Ao,o,t.mem)),t.mem)})
case"StoreI1":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i1),a(Ao,o,t.mem)),t.mem)})
case"StoreI2":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i2),a(Ao,o,t.mem)),t.mem)})
case"StoreI3":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i3),a(Ao,o,t.mem)),t.mem)})
case"StoreI4":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i4),a(Ao,o,t.mem)),t.mem)})
case"StoreI5":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i5),a(Ao,o,t.mem)),t.mem)})
case"StoreI6":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.i6),a(Ao,o,t.mem)),t.mem)})
case"StoreJ":return v.update(t,{mem:i(Jo,o,i(Pr,n,oe(t.j),a(Ao,o,t.mem)),t.mem)})
case"StoreZero":return v.update(t,{mem:i(Jo,o,i(Pr,n,_e,a(Ao,o,t.mem)),t.mem)})
case"Add":var c=l(me,r(function(r,e){return r+e}),n,t.a,a(Ao,o,t.mem)),u=c._0,s=c._1
return v.update(t,{a:s,overflow:u})
case"Sub":var p=l(me,r(function(r,e){return r-e}),n,t.a,a(Ao,o,t.mem)),u=p._0,s=p._1
return v.update(t,{a:s,overflow:u})
case"AddX":var f=l(me,r(function(r,e){return r+e}),n,t.a,t.x),u=f._0,s=f._1
return v.update(t,{a:s,overflow:u})
case"SubX":var d=l(me,r(function(r,e){return r-e}),n,t.a,t.x),u=d._0,s=d._1
return v.update(t,{a:s,overflow:u})
case"EnterA":var m=a(ve,o,t.a),u=m._0,s=m._1
return v.update(t,{a:s,overflow:u})
case"EnterX":var g=a(ve,o,t.x),u=g._0,s=g._1
return v.update(t,{x:s,overflow:u})
case"EnterI1":var h=a(ge,o,t.i1),u=h._0,s=h._1
return v.update(t,{i1:s,overflow:u})
case"EnterI2":var T=a(ge,o,t.i2),u=T._0,s=T._1
return v.update(t,{i2:s,overflow:u})
case"EnterI3":var N=a(ge,o,t.i3),u=N._0,s=N._1
return v.update(t,{i3:s,overflow:u})
case"EnterI4":var I=a(ge,o,t.i4),u=I._0,s=I._1
return v.update(t,{i4:s,overflow:u})
case"EnterI5":var b=a(ge,o,t.i5),u=b._0,s=b._1
return v.update(t,{i5:s,overflow:u})
case"EnterI6":var J=a(ge,o,t.i6),u=J._0,s=J._1
return v.update(t,{i6:s,overflow:u})
case"EnterANeg":var w=a(ve,X(o),t.a),u=w._0,s=w._1
return v.update(t,{a:s,overflow:u})
case"EnterXNeg":var k=a(ve,X(o),t.x),u=k._0,s=k._1
return v.update(t,{x:s,overflow:u})
case"EnterI1Neg":var y=a(ge,X(o),t.i1),u=y._0,s=y._1
return v.update(t,{i1:s,overflow:u})
case"EnterI2Neg":var E=a(ge,X(o),t.i2),u=E._0,s=E._1
return v.update(t,{i2:s,overflow:u})
case"EnterI3Neg":var A=a(ge,X(o),t.i3),u=A._0,s=A._1
return v.update(t,{i3:s,overflow:u})
case"EnterI4Neg":var B=a(ge,X(o),t.i4),u=B._0,s=B._1
return v.update(t,{i4:s,overflow:u})
case"EnterI5Neg":var L=a(ge,X(o),t.i5),u=L._0,s=L._1
return v.update(t,{i5:s,overflow:u})
case"EnterI6Neg":var S=a(ge,X(o),t.i6),u=S._0,s=S._1
return v.update(t,{i6:s,overflow:u})
case"IncrementA":var C=a(ve,qr(t.a)+o,t.a),u=C._0,s=C._1
return v.update(t,{a:s,overflow:u})
case"IncrementX":var x=a(ve,qr(t.x)+o,t.x),u=x._0,s=x._1
return v.update(t,{x:s,overflow:u})
case"IncrementI1":var P=a(ge,Wr(t.i1)+o,t.i1),u=P._0,s=P._1
return v.update(t,{i1:s,overflow:u})
case"IncrementI2":var M=a(ge,Wr(t.i2)+o,t.i2),u=M._0,s=M._1
return v.update(t,{i2:s,overflow:u})
case"IncrementI3":var O=a(ge,Wr(t.i3)+o,t.i3),u=O._0,s=O._1
return v.update(t,{i3:s,overflow:u})
case"IncrementI4":var j=a(ge,Wr(t.i4)+o,t.i4),u=j._0,s=j._1
return v.update(t,{i4:s,overflow:u})
case"IncrementI5":var D=a(ge,Wr(t.i5)+o,t.i5),u=D._0,s=D._1
return v.update(t,{i5:s,overflow:u})
case"IncrementI6":var R=a(ge,Wr(t.i6)+o,t.i6),u=R._0,s=R._1
return v.update(t,{i6:s,overflow:u})
case"DecrementA":var Z=a(ve,qr(t.a)-o,t.a),u=Z._0,s=Z._1
return v.update(t,{a:s,overflow:u})
case"DecrementX":var q=a(ve,qr(t.x)-o,t.x),u=q._0,s=q._1
return v.update(t,{x:s,overflow:u})
case"DecrementI1":var W=a(ge,Wr(t.i1)-o,t.i1),u=W._0,s=W._1
return v.update(t,{i1:s,overflow:u})
case"DecrementI2":var V=a(ge,Wr(t.i2)-o,t.i2),u=V._0,s=V._1
return v.update(t,{i2:s,overflow:u})
case"DecrementI3":var U=a(ge,Wr(t.i3)-o,t.i3),u=U._0,s=U._1
return v.update(t,{i3:s,overflow:u})
case"DecrementI4":var z=a(ge,Wr(t.i4)-o,t.i4),u=z._0,s=z._1
return v.update(t,{i4:s,overflow:u})
case"DecrementI5":var $=a(ge,Wr(t.i5)-o,t.i5),u=$._0,s=$._1
return v.update(t,{i5:s,overflow:u})
case"DecrementI6":var F=a(ge,Wr(t.i6)-o,t.i6),u=F._0,s=F._1
return v.update(t,{i6:s,overflow:u})
case"CompareA":var G=i(we,n,t.a,a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareX":var G=i(we,n,t.x,a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI1":var G=i(we,n,oe(t.i1),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI2":var G=i(we,n,oe(t.i2),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI3":var G=i(we,n,oe(t.i3),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI4":var G=i(we,n,oe(t.i4),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI5":var G=i(we,n,oe(t.i5),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"CompareI6":var G=i(we,n,oe(t.i6),a(Ao,o,t.mem))
return v.update(t,{comparison:G})
case"Jump":var Q=a(ge,t.p,t.j),u=Q._0,K=Q._1
return v.update(t,{p:o,j:K})
case"JumpSaveJ":return v.update(t,{p:o})
case"JumpOnOverflow":if(v.eq(t.overflow,de)){var H=a(ge,t.p,t.j),u=H._0,K=H._1
return v.update(t,{p:o,j:K,overflow:fe})}return t
case"JumpOnNoOverflow":if(v.eq(t.overflow,fe)){var Y=a(ge,t.p,t.j),u=Y._0,K=Y._1
return v.update(t,{p:o,j:K})}return v.update(t,{overflow:fe})
case"JumpOnLess":if(v.eq(t.comparison,Je)){var rr=a(ge,t.p,t.j),u=rr._0,K=rr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnEqual":if(v.eq(t.comparison,be)){var er=a(ge,t.p,t.j),u=er._0,K=er._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnGreater":if(v.eq(t.comparison,Ie)){var tr=a(ge,t.p,t.j),u=tr._0,K=tr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnGreaterEqual":if(v.eq(t.comparison,Ie)||v.eq(t.comparison,be)){var _r=a(ge,t.p,t.j),u=_r._0,K=_r._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnUnEqual":if(v.eq(t.comparison,Je)||v.eq(t.comparison,Ie)){var nr=a(ge,t.p,t.j),u=nr._0,K=nr._1
return v.update(t,{p:o,j:K})}return t
case"JumpOnLessEqual":if(v.eq(t.comparison,Je)||v.eq(t.comparison,be)){var or=a(ge,t.p,t.j),u=or._0,K=or._1
return v.update(t,{p:o,j:K})}return t
case"JumpANegative":if(v.cmp(qr(t.a),0)<0){var cr=a(ge,t.p,t.j),u=cr._0,K=cr._1
return v.update(t,{p:o,j:K})}return t
case"JumpAZero":if(v.eq(qr(t.a),0)){var ur=a(ge,t.p,t.j),u=ur._0,K=ur._1
return v.update(t,{p:o,j:K})}return t
case"JumpAPositive":if(v.cmp(qr(t.a),0)>0){var ar=a(ge,t.p,t.j),u=ar._0,K=ar._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonNegative":if(v.cmp(qr(t.a),0)>0||v.eq(qr(t.a),0)){var ir=a(ge,t.p,t.j),u=ir._0,K=ir._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonZero":if(v.cmp(qr(t.a),0)<0||v.cmp(qr(t.a),0)>0){var lr=a(ge,t.p,t.j),u=lr._0,K=lr._1
return v.update(t,{p:o,j:K})}return t
case"JumpANonPositive":if(v.cmp(qr(t.a),0)<0||v.eq(qr(t.a),0)){var sr=a(ge,t.p,t.j),u=sr._0,K=sr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNegative":if(v.cmp(qr(t.x),0)<0){var pr=a(ge,t.p,t.j),u=pr._0,K=pr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXZero":if(v.eq(qr(t.x),0)){var fr=a(ge,t.p,t.j),u=fr._0,K=fr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXPositive":if(v.cmp(qr(t.x),0)>0){var dr=a(ge,t.p,t.j),u=dr._0,K=dr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonNegative":if(v.cmp(qr(t.x),0)>0||v.eq(qr(t.x),0)){var vr=a(ge,t.p,t.j),u=vr._0,K=vr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonZero":if(v.cmp(qr(t.x),0)<0||v.cmp(qr(t.x),0)>0){var mr=a(ge,t.p,t.j),u=mr._0,K=mr._1
return v.update(t,{p:o,j:K})}return t
case"JumpXNonPositive":if(v.cmp(qr(t.x),0)<0||v.eq(qr(t.x),0)){var gr=a(ge,t.p,t.j),u=gr._0,K=gr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Negative":if(v.cmp(Wr(t.i1),0)<0){var hr=a(ge,t.p,t.j),u=hr._0,K=hr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Zero":if(v.eq(Wr(t.i1),0)){var Tr=a(ge,t.p,t.j),u=Tr._0,K=Tr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1Positive":if(v.cmp(Wr(t.i1),0)>0){var Nr=a(ge,t.p,t.j),u=Nr._0,K=Nr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonNegative":if(v.cmp(Wr(t.i1),0)>0||v.eq(Wr(t.i1),0)){var Ir=a(ge,t.p,t.j),u=Ir._0,K=Ir._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonZero":if(v.cmp(Wr(t.i1),0)<0||v.cmp(Wr(t.i1),0)>0){var br=a(ge,t.p,t.j),u=br._0,K=br._1
return v.update(t,{p:o,j:K})}return t
case"JumpI1NonPositive":if(v.cmp(Wr(t.i1),0)<0||v.eq(Wr(t.i1),0)){var Jr=a(ge,t.p,t.j),u=Jr._0,K=Jr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Negative":if(v.cmp(Wr(t.i2),0)<0){var wr=a(ge,t.p,t.j),u=wr._0,K=wr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Zero":if(v.eq(Wr(t.i2),0)){var kr=a(ge,t.p,t.j),u=kr._0,K=kr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2Positive":if(v.cmp(Wr(t.i2),0)>0){var yr=a(ge,t.p,t.j),u=yr._0,K=yr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonNegative":if(v.cmp(Wr(t.i2),0)>0||v.eq(Wr(t.i2),0)){var Er=a(ge,t.p,t.j),u=Er._0,K=Er._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonZero":if(v.cmp(Wr(t.i2),0)<0||v.cmp(Wr(t.i2),0)>0){var Ar=a(ge,t.p,t.j),u=Ar._0,K=Ar._1
return v.update(t,{p:o,j:K})}return t
case"JumpI2NonPositive":if(v.cmp(Wr(t.i2),0)<0||v.eq(Wr(t.i2),0)){var Xr=a(ge,t.p,t.j),u=Xr._0,K=Xr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Negative":if(v.cmp(Wr(t.i3),0)<0){var Br=a(ge,t.p,t.j),u=Br._0,K=Br._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Zero":if(v.eq(Wr(t.i3),0)){var Lr=a(ge,t.p,t.j),u=Lr._0,K=Lr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3Positive":if(v.cmp(Wr(t.i3),0)>0){var Sr=a(ge,t.p,t.j),u=Sr._0,K=Sr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonNegative":if(v.cmp(Wr(t.i3),0)>0||v.eq(Wr(t.i3),0)){var Cr=a(ge,t.p,t.j),u=Cr._0,K=Cr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonZero":if(v.cmp(Wr(t.i3),0)<0||v.cmp(Wr(t.i3),0)>0){var xr=a(ge,t.p,t.j),u=xr._0,K=xr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI3NonPositive":if(v.cmp(Wr(t.i3),0)<0||v.eq(Wr(t.i3),0)){var Or=a(ge,t.p,t.j),u=Or._0,K=Or._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Negative":if(v.cmp(Wr(t.i4),0)<0){var jr=a(ge,t.p,t.j),u=jr._0,K=jr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Zero":if(v.eq(Wr(t.i4),0)){var Dr=a(ge,t.p,t.j),u=Dr._0,K=Dr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4Positive":if(v.cmp(Wr(t.i4),0)>0){var Rr=a(ge,t.p,t.j),u=Rr._0,K=Rr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonNegative":if(v.cmp(Wr(t.i4),0)>0||v.eq(Wr(t.i4),0)){var Zr=a(ge,t.p,t.j),u=Zr._0,K=Zr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonZero":if(v.cmp(Wr(t.i4),0)<0||v.cmp(Wr(t.i4),0)>0){var Vr=a(ge,t.p,t.j),u=Vr._0,K=Vr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI4NonPositive":if(v.cmp(Wr(t.i4),0)<0||v.eq(Wr(t.i4),0)){var Ur=a(ge,t.p,t.j),u=Ur._0,K=Ur._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Negative":if(v.cmp(Wr(t.i5),0)<0){var zr=a(ge,t.p,t.j),u=zr._0,K=zr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Zero":if(v.eq(Wr(t.i5),0)){var $r=a(ge,t.p,t.j),u=$r._0,K=$r._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5Positive":if(v.cmp(Wr(t.i5),0)>0){var Fr=a(ge,t.p,t.j),u=Fr._0,K=Fr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonNegative":if(v.cmp(Wr(t.i5),0)>0||v.eq(Wr(t.i5),0)){var Gr=a(ge,t.p,t.j),u=Gr._0,K=Gr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonZero":if(v.cmp(Wr(t.i5),0)<0||v.cmp(Wr(t.i5),0)>0){var Qr=a(ge,t.p,t.j),u=Qr._0,K=Qr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI5NonPositive":if(v.cmp(Wr(t.i5),0)<0||v.eq(Wr(t.i5),0)){var Kr=a(ge,t.p,t.j),u=Kr._0,K=Kr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Negative":if(v.cmp(Wr(t.i6),0)<0){var Yr=a(ge,t.p,t.j),u=Yr._0,K=Yr._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Zero":if(v.eq(Wr(t.i6),0)){var re=a(ge,t.p,t.j),u=re._0,K=re._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6Positive":if(v.cmp(Wr(t.i6),0)>0){var ee=a(ge,t.p,t.j),u=ee._0,K=ee._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonNegative":if(v.cmp(Wr(t.i6),0)>0||v.eq(Wr(t.i6),0)){var te=a(ge,t.p,t.j),u=te._0,K=te._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonZero":if(v.cmp(Wr(t.i6),0)<0||v.cmp(Wr(t.i6),0)>0){var ne=a(ge,t.p,t.j),u=ne._0,K=ne._1
return v.update(t,{p:o,j:K})}return t
case"JumpI6NonPositive":if(v.cmp(Wr(t.i6),0)<0||v.eq(Wr(t.i6),0)){var ae=a(ge,t.p,t.j),u=ae._0,K=ae._1
return v.update(t,{p:o,j:K})}return t
case"ShiftA":return v.update(t,{a:a(ce,o,t.a)})
case"ShiftX":return v.update(t,{x:a(ce,o,t.x)})
case"ShiftACircular":return v.update(t,{a:a(ue,o,t.a)})
case"ShiftXCircular":return v.update(t,{x:a(ue,o,t.x)})
case"SwapAX":return v.update(t,{a:t.x,x:t.a})
case"MoveXI1":return v.update(t,{i1:Mr(t.x)})
case"MoveXI2":return v.update(t,{i2:Mr(t.x)})
case"MoveXI3":return v.update(t,{i3:Mr(t.x)})
case"MoveXI4":return v.update(t,{i4:Mr(t.x)})
case"MoveXI5":return v.update(t,{i5:Mr(t.x)})
case"MoveXI6":return v.update(t,{i6:Mr(t.x)})
case"MoveI1X":return v.update(t,{x:oe(t.i1)})
case"MoveI2X":return v.update(t,{x:oe(t.i2)})
case"MoveI3X":return v.update(t,{x:oe(t.i3)})
case"MoveI4X":return v.update(t,{x:oe(t.i4)})
case"MoveI5X":return v.update(t,{x:oe(t.i5)})
case"MoveI6X":return v.update(t,{x:oe(t.i6)})
case"MoveJX":return v.update(t,{x:oe(t.j)})
case"NoOperation":return t
default:return t}}),Bo={ctor:"Instruction"},Lo={ctor:"Number"},So=r(function(r,e){return a(C,Lo,a(zn,r,e))}),Co=function(r){var e=r,t=e._0,_=e._1
return"DataNumber"===_.ctor?{ctor:"_Tuple2",_0:{ctor:"_Tuple2",_0:t,_1:br(a(ve,_._0,_e))},_1:{ctor:"_Tuple2",_0:t,_1:Lo}}:{ctor:"_Tuple2",_0:{ctor:"_Tuple2",_0:t,_1:Ne(xe(_._0))},_1:{ctor:"_Tuple2",_0:t,_1:Bo}}},xo=function(r){var e=ko(a(z,function(r){return Jr(Co(r))},r))
return{ctor:"_Tuple2",_0:ko(a(z,function(r){return br(Co(r))},r)),_1:e}},Po=Po||{}
Po["<*>"]=r(function(r,e){return function(t){var _=r(t)
if("Err"===_.ctor)return cr(_._0)
var n=e(_._0._0)
return"Err"===n.ctor?cr(n._0):ur({ctor:"_Tuple2",_0:n._0._0,_1:_._0._1(n._0._1)})}})
var Mo=function(r){return function(e){return cr(r)}},Oo=function(r){return function(e){return ur({ctor:"_Tuple2",_0:r,_1:{ctor:"_Tuple0"}})}},jo=function(){return function(r){return ur({ctor:"_Tuple2",_0:r,_1:r})}}(),Do=function(r){return function(e){return ur({ctor:"_Tuple2",_0:e,_1:r})}},Po=Po||{}
Po["<$>"]=r(function(r,e){return a(Po["<*>"],Do(r),e)})
var Ro=e(function(r,e,t){return a(Po["<*>"],a(Po["<$>"],r,e),t)}),Po=Po||{}
Po["<*"]=r(function(e,t){return i(Ro,r(function(r,e){return r}),e,t)})
var Po=Po||{}
Po["*>"]=r(function(e,t){return i(Ro,r(function(r,e){return e}),e,t)})
var Zo=t(function(r,e,t,_){return a(Po["<*>"],a(Po["<*>"],a(Po["<$>"],r,e),t),_)}),qo=(_(function(r,e,t,_,n){return a(Po["<*>"],a(Po["<*>"],a(Po["<*>"],a(Po["<$>"],r,e),t),_),n)}),n(function(r,e,t,_,n,o){return a(Po["<*>"],a(Po["<*>"],a(Po["<*>"],a(Po["<*>"],a(Po["<$>"],r,e),t),_),n),o)})),Wo=r(function(r,e){return function(t){var _=r(t)
return"Err"===_.ctor?e(t):ur({ctor:"_Tuple2",_0:_._0._0,_1:_._0._1})}}),Po=Po||{}
Po[">>="]=r(function(r,e){return function(t){var _=r(t)
return"Err"===_.ctor?cr(_._0):a(e,_._0._1,_._0._0)}})
var Vo,Uo=function(){function _(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function n(r){return new RegExp(r.source,"gi")}function o(r){return new RegExp(r,"g")}function c(r,e){return null!==e.match(r)}function u(r,e,t){r="All"===r.ctor?1/0:r._0
for(var _,n=[],o=0,c=t,u=e.lastIndex,a=-1;o++<r&&(_=e.exec(c))&&a!==e.lastIndex;){for(var i=_.length-1,l=new Array(i);i>0;){var s=_[i]
l[--i]=void 0===s?x:P(s)}n.push({match:_[0],submatches:M.fromArray(l),index:_.index,number:o}),a=e.lastIndex}return e.lastIndex=u,M.fromArray(n)}function a(r,e,t,_){function n(e){if(o++>=r)return e
for(var _=arguments.length-3,n=new Array(_);_>0;){var c=arguments[_]
n[--_]=void 0===c?x:P(c)}return t({match:e,submatches:M.fromArray(n),index:arguments[arguments.length-2],number:o})}r="All"===r.ctor?1/0:r._0
var o=0
return _.replace(e,n)}function i(r,e,t){if((r="All"===r.ctor?1/0:r._0)===1/0)return M.fromArray(t.split(e))
for(var _,n=t,o=[],c=e.lastIndex,u=e.lastIndex;r--&&(_=e.exec(n));)o.push(n.slice(c,_.index)),c=e.lastIndex
return o.push(n.slice(c)),e.lastIndex=u,M.fromArray(o)}return{regex:o,caseInsensitive:n,escape:_,contains:r(c),find:e(u),replace:t(a),split:e(i)}}(),zo=(Uo.split,Uo.replace,Uo.find),$o=(Uo.contains,Uo.caseInsensitive,Uo.regex),Fo=(Uo.escape,t(function(r,e,t,_){return{match:r,submatches:e,index:t,number:_}}),function(r){return{ctor:"AtMost",_0:r}}),Go=function(r){var e=r
return"::"!==e.ctor||"Comment"!==e._0.ctor},Qo=function(r){for(;;){var e=r
if("[]"===e.ctor)return{ctor:"[]"}
var t=e._1,_=e._0
if("Just"===_.ctor)return{ctor:"::",_0:_._0,_1:Qo(t)}
r=t}},Ko=function(r){return"[]"===r.ctor?x:P(r)},Ho={ctor:"StringEmpty"},Yo={ctor:"NoMatch"},rc=r(function(r,e){if(Nr(e))return cr(Ho)
var t=i(zo,Fo(1),r,e)
if("[]"===t.ctor)return cr(Yo)
var _=t._0,n=function(r){return r.index}(_),o=function(r){return r.match}(_)
return v.eq(n,0)?ur({ctor:"_Tuple2",_0:a(vr,gr(o),e),_1:o}):cr(Yo)}),ec={ctor:"RightBracket"},tc=a(Po["<*"],Do(ec),rc($o("\\]"))),_c={ctor:"LeftBracket"},nc=a(Po["<*"],Do(_c),rc($o("\\["))),oc=function(r){return{ctor:"SchemaTag",_0:r}},cc=r(function(r,e){return a(Po["<*"],Do(oc(r)),rc($o(e)))}),uc=a(cc,Se,"BBBBB"),ac=a(cc,Le,"WBBB"),ic=a(cc,Be,"BWBB"),lc=a(cc,Xe,"BBWB"),sc=a(cc,Ae,"BBBW"),pc=a(cc,Ee,"WWB"),fc=a(cc,ye,"WBW"),dc=a(cc,ke,"BWW"),vc=function(r){return{ctor:"Comment",_0:r}},mc=a(Po["<$>"],function(r){return vc(a(vr,1,r))},rc($o("#(.)*"))),gc=function(r){return{ctor:"IndexTag",_0:r}},hc=a(Po["<$>"],function(r){return gc(a(or,0,fr(a(vr,1,r))))},rc($o("[+][0-9]+"))),Tc=function(r){return{ctor:"MaskTag",_0:r}},Nc=a(Po["<$>"],function(r){return Tc(a(or,0,fr(a(vr,1,r))))},rc($o("[/][0-9]+"))),Ic=function(r){return{ctor:"LabelTag",_0:r}},bc=a(Po["<$>"],function(r){return Ic(a(vr,1,r))},rc($o("[:][a-z]([a-z]|_)*"))),Jc=function(r){return{ctor:"RelativeTag",_0:r}},wc=a(Po["<$>"],function(r){return function(r){return Jc(Me(r))}(a(or,0,fr(r)))},rc($o("-?[0-9]+"))),kc=a(Po["<$>"],function(r){return Jc(Oe(r))},rc($o("[a-z]([a-z]|_)*"))),yc=a(Wo,wc,kc),Ec=function(r){return{ctor:"InstructionTag",_0:r}},Ac=r(function(r,e){return a(Po["<*"],Do(Ec(r)),rc($o(e)))}),Xc=i(Z,Wo,a(Ac,je,"HLT"),{ctor:"::",_0:a(Ac,wn,"LDA"),_1:{ctor:"::",_0:a(Ac,Jn,"LDX"),_1:{ctor:"::",_0:a(Ac,bn,"LD1"),_1:{ctor:"::",_0:a(Ac,In,"LD2"),_1:{ctor:"::",_0:a(Ac,Nn,"LD3"),_1:{ctor:"::",_0:a(Ac,Tn,"LD4"),_1:{ctor:"::",_0:a(Ac,hn,"LD5"),_1:{ctor:"::",_0:a(Ac,gn,"LD6"),_1:{ctor:"::",_0:a(Ac,mn,"LDAN"),_1:{ctor:"::",_0:a(Ac,vn,"LDXN"),_1:{ctor:"::",_0:a(Ac,dn,"LD1N"),_1:{ctor:"::",_0:a(Ac,fn,"LD2N"),_1:{ctor:"::",_0:a(Ac,pn,"LD3N"),_1:{ctor:"::",_0:a(Ac,sn,"LD4N"),_1:{ctor:"::",_0:a(Ac,ln,"LD5N"),_1:{ctor:"::",_0:a(Ac,an,"LD6N"),_1:{ctor:"::",_0:a(Ac,un,"STA"),_1:{ctor:"::",_0:a(Ac,cn,"STX"),_1:{ctor:"::",_0:a(Ac,on,"ST1"),_1:{ctor:"::",_0:a(Ac,nn,"ST2"),_1:{ctor:"::",_0:a(Ac,_n,"ST3"),_1:{ctor:"::",_0:a(Ac,tn,"ST4"),_1:{ctor:"::",_0:a(Ac,en,"ST5"),_1:{ctor:"::",_0:a(Ac,rn,"ST6"),_1:{ctor:"::",_0:a(Ac,Y_,"STJ"),_1:{ctor:"::",_0:a(Ac,H_,"STZ"),_1:{ctor:"::",_0:a(Ac,K_,"ADD"),_1:{ctor:"::",_0:a(Ac,Q_,"SUB"),_1:{ctor:"::",_0:a(Ac,G_,"ADDX"),_1:{ctor:"::",_0:a(Ac,F_,"SUBX"),_1:{ctor:"::",_0:a(Ac,$_,"ENTA"),_1:{ctor:"::",_0:a(Ac,z_,"ENTX"),_1:{ctor:"::",_0:a(Ac,U_,"ENT1"),_1:{ctor:"::",_0:a(Ac,V_,"ENT2"),_1:{ctor:"::",_0:a(Ac,W_,"ENT3"),_1:{ctor:"::",_0:a(Ac,q_,"ENT4"),_1:{ctor:"::",_0:a(Ac,Z_,"ENT5"),_1:{ctor:"::",_0:a(Ac,R_,"ENT6"),_1:{ctor:"::",_0:a(Ac,D_,"ENNA"),_1:{ctor:"::",_0:a(Ac,j_,"ENNX"),_1:{ctor:"::",_0:a(Ac,O_,"ENN1"),_1:{ctor:"::",_0:a(Ac,M_,"ENN2"),_1:{ctor:"::",_0:a(Ac,P_,"ENN3"),_1:{ctor:"::",_0:a(Ac,x_,"ENN4"),_1:{ctor:"::",_0:a(Ac,C_,"ENN5"),_1:{ctor:"::",_0:a(Ac,S_,"ENN6"),_1:{ctor:"::",_0:a(Ac,L_,"INCA"),_1:{ctor:"::",_0:a(Ac,B_,"INCX"),_1:{ctor:"::",_0:a(Ac,X_,"INC1"),_1:{ctor:"::",_0:a(Ac,A_,"INC2"),_1:{ctor:"::",_0:a(Ac,E_,"INC3"),_1:{ctor:"::",_0:a(Ac,y_,"INC4"),_1:{ctor:"::",_0:a(Ac,k_,"INC5"),_1:{ctor:"::",_0:a(Ac,w_,"INC6"),_1:{ctor:"::",_0:a(Ac,J_,"DECA"),_1:{ctor:"::",_0:a(Ac,b_,"DECX"),_1:{ctor:"::",_0:a(Ac,I_,"DEC1"),_1:{ctor:"::",_0:a(Ac,N_,"DEC2"),_1:{ctor:"::",_0:a(Ac,T_,"DEC3"),_1:{ctor:"::",_0:a(Ac,h_,"DEC4"),_1:{ctor:"::",_0:a(Ac,g_,"DEC5"),_1:{ctor:"::",_0:a(Ac,m_,"DEC6"),_1:{ctor:"::",_0:a(Ac,v_,"CMPA"),_1:{ctor:"::",_0:a(Ac,d_,"CMPX"),_1:{ctor:"::",_0:a(Ac,f_,"CMP1"),_1:{ctor:"::",_0:a(Ac,p_,"CMP2"),_1:{ctor:"::",_0:a(Ac,s_,"CMP3"),_1:{ctor:"::",_0:a(Ac,l_,"CMP4"),_1:{ctor:"::",_0:a(Ac,i_,"CMP5"),_1:{ctor:"::",_0:a(Ac,a_,"CMP6"),_1:{ctor:"::",_0:a(Ac,u_,"JMP"),_1:{ctor:"::",_0:a(Ac,c_,"JSJ"),_1:{ctor:"::",_0:a(Ac,o_,"JOV"),_1:{ctor:"::",_0:a(Ac,n_,"JNOV"),_1:{ctor:"::",_0:a(Ac,__,"JL"),_1:{ctor:"::",_0:a(Ac,t_,"JE"),_1:{ctor:"::",_0:a(Ac,e_,"JG"),_1:{ctor:"::",_0:a(Ac,r_,"JGE"),_1:{ctor:"::",_0:a(Ac,Yt,"JNE"),_1:{ctor:"::",_0:a(Ac,Ht,"JLE"),_1:{ctor:"::",_0:a(Ac,Kt,"JAN"),_1:{ctor:"::",_0:a(Ac,Qt,"JAZ"),_1:{ctor:"::",_0:a(Ac,Gt,"JAP"),_1:{ctor:"::",_0:a(Ac,Ft,"JANN"),_1:{ctor:"::",_0:a(Ac,$t,"JANZ"),_1:{ctor:"::",_0:a(Ac,zt,"JANP"),_1:{ctor:"::",_0:a(Ac,Ut,"JXN"),_1:{ctor:"::",_0:a(Ac,Vt,"JXZ"),_1:{ctor:"::",_0:a(Ac,Wt,"JXP"),_1:{ctor:"::",_0:a(Ac,qt,"JXNN"),_1:{ctor:"::",_0:a(Ac,Zt,"JXNZ"),_1:{ctor:"::",_0:a(Ac,Rt,"JXNP"),_1:{ctor:"::",_0:a(Ac,Dt,"J1N"),_1:{ctor:"::",_0:a(Ac,jt,"J1Z"),_1:{ctor:"::",_0:a(Ac,Ot,"J1P"),_1:{ctor:"::",_0:a(Ac,Mt,"J1NN"),_1:{ctor:"::",_0:a(Ac,Pt,"J1NZ"),_1:{ctor:"::",_0:a(Ac,xt,"J1NP"),_1:{ctor:"::",_0:a(Ac,Ct,"J2N"),_1:{ctor:"::",_0:a(Ac,St,"J2Z"),_1:{ctor:"::",_0:a(Ac,Lt,"J2P"),_1:{ctor:"::",_0:a(Ac,Bt,"J2NN"),_1:{ctor:"::",_0:a(Ac,Xt,"J2NZ"),_1:{ctor:"::",_0:a(Ac,At,"J2NP"),_1:{ctor:"::",_0:a(Ac,Et,"J3N"),_1:{ctor:"::",_0:a(Ac,yt,"J3Z"),_1:{ctor:"::",_0:a(Ac,kt,"J3P"),_1:{ctor:"::",_0:a(Ac,wt,"J3NN"),_1:{ctor:"::",_0:a(Ac,Jt,"J3NZ"),_1:{ctor:"::",_0:a(Ac,bt,"J3NP"),_1:{ctor:"::",_0:a(Ac,It,"J4N"),_1:{ctor:"::",_0:a(Ac,Nt,"J4Z"),_1:{ctor:"::",_0:a(Ac,Tt,"J4P"),_1:{ctor:"::",_0:a(Ac,ht,"J4NN"),_1:{ctor:"::",_0:a(Ac,gt,"J4NZ"),_1:{ctor:"::",_0:a(Ac,mt,"J4NP"),_1:{ctor:"::",_0:a(Ac,vt,"J5N"),_1:{ctor:"::",_0:a(Ac,dt,"J5Z"),_1:{ctor:"::",_0:a(Ac,ft,"J5P"),_1:{ctor:"::",_0:a(Ac,pt,"J5NN"),_1:{ctor:"::",_0:a(Ac,st,"J5NZ"),_1:{ctor:"::",_0:a(Ac,lt,"J5NP"),_1:{ctor:"::",_0:a(Ac,it,"J6N"),_1:{ctor:"::",_0:a(Ac,at,"J6Z"),_1:{ctor:"::",_0:a(Ac,ut,"J6P"),_1:{ctor:"::",_0:a(Ac,ct,"J6NN"),_1:{ctor:"::",_0:a(Ac,ot,"J6NZ"),_1:{ctor:"::",_0:a(Ac,nt,"J6NP"),_1:{ctor:"::",_0:a(Ac,_t,"SA"),_1:{ctor:"::",_0:a(Ac,tt,"SX"),_1:{ctor:"::",_0:a(Ac,et,"SAC"),_1:{ctor:"::",_0:a(Ac,rt,"SAX"),_1:{ctor:"::",_0:a(Ac,Ye,"SWAP"),_1:{ctor:"::",_0:a(Ac,He,"MOVX1"),_1:{ctor:"::",_0:a(Ac,Ke,"MOVX2"),_1:{ctor:"::",_0:a(Ac,Qe,"MOVX3"),_1:{ctor:"::",_0:a(Ac,Ge,"MOVX4"),_1:{ctor:"::",_0:a(Ac,Fe,"MOVX5"),_1:{ctor:"::",_0:a(Ac,$e,"MOVX6"),_1:{ctor:"::",_0:a(Ac,ze,"MOV1X"),_1:{ctor:"::",_0:a(Ac,Ue,"MOV2X"),_1:{ctor:"::",_0:a(Ac,Ve,"MOV3X"),_1:{ctor:"::",_0:a(Ac,We,"MOV4X"),_1:{ctor:"::",_0:a(Ac,qe,"MOV5X"),_1:{ctor:"::",_0:a(Ac,Ze,"MOV6X"),_1:{ctor:"::",_0:a(Ac,Re,"MOVJX"),_1:{ctor:"::",_0:a(Ac,De,"NOP"),_1:{ctor:"[]"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}),Bc=i(Z,Wo,Xc,{ctor:"::",_0:yc,_1:{ctor:"::",_0:bc,_1:{ctor:"::",_0:Nc,_1:{ctor:"::",_0:hc,_1:{ctor:"::",_0:mc,_1:{ctor:"::",_0:uc,_1:{ctor:"::",_0:ac,_1:{ctor:"::",_0:ic,_1:{ctor:"::",_0:lc,_1:{ctor:"::",_0:sc,_1:{ctor:"::",_0:pc,_1:{ctor:"::",_0:fc,_1:{ctor:"::",_0:dc,_1:{ctor:"::",_0:nc,_1:{ctor:"::",_0:tc,_1:{ctor:"[]"}}}}}}}}}}}}}}}}),Lc=function(r){for(;;){var e=Bc(r)
if("Ok"===e.ctor)return{ctor:"::",_0:e._0._1,_1:Lc(e._0._0)}
{if("NoMatch"!==e._0.ctor)return{ctor:"[]"}
var t=Tr(r)
if("Nothing"===t.ctor)return{ctor:"[]"}
r=t._0._1}}},Sc=function(r){return a($,Go,Qo(a(z,function(r){return Ko(Lc(r))},dr(r))))},Cc=e(function(r,e,t){return P(a(Mn,r,Pn(a(Bn,e,t))))}),xc=r(function(r,e){return P(a(Mn,r,Pn(Ln(e))))}),Pc=_(function(r,e,t,_,n){return P(a(Mn,r,xn({ctor:"_Tuple4",_0:_,_1:n,_2:e,_3:t})))}),Mc=function(r){return{ctor:"UnexpectedToken",_0:r}},Oc=function(r){var e=r
return"[]"===e.ctor?Do({ctor:"_Tuple0"}):Mo(Mc(e._0))},jc=function(r){var e=r
return"LabelTag"===e.ctor?Do(e._0):Mo(Mc(r))},Dc=function(r){var e=r
return"MaskTag"===e.ctor?Do(function(r){return se(ee(r))}(e._0)):Mo(Mc(r))},Rc=function(r){var e=r
return"InstructionTag"===e.ctor?Do(e._0):Mo(Mc(r))},Zc=function(r){var e=r
return"RelativeTag"===e.ctor?Do(e._0):Mo(Mc(r))},qc=function(r){var e=r
return"IndexTag"===e.ctor?Do(e._0):Mo(Mc(r))},Wc=function(r){var e=r
return"Comment"===e.ctor?Do(e._0):Mo(Mc(r))},Vc=function(r){var e=r
return"SchemaTag"===e.ctor?Do(e._0):Mo(Mc(r))},Uc=function(r){return"LeftBracket"===r.ctor?Do({ctor:"_Tuple0"}):Mo(Mc(r))},zc=function(r){return"RightBracket"===r.ctor?Do({ctor:"_Tuple0"}):Mo(Mc(r))},$c={ctor:"EndOfStream"},Fc=function(r){var e=r
return"[]"===e.ctor?Mo($c):a(Po["<*"],Do(e._0),Oo(e._1))},Gc=a(Po["<*"],a(Po["<*"],function(r,e,t,_,n,o,c){return 6===r.arity?r.func(e,t,_,n,o,c):r(e)(t)(_)(n)(o)(c)}(qo,Pc,a(Wo,a(Po["<$>"],P,a(Po[">>="],a(Po[">>="],jo,Fc),jc)),Do(x)),a(Wo,a(Po[">>="],a(Po[">>="],jo,Fc),Dc),Do(function(r){return se(ee(0))}())),a(Po[">>="],a(Po[">>="],jo,Fc),Rc),a(Wo,a(Po[">>="],a(Po[">>="],jo,Fc),Zc),Do(Me(0))),a(Wo,a(Po[">>="],a(Po[">>="],jo,Fc),qc),Do(0))),a(Wo,a(Po["*>"],a(Po[">>="],a(Po[">>="],jo,Fc),Wc),Do({ctor:"_Tuple0"})),Do({ctor:"_Tuple0"}))),a(Po[">>="],jo,Oc)),Qc=a(Po["<*"],a(Po["<*"],i(Ro,xc,a(Wo,a(Po["<$>"],P,a(Po[">>="],a(Po[">>="],jo,Fc),jc)),Do(x)),a(Wo,a(Po[">>="],a(Po[">>="],jo,Fc),Zc),Do(Me(0)))),a(Wo,a(Po["*>"],a(Po[">>="],a(Po[">>="],jo,Fc),Wc),Do({ctor:"_Tuple0"})),Do({ctor:"_Tuple0"}))),a(Po[">>="],jo,Oc)),Kc=a(Po["<*"],a(Po["<*"],l(Zo,Cc,a(Wo,a(Po["<$>"],P,a(Po[">>="],a(Po[">>="],jo,Fc),jc)),Do(x)),a(Po[">>="],a(Po[">>="],jo,Fc),Vc),a(Po["<*"],a(Po["*>"],a(Po[">>="],a(Po[">>="],jo,Fc),Uc),function(e){var t=function(_){var n=e(_)
return"Ok"===n.ctor?a(function(r){return ar(Ir(r))},r(function(r,e){return{ctor:"::",_0:r,_1:e}})(n._0._1),t(n._0._0)):ur({ctor:"_Tuple2",_0:_,_1:{ctor:"[]"}})}
return t}(a(Po[">>="],a(Po[">>="],jo,Fc),Zc))),a(Po[">>="],a(Po[">>="],jo,Fc),zc))),a(Wo,a(Po["*>"],a(Po[">>="],a(Po[">>="],jo,Fc),Wc),Do({ctor:"_Tuple0"})),Do({ctor:"_Tuple0"}))),a(Po[">>="],jo,Oc)),Hc=a(Po["*>"],a(Po["*>"],a(Po[">>="],a(Po[">>="],jo,Fc),Wc),a(Po[">>="],jo,Oc)),Do(x)),Yc=i(Z,Wo,Gc,{ctor:"::",_0:Qc,_1:{ctor:"::",_0:Kc,_1:{ctor:"::",_0:Hc,_1:{ctor:"[]"}}}}),ru=function(r){return a(ar,br,Yc(r))},eu=function(r){return a(ar,Qo,Fr(a(z,ru,r)))},tu=function(r){var e=r,t=e._0
return"Nothing"===t.ctor?x:P({ctor:"_Tuple2",_0:t._0,_1:e._1})},_u=function(r){return ko(Qo(a(z,function(r){return tu(An(r))},r)))},nu=r(function(r,e){return l(On,function(e){return{ctor:"_Tuple2",_0:e,_1:r}},h,h,e)}),ou=function(r){return i(j,nu,a(nr,0,q(r)-1),r)},cu=function(r){return{ctor:"NonDeclaredLabel",_0:r}},uu=r(function(r,e){var t=e
if("Value"===t.ctor)return ur(t._0)
var _=t._0,n=a(zn,_,r)
return"Nothing"===n.ctor?cr(cu(_)):ur(n._0)}),au=r(function(r,e){var t=e
return a(ar,function(r){return{ctor:"_Tuple4",_0:r,_1:t._1,_2:t._2,_3:t._3}},a(uu,r,t._0))}),iu=r(function(r,e){return a(ar,i(On,h,Xn,h),jn(l(On,br,function(e){return Sn(Cn(uu(r))(e))},au(r),e)))}),lu=function(r){var e=ou(r),t=_u(e)
return a(ar,function(r){return{ctor:"_Tuple2",_0:r,_1:t}},Fr(a(z,iu(t),e)))},su=function(r){return ko(a(z,function(r){var e=r
return{ctor:"_Tuple2",_0:e._1,_1:e._0}},Zn(r)))},pu=function(r){return{ctor:"TranspilePhaseError",_0:r}},fu=function(r){return{ctor:"ParserPhaseError",_0:r}},du=function(r){var e=Sc(r),t=eu(e),_=t
if("Err"===_.ctor)return cr(fu(_._0))
var n=lu(_._0)
if("Err"===n.ctor)return cr(pu(n._0))
var o=n._0._1,c=xo(n._0._0)
return ur({ctor:"_Tuple4",_0:c._0,_1:c._1,_2:o,_3:su(o)})},vu=function(r){return a(Po["*>"],a(Po[">>="],a(Po["<$>"],Xo(r),jo),Oo),Do(r))},mu=function(){var r=function(r){return v.update(r,{p:r.p+1})}
return a(Po[">>="],a(Po["<$>"],r,jo),Oo)}(),gu=function(r){return Do(Vr(r))},hu=function(r){return{ctor:"InvalidIndex",_0:r}},Tu=r(function(r,e){var t=e,_=t._3,n=t._2,o=t._0,c=t._1
switch(c){case 0:return Do({ctor:"_Tuple3",_0:o,_1:n,_2:_})
case 1:return Do({ctor:"_Tuple3",_0:o+Wr(r.i1),_1:n,_2:_})
case 2:return Do({ctor:"_Tuple3",_0:o+Wr(r.i2),_1:n,_2:_})
case 3:return Do({ctor:"_Tuple3",_0:o+Wr(r.i3),_1:n,_2:_})
case 4:return Do({ctor:"_Tuple3",_0:o+Wr(r.i4),_1:n,_2:_})
case 5:return Do({ctor:"_Tuple3",_0:o+Wr(r.i5),_1:n,_2:_})
case 6:return Do({ctor:"_Tuple3",_0:o+Wr(r.i6),_1:n,_2:_})
default:return Mo(hu(c))}}),Nu=function(r){return a(Po[">>="],jo,a(m,Tu,r))},Iu=function(r){return{ctor:"InstructionDecodeError",_0:r}},bu=function(r){var e=En(r)
return"Err"===e.ctor?Mo(Iu(e._0)):Do(e._0)},Ju=function(r){return{ctor:"NoMemoryValue",_0:r}},wu=function(r){var e=a(zn,r.p,r.mem)
return"Nothing"===e.ctor?Mo(Ju(r.p)):Do(e._0)},ku=a(Po[">>="],a(Po[">>="],a(Po[">>="],jo,wu),gu),bu),yu=a(Po[">>="],a(Po[">>="],a(Po["<*"],ku,mu),Nu),vu),Eu=r(function(r,e){var t=b(r)
return I(a(T["%"],t,e))+r-I(t)}),Au=(e(function(r,e,t){var _=I(t)/255,n=I(e)/255,o=I(r)/255,c=a(w,a(w,o,n),_),u=a(k,a(k,o,n),_),i=c-u,l=(c+u)/2,s=v.eq(l,0)?0:i/(1-A(2*l-1))
return{ctor:"_Tuple3",_0:L(60)*(v.eq(c,o)?a(Eu,(n-_)/i,6):v.eq(c,n)?(_-o)/i+2:(o-n)/i+4),_1:s,_2:l}}),e(function(r,e,t){var _=r/L(60),n=(1-A(2*t-1))*e,o=n*(1-A(a(Eu,_,2)-1)),c=v.cmp(_,0)<0?{ctor:"_Tuple3",_0:0,_1:0,_2:0}:v.cmp(_,1)<0?{ctor:"_Tuple3",_0:n,_1:o,_2:0}:v.cmp(_,2)<0?{ctor:"_Tuple3",_0:o,_1:n,_2:0}:v.cmp(_,3)<0?{ctor:"_Tuple3",_0:0,_1:n,_2:o}:v.cmp(_,4)<0?{ctor:"_Tuple3",_0:0,_1:o,_2:n}:v.cmp(_,5)<0?{ctor:"_Tuple3",_0:o,_1:0,_2:n}:v.cmp(_,6)<0?{ctor:"_Tuple3",_0:n,_1:0,_2:o}:{ctor:"_Tuple3",_0:0,_1:0,_2:0},u=c._0,i=c._1,l=c._2,s=t-n/2
return{ctor:"_Tuple3",_0:u+s,_1:i+s,_2:l+s}})),Xu=function(r){var e=r
if("RGBA"===e.ctor)return{red:e._0,green:e._1,blue:e._2,alpha:e._3}
var t=i(Au,e._0,e._1,e._2),_=t._0,n=t._1,o=t._2
return{red:J(255*_),green:J(255*n),blue:J(255*o),alpha:e._3}},Bu=t(function(r,e,t,_){return{ctor:"HSLA",_0:r,_1:e,_2:t,_3:_}}),Lu=t(function(r,e,t,_){return l(Bu,r-B(I(b(r/(2*E)))),e,t,_)}),Su=(e(function(r,e,t){return l(Lu,r,e,t,1)}),t(function(r,e,t,_){return{ctor:"RGBA",_0:r,_1:e,_2:t,_3:_}})),Cu=(e(function(r,e,t){return l(Su,r,e,t,1)}),l(Su,239,41,41,1),l(Su,204,0,0,1),l(Su,164,0,0,1)),xu=(l(Su,252,175,62,1),l(Su,245,121,0,1),l(Su,206,92,0,1)),Pu=(l(Su,255,233,79,1),l(Su,237,212,0,1),l(Su,196,160,0,1),l(Su,138,226,52,1),l(Su,115,210,22,1),l(Su,78,154,6,1)),Mu=(l(Su,114,159,207,1),l(Su,52,101,164,1),l(Su,32,74,135,1)),Ou=(l(Su,173,127,168,1),l(Su,117,80,123,1),l(Su,92,53,102,1),l(Su,233,185,110,1),l(Su,193,125,17,1),l(Su,143,89,2,1),l(Su,0,0,0,1)),ju=l(Su,255,255,255,1),Du=(l(Su,238,238,236,1),l(Su,211,215,207,1),l(Su,186,189,182,1)),Ru=(l(Su,238,238,236,1),l(Su,211,215,207,1),l(Su,186,189,182,1),l(Su,136,138,133,1)),Zu=(l(Su,85,87,83,1),l(Su,46,52,54,1)),qu=(_(function(r,e,t,_,n){return{ctor:"Radial",_0:r,_1:e,_2:t,_3:_,_4:n}}),e(function(r,e,t){return{ctor:"Linear",_0:r,_1:e,_2:t}}),function(){function t(r,e){if(r<0||r>=O(e))throw new Error("Index "+r+" is out of range. Check the length of your array first or use getMaybe or getWithDefault.")
return _(r,e)}function _(r,e){for(var t=e.height;t>0;t--){for(var _=r>>5*t;e.lengths[_]<=r;)_++
_>0&&(r-=e.lengths[_-1]),e=e.table[_]}return e.table[r]}function n(r,e,t){return r<0||O(t)<=r?t:o(r,e,t)}function o(r,e,t){if(t=P(t),0===t.height)t.table[r]=e
else{var _=j(r,t)
_>0&&(r-=t.lengths[_-1]),t.table[_]=o(r,e,t.table[_])}return t}function c(r,e){return r<=0?F:u(e,Math.floor(Math.log(r)/Math.log(z)),0,r)}function u(r,e,t,_){if(0===e){for(var n=new Array((_-t)%(z+1)),o=0;o<n.length;o++)n[o]=r(t+o)
return{ctor:"_Array",height:0,table:n}}for(var c=Math.pow(z,e),n=new Array(Math.ceil((_-t)/c)),a=new Array(n.length),o=0;o<n.length;o++)n[o]=u(r,e-1,t+o*c,Math.min(t+(o+1)*c,_)),a[o]=O(n[o])+(o>0?a[o-1]:0)
return{ctor:"_Array",height:e,table:n,lengths:a}}function i(r){if("[]"===r.ctor)return F
for(var e=new Array(z),t=[],_=0;"[]"!==r.ctor;)if(e[_]=r._0,r=r._1,++_===z){var n={ctor:"_Array",height:0,table:e}
l(n,t),e=new Array(z),_=0}if(_>0){var n={ctor:"_Array",height:0,table:e.splice(0,_)}
l(n,t)}for(var o=0;o<t.length-1;o++)t[o].table.length>0&&l(t[o],t)
var c=t[t.length-1]
return c.height>0&&1===c.table.length?c.table[0]:c}function l(r,e){var t=r.height
if(e.length===t){var _={ctor:"_Array",height:t+1,table:[],lengths:[]}
e.push(_)}e[t].table.push(r)
var n=O(r)
e[t].lengths.length>0&&(n+=e[t].lengths[e[t].lengths.length-1]),e[t].lengths.push(n),e[t].table.length===z&&(l(e[t],e),e[t]={ctor:"_Array",height:t+1,table:[],lengths:[]})}function s(r,e){var t=p(r,e)
return null!==t?t:Z(e,D(r,e.height))}function p(r,e){if(0===e.height){if(e.table.length<z){var t={ctor:"_Array",height:0,table:e.table.slice()}
return t.table.push(r),t}return null}var _=p(r,C(e))
if(null!==_){var t=P(e)
return t.table[t.table.length-1]=_,t.lengths[t.lengths.length-1]++,t}if(e.table.length<z){var n=D(r,e.height-1),t=P(e)
return t.table.push(n),t.lengths.push(t.lengths[t.lengths.length-1]+O(n)),t}return null}function f(r){return d(M.Nil,r)}function d(r,e){for(var t=e.table.length-1;t>=0;t--)r=0===e.height?M.Cons(e.table[t],r):d(r,e.table[t])
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
return e}function N(r,e,t){return r<0&&(r+=O(t)),e<0&&(e+=O(t)),b(r,I(e,t))}function I(r,e){if(r===O(e))return e
if(0===e.height){var t={ctor:"_Array",height:0}
return t.table=e.table.slice(0,r),t}var _=j(r,e),n=I(r-(_>0?e.lengths[_-1]:0),e.table[_])
if(0===_)return n
var t={ctor:"_Array",height:e.height,table:e.table.slice(0,_),lengths:e.lengths.slice(0,_)}
return n.table.length>0&&(t.table[_]=n,t.lengths[_]=O(n)+(_>0?t.lengths[_-1]:0)),t}function b(r,e){if(0===r)return e
if(0===e.height){var t={ctor:"_Array",height:0}
return t.table=e.table.slice(r,e.table.length+1),t}var _=j(r,e),n=b(r-(_>0?e.lengths[_-1]:0),e.table[_])
if(_===e.table.length-1)return n
var t={ctor:"_Array",height:e.height,table:e.table.slice(_,e.table.length+1),lengths:new Array(e.table.length-_)}
t.table[0]=n
for(var o=0,c=0;c<t.table.length;c++)o+=O(t.table[c]),t.lengths[c]=o
return t}function J(r,e){if(0===r.table.length)return e
if(0===e.table.length)return r
var t=w(r,e)
if(t[0].table.length+t[1].table.length<=z){if(0===t[0].table.length)return t[1]
if(0===t[1].table.length)return t[0]
if(t[0].table=t[0].table.concat(t[1].table),t[0].height>0){for(var _=O(t[0]),n=0;n<t[1].lengths.length;n++)t[1].lengths[n]+=_
t[0].lengths=t[0].lengths.concat(t[1].lengths)}return t[0]}if(t[0].height>0){var o=E(r,e)
o>$&&(t=S(t[0],t[1],o))}return Z(t[0],t[1])}function w(r,e){if(0===r.height&&0===e.height)return[r,e]
if(1!==r.height||1!==e.height)if(r.height===e.height){r=P(r),e=P(e)
var t=w(C(r),x(e))
k(r,t[1]),y(e,t[0])}else if(r.height>e.height){r=P(r)
var t=w(C(r),e)
k(r,t[0]),e=R(t[1],t[1].height+1)}else{e=P(e)
var t=w(r,x(e)),_=0===t[0].table.length?0:1,n=0===_?1:0
y(e,t[_]),r=R(t[n],t[n].height+1)}if(0===r.table.length||0===e.table.length)return[r,e]
var o=E(r,e)
return o<=$?[r,e]:S(r,e,o)}function k(r,e){var t=r.table.length-1
r.table[t]=e,r.lengths[t]=O(e),r.lengths[t]+=t>0?r.lengths[t-1]:0}function y(r,e){if(e.table.length>0){r.table[0]=e,r.lengths[0]=O(e)
for(var t=O(r.table[0]),_=1;_<r.lengths.length;_++)t+=O(r.table[_]),r.lengths[_]=t}else{r.table.shift()
for(var _=1;_<r.lengths.length;_++)r.lengths[_]=r.lengths[_]-r.lengths[0]
r.lengths.shift()}}function E(r,e){for(var t=0,_=0;_<r.table.length;_++)t+=r.table[_].table.length
for(var _=0;_<e.table.length;_++)t+=e.table[_].table.length
return r.table.length+e.table.length-(Math.floor((t-1)/z)+1)}function A(r,e,t){return t<r.length?r[t]:e[t-r.length]}function X(r,e,t,_){t<r.length?r[t]=_:e[t-r.length]=_}function B(r,e,t,_){X(r.table,e.table,t,_)
var n=0===t||t===r.lengths.length?0:A(r.lengths,r.lengths,t-1)
X(r.lengths,e.lengths,t,n+O(_))}function L(r,e){e<0&&(e=0)
var t={ctor:"_Array",height:r,table:new Array(e)}
return r>0&&(t.lengths=new Array(e)),t}function S(r,e,t){for(var _=L(r.height,Math.min(z,r.table.length+e.table.length-t)),n=L(r.height,_.table.length-(r.table.length+e.table.length-t)),o=0;A(r.table,e.table,o).table.length%z==0;)X(_.table,n.table,o,A(r.table,e.table,o)),X(_.lengths,n.lengths,o,A(r.lengths,e.lengths,o)),o++
for(var c=o,u=new L(r.height-1,0),a=0;o-c-(u.table.length>0?1:0)<t;){var i=A(r.table,e.table,o),l=Math.min(z-u.table.length,i.table.length)
if(u.table=u.table.concat(i.table.slice(a,l)),u.height>0)for(var s=u.lengths.length,p=s;p<s+l-a;p++)u.lengths[p]=O(u.table[p]),u.lengths[p]+=p>0?u.lengths[p-1]:0
a+=l,i.table.length<=l&&(o++,a=0),u.table.length===z&&(B(_,n,c,u),u=L(r.height-1,0),c++)}for(u.table.length>0&&(B(_,n,c,u),c++);o<r.table.length+e.table.length;)B(_,n,c,A(r.table,e.table,o)),o++,c++
return[_,n]}function C(r){return r.table[r.table.length-1]}function x(r){return r.table[0]}function P(r){var e={ctor:"_Array",height:r.height,table:r.table.slice()}
return r.height>0&&(e.lengths=r.lengths.slice()),e}function O(r){return 0===r.height?r.table.length:r.lengths[r.lengths.length-1]}function j(r,e){for(var t=r>>5*e.height;e.lengths[t]<=r;)t++
return t}function D(r,e){return 0===e?{ctor:"_Array",height:0,table:[r]}:{ctor:"_Array",height:e,table:[D(r,e-1)],lengths:[1]}}function R(r,e){return e===r.height?r:{ctor:"_Array",height:e,table:[R(r,e-1)],lengths:[O(r)]}}function Z(r,e){return{ctor:"_Array",height:r.height+1,table:[r,e],lengths:[O(r),O(r)+O(e)]}}function q(r){var e=new Array(O(r))
return W(e,0,r),e}function W(r,e,t){for(var _=0;_<t.table.length;_++)if(0===t.height)r[e+_]=t.table[_]
else{var n=0===_?0:t.lengths[_-1]
W(r,e+n,t.table[_])}}function V(r){return 0===r.length?F:U(r,Math.floor(Math.log(r.length)/Math.log(z)),0,r.length)}function U(r,e,t,_){if(0===e)return{ctor:"_Array",height:0,table:r.slice(t,_)}
for(var n=Math.pow(z,e),o=new Array(Math.ceil((_-t)/n)),c=new Array(o.length),u=0;u<o.length;u++)o[u]=U(r,e-1,t+u*n,Math.min(t+(u+1)*n,_)),c[u]=O(o[u])+(u>0?c[u-1]:0)
return{ctor:"_Array",height:e,table:o,lengths:c}}var z=32,$=2,F={ctor:"_Array",height:0,table:[]}
return{empty:F,fromList:i,toList:f,initialize:r(c),append:r(J),push:r(s),slice:e(N),get:r(t),set:e(n),map:r(v),indexedMap:r(m),foldl:e(h),foldr:e(T),length:O,toJSArray:q,fromJSArray:V}}()),Wu=(qu.append,qu.length,qu.slice,qu.set,r(function(r,e){return v.cmp(0,r)<1&&v.cmp(r,qu.length(e))<0?P(a(qu.get,r,e)):x}),qu.push,qu.empty,r(function(e,t){var _=r(function(r,t){return e(r)?a(qu.push,r,t):t})
return i(qu.foldl,_,qu.empty,t)}),qu.foldr,qu.foldl,qu.indexedMap,qu.map,qu.toList),Vu=(qu.fromList,qu.initialize),Uu=(r(function(r,e){return a(Vu,r,g(e))}),function(){function a(r){return{ctor:"<decoder>",tag:"succeed",msg:r}}function i(r){return{ctor:"<decoder>",tag:"fail",msg:r}}function l(r){return{ctor:"<decoder>",tag:r}}function s(r,e){return{ctor:"<decoder>",tag:r,decoder:e}}function p(r){return{ctor:"<decoder>",tag:"null",value:r}}function f(r,e){return{ctor:"<decoder>",tag:"field",field:r,decoder:e}}function d(r,e){return{ctor:"<decoder>",tag:"index",index:r,decoder:e}}function m(r){return{ctor:"<decoder>",tag:"key-value",decoder:r}}function g(r,e){return{ctor:"<decoder>",tag:"map-many",func:r,decoders:e}}function h(r,e){return{ctor:"<decoder>",tag:"andThen",decoder:e,callback:r}}function T(r){return{ctor:"<decoder>",tag:"oneOf",decoders:r}}function N(r,e){return g(r,[e])}function I(r,e,t){return g(r,[e,t])}function b(r,e,t,_){return g(r,[e,t,_])}function J(r,e,t,_,n){return g(r,[e,t,_,n])}function w(r,e,t,_,n,o){return g(r,[e,t,_,n,o])}function k(r,e,t,_,n,o,c){return g(r,[e,t,_,n,o,c])}function y(r,e,t,_,n,o,c,u){return g(r,[e,t,_,n,o,c,u])}function E(r,e,t,_,n,o,c,u,a){return g(r,[e,t,_,n,o,c,u,a])}function A(r){return{tag:"ok",value:r}}function X(r,e){return{tag:"primitive",type:r,value:e}}function B(r,e){return{tag:"index",index:r,rest:e}}function L(r,e){return{tag:"field",field:r,rest:e}}function B(r,e){return{tag:"index",index:r,rest:e}}function S(r){return{tag:"oneOf",problems:r}}function C(r){return{tag:"fail",msg:r}}function O(r){for(var e="_";r;)switch(r.tag){case"primitive":return"Expecting "+r.type+("_"===e?"":" at "+e)+" but instead got: "+j(r.value)
case"index":e+="["+r.index+"]",r=r.rest
break
case"field":e+="."+r.field,r=r.rest
break
case"oneOf":for(var t=r.problems,_=0;_<t.length;_++)t[_]=O(t[_])
return"I ran into the following problems"+("_"===e?"":" at "+e)+":\n\n"+t.join("\n")
case"fail":return"I ran into a `fail` decoder"+("_"===e?"":" at "+e)+": "+r.msg}}function j(r){return void 0===r?"undefined":JSON.stringify(r)}function D(r,e){var t
try{t=JSON.parse(e)}catch(r){return cr("Given an invalid JSON: "+r.message)}return R(r,t)}function R(r,e){var t=Z(r,e)
return"ok"===t.tag?ur(t.value):cr(O(t))}function Z(r,e){switch(r.tag){case"bool":return"boolean"==typeof e?A(e):X("a Bool",e)
case"int":return"number"!=typeof e?X("an Int",e):-2147483647<e&&e<2147483647&&(0|e)===e?A(e):!isFinite(e)||e%1?X("an Int",e):A(e)
case"float":return"number"==typeof e?A(e):X("a Float",e)
case"string":return"string"==typeof e?A(e):e instanceof String?A(e+""):X("a String",e)
case"null":return null===e?A(r.value):X("null",e)
case"value":return A(e)
case"list":if(!(e instanceof Array))return X("a List",e)
for(var t=M.Nil,_=e.length;_--;){var n=Z(r.decoder,e[_])
if("ok"!==n.tag)return B(_,n)
t=M.Cons(n.value,t)}return A(t)
case"array":if(!(e instanceof Array))return X("an Array",e)
for(var o=e.length,c=new Array(o),_=o;_--;){var n=Z(r.decoder,e[_])
if("ok"!==n.tag)return B(_,n)
c[_]=n.value}return A(qu.fromJSArray(c))
case"maybe":var n=Z(r.decoder,e)
return A("ok"===n.tag?P(n.value):x)
case"field":var u=r.field
if("object"!=typeof e||null===e||!(u in e))return X("an object with a field named `"+u+"`",e)
var n=Z(r.decoder,e[u])
return"ok"===n.tag?n:L(u,n)
case"index":var a=r.index
if(!(e instanceof Array))return X("an array",e)
if(a>=e.length)return X("a longer array. Need index "+a+" but there are only "+e.length+" entries",e)
var n=Z(r.decoder,e[a])
return"ok"===n.tag?n:B(a,n)
case"key-value":if("object"!=typeof e||null===e||e instanceof Array)return X("an object",e)
var i=M.Nil
for(var l in e){var n=Z(r.decoder,e[l])
if("ok"!==n.tag)return L(l,n)
var s=v.Tuple2(l,n.value)
i=M.Cons(s,i)}return A(i)
case"map-many":for(var p=r.func,f=r.decoders,_=0;_<f.length;_++){var n=Z(f[_],e)
if("ok"!==n.tag)return n
p=p(n.value)}return A(p)
case"andThen":var n=Z(r.decoder,e)
return"ok"!==n.tag?n:Z(r.callback(n.value),e)
case"oneOf":for(var d=[],m=r.decoders;"[]"!==m.ctor;){var n=Z(m._0,e)
if("ok"===n.tag)return n
d.push(n),m=m._1}return S(d)
case"fail":return C(r.msg)
case"succeed":return A(r.msg)}}function q(r,e){if(r===e)return!0
if(r.tag!==e.tag)return!1
switch(r.tag){case"succeed":case"fail":return r.msg===e.msg
case"bool":case"int":case"float":case"string":case"value":return!0
case"null":return r.value===e.value
case"list":case"array":case"maybe":case"key-value":return q(r.decoder,e.decoder)
case"field":return r.field===e.field&&q(r.decoder,e.decoder)
case"index":return r.index===e.index&&q(r.decoder,e.decoder)
case"map-many":return r.func===e.func&&W(r.decoders,e.decoders)
case"andThen":return r.callback===e.callback&&q(r.decoder,e.decoder)
case"oneOf":return W(r.decoders,e.decoders)}}function W(r,e){var t=r.length
if(t!==e.length)return!1
for(var _=0;_<t;_++)if(!q(r[_],e[_]))return!1
return!0}function V(r,e){return JSON.stringify(e,null,r)}function U(r){return r}function z(r){for(var e={};"[]"!==r.ctor;){var t=r._0
e[t._0]=t._1,r=r._1}return e}return{encode:r(V),runOnString:r(D),run:r(R),decodeNull:p,decodePrimitive:l,decodeContainer:r(s),decodeField:r(f),decodeIndex:r(d),map1:r(N),map2:e(I),map3:t(b),map4:_(J),map5:n(w),map6:o(k),map7:c(y),map8:u(E),decodeKeyValuePairs:m,andThen:r(h),fail:i,succeed:a,oneOf:T,identity:U,encodeNull:null,encodeArray:qu.toJSArray,encodeList:M.toArray,encodeObject:z,equality:q}}()),zu=(Uu.encodeList,Uu.encodeArray,Uu.encodeObject,Uu.encodeNull,Uu.identity),$u=(Uu.identity,Uu.identity,Uu.identity),Fu=(Uu.encode,Uu.decodeNull,Uu.decodePrimitive("value"),Uu.andThen,Uu.fail,Uu.succeed),Gu=Uu.run,Qu=(Uu.runOnString,Uu.map8,Uu.map7,Uu.map6,Uu.map5,Uu.map4,Uu.map3,Uu.map2,Uu.map1),Ku=(Uu.oneOf,Uu.decodeIndex,Uu.decodeField),Hu=r(function(r,e){return i(R,Ku,e,r)}),Yu=(Uu.decodeKeyValuePairs,Uu.decodePrimitive("float"),Uu.decodePrimitive("int")),ra=Uu.decodePrimitive("bool"),ea=Uu.decodePrimitive("string"),ta=function(){function _(r){return{type:"text",text:r}}function n(e){return r(function(r,t){return o(e,r,t)})}function o(r,e,t){for(var _=m(e),n=_.namespace,o=_.facts,c=[],u=0;"[]"!==t.ctor;){var a=t._0
u+=a.descendantsCount||0,c.push(a),t=t._1}return u+=c.length,{type:"node",tag:r,facts:o,children:c,namespace:n,descendantsCount:u}}function c(r,e,t){for(var _=m(e),n=_.namespace,o=_.facts,c=[],u=0;"[]"!==t.ctor;){var a=t._0
u+=a._1.descendantsCount||0,c.push(a),t=t._1}return u+=c.length,{type:"keyed-node",tag:r,facts:o,children:c,namespace:n,descendantsCount:u}}function u(r,e,t){return{type:"custom",facts:m(r).facts,model:e,impl:t}}function l(r,e){return{type:"tagger",tagger:r,node:e,descendantsCount:1+(e.descendantsCount||0)}}function s(r,e,t){return{type:"thunk",func:r,args:e,thunk:t,node:void 0}}function p(r,e){return s(r,[e],function(){return r(e)})}function f(r,e,t){return s(r,[e,t],function(){return a(r,e,t)})}function d(r,e,t,_){return s(r,[e,t,_],function(){return i(r,e,t,_)})}function m(r){for(var e,t={};"[]"!==r.ctor;){var _=r._0,n=_.key
if(n===fr||n===dr||n===pr){var o=t[n]||{}
o[_.realKey]=_.value,t[n]=o}else if(n===sr){for(var c=t[n]||{},u=_.value;"[]"!==u.ctor;){var a=u._0
c[a._0]=a._1,u=u._1}t[n]=c}else if("namespace"===n)e=_.value
else if("className"===n){var i=t[n]
t[n]=void 0===i?_.value:i+" "+_.value}else t[n]=_.value
r=r._1}return{facts:t,namespace:e}}function g(r){return{key:sr,value:r}}function h(r,e){return{key:r,value:e}}function T(r,e){return{key:fr,realKey:r,value:e}}function N(r,e,t){return{key:dr,realKey:e,value:{value:t,namespace:r}}}function I(r,e,t){return{key:pr,realKey:r,value:{options:e,decoder:t}}}function b(r,e){return(r.options===e.options||r.options.stopPropagation===e.options.stopPropagation&&r.options.preventDefault===e.options.preventDefault)&&Uu.equality(r.decoder,e.decoder)}function J(r,e){return e.key!==pr?e:I(e.realKey,e.value.options,a(Qu,r,e.value.decoder))}function w(r,e){switch(r.type){case"thunk":return r.node||(r.node=r.thunk()),w(r.node,e)
case"tagger":for(var t=r.node,_=r.tagger;"tagger"===t.type;)"object"!=typeof _?_=[_,t.tagger]:_.push(t.tagger),t=t.node
var n={tagger:_,parent:e},o=w(t,n)
return o.elm_event_node_ref=n,o
case"text":return vr.createTextNode(r.text)
case"node":var o=r.namespace?vr.createElementNS(r.namespace,r.tag):vr.createElement(r.tag)
k(o,e,r.facts)
for(var c=r.children,u=0;u<c.length;u++)o.appendChild(w(c[u],e))
return o
case"keyed-node":var o=r.namespace?vr.createElementNS(r.namespace,r.tag):vr.createElement(r.tag)
k(o,e,r.facts)
for(var c=r.children,u=0;u<c.length;u++)o.appendChild(w(c[u]._1,e))
return o
case"custom":var o=r.impl.render(r.model)
return k(o,e,r.facts),o}}function k(r,e,t){for(var _ in t){var n=t[_]
switch(_){case sr:y(r,n)
break
case pr:E(r,e,n)
break
case fr:X(r,n)
break
case dr:B(r,n)
break
case"value":r[_]!==n&&(r[_]=n)
break
default:r[_]=n}}}function y(r,e){var t=r.style
for(var _ in e)t[_]=e[_]}function E(r,e,t){var _=r.elm_handlers||{}
for(var n in t){var o=_[n],c=t[n]
if(void 0===c)r.removeEventListener(n,o),_[n]=void 0
else if(void 0===o){var o=A(e,c)
r.addEventListener(n,o),_[n]=o}else o.info=c}r.elm_handlers=_}function A(r,e){function t(e){var _=t.info,n=a(Uu.run,_.decoder,e)
if("Ok"===n.ctor){var o=_.options
o.stopPropagation&&e.stopPropagation(),o.preventDefault&&e.preventDefault()
for(var c=n._0,u=r;u;){var i=u.tagger
if("function"==typeof i)c=i(c)
else for(var l=i.length;l--;)c=i[l](c)
u=u.parent}}}return t.info=e,t}function X(r,e){for(var t in e){var _=e[t]
void 0===_?r.removeAttribute(t):r.setAttribute(t,_)}}function B(r,e){for(var t in e){var _=e[t],n=_.namespace,o=_.value
void 0===o?r.removeAttributeNS(n,t):r.setAttributeNS(n,t,o)}}function L(r,e){var t=[]
return C(r,e,t,0),t}function S(r,e,t){return{index:e,type:r,data:t,domNode:void 0,eventNode:void 0}}function C(r,e,t,_){if(r!==e){var n=r.type,o=e.type
if(n!==o)return void t.push(S("p-redraw",_,e))
switch(o){case"thunk":for(var c=r.args,u=e.args,a=c.length,i=r.func===e.func&&a===u.length;i&&a--;)i=c[a]===u[a]
if(i)return void(e.node=r.node)
e.node=e.thunk()
var l=[]
return C(r.node,e.node,l,0),void(l.length>0&&t.push(S("p-thunk",_,l)))
case"tagger":for(var s=r.tagger,p=e.tagger,f=!1,d=r.node;"tagger"===d.type;)f=!0,"object"!=typeof s?s=[s,d.tagger]:s.push(d.tagger),d=d.node
for(var v=e.node;"tagger"===v.type;)f=!0,"object"!=typeof p?p=[p,v.tagger]:p.push(v.tagger),v=v.node
return f&&s.length!==p.length?void t.push(S("p-redraw",_,e)):((f?x(s,p):s===p)||t.push(S("p-tagger",_,p)),void C(d,v,t,_+1))
case"text":if(r.text!==e.text)return void t.push(S("p-text",_,e.text))
return
case"node":if(r.tag!==e.tag||r.namespace!==e.namespace)return void t.push(S("p-redraw",_,e))
var m=P(r.facts,e.facts)
return void 0!==m&&t.push(S("p-facts",_,m)),void M(r,e,t,_)
case"keyed-node":if(r.tag!==e.tag||r.namespace!==e.namespace)return void t.push(S("p-redraw",_,e))
var m=P(r.facts,e.facts)
return void 0!==m&&t.push(S("p-facts",_,m)),void O(r,e,t,_)
case"custom":if(r.impl!==e.impl)return void t.push(S("p-redraw",_,e))
var m=P(r.facts,e.facts)
void 0!==m&&t.push(S("p-facts",_,m))
var g=e.impl.diff(r,e)
if(g)return void t.push(S("p-custom",_,g))
return}}}function x(r,e){for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1
return!0}function P(r,e,t){var _
for(var n in r)if(n!==sr&&n!==pr&&n!==fr&&n!==dr)if(n in e){var o=r[n],c=e[n]
o===c&&"value"!==n||t===pr&&b(o,c)||(_=_||{},_[n]=c)}else _=_||{},_[n]=void 0===t?"string"==typeof r[n]?"":null:t===sr?"":t===pr||t===fr?void 0:{namespace:r[n].namespace,value:void 0}
else{var u=P(r[n],e[n]||{},n)
u&&(_=_||{},_[n]=u)}for(var a in e)a in r||(_=_||{},_[a]=e[a])
return _}function M(r,e,t,_){var n=r.children,o=e.children,c=n.length,u=o.length
c>u?t.push(S("p-remove-last",_,c-u)):c<u&&t.push(S("p-append",_,o.slice(c)))
for(var a=_,i=c<u?c:u,l=0;l<i;l++){a++
var s=n[l]
C(s,o[l],t,a),a+=s.descendantsCount||0}}function O(r,e,t,_){for(var n=[],o={},c=[],u=r.children,a=e.children,i=u.length,l=a.length,s=0,p=0,f=_;s<i&&p<l;){var d=u[s],v=a[p],m=d._0,g=v._0,h=d._1,T=v._1
if(m!==g){var N=s+1<i,I=p+1<l
if(N)var b=u[s+1],J=b._0,w=b._1,k=g===J
if(I)var y=a[p+1],E=y._0,A=y._1,X=m===E
if(N&&I&&X&&k)f++,C(h,A,n,f),j(o,n,m,T,p,c),f+=h.descendantsCount||0,f++,D(o,n,m,w,f),f+=w.descendantsCount||0,s+=2,p+=2
else if(I&&X)f++,j(o,n,g,T,p,c),C(h,A,n,f),f+=h.descendantsCount||0,s+=1,p+=2
else if(N&&k)f++,D(o,n,m,h,f),f+=h.descendantsCount||0,f++,C(w,T,n,f),f+=w.descendantsCount||0,s+=2,p+=1
else{if(!N||!I||J!==E)break
f++,D(o,n,m,h,f),j(o,n,g,T,p,c),f+=h.descendantsCount||0,f++,C(w,A,n,f),f+=w.descendantsCount||0,s+=2,p+=2}}else f++,C(h,T,n,f),f+=h.descendantsCount||0,s++,p++}for(;s<i;){f++
var d=u[s],h=d._1
D(o,n,d._0,h,f),f+=h.descendantsCount||0,s++}for(var B;p<l;){B=B||[]
var v=a[p]
j(o,n,v._0,v._1,void 0,B),p++}(n.length>0||c.length>0||void 0!==B)&&t.push(S("p-reorder",_,{patches:n,inserts:c,endInserts:B}))}function j(r,e,t,_,n,o){var c=r[t]
if(void 0===c)return c={tag:"insert",vnode:_,index:n,data:void 0},o.push({index:n,entry:c}),void(r[t]=c)
if("remove"===c.tag){o.push({index:n,entry:c}),c.tag="move"
var u=[]
return C(c.vnode,_,u,c.index),c.index=n,void(c.data.data={patches:u,entry:c})}j(r,e,t+mr,_,n,o)}function D(r,e,t,_,n){var o=r[t]
if(void 0===o){var c=S("p-remove",n,void 0)
return e.push(c),void(r[t]={tag:"remove",vnode:_,index:n,data:c})}if("insert"===o.tag){o.tag="move"
var u=[]
C(_,o.vnode,u,n)
var c=S("p-remove",n,{patches:u,entry:o})
return void e.push(c)}D(r,e,t+mr,_,n)}function R(r,e,t,_){Z(r,e,t,0,0,e.descendantsCount,_)}function Z(r,e,t,_,n,o,c){for(var u=t[_],a=u.index;a===n;){var i=u.type
if("p-thunk"===i)R(r,e.node,u.data,c)
else if("p-reorder"===i){u.domNode=r,u.eventNode=c
var l=u.data.patches
l.length>0&&Z(r,e,l,0,n,o,c)}else if("p-remove"===i){u.domNode=r,u.eventNode=c
var s=u.data
if(void 0!==s){s.entry.data=r
var l=s.patches
l.length>0&&Z(r,e,l,0,n,o,c)}}else u.domNode=r,u.eventNode=c
if(_++,!(u=t[_])||(a=u.index)>o)return _}switch(e.type){case"tagger":for(var p=e.node;"tagger"===p.type;)p=p.node
return Z(r,p,t,_,n+1,o,r.elm_event_node_ref)
case"node":for(var f=e.children,d=r.childNodes,v=0;v<f.length;v++){n++
var m=f[v],g=n+(m.descendantsCount||0)
if(n<=a&&a<=g&&(_=Z(d[v],m,t,_,n,g,c),!(u=t[_])||(a=u.index)>o))return _
n=g}return _
case"keyed-node":for(var f=e.children,d=r.childNodes,v=0;v<f.length;v++){n++
var m=f[v]._1,g=n+(m.descendantsCount||0)
if(n<=a&&a<=g&&(_=Z(d[v],m,t,_,n,g,c),!(u=t[_])||(a=u.index)>o))return _
n=g}return _
case"text":case"thunk":throw new Error("should never traverse `text` or `thunk` nodes like this")}}function q(r,e,t,_){return 0===t.length?r:(R(r,e,t,_),W(r,t))}function W(r,e){for(var t=0;t<e.length;t++){var _=e[t],n=_.domNode,o=V(n,_)
n===r&&(r=o)}return r}function V(r,e){switch(e.type){case"p-redraw":return U(r,e.data,e.eventNode)
case"p-facts":return k(r,e.eventNode,e.data),r
case"p-text":return r.replaceData(0,r.length,e.data),r
case"p-thunk":return W(r,e.data)
case"p-tagger":return void 0!==r.elm_event_node_ref?r.elm_event_node_ref.tagger=e.data:r.elm_event_node_ref={tagger:e.data,parent:e.eventNode},r
case"p-remove-last":for(var t=e.data;t--;)r.removeChild(r.lastChild)
return r
case"p-append":for(var _=e.data,t=0;t<_.length;t++)r.appendChild(w(_[t],e.eventNode))
return r
case"p-remove":var n=e.data
if(void 0===n)return r.parentNode.removeChild(r),r
var o=n.entry
return void 0!==o.index&&r.parentNode.removeChild(r),o.data=W(r,n.patches),r
case"p-reorder":return z(r,e)
case"p-custom":var c=e.data
return c.applyPatch(r,c.data)
default:throw new Error("Ran into an unknown patch!")}}function U(r,e,t){var _=r.parentNode,n=w(e,t)
return void 0===n.elm_event_node_ref&&(n.elm_event_node_ref=r.elm_event_node_ref),_&&n!==r&&_.replaceChild(n,r),n}function z(r,e){var t=e.data,_=$(t.endInserts,e)
r=W(r,t.patches)
for(var n=t.inserts,o=0;o<n.length;o++){var c=n[o],u=c.entry,a="move"===u.tag?u.data:w(u.vnode,e.eventNode)
r.insertBefore(a,r.childNodes[c.index])}return void 0!==_&&r.appendChild(_),r}function $(r,e){if(void 0!==r){for(var t=vr.createDocumentFragment(),_=0;_<r.length;_++){var n=r[_],o=n.entry
t.appendChild("move"===o.tag?o.data:w(o.vnode,e.eventNode))}return t}}function F(e){return r(function(r,t){return function(_){return function(n,o,c){var u=e(_,o)
void 0===c?Y(t,n,o,u):tr(a(r,c,t),n,o,u)}}})}function G(e){var t=v.Tuple2(v.Tuple0,Er)
return a(gr,Vo,{init:t,view:function(){return e},update:r(function(){return t}),subscriptions:function(){return Br}})()}function Q(r,e){return function(r,t,_){if(void 0===t)return r
H("The `"+e+"` module does not need flags.\nInitialize it with no arguments and you should be all set!",_)}}function K(r,e){return function(t,_,n){if(void 0===r){var o="Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+e+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags."
H(o,n)}var c=a(Uu.run,r,_)
if("Ok"===c.ctor)return t(c._0)
var o="Trying to initialize the `"+e+"` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+c._0
H(o,n)}}function H(r,e){throw e&&(e.innerHTML='<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">'+r+"</pre></div>"),new Error(r)}function Y(r,e,t,_){e.embed=function(e,t){for(;e.lastChild;)e.removeChild(e.lastChild)
return wr.initialize(_(r.init,t,e),r.update,r.subscriptions,rr(e,r.view))},e.fullscreen=function(e){return wr.initialize(_(r.init,e,document.body),r.update,r.subscriptions,rr(document.body,r.view))}}function rr(r,e){return function(t,_){var n={tagger:t,parent:void 0},o=e(_),c=w(o,n)
return r.appendChild(c),er(c,e,o,n)}}function er(r,e,t,_){function n(){switch(c){case"NO_REQUEST":throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.")
case"PENDING_REQUEST":Tr(n),c="EXTRA_REQUEST"
var t=e(o)
return r=q(r,u,L(u,t),_),void(u=t)
case"EXTRA_REQUEST":return void(c="NO_REQUEST")}}var o,c="NO_REQUEST",u=t
return function(r){"NO_REQUEST"===c&&Tr(n),c="PENDING_REQUEST",o=r}}function tr(r,e,t,_){e.fullscreen=function(e){var n={doc:void 0}
return wr.initialize(_(r.init,e,document.body),r.update(_r(n)),r.subscriptions,nr(t,document.body,n,r.view,r.viewIn,r.viewOut))},e.embed=function(e,n){var o={doc:void 0}
return wr.initialize(_(r.init,n,e),r.update(_r(o)),r.subscriptions,nr(t,e,o,r.view,r.viewIn,r.viewOut))}}function _r(r){return kr.nativeBinding(function(e){var t=r.doc
if(t){var _=t.getElementsByClassName("debugger-sidebar-messages")[0]
_&&(_.scrollTop=_.scrollHeight)}e(kr.succeed(v.Tuple0))})}function nr(r,e,t,_,n,o){return function(c,u){var a={tagger:c,parent:void 0},i={tagger:c,parent:void 0},l=_(u),s=w(l,a)
e.appendChild(s)
var p=er(s,_,l,a),f=n(u)._1,d=w(f,i)
e.appendChild(d)
var v=ur(a,d,n),m=er(d,v,f,i),g=or(u,o,i,e,r,t)
return function(r){p(r),m(r),g(r)}}}function or(r,e,t,_,n,o){var c,u
return function(r){if(r.isDebuggerOpen){if(!o.doc)return c=e(r),void(u=cr(n,o,c,t))
vr=o.doc
var _=e(r)
u=q(u,c,L(c,_),t),c=_,vr=document}}}function cr(r,e,t,_){function n(){e.doc=void 0,u.close()}var o=screen.width-900,c=screen.height-360,u=window.open("","","width=900,height=360,left="+o+",top="+c)
vr=u.document,e.doc=vr,vr.title="Debugger - "+r,vr.body.style.margin="0",vr.body.style.padding="0"
var a=w(t,_)
return vr.body.appendChild(a),vr.addEventListener("keydown",function(r){r.metaKey&&82===r.which&&window.location.reload(),38===r.which&&(_.tagger({ctor:"Up"}),r.preventDefault()),40===r.which&&(_.tagger({ctor:"Down"}),r.preventDefault())}),window.addEventListener("unload",n),u.addEventListener("unload",function(){e.doc=void 0,window.removeEventListener("unload",n),_.tagger({ctor:"Close"})}),vr=document,a}function ur(r,e,t){var _,n=lr(e),o="Normal",c=r.tagger,u=function(){}
return function(e){var a=t(e),i=a._0.ctor
return r.tagger="Normal"===i?c:u,o!==i&&(ar("removeEventListener",n,o),ar("addEventListener",n,i),"Normal"===o&&(_=document.body.style.overflow,document.body.style.overflow="hidden"),"Normal"===i&&(document.body.style.overflow=_),o=i),a._1}}function ar(r,e,t){switch(t){case"Normal":return
case"Pause":return ir(r,e,Nr)
case"Message":return ir(r,e,Ir)}}function ir(r,e,t){for(var _=0;_<t.length;_++)document.body[r](t[_],e,!0)}function lr(r){return function(e){if("keydown"!==e.type||!e.metaKey||82!==e.which){for(var t="scroll"===e.type||"wheel"===e.type,_=e.target;null!==_;){if("elm-overlay-message-details"===_.className&&t)return
if(_===r&&!t)return
_=_.parentNode}e.stopPropagation(),e.preventDefault()}}}var sr="STYLE",pr="EVENT",fr="ATTR",dr="ATTR_NS",vr="undefined"!=typeof document?document:{},mr="_elmW6BL",gr=F(Q),hr=F(K),Tr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)},Nr=["click","dblclick","mousemove","mouseup","mousedown","mouseenter","mouseleave","touchstart","touchend","touchcancel","touchmove","pointerdown","pointerup","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointercancel","dragstart","drag","dragend","dragenter","dragover","dragleave","drop","keyup","keydown","keypress","input","change","focus","blur"],Ir=Nr.concat("wheel","scroll")
return{node:n,text:_,custom:u,map:r(l),on:e(I),style:g,property:r(h),attribute:r(T),attributeNS:e(N),mapProperty:r(J),lazy:r(p),lazy2:e(f),lazy3:t(d),keyedNode:e(c),program:gr,programWithFlags:hr,staticProgram:G}}(),_a=function(r){return a(ta.program,Vo,r)},na=(ta.keyedNode,ta.lazy3,ta.lazy2,ta.lazy,{stopPropagation:!1,preventDefault:!1}),oa=ta.on,ca=r(function(r,e){return i(oa,r,na,e)}),ua=ta.style,aa=(ta.mapProperty,ta.attributeNS,ta.attribute,ta.property),ia=(ta.map,ta.text),la=ta.node,sa=(r(function(r,e){return{stopPropagation:r,preventDefault:e}}),_a),pa=ia,fa=la,da=(fa("body"),fa("section"),fa("nav"),fa("article"),fa("aside"),fa("h1"),fa("h2"),fa("h3"),fa("h4"),fa("h5"),fa("h6"),fa("header"),fa("footer"),fa("address"),fa("main"),fa("p"),fa("hr"),fa("pre"),fa("blockquote"),fa("ol"),fa("ul"),fa("li"),fa("dl"),fa("dt"),fa("dd"),fa("figure"),fa("figcaption"),fa("div")),va=(fa("a"),fa("em"),fa("strong"),fa("small"),fa("s"),fa("cite"),fa("q"),fa("dfn"),fa("abbr"),fa("time"),fa("code"),fa("var"),fa("samp"),fa("kbd"),fa("sub"),fa("sup"),fa("i"),fa("b"),fa("u"),fa("mark"),fa("ruby"),fa("rt"),fa("rp"),fa("bdi"),fa("bdo"),fa("span"),fa("br"),fa("wbr"),fa("ins"),fa("del"),fa("img"),fa("iframe"),fa("embed"),fa("object"),fa("param"),fa("video"),fa("audio"),fa("source"),fa("track"),fa("canvas"),fa("math"),fa("table"),fa("caption"),fa("colgroup"),fa("col"),fa("tbody"),fa("thead"),fa("tfoot"),fa("tr"),fa("td"),fa("th"),fa("form"),fa("fieldset"),fa("legend"),fa("label"),fa("input"),fa("button")),ma=(fa("select"),fa("datalist"),fa("optgroup"),fa("option"),fa("textarea")),ga=(fa("keygen"),fa("output"),fa("progress"),fa("meter"),fa("details"),fa("summary"),fa("menuitem"),fa("menu"),aa),ha=r(function(r,e){return a(ga,r,$u(e))}),Ta=(r(function(r,e){return a(ga,r,zu(e))}),ua),Na=(a(Ku,"keyCode",Yu),a(Hu,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"checked",_1:{ctor:"[]"}}},ra),a(Hu,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"value",_1:{ctor:"[]"}}},ea)),Ia=na,ba=ca,Ja=(v.update(Ia,{preventDefault:!0}),function(r){return a(ba,"click",Fu(r))}),wa=(r(function(r,e){return{stopPropagation:r,preventDefault:e}}),function(r){return N(r)}),ka=r(function(r,e){var t=N(r),_=e
return"Nothing"===_.ctor?a(T["++"],t," "):a(T["++"],t,a(T["++"],":",a(T["++"],_._0," ")))}),ya=function(r){var e=r
if("Nothing"===e.ctor)return""
var t=function(r){return Or(ae(r))}(e._0)
return 0===t?"":a(T["++"],"/",N(t))},Ea=function(r){var e=r
if("Nothing"===e.ctor)return""
var t=e._0
return 0===t?"":a(T["++"],"+",N(t))},Aa=function(r){var e=r
return"Nothing"===e.ctor?"":N(e._0)},Xa=r(function(r,e){var t=e,_=ya(t._2),n=Ea(t._1),o=Aa(t._0)
return a(mr," ",{ctor:"::",_0:_,_1:{ctor:"::",_0:Pe(t._3),_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:n,_1:{ctor:"[]"}}}}})}),Ba=r(function(r,e){for(;;){var t=e,_=t._0,n=t._1,o=t._2,c=t._3,u=t._4,i=t._5,l=a(ka,_,n),s=wa(c)
if("Number"===o.ctor)return i?{ctor:"_Tuple6",_0:l,_1:Zu,_2:ju,_3:s,_4:xu,_5:ju}:{ctor:"_Tuple6",_0:l,_1:Zu,_2:ju,_3:s,_4:Ru,_5:Ou}
var p=u
if("Err"!==p.ctor){var f=a(Xa,r,p._0)
return i?{ctor:"_Tuple6",_0:l,_1:Zu,_2:ju,_3:f,_4:xu,_5:ju}:{ctor:"_Tuple6",_0:l,_1:Zu,_2:ju,_3:f,_4:Ru,_5:Ou}}var d=r,v={ctor:"_Tuple6",_0:_,_1:n,_2:Lo,_3:c,_4:u,_5:i}
r=d,e=v}}),La=function(r){switch(r.ctor){case"L":return{ctor:"_Tuple3",_0:"<",_1:Cu,_2:ju}
case"E":return{ctor:"_Tuple3",_0:"=",_1:Du,_2:ju}
default:return{ctor:"_Tuple3",_0:">",_1:Pu,_2:ju}}},Sa=function(r){switch(r.ctor){case"Overflow":return{ctor:"_Tuple3",_0:"Overflow",_1:Cu,_2:ju}
case"Good":return{ctor:"_Tuple3",_0:"Good",_1:Pu,_2:ju}
default:return{ctor:"_Tuple3",_0:"Fuck!",_1:Ou,_2:ju}}},Ca=function(r){return{ctor:"_Tuple3",_0:N(Wr(r)),_1:Zu,_2:ju}},xa=function(r){return{ctor:"_Tuple3",_0:N(Wr(r)),_1:Mu,_2:ju}},Pa=function(r){return{ctor:"_Tuple3",_0:N(qr(r)),_1:Ru,_2:Ou}},Ma=r(function(r,e){return{ctor:"_Tuple6",_0:e,_1:a(zn,e,r.reverseSymbolTable),_2:a(So,e,r.meta),_3:qr(a(Ao,e,r.mem)),_4:a(ar,Ce,En(Vr(a(Ao,e,r.mem)))),_5:v.eq(r.p,e)}}),Oa=function(r){return a(z,Ma(r),Rn(r.mem))},ja={ctor:"::",_0:Ta({ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-size",_1:"3px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-style",_1:"solid"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-color",_1:"rgb(215,215,215)"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}),_1:{ctor:"[]"}},Da={ctor:"::",_0:Ta({ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"15px"},_1:{ctor:"[]"}}}),_1:{ctor:"[]"}},Ra=function(r){var e=Xu(r),t=N(function(r){return r.red}(e)),_=N(function(r){return r.green}(e)),n=N(function(r){return r.blue}(e)),o=N(function(r){return r.alpha}(e))
return a(T["++"],"rgba(",a(T["++"],a(mr,",",{ctor:"::",_0:t,_1:{ctor:"::",_0:_,_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:o,_1:{ctor:"[]"}}}}}),")"))},Za=r(function(r,e){return{ctor:"::",_0:Ta({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:Ra(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:Ra(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-size",_1:"3px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-style",_1:"solid"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-color",_1:"rgb(215,215,215)"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}}}}),_1:{ctor:"[]"}}}),qa=function(r){var e=Pa(r),t=e._0
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(t),_1:{ctor:"[]"}})},Wa=function(r){var e=Pa(_e)
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(r),_1:{ctor:"[]"}})},Va=function(r){var e=xa(ne)
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(r),_1:{ctor:"[]"}})},Ua=function(r){var e=xa(r),t=e._0
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(t),_1:{ctor:"[]"}})},za=function(r){var e=Ca(r),t=e._0
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(t),_1:{ctor:"[]"}})},$a=function(r){var e=Sa(r),t=e._0
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(t),_1:{ctor:"[]"}})},Fa=function(r){var e=La(r),t=e._0
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(t),_1:{ctor:"[]"}})},Ga=function(r){return a(da,{ctor:"[]"},{ctor:"::",_0:qa(r.a),_1:{ctor:"::",_0:qa(r.x),_1:{ctor:"::",_0:Ua(r.i1),_1:{ctor:"::",_0:Ua(r.i2),_1:{ctor:"::",_0:Ua(r.i3),_1:{ctor:"::",_0:Ua(r.i4),_1:{ctor:"::",_0:Ua(r.i5),_1:{ctor:"::",_0:Ua(r.i6),_1:{ctor:"::",_0:za(r.j),_1:{ctor:"::",_0:$a(r.overflow),_1:{ctor:"::",_0:Fa(r.comparison),_1:{ctor:"[]"}}}}}}}}}}}})},Qa=a(da,{ctor:"[]"},{ctor:"::",_0:Wa("A"),_1:{ctor:"::",_0:Wa("X"),_1:{ctor:"::",_0:Va("I1"),_1:{ctor:"::",_0:Va("I2"),_1:{ctor:"::",_0:Va("I3"),_1:{ctor:"::",_0:Va("I4"),_1:{ctor:"::",_0:Va("I5"),_1:{ctor:"::",_0:Va("I6"),_1:{ctor:"::",_0:function(r){var e=Ca(ne)
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(r),_1:{ctor:"[]"}})}("J"),_1:{ctor:"::",_0:function(r){var e=Sa(fe)
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(r),_1:{ctor:"[]"}})}("Overflow"),_1:{ctor:"::",_0:function(r){var e=La(be)
return a(da,a(Za,e._1,e._2),{ctor:"::",_0:pa(r),_1:{ctor:"[]"}})}("Comparison"),_1:{ctor:"[]"}}}}}}}}}}}}),Ka=r(function(r,e){return{ctor:"::",_0:Ta({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:Ra(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:Ra(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"10px 0px 0px 10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}),_1:{ctor:"[]"}}}),Ha=r(function(r,e){return{ctor:"::",_0:Ta({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:Ra(r)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"color",_1:Ra(e)},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"display",_1:"inline-block"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"padding",_1:"10px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"border-radius",_1:"0px 10px 10px 0px"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-family",_1:"monospace"},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"font-size",_1:"20px"},_1:{ctor:"[]"}}}}}}}}),_1:{ctor:"[]"}}}),Ya=r(function(r,e){var t=a(Ba,r,e),_=t._0,n=t._1,o=t._2,c=t._3,u=t._4,i=t._5
return a(da,ja,{ctor:"::",_0:a(da,a(Ka,n,o),{ctor:"::",_0:pa(_),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(da,a(Ha,u,i),{ctor:"::",_0:pa(c),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}})}),ri=function(r){var e=Oa(r)
return a(da,{ctor:"[]"},a(z,Ya(r),e))},ei=function(r){return a(da,{ctor:"[]"},{ctor:"::",_0:Ga(r),_1:{ctor:"::",_0:ri(r),_1:{ctor:"[]"}}})},ti=function(r){var e=r
return"Nothing"===e.ctor?pa(""):a(da,a(Za,Cu,ju),{ctor:"::",_0:pa(N(e._0)),_1:{ctor:"[]"}})},_i=(_(function(r,e,t,_,n){return{sourceCode:r,compileError:e,mix:t,runtimeError:_,power:n}}),{ctor:"Off"}),ni={sourceCode:"",compileError:x,mix:{ctor:"[]"},runtimeError:x,power:_i},oi={ctor:"On"},ci=r(function(r,e){var t=r
switch(t.ctor){case"Compile":var _=du(e.sourceCode)
return"Err"===_.ctor?v.update(e,{compileError:P(_._0),mix:{ctor:"[]"},power:_i}):v.update(e,{compileError:x,mix:{ctor:"::",_0:Eo(_._0),_1:{ctor:"[]"}},power:oi})
case"KillCurrentCore":return v.update(e,{compileError:x,mix:{ctor:"[]"},runtimeError:x,power:_i})
case"StepForward":var n=e.mix
if("[]"===n.ctor)return e
var o=n._1,c=n._0,u=yu(c)
if("Err"===u.ctor)return v.update(e,{runtimeError:P(u._0)})
var a=u._0._0,i=u._0._1
return"_Tuple3"===i.ctor&&"Halt"===i._2.ctor?v.update(e,{mix:{ctor:"::",_0:a,_1:{ctor:"::",_0:c,_1:o}},runtimeError:x,power:_i}):v.update(e,{mix:{ctor:"::",_0:a,_1:{ctor:"::",_0:c,_1:o}},runtimeError:x,power:oi})
case"StepBackward":var l=e.mix
return"[]"===l.ctor?e:v.update(e,{mix:l._1,runtimeError:x,power:oi})
default:return v.update(e,{sourceCode:t._0})}}),ui=function(r){return{ctor:"ReadCode",_0:r}},ai=a(da,{ctor:"[]"},{ctor:"::",_0:a(ma,a(T["++"],{ctor:"::",_0:function(r){return a(ha,"placeholder",r)}("Write source code here."),_1:{ctor:"::",_0:function(r){return a(ba,"input",a(Qu,r,Na))}(ui),_1:{ctor:"[]"}}},Da),{ctor:"[]"}),_1:{ctor:"[]"}}),ii={ctor:"StepBackward"},li={ctor:"StepForward"},si={ctor:"KillCurrentCore"},pi=function(r){return"On"===r.ctor?a(da,{ctor:"[]"},{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(li),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("step"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(ii),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("back"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(si),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("kill core"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}):a(da,{ctor:"[]"},{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(ii),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("back"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(si),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("kill core"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}})},fi={ctor:"Compile"},di=a(da,{ctor:"[]"},{ctor:"::",_0:a(va,a(T["++"],{ctor:"::",_0:Ja(fi),_1:{ctor:"[]"}},Da),{ctor:"::",_0:pa("compile"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),vi=function(r){return a(da,{ctor:"[]"},{ctor:"::",_0:function(){var e=r.mix
return"[]"===e.ctor?a(da,{ctor:"[]"},{ctor:"::",_0:ai,_1:{ctor:"::",_0:di,_1:{ctor:"::",_0:Qa,_1:{ctor:"::",_0:ti(r.compileError),_1:{ctor:"[]"}}}}}):a(da,{ctor:"[]"},{ctor:"::",_0:ai,_1:{ctor:"::",_0:pi(r.power),_1:{ctor:"::",_0:ei(e._0),_1:{ctor:"::",_0:ti(r.runtimeError),_1:{ctor:"[]"}}}}})}(),_1:{ctor:"[]"}})},mi=function(e){var t=e
return sa({init:a(Ar["!"],t.model,{ctor:"[]"}),update:r(function(r,e){return a(Ar["!"],a(t.update,r,e),{ctor:"[]"})}),view:t.view,subscriptions:function(r){return Br}})}({model:ni,view:vi,update:ci})(),gi={}
if(gi.Main=gi.Main||{},void 0!==mi&&mi(gi.Main,"Main",void 0),"function"==typeof define&&define.amd)return void define([],function(){return gi})
if("object"==typeof module)return void(module.exports=gi)
var hi=this.Elm
if(void 0===hi)return void(this.Elm=gi)
for(var Ti in gi){if(Ti in hi)throw new Error("There are two Elm modules called `"+Ti+"` on this page! Rename one of them.")
hi[Ti]=gi[Ti]}}).call(this)
