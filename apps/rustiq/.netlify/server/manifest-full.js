export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.png","data/bedroom/andara_side_table_small.jpg","data/bedroom/arend_table_lamp.jpg","data/bedroom/cama_bed_gray.jpg","data/bedroom/casa_bed_white.jpg","data/bedroom/delta_table_lamp.jpg","data/bedroom/edan_side_table.jpg","data/bedroom/flavia_side_table_white.jpg","data/bedroom/fountain_ceiling_light.jpg","data/bedroom/giorgio_bed_white.jpg","data/bedroom/hiro_dresser.jpg","data/bedroom/hiro_modern_bed.jpg","data/bedroom/hiro_nightstand.jpg","data/bedroom/jackson_floor_lamp.jpg","data/bedroom/jalan_ivory_rug_(8'_x_10').jpg","data/bedroom/jalan_silver_rug_(8'_x_10').jpg","data/bedroom/jane_ivory_rug_(8'_x_10').jpg","data/bedroom/jane_silver_gray_rug_(8'_x_10').jpg","data/bedroom/khloe_side_table_black.jpg","data/bedroom/khloe_side_table_white.jpg","data/bedroom/kilim_patchwork_gray_rug.jpg","data/bedroom/lanai_bed_white.jpg","data/bedroom/lina_rug_safari_(5'_x_8').jpg","data/bedroom/lina_rug_safari_(8'_x_10').jpg","data/bedroom/lucide_floor_lamp.jpg","data/bedroom/lucide_table_lamp.jpg","data/bedroom/mateo_peach_cream_rug_(5'_x_8').jpg","data/bedroom/mateo_peach_cream_rug_(8'_x_10').jpg","data/bedroom/mateo_white__gray_rug_(8'_x_10').jpg","data/bedroom/mistral_chandelier.jpg","data/bedroom/movido_bed_gray.jpg","data/bedroom/movido_bed_white.jpg","data/bedroom/new_avery_floor_lamp_matte_gray.jpg","data/bedroom/new_avery_table_lamp_matte_gray.jpg","data/bedroom/new_bodina_floor_lamp_black.jpg","data/bedroom/new_carson_floor_lamp_brushed_brass.jpg","data/bedroom/new_casa_fabric_bed_gray.jpg","data/bedroom/new_clara_side_table_gray.jpg","data/bedroom/new_dreamy_signature_gel_memory_foam_queen_mattress.jpg","data/bedroom/new_elena_rug_silver_(8'_x_10').jpg","data/bedroom/new_envy_bed.jpg","data/bedroom/new_envy_chest.jpg","data/bedroom/new_envy_dresser.jpg","data/bedroom/new_envy_nightstand.jpg","data/bedroom/new_filago_side_table_cognac.jpg","data/bedroom/new_kalmy_comfort_queen_memory_foam_mattress_firm_10\".jpg","data/bedroom/new_kona_side_table.jpg","data/bedroom/new_lotus_ceiling_lamp_matte_black.jpg","data/bedroom/new_strada_dresser_gray.jpg","data/bedroom/new_veneto_dresser_gray.jpg","data/bedroom/new_veneto_dresser_walnut.jpg","data/bedroom/new_veneto_dresser_white.jpg","data/bedroom/new_veneto_nightstand_gray_left.jpg","data/bedroom/new_veneto_nightstand_gray_right.jpg","data/bedroom/new_veneto_nightstand_walnut_left.jpg","data/bedroom/new_veneto_nightstand_walnut_right.jpg","data/bedroom/new_veneto_nightstand_white_left.jpg","data/bedroom/new_veneto_nightstand_white_right.jpg","data/bedroom/ora_side_table_silver.jpg","data/bedroom/rica_side_lamp.jpg","data/bedroom/shadow_chandelier_large.jpg","data/bedroom/strada_dresser_white.jpg","data/bedroom/strada_nightstand_gray.jpg","data/bedroom/strada_nightstand_white.jpg","data/bedroom/titan_floor_lamp_white.jpg","data/bedroom/titan_table_lamp_black.jpg","data/bedroom/waverly_chandelier.jpg","data/bedroom/weston_side_table.jpg","data/bedroom/winston_floor_lamp.jpg","data/bedroom/zary_side_table_walnut.jpg","data/bedroom/zio_side_table_lamp.jpg","data/bedroom.json","data/product_links.json.js","favicon.png","favicon.png.bak","ui/bedroom.jpg","ui/chair.svg","ui/desk.svg","ui/dining.jpg","ui/home_decor.jpg","ui/images1.jpg","ui/living.jpg","ui/office.jpg","ui/outdoor.jpg","ui/sofa.svg","ui/sofa_grey.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".json":"application/json",".js":"application/javascript",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.fce0e294.js","app":"_app/immutable/entry/app.7ed0d042.js","imports":["_app/immutable/entry/start.fce0e294.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/singletons.d7c88a27.js","_app/immutable/chunks/paths.01a3d415.js","_app/immutable/entry/app.7ed0d042.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js"],"stylesheets":[],"fonts":[]},
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
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/account/[userId]",
				pattern: /^\/account\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[categoryName]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"categoryName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[categoryName]/details/[id]",
				pattern: /^\/([^/]+?)\/details\/([^/]+?)\/?$/,
				params: [{"name":"categoryName","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
