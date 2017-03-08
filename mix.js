
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _danielbarter$elm_mix$Atom$map62 = F8(
	function (f, g, h, i, j, k, _p1, _p0) {
		var _p2 = _p1;
		var _p3 = _p0;
		return {
			ctor: '_Tuple6',
			_0: A2(f, _p2._0, _p3._0),
			_1: A2(g, _p2._1, _p3._1),
			_2: A2(h, _p2._2, _p3._2),
			_3: A2(i, _p2._3, _p3._3),
			_4: A2(j, _p2._4, _p3._4),
			_5: A2(k, _p2._5, _p3._5)
		};
	});
var _danielbarter$elm_mix$Atom$map6 = F7(
	function (f, g, h, i, j, k, _p4) {
		var _p5 = _p4;
		return {
			ctor: '_Tuple6',
			_0: f(_p5._0),
			_1: g(_p5._1),
			_2: h(_p5._2),
			_3: i(_p5._3),
			_4: j(_p5._4),
			_5: k(_p5._5)
		};
	});
var _danielbarter$elm_mix$Atom$map4 = F5(
	function (f, g, h, i, _p6) {
		var _p7 = _p6;
		return {
			ctor: '_Tuple4',
			_0: f(_p7._0),
			_1: g(_p7._1),
			_2: h(_p7._2),
			_3: i(_p7._3)
		};
	});
var _danielbarter$elm_mix$Atom$map3 = F4(
	function (f, g, h, _p8) {
		var _p9 = _p8;
		return {
			ctor: '_Tuple3',
			_0: f(_p9._0),
			_1: g(_p9._1),
			_2: h(_p9._2)
		};
	});
var _danielbarter$elm_mix$Atom$maskFilter = F3(
	function (m, x, y) {
		var _p10 = m;
		if (_p10.ctor === 'On') {
			return y;
		} else {
			return x;
		}
	});
var _danielbarter$elm_mix$Atom$copy = F3(
	function (_p11, w1, w2) {
		var _p12 = _p11;
		return A8(
			_danielbarter$elm_mix$Atom$map62,
			_danielbarter$elm_mix$Atom$maskFilter(_p12._0),
			_danielbarter$elm_mix$Atom$maskFilter(_p12._1),
			_danielbarter$elm_mix$Atom$maskFilter(_p12._2),
			_danielbarter$elm_mix$Atom$maskFilter(_p12._3),
			_danielbarter$elm_mix$Atom$maskFilter(_p12._4),
			_danielbarter$elm_mix$Atom$maskFilter(_p12._5),
			w1,
			w2);
	});
var _danielbarter$elm_mix$Atom$wordContract = function (_p13) {
	var _p14 = _p13;
	return {ctor: '_Tuple3', _0: _p14._0, _1: _p14._4, _2: _p14._5};
};
var _danielbarter$elm_mix$Atom$value = function (_p15) {
	var _p16 = _p15;
	return _p16._0;
};
var _danielbarter$elm_mix$Atom$mixBase = Math.pow(10, 2);
var _danielbarter$elm_mix$Atom$baseContractUnsignedLittle = F2(
	function (b, ns) {
		var l = _elm_lang$core$List$length(ns);
		var is = A2(_elm_lang$core$List$range, 0, l - 1);
		var ps = A2(
			_elm_lang$core$List$map,
			F2(
				function (x, y) {
					return Math.pow(x, y);
				})(b),
			is);
		return _elm_lang$core$List$sum(
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return x * y;
					}),
				ns,
				ps));
	});
var _danielbarter$elm_mix$Atom$baseContractUnsigned = F2(
	function (b, ns) {
		return A2(
			_danielbarter$elm_mix$Atom$baseContractUnsignedLittle,
			b,
			_elm_lang$core$List$reverse(ns));
	});
var _danielbarter$elm_mix$Atom$baseContract = F2(
	function (b, _p17) {
		var _p18 = _p17;
		var _p20 = _p18._1;
		var _p19 = _p18._0;
		if (_p19.ctor === 'Pos') {
			return A2(_danielbarter$elm_mix$Atom$baseContractUnsigned, b, _p20);
		} else {
			return _elm_lang$core$Basics$negate(
				A2(_danielbarter$elm_mix$Atom$baseContractUnsigned, b, _p20));
		}
	});
var _danielbarter$elm_mix$Atom$wordValue = function (_p21) {
	var _p22 = _p21;
	return A2(
		_danielbarter$elm_mix$Atom$baseContract,
		_danielbarter$elm_mix$Atom$mixBase,
		{
			ctor: '_Tuple2',
			_0: _p22._0,
			_1: A2(
				_elm_lang$core$List$map,
				_danielbarter$elm_mix$Atom$value,
				{
					ctor: '::',
					_0: _p22._1,
					_1: {
						ctor: '::',
						_0: _p22._2,
						_1: {
							ctor: '::',
							_0: _p22._3,
							_1: {
								ctor: '::',
								_0: _p22._4,
								_1: {
									ctor: '::',
									_0: _p22._5,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				})
		});
};
var _danielbarter$elm_mix$Atom$smallWordValue = function (_p23) {
	var _p24 = _p23;
	return A2(
		_danielbarter$elm_mix$Atom$baseContract,
		_danielbarter$elm_mix$Atom$mixBase,
		{
			ctor: '_Tuple2',
			_0: _p24._0,
			_1: A2(
				_elm_lang$core$List$map,
				_danielbarter$elm_mix$Atom$value,
				{
					ctor: '::',
					_0: _p24._1,
					_1: {
						ctor: '::',
						_0: _p24._2,
						_1: {ctor: '[]'}
					}
				})
		});
};
var _danielbarter$elm_mix$Atom$unpack = function (_p25) {
	var _p26 = _p25;
	return {
		ctor: '_Tuple4',
		_0: _danielbarter$elm_mix$Atom$smallWordValue(
			{ctor: '_Tuple3', _0: _p26._0, _1: _p26._1, _2: _p26._2}),
		_1: _danielbarter$elm_mix$Atom$value(_p26._3),
		_2: _danielbarter$elm_mix$Atom$value(_p26._4),
		_3: _danielbarter$elm_mix$Atom$value(_p26._5)
	};
};
var _danielbarter$elm_mix$Atom$baseExpandUnsignedLittle = F2(
	function (b, n) {
		if (_elm_lang$core$Native_Utils.cmp(n, b) < 0) {
			return {
				ctor: '::',
				_0: n,
				_1: {ctor: '[]'}
			};
		} else {
			var q = (n / b) | 0;
			var rest = A2(_danielbarter$elm_mix$Atom$baseExpandUnsignedLittle, b, q);
			var r = A2(_elm_lang$core$Basics_ops['%'], n, b);
			return {ctor: '::', _0: r, _1: rest};
		}
	});
var _danielbarter$elm_mix$Atom$baseExpandUnsigned = F2(
	function (b, n) {
		return _elm_lang$core$List$reverse(
			A2(_danielbarter$elm_mix$Atom$baseExpandUnsignedLittle, b, n));
	});
var _danielbarter$elm_mix$Atom$baseExpandUnsignedPad = F3(
	function (b, n, l) {
		var u = A2(_danielbarter$elm_mix$Atom$baseExpandUnsigned, b, n);
		var len = _elm_lang$core$List$length(u);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$List$repeat, l - len, 0),
			u);
	});
var _danielbarter$elm_mix$Atom$Neg = {ctor: 'Neg'};
var _danielbarter$elm_mix$Atom$Pos = {ctor: 'Pos'};
var _danielbarter$elm_mix$Atom$swap = function (s) {
	var _p27 = s;
	if (_p27.ctor === 'Pos') {
		return _danielbarter$elm_mix$Atom$Neg;
	} else {
		return _danielbarter$elm_mix$Atom$Pos;
	}
};
var _danielbarter$elm_mix$Atom$flipSignWord = function (w) {
	return A7(_danielbarter$elm_mix$Atom$map6, _danielbarter$elm_mix$Atom$swap, _elm_lang$core$Basics$identity, _elm_lang$core$Basics$identity, _elm_lang$core$Basics$identity, _elm_lang$core$Basics$identity, _elm_lang$core$Basics$identity, w);
};
var _danielbarter$elm_mix$Atom$flipSignSmallWord = function (w) {
	return A4(_danielbarter$elm_mix$Atom$map3, _danielbarter$elm_mix$Atom$swap, _elm_lang$core$Basics$identity, _elm_lang$core$Basics$identity, w);
};
var _danielbarter$elm_mix$Atom$baseExpand = F2(
	function (b, n) {
		return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? {
			ctor: '_Tuple2',
			_0: _danielbarter$elm_mix$Atom$Neg,
			_1: A2(_danielbarter$elm_mix$Atom$baseExpandUnsigned, b, 0 - n)
		} : {
			ctor: '_Tuple2',
			_0: _danielbarter$elm_mix$Atom$Pos,
			_1: A2(_danielbarter$elm_mix$Atom$baseExpandUnsigned, b, n)
		};
	});
var _danielbarter$elm_mix$Atom$baseExpandPad = F3(
	function (b, n, l) {
		return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? {
			ctor: '_Tuple2',
			_0: _danielbarter$elm_mix$Atom$Neg,
			_1: A3(_danielbarter$elm_mix$Atom$baseExpandUnsignedPad, b, 0 - n, l)
		} : {
			ctor: '_Tuple2',
			_0: _danielbarter$elm_mix$Atom$Pos,
			_1: A3(_danielbarter$elm_mix$Atom$baseExpandUnsignedPad, b, n, l)
		};
	});
var _danielbarter$elm_mix$Atom$Byte = function (a) {
	return {ctor: 'Byte', _0: a};
};
var _danielbarter$elm_mix$Atom$byte = function (n) {
	return _danielbarter$elm_mix$Atom$Byte(
		A2(_elm_lang$core$Basics_ops['%'], n, _danielbarter$elm_mix$Atom$mixBase));
};
var _danielbarter$elm_mix$Atom$zero = _danielbarter$elm_mix$Atom$byte(0);
var _danielbarter$elm_mix$Atom$zeroWord = {ctor: '_Tuple6', _0: _danielbarter$elm_mix$Atom$Pos, _1: _danielbarter$elm_mix$Atom$zero, _2: _danielbarter$elm_mix$Atom$zero, _3: _danielbarter$elm_mix$Atom$zero, _4: _danielbarter$elm_mix$Atom$zero, _5: _danielbarter$elm_mix$Atom$zero};
var _danielbarter$elm_mix$Atom$zeroSmallWord = {ctor: '_Tuple3', _0: _danielbarter$elm_mix$Atom$Pos, _1: _danielbarter$elm_mix$Atom$zero, _2: _danielbarter$elm_mix$Atom$zero};
var _danielbarter$elm_mix$Atom$wordExpand = function (_p28) {
	var _p29 = _p28;
	return {ctor: '_Tuple6', _0: _p29._0, _1: _danielbarter$elm_mix$Atom$zero, _2: _danielbarter$elm_mix$Atom$zero, _3: _danielbarter$elm_mix$Atom$zero, _4: _p29._1, _5: _p29._2};
};
var _danielbarter$elm_mix$Atom$shift = F2(
	function (n, _p30) {
		shift:
		while (true) {
			var _p31 = _p30;
			var _p37 = _p31._0;
			var _p36 = _p31._5;
			var _p35 = _p31._4;
			var _p34 = _p31._3;
			var _p33 = _p31._2;
			var _p32 = _p31._1;
			if (_elm_lang$core$Native_Utils.cmp(n, 0) > 0) {
				var _v17 = n - 1,
					_v18 = {ctor: '_Tuple6', _0: _p37, _1: _danielbarter$elm_mix$Atom$zero, _2: _p32, _3: _p33, _4: _p34, _5: _p35};
				n = _v17;
				_p30 = _v18;
				continue shift;
			} else {
				if (_elm_lang$core$Native_Utils.eq(n, 0)) {
					return {ctor: '_Tuple6', _0: _p37, _1: _p32, _2: _p33, _3: _p34, _4: _p35, _5: _p36};
				} else {
					var _v19 = n + 1,
						_v20 = {ctor: '_Tuple6', _0: _p37, _1: _p33, _2: _p34, _3: _p35, _4: _p36, _5: _danielbarter$elm_mix$Atom$zero};
					n = _v19;
					_p30 = _v20;
					continue shift;
				}
			}
		}
	});
var _danielbarter$elm_mix$Atom$shiftCircular = F2(
	function (n, _p38) {
		var _p39 = _p38;
		var _p45 = _p39._0;
		var _p44 = _p39._5;
		var _p43 = _p39._4;
		var _p42 = _p39._3;
		var _p41 = _p39._2;
		var _p40 = _p39._1;
		return (_elm_lang$core$Native_Utils.cmp(n, 0) > 0) ? A2(
			_danielbarter$elm_mix$Atom$shift,
			n - 1,
			{ctor: '_Tuple6', _0: _p45, _1: _p44, _2: _p40, _3: _p41, _4: _p42, _5: _p43}) : (_elm_lang$core$Native_Utils.eq(n, 0) ? {ctor: '_Tuple6', _0: _p45, _1: _p40, _2: _p41, _3: _p42, _4: _p43, _5: _p44} : A2(
			_danielbarter$elm_mix$Atom$shift,
			n + 1,
			{ctor: '_Tuple6', _0: _p45, _1: _p41, _2: _p42, _3: _p43, _4: _p44, _5: _p40}));
	});
var _danielbarter$elm_mix$Atom$masksToByte = function (_p46) {
	var _p47 = _p46;
	var f = function (m) {
		var _p48 = m;
		if (_p48.ctor === 'Off') {
			return 0;
		} else {
			return 1;
		}
	};
	return _danielbarter$elm_mix$Atom$byte(
		A2(
			_danielbarter$elm_mix$Atom$baseContract,
			2,
			{
				ctor: '_Tuple2',
				_0: _danielbarter$elm_mix$Atom$Pos,
				_1: A2(
					_elm_lang$core$List$map,
					f,
					{
						ctor: '::',
						_0: _p47._0,
						_1: {
							ctor: '::',
							_0: _p47._1,
							_1: {
								ctor: '::',
								_0: _p47._2,
								_1: {
									ctor: '::',
									_0: _p47._3,
									_1: {
										ctor: '::',
										_0: _p47._4,
										_1: {
											ctor: '::',
											_0: _p47._5,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					})
			}));
};
var _danielbarter$elm_mix$Atom$Off = {ctor: 'Off'};
var _danielbarter$elm_mix$Atom$On = {ctor: 'On'};
var _danielbarter$elm_mix$Atom$byteToMasks = function (_p49) {
	var _p50 = _p49;
	var bitToMask = function (i) {
		return _elm_lang$core$Native_Utils.eq(i, 0) ? _danielbarter$elm_mix$Atom$Off : _danielbarter$elm_mix$Atom$On;
	};
	var _p51 = A3(_danielbarter$elm_mix$Atom$baseExpandPad, 2, _p50._0, 6);
	_v25_2:
	do {
		if (((((((_p51.ctor === '_Tuple2') && (_p51._1.ctor === '::')) && (_p51._1._1.ctor === '::')) && (_p51._1._1._1.ctor === '::')) && (_p51._1._1._1._1.ctor === '::')) && (_p51._1._1._1._1._1.ctor === '::')) && (_p51._1._1._1._1._1._1.ctor === '::')) {
			if (_p51._1._1._1._1._1._1._1.ctor === '[]') {
				return {
					ctor: '_Tuple6',
					_0: bitToMask(_p51._1._0),
					_1: bitToMask(_p51._1._1._0),
					_2: bitToMask(_p51._1._1._1._0),
					_3: bitToMask(_p51._1._1._1._1._0),
					_4: bitToMask(_p51._1._1._1._1._1._0),
					_5: bitToMask(_p51._1._1._1._1._1._1._0)
				};
			} else {
				if (_p51._1._1._1._1._1._1._1._1.ctor === '[]') {
					return {
						ctor: '_Tuple6',
						_0: bitToMask(_p51._1._1._0),
						_1: bitToMask(_p51._1._1._1._0),
						_2: bitToMask(_p51._1._1._1._1._0),
						_3: bitToMask(_p51._1._1._1._1._1._0),
						_4: bitToMask(_p51._1._1._1._1._1._1._0),
						_5: bitToMask(_p51._1._1._1._1._1._1._1._0)
					};
				} else {
					break _v25_2;
				}
			}
		} else {
			break _v25_2;
		}
	} while(false);
	return {ctor: '_Tuple6', _0: _danielbarter$elm_mix$Atom$Off, _1: _danielbarter$elm_mix$Atom$Off, _2: _danielbarter$elm_mix$Atom$Off, _3: _danielbarter$elm_mix$Atom$Off, _4: _danielbarter$elm_mix$Atom$Off, _5: _danielbarter$elm_mix$Atom$Off};
};
var _danielbarter$elm_mix$Atom$Ignored = {ctor: 'Ignored'};
var _danielbarter$elm_mix$Atom$Good = {ctor: 'Good'};
var _danielbarter$elm_mix$Atom$Overflow = {ctor: 'Overflow'};
var _danielbarter$elm_mix$Atom$intToWord = F2(
	function (n, $default) {
		var _p52 = A3(_danielbarter$elm_mix$Atom$baseExpandPad, _danielbarter$elm_mix$Atom$mixBase, n, 6);
		var s = _p52._0;
		var vs = _p52._1;
		var l = _elm_lang$core$List$length(vs);
		var _p53 = A2(_elm_lang$core$List$drop, l - 6, vs);
		if (((((((_p53.ctor === '::') && (_p53._1.ctor === '::')) && (_p53._1._1.ctor === '::')) && (_p53._1._1._1.ctor === '::')) && (_p53._1._1._1._1.ctor === '::')) && (_p53._1._1._1._1._1.ctor === '::')) && (_p53._1._1._1._1._1._1.ctor === '[]')) {
			if (_p53._0 === 0) {
				return {
					ctor: '_Tuple2',
					_0: _danielbarter$elm_mix$Atom$Good,
					_1: {
						ctor: '_Tuple6',
						_0: s,
						_1: _danielbarter$elm_mix$Atom$byte(_p53._1._0),
						_2: _danielbarter$elm_mix$Atom$byte(_p53._1._1._0),
						_3: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._0),
						_4: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._1._0),
						_5: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._1._1._0)
					}
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _danielbarter$elm_mix$Atom$Overflow,
					_1: {
						ctor: '_Tuple6',
						_0: s,
						_1: _danielbarter$elm_mix$Atom$byte(_p53._1._0),
						_2: _danielbarter$elm_mix$Atom$byte(_p53._1._1._0),
						_3: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._0),
						_4: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._1._0),
						_5: _danielbarter$elm_mix$Atom$byte(_p53._1._1._1._1._1._0)
					}
				};
			}
		} else {
			return {ctor: '_Tuple2', _0: _danielbarter$elm_mix$Atom$Ignored, _1: $default};
		}
	});
var _danielbarter$elm_mix$Atom$op = F4(
	function (op, masks, a, m) {
		var aValue = _danielbarter$elm_mix$Atom$wordValue(a);
		var mm = A3(_danielbarter$elm_mix$Atom$copy, masks, m, _danielbarter$elm_mix$Atom$zeroWord);
		var mmValue = _danielbarter$elm_mix$Atom$wordValue(mm);
		return A2(
			_danielbarter$elm_mix$Atom$intToWord,
			A2(op, aValue, mmValue),
			a);
	});
var _danielbarter$elm_mix$Atom$intToSmallWord = F2(
	function (n, $default) {
		var _p54 = A3(_danielbarter$elm_mix$Atom$baseExpandPad, _danielbarter$elm_mix$Atom$mixBase, n, 3);
		var s = _p54._0;
		var vs = _p54._1;
		var l = _elm_lang$core$List$length(vs);
		var _p55 = A2(_elm_lang$core$List$drop, l - 3, vs);
		if ((((_p55.ctor === '::') && (_p55._1.ctor === '::')) && (_p55._1._1.ctor === '::')) && (_p55._1._1._1.ctor === '[]')) {
			if (_p55._0 === 0) {
				return {
					ctor: '_Tuple2',
					_0: _danielbarter$elm_mix$Atom$Good,
					_1: {
						ctor: '_Tuple3',
						_0: s,
						_1: _danielbarter$elm_mix$Atom$byte(_p55._1._0),
						_2: _danielbarter$elm_mix$Atom$byte(_p55._1._1._0)
					}
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _danielbarter$elm_mix$Atom$Overflow,
					_1: {
						ctor: '_Tuple3',
						_0: s,
						_1: _danielbarter$elm_mix$Atom$byte(_p55._1._0),
						_2: _danielbarter$elm_mix$Atom$byte(_p55._1._1._0)
					}
				};
			}
		} else {
			return {ctor: '_Tuple2', _0: _danielbarter$elm_mix$Atom$Ignored, _1: $default};
		}
	});
var _danielbarter$elm_mix$Atom$pack = function (_p56) {
	var _p57 = _p56;
	var _p58 = _elm_lang$core$Tuple$second(
		A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p57._0, _danielbarter$elm_mix$Atom$zeroSmallWord));
	var s = _p58._0;
	var b1 = _p58._1;
	var b2 = _p58._2;
	return {
		ctor: '_Tuple6',
		_0: s,
		_1: b1,
		_2: b2,
		_3: _danielbarter$elm_mix$Atom$byte(_p57._1),
		_4: _danielbarter$elm_mix$Atom$byte(_p57._2),
		_5: _danielbarter$elm_mix$Atom$byte(_p57._3)
	};
};
var _danielbarter$elm_mix$Atom$G = {ctor: 'G'};
var _danielbarter$elm_mix$Atom$E = {ctor: 'E'};
var _danielbarter$elm_mix$Atom$L = {ctor: 'L'};
var _danielbarter$elm_mix$Atom$comp = F3(
	function (masks, a, m) {
		var aa = A3(_danielbarter$elm_mix$Atom$copy, masks, a, _danielbarter$elm_mix$Atom$zeroWord);
		var aaValue = _danielbarter$elm_mix$Atom$wordValue(aa);
		var mm = A3(_danielbarter$elm_mix$Atom$copy, masks, m, _danielbarter$elm_mix$Atom$zeroWord);
		var mmValue = _danielbarter$elm_mix$Atom$wordValue(mm);
		return (_elm_lang$core$Native_Utils.cmp(aaValue, mmValue) < 0) ? _danielbarter$elm_mix$Atom$L : (_elm_lang$core$Native_Utils.eq(aaValue, mmValue) ? _danielbarter$elm_mix$Atom$E : _danielbarter$elm_mix$Atom$G);
	});

var _danielbarter$elm_mix$Instruction$cleanStatic = function (_p0) {
	var _p1 = _p0;
	var _p6 = _p1._3;
	var _p5 = _p1._2;
	var _p4 = _p1._1;
	var _p3 = _p1._0;
	var _p2 = _p6;
	switch (_p2.ctor) {
		case 'LoadA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadANeg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadXNeg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI1Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI2Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI3Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI4Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI5Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'LoadI6Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreJ':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'StoreZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'Add':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'Sub':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'AddX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'SubX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'EnterA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterANeg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterXNeg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI1Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI2Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI3Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI4Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI5Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'EnterI6Neg':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'IncrementI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'DecrementI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'CompareA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI1':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI2':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI3':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI4':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI5':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'CompareI6':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Just(_p5),
				_3: _p6
			};
		case 'Jump':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpSaveJ':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnOverflow':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnNoOverflow':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnLess':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnEqual':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnGreater':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnGreaterEqual':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnUnEqual':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpOnLessEqual':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpANegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpAZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpAPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpANonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpANonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpANonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXNonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXNonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpXNonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI1NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI2NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI3NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI4NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI5NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6Negative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6Zero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6Positive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6NonNegative':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6NonZero':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'JumpI6NonPositive':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'ShiftA':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'ShiftX':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'ShiftACircular':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'ShiftXCircular':
			return {
				ctor: '_Tuple4',
				_0: _elm_lang$core$Maybe$Just(_p3),
				_1: _elm_lang$core$Maybe$Just(_p4),
				_2: _elm_lang$core$Maybe$Nothing,
				_3: _p6
			};
		case 'SwapAX':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI1':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI2':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI3':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI4':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI5':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'MoveXI6':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		case 'NoOperation':
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
		default:
			return {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _p6};
	}
};
var _danielbarter$elm_mix$Instruction$encodeInstruction = function (_p7) {
	var _p8 = _p7;
	var _p11 = _p8._1;
	var _p10 = _p8._0;
	var f = _danielbarter$elm_mix$Atom$value(
		_danielbarter$elm_mix$Atom$masksToByte(_p8._2));
	var _p9 = _p8._3;
	switch (_p9.ctor) {
		case 'LoadA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 8};
		case 'LoadX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 15};
		case 'LoadI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 9};
		case 'LoadI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 10};
		case 'LoadI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 11};
		case 'LoadI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 12};
		case 'LoadI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 13};
		case 'LoadI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 14};
		case 'LoadANeg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 16};
		case 'LoadXNeg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 23};
		case 'LoadI1Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 17};
		case 'LoadI2Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 18};
		case 'LoadI3Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 19};
		case 'LoadI4Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 20};
		case 'LoadI5Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 21};
		case 'LoadI6Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 22};
		case 'StoreA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 24};
		case 'StoreX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 31};
		case 'StoreI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 25};
		case 'StoreI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 26};
		case 'StoreI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 27};
		case 'StoreI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 28};
		case 'StoreI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 29};
		case 'StoreI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 30};
		case 'StoreJ':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 32};
		case 'StoreZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 33};
		case 'Add':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 1};
		case 'Sub':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 2};
		case 'AddX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 3};
		case 'SubX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 4};
		case 'EnterA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 48};
		case 'EnterX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 55};
		case 'EnterI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 49};
		case 'EnterI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 50};
		case 'EnterI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 51};
		case 'EnterI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 52};
		case 'EnterI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 53};
		case 'EnterI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 54};
		case 'EnterANeg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 48};
		case 'EnterXNeg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 55};
		case 'EnterI1Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 49};
		case 'EnterI2Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 50};
		case 'EnterI3Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 51};
		case 'EnterI4Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 52};
		case 'EnterI5Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 53};
		case 'EnterI6Neg':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 54};
		case 'IncrementA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 48};
		case 'IncrementX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 55};
		case 'IncrementI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 49};
		case 'IncrementI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 50};
		case 'IncrementI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 51};
		case 'IncrementI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 52};
		case 'IncrementI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 53};
		case 'IncrementI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 54};
		case 'DecrementA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 48};
		case 'DecrementX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 55};
		case 'DecrementI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 49};
		case 'DecrementI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 50};
		case 'DecrementI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 51};
		case 'DecrementI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 52};
		case 'DecrementI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 53};
		case 'DecrementI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 54};
		case 'CompareA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 56};
		case 'CompareX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 63};
		case 'CompareI1':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 57};
		case 'CompareI2':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 58};
		case 'CompareI3':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 59};
		case 'CompareI4':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 60};
		case 'CompareI5':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 61};
		case 'CompareI6':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: f, _3: 62};
		case 'Jump':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 39};
		case 'JumpSaveJ':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 39};
		case 'JumpOnOverflow':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 39};
		case 'JumpOnNoOverflow':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 39};
		case 'JumpOnLess':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 39};
		case 'JumpOnEqual':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 39};
		case 'JumpOnGreater':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 6, _3: 39};
		case 'JumpOnGreaterEqual':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 7, _3: 39};
		case 'JumpOnUnEqual':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 8, _3: 39};
		case 'JumpOnLessEqual':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 9, _3: 39};
		case 'JumpANegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 40};
		case 'JumpAZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 40};
		case 'JumpAPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 40};
		case 'JumpANonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 40};
		case 'JumpANonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 40};
		case 'JumpANonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 40};
		case 'JumpXNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 47};
		case 'JumpXZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 47};
		case 'JumpXPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 47};
		case 'JumpXNonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 47};
		case 'JumpXNonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 47};
		case 'JumpXNonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 47};
		case 'JumpI1Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 41};
		case 'JumpI1Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 41};
		case 'JumpI1Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 41};
		case 'JumpI1NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 41};
		case 'JumpI1NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 41};
		case 'JumpI1NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 41};
		case 'JumpI2Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 42};
		case 'JumpI2Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 42};
		case 'JumpI2Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 42};
		case 'JumpI2NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 42};
		case 'JumpI2NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 42};
		case 'JumpI2NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 42};
		case 'JumpI3Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 43};
		case 'JumpI3Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 43};
		case 'JumpI3Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 43};
		case 'JumpI3NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 43};
		case 'JumpI3NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 43};
		case 'JumpI3NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 43};
		case 'JumpI4Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 44};
		case 'JumpI4Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 44};
		case 'JumpI4Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 44};
		case 'JumpI4NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 44};
		case 'JumpI4NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 44};
		case 'JumpI4NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 44};
		case 'JumpI5Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 45};
		case 'JumpI5Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 45};
		case 'JumpI5Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 45};
		case 'JumpI5NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 45};
		case 'JumpI5NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 45};
		case 'JumpI5NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 45};
		case 'JumpI6Negative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 46};
		case 'JumpI6Zero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 46};
		case 'JumpI6Positive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 46};
		case 'JumpI6NonNegative':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 46};
		case 'JumpI6NonZero':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 4, _3: 46};
		case 'JumpI6NonPositive':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 5, _3: 46};
		case 'ShiftA':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 0, _3: 6};
		case 'ShiftX':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 1, _3: 6};
		case 'ShiftACircular':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 2, _3: 6};
		case 'ShiftXCircular':
			return {ctor: '_Tuple4', _0: _p10, _1: _p11, _2: 3, _3: 6};
		case 'SwapAX':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 4, _3: 6};
		case 'MoveXI1':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 7};
		case 'MoveXI2':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 1, _3: 7};
		case 'MoveXI3':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 2, _3: 7};
		case 'MoveXI4':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 3, _3: 7};
		case 'MoveXI5':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 4, _3: 7};
		case 'MoveXI6':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 5, _3: 7};
		case 'NoOperation':
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
		default:
			return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 2, _3: 5};
	}
};
var _danielbarter$elm_mix$Instruction$ppTag = function (t) {
	var _p12 = t;
	switch (_p12.ctor) {
		case 'LoadA':
			return 'LDA';
		case 'LoadX':
			return 'LDX';
		case 'LoadI1':
			return 'LD1';
		case 'LoadI2':
			return 'LD2';
		case 'LoadI3':
			return 'LD3';
		case 'LoadI4':
			return 'LD4';
		case 'LoadI5':
			return 'LD5';
		case 'LoadI6':
			return 'LD6';
		case 'LoadANeg':
			return 'LDAN';
		case 'LoadXNeg':
			return 'LDXN';
		case 'LoadI1Neg':
			return 'LD1N';
		case 'LoadI2Neg':
			return 'LD2N';
		case 'LoadI3Neg':
			return 'LD3N';
		case 'LoadI4Neg':
			return 'LD4N';
		case 'LoadI5Neg':
			return 'LD5N';
		case 'LoadI6Neg':
			return 'LD6N';
		case 'StoreA':
			return 'STA';
		case 'StoreX':
			return 'STX';
		case 'StoreI1':
			return 'ST1';
		case 'StoreI2':
			return 'ST2';
		case 'StoreI3':
			return 'ST3';
		case 'StoreI4':
			return 'ST4';
		case 'StoreI5':
			return 'ST5';
		case 'StoreI6':
			return 'ST6';
		case 'StoreJ':
			return 'STJ';
		case 'StoreZero':
			return 'STZ';
		case 'Add':
			return 'ADD';
		case 'Sub':
			return 'SUB';
		case 'AddX':
			return 'ADDX';
		case 'SubX':
			return 'SUBX';
		case 'EnterA':
			return 'ENTA';
		case 'EnterX':
			return 'ENTX';
		case 'EnterI1':
			return 'ENT1';
		case 'EnterI2':
			return 'ENT2';
		case 'EnterI3':
			return 'ENT3';
		case 'EnterI4':
			return 'ENT4';
		case 'EnterI5':
			return 'ENT5';
		case 'EnterI6':
			return 'ENT6';
		case 'EnterANeg':
			return 'ENNA';
		case 'EnterXNeg':
			return 'ENNX';
		case 'EnterI1Neg':
			return 'ENN1';
		case 'EnterI2Neg':
			return 'ENN2';
		case 'EnterI3Neg':
			return 'ENN3';
		case 'EnterI4Neg':
			return 'ENN4';
		case 'EnterI5Neg':
			return 'ENN5';
		case 'EnterI6Neg':
			return 'ENN6';
		case 'IncrementA':
			return 'INCA';
		case 'IncrementX':
			return 'INCX';
		case 'IncrementI1':
			return 'INC1';
		case 'IncrementI2':
			return 'INC2';
		case 'IncrementI3':
			return 'INC3';
		case 'IncrementI4':
			return 'INC4';
		case 'IncrementI5':
			return 'INC5';
		case 'IncrementI6':
			return 'INC6';
		case 'DecrementA':
			return 'DECA';
		case 'DecrementX':
			return 'DECX';
		case 'DecrementI1':
			return 'DEC1';
		case 'DecrementI2':
			return 'DEC2';
		case 'DecrementI3':
			return 'DEC3';
		case 'DecrementI4':
			return 'DEC4';
		case 'DecrementI5':
			return 'DEC5';
		case 'DecrementI6':
			return 'DEC6';
		case 'CompareA':
			return 'CMPA';
		case 'CompareX':
			return 'CMPX';
		case 'CompareI1':
			return 'CMP1';
		case 'CompareI2':
			return 'CMP2';
		case 'CompareI3':
			return 'CMP3';
		case 'CompareI4':
			return 'CMP4';
		case 'CompareI5':
			return 'CMP5';
		case 'CompareI6':
			return 'CMP6';
		case 'Jump':
			return 'JMP';
		case 'JumpSaveJ':
			return 'JSJ';
		case 'JumpOnOverflow':
			return 'JOV';
		case 'JumpOnNoOverflow':
			return 'JNOV';
		case 'JumpOnLess':
			return 'JL';
		case 'JumpOnEqual':
			return 'JE';
		case 'JumpOnGreater':
			return 'JG';
		case 'JumpOnGreaterEqual':
			return 'JGE';
		case 'JumpOnUnEqual':
			return 'JNE';
		case 'JumpOnLessEqual':
			return 'JLE';
		case 'JumpANegative':
			return 'JAN';
		case 'JumpAZero':
			return 'JAZ';
		case 'JumpAPositive':
			return 'JAP';
		case 'JumpANonNegative':
			return 'JANN';
		case 'JumpANonZero':
			return 'JANZ';
		case 'JumpANonPositive':
			return 'JANP';
		case 'JumpXNegative':
			return 'JXN';
		case 'JumpXZero':
			return 'JXZ';
		case 'JumpXPositive':
			return 'JXP';
		case 'JumpXNonNegative':
			return 'JXNN';
		case 'JumpXNonZero':
			return 'JXNZ';
		case 'JumpXNonPositive':
			return 'JXNP';
		case 'JumpI1Negative':
			return 'J1N';
		case 'JumpI1Zero':
			return 'J1Z';
		case 'JumpI1Positive':
			return 'J1P';
		case 'JumpI1NonNegative':
			return 'J1NN';
		case 'JumpI1NonZero':
			return 'J1NZ';
		case 'JumpI1NonPositive':
			return 'J1NP';
		case 'JumpI2Negative':
			return 'J2N';
		case 'JumpI2Zero':
			return 'J2Z';
		case 'JumpI2Positive':
			return 'J2P';
		case 'JumpI2NonNegative':
			return 'J2NN';
		case 'JumpI2NonZero':
			return 'J2NZ';
		case 'JumpI2NonPositive':
			return 'J2NP';
		case 'JumpI3Negative':
			return 'J3N';
		case 'JumpI3Zero':
			return 'J3Z';
		case 'JumpI3Positive':
			return 'J3P';
		case 'JumpI3NonNegative':
			return 'J3NN';
		case 'JumpI3NonZero':
			return 'J3NZ';
		case 'JumpI3NonPositive':
			return 'J3NP';
		case 'JumpI4Negative':
			return 'J4N';
		case 'JumpI4Zero':
			return 'J4Z';
		case 'JumpI4Positive':
			return 'J4P';
		case 'JumpI4NonNegative':
			return 'J4NN';
		case 'JumpI4NonZero':
			return 'J4NZ';
		case 'JumpI4NonPositive':
			return 'J4NP';
		case 'JumpI5Negative':
			return 'J5N';
		case 'JumpI5Zero':
			return 'J5Z';
		case 'JumpI5Positive':
			return 'J5P';
		case 'JumpI5NonNegative':
			return 'J5NN';
		case 'JumpI5NonZero':
			return 'J5NZ';
		case 'JumpI5NonPositive':
			return 'J5NP';
		case 'JumpI6Negative':
			return 'J6N';
		case 'JumpI6Zero':
			return 'J6Z';
		case 'JumpI6Positive':
			return 'J6P';
		case 'JumpI6NonNegative':
			return 'J6NN';
		case 'JumpI6NonZero':
			return 'J6NZ';
		case 'JumpI6NonPositive':
			return 'J6NP';
		case 'ShiftA':
			return 'SA';
		case 'ShiftX':
			return 'SX';
		case 'ShiftACircular':
			return 'SAC';
		case 'ShiftXCircular':
			return 'SAX';
		case 'SwapAX':
			return 'SWAP';
		case 'MoveXI1':
			return 'MOVX1';
		case 'MoveXI2':
			return 'MOVX2';
		case 'MoveXI3':
			return 'MOVX3';
		case 'MoveXI4':
			return 'MOVX4';
		case 'MoveXI5':
			return 'MOVX5';
		case 'MoveXI6':
			return 'MOVX6';
		case 'NoOperation':
			return 'NOP';
		default:
			return 'HLT';
	}
};
var _danielbarter$elm_mix$Instruction$Value = function (a) {
	return {ctor: 'Value', _0: a};
};
var _danielbarter$elm_mix$Instruction$Label = function (a) {
	return {ctor: 'Label', _0: a};
};
var _danielbarter$elm_mix$Instruction$Halt = {ctor: 'Halt'};
var _danielbarter$elm_mix$Instruction$NoOperation = {ctor: 'NoOperation'};
var _danielbarter$elm_mix$Instruction$MoveXI6 = {ctor: 'MoveXI6'};
var _danielbarter$elm_mix$Instruction$MoveXI5 = {ctor: 'MoveXI5'};
var _danielbarter$elm_mix$Instruction$MoveXI4 = {ctor: 'MoveXI4'};
var _danielbarter$elm_mix$Instruction$MoveXI3 = {ctor: 'MoveXI3'};
var _danielbarter$elm_mix$Instruction$MoveXI2 = {ctor: 'MoveXI2'};
var _danielbarter$elm_mix$Instruction$MoveXI1 = {ctor: 'MoveXI1'};
var _danielbarter$elm_mix$Instruction$SwapAX = {ctor: 'SwapAX'};
var _danielbarter$elm_mix$Instruction$ShiftXCircular = {ctor: 'ShiftXCircular'};
var _danielbarter$elm_mix$Instruction$ShiftACircular = {ctor: 'ShiftACircular'};
var _danielbarter$elm_mix$Instruction$ShiftX = {ctor: 'ShiftX'};
var _danielbarter$elm_mix$Instruction$ShiftA = {ctor: 'ShiftA'};
var _danielbarter$elm_mix$Instruction$JumpI6NonPositive = {ctor: 'JumpI6NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI6NonZero = {ctor: 'JumpI6NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI6NonNegative = {ctor: 'JumpI6NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI6Positive = {ctor: 'JumpI6Positive'};
var _danielbarter$elm_mix$Instruction$JumpI6Zero = {ctor: 'JumpI6Zero'};
var _danielbarter$elm_mix$Instruction$JumpI6Negative = {ctor: 'JumpI6Negative'};
var _danielbarter$elm_mix$Instruction$JumpI5NonPositive = {ctor: 'JumpI5NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI5NonZero = {ctor: 'JumpI5NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI5NonNegative = {ctor: 'JumpI5NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI5Positive = {ctor: 'JumpI5Positive'};
var _danielbarter$elm_mix$Instruction$JumpI5Zero = {ctor: 'JumpI5Zero'};
var _danielbarter$elm_mix$Instruction$JumpI5Negative = {ctor: 'JumpI5Negative'};
var _danielbarter$elm_mix$Instruction$JumpI4NonPositive = {ctor: 'JumpI4NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI4NonZero = {ctor: 'JumpI4NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI4NonNegative = {ctor: 'JumpI4NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI4Positive = {ctor: 'JumpI4Positive'};
var _danielbarter$elm_mix$Instruction$JumpI4Zero = {ctor: 'JumpI4Zero'};
var _danielbarter$elm_mix$Instruction$JumpI4Negative = {ctor: 'JumpI4Negative'};
var _danielbarter$elm_mix$Instruction$JumpI3NonPositive = {ctor: 'JumpI3NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI3NonZero = {ctor: 'JumpI3NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI3NonNegative = {ctor: 'JumpI3NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI3Positive = {ctor: 'JumpI3Positive'};
var _danielbarter$elm_mix$Instruction$JumpI3Zero = {ctor: 'JumpI3Zero'};
var _danielbarter$elm_mix$Instruction$JumpI3Negative = {ctor: 'JumpI3Negative'};
var _danielbarter$elm_mix$Instruction$JumpI2NonPositive = {ctor: 'JumpI2NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI2NonZero = {ctor: 'JumpI2NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI2NonNegative = {ctor: 'JumpI2NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI2Positive = {ctor: 'JumpI2Positive'};
var _danielbarter$elm_mix$Instruction$JumpI2Zero = {ctor: 'JumpI2Zero'};
var _danielbarter$elm_mix$Instruction$JumpI2Negative = {ctor: 'JumpI2Negative'};
var _danielbarter$elm_mix$Instruction$JumpI1NonPositive = {ctor: 'JumpI1NonPositive'};
var _danielbarter$elm_mix$Instruction$JumpI1NonZero = {ctor: 'JumpI1NonZero'};
var _danielbarter$elm_mix$Instruction$JumpI1NonNegative = {ctor: 'JumpI1NonNegative'};
var _danielbarter$elm_mix$Instruction$JumpI1Positive = {ctor: 'JumpI1Positive'};
var _danielbarter$elm_mix$Instruction$JumpI1Zero = {ctor: 'JumpI1Zero'};
var _danielbarter$elm_mix$Instruction$JumpI1Negative = {ctor: 'JumpI1Negative'};
var _danielbarter$elm_mix$Instruction$JumpXNonPositive = {ctor: 'JumpXNonPositive'};
var _danielbarter$elm_mix$Instruction$JumpXNonZero = {ctor: 'JumpXNonZero'};
var _danielbarter$elm_mix$Instruction$JumpXNonNegative = {ctor: 'JumpXNonNegative'};
var _danielbarter$elm_mix$Instruction$JumpXPositive = {ctor: 'JumpXPositive'};
var _danielbarter$elm_mix$Instruction$JumpXZero = {ctor: 'JumpXZero'};
var _danielbarter$elm_mix$Instruction$JumpXNegative = {ctor: 'JumpXNegative'};
var _danielbarter$elm_mix$Instruction$JumpANonPositive = {ctor: 'JumpANonPositive'};
var _danielbarter$elm_mix$Instruction$JumpANonZero = {ctor: 'JumpANonZero'};
var _danielbarter$elm_mix$Instruction$JumpANonNegative = {ctor: 'JumpANonNegative'};
var _danielbarter$elm_mix$Instruction$JumpAPositive = {ctor: 'JumpAPositive'};
var _danielbarter$elm_mix$Instruction$JumpAZero = {ctor: 'JumpAZero'};
var _danielbarter$elm_mix$Instruction$JumpANegative = {ctor: 'JumpANegative'};
var _danielbarter$elm_mix$Instruction$JumpOnLessEqual = {ctor: 'JumpOnLessEqual'};
var _danielbarter$elm_mix$Instruction$JumpOnUnEqual = {ctor: 'JumpOnUnEqual'};
var _danielbarter$elm_mix$Instruction$JumpOnGreaterEqual = {ctor: 'JumpOnGreaterEqual'};
var _danielbarter$elm_mix$Instruction$JumpOnGreater = {ctor: 'JumpOnGreater'};
var _danielbarter$elm_mix$Instruction$JumpOnEqual = {ctor: 'JumpOnEqual'};
var _danielbarter$elm_mix$Instruction$JumpOnLess = {ctor: 'JumpOnLess'};
var _danielbarter$elm_mix$Instruction$JumpOnNoOverflow = {ctor: 'JumpOnNoOverflow'};
var _danielbarter$elm_mix$Instruction$JumpOnOverflow = {ctor: 'JumpOnOverflow'};
var _danielbarter$elm_mix$Instruction$JumpSaveJ = {ctor: 'JumpSaveJ'};
var _danielbarter$elm_mix$Instruction$Jump = {ctor: 'Jump'};
var _danielbarter$elm_mix$Instruction$CompareI6 = {ctor: 'CompareI6'};
var _danielbarter$elm_mix$Instruction$CompareI5 = {ctor: 'CompareI5'};
var _danielbarter$elm_mix$Instruction$CompareI4 = {ctor: 'CompareI4'};
var _danielbarter$elm_mix$Instruction$CompareI3 = {ctor: 'CompareI3'};
var _danielbarter$elm_mix$Instruction$CompareI2 = {ctor: 'CompareI2'};
var _danielbarter$elm_mix$Instruction$CompareI1 = {ctor: 'CompareI1'};
var _danielbarter$elm_mix$Instruction$CompareX = {ctor: 'CompareX'};
var _danielbarter$elm_mix$Instruction$CompareA = {ctor: 'CompareA'};
var _danielbarter$elm_mix$Instruction$DecrementI6 = {ctor: 'DecrementI6'};
var _danielbarter$elm_mix$Instruction$DecrementI5 = {ctor: 'DecrementI5'};
var _danielbarter$elm_mix$Instruction$DecrementI4 = {ctor: 'DecrementI4'};
var _danielbarter$elm_mix$Instruction$DecrementI3 = {ctor: 'DecrementI3'};
var _danielbarter$elm_mix$Instruction$DecrementI2 = {ctor: 'DecrementI2'};
var _danielbarter$elm_mix$Instruction$DecrementI1 = {ctor: 'DecrementI1'};
var _danielbarter$elm_mix$Instruction$DecrementX = {ctor: 'DecrementX'};
var _danielbarter$elm_mix$Instruction$DecrementA = {ctor: 'DecrementA'};
var _danielbarter$elm_mix$Instruction$IncrementI6 = {ctor: 'IncrementI6'};
var _danielbarter$elm_mix$Instruction$IncrementI5 = {ctor: 'IncrementI5'};
var _danielbarter$elm_mix$Instruction$IncrementI4 = {ctor: 'IncrementI4'};
var _danielbarter$elm_mix$Instruction$IncrementI3 = {ctor: 'IncrementI3'};
var _danielbarter$elm_mix$Instruction$IncrementI2 = {ctor: 'IncrementI2'};
var _danielbarter$elm_mix$Instruction$IncrementI1 = {ctor: 'IncrementI1'};
var _danielbarter$elm_mix$Instruction$IncrementX = {ctor: 'IncrementX'};
var _danielbarter$elm_mix$Instruction$IncrementA = {ctor: 'IncrementA'};
var _danielbarter$elm_mix$Instruction$EnterI6Neg = {ctor: 'EnterI6Neg'};
var _danielbarter$elm_mix$Instruction$EnterI5Neg = {ctor: 'EnterI5Neg'};
var _danielbarter$elm_mix$Instruction$EnterI4Neg = {ctor: 'EnterI4Neg'};
var _danielbarter$elm_mix$Instruction$EnterI3Neg = {ctor: 'EnterI3Neg'};
var _danielbarter$elm_mix$Instruction$EnterI2Neg = {ctor: 'EnterI2Neg'};
var _danielbarter$elm_mix$Instruction$EnterI1Neg = {ctor: 'EnterI1Neg'};
var _danielbarter$elm_mix$Instruction$EnterXNeg = {ctor: 'EnterXNeg'};
var _danielbarter$elm_mix$Instruction$EnterANeg = {ctor: 'EnterANeg'};
var _danielbarter$elm_mix$Instruction$EnterI6 = {ctor: 'EnterI6'};
var _danielbarter$elm_mix$Instruction$EnterI5 = {ctor: 'EnterI5'};
var _danielbarter$elm_mix$Instruction$EnterI4 = {ctor: 'EnterI4'};
var _danielbarter$elm_mix$Instruction$EnterI3 = {ctor: 'EnterI3'};
var _danielbarter$elm_mix$Instruction$EnterI2 = {ctor: 'EnterI2'};
var _danielbarter$elm_mix$Instruction$EnterI1 = {ctor: 'EnterI1'};
var _danielbarter$elm_mix$Instruction$EnterX = {ctor: 'EnterX'};
var _danielbarter$elm_mix$Instruction$EnterA = {ctor: 'EnterA'};
var _danielbarter$elm_mix$Instruction$SubX = {ctor: 'SubX'};
var _danielbarter$elm_mix$Instruction$AddX = {ctor: 'AddX'};
var _danielbarter$elm_mix$Instruction$Sub = {ctor: 'Sub'};
var _danielbarter$elm_mix$Instruction$Add = {ctor: 'Add'};
var _danielbarter$elm_mix$Instruction$StoreZero = {ctor: 'StoreZero'};
var _danielbarter$elm_mix$Instruction$StoreJ = {ctor: 'StoreJ'};
var _danielbarter$elm_mix$Instruction$StoreI6 = {ctor: 'StoreI6'};
var _danielbarter$elm_mix$Instruction$StoreI5 = {ctor: 'StoreI5'};
var _danielbarter$elm_mix$Instruction$StoreI4 = {ctor: 'StoreI4'};
var _danielbarter$elm_mix$Instruction$StoreI3 = {ctor: 'StoreI3'};
var _danielbarter$elm_mix$Instruction$StoreI2 = {ctor: 'StoreI2'};
var _danielbarter$elm_mix$Instruction$StoreI1 = {ctor: 'StoreI1'};
var _danielbarter$elm_mix$Instruction$StoreX = {ctor: 'StoreX'};
var _danielbarter$elm_mix$Instruction$StoreA = {ctor: 'StoreA'};
var _danielbarter$elm_mix$Instruction$LoadI6Neg = {ctor: 'LoadI6Neg'};
var _danielbarter$elm_mix$Instruction$LoadI5Neg = {ctor: 'LoadI5Neg'};
var _danielbarter$elm_mix$Instruction$LoadI4Neg = {ctor: 'LoadI4Neg'};
var _danielbarter$elm_mix$Instruction$LoadI3Neg = {ctor: 'LoadI3Neg'};
var _danielbarter$elm_mix$Instruction$LoadI2Neg = {ctor: 'LoadI2Neg'};
var _danielbarter$elm_mix$Instruction$LoadI1Neg = {ctor: 'LoadI1Neg'};
var _danielbarter$elm_mix$Instruction$LoadXNeg = {ctor: 'LoadXNeg'};
var _danielbarter$elm_mix$Instruction$LoadANeg = {ctor: 'LoadANeg'};
var _danielbarter$elm_mix$Instruction$LoadI6 = {ctor: 'LoadI6'};
var _danielbarter$elm_mix$Instruction$LoadI5 = {ctor: 'LoadI5'};
var _danielbarter$elm_mix$Instruction$LoadI4 = {ctor: 'LoadI4'};
var _danielbarter$elm_mix$Instruction$LoadI3 = {ctor: 'LoadI3'};
var _danielbarter$elm_mix$Instruction$LoadI2 = {ctor: 'LoadI2'};
var _danielbarter$elm_mix$Instruction$LoadI1 = {ctor: 'LoadI1'};
var _danielbarter$elm_mix$Instruction$LoadX = {ctor: 'LoadX'};
var _danielbarter$elm_mix$Instruction$LoadA = {ctor: 'LoadA'};
var _danielbarter$elm_mix$Instruction$UnrecognizedInstructionCode = function (a) {
	return {ctor: 'UnrecognizedInstructionCode', _0: a};
};
var _danielbarter$elm_mix$Instruction$InvalidModification = function (a) {
	return {ctor: 'InvalidModification', _0: a};
};
var _danielbarter$elm_mix$Instruction$decodeInstruction = function (_p13) {
	var _p14 = _p13;
	var _p38 = _p14._1;
	var _p37 = _p14._2;
	var _p36 = _p14._0;
	var ms = _danielbarter$elm_mix$Atom$byteToMasks(
		_danielbarter$elm_mix$Atom$byte(_p37));
	var _p15 = _p14._3;
	switch (_p15) {
		case 0:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$NoOperation});
		case 8:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadA});
		case 15:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadX});
		case 9:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI1});
		case 10:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI2});
		case 11:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI3});
		case 12:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI4});
		case 13:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI5});
		case 14:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI6});
		case 16:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadANeg});
		case 23:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadXNeg});
		case 17:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI1Neg});
		case 18:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI2Neg});
		case 19:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI3Neg});
		case 20:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI4Neg});
		case 21:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI5Neg});
		case 22:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$LoadI6Neg});
		case 24:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreA});
		case 31:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreX});
		case 25:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI1});
		case 26:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI2});
		case 27:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI3});
		case 28:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI4});
		case 29:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI5});
		case 30:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreI6});
		case 32:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreJ});
		case 33:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$StoreZero});
		case 1:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$Add});
		case 2:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$Sub});
		case 3:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$AddX});
		case 4:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$SubX});
		case 56:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareA});
		case 63:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareX});
		case 57:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI1});
		case 58:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI2});
		case 59:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI3});
		case 60:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI4});
		case 61:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI5});
		case 62:
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$CompareI6});
		case 48:
			var _p16 = _p37;
			switch (_p16) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterA});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterANeg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementA});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementA});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 55:
			var _p17 = _p37;
			switch (_p17) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterX});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterXNeg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementX});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementX});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 49:
			var _p18 = _p37;
			switch (_p18) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI1});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI1Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI1});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI1});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 50:
			var _p19 = _p37;
			switch (_p19) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI2});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI2Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI2});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI2});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 51:
			var _p20 = _p37;
			switch (_p20) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI3});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI3Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI3});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI3});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 52:
			var _p21 = _p37;
			switch (_p21) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI4});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI4Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI4});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI4});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 53:
			var _p22 = _p37;
			switch (_p22) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI5});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI5Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI5});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI5});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 54:
			var _p23 = _p37;
			switch (_p23) {
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI6});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$EnterI6Neg});
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$IncrementI6});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$DecrementI6});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 39:
			var _p24 = _p37;
			switch (_p24) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$Jump});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpSaveJ});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnOverflow});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnNoOverflow});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnLess});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnEqual});
				case 6:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnGreater});
				case 7:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnGreaterEqual});
				case 8:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnUnEqual});
				case 9:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpOnLessEqual});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 40:
			var _p25 = _p37;
			switch (_p25) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpANegative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpAZero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpAPositive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpANonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpANonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpANonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 47:
			var _p26 = _p37;
			switch (_p26) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXNegative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXZero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXPositive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXNonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXNonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpXNonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 41:
			var _p27 = _p37;
			switch (_p27) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI1NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 42:
			var _p28 = _p37;
			switch (_p28) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI2NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 43:
			var _p29 = _p37;
			switch (_p29) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI3NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 44:
			var _p30 = _p37;
			switch (_p30) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI4NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 45:
			var _p31 = _p37;
			switch (_p31) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI5NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 46:
			var _p32 = _p37;
			switch (_p32) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6Negative});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6Zero});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6Positive});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6NonNegative});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6NonZero});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$JumpI6NonPositive});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 6:
			var _p33 = _p37;
			switch (_p33) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$ShiftA});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$ShiftX});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$ShiftACircular});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$ShiftXCircular});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$SwapAX});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 7:
			var _p34 = _p37;
			switch (_p34) {
				case 0:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI1});
				case 1:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI2});
				case 2:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI3});
				case 3:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI4});
				case 4:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI5});
				case 5:
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$MoveXI6});
				default:
					return _elm_lang$core$Result$Err(
						_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		case 5:
			var _p35 = _p37;
			if (_p35 === 2) {
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple4', _0: _p36, _1: _p38, _2: ms, _3: _danielbarter$elm_mix$Instruction$Halt});
			} else {
				return _elm_lang$core$Result$Err(
					_danielbarter$elm_mix$Instruction$InvalidModification(_p37));
			}
		default:
			return _elm_lang$core$Result$Err(
				_danielbarter$elm_mix$Instruction$UnrecognizedInstructionCode(_p15));
	}
};

var _danielbarter$elm_mix$CodeFunctor$address = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _danielbarter$elm_mix$CodeFunctor$DataInstruction = function (a) {
	return {ctor: 'DataInstruction', _0: a};
};
var _danielbarter$elm_mix$CodeFunctor$DataNumber = function (a) {
	return {ctor: 'DataNumber', _0: a};
};
var _danielbarter$elm_mix$CodeFunctor$Code = F2(
	function (a, b) {
		return {ctor: 'Code', _0: a, _1: b};
	});
var _danielbarter$elm_mix$CodeFunctor$mapCode = F4(
	function (f, g, h, _p2) {
		var _p3 = _p2;
		var _p5 = _p3._0;
		var _p4 = _p3._1;
		if (_p4.ctor === 'DataNumber') {
			return A2(
				_danielbarter$elm_mix$CodeFunctor$Code,
				f(_p5),
				_danielbarter$elm_mix$CodeFunctor$DataNumber(
					g(_p4._0)));
		} else {
			return A2(
				_danielbarter$elm_mix$CodeFunctor$Code,
				f(_p5),
				_danielbarter$elm_mix$CodeFunctor$DataInstruction(
					h(_p4._0)));
		}
	});
var _danielbarter$elm_mix$CodeFunctor$distrubuteCodeError = function (_p6) {
	var _p7 = _p6;
	var _p11 = _p7._0;
	var _p8 = _p7._1;
	if (_p8.ctor === 'DataNumber') {
		var _p9 = _p8._0;
		if (_p9.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p9._0);
		} else {
			return _elm_lang$core$Result$Ok(
				A2(
					_danielbarter$elm_mix$CodeFunctor$Code,
					_p11,
					_danielbarter$elm_mix$CodeFunctor$DataNumber(_p9._0)));
		}
	} else {
		var _p10 = _p8._0;
		if (_p10.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p10._0);
		} else {
			return _elm_lang$core$Result$Ok(
				A2(
					_danielbarter$elm_mix$CodeFunctor$Code,
					_p11,
					_danielbarter$elm_mix$CodeFunctor$DataInstruction(_p10._0)));
		}
	}
};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _danielbarter$elm_mix$Mix$load = function (_p0) {
	var _p1 = _p0;
	return {a: _danielbarter$elm_mix$Atom$zeroWord, x: _danielbarter$elm_mix$Atom$zeroWord, i1: _danielbarter$elm_mix$Atom$zeroSmallWord, i2: _danielbarter$elm_mix$Atom$zeroSmallWord, i3: _danielbarter$elm_mix$Atom$zeroSmallWord, i4: _danielbarter$elm_mix$Atom$zeroSmallWord, i5: _danielbarter$elm_mix$Atom$zeroSmallWord, i6: _danielbarter$elm_mix$Atom$zeroSmallWord, j: _danielbarter$elm_mix$Atom$zeroSmallWord, p: 0, mem: _p1._1, meta: _p1._0, symbolTable: _p1._2, reverseSymbolTable: _p1._3, overflow: _danielbarter$elm_mix$Atom$Good, comparison: _danielbarter$elm_mix$Atom$E};
};
var _danielbarter$elm_mix$Mix$read = F2(
	function (a, mem) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_danielbarter$elm_mix$Atom$zeroWord,
			A2(_elm_lang$core$Dict$get, a, mem));
	});
var _danielbarter$elm_mix$Mix$instructionTransition = F2(
	function (_p2, s) {
		var _p3 = _p2;
		var _p99 = _p3._1;
		var _p98 = _p3._0;
		var _p4 = _p3._2;
		switch (_p4.ctor) {
			case 'LoadA':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						a: A3(
							_danielbarter$elm_mix$Atom$copy,
							_p99,
							A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
							s.a)
					});
			case 'LoadX':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						x: A3(
							_danielbarter$elm_mix$Atom$copy,
							_p99,
							A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
							s.x)
					});
			case 'LoadI1':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i1: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i1)))
					});
			case 'LoadI2':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i2: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i2)))
					});
			case 'LoadI3':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i3: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i3)))
					});
			case 'LoadI4':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i4: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i4)))
					});
			case 'LoadI5':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i5: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i5)))
					});
			case 'LoadI6':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i6: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem),
								_danielbarter$elm_mix$Atom$wordExpand(s.i6)))
					});
			case 'LoadANeg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						a: A3(
							_danielbarter$elm_mix$Atom$copy,
							_p99,
							_danielbarter$elm_mix$Atom$flipSignWord(
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.a)
					});
			case 'LoadXNeg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						x: A3(
							_danielbarter$elm_mix$Atom$copy,
							_p99,
							_danielbarter$elm_mix$Atom$flipSignWord(
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.x)
					});
			case 'LoadI1Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i1: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i1)))
					});
			case 'LoadI2Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i2: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i2)))
					});
			case 'LoadI3Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i3: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i3)))
					});
			case 'LoadI4Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i4: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i4)))
					});
			case 'LoadI5Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i5: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i5)))
					});
			case 'LoadI6Neg':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i6: _danielbarter$elm_mix$Atom$wordContract(
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$flipSignWord(
									A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
								_danielbarter$elm_mix$Atom$wordExpand(s.i6)))
					});
			case 'StoreA':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								s.a,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreX':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								s.x,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI1':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i1),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI2':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i2),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI3':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i3),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI4':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i4),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI5':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i5),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreI6':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.i6),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreJ':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$wordExpand(s.j),
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'StoreZero':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						mem: A3(
							_elm_lang$core$Dict$insert,
							_p98,
							A3(
								_danielbarter$elm_mix$Atom$copy,
								_p99,
								_danielbarter$elm_mix$Atom$zeroWord,
								A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem)),
							s.mem)
					});
			case 'Add':
				var _p5 = A4(
					_danielbarter$elm_mix$Atom$op,
					F2(
						function (x, y) {
							return x + y;
						}),
					_p99,
					s.a,
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				var t = _p5._0;
				var r = _p5._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'Sub':
				var _p6 = A4(
					_danielbarter$elm_mix$Atom$op,
					F2(
						function (x, y) {
							return x - y;
						}),
					_p99,
					s.a,
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				var t = _p6._0;
				var r = _p6._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'AddX':
				var _p7 = A4(
					_danielbarter$elm_mix$Atom$op,
					F2(
						function (x, y) {
							return x + y;
						}),
					_p99,
					s.a,
					s.x);
				var t = _p7._0;
				var r = _p7._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'SubX':
				var _p8 = A4(
					_danielbarter$elm_mix$Atom$op,
					F2(
						function (x, y) {
							return x - y;
						}),
					_p99,
					s.a,
					s.x);
				var t = _p8._0;
				var r = _p8._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'EnterA':
				var _p9 = A2(_danielbarter$elm_mix$Atom$intToWord, _p98, s.a);
				var t = _p9._0;
				var r = _p9._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'EnterX':
				var _p10 = A2(_danielbarter$elm_mix$Atom$intToWord, _p98, s.x);
				var t = _p10._0;
				var r = _p10._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{x: r, overflow: t});
			case 'EnterI1':
				var _p11 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i1);
				var t = _p11._0;
				var r = _p11._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i1: r, overflow: t});
			case 'EnterI2':
				var _p12 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i2);
				var t = _p12._0;
				var r = _p12._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i2: r, overflow: t});
			case 'EnterI3':
				var _p13 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i3);
				var t = _p13._0;
				var r = _p13._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i3: r, overflow: t});
			case 'EnterI4':
				var _p14 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i4);
				var t = _p14._0;
				var r = _p14._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i4: r, overflow: t});
			case 'EnterI5':
				var _p15 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i5);
				var t = _p15._0;
				var r = _p15._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i5: r, overflow: t});
			case 'EnterI6':
				var _p16 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, _p98, s.i6);
				var t = _p16._0;
				var r = _p16._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i6: r, overflow: t});
			case 'EnterANeg':
				var _p17 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_elm_lang$core$Basics$negate(_p98),
					s.a);
				var t = _p17._0;
				var r = _p17._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'EnterXNeg':
				var _p18 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_elm_lang$core$Basics$negate(_p98),
					s.x);
				var t = _p18._0;
				var r = _p18._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{x: r, overflow: t});
			case 'EnterI1Neg':
				var _p19 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i1);
				var t = _p19._0;
				var r = _p19._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i1: r, overflow: t});
			case 'EnterI2Neg':
				var _p20 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i2);
				var t = _p20._0;
				var r = _p20._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i2: r, overflow: t});
			case 'EnterI3Neg':
				var _p21 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i3);
				var t = _p21._0;
				var r = _p21._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i3: r, overflow: t});
			case 'EnterI4Neg':
				var _p22 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i4);
				var t = _p22._0;
				var r = _p22._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i4: r, overflow: t});
			case 'EnterI5Neg':
				var _p23 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i5);
				var t = _p23._0;
				var r = _p23._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i5: r, overflow: t});
			case 'EnterI6Neg':
				var _p24 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_elm_lang$core$Basics$negate(_p98),
					s.i6);
				var t = _p24._0;
				var r = _p24._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i6: r, overflow: t});
			case 'IncrementA':
				var _p25 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_danielbarter$elm_mix$Atom$wordValue(s.a) + _p98,
					s.a);
				var t = _p25._0;
				var r = _p25._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'IncrementX':
				var _p26 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_danielbarter$elm_mix$Atom$wordValue(s.x) + _p98,
					s.x);
				var t = _p26._0;
				var r = _p26._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{x: r, overflow: t});
			case 'IncrementI1':
				var _p27 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1) + _p98,
					s.i1);
				var t = _p27._0;
				var r = _p27._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i1: r, overflow: t});
			case 'IncrementI2':
				var _p28 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2) + _p98,
					s.i2);
				var t = _p28._0;
				var r = _p28._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i2: r, overflow: t});
			case 'IncrementI3':
				var _p29 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3) + _p98,
					s.i3);
				var t = _p29._0;
				var r = _p29._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i3: r, overflow: t});
			case 'IncrementI4':
				var _p30 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4) + _p98,
					s.i4);
				var t = _p30._0;
				var r = _p30._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i4: r, overflow: t});
			case 'IncrementI5':
				var _p31 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5) + _p98,
					s.i5);
				var t = _p31._0;
				var r = _p31._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i5: r, overflow: t});
			case 'IncrementI6':
				var _p32 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6) + _p98,
					s.i6);
				var t = _p32._0;
				var r = _p32._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i6: r, overflow: t});
			case 'DecrementA':
				var _p33 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_danielbarter$elm_mix$Atom$wordValue(s.a) - _p98,
					s.a);
				var t = _p33._0;
				var r = _p33._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: r, overflow: t});
			case 'DecrementX':
				var _p34 = A2(
					_danielbarter$elm_mix$Atom$intToWord,
					_danielbarter$elm_mix$Atom$wordValue(s.x) - _p98,
					s.x);
				var t = _p34._0;
				var r = _p34._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{x: r, overflow: t});
			case 'DecrementI1':
				var _p35 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1) - _p98,
					s.i1);
				var t = _p35._0;
				var r = _p35._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i1: r, overflow: t});
			case 'DecrementI2':
				var _p36 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2) - _p98,
					s.i2);
				var t = _p36._0;
				var r = _p36._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i2: r, overflow: t});
			case 'DecrementI3':
				var _p37 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3) - _p98,
					s.i3);
				var t = _p37._0;
				var r = _p37._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i3: r, overflow: t});
			case 'DecrementI4':
				var _p38 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4) - _p98,
					s.i4);
				var t = _p38._0;
				var r = _p38._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i4: r, overflow: t});
			case 'DecrementI5':
				var _p39 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5) - _p98,
					s.i5);
				var t = _p39._0;
				var r = _p39._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i5: r, overflow: t});
			case 'DecrementI6':
				var _p40 = A2(
					_danielbarter$elm_mix$Atom$intToSmallWord,
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6) - _p98,
					s.i6);
				var t = _p40._0;
				var r = _p40._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{i6: r, overflow: t});
			case 'CompareA':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					s.a,
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareX':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					s.x,
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI1':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i1),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI2':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i2),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI3':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i3),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI4':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i4),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI5':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i5),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'CompareI6':
				var c = A3(
					_danielbarter$elm_mix$Atom$comp,
					_p99,
					_danielbarter$elm_mix$Atom$wordExpand(s.i6),
					A2(_danielbarter$elm_mix$Mix$read, _p98, s.mem));
				return _elm_lang$core$Native_Utils.update(
					s,
					{comparison: c});
			case 'Jump':
				var _p41 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
				var t = _p41._0;
				var newJ = _p41._1;
				return _elm_lang$core$Native_Utils.update(
					s,
					{p: _p98, j: newJ});
			case 'JumpSaveJ':
				return _elm_lang$core$Native_Utils.update(
					s,
					{p: _p98});
			case 'JumpOnOverflow':
				if (_elm_lang$core$Native_Utils.eq(s.overflow, _danielbarter$elm_mix$Atom$Overflow)) {
					var _p42 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p42._0;
					var newJ = _p42._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ, overflow: _danielbarter$elm_mix$Atom$Good});
				} else {
					return s;
				}
			case 'JumpOnNoOverflow':
				if (_elm_lang$core$Native_Utils.eq(s.overflow, _danielbarter$elm_mix$Atom$Good)) {
					var _p43 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p43._0;
					var newJ = _p43._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return _elm_lang$core$Native_Utils.update(
						s,
						{overflow: _danielbarter$elm_mix$Atom$Good});
				}
			case 'JumpOnLess':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$L)) {
					var _p44 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p44._0;
					var newJ = _p44._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpOnEqual':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$E)) {
					var _p45 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p45._0;
					var newJ = _p45._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpOnGreater':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$G)) {
					var _p46 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p46._0;
					var newJ = _p46._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpOnGreaterEqual':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$G) || _elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$E)) {
					var _p47 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p47._0;
					var newJ = _p47._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpOnUnEqual':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$L) || _elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$G)) {
					var _p48 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p48._0;
					var newJ = _p48._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpOnLessEqual':
				if (_elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$L) || _elm_lang$core$Native_Utils.eq(s.comparison, _danielbarter$elm_mix$Atom$E)) {
					var _p49 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p49._0;
					var newJ = _p49._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpANegative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) < 0) {
					var _p50 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p50._0;
					var newJ = _p50._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpAZero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0)) {
					var _p51 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p51._0;
					var newJ = _p51._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpAPositive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) > 0) {
					var _p52 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p52._0;
					var newJ = _p52._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpANonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0)) {
					var _p53 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p53._0;
					var newJ = _p53._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpANonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) > 0)) {
					var _p54 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p54._0;
					var newJ = _p54._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpANonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.a),
					0)) {
					var _p55 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p55._0;
					var newJ = _p55._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXNegative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) < 0) {
					var _p56 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p56._0;
					var newJ = _p56._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXZero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0)) {
					var _p57 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p57._0;
					var newJ = _p57._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXPositive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) > 0) {
					var _p58 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p58._0;
					var newJ = _p58._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXNonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0)) {
					var _p59 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p59._0;
					var newJ = _p59._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXNonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) > 0)) {
					var _p60 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p60._0;
					var newJ = _p60._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpXNonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$wordValue(s.x),
					0)) {
					var _p61 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p61._0;
					var newJ = _p61._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) < 0) {
					var _p62 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p62._0;
					var newJ = _p62._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0)) {
					var _p63 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p63._0;
					var newJ = _p63._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) > 0) {
					var _p64 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p64._0;
					var newJ = _p64._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0)) {
					var _p65 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p65._0;
					var newJ = _p65._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) > 0)) {
					var _p66 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p66._0;
					var newJ = _p66._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI1NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i1),
					0)) {
					var _p67 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p67._0;
					var newJ = _p67._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) < 0) {
					var _p68 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p68._0;
					var newJ = _p68._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0)) {
					var _p69 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p69._0;
					var newJ = _p69._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) > 0) {
					var _p70 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p70._0;
					var newJ = _p70._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0)) {
					var _p71 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p71._0;
					var newJ = _p71._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) > 0)) {
					var _p72 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p72._0;
					var newJ = _p72._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI2NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i2),
					0)) {
					var _p73 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p73._0;
					var newJ = _p73._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) < 0) {
					var _p74 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p74._0;
					var newJ = _p74._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0)) {
					var _p75 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p75._0;
					var newJ = _p75._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) > 0) {
					var _p76 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p76._0;
					var newJ = _p76._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0)) {
					var _p77 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p77._0;
					var newJ = _p77._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) > 0)) {
					var _p78 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p78._0;
					var newJ = _p78._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI3NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i3),
					0)) {
					var _p79 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p79._0;
					var newJ = _p79._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) < 0) {
					var _p80 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p80._0;
					var newJ = _p80._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0)) {
					var _p81 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p81._0;
					var newJ = _p81._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) > 0) {
					var _p82 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p82._0;
					var newJ = _p82._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0)) {
					var _p83 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p83._0;
					var newJ = _p83._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) > 0)) {
					var _p84 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p84._0;
					var newJ = _p84._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI4NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i4),
					0)) {
					var _p85 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p85._0;
					var newJ = _p85._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) < 0) {
					var _p86 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p86._0;
					var newJ = _p86._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0)) {
					var _p87 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p87._0;
					var newJ = _p87._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) > 0) {
					var _p88 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p88._0;
					var newJ = _p88._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0)) {
					var _p89 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p89._0;
					var newJ = _p89._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) > 0)) {
					var _p90 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p90._0;
					var newJ = _p90._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI5NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i5),
					0)) {
					var _p91 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p91._0;
					var newJ = _p91._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6Negative':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) < 0) {
					var _p92 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p92._0;
					var newJ = _p92._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6Zero':
				if (_elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0)) {
					var _p93 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p93._0;
					var newJ = _p93._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6Positive':
				if (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) > 0) {
					var _p94 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p94._0;
					var newJ = _p94._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6NonNegative':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) > 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0)) {
					var _p95 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p95._0;
					var newJ = _p95._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6NonZero':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) < 0) || (_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) > 0)) {
					var _p96 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p96._0;
					var newJ = _p96._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'JumpI6NonPositive':
				if ((_elm_lang$core$Native_Utils.cmp(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0) < 0) || _elm_lang$core$Native_Utils.eq(
					_danielbarter$elm_mix$Atom$smallWordValue(s.i6),
					0)) {
					var _p97 = A2(_danielbarter$elm_mix$Atom$intToSmallWord, s.p, s.j);
					var t = _p97._0;
					var newJ = _p97._1;
					return _elm_lang$core$Native_Utils.update(
						s,
						{p: _p98, j: newJ});
				} else {
					return s;
				}
			case 'ShiftA':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						a: A2(_danielbarter$elm_mix$Atom$shift, _p98, s.a)
					});
			case 'ShiftX':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						x: A2(_danielbarter$elm_mix$Atom$shift, _p98, s.x)
					});
			case 'ShiftACircular':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						a: A2(_danielbarter$elm_mix$Atom$shiftCircular, _p98, s.a)
					});
			case 'ShiftXCircular':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						x: A2(_danielbarter$elm_mix$Atom$shiftCircular, _p98, s.x)
					});
			case 'SwapAX':
				return _elm_lang$core$Native_Utils.update(
					s,
					{a: s.x, x: s.a});
			case 'MoveXI1':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i1: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'MoveXI2':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i2: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'MoveXI3':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i3: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'MoveXI4':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i4: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'MoveXI5':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i5: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'MoveXI6':
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						i6: _danielbarter$elm_mix$Atom$wordContract(s.x)
					});
			case 'NoOperation':
				return s;
			default:
				return s;
		}
	});
var _danielbarter$elm_mix$Mix$Mix = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return {a: a, x: b, i1: c, i2: d, i3: e, i4: f, i5: g, i6: h, j: i, p: j, mem: k, meta: l, symbolTable: m, reverseSymbolTable: n, overflow: o, comparison: p};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _danielbarter$elm_mix$Mix$Instruction = {ctor: 'Instruction'};
var _danielbarter$elm_mix$Mix$Number = {ctor: 'Number'};
var _danielbarter$elm_mix$Mix$readMeta = F2(
	function (a, meta) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_danielbarter$elm_mix$Mix$Number,
			A2(_elm_lang$core$Dict$get, a, meta));
	});

var _danielbarter$elm_mix$Assembler$assembleLine = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0;
	var _p2 = _p1._1;
	if (_p2.ctor === 'DataNumber') {
		return {
			ctor: '_Tuple2',
			_0: {
				ctor: '_Tuple2',
				_0: _p3,
				_1: _elm_lang$core$Tuple$second(
					A2(_danielbarter$elm_mix$Atom$intToWord, _p2._0, _danielbarter$elm_mix$Atom$zeroWord))
			},
			_1: {ctor: '_Tuple2', _0: _p3, _1: _danielbarter$elm_mix$Mix$Number}
		};
	} else {
		return {
			ctor: '_Tuple2',
			_0: {
				ctor: '_Tuple2',
				_0: _p3,
				_1: _danielbarter$elm_mix$Atom$pack(
					_danielbarter$elm_mix$Instruction$encodeInstruction(_p2._0))
			},
			_1: {ctor: '_Tuple2', _0: _p3, _1: _danielbarter$elm_mix$Mix$Instruction}
		};
	}
};
var _danielbarter$elm_mix$Assembler$assemble = function (l) {
	var mem = _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			function (_p4) {
				return _elm_lang$core$Tuple$first(
					_danielbarter$elm_mix$Assembler$assembleLine(_p4));
			},
			l));
	var meta = _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			function (_p5) {
				return _elm_lang$core$Tuple$second(
					_danielbarter$elm_mix$Assembler$assembleLine(_p5));
			},
			l));
	return {ctor: '_Tuple2', _0: meta, _1: mem};
};

var _danielbarter$elm_mix$StateMonad_ops = _danielbarter$elm_mix$StateMonad_ops || {};
_danielbarter$elm_mix$StateMonad_ops['<*>'] = F2(
	function (p, q) {
		var r = function (s) {
			var _p0 = p(s);
			if (_p0.ctor === 'Err') {
				return _elm_lang$core$Result$Err(_p0._0);
			} else {
				var _p1 = q(_p0._0._0);
				if (_p1.ctor === 'Err') {
					return _elm_lang$core$Result$Err(_p1._0);
				} else {
					return _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: _p1._0._0,
							_1: _p0._0._1(_p1._0._1)
						});
				}
			}
		};
		return r;
	});
var _danielbarter$elm_mix$StateMonad$throwError = function (err) {
	var p = function (s) {
		return _elm_lang$core$Result$Err(err);
	};
	return p;
};
var _danielbarter$elm_mix$StateMonad$put = function (m) {
	var p = function (s) {
		return _elm_lang$core$Result$Ok(
			{
				ctor: '_Tuple2',
				_0: m,
				_1: {ctor: '_Tuple0'}
			});
	};
	return p;
};
var _danielbarter$elm_mix$StateMonad$get = function () {
	var p = function (s) {
		return _elm_lang$core$Result$Ok(
			{ctor: '_Tuple2', _0: s, _1: s});
	};
	return p;
}();
var _danielbarter$elm_mix$StateMonad$return = function (x) {
	var p = function (s) {
		return _elm_lang$core$Result$Ok(
			{ctor: '_Tuple2', _0: s, _1: x});
	};
	return p;
};
var _danielbarter$elm_mix$StateMonad_ops = _danielbarter$elm_mix$StateMonad_ops || {};
_danielbarter$elm_mix$StateMonad_ops['<$>'] = F2(
	function (f, p) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*>'],
			_danielbarter$elm_mix$StateMonad$return(f),
			p);
	});
var _danielbarter$elm_mix$StateMonad$map2 = F3(
	function (f, p, q) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*>'],
			A2(_danielbarter$elm_mix$StateMonad_ops['<$>'], f, p),
			q);
	});
var _danielbarter$elm_mix$StateMonad_ops = _danielbarter$elm_mix$StateMonad_ops || {};
_danielbarter$elm_mix$StateMonad_ops['<*'] = F2(
	function (p, q) {
		var f = F2(
			function (x, y) {
				return x;
			});
		return A3(_danielbarter$elm_mix$StateMonad$map2, f, p, q);
	});
var _danielbarter$elm_mix$StateMonad_ops = _danielbarter$elm_mix$StateMonad_ops || {};
_danielbarter$elm_mix$StateMonad_ops['*>'] = F2(
	function (p, q) {
		var g = F2(
			function (x, y) {
				return y;
			});
		return A3(_danielbarter$elm_mix$StateMonad$map2, g, p, q);
	});
var _danielbarter$elm_mix$StateMonad$map3 = F4(
	function (f, p, q, r) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*>'],
			A2(
				_danielbarter$elm_mix$StateMonad_ops['<*>'],
				A2(_danielbarter$elm_mix$StateMonad_ops['<$>'], f, p),
				q),
			r);
	});
var _danielbarter$elm_mix$StateMonad$map4 = F5(
	function (f, p, q, r, x) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*>'],
			A2(
				_danielbarter$elm_mix$StateMonad_ops['<*>'],
				A2(
					_danielbarter$elm_mix$StateMonad_ops['<*>'],
					A2(_danielbarter$elm_mix$StateMonad_ops['<$>'], f, p),
					q),
				r),
			x);
	});
var _danielbarter$elm_mix$StateMonad$map5 = F6(
	function (f, p, q, r, x, y) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*>'],
			A2(
				_danielbarter$elm_mix$StateMonad_ops['<*>'],
				A2(
					_danielbarter$elm_mix$StateMonad_ops['<*>'],
					A2(
						_danielbarter$elm_mix$StateMonad_ops['<*>'],
						A2(_danielbarter$elm_mix$StateMonad_ops['<$>'], f, p),
						q),
					r),
				x),
			y);
	});
var _danielbarter$elm_mix$StateMonad$try = F2(
	function (p, q) {
		var r = function (s) {
			var _p2 = p(s);
			if (_p2.ctor === 'Err') {
				return q(s);
			} else {
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple2', _0: _p2._0._0, _1: _p2._0._1});
			}
		};
		return r;
	});
var _danielbarter$elm_mix$StateMonad_ops = _danielbarter$elm_mix$StateMonad_ops || {};
_danielbarter$elm_mix$StateMonad_ops['>>='] = F2(
	function (p, f) {
		var q = function (s) {
			var _p3 = p(s);
			if (_p3.ctor === 'Err') {
				return _elm_lang$core$Result$Err(_p3._0);
			} else {
				return A2(f, _p3._0._1, _p3._0._0);
			}
		};
		return q;
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _danielbarter$elm_mix$Tokenizer$commentLine = function (l) {
	var _p0 = l;
	if ((_p0.ctor === '::') && (_p0._0.ctor === 'Comment')) {
		return false;
	} else {
		return true;
	}
};
var _danielbarter$elm_mix$Tokenizer$distrubuteError = function (l) {
	var _p1 = l;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Result$Ok(
			{ctor: '[]'});
	} else {
		var _p2 = _p1._0;
		if (_p2.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p2._0);
		} else {
			return A2(
				_elm_lang$core$Result$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p2._0),
				_danielbarter$elm_mix$Tokenizer$distrubuteError(_p1._1));
		}
	}
};
var _danielbarter$elm_mix$Tokenizer$filterNothing = function (l) {
	filterNothing:
	while (true) {
		var _p3 = l;
		if (_p3.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p5 = _p3._1;
			var _p4 = _p3._0;
			if (_p4.ctor === 'Just') {
				return {
					ctor: '::',
					_0: _p4._0,
					_1: _danielbarter$elm_mix$Tokenizer$filterNothing(_p5)
				};
			} else {
				var _v5 = _p5;
				l = _v5;
				continue filterNothing;
			}
		}
	}
};
var _danielbarter$elm_mix$Tokenizer$tagEmptyLine = function (l) {
	var _p6 = l;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(l);
	}
};
var _danielbarter$elm_mix$Tokenizer$StringEmpty = {ctor: 'StringEmpty'};
var _danielbarter$elm_mix$Tokenizer$NoMatch = {ctor: 'NoMatch'};
var _danielbarter$elm_mix$Tokenizer$getLexeme = F2(
	function (r, s) {
		if (_elm_lang$core$String$isEmpty(s)) {
			return _elm_lang$core$Result$Err(_danielbarter$elm_mix$Tokenizer$StringEmpty);
		} else {
			var _p7 = A3(
				_elm_lang$core$Regex$find,
				_elm_lang$core$Regex$AtMost(1),
				r,
				s);
			if (_p7.ctor === '[]') {
				return _elm_lang$core$Result$Err(_danielbarter$elm_mix$Tokenizer$NoMatch);
			} else {
				var _p8 = _p7._0;
				var index = function (_) {
					return _.index;
				}(_p8);
				var lexeme = function (_) {
					return _.match;
				}(_p8);
				return _elm_lang$core$Native_Utils.eq(index, 0) ? _elm_lang$core$Result$Ok(
					{
						ctor: '_Tuple2',
						_0: A2(
							_elm_lang$core$String$dropLeft,
							_elm_lang$core$String$length(lexeme),
							s),
						_1: lexeme
					}) : _elm_lang$core$Result$Err(_danielbarter$elm_mix$Tokenizer$NoMatch);
			}
		}
	});
var _danielbarter$elm_mix$Tokenizer$Comment = function (a) {
	return {ctor: 'Comment', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$getComment = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p9) {
		return _danielbarter$elm_mix$Tokenizer$Comment(
			A2(_elm_lang$core$String$dropLeft, 1, _p9));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('#(.)*')));
var _danielbarter$elm_mix$Tokenizer$IndexTag = function (a) {
	return {ctor: 'IndexTag', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$getIndex = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p10) {
		return _danielbarter$elm_mix$Tokenizer$IndexTag(
			A2(
				_elm_lang$core$Result$withDefault,
				0,
				_elm_lang$core$String$toInt(
					A2(_elm_lang$core$String$dropLeft, 1, _p10))));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('[+][0-9]+')));
var _danielbarter$elm_mix$Tokenizer$MaskTag = function (a) {
	return {ctor: 'MaskTag', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$getMask = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p11) {
		return _danielbarter$elm_mix$Tokenizer$MaskTag(
			A2(
				_elm_lang$core$Result$withDefault,
				0,
				_elm_lang$core$String$toInt(
					A2(_elm_lang$core$String$dropLeft, 1, _p11))));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('[/][0-9]+')));
var _danielbarter$elm_mix$Tokenizer$LabelTag = function (a) {
	return {ctor: 'LabelTag', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$getLabel = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p12) {
		return _danielbarter$elm_mix$Tokenizer$LabelTag(
			A2(_elm_lang$core$String$dropLeft, 1, _p12));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('[:][a-z]([a-z]|_)*')));
var _danielbarter$elm_mix$Tokenizer$RelativeTag = function (a) {
	return {ctor: 'RelativeTag', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$getRelValue = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p13) {
		return function (_p14) {
			return _danielbarter$elm_mix$Tokenizer$RelativeTag(
				_danielbarter$elm_mix$Instruction$Value(_p14));
		}(
			A2(
				_elm_lang$core$Result$withDefault,
				0,
				_elm_lang$core$String$toInt(_p13)));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('-?[0-9]+')));
var _danielbarter$elm_mix$Tokenizer$getRelLabel = A2(
	_danielbarter$elm_mix$StateMonad_ops['<$>'],
	function (_p15) {
		return _danielbarter$elm_mix$Tokenizer$RelativeTag(
			_danielbarter$elm_mix$Instruction$Label(_p15));
	},
	_danielbarter$elm_mix$Tokenizer$getLexeme(
		_elm_lang$core$Regex$regex('[a-z]([a-z]|_)*')));
var _danielbarter$elm_mix$Tokenizer$getRelative = A2(_danielbarter$elm_mix$StateMonad$try, _danielbarter$elm_mix$Tokenizer$getRelValue, _danielbarter$elm_mix$Tokenizer$getRelLabel);
var _danielbarter$elm_mix$Tokenizer$InstructionTag = function (a) {
	return {ctor: 'InstructionTag', _0: a};
};
var _danielbarter$elm_mix$Tokenizer$f = F2(
	function (t, r) {
		return A2(
			_danielbarter$elm_mix$StateMonad_ops['<*'],
			_danielbarter$elm_mix$StateMonad$return(
				_danielbarter$elm_mix$Tokenizer$InstructionTag(t)),
			_danielbarter$elm_mix$Tokenizer$getLexeme(
				_elm_lang$core$Regex$regex(r)));
	});
var _danielbarter$elm_mix$Tokenizer$getInstruction = A3(
	_elm_lang$core$List$foldl,
	_danielbarter$elm_mix$StateMonad$try,
	A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$Halt, 'HLT'),
	{
		ctor: '::',
		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadA, 'LDA'),
		_1: {
			ctor: '::',
			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadX, 'LDX'),
			_1: {
				ctor: '::',
				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI1, 'LD1'),
				_1: {
					ctor: '::',
					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI2, 'LD2'),
					_1: {
						ctor: '::',
						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI3, 'LD3'),
						_1: {
							ctor: '::',
							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI4, 'LD4'),
							_1: {
								ctor: '::',
								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI5, 'LD5'),
								_1: {
									ctor: '::',
									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI6, 'LD6'),
									_1: {
										ctor: '::',
										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadANeg, 'LDAN'),
										_1: {
											ctor: '::',
											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadXNeg, 'LDXN'),
											_1: {
												ctor: '::',
												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI1Neg, 'LD1N'),
												_1: {
													ctor: '::',
													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI2Neg, 'LD2N'),
													_1: {
														ctor: '::',
														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI3Neg, 'LD3N'),
														_1: {
															ctor: '::',
															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI4Neg, 'LD4N'),
															_1: {
																ctor: '::',
																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI5Neg, 'LD5N'),
																_1: {
																	ctor: '::',
																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$LoadI6Neg, 'LD6N'),
																	_1: {
																		ctor: '::',
																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreA, 'STA'),
																		_1: {
																			ctor: '::',
																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreX, 'STX'),
																			_1: {
																				ctor: '::',
																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI1, 'ST1'),
																				_1: {
																					ctor: '::',
																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI2, 'ST2'),
																					_1: {
																						ctor: '::',
																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI3, 'ST3'),
																						_1: {
																							ctor: '::',
																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI4, 'ST4'),
																							_1: {
																								ctor: '::',
																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI5, 'ST5'),
																								_1: {
																									ctor: '::',
																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreI6, 'ST6'),
																									_1: {
																										ctor: '::',
																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreJ, 'STJ'),
																										_1: {
																											ctor: '::',
																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$StoreZero, 'STZ'),
																											_1: {
																												ctor: '::',
																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$Add, 'ADD'),
																												_1: {
																													ctor: '::',
																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$Sub, 'SUB'),
																													_1: {
																														ctor: '::',
																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$AddX, 'ADDX'),
																														_1: {
																															ctor: '::',
																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$SubX, 'SUBX'),
																															_1: {
																																ctor: '::',
																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterA, 'ENTA'),
																																_1: {
																																	ctor: '::',
																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterX, 'ENTX'),
																																	_1: {
																																		ctor: '::',
																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI1, 'ENT1'),
																																		_1: {
																																			ctor: '::',
																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI2, 'ENT2'),
																																			_1: {
																																				ctor: '::',
																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI3, 'ENT3'),
																																				_1: {
																																					ctor: '::',
																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI4, 'ENT4'),
																																					_1: {
																																						ctor: '::',
																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI5, 'ENT5'),
																																						_1: {
																																							ctor: '::',
																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI6, 'ENT6'),
																																							_1: {
																																								ctor: '::',
																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterANeg, 'ENNA'),
																																								_1: {
																																									ctor: '::',
																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterXNeg, 'ENNX'),
																																									_1: {
																																										ctor: '::',
																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI1Neg, 'ENN1'),
																																										_1: {
																																											ctor: '::',
																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI2Neg, 'ENN2'),
																																											_1: {
																																												ctor: '::',
																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI3Neg, 'ENN3'),
																																												_1: {
																																													ctor: '::',
																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI4Neg, 'ENN4'),
																																													_1: {
																																														ctor: '::',
																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI5Neg, 'ENN5'),
																																														_1: {
																																															ctor: '::',
																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$EnterI6Neg, 'ENN6'),
																																															_1: {
																																																ctor: '::',
																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementA, 'INCA'),
																																																_1: {
																																																	ctor: '::',
																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementX, 'INCX'),
																																																	_1: {
																																																		ctor: '::',
																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI1, 'INC1'),
																																																		_1: {
																																																			ctor: '::',
																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI2, 'INC2'),
																																																			_1: {
																																																				ctor: '::',
																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI3, 'INC3'),
																																																				_1: {
																																																					ctor: '::',
																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI4, 'INC4'),
																																																					_1: {
																																																						ctor: '::',
																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI5, 'INC5'),
																																																						_1: {
																																																							ctor: '::',
																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$IncrementI6, 'INC6'),
																																																							_1: {
																																																								ctor: '::',
																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementA, 'DECA'),
																																																								_1: {
																																																									ctor: '::',
																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementX, 'DECX'),
																																																									_1: {
																																																										ctor: '::',
																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI1, 'DEC1'),
																																																										_1: {
																																																											ctor: '::',
																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI2, 'DEC2'),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI3, 'DEC3'),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI4, 'DEC4'),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI5, 'DEC5'),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$DecrementI6, 'DEC6'),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareA, 'CMPA'),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareX, 'CMPX'),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI1, 'CMP1'),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI2, 'CMP2'),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI3, 'CMP3'),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI4, 'CMP4'),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI5, 'CMP5'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$CompareI6, 'CMP6'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$Jump, 'JMP'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpSaveJ, 'JSJ'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnOverflow, 'JOV'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnNoOverflow, 'JNOV'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnLess, 'JL'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnEqual, 'JE'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnGreater, 'JG'),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnGreaterEqual, 'JGE'),
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnUnEqual, 'JNE'),
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpOnLessEqual, 'JLE'),
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpANegative, 'JAN'),
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpAZero, 'JAZ'),
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpAPositive, 'JAP'),
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpANonNegative, 'JANN'),
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpANonZero, 'JANZ'),
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpANonPositive, 'JANP'),
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXNegative, 'JXN'),
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXZero, 'JXZ'),
																																																																																									_1: {
																																																																																										ctor: '::',
																																																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXPositive, 'JXP'),
																																																																																										_1: {
																																																																																											ctor: '::',
																																																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXNonNegative, 'JXNN'),
																																																																																											_1: {
																																																																																												ctor: '::',
																																																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXNonZero, 'JXNZ'),
																																																																																												_1: {
																																																																																													ctor: '::',
																																																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpXNonPositive, 'JXNP'),
																																																																																													_1: {
																																																																																														ctor: '::',
																																																																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1Negative, 'J1N'),
																																																																																														_1: {
																																																																																															ctor: '::',
																																																																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1Zero, 'J1Z'),
																																																																																															_1: {
																																																																																																ctor: '::',
																																																																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1Positive, 'J1P'),
																																																																																																_1: {
																																																																																																	ctor: '::',
																																																																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1NonNegative, 'J1NN'),
																																																																																																	_1: {
																																																																																																		ctor: '::',
																																																																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1NonZero, 'J1NZ'),
																																																																																																		_1: {
																																																																																																			ctor: '::',
																																																																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI1NonPositive, 'J1NP'),
																																																																																																			_1: {
																																																																																																				ctor: '::',
																																																																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2Negative, 'J2N'),
																																																																																																				_1: {
																																																																																																					ctor: '::',
																																																																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2Zero, 'J2Z'),
																																																																																																					_1: {
																																																																																																						ctor: '::',
																																																																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2Positive, 'J2P'),
																																																																																																						_1: {
																																																																																																							ctor: '::',
																																																																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2NonNegative, 'J2NN'),
																																																																																																							_1: {
																																																																																																								ctor: '::',
																																																																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2NonZero, 'J2NZ'),
																																																																																																								_1: {
																																																																																																									ctor: '::',
																																																																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI2NonPositive, 'J2NP'),
																																																																																																									_1: {
																																																																																																										ctor: '::',
																																																																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3Negative, 'J3N'),
																																																																																																										_1: {
																																																																																																											ctor: '::',
																																																																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3Zero, 'J3Z'),
																																																																																																											_1: {
																																																																																																												ctor: '::',
																																																																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3Positive, 'J3P'),
																																																																																																												_1: {
																																																																																																													ctor: '::',
																																																																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3NonNegative, 'J3NN'),
																																																																																																													_1: {
																																																																																																														ctor: '::',
																																																																																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3NonZero, 'J3NZ'),
																																																																																																														_1: {
																																																																																																															ctor: '::',
																																																																																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI3NonPositive, 'J3NP'),
																																																																																																															_1: {
																																																																																																																ctor: '::',
																																																																																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4Negative, 'J4N'),
																																																																																																																_1: {
																																																																																																																	ctor: '::',
																																																																																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4Zero, 'J4Z'),
																																																																																																																	_1: {
																																																																																																																		ctor: '::',
																																																																																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4Positive, 'J4P'),
																																																																																																																		_1: {
																																																																																																																			ctor: '::',
																																																																																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4NonNegative, 'J4NN'),
																																																																																																																			_1: {
																																																																																																																				ctor: '::',
																																																																																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4NonZero, 'J4NZ'),
																																																																																																																				_1: {
																																																																																																																					ctor: '::',
																																																																																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI4NonPositive, 'J4NP'),
																																																																																																																					_1: {
																																																																																																																						ctor: '::',
																																																																																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5Negative, 'J5N'),
																																																																																																																						_1: {
																																																																																																																							ctor: '::',
																																																																																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5Zero, 'J5Z'),
																																																																																																																							_1: {
																																																																																																																								ctor: '::',
																																																																																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5Positive, 'J5P'),
																																																																																																																								_1: {
																																																																																																																									ctor: '::',
																																																																																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5NonNegative, 'J5NN'),
																																																																																																																									_1: {
																																																																																																																										ctor: '::',
																																																																																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5NonZero, 'J5NZ'),
																																																																																																																										_1: {
																																																																																																																											ctor: '::',
																																																																																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI5NonPositive, 'J5NP'),
																																																																																																																											_1: {
																																																																																																																												ctor: '::',
																																																																																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6Negative, 'J6N'),
																																																																																																																												_1: {
																																																																																																																													ctor: '::',
																																																																																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6Zero, 'J6Z'),
																																																																																																																													_1: {
																																																																																																																														ctor: '::',
																																																																																																																														_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6Positive, 'J6P'),
																																																																																																																														_1: {
																																																																																																																															ctor: '::',
																																																																																																																															_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6NonNegative, 'J6NN'),
																																																																																																																															_1: {
																																																																																																																																ctor: '::',
																																																																																																																																_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6NonZero, 'J6NZ'),
																																																																																																																																_1: {
																																																																																																																																	ctor: '::',
																																																																																																																																	_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$JumpI6NonPositive, 'J6NP'),
																																																																																																																																	_1: {
																																																																																																																																		ctor: '::',
																																																																																																																																		_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$ShiftA, 'SA'),
																																																																																																																																		_1: {
																																																																																																																																			ctor: '::',
																																																																																																																																			_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$ShiftX, 'SX'),
																																																																																																																																			_1: {
																																																																																																																																				ctor: '::',
																																																																																																																																				_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$ShiftACircular, 'SAC'),
																																																																																																																																				_1: {
																																																																																																																																					ctor: '::',
																																																																																																																																					_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$ShiftXCircular, 'SAX'),
																																																																																																																																					_1: {
																																																																																																																																						ctor: '::',
																																																																																																																																						_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$SwapAX, 'SWAP'),
																																																																																																																																						_1: {
																																																																																																																																							ctor: '::',
																																																																																																																																							_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI1, 'MOVX1'),
																																																																																																																																							_1: {
																																																																																																																																								ctor: '::',
																																																																																																																																								_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI2, 'MOVX2'),
																																																																																																																																								_1: {
																																																																																																																																									ctor: '::',
																																																																																																																																									_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI3, 'MOVX3'),
																																																																																																																																									_1: {
																																																																																																																																										ctor: '::',
																																																																																																																																										_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI4, 'MOVX4'),
																																																																																																																																										_1: {
																																																																																																																																											ctor: '::',
																																																																																																																																											_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI5, 'MOVX5'),
																																																																																																																																											_1: {
																																																																																																																																												ctor: '::',
																																																																																																																																												_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$MoveXI6, 'MOVX6'),
																																																																																																																																												_1: {
																																																																																																																																													ctor: '::',
																																																																																																																																													_0: A2(_danielbarter$elm_mix$Tokenizer$f, _danielbarter$elm_mix$Instruction$NoOperation, 'NOP'),
																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																												}
																																																																																																																																											}
																																																																																																																																										}
																																																																																																																																									}
																																																																																																																																								}
																																																																																																																																							}
																																																																																																																																						}
																																																																																																																																					}
																																																																																																																																				}
																																																																																																																																			}
																																																																																																																																		}
																																																																																																																																	}
																																																																																																																																}
																																																																																																																															}
																																																																																																																														}
																																																																																																																													}
																																																																																																																												}
																																																																																																																											}
																																																																																																																										}
																																																																																																																									}
																																																																																																																								}
																																																																																																																							}
																																																																																																																						}
																																																																																																																					}
																																																																																																																				}
																																																																																																																			}
																																																																																																																		}
																																																																																																																	}
																																																																																																																}
																																																																																																															}
																																																																																																														}
																																																																																																													}
																																																																																																												}
																																																																																																											}
																																																																																																										}
																																																																																																									}
																																																																																																								}
																																																																																																							}
																																																																																																						}
																																																																																																					}
																																																																																																				}
																																																																																																			}
																																																																																																		}
																																																																																																	}
																																																																																																}
																																																																																															}
																																																																																														}
																																																																																													}
																																																																																												}
																																																																																											}
																																																																																										}
																																																																																									}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _danielbarter$elm_mix$Tokenizer$getToken = A3(
	_elm_lang$core$List$foldl,
	_danielbarter$elm_mix$StateMonad$try,
	_danielbarter$elm_mix$Tokenizer$getInstruction,
	{
		ctor: '::',
		_0: _danielbarter$elm_mix$Tokenizer$getRelative,
		_1: {
			ctor: '::',
			_0: _danielbarter$elm_mix$Tokenizer$getLabel,
			_1: {
				ctor: '::',
				_0: _danielbarter$elm_mix$Tokenizer$getMask,
				_1: {
					ctor: '::',
					_0: _danielbarter$elm_mix$Tokenizer$getIndex,
					_1: {
						ctor: '::',
						_0: _danielbarter$elm_mix$Tokenizer$getComment,
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _danielbarter$elm_mix$Tokenizer$tokenizeLine = function (s) {
	tokenizeLine:
	while (true) {
		var _p16 = _danielbarter$elm_mix$Tokenizer$getToken(s);
		if (_p16.ctor === 'Ok') {
			return {
				ctor: '::',
				_0: _p16._0._1,
				_1: _danielbarter$elm_mix$Tokenizer$tokenizeLine(_p16._0._0)
			};
		} else {
			if (_p16._0.ctor === 'NoMatch') {
				var _p17 = _elm_lang$core$String$uncons(s);
				if (_p17.ctor === 'Nothing') {
					return {ctor: '[]'};
				} else {
					var _v10 = _p17._0._1;
					s = _v10;
					continue tokenizeLine;
				}
			} else {
				return {ctor: '[]'};
			}
		}
	}
};
var _danielbarter$elm_mix$Tokenizer$tokenize = function (s) {
	return A2(
		_elm_lang$core$List$filter,
		_danielbarter$elm_mix$Tokenizer$commentLine,
		_danielbarter$elm_mix$Tokenizer$filterNothing(
			A2(
				_elm_lang$core$List$map,
				function (_p18) {
					return _danielbarter$elm_mix$Tokenizer$tagEmptyLine(
						_danielbarter$elm_mix$Tokenizer$tokenizeLine(_p18));
				},
				_elm_lang$core$String$lines(s))));
};

var _danielbarter$elm_mix$Parser$getIndex = function (l) {
	getIndex:
	while (true) {
		var _p0 = l;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p1 = _p0._0;
			if (_p1.ctor === 'IndexTag') {
				return _elm_lang$core$Maybe$Just(_p1._0);
			} else {
				var _v2 = _p0._1;
				l = _v2;
				continue getIndex;
			}
		}
	}
};
var _danielbarter$elm_mix$Parser$getIndexDefault = function (l) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		_danielbarter$elm_mix$Parser$getIndex(l));
};
var _danielbarter$elm_mix$Parser$getMask = function (l) {
	getMask:
	while (true) {
		var _p2 = l;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p2._0;
			if (_p3.ctor === 'MaskTag') {
				return _elm_lang$core$Maybe$Just(_p3._0);
			} else {
				var _v5 = _p2._1;
				l = _v5;
				continue getMask;
			}
		}
	}
};
var _danielbarter$elm_mix$Parser$getMaskDefault = function (l) {
	return _danielbarter$elm_mix$Atom$byteToMasks(
		_danielbarter$elm_mix$Atom$byte(
			A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				_danielbarter$elm_mix$Parser$getMask(l))));
};
var _danielbarter$elm_mix$Parser$getLabel = function (l) {
	getLabel:
	while (true) {
		var _p4 = l;
		if (_p4.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p5 = _p4._0;
			if (_p5.ctor === 'LabelTag') {
				return _elm_lang$core$Maybe$Just(_p5._0);
			} else {
				var _v8 = _p4._1;
				l = _v8;
				continue getLabel;
			}
		}
	}
};
var _danielbarter$elm_mix$Parser$getRelativeAddress = function (l) {
	getRelativeAddress:
	while (true) {
		var _p6 = l;
		if (_p6.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p7 = _p6._0;
			if (_p7.ctor === 'RelativeTag') {
				return _elm_lang$core$Maybe$Just(_p7._0);
			} else {
				var _v11 = _p6._1;
				l = _v11;
				continue getRelativeAddress;
			}
		}
	}
};
var _danielbarter$elm_mix$Parser$getRelativeAddressDefault = function (l) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_danielbarter$elm_mix$Instruction$Value(0),
		_danielbarter$elm_mix$Parser$getRelativeAddress(l));
};
var _danielbarter$elm_mix$Parser$getInstruction = function (l) {
	getInstruction:
	while (true) {
		var _p8 = l;
		if (_p8.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p9 = _p8._0;
			if (_p9.ctor === 'InstructionTag') {
				return _elm_lang$core$Maybe$Just(_p9._0);
			} else {
				var _v14 = _p8._1;
				l = _v14;
				continue getInstruction;
			}
		}
	}
};
var _danielbarter$elm_mix$Parser$parseLine = function (l) {
	var index = _danielbarter$elm_mix$Parser$getIndexDefault(l);
	var address = _danielbarter$elm_mix$Parser$getRelativeAddressDefault(l);
	var tag = _danielbarter$elm_mix$Parser$getInstruction(l);
	var masks = _danielbarter$elm_mix$Parser$getMaskDefault(l);
	var label = _danielbarter$elm_mix$Parser$getLabel(l);
	var _p10 = tag;
	if (_p10.ctor === 'Nothing') {
		return _elm_lang$core$Result$Ok(
			A2(
				_danielbarter$elm_mix$CodeFunctor$Code,
				label,
				_danielbarter$elm_mix$CodeFunctor$DataNumber(address)));
	} else {
		return _elm_lang$core$Result$Ok(
			A2(
				_danielbarter$elm_mix$CodeFunctor$Code,
				label,
				_danielbarter$elm_mix$CodeFunctor$DataInstruction(
					{ctor: '_Tuple4', _0: address, _1: index, _2: masks, _3: _p10._0})));
	}
};
var _danielbarter$elm_mix$Parser$parse = function (s) {
	return _danielbarter$elm_mix$Tokenizer$distrubuteError(
		A2(_elm_lang$core$List$map, _danielbarter$elm_mix$Parser$parseLine, s));
};
var _danielbarter$elm_mix$Parser$NothingRightNow = {ctor: 'NothingRightNow'};

var _danielbarter$elm_mix$Transpiler$distrubuteNothing = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1._0;
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p2._0, _1: _p1._1});
	}
};
var _danielbarter$elm_mix$Transpiler$symbolTable = function (li) {
	return _elm_lang$core$Dict$fromList(
		_danielbarter$elm_mix$Tokenizer$filterNothing(
			A2(
				_elm_lang$core$List$map,
				function (_p3) {
					return _danielbarter$elm_mix$Transpiler$distrubuteNothing(
						_danielbarter$elm_mix$CodeFunctor$address(_p3));
				},
				li)));
};
var _danielbarter$elm_mix$Transpiler$f = F2(
	function (n, r) {
		return A4(
			_danielbarter$elm_mix$CodeFunctor$mapCode,
			function (l) {
				return {ctor: '_Tuple2', _0: l, _1: n};
			},
			_elm_lang$core$Basics$identity,
			_elm_lang$core$Basics$identity,
			r);
	});
var _danielbarter$elm_mix$Transpiler$zipWithAddress = function (rs) {
	var l = _elm_lang$core$List$length(rs);
	var ads = A2(_elm_lang$core$List$range, 0, l - 1);
	return A3(_elm_lang$core$List$map2, _danielbarter$elm_mix$Transpiler$f, ads, rs);
};
var _danielbarter$elm_mix$Transpiler$NonDeclaredLabel = function (a) {
	return {ctor: 'NonDeclaredLabel', _0: a};
};
var _danielbarter$elm_mix$Transpiler$evaluateLabel = F2(
	function (s, r) {
		var _p4 = r;
		if (_p4.ctor === 'Value') {
			return _elm_lang$core$Result$Ok(_p4._0);
		} else {
			var _p6 = _p4._0;
			var _p5 = A2(_elm_lang$core$Dict$get, _p6, s);
			if (_p5.ctor === 'Nothing') {
				return _elm_lang$core$Result$Err(
					_danielbarter$elm_mix$Transpiler$NonDeclaredLabel(_p6));
			} else {
				return _elm_lang$core$Result$Ok(_p5._0);
			}
		}
	});
var _danielbarter$elm_mix$Transpiler$evaluateLabelInst = F2(
	function (s, _p7) {
		var _p8 = _p7;
		return A2(
			_elm_lang$core$Result$map,
			function (a) {
				return {ctor: '_Tuple4', _0: a, _1: _p8._1, _2: _p8._2, _3: _p8._3};
			},
			A2(_danielbarter$elm_mix$Transpiler$evaluateLabel, s, _p8._0));
	});
var _danielbarter$elm_mix$Transpiler$intermediateToASM = F2(
	function (s, i) {
		return _danielbarter$elm_mix$CodeFunctor$distrubuteCodeError(
			A4(
				_danielbarter$elm_mix$CodeFunctor$mapCode,
				_elm_lang$core$Tuple$second,
				_danielbarter$elm_mix$Transpiler$evaluateLabel(s),
				_danielbarter$elm_mix$Transpiler$evaluateLabelInst(s),
				i));
	});
var _danielbarter$elm_mix$Transpiler$transpile = function (l) {
	var li = _danielbarter$elm_mix$Transpiler$zipWithAddress(l);
	var st = _danielbarter$elm_mix$Transpiler$symbolTable(li);
	return A2(
		_elm_lang$core$Result$map,
		function (l) {
			return {ctor: '_Tuple2', _0: l, _1: st};
		},
		_danielbarter$elm_mix$Tokenizer$distrubuteError(
			A2(
				_elm_lang$core$List$map,
				_danielbarter$elm_mix$Transpiler$intermediateToASM(st),
				li)));
};

var _danielbarter$elm_mix$Compiler$reverse = function (d) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			function (_p0) {
				var _p1 = _p0;
				return {ctor: '_Tuple2', _0: _p1._1, _1: _p1._0};
			},
			_elm_lang$core$Dict$toList(d)));
};
var _danielbarter$elm_mix$Compiler$TranspilePhaseError = function (a) {
	return {ctor: 'TranspilePhaseError', _0: a};
};
var _danielbarter$elm_mix$Compiler$ParserPhaseError = function (a) {
	return {ctor: 'ParserPhaseError', _0: a};
};
var _danielbarter$elm_mix$Compiler$compile = function (s) {
	var t = _danielbarter$elm_mix$Tokenizer$tokenize(s);
	var p = _danielbarter$elm_mix$Parser$parse(t);
	var _p2 = p;
	if (_p2.ctor === 'Err') {
		return _elm_lang$core$Result$Err(
			_danielbarter$elm_mix$Compiler$ParserPhaseError(_p2._0));
	} else {
		var _p3 = _danielbarter$elm_mix$Transpiler$transpile(_p2._0);
		if (_p3.ctor === 'Err') {
			return _elm_lang$core$Result$Err(
				_danielbarter$elm_mix$Compiler$TranspilePhaseError(_p3._0));
		} else {
			var _p5 = _p3._0._1;
			var _p4 = _danielbarter$elm_mix$Assembler$assemble(_p3._0._0);
			var meta = _p4._0;
			var mem = _p4._1;
			return _elm_lang$core$Result$Ok(
				{
					ctor: '_Tuple4',
					_0: meta,
					_1: mem,
					_2: _p5,
					_3: _danielbarter$elm_mix$Compiler$reverse(_p5)
				});
		}
	}
};

var _danielbarter$elm_mix$MixStep$executeInstructionOp = function (d) {
	return A2(
		_danielbarter$elm_mix$StateMonad_ops['*>'],
		A2(
			_danielbarter$elm_mix$StateMonad_ops['>>='],
			A2(
				_danielbarter$elm_mix$StateMonad_ops['<$>'],
				_danielbarter$elm_mix$Mix$instructionTransition(d),
				_danielbarter$elm_mix$StateMonad$get),
			_danielbarter$elm_mix$StateMonad$put),
		_danielbarter$elm_mix$StateMonad$return(d));
};
var _danielbarter$elm_mix$MixStep$incrementCounter = function () {
	var op = function (m) {
		return _elm_lang$core$Native_Utils.update(
			m,
			{p: m.p + 1});
	};
	return A2(
		_danielbarter$elm_mix$StateMonad_ops['>>='],
		A2(_danielbarter$elm_mix$StateMonad_ops['<$>'], op, _danielbarter$elm_mix$StateMonad$get),
		_danielbarter$elm_mix$StateMonad$put);
}();
var _danielbarter$elm_mix$MixStep$unpackOp = function (w) {
	return _danielbarter$elm_mix$StateMonad$return(
		_danielbarter$elm_mix$Atom$unpack(w));
};
var _danielbarter$elm_mix$MixStep$CompileTimeError = {ctor: 'CompileTimeError'};
var _danielbarter$elm_mix$MixStep$InvalidIndex = function (a) {
	return {ctor: 'InvalidIndex', _0: a};
};
var _danielbarter$elm_mix$MixStep$relativiseInstruction = F2(
	function (m, _p0) {
		var _p1 = _p0;
		var _p5 = _p1._3;
		var _p4 = _p1._2;
		var _p3 = _p1._0;
		var _p2 = _p1._1;
		switch (_p2) {
			case 0:
				return _danielbarter$elm_mix$StateMonad$return(
					{ctor: '_Tuple3', _0: _p3, _1: _p4, _2: _p5});
			case 1:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i1),
						_1: _p4,
						_2: _p5
					});
			case 2:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i2),
						_1: _p4,
						_2: _p5
					});
			case 3:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i3),
						_1: _p4,
						_2: _p5
					});
			case 4:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i4),
						_1: _p4,
						_2: _p5
					});
			case 5:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i5),
						_1: _p4,
						_2: _p5
					});
			case 6:
				return _danielbarter$elm_mix$StateMonad$return(
					{
						ctor: '_Tuple3',
						_0: _p3 + _danielbarter$elm_mix$Atom$smallWordValue(m.i6),
						_1: _p4,
						_2: _p5
					});
			default:
				return _danielbarter$elm_mix$StateMonad$throwError(
					_danielbarter$elm_mix$MixStep$InvalidIndex(_p2));
		}
	});
var _danielbarter$elm_mix$MixStep$relativiseInstructionOp = function (s) {
	return A2(
		_danielbarter$elm_mix$StateMonad_ops['>>='],
		_danielbarter$elm_mix$StateMonad$get,
		A2(_elm_lang$core$Basics$flip, _danielbarter$elm_mix$MixStep$relativiseInstruction, s));
};
var _danielbarter$elm_mix$MixStep$InstructionDecodeError = function (a) {
	return {ctor: 'InstructionDecodeError', _0: a};
};
var _danielbarter$elm_mix$MixStep$decodeOp = function (u) {
	var _p6 = _danielbarter$elm_mix$Instruction$decodeInstruction(u);
	if (_p6.ctor === 'Err') {
		return _danielbarter$elm_mix$StateMonad$throwError(
			_danielbarter$elm_mix$MixStep$InstructionDecodeError(_p6._0));
	} else {
		return _danielbarter$elm_mix$StateMonad$return(_p6._0);
	}
};
var _danielbarter$elm_mix$MixStep$NoMemoryValue = function (a) {
	return {ctor: 'NoMemoryValue', _0: a};
};
var _danielbarter$elm_mix$MixStep$nextWord = function (m) {
	var _p7 = A2(_elm_lang$core$Dict$get, m.p, m.mem);
	if (_p7.ctor === 'Nothing') {
		return _danielbarter$elm_mix$StateMonad$throwError(
			_danielbarter$elm_mix$MixStep$NoMemoryValue(m.p));
	} else {
		return _danielbarter$elm_mix$StateMonad$return(_p7._0);
	}
};
var _danielbarter$elm_mix$MixStep$decodeInstructionOp = A2(
	_danielbarter$elm_mix$StateMonad_ops['>>='],
	A2(
		_danielbarter$elm_mix$StateMonad_ops['>>='],
		A2(_danielbarter$elm_mix$StateMonad_ops['>>='], _danielbarter$elm_mix$StateMonad$get, _danielbarter$elm_mix$MixStep$nextWord),
		_danielbarter$elm_mix$MixStep$unpackOp),
	_danielbarter$elm_mix$MixStep$decodeOp);
var _danielbarter$elm_mix$MixStep$step = A2(
	_danielbarter$elm_mix$StateMonad_ops['>>='],
	A2(
		_danielbarter$elm_mix$StateMonad_ops['>>='],
		A2(_danielbarter$elm_mix$StateMonad_ops['<*'], _danielbarter$elm_mix$MixStep$decodeInstructionOp, _danielbarter$elm_mix$MixStep$incrementCounter),
		_danielbarter$elm_mix$MixStep$relativiseInstructionOp),
	_danielbarter$elm_mix$MixStep$executeInstructionOp);

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _danielbarter$elm_mix$MemData$ppValue = function (v) {
	return _elm_lang$core$Basics$toString(v);
};
var _danielbarter$elm_mix$MemData$ppPrefix = F2(
	function (a, l) {
		var pref = _elm_lang$core$Basics$toString(a);
		var _p0 = l;
		if (_p0.ctor === 'Nothing') {
			return A2(_elm_lang$core$Basics_ops['++'], pref, ' ');
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				pref,
				A2(
					_elm_lang$core$Basics_ops['++'],
					':',
					A2(_elm_lang$core$Basics_ops['++'], _p0._0, ' ')));
		}
	});
var _danielbarter$elm_mix$MemData$ppMaybeMasks = function (m) {
	var _p1 = m;
	if (_p1.ctor === 'Nothing') {
		return '';
	} else {
		var _p3 = function (_p2) {
			return _danielbarter$elm_mix$Atom$value(
				_danielbarter$elm_mix$Atom$masksToByte(_p2));
		}(_p1._0);
		if (_p3 === 0) {
			return '';
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'/',
				_elm_lang$core$Basics$toString(_p3));
		}
	}
};
var _danielbarter$elm_mix$MemData$ppMaybeIndex = function (i) {
	var _p4 = i;
	if (_p4.ctor === 'Nothing') {
		return '';
	} else {
		var _p6 = _p4._0;
		var _p5 = _p6;
		if (_p5 === 0) {
			return '';
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'+',
				_elm_lang$core$Basics$toString(_p6));
		}
	}
};
var _danielbarter$elm_mix$MemData$ppMaybeAddress = function (a) {
	var _p7 = a;
	if (_p7.ctor === 'Nothing') {
		return '';
	} else {
		return _elm_lang$core$Basics$toString(_p7._0);
	}
};
var _danielbarter$elm_mix$MemData$ppStaticInstructionClean = F2(
	function (mix, _p8) {
		var _p9 = _p8;
		var sm = _danielbarter$elm_mix$MemData$ppMaybeMasks(_p9._2);
		var si = _danielbarter$elm_mix$MemData$ppMaybeIndex(_p9._1);
		var sa = _danielbarter$elm_mix$MemData$ppMaybeAddress(_p9._0);
		var st = _danielbarter$elm_mix$Instruction$ppTag(_p9._3);
		return A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: sm,
				_1: {
					ctor: '::',
					_0: st,
					_1: {
						ctor: '::',
						_0: sa,
						_1: {
							ctor: '::',
							_0: si,
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _danielbarter$elm_mix$MemData$ppMemData = F2(
	function (mix, d) {
		ppMemData:
		while (true) {
			var _p10 = d;
			var a = _p10._0;
			var l = _p10._1;
			var t = _p10._2;
			var v = _p10._3;
			var i = _p10._4;
			var b = _p10._5;
			var p = A2(_danielbarter$elm_mix$MemData$ppPrefix, a, l);
			var vv = _danielbarter$elm_mix$MemData$ppValue(v);
			var _p11 = t;
			if (_p11.ctor === 'Number') {
				return b ? {ctor: '_Tuple6', _0: p, _1: _elm_lang$core$Color$darkCharcoal, _2: _elm_lang$core$Color$white, _3: vv, _4: _elm_lang$core$Color$darkOrange, _5: _elm_lang$core$Color$white} : {ctor: '_Tuple6', _0: p, _1: _elm_lang$core$Color$darkCharcoal, _2: _elm_lang$core$Color$white, _3: vv, _4: _elm_lang$core$Color$lightCharcoal, _5: _elm_lang$core$Color$black};
			} else {
				var _p12 = i;
				if (_p12.ctor === 'Err') {
					var _v9 = mix,
						_v10 = {ctor: '_Tuple6', _0: a, _1: l, _2: _danielbarter$elm_mix$Mix$Number, _3: v, _4: i, _5: b};
					mix = _v9;
					d = _v10;
					continue ppMemData;
				} else {
					var s = A2(_danielbarter$elm_mix$MemData$ppStaticInstructionClean, mix, _p12._0);
					return b ? {ctor: '_Tuple6', _0: p, _1: _elm_lang$core$Color$darkCharcoal, _2: _elm_lang$core$Color$white, _3: s, _4: _elm_lang$core$Color$darkOrange, _5: _elm_lang$core$Color$white} : {ctor: '_Tuple6', _0: p, _1: _elm_lang$core$Color$darkCharcoal, _2: _elm_lang$core$Color$white, _3: s, _4: _elm_lang$core$Color$lightCharcoal, _5: _elm_lang$core$Color$black};
				}
			}
		}
	});
var _danielbarter$elm_mix$MemData$ppComparision = function (t) {
	var _p13 = t;
	switch (_p13.ctor) {
		case 'L':
			return {ctor: '_Tuple3', _0: '<', _1: _elm_lang$core$Color$darkRed, _2: _elm_lang$core$Color$white};
		case 'E':
			return {ctor: '_Tuple3', _0: '=', _1: _elm_lang$core$Color$darkGrey, _2: _elm_lang$core$Color$white};
		default:
			return {ctor: '_Tuple3', _0: '>', _1: _elm_lang$core$Color$darkGreen, _2: _elm_lang$core$Color$white};
	}
};
var _danielbarter$elm_mix$MemData$ppOverflow = function (t) {
	var _p14 = t;
	switch (_p14.ctor) {
		case 'Overflow':
			return {ctor: '_Tuple3', _0: 'Overflow', _1: _elm_lang$core$Color$darkRed, _2: _elm_lang$core$Color$white};
		case 'Good':
			return {ctor: '_Tuple3', _0: 'Good', _1: _elm_lang$core$Color$darkGreen, _2: _elm_lang$core$Color$white};
		default:
			return {ctor: '_Tuple3', _0: 'Fuck!', _1: _elm_lang$core$Color$black, _2: _elm_lang$core$Color$white};
	}
};
var _danielbarter$elm_mix$MemData$ppJump = function (w) {
	return {
		ctor: '_Tuple3',
		_0: _elm_lang$core$Basics$toString(
			_danielbarter$elm_mix$Atom$smallWordValue(w)),
		_1: _elm_lang$core$Color$darkCharcoal,
		_2: _elm_lang$core$Color$white
	};
};
var _danielbarter$elm_mix$MemData$ppSmallWord = function (w) {
	return {
		ctor: '_Tuple3',
		_0: _elm_lang$core$Basics$toString(
			_danielbarter$elm_mix$Atom$smallWordValue(w)),
		_1: _elm_lang$core$Color$darkBlue,
		_2: _elm_lang$core$Color$white
	};
};
var _danielbarter$elm_mix$MemData$ppWord = function (w) {
	return {
		ctor: '_Tuple3',
		_0: _elm_lang$core$Basics$toString(
			_danielbarter$elm_mix$Atom$wordValue(w)),
		_1: _elm_lang$core$Color$lightCharcoal,
		_2: _elm_lang$core$Color$black
	};
};
var _danielbarter$elm_mix$MemData$memData = F2(
	function (m, a) {
		return {
			ctor: '_Tuple6',
			_0: a,
			_1: A2(_elm_lang$core$Dict$get, a, m.reverseSymbolTable),
			_2: A2(_danielbarter$elm_mix$Mix$readMeta, a, m.meta),
			_3: _danielbarter$elm_mix$Atom$wordValue(
				A2(_danielbarter$elm_mix$Mix$read, a, m.mem)),
			_4: A2(
				_elm_lang$core$Result$map,
				_danielbarter$elm_mix$Instruction$cleanStatic,
				_danielbarter$elm_mix$Instruction$decodeInstruction(
					_danielbarter$elm_mix$Atom$unpack(
						A2(_danielbarter$elm_mix$Mix$read, a, m.mem)))),
			_5: _elm_lang$core$Native_Utils.eq(m.p, a)
		};
	});
var _danielbarter$elm_mix$MemData$totalMemData = function (m) {
	return A2(
		_elm_lang$core$List$map,
		_danielbarter$elm_mix$MemData$memData(m),
		_elm_lang$core$Dict$keys(m.mem));
};

var _danielbarter$elm_mix$Model$outerBoxStyle = {
	ctor: '::',
	_0: _elm_lang$html$Html_Attributes$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'border-size', _1: '3px'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'border-style', _1: 'solid'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'border-color', _1: 'white'},
						_1: {ctor: '[]'}
					}
				}
			}
		}),
	_1: {ctor: '[]'}
};
var _danielbarter$elm_mix$Model$printColor = function (c) {
	var cc = _elm_lang$core$Color$toRgb(c);
	var r = _elm_lang$core$Basics$toString(
		function (_) {
			return _.red;
		}(cc));
	var g = _elm_lang$core$Basics$toString(
		function (_) {
			return _.green;
		}(cc));
	var b = _elm_lang$core$Basics$toString(
		function (_) {
			return _.blue;
		}(cc));
	var a = _elm_lang$core$Basics$toString(
		function (_) {
			return _.alpha;
		}(cc));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'rgba(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$String$join,
				',',
				{
					ctor: '::',
					_0: r,
					_1: {
						ctor: '::',
						_0: g,
						_1: {
							ctor: '::',
							_0: b,
							_1: {
								ctor: '::',
								_0: a,
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			')'));
};
var _danielbarter$elm_mix$Model$boxStyle = F2(
	function (cb, ct) {
		return {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'background-color',
						_1: _danielbarter$elm_mix$Model$printColor(cb)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _danielbarter$elm_mix$Model$printColor(ct)
						},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '10px'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'border-size', _1: '3px'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-style', _1: 'solid'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-color', _1: 'white'},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		};
	});
var _danielbarter$elm_mix$Model$displayWord = function (w) {
	var _p0 = _danielbarter$elm_mix$MemData$ppWord(w);
	var s = _p0._0;
	var cb = _p0._1;
	var ct = _p0._2;
	return A2(
		_elm_lang$html$Html$div,
		A2(_danielbarter$elm_mix$Model$boxStyle, cb, ct),
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _danielbarter$elm_mix$Model$displaySmallWord = function (w) {
	var _p1 = _danielbarter$elm_mix$MemData$ppSmallWord(w);
	var s = _p1._0;
	var cb = _p1._1;
	var ct = _p1._2;
	return A2(
		_elm_lang$html$Html$div,
		A2(_danielbarter$elm_mix$Model$boxStyle, cb, ct),
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _danielbarter$elm_mix$Model$displayJump = function (w) {
	var _p2 = _danielbarter$elm_mix$MemData$ppJump(w);
	var s = _p2._0;
	var cb = _p2._1;
	var ct = _p2._2;
	return A2(
		_elm_lang$html$Html$div,
		A2(_danielbarter$elm_mix$Model$boxStyle, cb, ct),
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _danielbarter$elm_mix$Model$displayOverflow = function (t) {
	var _p3 = _danielbarter$elm_mix$MemData$ppOverflow(t);
	var s = _p3._0;
	var cb = _p3._1;
	var ct = _p3._2;
	return A2(
		_elm_lang$html$Html$div,
		A2(_danielbarter$elm_mix$Model$boxStyle, cb, ct),
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _danielbarter$elm_mix$Model$displayComparison = function (t) {
	var _p4 = _danielbarter$elm_mix$MemData$ppComparision(t);
	var s = _p4._0;
	var cb = _p4._1;
	var ct = _p4._2;
	return A2(
		_elm_lang$html$Html$div,
		A2(_danielbarter$elm_mix$Model$boxStyle, cb, ct),
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _danielbarter$elm_mix$Model$displayRegisters = function (mix) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _danielbarter$elm_mix$Model$displayWord(mix.a),
			_1: {
				ctor: '::',
				_0: _danielbarter$elm_mix$Model$displayWord(mix.x),
				_1: {
					ctor: '::',
					_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i1),
					_1: {
						ctor: '::',
						_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i2),
						_1: {
							ctor: '::',
							_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i3),
							_1: {
								ctor: '::',
								_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i4),
								_1: {
									ctor: '::',
									_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i5),
									_1: {
										ctor: '::',
										_0: _danielbarter$elm_mix$Model$displaySmallWord(mix.i6),
										_1: {
											ctor: '::',
											_0: _danielbarter$elm_mix$Model$displayJump(mix.j),
											_1: {
												ctor: '::',
												_0: _danielbarter$elm_mix$Model$displayOverflow(mix.overflow),
												_1: {
													ctor: '::',
													_0: _danielbarter$elm_mix$Model$displayComparison(mix.comparison),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _danielbarter$elm_mix$Model$leftBoxStyle = F2(
	function (cb, ct) {
		return {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'background-color',
						_1: _danielbarter$elm_mix$Model$printColor(cb)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _danielbarter$elm_mix$Model$printColor(ct)
						},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '10px 0px 0px 10px'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		};
	});
var _danielbarter$elm_mix$Model$rightBoxStyle = F2(
	function (cb, ct) {
		return {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'background-color',
						_1: _danielbarter$elm_mix$Model$printColor(cb)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _danielbarter$elm_mix$Model$printColor(ct)
						},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '0px 10px 10px 0px'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		};
	});
var _danielbarter$elm_mix$Model$displayMemData = F2(
	function (mix, d) {
		var _p5 = A2(_danielbarter$elm_mix$MemData$ppMemData, mix, d);
		var p = _p5._0;
		var mb = _p5._1;
		var mt = _p5._2;
		var s = _p5._3;
		var cb = _p5._4;
		var ct = _p5._5;
		return A2(
			_elm_lang$html$Html$div,
			_danielbarter$elm_mix$Model$outerBoxStyle,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					A2(_danielbarter$elm_mix$Model$leftBoxStyle, mb, mt),
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(p),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						A2(_danielbarter$elm_mix$Model$rightBoxStyle, cb, ct),
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(s),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _danielbarter$elm_mix$Model$displayMem = function (mix) {
	var memDatas = _danielbarter$elm_mix$MemData$totalMemData(mix);
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		A2(
			_elm_lang$core$List$map,
			_danielbarter$elm_mix$Model$displayMemData(mix),
			memDatas));
};
var _danielbarter$elm_mix$Model$displayMix = function (mix) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _danielbarter$elm_mix$Model$displayRegisters(mix),
			_1: {
				ctor: '::',
				_0: _danielbarter$elm_mix$Model$displayMem(mix),
				_1: {ctor: '[]'}
			}
		});
};
var _danielbarter$elm_mix$Model$errorMessage = function (e) {
	var _p6 = e;
	if (_p6.ctor === 'Nothing') {
		return _elm_lang$html$Html$text('');
	} else {
		return _elm_lang$html$Html$text(
			_elm_lang$core$Basics$toString(_p6._0));
	}
};
var _danielbarter$elm_mix$Model$Model = F5(
	function (a, b, c, d, e) {
		return {sourceCode: a, compileError: b, mix: c, runtimeError: d, power: e};
	});
var _danielbarter$elm_mix$Model$Off = {ctor: 'Off'};
var _danielbarter$elm_mix$Model$model = {
	sourceCode: '',
	compileError: _elm_lang$core$Maybe$Nothing,
	mix: {ctor: '[]'},
	runtimeError: _elm_lang$core$Maybe$Nothing,
	power: _danielbarter$elm_mix$Model$Off
};
var _danielbarter$elm_mix$Model$On = {ctor: 'On'};
var _danielbarter$elm_mix$Model$update = F2(
	function (msg, model) {
		var _p7 = msg;
		switch (_p7.ctor) {
			case 'Compile':
				var _p8 = _danielbarter$elm_mix$Compiler$compile(model.sourceCode);
				if (_p8.ctor === 'Err') {
					return _elm_lang$core$Native_Utils.update(
						model,
						{
							compileError: _elm_lang$core$Maybe$Just(_p8._0),
							mix: {ctor: '[]'},
							power: _danielbarter$elm_mix$Model$Off
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						model,
						{
							compileError: _elm_lang$core$Maybe$Nothing,
							mix: {
								ctor: '::',
								_0: _danielbarter$elm_mix$Mix$load(_p8._0),
								_1: {ctor: '[]'}
							},
							power: _danielbarter$elm_mix$Model$On
						});
				}
			case 'KillCurrentCore':
				return _elm_lang$core$Native_Utils.update(
					model,
					{
						compileError: _elm_lang$core$Maybe$Nothing,
						mix: {ctor: '[]'},
						runtimeError: _elm_lang$core$Maybe$Nothing,
						power: _danielbarter$elm_mix$Model$Off
					});
			case 'StepForward':
				var _p9 = model.mix;
				if (_p9.ctor === '[]') {
					return model;
				} else {
					var _p14 = _p9._1;
					var _p13 = _p9._0;
					var _p10 = _danielbarter$elm_mix$MixStep$step(_p13);
					if (_p10.ctor === 'Err') {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								runtimeError: _elm_lang$core$Maybe$Just(_p10._0)
							});
					} else {
						var _p12 = _p10._0._0;
						var _p11 = _p10._0._1;
						if ((_p11.ctor === '_Tuple3') && (_p11._2.ctor === 'Halt')) {
							return _elm_lang$core$Native_Utils.update(
								model,
								{
									mix: {
										ctor: '::',
										_0: _p12,
										_1: {ctor: '::', _0: _p13, _1: _p14}
									},
									runtimeError: _elm_lang$core$Maybe$Nothing,
									power: _danielbarter$elm_mix$Model$Off
								});
						} else {
							return _elm_lang$core$Native_Utils.update(
								model,
								{
									mix: {
										ctor: '::',
										_0: _p12,
										_1: {ctor: '::', _0: _p13, _1: _p14}
									},
									runtimeError: _elm_lang$core$Maybe$Nothing,
									power: _danielbarter$elm_mix$Model$On
								});
						}
					}
				}
			case 'StepBackward':
				var _p15 = model.mix;
				if (_p15.ctor === '[]') {
					return model;
				} else {
					return _elm_lang$core$Native_Utils.update(
						model,
						{mix: _p15._1, runtimeError: _elm_lang$core$Maybe$Nothing, power: _danielbarter$elm_mix$Model$On});
				}
			default:
				return _elm_lang$core$Native_Utils.update(
					model,
					{sourceCode: _p7._0});
		}
	});
var _danielbarter$elm_mix$Model$ReadCode = function (a) {
	return {ctor: 'ReadCode', _0: a};
};
var _danielbarter$elm_mix$Model$sourceCodeBox = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$textarea,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$placeholder('Write source code here.'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onInput(_danielbarter$elm_mix$Model$ReadCode),
					_1: {ctor: '[]'}
				}
			},
			{ctor: '[]'}),
		_1: {ctor: '[]'}
	});
var _danielbarter$elm_mix$Model$StepBackward = {ctor: 'StepBackward'};
var _danielbarter$elm_mix$Model$StepForward = {ctor: 'StepForward'};
var _danielbarter$elm_mix$Model$KillCurrentCore = {ctor: 'KillCurrentCore'};
var _danielbarter$elm_mix$Model$runtimeButtons = function (p) {
	var _p16 = p;
	if (_p16.ctor === 'On') {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$StepForward),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('step'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$StepBackward),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('back'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$button,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$KillCurrentCore),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('kill core'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	} else {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$StepBackward),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('back'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$KillCurrentCore),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('kill core'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	}
};
var _danielbarter$elm_mix$Model$Compile = {ctor: 'Compile'};
var _danielbarter$elm_mix$Model$compileButton = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_danielbarter$elm_mix$Model$Compile),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('compile'),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	});
var _danielbarter$elm_mix$Model$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: function () {
				var _p17 = model.mix;
				if (_p17.ctor === '[]') {
					return A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _danielbarter$elm_mix$Model$sourceCodeBox,
							_1: {
								ctor: '::',
								_0: _danielbarter$elm_mix$Model$compileButton,
								_1: {
									ctor: '::',
									_0: _danielbarter$elm_mix$Model$errorMessage(model.compileError),
									_1: {ctor: '[]'}
								}
							}
						});
				} else {
					return A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _danielbarter$elm_mix$Model$sourceCodeBox,
							_1: {
								ctor: '::',
								_0: _danielbarter$elm_mix$Model$runtimeButtons(model.power),
								_1: {
									ctor: '::',
									_0: _danielbarter$elm_mix$Model$displayMix(_p17._0),
									_1: {
										ctor: '::',
										_0: _danielbarter$elm_mix$Model$errorMessage(model.runtimeError),
										_1: {ctor: '[]'}
									}
								}
							}
						});
				}
			}(),
			_1: {ctor: '[]'}
		});
};

var _danielbarter$elm_mix$Main$main = _elm_lang$html$Html$beginnerProgram(
	{model: _danielbarter$elm_mix$Model$model, view: _danielbarter$elm_mix$Model$view, update: _danielbarter$elm_mix$Model$update})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _danielbarter$elm_mix$Main$main !== 'undefined') {
    _danielbarter$elm_mix$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

