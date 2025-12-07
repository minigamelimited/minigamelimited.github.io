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
                generateEUI.skins = {"Scene.Common":"resource/eui_skins/Common.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Cover.Main2":"resource/eui_skins/cover/Main2.exml","Scene.Game.Player":"resource/eui_skins/game/Player.exml","Scene.Game.Main0":"resource/eui_skins/game/Main0.exml","Scene.Game.Main1":"resource/eui_skins/game/Main1.exml","Scene.Game.Main2":"resource/eui_skins/game/Main2.exml","Scene.Game.Main3":"resource/eui_skins/game/Main3.exml","Scene.Game.Main4":"resource/eui_skins/game/Main4.exml","Scene.Game.Main5":"resource/eui_skins/game/Main5.exml","Scene.Game.Main6":"resource/eui_skins/game/Main6.exml","Scene.Game.Main7":"resource/eui_skins/game/Main7.exml","Scene.PlayerCard":"resource/eui_skins/PlayerCard.exml","Scene.Game.GameOver0":"resource/eui_skins/game/GameOver0.exml","Scene.Game.GameOver1":"resource/eui_skins/game/GameOver1.exml","Scene.Game.GameOver2":"resource/eui_skins/game/GameOver2.exml","Scene.Game.GameOver3":"resource/eui_skins/game/GameOver3.exml","Scene.Game.Piece":"resource/eui_skins/game/Piece.exml","Scene.Connecting":"resource/eui_skins/Connecting.exml","Scene.Game.ChatBubble":"resource/eui_skins/game/ChatBubble.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 640;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Connecting.exml'] = window.skins.Connecting = (function (_super) {
	__extends(Connecting, _super);
	function Connecting() {
		_super.call(this);
		this.skinParts = ["ani_connecting","rt_bg","img_wifi0","img_wifi1","img_wifi2","img_wifi3"];
		
		this.height = 1136;
		this.width = 640;
		this.ani_connecting_i();
		this.elementsContent = [this.rt_bg_i(),this._Group1_i()];
	}
	var _proto = Connecting.prototype;

	_proto.ani_connecting_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani_connecting = t;
		return t;
	};
	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1440;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.img_wifi0_i(),this.img_wifi1_i(),this.img_wifi2_i(),this.img_wifi3_i()];
		return t;
	};
	_proto.img_wifi0_i = function () {
		var t = new eui.Image();
		this.img_wifi0 = t;
		t.horizontalCenter = 0;
		t.source = "game10_json.wifi_0";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_wifi1_i = function () {
		var t = new eui.Image();
		this.img_wifi1 = t;
		t.horizontalCenter = 0;
		t.source = "game10_json.wifi_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.img_wifi2_i = function () {
		var t = new eui.Image();
		this.img_wifi2 = t;
		t.horizontalCenter = 0;
		t.source = "game10_json.wifi_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_wifi3_i = function () {
		var t = new eui.Image();
		this.img_wifi3 = t;
		t.horizontalCenter = 0;
		t.source = "game10_json.wifi_3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return Connecting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main2.exml'] = window.skins.Main2 = (function (_super) {
	__extends(Main2, _super);
	function Main2() {
		_super.call(this);
		this.skinParts = ["grp_btn0","grp_btn1","grp_btn2","grp_btn3","img_playerIcon","lbl_playerName","grp_profile","lbl_name0","lbl_num0","grp_0","lbl_name1","lbl_num1","grp_1","grp_tab","img_right","img_left","lbl_roomID","img_enterRoom"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.grp_btn0_i(),this.grp_btn1_i(),this.grp_btn2_i(),this.grp_btn3_i(),this.grp_profile_i(),this.grp_tab_i(),this.img_right_i(),this.img_left_i(),this.lbl_roomID_i(),this.img_enterRoom_i()];
	}
	var _proto = Main2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 140;
		t.width = 275;
		t.x = 176;
		t.y = 688;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "Quick Match";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 250;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "Friend Match";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn2_i = function () {
		var t = new eui.Group();
		this.grp_btn2 = t;
		t.height = 96;
		t.horizontalCenter = -120;
		t.touchChildren = false;
		t.verticalCenter = 360;
		t.width = 225;
		t.x = 196;
		t.y = 708;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(72,0,181,114);
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 225;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "Local";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn3_i = function () {
		var t = new eui.Group();
		this.grp_btn3 = t;
		t.height = 96;
		t.horizontalCenter = 120;
		t.touchChildren = false;
		t.verticalCenter = 360;
		t.width = 225;
		t.x = 206;
		t.y = 718;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(72,0,172,114);
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 225;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "Vs AI";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_profile_i = function () {
		var t = new eui.Group();
		this.grp_profile = t;
		t.height = 110;
		t.horizontalCenter = -170;
		t.touchChildren = false;
		t.verticalCenter = -458;
		t.width = 280;
		t.elementsContent = [this.img_playerIcon_i(),this._Image6_i(),this.lbl_playerName_i()];
		return t;
	};
	_proto.img_playerIcon_i = function () {
		var t = new eui.Image();
		this.img_playerIcon = t;
		t.height = 90;
		t.horizontalCenter = -85;
		t.source = "game10_json.asset_player_blue";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game1_json.avatar1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_playerName_i = function () {
		var t = new eui.Label();
		this.lbl_playerName = t;
		t.height = 48.759;
		t.left = 106;
		t.text = "玩家名字";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -24;
		t.width = 288.163;
		return t;
	};
	_proto.grp_tab_i = function () {
		var t = new eui.Group();
		this.grp_tab = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -160;
		t.width = 640;
		t.elementsContent = [this.grp_0_i(),this.grp_1_i()];
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 400;
		t.x = 320;
		t.elementsContent = [this._Image7_i(),this.lbl_name0_i(),this.lbl_num0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "game10_json.img_lvl_1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.lbl_name0_i = function () {
		var t = new eui.Label();
		this.lbl_name0 = t;
		t.height = 135.762;
		t.left = 36;
		t.stroke = 2;
		t.text = "Tic\nTac\nToe";
		t.textAlign = "left";
		t.top = 36;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.width = 233.289;
		return t;
	};
	_proto.lbl_num0_i = function () {
		var t = new eui.Label();
		this.lbl_num0 = t;
		t.bottom = 30;
		t.height = 64.215;
		t.right = 30;
		t.size = 25;
		t.stroke = 2;
		t.text = "0人";
		t.textAlign = "right";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.width = 134.095;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 400;
		t.x = 960;
		t.elementsContent = [this._Image8_i(),this.lbl_name1_i(),this.lbl_num1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.img_lvl_3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.lbl_name1_i = function () {
		var t = new eui.Label();
		this.lbl_name1 = t;
		t.height = 64.215;
		t.left = 36;
		t.stroke = 2;
		t.text = "Gomoku";
		t.textAlign = "left";
		t.top = 36;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.width = 134.095;
		return t;
	};
	_proto.lbl_num1_i = function () {
		var t = new eui.Label();
		this.lbl_num1 = t;
		t.bottom = 30;
		t.height = 64.215;
		t.right = 30;
		t.size = 25;
		t.text = "0人";
		t.textAlign = "right";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.width = 134.095;
		return t;
	};
	_proto.img_right_i = function () {
		var t = new eui.Image();
		this.img_right = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 53;
		t.horizontalCenter = 272;
		t.source = "game10_json.b_play";
		t.verticalCenter = -156;
		return t;
	};
	_proto.img_left_i = function () {
		var t = new eui.Image();
		this.img_left = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 53;
		t.horizontalCenter = -272;
		t.rotation = 180;
		t.source = "game10_json.b_play";
		t.verticalCenter = -156;
		t.x = 549;
		t.y = 369;
		return t;
	};
	_proto.lbl_roomID_i = function () {
		var t = new eui.EditableText();
		this.lbl_roomID = t;
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 67.134;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 133.961;
		t.x = 28;
		t.y = 730;
		return t;
	};
	_proto.img_enterRoom_i = function () {
		var t = new eui.Image();
		this.img_enterRoom = t;
		t.height = 48.69;
		t.source = "game10_json.button_green";
		t.visible = false;
		t.width = 139.664;
		t.x = 23;
		t.y = 819;
		return t;
	};
	return Main2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/ChatBubble.exml'] = window.skins.ChatBubble = (function (_super) {
	__extends(ChatBubble, _super);
	function ChatBubble() {
		_super.call(this);
		this.skinParts = ["grp_bubble","lbl_content"];
		
		this.height = 138;
		this.width = 404;
		this.elementsContent = [this.grp_bubble_i(),this.lbl_content_i()];
	}
	var _proto = ChatBubble.prototype;

	_proto.grp_bubble_i = function () {
		var t = new eui.Group();
		this.grp_bubble = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchChildren = false;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(78,71,219,95);
		t.scaleX = 0.25;
		t.scaleY = 0.25;
		t.source = "game1_json.chatbubble";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.lineSpacing = 5;
		t.maxWidth = 470;
		t.multiline = true;
		t.size = 30;
		t.text = "Hello";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.wordWrap = true;
		t.x = 28;
		t.y = 21;
		return t;
	};
	return ChatBubble;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver0.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["lbl_0","lbl_btn0","grp_btn0","img_btn1","lbl_btn1","grp_btn1","img_title","lbl_subTitle","grp_title","grp_main"];
		
		this.height = 400;
		this.width = 500;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 500;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.lbl_0_i(),this.grp_btn0_i(),this.grp_btn1_i(),this.grp_title_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 15;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.left = 15;
		t.right = 15;
		t.top = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(49,49,50,50);
		t.source = "game10_json.b_r_normal";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.lbl_0_i = function () {
		var t = new eui.Label();
		this.lbl_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.text = "等待好友...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -60;
		t.width = 356;
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -60;
		t.visible = false;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image2_i(),this.lbl_btn0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn0_i = function () {
		var t = new eui.Label();
		this.lbl_btn0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 275;
		t.x = 176;
		t.y = 688;
		t.elementsContent = [this.img_btn1_i(),this.lbl_btn1_i()];
		return t;
	};
	_proto.img_btn1_i = function () {
		var t = new eui.Image();
		this.img_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.Win_Butt_Home";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn1_i = function () {
		var t = new eui.Label();
		this.lbl_btn1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_title_i = function () {
		var t = new eui.Group();
		this.grp_title = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.top = -114;
		t.width = 578;
		t.elementsContent = [this.img_title_i(),this.lbl_subTitle_i()];
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.ResultWin";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.lbl_subTitle_i = function () {
		var t = new eui.Label();
		this.lbl_subTitle = t;
		t.height = 46.146;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "你超时了";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "top";
		t.visible = false;
		t.width = 181.148;
		t.x = 198;
		t.y = 148;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver1.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["lbl_0","lbl_btn0","grp_btn0","img_btn1","lbl_btn1","grp_btn1","img_title","lbl_subTitle","grp_title","grp_main"];
		
		this.height = 400;
		this.width = 500;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 500;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.lbl_0_i(),this.grp_btn0_i(),this.grp_btn1_i(),this.grp_title_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 15;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.left = 15;
		t.right = 15;
		t.top = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(49,49,50,50);
		t.source = "game10_json.b_r_normal";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.lbl_0_i = function () {
		var t = new eui.Label();
		this.lbl_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.text = "等待好友...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -60;
		t.width = 356;
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -60;
		t.visible = false;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image2_i(),this.lbl_btn0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn0_i = function () {
		var t = new eui.Label();
		this.lbl_btn0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 275;
		t.x = 176;
		t.y = 688;
		t.elementsContent = [this.img_btn1_i(),this.lbl_btn1_i()];
		return t;
	};
	_proto.img_btn1_i = function () {
		var t = new eui.Image();
		this.img_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.Win_Butt_Home";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn1_i = function () {
		var t = new eui.Label();
		this.lbl_btn1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_title_i = function () {
		var t = new eui.Group();
		this.grp_title = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.top = -114;
		t.width = 578;
		t.elementsContent = [this.img_title_i(),this.lbl_subTitle_i()];
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.ResultWin";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.lbl_subTitle_i = function () {
		var t = new eui.Label();
		this.lbl_subTitle = t;
		t.height = 46.146;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "你超时了";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "top";
		t.visible = false;
		t.width = 181.148;
		t.x = 198;
		t.y = 148;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver2.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["lbl_btn0","grp_btn0","img_btn1","grp_btn1","img_title","lbl_subTitle","img_endColor","grp_title","grp_main"];
		
		this.height = 400;
		this.width = 500;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 500;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.grp_btn0_i(),this.grp_btn1_i(),this.grp_title_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 15;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.left = 15;
		t.right = 15;
		t.top = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(49,49,50,50);
		t.source = "game10_json.b_r_normal";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -60;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image2_i(),this.lbl_btn0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn0_i = function () {
		var t = new eui.Label();
		this.lbl_btn0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "继续游戏";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 275;
		t.x = 176;
		t.y = 688;
		t.elementsContent = [this.img_btn1_i()];
		return t;
	};
	_proto.img_btn1_i = function () {
		var t = new eui.Image();
		this.img_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.Win_Butt_Home";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.grp_title_i = function () {
		var t = new eui.Group();
		this.grp_title = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.top = -114;
		t.width = 578;
		t.elementsContent = [this.img_title_i(),this.lbl_subTitle_i(),this.img_endColor_i()];
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.ResultWin2";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.lbl_subTitle_i = function () {
		var t = new eui.Label();
		this.lbl_subTitle = t;
		t.height = 46.146;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "赢 1  输 0  平 0";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "top";
		t.visible = true;
		t.width = 312.148;
		t.x = 198;
		t.y = 148;
		return t;
	};
	_proto.img_endColor_i = function () {
		var t = new eui.Image();
		this.img_endColor = t;
		t.height = 260;
		t.horizontalCenter = -83;
		t.source = "game10_json.ic_xo_1";
		t.verticalCenter = -44;
		t.width = 260;
		t.x = 117;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameOver3.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["lbl_btn0","grp_btn0","img_btn1","lbl_btn1","grp_btn1","lbl_btn2","grp_btn2","img_btn3","lbl_btn3","grp_btn3","img_title","lbl_subTitle","grp_title","grp_main"];
		
		this.height = 400;
		this.width = 500;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = GameOver.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 500;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.grp_btn0_i(),this.grp_btn1_i(),this.grp_btn2_i(),this.grp_btn3_i(),this.grp_title_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 15;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.left = 15;
		t.right = 15;
		t.top = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(49,49,50,50);
		t.source = "game10_json.b_r_normal";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = true;
		return t;
	};
	_proto.grp_btn0_i = function () {
		var t = new eui.Group();
		this.grp_btn0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -60;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image2_i(),this.lbl_btn0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.left = 0;
		t.right = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_btn0_i = function () {
		var t = new eui.Label();
		this.lbl_btn0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn1_i = function () {
		var t = new eui.Group();
		this.grp_btn1 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 60;
		t.width = 275;
		t.x = 176;
		t.y = 688;
		t.elementsContent = [this.img_btn1_i(),this.lbl_btn1_i()];
		return t;
	};
	_proto.img_btn1_i = function () {
		var t = new eui.Image();
		this.img_btn1 = t;
		t.height = 96;
		t.left = 0;
		t.right = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_btn1_i = function () {
		var t = new eui.Label();
		this.lbl_btn1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "疯狂的电脑(很慢)";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn2_i = function () {
		var t = new eui.Group();
		this.grp_btn2 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = -180;
		t.width = 275;
		t.x = 186;
		t.y = 698;
		t.elementsContent = [this._Image3_i(),this.lbl_btn2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.left = 0;
		t.right = 0;
		t.source = "game10_json.button_green";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_btn2_i = function () {
		var t = new eui.Label();
		this.lbl_btn2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_btn3_i = function () {
		var t = new eui.Group();
		this.grp_btn3 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 180;
		t.width = 275;
		t.x = 196;
		t.y = 708;
		t.elementsContent = [this.img_btn3_i(),this.lbl_btn3_i()];
		return t;
	};
	_proto.img_btn3_i = function () {
		var t = new eui.Image();
		this.img_btn3 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "game10_json.Win_Butt_Home";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.lbl_btn3_i = function () {
		var t = new eui.Label();
		this.lbl_btn3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.textAlign = "center";
		t.textColor = 0xA3FF90;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_title_i = function () {
		var t = new eui.Group();
		this.grp_title = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.top = -114;
		t.width = 578;
		t.elementsContent = [this.img_title_i(),this.lbl_subTitle_i()];
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.ResultWin";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.lbl_subTitle_i = function () {
		var t = new eui.Label();
		this.lbl_subTitle = t;
		t.height = 46.146;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "你超时了";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "top";
		t.visible = false;
		t.width = 181.148;
		t.x = 198;
		t.y = 148;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main0.exml'] = window.skins.Main0 = (function (_super) {
	__extends(Main0, _super);
	function Main0() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip","lbl_time0","grp_time0","lbl_time1","grp_time1","lbl_state0","lbl_state1","img_chat","grp_keyboardMask"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i(),this.grp_time0_i(),this.grp_time1_i(),this.lbl_state0_i(),this.lbl_state1_i(),this.img_chat_i(),this.grp_keyboardMask_i()];
	}
	var _proto = Main0.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3x3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 6;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(0,6,12,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 400;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	_proto.grp_time0_i = function () {
		var t = new eui.Group();
		this.grp_time0 = t;
		t.height = 69;
		t.horizontalCenter = -50;
		t.verticalCenter = 478;
		t.visible = true;
		t.width = 163;
		t.elementsContent = [this._Image3_i(),this.lbl_time0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time0_i = function () {
		var t = new eui.Label();
		this.lbl_time0 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "10:00:00";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.grp_time1_i = function () {
		var t = new eui.Group();
		this.grp_time1 = t;
		t.height = 69;
		t.horizontalCenter = 50;
		t.verticalCenter = -438;
		t.visible = true;
		t.width = 163;
		t.x = 249;
		t.y = 1002;
		t.elementsContent = [this._Image4_i(),this.lbl_time1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time1_i = function () {
		var t = new eui.Label();
		this.lbl_time1 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "0:15";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.lbl_state0_i = function () {
		var t = new eui.Label();
		this.lbl_state0 = t;
		t.height = 39.904;
		t.horizontalCenter = -50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 478;
		t.width = 160;
		return t;
	};
	_proto.lbl_state1_i = function () {
		var t = new eui.Label();
		this.lbl_state1 = t;
		t.height = 39.904;
		t.horizontalCenter = 50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -438;
		t.width = 160;
		return t;
	};
	_proto.img_chat_i = function () {
		var t = new eui.Image();
		this.img_chat = t;
		t.height = 110;
		t.horizontalCenter = -237.5;
		t.source = "game1_json.chaticon";
		t.verticalCenter = 458;
		t.visible = false;
		t.width = 110;
		return t;
	};
	_proto.grp_keyboardMask_i = function () {
		var t = new eui.Group();
		this.grp_keyboardMask = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.zIndex = 999;
		return t;
	};
	return Main0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main1.exml'] = window.skins.Main1 = (function (_super) {
	__extends(Main1, _super);
	function Main1() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip","lbl_state0","lbl_state1","lbl_time0","grp_time0","lbl_time1","grp_time1","img_chat","grp_keyboardMask"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i(),this.lbl_state0_i(),this.lbl_state1_i(),this.grp_time0_i(),this.grp_time1_i(),this.img_chat_i(),this.grp_keyboardMask_i()];
	}
	var _proto = Main1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3x3_png";
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 6;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(0,6,12,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 400;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	_proto.lbl_state0_i = function () {
		var t = new eui.Label();
		this.lbl_state0 = t;
		t.height = 39.904;
		t.horizontalCenter = -50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 478;
		t.width = 160;
		return t;
	};
	_proto.lbl_state1_i = function () {
		var t = new eui.Label();
		this.lbl_state1 = t;
		t.height = 39.904;
		t.horizontalCenter = 50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -438;
		t.width = 160;
		return t;
	};
	_proto.grp_time0_i = function () {
		var t = new eui.Group();
		this.grp_time0 = t;
		t.height = 69;
		t.horizontalCenter = -50;
		t.verticalCenter = 478;
		t.visible = true;
		t.width = 163;
		t.elementsContent = [this._Image3_i(),this.lbl_time0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time0_i = function () {
		var t = new eui.Label();
		this.lbl_time0 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "10:00:00";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.grp_time1_i = function () {
		var t = new eui.Group();
		this.grp_time1 = t;
		t.height = 69;
		t.horizontalCenter = 50;
		t.verticalCenter = -438;
		t.visible = true;
		t.width = 163;
		t.x = 249;
		t.y = 1002;
		t.elementsContent = [this._Image4_i(),this.lbl_time1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time1_i = function () {
		var t = new eui.Label();
		this.lbl_time1 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "0:15";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.img_chat_i = function () {
		var t = new eui.Image();
		this.img_chat = t;
		t.height = 110;
		t.horizontalCenter = -237.5;
		t.source = "game1_json.chaticon";
		t.verticalCenter = 458;
		t.visible = false;
		t.width = 110;
		return t;
	};
	_proto.grp_keyboardMask_i = function () {
		var t = new eui.Group();
		this.grp_keyboardMask = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.zIndex = 999;
		return t;
	};
	return Main1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main2.exml'] = window.skins.Main2 = (function (_super) {
	__extends(Main2, _super);
	function Main2() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i()];
	}
	var _proto = Main2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -433.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3x3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 6;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(0,6,12,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 400;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	return Main2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main3.exml'] = window.skins.Main3 = (function (_super) {
	__extends(Main3, _super);
	function Main3() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i()];
	}
	var _proto = Main3.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3x3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 6;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(0,6,12,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.height = 400;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 400;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	return Main3;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main4.exml'] = window.skins.Main4 = (function (_super) {
	__extends(Main4, _super);
	function Main4() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip","lbl_time0","grp_time0","lbl_time1","grp_time1","lbl_state0","lbl_state1","img_chat","grp_keyboardMask"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i(),this.grp_time0_i(),this.grp_time1_i(),this.lbl_state0_i(),this.lbl_state1_i(),this.img_chat_i(),this.grp_keyboardMask_i()];
	}
	var _proto = Main4.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg15x15_png";
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 4;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(5,6,3,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.width = 8;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	_proto.grp_time0_i = function () {
		var t = new eui.Group();
		this.grp_time0 = t;
		t.height = 69;
		t.horizontalCenter = -50;
		t.verticalCenter = 478;
		t.visible = true;
		t.width = 163;
		t.elementsContent = [this._Image3_i(),this.lbl_time0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time0_i = function () {
		var t = new eui.Label();
		this.lbl_time0 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "10:00:00";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.grp_time1_i = function () {
		var t = new eui.Group();
		this.grp_time1 = t;
		t.height = 69;
		t.horizontalCenter = 50;
		t.verticalCenter = -438;
		t.visible = true;
		t.width = 163;
		t.x = 249;
		t.y = 1002;
		t.elementsContent = [this._Image4_i(),this.lbl_time1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time1_i = function () {
		var t = new eui.Label();
		this.lbl_time1 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "0:15";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.lbl_state0_i = function () {
		var t = new eui.Label();
		this.lbl_state0 = t;
		t.height = 39.904;
		t.horizontalCenter = -50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 478;
		t.width = 160;
		return t;
	};
	_proto.lbl_state1_i = function () {
		var t = new eui.Label();
		this.lbl_state1 = t;
		t.height = 39.904;
		t.horizontalCenter = 50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -438;
		t.width = 160;
		return t;
	};
	_proto.img_chat_i = function () {
		var t = new eui.Image();
		this.img_chat = t;
		t.height = 110;
		t.horizontalCenter = -237.5;
		t.source = "game1_json.chaticon";
		t.verticalCenter = 458;
		t.visible = false;
		t.width = 110;
		return t;
	};
	_proto.grp_keyboardMask_i = function () {
		var t = new eui.Group();
		this.grp_keyboardMask = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.zIndex = 999;
		return t;
	};
	return Main4;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main5.exml'] = window.skins.Main5 = (function (_super) {
	__extends(Main5, _super);
	function Main5() {
		_super.call(this);
		this.skinParts = ["img_pause","img_winLine","img_pieceTip","grp_board","img_turnTip","lbl_time0","grp_time0","lbl_time1","grp_time1","lbl_state0","lbl_state1","img_chat","grp_keyboardMask"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i(),this.grp_time0_i(),this.grp_time1_i(),this.lbl_state0_i(),this.lbl_state1_i(),this.img_chat_i(),this.grp_keyboardMask_i()];
	}
	var _proto = Main5.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_winLine_i(),this.img_pieceTip_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg15x15_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 4;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(5,6,3,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.width = 8;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 313.288;
		t.y = 317.343;
		t.zIndex = 998;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	_proto.grp_time0_i = function () {
		var t = new eui.Group();
		this.grp_time0 = t;
		t.height = 69;
		t.horizontalCenter = -50;
		t.verticalCenter = 478;
		t.visible = true;
		t.width = 163;
		t.elementsContent = [this._Image3_i(),this.lbl_time0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time0_i = function () {
		var t = new eui.Label();
		this.lbl_time0 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "10:00:00";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.grp_time1_i = function () {
		var t = new eui.Group();
		this.grp_time1 = t;
		t.height = 69;
		t.horizontalCenter = 50;
		t.verticalCenter = -438;
		t.visible = true;
		t.width = 163;
		t.x = 249;
		t.y = 1002;
		t.elementsContent = [this._Image4_i(),this.lbl_time1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -47;
		t.source = "game10_json.ic_times";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_time1_i = function () {
		var t = new eui.Label();
		this.lbl_time1 = t;
		t.height = 45;
		t.horizontalCenter = 58.5;
		t.size = 32;
		t.text = "0:15";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.width = 137.644;
		return t;
	};
	_proto.lbl_state0_i = function () {
		var t = new eui.Label();
		this.lbl_state0 = t;
		t.height = 39.904;
		t.horizontalCenter = -50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 478;
		t.width = 160;
		return t;
	};
	_proto.lbl_state1_i = function () {
		var t = new eui.Label();
		this.lbl_state1 = t;
		t.height = 39.904;
		t.horizontalCenter = 50;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -438;
		t.width = 160;
		return t;
	};
	_proto.img_chat_i = function () {
		var t = new eui.Image();
		this.img_chat = t;
		t.height = 110;
		t.horizontalCenter = -237.5;
		t.source = "game1_json.chaticon";
		t.verticalCenter = 458;
		t.visible = false;
		t.width = 110;
		return t;
	};
	_proto.grp_keyboardMask_i = function () {
		var t = new eui.Group();
		this.grp_keyboardMask = t;
		t.height = 1440;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.zIndex = 999;
		return t;
	};
	return Main5;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main6.exml'] = window.skins.Main6 = (function (_super) {
	__extends(Main6, _super);
	function Main6() {
		_super.call(this);
		this.skinParts = ["img_pause","img_pieceTip","img_winLine","grp_board","img_turnTip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i()];
	}
	var _proto = Main6.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_pieceTip_i(),this.img_winLine_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg15x15_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.zIndex = 0;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 320;
		t.y = 320;
		t.zIndex = 998;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 4;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(5,6,3,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.width = 8;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	return Main6;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main7.exml'] = window.skins.Main7 = (function (_super) {
	__extends(Main7, _super);
	function Main7() {
		_super.call(this);
		this.skinParts = ["img_pause","img_pieceTip","img_winLine","grp_board","img_turnTip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_pause_i(),this.grp_board_i(),this.img_turnTip_i()];
	}
	var _proto = Main7.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgr_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 255.5;
		t.source = "game10_json.home_icon";
		t.verticalCenter = -411.5;
		return t;
	};
	_proto.grp_board_i = function () {
		var t = new eui.Group();
		this.grp_board = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.sortableChildren = true;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.img_pieceTip_i(),this.img_winLine_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg15x15_png";
		t.verticalCenter = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_pieceTip_i = function () {
		var t = new eui.Image();
		this.img_pieceTip = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.source = "game10_json.br_heat";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 320;
		t.y = 320;
		t.zIndex = 998;
		return t;
	};
	_proto.img_winLine_i = function () {
		var t = new eui.Image();
		this.img_winLine = t;
		t.anchorOffsetX = 4;
		t.anchorOffsetY = 4;
		t.height = 310;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(5,6,3,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game10_json.br_ed_o";
		t.touchEnabled = false;
		t.width = 8;
		t.x = 929.9999999999999;
		t.y = 58;
		t.zIndex = 999;
		return t;
	};
	_proto.img_turnTip_i = function () {
		var t = new eui.Image();
		this.img_turnTip = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 86;
		t.height = 172;
		t.scale9Grid = new egret.Rectangle(43,45,178,62);
		t.source = "game10_json.bb_fx_2";
		t.visible = true;
		t.width = 300;
		return t;
	};
	return Main7;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Piece.exml'] = window.skins.Piece = (function (_super) {
	__extends(Piece, _super);
	function Piece() {
		_super.call(this);
		this.skinParts = ["img_color","grp_main"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = Piece.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this.img_color_i()];
		return t;
	};
	_proto.img_color_i = function () {
		var t = new eui.Image();
		this.img_color = t;
		t.height = 220;
		t.horizontalCenter = 0;
		t.source = "game10_json.ic_xo_1";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	return Piece;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayerCard.exml'] = window.skins.PlayerCard = (function (_super) {
	__extends(PlayerCard, _super);
	function PlayerCard() {
		_super.call(this);
		this.skinParts = ["img_player","img_iconFrame","lbl_playerName","lbl_playerScore","img_playerColor","grp_player"];
		
		this.height = 110;
		this.width = 280;
		this.elementsContent = [this.grp_player_i()];
	}
	var _proto = PlayerCard.prototype;

	_proto.grp_player_i = function () {
		var t = new eui.Group();
		this.grp_player = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 280;
		t.elementsContent = [this.img_player_i(),this.img_iconFrame_i(),this.lbl_playerName_i(),this.lbl_playerScore_i(),this.img_playerColor_i()];
		return t;
	};
	_proto.img_player_i = function () {
		var t = new eui.Image();
		this.img_player = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 90;
		t.horizontalCenter = -85;
		t.source = "game10_json.asset_player_blue";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto.img_iconFrame_i = function () {
		var t = new eui.Image();
		this.img_iconFrame = t;
		t.horizontalCenter = 0;
		t.source = "game1_json.avatar1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_playerName_i = function () {
		var t = new eui.Label();
		this.lbl_playerName = t;
		t.height = 48.759;
		t.left = 106;
		t.text = "玩家名字";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -24;
		t.width = 288.163;
		return t;
	};
	_proto.lbl_playerScore_i = function () {
		var t = new eui.Label();
		this.lbl_playerScore = t;
		t.anchorOffsetX = 70;
		t.height = 48.759;
		t.horizontalCenter = 70;
		t.size = 35;
		t.text = "0/0/0";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 23.347;
		t.width = 140;
		t.y = 19;
		return t;
	};
	_proto.img_playerColor_i = function () {
		var t = new eui.Image();
		this.img_playerColor = t;
		t.height = 50;
		t.horizontalCenter = -16.706;
		t.source = "game10_json.ic_xo_1";
		t.touchEnabled = false;
		t.verticalCenter = 20;
		t.width = 50;
		return t;
	};
	return PlayerCard;
})(eui.Skin);