﻿//=============================================================================
// RecollectionMode.js
// Copyright (c) 2015 rinne_grid
// This plugin is released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//
// Version
// 1.0.0 2015/12/26 公開
// 1.1.0 2016/04/19 回想一覧にサムネイルを指定できるように対応
// 1.1.1 2016/05/03 セーブデータ20番目のスイッチが反映されない不具合を修正
//                  セーブデータ間のスイッチ共有オプション
//                  (share_recollection_switches)を追加
// 1.1.2 2016/05/09 回想用のCGリストのキーを数字から文字列に変更
// 1.1.3 2016/11/23 セーブデータが増えた場合にロード時間が長くなる問題を解消
// 1.1.4 2016/12/23 CG閲覧時にクリック・タップで画像送りができるよう対応
// 1.1.5 2017/01/26 CG・シーンで一部サムネイルが表示されない問題を解消
//=============================================================================

/*:ja
 * @plugindesc 回想モード機能を追加します。
 * @author rinne_grid
 *
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

//-----------------------------------------------------------------------------
// ◆ プラグイン設定
//-----------------------------------------------------------------------------
var rngd_recollection_mode_settings = {
  "rec_cg_set": {
    "1": {
      "title": "CG01",
      "common_event_id": 151,
      "switch_id": 101,
      "thumbnail": "sCG01_01",
      "pictures": [
        "CG01_01",
        "CG01_02",
        "CG01_03",
        "CG01_04",
        "CG01_05",
        "CG01_06",
        "CG01_07",
        "CG01_08",
        "CG01_09",
        "CG01_10",
        "CG01_11",
        "CG01_12",
        "CG01_13",
        "CG01_14",
        "CG01_15",
        "CG01_16"
      ]
    },
    "2": {
      "title": "CG02",
      "common_event_id": 152,
      "switch_id": 102,
      "thumbnail": "sCG02_01",
      "pictures": [
        "CG02_01",
        "CG02_02",
        "CG02_03",
        "CG02_04",
        "CG02_05",
        "CG02_06",
        "CG02_07"
      ]
    },
    "3": {
      "title": "CG03",
      "common_event_id": 153,
      "switch_id": 103,
      "thumbnail": "sCG03_01",
      "pictures": [
        "CG03_01",
        "CG03_02",
        "CG03_03",
        "CG03_04",
        "CG03_05",
        "CG03_06",
        "CG03_07"
      ]
    },
    "4": {
      "title": "CG04",
      "common_event_id": 154,
      "switch_id": 104,
      "thumbnail": "sCG04_01",
      "pictures": [
        "CG04_01",
        "CG04_02",
        "CG04_03",
        "CG04_04",
        "CG04_05",
        "CG04_06",
        "CG04_07"
      ]
    },
    "5": {
      "title": "CG05",
      "common_event_id": 155,
      "switch_id": 105,
      "thumbnail": "sCG05_01",
      "pictures": [
        "CG05_01",
        "CG05_02",
        "CG05_03",
        "CG05_04",
        "CG05_05"
      ]
    },
    "6": {
      "title": "CG06",
      "common_event_id": 156,
      "switch_id": 106,
      "thumbnail": "sCG06_01",
      "pictures": [
        "CG06_01",
        "CG06_02",
        "CG06_03",
        "CG06_04"
      ]
    },
    "7": {
      "title": "CG07",
      "common_event_id": 157,
      "switch_id": 107,
      "thumbnail": "sCG07_01",
      "pictures": [
        "CG07_01",
        "CG07_02",
        "CG07_03",
        "CG07_04",
        "CG07_05"
      ]
    },
    "8": {
      "title": "CG08",
      "common_event_id": 158,
      "switch_id": 108,
      "thumbnail": "sCG08_01",
      "pictures": [
        "CG08_01",
        "CG08_02"
      ]
    },
    "9": {
      "title": "CG09",
      "common_event_id": 159,
      "switch_id": 109,
      "thumbnail": "sCG09_01",
      "pictures": [
        "CG09_01",
        "CG09_02",
        "CG09_03",
        "CG09_04",
        "CG09_05",
        "CG09_06",
        "CG09_07",
        "CG09_08"
      ]
    },
    "10": {
      "title": "CG10",
      "common_event_id": 160,
      "switch_id": 110,
      "thumbnail": "sCG10_01",
      "pictures": [
        "CG10_01",
        "CG10_02",
        "CG10_03",
        "CG10_04",
        "CG10_05",
        "CG10_06",
        "CG10_07",
        "CG10_08",
        "CG10_09",
        "CG10_10"
      ]
    },
    "11": {
      "title": "CG11",
      "common_event_id": 161,
      "switch_id": 111,
      "thumbnail": "sCG11_01",
      "pictures": [
        "CG11_01",
        "CG11_02",
        "CG11_03",
        "CG11_04",
        "CG11_05",
        "CG11_06"
      ]
    },
    "12": {
      "title": "CG12",
      "common_event_id": 162,
      "switch_id": 112,
      "thumbnail": "sCG12_01",
      "pictures": [
        "CG12_01",
        "CG12_02",
        "CG12_03",
        "CG12_04",
        "CG12_05"
      ]
    },
    "13": {
      "title": "CG13",
      "common_event_id": 163,
      "switch_id": 113,
      "thumbnail": "sCG13_01",
      "pictures": [
        "CG13_01",
        "CG13_02",
        "CG13_03",
        "CG13_04",
        "CG13_05",
        "CG13_06",
        "CG13_07"
      ]
    },
    "14": {
      "title": "CG14",
      "common_event_id": 164,
      "switch_id": 114,
      "thumbnail": "sCG14_01",
      "pictures": [
        "CG14_01",
        "CG14_02",
        "CG14_03",
        "CG14_04",
        "CG14_05"
      ]
    },
    "15": {
      "title": "CG15",
      "common_event_id": 165,
      "switch_id": 115,
      "thumbnail": "sCG15_01",
      "pictures": [
        "CG15_01",
        "CG15_02",
        "CG15_03"
      ]
    },
    "16": {
      "title": "CG16",
      "common_event_id": 166,
      "switch_id": 116,
      "thumbnail": "sCG16_01",
      "pictures": [
        "CG16_01",
        "CG16_02",
        "CG16_03",
        "CG16_04",
        "CG16_05"
      ]
    },
    "17": {
      "title": "CG17",
      "common_event_id": 167,
      "switch_id": 117,
      "thumbnail": "sCG17_01",
      "pictures": [
        "CG17_01",
        "CG17_02",
        "CG17_03",
        "CG17_04"
      ]
    },
    "18": {
      "title": "CG18",
      "common_event_id": 168,
      "switch_id": 118,
      "thumbnail": "sCG18_01",
      "pictures": [
        "CG18_01",
        "CG18_02",
        "CG18_03",
        "CG18_04"
      ]
    },
    "19": {
      "title": "CG19",
      "common_event_id": 169,
      "switch_id": 119,
      "thumbnail": "sCG19_01",
      "pictures": [
        "CG19_01",
        "CG19_02",
        "CG19_03",
        "CG19_04"
      ]
    },
    "20": {
      "title": "CG20",
      "common_event_id": 170,
      "switch_id": 120,
      "thumbnail": "sCG20_01",
      "pictures": [
        "CG20_01",
        "CG20_02",
        "CG20_03",
        "CG20_04",
        "CG20_05",
        "CG20_06"
      ]
    },
    "21": {
      "title": "CG21",
      "common_event_id": 171,
      "switch_id": 121,
      "thumbnail": "sCG21_01",
      "pictures": [
        "CG21_01",
        "CG21_02",
        "CG21_03",
        "CG21_04",
        "CG21_05",
        "CG21_06",
        "CG21_07"
      ]
    },
    "22": {
      "title": "CG22",
      "common_event_id": 172,
      "switch_id": 122,
      "thumbnail": "sCG22_01",
      "pictures": [
        "CG22_01",
        "CG22_02",
        "CG22_03",
        "CG22_04",
        "CG22_05"
      ]
    },
    "23": {
      "title": "CG23",
      "common_event_id": 173,
      "switch_id": 123,
      "thumbnail": "sCG23_01",
      "pictures": [
        "CG23_01",
        "CG23_02",
        "CG23_03",
        "CG23_04",
        "CG23_05"
      ]
    },
    "24": {
      "title": "CG24",
      "common_event_id": 174,
      "switch_id": 124,
      "thumbnail": "sCG24_01",
      "pictures": [
        "CG24_01",
        "CG24_02",
        "CG24_03",
        "CG24_04"
      ]
    },
    "25": {
      "title": "CG25",
      "common_event_id": 175,
      "switch_id": 125,
      "thumbnail": "sCG25_01",
      "pictures": [
        "CG25_01",
        "CG25_02",
        "CG25_03",
        "CG25_04",
        "CG25_05",
        "CG25_06",
        "CG25_07",
        "CG25_08"
      ]
    },
    "26": {
      "title": "CG26",
      "common_event_id": 176,
      "switch_id": 126,
      "thumbnail": "sCG26_01",
      "pictures": [
        "CG26_01",
        "CG26_02"
      ]
    }
  },
  "rec_mode_bgm": {
    "bgm": {
      "name": "Dungeon1",
      "pan": 0,
      "pitch": 100,
      "volume": 0
    }
  },
  "rec_mode_window": {
    "x": 260,
    "y": 180,
    "recollection_title": "Recollection",
    "str_select_recollection": "Recollection",
    "str_select_cg": "View CG",
    "str_select_back_title": "Back to Title"
  },
  "rec_list_window": {
    "item_height": 5,
    "item_width": 5,
    "show_title_text": true,
    "title_text_align": "center",
    "never_watch_picture_name": "never_watch_picture",
    "never_watch_title_text": "？？？"
  },
  "sandbox_map_id": 15,
  "share_recollection_switches": false
};

function rngd_hash_size(obj) {
  var cnt = 0;
  for (var o in obj) {
    cnt++;
  }
  return cnt;
}

//-----------------------------------------------------------------------------
// ◆ Scene関数
//-----------------------------------------------------------------------------

//=========================================================================
// ■ Scene_Recollection
//=========================================================================
// 回想用のシーン関数です
//=========================================================================
function Scene_Recollection() {
  this.initialize.apply(this, arguments);
}

Scene_Recollection.prototype = Object.create(Scene_Base.prototype);
Scene_Recollection.prototype.constructor = Scene_Recollection;

Scene_Recollection.prototype.initialize = function () {
  Scene_Base.prototype.initialize.call(this);
};

Scene_Recollection.prototype.create = function () {
  Scene_Base.prototype.create.call(this);
  this.createWindowLayer();
  this.createCommandWindow();
};

// 回想モードのカーソル
Scene_Recollection.rec_list_index = 0;

// 回想モードの再読み込み判定用 true: コマンドウィンドウを表示せず回想リストを表示 false:コマンドウィンドウを表示
Scene_Recollection.reload_rec_list = false;

Scene_Recollection.prototype.createCommandWindow = function () {

  if (Scene_Recollection.reload_rec_list) {
    // 回想モード選択ウィンドウ
    this._rec_window = new Window_RecollectionCommand();
    this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
    this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
    this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));

    // リロードの場合：選択ウィンドウを非表示にする
    this._rec_window.visible = false;
    this._rec_window.deactivate();
    this.addWindow(this._rec_window);

    // 回想リスト
    this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);

    // リロードの場合：回想リストを表示にする
    this._rec_list.visible = true;
    this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
    this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
    this._mode = "recollection";
    this._rec_list.activate();
    this._rec_list.select(Scene_Recollection.rec_list_index);

    this.addWindow(this._rec_list);

    // CG参照用ダミーコマンド
    this._dummy_window = new Window_Command(0, 0);
    this._dummy_window.deactivate();
    this._dummy_window.visible = false;
    this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
    this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
    this._dummy_window.addCommand('next', 'ok');
    this.addWindow(this._dummy_window);

    Scene_Recollection.reload_rec_list = false;

  } else {
    // 回想モード選択ウィンドウ
    this._rec_window = new Window_RecollectionCommand();
    this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
    this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
    this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));
    this.addWindow(this._rec_window);

    // 回想リスト
    this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);
    this._rec_list.visible = false;
    this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
    this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
    this._rec_list.select(Scene_Recollection.rec_list_index);
    this.addWindow(this._rec_list);

    // CG参照用ダミーコマンド
    this._dummy_window = new Window_Command(0, 0);
    this._dummy_window.deactivate();
    this._dummy_window.playOkSound = function () { }; // CGﾓｰﾄﾞの場合、OK音を鳴らさない
    this._dummy_window.visible = false;
    this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
    this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
    this._dummy_window.addCommand('next', 'ok');
    this.addWindow(this._dummy_window);
  }

};

//-------------------------------------------------------------------------
// ● 開始処理
//-------------------------------------------------------------------------
Scene_Recollection.prototype.start = function () {
  Scene_Base.prototype.start.call(this);
  this._rec_window.refresh();
  this._rec_list.refresh();
  AudioManager.playBgm(rngd_recollection_mode_settings.rec_mode_bgm.bgm);
  Scene_Recollection._rngd_recollection_doing = false;
};

//-------------------------------------------------------------------------
// ● 更新処理
//-------------------------------------------------------------------------
Scene_Recollection.prototype.update = function () {
  Scene_Base.prototype.update.call(this);

};

//-------------------------------------------------------------------------
// ● 「回想を見る」を選択した際のコマンド
//-------------------------------------------------------------------------
Scene_Recollection.prototype.commandShowRecollection = function () {
  // モードウィンドウの無効化とリストウィンドウの有効化
  this.do_exchange_status_window(this._rec_window, this._rec_list);
  this._mode = "recollection";
};

//-------------------------------------------------------------------------
// ● 「CGを見る」を選択した際のコマンド
//-------------------------------------------------------------------------
Scene_Recollection.prototype.commandShowCg = function () {
  this.do_exchange_status_window(this._rec_window, this._rec_list);
  this._mode = "cg";
};

//-------------------------------------------------------------------------
// ● 「タイトルに戻る」を選択した際のコマンド
//-------------------------------------------------------------------------
Scene_Recollection.prototype.commandBackTitle = function () {
  Scene_Recollection.rec_list_index = 0;
  SceneManager.goto(Scene_Title);
};

//-------------------------------------------------------------------------
// ● 回想orCGモードから「キャンセル」して前の画面に戻った場合のコマンド
//-------------------------------------------------------------------------
Scene_Recollection.prototype.commandBackSelectMode = function () {
  this.do_exchange_status_window(this._rec_list, this._rec_window);
};

//-------------------------------------------------------------------------
// ● 回想orCGモードにおいて、実際の回想orCGを選択した場合のコマンド
//-------------------------------------------------------------------------
Scene_Recollection.prototype.commandDoRecMode = function () {
  var target_index = this._rec_list.index() + 1;
  Scene_Recollection.rec_list_index = target_index - 1;

  if (this._rec_list.is_valid_picture(this._rec_list.index() + 1)) {
    // 回想モードの場合
    if (this._mode == "recollection") {
      Scene_Recollection._rngd_recollection_doing = true;

      DataManager.setupNewGame();
      $gamePlayer.setTransparent(255);
      this.fadeOutAll();
      // TODO: パーティを透明状態にする

      //$dataSystem.optTransparent = false;
      $gameTemp.reserveCommonEvent(rngd_recollection_mode_settings.rec_cg_set[target_index]["common_event_id"]);
      $gamePlayer.reserveTransfer(rngd_recollection_mode_settings.sandbox_map_id, 0, 0, 0);
      SceneManager.push(Scene_Map);

      // CGモードの場合
    } else if (this._mode == "cg") {
      this._cg_sprites = [];
      this._cg_sprites_index = 0;

      // シーン画像をロードする
      rngd_recollection_mode_settings.rec_cg_set[target_index].pictures.forEach(function (name) {
        // CGクリックを可能とする
        var sp = new Sprite_Button();
        sp.setClickHandler(this.commandDummyOk.bind(this));
        sp.processTouch = function () {
          Sprite_Button.prototype.processTouch.call(this);

        };
        sp.bitmap = ImageManager.loadPicture(name);
        // 最初のSprite以外は見えないようにする
        if (this._cg_sprites.length > 0) {
          sp.visible = false;
        }

        // TODO: 画面サイズにあわせて、拡大・縮小すべき
        this._cg_sprites.push(sp);
        this.addChild(sp);

      }, this);

      this.do_exchange_status_window(this._rec_list, this._dummy_window);
      this._dummy_window.visible = false;
    }
  } else {
    this._rec_list.activate();
  }
};

Scene_Recollection.prototype.commandDummyOk = function () {

  if (this._cg_sprites_index < this._cg_sprites.length - 1) {
    this._cg_sprites[this._cg_sprites_index].visible = false;
    this._cg_sprites_index++;
    this._cg_sprites[this._cg_sprites_index].visible = true;
    SoundManager.playOk();

    this._dummy_window.activate();
  } else {
    SoundManager.playOk();
    this.commandDummyCancel();
  }
};

Scene_Recollection.prototype.commandDummyCancel = function () {
  this._cg_sprites.forEach(function (obj) {
    obj.visible = false;
    obj = null;
  });
  this.do_exchange_status_window(this._dummy_window, this._rec_list);
};

// コモンイベントから呼び出す関数
Scene_Recollection.prototype.rngd_exit_scene = function () {
  if (Scene_Recollection._rngd_recollection_doing) {
    // Window_RecListを表示する
    Scene_Recollection.reload_rec_list = true;
    SceneManager.push(Scene_Recollection);
  }
};

//-------------------------------------------------------------------------
// ● ウィンドウの無効化と有効化
//-------------------------------------------------------------------------
// win1: 無効化するウィンドウ
// win2: 有効化するウィンドウ
//-------------------------------------------------------------------------
Scene_Recollection.prototype.do_exchange_status_window = function (win1, win2) {
  win1.deactivate();
  win1.visible = false;
  win2.activate();
  win2.visible = true;
};
//-------------------------------------------------------------------------
// ● セーブ・ロード・ニューゲーム時に必要なスイッチをONにする
//-------------------------------------------------------------------------
Scene_Recollection.setRecollectionSwitches = function () {
  // 各セーブデータを参照し、RecollectionMode用のスイッチを検索する
  // スイッチが一つでもONになっている場合は回想をONにする
  for (var i = 1; i <= DataManager.maxSavefiles(); i++) {
    var data = null;
    try {
      data = StorageManager.loadFromLocalFile(i);
    } catch (e) {
      data = StorageManager.loadFromWebStorage(i);
    }
    if (data) {
      var save_data_obj = JsonEx.parse(data);
      var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

      for (var j = 0; j < rec_cg_max; j++) {
        var cg = rngd_recollection_mode_settings.rec_cg_set[j + 1];
        if (save_data_obj["switches"]._data[cg.switch_id] &&
          save_data_obj["switches"]._data[cg.switch_id] == true) {
          $gameSwitches.setValue(cg.switch_id, true);
        }
      }
    }
  }
};

//-----------------------------------------------------------------------------
// ◆ Window関数
//-----------------------------------------------------------------------------

//=========================================================================
// ■ Window_RecollectionCommand
//=========================================================================
// 回想モードかCGモードを選択するウィンドウです
//=========================================================================
function Window_RecollectionCommand() {
  this.initialize.apply(this, arguments);
}

Window_RecollectionCommand.prototype = Object.create(Window_Command.prototype);
Window_RecollectionCommand.prototype.constructor = Window_RecollectionCommand;

Window_RecollectionCommand.prototype.initialize = function () {
  Window_Command.prototype.initialize.call(this, 0, 0);
  this.x = rngd_recollection_mode_settings.rec_mode_window.x;
  this.y = rngd_recollection_mode_settings.rec_mode_window.y;

};

Window_RecollectionCommand.prototype.makeCommandList = function () {
  Window_Command.prototype.makeCommandList.call(this);
  this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_recollection, "select_recollection");
  this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_cg, "select_cg");
  this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_back_title, "select_back_title");
};

//=========================================================================
// ■ Window_RecollectionList
//=========================================================================
// 回想またはCGを選択するウィンドウです
//=========================================================================
function Window_RecList() {
  this.initialize.apply(this, arguments);
}

Window_RecList.prototype = Object.create(Window_Selectable.prototype);
Window_RecList.prototype.constructor = Window_RecList;

//-------------------------------------------------------------------------
// ● 初期化処理
//-------------------------------------------------------------------------
Window_RecList.prototype.initialize = function (x, y, width, height) {
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this.windowWidth = width;
  this.windowHeight = height;
  this.select(0);
  this._formationMode = false;
  this.get_global_variables();
  this.refresh();

};

Window_RecList.prototype.maxItems = function () {
  return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
};

Window_RecList.prototype.itemHeight = function () {
  return (this.height - this.standardPadding()) / rngd_recollection_mode_settings.rec_list_window.item_height;
};

Window_RecList.prototype.maxPageItems = function () {
  return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
};

Window_RecList.prototype.maxCols = function () {
  return rngd_recollection_mode_settings.rec_list_window.item_width;
};

Window_RecList.prototype.maxPageRows = function () {
  var pageHeight = this.height;// - this.padding * 2;
  return Math.floor(pageHeight / this.itemHeight());
};

Window_RecList.prototype.drawItem = function (index) {
  var rec_cg = rngd_recollection_mode_settings.rec_cg_set[index + 1];
  var rect = this.itemRect(index);
  var text_height = 0;
  if (rngd_recollection_mode_settings.rec_list_window.show_title_text) {
    if (this._global_variables["switches"][rec_cg.switch_id]) {
      this.contents.drawText(rec_cg.title, rect.x + 4, rect.y + 4, this.itemWidth(), 32,
        rngd_recollection_mode_settings.rec_list_window.title_text_align);
    } else {
      this.contents.drawText(rngd_recollection_mode_settings.rec_list_window.never_watch_title_text,
        rect.x + 4, rect.y + 4, this.itemWidth(), 32,
        rngd_recollection_mode_settings.rec_list_window.title_text_align);
    }
    text_height = 32;
  }

  // CGセットのスイッチ番号が、全てのセーブデータを走査した後にTrueであればピクチャ表示
  if (this._global_variables["switches"][rec_cg.switch_id]) {

    var thumbnail_file_name = rec_cg.pictures[0];
    if (rec_cg.thumbnail !== undefined && rec_cg.thumbnail !== null) {
      thumbnail_file_name = rec_cg.thumbnail;
    }

    this.drawRecollection(thumbnail_file_name, 0, 0,
      this.itemWidth() - 36, this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 + text_height);


  } else {
    this.drawRecollection(rngd_recollection_mode_settings.rec_list_window.never_watch_picture_name,
      0, 0, this.itemWidth() - 36,
      this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 + text_height);

  }

};

//-------------------------------------------------------------------------
// ● 全てのセーブデータを走査し、対象のシーンスイッチ情報を取得する
//-------------------------------------------------------------------------
Window_RecList.prototype.get_global_variables = function () {
  this._global_variables = {
    "switches": {}
  };
  var maxSaveFiles = DataManager.maxSavefiles();
  for (var i = 1; i <= maxSaveFiles; i++) {
    if (DataManager.loadGameSwitch(i)) {
      var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

      for (var j = 0; j < rec_cg_max; j++) {
        var cg = rngd_recollection_mode_settings.rec_cg_set[j + 1];
        if ($gameSwitches._data[cg.switch_id]) {
          this._global_variables["switches"][cg.switch_id] = true;
        }
      }
    }
  }
};
//-------------------------------------------------------------------------
// ● index番目に表示された回想orCGが有効かどうか判断する
//-------------------------------------------------------------------------
Window_RecList.prototype.is_valid_picture = function (index) {
  // CG情報の取得と対象スイッチの取得
  var _rec_cg_obj = rngd_recollection_mode_settings.rec_cg_set[index];
  return (this._global_variables["switches"][_rec_cg_obj.switch_id] == true);

};


(function () {

  //-----------------------------------------------------------------------------
  // ◆ 組み込み関数Fix
  //-----------------------------------------------------------------------------

  Window_Base.prototype.drawRecollection = function (bmp_name, x, y, width, height, dx, dy) {
    var bmp = ImageManager.loadPicture(bmp_name);

    var _width = width;
    var _height = height;
    if (_width > bmp.width) {
      _width = bmp.width - 1;
    }

    if (_height > bmp.height) {
      _height = bmp.height - 1;
    }
    this.contents.blt(bmp, x, y, _width, _height, dx, dy);
  };

  var Window_TitleCommand_makeCommandList =
    Window_TitleCommand.prototype.makeCommandList;

  Window_TitleCommand.prototype.makeCommandList = function () {
    Window_TitleCommand_makeCommandList.call(this);
    this.clearCommandList();
    this.addCommand(TextManager.newGame, 'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(rngd_recollection_mode_settings.rec_mode_window.recollection_title, 'recollection');
    this.addCommand(TextManager.options, 'options');
  };

  Scene_Title.prototype.commandRecollection = function () {
    SceneManager.push(Scene_Recollection);
  };

  var Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
  Scene_Title.prototype.createCommandWindow = function () {
    Scene_Title_createCommandWindow.call(this);
    this._commandWindow.setHandler('recollection', this.commandRecollection.bind(this));
  };

  // セーブデータ共有オプションが指定されている場合のみ、カスタマイズ
  if (rngd_recollection_mode_settings["share_recollection_switches"]) {
    DataManager.makeSaveContents = function () {
      // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.

      Scene_Recollection.setRecollectionSwitches();

      var contents = {};
      contents.system = $gameSystem;
      contents.screen = $gameScreen;
      contents.timer = $gameTimer;
      contents.switches = $gameSwitches;
      contents.variables = $gameVariables;
      contents.selfSwitches = $gameSelfSwitches;
      contents.actors = $gameActors;
      contents.party = $gameParty;
      contents.map = $gameMap;
      contents.player = $gamePlayer;

      return contents;
    };

    DataManager.extractSaveContents = function (contents) {
      $gameSystem = contents.system;
      $gameScreen = contents.screen;
      $gameTimer = contents.timer;
      $gameSwitches = contents.switches;
      $gameVariables = contents.variables;
      $gameSelfSwitches = contents.selfSwitches;
      $gameActors = contents.actors;
      $gameParty = contents.party;
      $gameMap = contents.map;
      $gamePlayer = contents.player;

      Scene_Recollection.setRecollectionSwitches();
    };

    DataManager.setupNewGame = function () {
      this.createGameObjects();
      Scene_Recollection.setRecollectionSwitches();
      this.selectSavefileForNewGame();
      $gameParty.setupStartingMembers();
      $gamePlayer.reserveTransfer($dataSystem.startMapId,
        $dataSystem.startX, $dataSystem.startY);
      Graphics.frameCount = 0;
    };
  }

  //-----------------------------------------------------------------------------
  // ◆ DataManager関数
  //-----------------------------------------------------------------------------

  //-------------------------------------------------------------------------
  // ● スイッチのみロードする
  //-------------------------------------------------------------------------
  DataManager.loadGameSwitch = function (savefileId) {
    try {
      return this.loadGameSwitchWithoutRescue(savefileId);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  DataManager.loadGameSwitchWithoutRescue = function (savefileId) {
    var globalInfo = this.loadGlobalInfo();
    if (this.isThisGameFile(savefileId)) {
      var json = StorageManager.load(savefileId);
      this.createGameObjectSwitch();
      this.extractSaveContentsSwitches(JsonEx.parse(json));
      //this._lastAccessedId = savefileId;
      return true;
    } else {
      return false;
    }
  };

  DataManager.createGameObjectSwitch = function () {
    $gameSwitches = new Game_Switches();
  };

  DataManager.extractSaveContentsSwitches = function (contents) {
    $gameSwitches = contents.switches;
  };

})();