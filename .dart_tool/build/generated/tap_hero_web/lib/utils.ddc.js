define(['dart_sdk', 'packages/tap_hero_web/powerups', 'packages/tap_hero_web/bosses', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, powerups, bosses, material, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const powerups$ = powerups.powerups;
  const bosses$ = bosses.bosses;
  const src__material__colors = material.src__material__colors;
  const src__painting__text_style = animation.src__painting__text_style;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__widgets__text = animation$.src__widgets__text;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__rendering__proxy_box = animation$.src__rendering__proxy_box;
  const ui$ = ui.ui;
  const utils = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfPowerUps = () => (JSArrayOfPowerUps = dart.constFn(_interceptors.JSArray$(powerups$.PowerUps)))();
  let JSArrayOfBosses = () => (JSArrayOfBosses = dart.constFn(_interceptors.JSArray$(bosses$.Bosses)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let CustomClipperOfPath = () => (CustomClipperOfPath = dart.constFn(src__rendering__proxy_box.CustomClipper$(ui$.Path)))();
  utils.Utils = class Utils extends core.Object {
    static getPowerUps() {
      let list = JSArrayOfPowerUps().of([]);
      list[$add](new powerups$.PowerUps.new("Master Sword", 2.15, false, 50));
      list[$add](new powerups$.PowerUps.new("Lengendary Sword", 2.45, false, 180));
      list[$add](new powerups$.PowerUps.new("Keyblade", 3.75, false, 300));
      list[$add](new powerups$.PowerUps.new("Lightsaber", 4.95, false, 520));
      list[$add](new powerups$.PowerUps.new("Buster Sword", 6.15, false, 1700));
      list[$add](new powerups$.PowerUps.new("Soul Edge", 8.65, false, 2400));
      return list;
    }
    static getBosses() {
      let list = JSArrayOfBosses().of([]);
      list[$add](new bosses$.Bosses.new("Lunabi", 450, "boss/boss_one.png"));
      list[$add](new bosses$.Bosses.new("ivygrass", 880, "boss/boss_two.png"));
      list[$add](new bosses$.Bosses.new("Tombster", 1120, "boss/boss_three.png"));
      list[$add](new bosses$.Bosses.new("Glidestone", 2260, "boss/boss_four.png"));
      list[$add](new bosses$.Bosses.new("Smocka", 2900, "boss/boss_five.png"));
      list[$add](new bosses$.Bosses.new("Clowntorch", 4100, "boss/boss_six.png"));
      list[$add](new bosses$.Bosses.new("Marsattack", 5380, "boss/boss_seven.png"));
      list[$add](new bosses$.Bosses.new("Unknown", 7000, "boss/boss_eight.png"));
      list[$add](new bosses$.Bosses.new("ExArthur", 10000, "boss/boss_nine.png"));
      return list;
    }
    static textStyle(size, opts) {
      let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white;
      return new src__painting__text_style.TextStyle.new({color: color, fontFamily: "Gameplay", fontSize: size});
    }
  };
  (utils.Utils.new = function() {
    ;
  }).prototype = utils.Utils.prototype;
  dart.addTypeTests(utils.Utils);
  dart.setLibraryUri(utils.Utils, "package:tap_hero_web/utils.dart");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  utils.StrokeText = class StrokeText extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get strokeColor() {
      return this[strokeColor$];
    }
    set strokeColor(value) {
      super.strokeColor = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    build(context) {
      let t0;
      return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new(this.text, {style: new src__painting__text_style.TextStyle.new({fontSize: this.fontSize, fontWeight: this.fontWeight, fontFamily: this.fontFamily, color: this.color}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 9, file: "org-dartlang-app:///packages/tap_hero_web/utils.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 11, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.text, {style: new src__painting__text_style.TextStyle.new({fontSize: this.fontSize, fontWeight: this.fontWeight, fontFamily: this.fontFamily, foreground: (t0 = new ui$.Paint.new(), t0.strokeWidth = this.strokeWidth, t0.color = this.strokeColor, t0.style = ui$.PaintingStyle.stroke, t0)}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 9, file: "org-dartlang-app:///packages/tap_hero_web/utils.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 11, name: "data"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/utils.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (utils.StrokeText.new = function(text, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let strokeColor = opts && 'strokeColor' in opts ? opts.strokeColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[fontSize$] = fontSize;
    this[fontWeight$] = fontWeight;
    this[color$] = color;
    this[strokeColor$] = strokeColor;
    this[strokeWidth$] = strokeWidth;
    this[fontFamily$] = fontFamily;
    utils.StrokeText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = utils.StrokeText.prototype;
  dart.addTypeTests(utils.StrokeText);
  const text$ = Symbol("StrokeText.text");
  const fontSize$ = Symbol("StrokeText.fontSize");
  const fontWeight$ = Symbol("StrokeText.fontWeight");
  const color$ = Symbol("StrokeText.color");
  const strokeColor$ = Symbol("StrokeText.strokeColor");
  const strokeWidth$ = Symbol("StrokeText.strokeWidth");
  const fontFamily$ = Symbol("StrokeText.fontFamily");
  dart.setMethodSignature(utils.StrokeText, () => ({
    __proto__: dart.getMethods(utils.StrokeText.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(utils.StrokeText, "package:tap_hero_web/utils.dart");
  dart.setFieldSignature(utils.StrokeText, () => ({
    __proto__: dart.getFields(utils.StrokeText.__proto__),
    text: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui$.FontWeight),
    color: dart.finalFieldType(ui$.Color),
    strokeColor: dart.finalFieldType(ui$.Color),
    strokeWidth: dart.finalFieldType(core.double),
    fontFamily: dart.finalFieldType(core.String)
  }));
  utils.WaveClipper = class WaveClipper extends src__rendering__proxy_box.CustomClipper$(ui$.Path) {
    getClip(size) {
      let path = new ui$.Path.new();
      path.lineTo(0.0, 20.0);
      let firstControlPoint = new ui$.Offset.new(dart.notNull(size.width) / 4, 0.0);
      let firstEndPoint = new ui$.Offset.new(dart.notNull(size.width) / 2.25, 30.0);
      path.quadraticBezierTo(firstControlPoint.dx, firstControlPoint.dy, firstEndPoint.dx, firstEndPoint.dy);
      let secondControlPoint = new ui$.Offset.new(dart.notNull(size.width) - dart.notNull(size.width) / 3.25, 65.0);
      let secondEndPoint = new ui$.Offset.new(size.width, dart.notNull(size.height) - 40.0);
      path.quadraticBezierTo(secondControlPoint.dx, secondControlPoint.dy, secondEndPoint.dx, secondEndPoint.dy);
      path.lineTo(size.width, 40.0);
      path.lineTo(size.width, 0.0);
      path.close();
      return path;
    }
    shouldReclip(oldClipper) {
      CustomClipperOfPath()._check(oldClipper);
      return false;
    }
  };
  (utils.WaveClipper.new = function() {
    utils.WaveClipper.__proto__.new.call(this);
    ;
  }).prototype = utils.WaveClipper.prototype;
  dart.addTypeTests(utils.WaveClipper);
  dart.setMethodSignature(utils.WaveClipper, () => ({
    __proto__: dart.getMethods(utils.WaveClipper.__proto__),
    getClip: dart.fnType(ui$.Path, [ui$.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(utils.WaveClipper, "package:tap_hero_web/utils.dart");
  dart.trackLibraries("packages/tap_hero_web/utils", {
    "package:tap_hero_web/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAOQ,iBAAO;MACX,AAAK,IAAD,OAAK,2BAAS,gBAAgB,MAAM,OAAO;MAC/C,AAAK,IAAD,OAAK,2BAAS,oBAAoB,MAAM,OAAO;MACnD,AAAK,IAAD,OAAK,2BAAS,YAAY,MAAM,OAAO;MAC3C,AAAK,IAAD,OAAK,2BAAS,cAAc,MAAM,OAAO;MAC7C,AAAK,IAAD,OAAK,2BAAS,gBAAgB,MAAM,OAAO;MAC/C,AAAK,IAAD,OAAK,2BAAS,aAAa,MAAM,OAAO;AAC5C,YAAO,KAAI;IACb;;AAGM,iBAAO;MACX,AAAK,IAAD,OAAK,uBAAO,UAAU,KAAK;MAC/B,AAAK,IAAD,OAAK,uBAAO,YAAY,KAAK;MACjC,AAAK,IAAD,OAAK,uBAAO,YAAY,MAAM;MAClC,AAAK,IAAD,OAAK,uBAAO,cAAc,MAAM;MACpC,AAAK,IAAD,OAAK,uBAAO,UAAU,MAAM;MAChC,AAAK,IAAD,OAAK,uBAAO,cAAc,MAAM;MACpC,AAAK,IAAD,OAAK,uBAAO,cAAc,MAAM;MACpC,AAAK,IAAD,OAAK,uBAAO,WAAW,MAAM;MACjC,AAAK,IAAD,OAAK,uBAAO,YAAY,OAAO;AACnC,YAAO,KAAI;IACb;qBAEkC;UAAa,+CAAe;AAC5D,YAAO,qDACE,KAAK,cACA,sBACF,IAAI;IAElB;;;;EACF;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACI;;;;;;IACL;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;UAca;;AACxB,YAAO,8CACK,sBACR,gCACE,mBACO,uDACK,2BACE,6BACA,wBACL,8jBAGX,gCACE,mBACO,uDACK,2BACE,6BACA,mCACA,qBACR,iBAAc,kBACd,WAAQ,kBACR,WAAsB;IAKpC;;mCArCS;QACC;QACC;QACA;QACA;QACA;QACA;QACA;;IAPF;IAEE;IACA;IACA;IACA;IACA;IACA;AACF,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;YAkCN;AACZ,iBAAW;MACf,AAAK,IAAD,QAAQ,KAAK;AAEb,8BAAoB,mBAAkB,aAAX,AAAK,IAAD,UAAS,GAAG;AAC3C,0BAAgB,mBAAkB,aAAX,AAAK,IAAD,UAAS,MAAM;MAC9C,AAAK,IAAD,mBAAmB,AAAkB,iBAAD,KAAK,AAAkB,iBAAD,KAAK,AAAc,aAAD,KAAK,AAAc,aAAD;AAE9F,+BAAqB,mBAAkB,aAAX,AAAK,IAAD,UAAqB,aAAX,AAAK,IAAD,UAAS,MAAO;AAC9D,2BAAiB,mBAAO,AAAK,IAAD,QAAoB,aAAZ,AAAK,IAAD,WAAU;MACtD,AAAK,IAAD,mBAAmB,AAAmB,kBAAD,KAAK,AAAmB,kBAAD,KAAK,AAAe,cAAD,KAAK,AAAe,cAAD;MAEtG,AAAK,IAAD,QAAQ,AAAK,IAAD,QAAQ;MACxB,AAAK,IAAD,QAAQ,AAAK,IAAD,QAAQ;MACxB,AAAK,IAAD;AAEJ,YAAO,KAAI;IACb;iBAGsC;;AAAe;IAAK;;;;;EAC5D","file":"utils.ddc.js"}');
  // Exports:
  return {
    utils: utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
