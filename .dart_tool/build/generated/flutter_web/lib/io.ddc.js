define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const io = Object.create(dart.library);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  io.Platform = class Platform extends core.Object {
    static get operatingSystem() {
      return io.Platform._operatingSystem;
    }
  };
  (io.Platform.new = function() {
    ;
  }).prototype = io.Platform.prototype;
  dart.addTypeTests(io.Platform);
  dart.setLibraryUri(io.Platform, "package:flutter_web/io.dart");
  dart.defineLazy(io.Platform, {
    /*io.Platform._operatingSystem*/get _operatingSystem() {
      return "android";
    },
    /*io.Platform.isLinux*/get isLinux() {
      return io.Platform._operatingSystem === "linux";
    },
    /*io.Platform.isMacOS*/get isMacOS() {
      return io.Platform._operatingSystem === "macos";
    },
    /*io.Platform.isWindows*/get isWindows() {
      return io.Platform._operatingSystem === "windows";
    },
    /*io.Platform.isAndroid*/get isAndroid() {
      return io.Platform._operatingSystem === "android";
    },
    /*io.Platform.isIOS*/get isIOS() {
      return io.Platform._operatingSystem === "ios";
    },
    /*io.Platform.isFuchsia*/get isFuchsia() {
      return io.Platform._operatingSystem === "fuchsia";
    },
    /*io.Platform.environment*/get environment() {
      return dart.constMap(core.String, core.String, ["FLUTTER_TEST", "true"]);
    }
  });
  io._ProgramExitedError = class _ProgramExitedError extends core.Error {
    toString() {
      return "Program exited";
    }
  };
  (io._ProgramExitedError.new = function() {
    io._ProgramExitedError.__proto__.new.call(this);
    ;
  }).prototype = io._ProgramExitedError.prototype;
  dart.addTypeTests(io._ProgramExitedError);
  dart.setLibraryUri(io._ProgramExitedError, "package:flutter_web/io.dart");
  dart.defineExtensionMethods(io._ProgramExitedError, ['toString']);
  io.HttpOverrides = class HttpOverrides extends core.Object {
    createHttpClient(_) {
      return null;
    }
  };
  (io.HttpOverrides.new = function() {
    ;
  }).prototype = io.HttpOverrides.prototype;
  dart.addTypeTests(io.HttpOverrides);
  dart.setMethodSignature(io.HttpOverrides, () => ({
    __proto__: dart.getMethods(io.HttpOverrides.__proto__),
    createHttpClient: dart.fnType(io.HttpClient, [io.SecurityContext])
  }));
  dart.setLibraryUri(io.HttpOverrides, "package:flutter_web/io.dart");
  dart.defineLazy(io.HttpOverrides, {
    /*io.HttpOverrides.global*/get global() {
      return null;
    },
    set global(_) {}
  });
  io.HttpClient = class HttpClient extends core.Object {
    get autoUncompress() {
      return this[autoUncompress];
    }
    set autoUncompress(value) {
      this[autoUncompress] = value;
    }
    get connectionTimeout() {
      return this[connectionTimeout];
    }
    set connectionTimeout(value) {
      this[connectionTimeout] = value;
    }
    get idleTimeout() {
      return this[idleTimeout];
    }
    set idleTimeout(value) {
      this[idleTimeout] = value;
    }
    get maxConnectionsPerHost() {
      return this[maxConnectionsPerHost];
    }
    set maxConnectionsPerHost(value) {
      this[maxConnectionsPerHost] = value;
    }
    get userAgent() {
      return this[userAgent];
    }
    set userAgent(value) {
      this[userAgent] = value;
    }
    addCredentials(url, realm, credentials) {
    }
    addProxyCredentials(host, port, realm, credentials) {
    }
    set authenticate(f) {
    }
    set authenticateProxy(f) {
    }
    set badCertificateCallback(callback) {
    }
    close(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
    }
    delete(host, port, path) {
      return null;
    }
    deleteUrl(url) {
      return null;
    }
    set findProxy(f) {
    }
    get(host, port, path) {
      return null;
    }
    getUrl(url) {
      return null;
    }
    head(host, port, path) {
      return null;
    }
    headUrl(url) {
      return null;
    }
    open(method, host, port, path) {
      return null;
    }
    openUrl(method, url) {
      return null;
    }
    patch(host, port, path) {
      return null;
    }
    patchUrl(url) {
      return null;
    }
    post(host, port, path) {
      return null;
    }
    postUrl(url) {
      return null;
    }
    put(host, port, path) {
      return null;
    }
    putUrl(url) {
      return null;
    }
  };
  (io.HttpClient.new = function() {
    this[autoUncompress] = null;
    this[connectionTimeout] = null;
    this[idleTimeout] = null;
    this[maxConnectionsPerHost] = null;
    this[userAgent] = null;
    ;
  }).prototype = io.HttpClient.prototype;
  dart.addTypeTests(io.HttpClient);
  const autoUncompress = Symbol("HttpClient.autoUncompress");
  const connectionTimeout = Symbol("HttpClient.connectionTimeout");
  const idleTimeout = Symbol("HttpClient.idleTimeout");
  const maxConnectionsPerHost = Symbol("HttpClient.maxConnectionsPerHost");
  const userAgent = Symbol("HttpClient.userAgent");
  dart.setMethodSignature(io.HttpClient, () => ({
    __proto__: dart.getMethods(io.HttpClient.__proto__),
    addCredentials: dart.fnType(dart.void, [core.Uri, core.String, io.HttpClientCredentials]),
    addProxyCredentials: dart.fnType(dart.void, [core.String, core.int, core.String, io.HttpClientCredentials]),
    close: dart.fnType(dart.void, [], {force: core.bool}),
    delete: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    deleteUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri]),
    get: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    getUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri]),
    head: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    headUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri]),
    open: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.String, core.int, core.String]),
    openUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.Uri]),
    patch: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    patchUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri]),
    post: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    postUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri]),
    put: dart.fnType(async.Future$(io.HttpClientRequest), [core.String, core.int, core.String]),
    putUrl: dart.fnType(async.Future$(io.HttpClientRequest), [core.Uri])
  }));
  dart.setSetterSignature(io.HttpClient, () => ({
    __proto__: dart.getSetters(io.HttpClient.__proto__),
    authenticate: dart.fnType(async.Future$(core.bool), [core.Uri, core.String, core.String]),
    authenticateProxy: dart.fnType(async.Future$(core.bool), [core.String, core.int, core.String, core.String]),
    badCertificateCallback: dart.fnType(core.bool, [io.X509Certificate, core.String, core.int]),
    findProxy: dart.fnType(core.String, [core.Uri])
  }));
  dart.setLibraryUri(io.HttpClient, "package:flutter_web/io.dart");
  dart.setFieldSignature(io.HttpClient, () => ({
    __proto__: dart.getFields(io.HttpClient.__proto__),
    autoUncompress: dart.fieldType(core.bool),
    connectionTimeout: dart.fieldType(core.Duration),
    idleTimeout: dart.fieldType(core.Duration),
    maxConnectionsPerHost: dart.fieldType(core.int),
    userAgent: dart.fieldType(core.String)
  }));
  io.HttpClientCredentials = class HttpClientCredentials extends core.Object {};
  (io.HttpClientCredentials.new = function() {
    ;
  }).prototype = io.HttpClientCredentials.prototype;
  dart.addTypeTests(io.HttpClientCredentials);
  dart.setLibraryUri(io.HttpClientCredentials, "package:flutter_web/io.dart");
  io.HttpClientRequest = class HttpClientRequest extends core.Object {
    get encoding() {
      return this[encoding];
    }
    set encoding(value) {
      this[encoding] = value;
    }
  };
  (io.HttpClientRequest.new = function() {
    this[encoding] = null;
    ;
  }).prototype = io.HttpClientRequest.prototype;
  dart.addTypeTests(io.HttpClientRequest);
  const encoding = Symbol("HttpClientRequest.encoding");
  dart.setLibraryUri(io.HttpClientRequest, "package:flutter_web/io.dart");
  dart.setFieldSignature(io.HttpClientRequest, () => ({
    __proto__: dart.getFields(io.HttpClientRequest.__proto__),
    encoding: dart.fieldType(convert.Encoding)
  }));
  io.HttpHeaders = class HttpHeaders extends core.Object {
    _get(name) {
      return JSArrayOfString().of([]);
    }
    add(name, value) {
    }
    clear() {
    }
    forEach(f) {
    }
    noFolding(name) {
    }
    remove(name, value) {
    }
    removeAll(name) {
    }
    set(name, value) {
    }
    value(name) {
      return null;
    }
  };
  (io.HttpHeaders.new = function() {
    ;
  }).prototype = io.HttpHeaders.prototype;
  dart.addTypeTests(io.HttpHeaders);
  dart.setMethodSignature(io.HttpHeaders, () => ({
    __proto__: dart.getMethods(io.HttpHeaders.__proto__),
    _get: dart.fnType(core.List$(core.String), [core.String]),
    add: dart.fnType(dart.void, [core.String, core.Object]),
    clear: dart.fnType(dart.void, []),
    forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [core.String, core.List$(core.String)])]),
    noFolding: dart.fnType(dart.void, [core.String]),
    remove: dart.fnType(dart.void, [core.String, core.Object]),
    removeAll: dart.fnType(dart.void, [core.String]),
    set: dart.fnType(dart.void, [core.String, core.Object]),
    value: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(io.HttpHeaders, "package:flutter_web/io.dart");
  io.HttpClientResponse = class HttpClientResponse extends core.Object {};
  (io.HttpClientResponse.new = function() {
    ;
  }).prototype = io.HttpClientResponse.prototype;
  dart.addTypeTests(io.HttpClientResponse);
  dart.setLibraryUri(io.HttpClientResponse, "package:flutter_web/io.dart");
  io.HttpConnectionInfo = class HttpConnectionInfo extends core.Object {};
  (io.HttpConnectionInfo.new = function() {
    ;
  }).prototype = io.HttpConnectionInfo.prototype;
  dart.addTypeTests(io.HttpConnectionInfo);
  dart.setLibraryUri(io.HttpConnectionInfo, "package:flutter_web/io.dart");
  io.Socket = class Socket extends core.Object {};
  (io.Socket.new = function() {
    ;
  }).prototype = io.Socket.prototype;
  dart.addTypeTests(io.Socket);
  dart.setLibraryUri(io.Socket, "package:flutter_web/io.dart");
  io.Cookie = class Cookie extends core.Object {};
  (io.Cookie.new = function() {
    ;
  }).prototype = io.Cookie.prototype;
  dart.addTypeTests(io.Cookie);
  dart.setLibraryUri(io.Cookie, "package:flutter_web/io.dart");
  io.RedirectionInfo = class RedirectionInfo extends core.Object {};
  (io.RedirectionInfo.new = function() {
    ;
  }).prototype = io.RedirectionInfo.prototype;
  dart.addTypeTests(io.RedirectionInfo);
  dart.setLibraryUri(io.RedirectionInfo, "package:flutter_web/io.dart");
  io.RedirectInfo = class RedirectInfo extends core.Object {};
  (io.RedirectInfo.new = function() {
    ;
  }).prototype = io.RedirectInfo.prototype;
  dart.addTypeTests(io.RedirectInfo);
  dart.setLibraryUri(io.RedirectInfo, "package:flutter_web/io.dart");
  io.X509Certificate = class X509Certificate extends core.Object {};
  (io.X509Certificate.new = function() {
    ;
  }).prototype = io.X509Certificate.prototype;
  dart.addTypeTests(io.X509Certificate);
  dart.setLibraryUri(io.X509Certificate, "package:flutter_web/io.dart");
  io.SecurityContext = class SecurityContext extends core.Object {};
  (io.SecurityContext.new = function() {
    ;
  }).prototype = io.SecurityContext.prototype;
  dart.addTypeTests(io.SecurityContext);
  dart.setLibraryUri(io.SecurityContext, "package:flutter_web/io.dart");
  io.exit = function(exitCode) {
    dart.throw(new io._ProgramExitedError.new());
  };
  dart.trackLibraries("packages/flutter_web/io", {
    "package:flutter_web/io.dart": io
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/io.dart"],"names":[],"mappings":";;;;;;;;;;;;AAkBuC;IAAgB;;;;EA8CvD;;;;MAnDe,4BAAgB;YAAG;;MAed,mBAAO;YAAI,AAAiB,kCAAG;;MAM/B,mBAAO;YAAI,AAAiB,kCAAG;;MAM/B,qBAAS;YAAI,AAAiB,kCAAG;;MAMjC,qBAAS;YAAI,AAAiB,kCAAG;;MAMjC,iBAAK;YAAI,AAAiB,kCAAG;;MAM7B,qBAAS;YAAI,AAAiB,kCAAG;;MAElB,uBAAW;YAAmB,0CAE7D,gBAAgB;;;;;AAUG;IAAgB;;;;;EACvC;;;;;qBAK8C;AAC1C,YAAO;IACT;;;;EACF;;;;;;;;MALuB,uBAAM;;;;;;IAQtB;;;;;;IACI;;;;;;IACA;;;;;;IACL;;;;;;IACG;;;;;;mBAEC,KAAY,OAA6B;IAAc;wBAEpD,MAAU,MAAa,OAA6B;IAAc;qBAEb;IAAI;0BAG5D;IAAI;+BAEmD;IAAW;;UACzD,+CAAQ;IAAS;WACM,MAAU,MAAa;AAC7D,YAAO;IACT;cAEwC;AACtC,YAAO;IACT;kBAEuC;IAAI;QACN,MAAU,MAAa;AAC1D,YAAO;IACT;WAEqC;AACnC,YAAO;IACT;SAEsC,MAAU,MAAa;AAC3D,YAAO;IACT;YAEsC;AACpC,YAAO;IACT;SAGW,QAAe,MAAU,MAAa;AAC/C,YAAO;IACT;YAEyC,QAAY;AACnD,YAAO;IACT;UAEuC,MAAU,MAAa;AAC5D,YAAO;IACT;aAEuC;AACrC,YAAO;IACT;SAEsC,MAAU,MAAa;AAC3D,YAAO;IACT;YAEsC;AACpC,YAAO;IACT;QAEqC,MAAU,MAAa;AAC1D,YAAO;IACT;WAEqC;AACnC,YAAO;IACT;;;IAzEK;IACI;IACA;IACL;IACG;;EAsET;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAE6B;;;;IAGlB;;;;;;;;;;EAgBX;;;;;;;;;SAGkC;AAAS,YAAQ;IAAE;QACnC,MAAa;IAAQ;;IACvB;YAC+C;IAAI;cAC3C;IAAO;WACV,MAAa;IAAQ;cAClB;IAAO;QACb,MAAa;IAAQ;UACjB;AAAS;IAAI;;;;EACnC;;;;;;;;;;;;;;;;;;EAkBA;;;;;;EAE0B;;;;;;EAEZ;;;;;;EAEA;;;;;;EAES;;;;;;EAEH;;;;;;EAEG;;;;;;EAEA;;;qBA7JT;IACZ,WAAM;EACR","file":"io.ddc.js"}');
  // Exports:
  return {
    io: io
  };
});

//# sourceMappingURL=io.ddc.js.map
