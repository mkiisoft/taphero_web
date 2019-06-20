define(['dart_sdk', 'packages/tap_hero_web/route', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/tap_hero_web/flutter_html', 'packages/tap_hero_web/button', 'packages/flutter_web_ui/ui'], function(dart_sdk, route, animation, material, animation$, flutter_html, button, ui) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const route$ = route.route;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__text = animation.src__widgets__text;
  const src__rendering__box = animation.src__rendering__box;
  const src__material__material = material.src__material__material;
  const src__material__colors = material.src__material__colors;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__alignment = animation$.src__painting__alignment;
  const flutter_html$ = flutter_html.flutter_html;
  const button$ = button.button;
  const ui$ = ui.ui;
  const support = Object.create(dart.library);
  const $location = dartx.location;
  let BuildContextToSupport = () => (BuildContextToSupport = dart.constFn(dart.fnType(support.Support, [src__widgets__framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  support.Support = class Support extends src__widgets__framework.StatefulWidget {
    static routeAnim() {
      return new route$.FadeRoute.new({name: "/support", title: "Support", builder: dart.fn(_ => new support.Support.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToSupport())});
    }
    static route() {
      return new route$.SimpleRoute.new({name: "/support", title: "Support", builder: dart.fn(_ => new support.Support.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToSupport())});
    }
    createState() {
      return new support._SupportState.new();
    }
  };
  (support.Support.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    support.Support.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = support.Support.prototype;
  dart.addTypeTests(support.Support);
  dart.setMethodSignature(support.Support, () => ({
    __proto__: dart.getMethods(support.Support.__proto__),
    createState: dart.fnType(support._SupportState, [])
  }));
  dart.setLibraryUri(support.Support, "package:tap_hero_web/support.dart");
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  support._SupportState = class _SupportState extends src__widgets__framework.State$(support.Support) {
    build(context) {
      return new src__material__material.Material.new({child: new src__widgets__container.Container.new({child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("background/sky.png", {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 15, name: "name"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 15, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Padding.new({padding: const$7 || (const$7 = dart.const(new src__painting__edge_insets.EdgeInsets.all(50.0))), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("SUPPORT", {style: new src__painting__text_style.TextStyle.new({fontSize: 40.0, fontFamily: "Gameplay", color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 25, name: "data"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 50.0, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new flutter_html$.Html.new({data: "                        <center>Tap Hero is an Open Source game build with Flutter and a lot of ❤️ to the Flutter Community!\n                        <br>If you want to support this project, please: Make a PR or Open an Issue <a href='https://github.com/mkiisoft/taphero'>https://github.com/mkiisoft/taphero</a>\n                        <br>\n                        <br>By Mariano Zorrilla\n                        <br>\n                        <br>- Made with Flutter Web 2019 -\n                        </center>\n                        ", onLinkTap: dart.fn(url => {
                            html.window[$location].href = url;
                          }, StringToNull()), defaultTextStyle: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "Roboto", fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 25, name: "data"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 25, name: "onLinkTap"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 25, name: "defaultTextStyle"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({minWidth: 240.0}), child: new button$.FancyButton.new({child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("Contact US", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black54, fontSize: 20.0, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 36, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 31, name: "data"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 31, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 29, name: "alignment"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), color: new ui$.Color.new(4293915629), size: 40.0, onPressed: dart.fn(() => {
                              html.window[$location].href = "mailto:mkiisoft@gmail.com?subject=TapHero Support";
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 27, name: "child"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 27, name: "color"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 27, name: "size"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 27, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 25, name: "constraints"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 19, name: "padding"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 11, name: "fit"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/support.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (support._SupportState.new = function() {
    support._SupportState.__proto__.new.call(this);
    ;
  }).prototype = support._SupportState.prototype;
  dart.addTypeTests(support._SupportState);
  dart.setMethodSignature(support._SupportState, () => ({
    __proto__: dart.getMethods(support._SupportState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(support._SupportState, "package:tap_hero_web/support.dart");
  dart.trackLibraries("packages/tap_hero_web/support", {
    "package:tap_hero_web/support.dart": support
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/support.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQI,YAAO,iCACC,mBACC,oBACE,QAAC,KAAM;IAEpB;;AAGE,YAAO,mCACC,mBACC,oBACE,QAAC,KAAM;IAEpB;;AAG+B;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,kDACE,kDACE,wCACS,iDACI,sBACV,oCACJ,4BACY,wlBAEd,6EACS,2CACE,8CACU,+EAAe,gBACvB,8CACa,sBAChB,gCACE,mBACO,uDACK,kBACE,mBACE,+lBAGlB,8CACU,ucAEV,kCACQ,4iBASK,QAAC;4BACL,AAAO,AAAS,8BAAO,GAAG;gEAEf,oDACF,gDACF,oBACF,ktBAGd,8CACU,ucAEV,yDACe,sDAAyB,gBAC/B,oCACE,8CACgB,kDACd,gCACL,sBACO,oDACS,gDACJ,kBACE,opCAIX,kBAAM,mBACP,iBACK;8BACJ,AAAO,AAAS,8BAAO;;IAatD;;;;;EACF","file":"support.ddc.js"}');
  // Exports:
  return {
    support: support
  };
});

//# sourceMappingURL=support.ddc.js.map
