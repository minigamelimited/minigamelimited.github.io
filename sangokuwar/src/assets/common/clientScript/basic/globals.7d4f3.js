let EType={rect:1,horizontal:2,vertical:3,grid:4,vertical2:5};function scanNode(e,n){if(null!=e&&void 0!==e&&e&&e._components&&e._components.length>0){let t=e.getComponent(cc.Sprite);t&&graySprite(n,t);for(let o=0;o<e.childrenCount;o++)scanNode(e.children[o],n)}}window.PLATFORM_DEFAULT=0,window.PLATFORM_OPPO=1,window.PLATFORM_VIVO=2,window.PLATFORM_BYTE=3,window.PLATFORM_TOPON=4,window.PLATFORM_WECHAT=5,window.PLATFORM_WEB=999,window.debug=!1,window.tyqAd=!1,window.skipAdBeforeTeach=!1,window.VER="0.1.8",window.platform=PLATFORM_WECHAT,window.DAREN=!1,window.isFirstShowMenu2=!0,window.enableSDK=!1,window.initSdkSuccess=0,window.intGameStatus=0,window.intStartCalcBattle0=!1,window.RED_DT=3,window.RUN_DT=.1,window.FISH_DT=.1,window.BATTLE_DT=.1,window.NPC_DT=0,window.ARROW_DT=.06,window.MAX_SOUND=3,window.COUNT_SOUND=0,window.FRAME_TIME_MAX=.04,window.FRAME_NPC_LOGIC_MAX=1,window.POS_YU=cc.v2(0,0),window.POS_YIN=cc.v2(0,0),window.POS_GONGXUN=cc.v2(0,0),window.CONST_ITEM_COIN_ID=1,window.CONST_ITEM_WEAPON_ID=[2,6,9,16,17],window.CONST_ITEM_SHIELD_ID=[3,7,10,18,19],window.CONST_ITEM_HAIR_1_ID=8,window.CONST_ITEM_HAIR_2_ID=11,window.CONST_ITEM_TEMP_WEAPON=12,window.CONST_ITEM_TEMP_SHIELD=13,window.CONST_ITEM_TEMP_HP=14,window.CONST_COST_POOL=[1e3,5e3,2e4,8e4],window.CONST_POOL_FISH_INIT=[200,300,400,500],window.CONST_PATH_ADS="img/ads",window.CONST_SHARE_IMG="",window.CONST_ORDER_TIME_LASTED=36e5,window.CONST_MAX_FROG=5,window.CONST_MAX_WEIGHT=300,window.CONST_STEP_DEFAULT=0,window.CONST_STEP_WAIT_FISH_BABY=1,window.CONST_STEP_PUSH_FISH_BABY=2,window.CONST_STEP_WAIT_FOOD_1=3,window.CONST_STEP_FISH_1_CD=4,window.CONST_STEP_WAIT_FISH_GET=5,window.CONST_STEP_WAIT_CLEAR=6,window.CONST_STEP_WAIT_STORY=7,window.CONST_STEP_WAIT_FOOD_2=999,window.CONST_STEP_FISH_2_CD=999,window.CONST_STEP_WAIT_FOOD_3=999,window.CONST_STEP_FISH_3_CD=999,window.CONST_ORDER_STATUS_DEFAULT=0,window.CONST_ORDER_STATUS_PROGRESS=1,window.CONST_ORDER_STATUS_FINISH=2,window.CONST_RES_PATH_AUDIO_CLICK=["packageBase","audio/click"],window.CONST_BOOK_TYPE_FISH=0,window.CONST_BOOK_TYPE_FOOD=1,window.CONST_BOOK_TYPE_POOL=2,window.CONST_BOOK_TYPE_PUMP=3,window.CONST_BOOK_TYPE_AERATOR=4,window.CONST_BOOK_TYPE_ROBOT=5,window.CONST_BOOK_TYPE_WIND=6,window.SERVER_ADDR="https://ws.taobao0.top/",window.SERVER_ADDR_GET_OPENID="",Array.prototype.push2=function(){for(var e=0;e<arguments.length;e++){var n=arguments[e];-1==this.indexOf(n)&&this.push(n)}},window.SceneWidgetVertical=0,window.uidNpc=0,window.isLoadPackage0=!1,window.frameTime=0,window.frameNpcCount=0,window.arrTeachTmpNodes=[],window.arrTeachGrayNodes=[],window.nodeHand=null,window.nodeDialog=null,window.initArms=[11,12,13,14],window.globalAssets={},window.globalPool=[],window.objBattle=null,window.arrRound=null,window.intBattle=0,window.intRound=0,window.intArms=0,window.intRoundTime=0,window.intTotalEnemy=0,window.intArmsBornCount=0,window.arrMap=null,window.arrNpcMap=null,window.mapCellWidth=0,window.mapCellHeight=0,window.horCellNum=0,window.verCellNum=0,window.enemyPool=null,window.heroPool=null,window.arrowPool=null,window.spineList=[],window.spineIndex=0,window.spinePool=new cc.NodePool,window.aniPool=new cc.NodePool,window.aniWanjianPool=null,window.buildingArrowPool=null,window.menuClickEffectPool=null,window.enemyList=null,window.heroList=null,window.arrowList=null,window.arrJice=null,window.intWallHpMax=1e3,window.intWallHp=1e3,window.intBattleBuff=0,window.intJiceKongChengJi=0,window.intStatus=0,window.zzpout=function(e){debug&&console.log(e)},window.zzpwarn=function(e){debug&&console.warn(e)},window.zzperr=function(e){debug&&console.error(e)},window.score=0,window.screenSizeProvider={getContentSize:function(){return cc.size(cc.visibleRect)},setContentSize:function(){},_getWidth:function(){return this.getContentSize().width},_getHeight:function(){return this.getContentSize().height}},window.setSubChildLayer=function(e,n){e.layer=n,0==e.children.length&&(e.layer=n);for(let t=0;t<e.children.length;t++)setSubChildLayer(e.children[t],n)},window.printSubChild=function(e){e.children.length;for(let n=0;n<e.children.length;n++)printSubChild(e.children[n])},window.findChild=function(e,n){for(let t=0;t<e.children.length;t++)if(e.children[t].name.startsWith(n))return e.children[t]},window.prefixInteger=function(e,n){return(Array(n).join("0")+e).slice(-n)},window.getTodayQiandao=function(){let e=new Date,n=Math.floor(""+e.getFullYear()+prefixInteger(e.getMonth()+1,2)+prefixInteger(e.getDate(),2)),t=new Date(user.getQianTime());return n>Math.floor(""+t.getFullYear()+prefixInteger(t.getMonth()+1,2)+prefixInteger(t.getDate(),2))},window.loadErrorRestart=function(){window.wx&&(wx.showToast({title:"\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f",icon:"none",duration:1500}),wx.exitMiniProgram())},window.getPrefabName=function(e){let n=e.lastIndexOf("/");return n>0?e.substr(n+1):e},window.getPrefabPath=function(e){let n=jsonTables.getJsonTable("item");for(let t=0;t<n.length;t++){let o=n[t];if(o.prefab&&getPrefabName(o.prefab)===e)return o.prefab}return null},window.getBigRoundSize=function(e){return CONST_ROUND_SIZE[Math.min(CONST_ROUND_SIZE.length,e)]},window.getSmallRound=function(){let e=Math.min(jsonTables.getJsonTableSize("round"),user.getRound()),n=0,t=getBigRoundSize(0);for(;e>t;)e-=t,t=getBigRoundSize(++n);return e},window.getBigRound=function(){let e=Math.min(jsonTables.getJsonTableSize("round"),user.getRound()),n=0,t=getBigRoundSize(0);for(;e>t;)n++,t=getBigRoundSize(n);return n},window.dateFormat=function(e,n){let t,o={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(let i in o)(t=new RegExp("("+i+")").exec(e))&&(e=e.replace(t[1],1==t[1].length?o[i]:o[i].padStart(t[1].length,"0")));return e},window.formatTime=function(e){e=parseInt(e);let n=prefixInteger(e%60,2);return e<60&&(n="00:"+n),e>=60&&(n=prefixInteger(Math.floor(e/60)%60,2)+":"+n),e>=3600&&(n=prefixInteger(Math.floor(e/3600),2)+":"+n),n},window.formatNum=function(e){return e<1e3?e:e<1e6?(e/1e3).toFixed(2)+"K":e<1e9?(e/1e6).toFixed(2)+"M":e<1e12?(e/1e9).toFixed(2)+"G":(e/1e12).toFixed(2)+"T"},window.showCover=function(e=!1){uiManager.getRoot().parent.getChildByName("uiCover").getComponent(cc.BlockInputEvents).enabled=e},window.showMask=function(e,n,t,o,i){if(zzpout("showMask"),t<=0||o<=0)return;let a=uiManager.getRoot().parent.getChildByName("uiAni").getChildByName("nodeMask");window.tweenMask&&window.tweenMask.stop(),a?(a.active=!0,a.getComponent("nodeMask").setPos(e,n,t,o),a.getComponent("nodeMask").setDialog(i),a.opacity=0,window.tweenMask=cc.tween(a).delay(1).to(.5,{opacity:255}),window.tweenMask.start()):resMgr.loadRes("package0",["prefab/preMask"],cc.Prefab,function(a){let r=cc.instantiate(globalAssets[a]);r.name="nodeMask",r.parent=uiManager.getRoot().parent.getChildByName("uiAni"),r.getComponent("nodeMask").setPos(e,n,t,o),r.getComponent("nodeMask").setDialog(i),r.opacity=0,window.tweenMask&&window.tweenMask.stop(),window.tweenMask=cc.tween(r).delay(.3).to(.5,{opacity:255}),window.tweenMask.start()})},window.isInScreen=function(e,n){let t=screenSizeProvider.getContentSize();return new cc.Rect(0,0,t.width,t.height).contains(new cc.Vec2(e+.5*t.width,n+.5*t.height))},window.log=function(e){console.log(e)},window.searchPath=function(e,n,t){var o=new Graph(e,{diagonal:!0}),i=o.grid[n.x][n.y],a=o.grid[t.x][t.y];return astar.search(o,i,a,{heuristic:astar.heuristics.diagonal})},window.isAttackTarget=function(e,n){return n!=constants.battleNpcSide.None&&(e<constants.battleNpcSide.Side&&e>constants.battleNpcSide.None&&n>constants.battleNpcSide.Side||e>constants.battleNpcSide.Side&&n<constants.battleNpcSide.Side&&n>constants.battleNpcSide.None)},window.isHero=function(e){return e!=constants.battleNpcSide.None&&e<constants.battleNpcSide.Side},window.isEnemy=function(e){return e!=constants.battleNpcSide.None&&e>constants.battleNpcSide.Side},window.isWall=function(e){return arrNpcMap[e.x][e.y]==constants.battleNpcSide.Wall},window.isArrow=function(e){return e==constants.battleNpcSide.PlayerArrow||e==constants.battleNpcSide.EnemyArrow},window.getEnemy=function(e,n){let t=getEnemyList(e);for(let o=0;o<t.length;o++)if(t[o]&&v2Equals(t[o].getComponent("nodeNpc").cellPos,n)&&t[o].getComponent("nodeNpc").attHp>0)return t[o];return null},window.getNpcByUid=function(e,n){let t=e.length;for(let o=0;o<t;o++)if(e[o].getComponent("nodeNpc").uid==n)return e[o];return null},window.getEnemyList=function(e){return isHero(e)?enemyList:heroList},window.isInAtkRange=function(e,n,t){return Math.abs(t.x-e.x)<=n&&Math.abs(t.y-e.y)<=n},window.getPool=function(e){return isArrow(e)?arrowPool:isHero(e)?heroPool:enemyPool},window.v2Equals=function(e,n){let t=cc.v2(e.x,e.y),o=cc.v2(n.x,n.y);return t.equals(o)},window.indexOf=function(e,n){for(var t=0;t<e.length;t++)if(e[t]==n)return t;return-1},window.remove=function(e,n){var t=indexOf(e,n);t>-1&&e.splice(t,1)},window.replace=function(e,n,t){var o=e.indexOf(n);return e.substr(0,o)+t+e.substr(o+n.length)},window.removeNode=function(e,n,t){for(let o=0;o<e.length;o++)if(e[o]&&e[o].getComponent(t).uid==n){e.splice(o,1);break}},window.isIdInArray=function(e,n){for(let t=0;t<e.length;t++)if(e[t]==n)return!0;return!1},window.grayNode=function(e,n){scanNode(e,n)},window.graySprite=function(e,n){let t=null;t=e?cc.Material.getBuiltinMaterial("2d-gray-sprite"):cc.Material.getBuiltinMaterial("2d-sprite"),t=cc.MaterialVariant.create(t,sp),n.setMaterial(0,t)},window.getUid=function(){return uidNpc++,1e3*(uidNpc+1)+Math.floor(1e3*Math.random())},window.getItemType=function(e,n){return 1==e?jsonTables.getJsonTableObj("arm",n):2==e?jsonTables.getJsonTableObj("jiceType",n):void 0},window.getItemDetail=function(e,n){return 1==e?jsonTables.getJsonTableObj("arm",n):2==e?jsonTables.getJsonTableObj("jiceDetail",n):void 0},window.getShop1RefreshCost=function(){let e=jsonTables.getJsonTable("cfg");return e.shop1RefreshCost+user.getShop1RefreshCount()*e.shop1RefreshAdd},window.getRangeTarget=function(e,n,t,o=1){let i=2*t,a=!1;var r={};r.pos=new Array,r.npc=new Array;let l="search:";for(let s=0;s<=i&&!a;s++){let d=e.y;if(0!=s&&(s%2>0?d+=Math.floor(s/2)+1:d-=Math.floor(s/2)),!(d<0||d>=arrNpcMap[0].length||Math.abs(d-e.y)>t))for(let s=0;s<=i;s++){let i=e.x;if(0!=s&&(s%2>0?i+=Math.floor(s/2)+1:i-=Math.floor(s/2)),!(i<0||i>=arrNpcMap.length||cc.v2(i,d).sub(e).len()>t)){if(l+=i+","+d+" ",isEnemy(n)&&isWall(cc.v2(i,d))&&intWallHp>0&&0==intJiceKongChengJi)r.pos.push(cc.v2(parseInt(i),parseInt(d))),l+=" find wall:"+i+","+d+" ";else{let e=getEnemy(n,cc.v2(parseInt(i),parseInt(d)));e&&e.getComponent("nodeNpc").intStatus==constants.npcState.Live&&(r.npc.push(e),l+=" find npc:"+i+","+d+" ")}if(o>0&&r.pos.length>0&&r.npc.length>=o){l+=" break ",a=!0;break}}}}return r},window.getSpineSize=function(e,n=null){let t=e.skins,o=t.length,i=[0,0];for(let a=0;a<o;a++)null!=n&&t[a].name!=n||(i=walkObject(t[a].attachments,i));return i},window.walkObject=function(e,n){if(e instanceof Object&&e.hasOwnProperty("width")&&e.hasOwnProperty("height"))return[Math.max(e.width,n[0]),Math.max(e.height,n[1])];if(e instanceof Array){let t=e.length;for(let e=0;e<t;e++)n=walkObject(arr[e],n)}if(e instanceof Object)for(var t in e)n=walkObject(e[t],n);return n},window.randomNormalDistribution=function(){for(var e=0,n=0;n<12;n++)e+=Math.random();return e-6},window.showSpine=function(e,n,t,o=null,i=null,a=null,r=null,l=!0){resMgr.loadRes("packageBase",["prefab/preSpine"],cc.Prefab,function(s){if(spineIndex==spineList.length)for(let e=0;e<50;e++)spineList.push(cc.instantiate(globalAssets[s]));var d=null;spinePool.size()>0?d=spinePool.get():(d=spineList[spineIndex],spineIndex++),d.scale=1,d.opacity=255,d.position=n,d.parent=e,d.name=""+t.Tid,d.stopAllActions(),resMgr.loadRes(t.picPackage,[t.picPath],sp.SkeletonData,function(n){var s=d.getComponent(sp.Skeleton);d.getComponent(sp.Skeleton).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE),s.skeletonData=globalAssets[n],s.setSkin("default");var c=null;if(Array.isArray(t.animation)){c=s.setAnimation(0,t.animation[0],1==t.loop);for(let e=1;e<t.animation.length;e++)c=s.addAnimation(0,t.animation[e],1==t.loop)}else c=s.setAnimation(0,t.animation,1==t.loop);if(null==c&&(platform==PLATFORM_TOPON||i||a)){if(d.getComponent(sp.Skeleton).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME),s.skeletonData=globalAssets[n],d.getComponent(sp.Skeleton).clearTracks(),Array.isArray(t.animation)){c=s.setAnimation(0,t.animation[0],1==t.loop);for(let e=1;e<t.animation.length;e++)c=s.addAnimation(0,t.animation[e],1==t.loop)}else c=s.setAnimation(0,t.animation,1==t.loop);null==c&&(i||a)&&(c=s.getCurrent(0))}if(1==t.isFullScreen){let t=getSpineSize(globalAssets[n].skeletonJson);d.scale=Math.max(e.width/t[0],e.height/t[1])}else d.scale=Math.max(t.zoom[0],Math.min(t.zoom[1],randomNormalDistribution()*(t.zoom[1]-t.zoom[0])+t.zoom[0]))/100;c&&o&&"no"!=o[0]&&s.setTrackEventListener(c,(e,n)=>{for(let t=0;t<o.length;t++)n.data.name==o[t]&&i[t]&&i[t](d)}),s&&c&&s.setTrackCompleteListener(c,()=>{zzperr("\u64ad\u653e\u5b8c\u6bd5:"+n),s&&s.setTrackEventListener(c,()=>{}),s&&s.setTrackCompleteListener(c,()=>{}),a&&a(d),l&&d&&spinePool.put(d)}),r&&r(d)})})},window.showAnimationArrow=function(e,n){resMgr.loadRes("package0",["prefab/preWanjianqifa"],cc.Prefab,function(t){let o=null;(o=aniWanjianPool.size()>0?aniWanjianPool.get():cc.instantiate(globalAssets[t])).position=n,o.opacity=0;let i=.3*Math.random();cc.tween(o).delay(i).to(.1,{opacity:255}).delay(1-i).by(.5,{position:cc.v2(0,1.5*e.height)}).removeSelf().start(),o.parent=e;let a=o.getComponent(cc.Animation);zzpout("load \u4e07\u7bad\u9f50\u53d1"),a.play()})},window.showAnimation=function(e,n,t,o=1,i=!1,a=null){resMgr.loadRes("package0",["prefab/preAnimation"],cc.Prefab,function(i){let r=null;(r=aniPool.size()>0?aniPool.get():cc.instantiate(globalAssets[i])).position=n,r.parent=e,r.name=t.replace(new RegExp("/","gm"),"");let l=r.getComponent(cc.Animation),s=l.getClips();for(let e=0;e<s.length;e++)s[e]&&l.removeClip(s[e],!0);resMgr.loadRes("package0",[t],cc.AnimationClip,function(e){l.addClip(globalAssets[e],"ani"),l.defaultClip=globalAssets[e],l.setCurrentTime(0),l.play("ani")}),r.scale=o,a&&a(r)})},window.getItemArm=function(e){if(e<=0)return null;let n=user.getItem(e);if(null==n)return null;let t=jsonTables.getJsonTableObj("item",e);if(null==t)return null;let o=jsonTables.getJsonTableArrObj("arm","level",Math.max(1,n.lv));for(let i=0;i<o.length;i++)if(o[i].type==t.armType&&o[i].quality==t.quality)return o[i];return null},window.changeSkillToArray=function(e){var n=[];return n.push(e.skillA),n.push(e.skillB),n.push(e.skillC),n.push(e.skillD),n},window.isIntNum=function(e){return!!/(^[1-9]\d*$)/.test(e)},window.playSound=function(e,n=!1){let t=jsonTables.getJsonTableObj("sound",e);if(!(0==t.loop&&0==user.getMusic()||1==t.loop&&0==user.getSound())){if(t.loop>0){if(COUNT_SOUND>=MAX_SOUND&&!n)return;COUNT_SOUND++}resMgr.playEffect(t.picPackage,t.picPath,0==t.loop)}},window.stopSound=function(e){let n=jsonTables.getJsonTableObj("sound",e);resMgr.stopEffect(n.picPath)},window.showAd=function(e,n,t,o,i,a){resMgr.loadRes("packageMenu",["prefab/preWatchAd"],cc.Prefab,function(r){let l=uiManager.getRoot().parent.getChildByName("uiCover").getChildByName("nodeWatchAd");l&&l.destroy();let s=cc.instantiate(globalAssets[r]);s.name="nodeWatchAd",s.parent=uiManager.getRoot().parent.getChildByName("uiCover"),s.getComponent("nodeWatchAd").init(e,n,t,o,i,a)})},window.showUnlockItem=function(e,n=null){showUnlock(0,e,n)},window.showUnlockSkill=function(e,n=null){showUnlock(1,e,n)},window.showUnlockGuanzhi=function(e,n=null){showUnlock(2,e,n)},window.showUnlockJice=function(e,n=null){showUnlock(3,e,n)},window.showUnlock=function(e,n,t=null){resMgr.loadRes("packageMenu",["prefab/preMenuUnlockArm"],cc.Prefab,function(o){let i=uiManager.getRoot().parent.getChildByName("uiMsg").getChildByName("nodeMenuUnlockArm");i&&i.destroy();let a=cc.instantiate(globalAssets[o]);a.name="nodeMenuUnlockArm",a.parent=uiManager.getRoot().parent.getChildByName("uiMsg"),a.getComponent("nodeMenuUnlockArm").init(e,n,t)})},window.showItemFly=function(e,n,t,o=8,i=null){let a=jsonTables.getJsonTableObj("item",e);resMgr.loadRes(a.picPackage,[a.picPath],cc.SpriteFrame,function(e){showImgFly(globalAssets[e],n,t,o,i)})},window.showImgFly=function(e,n,t,o=8,i=null){let a=[],r=[],l=o,s=360/l,d=uiManager.getRoot().parent.getChildByName("uiAni"),c=n?d.convertToNodeSpaceAR(n):cc.v2(0,0),w=d.convertToNodeSpaceAR(t);for(let g=0;g<l;g++){a[g]=new cc.Node,r[g]=a[g].addComponent(cc.Sprite),r[g].spriteFrame=e,a[g].position=c||cc.v2(0,0),a[g].parent=d;let n=c;l>1&&(n=c.add(cc.v2(100*Math.cos(s*g),100*Math.sin(s*g))));let t=w.sub(n).mul(.5);cc.tween(a[g]).to(.3,{position:n},{easing:"quadOut"}).bezierTo(1,n,t,w,{easing:"quadOut"}).call(()=>{0==g&&i&&i()}).removeSelf().start()}},window.showLoading=function(e){if(e){let e=uiManager.getRoot().parent.getChildByName("loading");if(e.active)return;e.active=!0,cc.tween(e.getChildByName("img")).by(1,{angle:-180}).repeatForever().start()}else{let e=uiManager.getRoot().parent.getChildByName("loading");e.getChildByName("img").stopAllActions(),e.active=!1}},window.showMask=function(e){uiManager.getRoot().parent.getChildByName("uiMask").active=e},window.cloneNode=function(e){if(void 0!==e&&null!=e){const t=e.convertToWorldSpaceAR(cc.v2(0,0));zzperr("pos:"+t);const o=uiManager.getRoot().parent.getChildByName("uiTeach"),i=o.convertToNodeSpaceAR(t);var n=cc.instantiate(e);for(let e=0;e<n._components.length;e++)zzperr("name:"+n._components[e].name),n._components[e].name.indexOf("Sprite")<0&&n._components[e].name.indexOf("Skeleton")<0&&n._components[e].name.indexOf("nodeLoadSprite")<0&&n._components[e].name.indexOf("nodeLoadSpine")<0&&(n._components[e].enabled=!1);return n.parent=o,n.position=i,zzperr("newPos:"+n.position),n}return null},window.teachRemove=function(){let e=arrTeachTmpNodes.length;for(let n=0;n<e;n++){let e=arrTeachTmpNodes[n];e&&(e.destroyAllChildren(),e.destroy(),e=null)}if(arrTeachTmpNodes=[],showMask(!1),nodeDialog&&(nodeDialog.stopAllActions(),nodeDialog.destroy(),nodeDialog=null),nodeHand&&(nodeHand.stopAllActions(),nodeHand.destroy(),nodeHand=null),arrTeachGrayNodes){let e=arrTeachGrayNodes.length;for(let n=0;n<e;n++){let e=arrTeachGrayNodes[n];e&&grayNode(e,!1)}}arrTeachGrayNodes=[],uiManager.getRoot().parent.resumeSystemEvents(!0)},window.teachTrigger=function(e,n=null){let t=jsonTables.getJsonTable("teach"),o=t.length,i=!1,a=!1;for(let s=0;s<o;s++)if(user.getTeach(t[s].eventId)==constants.teachEventValue.trigger&&(t[s].triggerBtnType==constants.triggerBtnType.forceClick||t[s].triggerBtnType==constants.triggerBtnType.forceSlide))return;for(let s=0;s<o;s++)if(user.getTeach(t[s].eventId)!=constants.teachEventValue.complete&&user.getTeach(t[s].eventId)!=constants.teachEventValue.trigger){if(t[s].triggerScene!=e&&t[s].triggerScene!=constants.triggerScene.default||!(0==t[s].triggerBattle||t[s].triggerLogic==constants.triggerLogic.larger&&user.getBattle()>t[s].triggerBattle||t[s].triggerLogic==constants.triggerLogic.equal&&user.getBattle()-1==t[s].triggerBattle||t[s].triggerLogic==constants.triggerLogic.small&&user.getBattle()<t[s].triggerBattle)||user.getTeach(t[s].triggerCompleteTeach)!=constants.teachEventValue.complete){if(t[s].maskSelf>0){let e=cc.find(t[s].path);e&&(grayNode(e,!0),arrTeachGrayNodes.push(e),e.pauseSystemEvents(!0))}}else{zzperr("\u89e6\u53d1:"+t[s].path);var r=cc.find(t[s].path);if(r){zzperr("\u89e6\u53d1 \u627e\u5230\u7bc0\u9ede"),user.setTeach(t[s].eventId,constants.teachEventValue.trigger);let e=null;if(t[s].mask>0&&(i=!0,e=cloneNode(r),arrTeachTmpNodes.push(e)),t[s].triggerBtnType!=constants.triggerBtnType.forceClick&&t[s].triggerBtnType!=constants.triggerBtnType.forceSlide&&t[s].triggerBtnType!=constants.triggerBtnType.forceDragToNode||(a||uiManager.getRoot().parent.pauseSystemEvents(!0),a=!0,r.resumeSystemEvents(!0)),t[s].triggerDialog==constants.triggerDialog.yes&&showDialog(uiManager.getRoot().parent.getChildByName("uiHand"),t[s].dialogPos,t[s].dialog),t[s].triggerBtnType==constants.triggerBtnType.click||t[s].triggerBtnType==constants.triggerBtnType.forceClick||t[s].triggerBtnType==constants.triggerBtnType.forceSlide||t[s].triggerBtnType==constants.triggerBtnType.forceDragToNode){let n=cc.v2(0,0),o=null;if(t[s].clickPos.length>=2&&(n=(e||r).convertToWorldSpaceAR(cc.v2(t[s].clickPos[0],t[s].clickPos[1]))),t[s].triggerBtnType==constants.triggerBtnType.forceDragToNode){var l=cc.find(t[s].dragPath);l?(o=l.convertToWorldSpaceAR(cc.v2(0,0)),zzperr("\u62d6\u52a8\u5230\u8282\u70b9"+o)):zzperr("\u62d6\u52a8\u5230\u8282\u70b9 \u627e\u4e0d\u5230\u8282\u70b9:"+t[s].dragPath)}null==o&&t[s].clickPos.length>=4&&(o=(e||r).convertToWorldSpaceAR(cc.v2(t[s].clickPos[2],t[s].clickPos[3])));let i=uiManager.getRoot().parent.getChildByName("uiHand");zzperr("pos1:"+n+",pos2:"+o),showHand(i,i.convertToNodeSpaceAR(n),o?i.convertToNodeSpaceAR(o):null)}t[s].maskSelf>0&&(grayNode(r,!1),r.resumeSystemEvents(!0)),n&&n()}else zzperr("\u6559\u5b66"+t[s].eventId+"\u65e0\u6cd5\u627e\u5230\u8282\u70b9:"+t[s].path)}if(a)break}i?showMask(!0):showMask(!1)},window.showDialog=function(e,n,t){let o=cc.v2(n[0],n[1]);null==nodeDialog?createDialog(e,()=>{setDialog(o,t)}):setDialog(o,t)},window.createDialog=function(e,n){null==nodeDialog&&resMgr.loadRes("packageBase",["prefab/preDialog"],cc.Prefab,function(t){nodeDialog=cc.instantiate(globalAssets[t]),nodeDialog.name="nodeDialog",nodeDialog.parent=e,n&&n()})},window.setDialog=function(e,n){nodeDialog.stopAllActions(),cc.tween(nodeDialog).set({position:e}).set({opacity:0}).to(.3,{opacity:255}).start(),nodeDialog.getChildByName("text").getComponent(cc.Label).string=n},window.showHand=function(e,n,t){null==nodeHand?createHand(e,()=>{setHand(n,t)}):setHand(n,t)},window.createHand=function(e,n){null==nodeHand&&resMgr.loadRes("packageBase",["prefab/preHand"],cc.Prefab,function(t){nodeHand=cc.instantiate(globalAssets[t]),nodeHand.name="nodeHand",nodeHand.opacity=0,nodeHand.parent=e,n&&n()})},window.setHand=function(e,n=null){nodeHand.stopAllActions(),nodeHand.setPosition(cc.v2(0,0)),n?cc.tween(nodeHand).set({position:e}).set({opacity:0}).to(.3,{opacity:255}).to(.5,{position:n}).to(.3,{opacity:0}).union().repeatForever().start():e&&cc.tween(nodeHand).set({position:e}).set({opacity:0}).to(.3,{opacity:255}).start()},window.showByteBanner=function(e,n){platform!=PLATFORM_BYTE&&platform!=PLATFORM_TOPON||showBanner(e,n)},window.showWechatBanner=function(e,n){platform==PLATFORM_WECHAT&&showBanner(e,n)},window.showBanner=function(e,n){if(TyqSdk.getSwitchValue(n)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showBanner(e)}},window.showWxGridVertical=function(e,n){if(platform==PLATFORM_WECHAT&&TyqSdk.getSwitchValue(e)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showWxCustomAd(n,EType.vertical,{left:10}),SdkMgr.showWxCustomAd(n+1,EType.vertical2,{right:10})}},window.showWxGridHorizontal=function(e,n,t){if(platform==PLATFORM_WECHAT&&TyqSdk.getSwitchValue(e)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showWxCustomAd(n,EType.horizontal,{bottom:t})}},window.showWxGridRect=function(e,n){if(platform==PLATFORM_WECHAT&&TyqSdk.getSwitchValue(e)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showWxCustomAd(n,EType.rect)}},window.showWxGridSingle=function(e,n){if(platform==PLATFORM_WECHAT&&TyqSdk.getSwitchValue(e)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showWxCustomAd(n,EType.grid,{left:10,top:190}),SdkMgr.showWxCustomAd(n+1,EType.grid,{right:10,top:160})}},window.hideWxGrid=function(e){platform==PLATFORM_WECHAT&&SdkMgr.hideWxCustomAd(e)},window.showWxRandomAd=function(){if(platform==PLATFORM_WECHAT){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;TyqSdk.getSwitchValue(constants.switchWechat.switchRandomAd)&&(TyqSdk.getConfigProbability(constants.switchWechat.propertyRandomAd)?showWxGridRect(constants.switchWechat.switchRandomAd,constants.switchWechat.switchRandomAd):showWxInterAd())}},window.showWxInterAd=function(){platform==PLATFORM_WECHAT&&SdkMgr.showIntersAd()},window.showWxSceneWinAd=function(){if(platform==PLATFORM_WECHAT){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;TyqSdk.getSwitchValue(constants.switchWechat.switchSceneWinInterAd)&&showWxInterAd(),TyqSdk.getSwitchValue(constants.switchWechat.switchSceneWinGridAd)&&SdkMgr.showWxCustomAd(constants.switchWechat.switchSceneWinGridAd,EType.horizontal,{bottom:0})}},window.showInfomationAdCenter=function(e){if(platform==PLATFORM_TOPON&&TyqSdk.getSwitchValue(e)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showNativeInfomationOfCentre()}},window.showInterAdGameEnd=function(){if((platform==PLATFORM_BYTE||platform==PLATFORM_TOPON)&&TyqSdk.getSwitchValue(constants.switch.switchInterAd)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showIntersAd()}},window.showInterAdRateOnQianTouchGet=function(){if(platform==PLATFORM_TOPON&&TyqSdk.getConfigProbability(constants.switch.switchInterAdRate)){if(skipAdBeforeTeach&&!user.isAllTeachEnd())return;SdkMgr.showIntersAd()}},window.showReward=function(e){if(tyqAd||platform==PLATFORM_DEFAULT){let n=TyqSdk.getSwitchValue(e);if(zzperr("showReward:"+n),n){let e=n.split(",");zzperr("showReward:"+e),e&&e.length>0&&resMgr.loadRes("packageMenu",["prefab/preReward"],cc.Prefab,function(n){let t=uiManager.getRoot().parent.getChildByName("uiCover"),o=cc.instantiate(globalAssets[n]);o.parent=t;let i=[],a=[];for(let r=0;r<e.length;r+=2){let n=jsonTables.getJsonTableObj("item",parseInt(e[r]));i.push(n),a.push(parseInt(e[r+1]))}o.getComponent("nodeReward").init(i,a),o.getComponent("nodeReward").setCallback(function(){let e=a.length;for(let n=0;n<e;n++)user.addItem(i[n].Tid,a[n])})})}}},window.sendCustomEvent=function(e){void 0!==e&&null!=e?eventMgr.sendEvent(e):console.log("cannot find "+e)},window.posToCell=function(e){return cc.v2(Math.floor(e.x/mapCellWidth),-Math.floor(e.y/mapCellHeight))},window.cellToPos=function(e){return cc.v2(e.x*mapCellWidth,-e.y*mapCellHeight)};