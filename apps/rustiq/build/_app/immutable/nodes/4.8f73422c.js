import {
	s as X,
	f as r,
	a as _,
	g as i,
	h as V,
	Y as y,
	c as b,
	d as E,
	j as o,
	i as Q,
	E as s,
	$ as A,
	F as B,
	a0 as W,
	u as Y,
	R as Z,
	G as $
} from '../chunks/scheduler.bdb66109.js';
import { S as tt, i as et } from '../chunks/index.d57fb68a.js';
import { g as J, c as st } from '../chunks/authState.1cdf1729.js';
import { s as nt } from '../chunks/supabaseClient.c7aa5afe.js';
function K(u) {
	let t,
		n = 'Invalid credentials';
	return {
		c() {
			(t = r('p')), (t.textContent = n), this.h();
		},
		l(c) {
			(t = i(c, 'P', { class: !0, 'data-svelte-h': !0 })),
				y(t) !== 'svelte-5095v9' && (t.textContent = n),
				this.h();
		},
		h() {
			o(t, 'class', 'text-rose-500');
		},
		m(c, l) {
			Q(c, t, l);
		},
		d(c) {
			c && E(t);
		}
	};
}
function lt(u) {
	let t,
		n,
		c = 'Login',
		l,
		f,
		T = 'Login to access your account',
		L,
		w,
		m,
		d,
		k = 'Email Address',
		H,
		h,
		M,
		x,
		C,
		F = 'Password',
		N,
		v,
		R,
		I,
		O =
			'<button type="submit" class="mt-5 w-full rounded-md bg-sky-600 p-2 text-center font-semibold text-white outline-none focus:ring">Login</button>',
		j,
		P,
		g,
		S = 'Register',
		q,
		z,
		a = u[1] && K();
	return {
		c() {
			(t = r('form')),
				(n = r('h1')),
				(n.textContent = c),
				(l = _()),
				(f = r('p')),
				(f.textContent = T),
				(L = _()),
				a && a.c(),
				(w = _()),
				(m = r('div')),
				(d = r('label')),
				(d.textContent = k),
				(H = _()),
				(h = r('input')),
				(M = _()),
				(x = r('div')),
				(C = r('label')),
				(C.textContent = F),
				(N = _()),
				(v = r('input')),
				(R = _()),
				(I = r('div')),
				(I.innerHTML = O),
				(j = _()),
				(P = r('div')),
				(g = r('button')),
				(g.textContent = S),
				this.h();
		},
		l(p) {
			t = i(p, 'FORM', { class: !0 });
			var e = V(t);
			(n = i(e, 'H1', { class: !0, 'data-svelte-h': !0 })),
				y(n) !== 'svelte-1qvznw0' && (n.textContent = c),
				(l = b(e)),
				(f = i(e, 'P', { class: !0, 'data-svelte-h': !0 })),
				y(f) !== 'svelte-gor2d5' && (f.textContent = T),
				(L = b(e)),
				a && a.l(e),
				(w = b(e)),
				(m = i(e, 'DIV', { class: !0 }));
			var U = V(m);
			(d = i(U, 'LABEL', { class: !0, 'data-svelte-h': !0 })),
				y(d) !== 'svelte-1lmkhcx' && (d.textContent = k),
				(H = b(U)),
				(h = i(U, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				U.forEach(E),
				(M = b(e)),
				(x = i(e, 'DIV', {}));
			var D = V(x);
			(C = i(D, 'LABEL', { class: !0, 'data-svelte-h': !0 })),
				y(C) !== 'svelte-7evhb2' && (C.textContent = F),
				(N = b(D)),
				(v = i(D, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				D.forEach(E),
				(R = b(e)),
				(I = i(e, 'DIV', { 'data-svelte-h': !0 })),
				y(I) !== 'svelte-1pff0jm' && (I.innerHTML = O),
				(j = b(e)),
				(P = i(e, 'DIV', {}));
			var G = V(P);
			(g = i(G, 'BUTTON', { type: !0, class: !0, 'data-svelte-h': !0 })),
				y(g) !== 'svelte-chh8ef' && (g.textContent = S),
				G.forEach(E),
				e.forEach(E),
				this.h();
		},
		h() {
			o(n, 'class', 'text-xl font-semibold lg:text-2xl'),
				o(f, 'class', 'pb-4 text-gray-500'),
				o(d, 'class', ''),
				o(h, 'type', 'email'),
				o(h, 'placeholder', 'Info@example.com'),
				o(h, 'class', 'mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'),
				o(m, 'class', ''),
				o(C, 'class', ''),
				o(v, 'type', 'password'),
				o(v, 'placeholder', '******'),
				o(v, 'class', 'mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'),
				o(g, 'type', 'submit'),
				o(
					g,
					'class',
					'mt-5 w-full rounded-md border-2 border-sky-500 p-2 text-center font-semibold text-sky-600 outline-none focus:ring'
				),
				o(t, 'class', 'relative space-y-3 rounded-md p-6 lg:p-10 m-10');
		},
		m(p, e) {
			Q(p, t, e),
				s(t, n),
				s(t, l),
				s(t, f),
				s(t, L),
				a && a.m(t, null),
				s(t, w),
				s(t, m),
				s(m, d),
				s(m, H),
				s(m, h),
				A(h, u[0].email),
				s(t, M),
				s(t, x),
				s(x, C),
				s(x, N),
				s(x, v),
				A(v, u[0].password),
				s(t, R),
				s(t, I),
				s(t, j),
				s(t, P),
				s(P, g),
				q ||
					((z = [
						B(h, 'input', u[4]),
						B(v, 'input', u[5]),
						B(g, 'click', W(u[3])),
						B(t, 'submit', W(u[2]))
					]),
					(q = !0));
		},
		p(p, [e]) {
			p[1] ? a || ((a = K()), a.c(), a.m(t, w)) : a && (a.d(1), (a = null)),
				e & 1 && h.value !== p[0].email && A(h, p[0].email),
				e & 1 && v.value !== p[0].password && A(v, p[0].password);
		},
		i: Y,
		o: Y,
		d(p) {
			p && E(t), a && a.d(), (q = !1), Z(z);
		}
	};
}
function at(u, t, n) {
	let c;
	$(u, st, (d) => n(6, (c = d)));
	let l = { email: '', password: '' },
		f = !1;
	async function T() {
		const { data: d, error: k } = await nt.auth.signInWithPassword(l);
		console.log('sign in data: ', d),
			n(0, (l.email = ''), l),
			n(0, (l.password = ''), l),
			c && J('/'),
			k && (console.log('sign in error: ', k), n(1, (f = !0)));
	}
	const L = () => {
		J('/signup');
	};
	function w() {
		(l.email = this.value), n(0, l);
	}
	function m() {
		(l.password = this.value), n(0, l);
	}
	return [l, f, T, L, w, m];
}
class ct extends tt {
	constructor(t) {
		super(), et(this, t, at, lt, X, {});
	}
}
export { ct as component };
