export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3dcarousel/img1.jpg","3dcarousel/img2.jpg","3dcarousel/img3.jpg","3dcarousel/img4.jpg","3dcarousel/img5.jpg","3dcarousel/img6.jpg","3dcarousel/img7.jpg","3dcarousel/img8.jpg","3dcarousel/img9.jpg","blogImages/keyboard.jpg","blogImages/newmen-2.jpg","blogImages/newmen-antighosting.jpg","blogImages/newmen-function.jpg","blogImages/newmen-multimedia-keys.jpg","blogImages/newmen-programmable.jpg","blogImages/newmen.jpg","color-logo-bg.svg","css.svg","d3.svg","dark-portofolio.webp","dark-website.webp","dr-portofolio.webp","dynamic.webp","favicon.ico","favicon.png","favicon.webp","firebase-logo.svg","firebase-vertical.svg","folder-structure.webp","furniture-palace-clone-pc.webp","furniture-palace-clone.webp","git-black.svg","git-red.svg","github.svg","ideal-sofas-pc.webp","ideal-sofas.jpeg","js.svg","lat2-smaller.webp","logo-no-bg.svg","map.webp","mc-portofolio.webp","nodejs.svg","nodejs2.png","noisy.png","nuxt-content-blog.webp","nuxt-logo-dark.svg","nuxt-logo-dark.webp","png_20211129_170850_0000.webp","python.png","python.svg","seo.webp","tailwind-play-cdn.webp","tailwind.svg","tailwindcss-default-colours.webp","tailwindv3.webp","tmux.webp","toronto.webp","ubuntu-4.svg","vue.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.13cf7e76.js","app":"_app/immutable/entry/app.7d49757f.js","imports":["_app/immutable/entry/start.13cf7e76.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/singletons.8eb873f3.js","_app/immutable/chunks/index.e49d0d70.js","_app/immutable/entry/app.7d49757f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/epl",
				pattern: /^\/api\/epl\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/epl/_server.js'))
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.ts.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/d3",
				pattern: /^\/d3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dsa",
				pattern: /^\/dsa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/git",
				pattern: /^\/git\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portofolio",
				pattern: /^\/portofolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
