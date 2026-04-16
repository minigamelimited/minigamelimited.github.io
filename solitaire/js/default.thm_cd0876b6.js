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
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Cover.MainH":"resource/eui_skins/cover/MainH.exml","Scene.Cover.MainV":"resource/eui_skins/cover/MainV.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.Klondike.Main":"resource/eui_skins/klondike/Main.exml","Scene.Spider.Main":"resource/eui_skins/spider/Main.exml","Scene.FreeCell.Main":"resource/eui_skins/freecell/Main.exml","Scene.TriPeaks.Main":"resource/eui_skins/tripeaks/Main.exml","Scene.Pyramid.Main":"resource/eui_skins/pyramid/Main.exml","Scene.Card":"resource/eui_skins/Card.exml","Scene.GameOver":"resource/eui_skins/GameOver.exml","Scene.Pause":"resource/eui_skins/Pause.exml","Scene.Setting":"resource/eui_skins/Setting.exml","Scene.Toast":"resource/eui_skins/Toast.exml"};generateEUI.paths['resource/eui_skins/Card.exml'] = window.skins.Card = (function (_super) {
	__extends(Card, _super);
	function Card() {
		_super.call(this);
		this.skinParts = ["img_bg","img_poke","img_dark","grp_main"];
		
		this.height = 90;
		this.width = 64;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = Card.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 64;
		t.elementsContent = [this.img_bg_i(),this.img_poke_i(),this.img_dark_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.height = 93;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.paibg";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 70;
		t.x = -3;
		t.y = -1;
		return t;
	};
	_proto.img_poke_i = function () {
		var t = new eui.Image();
		this.img_poke = t;
		t.anchorOffsetX = 35;
		t.height = 93;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.A1";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 70;
		t.x = -3;
		t.y = -1;
		return t;
	};
	_proto.img_dark_i = function () {
		var t = new eui.Image();
		this.img_dark = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.source = "game0_json.img11";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	return Card;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 640;
	}
	var _proto = Main.prototype;

	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/MainH.exml'] = window.skins.MainH = (function (_super) {
	__extends(MainH, _super);
	function MainH() {
		_super.call(this);
		this.skinParts = ["grp_0","grp_1","grp_2","grp_3","grp_4","grp_screen","img_setting"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.grp_screen_i(),this.img_setting_i()];
	}
	var _proto = MainH.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1620;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.scaleX = -1;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1030;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i()];
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 300;
		t.horizontalCenter = -390;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.source = "game0_json.img4";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 89.671;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x5E006A;
		t.text = "Solitaire";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 95;
		t.width = 250;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 300;
		t.horizontalCenter = -130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 259.9999999999999;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.source = "game0_json.img5";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x006083;
		t.text = "Spider";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 95;
		t.width = 250;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.height = 300;
		t.horizontalCenter = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 519.9999999999999;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.source = "game0_json.img6";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x6F1100;
		t.text = "FreeCell";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 95;
		t.width = 250;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.height = 300;
		t.horizontalCenter = 390;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 780.0000000000001;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.source = "game0_json.img7";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x0F5700;
		t.text = "TriPeaks";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 95;
		t.width = 250.04;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.height = 300;
		t.horizontalCenter = 650;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 1040;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.source = "game0_json.img23";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x927B00;
		t.text = "Pyramid";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 95;
		t.width = 250.04;
		return t;
	};
	_proto.grp_screen_i = function () {
		var t = new eui.Group();
		this.grp_screen = t;
		t.height = 42;
		t.horizontalCenter = -370;
		t.touchChildren = false;
		t.verticalCenter = -235;
		t.width = 124;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game0_json.img8";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -31;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game0_json.img10";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_setting_i = function () {
		var t = new eui.Image();
		this.img_setting = t;
		t.height = 60;
		t.horizontalCenter = -488;
		t.source = "game0_json.img15";
		t.verticalCenter = -235;
		t.width = 60;
		return t;
	};
	return MainH;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/MainV.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_0","grp_1","grp_2","grp_3","grp_4","grp_screen","img_setting","grp_addDesktop","grp_revisit"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.grp_screen_i(),this.img_setting_i(),this.grp_addDesktop_i(),this.grp_revisit_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1620;
		t.horizontalCenter = 0;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i()];
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -300;
		t.width = 560;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "game0_json.img0";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 105;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x5E006A;
		t.text = "Solitaire";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320.04;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -100;
		t.width = 560;
		t.x = 0;
		t.y = 200;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "game0_json.img1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 105;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x006083;
		t.text = "Spider";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320.04;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 100;
		t.width = 560;
		t.x = 0;
		t.y = 399.9999999999999;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "game0_json.img2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 105;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x6F1100;
		t.text = "FreeCell";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320.04;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 300;
		t.width = 560;
		t.x = 0;
		t.y = 600;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "game0_json.img3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 105;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x0F5700;
		t.text = "TriPeaks";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320.04;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 500;
		t.width = 560;
		t.x = 0;
		t.y = 800;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "game0_json.img22";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 121.671;
		t.horizontalCenter = 105;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x927B00;
		t.text = "Pyramid";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320.04;
		return t;
	};
	_proto.grp_screen_i = function () {
		var t = new eui.Group();
		this.grp_screen = t;
		t.height = 42;
		t.horizontalCenter = -109;
		t.touchChildren = false;
		t.verticalCenter = -483;
		t.visible = false;
		t.width = 124;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game0_json.img8";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 31;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game0_json.img9";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_setting_i = function () {
		var t = new eui.Image();
		this.img_setting = t;
		t.height = 60;
		t.horizontalCenter = -227;
		t.source = "game0_json.img15";
		t.verticalCenter = -485;
		t.width = 60;
		return t;
	};
	_proto.grp_addDesktop_i = function () {
		var t = new eui.Group();
		this.grp_addDesktop = t;
		t.height = 70;
		t.horizontalCenter = -90;
		t.touchChildren = false;
		t.verticalCenter = 500;
		t.visible = false;
		t.width = 157;
		t.elementsContent = [this._Image9_i(),this._Label6_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img105";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "Add Desktop";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_revisit_i = function () {
		var t = new eui.Group();
		this.grp_revisit = t;
		t.height = 70;
		t.horizontalCenter = 90;
		t.touchChildren = false;
		t.verticalCenter = 500;
		t.visible = false;
		t.width = 157;
		t.elementsContent = [this._Image10_i(),this._Label7_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img105";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "Revisit";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/freecell/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_bg_i(),this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.source = "bg2_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.height = 86;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 60;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 0;
		t.width = 60;
		t.x = 300;
		t.y = 20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -176;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 0;
		t.width = 60;
		t.x = 310;
		t.y = 30;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -112;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 0;
		t.width = 60;
		t.x = 290;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 0;
		t.width = 60;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 298;
		t.y = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 112;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 308;
		t.y = 20;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 176;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 318;
		t.y = 30;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 310;
		t.y = 30;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -224;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 66;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 130;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 194.0000000000001;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 258.0000000000001;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 268.0000000000001;
		t.y = 153;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 204.0000000000001;
		t.y = 153;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 140;
		t.y = 153;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 224;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		t.x = 76;
		t.y = 153;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_home","lbl_gameTimeV","lbl_gameScoreV","grp_infoV","lbl_gameTimeH","lbl_gameScoreH","grp_infoH","img_restart"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_home_i(),this.grp_infoV_i(),this.grp_infoH_i(),this.img_restart_i(),this._Group1_i()];
	}
	var _proto = Main.prototype;

	_proto.img_home_i = function () {
		var t = new eui.Image();
		this.img_home = t;
		t.height = 60;
		t.horizontalCenter = -550;
		t.source = "game0_json.img14";
		t.verticalCenter = 190;
		t.width = 60;
		t.x = 150;
		t.y = -131;
		return t;
	};
	_proto.grp_infoV_i = function () {
		var t = new eui.Group();
		this.grp_infoV = t;
		t.height = 106;
		t.horizontalCenter = -205;
		t.touchChildren = false;
		t.verticalCenter = -400;
		t.width = 212;
		t.elementsContent = [this._Label1_i(),this.lbl_gameTimeV_i(),this._Label2_i(),this.lbl_gameScoreV_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 60;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Time: ";
		t.textAlign = "right";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.lbl_gameTimeV_i = function () {
		var t = new eui.Label();
		this.lbl_gameTimeV = t;
		t.height = 60;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0:00";
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.height = 60;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Score: ";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.lbl_gameScoreV_i = function () {
		var t = new eui.Label();
		this.lbl_gameScoreV = t;
		t.bottom = 0;
		t.height = 60;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 110;
		return t;
	};
	_proto.grp_infoH_i = function () {
		var t = new eui.Group();
		this.grp_infoH = t;
		t.height = 240;
		t.horizontalCenter = 500;
		t.touchChildren = false;
		t.verticalCenter = -77;
		t.width = 100;
		t.x = 19;
		t.y = -123;
		t.elementsContent = [this._Label3_i(),this.lbl_gameTimeH_i(),this._Label4_i(),this.lbl_gameScoreH_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 60;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Time: ";
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.lbl_gameTimeH_i = function () {
		var t = new eui.Label();
		this.lbl_gameTimeH = t;
		t.height = 60;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0:00";
		t.textAlign = "right";
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 60;
		t.height = 60;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Score: ";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.lbl_gameScoreH_i = function () {
		var t = new eui.Label();
		this.lbl_gameScoreH = t;
		t.bottom = 0;
		t.height = 60;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.img_restart_i = function () {
		var t = new eui.Image();
		this.img_restart = t;
		t.height = 60;
		t.horizontalCenter = -550;
		t.source = "game0_json.img16";
		t.verticalCenter = 270;
		t.width = 60;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = -537;
		t.verticalCenter = -300;
		t.width = 200;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOver.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["rt_bg","lbl_gameTime","lbl_gameScore","grp_0","grp_1","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.left = -200;
		t.right = -200;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this.lbl_gameTime_i(),this._Label3_i(),this.lbl_gameScore_i(),this.grp_0_i(),this.grp_1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -176;
		t.source = "game0_json.img103";
		t.verticalCenter = -160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 176;
		t.scaleX = -1;
		t.source = "game0_json.img103";
		t.verticalCenter = -160;
		t.x = 28;
		t.y = -9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -237.5;
		t.source = "game0_json.img104";
		t.verticalCenter = 85;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 237.5;
		t.scaleX = -1;
		t.source = "game0_json.img104";
		t.verticalCenter = 85;
		t.x = -37;
		t.y = 209;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 358;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(43,37,305,285);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img107";
		t.verticalCenter = 79;
		t.width = 388;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img109";
		t.verticalCenter = -120;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 68;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 1;
		t.text = "COMPLETE";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -81;
		t.width = 371;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 42;
		t.horizontalCenter = -67;
		t.text = "Time";
		t.textAlign = "right";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = 45;
		t.width = 112;
		return t;
	};
	_proto.lbl_gameTime_i = function () {
		var t = new eui.Label();
		this.lbl_gameTime = t;
		t.height = 42;
		t.horizontalCenter = 67;
		t.text = "1:00";
		t.textAlign = "left";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = 45;
		t.width = 112;
		t.x = 137;
		t.y = 284;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 42;
		t.horizontalCenter = -67;
		t.text = "Score";
		t.textAlign = "right";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = 96;
		t.width = 112;
		t.x = 137;
		t.y = 284;
		return t;
	};
	_proto.lbl_gameScore_i = function () {
		var t = new eui.Label();
		this.lbl_gameScore = t;
		t.height = 42;
		t.horizontalCenter = 67;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = 96;
		t.width = 112;
		t.x = 147;
		t.y = 294;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 63;
		t.horizontalCenter = -85;
		t.touchChildren = false;
		t.verticalCenter = 185;
		t.visible = true;
		t.width = 150;
		t.x = 120;
		t.y = 301;
		t.elementsContent = [this._Image7_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,118,51);
		t.source = "game0_json.img105";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "Home";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 63;
		t.horizontalCenter = 85;
		t.touchChildren = false;
		t.verticalCenter = 185;
		t.visible = true;
		t.width = 150;
		t.x = 130;
		t.y = 311;
		t.elementsContent = [this._Image8_i(),this._Label5_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,118,51);
		t.source = "game0_json.img106";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "Restart";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/klondike/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","grp_main","img_configH_1","img_configH_3","grp_configH","img_configV_1","img_configV_3","grp_configV"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_bg_i(),this.grp_main_i(),this.grp_configH_i(),this.grp_configV_i()];
	}
	var _proto = Main.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.source = "bg0_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 192;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 2;
		t.width = 60;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -192;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 2;
		t.width = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -128;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 2;
		t.width = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 2;
		t.width = 60;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img12";
		t.top = 2;
		t.width = 60;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -192;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -128;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 128;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 192;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 100;
		t.width = 60;
		return t;
	};
	_proto.grp_configH_i = function () {
		var t = new eui.Group();
		this.grp_configH = t;
		t.height = 160;
		t.horizontalCenter = 500;
		t.touchChildren = false;
		t.verticalCenter = 230;
		t.width = 120;
		t.elementsContent = [this.img_configH_1_i(),this.img_configH_3_i()];
		return t;
	};
	_proto.img_configH_1_i = function () {
		var t = new eui.Image();
		this.img_configH_1 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img17";
		t.touchEnabled = false;
		t.verticalCenter = -40;
		return t;
	};
	_proto.img_configH_3_i = function () {
		var t = new eui.Image();
		this.img_configH_3 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img18";
		t.touchEnabled = false;
		t.verticalCenter = 40;
		return t;
	};
	_proto.grp_configV_i = function () {
		var t = new eui.Group();
		this.grp_configV = t;
		t.height = 80;
		t.horizontalCenter = 218;
		t.touchChildren = false;
		t.verticalCenter = -420;
		t.width = 200;
		t.elementsContent = [this.img_configV_1_i(),this.img_configV_3_i()];
		return t;
	};
	_proto.img_configV_1_i = function () {
		var t = new eui.Image();
		this.img_configV_1 = t;
		t.horizontalCenter = -40;
		t.source = "game0_json.img17";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_configV_3_i = function () {
		var t = new eui.Image();
		this.img_configV_3 = t;
		t.horizontalCenter = 40;
		t.source = "game0_json.img18";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Pause.exml'] = window.skins.Pause = (function (_super) {
	__extends(Pause, _super);
	function Pause() {
		_super.call(this);
		this.skinParts = ["rt_bg","lbl_title","lbl_content","grp_0","grp_1","grp_2","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Pause.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.left = -200;
		t.right = -200;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 420;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 420;
		t.elementsContent = [this._Image1_i(),this.lbl_title_i(),this.lbl_content_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,81,305,255);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img108";
		t.top = 0;
		return t;
	};
	_proto.lbl_title_i = function () {
		var t = new eui.Label();
		this.lbl_title = t;
		t.height = 79;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.strokeColor = 0x00376D;
		t.text = "Pause";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -168;
		t.x = 109.99999999999999;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.height = 111;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x00376D;
		t.text = "Changing card count requires\nrestarting the game";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -50;
		t.wordWrap = true;
		t.x = 109.99999999999999;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 63;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -30;
		t.visible = true;
		t.width = 200;
		t.x = 120;
		t.y = 301;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,118,51);
		t.source = "game0_json.img105";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "Home";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 63;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 50;
		t.width = 200;
		t.x = 130;
		t.y = 311;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,118,51);
		t.source = "game0_json.img106";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "Resume";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.height = 63;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 130;
		t.width = 200;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,118,51);
		t.source = "game0_json.img106";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "Restart";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return Pause;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pyramid/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","img_tipLinesH","img_tipNumH_13","img_tipNumH_12","img_tipNumH_1","img_tipNumH_11","img_tipNumH_2","img_tipNumH_10","img_tipNumH_3","img_tipNumH_9","img_tipNumH_4","img_tipNumH_8","img_tipNumH_5","img_tipNumH_7","img_tipNumH_6","img_tipLineH0","img_tipLineH1","grp_tipH","img_tipLinesV","img_tipNumV_13","img_tipNumV_12","img_tipNumV_1","img_tipNumV_11","img_tipNumV_2","img_tipNumV_10","img_tipNumV_3","img_tipNumV_9","img_tipNumV_4","img_tipNumV_8","img_tipNumV_5","img_tipNumV_7","img_tipNumV_6","img_tipLineV0","img_tipLineV1","grp_tipV","img_arrow","img_reset","img_sel","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_bg_i(),this.grp_tipH_i(),this.grp_tipV_i(),this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.source = "bg4_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_tipH_i = function () {
		var t = new eui.Group();
		this.grp_tipH = t;
		t.bottom = 10;
		t.height = 240;
		t.horizontalCenter = 500;
		t.width = 100;
		t.elementsContent = [this._Image1_i(),this.img_tipLinesH_i(),this.img_tipNumH_13_i(),this.img_tipNumH_12_i(),this.img_tipNumH_1_i(),this.img_tipNumH_11_i(),this.img_tipNumH_2_i(),this.img_tipNumH_10_i(),this.img_tipNumH_3_i(),this.img_tipNumH_9_i(),this.img_tipNumH_4_i(),this.img_tipNumH_8_i(),this.img_tipNumH_5_i(),this.img_tipNumH_7_i(),this.img_tipNumH_6_i(),this.img_tipLineH0_i(),this.img_tipLineH1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,12,74,74);
		t.source = "game0_json.imgtoast";
		t.top = 0;
		return t;
	};
	_proto.img_tipLinesH_i = function () {
		var t = new eui.Image();
		this.img_tipLinesH = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.imglines";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 10;
		t.y = 34;
		return t;
	};
	_proto.img_tipNumH_13_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_13 = t;
		t.height = 16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_K";
		t.verticalCenter = -90;
		t.width = 20;
		t.x = 35.00000000000003;
		t.y = 11.999999999999998;
		return t;
	};
	_proto.img_tipNumH_12_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_12 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_Q";
		t.verticalCenter = -60;
		t.width = 20;
		t.x = 17;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumH_1_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_1 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_A";
		t.verticalCenter = -60;
		t.width = 20;
		t.x = 53;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumH_11_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_11 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_J";
		t.verticalCenter = -30;
		t.width = 20;
		t.x = 17;
		t.y = 42;
		return t;
	};
	_proto.img_tipNumH_2_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_2 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_2";
		t.verticalCenter = -30;
		t.width = 20;
		t.x = 53;
		t.y = 42;
		return t;
	};
	_proto.img_tipNumH_10_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_10 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_10";
		t.verticalCenter = 0;
		t.width = 26;
		t.x = 14;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumH_3_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_3 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_3";
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 53;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumH_9_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_9 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_9";
		t.verticalCenter = 30;
		t.width = 20;
		t.x = 17;
		t.y = 162;
		return t;
	};
	_proto.img_tipNumH_4_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_4 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_4";
		t.verticalCenter = 30;
		t.width = 20;
		t.x = 53;
		t.y = 162;
		return t;
	};
	_proto.img_tipNumH_8_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_8 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_8";
		t.verticalCenter = 60;
		t.width = 20;
		t.x = 17;
		t.y = 222.00000000000003;
		return t;
	};
	_proto.img_tipNumH_5_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_5 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_5";
		t.verticalCenter = 60;
		t.width = 20;
		t.x = 53;
		t.y = 222.00000000000003;
		return t;
	};
	_proto.img_tipNumH_7_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_7 = t;
		t.height = 16;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_7";
		t.verticalCenter = 90;
		t.width = 20;
		t.x = 17;
		t.y = 282;
		return t;
	};
	_proto.img_tipNumH_6_i = function () {
		var t = new eui.Image();
		this.img_tipNumH_6 = t;
		t.height = 16;
		t.horizontalCenter = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_6";
		t.verticalCenter = 90;
		t.width = 20;
		t.x = 53;
		t.y = 282;
		return t;
	};
	_proto.img_tipLineH0_i = function () {
		var t = new eui.Image();
		this.img_tipLineH0 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 5;
		t.horizontalCenter = 0;
		t.source = "game0_json.imgline";
		t.width = 70;
		t.y = 27;
		return t;
	};
	_proto.img_tipLineH1_i = function () {
		var t = new eui.Image();
		this.img_tipLineH1 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 5;
		t.horizontalCenter = 0;
		t.source = "game0_json.imgline";
		t.width = 70;
		t.y = 27;
		return t;
	};
	_proto.grp_tipV_i = function () {
		var t = new eui.Group();
		this.grp_tipV = t;
		t.height = 100;
		t.horizontalCenter = 185;
		t.verticalCenter = -410;
		t.width = 240;
		t.x = 780;
		t.elementsContent = [this._Image2_i(),this.img_tipLinesV_i(),this.img_tipNumV_13_i(),this.img_tipNumV_12_i(),this.img_tipNumV_1_i(),this.img_tipNumV_11_i(),this.img_tipNumV_2_i(),this.img_tipNumV_10_i(),this.img_tipNumV_3_i(),this.img_tipNumV_9_i(),this.img_tipNumV_4_i(),this.img_tipNumV_8_i(),this.img_tipNumV_5_i(),this.img_tipNumV_7_i(),this.img_tipNumV_6_i(),this.img_tipLineV0_i(),this.img_tipLineV1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,12,74,74);
		t.source = "game0_json.imgtoast";
		t.top = 0;
		return t;
	};
	_proto.img_tipLinesV_i = function () {
		var t = new eui.Image();
		this.img_tipLinesV = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.imglines";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 10;
		t.y = 34;
		return t;
	};
	_proto.img_tipNumV_13_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_13 = t;
		t.height = 16;
		t.horizontalCenter = -90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_K";
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 35.00000000000003;
		t.y = 11.999999999999998;
		return t;
	};
	_proto.img_tipNumV_12_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_12 = t;
		t.height = 16;
		t.horizontalCenter = -60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_Q";
		t.verticalCenter = -18;
		t.width = 20;
		t.x = 17;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumV_1_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_1 = t;
		t.height = 16;
		t.horizontalCenter = -60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_A";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumV_11_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_11 = t;
		t.height = 16;
		t.horizontalCenter = -30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_J";
		t.verticalCenter = -18;
		t.width = 20;
		t.x = 17;
		t.y = 42;
		return t;
	};
	_proto.img_tipNumV_2_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_2 = t;
		t.height = 16;
		t.horizontalCenter = -30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_2";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 42;
		return t;
	};
	_proto.img_tipNumV_10_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_10 = t;
		t.height = 16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_10";
		t.verticalCenter = -18;
		t.width = 26;
		t.x = 14;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumV_3_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_3 = t;
		t.height = 16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_3";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 102;
		return t;
	};
	_proto.img_tipNumV_9_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_9 = t;
		t.height = 16;
		t.horizontalCenter = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_9";
		t.verticalCenter = -18;
		t.width = 20;
		t.x = 17;
		t.y = 162;
		return t;
	};
	_proto.img_tipNumV_4_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_4 = t;
		t.height = 16;
		t.horizontalCenter = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_4";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 162;
		return t;
	};
	_proto.img_tipNumV_8_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_8 = t;
		t.height = 16;
		t.horizontalCenter = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_8";
		t.verticalCenter = -18;
		t.width = 20;
		t.x = 17;
		t.y = 222.00000000000003;
		return t;
	};
	_proto.img_tipNumV_5_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_5 = t;
		t.height = 16;
		t.horizontalCenter = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_5";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 222.00000000000003;
		return t;
	};
	_proto.img_tipNumV_7_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_7 = t;
		t.height = 16;
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_7";
		t.verticalCenter = -18;
		t.width = 20;
		t.x = 17;
		t.y = 282;
		return t;
	};
	_proto.img_tipNumV_6_i = function () {
		var t = new eui.Image();
		this.img_tipNumV_6 = t;
		t.height = 16;
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.num_6";
		t.verticalCenter = 18;
		t.width = 20;
		t.x = 53;
		t.y = 282;
		return t;
	};
	_proto.img_tipLineV0_i = function () {
		var t = new eui.Image();
		this.img_tipLineV0 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 5;
		t.rotation = 90;
		t.source = "game0_json.imgline";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 120;
		return t;
	};
	_proto.img_tipLineV1_i = function () {
		var t = new eui.Image();
		this.img_tipLineV1 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 5;
		t.rotation = 90;
		t.source = "game0_json.imgline";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 120;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_arrow_i(),this.img_reset_i(),this._Image3_i(),this.img_sel_i()];
		return t;
	};
	_proto.img_arrow_i = function () {
		var t = new eui.Image();
		this.img_arrow = t;
		t.alpha = 0.35;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.back";
		t.touchEnabled = false;
		t.y = 597;
		return t;
	};
	_proto.img_reset_i = function () {
		var t = new eui.Image();
		this.img_reset = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.height = 86;
		t.horizontalCenter = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img13";
		t.width = 60;
		t.x = 268.0000000000001;
		t.y = 564;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.height = 86;
		t.horizontalCenter = -96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.width = 60;
		t.x = 268.0000000000001;
		return t;
	};
	_proto.img_sel_i = function () {
		var t = new eui.Image();
		this.img_sel = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 51.5;
		t.height = 103;
		t.source = "game0_json.HintLight";
		t.touchEnabled = false;
		t.width = 78;
		t.x = 262;
		t.y = 467;
		t.zIndex = 99999999;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Setting.exml'] = window.skins.Setting = (function (_super) {
	__extends(Setting, _super);
	function Setting() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_0","img_toggle0","grp_0","img_1","img_toggle1","grp_1","img_close","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Setting.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.left = -200;
		t.right = -200;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 352;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 420;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.grp_0_i(),this.grp_1_i(),this.img_close_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,81,305,255);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img108";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 79;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.strokeColor = 0x00376D;
		t.text = "Setting";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -134;
		t.x = 109.99999999999999;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 58;
		t.horizontalCenter = 70;
		t.touchChildren = false;
		t.verticalCenter = -20;
		t.width = 140;
		t.elementsContent = [this.img_0_i(),this.img_toggle0_i()];
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.height = 55.611;
		t.horizontalCenter = 0;
		t.source = "game0_json.img112";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 139.027;
		return t;
	};
	_proto.img_toggle0_i = function () {
		var t = new eui.Image();
		this.img_toggle0 = t;
		t.height = 90.501;
		t.horizontalCenter = -40;
		t.source = "game0_json.img113";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 90.501;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 58;
		t.horizontalCenter = 70;
		t.touchChildren = false;
		t.verticalCenter = 80;
		t.width = 140;
		t.x = 239;
		t.y = 171;
		t.elementsContent = [this.img_1_i(),this.img_toggle1_i()];
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.height = 55.611;
		t.horizontalCenter = 0;
		t.source = "game0_json.img111";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 139.027;
		return t;
	};
	_proto.img_toggle1_i = function () {
		var t = new eui.Image();
		this.img_toggle1 = t;
		t.height = 90.501;
		t.horizontalCenter = -40;
		t.source = "game0_json.img113";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 90.501;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.height = 64.753;
		t.horizontalCenter = 162.5;
		t.source = "game0_json.img110";
		t.verticalCenter = -134.5;
		t.width = 64.753;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 79.529;
		t.horizontalCenter = -120;
		t.size = 40;
		t.text = "Sound";
		t.textAlign = "right";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = -20;
		t.width = 162.186;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 79.529;
		t.horizontalCenter = -120;
		t.size = 40;
		t.text = "Music";
		t.textAlign = "right";
		t.textColor = 0x194174;
		t.verticalAlign = "middle";
		t.verticalCenter = 80;
		t.width = 162.186;
		t.x = 19;
		t.y = 160;
		return t;
	};
	return Setting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/spider/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","grp_main","img_configH_1","img_configH_2","img_configH_4","grp_configH","img_configV_1","img_configV_2","img_configV_4","grp_configV"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_bg_i(),this.grp_main_i(),this.grp_configH_i(),this.grp_configV_i()];
	}
	var _proto = Main.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.source = "bg1_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 86;
		t.right = 0;
		t.width = 60;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -288;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -224;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 130;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 194.0000000000001;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 258.0000000000001;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 322.0000000000002;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 386.0000000000001;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 450;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 224;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 514;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.horizontalCenter = 288;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img11";
		t.top = 0;
		t.width = 60;
		t.x = 578;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 86;
		t.left = 0;
		t.width = 60;
		t.y = 564;
		return t;
	};
	_proto.grp_configH_i = function () {
		var t = new eui.Group();
		this.grp_configH = t;
		t.height = 240;
		t.horizontalCenter = 500;
		t.touchChildren = false;
		t.verticalCenter = 191;
		t.width = 120;
		t.elementsContent = [this.img_configH_1_i(),this.img_configH_2_i(),this.img_configH_4_i()];
		return t;
	};
	_proto.img_configH_1_i = function () {
		var t = new eui.Image();
		this.img_configH_1 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img19";
		t.touchEnabled = false;
		t.verticalCenter = -80;
		return t;
	};
	_proto.img_configH_2_i = function () {
		var t = new eui.Image();
		this.img_configH_2 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img20";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_configH_4_i = function () {
		var t = new eui.Image();
		this.img_configH_4 = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img21";
		t.touchEnabled = false;
		t.verticalCenter = 80;
		t.y = 10;
		return t;
	};
	_proto.grp_configV_i = function () {
		var t = new eui.Group();
		this.grp_configV = t;
		t.height = 80;
		t.horizontalCenter = 151;
		t.touchChildren = false;
		t.verticalCenter = -420;
		t.width = 320;
		t.x = 820;
		t.y = 401;
		t.elementsContent = [this.img_configV_1_i(),this.img_configV_2_i(),this.img_configV_4_i()];
		return t;
	};
	_proto.img_configV_1_i = function () {
		var t = new eui.Image();
		this.img_configV_1 = t;
		t.horizontalCenter = -100;
		t.source = "game0_json.img19";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_configV_2_i = function () {
		var t = new eui.Image();
		this.img_configV_2 = t;
		t.horizontalCenter = -18;
		t.source = "game0_json.img20";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_configV_4_i = function () {
		var t = new eui.Image();
		this.img_configV_4 = t;
		t.horizontalCenter = 100;
		t.source = "game0_json.img21";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Toast.exml'] = window.skins.Toast = (function (_super) {
	__extends(Toast, _super);
	function Toast() {
		_super.call(this);
		this.skinParts = ["lbl_content"];
		
		this.height = 36;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Toast.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this._Image1_i(),this.lbl_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,12,74,74);
		t.source = "game0_json.imgtoast";
		t.top = 0;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.bottom = 0;
		t.size = 16;
		t.text = "有空列不能发牌";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return Toast;
})(eui.Skin);generateEUI.paths['resource/eui_skins/tripeaks/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bg","grp_main"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.img_bg_i(),this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.source = "bg3_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.left = -20;
		t.right = -20;
		t.scale9Grid = new egret.Rectangle(20,20,55,95);
		t.scaleX = 0.637;
		t.scaleY = 0.637;
		t.source = "game0_json.img11";
		t.y = 554.0000000000001;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.height = 86;
		t.horizontalCenter = -90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.bottom = 0;
		t.height = 86;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 60;
		t.y = 607;
		return t;
	};
	return Main;
})(eui.Skin);