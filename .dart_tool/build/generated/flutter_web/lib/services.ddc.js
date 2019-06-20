define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, ui, clipboard, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__services__platform_messages = clipboard.src__services__platform_messages;
  const src__foundation__licenses = assertions.src__foundation__licenses;
  const src__foundation__isolates = assertions.src__foundation__isolates;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const services = Object.create(dart.library);
  const src__services__binding = Object.create(dart.library);
  const src__services__asset_bundle = Object.create(dart.library);
  const $times = dartx['*'];
  const $split = dartx.split;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $lengthInBytes = dartx.lengthInBytes;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $response = dartx.response;
  const $asByteData = dartx.asByteData;
  const $putIfAbsent = dartx.putIfAbsent;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let ByteDataTovoid = () => (ByteDataTovoid = dart.constFn(dart.fnType(dart.void, [typed_data.ByteData])))();
  let StringAndByteDataAndFnToFutureOfvoid = () => (StringAndByteDataAndFnToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.String, typed_data.ByteData, ByteDataTovoid()])))();
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfLicenseEntry = () => (ListOfLicenseEntry = dart.constFn(core.List$(src__foundation__licenses.LicenseEntry)))();
  let CompleterOfListOfLicenseEntry = () => (CompleterOfListOfLicenseEntry = dart.constFn(async.Completer$(ListOfLicenseEntry())))();
  let StringToListOfLicenseEntry = () => (StringToListOfLicenseEntry = dart.constFn(dart.fnType(ListOfLicenseEntry(), [core.String])))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  let JSArrayOfLicenseEntry = () => (JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(src__foundation__licenses.LicenseEntry)))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  let StringToFutureOfNull = () => (StringToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.String])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let IdentityMapOfString$FutureOfString = () => (IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, FutureOfString())))();
  let IdentityMapOfString$Future = () => (IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))();
  const _addLicenses = dart.privateName(src__services__binding, "_addLicenses");
  let const$;
  src__services__binding.ServicesBinding = class ServicesBinding extends src__foundation__binding.BindingBase {
    static _parseLicenses(rawLicenses) {
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new src__foundation__licenses.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new src__foundation__licenses.LicenseEntryWithLineBreaks.new(const$ || (const$ = dart.constList([], core.String)), license));
        }
      }
      return result;
    }
  };
  src__services__binding.ServicesBinding[dart.mixinOn] = BindingBase => class ServicesBinding extends BindingBase {
    initInstances() {
      let t0;
      super.initInstances();
      t0 = ui$.window;
      t0.onPlatformMessage = dart.fn(src__services__platform_messages.BinaryMessages.handlePlatformMessage, StringAndByteDataAndFnToFutureOfvoid());
      t0;
      this.initLicenses();
    }
    initLicenses() {
      src__foundation__licenses.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* _addLicenses(stream) {
        let rawLicenses = CompleterOfString().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          rawLicenses.complete(src__services__asset_bundle.rootBundle.loadString("LICENSE", {cache: false}));
        }), VoidToFutureOfNull()));
        yield rawLicenses.future;
        let parsedLicenses = CompleterOfListOfLicenseEntry().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          parsedLicenses.complete(src__foundation__isolates.compute(core.String, ListOfLicenseEntry(), dart.fn(src__services__binding.ServicesBinding._parseLicenses, StringToListOfLicenseEntry()), yield rawLicenses.future, {debugLabel: "parseLicenses"}));
        }), VoidToFutureOfNull()));
        yield parsedLicenses.future;
        if (stream.addStream(StreamOfLicenseEntry().fromIterable(yield parsedLicenses.future))) return;
        yield;
      }).stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), VoidToFutureOfString()), setter: dart.fn(value => async.async(core.Null, (function*() {
            this.evict(value);
          }).bind(this)), StringToFutureOfNull())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/binding.dart", 90, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      src__services__asset_bundle.rootBundle.evict(asset);
    }
  };
  dart.addTypeTests(src__services__binding.ServicesBinding);
  src__services__binding.ServicesBinding[dart.implements] = () => [src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__services__binding.ServicesBinding, () => ({
    __proto__: dart.getMethods(src__services__binding.ServicesBinding.__proto__),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(src__foundation__licenses.LicenseEntry), []),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(src__services__binding.ServicesBinding, "package:flutter_web/src/services/binding.dart");
  src__services__asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data == null) dart.throw(src__foundation__assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        if (dart.notNull(data[$lengthInBytes]) < 20 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return src__services__asset_bundle.AssetBundle._utf8decode(data);
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
    }
    toString() {
      return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "()";
    }
  };
  (src__services__asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = src__services__asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.AssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(src__services__asset_bundle.AssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.defineExtensionMethods(src__services__asset_bundle.AssetBundle, ['toString']);
  const _baseUrl = dart.privateName(src__services__asset_bundle, "_baseUrl");
  const _urlFromKey = dart.privateName(src__services__asset_bundle, "_urlFromKey");
  src__services__asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends src__services__asset_bundle.AssetBundle {
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield html.HttpRequest.request(dart.toString(this[_urlFromKey](key)), {method: "GET"}));
        let buffer = typed_data.ByteBuffer._check(request[$response]);
        return buffer[$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/asset_bundle.dart", 134, 12, "key != null");
        if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/asset_bundle.dart", 135, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
  };
  (src__services__asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
    ;
  }).prototype = src__services__asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(src__services__asset_bundle.NetworkAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.setFieldSignature(src__services__asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(src__services__asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri)
  }));
  const _stringCache = dart.privateName(src__services__asset_bundle, "_stringCache");
  const _structuredDataCache = dart.privateName(src__services__asset_bundle, "_structuredDataCache");
  src__services__asset_bundle.CachingAssetBundle = class CachingAssetBundle extends src__services__asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (dart.test(cache)) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/asset_bundle.dart", 177, 12, "key != null");
      if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/asset_bundle.dart", 178, 12, "parser != null");
      if (dart.test(this[_structuredDataCache][$containsKey](key))) return async.Future$(T)._check(this[_structuredDataCache][$_get](key));
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (src__foundation__synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, result);
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return result;
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
  };
  (src__services__asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (IdentityMapOfString$Future()).new();
    ;
  }).prototype = src__services__asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(src__services__asset_bundle.CachingAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.setFieldSignature(src__services__asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(src__services__asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  src__services__asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends src__services__asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = typed_data.Uint8List._check(convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path));
        let asset = (yield src__services__platform_messages.BinaryMessages.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(src__foundation__assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        return asset;
      });
    }
  };
  (src__services__asset_bundle.PlatformAssetBundle.new = function() {
    src__services__asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = src__services__asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(src__services__asset_bundle.PlatformAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  src__services__asset_bundle._initRootBundle = function() {
    return new src__services__asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(src__services__asset_bundle, {
    /*src__services__asset_bundle.rootBundle*/get rootBundle() {
      return src__services__asset_bundle._initRootBundle();
    }
  });
  dart.trackLibraries("packages/flutter_web/services", {
    "package:flutter_web/services.dart": services,
    "package:flutter_web/src/services/binding.dart": src__services__binding,
    "package:flutter_web/src/services/asset_bundle.dart": src__services__asset_bundle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/services/binding.dart","org-dartlang-app:///packages/flutter_web/src/services/asset_bundle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAoEkD;AACjC,8BAAoB,AAAK,AAAa,OAAV,AAAI,YAAE,MAAM;AAC5B,mBAAuB;AAC7B,qBAAW,AAAY,WAAD,SAAO,iBAAiB;AACjE,eAAY,UAAW,SAAQ;AACnB,oBAAQ,AAAQ,OAAD,WAAS;AAClC,YAAI,AAAM,KAAD,IAAI;UACX,AAAO,MAAD,OAAK,6DACP,AAAQ,AAAoB,OAArB,aAAW,GAAG,KAAK,UAAQ,OAClC,AAAQ,OAAD,aAAW,AAAM,KAAD,GAAG;;UAE9B,AAAO,MAAD,OAAK,6DAA2B,sDAAkB,OAAO;;;AAGnE,YAAO,OAAM;IACf;;;;;MA9DQ;WACH;MAAQ,uBAAmC;;MAC9C;IACF;;MASkB,+DAAW;IAC7B;;AAEiC;AAgBP,0BAAc;QAChC,gBAAI;UACR,AAAY,WAAD,UAAU,AAAW,kDAAW,mBAAkB;QAC9D;QACD,MAAM,AAAY,WAAD;AACmB,6BAChC;QACE,gBAAI;UACR,AAAe,cAAD,UAAU,qEAAQ,8FAAgB,MAAM,AAAY,WAAD,sBACjD;QACjB;QACD,MAAM,AAAe,cAAD;AACpB,6BAAK,oCAAoC,MAAM,AAAe,cAAD;QAA7D;MACF;;;MAsBQ;qBAEC,AAaN;QAZC,2CAKQ,iBACE;AAAY;UAAE,qCACd,QAAQ;YACd,WAAM,KAAK;UACZ;AAEH,cAAO;;IAEX;UAQkB;MAChB,AAAW,6CAAM,KAAK;IACxB;;;;;;;;;;;;eCjDiC;UAAW,+CAAQ;AAA3B;AACR,oBAAO,MAAM,UAAK,GAAG;AACpC,YAAI,AAAK,IAAD,IAAI,MAAM,WAAU,6CAAa,AAA4B,oCAAJ,GAAG;AACpE,YAAuB,aAAnB,AAAK,IAAD,oBAAiB,AAAG,KAAE;AAG5B,gBAAO,AAAK,qBAAO,AAAK,AAAO,IAAR;;AAWzB,cAAO,qDAAY,IAAI;MACzB;;uBAEmC;AACjC,YAAO,AAAK,qBAAO,AAAK,AAAO,IAAR;IACzB;UAYkB;IAAM;;AAGH,YAA6B,UAA1B,8CAAiB,SAAM;IAAG;;;;EACpD;;;;;;;;;;;;kBAayB;AAAQ,YAAA,AAAS,wBAAQ,GAAG;IAAC;SAGvB;AAAR;AACD,uBACd,MAAkB,yBAAyB,cAAjB,kBAAY,GAAG,aAAsB;AAClD,kDAAS,AAAQ,OAAD;AACjC,cAAO,AAAO,OAAD;MACf;;0BASW,KAAe;AADK;cAEtB,GAAG,IAAI;cACP,MAAM,IAAI;AACjB,cAAO,AAAM,OAAA,CAAC,MAAM,gBAAW,GAAG;MACpC;;;iEAzBuB;IAAoB,iBAAE,OAAO;;;;;;;;;;;;;;;;;;eA+CnB;UAAW,+CAAQ;AAClD,oBAAI,KAAK,GACP,MAAO,AAAa,kCAAY,GAAG,EAAE,cAAY,iBAAW,GAAG;AACjE,YAAa,kBAAW,GAAG;IAC7B;0BAauC,KAAe;YAC7C,GAAG,IAAI;YACP,MAAM,IAAI;AACjB,oBAAI,AAAqB,yCAAY,GAAG,IAAG,+BAAO,AAAoB,kCAAC,GAAG;AAC7D;AACH;MACV,AAA8B,AAAgB,gBAAnC,GAAG,UAAS,gBAAe,MAAM,kBAAa,QAAG;QAC1D,SAAa,oEAAqB,KAAK;QACvC,AAAoB,kCAAC,GAAG,EAAI,MAAM;AAClC,YAAI,SAAS,IAAI;UAIf,AAAU,SAAD,UAAU,KAAK;;;AAG5B,UAAI,MAAM,IAAI;AAGZ,cAAO,OAAM;;MAIf,YAAgB;MAChB,AAAoB,kCAAC,GAAG,EAAI,AAAU,SAAD;AACrC,YAAO,AAAU,UAAD;IAClB;UAGkB;MAChB,AAAa,4BAAO,GAAG;MACvB,AAAqB,oCAAO,GAAG;IACjC;;;IAtDkC,qBAAuC;IACtC,6BACN;;EAqD/B;;;;;;;;;;;;;SAK+B;AAAR;AACH,kDACZ,AAAK,AAAQ,6BAAY,AAA+B,qBAAjB,oBAAW,GAAG;AAC1C,qBAAQ,MAAqB,qDACxC,kBAAkB,AAAQ,AAAO,OAAR;AAC7B,YAAI,AAAM,KAAD,IAAI,MAAM,WAAU,6CAAa,AAA4B,oCAAJ,GAAG;AACrE,cAAO,MAAK;MACd;;;;;;EACF;;;;;;;;AAGE,UAAW;EACb;;MA+BkB,sCAAU;YAAG","file":"services.ddc.js"}');
  // Exports:
  return {
    services: services,
    src__services__binding: src__services__binding,
    src__services__asset_bundle: src__services__asset_bundle
  };
});

//# sourceMappingURL=services.ddc.js.map
