function a(e, s) {
	for (var o = 0; o < s.length; o++) {
		const t = s[o];
		if (typeof t != 'string' && !Array.isArray(t)) {
			for (const r in t)
				if (r !== 'default' && !(r in e)) {
					const n = Object.getOwnPropertyDescriptor(t, r);
					n && Object.defineProperty(e, r, n.get ? n : { enumerable: !0, get: () => t[r] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
function u(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var c = function () {
	throw new Error(
		'ws does not work in the browser. Browser clients must use the native WebSocket object'
	);
};
const f = u(c),
	l = a({ __proto__: null, default: f }, [c]);
export { l as b };
