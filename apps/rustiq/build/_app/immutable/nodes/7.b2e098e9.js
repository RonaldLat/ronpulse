import { s as _t } from '../chunks/supabaseClient.c7aa5afe.js';
import {
	s as ht,
	f as l,
	a as h,
	l as k,
	g as r,
	h as m,
	c as g,
	Y as X,
	m as A,
	d as i,
	j as a,
	U as mt,
	i as gt,
	E as t,
	F as vt,
	u as ft,
	G as xt
} from '../chunks/scheduler.bdb66109.js';
import { S as bt, i as yt } from '../chunks/index.d57fb68a.js';
import '../chunks/paths.01a3d415.js';
import { c as pt } from '../chunks/products.0de01876.js';
async function Et({ params: o }) {
	let { data: n, error: c } = await _t.from(o.categoryName).select().eq('id', o.id);
	return { product: n, error: c, son: 'Hami' };
}
const Tt = Object.freeze(
	Object.defineProperty({ __proto__: null, load: Et }, Symbol.toStringTag, { value: 'Module' })
);
function wt(o) {
	let n,
		c,
		d,
		u,
		S,
		x,
		e,
		p,
		f = 'NAME',
		D,
		I,
		Z = o[1].name + '',
		M,
		V,
		b,
		$ = 'DESCRIPTION',
		q,
		j,
		tt = o[1].description + '',
		F,
		G,
		y,
		et = 'FEATURES',
		U,
		N,
		at = o[1].features + '',
		z,
		K,
		E,
		st,
		R,
		P,
		v,
		w,
		B,
		lt = new Intl.NumberFormat().format(o[1].special_price) + '',
		Y,
		J,
		_,
		L,
		Q,
		rt;
	return {
		c() {
			(n = l('section')),
				(c = l('div')),
				(d = l('div')),
				(u = l('img')),
				(x = h()),
				(e = l('div')),
				(p = l('h2')),
				(p.textContent = f),
				(D = h()),
				(I = l('h1')),
				(M = k(Z)),
				(V = h()),
				(b = l('h2')),
				(b.textContent = $),
				(q = h()),
				(j = l('p')),
				(F = k(tt)),
				(G = h()),
				(y = l('h2')),
				(y.textContent = et),
				(U = h()),
				(N = l('p')),
				(z = k(at)),
				(K = h()),
				(E = l('img')),
				(R = h()),
				(P = l('div')),
				(v = l('span')),
				(w = l('span')),
				(B = k('KES. ')),
				(Y = k(lt)),
				(J = h()),
				(_ = l('button')),
				(L = k('Add to Cart')),
				this.h();
		},
		l(C) {
			n = r(C, 'SECTION', { class: !0 });
			var T = m(n);
			c = r(T, 'DIV', { class: !0 });
			var ot = m(c);
			d = r(ot, 'DIV', { class: !0 });
			var H = m(d);
			(u = r(H, 'IMG', { alt: !0, class: !0, src: !0 })),
				(x = g(H)),
				(e = r(H, 'DIV', { class: !0 }));
			var s = m(e);
			(p = r(s, 'H2', { class: !0, 'data-svelte-h': !0 })),
				X(p) !== 'svelte-xahl7f' && (p.textContent = f),
				(D = g(s)),
				(I = r(s, 'H1', { class: !0 }));
			var nt = m(I);
			(M = A(nt, Z)),
				nt.forEach(i),
				(V = g(s)),
				(b = r(s, 'H2', { class: !0, 'data-svelte-h': !0 })),
				X(b) !== 'svelte-16j92vd' && (b.textContent = $),
				(q = g(s)),
				(j = r(s, 'P', { class: !0 }));
			var ct = m(j);
			(F = A(ct, tt)),
				ct.forEach(i),
				(G = g(s)),
				(y = r(s, 'H2', { class: !0, 'data-svelte-h': !0 })),
				X(y) !== 'svelte-jzhp6o' && (y.textContent = et),
				(U = g(s)),
				(N = r(s, 'P', { class: !0 }));
			var it = m(N);
			(z = A(it, at)),
				it.forEach(i),
				(K = g(s)),
				(E = r(s, 'IMG', { alt: !0, class: !0, src: !0 })),
				(R = g(s)),
				(P = r(s, 'DIV', { class: !0 }));
			var dt = m(P);
			v = r(dt, 'SPAN', { class: !0 });
			var O = m(v);
			w = r(O, 'SPAN', { class: !0 });
			var W = m(w);
			(B = A(W, 'KES. ')),
				(Y = A(W, lt)),
				W.forEach(i),
				(J = g(O)),
				(_ = r(O, 'BUTTON', { class: !0 }));
			var ut = m(_);
			(L = A(ut, 'Add to Cart')),
				ut.forEach(i),
				O.forEach(i),
				dt.forEach(i),
				s.forEach(i),
				H.forEach(i),
				ot.forEach(i),
				T.forEach(i),
				this.h();
		},
		h() {
			a(u, 'alt', 'ecommerce'),
				a(
					u,
					'class',
					'lg:w-1/2 w-full md:object-contain object-center rounded border border-gray-200'
				),
				mt(u.src, (S = o[1].main_image)) || a(u, 'src', S),
				a(p, 'class', 'text-sm title-font text-gray-500 tracking-widest'),
				a(I, 'class', 'text-gray-900 text-3xl title-font font-medium mb-1'),
				a(b, 'class', 'pt-4 text-sm title-font text-gray-500 tracking-widest'),
				a(j, 'class', 'leading-relaxed my-2'),
				a(y, 'class', 'pt-4 text-sm title-font text-gray-500 tracking-widest'),
				a(N, 'class', 'leading-relaxed my-2 text-sm'),
				a(E, 'alt', 'ecommerce'),
				a(E, 'class', 'lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'),
				mt(E.src, (st = o[1].detail_image)) || a(E, 'src', st),
				a(w, 'class', 'text-xl font-bold whitespace-nowrap text-slate-900'),
				(_.disabled = o[0]),
				a(
					_,
					'class',
					'flex ml-auto text-white bg-blue-500 border-0 my-3 py-2 px-6 focus:outline-none hover:bg-sky-600 transition ease-in-out delay-150 rounded'
				),
				a(v, 'class', 'title-font font-medium text-2xl text-gray-900'),
				a(P, 'class', 'flex mt-4'),
				a(e, 'class', 'lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'),
				a(d, 'class', 'lg:w-4/5 mx-auto flex flex-wrap'),
				a(c, 'class', 'container px-5 py-24 mx-auto'),
				a(n, 'class', 'mx-auto text-gray-700 body-font overflow-hidden min-h-screen');
		},
		m(C, T) {
			gt(C, n, T),
				t(n, c),
				t(c, d),
				t(d, u),
				t(d, x),
				t(d, e),
				t(e, p),
				t(e, D),
				t(e, I),
				t(I, M),
				t(e, V),
				t(e, b),
				t(e, q),
				t(e, j),
				t(j, F),
				t(e, G),
				t(e, y),
				t(e, U),
				t(e, N),
				t(N, z),
				t(e, K),
				t(e, E),
				t(e, R),
				t(e, P),
				t(P, v),
				t(v, w),
				t(w, B),
				t(w, Y),
				t(v, J),
				t(v, _),
				t(_, L),
				Q || ((rt = vt(_, 'click', o[4])), (Q = !0));
		},
		p(C, [T]) {
			T & 1 && (_.disabled = C[0]);
		},
		i: ft,
		o: ft,
		d(C) {
			C && i(n), (Q = !1), rt();
		}
	};
}
function Ct(o, n, c) {
	let d;
	xt(o, pt, (f) => c(5, (d = f)));
	let { data: u } = n;
	const S = u.product[0];
	let x = !1;
	function e(f) {
		d.includes(f)
			? (console.log('item is in cart'), c(0, (x = !0)))
			: (pt.update((D) => [...D, f]), c(0, (x = !0)));
	}
	console.log('product', S);
	const p = () => {
		e(S);
	};
	return (
		(o.$$set = (f) => {
			'data' in f && c(3, (u = f.data));
		}),
		[x, S, e, u, p]
	);
}
class kt extends bt {
	constructor(n) {
		super(), yt(this, n, Ct, wt, ht, { data: 3 });
	}
}
export { kt as component, Tt as universal };
