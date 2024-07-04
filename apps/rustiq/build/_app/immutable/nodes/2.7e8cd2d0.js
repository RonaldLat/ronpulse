import {
	s as $,
	f as d,
	a as S,
	g as p,
	h as j,
	Y as C,
	c as N,
	d as h,
	j as m,
	i as x,
	E as y,
	G as O,
	u as _,
	K as q,
	N as A,
	O as E,
	P as L
} from '../chunks/scheduler.bdb66109.js';
import { S as M, i as P, t as b, c as U, a as g, g as w } from '../chunks/index.d57fb68a.js';
import { b as z, a as D, c as G } from '../chunks/authState.1cdf1729.js';
const F = Object.freeze(
	Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })
);
function H(r) {
	let e,
		n = 'Login';
	return {
		c() {
			(e = d('a')), (e.textContent = n), this.h();
		},
		l(t) {
			(e = p(t, 'A', { href: !0, class: !0, 'data-svelte-h': !0 })),
				C(e) !== 'svelte-bq4nt3' && (e.textContent = n),
				this.h();
		},
		h() {
			m(e, 'href', '/login'),
				m(e, 'class', 'text-lg text-sky-700 border-2 rounded-md border-sky-600');
		},
		m(t, s) {
			x(t, e, s);
		},
		p: _,
		i: _,
		o: _,
		d(t) {
			t && h(e);
		}
	};
}
function I(r) {
	let e;
	const n = r[2].default,
		t = q(n, r, r[1], null);
	return {
		c() {
			t && t.c();
		},
		l(s) {
			t && t.l(s);
		},
		m(s, l) {
			t && t.m(s, l), (e = !0);
		},
		p(s, l) {
			t && t.p && (!e || l & 2) && A(t, n, s, s[1], e ? L(n, s[1], l, null) : E(s[1]), null);
		},
		i(s) {
			e || (g(t, s), (e = !0));
		},
		o(s) {
			b(t, s), (e = !1);
		},
		d(s) {
			t && t.d(s);
		}
	};
}
function K(r) {
	let e,
		n,
		t = 'My Account',
		s,
		l,
		o,
		u;
	const v = [I, H],
		c = [];
	function k(a, i) {
		return a[0] ? 0 : 1;
	}
	return (
		(l = k(r)),
		(o = c[l] = v[l](r)),
		{
			c() {
				(e = d('div')), (n = d('h1')), (n.textContent = t), (s = S()), o.c(), this.h();
			},
			l(a) {
				e = p(a, 'DIV', { class: !0 });
				var i = j(e);
				(n = p(i, 'H1', { 'data-svelte-h': !0 })),
					C(n) !== 'svelte-13hwxmh' && (n.textContent = t),
					(s = N(i)),
					o.l(i),
					i.forEach(h),
					this.h();
			},
			h() {
				m(e, 'class', 'mt-20');
			},
			m(a, i) {
				x(a, e, i), y(e, n), y(e, s), c[l].m(e, null), (u = !0);
			},
			p(a, [i]) {
				let f = l;
				(l = k(a)),
					l === f
						? c[l].p(a, i)
						: (w(),
							b(c[f], 1, 1, () => {
								c[f] = null;
							}),
							U(),
							(o = c[l]),
							o ? o.p(a, i) : ((o = c[l] = v[l](a)), o.c()),
							g(o, 1),
							o.m(e, null));
			},
			i(a) {
				u || (g(o), (u = !0));
			},
			o(a) {
				b(o), (u = !1);
			},
			d(a) {
				a && h(e), c[l].d();
			}
		}
	);
}
function T(r, e, n) {
	let t;
	O(r, G, (o) => n(0, (t = o)));
	let { $$slots: s = {}, $$scope: l } = e;
	return (
		z((o) => {
			console.log(o), t && console.log('login first');
		}),
		D((o) => {
			if (!t) {
				console.log('after', o);
				return;
			}
		}),
		(r.$$set = (o) => {
			'$$scope' in o && n(1, (l = o.$$scope));
		}),
		[t, l, s]
	);
}
class J extends M {
	constructor(e) {
		super(), P(this, e, T, K, $, {});
	}
}
export { J as component, F as universal };
