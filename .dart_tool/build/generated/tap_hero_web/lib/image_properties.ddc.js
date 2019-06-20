define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__alignment = animation.src__painting__alignment;
  const src__painting__box_fit = animation.src__painting__box_fit;
  const src__painting__decoration_image = animation$.src__painting__decoration_image;
  const ui$ = ui.ui;
  const image_properties = Object.create(dart.library);
  image_properties.ImageProperties = class ImageProperties extends core.Object {
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get excludeFromSemantics() {
      return this[excludeFromSemantics$];
    }
    set excludeFromSemantics(value) {
      super.excludeFromSemantics = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get colorBlendMode() {
      return this[colorBlendMode$];
    }
    set colorBlendMode(value) {
      super.colorBlendMode = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get centerSlice() {
      return this[centerSlice$];
    }
    set centerSlice(value) {
      super.centerSlice = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
  };
  (image_properties.ImageProperties.new = function(opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : src__painting__alignment.Alignment.center;
    let repeat = opts && 'repeat' in opts ? opts.repeat : src__painting__decoration_image.ImageRepeat.noRepeat;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : ui$.FilterQuality.low;
    this[scale$] = scale;
    this[semanticLabel$] = semanticLabel;
    this[excludeFromSemantics$] = excludeFromSemantics;
    this[width$] = width;
    this[height$] = height;
    this[color$] = color;
    this[colorBlendMode$] = colorBlendMode;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[repeat$] = repeat;
    this[centerSlice$] = centerSlice;
    this[matchTextDirection$] = matchTextDirection;
    this[filterQuality$] = filterQuality;
    ;
  }).prototype = image_properties.ImageProperties.prototype;
  dart.addTypeTests(image_properties.ImageProperties);
  const semanticLabel$ = Symbol("ImageProperties.semanticLabel");
  const excludeFromSemantics$ = Symbol("ImageProperties.excludeFromSemantics");
  const width$ = Symbol("ImageProperties.width");
  const height$ = Symbol("ImageProperties.height");
  const color$ = Symbol("ImageProperties.color");
  const colorBlendMode$ = Symbol("ImageProperties.colorBlendMode");
  const fit$ = Symbol("ImageProperties.fit");
  const alignment$ = Symbol("ImageProperties.alignment");
  const repeat$ = Symbol("ImageProperties.repeat");
  const centerSlice$ = Symbol("ImageProperties.centerSlice");
  const matchTextDirection$ = Symbol("ImageProperties.matchTextDirection");
  const filterQuality$ = Symbol("ImageProperties.filterQuality");
  const scale$ = Symbol("ImageProperties.scale");
  dart.setLibraryUri(image_properties.ImageProperties, "package:tap_hero_web/image_properties.dart");
  dart.setFieldSignature(image_properties.ImageProperties, () => ({
    __proto__: dart.getFields(image_properties.ImageProperties.__proto__),
    semanticLabel: dart.finalFieldType(core.String),
    excludeFromSemantics: dart.finalFieldType(core.bool),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui$.Color),
    colorBlendMode: dart.finalFieldType(ui$.BlendMode),
    fit: dart.finalFieldType(src__painting__box_fit.BoxFit),
    alignment: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    repeat: dart.finalFieldType(src__painting__decoration_image.ImageRepeat),
    centerSlice: dart.finalFieldType(ui$.Rect),
    matchTextDirection: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui$.FilterQuality),
    scale: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/tap_hero_web/image_properties", {
    "package:tap_hero_web/image_properties.dart": image_properties
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/image_properties.dart"],"names":[],"mappings":";;;;;;;;;;;IAIe;;;;;;IACF;;;;;;IACE;;;;;;IACA;;;;;;IACD;;;;;;IACI;;;;;;IACH;;;;;;IACW;;;;;;IACN;;;;;;IACP;;;;;;IACA;;;;;;IACS;;;;;;IACP;;;;;;;;QAGN,+CAAQ;QACR;QACA,4FAAuB;QACvB;QACA;QACA;QACA;QACA;QACA,2DAAsB;QACtB,kDAAqB;QACrB;QACA,sFAAqB;QACrB,uEAA8B;IAZ9B;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"image_properties.ddc.js"}');
  // Exports:
  return {
    image_properties: image_properties
  };
});

//# sourceMappingURL=image_properties.ddc.js.map
