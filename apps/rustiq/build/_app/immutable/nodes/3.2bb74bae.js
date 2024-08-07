import {
	s as O,
	f as v,
	a as k,
	g as x,
	h as C,
	Y as T,
	c as w,
	d as b,
	j as h,
	i as E,
	E as d,
	u as M,
	_ as W,
	G as Y,
	l as H,
	m as I,
	U as N,
	n as G,
	F as z
} from '../chunks/scheduler.bdb66109.js';
import {
	S as L,
	i as S,
	b as P,
	d as U,
	m as V,
	a as R,
	t as q,
	e as A
} from '../chunks/index.d57fb68a.js';
import '../chunks/paths.01a3d415.js';
import '../chunks/supabaseClient.c7aa5afe.js';
import { e as B } from '../chunks/each.e59479a4.js';
import { a as Q } from '../chunks/products.0de01876.js';
function F(f, t, e) {
	const l = f.slice();
	return (l[1] = t[e]), l;
}
function j(f) {
	let t,
		e,
		l,
		n,
		r,
		s,
		c,
		g = f[1].title + '',
		p,
		m,
		_,
		y = 'explore now',
		u,
		o;
	return {
		c() {
			(t = v('a')),
				(e = v('img')),
				(r = k()),
				(s = v('div')),
				(c = v('p')),
				(p = H(g)),
				(m = k()),
				(_ = v('span')),
				(_.textContent = y),
				(u = k()),
				this.h();
		},
		l(i) {
			t = x(i, 'A', { class: !0, href: !0, 'data-sveltekit-preload-data': !0 });
			var a = C(t);
			(e = x(a, 'IMG', { src: !0, class: !0, alt: !0 })),
				(r = w(a)),
				(s = x(a, 'DIV', { class: !0 }));
			var $ = C(s);
			c = x($, 'P', { class: !0 });
			var D = C(c);
			(p = I(D, g)),
				D.forEach(b),
				(m = w($)),
				(_ = x($, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
				T(_) !== 'svelte-1idtbfx' && (_.textContent = y),
				$.forEach(b),
				(u = w(a)),
				a.forEach(b),
				this.h();
		},
		h() {
			N(e.src, (l = 'ui/' + f[1].img)) || h(e, 'src', l),
				h(
					e,
					'class',
					'w-full rounded-md h-full brightness-50 object-fit hover:brightness-75 ease-in duration-300'
				),
				h(e, 'alt', (n = f[1].title)),
				h(c, 'class', 'uppercase text-xl mb-2'),
				h(_, 'class', 'border font-ubuntu p-1 rounded-sm uppercase text-xs border-gray-100'),
				h(s, 'class', 'absolute text-gray-100 top-5 left-4'),
				h(t, 'class', 'w-full relative'),
				h(t, 'href', (o = f[1].link)),
				h(t, 'data-sveltekit-preload-data', 'hover');
		},
		m(i, a) {
			E(i, t, a), d(t, e), d(t, r), d(t, s), d(s, c), d(c, p), d(s, m), d(s, _), d(t, u);
		},
		p(i, a) {
			a & 1 && !N(e.src, (l = 'ui/' + i[1].img)) && h(e, 'src', l),
				a & 1 && n !== (n = i[1].title) && h(e, 'alt', n),
				a & 1 && g !== (g = i[1].title + '') && G(p, g),
				a & 1 && o !== (o = i[1].link) && h(t, 'href', o);
		},
		d(i) {
			i && b(t);
		}
	};
}
function J(f) {
	let t,
		e,
		l =
			'<h1 class="text-4xl text-stone-800 font-caudex text-center w-full leading-snug">WELCOME TO RUSTIQ HOME FURNITURE</h1> <p class="text-center text-stone-700 italic">The Smarter way to buy furniture</p>',
		n,
		r,
		s =
			'<p>High quality sofa <br/> started</p> <p><span class="text-2xl font-bold">70%</span> <span>off</span></p>',
		c,
		g,
		p = `<span class="group text-stone-600 font-extrabold text-2xl font-caudex transition duration-300">SHOP BY ROOM
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-600"></span></span>`,
		m,
		_,
		y = B(f[0]),
		u = [];
	for (let o = 0; o < y.length; o += 1) u[o] = j(F(f, y, o));
	return {
		c() {
			(t = v('section')),
				(e = v('div')),
				(e.innerHTML = l),
				(n = k()),
				(r = v('div')),
				(r.innerHTML = s),
				(c = k()),
				(g = v('div')),
				(g.innerHTML = p),
				(m = k()),
				(_ = v('div'));
			for (let o = 0; o < u.length; o += 1) u[o].c();
			this.h();
		},
		l(o) {
			t = x(o, 'SECTION', { class: !0 });
			var i = C(t);
			(e = x(i, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				T(e) !== 'svelte-v97m3y' && (e.innerHTML = l),
				(n = w(i)),
				(r = x(i, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				T(r) !== 'svelte-1dt6d6p' && (r.innerHTML = s),
				(c = w(i)),
				(g = x(i, 'DIV', { 'data-svelte-h': !0 })),
				T(g) !== 'svelte-19ghwzo' && (g.innerHTML = p),
				(m = w(i)),
				(_ = x(i, 'DIV', { class: !0 }));
			var a = C(_);
			for (let $ = 0; $ < u.length; $ += 1) u[$].l(a);
			a.forEach(b), i.forEach(b), this.h();
		},
		h() {
			h(e, 'class', 'py-4 pb-10 space-y-6'),
				h(
					r,
					'class',
					"text-[#4E5471] bg-no-repeat rounded bg-cover w-full p-4 bg-center max-w-md flex flex-col gap-4 bg-[url('$lib/ui/sofa_grey.png')]"
				),
				h(_, 'class', 'grid md:grid-cols-3 gap-4 w-full'),
				h(t, 'class', 'grid place-items-center w-full space-y-6');
		},
		m(o, i) {
			E(o, t, i), d(t, e), d(t, n), d(t, r), d(t, c), d(t, g), d(t, m), d(t, _);
			for (let a = 0; a < u.length; a += 1) u[a] && u[a].m(_, null);
		},
		p(o, [i]) {
			if (i & 1) {
				y = B(o[0]);
				let a;
				for (a = 0; a < y.length; a += 1) {
					const $ = F(o, y, a);
					u[a] ? u[a].p($, i) : ((u[a] = j($)), u[a].c(), u[a].m(_, null));
				}
				for (; a < u.length; a += 1) u[a].d(1);
				u.length = y.length;
			}
		},
		i: M,
		o: M,
		d(o) {
			o && b(t), W(u, o);
		}
	};
}
function K(f, t, e) {
	let l;
	return Y(f, Q, (n) => e(0, (l = n))), [l];
}
class X extends L {
	constructor(t) {
		super(), S(this, t, K, J, O, {});
	}
}
function Z(f) {
	let t,
		e,
		l,
		n,
		r,
		s = 'WTF',
		c,
		g;
	return {
		c() {
			(t = v('button')),
				(e = H('clicks: ')),
				(l = H(f[0])),
				(n = k()),
				(r = v('p')),
				(r.textContent = s);
		},
		l(p) {
			t = x(p, 'BUTTON', {});
			var m = C(t);
			(e = I(m, 'clicks: ')),
				(l = I(m, f[0])),
				m.forEach(b),
				(n = w(p)),
				(r = x(p, 'P', { 'data-svelte-h': !0 })),
				T(r) !== 'svelte-1aiy047' && (r.textContent = s);
		},
		m(p, m) {
			E(p, t, m),
				d(t, e),
				d(t, l),
				E(p, n, m),
				E(p, r, m),
				c || ((g = z(t, 'click', f[1])), (c = !0));
		},
		p(p, [m]) {
			m & 1 && G(l, p[0]);
		},
		i: M,
		o: M,
		d(p) {
			p && (b(t), b(n), b(r)), (c = !1), g();
		}
	};
}
function tt(f, t, e) {
	let l = 0;
	function n() {
		e(0, (l += 1));
	}
	return [l, n];
}
class et extends L {
	constructor(t) {
		super(), S(this, t, tt, Z, O, {});
	}
}
function at(f) {
	let t, e, l, n, r;
	return (
		(e = new et({})),
		(n = new X({})),
		{
			c() {
				(t = v('main')), P(e.$$.fragment), (l = k()), P(n.$$.fragment), this.h();
			},
			l(s) {
				t = x(s, 'MAIN', { class: !0 });
				var c = C(t);
				U(e.$$.fragment, c), (l = w(c)), U(n.$$.fragment, c), c.forEach(b), this.h();
			},
			h() {
				h(t, 'class', 'bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300');
			},
			m(s, c) {
				E(s, t, c), V(e, t, null), d(t, l), V(n, t, null), (r = !0);
			},
			p: M,
			i(s) {
				r || (R(e.$$.fragment, s), R(n.$$.fragment, s), (r = !0));
			},
			o(s) {
				q(e.$$.fragment, s), q(n.$$.fragment, s), (r = !1);
			},
			d(s) {
				s && b(t), A(e), A(n);
			}
		}
	);
}
class ct extends L {
	constructor(t) {
		super(), S(this, t, null, at, O, {});
	}
}
export { ct as component };
