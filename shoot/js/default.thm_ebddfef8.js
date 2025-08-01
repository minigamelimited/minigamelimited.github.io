window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Cover.HeroCard":"resource/eui_skins/cover/HeroCard.exml","Scene.Cover.GunCard":"resource/eui_skins/cover/GunCard.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.BG":"resource/eui_skins/BG.exml","Scene.Game.Pause":"resource/eui_skins/game/Pause.exml","Scene.Game.GameOver":"resource/eui_skins/game/GameOver.exml","Scene.Game.HeroHP":"resource/eui_skins/game/HeroHP.exml","Scene.Game.EnemyHP":"resource/eui_skins/game/EnemyHP.exml","Scene.Game.DropedCoin":"resource/eui_skins/game/DropedCoin.exml"};generateEUI.paths['resource/eui_skins/BG.exml'] = window.skins.BG = (function (_super) {
	__extends(BG, _super);
	function BG() {
		_super.call(this);
		this.skinParts = ["img_8","img_9","img_6","img_7","img_4","img_5","img_2","img_3","img_0","img_1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.img_8_i(),this.img_9_i(),this.img_6_i(),this.img_7_i(),this.img_4_i(),this.img_5_i(),this.img_2_i(),this.img_3_i(),this.img_0_i(),this.img_1_i()];
	}
	var _proto = BG.prototype;

	_proto.img_8_i = function () {
		var t = new eui.Image();
		this.img_8 = t;
		t.verticalCenter = -505;
		t.width = 1024;
		t.x = 0;
		return t;
	};
	_proto.img_9_i = function () {
		var t = new eui.Image();
		this.img_9 = t;
		t.verticalCenter = -505;
		t.width = 1024;
		t.x = 1024;
		t.y = -183;
		return t;
	};
	_proto.img_6_i = function () {
		var t = new eui.Image();
		this.img_6 = t;
		t.verticalCenter = -430;
		t.width = 1024;
		t.x = 0;
		return t;
	};
	_proto.img_7_i = function () {
		var t = new eui.Image();
		this.img_7 = t;
		t.verticalCenter = -430;
		t.width = 1024;
		t.x = 1024;
		t.y = -108;
		return t;
	};
	_proto.img_4_i = function () {
		var t = new eui.Image();
		this.img_4 = t;
		t.verticalCenter = -396;
		t.visible = true;
		t.width = 1024;
		t.x = 0;
		return t;
	};
	_proto.img_5_i = function () {
		var t = new eui.Image();
		this.img_5 = t;
		t.verticalCenter = -396;
		t.visible = true;
		t.width = 1024;
		t.x = 1024;
		t.y = -74;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.verticalCenter = -404;
		t.visible = true;
		t.width = 1024;
		t.x = 0;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.verticalCenter = -404;
		t.visible = true;
		t.width = 1024;
		t.x = 1024;
		t.y = -82;
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.verticalCenter = 0;
		t.width = 1024;
		t.x = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 1024;
		t.x = 1027;
		t.y = -62;
		return t;
	};
	return BG;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = ["img_gold","lbl_gold","grp_gold"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_gold_i()];
	}
	var _proto = Common.prototype;

	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 40;
		t.horizontalCenter = 170;
		t.touchChildren = false;
		t.verticalCenter = -500;
		t.width = 180;
		t.elementsContent = [this._Image1_i(),this.img_gold_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.zjm_dk_jinBi";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_gold_i = function () {
		var t = new eui.Image();
		this.img_gold = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 25;
		t.horizontalCenter = -86;
		t.source = "game0_json.zjm_icon_jinBi";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 31;
		t.right = 0;
		t.size = 30;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/GunCard.exml'] = window.skins.GunCard = (function (_super) {
	__extends(GunCard, _super);
	function GunCard() {
		_super.call(this);
		this.skinParts = ["img_sel","img_gun","lbl_name"];
		
		this.height = 150;
		this.width = 300;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GunCard.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 300;
		t.elementsContent = [this._Image1_i(),this.img_sel_i(),this.img_gun_i(),this.lbl_name_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(36,0,247,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.sd_dk_wuQi_kuang_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 292;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_sel_i = function () {
		var t = new eui.Image();
		this.img_sel = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(25,0,259,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.sd_dk_icon_xuanZe_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 292;
		return t;
	};
	_proto.img_gun_i = function () {
		var t = new eui.Image();
		this.img_gun = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icons_json.gun_0";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 275;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.height = 31;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "right";
		t.verticalAlign = "bottom";
		t.visible = false;
		t.width = 142;
		t.x = 142;
		t.y = 89;
		return t;
	};
	return GunCard;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/HeroCard.exml'] = window.skins.HeroCard = (function (_super) {
	__extends(HeroCard, _super);
	function HeroCard() {
		_super.call(this);
		this.skinParts = ["img_bg","img_hero","img_sel"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HeroCard.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 190;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 190;
		t.elementsContent = [this.img_bg_i(),this.img_hero_i(),this.img_sel_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.height = 182;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.zjm_dk_touXiang_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 182;
		t.x = 29.000000000000057;
		t.y = 28.999999999999993;
		return t;
	};
	_proto.img_hero_i = function () {
		var t = new eui.Image();
		this.img_hero = t;
		t.height = 160;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icons_json.hero_幽梦猎手";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 160;
		t.x = 39;
		t.y = 38.99999999999999;
		return t;
	};
	_proto.img_sel_i = function () {
		var t = new eui.Image();
		this.img_sel = t;
		t.height = 182;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.sd_dk_icon_xuanZe_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 182;
		t.x = 29.000000000000057;
		t.y = 28.999999999999993;
		return t;
	};
	return HeroCard;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_cover","rt_heroBG","grp_heroBG","grp_weapon","grp_character","lbl_lv","grp_start","grp_mainUI","img_back","lst_0","scl_0","lst_1","scl_1","grp_buy","grp_select","lbl_price","grp_price","grp_heroUI"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_cover_i(),this.grp_heroBG_i(),this._Image2_i(),this._Rect1_i(),this.grp_mainUI_i(),this.grp_heroUI_i()];
	}
	var _proto = Main.prototype;

	_proto.grp_cover_i = function () {
		var t = new eui.Group();
		this.grp_cover = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = -248;
		t.width = 640;
		return t;
	};
	_proto.grp_heroBG_i = function () {
		var t = new eui.Group();
		this.grp_heroBG = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.rt_heroBG_i(),this._Image1_i()];
		return t;
	};
	_proto.rt_heroBG_i = function () {
		var t = new eui.Rect();
		this.rt_heroBG = t;
		t.alpha = 1;
		t.bottom = -200;
		t.fillColor = 0x686C89;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -200;
		t.visible = true;
		t.x = 0;
		t.y = -200;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 454;
		t.height = 1000;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bj_home_jpg";
		t.width = 800;
		t.x = -79;
		t.y = -318;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 352.325;
		t.horizontalCenter = 0;
		t.source = "bottom_png";
		t.verticalCenter = 292;
		t.visible = true;
		t.width = 640;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 310;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 623;
		t.visible = true;
		return t;
	};
	_proto.grp_mainUI_i = function () {
		var t = new eui.Group();
		this.grp_mainUI = t;
		t.height = 1139;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this.grp_weapon_i(),this.grp_character_i(),this.grp_start_i()];
		return t;
	};
	_proto.grp_weapon_i = function () {
		var t = new eui.Group();
		this.grp_weapon = t;
		t.height = 150;
		t.horizontalCenter = 130;
		t.touchChildren = false;
		t.verticalCenter = 336;
		t.width = 150;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_3";
		t.verticalCenter = 44;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_gun";
		t.verticalCenter = -22;
		t.width = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.height = 41;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Weapon";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 46;
		t.width = 140;
		return t;
	};
	_proto.grp_character_i = function () {
		var t = new eui.Group();
		this.grp_character = t;
		t.height = 150;
		t.horizontalCenter = -131;
		t.touchChildren = false;
		t.verticalCenter = 336;
		t.width = 150;
		t.x = 124;
		t.y = 839;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_2";
		t.verticalCenter = 44;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_hero";
		t.touchEnabled = false;
		t.verticalCenter = -22;
		t.width = 150;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.height = 41;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Character";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 46;
		t.width = 140;
		return t;
	};
	_proto.grp_start_i = function () {
		var t = new eui.Group();
		this.grp_start = t;
		t.height = 115;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 155;
		t.visible = true;
		t.width = 300;
		t.y = 713;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this.lbl_lv_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 115;
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 52.4;
		t.strokeColor = 0xB4B4B4;
		t.text = "START";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.lbl_lv_i = function () {
		var t = new eui.Label();
		this.lbl_lv = t;
		t.height = 64;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x080808;
		t.text = "STAGE-1 1/3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = -84.5;
		t.x = 10;
		return t;
	};
	_proto.grp_heroUI_i = function () {
		var t = new eui.Group();
		this.grp_heroUI = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this.img_back_i(),this._Image8_i(),this.scl_0_i(),this.scl_1_i(),this.grp_buy_i(),this.grp_select_i(),this.grp_price_i()];
		return t;
	};
	_proto.img_back_i = function () {
		var t = new eui.Image();
		this.img_back = t;
		t.horizontalCenter = -258.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.sd_btn_fanHui";
		t.verticalCenter = -480.5;
		t.visible = true;
		t.y = 55;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 699.325;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,49,600,4);
		t.source = "game0_json.sd_dk_wuQiXuanZe";
		t.top = 628;
		t.visible = true;
		return t;
	};
	_proto.scl_0_i = function () {
		var t = new eui.Scroller();
		this.scl_0 = t;
		t.height = 473;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 669;
		t.visible = true;
		t.width = 600;
		t.x = 0;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.height = 200;
		t.itemRendererSkinName = skins.HeroCard;
		t.width = 200;
		t.x = 186;
		t.y = 53;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalAlign = "center";
		t.horizontalGap = 0;
		t.paddingBottom = 100;
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	_proto.scl_1_i = function () {
		var t = new eui.Scroller();
		this.scl_1 = t;
		t.height = 496;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 669;
		t.visible = false;
		t.width = 600;
		t.viewport = this.lst_1_i();
		return t;
	};
	_proto.lst_1_i = function () {
		var t = new eui.List();
		this.lst_1 = t;
		t.height = 200;
		t.itemRendererSkinName = skins.GunCard;
		t.width = 200;
		t.x = 186;
		t.y = 53;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 0;
		t.paddingBottom = 100;
		t.verticalGap = 0;
		return t;
	};
	_proto.grp_buy_i = function () {
		var t = new eui.Group();
		this.grp_buy = t;
		t.height = 66;
		t.horizontalCenter = 184;
		t.touchChildren = false;
		t.verticalCenter = -28;
		t.width = 170;
		t.zIndex = 1;
		t.elementsContent = [this._Image9_i(),this._Label4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.text = "Buy";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_select_i = function () {
		var t = new eui.Group();
		this.grp_select = t;
		t.height = 66;
		t.horizontalCenter = 184;
		t.touchChildren = false;
		t.verticalCenter = -28;
		t.width = 170;
		t.x = 429;
		t.y = 517;
		t.zIndex = 1;
		t.elementsContent = [this._Image10_i(),this._Label5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.text = "Deploy";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_price_i = function () {
		var t = new eui.Group();
		this.grp_price = t;
		t.height = 37;
		t.horizontalCenter = 191;
		t.touchChildren = false;
		t.verticalCenter = -82;
		t.width = 135;
		t.elementsContent = [this._Image11_i(),this.lbl_price_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 37.463;
		t.horizontalCenter = -40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.zjm_icon_jinBi";
		t.verticalCenter = 0;
		t.width = 40.46;
		return t;
	};
	_proto.lbl_price_i = function () {
		var t = new eui.Label();
		this.lbl_price = t;
		t.height = 39.403;
		t.horizontalCenter = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.text = "888";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = -1;
		t.width = 90.684;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/DropedCoin.exml'] = window.skins.DropedCoin = (function (_super) {
	__extends(DropedCoin, _super);
	function DropedCoin() {
		_super.call(this);
		this.skinParts = ["img_shadow","img_coin"];
		
		this.height = 45;
		this.width = 54;
		this.elementsContent = [this.img_shadow_i(),this.img_coin_i()];
	}
	var _proto = DropedCoin.prototype;

	_proto.img_shadow_i = function () {
		var t = new eui.Image();
		this.img_shadow = t;
		t.height = 17;
		t.horizontalCenter = 0;
		t.source = "game0_json.shadow";
		t.verticalCenter = 26;
		t.width = 54;
		return t;
	};
	_proto.img_coin_i = function () {
		var t = new eui.Image();
		this.img_coin = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.zjm_icon_jinBi";
		t.verticalCenter = 0;
		return t;
	};
	return DropedCoin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/EnemyHP.exml'] = window.skins.EnemyHP = (function (_super) {
	__extends(EnemyHP, _super);
	function EnemyHP() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 19;
		this.width = 136;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = EnemyHP.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 19;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,1,46,22);
		t.source = "game0_json.yxn_dk_xueTiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.yxn_dk_xueTiao_4";
		t.verticalCenter = 0;
		return t;
	};
	return EnemyHP;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["grp_winBG","grp_winTitle","grp_winHome","grp_winNext","grp_winMain","grp_win","grp_loseBG","grp_loseTitle","grp_loseHome","grp_loseRestart","grp_loseMain","grp_lose"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_win_i(),this.grp_lose_i()];
	}
	var _proto = GameOver.prototype;

	_proto.grp_win_i = function () {
		var t = new eui.Group();
		this.grp_win = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this.grp_winBG_i(),this.grp_winMain_i()];
		return t;
	};
	_proto.grp_winBG_i = function () {
		var t = new eui.Group();
		this.grp_winBG = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Rect1_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0x774844;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -200;
		t.visible = true;
		t.x = 0;
		t.y = -200;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 445;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "js_dk_shengLi_png";
		t.verticalCenter = -346;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_winMain_i = function () {
		var t = new eui.Group();
		this.grp_winMain = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.grp_winTitle_i(),this.grp_winHome_i(),this.grp_winNext_i()];
		return t;
	};
	_proto.grp_winTitle_i = function () {
		var t = new eui.Group();
		this.grp_winTitle = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -207;
		t.width = 400;
		t.x = 20;
		t.y = 210.99999999999994;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.js_img_shengLi_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.js_img_shengLi_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_winHome_i = function () {
		var t = new eui.Group();
		this.grp_winHome = t;
		t.height = 66;
		t.horizontalCenter = -120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 380;
		t.width = 170;
		t.x = 114.99999999999989;
		t.y = 915;
		t.zIndex = 1;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.stroke = 2;
		t.text = "Home";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_winNext_i = function () {
		var t = new eui.Group();
		this.grp_winNext = t;
		t.height = 66;
		t.horizontalCenter = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 382;
		t.width = 170;
		t.x = 354.9999999999999;
		t.y = 917;
		t.zIndex = 1;
		t.elementsContent = [this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.stroke = 2;
		t.text = "Next";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_lose_i = function () {
		var t = new eui.Group();
		this.grp_lose = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.grp_loseBG_i(),this.grp_loseMain_i()];
		return t;
	};
	_proto.grp_loseBG_i = function () {
		var t = new eui.Group();
		this.grp_loseBG = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Rect2_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0x50468A;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -200;
		t.visible = true;
		t.x = 0;
		t.y = -200;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.height = 445;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "js_dk_shiBai_png";
		t.verticalCenter = -345.5;
		t.visible = true;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_loseMain_i = function () {
		var t = new eui.Group();
		this.grp_loseMain = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.grp_loseTitle_i(),this.grp_loseHome_i(),this.grp_loseRestart_i()];
		return t;
	};
	_proto.grp_loseTitle_i = function () {
		var t = new eui.Group();
		this.grp_loseTitle = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -207;
		t.width = 400;
		t.x = 20;
		t.y = 210.99999999999994;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.js_img_shiBai_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.js_img_shiBai_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_loseHome_i = function () {
		var t = new eui.Group();
		this.grp_loseHome = t;
		t.height = 66;
		t.horizontalCenter = -120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 380;
		t.width = 170;
		t.x = 114.99999999999989;
		t.y = 915;
		t.zIndex = 1;
		t.elementsContent = [this._Image9_i(),this._Label3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.stroke = 2;
		t.text = "Home";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_loseRestart_i = function () {
		var t = new eui.Group();
		this.grp_loseRestart = t;
		t.height = 66;
		t.horizontalCenter = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 382;
		t.width = 170;
		t.x = 354.9999999999999;
		t.y = 917;
		t.zIndex = 1;
		t.elementsContent = [this._Image10_i(),this._Label4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.stroke = 2;
		t.text = "Restart";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeroHP.exml'] = window.skins.HeroHP = (function (_super) {
	__extends(HeroHP, _super);
	function HeroHP() {
		_super.call(this);
		this.skinParts = ["thumb","img_bullet"];
		
		this.height = 24;
		this.width = 136;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.img_bullet_i()];
	}
	var _proto = HeroHP.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.yxn_dk_xueTiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.yxn_dk_xueTiao_2";
		t.verticalCenter = -3;
		return t;
	};
	_proto.img_bullet_i = function () {
		var t = new eui.Image();
		this.img_bullet = t;
		t.left = 2;
		t.source = "game0_json.yxn_dk_xueTiao_3";
		t.verticalCenter = 8;
		t.width = 109;
		return t;
	};
	return HeroHP;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_game","lbl_killNum","img_joy1","img_joy0","grp_joy","img_att","img_setup","any_pause"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_game_i(),this._Image1_i(),this.lbl_killNum_i(),this._Rect1_i(),this.grp_joy_i(),this._Group1_i(),this.any_pause_i()];
	}
	var _proto = Main.prototype;

	_proto.grp_game_i = function () {
		var t = new eui.Group();
		this.grp_game = t;
		t.height = 640;
		t.sortableChildren = true;
		t.width = 2850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 100;
		t.height = 352.325;
		t.horizontalCenter = 0;
		t.source = "bottom_png";
		t.width = 640;
		return t;
	};
	_proto.lbl_killNum_i = function () {
		var t = new eui.Label();
		this.lbl_killNum = t;
		t.height = 85.667;
		t.horizontalCenter = 226;
		t.size = 40;
		t.stroke = 2;
		t.text = "Label";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -440.5;
		t.width = 214.145;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 310;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 622;
		return t;
	};
	_proto.grp_joy_i = function () {
		var t = new eui.Group();
		this.grp_joy = t;
		t.height = 496;
		t.horizontalCenter = 0;
		t.top = 640;
		t.touchChildren = false;
		t.width = 640;
		t.elementsContent = [this.img_joy1_i(),this.img_joy0_i()];
		return t;
	};
	_proto.img_joy1_i = function () {
		var t = new eui.Image();
		this.img_joy1 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.height = 160;
		t.source = "game0_json.yaogan";
		t.touchEnabled = false;
		t.width = 160;
		t.x = 130;
		t.y = 228;
		return t;
	};
	_proto.img_joy0_i = function () {
		var t = new eui.Image();
		this.img_joy0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.source = "game0_json.qiu";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 141.952;
		t.y = 186;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 370;
		t.horizontalCenter = 0;
		t.top = 640;
		t.touchThrough = true;
		t.width = 640;
		t.x = 10;
		t.y = 650;
		t.elementsContent = [this.img_att_i(),this.img_setup_i()];
		return t;
	};
	_proto.img_att_i = function () {
		var t = new eui.Image();
		this.img_att = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.height = 120;
		t.horizontalCenter = 142;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.gunfire";
		t.verticalCenter = 89;
		t.width = 120;
		return t;
	};
	_proto.img_setup_i = function () {
		var t = new eui.Image();
		this.img_setup = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 235;
		t.source = "game0_json.gunsetup";
		t.verticalCenter = -3;
		t.width = 100;
		return t;
	};
	_proto.any_pause_i = function () {
		var t = new eui.Image();
		this.any_pause = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 28;
		t.height = 56;
		t.horizontalCenter = -247;
		t.source = "game0_json.pause";
		t.verticalCenter = -500;
		t.width = 56;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Pause.exml'] = window.skins.Pause = (function (_super) {
	__extends(Pause, _super);
	function Pause() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_continue","grp_home","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Pause.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 799;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 501;
		t.elementsContent = [this.grp_continue_i(),this.grp_home_i()];
		return t;
	};
	_proto.grp_continue_i = function () {
		var t = new eui.Group();
		this.grp_continue = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -50;
		t.width = 170;
		t.zIndex = 1;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.text = "Resume";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_home_i = function () {
		var t = new eui.Group();
		this.grp_home = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 50;
		t.width = 170;
		t.x = 25;
		t.y = 24;
		t.zIndex = 1;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "game0_json.btn_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 36.6;
		t.text = "Home";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return Pause;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Unit.exml'] = window.skins.Unit = (function (_super) {
	__extends(Unit, _super);
	function Unit() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 100;
	}
	var _proto = Unit.prototype;

	return Unit;
})(eui.Skin);