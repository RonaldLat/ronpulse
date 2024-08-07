import { s as be } from '../chunks/supabaseClient.c7aa5afe.js';
import {
	s as _e,
	f as _,
	a as A,
	l as P,
	z as ie,
	g,
	h as p,
	c as D,
	Y as we,
	d as f,
	m as M,
	A as ce,
	j as r,
	U as ue,
	i as te,
	E as o,
	F as xe,
	n as X,
	u as Z,
	G as $,
	_ as Ee
} from '../chunks/scheduler.bdb66109.js';
import {
	S as ge,
	i as pe,
	a as U,
	c as ke,
	t as ee,
	b as ye,
	d as Ce,
	m as Ne,
	e as Se,
	g as Ie
} from '../chunks/index.d57fb68a.js';
import { e as de } from '../chunks/each.e59479a4.js';
import { p as ve } from '../chunks/stores.b7086389.js';
import { c as fe } from '../chunks/products.0de01876.js';
async function je({ params: l }) {
	let t = l.categoryName,
		{ data: a, error: i } = await be.from(l.categoryName).select('*').range(0, 9);
	return { categoryData: a, error: i, cat: t };
}
const qe = Object.freeze(
	Object.defineProperty({ __proto__: null, load: je }, Symbol.toStringTag, { value: 'Module' })
);
function Ae(l) {
	let t,
		a,
		i,
		m,
		c,
		u,
		h = '39% OFF',
		x,
		w,
		e,
		E,
		s,
		d = l[0].name + '',
		n,
		y,
		z,
		C,
		S,
		I,
		G,
		T = new Intl.NumberFormat().format(l[0].special_price) + '',
		H,
		K,
		F,
		B = l[0].old_price + '',
		V,
		Y,
		N,
		k,
		j,
		J,
		Q,
		ae;
	return {
		c() {
			(t = _('div')),
				(a = _('a')),
				(i = _('img')),
				(c = A()),
				(u = _('span')),
				(u.textContent = h),
				(w = A()),
				(e = _('div')),
				(E = _('a')),
				(s = _('h5')),
				(n = P(d)),
				(z = A()),
				(C = _('div')),
				(S = _('p')),
				(I = _('span')),
				(G = P('KES. ')),
				(H = P(T)),
				(K = A()),
				(F = _('span')),
				(V = P(B)),
				(Y = A()),
				(N = _('button')),
				(k = ie('svg')),
				(j = ie('path')),
				(J = P(`
			Add to cart`)),
				this.h();
		},
		l(v) {
			t = g(v, 'DIV', { class: !0 });
			var b = p(t);
			a = g(b, 'A', { class: !0, href: !0 });
			var q = p(a);
			(i = g(q, 'IMG', { class: !0, src: !0, alt: !0 })),
				(c = D(q)),
				(u = g(q, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
				we(u) !== 'svelte-1nol6cq' && (u.textContent = h),
				q.forEach(f),
				(w = D(b)),
				(e = g(b, 'DIV', { class: !0 }));
			var O = p(e);
			E = g(O, 'A', { href: !0 });
			var le = p(E);
			s = g(le, 'H5', { class: !0 });
			var se = p(s);
			(n = M(se, d)), se.forEach(f), le.forEach(f), (z = D(O)), (C = g(O, 'DIV', { class: !0 }));
			var re = p(C);
			S = g(re, 'P', {});
			var L = p(S);
			I = g(L, 'SPAN', { class: !0 });
			var R = p(I);
			(G = M(R, 'KES. ')),
				(H = M(R, T)),
				R.forEach(f),
				(K = D(L)),
				(F = g(L, 'SPAN', { class: !0 }));
			var oe = p(F);
			(V = M(oe, B)),
				oe.forEach(f),
				L.forEach(f),
				re.forEach(f),
				(Y = D(O)),
				(N = g(O, 'BUTTON', { class: !0 }));
			var W = p(N);
			k = ce(W, 'svg', {
				xmlns: !0,
				class: !0,
				fill: !0,
				viewBox: !0,
				stroke: !0,
				'stroke-width': !0
			});
			var ne = p(k);
			(j = ce(ne, 'path', { 'stroke-linecap': !0, 'stroke-linejoin': !0, d: !0 })),
				p(j).forEach(f),
				ne.forEach(f),
				(J = M(
					W,
					`
			Add to cart`
				)),
				W.forEach(f),
				O.forEach(f),
				b.forEach(f),
				this.h();
		},
		h() {
			r(i, 'class', 'object-cover h-full'),
				ue(i.src, (m = l[0].main_image)) || r(i, 'src', m),
				r(i, 'alt', 'product image'),
				r(
					u,
					'class',
					'absolute hidden top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'
				),
				r(a, 'class', 'relative mx-3 mt-3 flex w-full overflow-hidden rounded-xl'),
				r(a, 'href', (x = l[3] + '/details/' + l[0].id)),
				r(s, 'class', 'text-lg tracking-tight text-slate-900'),
				r(E, 'href', (y = l[3] + '/details/' + l[0].id)),
				r(I, 'class', 'text-lg font-bold whitespace-nowrap text-slate-900'),
				r(F, 'class', 'text-sm text-slate-900 line-through hidden'),
				r(C, 'class', 'mt-2 mb-5 flex items-center justify-between'),
				r(j, 'stroke-linecap', 'round'),
				r(j, 'stroke-linejoin', 'round'),
				r(
					j,
					'd',
					'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
				),
				r(k, 'xmlns', 'http://www.w3.org/2000/svg'),
				r(k, 'class', 'mr-2 h-6 w-6'),
				r(k, 'fill', 'none'),
				r(k, 'viewBox', '0 0 24 24'),
				r(k, 'stroke', 'currentColor'),
				r(k, 'stroke-width', '2'),
				(N.disabled = l[1]),
				r(
					N,
					'class',
					'flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
				),
				r(e, 'class', 'mt-4 px-5 pb-5'),
				r(
					t,
					'class',
					'relative m-x-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-2xl'
				);
		},
		m(v, b) {
			te(v, t, b),
				o(t, a),
				o(a, i),
				o(a, c),
				o(a, u),
				o(t, w),
				o(t, e),
				o(e, E),
				o(E, s),
				o(s, n),
				o(e, z),
				o(e, C),
				o(C, S),
				o(S, I),
				o(I, G),
				o(I, H),
				o(S, K),
				o(S, F),
				o(F, V),
				o(e, Y),
				o(e, N),
				o(N, k),
				o(k, j),
				o(N, J),
				Q || ((ae = xe(N, 'click', l[4])), (Q = !0));
		},
		p(v, [b]) {
			b & 1 && !ue(i.src, (m = v[0].main_image)) && r(i, 'src', m),
				b & 1 && x !== (x = v[3] + '/details/' + v[0].id) && r(a, 'href', x),
				b & 1 && d !== (d = v[0].name + '') && X(n, d),
				b & 1 && y !== (y = v[3] + '/details/' + v[0].id) && r(E, 'href', y),
				b & 1 && T !== (T = new Intl.NumberFormat().format(v[0].special_price) + '') && X(H, T),
				b & 1 && B !== (B = v[0].old_price + '') && X(V, B),
				b & 2 && (N.disabled = v[1]);
		},
		i: Z,
		o: Z,
		d(v) {
			v && f(t), (Q = !1), ae();
		}
	};
}
function Pe(l, t, a) {
	let i, m;
	$(l, ve, (e) => a(5, (i = e))), $(l, fe, (e) => a(6, (m = e)));
	let { item: c } = t,
		u = !1;
	function h(e) {
		m.includes(e) ? console.log('item is in cart') : fe.update((E) => (a(1, (u = !0)), [...E, e]));
	}
	const x = i.data.pathname,
		w = () => {
			h(c);
		};
	return (
		(l.$$set = (e) => {
			'item' in e && a(0, (c = e.item));
		}),
		[c, u, h, x, w]
	);
}
class De extends ge {
	constructor(t) {
		super(), pe(this, t, Pe, Ae, _e, { item: 0 });
	}
}
function me(l, t, a) {
	const i = l.slice();
	return (i[4] = t[a]), i;
}
function he(l) {
	let t, a, i, m;
	return (
		(a = new De({ props: { item: l[4] } })),
		{
			c() {
				(t = _('li')), ye(a.$$.fragment), (i = A()), this.h();
			},
			l(c) {
				t = g(c, 'LI', { class: !0 });
				var u = p(t);
				Ce(a.$$.fragment, u), (i = D(u)), u.forEach(f), this.h();
			},
			h() {
				r(t, 'class', 'w-full');
			},
			m(c, u) {
				te(c, t, u), Ne(a, t, null), o(t, i), (m = !0);
			},
			p: Z,
			i(c) {
				m || (U(a.$$.fragment, c), (m = !0));
			},
			o(c) {
				ee(a.$$.fragment, c), (m = !1);
			},
			d(c) {
				c && f(t), Se(a);
			}
		}
	);
}
function Me(l) {
	let t,
		a,
		i,
		m,
		c,
		u,
		h,
		x,
		w = de(l[1]),
		e = [];
	for (let s = 0; s < w.length; s += 1) e[s] = he(me(l, w, s));
	const E = (s) =>
		ee(e[s], 1, 1, () => {
			e[s] = null;
		});
	return {
		c() {
			(t = _('section')),
				(a = _('h2')),
				(i = P(l[0])),
				(m = P(' Category')),
				(c = A()),
				(u = _('div')),
				(h = _('ul'));
			for (let s = 0; s < e.length; s += 1) e[s].c();
			this.h();
		},
		l(s) {
			t = g(s, 'SECTION', {});
			var d = p(t);
			a = g(d, 'H2', { class: !0 });
			var n = p(a);
			(i = M(n, l[0])),
				(m = M(n, ' Category')),
				n.forEach(f),
				(c = D(d)),
				(u = g(d, 'DIV', { class: !0 }));
			var y = p(u);
			h = g(y, 'UL', { class: !0 });
			var z = p(h);
			for (let C = 0; C < e.length; C += 1) e[C].l(z);
			z.forEach(f), y.forEach(f), d.forEach(f), this.h();
		},
		h() {
			r(
				a,
				'class',
				'bg-slate-50 rounded-md capitalize text-center py-6 mb-8 text-2xl tracking-wide font-bold text-gray-700'
			),
				r(h, 'class', 'mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 '),
				r(u, 'class', 'mx-auto');
		},
		m(s, d) {
			te(s, t, d), o(t, a), o(a, i), o(a, m), o(t, c), o(t, u), o(u, h);
			for (let n = 0; n < e.length; n += 1) e[n] && e[n].m(h, null);
			x = !0;
		},
		p(s, [d]) {
			if (d & 2) {
				w = de(s[1]);
				let n;
				for (n = 0; n < w.length; n += 1) {
					const y = me(s, w, n);
					e[n]
						? (e[n].p(y, d), U(e[n], 1))
						: ((e[n] = he(y)), e[n].c(), U(e[n], 1), e[n].m(h, null));
				}
				for (Ie(), n = w.length; n < e.length; n += 1) E(n);
				ke();
			}
		},
		i(s) {
			if (!x) {
				for (let d = 0; d < w.length; d += 1) U(e[d]);
				x = !0;
			}
		},
		o(s) {
			e = e.filter(Boolean);
			for (let d = 0; d < e.length; d += 1) ee(e[d]);
			x = !1;
		},
		d(s) {
			s && f(t), Ee(e, s);
		}
	};
}
function ze(l, t, a) {
	let i;
	$(l, ve, (h) => a(3, (i = h)));
	const m = i.params.categoryName;
	let { data: c } = t,
		u = c.categoryData;
	return (
		(l.$$set = (h) => {
			'data' in h && a(2, (c = h.data));
		}),
		[m, u, c]
	);
}
class Le extends ge {
	constructor(t) {
		super(), pe(this, t, ze, Me, _e, { data: 2 });
	}
}
export { Le as component, qe as universal };
