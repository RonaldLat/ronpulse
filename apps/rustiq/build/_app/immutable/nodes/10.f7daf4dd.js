import {
	s as H,
	f as i,
	l as C,
	a as D,
	g as u,
	h as v,
	m as w,
	d as f,
	c as M,
	Y as W,
	j as I,
	i as J,
	E as e,
	$,
	F as N,
	u as X,
	R as tt
} from '../chunks/scheduler.bdb66109.js';
import {
	S as K,
	i as Q,
	b as et,
	d as at,
	m as nt,
	a as lt,
	t as rt,
	e as st
} from '../chunks/index.d57fb68a.js';
import { s as G } from '../chunks/supabaseClient.c7aa5afe.js';
function ot(l) {
	let a,
		t,
		r,
		n,
		s,
		g,
		b,
		T,
		m,
		B,
		E,
		F,
		o,
		L,
		d,
		S,
		_,
		U,
		A,
		R,
		y,
		j,
		P,
		Y = 'Submit',
		x,
		Z;
	return {
		c() {
			(a = i('div')),
				(t = i('form')),
				(r = i('label')),
				(n = C(`Main Image:
			`)),
				(s = i('input')),
				(g = D()),
				(b = i('label')),
				(T = C(`Name:
			`)),
				(m = i('input')),
				(B = D()),
				(E = i('label')),
				(F = C(`Special Price:
			`)),
				(o = i('input')),
				(L = D()),
				(d = i('label')),
				(S = C(`Description:
			`)),
				(_ = i('textarea')),
				(U = D()),
				(A = i('label')),
				(R = C(`Features:
			`)),
				(y = i('input')),
				(j = D()),
				(P = i('button')),
				(P.textContent = Y),
				this.h();
		},
		l(p) {
			a = u(p, 'DIV', {});
			var h = v(a);
			t = u(h, 'FORM', { class: !0 });
			var c = v(t);
			r = u(c, 'LABEL', {});
			var z = v(r);
			(n = w(
				z,
				`Main Image:
			`
			)),
				(s = u(z, 'INPUT', { type: !0 })),
				z.forEach(f),
				(g = M(c)),
				(b = u(c, 'LABEL', {}));
			var O = v(b);
			(T = w(
				O,
				`Name:
			`
			)),
				(m = u(O, 'INPUT', { type: !0 })),
				O.forEach(f),
				(B = M(c)),
				(E = u(c, 'LABEL', {}));
			var V = v(E);
			(F = w(
				V,
				`Special Price:
			`
			)),
				(o = u(V, 'INPUT', { type: !0 })),
				V.forEach(f),
				(L = M(c)),
				(d = u(c, 'LABEL', {}));
			var k = v(d);
			(S = w(
				k,
				`Description:
			`
			)),
				(_ = u(k, 'TEXTAREA', {})),
				v(_).forEach(f),
				k.forEach(f),
				(U = M(c)),
				(A = u(c, 'LABEL', {}));
			var q = v(A);
			(R = w(
				q,
				`Features:
			`
			)),
				(y = u(q, 'INPUT', { type: !0 })),
				q.forEach(f),
				(j = M(c)),
				(P = u(c, 'BUTTON', { type: !0, 'data-svelte-h': !0 })),
				W(P) !== 'svelte-1ou7dtz' && (P.textContent = Y),
				c.forEach(f),
				h.forEach(f),
				this.h();
		},
		h() {
			I(s, 'type', 'file'),
				I(m, 'type', 'text'),
				I(o, 'type', 'text'),
				I(y, 'type', 'text'),
				I(P, 'type', 'submit'),
				I(t, 'class', 'grid grid-cols-1 gap-y-2.5');
		},
		m(p, h) {
			J(p, a, h),
				e(a, t),
				e(t, r),
				e(r, n),
				e(r, s),
				e(t, g),
				e(t, b),
				e(b, T),
				e(b, m),
				$(m, l[0]),
				e(t, B),
				e(t, E),
				e(E, F),
				e(E, o),
				$(o, l[1]),
				e(t, L),
				e(t, d),
				e(d, S),
				e(d, _),
				$(_, l[2]),
				e(t, U),
				e(t, A),
				e(A, R),
				e(A, y),
				$(y, l[3]),
				e(t, j),
				e(t, P),
				x ||
					((Z = [
						N(s, 'change', l[5]),
						N(m, 'input', l[6]),
						N(o, 'input', l[7]),
						N(_, 'input', l[8]),
						N(y, 'input', l[9]),
						N(t, 'submit', l[4])
					]),
					(x = !0));
		},
		p(p, [h]) {
			h & 1 && m.value !== p[0] && $(m, p[0]),
				h & 2 && o.value !== p[1] && $(o, p[1]),
				h & 4 && $(_, p[2]),
				h & 8 && y.value !== p[3] && $(y, p[3]);
		},
		i: X,
		o: X,
		d(p) {
			p && f(a), (x = !1), tt(Z);
		}
	};
}
let it = '';
function ut(l) {
	return l
		.replace(/[^a-zA-Z0-9\s.-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/\.[^.]+$/, '');
}
function pt(l, a, t) {
	let r = 'aaaa',
		n = 333222,
		s = 'ffsdea',
		g = 'lslkdjflad';
	async function b(o) {
		o.preventDefault();
		const L = { main_image: it, name: r, special_price: n, descreption: s, features: g },
			{ error: d } = await G.from('living').insert(L);
		console.log(d);
	}
	const T = async () => {
		const o = event.target.files[0],
			L = o.name.split('.').pop(),
			d = 'living',
			S = ut(o.name),
			{ data: _, error: U } = await G.storage
				.from('furnitureImages')
				.upload(`${d}/${S}.${L}`, o, { cacheControl: '3600', upsert: !1 });
		console.log(_), console.log('error', U);
	};
	function m() {
		(r = this.value), t(0, r);
	}
	function B() {
		(n = this.value), t(1, n);
	}
	function E() {
		(s = this.value), t(2, s);
	}
	function F() {
		(g = this.value), t(3, g);
	}
	return [r, n, s, g, b, T, m, B, E, F];
}
class ct extends K {
	constructor(a) {
		super(), Q(this, a, pt, ot, H, {});
	}
}
function ft(l) {
	let a, t, r;
	return (
		(t = new ct({})),
		{
			c() {
				(a = i('div')), et(t.$$.fragment);
			},
			l(n) {
				a = u(n, 'DIV', {});
				var s = v(a);
				at(t.$$.fragment, s), s.forEach(f);
			},
			m(n, s) {
				J(n, a, s), nt(t, a, null), (r = !0);
			},
			p: X,
			i(n) {
				r || (lt(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				rt(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && f(a), st(t);
			}
		}
	);
}
class ht extends K {
	constructor(a) {
		super(), Q(this, a, null, ft, H, {});
	}
}
export { ht as component };
