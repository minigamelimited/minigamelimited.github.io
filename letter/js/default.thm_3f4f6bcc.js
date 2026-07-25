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
                generateEUI.skins = {"Scene.Common":"resource/eui_skins/Common.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Cover.PolygonEditor":"resource/eui_skins/cover/PolygonEditor.exml","Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Game.Letter":"resource/eui_skins/game/Letter.exml","Scene.Game.TipLetter":"resource/eui_skins/game/TipLetter.exml","Scene.Game.TipAll":"resource/eui_skins/game/TipAll.exml","Scene.Game.GameOver":"resource/eui_skins/game/GameOver.exml","Scene.Game.Guide0":"resource/eui_skins/game/Guide0.exml","Scene.Sign":"resource/eui_skins/Sign.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = ["lbl_gold"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Common.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = -208.5;
		t.touchChildren = false;
		t.verticalCenter = -600;
		t.width = 193;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.lbl_gold_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(59,0,50,59);
		t.source = "game0_json.bg_key_num";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -30;
		t.source = "game0_json.icon_jinbi";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.bottom = 0;
		t.left = 25;
		t.right = 0;
		t.size = 27;
		t.text = "88888";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
	}
	var _proto = Main.prototype;

	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/PolygonEditor.exml'] = window.skins.PolygonEditor = (function (_super) {
	__extends(PolygonEditor, _super);
	function PolygonEditor() {
		_super.call(this);
		this.skinParts = ["img_0","grp_draw","et_name","grp_print","grp_clear","grp_del","grp_load"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_draw_i(),this._Group1_i(),this.grp_print_i(),this.grp_clear_i(),this.grp_del_i(),this.grp_load_i()];
	}
	var _proto = PolygonEditor.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_draw_i = function () {
		var t = new eui.Group();
		this.grp_draw = t;
		t.height = 1454.628;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.touchChildren = false;
		t.width = 2208.434;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.img_0_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 1;
		t.left = -734;
		t.right = 0;
		t.top = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = -327;
		t.left = 100;
		t.top = -690;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 1;
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.alpha = 0.5;
		t.source = "level0_json.lv0_1";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 75;
		t.horizontalCenter = -36.37;
		t.verticalCenter = 221.976;
		t.width = 282;
		t.elementsContent = [this._Rect4_i(),this.et_name_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x6F6F6F;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.et_name_i = function () {
		var t = new eui.EditableText();
		this.et_name = t;
		t.backgroundColor = 0x262626;
		t.height = 75;
		t.horizontalCenter = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 262;
		return t;
	};
	_proto.grp_print_i = function () {
		var t = new eui.Group();
		this.grp_print = t;
		t.height = 88;
		t.horizontalCenter = 160.63;
		t.touchChildren = false;
		t.verticalCenter = 474.476;
		t.width = 200;
		t.x = 56;
		t.y = 789;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(39,29,45,30);
		t.source = "game0_json.btn_queren";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "打印点";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_clear_i = function () {
		var t = new eui.Group();
		this.grp_clear = t;
		t.height = 88;
		t.horizontalCenter = -80.37;
		t.touchChildren = false;
		t.verticalCenter = 474.476;
		t.width = 200;
		t.x = 66;
		t.y = 799;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(39,29,45,30);
		t.source = "game0_json.btn_queren";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "清除";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_del_i = function () {
		var t = new eui.Group();
		this.grp_del = t;
		t.height = 88;
		t.horizontalCenter = 159.63;
		t.touchChildren = false;
		t.verticalCenter = 350.476;
		t.width = 200;
		t.x = 46;
		t.y = 779;
		t.elementsContent = [this._Image3_i(),this._Label3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(39,29,45,30);
		t.source = "game0_json.btn_queren";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "撤销点";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_load_i = function () {
		var t = new eui.Group();
		this.grp_load = t;
		t.height = 88;
		t.horizontalCenter = -79.37;
		t.touchChildren = false;
		t.verticalCenter = 347.476;
		t.width = 200;
		t.elementsContent = [this._Image4_i(),this._Label4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(39,29,45,30);
		t.source = "game0_json.btn_queren";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "载入图片";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return PolygonEditor;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_light","lbl_gold","lbl_0","grp_0","grp_main"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.img_light_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.lbl_gold_i(),this.grp_0_i()];
		return t;
	};
	_proto.img_light_i = function () {
		var t = new eui.Image();
		this.img_light = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_light";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_jinbi_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_huangguan";
		t.verticalCenter = -392.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_caidai";
		t.verticalCenter = -300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "COMPLETE";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -310;
		t.width = 598.148;
		t.x = 86;
		t.y = 893;
		return t;
	};
	_proto.lbl_gold_i = function () {
		var t = new eui.Label();
		this.lbl_gold = t;
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.text = "+300";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 180.5;
		t.width = 598.148;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 310;
		t.width = 244;
		t.y = 1013;
		t.elementsContent = [this._Image4_i(),this.lbl_0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_01";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_0_i = function () {
		var t = new eui.Label();
		this.lbl_0 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "Continue";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 231;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Guide0.exml'] = window.skins.Guide0 = (function (_super) {
	__extends(Guide0, _super);
	function Guide0() {
		_super.call(this);
		this.skinParts = ["img_0","img_finger","grp_step0","grp_step4","grp_step1","grp_step2","grp_step3","grp_finger"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.grp_step0_i(),this._Group1_i(),this._Group2_i(),this.grp_step4_i(),this.grp_step1_i(),this.grp_step2_i(),this.grp_step3_i(),this.grp_finger_i()];
	}
	var _proto = Guide0.prototype;

	_proto.grp_step0_i = function () {
		var t = new eui.Group();
		this.grp_step0 = t;
		t.height = 1014;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_0_i(),this.img_finger_i()];
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.alpha = 0.5;
		t.source = "level0_json.lv0_1";
		t.x = 442.616;
		t.y = 808.213;
		return t;
	};
	_proto.img_finger_i = function () {
		var t = new eui.Image();
		this.img_finger = t;
		t.anchorOffsetX = 15;
		t.anchorOffsetY = 15;
		t.source = "game0_json.f42716_finger";
		t.x = 503;
		t.y = 865;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 320;
		t.left = 145;
		t.right = 350;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 320;
		t.right = 0;
		t.width = 200;
		return t;
	};
	_proto.grp_step4_i = function () {
		var t = new eui.Group();
		this.grp_step4 = t;
		t.bottom = 0;
		t.height = 320;
		t.horizontalCenter = 100;
		t.width = 150;
		t.y = 1024;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = -400;
		t.y = 114.99999999999989;
		return t;
	};
	_proto.grp_step1_i = function () {
		var t = new eui.Group();
		this.grp_step1 = t;
		t.height = 90;
		t.left = 0;
		t.verticalCenter = 417;
		t.width = 145;
		t.x = 10;
		t.y = 1139;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 145;
		t.y = -115.00000000000004;
		return t;
	};
	_proto.grp_step2_i = function () {
		var t = new eui.Group();
		this.grp_step2 = t;
		t.height = 90;
		t.left = 0;
		t.verticalCenter = 507;
		t.width = 145;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		t.y = -89.99999999999994;
		return t;
	};
	_proto.grp_step3_i = function () {
		var t = new eui.Group();
		this.grp_step3 = t;
		t.height = 90;
		t.left = 0;
		t.verticalCenter = 597;
		t.width = 145;
		t.x = 10;
		t.y = 1139;
		t.elementsContent = [this._Rect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 145;
		t.y = -115.00000000000004;
		return t;
	};
	_proto.grp_finger_i = function () {
		var t = new eui.Group();
		this.grp_finger = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 200;
		t.x = -169;
		t.y = 1326;
		t.elementsContent = [this._Rect5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	return Guide0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Letter.exml'] = window.skins.Letter = (function (_super) {
	__extends(Letter, _super);
	function Letter() {
		_super.call(this);
		this.skinParts = ["img_letter","lbl_num","grp_num","grp_main"];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = Letter.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 60;
		t.elementsContent = [this.img_letter_i(),this.grp_num_i()];
		return t;
	};
	_proto.img_letter_i = function () {
		var t = new eui.Image();
		this.img_letter = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.btn_A";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 2.0000000000000284;
		t.y = 2;
		return t;
	};
	_proto.grp_num_i = function () {
		var t = new eui.Group();
		this.grp_num = t;
		t.height = 27;
		t.horizontalCenter = 25;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 25;
		t.width = 27;
		t.elementsContent = [this._Image1_i(),this.lbl_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_step";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_num_i = function () {
		var t = new eui.Label();
		this.lbl_num = t;
		t.height = 27;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 27;
		return t;
	};
	return Letter;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","grp_main","lbl_ok","grp_ok","img_tip0","lbl_tip0Num","grp_tip0","img_tip1","lbl_tip1Num","grp_tip1","img_tip","grp_letter","lbl_lv","img_restart"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.grp_main_i(),this.grp_letter_i(),this.lbl_lv_i(),this.img_restart_i()];
	}
	var _proto = Main.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1334;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.zIndex = 0;
		return t;
	};
	_proto.grp_letter_i = function () {
		var t = new eui.Group();
		this.grp_letter = t;
		t.bottom = 0;
		t.height = 316;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.width = 723;
		t.elementsContent = [this._Image1_i(),this.grp_ok_i(),this.grp_tip0_i(),this.grp_tip1_i(),this.img_tip_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_mima";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_ok_i = function () {
		var t = new eui.Group();
		this.grp_ok = t;
		t.height = 88;
		t.horizontalCenter = 97;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 130;
		t.elementsContent = [this._Image2_i(),this.lbl_ok_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_queren";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_ok_i = function () {
		var t = new eui.Label();
		this.lbl_ok = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 45;
		t.stroke = 2;
		t.text = "OK";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_tip0_i = function () {
		var t = new eui.Group();
		this.grp_tip0 = t;
		t.height = 103;
		t.horizontalCenter = 308;
		t.touchChildren = false;
		t.verticalCenter = -69.5;
		t.width = 121;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.img_tip0_i(),this.lbl_tip0Num_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_item";
		t.verticalCenter = 6;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_tip0_i = function () {
		var t = new eui.Image();
		this.img_tip0 = t;
		t.horizontalCenter = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_num";
		t.touchEnabled = false;
		t.verticalCenter = -40;
		t.visible = true;
		return t;
	};
	_proto.lbl_tip0Num_i = function () {
		var t = new eui.Label();
		this.lbl_tip0Num = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xA53E3E;
		t.text = "10";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -38.5;
		t.width = 50;
		return t;
	};
	_proto.grp_tip1_i = function () {
		var t = new eui.Group();
		this.grp_tip1 = t;
		t.height = 103;
		t.horizontalCenter = 308;
		t.touchChildren = false;
		t.verticalCenter = 57.5;
		t.width = 121;
		t.x = 619;
		t.y = 58;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.img_tip1_i(),this.lbl_tip1Num_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_item";
		t.verticalCenter = 6;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_tip1_i = function () {
		var t = new eui.Image();
		this.img_tip1 = t;
		t.horizontalCenter = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_add";
		t.touchEnabled = false;
		t.verticalCenter = -40;
		t.visible = true;
		return t;
	};
	_proto.lbl_tip1Num_i = function () {
		var t = new eui.Label();
		this.lbl_tip1Num = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xA53E3E;
		t.text = "10";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -38.5;
		t.width = 50;
		return t;
	};
	_proto.img_tip_i = function () {
		var t = new eui.Image();
		this.img_tip = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 80;
		t.source = "game0_json.img_fangda";
		t.x = 285.571;
		t.y = 68;
		t.zIndex = 99;
		return t;
	};
	_proto.lbl_lv_i = function () {
		var t = new eui.Label();
		this.lbl_lv = t;
		t.height = 72.782;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Level 333";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -600;
		t.width = 307.232;
		return t;
	};
	_proto.img_restart_i = function () {
		var t = new eui.Image();
		this.img_restart = t;
		t.horizontalCenter = 315;
		t.source = "game0_json.btn_back";
		t.verticalCenter = -600;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/TipAll.exml'] = window.skins.TipAll = (function (_super) {
	__extends(TipAll, _super);
	function TipAll() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_light","grp_0","grp_1","grp_normal","img_result","grp_result","img_close","grp_main"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = TipAll.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 750;
		t.elementsContent = [this.grp_normal_i(),this.grp_result_i(),this.img_close_i()];
		return t;
	};
	_proto.grp_normal_i = function () {
		var t = new eui.Group();
		this.grp_normal = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 750;
		t.elementsContent = [this.img_light_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.grp_0_i(),this.grp_1_i()];
		return t;
	};
	_proto.img_light_i = function () {
		var t = new eui.Image();
		this.img_light = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.bg_light";
		t.verticalCenter = 0;
		t.x = 162.9999999999999;
		t.y = 163;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.bg_biaoti";
		t.verticalCenter = -300;
		t.x = 130;
		t.y = 15.999999999999972;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_item1_big";
		t.verticalCenter = 0;
		t.x = 279;
		t.y = 249;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Reveal Answer";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 180.5;
		t.width = 598.148;
		t.x = 76;
		t.y = 521.9999999999999;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.text = "ANSWER";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -310;
		t.width = 598.148;
		t.x = 76;
		t.y = 30.999999999999986;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 310;
		t.width = 244;
		t.y = 640.9999999999999;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_02";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 64;
		t.right = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "500";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -72;
		t.source = "game0_json.icon_jinbi";
		t.touchEnabled = false;
		t.verticalCenter = -4;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 88;
		t.horizontalCenter = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 310;
		t.visible = false;
		t.width = 244;
		t.x = 403;
		t.y = 640.9999999999999;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_01";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 64;
		t.right = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "Free";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 54.232;
		t.horizontalCenter = -66.5;
		t.source = "game0_json.ad";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		t.width = 63.105;
		return t;
	};
	_proto.grp_result_i = function () {
		var t = new eui.Group();
		this.grp_result = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 750;
		t.elementsContent = [this._Image7_i(),this.img_result_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_tishi1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_result_i = function () {
		var t = new eui.Image();
		this.img_result = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 275;
		t.source = "game0_json.btn_close";
		t.verticalCenter = -287;
		return t;
	};
	return TipAll;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/TipLetter.exml'] = window.skins.TipLetter = (function (_super) {
	__extends(TipLetter, _super);
	function TipLetter() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_light","grp_0","grp_1","img_close","grp_main"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = TipLetter.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.img_light_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.grp_0_i(),this.grp_1_i(),this.img_close_i()];
		return t;
	};
	_proto.img_light_i = function () {
		var t = new eui.Image();
		this.img_light = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_light";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_biaoti";
		t.verticalCenter = -300;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game0_json.icon_item2_big";
		t.x = 268;
		t.y = 553;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Reveal a Letter";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 180.5;
		t.width = 598.148;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 67.439;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "HINT";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -310;
		t.width = 598.148;
		t.x = 86;
		t.y = 893;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 310;
		t.width = 244;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_02";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 64;
		t.right = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -72;
		t.source = "game0_json.icon_jinbi";
		t.touchEnabled = false;
		t.verticalCenter = -4;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 88;
		t.horizontalCenter = 150;
		t.touchChildren = false;
		t.verticalCenter = 310;
		t.visible = false;
		t.width = 244;
		t.x = 116;
		t.y = 1013;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.btn_01";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 64;
		t.right = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "Free";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 54.232;
		t.horizontalCenter = -66.5;
		t.source = "game0_json.ad";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		t.width = 63.105;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 275;
		t.source = "game0_json.btn_close";
		t.verticalCenter = -287;
		return t;
	};
	return TipLetter;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Sign.exml'] = window.skins.Sign = (function (_super) {
	__extends(Sign, _super);
	function Sign() {
		_super.call(this);
		this.skinParts = ["rt_bg","grp_check0","img_sel0","grp_day0","grp_check1","img_sel1","grp_day1","grp_check2","img_sel2","grp_day2","grp_check3","img_sel3","grp_day3","grp_check4","img_sel4","grp_day4","grp_check5","img_sel5","grp_day5","grp_check6","img_sel6","grp_day6","grp_main"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Sign.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 916;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 666;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.grp_day0_i(),this.grp_day1_i(),this.grp_day2_i(),this.grp_day3_i(),this.grp_day4_i(),this.grp_day5_i(),this.grp_day6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_tanchuang_qiandao";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 88.302;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.text = "REWARDS";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -378.5;
		t.width = 496.33;
		return t;
	};
	_proto.grp_day0_i = function () {
		var t = new eui.Group();
		this.grp_day0 = t;
		t.height = 226;
		t.horizontalCenter = -195;
		t.touchChildren = false;
		t.verticalCenter = -195;
		t.width = 174;
		t.x = 256;
		t.y = 165;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this.grp_check0_i(),this.img_sel0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item3_2";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 1";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+100";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check0_i = function () {
		var t = new eui.Group();
		this.grp_check0 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 174;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel0_i = function () {
		var t = new eui.Image();
		this.img_sel0 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day1_i = function () {
		var t = new eui.Group();
		this.grp_day1 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -195;
		t.width = 174;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label4_i(),this._Label5_i(),this.grp_check1_i(),this.img_sel1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item1_1";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 2";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+2";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check1_i = function () {
		var t = new eui.Group();
		this.grp_check1 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 174;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel1_i = function () {
		var t = new eui.Image();
		this.img_sel1 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day2_i = function () {
		var t = new eui.Group();
		this.grp_day2 = t;
		t.height = 226;
		t.horizontalCenter = 195;
		t.touchChildren = false;
		t.verticalCenter = -195;
		t.width = 174;
		t.x = 256;
		t.y = 165;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label6_i(),this._Label7_i(),this.grp_check2_i(),this.img_sel2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item3_2";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 3";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+200";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check2_i = function () {
		var t = new eui.Group();
		this.grp_check2 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 174;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel2_i = function () {
		var t = new eui.Image();
		this.img_sel2 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day3_i = function () {
		var t = new eui.Group();
		this.grp_day3 = t;
		t.height = 226;
		t.horizontalCenter = -195;
		t.touchChildren = false;
		t.verticalCenter = 45;
		t.width = 174;
		t.x = 266;
		t.y = 195;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Label8_i(),this._Label9_i(),this.grp_check3_i(),this.img_sel3_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item3_2";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 4";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+250";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check3_i = function () {
		var t = new eui.Group();
		this.grp_check3 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 174;
		t.elementsContent = [this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel3_i = function () {
		var t = new eui.Image();
		this.img_sel3 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day4_i = function () {
		var t = new eui.Group();
		this.grp_day4 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 45;
		t.width = 174;
		t.x = 256;
		t.y = 185;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Label10_i(),this._Label11_i(),this.grp_check4_i(),this.img_sel4_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item2_1";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 5";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+2";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check4_i = function () {
		var t = new eui.Group();
		this.grp_check4 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 174;
		t.elementsContent = [this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel4_i = function () {
		var t = new eui.Image();
		this.img_sel4 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day5_i = function () {
		var t = new eui.Group();
		this.grp_day5 = t;
		t.height = 226;
		t.horizontalCenter = 195;
		t.touchChildren = false;
		t.verticalCenter = 45;
		t.width = 174;
		t.x = 266;
		t.y = 195;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._Label12_i(),this._Label13_i(),this.grp_check5_i(),this.img_sel5_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_item3_2";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 6";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "+350";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.grp_check5_i = function () {
		var t = new eui.Group();
		this.grp_check5 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 174;
		t.elementsContent = [this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel5_i = function () {
		var t = new eui.Image();
		this.img_sel5 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		return t;
	};
	_proto.grp_day6_i = function () {
		var t = new eui.Group();
		this.grp_day6 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 285;
		t.width = 334;
		t.x = 266;
		t.y = 195;
		t.elementsContent = [this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this.grp_check6_i(),this.img_sel6_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.bg_day2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 70;
		t.source = "game0_json.icon_item1_1";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -70;
		t.source = "game0_json.icon_item2_1";
		t.touchEnabled = false;
		t.verticalCenter = 10;
		t.x = 193;
		t.y = 81;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Day 7";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -86;
		t.width = 159.454;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = -70;
		t.stroke = 2;
		t.text = "+2";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.height = 36.364;
		t.horizontalCenter = 70;
		t.stroke = 2;
		t.text = "+2";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 75;
		t.width = 159.454;
		t.x = 27;
		t.y = 29;
		return t;
	};
	_proto.grp_check6_i = function () {
		var t = new eui.Group();
		this.grp_check6 = t;
		t.height = 226;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 334;
		t.elementsContent = [this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,0,135,225);
		t.source = "game0_json.bg_day_zz";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 334;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.icon_finish";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sel6_i = function () {
		var t = new eui.Image();
		this.img_sel6 = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(27,0,145,247);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_xuanzhong";
		t.touchEnabled = false;
		t.verticalCenter = -3;
		t.width = 362;
		return t;
	};
	return Sign;
})(eui.Skin);