define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__style__posix = Object.create(dart.library);
  const src__internal_style = Object.create(dart.library);
  const src__style = Object.create(dart.library);
  const src__style__windows = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__characters = Object.create(dart.library);
  const src__parsed_path = Object.create(dart.library);
  const src__style__url = Object.create(dart.library);
  const src__context = Object.create(dart.library);
  const path$ = Object.create(dart.library);
  const src__path_set = Object.create(dart.library);
  const src__path_map = Object.create(dart.library);
  const src__path_exception = Object.create(dart.library);
  const $contains = dartx.contains;
  const $isNotEmpty = dartx.isNotEmpty;
  const $codeUnitAt = dartx.codeUnitAt;
  const $isEmpty = dartx.isEmpty;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $endsWith = dartx.endsWith;
  const $indexOf = dartx.indexOf;
  const $startsWith = dartx.startsWith;
  const $replaceFirst = dartx.replaceFirst;
  const $replaceAll = dartx.replaceAll;
  const $split = dartx.split;
  const $where = dartx.where;
  const $last = dartx.last;
  const $insert = dartx.insert;
  const $first = dartx.first;
  const $length = dartx.length;
  const $toLowerCase = dartx.toLowerCase;
  const $removeLast = dartx.removeLast;
  const $_set = dartx._set;
  const $insertAll = dartx.insertAll;
  const $lastWhere = dartx.lastWhere;
  const $lastIndexOf = dartx.lastIndexOf;
  const $toList = dartx.toList;
  const $codeUnits = dartx.codeUnits;
  const $removeAt = dartx.removeAt;
  const $take = dartx.take;
  const $map = dartx.map;
  const $join = dartx.join;
  const $iterator = dartx.iterator;
  const $cast = dartx.cast;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let const$;
  src__style.Style = class Style extends core.Object {
    static _getPlatformStyle() {
      if (core.Uri.base.scheme !== "file") return src__style.Style.url;
      if (!core.Uri.base.path[$endsWith]("/")) return src__style.Style.url;
      if (core._Uri.new({path: "a/b"}).toFilePath() === "a\\b") return src__style.Style.windows;
      return src__style.Style.posix;
    }
    get context() {
      return src__context.Context.new({style: this});
    }
    toString() {
      return this.name;
    }
  };
  (src__style.Style.new = function() {
    ;
  }).prototype = src__style.Style.prototype;
  dart.addTypeTests(src__style.Style);
  dart.setGetterSignature(src__style.Style, () => ({
    __proto__: dart.getGetters(src__style.Style.__proto__),
    context: src__context.Context
  }));
  dart.setLibraryUri(src__style.Style, "package:path/src/style.dart");
  dart.defineExtensionMethods(src__style.Style, ['toString']);
  dart.defineLazy(src__style.Style, {
    /*src__style.Style.posix*/get posix() {
      return new src__style__posix.PosixStyle.new();
    },
    /*src__style.Style.windows*/get windows() {
      return new src__style__windows.WindowsStyle.new();
    },
    /*src__style.Style.url*/get url() {
      return new src__style__url.UrlStyle.new();
    },
    /*src__style.Style.platform*/get platform() {
      return src__style.Style._getPlatformStyle();
    }
  });
  src__internal_style.InternalStyle = class InternalStyle extends src__style.Style {
    getRoot(path) {
      let length = this.rootLength(path);
      if (dart.notNull(length) > 0) return path[$substring](0, length);
      return dart.test(this.isRootRelative(path)) ? path[$_get](0) : null;
    }
    relativePathToUri(path) {
      let segments = this.context.split(path);
      if (dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) segments[$add]("");
      return core._Uri.new({pathSegments: segments});
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      return codeUnit1 == codeUnit2;
    }
    pathsEqual(path1, path2) {
      return path1 == path2;
    }
    canonicalizeCodeUnit(codeUnit) {
      return codeUnit;
    }
    canonicalizePart(part) {
      return part;
    }
  };
  (src__internal_style.InternalStyle.new = function() {
    ;
  }).prototype = src__internal_style.InternalStyle.prototype;
  dart.addTypeTests(src__internal_style.InternalStyle);
  dart.setMethodSignature(src__internal_style.InternalStyle, () => ({
    __proto__: dart.getMethods(src__internal_style.InternalStyle.__proto__),
    getRoot: dart.fnType(core.String, [core.String]),
    relativePathToUri: dart.fnType(core.Uri, [core.String]),
    codeUnitsEqual: dart.fnType(core.bool, [core.int, core.int]),
    pathsEqual: dart.fnType(core.bool, [core.String, core.String]),
    canonicalizeCodeUnit: dart.fnType(core.int, [core.int]),
    canonicalizePart: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(src__internal_style.InternalStyle, "package:path/src/internal_style.dart");
  src__style__posix.PosixStyle = class PosixStyle extends src__internal_style.InternalStyle {
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit == src__characters.SLASH;
    }
    needsSeparator(path) {
      return path[$isNotEmpty] && !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      return 0;
    }
    isRootRelative(path) {
      return false;
    }
    getRelativeRoot(path) {
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme === "" || uri.scheme === "file") {
        return core.Uri.decodeComponent(uri.path);
      }
      dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
    }
    absolutePathToUri(path) {
      let parsed = src__parsed_path.ParsedPath.parse(path, this);
      if (dart.test(parsed.parts[$isEmpty])) {
        parsed.parts[$addAll](JSArrayOfString().of(["", ""]));
      } else if (dart.test(parsed.hasTrailingSeparator)) {
        parsed.parts[$add]("");
      }
      return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
    }
  };
  (src__style__posix.PosixStyle.new = function() {
    this[name] = "posix";
    this[separator] = "/";
    this[separators] = const$ || (const$ = dart.constList(["/"], core.String));
    this[separatorPattern] = core.RegExp.new("/");
    this[needsSeparatorPattern] = core.RegExp.new("[^/]$");
    this[rootPattern] = core.RegExp.new("^/");
    this[relativeRootPattern] = null;
    ;
  }).prototype = src__style__posix.PosixStyle.prototype;
  dart.addTypeTests(src__style__posix.PosixStyle);
  const name = Symbol("PosixStyle.name");
  const separator = Symbol("PosixStyle.separator");
  const separators = Symbol("PosixStyle.separators");
  const separatorPattern = Symbol("PosixStyle.separatorPattern");
  const needsSeparatorPattern = Symbol("PosixStyle.needsSeparatorPattern");
  const rootPattern = Symbol("PosixStyle.rootPattern");
  const relativeRootPattern = Symbol("PosixStyle.relativeRootPattern");
  dart.setMethodSignature(src__style__posix.PosixStyle, () => ({
    __proto__: dart.getMethods(src__style__posix.PosixStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(src__style__posix.PosixStyle, "package:path/src/style/posix.dart");
  dart.setFieldSignature(src__style__posix.PosixStyle, () => ({
    __proto__: dart.getFields(src__style__posix.PosixStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  let const$0;
  src__style__windows.WindowsStyle = class WindowsStyle extends src__internal_style.InternalStyle {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit == src__characters.SLASH || codeUnit == src__characters.BACKSLASH;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      return !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (path[$codeUnitAt](0) === src__characters.SLASH) return 1;
      if (path[$codeUnitAt](0) === src__characters.BACKSLASH) {
        if (path.length < 2 || path[$codeUnitAt](1) !== src__characters.BACKSLASH) return 1;
        let index = path[$indexOf]("\\", 2);
        if (index > 0) {
          index = path[$indexOf]("\\", index + 1);
          if (index > 0) return index;
        }
        return path.length;
      }
      if (path.length < 3) return 0;
      if (!dart.test(src__utils.isAlphabetic(path[$codeUnitAt](0)))) return 0;
      if (path[$codeUnitAt](1) !== src__characters.COLON) return 0;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](2)))) return 0;
      return 3;
    }
    isRootRelative(path) {
      return this.rootLength(path) === 1;
    }
    getRelativeRoot(path) {
      let length = this.rootLength(path);
      if (length === 1) return path[$_get](0);
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme !== "" && uri.scheme !== "file") {
        dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
      }
      let path = uri.path;
      if (uri.host === "") {
        if (path.length >= 3 && path[$startsWith]("/") && dart.test(src__utils.isDriveLetter(path, 1))) {
          path = path[$replaceFirst]("/", "");
        }
      } else {
        path = "\\\\" + dart.str(uri.host) + dart.str(path);
      }
      return core.Uri.decodeComponent(path[$replaceAll]("/", "\\"));
    }
    absolutePathToUri(path) {
      let parsed = src__parsed_path.ParsedPath.parse(path, this);
      if (parsed.root[$startsWith]("\\\\")) {
        let rootParts = parsed.root[$split]("\\")[$where](dart.fn(part => part !== "", StringTobool()));
        parsed.parts[$insert](0, rootParts[$last]);
        if (dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        return core._Uri.new({scheme: "file", host: rootParts[$first], pathSegments: parsed.parts});
      } else {
        if (parsed.parts[$length] === 0 || dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        parsed.parts[$insert](0, parsed.root[$replaceAll]("/", "")[$replaceAll]("\\", ""));
        return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
      }
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      if (codeUnit1 == codeUnit2) return true;
      if (codeUnit1 == src__characters.SLASH) return codeUnit2 == src__characters.BACKSLASH;
      if (codeUnit1 == src__characters.BACKSLASH) return codeUnit2 == src__characters.SLASH;
      if ((dart.notNull(codeUnit1) ^ dart.notNull(codeUnit2)) >>> 0 !== src__style__windows._asciiCaseBit) return false;
      let upperCase1 = (dart.notNull(codeUnit1) | dart.notNull(src__style__windows._asciiCaseBit)) >>> 0;
      return upperCase1 >= dart.notNull(src__characters.LOWER_A) && upperCase1 <= dart.notNull(src__characters.LOWER_Z);
    }
    pathsEqual(path1, path2) {
      if (path1 == path2) return true;
      if (path1.length !== path2.length) return false;
      for (let i = 0; i < path1.length; i = i + 1) {
        if (!dart.test(this.codeUnitsEqual(path1[$codeUnitAt](i), path2[$codeUnitAt](i)))) {
          return false;
        }
      }
      return true;
    }
    canonicalizeCodeUnit(codeUnit) {
      if (codeUnit == src__characters.SLASH) return src__characters.BACKSLASH;
      if (dart.notNull(codeUnit) < dart.notNull(src__characters.UPPER_A)) return codeUnit;
      if (dart.notNull(codeUnit) > dart.notNull(src__characters.UPPER_Z)) return codeUnit;
      return (dart.notNull(codeUnit) | dart.notNull(src__style__windows._asciiCaseBit)) >>> 0;
    }
    canonicalizePart(part) {
      return part[$toLowerCase]();
    }
  };
  (src__style__windows.WindowsStyle.new = function() {
    this[name$] = "windows";
    this[separator$] = "\\";
    this[separators$] = const$0 || (const$0 = dart.constList(["/", "\\"], core.String));
    this[separatorPattern$] = core.RegExp.new("[/\\\\]");
    this[needsSeparatorPattern$] = core.RegExp.new("[^/\\\\]$");
    this[rootPattern$] = core.RegExp.new("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])");
    this[relativeRootPattern$] = core.RegExp.new("^[/\\\\](?![/\\\\])");
    ;
  }).prototype = src__style__windows.WindowsStyle.prototype;
  dart.addTypeTests(src__style__windows.WindowsStyle);
  const name$ = Symbol("WindowsStyle.name");
  const separator$ = Symbol("WindowsStyle.separator");
  const separators$ = Symbol("WindowsStyle.separators");
  const separatorPattern$ = Symbol("WindowsStyle.separatorPattern");
  const needsSeparatorPattern$ = Symbol("WindowsStyle.needsSeparatorPattern");
  const rootPattern$ = Symbol("WindowsStyle.rootPattern");
  const relativeRootPattern$ = Symbol("WindowsStyle.relativeRootPattern");
  dart.setMethodSignature(src__style__windows.WindowsStyle, () => ({
    __proto__: dart.getMethods(src__style__windows.WindowsStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(src__style__windows.WindowsStyle, "package:path/src/style/windows.dart");
  dart.setFieldSignature(src__style__windows.WindowsStyle, () => ({
    __proto__: dart.getFields(src__style__windows.WindowsStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(src__style__windows, {
    /*src__style__windows._asciiCaseBit*/get _asciiCaseBit() {
      return 32;
    }
  });
  src__utils.isAlphabetic = function(char) {
    return dart.notNull(char) >= dart.notNull(src__characters.UPPER_A) && dart.notNull(char) <= dart.notNull(src__characters.UPPER_Z) || dart.notNull(char) >= dart.notNull(src__characters.LOWER_A) && dart.notNull(char) <= dart.notNull(src__characters.LOWER_Z);
  };
  src__utils.isNumeric = function(char) {
    return dart.notNull(char) >= dart.notNull(src__characters.ZERO) && dart.notNull(char) <= dart.notNull(src__characters.NINE);
  };
  src__utils.isDriveLetter = function(path, index) {
    if (path.length < dart.notNull(index) + 2) return false;
    if (!dart.test(src__utils.isAlphabetic(path[$codeUnitAt](index)))) return false;
    if (path[$codeUnitAt](dart.notNull(index) + 1) !== src__characters.COLON) return false;
    if (path.length === dart.notNull(index) + 2) return true;
    return path[$codeUnitAt](dart.notNull(index) + 2) === src__characters.SLASH;
  };
  dart.defineLazy(src__characters, {
    /*src__characters.PLUS*/get PLUS() {
      return 43;
    },
    /*src__characters.MINUS*/get MINUS() {
      return 45;
    },
    /*src__characters.PERIOD*/get PERIOD() {
      return 46;
    },
    /*src__characters.SLASH*/get SLASH() {
      return 47;
    },
    /*src__characters.ZERO*/get ZERO() {
      return 48;
    },
    /*src__characters.NINE*/get NINE() {
      return 57;
    },
    /*src__characters.COLON*/get COLON() {
      return 58;
    },
    /*src__characters.UPPER_A*/get UPPER_A() {
      return 65;
    },
    /*src__characters.UPPER_Z*/get UPPER_Z() {
      return 90;
    },
    /*src__characters.LOWER_A*/get LOWER_A() {
      return 97;
    },
    /*src__characters.LOWER_Z*/get LOWER_Z() {
      return 122;
    },
    /*src__characters.BACKSLASH*/get BACKSLASH() {
      return 92;
    }
  });
  const _splitExtension = dart.privateName(src__parsed_path, "_splitExtension");
  src__parsed_path.ParsedPath = class ParsedPath extends core.Object {
    get style() {
      return this[style$];
    }
    set style(value) {
      this[style$] = value;
    }
    get root() {
      return this[root$];
    }
    set root(value) {
      this[root$] = value;
    }
    get isRootRelative() {
      return this[isRootRelative$];
    }
    set isRootRelative(value) {
      this[isRootRelative$] = value;
    }
    get parts() {
      return this[parts$];
    }
    set parts(value) {
      this[parts$] = value;
    }
    get separators() {
      return this[separators$0];
    }
    set separators(value) {
      this[separators$0] = value;
    }
    get extension() {
      return this[_splitExtension]()[$_get](1);
    }
    get isAbsolute() {
      return this.root != null;
    }
    static parse(path, style) {
      let root = style.getRoot(path);
      let isRootRelative = style.isRootRelative(path);
      if (root != null) path = path[$substring](root.length);
      let parts = JSArrayOfString().of([]);
      let separators = JSArrayOfString().of([]);
      let start = 0;
      if (path[$isNotEmpty] && dart.test(style.isSeparator(path[$codeUnitAt](0)))) {
        separators[$add](path[$_get](0));
        start = 1;
      } else {
        separators[$add]("");
      }
      for (let i = start; i < path.length; i = i + 1) {
        if (dart.test(style.isSeparator(path[$codeUnitAt](i)))) {
          parts[$add](path[$substring](start, i));
          separators[$add](path[$_get](i));
          start = i + 1;
        }
      }
      if (start < path.length) {
        parts[$add](path[$substring](start));
        separators[$add]("");
      }
      return new src__parsed_path.ParsedPath.__(style, root, isRootRelative, parts, separators);
    }
    get basename() {
      let copy = this.clone();
      copy.removeTrailingSeparators();
      if (dart.test(copy.parts[$isEmpty])) return this.root == null ? "" : this.root;
      return copy.parts[$last];
    }
    get basenameWithoutExtension() {
      return this[_splitExtension]()[$_get](0);
    }
    get hasTrailingSeparator() {
      return !dart.test(this.parts[$isEmpty]) && (this.parts[$last] === "" || this.separators[$last] !== "");
    }
    removeTrailingSeparators() {
      while (!dart.test(this.parts[$isEmpty]) && this.parts[$last] === "") {
        this.parts[$removeLast]();
        this.separators[$removeLast]();
      }
      if (dart.notNull(this.separators[$length]) > 0) this.separators[$_set](dart.notNull(this.separators[$length]) - 1, "");
    }
    normalize(opts) {
      let canonicalize = opts && 'canonicalize' in opts ? opts.canonicalize : false;
      let leadingDoubles = 0;
      let newParts = JSArrayOfString().of([]);
      for (let part of this.parts) {
        if (part === "." || part === "") {
        } else if (part === "..") {
          if (dart.notNull(newParts[$length]) > 0) {
            newParts[$removeLast]();
          } else {
            leadingDoubles = leadingDoubles + 1;
          }
        } else {
          newParts[$add](dart.test(canonicalize) ? this.style.canonicalizePart(part) : part);
        }
      }
      if (!dart.test(this.isAbsolute)) {
        newParts[$insertAll](0, ListOfString().filled(leadingDoubles, ".."));
      }
      if (newParts[$length] === 0 && !dart.test(this.isAbsolute)) {
        newParts[$add](".");
      }
      let newSeparators = ListOfString().generate(newParts[$length], dart.fn(_ => this.style.separator, intToString()), {growable: true});
      newSeparators[$insert](0, dart.test(this.isAbsolute) && dart.notNull(newParts[$length]) > 0 && dart.test(this.style.needsSeparator(this.root)) ? this.style.separator : "");
      this.parts = newParts;
      this.separators = newSeparators;
      if (this.root != null && dart.equals(this.style, src__style.Style.windows)) {
        if (dart.test(canonicalize)) this.root = this.root[$toLowerCase]();
        this.root = this.root[$replaceAll]("/", "\\");
      }
      this.removeTrailingSeparators();
    }
    toString() {
      let builder = new core.StringBuffer.new();
      if (this.root != null) builder.write(this.root);
      for (let i = 0; i < dart.notNull(this.parts[$length]); i = i + 1) {
        builder.write(this.separators[$_get](i));
        builder.write(this.parts[$_get](i));
      }
      builder.write(this.separators[$last]);
      return builder.toString();
    }
    [_splitExtension]() {
      let file = this.parts[$lastWhere](dart.fn(p => p !== "", StringTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      if (file == null) return JSArrayOfString().of(["", ""]);
      if (file === "..") return JSArrayOfString().of(["..", ""]);
      let lastDot = file[$lastIndexOf](".");
      if (lastDot <= 0) return JSArrayOfString().of([file, ""]);
      return JSArrayOfString().of([file[$substring](0, lastDot), file[$substring](lastDot)]);
    }
    clone() {
      return new src__parsed_path.ParsedPath.__(this.style, this.root, this.isRootRelative, ListOfString().from(this.parts), ListOfString().from(this.separators));
    }
  };
  (src__parsed_path.ParsedPath.__ = function(style, root, isRootRelative, parts, separators) {
    this[style$] = style;
    this[root$] = root;
    this[isRootRelative$] = isRootRelative;
    this[parts$] = parts;
    this[separators$0] = separators;
    ;
  }).prototype = src__parsed_path.ParsedPath.prototype;
  dart.addTypeTests(src__parsed_path.ParsedPath);
  const style$ = Symbol("ParsedPath.style");
  const root$ = Symbol("ParsedPath.root");
  const isRootRelative$ = Symbol("ParsedPath.isRootRelative");
  const parts$ = Symbol("ParsedPath.parts");
  const separators$0 = Symbol("ParsedPath.separators");
  dart.setMethodSignature(src__parsed_path.ParsedPath, () => ({
    __proto__: dart.getMethods(src__parsed_path.ParsedPath.__proto__),
    removeTrailingSeparators: dart.fnType(dart.void, []),
    normalize: dart.fnType(dart.void, [], {canonicalize: core.bool}),
    [_splitExtension]: dart.fnType(core.List$(core.String), []),
    clone: dart.fnType(src__parsed_path.ParsedPath, [])
  }));
  dart.setGetterSignature(src__parsed_path.ParsedPath, () => ({
    __proto__: dart.getGetters(src__parsed_path.ParsedPath.__proto__),
    extension: core.String,
    isAbsolute: core.bool,
    basename: core.String,
    basenameWithoutExtension: core.String,
    hasTrailingSeparator: core.bool
  }));
  dart.setLibraryUri(src__parsed_path.ParsedPath, "package:path/src/parsed_path.dart");
  dart.setFieldSignature(src__parsed_path.ParsedPath, () => ({
    __proto__: dart.getFields(src__parsed_path.ParsedPath.__proto__),
    style: dart.fieldType(src__internal_style.InternalStyle),
    root: dart.fieldType(core.String),
    isRootRelative: dart.fieldType(core.bool),
    parts: dart.fieldType(core.List$(core.String)),
    separators: dart.fieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(src__parsed_path.ParsedPath, ['toString']);
  let const$1;
  src__style__url.UrlStyle = class UrlStyle extends src__internal_style.InternalStyle {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$0];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$1];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$0];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$0];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$0];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$0];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit == src__characters.SLASH;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) return true;
      return path[$endsWith]("://") && this.rootLength(path) === path.length;
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = path[$codeUnitAt](i);
        if (dart.test(this.isSeparator(codeUnit))) return 0;
        if (codeUnit === src__characters.COLON) {
          if (i === 0) return 0;
          if (path[$startsWith]("//", i + 1)) i = i + 3;
          let index = path[$indexOf]("/", i);
          if (index <= 0) return path.length;
          if (!dart.test(withDrive) || path.length < index + 3) return index;
          if (!path[$startsWith]("file://")) return index;
          if (!dart.test(src__utils.isDriveLetter(path, index + 1))) return index;
          return path.length === index + 3 ? index + 3 : index + 4;
        }
      }
      return 0;
    }
    isRootRelative(path) {
      return path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)));
    }
    getRelativeRoot(path) {
      return dart.test(this.isRootRelative(path)) ? "/" : null;
    }
    pathFromUri(uri) {
      return dart.toString(uri);
    }
    relativePathToUri(path) {
      return core.Uri.parse(path);
    }
    absolutePathToUri(path) {
      return core.Uri.parse(path);
    }
  };
  (src__style__url.UrlStyle.new = function() {
    this[name$0] = "url";
    this[separator$0] = "/";
    this[separators$1] = const$1 || (const$1 = dart.constList(["/"], core.String));
    this[separatorPattern$0] = core.RegExp.new("/");
    this[needsSeparatorPattern$0] = core.RegExp.new("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$");
    this[rootPattern$0] = core.RegExp.new("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*");
    this[relativeRootPattern$0] = core.RegExp.new("^/");
    ;
  }).prototype = src__style__url.UrlStyle.prototype;
  dart.addTypeTests(src__style__url.UrlStyle);
  const name$0 = Symbol("UrlStyle.name");
  const separator$0 = Symbol("UrlStyle.separator");
  const separators$1 = Symbol("UrlStyle.separators");
  const separatorPattern$0 = Symbol("UrlStyle.separatorPattern");
  const needsSeparatorPattern$0 = Symbol("UrlStyle.needsSeparatorPattern");
  const rootPattern$0 = Symbol("UrlStyle.rootPattern");
  const relativeRootPattern$0 = Symbol("UrlStyle.relativeRootPattern");
  dart.setMethodSignature(src__style__url.UrlStyle, () => ({
    __proto__: dart.getMethods(src__style__url.UrlStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(src__style__url.UrlStyle, "package:path/src/style/url.dart");
  dart.setFieldSignature(src__style__url.UrlStyle, () => ({
    __proto__: dart.getFields(src__style__url.UrlStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  const _current$ = dart.privateName(src__context, "_current");
  const _parse = dart.privateName(src__context, "_parse");
  const _needsNormalization = dart.privateName(src__context, "_needsNormalization");
  const _isWithinOrEquals = dart.privateName(src__context, "_isWithinOrEquals");
  const _isWithinOrEqualsFast = dart.privateName(src__context, "_isWithinOrEqualsFast");
  const _pathDirection = dart.privateName(src__context, "_pathDirection");
  const _hashFast = dart.privateName(src__context, "_hashFast");
  src__context.Context = class Context extends core.Object {
    get style() {
      return this[style$0];
    }
    set style(value) {
      super.style = value;
    }
    static new(opts) {
      let style = opts && 'style' in opts ? opts.style : null;
      let current = opts && 'current' in opts ? opts.current : null;
      if (current == null) {
        if (style == null) {
          current = path$.current;
        } else {
          current = ".";
        }
      }
      if (style == null) {
        style = src__style.Style.platform;
      } else if (!src__internal_style.InternalStyle.is(style)) {
        dart.throw(new core.ArgumentError.new("Only styles defined by the path package are " + "allowed."));
      }
      return new src__context.Context.__(src__internal_style.InternalStyle.as(style), current);
    }
    get current() {
      return this[_current$] != null ? this[_current$] : path$.current;
    }
    get separator() {
      return this.style.separator;
    }
    absolute(part1, part2, part3, part4, part5, part6, part7) {
      if (part2 === void 0) part2 = null;
      if (part3 === void 0) part3 = null;
      if (part4 === void 0) part4 = null;
      if (part5 === void 0) part5 = null;
      if (part6 === void 0) part6 = null;
      if (part7 === void 0) part7 = null;
      src__context._validateArgList("absolute", JSArrayOfString().of([part1, part2, part3, part4, part5, part6, part7]));
      if (part2 == null && dart.test(this.isAbsolute(part1)) && !dart.test(this.isRootRelative(part1))) {
        return part1;
      }
      return this.join(this.current, part1, part2, part3, part4, part5, part6, part7);
    }
    basename(path) {
      return this[_parse](path).basename;
    }
    basenameWithoutExtension(path) {
      return this[_parse](path).basenameWithoutExtension;
    }
    dirname(path) {
      let parsed = this[_parse](path);
      parsed.removeTrailingSeparators();
      if (dart.test(parsed.parts[$isEmpty])) return parsed.root == null ? "." : parsed.root;
      if (parsed.parts[$length] === 1) {
        return parsed.root == null ? "." : parsed.root;
      }
      parsed.parts[$removeLast]();
      parsed.separators[$removeLast]();
      parsed.removeTrailingSeparators();
      return dart.toString(parsed);
    }
    extension(path) {
      return this[_parse](path).extension;
    }
    rootPrefix(path) {
      return path[$substring](0, this.style.rootLength(path));
    }
    isAbsolute(path) {
      return dart.notNull(this.style.rootLength(path)) > 0;
    }
    isRelative(path) {
      return !dart.test(this.isAbsolute(path));
    }
    isRootRelative(path) {
      return this.style.isRootRelative(path);
    }
    join(part1, part2, part3, part4, part5, part6, part7, part8) {
      if (part2 === void 0) part2 = null;
      if (part3 === void 0) part3 = null;
      if (part4 === void 0) part4 = null;
      if (part5 === void 0) part5 = null;
      if (part6 === void 0) part6 = null;
      if (part7 === void 0) part7 = null;
      if (part8 === void 0) part8 = null;
      let parts = JSArrayOfString().of([part1, part2, part3, part4, part5, part6, part7, part8]);
      src__context._validateArgList("join", parts);
      return this.joinAll(parts[$where](dart.fn(part => part != null, StringTobool())));
    }
    joinAll(parts) {
      let buffer = new core.StringBuffer.new();
      let needsSeparator = false;
      let isAbsoluteAndNotRootRelative = false;
      let iter = parts[$where](dart.fn(part => part !== "", StringTobool()));
      for (let part of iter) {
        if (dart.test(this.isRootRelative(part)) && isAbsoluteAndNotRootRelative) {
          let parsed = this[_parse](part);
          let path = buffer.toString();
          parsed.root = path[$substring](0, this.style.rootLength(path, {withDrive: true}));
          if (dart.test(this.style.needsSeparator(parsed.root))) {
            parsed.separators[$_set](0, this.style.separator);
          }
          buffer.clear();
          buffer.write(dart.toString(parsed));
        } else if (dart.test(this.isAbsolute(part))) {
          isAbsoluteAndNotRootRelative = !dart.test(this.isRootRelative(part));
          buffer.clear();
          buffer.write(part);
        } else {
          if (part.length > 0 && dart.test(this.style.containsSeparator(part[$_get](0)))) {
          } else if (dart.test(needsSeparator)) {
            buffer.write(this.separator);
          }
          buffer.write(part);
        }
        needsSeparator = this.style.needsSeparator(part);
      }
      return buffer.toString();
    }
    split(path) {
      let parsed = this[_parse](path);
      parsed.parts = parsed.parts[$where](dart.fn(part => !part[$isEmpty], StringTobool()))[$toList]();
      if (parsed.root != null) parsed.parts[$insert](0, parsed.root);
      return parsed.parts;
    }
    canonicalize(path) {
      path = this.absolute(path);
      if (!dart.equals(this.style, src__style.Style.windows) && !dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize({canonicalize: true});
      return dart.toString(parsed);
    }
    normalize(path) {
      if (!dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize();
      return dart.toString(parsed);
    }
    [_needsNormalization](path) {
      let start = 0;
      let codeUnits = path[$codeUnits];
      let previousPrevious = null;
      let previous = null;
      let root = this.style.rootLength(path);
      if (root !== 0) {
        start = root;
        previous = src__characters.SLASH;
        if (dart.equals(this.style, src__style.Style.windows)) {
          for (let i = 0; i < dart.notNull(root); i = i + 1) {
            if (codeUnits[$_get](i) == src__characters.SLASH) return true;
          }
        }
      }
      for (let i = start; dart.notNull(i) < dart.notNull(codeUnits[$length]); i = dart.notNull(i) + 1) {
        let codeUnit = codeUnits[$_get](i);
        if (dart.test(this.style.isSeparator(codeUnit))) {
          if (dart.equals(this.style, src__style.Style.windows) && codeUnit == src__characters.SLASH) return true;
          if (previous != null && dart.test(this.style.isSeparator(previous))) return true;
          if (previous == src__characters.PERIOD && (previousPrevious == null || previousPrevious == src__characters.PERIOD || dart.test(this.style.isSeparator(previousPrevious)))) {
            return true;
          }
        }
        previousPrevious = previous;
        previous = codeUnit;
      }
      if (previous == null) return true;
      if (dart.test(this.style.isSeparator(previous))) return true;
      if (previous == src__characters.PERIOD && (previousPrevious == null || dart.test(this.style.isSeparator(previousPrevious)) || previousPrevious == src__characters.PERIOD)) {
        return true;
      }
      return false;
    }
    relative(path, opts) {
      let t0, t0$, t0$0;
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null && dart.test(this.isRelative(path))) return this.normalize(path);
      from = from == null ? this.current : this.absolute(from);
      if (dart.test(this.isRelative(from)) && dart.test(this.isAbsolute(path))) {
        return this.normalize(path);
      }
      if (dart.test(this.isRelative(path)) || dart.test(this.isRootRelative(path))) {
        path = this.absolute(path);
      }
      if (dart.test(this.isRelative(path)) && dart.test(this.isAbsolute(from))) {
        dart.throw(new src__path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      let fromParsed = (t0 = this[_parse](from), t0.normalize(), t0);
      let pathParsed = (t0$ = this[_parse](path), t0$.normalize(), t0$);
      if (dart.notNull(fromParsed.parts[$length]) > 0 && fromParsed.parts[$_get](0) === ".") {
        return dart.toString(pathParsed);
      }
      if (fromParsed.root != pathParsed.root && (fromParsed.root == null || pathParsed.root == null || !dart.test(this.style.pathsEqual(fromParsed.root, pathParsed.root)))) {
        return dart.toString(pathParsed);
      }
      while (dart.notNull(fromParsed.parts[$length]) > 0 && dart.notNull(pathParsed.parts[$length]) > 0 && dart.test(this.style.pathsEqual(fromParsed.parts[$_get](0), pathParsed.parts[$_get](0)))) {
        fromParsed.parts[$removeAt](0);
        fromParsed.separators[$removeAt](1);
        pathParsed.parts[$removeAt](0);
        pathParsed.separators[$removeAt](1);
      }
      if (dart.notNull(fromParsed.parts[$length]) > 0 && fromParsed.parts[$_get](0) === "..") {
        dart.throw(new src__path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      pathParsed.parts[$insertAll](0, ListOfString().filled(fromParsed.parts[$length], ".."));
      pathParsed.separators[$_set](0, "");
      pathParsed.separators[$insertAll](1, ListOfString().filled(fromParsed.parts[$length], this.style.separator));
      if (pathParsed.parts[$length] === 0) return ".";
      if (dart.notNull(pathParsed.parts[$length]) > 1 && pathParsed.parts[$last] === ".") {
        pathParsed.parts[$removeLast]();
        t0$0 = pathParsed.separators;
        t0$0[$removeLast]();
        t0$0[$removeLast]();
        t0$0[$add]("");
        t0$0;
      }
      pathParsed.root = "";
      pathParsed.removeTrailingSeparators();
      return dart.toString(pathParsed);
    }
    isWithin(parent, child) {
      return dart.equals(this[_isWithinOrEquals](parent, child), src__context._PathRelation.within);
    }
    equals(path1, path2) {
      return dart.equals(this[_isWithinOrEquals](path1, path2), src__context._PathRelation.equal);
    }
    [_isWithinOrEquals](parent, child) {
      let parentIsAbsolute = this.isAbsolute(parent);
      let childIsAbsolute = this.isAbsolute(child);
      if (dart.test(parentIsAbsolute) && !dart.test(childIsAbsolute)) {
        child = this.absolute(child);
        if (dart.test(this.style.isRootRelative(parent))) parent = this.absolute(parent);
      } else if (dart.test(childIsAbsolute) && !dart.test(parentIsAbsolute)) {
        parent = this.absolute(parent);
        if (dart.test(this.style.isRootRelative(child))) child = this.absolute(child);
      } else if (dart.test(childIsAbsolute) && dart.test(parentIsAbsolute)) {
        let childIsRootRelative = this.style.isRootRelative(child);
        let parentIsRootRelative = this.style.isRootRelative(parent);
        if (dart.test(childIsRootRelative) && !dart.test(parentIsRootRelative)) {
          child = this.absolute(child);
        } else if (dart.test(parentIsRootRelative) && !dart.test(childIsRootRelative)) {
          parent = this.absolute(parent);
        }
      }
      let result = this[_isWithinOrEqualsFast](parent, child);
      if (!dart.equals(result, src__context._PathRelation.inconclusive)) return result;
      let relative = null;
      try {
        relative = this.relative(child, {from: parent});
      } catch (e) {
        let _ = dart.getThrown(e);
        if (src__path_exception.PathException.is(_)) {
          return src__context._PathRelation.different;
        } else
          throw e;
      }
      if (!dart.test(this.isRelative(relative))) return src__context._PathRelation.different;
      if (relative === ".") return src__context._PathRelation.equal;
      if (relative === "..") return src__context._PathRelation.different;
      return relative.length >= 3 && relative[$startsWith]("..") && dart.test(this.style.isSeparator(relative[$codeUnitAt](2))) ? src__context._PathRelation.different : src__context._PathRelation.within;
    }
    [_isWithinOrEqualsFast](parent, child) {
      let t1;
      if (parent === ".") parent = "";
      let parentRootLength = this.style.rootLength(parent);
      let childRootLength = this.style.rootLength(child);
      if (parentRootLength != childRootLength) return src__context._PathRelation.different;
      for (let i = 0; i < dart.notNull(parentRootLength); i = i + 1) {
        let parentCodeUnit = parent[$codeUnitAt](i);
        let childCodeUnit = child[$codeUnitAt](i);
        if (!dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          return src__context._PathRelation.different;
        }
      }
      let lastCodeUnit = src__characters.SLASH;
      let lastParentSeparator = null;
      let parentIndex = parentRootLength;
      let childIndex = childRootLength;
      while (dart.notNull(parentIndex) < parent.length && dart.notNull(childIndex) < child.length) {
        let parentCodeUnit = parent[$codeUnitAt](parentIndex);
        let childCodeUnit = child[$codeUnitAt](childIndex);
        if (dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
          }
          lastCodeUnit = parentCodeUnit;
          parentIndex = dart.notNull(parentIndex) + 1;
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (dart.test(this.style.isSeparator(parentCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          lastParentSeparator = parentIndex;
          parentIndex = dart.notNull(parentIndex) + 1;
          continue;
        } else if (dart.test(this.style.isSeparator(childCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (parentCodeUnit === src__characters.PERIOD && dart.test(this.style.isSeparator(lastCodeUnit))) {
          parentIndex = dart.notNull(parentIndex) + 1;
          if (parentIndex === parent.length) break;
          parentCodeUnit = parent[$codeUnitAt](parentIndex);
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
            parentIndex = dart.notNull(parentIndex) + 1;
            continue;
          }
          if (parentCodeUnit === src__characters.PERIOD) {
            parentIndex = dart.notNull(parentIndex) + 1;
            if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
              return src__context._PathRelation.inconclusive;
            }
          }
        }
        if (childCodeUnit === src__characters.PERIOD && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          if (childIndex === child.length) break;
          childCodeUnit = child[$codeUnitAt](childIndex);
          if (dart.test(this.style.isSeparator(childCodeUnit))) {
            childIndex = dart.notNull(childIndex) + 1;
            continue;
          }
          if (childCodeUnit === src__characters.PERIOD) {
            childIndex = dart.notNull(childIndex) + 1;
            if (childIndex === child.length || dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex)))) {
              return src__context._PathRelation.inconclusive;
            }
          }
        }
        let childDirection = this[_pathDirection](child, childIndex);
        if (!dart.equals(childDirection, src__context._PathDirection.belowRoot)) {
          return src__context._PathRelation.inconclusive;
        }
        let parentDirection = this[_pathDirection](parent, parentIndex);
        if (!dart.equals(parentDirection, src__context._PathDirection.belowRoot)) {
          return src__context._PathRelation.inconclusive;
        }
        return src__context._PathRelation.different;
      }
      if (childIndex === child.length) {
        if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
          lastParentSeparator = parentIndex;
        } else {
          lastParentSeparator == null ? lastParentSeparator = math.max(core.int, 0, dart.notNull(parentRootLength) - 1) : null;
        }
        let direction = this[_pathDirection](parent, (t1 = lastParentSeparator, t1 == null ? dart.notNull(parentRootLength) - 1 : t1));
        if (dart.equals(direction, src__context._PathDirection.atRoot)) return src__context._PathRelation.equal;
        return dart.equals(direction, src__context._PathDirection.aboveRoot) ? src__context._PathRelation.inconclusive : src__context._PathRelation.different;
      }
      let direction = this[_pathDirection](child, childIndex);
      if (dart.equals(direction, src__context._PathDirection.atRoot)) return src__context._PathRelation.equal;
      if (dart.equals(direction, src__context._PathDirection.aboveRoot)) {
        return src__context._PathRelation.inconclusive;
      }
      return dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex))) || dart.test(this.style.isSeparator(lastCodeUnit)) ? src__context._PathRelation.within : src__context._PathRelation.different;
    }
    [_pathDirection](path, index) {
      let depth = 0;
      let reachedRoot = false;
      let i = index;
      while (dart.notNull(i) < path.length) {
        while (dart.notNull(i) < path.length && dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (i === path.length) break;
        let start = i;
        while (dart.notNull(i) < path.length && !dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (dart.notNull(i) - dart.notNull(start) === 1 && path[$codeUnitAt](start) === src__characters.PERIOD) {
        } else if (dart.notNull(i) - dart.notNull(start) === 2 && path[$codeUnitAt](start) === src__characters.PERIOD && path[$codeUnitAt](dart.notNull(start) + 1) === src__characters.PERIOD) {
          depth = depth - 1;
          if (depth < 0) break;
          if (depth === 0) reachedRoot = true;
        } else {
          depth = depth + 1;
        }
        if (i === path.length) break;
        i = dart.notNull(i) + 1;
      }
      if (depth < 0) return src__context._PathDirection.aboveRoot;
      if (depth === 0) return src__context._PathDirection.atRoot;
      if (reachedRoot) return src__context._PathDirection.reachesRoot;
      return src__context._PathDirection.belowRoot;
    }
    hash(path) {
      path = this.absolute(path);
      let result = this[_hashFast](path);
      if (result != null) return result;
      let parsed = this[_parse](path);
      parsed.normalize();
      return this[_hashFast](dart.toString(parsed));
    }
    [_hashFast](path) {
      let hash = 4603;
      let beginning = true;
      let wasSeparator = true;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = this.style.canonicalizeCodeUnit(path[$codeUnitAt](i));
        if (dart.test(this.style.isSeparator(codeUnit))) {
          wasSeparator = true;
          continue;
        }
        if (codeUnit == src__characters.PERIOD && wasSeparator) {
          if (i + 1 === path.length) break;
          let next = path[$codeUnitAt](i + 1);
          if (dart.test(this.style.isSeparator(next))) continue;
          if (!beginning && next === src__characters.PERIOD && (i + 2 === path.length || dart.test(this.style.isSeparator(path[$codeUnitAt](i + 2))))) {
            return null;
          }
        }
        hash = hash & 67108863;
        hash = hash * 33;
        hash = (hash ^ dart.notNull(codeUnit)) >>> 0;
        wasSeparator = false;
        beginning = false;
      }
      return hash;
    }
    withoutExtension(path) {
      let parsed = this[_parse](path);
      for (let i = dart.notNull(parsed.parts[$length]) - 1; i >= 0; i = i - 1) {
        if (!parsed.parts[$_get](i)[$isEmpty]) {
          parsed.parts[$_set](i, parsed.basenameWithoutExtension);
          break;
        }
      }
      return dart.toString(parsed);
    }
    setExtension(path, extension) {
      return dart.notNull(this.withoutExtension(path)) + dart.notNull(extension);
    }
    fromUri(uri) {
      return this.style.pathFromUri(src__context._parseUri(uri));
    }
    toUri(path) {
      if (dart.test(this.isRelative(path))) {
        return this.style.relativePathToUri(path);
      } else {
        return this.style.absolutePathToUri(this.join(this.current, path));
      }
    }
    prettyUri(uri) {
      let typedUri = src__context._parseUri(uri);
      if (typedUri.scheme === "file" && dart.equals(this.style, src__style.Style.url)) {
        return dart.toString(typedUri);
      } else if (typedUri.scheme !== "file" && typedUri.scheme !== "" && !dart.equals(this.style, src__style.Style.url)) {
        return dart.toString(typedUri);
      }
      let path = this.normalize(this.fromUri(typedUri));
      let rel = this.relative(path);
      return dart.notNull(this.split(rel)[$length]) > dart.notNull(this.split(path)[$length]) ? path : rel;
    }
    [_parse](path) {
      return src__parsed_path.ParsedPath.parse(path, this.style);
    }
  };
  (src__context.Context._internal = function() {
    this[style$0] = src__internal_style.InternalStyle.as(src__style.Style.platform);
    this[_current$] = null;
    ;
  }).prototype = src__context.Context.prototype;
  (src__context.Context.__ = function(style, _current) {
    this[style$0] = style;
    this[_current$] = _current;
    ;
  }).prototype = src__context.Context.prototype;
  dart.addTypeTests(src__context.Context);
  const style$0 = Symbol("Context.style");
  dart.setMethodSignature(src__context.Context, () => ({
    __proto__: dart.getMethods(src__context.Context.__proto__),
    absolute: dart.fnType(core.String, [core.String], [core.String, core.String, core.String, core.String, core.String, core.String]),
    basename: dart.fnType(core.String, [core.String]),
    basenameWithoutExtension: dart.fnType(core.String, [core.String]),
    dirname: dart.fnType(core.String, [core.String]),
    extension: dart.fnType(core.String, [core.String]),
    rootPrefix: dart.fnType(core.String, [core.String]),
    isAbsolute: dart.fnType(core.bool, [core.String]),
    isRelative: dart.fnType(core.bool, [core.String]),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    join: dart.fnType(core.String, [core.String], [core.String, core.String, core.String, core.String, core.String, core.String, core.String]),
    joinAll: dart.fnType(core.String, [core.Iterable$(core.String)]),
    split: dart.fnType(core.List$(core.String), [core.String]),
    canonicalize: dart.fnType(core.String, [core.String]),
    normalize: dart.fnType(core.String, [core.String]),
    [_needsNormalization]: dart.fnType(core.bool, [core.String]),
    relative: dart.fnType(core.String, [core.String], {from: core.String}),
    isWithin: dart.fnType(core.bool, [core.String, core.String]),
    equals: dart.fnType(core.bool, [core.String, core.String]),
    [_isWithinOrEquals]: dart.fnType(src__context._PathRelation, [core.String, core.String]),
    [_isWithinOrEqualsFast]: dart.fnType(src__context._PathRelation, [core.String, core.String]),
    [_pathDirection]: dart.fnType(src__context._PathDirection, [core.String, core.int]),
    hash: dart.fnType(core.int, [core.String]),
    [_hashFast]: dart.fnType(core.int, [core.String]),
    withoutExtension: dart.fnType(core.String, [core.String]),
    setExtension: dart.fnType(core.String, [core.String, core.String]),
    fromUri: dart.fnType(core.String, [dart.dynamic]),
    toUri: dart.fnType(core.Uri, [core.String]),
    prettyUri: dart.fnType(core.String, [dart.dynamic]),
    [_parse]: dart.fnType(src__parsed_path.ParsedPath, [core.String])
  }));
  dart.setGetterSignature(src__context.Context, () => ({
    __proto__: dart.getGetters(src__context.Context.__proto__),
    current: core.String,
    separator: core.String
  }));
  dart.setLibraryUri(src__context.Context, "package:path/src/context.dart");
  dart.setFieldSignature(src__context.Context, () => ({
    __proto__: dart.getFields(src__context.Context.__proto__),
    style: dart.finalFieldType(src__internal_style.InternalStyle),
    [_current$]: dart.finalFieldType(core.String)
  }));
  src__context._PathDirection = class _PathDirection extends core.Object {
    toString() {
      return this.name;
    }
  };
  (src__context._PathDirection.new = function(name) {
    this.name = name;
    ;
  }).prototype = src__context._PathDirection.prototype;
  dart.addTypeTests(src__context._PathDirection);
  dart.setLibraryUri(src__context._PathDirection, "package:path/src/context.dart");
  dart.setFieldSignature(src__context._PathDirection, () => ({
    __proto__: dart.getFields(src__context._PathDirection.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__context._PathDirection, ['toString']);
  dart.defineLazy(src__context._PathDirection, {
    /*src__context._PathDirection.aboveRoot*/get aboveRoot() {
      return dart.const(new src__context._PathDirection.new("above root"));
    },
    /*src__context._PathDirection.atRoot*/get atRoot() {
      return dart.const(new src__context._PathDirection.new("at root"));
    },
    /*src__context._PathDirection.reachesRoot*/get reachesRoot() {
      return dart.const(new src__context._PathDirection.new("reaches root"));
    },
    /*src__context._PathDirection.belowRoot*/get belowRoot() {
      return dart.const(new src__context._PathDirection.new("below root"));
    }
  });
  src__context._PathRelation = class _PathRelation extends core.Object {
    toString() {
      return this.name;
    }
  };
  (src__context._PathRelation.new = function(name) {
    this.name = name;
    ;
  }).prototype = src__context._PathRelation.prototype;
  dart.addTypeTests(src__context._PathRelation);
  dart.setLibraryUri(src__context._PathRelation, "package:path/src/context.dart");
  dart.setFieldSignature(src__context._PathRelation, () => ({
    __proto__: dart.getFields(src__context._PathRelation.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__context._PathRelation, ['toString']);
  dart.defineLazy(src__context._PathRelation, {
    /*src__context._PathRelation.within*/get within() {
      return dart.const(new src__context._PathRelation.new("within"));
    },
    /*src__context._PathRelation.equal*/get equal() {
      return dart.const(new src__context._PathRelation.new("equal"));
    },
    /*src__context._PathRelation.different*/get different() {
      return dart.const(new src__context._PathRelation.new("different"));
    },
    /*src__context._PathRelation.inconclusive*/get inconclusive() {
      return dart.const(new src__context._PathRelation.new("inconclusive"));
    }
  });
  src__context.createInternal = function() {
    return new src__context.Context._internal();
  };
  src__context._parseUri = function(uri) {
    if (typeof uri == 'string') return core.Uri.parse(uri);
    if (core.Uri.is(uri)) return uri;
    dart.throw(new core.ArgumentError.value(uri, "uri", "Value must be a String or a Uri"));
  };
  src__context._validateArgList = function(method, args) {
    for (let i = 1; i < dart.notNull(args[$length]); i = i + 1) {
      if (args[$_get](i) == null || args[$_get](i - 1) != null) continue;
      let numArgs = null;
      for (let t1 = numArgs = args[$length]; dart.notNull(numArgs) >= 1; numArgs = dart.notNull(numArgs) - 1) {
        if (args[$_get](dart.notNull(numArgs) - 1) != null) break;
      }
      let message = new core.StringBuffer.new();
      message.write(dart.str(method) + "(");
      message.write(args[$take](numArgs)[$map](core.String, dart.fn(arg => arg == null ? "null" : "\"" + dart.str(arg) + "\"", StringToString()))[$join](", "));
      message.write("): part " + dart.str(i - 1) + " was null, but part " + dart.str(i) + " was not.");
      dart.throw(new core.ArgumentError.new(message.toString()));
    }
  };
  path$.absolute = function(part1, part2, part3, part4, part5, part6, part7) {
    if (part2 === void 0) part2 = null;
    if (part3 === void 0) part3 = null;
    if (part4 === void 0) part4 = null;
    if (part5 === void 0) part5 = null;
    if (part6 === void 0) part6 = null;
    if (part7 === void 0) part7 = null;
    return path$.context.absolute(part1, part2, part3, part4, part5, part6, part7);
  };
  path$.basename = function(path) {
    return path$.context.basename(path);
  };
  path$.basenameWithoutExtension = function(path) {
    return path$.context.basenameWithoutExtension(path);
  };
  path$.dirname = function(path) {
    return path$.context.dirname(path);
  };
  path$.extension = function(path) {
    return path$.context.extension(path);
  };
  path$.rootPrefix = function(path) {
    return path$.context.rootPrefix(path);
  };
  path$.isAbsolute = function(path) {
    return path$.context.isAbsolute(path);
  };
  path$.isRelative = function(path) {
    return path$.context.isRelative(path);
  };
  path$.isRootRelative = function(path) {
    return path$.context.isRootRelative(path);
  };
  path$.join = function(part1, part2, part3, part4, part5, part6, part7, part8) {
    if (part2 === void 0) part2 = null;
    if (part3 === void 0) part3 = null;
    if (part4 === void 0) part4 = null;
    if (part5 === void 0) part5 = null;
    if (part6 === void 0) part6 = null;
    if (part7 === void 0) part7 = null;
    if (part8 === void 0) part8 = null;
    return path$.context.join(part1, part2, part3, part4, part5, part6, part7, part8);
  };
  path$.joinAll = function(parts) {
    return path$.context.joinAll(parts);
  };
  path$.split = function(path) {
    return path$.context.split(path);
  };
  path$.canonicalize = function(path) {
    return path$.context.canonicalize(path);
  };
  path$.normalize = function(path) {
    return path$.context.normalize(path);
  };
  path$.relative = function(path, opts) {
    let from = opts && 'from' in opts ? opts.from : null;
    return path$.context.relative(path, {from: from});
  };
  path$.isWithin = function(parent, child) {
    return path$.context.isWithin(parent, child);
  };
  path$.equals = function(path1, path2) {
    return path$.context.equals(path1, path2);
  };
  path$.hash = function(path) {
    return path$.context.hash(path);
  };
  path$.withoutExtension = function(path) {
    return path$.context.withoutExtension(path);
  };
  path$.setExtension = function(path, extension) {
    return path$.context.setExtension(path, extension);
  };
  path$.fromUri = function(uri) {
    return path$.context.fromUri(uri);
  };
  path$.toUri = function(path) {
    return path$.context.toUri(path);
  };
  path$.prettyUri = function(uri) {
    return path$.context.prettyUri(uri);
  };
  dart.copyProperties(path$, {
    get style() {
      return path$.context.style;
    },
    get current() {
      let uri = core.Uri.base;
      if (dart.equals(uri, path$._currentUriBase)) return path$._current;
      path$._currentUriBase = uri;
      if (dart.equals(src__style.Style.platform, src__style.Style.url)) {
        path$._current = dart.toString(uri.resolve("."));
        return path$._current;
      } else {
        let path = uri.toFilePath();
        let lastIndex = path.length - 1;
        if (!(path[$_get](lastIndex) === "/" || path[$_get](lastIndex) === "\\")) dart.assertFailed(null, "org-dartlang-app:///packages/path/path.dart", 99, 12, "path[lastIndex] == '/' || path[lastIndex] == '\\\\'");
        path$._current = lastIndex === 0 ? path : path[$substring](0, lastIndex);
        return path$._current;
      }
    },
    get separator() {
      return path$.context.separator;
    }
  });
  dart.defineLazy(path$, {
    /*path$.posix*/get posix() {
      return src__context.Context.new({style: src__style.Style.posix});
    },
    /*path$.windows*/get windows() {
      return src__context.Context.new({style: src__style.Style.windows});
    },
    /*path$.url*/get url() {
      return src__context.Context.new({style: src__style.Style.url});
    },
    /*path$.context*/get context() {
      return src__context.createInternal();
    },
    /*path$._currentUriBase*/get _currentUriBase() {
      return null;
    },
    set _currentUriBase(_) {},
    /*path$._current*/get _current() {
      return null;
    },
    set _current(_) {}
  });
  const _inner = dart.privateName(src__path_set, "_inner");
  src__path_set.PathSet = class PathSet extends collection.IterableBase$(core.String) {
    static _create(context) {
      context == null ? context = path$.context : null;
      return LinkedHashSetOfString().new({equals: dart.fn((path1, path2) => {
          if (path1 == null) return path2 == null;
          if (path2 == null) return false;
          return context.equals(path1, path2);
        }, StringAndStringTobool()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringToint()), isValidKey: dart.fn(path => typeof path == 'string' || path == null, ObjectTobool())});
    }
    get iterator() {
      return this[_inner].iterator;
    }
    get length() {
      return this[_inner][$length];
    }
    add(value) {
      core.String._check(value);
      return this[_inner].add(value);
    }
    addAll(elements) {
      IterableOfString()._check(elements);
      return this[_inner].addAll(elements);
    }
    cast(T) {
      return this[_inner].cast(T);
    }
    clear() {
      return this[_inner].clear();
    }
    contains(other) {
      return this[_inner].contains(other);
    }
    containsAll(other) {
      return this[_inner].containsAll(other);
    }
    difference(other) {
      return this[_inner].difference(other);
    }
    intersection(other) {
      return this[_inner].intersection(other);
    }
    lookup(element) {
      return this[_inner].lookup(element);
    }
    remove(value) {
      return this[_inner].remove(value);
    }
    removeAll(elements) {
      return this[_inner].removeAll(elements);
    }
    removeWhere(test) {
      return this[_inner].removeWhere(test);
    }
    retainAll(elements) {
      return this[_inner].retainAll(elements);
    }
    retainWhere(test) {
      return this[_inner].retainWhere(test);
    }
    union(other) {
      SetOfString()._check(other);
      return this[_inner].union(other);
    }
    toSet() {
      return this[_inner].toSet();
    }
  };
  (src__path_set.PathSet.new = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = src__path_set.PathSet._create(context);
    src__path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = src__path_set.PathSet.prototype;
  (src__path_set.PathSet.of = function(other, opts) {
    let t2;
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = (t2 = src__path_set.PathSet._create(context), t2.addAll(other), t2);
    src__path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = src__path_set.PathSet.prototype;
  dart.addTypeTests(src__path_set.PathSet);
  src__path_set.PathSet[dart.implements] = () => [core.Set$(core.String)];
  dart.setMethodSignature(src__path_set.PathSet, () => ({
    __proto__: dart.getMethods(src__path_set.PathSet.__proto__),
    add: dart.fnType(core.bool, [core.Object]),
    addAll: dart.fnType(dart.void, [core.Object]),
    cast: dart.gFnType(T => [core.Set$(T), []]),
    [$cast]: dart.gFnType(T => [core.Set$(T), []]),
    clear: dart.fnType(dart.void, []),
    containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
    difference: dart.fnType(core.Set$(core.String), [core.Set$(core.Object)]),
    intersection: dart.fnType(core.Set$(core.String), [core.Set$(core.Object)]),
    lookup: dart.fnType(core.String, [core.Object]),
    remove: dart.fnType(core.bool, [core.Object]),
    removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
    removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
    retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    union: dart.fnType(core.Set$(core.String), [core.Object])
  }));
  dart.setGetterSignature(src__path_set.PathSet, () => ({
    __proto__: dart.getGetters(src__path_set.PathSet.__proto__),
    iterator: core.Iterator$(core.String),
    [$iterator]: core.Iterator$(core.String)
  }));
  dart.setLibraryUri(src__path_set.PathSet, "package:path/src/path_set.dart");
  dart.setFieldSignature(src__path_set.PathSet, () => ({
    __proto__: dart.getFields(src__path_set.PathSet.__proto__),
    [_inner]: dart.finalFieldType(core.Set$(core.String))
  }));
  dart.defineExtensionMethods(src__path_set.PathSet, ['cast', 'contains', 'toSet']);
  dart.defineExtensionAccessors(src__path_set.PathSet, ['iterator', 'length']);
  const _is_PathMap_default = Symbol('_is_PathMap_default');
  src__path_map.PathMap$ = dart.generic(V => {
    class PathMap extends collection.MapView$(core.String, V) {
      static _create(V, context) {
        context == null ? context = path$.context : null;
        return collection.LinkedHashMap$(core.String, V).new({equals: dart.fn((path1, path2) => {
            if (path1 == null) return path2 == null;
            if (path2 == null) return false;
            return context.equals(path1, path2);
          }, StringAndStringTobool()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringToint()), isValidKey: dart.fn(path => typeof path == 'string' || path == null, ObjectTobool())});
      }
    }
    (PathMap.new = function(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, src__path_map.PathMap._create(V, context));
      ;
    }).prototype = PathMap.prototype;
    (PathMap.of = function(other, opts) {
      let t2;
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, (t2 = src__path_map.PathMap._create(V, context), t2[$addAll](other), t2));
      ;
    }).prototype = PathMap.prototype;
    dart.addTypeTests(PathMap);
    PathMap.prototype[_is_PathMap_default] = true;
    dart.setLibraryUri(PathMap, "package:path/src/path_map.dart");
    return PathMap;
  });
  src__path_map.PathMap = src__path_map.PathMap$();
  dart.addTypeTests(src__path_map.PathMap, _is_PathMap_default);
  src__path_exception.PathException = class PathException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    toString() {
      return "PathException: " + dart.str(this.message);
    }
  };
  (src__path_exception.PathException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = src__path_exception.PathException.prototype;
  dart.addTypeTests(src__path_exception.PathException);
  const message$ = Symbol("PathException.message");
  src__path_exception.PathException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(src__path_exception.PathException, "package:path/src/path_exception.dart");
  dart.setFieldSignature(src__path_exception.PathException, () => ({
    __proto__: dart.getFields(src__path_exception.PathException.__proto__),
    message: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(src__path_exception.PathException, ['toString']);
  dart.trackLibraries("packages/path/path", {
    "package:path/src/style/posix.dart": src__style__posix,
    "package:path/src/internal_style.dart": src__internal_style,
    "package:path/src/style.dart": src__style,
    "package:path/src/style/windows.dart": src__style__windows,
    "package:path/src/utils.dart": src__utils,
    "package:path/src/characters.dart": src__characters,
    "package:path/src/parsed_path.dart": src__parsed_path,
    "package:path/src/style/url.dart": src__style__url,
    "package:path/src/context.dart": src__context,
    "package:path/path.dart": path$,
    "package:path/src/path_set.dart": src__path_set,
    "package:path/src/path_map.dart": src__path_map,
    "package:path/src/path_exception.dart": src__path_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/path/src/style.dart","org-dartlang-app:///packages/path/src/internal_style.dart","org-dartlang-app:///packages/path/src/style/posix.dart","org-dartlang-app:///packages/path/src/style/windows.dart","org-dartlang-app:///packages/path/src/utils.dart","org-dartlang-app:///packages/path/src/characters.dart","org-dartlang-app:///packages/path/src/parsed_path.dart","org-dartlang-app:///packages/path/src/style/url.dart","org-dartlang-app:///packages/path/src/context.dart","org-dartlang-app:///packages/path/path.dart","org-dartlang-app:///packages/path/src/path_set.dart","org-dartlang-app:///packages/path/src/path_map.dart","org-dartlang-app:///packages/path/src/path_exception.dart"],"names":[],"mappings":"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","file":"path.ddc.js"}');
  // Exports:
  return {
    src__style__posix: src__style__posix,
    src__internal_style: src__internal_style,
    src__style: src__style,
    src__style__windows: src__style__windows,
    src__utils: src__utils,
    src__characters: src__characters,
    src__parsed_path: src__parsed_path,
    src__style__url: src__style__url,
    src__context: src__context,
    path: path$,
    src__path_set: src__path_set,
    src__path_map: src__path_map,
    src__path_exception: src__path_exception
  };
});

//# sourceMappingURL=path.ddc.js.map
