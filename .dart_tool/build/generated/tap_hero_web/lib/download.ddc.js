define(['dart_sdk', 'packages/tap_hero_web/route', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/tap_hero_web/button', 'packages/tap_hero_web/privacy'], function(dart_sdk, route, animation, material, animation$, ui, button, privacy) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const route$ = route.route;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__rounded_rectangle_border = animation.src__painting__rounded_rectangle_border;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__container = animation.src__widgets__container;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__material__dialog = material.src__material__dialog;
  const src__material__flat_button = material.src__material__flat_button;
  const src__material__material = material.src__material__material;
  const src__material__colors = material.src__material__colors;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const ui$ = ui.ui;
  const button$ = button.button;
  const privacy$ = privacy.privacy;
  const download = Object.create(dart.library);
  const $location = dartx.location;
  let BuildContextToDownload = () => (BuildContextToDownload = dart.constFn(dart.fnType(download.Download, [src__widgets__framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextToDialog = () => (BuildContextToDialog = dart.constFn(dart.fnType(src__material__dialog.Dialog, [src__widgets__framework.BuildContext])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  download.Download = class Download extends src__widgets__framework.StatefulWidget {
    static routeAnim() {
      return new route$.FadeRoute.new({name: "/download", title: "Download", builder: dart.fn(_ => new download.Download.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToDownload())});
    }
    static route() {
      return new route$.SimpleRoute.new({name: "/download", title: "Download", builder: dart.fn(_ => new download.Download.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToDownload())});
    }
    createState() {
      return new download._DownloadState.new();
    }
  };
  (download.Download.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    download.Download.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = download.Download.prototype;
  dart.addTypeTests(download.Download);
  dart.setMethodSignature(download.Download, () => ({
    __proto__: dart.getMethods(download.Download.__proto__),
    createState: dart.fnType(download._DownloadState, [])
  }));
  dart.setLibraryUri(download.Download, "package:tap_hero_web/download.dart");
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
  const _showDialog = dart.privateName(download, "_showDialog");
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
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  download._DownloadState = class _DownloadState extends src__widgets__framework.State$(download.Download) {
    [_showDialog](opts) {
      let title = opts && 'title' in opts ? opts.title : null;
      src__material__dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new src__material__dialog.Dialog.new({shape: new src__painting__rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(8.0)}), elevation: 0.0, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 20.0, vertical: 10.0}), child: new src__widgets__basic.IntrinsicWidth.new({child: new src__widgets__basic.IntrinsicHeight.new({child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("COMING SOON", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.w700, fontFamily: "Roboto", fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 25, name: "data"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 25, name: "textAlign"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("App Store submission is under review.\nStay tune for updates!", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Roboto", fontWeight: ui$.FontWeight.w400, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 25, name: "data"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomRight, child: new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                          src__widgets__navigator.Navigator.of(context).pop(core.Object);
                        }, VoidToNull()), child: new src__widgets__text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 39, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 27, name: "onPressed"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 25, name: "alignment"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, name: "padding"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 13, name: "shape"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "elevation"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToDialog())});
    }
    build(context) {
      return new src__material__material.Material.new({child: new src__widgets__container.Container.new({child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("background/sky.png", {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 15, name: "name"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 15, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Padding.new({padding: const$54 || (const$54 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 40.0}))), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({maxWidth: 500.0}), child: new src__widgets__image.Image.asset("elements/taptaphero.png", {fit: src__painting__box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 27, name: "name"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 27, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$61 || (const$61 = dart.constList([const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 25, name: "constraints"}))), const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 50.0, $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({maxWidth: 250.0}), child: new src__widgets__gesture_detector.GestureDetector.new({child: new src__widgets__image.Image.asset("elements/android_apk.png", {fit: src__painting__box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 40, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 29, name: "name"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 29, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                              html.window[$location].href = "https://firebasestorage.googleapis.com/v0/b/gametaphero.appspot.com/o/tap_hero.apk?alt=media&token=cec5aa97-849c-40df-83af-4ce46b5c6019";
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 27, name: "child"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 27, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$76 || (const$76 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 25, name: "constraints"}))), const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({maxWidth: 250.0}), child: new src__widgets__gesture_detector.GestureDetector.new({child: new src__widgets__image.Image.asset("elements/iphone_store.png", {fit: src__painting__box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 40, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$83 || (const$83 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 29, name: "name"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 29, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                              this[_showDialog]();
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 27, name: "child"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 27, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$91 || (const$91 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 25, name: "constraints"}))), const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({maxWidth: 250.0}), child: new src__widgets__gesture_detector.GestureDetector.new({child: new src__widgets__image.Image.asset("elements/mac_os.png", {fit: src__painting__box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 40, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 29, name: "name"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 29, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                              html.window[$location].href = "https://firebasestorage.googleapis.com/v0/b/gametaphero.appspot.com/o/Tap%20Hero%20-%20MacOS.zip?alt=media&token=2b97e50b-86f7-47da-a184-2fbf4d4336f6";
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 155, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 27, name: "child"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 160, column: 27, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$106 || (const$106 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 154, column: 25, name: "constraints"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 155, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 60.0, $creationLocationd_0dea112b090073317d4: const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$109 || (const$109 = dart.constList([const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.ConstrainedBox.new({constraints: new src__rendering__box.BoxConstraints.new({minWidth: 250.0, minHeight: 30.0}), child: new button$.FancyButton.new({onPressed: dart.fn(() => {
                              src__widgets__navigator.Navigator.of(context).pushReplacement(dart.dynamic, core.Object, privacy$.Privacy.routeAnim());
                            }, VoidToNull()), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("PRIVACY POLICY", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 36, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$113 || (const$113 = dart.constList([const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 31, name: "data"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 31, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$117 || (const$117 = dart.constList([const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 29, name: "alignment"}))), const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), size: 14.0, color: src__material__colors.Colors.red, $creationLocationd_0dea112b090073317d4: const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$123 || (const$123 = dart.constList([const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 27, name: "onPressed"}))), const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 27, name: "child"}))), const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 27, name: "size"}))), const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 27, name: "color"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$127 || (const$127 = dart.constList([const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 25, name: "constraints"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$130 || (const$130 = dart.constList([const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$133 || (const$133 = dart.constList([const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$137 || (const$137 = dart.constList([const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 19, name: "padding"}))), const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$140 || (const$140 = dart.constList([const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$143 || (const$143 = dart.constList([const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$147 || (const$147 = dart.constList([const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, name: "fit"}))), const$146 || (const$146 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$150 || (const$150 = dart.constList([const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/download.dart", parameterLocations: const$153 || (const$153 = dart.constList([const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (download._DownloadState.new = function() {
    download._DownloadState.__proto__.new.call(this);
    ;
  }).prototype = download._DownloadState.prototype;
  dart.addTypeTests(download._DownloadState);
  dart.setMethodSignature(download._DownloadState, () => ({
    __proto__: dart.getMethods(download._DownloadState.__proto__),
    [_showDialog]: dart.fnType(dart.void, [], {title: core.String}),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(download._DownloadState, "package:tap_hero_web/download.dart");
  dart.trackLibraries("packages/tap_hero_web/download", {
    "package:tap_hero_web/download.dart": download
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/download.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUI,YAAO,iCACC,oBACC,qBACE,QAAC,KAAM;IAEpB;;AAGE,YAAO,mCACC,oBACC,qBACE,QAAC,KAAM;IAEpB;;AAGgC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAG2B;MACvB,yDACa,uBACA,QAAC,WACD,6CACE,sFACsB,uDAAS,mBAE3B,YACJ,8CACe,iEACN,gBACF,eAEL,mDACE,oDACE,8CACa,sBAChB,8CACU,kcAEV,gCACE,2BACqB,6BACd,yDACkB,iCACX,oBACF,gsBAGd,8CACU,wcAEV,gCACE,yEACO,yDACO,sBACW,+BACb,skBAGd,8CACU,wcAEV,8CACuB,uDACd,0DACM;0BACC,AAAY,qCAAT,OAAO;iDAEf,gCAAK;IAUpC;UAG0B;AACxB,YAAO,kDACE,kDACE,wCACS,iDACI,sBACV,oCACJ,4BACY,omBAEd,6EACS,2CACE,8CACU,kGAA+B,iBACvC,8CACa,sBAChB,yDACe,sDAAyB,gBACzB,oCACX,iCACY,2qCAGhB,8CACU,0cAEV,yDACe,sDAAyB,gBAC/B,+DACQ,oCACX,kCACY,0mBAEP;8BACA,AAAO,AAAS,8BAAO;wrCAMlC,8CACU,0cAEV,yDACe,sDAAyB,gBAC/B,+DACQ,oCACX,mCACY,0mBAEP;8BACL;wrCAKN,8CACU,0cAEV,yDACe,sDAAyB,gBAC/B,+DACQ,oCACX,6BACY,0mBAEP;8BACA,AAAO,AAAS,8BAAO;wsCAIlC,8CACU,gdAEV,yDACe,sDAAyB,kBAAgB,eAC/C,wCACM;8BACC,AAAY,qCAAT,OAAO,6CAA0B;qDAEzC,8CACgB,kDACd,gCACL,0BACO,oDACS,gDACF,2qCAIZ,aACQ,i8CAGlB,8CACU;IAW9B;;;;;EACF","file":"download.ddc.js"}');
  // Exports:
  return {
    download: download
  };
});

//# sourceMappingURL=download.ddc.js.map
