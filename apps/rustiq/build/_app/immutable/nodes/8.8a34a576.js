import {
	s as p,
	f as m,
	l as c,
	g as l,
	h as d,
	m as u,
	d as o,
	i as f,
	E as h,
	u as r,
	G as _
} from '../chunks/scheduler.bdb66109.js';
import { S as g, i as x } from '../chunks/index.d57fb68a.js';
import { p as I } from '../chunks/stores.b7086389.js';
function $(a) {
	let e, s;
	return {
		c() {
			(e = m('h1')), (s = c(a[0]));
		},
		l(t) {
			e = l(t, 'H1', {});
			var n = d(e);
			(s = u(n, a[0])), n.forEach(o);
		},
		m(t, n) {
			f(t, e, n), h(e, s);
		},
		p: r,
		i: r,
		o: r,
		d(t) {
			t && o(e);
		}
	};
}
function b(a, e, s) {
	let t;
	return _(a, I, (i) => s(1, (t = i))), [t.params.userId];
}
class S extends g {
	constructor(e) {
		super(), x(this, e, b, $, p, {});
	}
}
export { S as component };
