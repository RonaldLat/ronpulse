import { u as c, s as h } from './scheduler.bdb66109.js';
const t = [];
function d(i, l = c) {
	let n;
	const o = new Set();
	function r(e) {
		if (h(i, e) && ((i = e), n)) {
			const b = !t.length;
			for (const s of o) s[1](), t.push(s, i);
			if (b) {
				for (let s = 0; s < t.length; s += 2) t[s][0](t[s + 1]);
				t.length = 0;
			}
		}
	}
	function u(e) {
		r(e(i));
	}
	function _(e, b = c) {
		const s = [e, b];
		return (
			o.add(s),
			o.size === 1 && (n = l(r, u) || c),
			e(i),
			() => {
				o.delete(s), o.size === 0 && n && (n(), (n = null));
			}
		);
	}
	return { set: r, update: u, subscribe: _ };
}
var a;
const p = ((a = globalThis.__sveltekit_rb36ae) == null ? void 0 : a.base) ?? '';
var f;
const q = ((f = globalThis.__sveltekit_rb36ae) == null ? void 0 : f.assets) ?? p;
export { q as a, p as b, d as w };
