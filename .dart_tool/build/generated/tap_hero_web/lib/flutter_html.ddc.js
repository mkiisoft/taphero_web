define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/tap_hero_web/html_parser', 'packages/tap_hero_web/image_properties', 'packages/html/dom'], function(dart_sdk, animation, ui, material, animation$, html_parser, image_properties, dom) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__text_style = animation.src__painting__text_style;
  const ui$ = ui.ui;
  const src__material__colors = material.src__material__colors;
  const src__widgets__media_query = animation$.src__widgets__media_query;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__text = animation$.src__widgets__text;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__painting__edge_insets = animation$.src__painting__edge_insets;
  const html_parser$ = html_parser.html_parser;
  const image_properties$ = image_properties.image_properties;
  const dom$ = dom.dom;
  const flutter_html = Object.create(dart.library);
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
  flutter_html.Html = class Html extends src__widgets__framework.StatelessWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get defaultTextStyle() {
      return this[defaultTextStyle$];
    }
    set defaultTextStyle(value) {
      super.defaultTextStyle = value;
    }
    get onLinkTap() {
      return this[onLinkTap$];
    }
    set onLinkTap(value) {
      super.onLinkTap = value;
    }
    get renderNewlines() {
      return this[renderNewlines$];
    }
    set renderNewlines(value) {
      super.renderNewlines = value;
    }
    get blockSpacing() {
      return this[blockSpacing$];
    }
    set blockSpacing(value) {
      super.blockSpacing = value;
    }
    get useRichText() {
      return this[useRichText$];
    }
    set useRichText(value) {
      super.useRichText = value;
    }
    get onImageError() {
      return this[onImageError$];
    }
    set onImageError(value) {
      super.onImageError = value;
    }
    get linkStyle() {
      return this[linkStyle$];
    }
    set linkStyle(value) {
      super.linkStyle = value;
    }
    get imageProperties() {
      return this[imageProperties$];
    }
    set imageProperties(value) {
      super.imageProperties = value;
    }
    get onImageTap() {
      return this[onImageTap$];
    }
    set onImageTap(value) {
      super.onImageTap = value;
    }
    get showImages() {
      return this[showImages$];
    }
    set showImages(value) {
      super.showImages = value;
    }
    get customRender() {
      return this[customRender$];
    }
    set customRender(value) {
      super.customRender = value;
    }
    get customEdgeInsets() {
      return this[customEdgeInsets$];
    }
    set customEdgeInsets(value) {
      super.customEdgeInsets = value;
    }
    get customTextStyle() {
      return this[customTextStyle$];
    }
    set customTextStyle(value) {
      super.customTextStyle = value;
    }
    build(context) {
      let t0;
      let width = src__widgets__media_query.MediaQuery.of(context).size.width;
      return new src__widgets__container.Container.new({padding: this.padding, color: this.backgroundColor, width: width, child: src__widgets__text.DefaultTextStyle.merge({style: (t0 = this.defaultTextStyle, t0 == null ? src__widgets__text.DefaultTextStyle.of(context).style : t0), child: dart.test(this.useRichText) ? new html_parser$.HtmlRichTextParser.new({width: width, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customEdgeInsets: this.customEdgeInsets, customTextStyle: this.customTextStyle, html: this.data, onImageError: this.onImageError, linkStyle: this.linkStyle, imageProperties: this.imageProperties, onImageTap: this.onImageTap, showImages: this.showImages, $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 15, file: "org-dartlang-app:///packages/tap_hero_web/flutter_html.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 11, name: "width"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 11, name: "onLinkTap"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 11, name: "renderNewlines"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 11, name: "customEdgeInsets"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 11, name: "customTextStyle"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 11, name: "html"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 11, name: "onImageError"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 11, name: "linkStyle"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 11, name: "imageProperties"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 11, name: "onImageTap"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 11, name: "showImages"})))], src__widgets__widget_inspector._Location))})))}) : new html_parser$.HtmlOldParser.new({width: width, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customRender: this.customRender, html: this.data, blockSpacing: this.blockSpacing, onImageError: this.onImageError, linkStyle: this.linkStyle, showImages: this.showImages, $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 15, file: "org-dartlang-app:///packages/tap_hero_web/flutter_html.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 11, name: "width"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 11, name: "onLinkTap"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 11, name: "renderNewlines"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 11, name: "customRender"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 11, name: "html"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 11, name: "blockSpacing"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 11, name: "onImageError"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 11, name: "linkStyle"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 11, name: "showImages"})))], src__widgets__widget_inspector._Location))})))})}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/flutter_html.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 7, name: "padding"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 7, name: "color"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 7, name: "width"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (flutter_html.Html.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let defaultTextStyle = opts && 'defaultTextStyle' in opts ? opts.defaultTextStyle : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let customRender = opts && 'customRender' in opts ? opts.customRender : null;
    let customEdgeInsets = opts && 'customEdgeInsets' in opts ? opts.customEdgeInsets : null;
    let customTextStyle = opts && 'customTextStyle' in opts ? opts.customTextStyle : null;
    let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : 14.0;
    let useRichText = opts && 'useRichText' in opts ? opts.useRichText : true;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : const$ || (const$ = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, color: src__material__colors.Colors.blueAccent, decorationColor: src__material__colors.Colors.blueAccent})));
    let imageProperties = opts && 'imageProperties' in opts ? opts.imageProperties : null;
    let onImageTap = opts && 'onImageTap' in opts ? opts.onImageTap : null;
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[defaultTextStyle$] = defaultTextStyle;
    this[onLinkTap$] = onLinkTap;
    this[renderNewlines$] = renderNewlines;
    this[customRender$] = customRender;
    this[customEdgeInsets$] = customEdgeInsets;
    this[customTextStyle$] = customTextStyle;
    this[blockSpacing$] = blockSpacing;
    this[useRichText$] = useRichText;
    this[onImageError$] = onImageError;
    this[linkStyle$] = linkStyle;
    this[imageProperties$] = imageProperties;
    this[onImageTap$] = onImageTap;
    this[showImages$] = showImages;
    flutter_html.Html.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_html.Html.prototype;
  dart.addTypeTests(flutter_html.Html);
  const data$ = Symbol("Html.data");
  const padding$ = Symbol("Html.padding");
  const backgroundColor$ = Symbol("Html.backgroundColor");
  const defaultTextStyle$ = Symbol("Html.defaultTextStyle");
  const onLinkTap$ = Symbol("Html.onLinkTap");
  const renderNewlines$ = Symbol("Html.renderNewlines");
  const blockSpacing$ = Symbol("Html.blockSpacing");
  const useRichText$ = Symbol("Html.useRichText");
  const onImageError$ = Symbol("Html.onImageError");
  const linkStyle$ = Symbol("Html.linkStyle");
  const imageProperties$ = Symbol("Html.imageProperties");
  const onImageTap$ = Symbol("Html.onImageTap");
  const showImages$ = Symbol("Html.showImages");
  const customRender$ = Symbol("Html.customRender");
  const customEdgeInsets$ = Symbol("Html.customEdgeInsets");
  const customTextStyle$ = Symbol("Html.customTextStyle");
  dart.setMethodSignature(flutter_html.Html, () => ({
    __proto__: dart.getMethods(flutter_html.Html.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(flutter_html.Html, "package:tap_hero_web/flutter_html.dart");
  dart.setFieldSignature(flutter_html.Html, () => ({
    __proto__: dart.getFields(flutter_html.Html.__proto__),
    data: dart.finalFieldType(core.String),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    backgroundColor: dart.finalFieldType(ui$.Color),
    defaultTextStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    onLinkTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    renderNewlines: dart.finalFieldType(core.bool),
    blockSpacing: dart.finalFieldType(core.double),
    useRichText: dart.finalFieldType(core.bool),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    imageProperties: dart.finalFieldType(image_properties$.ImageProperties),
    onImageTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    showImages: dart.finalFieldType(core.bool),
    customRender: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [dom$.Node, core.List$(src__widgets__framework.Widget)])),
    customEdgeInsets: dart.finalFieldType(dart.fnType(src__painting__edge_insets.EdgeInsets, [dom$.Node])),
    customTextStyle: dart.finalFieldType(dart.fnType(src__painting__text_style.TextStyle, [dom$.Node, src__painting__text_style.TextStyle]))
  }));
  dart.trackLibraries("packages/tap_hero_web/flutter_html", {
    "package:tap_hero_web/flutter_html.dart": flutter_html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/flutter_html.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8Be;;;;;;IACY;;;;;;IACb;;;;;;IACI;;;;;;IACA;;;;;;IACL;;;;;;IACE;;;;;;IACF;;;;;;IACc;;;;;;IACT;;;;;;IAGM;;;;;;IACL;;;;;;IACN;;;;;;IAIQ;;;;;;IACI;;;;;;IACD;;;;;;UAGI;;AACX,kBAAmB,AAAY,AAAK,wCAAd,OAAO;AAE1C,YAAO,qDACI,qBACF,6BACA,KAAK,SACY,mDACE,KAAjB,6BAAiB,OAAoB,AAAY,uCAAT,OAAO,gCAC9C,oBACF,gDACG,KAAK,aACD,gCACK,uCACE,wCACD,4BACX,yBACQ,8BACH,iCACM,kCACL,6BACA,+uDAER,2CACG,KAAK,aACD,gCACK,mCACF,yBACR,yBACQ,iCACA,8BACH,4BACC;IAIpB;;;QAjFM;QACW;QACV;QACA;QACA;QACA;QACA,0EAAiB;QACjB;QACA;QACA;QACA,oEAAe;QACf,iEAAc;QACd;QACA,2DAAkB,wFACQ,qCACb,0DACU;QACvB;QACA;QACA,8DAAa;;IAlBH;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAIA;IACA;IACA;AACF,qDAAW,GAAG;;EAAC","file":"flutter_html.ddc.js"}');
  // Exports:
  return {
    flutter_html: flutter_html
  };
});

//# sourceMappingURL=flutter_html.ddc.js.map
