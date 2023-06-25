/*:
 * @plugindesc ＴＰに関する仕様を変更します。
 * @author 茶の助
 *
 * @param startTPfixed
 * @desc ＴＰの初期値：固定
 * @default 10
 *
 * @param startTPRandom
 * @desc ＴＰの初期値：ランダム（例: 20 → 0～20の間で変動)
 startTPfixedの値に上乗せされます。
 * @default 20
 *
 * @param conversionTP
 * @desc 戦闘終了時、ＴＰをＭＰに変換します。(1:する 0:しない)
 * @default 1
 */

(function () {

    var parameters = PluginManager.parameters('TYA_TPSetting');
    var startTPfixed = Number(parameters['startTPfixed']);
    var startTPRandom = Number(parameters['startTPRandom']);
    var conversionTP = Number(parameters['conversionTP']) != 0;

    Game_Battler.prototype.initTp = function () {
        this.setTp(startTPfixed);
        this.gainTp(Math.randomInt(startTPRandom));
    };

    Game_Battler.prototype.onBattleEnd = function () {
        this.clearResult();
        this.removeBattleStates();
        this.removeAllBuffs();
        this.clearActions();
        if (conversionTP) {
            this.gainMp(this.tp);
        }
        if (!this.isPreserveTp()) {
            this.clearTp();
        }
        this.appear();
    };

})();