import { _ as z } from './preload-helper.a4192956.js';
const We = (n) => {
	let e;
	return (
		n
			? (e = n)
			: typeof fetch > 'u'
				? (e = (...t) =>
						z(() => Promise.resolve().then(() => X), void 0, import.meta.url).then(
							({ default: s }) => s(...t)
						))
				: (e = fetch),
		(...t) => e(...t)
	);
};
class pe extends Error {
	constructor(e, t = 'FunctionsError', s) {
		super(e), (this.name = t), (this.context = s);
	}
}
class Xe extends pe {
	constructor(e) {
		super('Failed to send a request to the Edge Function', 'FunctionsFetchError', e);
	}
}
class Qe extends pe {
	constructor(e) {
		super('Relay Error invoking the Edge Function', 'FunctionsRelayError', e);
	}
}
class Ye extends pe {
	constructor(e) {
		super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', e);
	}
}
var he;
(function (n) {
	(n.Any = 'any'),
		(n.ApNortheast1 = 'ap-northeast-1'),
		(n.ApNortheast2 = 'ap-northeast-2'),
		(n.ApSouth1 = 'ap-south-1'),
		(n.ApSoutheast1 = 'ap-southeast-1'),
		(n.ApSoutheast2 = 'ap-southeast-2'),
		(n.CaCentral1 = 'ca-central-1'),
		(n.EuCentral1 = 'eu-central-1'),
		(n.EuWest1 = 'eu-west-1'),
		(n.EuWest2 = 'eu-west-2'),
		(n.EuWest3 = 'eu-west-3'),
		(n.SaEast1 = 'sa-east-1'),
		(n.UsEast1 = 'us-east-1'),
		(n.UsWest1 = 'us-west-1'),
		(n.UsWest2 = 'us-west-2');
})(he || (he = {}));
var Ze =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
class et {
	constructor(e, { headers: t = {}, customFetch: s, region: r = he.Any } = {}) {
		(this.url = e), (this.headers = t), (this.region = r), (this.fetch = We(s));
	}
	setAuth(e) {
		this.headers.Authorization = `Bearer ${e}`;
	}
	invoke(e, t = {}) {
		var s;
		return Ze(this, void 0, void 0, function* () {
			try {
				const { headers: r, method: i, body: o } = t;
				let a = {},
					{ region: c } = t;
				c || (c = this.region), c && c !== 'any' && (a['x-region'] = c);
				let l;
				o &&
					((r && !Object.prototype.hasOwnProperty.call(r, 'Content-Type')) || !r) &&
					((typeof Blob < 'u' && o instanceof Blob) || o instanceof ArrayBuffer
						? ((a['Content-Type'] = 'application/octet-stream'), (l = o))
						: typeof o == 'string'
							? ((a['Content-Type'] = 'text/plain'), (l = o))
							: typeof FormData < 'u' && o instanceof FormData
								? (l = o)
								: ((a['Content-Type'] = 'application/json'), (l = JSON.stringify(o))));
				const h = yield this.fetch(`${this.url}/${e}`, {
						method: i || 'POST',
						headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), r),
						body: l
					}).catch((_) => {
						throw new Xe(_);
					}),
					u = h.headers.get('x-relay-error');
				if (u && u === 'true') throw new Qe(h);
				if (!h.ok) throw new Ye(h);
				let d = ((s = h.headers.get('Content-Type')) !== null && s !== void 0 ? s : 'text/plain')
						.split(';')[0]
						.trim(),
					f;
				return (
					d === 'application/json'
						? (f = yield h.json())
						: d === 'application/octet-stream'
							? (f = yield h.blob())
							: d === 'text/event-stream'
								? (f = h)
								: d === 'multipart/form-data'
									? (f = yield h.formData())
									: (f = yield h.text()),
					{ data: f, error: null }
				);
			} catch (r) {
				return { data: null, error: r };
			}
		});
	}
}
var tt = function () {
		if (typeof self < 'u') return self;
		if (typeof window < 'u') return window;
		if (typeof global < 'u') return global;
		throw new Error('unable to locate global object');
	},
	J = tt();
const st = J.fetch,
	_e = J.fetch.bind(J),
	De = J.Headers,
	rt = J.Request,
	it = J.Response,
	X = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, Headers: De, Request: rt, Response: it, default: _e, fetch: st },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
class nt extends Error {
	constructor(e) {
		super(e.message),
			(this.name = 'PostgrestError'),
			(this.details = e.details),
			(this.hint = e.hint),
			(this.code = e.code);
	}
}
class ot {
	constructor(e) {
		(this.shouldThrowOnError = !1),
			(this.method = e.method),
			(this.url = e.url),
			(this.headers = e.headers),
			(this.schema = e.schema),
			(this.body = e.body),
			(this.shouldThrowOnError = e.shouldThrowOnError),
			(this.signal = e.signal),
			(this.isMaybeSingle = e.isMaybeSingle),
			e.fetch
				? (this.fetch = e.fetch)
				: typeof fetch > 'u'
					? (this.fetch = _e)
					: (this.fetch = fetch);
	}
	throwOnError() {
		return (this.shouldThrowOnError = !0), this;
	}
	then(e, t) {
		this.schema === void 0 ||
			(['GET', 'HEAD'].includes(this.method)
				? (this.headers['Accept-Profile'] = this.schema)
				: (this.headers['Content-Profile'] = this.schema)),
			this.method !== 'GET' &&
				this.method !== 'HEAD' &&
				(this.headers['Content-Type'] = 'application/json');
		const s = this.fetch;
		let r = s(this.url.toString(), {
			method: this.method,
			headers: this.headers,
			body: JSON.stringify(this.body),
			signal: this.signal
		}).then(async (i) => {
			var o, a, c;
			let l = null,
				h = null,
				u = null,
				d = i.status,
				f = i.statusText;
			if (i.ok) {
				if (this.method !== 'HEAD') {
					const k = await i.text();
					k === '' ||
						(this.headers.Accept === 'text/csv' ||
						(this.headers.Accept && this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
							? (h = k)
							: (h = JSON.parse(k)));
				}
				const y =
						(o = this.headers.Prefer) === null || o === void 0
							? void 0
							: o.match(/count=(exact|planned|estimated)/),
					v = (a = i.headers.get('content-range')) === null || a === void 0 ? void 0 : a.split('/');
				y && v && v.length > 1 && (u = parseInt(v[1])),
					this.isMaybeSingle &&
						this.method === 'GET' &&
						Array.isArray(h) &&
						(h.length > 1
							? ((l = {
									code: 'PGRST116',
									details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
									hint: null,
									message: 'JSON object requested, multiple (or no) rows returned'
								}),
								(h = null),
								(u = null),
								(d = 406),
								(f = 'Not Acceptable'))
							: h.length === 1
								? (h = h[0])
								: (h = null));
			} else {
				const y = await i.text();
				try {
					(l = JSON.parse(y)),
						Array.isArray(l) && i.status === 404 && ((h = []), (l = null), (d = 200), (f = 'OK'));
				} catch {
					i.status === 404 && y === '' ? ((d = 204), (f = 'No Content')) : (l = { message: y });
				}
				if (
					(l &&
						this.isMaybeSingle &&
						!((c = l == null ? void 0 : l.details) === null || c === void 0) &&
						c.includes('0 rows') &&
						((l = null), (d = 200), (f = 'OK')),
					l && this.shouldThrowOnError)
				)
					throw new nt(l);
			}
			return { error: l, data: h, count: u, status: d, statusText: f };
		});
		return (
			this.shouldThrowOnError ||
				(r = r.catch((i) => {
					var o, a, c;
					return {
						error: {
							message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : 'FetchError'}: ${i == null ? void 0 : i.message}`,
							details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ''}`,
							hint: '',
							code: `${(c = i == null ? void 0 : i.code) !== null && c !== void 0 ? c : ''}`
						},
						data: null,
						count: null,
						status: 0,
						statusText: ''
					};
				})),
			r.then(e, t)
		);
	}
}
class at extends ot {
	select(e) {
		let t = !1;
		const s = (e ?? '*')
			.split('')
			.map((r) => (/\s/.test(r) && !t ? '' : (r === '"' && (t = !t), r)))
			.join('');
		return (
			this.url.searchParams.set('select', s),
			this.headers.Prefer && (this.headers.Prefer += ','),
			(this.headers.Prefer += 'return=representation'),
			this
		);
	}
	order(e, { ascending: t = !0, nullsFirst: s, foreignTable: r, referencedTable: i = r } = {}) {
		const o = i ? `${i}.order` : 'order',
			a = this.url.searchParams.get(o);
		return (
			this.url.searchParams.set(
				o,
				`${a ? `${a},` : ''}${e}.${t ? 'asc' : 'desc'}${s === void 0 ? '' : s ? '.nullsfirst' : '.nullslast'}`
			),
			this
		);
	}
	limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
		const r = typeof s > 'u' ? 'limit' : `${s}.limit`;
		return this.url.searchParams.set(r, `${e}`), this;
	}
	range(e, t, { foreignTable: s, referencedTable: r = s } = {}) {
		const i = typeof r > 'u' ? 'offset' : `${r}.offset`,
			o = typeof r > 'u' ? 'limit' : `${r}.limit`;
		return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(o, `${t - e + 1}`), this;
	}
	abortSignal(e) {
		return (this.signal = e), this;
	}
	single() {
		return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this;
	}
	maybeSingle() {
		return (
			this.method === 'GET'
				? (this.headers.Accept = 'application/json')
				: (this.headers.Accept = 'application/vnd.pgrst.object+json'),
			(this.isMaybeSingle = !0),
			this
		);
	}
	csv() {
		return (this.headers.Accept = 'text/csv'), this;
	}
	geojson() {
		return (this.headers.Accept = 'application/geo+json'), this;
	}
	explain({
		analyze: e = !1,
		verbose: t = !1,
		settings: s = !1,
		buffers: r = !1,
		wal: i = !1,
		format: o = 'text'
	} = {}) {
		var a;
		const c = [
				e ? 'analyze' : null,
				t ? 'verbose' : null,
				s ? 'settings' : null,
				r ? 'buffers' : null,
				i ? 'wal' : null
			]
				.filter(Boolean)
				.join('|'),
			l = (a = this.headers.Accept) !== null && a !== void 0 ? a : 'application/json';
		return (
			(this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${l}"; options=${c};`),
			o === 'json' ? this : this
		);
	}
	rollback() {
		var e;
		return (
			((e = this.headers.Prefer) !== null && e !== void 0 ? e : '').trim().length > 0
				? (this.headers.Prefer += ',tx=rollback')
				: (this.headers.Prefer = 'tx=rollback'),
			this
		);
	}
	returns() {
		return this;
	}
}
class q extends at {
	eq(e, t) {
		return this.url.searchParams.append(e, `eq.${t}`), this;
	}
	neq(e, t) {
		return this.url.searchParams.append(e, `neq.${t}`), this;
	}
	gt(e, t) {
		return this.url.searchParams.append(e, `gt.${t}`), this;
	}
	gte(e, t) {
		return this.url.searchParams.append(e, `gte.${t}`), this;
	}
	lt(e, t) {
		return this.url.searchParams.append(e, `lt.${t}`), this;
	}
	lte(e, t) {
		return this.url.searchParams.append(e, `lte.${t}`), this;
	}
	like(e, t) {
		return this.url.searchParams.append(e, `like.${t}`), this;
	}
	likeAllOf(e, t) {
		return this.url.searchParams.append(e, `like(all).{${t.join(',')}}`), this;
	}
	likeAnyOf(e, t) {
		return this.url.searchParams.append(e, `like(any).{${t.join(',')}}`), this;
	}
	ilike(e, t) {
		return this.url.searchParams.append(e, `ilike.${t}`), this;
	}
	ilikeAllOf(e, t) {
		return this.url.searchParams.append(e, `ilike(all).{${t.join(',')}}`), this;
	}
	ilikeAnyOf(e, t) {
		return this.url.searchParams.append(e, `ilike(any).{${t.join(',')}}`), this;
	}
	is(e, t) {
		return this.url.searchParams.append(e, `is.${t}`), this;
	}
	in(e, t) {
		const s = Array.from(new Set(t))
			.map((r) => (typeof r == 'string' && new RegExp('[,()]').test(r) ? `"${r}"` : `${r}`))
			.join(',');
		return this.url.searchParams.append(e, `in.(${s})`), this;
	}
	contains(e, t) {
		return (
			typeof t == 'string'
				? this.url.searchParams.append(e, `cs.${t}`)
				: Array.isArray(t)
					? this.url.searchParams.append(e, `cs.{${t.join(',')}}`)
					: this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
			this
		);
	}
	containedBy(e, t) {
		return (
			typeof t == 'string'
				? this.url.searchParams.append(e, `cd.${t}`)
				: Array.isArray(t)
					? this.url.searchParams.append(e, `cd.{${t.join(',')}}`)
					: this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
			this
		);
	}
	rangeGt(e, t) {
		return this.url.searchParams.append(e, `sr.${t}`), this;
	}
	rangeGte(e, t) {
		return this.url.searchParams.append(e, `nxl.${t}`), this;
	}
	rangeLt(e, t) {
		return this.url.searchParams.append(e, `sl.${t}`), this;
	}
	rangeLte(e, t) {
		return this.url.searchParams.append(e, `nxr.${t}`), this;
	}
	rangeAdjacent(e, t) {
		return this.url.searchParams.append(e, `adj.${t}`), this;
	}
	overlaps(e, t) {
		return (
			typeof t == 'string'
				? this.url.searchParams.append(e, `ov.${t}`)
				: this.url.searchParams.append(e, `ov.{${t.join(',')}}`),
			this
		);
	}
	textSearch(e, t, { config: s, type: r } = {}) {
		let i = '';
		r === 'plain' ? (i = 'pl') : r === 'phrase' ? (i = 'ph') : r === 'websearch' && (i = 'w');
		const o = s === void 0 ? '' : `(${s})`;
		return this.url.searchParams.append(e, `${i}fts${o}.${t}`), this;
	}
	match(e) {
		return (
			Object.entries(e).forEach(([t, s]) => {
				this.url.searchParams.append(t, `eq.${s}`);
			}),
			this
		);
	}
	not(e, t, s) {
		return this.url.searchParams.append(e, `not.${t}.${s}`), this;
	}
	or(e, { foreignTable: t, referencedTable: s = t } = {}) {
		const r = s ? `${s}.or` : 'or';
		return this.url.searchParams.append(r, `(${e})`), this;
	}
	filter(e, t, s) {
		return this.url.searchParams.append(e, `${t}.${s}`), this;
	}
}
class ct {
	constructor(e, { headers: t = {}, schema: s, fetch: r }) {
		(this.url = e), (this.headers = t), (this.schema = s), (this.fetch = r);
	}
	select(e, { head: t = !1, count: s } = {}) {
		const r = t ? 'HEAD' : 'GET';
		let i = !1;
		const o = (e ?? '*')
			.split('')
			.map((a) => (/\s/.test(a) && !i ? '' : (a === '"' && (i = !i), a)))
			.join('');
		return (
			this.url.searchParams.set('select', o),
			s && (this.headers.Prefer = `count=${s}`),
			new q({
				method: r,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1
			})
		);
	}
	insert(e, { count: t, defaultToNull: s = !0 } = {}) {
		const r = 'POST',
			i = [];
		if (
			(this.headers.Prefer && i.push(this.headers.Prefer),
			t && i.push(`count=${t}`),
			s || i.push('missing=default'),
			(this.headers.Prefer = i.join(',')),
			Array.isArray(e))
		) {
			const o = e.reduce((a, c) => a.concat(Object.keys(c)), []);
			if (o.length > 0) {
				const a = [...new Set(o)].map((c) => `"${c}"`);
				this.url.searchParams.set('columns', a.join(','));
			}
		}
		return new q({
			method: r,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: e,
			fetch: this.fetch,
			allowEmpty: !1
		});
	}
	upsert(e, { onConflict: t, ignoreDuplicates: s = !1, count: r, defaultToNull: i = !0 } = {}) {
		const o = 'POST',
			a = [`resolution=${s ? 'ignore' : 'merge'}-duplicates`];
		if (
			(t !== void 0 && this.url.searchParams.set('on_conflict', t),
			this.headers.Prefer && a.push(this.headers.Prefer),
			r && a.push(`count=${r}`),
			i || a.push('missing=default'),
			(this.headers.Prefer = a.join(',')),
			Array.isArray(e))
		) {
			const c = e.reduce((l, h) => l.concat(Object.keys(h)), []);
			if (c.length > 0) {
				const l = [...new Set(c)].map((h) => `"${h}"`);
				this.url.searchParams.set('columns', l.join(','));
			}
		}
		return new q({
			method: o,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: e,
			fetch: this.fetch,
			allowEmpty: !1
		});
	}
	update(e, { count: t } = {}) {
		const s = 'PATCH',
			r = [];
		return (
			this.headers.Prefer && r.push(this.headers.Prefer),
			t && r.push(`count=${t}`),
			(this.headers.Prefer = r.join(',')),
			new q({
				method: s,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: e,
				fetch: this.fetch,
				allowEmpty: !1
			})
		);
	}
	delete({ count: e } = {}) {
		const t = 'DELETE',
			s = [];
		return (
			e && s.push(`count=${e}`),
			this.headers.Prefer && s.unshift(this.headers.Prefer),
			(this.headers.Prefer = s.join(',')),
			new q({
				method: t,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1
			})
		);
	}
}
const ht = '1.15.2',
	lt = { 'X-Client-Info': `postgrest-js/${ht}` };
class ve {
	constructor(e, { headers: t = {}, schema: s, fetch: r } = {}) {
		(this.url = e),
			(this.headers = Object.assign(Object.assign({}, lt), t)),
			(this.schemaName = s),
			(this.fetch = r);
	}
	from(e) {
		const t = new URL(`${this.url}/${e}`);
		return new ct(t, {
			headers: Object.assign({}, this.headers),
			schema: this.schemaName,
			fetch: this.fetch
		});
	}
	schema(e) {
		return new ve(this.url, { headers: this.headers, schema: e, fetch: this.fetch });
	}
	rpc(e, t = {}, { head: s = !1, get: r = !1, count: i } = {}) {
		let o;
		const a = new URL(`${this.url}/rpc/${e}`);
		let c;
		s || r
			? ((o = s ? 'HEAD' : 'GET'),
				Object.entries(t)
					.filter(([h, u]) => u !== void 0)
					.map(([h, u]) => [h, Array.isArray(u) ? `{${u.join(',')}}` : `${u}`])
					.forEach(([h, u]) => {
						a.searchParams.append(h, u);
					}))
			: ((o = 'POST'), (c = t));
		const l = Object.assign({}, this.headers);
		return (
			i && (l.Prefer = `count=${i}`),
			new q({
				method: o,
				url: a,
				headers: l,
				schema: this.schemaName,
				body: c,
				fetch: this.fetch,
				allowEmpty: !1
			})
		);
	}
}
const ut = '2.9.5',
	dt = { 'X-Client-Info': `realtime-js/${ut}` },
	ft = '1.0.0',
	Ne = 1e4,
	gt = 1e3;
var M;
(function (n) {
	(n[(n.connecting = 0)] = 'connecting'),
		(n[(n.open = 1)] = 'open'),
		(n[(n.closing = 2)] = 'closing'),
		(n[(n.closed = 3)] = 'closed');
})(M || (M = {}));
var S;
(function (n) {
	(n.closed = 'closed'),
		(n.errored = 'errored'),
		(n.joined = 'joined'),
		(n.joining = 'joining'),
		(n.leaving = 'leaving');
})(S || (S = {}));
var O;
(function (n) {
	(n.close = 'phx_close'),
		(n.error = 'phx_error'),
		(n.join = 'phx_join'),
		(n.reply = 'phx_reply'),
		(n.leave = 'phx_leave'),
		(n.access_token = 'access_token');
})(O || (O = {}));
var le;
(function (n) {
	n.websocket = 'websocket';
})(le || (le = {}));
var L;
(function (n) {
	(n.Connecting = 'connecting'), (n.Open = 'open'), (n.Closing = 'closing'), (n.Closed = 'closed');
})(L || (L = {}));
class Fe {
	constructor(e, t) {
		(this.callback = e),
			(this.timerCalc = t),
			(this.timer = void 0),
			(this.tries = 0),
			(this.callback = e),
			(this.timerCalc = t);
	}
	reset() {
		(this.tries = 0), clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer),
			(this.timer = setTimeout(
				() => {
					(this.tries = this.tries + 1), this.callback();
				},
				this.timerCalc(this.tries + 1)
			));
	}
}
class pt {
	constructor() {
		this.HEADER_LENGTH = 1;
	}
	decode(e, t) {
		return e.constructor === ArrayBuffer
			? t(this._binaryDecode(e))
			: t(typeof e == 'string' ? JSON.parse(e) : {});
	}
	_binaryDecode(e) {
		const t = new DataView(e),
			s = new TextDecoder();
		return this._decodeBroadcast(e, t, s);
	}
	_decodeBroadcast(e, t, s) {
		const r = t.getUint8(1),
			i = t.getUint8(2);
		let o = this.HEADER_LENGTH + 2;
		const a = s.decode(e.slice(o, o + r));
		o = o + r;
		const c = s.decode(e.slice(o, o + i));
		o = o + i;
		const l = JSON.parse(s.decode(e.slice(o, e.byteLength)));
		return { ref: null, topic: a, event: c, payload: l };
	}
}
class re {
	constructor(e, t, s = {}, r = Ne) {
		(this.channel = e),
			(this.event = t),
			(this.payload = s),
			(this.timeout = r),
			(this.sent = !1),
			(this.timeoutTimer = void 0),
			(this.ref = ''),
			(this.receivedResp = null),
			(this.recHooks = []),
			(this.refEvent = null);
	}
	resend(e) {
		(this.timeout = e),
			this._cancelRefEvent(),
			(this.ref = ''),
			(this.refEvent = null),
			(this.receivedResp = null),
			(this.sent = !1),
			this.send();
	}
	send() {
		this._hasReceived('timeout') ||
			(this.startTimeout(),
			(this.sent = !0),
			this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef()
			}));
	}
	updatePayload(e) {
		this.payload = Object.assign(Object.assign({}, this.payload), e);
	}
	receive(e, t) {
		var s;
		return (
			this._hasReceived(e) &&
				t((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response),
			this.recHooks.push({ status: e, callback: t }),
			this
		);
	}
	startTimeout() {
		if (this.timeoutTimer) return;
		(this.ref = this.channel.socket._makeRef()),
			(this.refEvent = this.channel._replyEventName(this.ref));
		const e = (t) => {
			this._cancelRefEvent(), this._cancelTimeout(), (this.receivedResp = t), this._matchReceive(t);
		};
		this.channel._on(this.refEvent, {}, e),
			(this.timeoutTimer = setTimeout(() => {
				this.trigger('timeout', {});
			}, this.timeout));
	}
	trigger(e, t) {
		this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
	}
	destroy() {
		this._cancelRefEvent(), this._cancelTimeout();
	}
	_cancelRefEvent() {
		this.refEvent && this.channel._off(this.refEvent, {});
	}
	_cancelTimeout() {
		clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
	}
	_matchReceive({ status: e, response: t }) {
		this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(t));
	}
	_hasReceived(e) {
		return this.receivedResp && this.receivedResp.status === e;
	}
}
var be;
(function (n) {
	(n.SYNC = 'sync'), (n.JOIN = 'join'), (n.LEAVE = 'leave');
})(be || (be = {}));
class K {
	constructor(e, t) {
		(this.channel = e),
			(this.state = {}),
			(this.pendingDiffs = []),
			(this.joinRef = null),
			(this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
		const s = (t == null ? void 0 : t.events) || { state: 'presence_state', diff: 'presence_diff' };
		this.channel._on(s.state, {}, (r) => {
			const { onJoin: i, onLeave: o, onSync: a } = this.caller;
			(this.joinRef = this.channel._joinRef()),
				(this.state = K.syncState(this.state, r, i, o)),
				this.pendingDiffs.forEach((c) => {
					this.state = K.syncDiff(this.state, c, i, o);
				}),
				(this.pendingDiffs = []),
				a();
		}),
			this.channel._on(s.diff, {}, (r) => {
				const { onJoin: i, onLeave: o, onSync: a } = this.caller;
				this.inPendingSyncState()
					? this.pendingDiffs.push(r)
					: ((this.state = K.syncDiff(this.state, r, i, o)), a());
			}),
			this.onJoin((r, i, o) => {
				this.channel._trigger('presence', {
					event: 'join',
					key: r,
					currentPresences: i,
					newPresences: o
				});
			}),
			this.onLeave((r, i, o) => {
				this.channel._trigger('presence', {
					event: 'leave',
					key: r,
					currentPresences: i,
					leftPresences: o
				});
			}),
			this.onSync(() => {
				this.channel._trigger('presence', { event: 'sync' });
			});
	}
	static syncState(e, t, s, r) {
		const i = this.cloneDeep(e),
			o = this.transformState(t),
			a = {},
			c = {};
		return (
			this.map(i, (l, h) => {
				o[l] || (c[l] = h);
			}),
			this.map(o, (l, h) => {
				const u = i[l];
				if (u) {
					const d = h.map((v) => v.presence_ref),
						f = u.map((v) => v.presence_ref),
						_ = h.filter((v) => f.indexOf(v.presence_ref) < 0),
						y = u.filter((v) => d.indexOf(v.presence_ref) < 0);
					_.length > 0 && (a[l] = _), y.length > 0 && (c[l] = y);
				} else a[l] = h;
			}),
			this.syncDiff(i, { joins: a, leaves: c }, s, r)
		);
	}
	static syncDiff(e, t, s, r) {
		const { joins: i, leaves: o } = {
			joins: this.transformState(t.joins),
			leaves: this.transformState(t.leaves)
		};
		return (
			s || (s = () => {}),
			r || (r = () => {}),
			this.map(i, (a, c) => {
				var l;
				const h = (l = e[a]) !== null && l !== void 0 ? l : [];
				if (((e[a] = this.cloneDeep(c)), h.length > 0)) {
					const u = e[a].map((f) => f.presence_ref),
						d = h.filter((f) => u.indexOf(f.presence_ref) < 0);
					e[a].unshift(...d);
				}
				s(a, h, c);
			}),
			this.map(o, (a, c) => {
				let l = e[a];
				if (!l) return;
				const h = c.map((u) => u.presence_ref);
				(l = l.filter((u) => h.indexOf(u.presence_ref) < 0)),
					(e[a] = l),
					r(a, l, c),
					l.length === 0 && delete e[a];
			}),
			e
		);
	}
	static map(e, t) {
		return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
	}
	static transformState(e) {
		return (
			(e = this.cloneDeep(e)),
			Object.getOwnPropertyNames(e).reduce((t, s) => {
				const r = e[s];
				return (
					'metas' in r
						? (t[s] = r.metas.map(
								(i) => ((i.presence_ref = i.phx_ref), delete i.phx_ref, delete i.phx_ref_prev, i)
							))
						: (t[s] = r),
					t
				);
			}, {})
		);
	}
	static cloneDeep(e) {
		return JSON.parse(JSON.stringify(e));
	}
	onJoin(e) {
		this.caller.onJoin = e;
	}
	onLeave(e) {
		this.caller.onLeave = e;
	}
	onSync(e) {
		this.caller.onSync = e;
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel._joinRef();
	}
}
var m;
(function (n) {
	(n.abstime = 'abstime'),
		(n.bool = 'bool'),
		(n.date = 'date'),
		(n.daterange = 'daterange'),
		(n.float4 = 'float4'),
		(n.float8 = 'float8'),
		(n.int2 = 'int2'),
		(n.int4 = 'int4'),
		(n.int4range = 'int4range'),
		(n.int8 = 'int8'),
		(n.int8range = 'int8range'),
		(n.json = 'json'),
		(n.jsonb = 'jsonb'),
		(n.money = 'money'),
		(n.numeric = 'numeric'),
		(n.oid = 'oid'),
		(n.reltime = 'reltime'),
		(n.text = 'text'),
		(n.time = 'time'),
		(n.timestamp = 'timestamp'),
		(n.timestamptz = 'timestamptz'),
		(n.timetz = 'timetz'),
		(n.tsrange = 'tsrange'),
		(n.tstzrange = 'tstzrange');
})(m || (m = {}));
const ke = (n, e, t = {}) => {
		var s;
		const r = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
		return Object.keys(e).reduce((i, o) => ((i[o] = _t(o, n, e, r)), i), {});
	},
	_t = (n, e, t, s) => {
		const r = e.find((a) => a.name === n),
			i = r == null ? void 0 : r.type,
			o = t[n];
		return i && !s.includes(i) ? qe(i, o) : ue(o);
	},
	qe = (n, e) => {
		if (n.charAt(0) === '_') {
			const t = n.slice(1, n.length);
			return wt(e, t);
		}
		switch (n) {
			case m.bool:
				return vt(e);
			case m.float4:
			case m.float8:
			case m.int2:
			case m.int4:
			case m.int8:
			case m.numeric:
			case m.oid:
				return mt(e);
			case m.json:
			case m.jsonb:
				return yt(e);
			case m.timestamp:
				return bt(e);
			case m.abstime:
			case m.date:
			case m.daterange:
			case m.int4range:
			case m.int8range:
			case m.money:
			case m.reltime:
			case m.text:
			case m.time:
			case m.timestamptz:
			case m.timetz:
			case m.tsrange:
			case m.tstzrange:
				return ue(e);
			default:
				return ue(e);
		}
	},
	ue = (n) => n,
	vt = (n) => {
		switch (n) {
			case 't':
				return !0;
			case 'f':
				return !1;
			default:
				return n;
		}
	},
	mt = (n) => {
		if (typeof n == 'string') {
			const e = parseFloat(n);
			if (!Number.isNaN(e)) return e;
		}
		return n;
	},
	yt = (n) => {
		if (typeof n == 'string')
			try {
				return JSON.parse(n);
			} catch (e) {
				return console.log(`JSON parse error: ${e}`), n;
			}
		return n;
	},
	wt = (n, e) => {
		if (typeof n != 'string') return n;
		const t = n.length - 1,
			s = n[t];
		if (n[0] === '{' && s === '}') {
			let i;
			const o = n.slice(1, t);
			try {
				i = JSON.parse('[' + o + ']');
			} catch {
				i = o ? o.split(',') : [];
			}
			return i.map((a) => qe(e, a));
		}
		return n;
	},
	bt = (n) => (typeof n == 'string' ? n.replace(' ', 'T') : n);
var Se;
(function (n) {
	(n.ALL = '*'), (n.INSERT = 'INSERT'), (n.UPDATE = 'UPDATE'), (n.DELETE = 'DELETE');
})(Se || (Se = {}));
var Te;
(function (n) {
	(n.BROADCAST = 'broadcast'), (n.PRESENCE = 'presence'), (n.POSTGRES_CHANGES = 'postgres_changes');
})(Te || (Te = {}));
var Ee;
(function (n) {
	(n.SUBSCRIBED = 'SUBSCRIBED'),
		(n.TIMED_OUT = 'TIMED_OUT'),
		(n.CLOSED = 'CLOSED'),
		(n.CHANNEL_ERROR = 'CHANNEL_ERROR');
})(Ee || (Ee = {}));
class me {
	constructor(e, t = { config: {} }, s) {
		(this.topic = e),
			(this.params = t),
			(this.socket = s),
			(this.bindings = {}),
			(this.state = S.closed),
			(this.joinedOnce = !1),
			(this.pushBuffer = []),
			(this.subTopic = e.replace(/^realtime:/i, '')),
			(this.params.config = Object.assign(
				{ broadcast: { ack: !1, self: !1 }, presence: { key: '' } },
				t.config
			)),
			(this.timeout = this.socket.timeout),
			(this.joinPush = new re(this, O.join, this.params, this.timeout)),
			(this.rejoinTimer = new Fe(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs)),
			this.joinPush.receive('ok', () => {
				(this.state = S.joined),
					this.rejoinTimer.reset(),
					this.pushBuffer.forEach((r) => r.send()),
					(this.pushBuffer = []);
			}),
			this._onClose(() => {
				this.rejoinTimer.reset(),
					this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
					(this.state = S.closed),
					this.socket._remove(this);
			}),
			this._onError((r) => {
				this._isLeaving() ||
					this._isClosed() ||
					(this.socket.log('channel', `error ${this.topic}`, r),
					(this.state = S.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this.joinPush.receive('timeout', () => {
				this._isJoining() &&
					(this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout),
					(this.state = S.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this._on(O.reply, {}, (r, i) => {
				this._trigger(this._replyEventName(i), r);
			}),
			(this.presence = new K(this)),
			(this.broadcastEndpointURL = this._broadcastEndpointURL());
	}
	subscribe(e, t = this.timeout) {
		var s, r;
		if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
			throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
		{
			const {
				config: { broadcast: i, presence: o }
			} = this.params;
			this._onError((l) => e && e('CHANNEL_ERROR', l)), this._onClose(() => e && e('CLOSED'));
			const a = {},
				c = {
					broadcast: i,
					presence: o,
					postgres_changes:
						(r =
							(s = this.bindings.postgres_changes) === null || s === void 0
								? void 0
								: s.map((l) => l.filter)) !== null && r !== void 0
							? r
							: []
				};
			this.socket.accessToken && (a.access_token = this.socket.accessToken),
				this.updateJoinPayload(Object.assign({ config: c }, a)),
				(this.joinedOnce = !0),
				this._rejoin(t),
				this.joinPush
					.receive('ok', ({ postgres_changes: l }) => {
						var h;
						if (
							(this.socket.accessToken && this.socket.setAuth(this.socket.accessToken),
							l === void 0)
						) {
							e && e('SUBSCRIBED');
							return;
						} else {
							const u = this.bindings.postgres_changes,
								d = (h = u == null ? void 0 : u.length) !== null && h !== void 0 ? h : 0,
								f = [];
							for (let _ = 0; _ < d; _++) {
								const y = u[_],
									{
										filter: { event: v, schema: k, table: A, filter: $ }
									} = y,
									w = l && l[_];
								if (w && w.event === v && w.schema === k && w.table === A && w.filter === $)
									f.push(Object.assign(Object.assign({}, y), { id: w.id }));
								else {
									this.unsubscribe(),
										e &&
											e(
												'CHANNEL_ERROR',
												new Error(
													'mismatch between server and client bindings for postgres changes'
												)
											);
									return;
								}
							}
							(this.bindings.postgres_changes = f), e && e('SUBSCRIBED');
							return;
						}
					})
					.receive('error', (l) => {
						e &&
							e('CHANNEL_ERROR', new Error(JSON.stringify(Object.values(l).join(', ') || 'error')));
					})
					.receive('timeout', () => {
						e && e('TIMED_OUT');
					});
		}
		return this;
	}
	presenceState() {
		return this.presence.state;
	}
	async track(e, t = {}) {
		return await this.send(
			{ type: 'presence', event: 'track', payload: e },
			t.timeout || this.timeout
		);
	}
	async untrack(e = {}) {
		return await this.send({ type: 'presence', event: 'untrack' }, e);
	}
	on(e, t, s) {
		return this._on(e, t, s);
	}
	async send(e, t = {}) {
		var s, r;
		if (!this._canPush() && e.type === 'broadcast') {
			const { event: i, payload: o } = e,
				a = {
					method: 'POST',
					headers: {
						apikey: (s = this.socket.apiKey) !== null && s !== void 0 ? s : '',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ messages: [{ topic: this.subTopic, event: i, payload: o }] })
				};
			try {
				return (
					await this._fetchWithTimeout(
						this.broadcastEndpointURL,
						a,
						(r = t.timeout) !== null && r !== void 0 ? r : this.timeout
					)
				).ok
					? 'ok'
					: 'error';
			} catch (c) {
				return c.name === 'AbortError' ? 'timed out' : 'error';
			}
		} else
			return new Promise((i) => {
				var o, a, c;
				const l = this._push(e.type, e, t.timeout || this.timeout);
				e.type === 'broadcast' &&
					!(
						!(
							(c =
								(a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null ||
								a === void 0
									? void 0
									: a.broadcast) === null || c === void 0
						) && c.ack
					) &&
					i('ok'),
					l.receive('ok', () => i('ok')),
					l.receive('error', () => i('error')),
					l.receive('timeout', () => i('timed out'));
			});
	}
	updateJoinPayload(e) {
		this.joinPush.updatePayload(e);
	}
	unsubscribe(e = this.timeout) {
		this.state = S.leaving;
		const t = () => {
			this.socket.log('channel', `leave ${this.topic}`),
				this._trigger(O.close, 'leave', this._joinRef());
		};
		return (
			this.rejoinTimer.reset(),
			this.joinPush.destroy(),
			new Promise((s) => {
				const r = new re(this, O.leave, {}, e);
				r
					.receive('ok', () => {
						t(), s('ok');
					})
					.receive('timeout', () => {
						t(), s('timed out');
					})
					.receive('error', () => {
						s('error');
					}),
					r.send(),
					this._canPush() || r.trigger('ok', {});
			})
		);
	}
	_broadcastEndpointURL() {
		let e = this.socket.endPoint;
		return (
			(e = e.replace(/^ws/i, 'http')),
			(e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '')),
			e.replace(/\/+$/, '') + '/api/broadcast'
		);
	}
	async _fetchWithTimeout(e, t, s) {
		const r = new AbortController(),
			i = setTimeout(() => r.abort(), s),
			o = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: r.signal }));
		return clearTimeout(i), o;
	}
	_push(e, t, s = this.timeout) {
		if (!this.joinedOnce)
			throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
		let r = new re(this, e, t, s);
		return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
	}
	_onMessage(e, t, s) {
		return t;
	}
	_isMember(e) {
		return this.topic === e;
	}
	_joinRef() {
		return this.joinPush.ref;
	}
	_trigger(e, t, s) {
		var r, i;
		const o = e.toLocaleLowerCase(),
			{ close: a, error: c, leave: l, join: h } = O;
		if (s && [a, c, l, h].indexOf(o) >= 0 && s !== this._joinRef()) return;
		let d = this._onMessage(o, t, s);
		if (t && !d)
			throw 'channel onMessage callbacks must return the payload, modified or unmodified';
		['insert', 'update', 'delete'].includes(o)
			? (r = this.bindings.postgres_changes) === null ||
				r === void 0 ||
				r
					.filter((f) => {
						var _, y, v;
						return (
							((_ = f.filter) === null || _ === void 0 ? void 0 : _.event) === '*' ||
							((v = (y = f.filter) === null || y === void 0 ? void 0 : y.event) === null ||
							v === void 0
								? void 0
								: v.toLocaleLowerCase()) === o
						);
					})
					.map((f) => f.callback(d, s))
			: (i = this.bindings[o]) === null ||
				i === void 0 ||
				i
					.filter((f) => {
						var _, y, v, k, A, $;
						if (['broadcast', 'presence', 'postgres_changes'].includes(o))
							if ('id' in f) {
								const w = f.id,
									Q = (_ = f.filter) === null || _ === void 0 ? void 0 : _.event;
								return (
									w &&
									((y = t.ids) === null || y === void 0 ? void 0 : y.includes(w)) &&
									(Q === '*' ||
										(Q == null ? void 0 : Q.toLocaleLowerCase()) ===
											((v = t.data) === null || v === void 0 ? void 0 : v.type.toLocaleLowerCase()))
								);
							} else {
								const w =
									(A =
										(k = f == null ? void 0 : f.filter) === null || k === void 0
											? void 0
											: k.event) === null || A === void 0
										? void 0
										: A.toLocaleLowerCase();
								return (
									w === '*' ||
									w ===
										(($ = t == null ? void 0 : t.event) === null || $ === void 0
											? void 0
											: $.toLocaleLowerCase())
								);
							}
						else return f.type.toLocaleLowerCase() === o;
					})
					.map((f) => {
						if (typeof d == 'object' && 'ids' in d) {
							const _ = d.data,
								{ schema: y, table: v, commit_timestamp: k, type: A, errors: $ } = _;
							d = Object.assign(
								Object.assign(
									{},
									{
										schema: y,
										table: v,
										commit_timestamp: k,
										eventType: A,
										new: {},
										old: {},
										errors: $
									}
								),
								this._getPayloadRecords(_)
							);
						}
						f.callback(d, s);
					});
	}
	_isClosed() {
		return this.state === S.closed;
	}
	_isJoined() {
		return this.state === S.joined;
	}
	_isJoining() {
		return this.state === S.joining;
	}
	_isLeaving() {
		return this.state === S.leaving;
	}
	_replyEventName(e) {
		return `chan_reply_${e}`;
	}
	_on(e, t, s) {
		const r = e.toLocaleLowerCase(),
			i = { type: r, filter: t, callback: s };
		return this.bindings[r] ? this.bindings[r].push(i) : (this.bindings[r] = [i]), this;
	}
	_off(e, t) {
		const s = e.toLocaleLowerCase();
		return (
			(this.bindings[s] = this.bindings[s].filter((r) => {
				var i;
				return !(
					((i = r.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === s &&
					me.isEqual(r.filter, t)
				);
			})),
			this
		);
	}
	static isEqual(e, t) {
		if (Object.keys(e).length !== Object.keys(t).length) return !1;
		for (const s in e) if (e[s] !== t[s]) return !1;
		return !0;
	}
	_rejoinUntilConnected() {
		this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
	}
	_onClose(e) {
		this._on(O.close, {}, e);
	}
	_onError(e) {
		this._on(O.error, {}, (t) => e(t));
	}
	_canPush() {
		return this.socket.isConnected() && this._isJoined();
	}
	_rejoin(e = this.timeout) {
		this._isLeaving() ||
			(this.socket._leaveOpenTopic(this.topic), (this.state = S.joining), this.joinPush.resend(e));
	}
	_getPayloadRecords(e) {
		const t = { new: {}, old: {} };
		return (
			(e.type === 'INSERT' || e.type === 'UPDATE') && (t.new = ke(e.columns, e.record)),
			(e.type === 'UPDATE' || e.type === 'DELETE') && (t.old = ke(e.columns, e.old_record)),
			t
		);
	}
}
const kt = () => {},
	St = typeof WebSocket < 'u';
class Tt {
	constructor(e, t) {
		var s;
		(this.accessToken = null),
			(this.apiKey = null),
			(this.channels = []),
			(this.endPoint = ''),
			(this.headers = dt),
			(this.params = {}),
			(this.timeout = Ne),
			(this.heartbeatIntervalMs = 3e4),
			(this.heartbeatTimer = void 0),
			(this.pendingHeartbeatRef = null),
			(this.ref = 0),
			(this.logger = kt),
			(this.conn = null),
			(this.sendBuffer = []),
			(this.serializer = new pt()),
			(this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
			(this._resolveFetch = (i) => {
				let o;
				return (
					i
						? (o = i)
						: typeof fetch > 'u'
							? (o = (...a) =>
									z(() => Promise.resolve().then(() => X), void 0, import.meta.url).then(
										({ default: c }) => c(...a)
									))
							: (o = fetch),
					(...a) => o(...a)
				);
			}),
			(this.endPoint = `${e}/${le.websocket}`),
			t != null && t.transport ? (this.transport = t.transport) : (this.transport = null),
			t != null && t.params && (this.params = t.params),
			t != null &&
				t.headers &&
				(this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
			t != null && t.timeout && (this.timeout = t.timeout),
			t != null && t.logger && (this.logger = t.logger),
			t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
		const r = (s = t == null ? void 0 : t.params) === null || s === void 0 ? void 0 : s.apikey;
		r && ((this.accessToken = r), (this.apiKey = r)),
			(this.reconnectAfterMs =
				t != null && t.reconnectAfterMs
					? t.reconnectAfterMs
					: (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
			(this.encode = t != null && t.encode ? t.encode : (i, o) => o(JSON.stringify(i))),
			(this.decode =
				t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer)),
			(this.reconnectTimer = new Fe(async () => {
				this.disconnect(), this.connect();
			}, this.reconnectAfterMs)),
			(this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch));
	}
	connect() {
		if (!this.conn) {
			if (this.transport) {
				this.conn = new this.transport(this._endPointURL(), void 0, { headers: this.headers });
				return;
			}
			if (St) {
				(this.conn = new WebSocket(this._endPointURL())), this.setupConnection();
				return;
			}
			(this.conn = new Et(this._endPointURL(), void 0, {
				close: () => {
					this.conn = null;
				}
			})),
				z(() => import('./browser.06aa05b2.js').then((e) => e.b), [], import.meta.url).then(
					({ default: e }) => {
						(this.conn = new e(this._endPointURL(), void 0, { headers: this.headers })),
							this.setupConnection();
					}
				);
		}
	}
	disconnect(e, t) {
		this.conn &&
			((this.conn.onclose = function () {}),
			e ? this.conn.close(e, t ?? '') : this.conn.close(),
			(this.conn = null),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.reset());
	}
	getChannels() {
		return this.channels;
	}
	async removeChannel(e) {
		const t = await e.unsubscribe();
		return this.channels.length === 0 && this.disconnect(), t;
	}
	async removeAllChannels() {
		const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
		return this.disconnect(), e;
	}
	log(e, t, s) {
		this.logger(e, t, s);
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case M.connecting:
				return L.Connecting;
			case M.open:
				return L.Open;
			case M.closing:
				return L.Closing;
			default:
				return L.Closed;
		}
	}
	isConnected() {
		return this.connectionState() === L.Open;
	}
	channel(e, t = { config: {} }) {
		const s = new me(`realtime:${e}`, t, this);
		return this.channels.push(s), s;
	}
	push(e) {
		const { topic: t, event: s, payload: r, ref: i } = e,
			o = () => {
				this.encode(e, (a) => {
					var c;
					(c = this.conn) === null || c === void 0 || c.send(a);
				});
			};
		this.log('push', `${t} ${s} (${i})`, r), this.isConnected() ? o() : this.sendBuffer.push(o);
	}
	setAuth(e) {
		(this.accessToken = e),
			this.channels.forEach((t) => {
				e && t.updateJoinPayload({ access_token: e }),
					t.joinedOnce && t._isJoined() && t._push(O.access_token, { access_token: e });
			});
	}
	_makeRef() {
		let e = this.ref + 1;
		return e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString();
	}
	_leaveOpenTopic(e) {
		let t = this.channels.find((s) => s.topic === e && (s._isJoined() || s._isJoining()));
		t && (this.log('transport', `leaving duplicate topic "${e}"`), t.unsubscribe());
	}
	_remove(e) {
		this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
	}
	setupConnection() {
		this.conn &&
			((this.conn.binaryType = 'arraybuffer'),
			(this.conn.onopen = () => this._onConnOpen()),
			(this.conn.onerror = (e) => this._onConnError(e)),
			(this.conn.onmessage = (e) => this._onConnMessage(e)),
			(this.conn.onclose = (e) => this._onConnClose(e)));
	}
	_endPointURL() {
		return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: ft }));
	}
	_onConnMessage(e) {
		this.decode(e.data, (t) => {
			let { topic: s, event: r, payload: i, ref: o } = t;
			((o && o === this.pendingHeartbeatRef) || r === (i == null ? void 0 : i.type)) &&
				(this.pendingHeartbeatRef = null),
				this.log('receive', `${i.status || ''} ${s} ${r} ${(o && '(' + o + ')') || ''}`, i),
				this.channels.filter((a) => a._isMember(s)).forEach((a) => a._trigger(r, i, o)),
				this.stateChangeCallbacks.message.forEach((a) => a(t));
		});
	}
	_onConnOpen() {
		this.log('transport', `connected to ${this._endPointURL()}`),
			this._flushSendBuffer(),
			this.reconnectTimer.reset(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			(this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs)),
			this.stateChangeCallbacks.open.forEach((e) => e());
	}
	_onConnClose(e) {
		this.log('transport', 'close', e),
			this._triggerChanError(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.scheduleTimeout(),
			this.stateChangeCallbacks.close.forEach((t) => t(e));
	}
	_onConnError(e) {
		this.log('transport', e.message),
			this._triggerChanError(),
			this.stateChangeCallbacks.error.forEach((t) => t(e));
	}
	_triggerChanError() {
		this.channels.forEach((e) => e._trigger(O.error));
	}
	_appendParams(e, t) {
		if (Object.keys(t).length === 0) return e;
		const s = e.match(/\?/) ? '&' : '?',
			r = new URLSearchParams(t);
		return `${e}${s}${r}`;
	}
	_flushSendBuffer() {
		this.isConnected() &&
			this.sendBuffer.length > 0 &&
			(this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
	}
	_sendHeartbeat() {
		var e;
		if (this.isConnected()) {
			if (this.pendingHeartbeatRef) {
				(this.pendingHeartbeatRef = null),
					this.log('transport', 'heartbeat timeout. Attempting to re-establish connection'),
					(e = this.conn) === null || e === void 0 || e.close(gt, 'hearbeat timeout');
				return;
			}
			(this.pendingHeartbeatRef = this._makeRef()),
				this.push({
					topic: 'phoenix',
					event: 'heartbeat',
					payload: {},
					ref: this.pendingHeartbeatRef
				}),
				this.setAuth(this.accessToken);
		}
	}
}
class Et {
	constructor(e, t, s) {
		(this.binaryType = 'arraybuffer'),
			(this.onclose = () => {}),
			(this.onerror = () => {}),
			(this.onmessage = () => {}),
			(this.onopen = () => {}),
			(this.readyState = M.connecting),
			(this.send = () => {}),
			(this.url = null),
			(this.url = e),
			(this.close = s.close);
	}
}
class ye extends Error {
	constructor(e) {
		super(e), (this.__isStorageError = !0), (this.name = 'StorageError');
	}
}
function b(n) {
	return typeof n == 'object' && n !== null && '__isStorageError' in n;
}
class Ot extends ye {
	constructor(e, t) {
		super(e), (this.name = 'StorageApiError'), (this.status = t);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class Oe extends ye {
	constructor(e, t) {
		super(e), (this.name = 'StorageUnknownError'), (this.originalError = t);
	}
}
var $t =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
const Me = (n) => {
		let e;
		return (
			n
				? (e = n)
				: typeof fetch > 'u'
					? (e = (...t) =>
							z(() => Promise.resolve().then(() => X), void 0, import.meta.url).then(
								({ default: s }) => s(...t)
							))
					: (e = fetch),
			(...t) => e(...t)
		);
	},
	At = () =>
		$t(void 0, void 0, void 0, function* () {
			return typeof Response > 'u'
				? (yield z(() => Promise.resolve().then(() => X), void 0, import.meta.url)).Response
				: Response;
		});
var B =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
const ie = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n),
	jt = (n, e) =>
		B(void 0, void 0, void 0, function* () {
			const t = yield At();
			n instanceof t
				? n
						.json()
						.then((s) => {
							e(new Ot(ie(s), n.status || 500));
						})
						.catch((s) => {
							e(new Oe(ie(s), s));
						})
				: e(new Oe(ie(n), n));
		}),
	Pt = (n, e, t, s) => {
		const r = { method: n, headers: (e == null ? void 0 : e.headers) || {} };
		return n === 'GET'
			? r
			: ((r.headers = Object.assign(
					{ 'Content-Type': 'application/json' },
					e == null ? void 0 : e.headers
				)),
				(r.body = JSON.stringify(s)),
				Object.assign(Object.assign({}, r), t));
	};
function te(n, e, t, s, r, i) {
	return B(this, void 0, void 0, function* () {
		return new Promise((o, a) => {
			n(t, Pt(e, s, r, i))
				.then((c) => {
					if (!c.ok) throw c;
					return s != null && s.noResolveJson ? c : c.json();
				})
				.then((c) => o(c))
				.catch((c) => jt(c, a));
		});
	});
}
function de(n, e, t, s) {
	return B(this, void 0, void 0, function* () {
		return te(n, 'GET', e, t, s);
	});
}
function P(n, e, t, s, r) {
	return B(this, void 0, void 0, function* () {
		return te(n, 'POST', e, s, r, t);
	});
}
function Rt(n, e, t, s, r) {
	return B(this, void 0, void 0, function* () {
		return te(n, 'PUT', e, s, r, t);
	});
}
function ze(n, e, t, s, r) {
	return B(this, void 0, void 0, function* () {
		return te(n, 'DELETE', e, s, r, t);
	});
}
var T =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
const Ct = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
	$e = { cacheControl: '3600', contentType: 'text/plain;charset=UTF-8', upsert: !1 };
class It {
	constructor(e, t = {}, s, r) {
		(this.url = e), (this.headers = t), (this.bucketId = s), (this.fetch = Me(r));
	}
	uploadOrUpdate(e, t, s, r) {
		return T(this, void 0, void 0, function* () {
			try {
				let i;
				const o = Object.assign(Object.assign({}, $e), r),
					a = Object.assign(
						Object.assign({}, this.headers),
						e === 'POST' && { 'x-upsert': String(o.upsert) }
					);
				typeof Blob < 'u' && s instanceof Blob
					? ((i = new FormData()), i.append('cacheControl', o.cacheControl), i.append('', s))
					: typeof FormData < 'u' && s instanceof FormData
						? ((i = s), i.append('cacheControl', o.cacheControl))
						: ((i = s),
							(a['cache-control'] = `max-age=${o.cacheControl}`),
							(a['content-type'] = o.contentType));
				const c = this._removeEmptyFolders(t),
					l = this._getFinalPath(c),
					h = yield this.fetch(
						`${this.url}/object/${l}`,
						Object.assign(
							{ method: e, body: i, headers: a },
							o != null && o.duplex ? { duplex: o.duplex } : {}
						)
					),
					u = yield h.json();
				return h.ok
					? { data: { path: c, id: u.Id, fullPath: u.Key }, error: null }
					: { data: null, error: u };
			} catch (i) {
				if (b(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	upload(e, t, s) {
		return T(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('POST', e, t, s);
		});
	}
	uploadToSignedUrl(e, t, s, r) {
		return T(this, void 0, void 0, function* () {
			const i = this._removeEmptyFolders(e),
				o = this._getFinalPath(i),
				a = new URL(this.url + `/object/upload/sign/${o}`);
			a.searchParams.set('token', t);
			try {
				let c;
				const l = Object.assign({ upsert: $e.upsert }, r),
					h = Object.assign(Object.assign({}, this.headers), { 'x-upsert': String(l.upsert) });
				typeof Blob < 'u' && s instanceof Blob
					? ((c = new FormData()), c.append('cacheControl', l.cacheControl), c.append('', s))
					: typeof FormData < 'u' && s instanceof FormData
						? ((c = s), c.append('cacheControl', l.cacheControl))
						: ((c = s),
							(h['cache-control'] = `max-age=${l.cacheControl}`),
							(h['content-type'] = l.contentType));
				const u = yield this.fetch(a.toString(), { method: 'PUT', body: c, headers: h }),
					d = yield u.json();
				return u.ok
					? { data: { path: i, fullPath: d.Key }, error: null }
					: { data: null, error: d };
			} catch (c) {
				if (b(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	createSignedUploadUrl(e) {
		return T(this, void 0, void 0, function* () {
			try {
				let t = this._getFinalPath(e);
				const s = yield P(
						this.fetch,
						`${this.url}/object/upload/sign/${t}`,
						{},
						{ headers: this.headers }
					),
					r = new URL(this.url + s.url),
					i = r.searchParams.get('token');
				if (!i) throw new ye('No token returned by API');
				return { data: { signedUrl: r.toString(), path: e, token: i }, error: null };
			} catch (t) {
				if (b(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	update(e, t, s) {
		return T(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('PUT', e, t, s);
		});
	}
	move(e, t) {
		return T(this, void 0, void 0, function* () {
			try {
				return {
					data: yield P(
						this.fetch,
						`${this.url}/object/move`,
						{ bucketId: this.bucketId, sourceKey: e, destinationKey: t },
						{ headers: this.headers }
					),
					error: null
				};
			} catch (s) {
				if (b(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	copy(e, t) {
		return T(this, void 0, void 0, function* () {
			try {
				return {
					data: {
						path: (yield P(
							this.fetch,
							`${this.url}/object/copy`,
							{ bucketId: this.bucketId, sourceKey: e, destinationKey: t },
							{ headers: this.headers }
						)).Key
					},
					error: null
				};
			} catch (s) {
				if (b(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	createSignedUrl(e, t, s) {
		return T(this, void 0, void 0, function* () {
			try {
				let r = this._getFinalPath(e),
					i = yield P(
						this.fetch,
						`${this.url}/object/sign/${r}`,
						Object.assign(
							{ expiresIn: t },
							s != null && s.transform ? { transform: s.transform } : {}
						),
						{ headers: this.headers }
					);
				const o = s != null && s.download ? `&download=${s.download === !0 ? '' : s.download}` : '';
				return (
					(i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }), { data: i, error: null }
				);
			} catch (r) {
				if (b(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	createSignedUrls(e, t, s) {
		return T(this, void 0, void 0, function* () {
			try {
				const r = yield P(
						this.fetch,
						`${this.url}/object/sign/${this.bucketId}`,
						{ expiresIn: t, paths: e },
						{ headers: this.headers }
					),
					i = s != null && s.download ? `&download=${s.download === !0 ? '' : s.download}` : '';
				return {
					data: r.map((o) =>
						Object.assign(Object.assign({}, o), {
							signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
						})
					),
					error: null
				};
			} catch (r) {
				if (b(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	download(e, t) {
		return T(this, void 0, void 0, function* () {
			const r =
					typeof (t == null ? void 0 : t.transform) < 'u' ? 'render/image/authenticated' : 'object',
				i = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}),
				o = i ? `?${i}` : '';
			try {
				const a = this._getFinalPath(e);
				return {
					data: yield (yield de(this.fetch, `${this.url}/${r}/${a}${o}`, {
						headers: this.headers,
						noResolveJson: !0
					})).blob(),
					error: null
				};
			} catch (a) {
				if (b(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	getPublicUrl(e, t) {
		const s = this._getFinalPath(e),
			r = [],
			i = t != null && t.download ? `download=${t.download === !0 ? '' : t.download}` : '';
		i !== '' && r.push(i);
		const a = typeof (t == null ? void 0 : t.transform) < 'u' ? 'render/image' : 'object',
			c = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
		c !== '' && r.push(c);
		let l = r.join('&');
		return (
			l !== '' && (l = `?${l}`),
			{ data: { publicUrl: encodeURI(`${this.url}/${a}/public/${s}${l}`) } }
		);
	}
	remove(e) {
		return T(this, void 0, void 0, function* () {
			try {
				return {
					data: yield ze(
						this.fetch,
						`${this.url}/object/${this.bucketId}`,
						{ prefixes: e },
						{ headers: this.headers }
					),
					error: null
				};
			} catch (t) {
				if (b(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	list(e, t, s) {
		return T(this, void 0, void 0, function* () {
			try {
				const r = Object.assign(Object.assign(Object.assign({}, Ct), t), { prefix: e || '' });
				return {
					data: yield P(
						this.fetch,
						`${this.url}/object/list/${this.bucketId}`,
						r,
						{ headers: this.headers },
						s
					),
					error: null
				};
			} catch (r) {
				if (b(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	_getFinalPath(e) {
		return `${this.bucketId}/${e}`;
	}
	_removeEmptyFolders(e) {
		return e.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
	}
	transformOptsToQueryString(e) {
		const t = [];
		return (
			e.width && t.push(`width=${e.width}`),
			e.height && t.push(`height=${e.height}`),
			e.resize && t.push(`resize=${e.resize}`),
			e.format && t.push(`format=${e.format}`),
			e.quality && t.push(`quality=${e.quality}`),
			t.join('&')
		);
	}
}
const xt = '2.5.5',
	Lt = { 'X-Client-Info': `storage-js/${xt}` };
var D =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
class Ut {
	constructor(e, t = {}, s) {
		(this.url = e), (this.headers = Object.assign(Object.assign({}, Lt), t)), (this.fetch = Me(s));
	}
	listBuckets() {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield de(this.fetch, `${this.url}/bucket`, { headers: this.headers }),
					error: null
				};
			} catch (e) {
				if (b(e)) return { data: null, error: e };
				throw e;
			}
		});
	}
	getBucket(e) {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield de(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
					error: null
				};
			} catch (t) {
				if (b(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	createBucket(e, t = { public: !1 }) {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield P(
						this.fetch,
						`${this.url}/bucket`,
						{
							id: e,
							name: e,
							public: t.public,
							file_size_limit: t.fileSizeLimit,
							allowed_mime_types: t.allowedMimeTypes
						},
						{ headers: this.headers }
					),
					error: null
				};
			} catch (s) {
				if (b(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	updateBucket(e, t) {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Rt(
						this.fetch,
						`${this.url}/bucket/${e}`,
						{
							id: e,
							name: e,
							public: t.public,
							file_size_limit: t.fileSizeLimit,
							allowed_mime_types: t.allowedMimeTypes
						},
						{ headers: this.headers }
					),
					error: null
				};
			} catch (s) {
				if (b(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	emptyBucket(e) {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield P(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }),
					error: null
				};
			} catch (t) {
				if (b(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	deleteBucket(e) {
		return D(this, void 0, void 0, function* () {
			try {
				return {
					data: yield ze(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }),
					error: null
				};
			} catch (t) {
				if (b(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
}
class Dt extends Ut {
	constructor(e, t = {}, s) {
		super(e, t, s);
	}
	from(e) {
		return new It(this.url, this.headers, e, this.fetch);
	}
}
const Nt = '2.43.4';
let G = '';
typeof Deno < 'u'
	? (G = 'deno')
	: typeof document < 'u'
		? (G = 'web')
		: typeof navigator < 'u' && navigator.product === 'ReactNative'
			? (G = 'react-native')
			: (G = 'node');
const Ft = { 'X-Client-Info': `supabase-js-${G}/${Nt}` },
	qt = { headers: Ft },
	Mt = { schema: 'public' },
	zt = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, flowType: 'implicit' },
	Jt = {};
var Bt =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
const Ht = (n) => {
		let e;
		return n ? (e = n) : typeof fetch > 'u' ? (e = _e) : (e = fetch), (...t) => e(...t);
	},
	Gt = () => (typeof Headers > 'u' ? De : Headers),
	Kt = (n, e, t) => {
		const s = Ht(t),
			r = Gt();
		return (i, o) =>
			Bt(void 0, void 0, void 0, function* () {
				var a;
				const c = (a = yield e()) !== null && a !== void 0 ? a : n;
				let l = new r(o == null ? void 0 : o.headers);
				return (
					l.has('apikey') || l.set('apikey', n),
					l.has('Authorization') || l.set('Authorization', `Bearer ${c}`),
					s(i, Object.assign(Object.assign({}, o), { headers: l }))
				);
			});
	};
function Vt(n) {
	return n.replace(/\/$/, '');
}
function Wt(n, e) {
	const { db: t, auth: s, realtime: r, global: i } = n,
		{ db: o, auth: a, realtime: c, global: l } = e;
	return {
		db: Object.assign(Object.assign({}, o), t),
		auth: Object.assign(Object.assign({}, a), s),
		realtime: Object.assign(Object.assign({}, c), r),
		global: Object.assign(Object.assign({}, l), i)
	};
}
const Je = '2.64.2',
	Xt = 'http://localhost:9999',
	Qt = 'supabase.auth.token',
	Yt = { 'X-Client-Info': `gotrue-js/${Je}` },
	Ae = 10,
	fe = 'X-Supabase-Api-Version',
	Be = { '2024-01-01': { timestamp: Date.parse('2024-01-01T00:00:00.0Z'), name: '2024-01-01' } };
function Zt(n) {
	return Math.round(Date.now() / 1e3) + n;
}
function es() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (n) {
		const e = (Math.random() * 16) | 0;
		return (n == 'x' ? e : (e & 3) | 8).toString(16);
	});
}
const E = () => typeof document < 'u',
	C = { tested: !1, writable: !1 },
	V = () => {
		if (!E()) return !1;
		try {
			if (typeof globalThis.localStorage != 'object') return !1;
		} catch {
			return !1;
		}
		if (C.tested) return C.writable;
		const n = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(n, n),
				globalThis.localStorage.removeItem(n),
				(C.tested = !0),
				(C.writable = !0);
		} catch {
			(C.tested = !0), (C.writable = !1);
		}
		return C.writable;
	};
function ne(n) {
	const e = {},
		t = new URL(n);
	if (t.hash && t.hash[0] === '#')
		try {
			new URLSearchParams(t.hash.substring(1)).forEach((r, i) => {
				e[i] = r;
			});
		} catch {}
	return (
		t.searchParams.forEach((s, r) => {
			e[r] = s;
		}),
		e
	);
}
const He = (n) => {
		let e;
		return (
			n
				? (e = n)
				: typeof fetch > 'u'
					? (e = (...t) =>
							z(() => Promise.resolve().then(() => X), void 0, import.meta.url).then(
								({ default: s }) => s(...t)
							))
					: (e = fetch),
			(...t) => e(...t)
		);
	},
	ts = (n) =>
		typeof n == 'object' &&
		n !== null &&
		'status' in n &&
		'ok' in n &&
		'json' in n &&
		typeof n.json == 'function',
	Ge = async (n, e, t) => {
		await n.setItem(e, JSON.stringify(t));
	},
	Y = async (n, e) => {
		const t = await n.getItem(e);
		if (!t) return null;
		try {
			return JSON.parse(t);
		} catch {
			return t;
		}
	},
	oe = async (n, e) => {
		await n.removeItem(e);
	};
function ss(n) {
	const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	let t = '',
		s,
		r,
		i,
		o,
		a,
		c,
		l,
		h = 0;
	for (n = n.replace('-', '+').replace('_', '/'); h < n.length; )
		(o = e.indexOf(n.charAt(h++))),
			(a = e.indexOf(n.charAt(h++))),
			(c = e.indexOf(n.charAt(h++))),
			(l = e.indexOf(n.charAt(h++))),
			(s = (o << 2) | (a >> 4)),
			(r = ((a & 15) << 4) | (c >> 2)),
			(i = ((c & 3) << 6) | l),
			(t = t + String.fromCharCode(s)),
			c != 64 && r != 0 && (t = t + String.fromCharCode(r)),
			l != 64 && i != 0 && (t = t + String.fromCharCode(i));
	return t;
}
class se {
	constructor() {
		this.promise = new se.promiseConstructor((e, t) => {
			(this.resolve = e), (this.reject = t);
		});
	}
}
se.promiseConstructor = Promise;
function je(n) {
	const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
		t = n.split('.');
	if (t.length !== 3) throw new Error('JWT is not valid: not a JWT structure');
	if (!e.test(t[1])) throw new Error('JWT is not valid: payload is not in base64url format');
	const s = t[1];
	return JSON.parse(ss(s));
}
async function rs(n) {
	return await new Promise((e) => {
		setTimeout(() => e(null), n);
	});
}
function is(n, e) {
	return new Promise((s, r) => {
		(async () => {
			for (let i = 0; i < 1 / 0; i++)
				try {
					const o = await n(i);
					if (!e(i, null, o)) {
						s(o);
						return;
					}
				} catch (o) {
					if (!e(i, o)) {
						r(o);
						return;
					}
				}
		})();
	});
}
function ns(n) {
	return ('0' + n.toString(16)).substr(-2);
}
function os() {
	const e = new Uint32Array(56);
	if (typeof crypto > 'u') {
		const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
			s = t.length;
		let r = '';
		for (let i = 0; i < 56; i++) r += t.charAt(Math.floor(Math.random() * s));
		return r;
	}
	return crypto.getRandomValues(e), Array.from(e, ns).join('');
}
async function as(n) {
	const t = new TextEncoder().encode(n),
		s = await crypto.subtle.digest('SHA-256', t),
		r = new Uint8Array(s);
	return Array.from(r)
		.map((i) => String.fromCharCode(i))
		.join('');
}
function cs(n) {
	return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function hs(n) {
	if (!(typeof crypto < 'u' && typeof crypto.subtle < 'u' && typeof TextEncoder < 'u'))
		return (
			console.warn(
				'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
			),
			n
		);
	const t = await as(n);
	return cs(t);
}
async function N(n, e, t = !1) {
	const s = os();
	let r = s;
	t && (r += '/PASSWORD_RECOVERY'), await Ge(n, `${e}-code-verifier`, r);
	const i = await hs(s);
	return [i, s === i ? 'plain' : 's256'];
}
const ls = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function us(n) {
	const e = n.headers.get(fe);
	if (!e || !e.match(ls)) return null;
	try {
		return new Date(`${e}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
class we extends Error {
	constructor(e, t, s) {
		super(e),
			(this.__isAuthError = !0),
			(this.name = 'AuthError'),
			(this.status = t),
			(this.code = s);
	}
}
function g(n) {
	return typeof n == 'object' && n !== null && '__isAuthError' in n;
}
class ds extends we {
	constructor(e, t, s) {
		super(e, t, s), (this.name = 'AuthApiError'), (this.status = t), (this.code = s);
	}
}
function fs(n) {
	return g(n) && n.name === 'AuthApiError';
}
class Ke extends we {
	constructor(e, t) {
		super(e), (this.name = 'AuthUnknownError'), (this.originalError = t);
	}
}
class U extends we {
	constructor(e, t, s, r) {
		super(e, s, r), (this.name = t), (this.status = s);
	}
}
class I extends U {
	constructor() {
		super('Auth session missing!', 'AuthSessionMissingError', 400, void 0);
	}
}
class ae extends U {
	constructor() {
		super('Auth session or user missing', 'AuthInvalidTokenResponseError', 500, void 0);
	}
}
class Z extends U {
	constructor(e) {
		super(e, 'AuthInvalidCredentialsError', 400, void 0);
	}
}
class ee extends U {
	constructor(e, t = null) {
		super(e, 'AuthImplicitGrantRedirectError', 500, void 0),
			(this.details = null),
			(this.details = t);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status, details: this.details };
	}
}
class Pe extends U {
	constructor(e, t = null) {
		super(e, 'AuthPKCEGrantCodeExchangeError', 500, void 0),
			(this.details = null),
			(this.details = t);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status, details: this.details };
	}
}
class ge extends U {
	constructor(e, t) {
		super(e, 'AuthRetryableFetchError', t, void 0);
	}
}
function ce(n) {
	return g(n) && n.name === 'AuthRetryableFetchError';
}
class Re extends U {
	constructor(e, t, s) {
		super(e, 'AuthWeakPasswordError', t, 'weak_password'), (this.reasons = s);
	}
}
var gs =
	(globalThis && globalThis.__rest) ||
	function (n, e) {
		var t = {};
		for (var s in n)
			Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
		if (n != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
				e.indexOf(s[r]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(n, s[r]) &&
					(t[s[r]] = n[s[r]]);
		return t;
	};
const x = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n),
	ps = [502, 503, 504];
async function Ce(n) {
	var e;
	if (!ts(n)) throw new ge(x(n), 0);
	if (ps.includes(n.status)) throw new ge(x(n), n.status);
	let t;
	try {
		t = await n.json();
	} catch (i) {
		throw new Ke(x(i), i);
	}
	let s;
	const r = us(n);
	if (
		(r &&
		r.getTime() >= Be['2024-01-01'].timestamp &&
		typeof t == 'object' &&
		t &&
		typeof t.code == 'string'
			? (s = t.code)
			: typeof t == 'object' && t && typeof t.error_code == 'string' && (s = t.error_code),
		s)
	) {
		if (s === 'weak_password')
			throw new Re(
				x(t),
				n.status,
				((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []
			);
	} else if (
		typeof t == 'object' &&
		t &&
		typeof t.weak_password == 'object' &&
		t.weak_password &&
		Array.isArray(t.weak_password.reasons) &&
		t.weak_password.reasons.length &&
		t.weak_password.reasons.reduce((i, o) => i && typeof o == 'string', !0)
	)
		throw new Re(x(t), n.status, t.weak_password.reasons);
	throw new ds(x(t), n.status || 500, s);
}
const _s = (n, e, t, s) => {
	const r = { method: n, headers: (e == null ? void 0 : e.headers) || {} };
	return n === 'GET'
		? r
		: ((r.headers = Object.assign(
				{ 'Content-Type': 'application/json;charset=UTF-8' },
				e == null ? void 0 : e.headers
			)),
			(r.body = JSON.stringify(s)),
			Object.assign(Object.assign({}, r), t));
};
async function p(n, e, t, s) {
	var r;
	const i = Object.assign({}, s == null ? void 0 : s.headers);
	i[fe] || (i[fe] = Be['2024-01-01'].name),
		s != null && s.jwt && (i.Authorization = `Bearer ${s.jwt}`);
	const o = (r = s == null ? void 0 : s.query) !== null && r !== void 0 ? r : {};
	s != null && s.redirectTo && (o.redirect_to = s.redirectTo);
	const a = Object.keys(o).length ? '?' + new URLSearchParams(o).toString() : '',
		c = await vs(
			n,
			e,
			t + a,
			{ headers: i, noResolveJson: s == null ? void 0 : s.noResolveJson },
			{},
			s == null ? void 0 : s.body
		);
	return s != null && s.xform
		? s == null
			? void 0
			: s.xform(c)
		: { data: Object.assign({}, c), error: null };
}
async function vs(n, e, t, s, r, i) {
	const o = _s(e, s, r, i);
	let a;
	try {
		a = await n(t, Object.assign({}, o));
	} catch (c) {
		throw (console.error(c), new ge(x(c), 0));
	}
	if ((a.ok || (await Ce(a)), s != null && s.noResolveJson)) return a;
	try {
		return await a.json();
	} catch (c) {
		await Ce(c);
	}
}
function j(n) {
	var e;
	let t = null;
	bs(n) && ((t = Object.assign({}, n)), n.expires_at || (t.expires_at = Zt(n.expires_in)));
	const s = (e = n.user) !== null && e !== void 0 ? e : n;
	return { data: { session: t, user: s }, error: null };
}
function Ie(n) {
	const e = j(n);
	return (
		!e.error &&
			n.weak_password &&
			typeof n.weak_password == 'object' &&
			Array.isArray(n.weak_password.reasons) &&
			n.weak_password.reasons.length &&
			n.weak_password.message &&
			typeof n.weak_password.message == 'string' &&
			n.weak_password.reasons.reduce((t, s) => t && typeof s == 'string', !0) &&
			(e.data.weak_password = n.weak_password),
		e
	);
}
function R(n) {
	var e;
	return { data: { user: (e = n.user) !== null && e !== void 0 ? e : n }, error: null };
}
function ms(n) {
	return { data: n, error: null };
}
function ys(n) {
	const { action_link: e, email_otp: t, hashed_token: s, redirect_to: r, verification_type: i } = n,
		o = gs(n, ['action_link', 'email_otp', 'hashed_token', 'redirect_to', 'verification_type']),
		a = { action_link: e, email_otp: t, hashed_token: s, redirect_to: r, verification_type: i },
		c = Object.assign({}, o);
	return { data: { properties: a, user: c }, error: null };
}
function ws(n) {
	return n;
}
function bs(n) {
	return n.access_token && n.refresh_token && n.expires_in;
}
var ks =
	(globalThis && globalThis.__rest) ||
	function (n, e) {
		var t = {};
		for (var s in n)
			Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
		if (n != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
				e.indexOf(s[r]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(n, s[r]) &&
					(t[s[r]] = n[s[r]]);
		return t;
	};
class Ss {
	constructor({ url: e = '', headers: t = {}, fetch: s }) {
		(this.url = e),
			(this.headers = t),
			(this.fetch = He(s)),
			(this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this)
			});
	}
	async signOut(e, t = 'global') {
		try {
			return (
				await p(this.fetch, 'POST', `${this.url}/logout?scope=${t}`, {
					headers: this.headers,
					jwt: e,
					noResolveJson: !0
				}),
				{ data: null, error: null }
			);
		} catch (s) {
			if (g(s)) return { data: null, error: s };
			throw s;
		}
	}
	async inviteUserByEmail(e, t = {}) {
		try {
			return await p(this.fetch, 'POST', `${this.url}/invite`, {
				body: { email: e, data: t.data },
				headers: this.headers,
				redirectTo: t.redirectTo,
				xform: R
			});
		} catch (s) {
			if (g(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async generateLink(e) {
		try {
			const { options: t } = e,
				s = ks(e, ['options']),
				r = Object.assign(Object.assign({}, s), t);
			return (
				'newEmail' in s && ((r.new_email = s == null ? void 0 : s.newEmail), delete r.newEmail),
				await p(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
					body: r,
					headers: this.headers,
					xform: ys,
					redirectTo: t == null ? void 0 : t.redirectTo
				})
			);
		} catch (t) {
			if (g(t)) return { data: { properties: null, user: null }, error: t };
			throw t;
		}
	}
	async createUser(e) {
		try {
			return await p(this.fetch, 'POST', `${this.url}/admin/users`, {
				body: e,
				headers: this.headers,
				xform: R
			});
		} catch (t) {
			if (g(t)) return { data: { user: null }, error: t };
			throw t;
		}
	}
	async listUsers(e) {
		var t, s, r, i, o, a, c;
		try {
			const l = { nextPage: null, lastPage: 0, total: 0 },
				h = await p(this.fetch, 'GET', `${this.url}/admin/users`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page:
							(s =
								(t = e == null ? void 0 : e.page) === null || t === void 0
									? void 0
									: t.toString()) !== null && s !== void 0
								? s
								: '',
						per_page:
							(i =
								(r = e == null ? void 0 : e.perPage) === null || r === void 0
									? void 0
									: r.toString()) !== null && i !== void 0
								? i
								: ''
					},
					xform: ws
				});
			if (h.error) throw h.error;
			const u = await h.json(),
				d = (o = h.headers.get('x-total-count')) !== null && o !== void 0 ? o : 0,
				f =
					(c = (a = h.headers.get('link')) === null || a === void 0 ? void 0 : a.split(',')) !==
						null && c !== void 0
						? c
						: [];
			return (
				f.length > 0 &&
					(f.forEach((_) => {
						const y = parseInt(_.split(';')[0].split('=')[1].substring(0, 1)),
							v = JSON.parse(_.split(';')[1].split('=')[1]);
						l[`${v}Page`] = y;
					}),
					(l.total = parseInt(d))),
				{ data: Object.assign(Object.assign({}, u), l), error: null }
			);
		} catch (l) {
			if (g(l)) return { data: { users: [] }, error: l };
			throw l;
		}
	}
	async getUserById(e) {
		try {
			return await p(this.fetch, 'GET', `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				xform: R
			});
		} catch (t) {
			if (g(t)) return { data: { user: null }, error: t };
			throw t;
		}
	}
	async updateUserById(e, t) {
		try {
			return await p(this.fetch, 'PUT', `${this.url}/admin/users/${e}`, {
				body: t,
				headers: this.headers,
				xform: R
			});
		} catch (s) {
			if (g(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async deleteUser(e, t = !1) {
		try {
			return await p(this.fetch, 'DELETE', `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				body: { should_soft_delete: t },
				xform: R
			});
		} catch (s) {
			if (g(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async _listFactors(e) {
		try {
			const { data: t, error: s } = await p(
				this.fetch,
				'GET',
				`${this.url}/admin/users/${e.userId}/factors`,
				{ headers: this.headers, xform: (r) => ({ data: { factors: r }, error: null }) }
			);
			return { data: t, error: s };
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
	async _deleteFactor(e) {
		try {
			return {
				data: await p(this.fetch, 'DELETE', `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
					headers: this.headers
				}),
				error: null
			};
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
}
const Ts = {
	getItem: (n) => (V() ? globalThis.localStorage.getItem(n) : null),
	setItem: (n, e) => {
		V() && globalThis.localStorage.setItem(n, e);
	},
	removeItem: (n) => {
		V() && globalThis.localStorage.removeItem(n);
	}
};
function xe(n = {}) {
	return {
		getItem: (e) => n[e] || null,
		setItem: (e, t) => {
			n[e] = t;
		},
		removeItem: (e) => {
			delete n[e];
		}
	};
}
function Es() {
	if (typeof globalThis != 'object')
		try {
			Object.defineProperty(Object.prototype, '__magic__', {
				get: function () {
					return this;
				},
				configurable: !0
			}),
				(__magic__.globalThis = __magic__),
				delete Object.prototype.__magic__;
		} catch {
			typeof self < 'u' && (self.globalThis = self);
		}
}
const F = {
	debug: !!(
		globalThis &&
		V() &&
		globalThis.localStorage &&
		globalThis.localStorage.getItem('supabase.gotrue-js.locks.debug') === 'true'
	)
};
class Ve extends Error {
	constructor(e) {
		super(e), (this.isAcquireTimeout = !0);
	}
}
class Os extends Ve {}
async function $s(n, e, t) {
	F.debug && console.log('@supabase/gotrue-js: navigatorLock: acquire lock', n, e);
	const s = new globalThis.AbortController();
	return (
		e > 0 &&
			setTimeout(() => {
				s.abort(),
					F.debug && console.log('@supabase/gotrue-js: navigatorLock acquire timed out', n);
			}, e),
		await globalThis.navigator.locks.request(
			n,
			e === 0 ? { mode: 'exclusive', ifAvailable: !0 } : { mode: 'exclusive', signal: s.signal },
			async (r) => {
				if (r) {
					F.debug && console.log('@supabase/gotrue-js: navigatorLock: acquired', n, r.name);
					try {
						return await t();
					} finally {
						F.debug && console.log('@supabase/gotrue-js: navigatorLock: released', n, r.name);
					}
				} else {
					if (e === 0)
						throw (
							(F.debug &&
								console.log('@supabase/gotrue-js: navigatorLock: not immediately available', n),
							new Os(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`))
						);
					if (F.debug)
						try {
							const i = await globalThis.navigator.locks.query();
							console.log(
								'@supabase/gotrue-js: Navigator LockManager state',
								JSON.stringify(i, null, '  ')
							);
						} catch (i) {
							console.warn(
								'@supabase/gotrue-js: Error when querying Navigator LockManager state',
								i
							);
						}
					return (
						console.warn(
							'@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
						),
						await t()
					);
				}
			}
		)
	);
}
Es();
const As = {
		url: Xt,
		storageKey: Qt,
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		headers: Yt,
		flowType: 'implicit',
		debug: !1,
		hasCustomAuthorizationHeader: !1
	},
	H = 30 * 1e3,
	Le = 3;
async function Ue(n, e, t) {
	return await t();
}
class W {
	constructor(e) {
		var t, s;
		(this.memoryStorage = null),
			(this.stateChangeEmitters = new Map()),
			(this.autoRefreshTicker = null),
			(this.visibilityChangedCallback = null),
			(this.refreshingDeferred = null),
			(this.initializePromise = null),
			(this.detectSessionInUrl = !0),
			(this.hasCustomAuthorizationHeader = !1),
			(this.suppressGetSessionWarning = !1),
			(this.lockAcquired = !1),
			(this.pendingInLock = []),
			(this.broadcastChannel = null),
			(this.logger = console.log),
			(this.instanceID = W.nextInstanceID),
			(W.nextInstanceID += 1),
			this.instanceID > 0 &&
				E() &&
				console.warn(
					'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
				);
		const r = Object.assign(Object.assign({}, As), e);
		if (
			((this.logDebugMessages = !!r.debug),
			typeof r.debug == 'function' && (this.logger = r.debug),
			(this.persistSession = r.persistSession),
			(this.storageKey = r.storageKey),
			(this.autoRefreshToken = r.autoRefreshToken),
			(this.admin = new Ss({ url: r.url, headers: r.headers, fetch: r.fetch })),
			(this.url = r.url),
			(this.headers = r.headers),
			(this.fetch = He(r.fetch)),
			(this.lock = r.lock || Ue),
			(this.detectSessionInUrl = r.detectSessionInUrl),
			(this.flowType = r.flowType),
			(this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader),
			r.lock
				? (this.lock = r.lock)
				: E() &&
					  !((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) &&
					  t.locks
					? (this.lock = $s)
					: (this.lock = Ue),
			(this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
			}),
			this.persistSession
				? r.storage
					? (this.storage = r.storage)
					: V()
						? (this.storage = Ts)
						: ((this.memoryStorage = {}), (this.storage = xe(this.memoryStorage)))
				: ((this.memoryStorage = {}), (this.storage = xe(this.memoryStorage))),
			E() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
		) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
			} catch (i) {
				console.error(
					'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
					i
				);
			}
			(s = this.broadcastChannel) === null ||
				s === void 0 ||
				s.addEventListener('message', async (i) => {
					this._debug('received broadcast notification from other tab or client', i),
						await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
				});
		}
		this.initialize();
	}
	_debug(...e) {
		return (
			this.logDebugMessages &&
				this.logger(`GoTrueClient@${this.instanceID} (${Je}) ${new Date().toISOString()}`, ...e),
			this
		);
	}
	async initialize() {
		return this.initializePromise
			? await this.initializePromise
			: ((this.initializePromise = (async () =>
					await this._acquireLock(-1, async () => await this._initialize()))()),
				await this.initializePromise);
	}
	async _initialize() {
		try {
			const e = E() ? await this._isPKCEFlow() : !1;
			if (
				(this._debug('#_initialize()', 'begin', 'is PKCE flow', e),
				e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
			) {
				const { data: t, error: s } = await this._getSessionFromURL(e);
				if (s)
					return (
						this._debug('#_initialize()', 'error detecting session from URL', s),
						(s == null ? void 0 : s.message) === 'Identity is already linked' ||
						(s == null ? void 0 : s.message) === 'Identity is already linked to another user'
							? { error: s }
							: (await this._removeSession(), { error: s })
					);
				const { session: r, redirectType: i } = t;
				return (
					this._debug('#_initialize()', 'detected session in URL', r, 'redirect type', i),
					await this._saveSession(r),
					setTimeout(async () => {
						i === 'recovery'
							? await this._notifyAllSubscribers('PASSWORD_RECOVERY', r)
							: await this._notifyAllSubscribers('SIGNED_IN', r);
					}, 0),
					{ error: null }
				);
			}
			return await this._recoverAndRefresh(), { error: null };
		} catch (e) {
			return g(e) ? { error: e } : { error: new Ke('Unexpected error during initialization', e) };
		} finally {
			await this._handleVisibilityChange(), this._debug('#_initialize()', 'end');
		}
	}
	async signInAnonymously(e) {
		var t, s, r;
		try {
			await this._removeSession();
			const i = await p(this.fetch, 'POST', `${this.url}/signup`, {
					headers: this.headers,
					body: {
						data:
							(s =
								(t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !==
								null && s !== void 0
								? s
								: {},
						gotrue_meta_security: {
							captcha_token:
								(r = e == null ? void 0 : e.options) === null || r === void 0
									? void 0
									: r.captchaToken
						}
					},
					xform: j
				}),
				{ data: o, error: a } = i;
			if (a || !o) return { data: { user: null, session: null }, error: a };
			const c = o.session,
				l = o.user;
			return (
				o.session &&
					(await this._saveSession(o.session), await this._notifyAllSubscribers('SIGNED_IN', c)),
				{ data: { user: l, session: c }, error: null }
			);
		} catch (i) {
			if (g(i)) return { data: { user: null, session: null }, error: i };
			throw i;
		}
	}
	async signUp(e) {
		var t, s, r;
		try {
			await this._removeSession();
			let i;
			if ('email' in e) {
				const { email: h, password: u, options: d } = e;
				let f = null,
					_ = null;
				this.flowType === 'pkce' && ([f, _] = await N(this.storage, this.storageKey)),
					(i = await p(this.fetch, 'POST', `${this.url}/signup`, {
						headers: this.headers,
						redirectTo: d == null ? void 0 : d.emailRedirectTo,
						body: {
							email: h,
							password: u,
							data: (t = d == null ? void 0 : d.data) !== null && t !== void 0 ? t : {},
							gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken },
							code_challenge: f,
							code_challenge_method: _
						},
						xform: j
					}));
			} else if ('phone' in e) {
				const { phone: h, password: u, options: d } = e;
				i = await p(this.fetch, 'POST', `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: h,
						password: u,
						data: (s = d == null ? void 0 : d.data) !== null && s !== void 0 ? s : {},
						channel: (r = d == null ? void 0 : d.channel) !== null && r !== void 0 ? r : 'sms',
						gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken }
					},
					xform: j
				});
			} else throw new Z('You must provide either an email or phone number and a password');
			const { data: o, error: a } = i;
			if (a || !o) return { data: { user: null, session: null }, error: a };
			const c = o.session,
				l = o.user;
			return (
				o.session &&
					(await this._saveSession(o.session), await this._notifyAllSubscribers('SIGNED_IN', c)),
				{ data: { user: l, session: c }, error: null }
			);
		} catch (i) {
			if (g(i)) return { data: { user: null, session: null }, error: i };
			throw i;
		}
	}
	async signInWithPassword(e) {
		try {
			await this._removeSession();
			let t;
			if ('email' in e) {
				const { email: i, password: o, options: a } = e;
				t = await p(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						email: i,
						password: o,
						gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
					},
					xform: Ie
				});
			} else if ('phone' in e) {
				const { phone: i, password: o, options: a } = e;
				t = await p(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						phone: i,
						password: o,
						gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
					},
					xform: Ie
				});
			} else throw new Z('You must provide either an email or phone number and a password');
			const { data: s, error: r } = t;
			return r
				? { data: { user: null, session: null }, error: r }
				: !s || !s.session || !s.user
					? { data: { user: null, session: null }, error: new ae() }
					: (s.session &&
							(await this._saveSession(s.session),
							await this._notifyAllSubscribers('SIGNED_IN', s.session)),
						{
							data: Object.assign(
								{ user: s.user, session: s.session },
								s.weak_password ? { weakPassword: s.weak_password } : null
							),
							error: r
						});
		} catch (t) {
			if (g(t)) return { data: { user: null, session: null }, error: t };
			throw t;
		}
	}
	async signInWithOAuth(e) {
		var t, s, r, i;
		return (
			await this._removeSession(),
			await this._handleProviderSignIn(e.provider, {
				redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
				scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
				queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
				skipBrowserRedirect:
					(i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
			})
		);
	}
	async exchangeCodeForSession(e) {
		return (
			await this.initializePromise,
			this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
		);
	}
	async _exchangeCodeForSession(e) {
		const t = await Y(this.storage, `${this.storageKey}-code-verifier`),
			[s, r] = (t ?? '').split('/'),
			{ data: i, error: o } = await p(this.fetch, 'POST', `${this.url}/token?grant_type=pkce`, {
				headers: this.headers,
				body: { auth_code: e, code_verifier: s },
				xform: j
			});
		return (
			await oe(this.storage, `${this.storageKey}-code-verifier`),
			o
				? { data: { user: null, session: null, redirectType: null }, error: o }
				: !i || !i.session || !i.user
					? { data: { user: null, session: null, redirectType: null }, error: new ae() }
					: (i.session &&
							(await this._saveSession(i.session),
							await this._notifyAllSubscribers('SIGNED_IN', i.session)),
						{ data: Object.assign(Object.assign({}, i), { redirectType: r ?? null }), error: o })
		);
	}
	async signInWithIdToken(e) {
		await this._removeSession();
		try {
			const { options: t, provider: s, token: r, access_token: i, nonce: o } = e,
				a = await p(this.fetch, 'POST', `${this.url}/token?grant_type=id_token`, {
					headers: this.headers,
					body: {
						provider: s,
						id_token: r,
						access_token: i,
						nonce: o,
						gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
					},
					xform: j
				}),
				{ data: c, error: l } = a;
			return l
				? { data: { user: null, session: null }, error: l }
				: !c || !c.session || !c.user
					? { data: { user: null, session: null }, error: new ae() }
					: (c.session &&
							(await this._saveSession(c.session),
							await this._notifyAllSubscribers('SIGNED_IN', c.session)),
						{ data: c, error: l });
		} catch (t) {
			if (g(t)) return { data: { user: null, session: null }, error: t };
			throw t;
		}
	}
	async signInWithOtp(e) {
		var t, s, r, i, o;
		try {
			if ((await this._removeSession(), 'email' in e)) {
				const { email: a, options: c } = e;
				let l = null,
					h = null;
				this.flowType === 'pkce' && ([l, h] = await N(this.storage, this.storageKey));
				const { error: u } = await p(this.fetch, 'POST', `${this.url}/otp`, {
					headers: this.headers,
					body: {
						email: a,
						data: (t = c == null ? void 0 : c.data) !== null && t !== void 0 ? t : {},
						create_user:
							(s = c == null ? void 0 : c.shouldCreateUser) !== null && s !== void 0 ? s : !0,
						gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
						code_challenge: l,
						code_challenge_method: h
					},
					redirectTo: c == null ? void 0 : c.emailRedirectTo
				});
				return { data: { user: null, session: null }, error: u };
			}
			if ('phone' in e) {
				const { phone: a, options: c } = e,
					{ data: l, error: h } = await p(this.fetch, 'POST', `${this.url}/otp`, {
						headers: this.headers,
						body: {
							phone: a,
							data: (r = c == null ? void 0 : c.data) !== null && r !== void 0 ? r : {},
							create_user:
								(i = c == null ? void 0 : c.shouldCreateUser) !== null && i !== void 0 ? i : !0,
							gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
							channel: (o = c == null ? void 0 : c.channel) !== null && o !== void 0 ? o : 'sms'
						}
					});
				return {
					data: { user: null, session: null, messageId: l == null ? void 0 : l.message_id },
					error: h
				};
			}
			throw new Z('You must provide either an email or phone number.');
		} catch (a) {
			if (g(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async verifyOtp(e) {
		var t, s;
		try {
			e.type !== 'email_change' && e.type !== 'phone_change' && (await this._removeSession());
			let r, i;
			'options' in e &&
				((r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo),
				(i = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken));
			const { data: o, error: a } = await p(this.fetch, 'POST', `${this.url}/verify`, {
				headers: this.headers,
				body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
				redirectTo: r,
				xform: j
			});
			if (a) throw a;
			if (!o) throw new Error('An error occurred on token verification.');
			const c = o.session,
				l = o.user;
			return (
				c != null &&
					c.access_token &&
					(await this._saveSession(c),
					await this._notifyAllSubscribers(
						e.type == 'recovery' ? 'PASSWORD_RECOVERY' : 'SIGNED_IN',
						c
					)),
				{ data: { user: l, session: c }, error: null }
			);
		} catch (r) {
			if (g(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async signInWithSSO(e) {
		var t, s, r;
		try {
			await this._removeSession();
			let i = null,
				o = null;
			return (
				this.flowType === 'pkce' && ([i, o] = await N(this.storage, this.storageKey)),
				await p(this.fetch, 'POST', `${this.url}/sso`, {
					body: Object.assign(
						Object.assign(
							Object.assign(
								Object.assign(
									Object.assign({}, 'providerId' in e ? { provider_id: e.providerId } : null),
									'domain' in e ? { domain: e.domain } : null
								),
								{
									redirect_to:
										(s = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !==
											null && s !== void 0
											? s
											: void 0
								}
							),
							!((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken
								? { gotrue_meta_security: { captcha_token: e.options.captchaToken } }
								: null
						),
						{ skip_http_redirect: !0, code_challenge: i, code_challenge_method: o }
					),
					headers: this.headers,
					xform: ms
				})
			);
		} catch (i) {
			if (g(i)) return { data: null, error: i };
			throw i;
		}
	}
	async reauthenticate() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._reauthenticate())
		);
	}
	async _reauthenticate() {
		try {
			return await this._useSession(async (e) => {
				const {
					data: { session: t },
					error: s
				} = e;
				if (s) throw s;
				if (!t) throw new I();
				const { error: r } = await p(this.fetch, 'GET', `${this.url}/reauthenticate`, {
					headers: this.headers,
					jwt: t.access_token
				});
				return { data: { user: null, session: null }, error: r };
			});
		} catch (e) {
			if (g(e)) return { data: { user: null, session: null }, error: e };
			throw e;
		}
	}
	async resend(e) {
		try {
			e.type != 'email_change' && e.type != 'phone_change' && (await this._removeSession());
			const t = `${this.url}/resend`;
			if ('email' in e) {
				const { email: s, type: r, options: i } = e,
					{ error: o } = await p(this.fetch, 'POST', t, {
						headers: this.headers,
						body: {
							email: s,
							type: r,
							gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
						},
						redirectTo: i == null ? void 0 : i.emailRedirectTo
					});
				return { data: { user: null, session: null }, error: o };
			} else if ('phone' in e) {
				const { phone: s, type: r, options: i } = e,
					{ data: o, error: a } = await p(this.fetch, 'POST', t, {
						headers: this.headers,
						body: {
							phone: s,
							type: r,
							gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
						}
					});
				return {
					data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id },
					error: a
				};
			}
			throw new Z('You must provide either an email or phone number and a type');
		} catch (t) {
			if (g(t)) return { data: { user: null, session: null }, error: t };
			throw t;
		}
	}
	async getSession() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => this._useSession(async (t) => t))
		);
	}
	async _acquireLock(e, t) {
		this._debug('#_acquireLock', 'begin', e);
		try {
			if (this.lockAcquired) {
				const s = this.pendingInLock.length
						? this.pendingInLock[this.pendingInLock.length - 1]
						: Promise.resolve(),
					r = (async () => (await s, await t()))();
				return (
					this.pendingInLock.push(
						(async () => {
							try {
								await r;
							} catch {}
						})()
					),
					r
				);
			}
			return await this.lock(`lock:${this.storageKey}`, e, async () => {
				this._debug('#_acquireLock', 'lock acquired for storage key', this.storageKey);
				try {
					this.lockAcquired = !0;
					const s = t();
					for (
						this.pendingInLock.push(
							(async () => {
								try {
									await s;
								} catch {}
							})()
						),
							await s;
						this.pendingInLock.length;

					) {
						const r = [...this.pendingInLock];
						await Promise.all(r), this.pendingInLock.splice(0, r.length);
					}
					return await s;
				} finally {
					this._debug('#_acquireLock', 'lock released for storage key', this.storageKey),
						(this.lockAcquired = !1);
				}
			});
		} finally {
			this._debug('#_acquireLock', 'end');
		}
	}
	async _useSession(e) {
		this._debug('#_useSession', 'begin');
		try {
			const t = await this.__loadSession();
			return await e(t);
		} finally {
			this._debug('#_useSession', 'end');
		}
	}
	async __loadSession() {
		this._debug('#__loadSession()', 'begin'),
			this.lockAcquired ||
				this._debug('#__loadSession()', 'used outside of an acquired lock!', new Error().stack);
		try {
			let e = null;
			const t = await Y(this.storage, this.storageKey);
			if (
				(this._debug('#getSession()', 'session from storage', t),
				t !== null &&
					(this._isValidSession(t)
						? (e = t)
						: (this._debug('#getSession()', 'session from storage is not valid'),
							await this._removeSession())),
				!e)
			)
				return { data: { session: null }, error: null };
			const s = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
			if (
				(this._debug(
					'#__loadSession()',
					`session has${s ? '' : ' not'} expired`,
					'expires_at',
					e.expires_at
				),
				!s)
			) {
				if (this.storage.isServer) {
					const o = this.suppressGetSessionWarning;
					e = new Proxy(e, {
						get(c, l, h) {
							return (
								!o &&
									l === 'user' &&
									console.warn(
										'Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.'
									),
								Reflect.get(c, l, h)
							);
						}
					});
				}
				return { data: { session: e }, error: null };
			}
			const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
			return i ? { data: { session: null }, error: i } : { data: { session: r }, error: null };
		} finally {
			this._debug('#__loadSession()', 'end');
		}
	}
	async getUser(e) {
		return e
			? await this._getUser(e)
			: (await this.initializePromise,
				await this._acquireLock(-1, async () => await this._getUser()));
	}
	async _getUser(e) {
		try {
			return e
				? await p(this.fetch, 'GET', `${this.url}/user`, {
						headers: this.headers,
						jwt: e,
						xform: R
					})
				: await this._useSession(async (t) => {
						var s, r, i;
						const { data: o, error: a } = t;
						if (a) throw a;
						return !(!((s = o.session) === null || s === void 0) && s.access_token) &&
							!this.hasCustomAuthorizationHeader
							? { data: { user: null }, error: new I() }
							: await p(this.fetch, 'GET', `${this.url}/user`, {
									headers: this.headers,
									jwt:
										(i = (r = o.session) === null || r === void 0 ? void 0 : r.access_token) !==
											null && i !== void 0
											? i
											: void 0,
									xform: R
								});
					});
		} catch (t) {
			if (g(t)) return { data: { user: null }, error: t };
			throw t;
		}
	}
	async updateUser(e, t = {}) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._updateUser(e, t))
		);
	}
	async _updateUser(e, t = {}) {
		try {
			return await this._useSession(async (s) => {
				const { data: r, error: i } = s;
				if (i) throw i;
				if (!r.session) throw new I();
				const o = r.session;
				let a = null,
					c = null;
				this.flowType === 'pkce' &&
					e.email != null &&
					([a, c] = await N(this.storage, this.storageKey));
				const { data: l, error: h } = await p(this.fetch, 'PUT', `${this.url}/user`, {
					headers: this.headers,
					redirectTo: t == null ? void 0 : t.emailRedirectTo,
					body: Object.assign(Object.assign({}, e), {
						code_challenge: a,
						code_challenge_method: c
					}),
					jwt: o.access_token,
					xform: R
				});
				if (h) throw h;
				return (
					(o.user = l.user),
					await this._saveSession(o),
					await this._notifyAllSubscribers('USER_UPDATED', o),
					{ data: { user: o.user }, error: null }
				);
			});
		} catch (s) {
			if (g(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	_decodeJWT(e) {
		return je(e);
	}
	async setSession(e) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._setSession(e))
		);
	}
	async _setSession(e) {
		try {
			if (!e.access_token || !e.refresh_token) throw new I();
			const t = Date.now() / 1e3;
			let s = t,
				r = !0,
				i = null;
			const o = je(e.access_token);
			if ((o.exp && ((s = o.exp), (r = s <= t)), r)) {
				const { session: a, error: c } = await this._callRefreshToken(e.refresh_token);
				if (c) return { data: { user: null, session: null }, error: c };
				if (!a) return { data: { user: null, session: null }, error: null };
				i = a;
			} else {
				const { data: a, error: c } = await this._getUser(e.access_token);
				if (c) throw c;
				(i = {
					access_token: e.access_token,
					refresh_token: e.refresh_token,
					user: a.user,
					token_type: 'bearer',
					expires_in: s - t,
					expires_at: s
				}),
					await this._saveSession(i),
					await this._notifyAllSubscribers('SIGNED_IN', i);
			}
			return { data: { user: i.user, session: i }, error: null };
		} catch (t) {
			if (g(t)) return { data: { session: null, user: null }, error: t };
			throw t;
		}
	}
	async refreshSession(e) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._refreshSession(e))
		);
	}
	async _refreshSession(e) {
		try {
			return await this._useSession(async (t) => {
				var s;
				if (!e) {
					const { data: o, error: a } = t;
					if (a) throw a;
					e = (s = o.session) !== null && s !== void 0 ? s : void 0;
				}
				if (!(e != null && e.refresh_token)) throw new I();
				const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
				return i
					? { data: { user: null, session: null }, error: i }
					: r
						? { data: { user: r.user, session: r }, error: null }
						: { data: { user: null, session: null }, error: null };
			});
		} catch (t) {
			if (g(t)) return { data: { user: null, session: null }, error: t };
			throw t;
		}
	}
	async _getSessionFromURL(e) {
		try {
			if (!E()) throw new ee('No browser detected.');
			if (this.flowType === 'implicit' && !this._isImplicitGrantFlow())
				throw new ee('Not a valid implicit grant flow url.');
			if (this.flowType == 'pkce' && !e) throw new Pe('Not a valid PKCE flow url.');
			const t = ne(window.location.href);
			if (e) {
				if (!t.code) throw new Pe('No code detected.');
				const { data: A, error: $ } = await this._exchangeCodeForSession(t.code);
				if ($) throw $;
				const w = new URL(window.location.href);
				return (
					w.searchParams.delete('code'),
					window.history.replaceState(window.history.state, '', w.toString()),
					{ data: { session: A.session, redirectType: null }, error: null }
				);
			}
			if (t.error || t.error_description || t.error_code)
				throw new ee(t.error_description || 'Error in URL with unspecified error_description', {
					error: t.error || 'unspecified_error',
					code: t.error_code || 'unspecified_code'
				});
			const {
				provider_token: s,
				provider_refresh_token: r,
				access_token: i,
				refresh_token: o,
				expires_in: a,
				expires_at: c,
				token_type: l
			} = t;
			if (!i || !a || !o || !l) throw new ee('No session defined in URL');
			const h = Math.round(Date.now() / 1e3),
				u = parseInt(a);
			let d = h + u;
			c && (d = parseInt(c));
			const f = d - h;
			f * 1e3 <= H &&
				console.warn(
					`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`
				);
			const _ = d - u;
			h - _ >= 120
				? console.warn(
						'@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
						_,
						d,
						h
					)
				: h - _ < 0 &&
					console.warn(
						'@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew',
						_,
						d,
						h
					);
			const { data: y, error: v } = await this._getUser(i);
			if (v) throw v;
			const k = {
				provider_token: s,
				provider_refresh_token: r,
				access_token: i,
				expires_in: u,
				expires_at: d,
				refresh_token: o,
				token_type: l,
				user: y.user
			};
			return (
				(window.location.hash = ''),
				this._debug('#_getSessionFromURL()', 'clearing window.location.hash'),
				{ data: { session: k, redirectType: t.type }, error: null }
			);
		} catch (t) {
			if (g(t)) return { data: { session: null, redirectType: null }, error: t };
			throw t;
		}
	}
	_isImplicitGrantFlow() {
		const e = ne(window.location.href);
		return !!(E() && (e.access_token || e.error_description));
	}
	async _isPKCEFlow() {
		const e = ne(window.location.href),
			t = await Y(this.storage, `${this.storageKey}-code-verifier`);
		return !!(e.code && t);
	}
	async signOut(e = { scope: 'global' }) {
		return (
			await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e))
		);
	}
	async _signOut({ scope: e } = { scope: 'global' }) {
		return await this._useSession(async (t) => {
			var s;
			const { data: r, error: i } = t;
			if (i) return { error: i };
			const o = (s = r.session) === null || s === void 0 ? void 0 : s.access_token;
			if (o) {
				const { error: a } = await this.admin.signOut(o, e);
				if (a && !(fs(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
					return { error: a };
			}
			return (
				e !== 'others' &&
					(await this._removeSession(),
					await oe(this.storage, `${this.storageKey}-code-verifier`),
					await this._notifyAllSubscribers('SIGNED_OUT', null)),
				{ error: null }
			);
		});
	}
	onAuthStateChange(e) {
		const t = es(),
			s = {
				id: t,
				callback: e,
				unsubscribe: () => {
					this._debug('#unsubscribe()', 'state change callback with id removed', t),
						this.stateChangeEmitters.delete(t);
				}
			};
		return (
			this._debug('#onAuthStateChange()', 'registered callback with id', t),
			this.stateChangeEmitters.set(t, s),
			(async () => (
				await this.initializePromise,
				await this._acquireLock(-1, async () => {
					this._emitInitialSession(t);
				})
			))(),
			{ data: { subscription: s } }
		);
	}
	async _emitInitialSession(e) {
		return await this._useSession(async (t) => {
			var s, r;
			try {
				const {
					data: { session: i },
					error: o
				} = t;
				if (o) throw o;
				await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
					? void 0
					: s.callback('INITIAL_SESSION', i)),
					this._debug('INITIAL_SESSION', 'callback id', e, 'session', i);
			} catch (i) {
				await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
					? void 0
					: r.callback('INITIAL_SESSION', null)),
					this._debug('INITIAL_SESSION', 'callback id', e, 'error', i),
					console.error(i);
			}
		});
	}
	async resetPasswordForEmail(e, t = {}) {
		let s = null,
			r = null;
		this.flowType === 'pkce' && ([s, r] = await N(this.storage, this.storageKey, !0));
		try {
			return await p(this.fetch, 'POST', `${this.url}/recover`, {
				body: {
					email: e,
					code_challenge: s,
					code_challenge_method: r,
					gotrue_meta_security: { captcha_token: t.captchaToken }
				},
				headers: this.headers,
				redirectTo: t.redirectTo
			});
		} catch (i) {
			if (g(i)) return { data: null, error: i };
			throw i;
		}
	}
	async getUserIdentities() {
		var e;
		try {
			const { data: t, error: s } = await this.getUser();
			if (s) throw s;
			return {
				data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] },
				error: null
			};
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
	async linkIdentity(e) {
		var t;
		try {
			const { data: s, error: r } = await this._useSession(async (i) => {
				var o, a, c, l, h;
				const { data: u, error: d } = i;
				if (d) throw d;
				const f = await this._getUrlForProvider(
					`${this.url}/user/identities/authorize`,
					e.provider,
					{
						redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
						scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
						queryParams: (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
						skipBrowserRedirect: !0
					}
				);
				return await p(this.fetch, 'GET', f, {
					headers: this.headers,
					jwt:
						(h = (l = u.session) === null || l === void 0 ? void 0 : l.access_token) !== null &&
						h !== void 0
							? h
							: void 0
				});
			});
			if (r) throw r;
			return (
				E() &&
					!(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) &&
					window.location.assign(s == null ? void 0 : s.url),
				{ data: { provider: e.provider, url: s == null ? void 0 : s.url }, error: null }
			);
		} catch (s) {
			if (g(s)) return { data: { provider: e.provider, url: null }, error: s };
			throw s;
		}
	}
	async unlinkIdentity(e) {
		try {
			return await this._useSession(async (t) => {
				var s, r;
				const { data: i, error: o } = t;
				if (o) throw o;
				return await p(this.fetch, 'DELETE', `${this.url}/user/identities/${e.identity_id}`, {
					headers: this.headers,
					jwt:
						(r = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null &&
						r !== void 0
							? r
							: void 0
				});
			});
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
	async _refreshAccessToken(e) {
		const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
		this._debug(t, 'begin');
		try {
			const s = Date.now();
			return await is(
				async (r) => (
					r > 0 && (await rs(200 * Math.pow(2, r - 1))),
					this._debug(t, 'refreshing attempt', r),
					await p(this.fetch, 'POST', `${this.url}/token?grant_type=refresh_token`, {
						body: { refresh_token: e },
						headers: this.headers,
						xform: j
					})
				),
				(r, i) => {
					const o = 200 * Math.pow(2, r);
					return i && ce(i) && Date.now() + o - s < H;
				}
			);
		} catch (s) {
			if ((this._debug(t, 'error', s), g(s)))
				return { data: { session: null, user: null }, error: s };
			throw s;
		} finally {
			this._debug(t, 'end');
		}
	}
	_isValidSession(e) {
		return (
			typeof e == 'object' &&
			e !== null &&
			'access_token' in e &&
			'refresh_token' in e &&
			'expires_at' in e
		);
	}
	async _handleProviderSignIn(e, t) {
		const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
			redirectTo: t.redirectTo,
			scopes: t.scopes,
			queryParams: t.queryParams
		});
		return (
			this._debug('#_handleProviderSignIn()', 'provider', e, 'options', t, 'url', s),
			E() && !t.skipBrowserRedirect && window.location.assign(s),
			{ data: { provider: e, url: s }, error: null }
		);
	}
	async _recoverAndRefresh() {
		var e;
		const t = '#_recoverAndRefresh()';
		this._debug(t, 'begin');
		try {
			const s = await Y(this.storage, this.storageKey);
			if ((this._debug(t, 'session from storage', s), !this._isValidSession(s))) {
				this._debug(t, 'session is not valid'), s !== null && (await this._removeSession());
				return;
			}
			const r = Math.round(Date.now() / 1e3),
				i = ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) < r + Ae;
			if ((this._debug(t, `session has${i ? '' : ' not'} expired with margin of ${Ae}s`), i)) {
				if (this.autoRefreshToken && s.refresh_token) {
					const { error: o } = await this._callRefreshToken(s.refresh_token);
					o &&
						(console.error(o),
						ce(o) ||
							(this._debug(t, 'refresh failed with a non-retryable error, removing the session', o),
							await this._removeSession()));
				}
			} else await this._notifyAllSubscribers('SIGNED_IN', s);
		} catch (s) {
			this._debug(t, 'error', s), console.error(s);
			return;
		} finally {
			this._debug(t, 'end');
		}
	}
	async _callRefreshToken(e) {
		var t, s;
		if (!e) throw new I();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
		this._debug(r, 'begin');
		try {
			this.refreshingDeferred = new se();
			const { data: i, error: o } = await this._refreshAccessToken(e);
			if (o) throw o;
			if (!i.session) throw new I();
			await this._saveSession(i.session),
				await this._notifyAllSubscribers('TOKEN_REFRESHED', i.session);
			const a = { session: i.session, error: null };
			return this.refreshingDeferred.resolve(a), a;
		} catch (i) {
			if ((this._debug(r, 'error', i), g(i))) {
				const o = { session: null, error: i };
				return (
					ce(i) ||
						(await this._removeSession(), await this._notifyAllSubscribers('SIGNED_OUT', null)),
					(t = this.refreshingDeferred) === null || t === void 0 || t.resolve(o),
					o
				);
			}
			throw ((s = this.refreshingDeferred) === null || s === void 0 || s.reject(i), i);
		} finally {
			(this.refreshingDeferred = null), this._debug(r, 'end');
		}
	}
	async _notifyAllSubscribers(e, t, s = !0) {
		const r = `#_notifyAllSubscribers(${e})`;
		this._debug(r, 'begin', t, `broadcast = ${s}`);
		try {
			this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: t });
			const i = [],
				o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
					try {
						await a.callback(e, t);
					} catch (c) {
						i.push(c);
					}
				});
			if ((await Promise.all(o), i.length > 0)) {
				for (let a = 0; a < i.length; a += 1) console.error(i[a]);
				throw i[0];
			}
		} finally {
			this._debug(r, 'end');
		}
	}
	async _saveSession(e) {
		this._debug('#_saveSession()', e),
			(this.suppressGetSessionWarning = !0),
			await Ge(this.storage, this.storageKey, e);
	}
	async _removeSession() {
		this._debug('#_removeSession()'), await oe(this.storage, this.storageKey);
	}
	_removeVisibilityChangedCallback() {
		this._debug('#_removeVisibilityChangedCallback()');
		const e = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			e &&
				E() &&
				window != null &&
				window.removeEventListener &&
				window.removeEventListener('visibilitychange', e);
		} catch (t) {
			console.error('removing visibilitychange callback failed', t);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug('#_startAutoRefresh()');
		const e = setInterval(() => this._autoRefreshTokenTick(), H);
		(this.autoRefreshTicker = e),
			e && typeof e == 'object' && typeof e.unref == 'function'
				? e.unref()
				: typeof Deno < 'u' && typeof Deno.unrefTimer == 'function' && Deno.unrefTimer(e),
			setTimeout(async () => {
				await this.initializePromise, await this._autoRefreshTokenTick();
			}, 0);
	}
	async _stopAutoRefresh() {
		this._debug('#_stopAutoRefresh()');
		const e = this.autoRefreshTicker;
		(this.autoRefreshTicker = null), e && clearInterval(e);
	}
	async startAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
	}
	async stopAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
	}
	async _autoRefreshTokenTick() {
		this._debug('#_autoRefreshTokenTick()', 'begin');
		try {
			await this._acquireLock(0, async () => {
				try {
					const e = Date.now();
					try {
						return await this._useSession(async (t) => {
							const {
								data: { session: s }
							} = t;
							if (!s || !s.refresh_token || !s.expires_at) {
								this._debug('#_autoRefreshTokenTick()', 'no session');
								return;
							}
							const r = Math.floor((s.expires_at * 1e3 - e) / H);
							this._debug(
								'#_autoRefreshTokenTick()',
								`access token expires in ${r} ticks, a tick lasts ${H}ms, refresh threshold is ${Le} ticks`
							),
								r <= Le && (await this._callRefreshToken(s.refresh_token));
						});
					} catch (t) {
						console.error(
							'Auto refresh tick failed with error. This is likely a transient error.',
							t
						);
					}
				} finally {
					this._debug('#_autoRefreshTokenTick()', 'end');
				}
			});
		} catch (e) {
			if (e.isAcquireTimeout || e instanceof Ve)
				this._debug('auto refresh token tick lock not available');
			else throw e;
		}
	}
	async _handleVisibilityChange() {
		if (
			(this._debug('#_handleVisibilityChange()'),
			!E() || !(window != null && window.addEventListener))
		)
			return this.autoRefreshToken && this.startAutoRefresh(), !1;
		try {
			(this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1)),
				window == null ||
					window.addEventListener('visibilitychange', this.visibilityChangedCallback),
				await this._onVisibilityChanged(!0);
		} catch (e) {
			console.error('_handleVisibilityChange', e);
		}
	}
	async _onVisibilityChanged(e) {
		const t = `#_onVisibilityChanged(${e})`;
		this._debug(t, 'visibilityState', document.visibilityState),
			document.visibilityState === 'visible'
				? (this.autoRefreshToken && this._startAutoRefresh(),
					e ||
						(await this.initializePromise,
						await this._acquireLock(-1, async () => {
							if (document.visibilityState !== 'visible') {
								this._debug(
									t,
									'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
								);
								return;
							}
							await this._recoverAndRefresh();
						})))
				: document.visibilityState === 'hidden' && this.autoRefreshToken && this._stopAutoRefresh();
	}
	async _getUrlForProvider(e, t, s) {
		const r = [`provider=${encodeURIComponent(t)}`];
		if (
			(s != null && s.redirectTo && r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
			s != null && s.scopes && r.push(`scopes=${encodeURIComponent(s.scopes)}`),
			this.flowType === 'pkce')
		) {
			const [i, o] = await N(this.storage, this.storageKey),
				a = new URLSearchParams({
					code_challenge: `${encodeURIComponent(i)}`,
					code_challenge_method: `${encodeURIComponent(o)}`
				});
			r.push(a.toString());
		}
		if (s != null && s.queryParams) {
			const i = new URLSearchParams(s.queryParams);
			r.push(i.toString());
		}
		return (
			s != null && s.skipBrowserRedirect && r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
			`${e}?${r.join('&')}`
		);
	}
	async _unenroll(e) {
		try {
			return await this._useSession(async (t) => {
				var s;
				const { data: r, error: i } = t;
				return i
					? { data: null, error: i }
					: await p(this.fetch, 'DELETE', `${this.url}/factors/${e.factorId}`, {
							headers: this.headers,
							jwt:
								(s = r == null ? void 0 : r.session) === null || s === void 0
									? void 0
									: s.access_token
						});
			});
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
	async _enroll(e) {
		try {
			return await this._useSession(async (t) => {
				var s, r;
				const { data: i, error: o } = t;
				if (o) return { data: null, error: o };
				const { data: a, error: c } = await p(this.fetch, 'POST', `${this.url}/factors`, {
					body: { friendly_name: e.friendlyName, factor_type: e.factorType, issuer: e.issuer },
					headers: this.headers,
					jwt:
						(s = i == null ? void 0 : i.session) === null || s === void 0 ? void 0 : s.access_token
				});
				return c
					? { data: null, error: c }
					: (!((r = a == null ? void 0 : a.totp) === null || r === void 0) &&
							r.qr_code &&
							(a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
						{ data: a, error: null });
			});
		} catch (t) {
			if (g(t)) return { data: null, error: t };
			throw t;
		}
	}
	async _verify(e) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (t) => {
					var s;
					const { data: r, error: i } = t;
					if (i) return { data: null, error: i };
					const { data: o, error: a } = await p(
						this.fetch,
						'POST',
						`${this.url}/factors/${e.factorId}/verify`,
						{
							body: { code: e.code, challenge_id: e.challengeId },
							headers: this.headers,
							jwt:
								(s = r == null ? void 0 : r.session) === null || s === void 0
									? void 0
									: s.access_token
						}
					);
					return a
						? { data: null, error: a }
						: (await this._saveSession(
								Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)
							),
							await this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', o),
							{ data: o, error: a });
				});
			} catch (t) {
				if (g(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	async _challenge(e) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (t) => {
					var s;
					const { data: r, error: i } = t;
					return i
						? { data: null, error: i }
						: await p(this.fetch, 'POST', `${this.url}/factors/${e.factorId}/challenge`, {
								headers: this.headers,
								jwt:
									(s = r == null ? void 0 : r.session) === null || s === void 0
										? void 0
										: s.access_token
							});
				});
			} catch (t) {
				if (g(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	async _challengeAndVerify(e) {
		const { data: t, error: s } = await this._challenge({ factorId: e.factorId });
		return s
			? { data: null, error: s }
			: await this._verify({ factorId: e.factorId, challengeId: t.id, code: e.code });
	}
	async _listFactors() {
		const {
			data: { user: e },
			error: t
		} = await this.getUser();
		if (t) return { data: null, error: t };
		const s = (e == null ? void 0 : e.factors) || [],
			r = s.filter((i) => i.factor_type === 'totp' && i.status === 'verified');
		return { data: { all: s, totp: r }, error: null };
	}
	async _getAuthenticatorAssuranceLevel() {
		return this._acquireLock(
			-1,
			async () =>
				await this._useSession(async (e) => {
					var t, s;
					const {
						data: { session: r },
						error: i
					} = e;
					if (i) return { data: null, error: i };
					if (!r)
						return {
							data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
							error: null
						};
					const o = this._decodeJWT(r.access_token);
					let a = null;
					o.aal && (a = o.aal);
					let c = a;
					((s =
						(t = r.user.factors) === null || t === void 0
							? void 0
							: t.filter((u) => u.status === 'verified')) !== null && s !== void 0
						? s
						: []
					).length > 0 && (c = 'aal2');
					const h = o.amr || [];
					return {
						data: { currentLevel: a, nextLevel: c, currentAuthenticationMethods: h },
						error: null
					};
				})
		);
	}
}
W.nextInstanceID = 0;
const js = W;
class Ps extends js {
	constructor(e) {
		super(e);
	}
}
var Rs =
	(globalThis && globalThis.__awaiter) ||
	function (n, e, t, s) {
		function r(i) {
			return i instanceof t
				? i
				: new t(function (o) {
						o(i);
					});
		}
		return new (t || (t = Promise))(function (i, o) {
			function a(h) {
				try {
					l(s.next(h));
				} catch (u) {
					o(u);
				}
			}
			function c(h) {
				try {
					l(s.throw(h));
				} catch (u) {
					o(u);
				}
			}
			function l(h) {
				h.done ? i(h.value) : r(h.value).then(a, c);
			}
			l((s = s.apply(n, e || [])).next());
		});
	};
class Cs {
	constructor(e, t, s) {
		var r, i, o;
		if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
			throw new Error('supabaseUrl is required.');
		if (!t) throw new Error('supabaseKey is required.');
		const a = Vt(e);
		(this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, 'ws')),
			(this.authUrl = `${a}/auth/v1`),
			(this.storageUrl = `${a}/storage/v1`),
			(this.functionsUrl = `${a}/functions/v1`);
		const c = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
			l = {
				db: Mt,
				realtime: Jt,
				auth: Object.assign(Object.assign({}, zt), { storageKey: c }),
				global: qt
			},
			h = Wt(s ?? {}, l);
		(this.storageKey = (r = h.auth.storageKey) !== null && r !== void 0 ? r : ''),
			(this.headers = (i = h.global.headers) !== null && i !== void 0 ? i : {}),
			(this.auth = this._initSupabaseAuthClient(
				(o = h.auth) !== null && o !== void 0 ? o : {},
				this.headers,
				h.global.fetch
			)),
			(this.fetch = Kt(t, this._getAccessToken.bind(this), h.global.fetch)),
			(this.realtime = this._initRealtimeClient(
				Object.assign({ headers: this.headers }, h.realtime)
			)),
			(this.rest = new ve(`${a}/rest/v1`, {
				headers: this.headers,
				schema: h.db.schema,
				fetch: this.fetch
			})),
			this._listenForAuthEvents();
	}
	get functions() {
		return new et(this.functionsUrl, { headers: this.headers, customFetch: this.fetch });
	}
	get storage() {
		return new Dt(this.storageUrl, this.headers, this.fetch);
	}
	from(e) {
		return this.rest.from(e);
	}
	schema(e) {
		return this.rest.schema(e);
	}
	rpc(e, t = {}, s = {}) {
		return this.rest.rpc(e, t, s);
	}
	channel(e, t = { config: {} }) {
		return this.realtime.channel(e, t);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(e) {
		return this.realtime.removeChannel(e);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	_getAccessToken() {
		var e, t;
		return Rs(this, void 0, void 0, function* () {
			const { data: s } = yield this.auth.getSession();
			return (t = (e = s.session) === null || e === void 0 ? void 0 : e.access_token) !== null &&
				t !== void 0
				? t
				: null;
		});
	}
	_initSupabaseAuthClient(
		{
			autoRefreshToken: e,
			persistSession: t,
			detectSessionInUrl: s,
			storage: r,
			storageKey: i,
			flowType: o,
			debug: a
		},
		c,
		l
	) {
		var h;
		const u = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
		return new Ps({
			url: this.authUrl,
			headers: Object.assign(Object.assign({}, u), c),
			storageKey: i,
			autoRefreshToken: e,
			persistSession: t,
			detectSessionInUrl: s,
			storage: r,
			flowType: o,
			debug: a,
			fetch: l,
			hasCustomAuthorizationHeader:
				(h = 'Authorization' in this.headers) !== null && h !== void 0 ? h : !1
		});
	}
	_initRealtimeClient(e) {
		return new Tt(
			this.realtimeUrl,
			Object.assign(Object.assign({}, e), {
				params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params)
			})
		);
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((t, s) => {
			this._handleTokenChanged(t, 'CLIENT', s == null ? void 0 : s.access_token);
		});
	}
	_handleTokenChanged(e, t, s) {
		(e === 'TOKEN_REFRESHED' || e === 'SIGNED_IN') && this.changedAccessToken !== s
			? (this.realtime.setAuth(s ?? null), (this.changedAccessToken = s))
			: e === 'SIGNED_OUT' &&
				(this.realtime.setAuth(this.supabaseKey),
				t == 'STORAGE' && this.auth.signOut(),
				(this.changedAccessToken = void 0));
	}
}
const Is = (n, e, t) => new Cs(n, e, t),
	xs = { schema: 'public', autoRefreshToken: !0 },
	Us = Is(
		'https://meglulbkwhtuzjstgwau.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ2x1bGJrd2h0dXpqc3Rnd2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDg3MjUsImV4cCI6MjAwMDMyNDcyNX0.nPinHAPKykUMzFqwLzFLQ7KsmtMgoJXD0HcCQtggIJI',
		xs
	);
export { Us as s };
