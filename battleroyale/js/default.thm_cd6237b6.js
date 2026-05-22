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
                generateEUI.skins = {"Scene.Common":"resource/eui_skins/Common.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Setting":"resource/eui_skins/cover/Setting.exml","Scene.AddGold":"resource/eui_skins/cover/AddGold.exml","Scene.Cover.Shop":"resource/eui_skins/cover/Shop.exml","Scene.Cover.ShopCell":"resource/eui_skins/cover/ShopCell.exml","Scene.Cover.Sign":"resource/eui_skins/cover/Sign.exml","Scene.Cover.Wheel":"resource/eui_skins/cover/Wheel.exml","Scene.GetReward":"resource/eui_skins/GetReward.exml","Scene.Game.Role":"resource/eui_skins/game/Role.exml","Scene.Game.RoleAI":"resource/eui_skins/game/Role.exml","Scene.Game.RoleHPBar":"resource/eui_skins/game/RoleHPBar.exml","Scene.Game.PlayerHPBar":"resource/eui_skins/game/PlayerHPBar.exml","Scene.Cover.MatchingCell":"resource/eui_skins/cover/MatchingCell.exml","Scene.Cover.Matching":"resource/eui_skins/cover/Matching.exml","Scene.Cover.Matching2":"resource/eui_skins/cover/Matching2.exml","Scene.Game.GameOver":"resource/eui_skins/game/GameOver.exml","Scene.Game.OtherHPBar":"resource/eui_skins/game/OtherHPBar.exml","Scene.Game.Pause":"resource/eui_skins/game/Pause.exml","Scene.Game.CountDown":"resource/eui_skins/game/CountDown.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/AddGold.exml'] = window.skins.AddGold = (function (_super) {
	__extends(AddGold, _super);
	function AddGold() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_1","grp_0","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = AddGold.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.grp_1_i(),this._Label2_i(),this.grp_0_i(),this._Image4_i(),this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(111,0,222,80);
		t.source = "game0_json.img_tittle_bg";
		t.verticalCenter = -266;
		t.width = 514;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.horizontalCenter = 110;
		t.touchChildren = false;
		t.verticalCenter = 230;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_tipsg";
		t.verticalCenter = 0;
		t.x = -835.9999999999999;
		t.y = -416.9999999999999;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 10;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "OK";
		t.textAlign = "center";
		t.textColor = 0x22690E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 80.023;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 3;
		t.strokeColor = 0xFF9511;
		t.text = "Free Gold";
		t.textAlign = "center";
		t.textColor = 0xFFD700;
		t.verticalAlign = "middle";
		t.verticalCenter = -264;
		t.width = 542.395;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 96;
		t.horizontalCenter = -110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 230;
		t.width = 200;
		t.x = 437;
		t.y = 557;
		t.elementsContent = [this._Image3_i(),this._Label3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_tipsy";
		t.touchEnabled = false;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "Cancel";
		t.textAlign = "center";
		t.textColor = 0xE46300;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_gold";
		t.verticalCenter = -69.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -35;
		t.source = "game0_json.d4_img_plus";
		t.verticalCenter = 77;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 86.924;
		t.horizontalCenter = 117;
		t.size = 45;
		t.stroke = 2;
		t.strokeColor = 0xDB6B13;
		t.text = "300";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 79;
		t.width = 209.611;
		return t;
	};
	return AddGold;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_team","grp_shop","grp_start","img_sign","img_spin","img_setting","lbl_gold","grp_gold","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_zjm _bj_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this.grp_team_i(),this.grp_shop_i(),this.grp_start_i(),this.img_sign_i(),this.img_spin_i(),this.img_setting_i(),this.grp_gold_i()];
		return t;
	};
	_proto.grp_team_i = function () {
		var t = new eui.Group();
		this.grp_team = t;
		t.height = 200;
		t.horizontalCenter = 135;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -100;
		t.width = 294.104;
		t.x = 655;
		t.y = 175.00000000000003;
		t.zIndex = 99;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.grp_shop_i = function () {
		var t = new eui.Group();
		this.grp_shop = t;
		t.height = 200;
		t.horizontalCenter = 440;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -100;
		t.width = 254.104;
		t.x = 980;
		t.y = 175.00000000000003;
		t.zIndex = 99;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.grp_start_i = function () {
		var t = new eui.Group();
		this.grp_start = t;
		t.height = 258;
		t.horizontalCenter = 280;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 150;
		t.width = 563.104;
		t.x = 665;
		t.y = 396.00000000000006;
		t.zIndex = 99;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.img_sign_i = function () {
		var t = new eui.Image();
		this.img_sign = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_sign";
		t.verticalCenter = -160;
		t.x = 24.00000000000003;
		t.y = 170.00000000000003;
		t.zIndex = 99;
		return t;
	};
	_proto.img_spin_i = function () {
		var t = new eui.Image();
		this.img_spin = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_lottery";
		t.verticalCenter = -40;
		t.x = 24.00000000000003;
		t.y = 287;
		t.zIndex = 99;
		return t;
	};
	_proto.img_setting_i = function () {
		var t = new eui.Image();
		this.img_setting = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.6f_img_sz";
		t.verticalCenter = -310;
		t.x = 31.00000000000003;
		t.y = 24;
		t.zIndex = 99;
		return t;
	};
	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 35.479;
		t.horizontalCenter = -362.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -310;
		t.width = 248;
		t.x = 181.00000000000003;
		t.y = 47;
		t.zIndex = 99;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,0,150,60);
		t.source = "game0_json.img_jbdk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -3;
		t.source = "game0_json.img_plus";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 50;
		t.right = 0;
		t.size = 22;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Matching.exml'] = window.skins.Matching = (function (_super) {
	__extends(Matching, _super);
	function Matching() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","img_match","lbl_match","grp_match","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Matching.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this.img_close_i(),this._Image1_i(),this.grp_match_i()];
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_fh";
		t.verticalCenter = -310;
		t.x = 26;
		t.y = 22;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_taizi";
		t.verticalCenter = 23.5;
		t.x = 50;
		t.y = 228;
		return t;
	};
	_proto.grp_match_i = function () {
		var t = new eui.Group();
		this.grp_match = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 206;
		t.width = 248;
		t.x = 543;
		t.y = 531;
		t.elementsContent = [this.img_match_i(),this.lbl_match_i()];
		return t;
	};
	_proto.img_match_i = function () {
		var t = new eui.Image();
		this.img_match = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(106,0,38,99);
		t.source = "game0_json.btn_hui";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 248;
		return t;
	};
	_proto.lbl_match_i = function () {
		var t = new eui.Label();
		this.lbl_match = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "Start";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Matching;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Matching2.exml'] = window.skins.Matching2 = (function (_super) {
	__extends(Matching2, _super);
	function Matching2() {
		_super.call(this);
		this.skinParts = ["img_back","img_match","lbl_match","grp_match"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.img_back_i(),this.grp_match_i()];
	}
	var _proto = Matching2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_back_i = function () {
		var t = new eui.Image();
		this.img_back = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_fh";
		t.verticalCenter = -310;
		t.visible = true;
		t.x = 26;
		t.y = 22;
		return t;
	};
	_proto.grp_match_i = function () {
		var t = new eui.Group();
		this.grp_match = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 206;
		t.visible = true;
		t.width = 248;
		t.x = 543;
		t.y = 531;
		t.elementsContent = [this.img_match_i(),this.lbl_match_i()];
		return t;
	};
	_proto.img_match_i = function () {
		var t = new eui.Image();
		this.img_match = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(106,0,38,99);
		t.source = "game0_json.btn_hui";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 248;
		return t;
	};
	_proto.lbl_match_i = function () {
		var t = new eui.Label();
		this.lbl_match = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "Start";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Matching2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/MatchingCell.exml'] = window.skins.MatchingCell = (function (_super) {
	__extends(MatchingCell, _super);
	function MatchingCell() {
		_super.call(this);
		this.skinParts = ["img_add","img_name","lbl_name","grp_name"];
		
		this.height = 300;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this.img_add_i(),this.grp_name_i()];
	}
	var _proto = MatchingCell.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_wutai";
		return t;
	};
	_proto.img_add_i = function () {
		var t = new eui.Image();
		this.img_add = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_dealy";
		t.verticalCenter = -12;
		return t;
	};
	_proto.grp_name_i = function () {
		var t = new eui.Group();
		this.grp_name = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -139;
		t.visible = true;
		t.width = 212;
		t.elementsContent = [this.img_name_i(),this.lbl_name_i()];
		return t;
	};
	_proto.img_name_i = function () {
		var t = new eui.Image();
		this.img_name = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_mine";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.height = 47;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x393939;
		t.verticalAlign = "middle";
		t.verticalCenter = -7.5;
		t.width = 190;
		return t;
	};
	return MatchingCell;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Setting.exml'] = window.skins.Setting = (function (_super) {
	__extends(Setting, _super);
	function Setting() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","img_music0","img_music1","grp_music","img_sound0","img_sound1","grp_sound","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Setting.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 414;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 565;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.img_close_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.grp_music_i(),this.grp_sound_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_win_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game0_json.ui_sound_on";
		t.visible = false;
		t.x = 104;
		t.y = 125;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.d1_img_tittle_bg";
		t.verticalCenter = -218;
		t.visible = true;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 271.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_close";
		t.verticalCenter = -212.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 57.263;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "SETTING";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -220;
		t.width = 268.929;
		t.x = 93.00000000000003;
		t.y = 129.99999999999997;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 62.715;
		t.horizontalCenter = -125.5;
		t.size = 40;
		t.text = "Sound";
		t.textAlign = "right";
		t.textColor = 0xDB9425;
		t.verticalAlign = "middle";
		t.verticalCenter = -50;
		t.width = 172.146;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 62.715;
		t.horizontalCenter = -125.5;
		t.size = 40;
		t.text = "Music";
		t.textAlign = "right";
		t.textColor = 0xDB9425;
		t.verticalAlign = "middle";
		t.verticalCenter = 60;
		t.width = 172.146;
		t.x = 81;
		t.y = 145;
		return t;
	};
	_proto.grp_music_i = function () {
		var t = new eui.Group();
		this.grp_music = t;
		t.height = 60;
		t.horizontalCenter = 82.5;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 154;
		t.elementsContent = [this.img_music0_i(),this.img_music1_i()];
		return t;
	};
	_proto.img_music0_i = function () {
		var t = new eui.Image();
		this.img_music0 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.on";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.img_music1_i = function () {
		var t = new eui.Image();
		this.img_music1 = t;
		t.horizontalCenter = 50;
		t.source = "game0_json.img_center";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_sound_i = function () {
		var t = new eui.Group();
		this.grp_sound = t;
		t.height = 60;
		t.horizontalCenter = 82.5;
		t.touchChildren = false;
		t.verticalCenter = -50;
		t.width = 154;
		t.x = 298;
		t.y = 237;
		t.elementsContent = [this.img_sound0_i(),this.img_sound1_i()];
		return t;
	};
	_proto.img_sound0_i = function () {
		var t = new eui.Image();
		this.img_sound0 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.on";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sound1_i = function () {
		var t = new eui.Image();
		this.img_sound1 = t;
		t.horizontalCenter = -50;
		t.source = "game0_json.img_center";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return Setting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Shop.exml'] = window.skins.Shop = (function (_super) {
	__extends(Shop, _super);
	function Shop() {
		_super.call(this);
		this.skinParts = ["lbl_gold","grp_gold","img_buy","lbl_buy","img_buyGold","grp_buy","lst_0","lbl_title","img_tab0","grp_tab0","img_tab1","grp_tab1","img_tab2","grp_tab2","img_close","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.grp_main_i()];
	}
	var _proto = Shop.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ca_img_bj_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this.grp_gold_i(),this._Group1_i(),this.grp_tab0_i(),this.grp_tab1_i(),this.grp_tab2_i(),this.img_close_i()];
		return t;
	};
	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 35.479;
		t.horizontalCenter = -362.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -310;
		t.width = 248;
		t.x = 181.00000000000003;
		t.y = 46.99999999999997;
		t.zIndex = 99;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,0,150,60);
		t.source = "game0_json.img_jbdk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -3;
		t.source = "game0_json.img_plus";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 50;
		t.right = 0;
		t.size = 22;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 717.774;
		t.horizontalCenter = 355;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.width = 560;
		t.x = 742.0000000000001;
		t.y = 14;
		t.elementsContent = [this._Image5_i(),this.grp_buy_i(),this._Scroller1_i(),this.lbl_title_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_title";
		t.touchEnabled = false;
		t.verticalCenter = -4.8870000000000005;
		return t;
	};
	_proto.grp_buy_i = function () {
		var t = new eui.Group();
		this.grp_buy = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 269;
		t.elementsContent = [this.img_buy_i(),this.lbl_buy_i(),this.img_buyGold_i()];
		return t;
	};
	_proto.img_buy_i = function () {
		var t = new eui.Image();
		this.img_buy = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_tipsg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = -835.9999999999999;
		t.y = -416.9999999999999;
		return t;
	};
	_proto.lbl_buy_i = function () {
		var t = new eui.Label();
		this.lbl_buy = t;
		t.bottom = 9;
		t.left = 53;
		t.right = 0;
		t.text = "Buy";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_buyGold_i = function () {
		var t = new eui.Image();
		this.img_buyGold = t;
		t.height = 48.009;
		t.left = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = -5;
		t.width = 44.009;
		t.x = -744.9999999999999;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 412;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 474;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.x = 207;
		t.y = 136;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 20;
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		t.requestedColumnCount = 3;
		t.verticalAlign = "middle";
		t.verticalGap = 20;
		return t;
	};
	_proto.lbl_title_i = function () {
		var t = new eui.Label();
		this.lbl_title = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "SKIN";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -277.887;
		t.width = 194;
		return t;
	};
	_proto.grp_tab0_i = function () {
		var t = new eui.Group();
		this.grp_tab0 = t;
		t.height = 104;
		t.horizontalCenter = -540;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -150;
		t.width = 204;
		t.x = 24.99999999999997;
		t.y = 173.00000000000003;
		t.elementsContent = [this.img_tab0_i(),this._Image6_i(),this._Label1_i()];
		return t;
	};
	_proto.img_tab0_i = function () {
		var t = new eui.Image();
		this.img_tab0 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -34;
		t.source = "game0_json.img_wq";
		t.touchEnabled = false;
		t.verticalCenter = -17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.horizontalCenter = 44;
		t.size = 25;
		t.text = "Weapon";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 130;
		return t;
	};
	_proto.grp_tab1_i = function () {
		var t = new eui.Group();
		this.grp_tab1 = t;
		t.height = 104;
		t.horizontalCenter = -540;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -20;
		t.width = 204;
		t.x = 24.99999999999997;
		t.y = 303;
		t.elementsContent = [this.img_tab1_i(),this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto.img_tab1_i = function () {
		var t = new eui.Image();
		this.img_tab1 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -54;
		t.source = "game1_json.img_pf";
		t.touchEnabled = false;
		t.verticalCenter = -17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.horizontalCenter = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Helmet";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 130;
		t.x = 80.99999999999997;
		t.y = -130;
		return t;
	};
	_proto.grp_tab2_i = function () {
		var t = new eui.Group();
		this.grp_tab2 = t;
		t.height = 104;
		t.horizontalCenter = -540;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 110;
		t.width = 204;
		t.x = 24.99999999999997;
		t.y = 433.0000000000001;
		t.elementsContent = [this.img_tab2_i(),this._Image8_i(),this._Label3_i()];
		return t;
	};
	_proto.img_tab2_i = function () {
		var t = new eui.Image();
		this.img_tab2 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -48;
		t.source = "game1_json.img_fs";
		t.touchEnabled = false;
		t.verticalCenter = -17;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.horizontalCenter = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Skin";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 130;
		t.x = 80.99999999999997;
		t.y = -130;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = -600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_fh";
		t.verticalCenter = -310;
		t.x = 26.00000000000003;
		t.y = 22;
		return t;
	};
	return Shop;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/ShopCell.exml'] = window.skins.ShopCell = (function (_super) {
	__extends(ShopCell, _super);
	function ShopCell() {
		_super.call(this);
		this.skinParts = ["img_icon","img_lock","img_equip","lbl_text","img_gold","img_sel"];
		
		this.height = 138;
		this.width = 138;
		this.elementsContent = [this._Image1_i(),this.img_icon_i(),this.img_lock_i(),this.img_equip_i(),this._Image2_i(),this.lbl_text_i(),this.img_gold_i(),this.img_sel_i()];
	}
	var _proto = ShopCell.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_k";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.gun3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_lock_i = function () {
		var t = new eui.Image();
		this.img_lock = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_wgm";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_equip_i = function () {
		var t = new eui.Image();
		this.img_equip = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_xzk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_k2";
		t.touchEnabled = false;
		return t;
	};
	_proto.lbl_text_i = function () {
		var t = new eui.Label();
		this.lbl_text = t;
		t.height = 33;
		t.left = 33;
		t.right = 2;
		t.size = 16;
		t.text = "Label";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.y = 105;
		return t;
	};
	_proto.img_gold_i = function () {
		var t = new eui.Image();
		this.img_gold = t;
		t.height = 20.858;
		t.horizontalCenter = -47;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 51.5;
		t.width = 19.761;
		return t;
	};
	_proto.img_sel_i = function () {
		var t = new eui.Image();
		this.img_sel = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.69_img_xz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return ShopCell;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Sign.exml'] = window.skins.Sign = (function (_super) {
	__extends(Sign, _super);
	function Sign() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","grp_double","grp_claim","img_sel7","img_light7","img_claim7","lbl_claim7","img_sel1","img_claim1","lbl_claim1","img_sel2","img_claim2","lbl_claim2","img_sel3","img_light3","img_claim3","lbl_claim3","img_sel4","img_claim4","lbl_claim4","img_sel5","img_claim5","lbl_claim5","img_sel6","img_claim6","lbl_claim6","lbl_claim","grp_main","lbl_gold","grp_gold"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i(),this.grp_gold_i()];
	}
	var _proto = Sign.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this.grp_double_i(),this.grp_claim_i(),this._Image4_i(),this._Label3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this.lbl_claim_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -12;
		t.source = "game1_json.img_bg_sprite";
		t.verticalCenter = -9.5;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 467;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_close";
		t.verticalCenter = -227.5;
		t.visible = true;
		t.x = 973.0000000000001;
		t.y = 110;
		return t;
	};
	_proto.grp_double_i = function () {
		var t = new eui.Group();
		this.grp_double = t;
		t.height = 96;
		t.horizontalCenter = -4;
		t.touchChildren = false;
		t.verticalCenter = 165;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_tipsy";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.y = -118.99999999999997;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 10;
		t.left = 0;
		t.right = 0;
		t.text = "Double";
		t.textAlign = "center";
		t.textColor = 0xE46300;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_claim_i = function () {
		var t = new eui.Group();
		this.grp_claim = t;
		t.height = 96;
		t.horizontalCenter = 107;
		t.touchChildren = false;
		t.verticalCenter = 165;
		t.width = 200;
		t.x = 584;
		t.y = 502;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_tipsg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.y = -118.99999999999997;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 10;
		t.left = 0;
		t.right = 0;
		t.text = "Claim";
		t.textAlign = "center";
		t.textColor = 0x22690E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 99;
		t.source = "game0_json.title";
		t.verticalCenter = -218;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 43.585;
		t.horizontalCenter = 103.5;
		t.text = "DAILY REWARD";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -221;
		t.width = 234.758;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.horizontalCenter = -362;
		t.verticalCenter = -132;
		t.width = 150;
		t.elementsContent = [this._Image5_i(),this.img_sel7_i(),this.img_light7_i(),this._Image6_i(),this.img_claim7_i(),this.lbl_claim7_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel7_i = function () {
		var t = new eui.Image();
		this.img_sel7 = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 150;
		return t;
	};
	_proto.img_light7_i = function () {
		var t = new eui.Image();
		this.img_light7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.sign_guang";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.sing_skin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_claim7_i = function () {
		var t = new eui.Image();
		this.img_claim7 = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(39,34,98,60);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 150;
		t.x = 671;
		t.y = 34;
		return t;
	};
	_proto.lbl_claim7_i = function () {
		var t = new eui.Label();
		this.lbl_claim7 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		t.x = 671;
		t.y = 34;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 41.015;
		t.horizontalCenter = 13.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.strokeColor = 0xD052E7;
		t.text = "Day 7";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.verticalCenter = 101.5;
		t.width = 124.792;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = -100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -110;
		t.width = 172;
		t.x = 591.0000000000001;
		t.y = 322;
		t.elementsContent = [this._Image7_i(),this._Label5_i(),this._Image8_i(),this._Label6_i(),this.img_sel1_i(),this.img_claim1_i(),this.lbl_claim1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.celll_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 1";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23;
		t.source = "game0_json.img_jb1";
		t.touchEnabled = false;
		t.verticalCenter = -12;
		t.visible = true;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 26;
		t.horizontalCenter = -22.5;
		t.size = 25;
		t.text = "100";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 43;
		t.width = 101;
		return t;
	};
	_proto.img_sel1_i = function () {
		var t = new eui.Image();
		this.img_sel1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_claim1_i = function () {
		var t = new eui.Image();
		this.img_claim1 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim1_i = function () {
		var t = new eui.Label();
		this.lbl_claim1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -110;
		t.visible = true;
		t.width = 172;
		t.x = 581.0000000000001;
		t.y = 312;
		t.elementsContent = [this._Image9_i(),this._Label7_i(),this._Image10_i(),this._Label8_i(),this.img_sel2_i(),this.img_claim2_i(),this.lbl_claim2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.celll_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 2";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23;
		t.source = "game0_json.img_jb2";
		t.touchEnabled = false;
		t.verticalCenter = -12;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.height = 26;
		t.horizontalCenter = -22.5;
		t.size = 25;
		t.text = "300";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 43;
		t.width = 101;
		return t;
	};
	_proto.img_sel2_i = function () {
		var t = new eui.Image();
		this.img_sel2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_claim2_i = function () {
		var t = new eui.Image();
		this.img_claim2 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim2_i = function () {
		var t = new eui.Label();
		this.lbl_claim2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = 320;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -110;
		t.visible = true;
		t.width = 172;
		t.x = 591.0000000000001;
		t.y = 322;
		t.elementsContent = [this._Image11_i(),this._Label9_i(),this.img_sel3_i(),this.img_light3_i(),this._Image12_i(),this.img_claim3_i(),this.lbl_claim3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.3_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 3";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto.img_sel3_i = function () {
		var t = new eui.Image();
		this.img_sel3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_light3_i = function () {
		var t = new eui.Image();
		this.img_light3 = t;
		t.horizontalCenter = -18.5;
		t.source = "game0_json.sign_guang";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -20;
		t.source = "game1_json.img_bq";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.img_claim3_i = function () {
		var t = new eui.Image();
		this.img_claim3 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim3_i = function () {
		var t = new eui.Label();
		this.lbl_claim3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = -100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 30;
		t.width = 172;
		t.x = 601.0000000000001;
		t.y = 332;
		t.elementsContent = [this._Image13_i(),this._Label10_i(),this._Image14_i(),this._Label11_i(),this.img_sel4_i(),this.img_claim4_i(),this.lbl_claim4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.celll_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 4";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23;
		t.source = "game0_json.img_jb3";
		t.touchEnabled = false;
		t.verticalCenter = -12;
		t.visible = true;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.height = 26;
		t.horizontalCenter = -22.5;
		t.size = 25;
		t.text = "700";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 43;
		t.width = 101;
		return t;
	};
	_proto.img_sel4_i = function () {
		var t = new eui.Image();
		this.img_sel4 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_claim4_i = function () {
		var t = new eui.Image();
		this.img_claim4 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim4_i = function () {
		var t = new eui.Label();
		this.lbl_claim4 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 30;
		t.width = 172;
		t.x = 591.0000000000001;
		t.y = 322;
		t.elementsContent = [this._Image15_i(),this._Label12_i(),this._Image16_i(),this._Label13_i(),this.img_sel5_i(),this.img_claim5_i(),this.lbl_claim5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.celll_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 5";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23;
		t.source = "game0_json.img_jb4";
		t.touchEnabled = false;
		t.verticalCenter = -12;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.height = 26;
		t.horizontalCenter = -22.5;
		t.size = 25;
		t.text = "900";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 43;
		t.width = 101;
		return t;
	};
	_proto.img_sel5_i = function () {
		var t = new eui.Image();
		this.img_sel5 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_claim5_i = function () {
		var t = new eui.Image();
		this.img_claim5 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim5_i = function () {
		var t = new eui.Label();
		this.lbl_claim5 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 127;
		t.horizontalCenter = 320;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 30;
		t.width = 172;
		t.x = 601.0000000000001;
		t.y = 332;
		t.elementsContent = [this._Image17_i(),this._Label14_i(),this._Image18_i(),this._Label15_i(),this.img_sel6_i(),this.img_claim6_i(),this.lbl_claim6_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.celll_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.height = 37;
		t.horizontalCenter = 55.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Day 6";
		t.textAlign = "center";
		t.textColor = 0x4D7DD2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 118;
		t.x = 159.99999999999994;
		t.y = 4.999999999999972;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23;
		t.source = "game0_json.img_jb5";
		t.touchEnabled = false;
		t.verticalCenter = -12;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.height = 26;
		t.horizontalCenter = -22.5;
		t.size = 25;
		t.text = "1500";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 43;
		t.width = 101;
		return t;
	};
	_proto.img_sel6_i = function () {
		var t = new eui.Image();
		this.img_sel6 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,36,101,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xz";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.img_claim6_i = function () {
		var t = new eui.Image();
		this.img_claim6 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_ylq";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.lbl_claim6_i = function () {
		var t = new eui.Label();
		this.lbl_claim6 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "Claimed";
		t.textAlign = "center";
		t.textColor = 0xFF743D;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto.lbl_claim_i = function () {
		var t = new eui.Label();
		this.lbl_claim = t;
		t.height = 78.127;
		t.horizontalCenter = 116.5;
		t.size = 25;
		t.text = "Already claimed. Come back tomorrow";
		t.textAlign = "center";
		t.textColor = 0x5B1C1C;
		t.verticalAlign = "middle";
		t.verticalCenter = 167.5;
		t.width = 680.901;
		return t;
	};
	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 35.479;
		t.horizontalCenter = -362.5;
		t.touchChildren = false;
		t.verticalCenter = -310;
		t.width = 248;
		t.zIndex = 99;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,0,150,60);
		t.source = "game0_json.img_jbdk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.right = -3;
		t.source = "game0_json.img_plus";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 50;
		t.right = 0;
		t.size = 22;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Sign;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Wheel.exml'] = window.skins.Wheel = (function (_super) {
	__extends(Wheel, _super);
	function Wheel() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","img_arrow","grp_spin","lbl_spinNum","grp_main","lbl_gold","grp_gold"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i(),this.grp_gold_i()];
	}
	var _proto = Wheel.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this.img_arrow_i(),this.grp_spin_i(),this._Image13_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -70;
		t.source = "game1_json.img_zp";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 340;
		t.source = "game0_json.btn_close";
		t.verticalCenter = -227.5;
		t.visible = true;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 189;
		t.anchorOffsetY = 189;
		t.rotation = -30;
		t.source = "game0_json.img_2";
		t.visible = true;
		t.x = 668;
		t.y = 371;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 165;
		t.anchorOffsetY = 189;
		t.rotation = 90;
		t.source = "game1_json.img_1";
		t.visible = true;
		t.x = 669;
		t.y = 371;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 166;
		t.anchorOffsetY = 189;
		t.rotation = 30;
		t.source = "game0_json.img_3";
		t.visible = true;
		t.x = 671;
		t.y = 371;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 380;
		t.horizontalCenter = 1;
		t.verticalCenter = -4;
		t.visible = true;
		t.width = 380;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "Perm SKin";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = 101.5;
		t.width = 111.772;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = -114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "300";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = 101.5;
		t.width = 111.772;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "150";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = -29.5;
		t.width = 111.772;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = -114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "500";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = -29.5;
		t.width = 111.772;
		t.x = 258;
		t.y = 159;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = -97.5;
		t.width = 111.772;
		t.y = 165;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 22.868;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x267EB4;
		t.verticalAlign = "top";
		t.verticalCenter = 164.5;
		t.width = 111.772;
		t.x = 144;
		t.y = 175;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.wheel";
		t.verticalCenter = 55.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 61.868;
		t.horizontalCenter = 114.5;
		t.source = "game0_json.img_jb";
		t.verticalCenter = -77;
		t.width = 58.612;
		t.x = 164;
		t.y = 18;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 61.868;
		t.horizontalCenter = -114.5;
		t.source = "game0_json.img_jb";
		t.verticalCenter = -77;
		t.width = 58.612;
		t.x = 174;
		t.y = 28;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 61.868;
		t.horizontalCenter = -114.5;
		t.source = "game0_json.img_jb";
		t.verticalCenter = 50;
		t.width = 58.612;
		t.x = 184;
		t.y = 38;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 61.868;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_jb";
		t.verticalCenter = -144;
		t.width = 58.612;
		t.y = 28;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 61.868;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_jb";
		t.verticalCenter = 116;
		t.width = 58.612;
		t.x = 171;
		t.y = 38;
		return t;
	};
	_proto.img_arrow_i = function () {
		var t = new eui.Image();
		this.img_arrow = t;
		t.anchorOffsetX = 17;
		t.anchorOffsetY = 100;
		t.rotation = 0;
		t.source = "game1_json.img_pointer";
		t.visible = true;
		t.x = 670;
		t.y = 370;
		return t;
	};
	_proto.grp_spin_i = function () {
		var t = new eui.Group();
		this.grp_spin = t;
		t.height = 132;
		t.horizontalCenter = 3;
		t.touchChildren = false;
		t.verticalCenter = -3;
		t.visible = true;
		t.width = 132;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.22_btn_lottery";
		t.touchEnabled = false;
		t.verticalCenter = 2;
		t.visible = true;
		t.x = 17.000000000000057;
		t.y = 43.00000000000001;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "game1_json.29_img_tips";
		t.visible = true;
		t.x = 121.135;
		t.y = 217.389;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 258.5;
		t.width = 175;
		t.elementsContent = [this._Image14_i(),this.lbl_spinNum_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_lotteryNum";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_spinNum_i = function () {
		var t = new eui.Label();
		this.lbl_spinNum = t;
		t.height = 40.904;
		t.horizontalCenter = 47.5;
		t.size = 25;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = -5;
		t.width = 61.829;
		return t;
	};
	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 35.479;
		t.horizontalCenter = -362.5;
		t.touchChildren = false;
		t.verticalCenter = -310;
		t.width = 248;
		t.zIndex = 99;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,0,150,60);
		t.source = "game0_json.img_jbdk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.right = -3;
		t.source = "game0_json.img_plus";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 50;
		t.right = 0;
		t.size = 22;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Wheel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/CountDown.exml'] = window.skins.CountDown = (function (_super) {
	__extends(CountDown, _super);
	function CountDown() {
		_super.call(this);
		this.skinParts = ["img_num","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = CountDown.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 352;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -96;
		t.width = 352;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.img_djs1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_djs2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_num_i = function () {
		var t = new eui.Image();
		this.img_num = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_djsNum2";
		t.verticalCenter = 0;
		return t;
	};
	return CountDown;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_continue","grp_double","img_home","grp_main","lbl_gold","grp_gold","lbl_addGold","grp_addGold"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i(),this.grp_gold_i(),this.grp_addGold_i()];
	}
	var _proto = GameOver.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this.grp_continue_i(),this.grp_double_i(),this.img_home_i()];
		return t;
	};
	_proto.grp_continue_i = function () {
		var t = new eui.Group();
		this.grp_continue = t;
		t.height = 96;
		t.horizontalCenter = 130;
		t.touchChildren = false;
		t.verticalCenter = 230;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_tipsg";
		t.touchEnabled = false;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "Home";
		t.textAlign = "center";
		t.textColor = 0x22690E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_double_i = function () {
		var t = new eui.Group();
		this.grp_double = t;
		t.height = 96;
		t.horizontalCenter = -130;
		t.touchChildren = false;
		t.verticalCenter = 230;
		t.width = 200;
		t.x = 734;
		t.y = 512;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_tipsy";
		t.touchEnabled = false;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "Claim";
		t.textAlign = "center";
		t.textColor = 0xE46300;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_home_i = function () {
		var t = new eui.Image();
		this.img_home = t;
		t.horizontalCenter = -419.5;
		t.source = "game1_json.img_fhzy";
		t.verticalCenter = 230;
		t.visible = false;
		return t;
	};
	_proto.grp_gold_i = function () {
		var t = new eui.Group();
		this.grp_gold = t;
		t.height = 35.479;
		t.horizontalCenter = -362.5;
		t.touchChildren = false;
		t.verticalCenter = -310;
		t.width = 248;
		t.zIndex = 99;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,0,150,60);
		t.source = "game0_json.img_jbdk";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.right = -3;
		t.source = "game0_json.img_plus";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 50;
		t.right = 0;
		t.size = 22;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_addGold_i = function () {
		var t = new eui.Group();
		this.grp_addGold = t;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.touchChildren = false;
		t.verticalCenter = 63;
		t.width = 210;
		t.zIndex = 99;
		t.elementsContent = [this._Image6_i(),this.lbl_addGold_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "game0_json.img_jb";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_addGold_i = function () {
		var t = new eui.Label();
		this.lbl_addGold = t;
		t.bottom = 10;
		t.height = 77;
		t.right = -25;
		t.size = 50;
		t.text = "+1000";
		t.textAlign = "right";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.width = 185.566;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_map","img_attNum","lbl_attNum","grp_att","any_joy1","any_joy0","grp_joy","pb_player","lbl_score0","lbl_score1","grp_teamScore","lbl_scoreName0","lbl_scoreNum0","grp_score0","lbl_scoreName1","lbl_scoreNum1","grp_score1","lbl_scoreName2","lbl_scoreNum2","grp_score2","lbl_scoreName3","lbl_scoreNum3","grp_score3","grp_singleScore","img_pause"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.grp_map_i(),this.grp_att_i(),this.grp_joy_i(),this._Image19_i(),this.pb_player_i(),this.grp_teamScore_i(),this.grp_singleScore_i(),this.img_pause_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgSprite_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_map_i = function () {
		var t = new eui.Group();
		this.grp_map = t;
		t.height = 2000;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 2000;
		t.x = -328;
		t.y = -1086;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Group1_i(),this._Rect9_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.ground_8";
		t.verticalCenter = -141.5;
		t.zIndex = 90;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 493.5;
		t.source = "game0_json.ground_3";
		t.verticalCenter = -27;
		t.zIndex = 96;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 486;
		t.source = "game0_json.ground_7";
		t.verticalCenter = 334;
		t.zIndex = 96;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.ground_2";
		t.verticalCenter = 400;
		t.x = -110.86099999999988;
		t.zIndex = 98;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -848.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.ground_10";
		t.verticalCenter = 80;
		t.zIndex = 97;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.ground_9";
		t.verticalCenter = 191;
		t.zIndex = 97;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -574;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.ground_4";
		t.verticalCenter = 660;
		t.zIndex = 99;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 495;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.ground_6";
		t.verticalCenter = 660;
		t.zIndex = 99;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 435;
		t.source = "game0_json.ground_1_left";
		t.verticalCenter = -6;
		t.zIndex = 97;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -633;
		t.source = "game0_json.ground_1_left";
		t.verticalCenter = -152;
		t.x = 1323;
		t.y = 974;
		t.zIndex = 97;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -454.5;
		t.source = "game0_json.ground_1_right";
		t.verticalCenter = -6;
		t.zIndex = 97;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -387.5;
		t.source = "game0_json.ground_1_right";
		t.verticalCenter = -153;
		t.x = 433;
		t.y = 975;
		t.zIndex = 97;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 2000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 2000;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 781;
		t.x = 35;
		t.y = 1485;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 609;
		t.x = 1188;
		t.y = 1485;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 791;
		t.x = 605;
		t.y = 1316;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 425;
		t.y = 964;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 191;
		t.x = 54;
		t.y = 1023;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 1315;
		t.y = 964;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1750;
		t.x = 25;
		t.y = 1133;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.75;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1402;
		t.x = 249;
		t.y = 816;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 1004;
		t.y = 1311;
		return t;
	};
	_proto.grp_att_i = function () {
		var t = new eui.Group();
		this.grp_att = t;
		t.height = 193;
		t.horizontalCenter = 500;
		t.touchChildren = false;
		t.verticalCenter = 220;
		t.width = 193;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this.img_attNum_i(),this.lbl_attNum_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_attack_ui";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_attack_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_attack_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_attNum_i = function () {
		var t = new eui.Image();
		this.img_attNum = t;
		t.left = 0;
		t.source = "game0_json.img_ammo_bg";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.lbl_attNum_i = function () {
		var t = new eui.Label();
		this.lbl_attNum = t;
		t.height = 37;
		t.left = 0;
		t.size = 22;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xFF5959;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.visible = false;
		t.width = 44;
		return t;
	};
	_proto.grp_joy_i = function () {
		var t = new eui.Group();
		this.grp_joy = t;
		t.height = 750;
		t.horizontalCenter = -505;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this.any_joy1_i(),this.any_joy0_i()];
		return t;
	};
	_proto.any_joy1_i = function () {
		var t = new eui.Group();
		this.any_joy1 = t;
		t.anchorOffsetX = 117;
		t.anchorOffsetY = 117;
		t.height = 234;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 234;
		t.x = 505;
		t.y = 595;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117;
		t.anchorOffsetY = 117;
		t.height = 234;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_joystick_ui";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 234;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 108;
		t.anchorOffsetY = 108;
		t.height = 216;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_joystick_icon";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 216;
		return t;
	};
	_proto.any_joy0_i = function () {
		var t = new eui.Image();
		this.any_joy0 = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 61;
		t.source = "game0_json.img_attack_center";
		t.touchEnabled = false;
		t.visible = true;
		t.x = 505;
		t.y = 595;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117;
		t.anchorOffsetY = 117;
		t.height = 234;
		t.horizontalCenter = -500;
		t.source = "game0_json.img_joystick_ui";
		t.verticalCenter = 220;
		t.visible = false;
		t.width = 234;
		return t;
	};
	_proto.pb_player_i = function () {
		var t = new Scene.Game.PlayerHPBar();
		this.pb_player = t;
		t.height = 23;
		t.horizontalCenter = -464;
		t.slideDuration = 0;
		t.verticalCenter = -300;
		t.width = 166;
		return t;
	};
	_proto.grp_teamScore_i = function () {
		var t = new eui.Group();
		this.grp_teamScore = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = -328;
		t.width = 469;
		t.elementsContent = [this._Image20_i(),this._Label1_i(),this.lbl_score0_i(),this.lbl_score1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(40,0,151,60);
		t.source = "game0_json.img_jbdk";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 48;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "VS";
		t.textAlign = "center";
		t.textColor = 0xF9D600;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 77;
		return t;
	};
	_proto.lbl_score0_i = function () {
		var t = new eui.Label();
		this.lbl_score0 = t;
		t.height = 48;
		t.left = 100;
		t.size = 25;
		t.text = "10/10";
		t.textAlign = "center";
		t.textColor = 0x59FF2A;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 77;
		return t;
	};
	_proto.lbl_score1_i = function () {
		var t = new eui.Label();
		this.lbl_score1 = t;
		t.height = 48;
		t.right = 27;
		t.size = 25;
		t.text = "10/10";
		t.textAlign = "center";
		t.textColor = 0xFF1717;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		t.y = 16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 48;
		t.left = 18;
		t.size = 20;
		t.text = "Ally";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 77;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 48;
		t.right = 100;
		t.size = 20;
		t.text = "Enemy";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 98;
		t.y = 16;
		return t;
	};
	_proto.grp_singleScore_i = function () {
		var t = new eui.Group();
		this.grp_singleScore = t;
		t.height = 110;
		t.horizontalCenter = 519;
		t.top = 15;
		t.width = 232;
		t.elementsContent = [this._Image21_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.grp_score0_i(),this.grp_score1_i(),this.grp_score2_i(),this.grp_score3_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,37,232,26);
		t.source = "game0_json.battle_rank_bg";
		t.top = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 27.118;
		t.horizontalCenter = -80;
		t.size = 18;
		t.text = "Rank";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 60.141;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 27.118;
		t.horizontalCenter = 80;
		t.size = 18;
		t.text = "Kills";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 60.141;
		t.x = 11;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 27.118;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Player";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 87.141;
		return t;
	};
	_proto.grp_score0_i = function () {
		var t = new eui.Group();
		this.grp_score0 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 37;
		t.touchChildren = false;
		t.width = 200;
		t.x = 26;
		t.elementsContent = [this.lbl_scoreName0_i(),this.lbl_scoreNum0_i(),this._Image22_i()];
		return t;
	};
	_proto.lbl_scoreName0_i = function () {
		var t = new eui.Label();
		this.lbl_scoreName0 = t;
		t.height = 31.124;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Hello, world";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 133.621;
		return t;
	};
	_proto.lbl_scoreNum0_i = function () {
		var t = new eui.Label();
		this.lbl_scoreNum0 = t;
		t.height = 31.124;
		t.horizontalCenter = 80;
		t.size = 18;
		t.text = "12";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 79.621;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -79.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.rank_top1";
		t.verticalCenter = 0;
		t.x = 8;
		return t;
	};
	_proto.grp_score1_i = function () {
		var t = new eui.Group();
		this.grp_score1 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 67;
		t.touchChildren = false;
		t.width = 200;
		t.x = 36;
		t.y = 47;
		t.elementsContent = [this.lbl_scoreName1_i(),this.lbl_scoreNum1_i(),this._Image23_i()];
		return t;
	};
	_proto.lbl_scoreName1_i = function () {
		var t = new eui.Label();
		this.lbl_scoreName1 = t;
		t.height = 31.124;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Hello, world";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 133.621;
		return t;
	};
	_proto.lbl_scoreNum1_i = function () {
		var t = new eui.Label();
		this.lbl_scoreNum1 = t;
		t.height = 31.124;
		t.horizontalCenter = 80;
		t.size = 18;
		t.text = "12";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 79.621;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.rank_top2";
		t.verticalCenter = 0;
		t.x = 10.000000000000014;
		return t;
	};
	_proto.grp_score2_i = function () {
		var t = new eui.Group();
		this.grp_score2 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 97;
		t.touchChildren = false;
		t.width = 200;
		t.x = 46;
		t.y = 57;
		t.elementsContent = [this.lbl_scoreName2_i(),this.lbl_scoreNum2_i(),this._Image24_i()];
		return t;
	};
	_proto.lbl_scoreName2_i = function () {
		var t = new eui.Label();
		this.lbl_scoreName2 = t;
		t.height = 31.124;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Hello, world";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 133.621;
		return t;
	};
	_proto.lbl_scoreNum2_i = function () {
		var t = new eui.Label();
		this.lbl_scoreNum2 = t;
		t.height = 31.124;
		t.horizontalCenter = 80;
		t.size = 18;
		t.text = "12";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 79.621;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game1_json.rank_top3";
		t.verticalCenter = 0;
		t.x = 10.000000000000014;
		return t;
	};
	_proto.grp_score3_i = function () {
		var t = new eui.Group();
		this.grp_score3 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 127;
		t.touchChildren = false;
		t.width = 200;
		t.x = 56;
		t.y = 67;
		t.elementsContent = [this.lbl_scoreName3_i(),this.lbl_scoreNum3_i(),this._Label7_i()];
		return t;
	};
	_proto.lbl_scoreName3_i = function () {
		var t = new eui.Label();
		this.lbl_scoreName3 = t;
		t.height = 31.124;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Hello, world";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 133.621;
		return t;
	};
	_proto.lbl_scoreNum3_i = function () {
		var t = new eui.Label();
		this.lbl_scoreNum3 = t;
		t.height = 31.124;
		t.horizontalCenter = 80;
		t.size = 18;
		t.text = "12";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 79.621;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.height = 22;
		t.horizontalCenter = -80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 22;
		t.x = 9.000000000000014;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.height = 68;
		t.horizontalCenter = -318;
		t.source = "game1_json.img_pause";
		t.verticalCenter = -300;
		t.width = 60;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/OtherHPBar.exml'] = window.skins.OtherHPBar = (function (_super) {
	__extends(OtherHPBar, _super);
	function OtherHPBar() {
		_super.call(this);
		this.skinParts = ["rt_mask","img_dead"];
		
		this.height = 63;
		this.width = 63;
		this.elementsContent = [this._Image1_i(),this.rt_mask_i(),this.img_dead_i()];
	}
	var _proto = OtherHPBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.img_icon_bar_bg_1";
		t.verticalCenter = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.rt_mask_i = function () {
		var t = new eui.Rect();
		this.rt_mask = t;
		t.ellipseHeight = 70;
		t.ellipseWidth = 70;
		t.fillAlpha = 1;
		t.height = 55;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 55;
		return t;
	};
	_proto.img_dead_i = function () {
		var t = new eui.Image();
		this.img_dead = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_drs";
		t.verticalCenter = 0;
		t.visible = true;
		t.zIndex = 99;
		return t;
	};
	return OtherHPBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Pause.exml'] = window.skins.Pause = (function (_super) {
	__extends(Pause, _super);
	function Pause() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_continue","grp_home","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Pause.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this.grp_continue_i(),this.grp_home_i()];
		return t;
	};
	_proto.grp_continue_i = function () {
		var t = new eui.Group();
		this.grp_continue = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -60;
		t.width = 200;
		t.y = 512;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_tipsy";
		t.touchEnabled = false;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "Continue";
		t.textAlign = "center";
		t.textColor = 0xE46300;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_home_i = function () {
		var t = new eui.Group();
		this.grp_home = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 200;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_tipsg";
		t.touchEnabled = false;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "Home";
		t.textAlign = "center";
		t.textColor = 0x22690E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Pause;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/PlayerHPBar.exml'] = window.skins.PlayerHPBar = (function (_super) {
	__extends(PlayerHPBar, _super);
	function PlayerHPBar() {
		_super.call(this);
		this.skinParts = ["thumb","img_life0","img_life1","img_life2","lbl_name","rt_mask"];
		
		this.height = 23;
		this.width = 166;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.thumb_i(),this.img_life0_i(),this.img_life1_i(),this.img_life2_i(),this._Image3_i(),this.lbl_name_i(),this.rt_mask_i()];
	}
	var _proto = PlayerHPBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 10;
		t.source = "game1_json.img_icon_bar_bg_3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_tx_xtd";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 8;
		t.source = "game0_json.img_tx_lxt";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_life0_i = function () {
		var t = new eui.Image();
		this.img_life0 = t;
		t.horizontalCenter = -55;
		t.source = "game1_json.img_health_icon";
		t.verticalCenter = 23.5;
		t.x = 43;
		t.y = -8;
		return t;
	};
	_proto.img_life1_i = function () {
		var t = new eui.Image();
		this.img_life1 = t;
		t.horizontalCenter = -34;
		t.source = "game1_json.img_health_icon";
		t.verticalCenter = 23.5;
		t.x = 53;
		t.y = 2;
		return t;
	};
	_proto.img_life2_i = function () {
		var t = new eui.Image();
		this.img_life2 = t;
		t.horizontalCenter = -13;
		t.source = "game1_json.img_health_icon";
		t.verticalCenter = 23.5;
		t.x = 63;
		t.y = 12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -123;
		t.source = "game1_json.img_icon_bar_bg_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.height = 41.405;
		t.left = 19;
		t.size = 20;
		t.text = "Me";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = -33;
		t.width = 174.943;
		return t;
	};
	_proto.rt_mask_i = function () {
		var t = new eui.Rect();
		this.rt_mask = t;
		t.ellipseHeight = 70;
		t.ellipseWidth = 70;
		t.fillAlpha = 1;
		t.height = 70;
		t.horizontalCenter = -125;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	return PlayerHPBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RoleHPBar.exml'] = window.skins.RoleHPBar = (function (_super) {
	__extends(RoleHPBar, _super);
	function RoleHPBar() {
		_super.call(this);
		this.skinParts = ["thumb","img_life0","img_life1","img_life2"];
		
		this.height = 12;
		this.width = 83;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.img_life0_i(),this.img_life1_i(),this.img_life2_i()];
	}
	var _proto = RoleHPBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(10,0,65,12);
		t.source = "game0_json.img_xtd";
		t.top = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.bottom = 1;
		t.left = 1;
		t.right = 1;
		t.scale9Grid = new egret.Rectangle(9,0,63,10);
		t.source = "game1_json.img_hxt";
		t.top = 1;
		t.visible = true;
		return t;
	};
	_proto.img_life0_i = function () {
		var t = new eui.Image();
		this.img_life0 = t;
		t.horizontalCenter = -24;
		t.source = "game1_json.img_health_icon";
		t.verticalCenter = -20;
		t.x = 43;
		t.y = -8;
		return t;
	};
	_proto.img_life1_i = function () {
		var t = new eui.Image();
		this.img_life1 = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.img_health_bg";
		t.verticalCenter = -20;
		return t;
	};
	_proto.img_life2_i = function () {
		var t = new eui.Image();
		this.img_life2 = t;
		t.horizontalCenter = 24;
		t.source = "game1_json.img_health_bg";
		t.verticalCenter = -20;
		t.x = 53;
		t.y = 2;
		return t;
	};
	return RoleHPBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Role.exml'] = window.skins.Role = (function (_super) {
	__extends(Role, _super);
	function Role() {
		_super.call(this);
		this.skinParts = ["pb_hp"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this._Rect1_i(),this.pb_hp_i()];
	}
	var _proto = Role.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 100;
		return t;
	};
	_proto.pb_hp_i = function () {
		var t = new Scene.Game.RoleHPBar();
		this.pb_hp = t;
		t.height = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.skinName = "skins.RoleHPBar";
		t.slideDuration = 0;
		t.value = 50;
		t.verticalCenter = -117;
		t.width = 83;
		t.zIndex = 99;
		return t;
	};
	return Role;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GetReward.exml'] = window.skins.GetReward = (function (_super) {
	__extends(GetReward, _super);
	function GetReward() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_ok","img_gun","grp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = GetReward.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = -200;
		t.right = -200;
		t.top = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.grp_ok_i(),this._Label2_i(),this.img_gun_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(111,0,222,80);
		t.source = "game0_json.img_tittle_bg";
		t.verticalCenter = -266;
		t.width = 664;
		t.zIndex = 100;
		return t;
	};
	_proto.grp_ok_i = function () {
		var t = new eui.Group();
		this.grp_ok = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 269;
		t.zIndex = 100;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_tipsg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = -835.9999999999999;
		t.y = -416.9999999999999;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 10;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "OK";
		t.textAlign = "center";
		t.textColor = 0x22690E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 80.023;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 3;
		t.strokeColor = 0xFF9511;
		t.text = "Congratulations!";
		t.textAlign = "center";
		t.textColor = 0xFFD700;
		t.verticalAlign = "middle";
		t.verticalCenter = -264;
		t.width = 542.395;
		t.zIndex = 100;
		return t;
	};
	_proto.img_gun_i = function () {
		var t = new eui.Image();
		this.img_gun = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.gunskin_2";
		t.verticalCenter = 7;
		t.zIndex = 100;
		return t;
	};
	return GetReward;
})(eui.Skin);