define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/html/dom', 'packages/tap_hero_web/image_properties'], function(dart_sdk, animation, arena, animation$, ui, material, dom, image_properties) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__text_span = animation.src__painting__text_span;
  const src__painting__text_style = animation.src__painting__text_style;
  const src__painting__image_provider = animation.src__painting__image_provider;
  const src__painting__alignment = animation.src__painting__alignment;
  const src__painting__text_painter = animation.src__painting__text_painter;
  const src__gestures__tap = arena.src__gestures__tap;
  const src__widgets__gesture_detector = animation$.src__widgets__gesture_detector;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__rendering__flex = animation$.src__rendering__flex;
  const src__widgets__text = animation$.src__widgets__text;
  const src__painting__edge_insets = animation$.src__painting__edge_insets;
  const src__painting__decoration = animation$.src__painting__decoration;
  const src__painting__box_decoration = animation$.src__painting__box_decoration;
  const src__painting__box_border = animation$.src__painting__box_border;
  const src__painting__borders = animation$.src__painting__borders;
  const src__widgets__image = animation$.src__widgets__image;
  const src__painting__decoration_image = animation$.src__painting__decoration_image;
  const src__rendering__wrap = animation$.src__rendering__wrap;
  const src__rendering__stack = animation$.src__rendering__stack;
  const ui$ = ui.ui;
  const src__material__colors = material.src__material__colors;
  const src__material__divider = material.src__material__divider;
  const dom$ = dom.dom;
  const parser = dom.parser;
  const image_properties$ = image_properties.image_properties;
  const html_parser = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $addAll = dartx.addAll;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $replaceAll = dartx.replaceAll;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $trim = dartx.trim;
  const $indexOf = dartx.indexOf;
  const $trimLeft = dartx.trimLeft;
  const $endsWith = dartx.endsWith;
  const $_get = dartx._get;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $toString = dartx.toString;
  const $containsKey = dartx.containsKey;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(src__painting__text_span.TextSpan)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let NodeToNull = () => (NodeToNull = dart.constFn(dart.fnType(core.Null, [dom$.Node])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])))();
  let NodeToWidget = () => (NodeToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [dom$.Node])))();
  html_parser.LinkTextSpan = class LinkTextSpan extends src__painting__text_span.TextSpan {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
  };
  (html_parser.LinkTextSpan.new = function(opts) {
    let t0, t0$;
    let style = opts && 'style' in opts ? opts.style : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[url$] = url;
    html_parser.LinkTextSpan.__proto__.new.call(this, {style: style, text: text, children: (t0 = children, t0 == null ? JSArrayOfTextSpan().of([]) : t0), recognizer: (t0$ = new src__gestures__tap.TapGestureRecognizer.new(), t0$.onTap = dart.fn(() => {
        onLinkTap(url);
      }, VoidToNull()), t0$)});
    ;
  }).prototype = html_parser.LinkTextSpan.prototype;
  dart.addTypeTests(html_parser.LinkTextSpan);
  const url$ = Symbol("LinkTextSpan.url");
  dart.setLibraryUri(html_parser.LinkTextSpan, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.LinkTextSpan, () => ({
    __proto__: dart.getFields(html_parser.LinkTextSpan.__proto__),
    url: dart.finalFieldType(core.String)
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  html_parser.LinkBlock = class LinkBlock extends src__widgets__container.Container {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
  };
  (html_parser.LinkBlock.new = function(opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    html_parser.LinkBlock.__proto__.new.call(this, {padding: padding, margin: margin, child: new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          onLinkTap(url);
        }, VoidToNull()), child: new src__widgets__basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 11, name: "onTap"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.LinkBlock.prototype;
  dart.addTypeTests(html_parser.LinkBlock);
  const children$ = Symbol("LinkBlock.children");
  dart.setLibraryUri(html_parser.LinkBlock, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.LinkBlock, () => ({
    __proto__: dart.getFields(html_parser.LinkBlock.__proto__),
    children: dart.finalFieldType(core.List$(src__widgets__framework.Widget))
  }));
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
  html_parser.BlockText = class BlockText extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get leadingChar() {
      return this[leadingChar$];
    }
    set leadingChar(value) {
      super.leadingChar = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({width: core.double.infinity, padding: this.padding, margin: this.margin, decoration: this.decoration, child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this.leadingChar[$isNotEmpty] ? new src__widgets__text.Text.new(this.leadingChar, {$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 43, name: "data"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 58, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$9 || (const$9 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: this.child, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 22, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, name: "crossAxisAlignment"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 9, name: "width"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 9, name: "padding"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 9, name: "margin"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 9, name: "decoration"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (html_parser.BlockText.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let leadingChar = opts && 'leadingChar' in opts ? opts.leadingChar : "";
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[margin$] = margin;
    this[leadingChar$] = leadingChar;
    this[decoration$] = decoration;
    html_parser.BlockText.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.BlockText.prototype;
  dart.addTypeTests(html_parser.BlockText);
  const child$ = Symbol("BlockText.child");
  const padding$ = Symbol("BlockText.padding");
  const margin$ = Symbol("BlockText.margin");
  const leadingChar$ = Symbol("BlockText.leadingChar");
  const decoration$ = Symbol("BlockText.decoration");
  dart.setMethodSignature(html_parser.BlockText, () => ({
    __proto__: dart.getMethods(html_parser.BlockText.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(html_parser.BlockText, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.BlockText, () => ({
    __proto__: dart.getFields(html_parser.BlockText.__proto__),
    child: dart.finalFieldType(src__widgets__basic.RichText),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsets),
    margin: dart.finalFieldType(src__painting__edge_insets.EdgeInsets),
    leadingChar: dart.finalFieldType(core.String),
    decoration: dart.finalFieldType(src__painting__decoration.Decoration)
  }));
  html_parser.ParseContext = class ParseContext extends core.Object {
    get rootWidgetList() {
      return this[rootWidgetList$];
    }
    set rootWidgetList(value) {
      this[rootWidgetList$] = value;
    }
    get parentElement() {
      return this[parentElement$];
    }
    set parentElement(value) {
      this[parentElement$] = value;
    }
    get indentLevel() {
      return this[indentLevel$];
    }
    set indentLevel(value) {
      this[indentLevel$] = value;
    }
    get listCount() {
      return this[listCount$];
    }
    set listCount(value) {
      this[listCount$] = value;
    }
    get listChar() {
      return this[listChar$];
    }
    set listChar(value) {
      this[listChar$] = value;
    }
    get blockType() {
      return this[blockType$];
    }
    set blockType(value) {
      this[blockType$] = value;
    }
    get condenseWhitespace() {
      return this[condenseWhitespace$];
    }
    set condenseWhitespace(value) {
      this[condenseWhitespace$] = value;
    }
    get spansOnly() {
      return this[spansOnly$];
    }
    set spansOnly(value) {
      this[spansOnly$] = value;
    }
    get inBlock() {
      return this[inBlock$];
    }
    set inBlock(value) {
      this[inBlock$] = value;
    }
    get childStyle() {
      return this[childStyle$];
    }
    set childStyle(value) {
      this[childStyle$] = value;
    }
  };
  (html_parser.ParseContext.new = function(opts) {
    let t0;
    let rootWidgetList = opts && 'rootWidgetList' in opts ? opts.rootWidgetList : null;
    let parentElement = opts && 'parentElement' in opts ? opts.parentElement : null;
    let indentLevel = opts && 'indentLevel' in opts ? opts.indentLevel : 0;
    let listCount = opts && 'listCount' in opts ? opts.listCount : 0;
    let listChar = opts && 'listChar' in opts ? opts.listChar : "•";
    let blockType = opts && 'blockType' in opts ? opts.blockType : null;
    let condenseWhitespace = opts && 'condenseWhitespace' in opts ? opts.condenseWhitespace : true;
    let spansOnly = opts && 'spansOnly' in opts ? opts.spansOnly : false;
    let inBlock = opts && 'inBlock' in opts ? opts.inBlock : false;
    let childStyle = opts && 'childStyle' in opts ? opts.childStyle : null;
    this[rootWidgetList$] = rootWidgetList;
    this[parentElement$] = parentElement;
    this[indentLevel$] = indentLevel;
    this[listCount$] = listCount;
    this[listChar$] = listChar;
    this[blockType$] = blockType;
    this[condenseWhitespace$] = condenseWhitespace;
    this[spansOnly$] = spansOnly;
    this[inBlock$] = inBlock;
    this[childStyle$] = childStyle;
    this.childStyle = (t0 = this.childStyle, t0 == null ? new src__painting__text_style.TextStyle.new() : t0);
  }).prototype = html_parser.ParseContext.prototype;
  (html_parser.ParseContext.fromContext = function(parseContext) {
    let t0;
    this[indentLevel$] = 0;
    this[listCount$] = 0;
    this[listChar$] = "•";
    this[condenseWhitespace$] = true;
    this[spansOnly$] = false;
    this[inBlock$] = false;
    this[childStyle$] = null;
    this[blockType$] = null;
    this[parentElement$] = null;
    this[rootWidgetList$] = null;
    this.rootWidgetList = parseContext.rootWidgetList;
    this.parentElement = parseContext.parentElement;
    this.indentLevel = parseContext.indentLevel;
    this.listCount = parseContext.listCount;
    this.listChar = parseContext.listChar;
    this.blockType = parseContext.blockType;
    this.condenseWhitespace = parseContext.condenseWhitespace;
    this.spansOnly = parseContext.spansOnly;
    this.inBlock = parseContext.inBlock;
    this.childStyle = (t0 = parseContext.childStyle, t0 == null ? new src__painting__text_style.TextStyle.new() : t0);
  }).prototype = html_parser.ParseContext.prototype;
  dart.addTypeTests(html_parser.ParseContext);
  const rootWidgetList$ = Symbol("ParseContext.rootWidgetList");
  const parentElement$ = Symbol("ParseContext.parentElement");
  const indentLevel$ = Symbol("ParseContext.indentLevel");
  const listCount$ = Symbol("ParseContext.listCount");
  const listChar$ = Symbol("ParseContext.listChar");
  const blockType$ = Symbol("ParseContext.blockType");
  const condenseWhitespace$ = Symbol("ParseContext.condenseWhitespace");
  const spansOnly$ = Symbol("ParseContext.spansOnly");
  const inBlock$ = Symbol("ParseContext.inBlock");
  const childStyle$ = Symbol("ParseContext.childStyle");
  dart.setLibraryUri(html_parser.ParseContext, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.ParseContext, () => ({
    __proto__: dart.getFields(html_parser.ParseContext.__proto__),
    rootWidgetList: dart.fieldType(core.List$(src__widgets__framework.Widget)),
    parentElement: dart.fieldType(dart.dynamic),
    indentLevel: dart.fieldType(core.int),
    listCount: dart.fieldType(core.int),
    listChar: dart.fieldType(core.String),
    blockType: dart.fieldType(core.String),
    condenseWhitespace: dart.fieldType(core.bool),
    spansOnly: dart.fieldType(core.bool),
    inBlock: dart.fieldType(core.bool),
    childStyle: dart.fieldType(src__painting__text_style.TextStyle)
  }));
  let const$25;
  const _hasBlockChild = dart.privateName(html_parser, "_hasBlockChild");
  const _parseNode = dart.privateName(html_parser, "_parseNode");
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
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  const _getPaint = dart.privateName(html_parser, "_getPaint");
  const _isNotFirstBreakTag = dart.privateName(html_parser, "_isNotFirstBreakTag");
  html_parser.HtmlRichTextParser = class HtmlRichTextParser extends src__widgets__framework.StatelessWidget {
    get indentSize() {
      return this[indentSize];
    }
    set indentSize(value) {
      super.indentSize = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
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
    get html() {
      return this[html$];
    }
    set html(value) {
      super.html = value;
    }
    get customTextStyle() {
      return this[customTextStyle$];
    }
    set customTextStyle(value) {
      super.customTextStyle = value;
    }
    get customEdgeInsets() {
      return this[customEdgeInsets$];
    }
    set customEdgeInsets(value) {
      super.customEdgeInsets = value;
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
    static get _supportedElements() {
      let t0;
      t0 = [];
      t0[$addAll](html_parser.HtmlRichTextParser._supportedStyleElements);
      t0[$addAll](html_parser.HtmlRichTextParser._supportedSpecialtyElements);
      t0[$addAll](html_parser.HtmlRichTextParser._supportedBlockElements);
      return t0;
    }
    [_hasBlockChild](node, opts) {
      let ignoreSelf = opts && 'ignoreSelf' in opts ? opts.ignoreSelf : true;
      let retval = false;
      if (dom$.Element.is(node)) {
        if (dart.test(html_parser.HtmlRichTextParser._supportedBlockElements[$contains](node.localName)) && !dart.test(ignoreSelf)) return true;
        node.nodes[$forEach](dart.fn(node => {
          if (dart.test(this[_hasBlockChild](node, {ignoreSelf: false}))) retval = true;
        }, NodeToNull()));
      }
      return retval;
    }
    build(context) {
      let data = this.html;
      if (dart.test(this.renderNewlines)) {
        data = data[$replaceAll]("\n", "<br />");
      }
      let document = parser.parse(data);
      let body = document.body;
      let widgetList = JSArrayOfWidget().of([]);
      let parseContext = new html_parser.ParseContext.new({rootWidgetList: widgetList, childStyle: src__widgets__text.DefaultTextStyle.of(context).style});
      this[_parseNode](body, parseContext, context);
      let children = JSArrayOfWidget().of([]);
      widgetList[$forEach](dart.fn(w => {
        if (html_parser.BlockText.is(w)) {
          if (w.child.text == null) return;
          let childTextSpan = w.child.text;
          if ((childTextSpan.text == null || childTextSpan.text[$isEmpty]) && (childTextSpan.children == null || dart.test(childTextSpan.children[$isEmpty]))) return;
        } else if (html_parser.LinkBlock.is(w)) {
          if (dart.test(w.children[$isEmpty])) return;
        } else if (html_parser.LinkTextSpan.is(w)) {
          if (w.text[$isEmpty] && dart.test(w.children[$isEmpty])) return;
        }
        children[$add](src__widgets__framework.Widget._check(w));
      }, dynamicToNull()));
      return new src__widgets__basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 329, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 330, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_parseNode](node, parseContext, buildContext) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31, t0$32, t0$33, t0$34, t0$35, t0$36, t0$37, t0$38, t0$39, t0$40, t0$41, t0$42;
      if (dom$.Text.is(node)) {
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") === -1) {
          return;
        }
        let finalText = node.text;
        if (dart.test(parseContext.condenseWhitespace)) {
          finalText = this.condenseHtmlWhitespace(node.text);
          if (parseContext.parentElement == null)
            finalText = finalText[$trimLeft]();
          else if (src__painting__text_span.TextSpan.is(parseContext.parentElement) || html_parser.LinkTextSpan.is(parseContext.parentElement)) {
            let lastString = core.String._check((t0 = dart.dload(parseContext.parentElement, 'text'), t0 == null ? "" : t0));
            if (!dart.dtest(dart.dload(dart.dload(parseContext.parentElement, 'children'), 'isEmpty'))) {
              lastString = core.String._check((t0$ = dart.dload(dart.dload(dart.dload(parseContext.parentElement, 'children'), 'last'), 'text'), t0$ == null ? "" : t0$));
            }
            if (lastString[$endsWith](" ") || lastString[$endsWith]("\n")) {
              finalText = finalText[$trimLeft]();
            }
          }
        }
        if (finalText[$trim]()[$isEmpty] && finalText !== " ") return;
        let span = new src__painting__text_span.TextSpan.new({text: finalText, children: JSArrayOfTextSpan().of([]), style: parseContext.childStyle});
        let treatLikeBlock = JSArrayOfString().of(["blockquote", "ul", "ol"])[$indexOf](parseContext.blockType) !== -1;
        if (parseContext.parentElement == null) {
          if (treatLikeBlock) {
            let decoration = null;
            if (parseContext.blockType === "blockquote") {
              decoration = new src__painting__box_decoration.BoxDecoration.new({border: new src__painting__box_border.Border.new({left: new src__painting__borders.BorderSide.new({color: src__material__colors.Colors.black38, width: 2.0})})});
              parseContext.childStyle = parseContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic}));
            }
            let blockText = new html_parser.BlockText.new({margin: new src__painting__edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0, left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}), padding: new src__painting__edge_insets.EdgeInsets.all(2.0), decoration: decoration, child: new src__widgets__basic.RichText.new({textAlign: ui$.TextAlign.left, text: span, $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 423, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 424, column: 15, name: "textAlign"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 425, column: 15, name: "text"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 416, column: 33, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 417, column: 13, name: "margin"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 421, column: 13, name: "padding"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 422, column: 13, name: "decoration"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 423, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
            parseContext.rootWidgetList[$add](blockText);
          } else {
            parseContext.rootWidgetList[$add](new html_parser.BlockText.new({child: new src__widgets__basic.RichText.new({text: span, $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 37, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 46, name: "text"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 30, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
          }
          parseContext.parentElement = span;
        } else if (html_parser.LinkTextSpan.is(parseContext.parentElement)) {
          dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new html_parser.LinkTextSpan.new({style: src__painting__text_style.TextStyle._check(dart.dsend(dart.dload(parseContext.parentElement, 'style'), 'merge', [parseContext.childStyle])), url: core.String._check(dart.dload(parseContext.parentElement, 'url')), text: finalText, onLinkTap: StringTovoid()._check(this.onLinkTap)})]);
        } else if (!ListOfWidget().is(dart.dload(parseContext.parentElement, 'children'))) {
          dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [span]);
        } else {
        }
        return;
      } else if (dom$.Element.is(node)) {
        if (!dart.dtest(dart.dsend(html_parser.HtmlRichTextParser._supportedElements, 'contains', [node.localName]))) {
          return;
        }
        let nextContext = new html_parser.ParseContext.fromContext(parseContext);
        if (dart.test(html_parser.HtmlRichTextParser._supportedStyleElements[$contains](node.localName))) {
          let childStyle = (t0$0 = parseContext.childStyle, t0$0 == null ? new src__painting__text_style.TextStyle.new() : t0$0);
          switch (node.localName) {
            case "b":
            case "strong":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold}));
              break;
            }
            case "i":
            case "address":
            case "cite":
            case "var":
            case "em":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic}));
              break;
            }
            case "kbd":
            case "samp":
            case "tt":
            case "code":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"}));
              break;
            }
            case "ins":
            case "u":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline}));
              break;
            }
            case "abbr":
            case "acronym":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, decorationStyle: ui$.TextDecorationStyle.dotted}));
              break;
            }
            case "big":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 20.0}));
              break;
            }
            case "small":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 10.0}));
              break;
            }
            case "mark":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({backgroundColor: src__material__colors.Colors.yellow, color: src__material__colors.Colors.black}));
              break;
            }
            case "del":
            case "s":
            case "strike":
            {
              childStyle = childStyle.merge(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.lineThrough}));
              break;
            }
            case "ol":
            {
              t0$1 = nextContext;
              t0$1.indentLevel = dart.notNull(t0$1.indentLevel) + 1;
              nextContext.listChar = "#";
              nextContext.listCount = 0;
              nextContext.blockType = "ol";
              break;
            }
            case "ul":
            {
              t0$2 = nextContext;
              t0$2.indentLevel = dart.notNull(t0$2.indentLevel) + 1;
              nextContext.listChar = "•";
              nextContext.listCount = 0;
              nextContext.blockType = "ul";
              break;
            }
            case "blockquote":
            {
              t0$3 = nextContext;
              t0$3.indentLevel = dart.notNull(t0$3.indentLevel) + 1;
              nextContext.blockType = "blockquote";
              break;
            }
            case "ruby":
            case "rt":
            case "rp":
            case "bdi":
            case "data":
            case "time":
            case "span":
            {
              break;
            }
          }
          if (this.customTextStyle != null) {
            let customStyle = this.customTextStyle(node, childStyle);
            if (customStyle != null) {
              childStyle = customStyle;
            }
          }
          nextContext.childStyle = childStyle;
        } else if (dart.test(html_parser.HtmlRichTextParser._supportedSpecialtyElements[$contains](node.localName))) {
          switch (node.localName) {
            case "a":
            {
              let url = (t0$4 = node.attributes[$_get]("href"), t0$4 == null ? null : t0$4);
              if (dart.test(this[_hasBlockChild](node))) {
                let linkContainer = new html_parser.LinkBlock.new({url: url, margin: new src__painting__edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}), onLinkTap: StringTovoid()._check(this.onLinkTap), children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 569, column: 41, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 570, column: 17, name: "url"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 571, column: 17, name: "margin"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 573, column: 17, name: "onLinkTap"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 574, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))});
                nextContext.parentElement = linkContainer;
                nextContext.rootWidgetList[$add](linkContainer);
              } else {
                let _linkStyle = parseContext.childStyle.merge(this.linkStyle);
                let span = new html_parser.LinkTextSpan.new({style: _linkStyle, url: url, onLinkTap: StringTovoid()._check(this.onLinkTap), children: JSArrayOfTextSpan().of([])});
                if (src__painting__text_span.TextSpan.is(parseContext.parentElement)) {
                  dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [span]);
                } else {
                  let blockElement = new html_parser.BlockText.new({margin: new src__painting__edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize), top: 10.0}), child: new src__widgets__basic.RichText.new({text: span, $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 593, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 593, column: 35, name: "text"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 590, column: 42, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 591, column: 19, name: "margin"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 593, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))});
                  parseContext.rootWidgetList[$add](blockElement);
                  nextContext.inBlock = true;
                }
                nextContext.childStyle = this.linkStyle;
                nextContext.parentElement = span;
              }
              break;
            }
            case "br":
            {
              if (parseContext.parentElement != null && src__painting__text_span.TextSpan.is(parseContext.parentElement)) {
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new src__painting__text_span.TextSpan.new({text: "\n", children: JSArrayOfTextSpan().of([])})]);
              }
              break;
            }
            case "table":
            {
              parseContext.parentElement = null;
              nextContext.parentElement = new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 614, column: 41, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 615, column: 15, name: "crossAxisAlignment"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 616, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))});
              nextContext.rootWidgetList[$add](new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0}), child: src__widgets__framework.Widget._check(nextContext.parentElement), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 618, column: 44, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 619, column: 17, name: "margin"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 620, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
              break;
            }
            case "tbody":
            case "thead":
            case "tfoot":
            {
              break;
            }
            case "td":
            case "th":
            {
              let colspan = 1;
              if (node.attributes[$_get]("colspan") != null) {
                colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
              }
              nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontWeight: node.localName === "th" ? ui$.FontWeight.bold : ui$.FontWeight.normal}));
              let text = new src__widgets__basic.RichText.new({text: new src__painting__text_span.TextSpan.new({text: "", children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 640, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 640, column: 22, name: "text"})))], src__widgets__widget_inspector._Location))})))});
              let cell = new src__widgets__basic.Expanded.new({flex: colspan, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(1.0), child: text, $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 643, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 643, column: 32, name: "padding"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 643, column: 62, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 641, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 642, column: 15, name: "flex"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 643, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [cell]);
              nextContext.parentElement = text.text;
              break;
            }
            case "tr":
            {
              let row = new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 650, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 651, column: 15, name: "crossAxisAlignment"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 652, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))});
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [row]);
              nextContext.parentElement = row;
              break;
            }
            case "caption":
            {
              let row = new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 661, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$83 || (const$83 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 662, column: 15, name: "crossAxisAlignment"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 663, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))});
              let text = new src__widgets__basic.RichText.new({textAlign: ui$.TextAlign.center, textScaleFactor: 1.2, text: new src__painting__text_span.TextSpan.new({text: "", children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 667, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$88 || (const$88 = dart.constList([const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 668, column: 17, name: "textAlign"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 669, column: 17, name: "textScaleFactor"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 670, column: 17, name: "text"})))], src__widgets__widget_inspector._Location))})))});
              let cell = new src__widgets__basic.Expanded.new({child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(2.0), child: text, $creationLocationd_0dea112b090073317d4: const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 672, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$92 || (const$92 = dart.constList([const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 672, column: 32, name: "padding"}))), const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 672, column: 62, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 671, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$95 || (const$95 = dart.constList([const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 672, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
              row.children[$add](cell);
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [row]);
              nextContext.parentElement = text.text;
              break;
            }
            case "q":
            {
              if (parseContext.parentElement != null && src__painting__text_span.TextSpan.is(parseContext.parentElement)) {
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new src__painting__text_span.TextSpan.new({text: "\"", children: JSArrayOfTextSpan().of([])})]);
                let content = new src__painting__text_span.TextSpan.new({text: "", children: JSArrayOfTextSpan().of([])});
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [content]);
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new src__painting__text_span.TextSpan.new({text: "\"", children: JSArrayOfTextSpan().of([])})]);
                nextContext.parentElement = content;
              }
              break;
            }
          }
        } else if (dart.test(html_parser.HtmlRichTextParser._supportedBlockElements[$contains](node.localName))) {
          parseContext.parentElement = null;
          let textAlign = ui$.TextAlign.left;
          let _customEdgeInsets = null;
          if (this.customEdgeInsets != null) {
            _customEdgeInsets = this.customEdgeInsets(node);
          }
          let labelState = node.localName;
          SL0:
            while (true) {
              switch (labelState) {
                case "hr":
                {
                  parseContext.rootWidgetList[$add](new src__material__divider.Divider.new({height: 1.0, color: src__material__colors.Colors.black38, $creationLocationd_0dea112b090073317d4: const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 708, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$99 || (const$99 = dart.constList([const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 708, column: 30, name: "height"}))), const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 708, column: 43, name: "color"})))], src__widgets__widget_inspector._Location))})))}));
                  break SL0;
                }
                case "img":
                {
                  if (dart.test(this.showImages)) {
                    if (node.attributes[$_get]("src") != null) {
                      if (node.attributes[$_get]("src")[$startsWith]("data:image") && node.attributes[$_get]("src")[$contains]("base64,")) {
                        src__widgets__image.precacheImage(new src__painting__image_provider.MemoryImage.new(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]())), buildContext, {onError: this.onImageError});
                        parseContext.rootWidgetList[$add](new src__widgets__gesture_detector.GestureDetector.new({child: new src__widgets__image.Image.memory(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]()), {width: (t0$6 = (t0$5 = this.imageProperties, t0$5 == null ? null : t0$5.width), t0$6 == null ? node.attributes[$_get]("width") != null ? core.double.parse(node.attributes[$_get]("width")) : null : t0$6), height: (t0$8 = (t0$7 = this.imageProperties, t0$7 == null ? null : t0$7.height), t0$8 == null ? node.attributes[$_get]("height") != null ? core.double.parse(node.attributes[$_get]("height")) : null : t0$8), scale: (t0$10 = (t0$9 = this.imageProperties, t0$9 == null ? null : t0$9.scale), t0$10 == null ? 1.0 : t0$10), matchTextDirection: (t0$12 = (t0$11 = this.imageProperties, t0$11 == null ? null : t0$11.matchTextDirection), t0$12 == null ? false : t0$12), centerSlice: (t0$13 = this.imageProperties, t0$13 == null ? null : t0$13.centerSlice), alignment: (t0$15 = (t0$14 = this.imageProperties, t0$14 == null ? null : t0$14.alignment), t0$15 == null ? src__painting__alignment.Alignment.center : t0$15), colorBlendMode: (t0$16 = this.imageProperties, t0$16 == null ? null : t0$16.colorBlendMode), fit: (t0$17 = this.imageProperties, t0$17 == null ? null : t0$17.fit), color: (t0$18 = this.imageProperties, t0$18 == null ? null : t0$18.color), repeat: (t0$20 = (t0$19 = this.imageProperties, t0$19 == null ? null : t0$19.repeat), t0$20 == null ? src__painting__decoration_image.ImageRepeat.noRepeat : t0$20), semanticLabel: (t0$21 = this.imageProperties, t0$21 == null ? null : t0$21.semanticLabel), excludeFromSemantics: (t0$22 = this.imageProperties, t0$22 == null ? null : t0$22.semanticLabel) == null ? true : false, $creationLocationd_0dea112b090073317d4: const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 725, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$114 || (const$114 = dart.constList([const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 726, column: 30, name: "bytes"}))), const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 728, column: 23, name: "width"}))), const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 732, column: 23, name: "height"}))), const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 736, column: 23, name: "scale"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 737, column: 23, name: "matchTextDirection"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 739, column: 23, name: "centerSlice"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 740, column: 23, name: "alignment"}))), const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 741, column: 23, name: "colorBlendMode"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 742, column: 23, name: "fit"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 743, column: 23, name: "color"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 744, column: 23, name: "repeat"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 745, column: 23, name: "semanticLabel"}))), const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 746, column: 23, name: "excludeFromSemantics"})))], src__widgets__widget_inspector._Location))})))}), onTap: this.onImageTap, $creationLocationd_0dea112b090073317d4: const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 724, column: 51, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$118 || (const$118 = dart.constList([const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 725, column: 21, name: "child"}))), const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 751, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}));
                      } else {
                        src__widgets__image.precacheImage(new src__painting__image_provider.NetworkImage.new(node.attributes[$_get]("src")), buildContext, {onError: this.onImageError});
                        parseContext.rootWidgetList[$add](new src__widgets__gesture_detector.GestureDetector.new({child: new src__widgets__image.Image.network(node.attributes[$_get]("src"), {width: (t0$24 = (t0$23 = this.imageProperties, t0$23 == null ? null : t0$23.width), t0$24 == null ? node.attributes[$_get]("width") != null ? core.double.parse(node.attributes[$_get]("width")) : null : t0$24), height: (t0$26 = (t0$25 = this.imageProperties, t0$25 == null ? null : t0$25.height), t0$26 == null ? node.attributes[$_get]("height") != null ? core.double.parse(node.attributes[$_get]("height")) : null : t0$26), scale: (t0$28 = (t0$27 = this.imageProperties, t0$27 == null ? null : t0$27.scale), t0$28 == null ? 1.0 : t0$28), matchTextDirection: (t0$30 = (t0$29 = this.imageProperties, t0$29 == null ? null : t0$29.matchTextDirection), t0$30 == null ? false : t0$30), centerSlice: (t0$31 = this.imageProperties, t0$31 == null ? null : t0$31.centerSlice), alignment: (t0$33 = (t0$32 = this.imageProperties, t0$32 == null ? null : t0$32.alignment), t0$33 == null ? src__painting__alignment.Alignment.center : t0$33), colorBlendMode: (t0$34 = this.imageProperties, t0$34 == null ? null : t0$34.colorBlendMode), fit: (t0$35 = this.imageProperties, t0$35 == null ? null : t0$35.fit), color: (t0$36 = this.imageProperties, t0$36 == null ? null : t0$36.color), repeat: (t0$38 = (t0$37 = this.imageProperties, t0$37 == null ? null : t0$37.repeat), t0$38 == null ? src__painting__decoration_image.ImageRepeat.noRepeat : t0$38), semanticLabel: (t0$39 = this.imageProperties, t0$39 == null ? null : t0$39.semanticLabel), excludeFromSemantics: (t0$40 = this.imageProperties, t0$40 == null ? null : t0$40.semanticLabel) == null ? true : false, $creationLocationd_0dea112b090073317d4: const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 760, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$133 || (const$133 = dart.constList([const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 761, column: 38, name: "src"}))), const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 762, column: 23, name: "width"}))), const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 766, column: 23, name: "height"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 770, column: 23, name: "scale"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 771, column: 23, name: "matchTextDirection"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 773, column: 23, name: "centerSlice"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 774, column: 23, name: "alignment"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 775, column: 23, name: "colorBlendMode"}))), const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 776, column: 23, name: "fit"}))), const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 777, column: 23, name: "color"}))), const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 778, column: 23, name: "repeat"}))), const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 779, column: 23, name: "semanticLabel"}))), const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 780, column: 23, name: "excludeFromSemantics"})))], src__widgets__widget_inspector._Location))})))}), onTap: this.onImageTap, $creationLocationd_0dea112b090073317d4: const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 759, column: 51, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$137 || (const$137 = dart.constList([const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 760, column: 21, name: "child"}))), const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 785, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}));
                      }
                      if (node.attributes[$_get]("alt") != null) {
                        parseContext.rootWidgetList[$add](new html_parser.BlockText.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 0.0, vertical: 10.0}), padding: new src__painting__edge_insets.EdgeInsets.all(0.0), child: new src__widgets__basic.RichText.new({textAlign: ui$.TextAlign.center, text: new src__painting__text_span.TextSpan.new({text: node.attributes[$_get]("alt"), style: nextContext.childStyle, children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 793, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$141 || (const$141 = dart.constList([const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 794, column: 27, name: "textAlign"}))), const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 795, column: 27, name: "text"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 789, column: 51, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 790, column: 23, name: "margin"}))), const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 792, column: 23, name: "padding"}))), const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 793, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
                      }
                    }
                  }
                  break SL0;
                }
                case "li":
                {
                  let leadingChar = parseContext.listChar;
                  if (parseContext.blockType === "ol") {
                    t0$41 = parseContext;
                    t0$41.listCount = dart.notNull(t0$41.listCount) + 1;
                    leadingChar = dart.toString(parseContext.listCount) + ".";
                  }
                  let blockText = new html_parser.BlockText.new({margin: new src__painting__edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize), top: 3.0}), child: new src__widgets__basic.RichText.new({text: new src__painting__text_span.TextSpan.new({text: "", style: nextContext.childStyle, children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 815, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$149 || (const$149 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 816, column: 17, name: "text"})))], src__widgets__widget_inspector._Location))})))}), leadingChar: dart.str(leadingChar) + "  ", $creationLocationd_0dea112b090073317d4: const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 812, column: 35, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$154 || (const$154 = dart.constList([const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 813, column: 15, name: "margin"}))), const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 815, column: 15, name: "child"}))), const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 822, column: 15, name: "leadingChar"})))], src__widgets__widget_inspector._Location))})))});
                  parseContext.rootWidgetList[$add](blockText);
                  nextContext.parentElement = blockText.child.text;
                  nextContext.spansOnly = true;
                  nextContext.inBlock = true;
                  break SL0;
                }
                case "h1":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 26.0, fontWeight: ui$.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h2":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 24.0, fontWeight: ui$.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h3":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 22.0, fontWeight: ui$.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h4":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui$.FontWeight.w100}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h5":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui$.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h6":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui$.FontWeight.w100}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "pre":
                {
                  nextContext.condenseWhitespace = false;
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "center":
                {
                  textAlign = ui$.TextAlign.center;
                  labelState = Symbol('_default');
                  continue SL0;
                }
                default:
                {
                  let decoration = null;
                  if (parseContext.blockType === "blockquote") {
                    decoration = new src__painting__box_decoration.BoxDecoration.new({border: new src__painting__box_border.Border.new({left: new src__painting__borders.BorderSide.new({color: src__material__colors.Colors.black38, width: 2.0})})});
                    nextContext.childStyle = nextContext.childStyle.merge(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic}));
                  }
                  let blockText = new html_parser.BlockText.new({margin: node.localName !== "body" ? (t0$42 = _customEdgeInsets, t0$42 == null ? new src__painting__edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0, left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}) : t0$42) : src__painting__edge_insets.EdgeInsets.zero, padding: new src__painting__edge_insets.EdgeInsets.all(2.0), decoration: decoration, child: new src__widgets__basic.RichText.new({textAlign: textAlign, text: new src__painting__text_span.TextSpan.new({text: "", style: nextContext.childStyle, children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 892, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$158 || (const$158 = dart.constList([const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 893, column: 17, name: "textAlign"}))), const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 894, column: 17, name: "text"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 882, column: 35, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$164 || (const$164 = dart.constList([const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 883, column: 15, name: "margin"}))), const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 890, column: 15, name: "padding"}))), const$162 || (const$162 = dart.const(new src__widgets__widget_inspector._Location.new({line: 891, column: 15, name: "decoration"}))), const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 892, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
                  parseContext.rootWidgetList[$add](blockText);
                  nextContext.parentElement = blockText.child.text;
                  nextContext.spansOnly = true;
                  nextContext.inBlock = true;
                  break SL0;
                }
              }
              break;
            }
        }
        node.nodes[$forEach](dart.fn(childNode => {
          this[_parseNode](childNode, nextContext, buildContext);
        }, NodeToNull()));
      }
    }
    [_getPaint](color) {
      let paint = new ui$.Paint.new();
      paint.color = color;
      return paint;
    }
    condenseHtmlWhitespace(stringToTrim) {
      stringToTrim = stringToTrim[$replaceAll]("\n", " ");
      while (stringToTrim[$indexOf]("  ") !== -1) {
        stringToTrim = stringToTrim[$replaceAll]("  ", " ");
      }
      return stringToTrim;
    }
    [_isNotFirstBreakTag](node) {
      let index = node.parentNode.nodes[$indexOf](node);
      if (index === 0) {
        if (node.parentNode == null) {
          return false;
        }
        return this[_isNotFirstBreakTag](node.parentNode);
      } else if (dom$.Element.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom$.Element.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).localName === "br") {
          return true;
        }
        return false;
      } else if (dom$.Text.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom$.Text.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).text[$trim]() === "") {
          return this[_isNotFirstBreakTag](node.parentNode.nodes._get(dart.notNull(index) - 1));
        } else {
          return false;
        }
      }
      return false;
    }
  };
  (html_parser.HtmlRichTextParser.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let html = opts && 'html' in opts ? opts.html : null;
    let customTextStyle = opts && 'customTextStyle' in opts ? opts.customTextStyle : null;
    let customEdgeInsets = opts && 'customEdgeInsets' in opts ? opts.customEdgeInsets : null;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : const$25 || (const$25 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, color: src__material__colors.Colors.blueAccent, decorationColor: src__material__colors.Colors.blueAccent})));
    let imageProperties = opts && 'imageProperties' in opts ? opts.imageProperties : null;
    let onImageTap = opts && 'onImageTap' in opts ? opts.onImageTap : null;
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[indentSize] = 10.0;
    this[width$] = width;
    this[onLinkTap$] = onLinkTap;
    this[renderNewlines$] = renderNewlines;
    this[html$] = html;
    this[customTextStyle$] = customTextStyle;
    this[customEdgeInsets$] = customEdgeInsets;
    this[onImageError$] = onImageError;
    this[linkStyle$] = linkStyle;
    this[imageProperties$] = imageProperties;
    this[onImageTap$] = onImageTap;
    this[showImages$] = showImages;
    html_parser.HtmlRichTextParser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.HtmlRichTextParser.prototype;
  dart.addTypeTests(html_parser.HtmlRichTextParser);
  const indentSize = Symbol("HtmlRichTextParser.indentSize");
  const width$ = Symbol("HtmlRichTextParser.width");
  const onLinkTap$ = Symbol("HtmlRichTextParser.onLinkTap");
  const renderNewlines$ = Symbol("HtmlRichTextParser.renderNewlines");
  const html$ = Symbol("HtmlRichTextParser.html");
  const customTextStyle$ = Symbol("HtmlRichTextParser.customTextStyle");
  const customEdgeInsets$ = Symbol("HtmlRichTextParser.customEdgeInsets");
  const onImageError$ = Symbol("HtmlRichTextParser.onImageError");
  const linkStyle$ = Symbol("HtmlRichTextParser.linkStyle");
  const imageProperties$ = Symbol("HtmlRichTextParser.imageProperties");
  const onImageTap$ = Symbol("HtmlRichTextParser.onImageTap");
  const showImages$ = Symbol("HtmlRichTextParser.showImages");
  dart.setMethodSignature(html_parser.HtmlRichTextParser, () => ({
    __proto__: dart.getMethods(html_parser.HtmlRichTextParser.__proto__),
    [_hasBlockChild]: dart.fnType(core.bool, [dom$.Node], {ignoreSelf: core.bool}),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_parseNode]: dart.fnType(dart.void, [dom$.Node, html_parser.ParseContext, src__widgets__framework.BuildContext]),
    [_getPaint]: dart.fnType(ui$.Paint, [ui$.Color]),
    condenseHtmlWhitespace: dart.fnType(core.String, [core.String]),
    [_isNotFirstBreakTag]: dart.fnType(core.bool, [dom$.Node])
  }));
  dart.setLibraryUri(html_parser.HtmlRichTextParser, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.HtmlRichTextParser, () => ({
    __proto__: dart.getFields(html_parser.HtmlRichTextParser.__proto__),
    indentSize: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    onLinkTap: dart.finalFieldType(dart.dynamic),
    renderNewlines: dart.finalFieldType(core.bool),
    html: dart.finalFieldType(core.String),
    customTextStyle: dart.finalFieldType(dart.fnType(src__painting__text_style.TextStyle, [dom$.Node, src__painting__text_style.TextStyle])),
    customEdgeInsets: dart.finalFieldType(dart.fnType(src__painting__edge_insets.EdgeInsets, [dom$.Node])),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    imageProperties: dart.finalFieldType(image_properties$.ImageProperties),
    onImageTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    showImages: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(html_parser.HtmlRichTextParser, {
    /*html_parser.HtmlRichTextParser._supportedStyleElements*/get _supportedStyleElements() {
      return dart.constList(["b", "i", "address", "cite", "var", "em", "strong", "kbd", "samp", "tt", "code", "ins", "u", "small", "abbr", "acronym", "mark", "ol", "ul", "blockquote", "del", "s", "strike", "ruby", "rp", "rt", "bdi", "data", "time", "span", "big"], core.String);
    },
    /*html_parser.HtmlRichTextParser._supportedSpecialtyElements*/get _supportedSpecialtyElements() {
      return dart.constList(["a", "br", "table", "tbody", "caption", "td", "tfoot", "th", "thead", "tr", "q"], core.String);
    },
    /*html_parser.HtmlRichTextParser._supportedBlockElements*/get _supportedBlockElements() {
      return dart.constList(["article", "aside", "body", "center", "dd", "dfn", "div", "dl", "dt", "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "li", "main", "nav", "noscript", "p", "pre", "section"], core.String);
    }
  });
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  const _parseNodeList = dart.privateName(html_parser, "_parseNodeList");
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  let const$252;
  let const$253;
  let const$254;
  let const$255;
  let const$256;
  let const$257;
  let const$258;
  let const$259;
  let const$260;
  let const$261;
  let const$262;
  let const$263;
  let const$264;
  let const$265;
  let const$266;
  let const$267;
  let const$268;
  let const$269;
  let const$270;
  let const$271;
  let const$272;
  let const$273;
  let const$274;
  let const$275;
  let const$276;
  let const$277;
  let const$278;
  let const$279;
  let const$280;
  let const$281;
  let const$282;
  let const$283;
  let const$284;
  let const$285;
  let const$286;
  let const$287;
  let const$288;
  let const$289;
  let const$290;
  let const$291;
  let const$292;
  let const$293;
  let const$294;
  let const$295;
  let const$296;
  let const$297;
  let const$298;
  let const$299;
  let const$300;
  let const$301;
  let const$302;
  let const$303;
  let const$304;
  let const$305;
  let const$306;
  let const$307;
  let const$308;
  let const$309;
  let const$310;
  let const$311;
  let const$312;
  let const$313;
  let const$314;
  let const$315;
  let const$316;
  let const$317;
  let const$318;
  let const$319;
  let const$320;
  let const$321;
  let const$322;
  let const$323;
  let const$324;
  let const$325;
  let const$326;
  let const$327;
  let const$328;
  let const$329;
  let const$330;
  let const$331;
  let const$332;
  let const$333;
  let const$334;
  let const$335;
  let const$336;
  let const$337;
  let const$338;
  let const$339;
  let const$340;
  let const$341;
  let const$342;
  let const$343;
  let const$344;
  let const$345;
  let const$346;
  let const$347;
  let const$348;
  let const$349;
  let const$350;
  let const$351;
  let const$352;
  let const$353;
  let const$354;
  let const$355;
  let const$356;
  let const$357;
  let const$358;
  let const$359;
  let const$360;
  let const$361;
  let const$362;
  let const$363;
  let const$364;
  let const$365;
  let const$366;
  let const$367;
  let const$368;
  let const$369;
  let const$370;
  let const$371;
  let const$372;
  let const$373;
  let const$374;
  let const$375;
  let const$376;
  let const$377;
  let const$378;
  let const$379;
  let const$380;
  let const$381;
  let const$382;
  let const$383;
  let const$384;
  let const$385;
  let const$386;
  let const$387;
  let const$388;
  let const$389;
  let const$390;
  let const$391;
  let const$392;
  let const$393;
  let const$394;
  let const$395;
  let const$396;
  let const$397;
  let const$398;
  let const$399;
  let const$400;
  let const$401;
  let const$402;
  let const$403;
  let const$404;
  let const$405;
  let const$406;
  let const$407;
  let const$408;
  let const$409;
  let const$410;
  let const$411;
  let const$412;
  let const$413;
  let const$414;
  let const$415;
  let const$416;
  let const$417;
  let const$418;
  let const$419;
  let const$420;
  let const$421;
  let const$422;
  let const$423;
  let const$424;
  let const$425;
  let const$426;
  let const$427;
  let const$428;
  let const$429;
  let const$430;
  let const$431;
  let const$432;
  let const$433;
  let const$434;
  let const$435;
  let const$436;
  let const$437;
  let const$438;
  let const$439;
  let const$440;
  let const$441;
  let const$442;
  let const$443;
  let const$444;
  let const$445;
  let const$446;
  let const$447;
  let const$448;
  let const$449;
  let const$450;
  let const$451;
  let const$452;
  let const$453;
  let const$454;
  let const$455;
  let const$456;
  let const$457;
  let const$458;
  let const$459;
  let const$460;
  let const$461;
  let const$462;
  let const$463;
  let const$464;
  let const$465;
  let const$466;
  let const$467;
  let const$468;
  let const$469;
  let const$470;
  let const$471;
  let const$472;
  let const$473;
  let const$474;
  let const$475;
  let const$476;
  let const$477;
  let const$478;
  let const$479;
  let const$480;
  let const$481;
  let const$482;
  let const$483;
  let const$484;
  let const$485;
  let const$486;
  let const$487;
  let const$488;
  let const$489;
  let const$490;
  let const$491;
  let const$492;
  let const$493;
  let const$494;
  let const$495;
  let const$496;
  let const$497;
  let const$498;
  let const$499;
  let const$500;
  let const$501;
  let const$502;
  let const$503;
  let const$504;
  let const$505;
  let const$506;
  let const$507;
  let const$508;
  let const$509;
  let const$510;
  let const$511;
  let const$512;
  let const$513;
  let const$514;
  let const$515;
  let const$516;
  let const$517;
  let const$518;
  let const$519;
  let const$520;
  let const$521;
  let const$522;
  let const$523;
  let const$524;
  let const$525;
  let const$526;
  let const$527;
  let const$528;
  let const$529;
  let const$530;
  let const$531;
  let const$532;
  let const$533;
  let const$534;
  let const$535;
  let const$536;
  let const$537;
  let const$538;
  let const$539;
  let const$540;
  let const$541;
  let const$542;
  let const$543;
  let const$544;
  let const$545;
  let const$546;
  let const$547;
  let const$548;
  let const$549;
  let const$550;
  let const$551;
  let const$552;
  let const$553;
  let const$554;
  let const$555;
  let const$556;
  let const$557;
  let const$558;
  let const$559;
  let const$560;
  let const$561;
  let const$562;
  let const$563;
  let const$564;
  let const$565;
  let const$566;
  let const$567;
  let const$568;
  let const$569;
  let const$570;
  let const$571;
  let const$572;
  let const$573;
  let const$574;
  let const$575;
  let const$576;
  let const$577;
  let const$578;
  let const$579;
  let const$580;
  let const$581;
  let const$582;
  let const$583;
  let const$584;
  let const$585;
  let const$586;
  let const$587;
  let const$588;
  let const$589;
  let const$590;
  let const$591;
  let const$592;
  let const$593;
  let const$594;
  let const$595;
  let const$596;
  let const$597;
  let const$598;
  let const$599;
  let const$600;
  let const$601;
  let const$602;
  let const$603;
  let const$604;
  let const$605;
  let const$606;
  let const$607;
  let const$608;
  let const$609;
  let const$610;
  let const$611;
  let const$612;
  let const$613;
  let const$614;
  let const$615;
  let const$616;
  let const$617;
  let const$618;
  let const$619;
  let const$620;
  let const$621;
  let const$622;
  let const$623;
  let const$624;
  let const$625;
  let const$626;
  let const$627;
  let const$628;
  let const$629;
  let const$630;
  let const$631;
  let const$632;
  let const$633;
  let const$634;
  let const$635;
  let const$636;
  let const$637;
  let const$638;
  let const$639;
  let const$640;
  let const$641;
  let const$642;
  let const$643;
  let const$644;
  let const$645;
  let const$646;
  let const$647;
  let const$648;
  let const$649;
  let const$650;
  let const$651;
  let const$652;
  let const$653;
  let const$654;
  let const$655;
  let const$656;
  let const$657;
  let const$658;
  let const$659;
  let const$660;
  let const$661;
  let const$662;
  let const$663;
  let const$664;
  let const$665;
  let const$666;
  let const$667;
  let const$668;
  let const$669;
  let const$670;
  let const$671;
  let const$672;
  let const$673;
  let const$674;
  let const$675;
  let const$676;
  let const$677;
  let const$678;
  let const$679;
  let const$680;
  let const$681;
  let const$682;
  html_parser.HtmlOldParser = class HtmlOldParser extends src__widgets__framework.StatelessWidget {
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get onLinkTap() {
      return this[onLinkTap$0];
    }
    set onLinkTap(value) {
      super.onLinkTap = value;
    }
    get renderNewlines() {
      return this[renderNewlines$0];
    }
    set renderNewlines(value) {
      super.renderNewlines = value;
    }
    get customRender() {
      return this[customRender$];
    }
    set customRender(value) {
      super.customRender = value;
    }
    get blockSpacing() {
      return this[blockSpacing$];
    }
    set blockSpacing(value) {
      super.blockSpacing = value;
    }
    get html() {
      return this[html$0];
    }
    set html(value) {
      super.html = value;
    }
    get onImageError() {
      return this[onImageError$0];
    }
    set onImageError(value) {
      super.onImageError = value;
    }
    get linkStyle() {
      return this[linkStyle$0];
    }
    set linkStyle(value) {
      super.linkStyle = value;
    }
    get showImages() {
      return this[showImages$0];
    }
    set showImages(value) {
      super.showImages = value;
    }
    build(context) {
      return new src__widgets__basic.Wrap.new({alignment: src__rendering__wrap.WrapAlignment.start, children: this.parse(this.html), $creationLocationd_0dea112b090073317d4: const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1057, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$169 || (const$169 = dart.constList([const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1058, column: 7, name: "alignment"}))), const$168 || (const$168 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1059, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    parse(data) {
      let widgetList = JSArrayOfWidget().of([]);
      if (dart.test(this.renderNewlines)) {
        data = data[$replaceAll]("\n", "<br />");
      }
      let document = parser.parse(data);
      widgetList[$add](this[_parseNode](document.body));
      return widgetList;
    }
    [_parseNode](node) {
      if (this.customRender != null) {
        let customWidget = this.customRender(node, this[_parseNodeList](node.nodes));
        if (customWidget != null) {
          return customWidget;
        }
      }
      if (dom$.Element.is(node)) {
        if (!dart.test(html_parser.HtmlOldParser._supportedElements[$contains](node.localName))) {
          return new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$172 || (const$172 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1086, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$171 || (const$171 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        switch (node.localName) {
          case "a":
          {
            return new src__widgets__gesture_detector.GestureDetector.new({child: src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$175 || (const$175 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1093, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$174 || (const$174 = dart.constList([const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1094, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: this.linkStyle}), onTap: dart.fn(() => {
                if (dart.test(node.attributes[$containsKey]("href")) && this.onLinkTap != null) {
                  let url = node.attributes[$_get]("href");
                  this.onLinkTap(url);
                }
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1091, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$178 || (const$178 = dart.constList([const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1092, column: 15, name: "child"}))), const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1098, column: 15, name: "onTap"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "abbr":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1106, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$181 || (const$181 = dart.constList([const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1107, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$183 || (const$183 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, decorationStyle: ui$.TextDecorationStyle.dotted})))});
          }
          case "acronym":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1116, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$185 || (const$185 = dart.constList([const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1117, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$187 || (const$187 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, decorationStyle: ui$.TextDecorationStyle.dotted})))});
          }
          case "address":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1126, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$189 || (const$189 = dart.constList([const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1127, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$191 || (const$191 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "article":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1136, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$194 || (const$194 = dart.constList([const$192 || (const$192 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1137, column: 15, name: "crossAxisAlignment"}))), const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1138, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1134, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$198 || (const$198 = dart.constList([const$196 || (const$196 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1135, column: 13, name: "width"}))), const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1136, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "aside":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$203 || (const$203 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1144, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$202 || (const$202 = dart.constList([const$200 || (const$200 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1145, column: 15, name: "crossAxisAlignment"}))), const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1146, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1142, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$206 || (const$206 = dart.constList([const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1143, column: 13, name: "width"}))), const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1144, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "b":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1151, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$209 || (const$209 = dart.constList([const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1152, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$211 || (const$211 = dart.const(new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold})))});
          }
          case "bdi":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1159, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$213 || (const$213 = dart.constList([const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1160, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "bdo":
          {
            if (node.attributes[$_get]("dir") != null) {
              return new src__widgets__basic.Directionality.new({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$217 || (const$217 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1165, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$216 || (const$216 = dart.constList([const$215 || (const$215 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1166, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), textDirection: node.attributes[$_get]("dir") === "rtl" ? ui$.TextDirection.rtl : ui$.TextDirection.ltr, $creationLocationd_0dea112b090073317d4: const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1164, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$220 || (const$220 = dart.constList([const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1165, column: 15, name: "child"}))), const$219 || (const$219 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1168, column: 15, name: "textDirection"})))], src__widgets__widget_inspector._Location))})))});
            }
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1174, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$223 || (const$223 = dart.constList([const$222 || (const$222 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1175, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "big":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$227 || (const$227 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1179, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$226 || (const$226 = dart.constList([const$225 || (const$225 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1180, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$228 || (const$228 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 20.0})))});
          }
          case "blockquote":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(40.0, this.blockSpacing, 40.0, this.blockSpacing), child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$232 || (const$232 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1192, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$231 || (const$231 = dart.constList([const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1193, column: 17, name: "crossAxisAlignment"}))), const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1194, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$236 || (const$236 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1190, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$235 || (const$235 = dart.constList([const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1191, column: 15, name: "width"}))), const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1192, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$240 || (const$240 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1187, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$239 || (const$239 = dart.constList([const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1188, column: 13, name: "padding"}))), const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1190, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "body":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$244 || (const$244 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1201, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$243 || (const$243 = dart.constList([const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1202, column: 15, name: "crossAxisAlignment"}))), const$242 || (const$242 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1203, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$248 || (const$248 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1199, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$247 || (const$247 = dart.constList([const$245 || (const$245 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1200, column: 13, name: "width"}))), const$246 || (const$246 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1201, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "br":
          {
            if (dart.test(this[_isNotFirstBreakTag](node))) {
              return new src__widgets__container.Container.new({width: this.width, height: this.blockSpacing, $creationLocationd_0dea112b090073317d4: const$252 || (const$252 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1208, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$251 || (const$251 = dart.constList([const$249 || (const$249 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1208, column: 30, name: "width"}))), const$250 || (const$250 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1208, column: 44, name: "height"})))], src__widgets__widget_inspector._Location))})))});
            }
            return new src__widgets__container.Container.new({width: this.width, $creationLocationd_0dea112b090073317d4: const$255 || (const$255 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1210, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$254 || (const$254 = dart.constList([const$253 || (const$253 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1210, column: 28, name: "width"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "caption":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, alignment: src__rendering__wrap.WrapAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$260 || (const$260 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1214, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$259 || (const$259 = dart.constList([const$256 || (const$256 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1215, column: 15, name: "crossAxisAlignment"}))), const$257 || (const$257 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1216, column: 15, name: "alignment"}))), const$258 || (const$258 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1217, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$264 || (const$264 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1212, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$263 || (const$263 = dart.constList([const$261 || (const$261 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1213, column: 13, name: "width"}))), const$262 || (const$262 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1214, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "center":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), alignment: src__rendering__wrap.WrapAlignment.center, $creationLocationd_0dea112b090073317d4: const$269 || (const$269 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1223, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$268 || (const$268 = dart.constList([const$265 || (const$265 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1224, column: 17, name: "crossAxisAlignment"}))), const$266 || (const$266 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1225, column: 17, name: "children"}))), const$267 || (const$267 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1226, column: 17, name: "alignment"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$273 || (const$273 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1221, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$272 || (const$272 = dart.constList([const$270 || (const$270 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1222, column: 15, name: "width"}))), const$271 || (const$271 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1223, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "cite":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$276 || (const$276 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1230, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$275 || (const$275 = dart.constList([const$274 || (const$274 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1231, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$277 || (const$277 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "code":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$280 || (const$280 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1239, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$279 || (const$279 = dart.constList([const$278 || (const$278 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1240, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$281 || (const$281 = dart.const(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"})))});
          }
          case "data":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$284 || (const$284 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1247, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$283 || (const$283 = dart.constList([const$282 || (const$282 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1248, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "dd":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: 40.0}), child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$288 || (const$288 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1255, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$287 || (const$287 = dart.constList([const$285 || (const$285 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1256, column: 19, name: "crossAxisAlignment"}))), const$286 || (const$286 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1257, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$292 || (const$292 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1253, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$291 || (const$291 = dart.constList([const$289 || (const$289 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1254, column: 17, name: "width"}))), const$290 || (const$290 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1255, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$296 || (const$296 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1251, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$295 || (const$295 = dart.constList([const$293 || (const$293 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1252, column: 15, name: "padding"}))), const$294 || (const$294 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1253, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "del":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$299 || (const$299 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1262, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$298 || (const$298 = dart.constList([const$297 || (const$297 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1263, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$300 || (const$300 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.lineThrough})))});
          }
          case "dfn":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$303 || (const$303 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1271, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$302 || (const$302 = dart.constList([const$301 || (const$301 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1272, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$304 || (const$304 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "div":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$308 || (const$308 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1281, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$307 || (const$307 = dart.constList([const$305 || (const$305 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1282, column: 15, name: "crossAxisAlignment"}))), const$306 || (const$306 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1283, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$312 || (const$312 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1279, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$311 || (const$311 = dart.constList([const$309 || (const$309 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1280, column: 13, name: "width"}))), const$310 || (const$310 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1281, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "dl":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: this.blockSpacing, bottom: this.blockSpacing}), child: new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$316 || (const$316 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1289, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$315 || (const$315 = dart.constList([const$313 || (const$313 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1290, column: 17, name: "children"}))), const$314 || (const$314 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1291, column: 17, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$320 || (const$320 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1287, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$319 || (const$319 = dart.constList([const$317 || (const$317 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1288, column: 15, name: "padding"}))), const$318 || (const$318 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1289, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "dt":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$323 || (const$323 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1294, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$322 || (const$322 = dart.constList([const$321 || (const$321 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1295, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "em":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$326 || (const$326 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1299, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$325 || (const$325 = dart.constList([const$324 || (const$324 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1300, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$327 || (const$327 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "figcaption":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$330 || (const$330 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1307, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$329 || (const$329 = dart.constList([const$328 || (const$328 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1308, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "figure":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(40.0, this.blockSpacing, 40.0, this.blockSpacing), child: new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, $creationLocationd_0dea112b090073317d4: const$334 || (const$334 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1314, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$333 || (const$333 = dart.constList([const$331 || (const$331 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1315, column: 17, name: "children"}))), const$332 || (const$332 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1316, column: 17, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$338 || (const$338 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1311, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$337 || (const$337 = dart.constList([const$335 || (const$335 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1312, column: 15, name: "padding"}))), const$336 || (const$336 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1314, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "font":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$341 || (const$341 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1319, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$340 || (const$340 = dart.constList([const$339 || (const$339 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1320, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "footer":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$345 || (const$345 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1325, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$344 || (const$344 = dart.constList([const$342 || (const$342 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1326, column: 15, name: "crossAxisAlignment"}))), const$343 || (const$343 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1327, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$349 || (const$349 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1323, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$348 || (const$348 = dart.constList([const$346 || (const$346 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1324, column: 13, name: "width"}))), const$347 || (const$347 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1325, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "h1":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$353 || (const$353 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1334, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$352 || (const$352 = dart.constList([const$350 || (const$350 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1335, column: 17, name: "crossAxisAlignment"}))), const$351 || (const$351 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1336, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$357 || (const$357 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1332, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$356 || (const$356 = dart.constList([const$354 || (const$354 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1333, column: 15, name: "width"}))), const$355 || (const$355 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1334, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$358 || (const$358 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 28.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "h2":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$362 || (const$362 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1348, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$361 || (const$361 = dart.constList([const$359 || (const$359 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1349, column: 17, name: "crossAxisAlignment"}))), const$360 || (const$360 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1350, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$366 || (const$366 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1346, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$365 || (const$365 = dart.constList([const$363 || (const$363 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1347, column: 15, name: "width"}))), const$364 || (const$364 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1348, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$367 || (const$367 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 21.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "h3":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$371 || (const$371 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1362, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$370 || (const$370 = dart.constList([const$368 || (const$368 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1363, column: 17, name: "crossAxisAlignment"}))), const$369 || (const$369 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1364, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$375 || (const$375 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1360, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$374 || (const$374 = dart.constList([const$372 || (const$372 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1361, column: 15, name: "width"}))), const$373 || (const$373 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1362, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$376 || (const$376 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 16.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "h4":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$380 || (const$380 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1376, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$379 || (const$379 = dart.constList([const$377 || (const$377 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1377, column: 17, name: "crossAxisAlignment"}))), const$378 || (const$378 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1378, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$384 || (const$384 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1374, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$383 || (const$383 = dart.constList([const$381 || (const$381 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1375, column: 15, name: "width"}))), const$382 || (const$382 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1376, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$385 || (const$385 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 14.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "h5":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$389 || (const$389 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1390, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$388 || (const$388 = dart.constList([const$386 || (const$386 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1391, column: 17, name: "crossAxisAlignment"}))), const$387 || (const$387 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1392, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$393 || (const$393 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1388, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$392 || (const$392 = dart.constList([const$390 || (const$390 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1389, column: 15, name: "width"}))), const$391 || (const$391 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1390, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$394 || (const$394 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 12.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "h6":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$398 || (const$398 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1404, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$397 || (const$397 = dart.constList([const$395 || (const$395 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1405, column: 17, name: "crossAxisAlignment"}))), const$396 || (const$396 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1406, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$402 || (const$402 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1402, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$401 || (const$401 = dart.constList([const$399 || (const$399 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1403, column: 15, name: "width"}))), const$400 || (const$400 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1404, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$403 || (const$403 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui$.FontWeight.bold})))});
          }
          case "header":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$407 || (const$407 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1417, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$406 || (const$406 = dart.constList([const$404 || (const$404 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1418, column: 15, name: "crossAxisAlignment"}))), const$405 || (const$405 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1419, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$411 || (const$411 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1415, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$410 || (const$410 = dart.constList([const$408 || (const$408 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1416, column: 13, name: "width"}))), const$409 || (const$409 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1417, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "hr":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: 7.0, bottom: 7.0}), child: new src__material__divider.Divider.new({height: 1.0, color: src__material__colors.Colors.black38, $creationLocationd_0dea112b090073317d4: const$415 || (const$415 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1425, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$414 || (const$414 = dart.constList([const$412 || (const$412 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1425, column: 28, name: "height"}))), const$413 || (const$413 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1425, column: 41, name: "color"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$419 || (const$419 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1423, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$418 || (const$418 = dart.constList([const$416 || (const$416 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1424, column: 13, name: "padding"}))), const$417 || (const$417 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1425, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "i":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$422 || (const$422 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1429, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$421 || (const$421 = dart.constList([const$420 || (const$420 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1430, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$423 || (const$423 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "img":
          {
            return new src__widgets__basic.Builder.new({builder: dart.fn(context => {
                if (dart.test(this.showImages)) {
                  if (node.attributes[$_get]("src") != null) {
                    if (node.attributes[$_get]("src")[$startsWith]("data:image") && node.attributes[$_get]("src")[$contains]("base64,")) {
                      src__widgets__image.precacheImage(new src__painting__image_provider.MemoryImage.new(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]())), context, {onError: this.onImageError});
                      return new src__widgets__image.Image.memory(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]()), {$creationLocationd_0dea112b090073317d4: const$426 || (const$426 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1449, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$425 || (const$425 = dart.constList([const$424 || (const$424 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1449, column: 48, name: "bytes"})))], src__widgets__widget_inspector._Location))})))});
                    }
                    src__widgets__image.precacheImage(new src__painting__image_provider.NetworkImage.new(node.attributes[$_get]("src")), context, {onError: this.onImageError});
                    return new src__widgets__image.Image.network(node.attributes[$_get]("src"), {$creationLocationd_0dea112b090073317d4: const$429 || (const$429 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1457, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$428 || (const$428 = dart.constList([const$427 || (const$427 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1457, column: 55, name: "src"})))], src__widgets__widget_inspector._Location))})))});
                  } else if (node.attributes[$_get]("alt") != null) {
                    if (node.attributes[$_get]("alt")[$endsWith](" ")) {
                      return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.only({right: 2.0}), child: new src__widgets__text.Text.new(node.attributes[$_get]("alt"), {$creationLocationd_0dea112b090073317d4: const$432 || (const$432 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1463, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$431 || (const$431 = dart.constList([const$430 || (const$430 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1463, column: 52, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$436 || (const$436 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1461, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$435 || (const$435 = dart.constList([const$433 || (const$433 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1462, column: 25, name: "padding"}))), const$434 || (const$434 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1463, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))});
                    } else {
                      return new src__widgets__text.Text.new(node.attributes[$_get]("alt"), {$creationLocationd_0dea112b090073317d4: const$439 || (const$439 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1465, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$438 || (const$438 = dart.constList([const$437 || (const$437 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1465, column: 48, name: "data"})))], src__widgets__widget_inspector._Location))})))});
                    }
                  }
                }
                return new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$441 || (const$441 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1469, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$440 || (const$440 = dart.constList([], src__widgets__widget_inspector._Location))})))});
              }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: const$444 || (const$444 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1437, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$443 || (const$443 = dart.constList([const$442 || (const$442 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1438, column: 13, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "ins":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$447 || (const$447 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1474, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$446 || (const$446 = dart.constList([const$445 || (const$445 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1475, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$448 || (const$448 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline})))});
          }
          case "kbd":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$451 || (const$451 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1483, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$450 || (const$450 = dart.constList([const$449 || (const$449 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1484, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$452 || (const$452 = dart.const(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"})))});
          }
          case "li":
          {
            let type = node.parent.localName;
            let markPadding = const$453 || (const$453 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 4.0})));
            let mark = null;
            switch (type) {
              case "ul":
              {
                mark = new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("•", {$creationLocationd_0dea112b090073317d4: const$456 || (const$456 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1496, column: 39, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$455 || (const$455 = dart.constList([const$454 || (const$454 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1496, column: 44, name: "data"})))], src__widgets__widget_inspector._Location))})))}), padding: markPadding, $creationLocationd_0dea112b090073317d4: const$460 || (const$460 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1496, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$459 || (const$459 = dart.constList([const$457 || (const$457 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1496, column: 32, name: "child"}))), const$458 || (const$458 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1496, column: 50, name: "padding"})))], src__widgets__widget_inspector._Location))})))});
                break;
              }
              case "ol":
              {
                let index = dart.notNull(node.parent.children[$indexOf](node)) + 1;
                mark = new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(dart.str(index) + ".", {$creationLocationd_0dea112b090073317d4: const$463 || (const$463 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 39, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$462 || (const$462 = dart.constList([const$461 || (const$461 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 53, name: "data"})))], src__widgets__widget_inspector._Location))})))}), padding: markPadding, $creationLocationd_0dea112b090073317d4: const$467 || (const$467 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$466 || (const$466 = dart.constList([const$464 || (const$464 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 32, name: "child"}))), const$465 || (const$465 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 56, name: "padding"})))], src__widgets__widget_inspector._Location))})))});
                break;
              }
              default:
              {
                mark = new src__widgets__container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: const$471 || (const$471 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1503, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$470 || (const$470 = dart.constList([const$468 || (const$468 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1503, column: 32, name: "width"}))), const$469 || (const$469 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1503, column: 44, name: "height"})))], src__widgets__widget_inspector._Location))})))});
                break;
              }
            }
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: JSArrayOfWidget().of([mark, new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$475 || (const$475 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1512, column: 17, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$474 || (const$474 = dart.constList([const$472 || (const$472 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1513, column: 21, name: "crossAxisAlignment"}))), const$473 || (const$473 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1514, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$479 || (const$479 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1508, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$478 || (const$478 = dart.constList([const$476 || (const$476 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1509, column: 15, name: "crossAxisAlignment"}))), const$477 || (const$477 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1510, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$483 || (const$483 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1506, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$482 || (const$482 = dart.constList([const$480 || (const$480 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1507, column: 13, name: "width"}))), const$481 || (const$481 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1508, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "main":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$487 || (const$487 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1521, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$486 || (const$486 = dart.constList([const$484 || (const$484 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1522, column: 15, name: "crossAxisAlignment"}))), const$485 || (const$485 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1523, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$491 || (const$491 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1519, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$490 || (const$490 = dart.constList([const$488 || (const$488 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1520, column: 13, name: "width"}))), const$489 || (const$489 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1521, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "mark":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$494 || (const$494 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1528, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$493 || (const$493 = dart.constList([const$492 || (const$492 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1529, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black, background: this[_getPaint](src__material__colors.Colors.yellow)})});
          }
          case "nav":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$498 || (const$498 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1539, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$497 || (const$497 = dart.constList([const$495 || (const$495 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1540, column: 15, name: "crossAxisAlignment"}))), const$496 || (const$496 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1541, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$502 || (const$502 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1537, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$501 || (const$501 = dart.constList([const$499 || (const$499 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1538, column: 13, name: "width"}))), const$500 || (const$500 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1539, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "noscript":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, alignment: src__rendering__wrap.WrapAlignment.start, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$507 || (const$507 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1547, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$506 || (const$506 = dart.constList([const$503 || (const$503 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1548, column: 15, name: "crossAxisAlignment"}))), const$504 || (const$504 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1549, column: 15, name: "alignment"}))), const$505 || (const$505 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1550, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$511 || (const$511 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1545, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$510 || (const$510 = dart.constList([const$508 || (const$508 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1546, column: 13, name: "width"}))), const$509 || (const$509 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1547, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "ol":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$515 || (const$515 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1554, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$514 || (const$514 = dart.constList([const$512 || (const$512 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1555, column: 13, name: "children"}))), const$513 || (const$513 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1556, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "p":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: this.blockSpacing, bottom: this.blockSpacing}), child: new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, alignment: src__rendering__wrap.WrapAlignment.start, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$520 || (const$520 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1563, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$519 || (const$519 = dart.constList([const$516 || (const$516 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1564, column: 17, name: "crossAxisAlignment"}))), const$517 || (const$517 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1565, column: 17, name: "alignment"}))), const$518 || (const$518 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1566, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$524 || (const$524 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1561, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$523 || (const$523 = dart.constList([const$521 || (const$521 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1562, column: 15, name: "width"}))), const$522 || (const$522 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1563, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$528 || (const$528 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1559, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$527 || (const$527 = dart.constList([const$525 || (const$525 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1560, column: 13, name: "padding"}))), const$526 || (const$526 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1561, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "pre":
          {
            return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.all(this.blockSpacing), child: src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__text.Text.new(node.innerHtml, {$creationLocationd_0dea112b090073317d4: const$531 || (const$531 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1574, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$530 || (const$530 = dart.constList([const$529 || (const$529 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1574, column: 32, name: "data"})))], src__widgets__widget_inspector._Location))})))}), style: const$532 || (const$532 = dart.const(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"})))}), $creationLocationd_0dea112b090073317d4: const$536 || (const$536 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1571, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$535 || (const$535 = dart.constList([const$533 || (const$533 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1572, column: 13, name: "padding"}))), const$534 || (const$534 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1573, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "q":
          {
            let children = JSArrayOfWidget().of([]);
            children[$add](new src__widgets__text.Text.new("\"", {$creationLocationd_0dea112b090073317d4: const$539 || (const$539 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1582, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$538 || (const$538 = dart.constList([const$537 || (const$537 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1582, column: 29, name: "data"})))], src__widgets__widget_inspector._Location))})))}));
            children[$addAll](this[_parseNodeList](node.nodes));
            children[$add](new src__widgets__text.Text.new("\"", {$creationLocationd_0dea112b090073317d4: const$542 || (const$542 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1584, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$541 || (const$541 = dart.constList([const$540 || (const$540 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1584, column: 29, name: "data"})))], src__widgets__widget_inspector._Location))})))}));
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: children, $creationLocationd_0dea112b090073317d4: const$545 || (const$545 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1586, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$544 || (const$544 = dart.constList([const$543 || (const$543 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1587, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$546 || (const$546 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
          case "rp":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$549 || (const$549 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1594, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$548 || (const$548 = dart.constList([const$547 || (const$547 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1595, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "rt":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$552 || (const$552 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1598, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$551 || (const$551 = dart.constList([const$550 || (const$550 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1599, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "ruby":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$555 || (const$555 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1602, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$554 || (const$554 = dart.constList([const$553 || (const$553 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1603, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "s":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$558 || (const$558 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1607, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$557 || (const$557 = dart.constList([const$556 || (const$556 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1608, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$559 || (const$559 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.lineThrough})))});
          }
          case "samp":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$562 || (const$562 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1616, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$561 || (const$561 = dart.constList([const$560 || (const$560 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1617, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$563 || (const$563 = dart.const(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"})))});
          }
          case "section":
          {
            return new src__widgets__container.Container.new({width: this.width, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$567 || (const$567 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1626, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$566 || (const$566 = dart.constList([const$564 || (const$564 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1627, column: 15, name: "crossAxisAlignment"}))), const$565 || (const$565 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1628, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$571 || (const$571 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1624, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$570 || (const$570 = dart.constList([const$568 || (const$568 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1625, column: 13, name: "width"}))), const$569 || (const$569 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1626, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "small":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$574 || (const$574 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1633, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$573 || (const$573 = dart.constList([const$572 || (const$572 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1634, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$575 || (const$575 = dart.const(new src__painting__text_style.TextStyle.new({fontSize: 10.0})))});
          }
          case "span":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$578 || (const$578 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1641, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$577 || (const$577 = dart.constList([const$576 || (const$576 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1642, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "strike":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$581 || (const$581 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1646, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$580 || (const$580 = dart.constList([const$579 || (const$579 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1647, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$582 || (const$582 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.lineThrough})))});
          }
          case "strong":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$585 || (const$585 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1655, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$584 || (const$584 = dart.constList([const$583 || (const$583 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1656, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$586 || (const$586 = dart.const(new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold})))});
          }
          case "sub":
          case "sup":
          {
            return new src__widgets__basic.Builder.new({builder: dart.fn(context => {
                let parent = src__widgets__text.DefaultTextStyle.of(context);
                let parentStyle = parent.style;
                let painter = new src__painting__text_painter.TextPainter.new({text: new src__painting__text_span.TextSpan.new({text: node.text, style: parentStyle}), textDirection: ui$.TextDirection.ltr});
                painter.layout();
                let height = dart.notNull(painter.size.height) * 1.35;
                painter = new src__painting__text_painter.TextPainter.new({text: new src__painting__text_span.TextSpan.new({text: node.text, style: parentStyle.merge(new src__painting__text_style.TextStyle.new({fontSize: dart.notNull(parentStyle.fontSize) * dart.notNull(html_parser.OFFSET_TAGS_FONT_SIZE_FACTOR)}))}), textDirection: ui$.TextDirection.ltr});
                painter.layout();
                let width = painter.size.width;
                return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: JSArrayOfWidget().of([new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.loose, children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: width, height: height, $creationLocationd_0dea112b090073317d4: const$590 || (const$590 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1707, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$589 || (const$589 = dart.constList([const$587 || (const$587 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1708, column: 25, name: "width"}))), const$588 || (const$588 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1709, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Positioned.new({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$593 || (const$593 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1713, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$592 || (const$592 = dart.constList([const$591 || (const$591 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1713, column: 39, name: "children"})))], src__widgets__widget_inspector._Location))})))}), bottom: node.localName === "sub" ? 0.0 : null, top: node.localName === "sub" ? null : 0.0, $creationLocationd_0dea112b090073317d4: const$598 || (const$598 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1712, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$597 || (const$597 = dart.constList([const$594 || (const$594 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1713, column: 27, name: "child"}))), const$595 || (const$595 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1714, column: 27, name: "bottom"}))), const$596 || (const$596 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1715, column: 27, name: "top"})))], src__widgets__widget_inspector._Location))})))}), style: new src__painting__text_style.TextStyle.new({fontSize: dart.notNull(parentStyle.fontSize) * dart.notNull(html_parser.OFFSET_TAGS_FONT_SIZE_FACTOR)})})]), $creationLocationd_0dea112b090073317d4: const$602 || (const$602 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1702, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$601 || (const$601 = dart.constList([const$599 || (const$599 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1703, column: 21, name: "fit"}))), const$600 || (const$600 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1704, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$606 || (const$606 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1699, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$605 || (const$605 = dart.constList([const$603 || (const$603 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1700, column: 17, name: "crossAxisAlignment"}))), const$604 || (const$604 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1701, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))})});
              }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: const$609 || (const$609 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1665, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$608 || (const$608 = dart.constList([const$607 || (const$607 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1665, column: 26, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "table":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$613 || (const$613 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1728, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$612 || (const$612 = dart.constList([const$610 || (const$610 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1729, column: 13, name: "children"}))), const$611 || (const$611 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1730, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "tbody":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$617 || (const$617 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1733, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$616 || (const$616 = dart.constList([const$614 || (const$614 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1734, column: 13, name: "children"}))), const$615 || (const$615 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1735, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "td":
          {
            let colspan = 1;
            if (node.attributes[$_get]("colspan") != null) {
              colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
            }
            return new src__widgets__basic.Expanded.new({flex: colspan, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$621 || (const$621 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1744, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$620 || (const$620 = dart.constList([const$618 || (const$618 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1745, column: 15, name: "crossAxisAlignment"}))), const$619 || (const$619 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1746, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$625 || (const$625 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1742, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$624 || (const$624 = dart.constList([const$622 || (const$622 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1743, column: 13, name: "flex"}))), const$623 || (const$623 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1744, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "template":
          {
            return new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$627 || (const$627 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1751, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$626 || (const$626 = dart.constList([], src__widgets__widget_inspector._Location))})))});
          }
          case "tfoot":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$631 || (const$631 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1753, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$630 || (const$630 = dart.constList([const$628 || (const$628 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1754, column: 13, name: "children"}))), const$629 || (const$629 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1755, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "th":
          {
            let colspan = 1;
            if (node.attributes[$_get]("colspan") != null) {
              colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
            }
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Expanded.new({flex: colspan, child: new src__widgets__basic.Wrap.new({crossAxisAlignment: src__rendering__wrap.WrapCrossAlignment.center, alignment: src__rendering__wrap.WrapAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$636 || (const$636 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1765, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$635 || (const$635 = dart.constList([const$632 || (const$632 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1766, column: 17, name: "crossAxisAlignment"}))), const$633 || (const$633 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1767, column: 17, name: "alignment"}))), const$634 || (const$634 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1768, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$640 || (const$640 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1763, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$639 || (const$639 = dart.constList([const$637 || (const$637 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1764, column: 15, name: "flex"}))), const$638 || (const$638 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1765, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), style: const$641 || (const$641 = dart.const(new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold})))});
          }
          case "thead":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$645 || (const$645 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1776, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$644 || (const$644 = dart.constList([const$642 || (const$642 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1777, column: 13, name: "children"}))), const$643 || (const$643 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1778, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "time":
          {
            return new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$648 || (const$648 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1781, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$647 || (const$647 = dart.constList([const$646 || (const$646 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1782, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "tr":
          {
            return new src__widgets__basic.Row.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, $creationLocationd_0dea112b090073317d4: const$652 || (const$652 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1785, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$651 || (const$651 = dart.constList([const$649 || (const$649 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1786, column: 13, name: "children"}))), const$650 || (const$650 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1787, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "tt":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$655 || (const$655 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1791, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$654 || (const$654 = dart.constList([const$653 || (const$653 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1792, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$656 || (const$656 = dart.const(new src__painting__text_style.TextStyle.new({fontFamily: "monospace"})))});
          }
          case "u":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$659 || (const$659 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1800, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$658 || (const$658 = dart.constList([const$657 || (const$657 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1801, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$660 || (const$660 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline})))});
          }
          case "ul":
          {
            return new src__widgets__basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: const$664 || (const$664 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1808, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$663 || (const$663 = dart.constList([const$661 || (const$661 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1809, column: 13, name: "children"}))), const$662 || (const$662 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1810, column: 13, name: "crossAxisAlignment"})))], src__widgets__widget_inspector._Location))})))});
          }
          case "var":
          {
            return src__widgets__text.DefaultTextStyle.merge({child: new src__widgets__basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: const$667 || (const$667 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1814, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$666 || (const$666 = dart.constList([const$665 || (const$665 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1815, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), style: const$668 || (const$668 = dart.const(new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.italic})))});
          }
        }
      } else if (dom$.Text.is(node)) {
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") === -1) {
          return new src__widgets__basic.Wrap.new({$creationLocationd_0dea112b090073317d4: const$670 || (const$670 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1825, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$669 || (const$669 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") !== -1) {
          node.text = " ";
        }
        let finalText = this.trimStringHtml(node.text);
        if (finalText[$endsWith](" ")) {
          return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.only({right: 2.0}), child: new src__widgets__text.Text.new(finalText, {$creationLocationd_0dea112b090073317d4: const$673 || (const$673 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1835, column: 58, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$672 || (const$672 = dart.constList([const$671 || (const$671 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1835, column: 63, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$677 || (const$677 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1834, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$676 || (const$676 = dart.constList([const$674 || (const$674 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1835, column: 13, name: "padding"}))), const$675 || (const$675 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1835, column: 51, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        } else {
          return new src__widgets__text.Text.new(finalText, {$creationLocationd_0dea112b090073317d4: const$680 || (const$680 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1837, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$679 || (const$679 = dart.constList([const$678 || (const$678 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1837, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))});
        }
      }
      return new src__widgets__basic.Wrap.new({$creationLocationd_0dea112b090073317d4: const$682 || (const$682 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1840, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/html_parser.dart", parameterLocations: const$681 || (const$681 = dart.constList([], src__widgets__widget_inspector._Location))})))});
    }
    [_parseNodeList](nodeList) {
      return nodeList[$map](src__widgets__framework.Widget, dart.fn(node => this[_parseNode](node), NodeToWidget()))[$toList]();
    }
    [_getPaint](color) {
      let paint = new ui$.Paint.new();
      paint.color = color;
      return paint;
    }
    trimStringHtml(stringToTrim) {
      stringToTrim = stringToTrim[$replaceAll]("\n", "");
      while (stringToTrim[$indexOf]("  ") !== -1) {
        stringToTrim = stringToTrim[$replaceAll]("  ", " ");
      }
      return stringToTrim;
    }
    [_isNotFirstBreakTag](node) {
      let index = node.parentNode.nodes[$indexOf](node);
      if (index === 0) {
        if (node.parentNode == null) {
          return false;
        }
        return this[_isNotFirstBreakTag](node.parentNode);
      } else if (dom$.Element.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom$.Element.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).localName === "br") {
          return true;
        }
        return false;
      } else if (dom$.Text.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom$.Text.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).text[$trim]() === "") {
          return this[_isNotFirstBreakTag](node.parentNode.nodes._get(dart.notNull(index) - 1));
        } else {
          return false;
        }
      }
      return false;
    }
  };
  (html_parser.HtmlOldParser.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let customRender = opts && 'customRender' in opts ? opts.customRender : null;
    let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : null;
    let html = opts && 'html' in opts ? opts.html : null;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : const$166 || (const$166 = dart.const(new src__painting__text_style.TextStyle.new({decoration: ui$.TextDecoration.underline, color: src__material__colors.Colors.blueAccent, decorationColor: src__material__colors.Colors.blueAccent})));
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[width$0] = width;
    this[onLinkTap$0] = onLinkTap;
    this[renderNewlines$0] = renderNewlines;
    this[customRender$] = customRender;
    this[blockSpacing$] = blockSpacing;
    this[html$0] = html;
    this[onImageError$0] = onImageError;
    this[linkStyle$0] = linkStyle;
    this[showImages$0] = showImages;
    html_parser.HtmlOldParser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.HtmlOldParser.prototype;
  dart.addTypeTests(html_parser.HtmlOldParser);
  const width$0 = Symbol("HtmlOldParser.width");
  const onLinkTap$0 = Symbol("HtmlOldParser.onLinkTap");
  const renderNewlines$0 = Symbol("HtmlOldParser.renderNewlines");
  const customRender$ = Symbol("HtmlOldParser.customRender");
  const blockSpacing$ = Symbol("HtmlOldParser.blockSpacing");
  const html$0 = Symbol("HtmlOldParser.html");
  const onImageError$0 = Symbol("HtmlOldParser.onImageError");
  const linkStyle$0 = Symbol("HtmlOldParser.linkStyle");
  const showImages$0 = Symbol("HtmlOldParser.showImages");
  dart.setMethodSignature(html_parser.HtmlOldParser, () => ({
    __proto__: dart.getMethods(html_parser.HtmlOldParser.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    parse: dart.fnType(core.List$(src__widgets__framework.Widget), [core.String]),
    [_parseNode]: dart.fnType(src__widgets__framework.Widget, [dom$.Node]),
    [_parseNodeList]: dart.fnType(core.List$(src__widgets__framework.Widget), [core.List$(dom$.Node)]),
    [_getPaint]: dart.fnType(ui$.Paint, [ui$.Color]),
    trimStringHtml: dart.fnType(core.String, [core.String]),
    [_isNotFirstBreakTag]: dart.fnType(core.bool, [dom$.Node])
  }));
  dart.setLibraryUri(html_parser.HtmlOldParser, "package:tap_hero_web/html_parser.dart");
  dart.setFieldSignature(html_parser.HtmlOldParser, () => ({
    __proto__: dart.getFields(html_parser.HtmlOldParser.__proto__),
    width: dart.finalFieldType(core.double),
    onLinkTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    renderNewlines: dart.finalFieldType(core.bool),
    customRender: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [dom$.Node, core.List$(src__widgets__framework.Widget)])),
    blockSpacing: dart.finalFieldType(core.double),
    html: dart.finalFieldType(core.String),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    showImages: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(html_parser.HtmlOldParser, {
    /*html_parser.HtmlOldParser._supportedElements*/get _supportedElements() {
      return dart.constList(["a", "abbr", "acronym", "address", "article", "aside", "b", "bdi", "bdo", "big", "blockquote", "body", "br", "caption", "cite", "center", "code", "data", "dd", "del", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "font", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "nav", "noscript", "ol", "p", "pre", "q", "rp", "rt", "ruby", "s", "samp", "section", "small", "span", "strike", "strong", "sub", "sup", "table", "tbody", "td", "template", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var"], core.String);
    }
  });
  dart.defineLazy(html_parser, {
    /*html_parser.OFFSET_TAGS_FONT_SIZE_FACTOR*/get OFFSET_TAGS_FONT_SIZE_FACTOR() {
      return 0.7;
    }
  });
  dart.trackLibraries("packages/tap_hero_web/html_parser", {
    "package:tap_hero_web/html_parser.dart": html_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/html_parser.dart"],"names":[],"mappings":"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AM,KAAD,KAAI;AACX,YAAI,AAAK,AAAW,IAAZ,eAAe;AACrB,gBAAO;;AAET,cAAO,2BAAoB,AAAK,IAAD;YAC1B,KAAqC,gBAAjC,AAAK,AAAW,AAAK,IAAjB,uBAAwB,aAAN,KAAK,IAAG;AACvC,YAAsC,AAAgB,AAAU,gBAA3D,AAAK,AAAW,AAAK,IAAjB,uBAAwB,aAAN,KAAK,IAAG,kBAAgC;AACjE,gBAAO;;AAET,cAAO;YACF,KAAqC,aAAjC,AAAK,AAAW,AAAK,IAAjB,uBAAwB,aAAN,KAAK,IAAG;AACvC,YAAsC,AAAa,AAAK,AAAO,aAA1D,AAAK,AAAW,AAAK,IAAjB,uBAAwB,aAAN,KAAK,IAAG,sBAA+B;AAChE,gBAAO,2BAAoB,AAAK,AAAW,AAAK,IAAjB,uBAAwB,aAAN,KAAK,IAAG;;AAEzD,gBAAO;;;AAGX,YAAO;IACT;;;QAl6BiB;QACV;QACA,0EAAiB;QACjB;QACA;QACA;QACA;QACA,2DAAkB,8FACQ,qCACb,0DACU;QACvB,8DAAa;;IAXH;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IAIA;AAZP;;EAaE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAYW,4CAAkB;YAAG,iBAChC,KACA,QACA,WACA,WACA,WACA,SACA,KACA,OACA,OACA,OACA,cACA,QACA,MACA,WACA,QACA,UACA,QACA,QACA,MACA,OACA,OACA,OACA,MACA,MACA,MACA,cACA,UACA,QACA,UACA,MACA,MACA,MACA,MACA,MACA,MACA,UACA,MACA,KACA,OACA,OACA,OACA,MACA,QACA,QACA,OACA,YACA,MACA,KACA,OACA,KACA,MACA,MACA,QACA,KACA,QACA,WACA,SACA,QACA,UACA,UACA,OACA,OACA,SACA,SACA,MACA,YACA,SACA,MACA,SACA,QACA,MACA,MACA,KACA,MACA;;;;MA3gCE,wCAA4B;YAClC","file":"html_parser.ddc.js"}');
  // Exports:
  return {
    html_parser: html_parser
  };
});

//# sourceMappingURL=html_parser.ddc.js.map
