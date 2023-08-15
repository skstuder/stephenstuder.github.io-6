export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/favicon.ico","images/files.jpg","images/portfolio-image.png","images/question-mark.jpg","images/sad-baby.jpg","images/stephen.png","images/website.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.7543d7eb.js","app":"_app/immutable/entry/app.676dd43f.js","imports":["_app/immutable/entry/start.7543d7eb.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/singletons.9ecf5322.js","_app/immutable/entry/app.676dd43f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
