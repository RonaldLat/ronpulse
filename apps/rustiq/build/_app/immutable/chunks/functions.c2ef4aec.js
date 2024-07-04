const j = /^[a-z0-9]+(-[a-z0-9]+)*$/,
	D = (e, t, n, r = '') => {
		const o = e.split(':');
		if (e.slice(0, 1) === '@') {
			if (o.length < 2 || o.length > 3) return null;
			r = o.shift().slice(1);
		}
		if (o.length > 3 || !o.length) return null;
		if (o.length > 1) {
			const c = o.pop(),
				f = o.pop(),
				l = { provider: o.length > 0 ? o[0] : r, prefix: f, name: c };
			return t && !M(l) ? null : l;
		}
		const i = o[0],
			s = i.split('-');
		if (s.length > 1) {
			const c = { provider: r, prefix: s.shift(), name: s.join('-') };
			return t && !M(c) ? null : c;
		}
		if (n && r === '') {
			const c = { provider: r, prefix: '', name: i };
			return t && !M(c, n) ? null : c;
		}
		return null;
	},
	M = (e, t) =>
		e
			? !!(
					(e.provider === '' || e.provider.match(j)) &&
					((t && e.prefix === '') || e.prefix.match(j)) &&
					e.name.match(j)
				)
			: !1,
	de = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
	A = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
	N = Object.freeze({ ...de, ...A }),
	V = Object.freeze({ ...N, body: '', hidden: !1 });
function je(e, t) {
	const n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function ee(e, t) {
	const n = je(e, t);
	for (const r in V)
		r in A
			? r in e && !(r in n) && (n[r] = A[r])
			: r in t
				? (n[r] = t[r])
				: r in e && (n[r] = e[r]);
	return n;
}
function Oe(e, t) {
	const n = e.icons,
		r = e.aliases || Object.create(null),
		o = Object.create(null);
	function i(s) {
		if (n[s]) return (o[s] = []);
		if (!(s in o)) {
			o[s] = null;
			const c = r[s] && r[s].parent,
				f = c && i(c);
			f && (o[s] = [c].concat(f));
		}
		return o[s];
	}
	return (t || Object.keys(n).concat(Object.keys(r))).forEach(i), o;
}
function Pe(e, t, n) {
	const r = e.icons,
		o = e.aliases || Object.create(null);
	let i = {};
	function s(c) {
		i = ee(r[c] || o[c], i);
	}
	return s(t), n.forEach(s), ee(e, i);
}
function pe(e, t) {
	const n = [];
	if (typeof e != 'object' || typeof e.icons != 'object') return n;
	e.not_found instanceof Array &&
		e.not_found.forEach((o) => {
			t(o, null), n.push(o);
		});
	const r = Oe(e);
	for (const o in r) {
		const i = r[o];
		i && (t(o, Pe(e, o, i)), n.push(o));
	}
	return n;
}
const Ee = { provider: '', aliases: {}, not_found: {}, ...de };
function z(e, t) {
	for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
	return !0;
}
function he(e) {
	if (typeof e != 'object' || e === null) return null;
	const t = e;
	if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !z(e, Ee))
		return null;
	const n = t.icons;
	for (const o in n) {
		const i = n[o];
		if (!o.match(j) || typeof i.body != 'string' || !z(i, V)) return null;
	}
	const r = t.aliases || Object.create(null);
	for (const o in r) {
		const i = r[o],
			s = i.parent;
		if (!o.match(j) || typeof s != 'string' || (!n[s] && !r[s]) || !z(i, V)) return null;
	}
	return t;
}
const te = Object.create(null);
function Fe(e, t) {
	return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() };
}
function k(e, t) {
	const n = te[e] || (te[e] = Object.create(null));
	return n[t] || (n[t] = Fe(e, t));
}
function K(e, t) {
	return he(t)
		? pe(t, (n, r) => {
				r ? (e.icons[n] = r) : e.missing.add(n);
			})
		: [];
}
function Me(e, t, n) {
	try {
		if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0;
	} catch {}
	return !1;
}
let O = !1;
function ge(e) {
	return typeof e == 'boolean' && (O = e), O;
}
function Le(e) {
	const t = typeof e == 'string' ? D(e, !0, O) : e;
	if (t) {
		const n = k(t.provider, t.prefix),
			r = t.name;
		return n.icons[r] || (n.missing.has(r) ? null : void 0);
	}
}
function Ae(e, t) {
	const n = D(e, !0, O);
	if (!n) return !1;
	const r = k(n.provider, n.prefix);
	return Me(r, n.name, t);
}
function De(e, t) {
	if (typeof e != 'object') return !1;
	if ((typeof t != 'string' && (t = e.provider || ''), O && !t && !e.prefix)) {
		let o = !1;
		return (
			he(e) &&
				((e.prefix = ''),
				pe(e, (i, s) => {
					s && Ae(i, s) && (o = !0);
				})),
			o
		);
	}
	const n = e.prefix;
	if (!M({ provider: t, prefix: n, name: 'a' })) return !1;
	const r = k(t, n);
	return !!K(r, e);
}
const me = Object.freeze({ width: null, height: null }),
	ye = Object.freeze({ ...me, ...A }),
	Ne = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
	Re = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ne(e, t, n) {
	if (t === 1) return e;
	if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
	if (typeof e != 'string') return e;
	const r = e.split(Ne);
	if (r === null || !r.length) return e;
	const o = [];
	let i = r.shift(),
		s = Re.test(i);
	for (;;) {
		if (s) {
			const c = parseFloat(i);
			isNaN(c) ? o.push(i) : o.push(Math.ceil(c * t * n) / n);
		} else o.push(i);
		if (((i = r.shift()), i === void 0)) return o.join('');
		s = !s;
	}
}
function Be(e, t = 'defs') {
	let n = '';
	const r = e.indexOf('<' + t);
	for (; r >= 0; ) {
		const o = e.indexOf('>', r),
			i = e.indexOf('</' + t);
		if (o === -1 || i === -1) break;
		const s = e.indexOf('>', i);
		if (s === -1) break;
		(n += e.slice(o + 1, i).trim()), (e = e.slice(0, r).trim() + e.slice(s + 1));
	}
	return { defs: n, content: e };
}
function ze(e, t) {
	return e ? '<defs>' + e + '</defs>' + t : t;
}
function Qe(e, t, n) {
	const r = Be(e);
	return ze(r.defs, t + r.content + n);
}
const Ve = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function qe(e, t) {
	const n = { ...N, ...e },
		r = { ...ye, ...t },
		o = { left: n.left, top: n.top, width: n.width, height: n.height };
	let i = n.body;
	[n, r].forEach((I) => {
		const m = [],
			g = I.hFlip,
			a = I.vFlip;
		let S = I.rotate;
		g
			? a
				? (S += 2)
				: (m.push(
						'translate(' + (o.width + o.left).toString() + ' ' + (0 - o.top).toString() + ')'
					),
					m.push('scale(-1 1)'),
					(o.top = o.left = 0))
			: a &&
				(m.push('translate(' + (0 - o.left).toString() + ' ' + (o.height + o.top).toString() + ')'),
				m.push('scale(1 -1)'),
				(o.top = o.left = 0));
		let x;
		switch ((S < 0 && (S -= Math.floor(S / 4) * 4), (S = S % 4), S)) {
			case 1:
				(x = o.height / 2 + o.top),
					m.unshift('rotate(90 ' + x.toString() + ' ' + x.toString() + ')');
				break;
			case 2:
				m.unshift(
					'rotate(180 ' +
						(o.width / 2 + o.left).toString() +
						' ' +
						(o.height / 2 + o.top).toString() +
						')'
				);
				break;
			case 3:
				(x = o.width / 2 + o.left),
					m.unshift('rotate(-90 ' + x.toString() + ' ' + x.toString() + ')');
				break;
		}
		S % 2 === 1 &&
			(o.left !== o.top && ((x = o.left), (o.left = o.top), (o.top = x)),
			o.width !== o.height && ((x = o.width), (o.width = o.height), (o.height = x))),
			m.length && (i = Qe(i, '<g transform="' + m.join(' ') + '">', '</g>'));
	});
	const s = r.width,
		c = r.height,
		f = o.width,
		l = o.height;
	let u, d;
	s === null
		? ((d = c === null ? '1em' : c === 'auto' ? l : c), (u = ne(d, f / l)))
		: ((u = s === 'auto' ? f : s), (d = c === null ? ne(u, l / f) : c === 'auto' ? l : c));
	const h = {},
		y = (I, m) => {
			Ve(m) || (h[I] = m.toString());
		};
	y('width', u), y('height', d);
	const b = [o.left, o.top, f, l];
	return (h.viewBox = b.join(' ')), { attributes: h, viewBox: b, body: i };
}
const Ue = /\sid="(\S+)"/g,
	_e = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let $e = 0;
function He(e, t = _e) {
	const n = [];
	let r;
	for (; (r = Ue.exec(e)); ) n.push(r[1]);
	if (!n.length) return e;
	const o = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16);
	return (
		n.forEach((i) => {
			const s = typeof t == 'function' ? t(i) : t + ($e++).toString(),
				c = i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			e = e.replace(new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', 'g'), '$1' + s + o + '$3');
		}),
		(e = e.replace(new RegExp(o, 'g'), '')),
		e
	);
}
const q = Object.create(null);
function Ge(e, t) {
	q[e] = t;
}
function U(e) {
	return q[e] || q[''];
}
function J(e) {
	let t;
	if (typeof e.resources == 'string') t = [e.resources];
	else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
	return {
		resources: t,
		path: e.path || '/',
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
const W = Object.create(null),
	T = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
	L = [];
for (; T.length > 0; ) T.length === 1 || Math.random() > 0.5 ? L.push(T.shift()) : L.push(T.pop());
W[''] = J({ resources: ['https://api.iconify.design'].concat(L) });
function Ke(e, t) {
	const n = J(t);
	return n === null ? !1 : ((W[e] = n), !0);
}
function X(e) {
	return W[e];
}
const Je = () => {
	let e;
	try {
		if (((e = fetch), typeof e == 'function')) return e;
	} catch {}
};
let oe = Je();
function We(e, t) {
	const n = X(e);
	if (!n) return 0;
	let r;
	if (!n.maxURL) r = 0;
	else {
		let o = 0;
		n.resources.forEach((s) => {
			o = Math.max(o, s.length);
		});
		const i = t + '.json?icons=';
		r = n.maxURL - o - n.path.length - i.length;
	}
	return r;
}
function Xe(e) {
	return e === 404;
}
const Ye = (e, t, n) => {
	const r = [],
		o = We(e, t),
		i = 'icons';
	let s = { type: i, provider: e, prefix: t, icons: [] },
		c = 0;
	return (
		n.forEach((f, l) => {
			(c += f.length + 1),
				c >= o &&
					l > 0 &&
					(r.push(s), (s = { type: i, provider: e, prefix: t, icons: [] }), (c = f.length)),
				s.icons.push(f);
		}),
		r.push(s),
		r
	);
};
function Ze(e) {
	if (typeof e == 'string') {
		const t = X(e);
		if (t) return t.path;
	}
	return '/';
}
const et = (e, t, n) => {
		if (!oe) {
			n('abort', 424);
			return;
		}
		let r = Ze(t.provider);
		switch (t.type) {
			case 'icons': {
				const i = t.prefix,
					c = t.icons.join(','),
					f = new URLSearchParams({ icons: c });
				r += i + '.json?' + f.toString();
				break;
			}
			case 'custom': {
				const i = t.uri;
				r += i.slice(0, 1) === '/' ? i.slice(1) : i;
				break;
			}
			default:
				n('abort', 400);
				return;
		}
		let o = 503;
		oe(e + r)
			.then((i) => {
				const s = i.status;
				if (s !== 200) {
					setTimeout(() => {
						n(Xe(s) ? 'abort' : 'next', s);
					});
					return;
				}
				return (o = 501), i.json();
			})
			.then((i) => {
				if (typeof i != 'object' || i === null) {
					setTimeout(() => {
						i === 404 ? n('abort', i) : n('next', o);
					});
					return;
				}
				setTimeout(() => {
					n('success', i);
				});
			})
			.catch(() => {
				n('next', o);
			});
	},
	tt = { prepare: Ye, send: et };
function nt(e) {
	const t = { loaded: [], missing: [], pending: [] },
		n = Object.create(null);
	e.sort((o, i) =>
		o.provider !== i.provider
			? o.provider.localeCompare(i.provider)
			: o.prefix !== i.prefix
				? o.prefix.localeCompare(i.prefix)
				: o.name.localeCompare(i.name)
	);
	let r = { provider: '', prefix: '', name: '' };
	return (
		e.forEach((o) => {
			if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
			r = o;
			const i = o.provider,
				s = o.prefix,
				c = o.name,
				f = n[i] || (n[i] = Object.create(null)),
				l = f[s] || (f[s] = k(i, s));
			let u;
			c in l.icons
				? (u = t.loaded)
				: s === '' || l.missing.has(c)
					? (u = t.missing)
					: (u = t.pending);
			const d = { provider: i, prefix: s, name: c };
			u.push(d);
		}),
		t
	);
}
function be(e, t) {
	e.forEach((n) => {
		const r = n.loaderCallbacks;
		r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
	});
}
function ot(e) {
	e.pendingCallbacksFlag ||
		((e.pendingCallbacksFlag = !0),
		setTimeout(() => {
			e.pendingCallbacksFlag = !1;
			const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
			if (!t.length) return;
			let n = !1;
			const r = e.provider,
				o = e.prefix;
			t.forEach((i) => {
				const s = i.icons,
					c = s.pending.length;
				(s.pending = s.pending.filter((f) => {
					if (f.prefix !== o) return !0;
					const l = f.name;
					if (e.icons[l]) s.loaded.push({ provider: r, prefix: o, name: l });
					else if (e.missing.has(l)) s.missing.push({ provider: r, prefix: o, name: l });
					else return (n = !0), !0;
					return !1;
				})),
					s.pending.length !== c &&
						(n || be([e], i.id),
						i.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), i.abort));
			});
		}));
}
let rt = 0;
function it(e, t, n) {
	const r = rt++,
		o = be.bind(null, n, r);
	if (!t.pending.length) return o;
	const i = { id: r, icons: t, callback: e, abort: o };
	return (
		n.forEach((s) => {
			(s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
		}),
		o
	);
}
function st(e, t = !0, n = !1) {
	const r = [];
	return (
		e.forEach((o) => {
			const i = typeof o == 'string' ? D(o, t, n) : o;
			i && r.push(i);
		}),
		r
	);
}
var ct = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
function ft(e, t, n, r) {
	const o = e.resources.length,
		i = e.random ? Math.floor(Math.random() * o) : e.index;
	let s;
	if (e.random) {
		let p = e.resources.slice(0);
		for (s = []; p.length > 1; ) {
			const w = Math.floor(Math.random() * p.length);
			s.push(p[w]), (p = p.slice(0, w).concat(p.slice(w + 1)));
		}
		s = s.concat(p);
	} else s = e.resources.slice(i).concat(e.resources.slice(0, i));
	const c = Date.now();
	let f = 'pending',
		l = 0,
		u,
		d = null,
		h = [],
		y = [];
	typeof r == 'function' && y.push(r);
	function b() {
		d && (clearTimeout(d), (d = null));
	}
	function I() {
		f === 'pending' && (f = 'aborted'),
			b(),
			h.forEach((p) => {
				p.status === 'pending' && (p.status = 'aborted');
			}),
			(h = []);
	}
	function m(p, w) {
		w && (y = []), typeof p == 'function' && y.push(p);
	}
	function g() {
		return {
			startTime: c,
			payload: t,
			status: f,
			queriesSent: l,
			queriesPending: h.length,
			subscribe: m,
			abort: I
		};
	}
	function a() {
		(f = 'failed'),
			y.forEach((p) => {
				p(void 0, u);
			});
	}
	function S() {
		h.forEach((p) => {
			p.status === 'pending' && (p.status = 'aborted');
		}),
			(h = []);
	}
	function x(p, w, C) {
		const E = w !== 'success';
		switch (((h = h.filter((v) => v !== p)), f)) {
			case 'pending':
				break;
			case 'failed':
				if (E || !e.dataAfterTimeout) return;
				break;
			default:
				return;
		}
		if (w === 'abort') {
			(u = C), a();
			return;
		}
		if (E) {
			(u = C), h.length || (s.length ? B() : a());
			return;
		}
		if ((b(), S(), !e.random)) {
			const v = e.resources.indexOf(p.resource);
			v !== -1 && v !== e.index && (e.index = v);
		}
		(f = 'completed'),
			y.forEach((v) => {
				v(C);
			});
	}
	function B() {
		if (f !== 'pending') return;
		b();
		const p = s.shift();
		if (p === void 0) {
			if (h.length) {
				d = setTimeout(() => {
					b(), f === 'pending' && (S(), a());
				}, e.timeout);
				return;
			}
			a();
			return;
		}
		const w = {
			status: 'pending',
			resource: p,
			callback: (C, E) => {
				x(w, C, E);
			}
		};
		h.push(w), l++, (d = setTimeout(B, e.rotate)), n(p, t, w.callback);
	}
	return setTimeout(B), g;
}
function xe(e) {
	const t = { ...ct, ...e };
	let n = [];
	function r() {
		n = n.filter((c) => c().status === 'pending');
	}
	function o(c, f, l) {
		const u = ft(t, c, f, (d, h) => {
			r(), l && l(d, h);
		});
		return n.push(u), u;
	}
	function i(c) {
		return n.find((f) => c(f)) || null;
	}
	return {
		query: o,
		find: i,
		setIndex: (c) => {
			t.index = c;
		},
		getIndex: () => t.index,
		cleanup: r
	};
}
function re() {}
const Q = Object.create(null);
function lt(e) {
	if (!Q[e]) {
		const t = X(e);
		if (!t) return;
		const n = xe(t),
			r = { config: t, redundancy: n };
		Q[e] = r;
	}
	return Q[e];
}
function ut(e, t, n) {
	let r, o;
	if (typeof e == 'string') {
		const i = U(e);
		if (!i) return n(void 0, 424), re;
		o = i.send;
		const s = lt(e);
		s && (r = s.redundancy);
	} else {
		const i = J(e);
		if (i) {
			r = xe(i);
			const s = e.resources ? e.resources[0] : '',
				c = U(s);
			c && (o = c.send);
		}
	}
	return !r || !o ? (n(void 0, 424), re) : r.query(t, o, n)().abort;
}
const ie = 'iconify2',
	P = 'iconify',
	we = P + '-count',
	se = P + '-version',
	Se = 36e5,
	at = 168,
	dt = 50;
function _(e, t) {
	try {
		return e.getItem(t);
	} catch {}
}
function Y(e, t, n) {
	try {
		return e.setItem(t, n), !0;
	} catch {}
}
function ce(e, t) {
	try {
		e.removeItem(t);
	} catch {}
}
function $(e, t) {
	return Y(e, we, t.toString());
}
function H(e) {
	return parseInt(_(e, we)) || 0;
}
const R = { local: !0, session: !0 },
	Ie = { local: new Set(), session: new Set() };
let Z = !1;
function pt(e) {
	Z = e;
}
let F = typeof window > 'u' ? {} : window;
function ve(e) {
	const t = e + 'Storage';
	try {
		if (F && F[t] && typeof F[t].length == 'number') return F[t];
	} catch {}
	R[e] = !1;
}
function ke(e, t) {
	const n = ve(e);
	if (!n) return;
	const r = _(n, se);
	if (r !== ie) {
		if (r) {
			const c = H(n);
			for (let f = 0; f < c; f++) ce(n, P + f.toString());
		}
		Y(n, se, ie), $(n, 0);
		return;
	}
	const o = Math.floor(Date.now() / Se) - at,
		i = (c) => {
			const f = P + c.toString(),
				l = _(n, f);
			if (typeof l == 'string') {
				try {
					const u = JSON.parse(l);
					if (
						typeof u == 'object' &&
						typeof u.cached == 'number' &&
						u.cached > o &&
						typeof u.provider == 'string' &&
						typeof u.data == 'object' &&
						typeof u.data.prefix == 'string' &&
						t(u, c)
					)
						return !0;
				} catch {}
				ce(n, f);
			}
		};
	let s = H(n);
	for (let c = s - 1; c >= 0; c--) i(c) || (c === s - 1 ? (s--, $(n, s)) : Ie[e].add(c));
}
function Ce() {
	if (!Z) {
		pt(!0);
		for (const e in R)
			ke(e, (t) => {
				const n = t.data,
					r = t.provider,
					o = n.prefix,
					i = k(r, o);
				if (!K(i, n).length) return !1;
				const s = n.lastModified || -1;
				return (
					(i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s), !0
				);
			});
	}
}
function ht(e, t) {
	const n = e.lastModifiedCached;
	if (n && n >= t) return n === t;
	if (((e.lastModifiedCached = t), n))
		for (const r in R)
			ke(r, (o) => {
				const i = o.data;
				return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
			});
	return !0;
}
function gt(e, t) {
	Z || Ce();
	function n(r) {
		let o;
		if (!R[r] || !(o = ve(r))) return;
		const i = Ie[r];
		let s;
		if (i.size) i.delete((s = Array.from(i).shift()));
		else if (((s = H(o)), s >= dt || !$(o, s + 1))) return;
		const c = { cached: Math.floor(Date.now() / Se), provider: e.provider, data: t };
		return Y(o, P + s.toString(), JSON.stringify(c));
	}
	(t.lastModified && !ht(e, t.lastModified)) ||
		(Object.keys(t.icons).length &&
			(t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
			n('local') || n('session')));
}
function fe() {}
function mt(e) {
	e.iconsLoaderFlag ||
		((e.iconsLoaderFlag = !0),
		setTimeout(() => {
			(e.iconsLoaderFlag = !1), ot(e);
		}));
}
function yt(e, t) {
	e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
		e.iconsQueueFlag ||
			((e.iconsQueueFlag = !0),
			setTimeout(() => {
				e.iconsQueueFlag = !1;
				const { provider: n, prefix: r } = e,
					o = e.iconsToLoad;
				delete e.iconsToLoad;
				let i;
				if (!o || !(i = U(n))) return;
				i.prepare(n, r, o).forEach((c) => {
					ut(n, c, (f) => {
						if (typeof f != 'object')
							c.icons.forEach((l) => {
								e.missing.add(l);
							});
						else
							try {
								const l = K(e, f);
								if (!l.length) return;
								const u = e.pendingIcons;
								u &&
									l.forEach((d) => {
										u.delete(d);
									}),
									gt(e, f);
							} catch (l) {
								console.error(l);
							}
						mt(e);
					});
				});
			}));
}
const bt = (e, t) => {
	const n = st(e, !0, ge()),
		r = nt(n);
	if (!r.pending.length) {
		let f = !0;
		return (
			t &&
				setTimeout(() => {
					f && t(r.loaded, r.missing, r.pending, fe);
				}),
			() => {
				f = !1;
			}
		);
	}
	const o = Object.create(null),
		i = [];
	let s, c;
	return (
		r.pending.forEach((f) => {
			const { provider: l, prefix: u } = f;
			if (u === c && l === s) return;
			(s = l), (c = u), i.push(k(l, u));
			const d = o[l] || (o[l] = Object.create(null));
			d[u] || (d[u] = []);
		}),
		r.pending.forEach((f) => {
			const { provider: l, prefix: u, name: d } = f,
				h = k(l, u),
				y = h.pendingIcons || (h.pendingIcons = new Set());
			y.has(d) || (y.add(d), o[l][u].push(d));
		}),
		i.forEach((f) => {
			const { provider: l, prefix: u } = f;
			o[l][u].length && yt(f, o[l][u]);
		}),
		t ? it(t, r, i) : fe
	);
};
function xt(e, t) {
	const n = { ...e };
	for (const r in t) {
		const o = t[r],
			i = typeof o;
		r in me
			? (o === null || (o && (i === 'string' || i === 'number'))) && (n[r] = o)
			: i === typeof n[r] && (n[r] = r === 'rotate' ? o % 4 : o);
	}
	return n;
}
const wt = /[\s,]+/;
function St(e, t) {
	t.split(wt).forEach((n) => {
		switch (n.trim()) {
			case 'horizontal':
				e.hFlip = !0;
				break;
			case 'vertical':
				e.vFlip = !0;
				break;
		}
	});
}
function It(e, t = 0) {
	const n = e.replace(/^-?[0-9.]*/, '');
	function r(o) {
		for (; o < 0; ) o += 4;
		return o % 4;
	}
	if (n === '') {
		const o = parseInt(e);
		return isNaN(o) ? 0 : r(o);
	} else if (n !== e) {
		let o = 0;
		switch (n) {
			case '%':
				o = 25;
				break;
			case 'deg':
				o = 90;
		}
		if (o) {
			let i = parseFloat(e.slice(0, e.length - n.length));
			return isNaN(i) ? 0 : ((i = i / o), i % 1 === 0 ? r(i) : 0);
		}
	}
	return t;
}
function vt(e, t) {
	let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
	for (const r in t) n += ' ' + r + '="' + t[r] + '"';
	return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function kt(e) {
	return e
		.replace(/"/g, "'")
		.replace(/%/g, '%25')
		.replace(/#/g, '%23')
		.replace(/</g, '%3C')
		.replace(/>/g, '%3E')
		.replace(/\s+/g, ' ');
}
function Ct(e) {
	return 'data:image/svg+xml,' + kt(e);
}
function Tt(e) {
	return 'url("' + Ct(e) + '")';
}
const le = { ...ye, inline: !1 },
	jt = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		'aria-hidden': !0,
		role: 'img'
	},
	Ot = { display: 'inline-block' },
	G = { 'background-color': 'currentColor' },
	Te = { 'background-color': 'transparent' },
	ue = { image: 'var(--svg)', repeat: 'no-repeat', size: '100% 100%' },
	ae = { '-webkit-mask': G, mask: G, background: Te };
for (const e in ae) {
	const t = ae[e];
	for (const n in ue) t[e + '-' + n] = ue[n];
}
function Pt(e) {
	return e + (e.match(/^[-0-9.]+$/) ? 'px' : '');
}
function Et(e, t) {
	const n = xt(le, t),
		r = t.mode || 'svg',
		o = r === 'svg' ? { ...jt } : {};
	e.body.indexOf('xlink:') === -1 && delete o['xmlns:xlink'];
	let i = typeof t.style == 'string' ? t.style : '';
	for (let g in t) {
		const a = t[g];
		if (a !== void 0)
			switch (g) {
				case 'icon':
				case 'style':
				case 'onLoad':
				case 'mode':
					break;
				case 'inline':
				case 'hFlip':
				case 'vFlip':
					n[g] = a === !0 || a === 'true' || a === 1;
					break;
				case 'flip':
					typeof a == 'string' && St(n, a);
					break;
				case 'color':
					i = i + (i.length > 0 && i.trim().slice(-1) !== ';' ? ';' : '') + 'color: ' + a + '; ';
					break;
				case 'rotate':
					typeof a == 'string' ? (n[g] = It(a)) : typeof a == 'number' && (n[g] = a);
					break;
				case 'ariaHidden':
				case 'aria-hidden':
					a !== !0 && a !== 'true' && delete o['aria-hidden'];
					break;
				default:
					if (g.slice(0, 3) === 'on:') break;
					le[g] === void 0 && (o[g] = a);
			}
	}
	const s = qe(e, n),
		c = s.attributes;
	if ((n.inline && (i = 'vertical-align: -0.125em; ' + i), r === 'svg')) {
		Object.assign(o, c), i !== '' && (o.style = i);
		let g = 0,
			a = t.id;
		return (
			typeof a == 'string' && (a = a.replace(/-/g, '_')),
			{ svg: !0, attributes: o, body: He(s.body, a ? () => a + 'ID' + g++ : 'iconifySvelte') }
		);
	}
	const { body: f, width: l, height: u } = e,
		d = r === 'mask' || (r === 'bg' ? !1 : f.indexOf('currentColor') !== -1),
		h = vt(f, { ...c, width: l + '', height: u + '' }),
		b = { '--svg': Tt(h) },
		I = (g) => {
			const a = c[g];
			a && (b[g] = Pt(a));
		};
	I('width'), I('height'), Object.assign(b, Ot, d ? G : Te);
	let m = '';
	for (const g in b) m += g + ': ' + b[g] + ';';
	return (o.style = m + i), { svg: !1, attributes: o };
}
ge(!0);
Ge('', tt);
if (typeof document < 'u' && typeof window < 'u') {
	Ce();
	const e = window;
	if (e.IconifyPreload !== void 0) {
		const t = e.IconifyPreload,
			n = 'Invalid IconifyPreload syntax.';
		typeof t == 'object' &&
			t !== null &&
			(t instanceof Array ? t : [t]).forEach((r) => {
				try {
					(typeof r != 'object' ||
						r === null ||
						r instanceof Array ||
						typeof r.icons != 'object' ||
						typeof r.prefix != 'string' ||
						!De(r)) &&
						console.error(n);
				} catch {
					console.error(n);
				}
			});
	}
	if (e.IconifyProviders !== void 0) {
		const t = e.IconifyProviders;
		if (typeof t == 'object' && t !== null)
			for (let n in t) {
				const r = 'IconifyProviders[' + n + '] is invalid.';
				try {
					const o = t[n];
					if (typeof o != 'object' || !o || o.resources === void 0) continue;
					Ke(n, o) || console.error(r);
				} catch {
					console.error(r);
				}
			}
	}
}
function Ft(e, t, n, r, o) {
	function i() {
		t.loading && (t.loading.abort(), (t.loading = null));
	}
	if (typeof e == 'object' && e !== null && typeof e.body == 'string')
		return (t.name = ''), i(), { data: { ...N, ...e } };
	let s;
	if (typeof e != 'string' || (s = D(e, !1, !0)) === null) return i(), null;
	const c = Le(s);
	if (!c)
		return (
			n &&
				(!t.loading || t.loading.name !== e) &&
				(i(), (t.name = ''), (t.loading = { name: e, abort: bt([s], r) })),
			null
		);
	i(), t.name !== e && ((t.name = e), o && !t.destroyed && o(e));
	const f = ['iconify'];
	return (
		s.prefix !== '' && f.push('iconify--' + s.prefix),
		s.provider !== '' && f.push('iconify--' + s.provider),
		{ data: c, classes: f }
	);
}
function Mt(e, t) {
	return e ? Et({ ...N, ...e }, t) : null;
}
export { Ft as c, Mt as g };
