var G = Object.defineProperty;
var H = (t, e, n) =>
	e in t ? G(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var P = (t, e, n) => (H(t, typeof e != 'symbol' ? e + '' : e, n), n);
import {
	u as w,
	a1 as J,
	d as B,
	a2 as K,
	R as v,
	Q as j,
	Z as b,
	a3 as T,
	a4 as D,
	a5 as M,
	h as W,
	a6 as X,
	a7 as Y,
	a8 as tt,
	a9 as et,
	aa as N,
	ab as nt,
	ac as it,
	ad as st,
	ae as at,
	af as rt
} from './scheduler.bdb66109.js';
const F = typeof window < 'u';
let L = F ? () => window.performance.now() : () => Date.now(),
	A = F ? (t) => requestAnimationFrame(t) : w;
const p = new Set();
function Q(t) {
	p.forEach((e) => {
		e.c(t) || (p.delete(e), e.f());
	}),
		p.size !== 0 && A(Q);
}
function U(t) {
	let e;
	return (
		p.size === 0 && A(Q),
		{
			promise: new Promise((n) => {
				p.add((e = { c: t, f: n }));
			}),
			abort() {
				p.delete(e);
			}
		}
	);
}
const k = new Map();
let O = 0;
function ot(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function ft(t, e) {
	const n = { stylesheet: K(e), rules: {} };
	return k.set(t, n), n;
}
function V(t, e, n, i, a, r, u, l = 0) {
	const d = 16.666 / i;
	let s = `{
`;
	for (let g = 0; g <= 1; g += d) {
		const m = e + (n - e) * r(g);
		s +=
			g * 100 +
			`%{${u(m, 1 - m)}}
`;
	}
	const f =
			s +
			`100% {${u(n, 1 - n)}}
}`,
		o = `__svelte_${ot(f)}_${l}`,
		_ = J(t),
		{ stylesheet: c, rules: $ } = k.get(_) || ft(_, t);
	$[o] || (($[o] = !0), c.insertRule(`@keyframes ${o} ${f}`, c.cssRules.length));
	const h = t.style.animation || '';
	return (t.style.animation = `${h ? `${h}, ` : ''}${o} ${i}ms linear ${a}ms 1 both`), (O += 1), o;
}
function z(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (r) => r.indexOf(e) < 0 : (r) => r.indexOf('__svelte') === -1),
		a = n.length - i.length;
	a && ((t.style.animation = i.join(', ')), (O -= a), O || ut());
}
function ut() {
	A(() => {
		O ||
			(k.forEach((t) => {
				const { ownerNode: e } = t.stylesheet;
				e && B(e);
			}),
			k.clear());
	});
}
let x;
function Z() {
	return (
		x ||
			((x = Promise.resolve()),
			x.then(() => {
				x = null;
			})),
		x
	);
}
function R(t, e, n) {
	t.dispatchEvent(T(`${e ? 'intro' : 'outro'}${n}`));
}
const S = new Set();
let y;
function gt() {
	y = { r: 0, c: [], p: y };
}
function yt() {
	y.r || v(y.c), (y = y.p);
}
function ct(t, e) {
	t && t.i && (S.delete(t), t.i(e));
}
function pt(t, e, n, i) {
	if (t && t.o) {
		if (S.has(t)) return;
		S.add(t),
			y.c.push(() => {
				S.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
const q = { duration: 0 };
function wt(t, e, n) {
	const i = { direction: 'in' };
	let a = e(t, n, i),
		r = !1,
		u,
		l,
		d = 0;
	function s() {
		u && z(t, u);
	}
	function f() {
		const { delay: _ = 0, duration: c = 300, easing: $ = D, tick: h = w, css: g } = a || q;
		g && (u = V(t, 0, 1, c, _, $, g, d++)), h(0, 1);
		const m = L() + _,
			E = m + c;
		l && l.abort(),
			(r = !0),
			b(() => R(t, !0, 'start')),
			(l = U((C) => {
				if (r) {
					if (C >= E) return h(1, 0), R(t, !0, 'end'), s(), (r = !1);
					if (C >= m) {
						const I = $((C - m) / c);
						h(I, 1 - I);
					}
				}
				return r;
			}));
	}
	let o = !1;
	return {
		start() {
			o || ((o = !0), z(t), j(a) ? ((a = a(i)), Z().then(f)) : f());
		},
		invalidate() {
			o = !1;
		},
		end() {
			r && (s(), (r = !1));
		}
	};
}
function xt(t, e, n) {
	const i = { direction: 'out' };
	let a = e(t, n, i),
		r = !0,
		u;
	const l = y;
	l.r += 1;
	let d;
	function s() {
		const { delay: f = 0, duration: o = 300, easing: _ = D, tick: c = w, css: $ } = a || q;
		$ && (u = V(t, 1, 0, o, f, _, $));
		const h = L() + f,
			g = h + o;
		b(() => R(t, !1, 'start')),
			'inert' in t && ((d = t.inert), (t.inert = !0)),
			U((m) => {
				if (r) {
					if (m >= g) return c(0, 1), R(t, !1, 'end'), --l.r || v(l.c), !1;
					if (m >= h) {
						const E = _((m - h) / o);
						c(1 - E, E);
					}
				}
				return r;
			});
	}
	return (
		j(a)
			? Z().then(() => {
					(a = a(i)), s();
				})
			: s(),
		{
			end(f) {
				f && 'inert' in t && (t.inert = d),
					f && a.tick && a.tick(1, 0),
					r && (u && z(t, u), (r = !1));
			}
		}
	);
}
function vt(t, e, n) {
	const i = t.$$.props[e];
	i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function Et(t) {
	t && t.c();
}
function St(t, e) {
	t && t.l(e);
}
function lt(t, e, n) {
	const { fragment: i, after_update: a } = t.$$;
	i && i.m(e, n),
		b(() => {
			const r = t.$$.on_mount.map(nt).filter(j);
			t.$$.on_destroy ? t.$$.on_destroy.push(...r) : v(r), (t.$$.on_mount = []);
		}),
		a.forEach(b);
}
function dt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(tt(n.after_update),
		v(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function _t(t, e) {
	t.$$.dirty[0] === -1 && (it.push(t), st(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function bt(t, e, n, i, a, r, u = null, l = [-1]) {
	const d = et;
	N(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: r,
		update: w,
		not_equal: a,
		bound: M(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (d ? d.$$.context : [])),
		callbacks: M(),
		dirty: l,
		skip_bound: !1,
		root: e.target || d.$$.root
	});
	u && u(s.root);
	let f = !1;
	if (
		((s.ctx = n
			? n(t, e.props || {}, (o, _, ...c) => {
					const $ = c.length ? c[0] : _;
					return (
						s.ctx &&
							a(s.ctx[o], (s.ctx[o] = $)) &&
							(!s.skip_bound && s.bound[o] && s.bound[o]($), f && _t(t, o)),
						_
					);
				})
			: []),
		s.update(),
		(f = !0),
		v(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			at();
			const o = W(e.target);
			s.fragment && s.fragment.l(o), o.forEach(B);
		} else s.fragment && s.fragment.c();
		e.intro && ct(t.$$.fragment), lt(t, e.target, e.anchor), rt(), X();
	}
	N(d);
}
class kt {
	constructor() {
		P(this, '$$');
		P(this, '$$set');
	}
	$destroy() {
		dt(this, 1), (this.$destroy = w);
	}
	$on(e, n) {
		if (!j(n)) return w;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const a = i.indexOf(n);
				a !== -1 && i.splice(a, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !Y(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const $t = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add($t);
export {
	kt as S,
	ct as a,
	Et as b,
	yt as c,
	St as d,
	dt as e,
	vt as f,
	gt as g,
	wt as h,
	bt as i,
	xt as j,
	lt as m,
	pt as t
};
