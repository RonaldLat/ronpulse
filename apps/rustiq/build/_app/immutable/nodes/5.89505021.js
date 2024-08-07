import {
	s as ee,
	f as o,
	a as g,
	g as r,
	h as S,
	Y as w,
	c as _,
	d as T,
	j as l,
	i as te,
	E as t,
	$ as P,
	F as V,
	a0 as X,
	u as Z,
	R as se,
	G as ne
} from '../chunks/scheduler.bdb66109.js';
import { S as le, i as ae } from '../chunks/index.d57fb68a.js';
import { s as oe } from '../chunks/supabaseClient.c7aa5afe.js';
import { g as $, c as re } from '../chunks/authState.1cdf1729.js';
function ue(i) {
	let e,
		a,
		s = 'Sign Up',
		U,
		m,
		A = 'Sign up to create an account',
		k,
		f,
		h,
		E = 'Username',
		I,
		p,
		M,
		b,
		x,
		Y = 'Email Address',
		j,
		d,
		F,
		C,
		y,
		z = 'Password',
		O,
		c,
		R,
		L,
		J =
			'<button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Sign Up</button>',
		q,
		D,
		v,
		K = 'Login',
		G,
		Q;
	return {
		c() {
			(e = o('form')),
				(a = o('h1')),
				(a.textContent = s),
				(U = g()),
				(m = o('p')),
				(m.textContent = A),
				(k = g()),
				(f = o('div')),
				(h = o('label')),
				(h.textContent = E),
				(I = g()),
				(p = o('input')),
				(M = g()),
				(b = o('div')),
				(x = o('label')),
				(x.textContent = Y),
				(j = g()),
				(d = o('input')),
				(F = g()),
				(C = o('div')),
				(y = o('label')),
				(y.textContent = z),
				(O = g()),
				(c = o('input')),
				(R = g()),
				(L = o('div')),
				(L.innerHTML = J),
				(q = g()),
				(D = o('div')),
				(v = o('button')),
				(v.textContent = K),
				this.h();
		},
		l(u) {
			e = r(u, 'FORM', { class: !0 });
			var n = S(e);
			(a = r(n, 'H1', { class: !0, 'data-svelte-h': !0 })),
				w(a) !== 'svelte-122oryt' && (a.textContent = s),
				(U = _(n)),
				(m = r(n, 'P', { class: !0, 'data-svelte-h': !0 })),
				w(m) !== 'svelte-135ppy6' && (m.textContent = A),
				(k = _(n)),
				(f = r(n, 'DIV', {}));
			var B = S(f);
			(h = r(B, 'LABEL', { class: !0, 'data-svelte-h': !0 })),
				w(h) !== 'svelte-6edum1' && (h.textContent = E),
				(I = _(B)),
				(p = r(B, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				B.forEach(T),
				(M = _(n)),
				(b = r(n, 'DIV', { class: !0 }));
			var N = S(b);
			(x = r(N, 'LABEL', { class: !0, 'data-svelte-h': !0 })),
				w(x) !== 'svelte-1lmkhcx' && (x.textContent = Y),
				(j = _(N)),
				(d = r(N, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				N.forEach(T),
				(F = _(n)),
				(C = r(n, 'DIV', {}));
			var H = S(C);
			(y = r(H, 'LABEL', { class: !0, 'data-svelte-h': !0 })),
				w(y) !== 'svelte-7evhb2' && (y.textContent = z),
				(O = _(H)),
				(c = r(H, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				H.forEach(T),
				(R = _(n)),
				(L = r(n, 'DIV', { 'data-svelte-h': !0 })),
				w(L) !== 'svelte-1tgm4k4' && (L.innerHTML = J),
				(q = _(n)),
				(D = r(n, 'DIV', {}));
			var W = S(D);
			(v = r(W, 'BUTTON', { type: !0, class: !0, 'data-svelte-h': !0 })),
				w(v) !== 'svelte-1mfijs' && (v.textContent = K),
				W.forEach(T),
				n.forEach(T),
				this.h();
		},
		h() {
			l(a, 'class', 'text-xl font-semibold lg:text-2xl'),
				l(m, 'class', 'pb-4 text-gray-500'),
				l(h, 'class', ''),
				l(p, 'type', 'text'),
				l(p, 'placeholder', 'Username'),
				l(p, 'class', 'mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'),
				l(x, 'class', ''),
				l(d, 'type', 'email'),
				l(d, 'placeholder', 'Info@example.com'),
				l(d, 'class', 'mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'),
				l(b, 'class', ''),
				l(y, 'class', ''),
				l(c, 'type', 'password'),
				l(c, 'placeholder', '******'),
				l(c, 'class', 'mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'),
				l(v, 'type', 'submit'),
				l(
					v,
					'class',
					'mt-5 w-full rounded-md border-2 border-sky-500 p-2 text-center font-semibold text-sky-600 outline-none focus:ring'
				),
				l(e, 'class', 'relative space-y-3 rounded-md p-6 lg:p-10 m-10');
		},
		m(u, n) {
			te(u, e, n),
				t(e, a),
				t(e, U),
				t(e, m),
				t(e, k),
				t(e, f),
				t(f, h),
				t(f, I),
				t(f, p),
				P(p, i[0].username),
				t(e, M),
				t(e, b),
				t(b, x),
				t(b, j),
				t(b, d),
				P(d, i[0].email),
				t(e, F),
				t(e, C),
				t(C, y),
				t(C, O),
				t(C, c),
				P(c, i[0].password),
				t(e, R),
				t(e, L),
				t(e, q),
				t(e, D),
				t(D, v),
				G ||
					((Q = [
						V(p, 'input', i[3]),
						V(d, 'input', i[4]),
						V(c, 'input', i[5]),
						V(v, 'click', X(i[2])),
						V(e, 'submit', X(i[1]))
					]),
					(G = !0));
		},
		p(u, [n]) {
			n & 1 && p.value !== u[0].username && P(p, u[0].username),
				n & 1 && d.value !== u[0].email && P(d, u[0].email),
				n & 1 && c.value !== u[0].password && P(c, u[0].password);
		},
		i: Z,
		o: Z,
		d(u) {
			u && T(e), (G = !1), se(Q);
		}
	};
}
function ie(i, e, a) {
	let s, U;
	ne(i, re, (E) => a(7, (U = E)));
	async function m() {
		const { data: E, error: I } = await oe.auth.signUp({
			email: s.email,
			password: s.password,
			options: { data: { username: s.username } }
		});
		a(0, (s.password = ''), s),
			a(0, (s.email = ''), s),
			a(0, (s.username = ''), s),
			U && $('/'),
			console.log('signup data: ', E),
			I && console.log(I);
	}
	const A = () => {
		$('/login');
	};
	function k() {
		(s.username = this.value), a(0, s);
	}
	function f() {
		(s.email = this.value), a(0, s);
	}
	function h() {
		(s.password = this.value), a(0, s);
	}
	return a(0, (s = { username: '', email: '', password: '' })), [s, m, A, k, f, h];
}
class fe extends le {
	constructor(e) {
		super(), ae(this, e, ie, ue, ee, {});
	}
}
export { fe as component };
