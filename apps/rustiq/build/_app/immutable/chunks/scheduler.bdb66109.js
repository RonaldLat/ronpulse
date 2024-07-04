var R = Object.defineProperty;
var F = (t, e, n) =>
	e in t ? R(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var f = (t, e, n) => (F(t, typeof e != 'symbol' ? e + '' : e, n), n);
function M() {}
const _t = (t) => t;
function G(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function I(t) {
	return t();
}
function ht() {
	return Object.create(null);
}
function z(t) {
	t.forEach(I);
}
function U(t) {
	return typeof t == 'function';
}
function dt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let p;
function mt(t, e) {
	return t === e ? !0 : (p || (p = document.createElement('a')), (p.href = e), t === p.href);
}
function pt(t) {
	return Object.keys(t).length === 0;
}
function W(t, ...e) {
	if (t == null) {
		for (const i of e) i(void 0);
		return M;
	}
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function yt(t, e, n) {
	t.$$.on_destroy.push(W(e, n));
}
function bt(t, e, n, i) {
	if (t) {
		const s = D(t, e, n, i);
		return t[0](s);
	}
}
function D(t, e, n, i) {
	return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function gt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const l = [],
				r = Math.max(e.dirty.length, s.length);
			for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
			return l;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function xt(t, e, n, i, s, l) {
	if (s) {
		const r = D(e, n, i, l);
		t.p(r, s);
	}
}
function wt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Et(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function vt(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
function Nt(t) {
	const e = {};
	for (const n in t) e[n] = !0;
	return e;
}
function Tt(t, e, n) {
	return t.set(n), e;
}
function kt(t) {
	return t && U(t.destroy) ? t.destroy : M;
}
function At(t) {
	const e = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [t, 'px'];
}
let b = !1;
function Ct() {
	b = !0;
}
function jt() {
	b = !1;
}
function J(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function K(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let a = 0; a < e.length; a++) {
			const u = e[a];
			u.claim_order !== void 0 && c.push(u);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const a = e[c].claim_order,
			u = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : J(1, s, (B) => e[n[B]].claim_order, a)) - 1;
		i[c] = n[u] + 1;
		const C = u + 1;
		(n[C] = c), (s = Math.max(C, s));
	}
	const l = [],
		r = [];
	let o = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) r.push(e[o]);
	l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
	for (let c = 0, a = 0; c < r.length; c++) {
		for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
		const u = a < l.length ? l[a] : null;
		t.insertBefore(r[c], u);
	}
}
function Q(t, e) {
	t.appendChild(e);
}
function V(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function Lt(t) {
	const e = T('style');
	return (e.textContent = '/* empty */'), X(V(t), e), e.sheet;
}
function X(t, e) {
	return Q(t.head || t, e), e.sheet;
}
function Y(t, e) {
	if (b) {
		for (
			K(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Z(t, e, n) {
	t.insertBefore(e, n || null);
}
function $(t, e, n) {
	b && !n ? Y(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function E(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function Mt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function T(t) {
	return document.createElement(t);
}
function H(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function k(t) {
	return document.createTextNode(t);
}
function Dt() {
	return k(' ');
}
function Ht() {
	return k('');
}
function Pt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function St(t) {
	return function (e) {
		return e.preventDefault(), t.call(this, e);
	};
}
function A(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const tt = ['width', 'height'];
function et(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
				? (t.style.cssText = e[i])
				: i === '__value'
					? (t.value = t[i] = e[i])
					: n[i] && n[i].set && tt.indexOf(i) === -1
						? (t[i] = e[i])
						: A(t, i, e[i]);
}
function Ot(t, e) {
	for (const n in e) A(t, n, e[n]);
}
function nt(t, e) {
	Object.keys(e).forEach((n) => {
		it(t, n, e[n]);
	});
}
function it(t, e, n) {
	const i = e.toLowerCase();
	i in t
		? (t[i] = typeof t[i] == 'boolean' && n === '' ? !0 : n)
		: e in t
			? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n)
			: A(t, e, n);
}
function qt(t) {
	return /-/.test(t) ? nt : et;
}
function Bt(t) {
	return t.dataset.svelteH;
}
function Rt(t) {
	return Array.from(t.childNodes);
}
function P(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function S(t, e, n, i, s = !1) {
	P(t);
	const l = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), s || (t.claim_info.last_index = r), o;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function O(t, e, n, i) {
	return S(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const o = s.attributes[r];
				n[o.name] || l.push(o.name);
			}
			l.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function Ft(t, e, n) {
	return O(t, e, n, T);
}
function Gt(t, e, n) {
	return O(t, e, n, H);
}
function st(t, e) {
	return S(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => k(e),
		!0
	);
}
function It(t) {
	return st(t, ' ');
}
function j(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return -1;
}
function zt(t, e) {
	const n = j(t, 'HTML_TAG_START', 0),
		i = j(t, 'HTML_TAG_END', n + 1);
	if (n === -1 || i === -1) return new g(e);
	P(t);
	const s = t.splice(n, i - n + 1);
	E(s[0]), E(s[s.length - 1]);
	const l = s.slice(1, s.length - 1);
	if (l.length === 0) return new g(e);
	for (const r of l)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new g(e, l);
}
function Ut(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function Wt(t, e) {
	t.value = e ?? '';
}
function Jt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function rt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
class ct {
	constructor(e = !1) {
		f(this, 'is_svg', !1);
		f(this, 'e');
		f(this, 'n');
		f(this, 't');
		f(this, 'a');
		(this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = H(n.nodeName))
				: (this.e = T(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) Z(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(E);
	}
}
class g extends ct {
	constructor(n = !1, i) {
		super(n);
		f(this, 'l');
		(this.e = this.n = null), (this.l = i);
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n);
	}
	i(n) {
		for (let i = 0; i < this.n.length; i += 1) $(this.t, this.n[i], n);
	}
}
function Kt(t, e) {
	return new t(e);
}
let y;
function x(t) {
	y = t;
}
function d() {
	if (!y) throw new Error('Function called outside component initialization');
	return y;
}
function Qt(t) {
	d().$$.on_mount.push(t);
}
function Vt(t) {
	d().$$.after_update.push(t);
}
function Xt(t) {
	d().$$.on_destroy.push(t);
}
function Yt() {
	const t = d();
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e];
		if (s) {
			const l = rt(e, n, { cancelable: i });
			return (
				s.slice().forEach((r) => {
					r.call(t, l);
				}),
				!l.defaultPrevented
			);
		}
		return !0;
	};
}
function Zt(t, e) {
	return d().$$.context.set(t, e), e;
}
function $t(t) {
	return d().$$.context.get(t);
}
function te(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const m = [],
	L = [];
let h = [];
const v = [],
	q = Promise.resolve();
let N = !1;
function lt() {
	N || ((N = !0), q.then(at));
}
function ee() {
	return lt(), q;
}
function ot(t) {
	h.push(t);
}
function ne(t) {
	v.push(t);
}
const w = new Set();
let _ = 0;
function at() {
	if (_ !== 0) return;
	const t = y;
	do {
		try {
			for (; _ < m.length; ) {
				const e = m[_];
				_++, x(e), ut(e.$$);
			}
		} catch (e) {
			throw ((m.length = 0), (_ = 0), e);
		}
		for (x(null), m.length = 0, _ = 0; L.length; ) L.pop()();
		for (let e = 0; e < h.length; e += 1) {
			const n = h[e];
			w.has(n) || (w.add(n), n());
		}
		h.length = 0;
	} while (m.length);
	for (; v.length; ) v.pop()();
	(N = !1), w.clear(), x(t);
}
function ut(t) {
	if (t.fragment !== null) {
		t.update(), z(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ot);
	}
}
function ie(t) {
	const e = [],
		n = [];
	h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (h = e);
}
export {
	Wt as $,
	Gt as A,
	zt as B,
	Ot as C,
	Yt as D,
	Y as E,
	Pt as F,
	yt as G,
	g as H,
	vt as I,
	Zt as J,
	bt as K,
	qt as L,
	kt as M,
	xt as N,
	wt as O,
	gt as P,
	U as Q,
	z as R,
	te as S,
	Nt as T,
	mt as U,
	$t as V,
	ne as W,
	Tt as X,
	Bt as Y,
	ot as Z,
	Mt as _,
	Dt as a,
	St as a0,
	V as a1,
	Lt as a2,
	rt as a3,
	_t as a4,
	ht as a5,
	at as a6,
	pt as a7,
	ie as a8,
	y as a9,
	x as aa,
	I as ab,
	m as ac,
	lt as ad,
	Ct as ae,
	jt as af,
	Vt as b,
	It as c,
	E as d,
	Ht as e,
	T as f,
	Ft as g,
	Rt as h,
	$ as i,
	A as j,
	Jt as k,
	k as l,
	st as m,
	Ut as n,
	Qt as o,
	L as p,
	Kt as q,
	At as r,
	dt as s,
	ee as t,
	M as u,
	Xt as v,
	G as w,
	Et as x,
	et as y,
	H as z
};
