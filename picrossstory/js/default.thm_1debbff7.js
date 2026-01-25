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
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.Game.Story0":"resource/eui_skins/game/Story.exml","Scene.Game.Story1":"resource/eui_skins/game/Story.exml","Scene.Game.Story2":"resource/eui_skins/game/Story.exml","Scene.Game.Story3":"resource/eui_skins/game/Story.exml","Scene.Game.Story4":"resource/eui_skins/game/Story.exml","Scene.Game.Story5":"resource/eui_skins/game/Story.exml","Scene.Game.LvCell":"resource/eui_skins/game/LvCell.exml","Scene.Menu.LvCell2":"resource/eui_skins/menu/LvCell2.exml","Scene.Menu.Main":"resource/eui_skins/menu/Main.exml","Scene.Game.CompleteEffect":"resource/eui_skins/game/CompleteEffect.exml","Scene.Picross.Main":"resource/eui_skins/picross/Main.exml","Scene.Picross.CptTag":"resource/eui_skins/picross/CptTag.exml","Scene.Picross.NormalCube":"resource/eui_skins/picross/Cube.exml","Scene.Picross.GameOver":"resource/eui_skins/picross/GameOver.exml","Scene.Picross.NumCube":"resource/eui_skins/picross/NumCube.exml","LoadingUI":"resource/eui_skins/Loading.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = Common.prototype;

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
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/CompleteEffect.exml'] = window.skins.CompleteEffect = (function (_super) {
	__extends(CompleteEffect, _super);
	function CompleteEffect() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_room"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.img_room_i()];
	}
	var _proto = CompleteEffect.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.15;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.img_room_i = function () {
		var t = new eui.Image();
		this.img_room = t;
		t.horizontalCenter = 0;
		t.source = "game3_json.storyicon_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.zIndex = 2;
		return t;
	};
	return CompleteEffect;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HelpBar.exml'] = window.skins.HelpBar = (function (_super) {
	__extends(HelpBar, _super);
	function HelpBar() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 37;
		this.width = 154;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = HelpBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_bar1_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_bar1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return HelpBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HelpBar2.exml'] = window.skins.HelpBar2 = (function (_super) {
	__extends(HelpBar2, _super);
	function HelpBar2() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 45;
		this.width = 504;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this._Image2_i(),this.labelDisplay_i()];
	}
	var _proto = HelpBar2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,15,409,15);
		t.source = "game0_json.img_bar_bg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(43,15,408,15);
		t.source = "game0_json.img_bar";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.y = 160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -38;
		t.source = "game0_json.icon_build";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.strokeColor = 0x655000;
		t.text = "19/19";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 117;
		return t;
	};
	return HelpBar2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/LvCell.exml'] = window.skins.LvCell = (function (_super) {
	__extends(LvCell, _super);
	function LvCell() {
		_super.call(this);
		this.skinParts = ["img_icon","lbl_star","grp_main"];
		
		this.height = 180;
		this.width = 180;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = LvCell.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 90;
		t.height = 180;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 180;
		t.elementsContent = [this.img_icon_i(),this._Image1_i(),this._Image2_i(),this.lbl_star_i()];
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_27";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 29;
		t.y = 29;
		t.zIndex = 1;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_ct_bg";
		t.touchEnabled = false;
		t.verticalCenter = 60;
		t.x = 19;
		t.y = 124;
		t.zIndex = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 44.529;
		t.horizontalCenter = -37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_star_s";
		t.touchEnabled = false;
		t.verticalCenter = 60;
		t.width = 46.209;
		t.x = 30;
		t.y = 128;
		t.zIndex = 1;
		return t;
	};
	_proto.lbl_star_i = function () {
		var t = new eui.Label();
		this.lbl_star = t;
		t.height = 42;
		t.horizontalCenter = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "9999";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 60;
		t.width = 78;
		t.x = 72;
		t.y = 129;
		t.zIndex = 1;
		return t;
	};
	return LvCell;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_star","lbl_star","pb_1","grp_btn0","lbl_gameLv","grp_btn1","grp_0","pb_0","img_menu","img_back","grp_1"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i(),this.grp_0_i(),this.grp_1_i()];
	}
	var _proto = Main.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = -170;
		t.verticalCenter = -600;
		t.visible = true;
		t.width = 200;
		t.zIndex = 100;
		t.elementsContent = [this._Rect1_i(),this.img_star_i(),this.lbl_star_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.img_star_i = function () {
		var t = new eui.Image();
		this.img_star = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.left = -62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_star124";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_star_i = function () {
		var t = new eui.Label();
		this.lbl_star = t;
		t.height = 46.261;
		t.horizontalCenter = 15;
		t.size = 35;
		t.text = "1000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 140.598;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 750;
		t.zIndex = 100;
		t.elementsContent = [this.grp_btn0_i(),this.grp_btn1_i()];
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 148;
		t.horizontalCenter = -165;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 560;
		t.width = 306;
		t.x = 57;
		t.y = 1153;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.pb_1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_y_big";
		t.touchEnabled = false;
		t.verticalCenter = 3;
		t.x = 145.99999999999994;
		t.y = -314.99999999999994;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 48;
		t.horizontalCenter = 36;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0xD9AC0A;
		t.text = "Help";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -19;
		t.width = 161;
		return t;
	};
	_proto.pb_1_i = function () {
		var t = new eui.ProgressBar();
		this.pb_1 = t;
		t.height = 37;
		t.horizontalCenter = 39;
		t.skinName = "skins.HelpBar";
		t.slideDuration = 0;
		t.value = 50;
		t.verticalCenter = 21.5;
		t.width = 154;
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 148;
		t.horizontalCenter = 165;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 560;
		t.width = 306;
		t.x = 386.9999999999999;
		t.y = 1153;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label2_i(),this.lbl_gameLv_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_g_big";
		t.touchEnabled = false;
		t.verticalCenter = 3;
		t.x = 145.99999999999994;
		t.y = -314.99999999999994;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -85.5;
		t.source = "game0_json.icon_play";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 48;
		t.horizontalCenter = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x239400;
		t.text = "Picross";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -19;
		t.width = 161;
		t.x = -221.00000000000003;
		return t;
	};
	_proto.lbl_gameLv_i = function () {
		var t = new eui.Label();
		this.lbl_gameLv = t;
		t.height = 48;
		t.horizontalCenter = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x239400;
		t.text = "Lv. 1";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 20;
		t.width = 161;
		t.x = -211.00000000000003;
		t.y = 41;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 750;
		t.zIndex = 100;
		t.elementsContent = [this.pb_0_i(),this.img_menu_i(),this.img_back_i()];
		return t;
	};
	_proto.pb_0_i = function () {
		var t = new eui.ProgressBar();
		this.pb_0 = t;
		t.height = 45;
		t.horizontalCenter = 167;
		t.skinName = "skins.HelpBar2";
		t.verticalCenter = -600;
		t.width = 344;
		return t;
	};
	_proto.img_menu_i = function () {
		var t = new eui.Image();
		this.img_menu = t;
		t.horizontalCenter = -272;
		t.source = "game0_json.btn_story_1";
		t.verticalCenter = 560;
		return t;
	};
	_proto.img_back_i = function () {
		var t = new eui.Image();
		this.img_back = t;
		t.horizontalCenter = 275;
		t.source = "game0_json.btn_back";
		t.verticalCenter = 560;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Story.exml'] = window.skins.Story = (function (_super) {
	__extends(Story, _super);
	function Story() {
		_super.call(this);
		this.skinParts = ["img_bg"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.img_bg_i()];
	}
	var _proto = Story.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.source = "bg5_0_jpg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.zIndex = 0;
		return t;
	};
	return Story;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingProgress.exml'] = window.skins.LoadingProgress = (function (_super) {
	__extends(LoadingProgress, _super);
	function LoadingProgress() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 67;
		this.width = 654;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = LoadingProgress.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading0_json.loading_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "loading0_json.loading_bar";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingProgress;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Loading.exml'] = window.skins.Loading = (function (_super) {
	__extends(Loading, _super);
	function Loading() {
		_super.call(this);
		this.skinParts = ["pb_loading","lbl_loading"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.pb_loading_i(),this.lbl_loading_i()];
	}
	var _proto = Loading.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading0_json.picross_logo";
		t.verticalCenter = -476;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading0_json.hua";
		t.verticalCenter = 501;
		t.zIndex = 98;
		return t;
	};
	_proto.pb_loading_i = function () {
		var t = new eui.ProgressBar();
		this.pb_loading = t;
		t.height = 67;
		t.horizontalCenter = 0;
		t.skinName = "skins.LoadingProgress";
		t.slideDuration = 0;
		t.value = 50;
		t.verticalCenter = 474.5;
		t.width = 654;
		t.zIndex = 99;
		return t;
	};
	_proto.lbl_loading_i = function () {
		var t = new eui.Label();
		this.lbl_loading = t;
		t.height = 61.319;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "Loading...";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = 401.5;
		t.width = 282.123;
		t.zIndex = 99;
		return t;
	};
	return Loading;
})(eui.Skin);generateEUI.paths['resource/eui_skins/menu/LvCell2.exml'] = window.skins.LvCell2 = (function (_super) {
	__extends(LvCell2, _super);
	function LvCell2() {
		_super.call(this);
		this.skinParts = ["img_0","grp_help","img_lock","img_done","img_play","lbl_title","lbl_content"];
		
		this.height = 550;
		this.width = 700;
		this.elementsContent = [this._Image1_i(),this.img_0_i(),this._Image2_i(),this.grp_help_i(),this.img_lock_i(),this.img_done_i(),this.img_play_i(),this.lbl_title_i(),this.lbl_content_i()];
	}
	var _proto = LvCell2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_item_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.horizontalCenter = 0;
		t.source = "game2_0_json.chapter1_1";
		t.verticalCenter = -49.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_item_title";
		t.verticalCenter = -220;
		return t;
	};
	_proto.grp_help_i = function () {
		var t = new eui.Group();
		this.grp_help = t;
		t.height = 80.304;
		t.horizontalCenter = 193;
		t.touchChildren = false;
		t.verticalCenter = 174.5;
		t.width = 225.881;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(38,36,67,58);
		t.source = "game0_json.img_box_bg";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game0_json.img_btn";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0xD3A000;
		t.text = "HELP";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_lock_i = function () {
		var t = new eui.Image();
		this.img_lock = t;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_lock";
		t.touchEnabled = false;
		t.verticalCenter = -49;
		return t;
	};
	_proto.img_done_i = function () {
		var t = new eui.Image();
		this.img_done = t;
		t.horizontalCenter = 220;
		t.source = "game0_json.img_done";
		t.touchEnabled = false;
		t.verticalCenter = 175.348;
		t.visible = true;
		return t;
	};
	_proto.img_play_i = function () {
		var t = new eui.Image();
		this.img_play = t;
		t.horizontalCenter = 240;
		t.source = "game0_json.btn_restart";
		t.verticalCenter = 50;
		return t;
	};
	_proto.lbl_title_i = function () {
		var t = new eui.Label();
		this.lbl_title = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "STORY 1";
		t.textAlign = "center";
		t.textColor = 0xCA7C00;
		t.verticalAlign = "middle";
		t.verticalCenter = -234;
		t.width = 254;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.height = 78.792;
		t.horizontalCenter = -121;
		t.text = "Hello world";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 175;
		t.width = 370.004;
		t.wordWrap = true;
		return t;
	};
	return LvCell2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/menu/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["lst_0","img_close"];
		
		this.height = 1277;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Image2_i(),this.img_close_i(),this._Image3_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 1133;
		t.horizontalCenter = 0;
		t.verticalCenter = 72;
		t.width = 700;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.bottom = 0;
		t.itemRendererSkinName = skins.LvCell2;
		t.top = 0;
		t.width = 200;
		t.x = 200;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.paddingBottom = 50;
		t.paddingTop = 50;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.ID = "";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 613;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(250,0,250,253);
		t.source = "game0_json.img_title";
		t.verticalCenter = -800;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 307.5;
		t.source = "game0_json.img_close";
		t.verticalCenter = -569;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -202;
		t.source = "game0_json.txt_title";
		t.verticalCenter = -565;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/CptTag.exml'] = window.skins.CptTag = (function (_super) {
	__extends(CptTag, _super);
	function CptTag() {
		_super.call(this);
		this.skinParts = ["rt_0"];
		
		this.height = 58;
		this.width = 198;
		this.elementsContent = [this.rt_0_i()];
	}
	var _proto = CptTag.prototype;

	_proto.rt_0_i = function () {
		var t = new eui.Rect();
		this.rt_0 = t;
		t.bottom = 20;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0x22B14C;
		t.left = 20;
		t.right = 20;
		t.top = 20;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	return CptTag;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/Cube.exml'] = window.skins.Cube = (function (_super) {
	__extends(Cube, _super);
	function Cube() {
		_super.call(this);
		this.skinParts = ["img_0","rt_0","grp_game"];
		
		this.height = 198;
		this.width = 198;
		this.elementsContent = [this.grp_game_i()];
	}
	var _proto = Cube.prototype;

	_proto.grp_game_i = function () {
		var t = new eui.Group();
		this.grp_game = t;
		t.height = 198;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 198;
		t.elementsContent = [this._Image1_i(),this.img_0_i(),this.rt_0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.horizontalCenter = -0.5;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "picross0_json.sc_gb";
		t.touchEnabled = false;
		t.verticalCenter = 8;
		t.visible = false;
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 99;
		t.height = 198;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "picross0_json.icon_box_1";
		t.touchEnabled = false;
		t.visible = true;
		t.width = 198;
		t.x = 99;
		t.y = 99;
		return t;
	};
	_proto.rt_0_i = function () {
		var t = new eui.Rect();
		this.rt_0 = t;
		t.fillColor = 0xFF4D4D;
		t.height = 198;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 198;
		return t;
	};
	return Cube;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/FlyStar.exml'] = window.skins.FlyStar = (function (_super) {
	__extends(FlyStar, _super);
	function FlyStar() {
		_super.call(this);
		this.skinParts = ["lbl_num"];
		
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = FlyStar.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 120;
		t.elementsContent = [this.lbl_num_i(),this._Image1_i()];
		return t;
	};
	_proto.lbl_num_i = function () {
		var t = new eui.Label();
		this.lbl_num = t;
		t.height = 50;
		t.horizontalCenter = 92;
		t.size = 35;
		t.stroke = 2;
		t.text = "+1";
		t.textAlign = "left";
		t.textColor = 0x6BE38E;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 175;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = -29.5;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 50;
		return t;
	};
	return FlyStar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/GameOver.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_light","lbl_photo","grp_photo","grp_btn","lbl_starNum","grp_star"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rt_bg_i(),this.img_light_i(),this.grp_photo_i(),this.grp_btn_i(),this.grp_star_i()];
	}
	var _proto = GameOver.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.bottom = -200;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.img_light_i = function () {
		var t = new eui.Image();
		this.img_light = t;
		t.blendMode = "add";
		t.height = 900;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = -150;
		t.visible = true;
		t.width = 900;
		return t;
	};
	_proto.grp_photo_i = function () {
		var t = new eui.Group();
		this.grp_photo = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 240;
		t.height = 480;
		t.visible = true;
		t.width = 400;
		t.x = 375;
		t.y = 490;
		t.elementsContent = [this._Image1_i(),this._Rect1_i(),this.lbl_photo_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -6;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,188,750,977);
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "book_bg_png";
		t.top = -78;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 160;
		t.height = 340;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -40;
		t.visible = false;
		t.width = 340;
		return t;
	};
	_proto.lbl_photo_i = function () {
		var t = new eui.Label();
		this.lbl_photo = t;
		t.height = 79;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 180;
		t.width = 364;
		return t;
	};
	_proto.grp_btn_i = function () {
		var t = new eui.Group();
		this.grp_btn = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 388;
		t.width = 270;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(29,27,140,13);
		t.source = "game0_json.btn_tab";
		t.touchEnabled = false;
		t.verticalCenter = 3;
		t.width = 270;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 62;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x006883;
		t.text = "Continue";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 216;
		return t;
	};
	_proto.grp_star_i = function () {
		var t = new eui.Group();
		this.grp_star = t;
		t.height = 55;
		t.horizontalCenter = 0;
		t.verticalCenter = 216;
		t.visible = true;
		t.width = 425;
		t.y = 850;
		t.elementsContent = [this.lbl_starNum_i(),this._Image3_i()];
		return t;
	};
	_proto.lbl_starNum_i = function () {
		var t = new eui.Label();
		this.lbl_starNum = t;
		t.height = 134;
		t.horizontalCenter = 140;
		t.size = 80;
		t.stroke = 2;
		t.text = "+1";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 236.641;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -70;
		t.source = "game0_json.icon_star124";
		t.verticalCenter = 0;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/Guide.exml'] = window.skins.Guide = (function (_super) {
	__extends(Guide, _super);
	function Guide() {
		_super.call(this);
		this.skinParts = ["lbl_content","grp_content","img_cube5","img_cube6","img_cube7","img_cube9","img_rectangle","grp_touch"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.grp_touch_i()];
	}
	var _proto = Guide.prototype;

	_proto.grp_touch_i = function () {
		var t = new eui.Group();
		this.grp_touch = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.grp_content_i(),this.img_cube5_i(),this.img_cube6_i(),this.img_cube7_i(),this.img_cube9_i(),this.img_rectangle_i(),this._Group1_i()];
		return t;
	};
	_proto.grp_content_i = function () {
		var t = new eui.Group();
		this.grp_content = t;
		t.anchorOffsetX = 27.342;
		t.anchorOffsetY = 209.084;
		t.height = 228;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.visible = true;
		t.width = 440;
		t.x = 181.34199999999998;
		t.y = 324.084;
		t.elementsContent = [this._Image1_i(),this.lbl_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.bubble2";
		t.verticalCenter = 0;
		t.width = 440;
		t.zIndex = 999;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.height = 137.613;
		t.horizontalCenter = -6;
		t.size = 30;
		t.text = "Numbers show how many consecutive blocks to place in that row or column";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -26.5;
		t.width = 375.186;
		t.wordWrap = true;
		return t;
	};
	_proto.img_cube5_i = function () {
		var t = new eui.Image();
		this.img_cube5 = t;
		t.alpha = 0.2;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = -120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.yxz_mb";
		t.touchEnabled = false;
		t.verticalCenter = -14;
		t.width = 80;
		return t;
	};
	_proto.img_cube6_i = function () {
		var t = new eui.Image();
		this.img_cube6 = t;
		t.alpha = 0.2;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = -15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.yxz_mb";
		t.touchEnabled = false;
		t.verticalCenter = -14;
		t.width = 80;
		return t;
	};
	_proto.img_cube7_i = function () {
		var t = new eui.Image();
		this.img_cube7 = t;
		t.alpha = 0.2;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.yxz_mb";
		t.touchEnabled = false;
		t.verticalCenter = -14;
		t.width = 80;
		t.x = 316;
		t.y = 564;
		return t;
	};
	_proto.img_cube9_i = function () {
		var t = new eui.Image();
		this.img_cube9 = t;
		t.alpha = 0.2;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 300;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.yxz_mb";
		t.touchEnabled = false;
		t.verticalCenter = -14;
		t.width = 80;
		t.x = 326;
		t.y = 574;
		return t;
	};
	_proto.img_rectangle_i = function () {
		var t = new eui.Rect();
		this.img_rectangle = t;
		t.alpha = 0.3;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 124;
		t.strokeColor = 0x000000;
		t.strokeWeight = 10;
		t.width = 657;
		t.x = 41;
		t.y = 533;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 125;
		t.anchorOffsetY = 60;
		t.height = 120;
		t.horizontalCenter = 0;
		t.verticalCenter = 450;
		t.visible = false;
		t.width = 250;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.3;
		t.bottom = 0;
		t.fillColor = 0xFF0000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return Guide;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_light1","img_light0","img_board","grp_board","grp_game","lbl_picrossName","lbl_picrossTime","lbl_picrossStar","grp_bubble","img_toggle","grp_toggle1","grp_toggle","lbl_combo","grp_combo","img_back","img_star0"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.grp_game_i(),this.grp_bubble_i(),this.grp_toggle_i(),this.grp_combo_i(),this.img_back_i(),this._Group1_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_1_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "picross0_json.img_tai";
		t.verticalCenter = -418;
		return t;
	};
	_proto.grp_game_i = function () {
		var t = new eui.Group();
		this.grp_game = t;
		t.anchorOffsetX = 310;
		t.anchorOffsetY = 310;
		t.height = 620;
		t.width = 620;
		t.x = 360;
		t.y = 640;
		t.elementsContent = [this.img_light1_i(),this.img_light0_i(),this.grp_board_i()];
		return t;
	};
	_proto.img_light1_i = function () {
		var t = new eui.Image();
		this.img_light1 = t;
		t.alpha = 0.5;
		t.fillMode = "repeat";
		t.height = 775.612;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "picross0_json.img_101";
		t.touchEnabled = false;
		t.x = 22.649;
		t.y = 176.719;
		return t;
	};
	_proto.img_light0_i = function () {
		var t = new eui.Image();
		this.img_light0 = t;
		t.alpha = 0.5;
		t.fillMode = "repeat";
		t.height = 789.883;
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "picross0_json.img_101";
		t.touchEnabled = false;
		t.x = 637.649;
		t.y = -16.281;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 297;
		t.touchChildren = false;
		t.width = 297;
		t.x = 237;
		t.y = 270;
		t.elementsContent = [this._Image3_i(),this.img_board_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -10;
		t.left = -10;
		t.right = -10;
		t.scale9Grid = new egret.Rectangle(32,30,106,108);
		t.source = "picross0_json.img_0";
		t.top = -10;
		return t;
	};
	_proto.img_board_i = function () {
		var t = new eui.Image();
		this.img_board = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "picross0_json.img_102";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.grp_bubble_i = function () {
		var t = new eui.Group();
		this.grp_bubble = t;
		t.height = 200;
		t.horizontalCenter = 123.5;
		t.touchChildren = false;
		t.verticalCenter = -528;
		t.visible = true;
		t.width = 387;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label1_i(),this.lbl_picrossName_i(),this.lbl_picrossTime_i(),this.lbl_picrossStar_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(30,26,164,38);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "picross0_json.img_10";
		t.top = 0;
		t.zIndex = 999;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -191.5;
		t.source = "picross0_json.img_9";
		t.verticalCenter = -27;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 79.613;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "Complete this Picross to earn more stars";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -62.5;
		t.visible = false;
		t.width = 337.186;
		t.wordWrap = true;
		return t;
	};
	_proto.lbl_picrossName_i = function () {
		var t = new eui.Label();
		this.lbl_picrossName = t;
		t.height = 79.613;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Hello World";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -36;
		t.width = 337.186;
		t.wordWrap = true;
		t.y = 16;
		return t;
	};
	_proto.lbl_picrossTime_i = function () {
		var t = new eui.Label();
		this.lbl_picrossTime = t;
		t.height = 79.613;
		t.horizontalCenter = 6;
		t.size = 40;
		t.text = "3 × 3";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 36;
		t.width = 204.186;
		t.wordWrap = true;
		t.y = 26;
		return t;
	};
	_proto.lbl_picrossStar_i = function () {
		var t = new eui.Label();
		this.lbl_picrossStar = t;
		t.height = 79.613;
		t.horizontalCenter = 141;
		t.size = 40;
		t.text = "+1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 37;
		t.width = 273.186;
		t.wordWrap = true;
		t.x = 67;
		t.y = 36;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 76.5;
		t.source = "game0_json.icon_star124";
		t.verticalCenter = 33;
		t.width = 70;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 54.485;
		t.horizontalCenter = -134.5;
		t.source = "picross0_json.img_time";
		t.verticalCenter = 33;
		t.width = 52.117;
		return t;
	};
	_proto.grp_toggle_i = function () {
		var t = new eui.Group();
		this.grp_toggle = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 550;
		t.width = 250;
		t.elementsContent = [this._Image8_i(),this.grp_toggle1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(55,0,90,50);
		t.source = "picross0_json.img_103";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto.grp_toggle1_i = function () {
		var t = new eui.Group();
		this.grp_toggle1 = t;
		t.height = 114;
		t.horizontalCenter = 50;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 120;
		t.elementsContent = [this._Image9_i(),this.img_toggle_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(43,43,42,36);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "picross0_json.img_4";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.img_toggle_i = function () {
		var t = new eui.Image();
		this.img_toggle = t;
		t.alpha = 0.6;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "picross0_json.img_104";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.grp_combo_i = function () {
		var t = new eui.Group();
		this.grp_combo = t;
		t.height = 156;
		t.horizontalCenter = 215;
		t.touchChildren = false;
		t.verticalCenter = -450;
		t.visible = false;
		t.width = 280;
		t.elementsContent = [this._Image10_i(),this.lbl_combo_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 52.818;
		t.horizontalCenter = 0;
		t.verticalCenter = -36.5;
		t.width = 166.796;
		return t;
	};
	_proto.lbl_combo_i = function () {
		var t = new eui.Label();
		this.lbl_combo = t;
		t.height = 110.472;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 4;
		t.strokeColor = 0x102EA5;
		t.text = "x 10";
		t.textAlign = "center";
		t.textColor = 0xF2DB4D;
		t.verticalAlign = "middle";
		t.verticalCenter = 30;
		t.width = 299.441;
		return t;
	};
	_proto.img_back_i = function () {
		var t = new eui.Image();
		this.img_back = t;
		t.horizontalCenter = 275;
		t.source = "game0_json.btn_back";
		t.verticalCenter = 550;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 240;
		t.verticalCenter = -600;
		t.visible = false;
		t.width = 200;
		t.zIndex = 100;
		t.elementsContent = [this._Rect1_i(),this.img_star0_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.img_star0_i = function () {
		var t = new eui.Image();
		this.img_star0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.left = -62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.icon_star124";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 46.261;
		t.horizontalCenter = 15;
		t.size = 35;
		t.text = "1000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 140.598;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/picross/NumCube.exml'] = window.skins.NumCube = (function (_super) {
	__extends(NumCube, _super);
	function NumCube() {
		_super.call(this);
		this.skinParts = ["lbl_num"];
		
		this.height = 96;
		this.width = 198;
		this.elementsContent = [this._Image1_i(),this.lbl_num_i()];
	}
	var _proto = NumCube.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -5;
		t.left = 4;
		t.right = 4;
		t.scale9Grid = new egret.Rectangle(36,38,456,191);
		t.source = "picross0_json.img_7";
		t.top = 5;
		return t;
	};
	_proto.lbl_num_i = function () {
		var t = new eui.Label();
		this.lbl_num = t;
		t.height = 74;
		t.horizontalCenter = 0;
		t.size = 55;
		t.text = "8";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	return NumCube;
})(eui.Skin);