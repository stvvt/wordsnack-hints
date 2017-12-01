/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wordsnack_1 = __webpack_require__(2);
(function () {
    var dom = {
        loading: document.querySelector("div#loading"),
        letters: document.querySelector("input[name=letters]"),
        wordLength: document.querySelector("input[name=wordLength]"),
        results: document.querySelector("ol#hints"),
        button: document.querySelector("button#hints")
    };
    if (dom.loading == null || dom.letters == null || dom.wordLength == null || dom.results == null) {
        throw new Error("Invalid DOM");
    }
    function setLoading(state) {
        if (state) {
            clearHints();
        }
        dom.loading.style.visibility = state ? "" : "none";
    }
    function clearHints() {
        while (dom.results.lastChild) {
            dom.results.removeChild(dom.results.lastChild);
        }
    }
    function addHint(word) {
        var li = document.createElement("li");
        li.innerText = word;
        dom.results.appendChild(li);
    }
    dom.button.addEventListener("click", function () {
        clearHints();
        setLoading(true);
        wordsnack_1.hints(dom.letters.value, +dom.wordLength.value, function (word) {
            setLoading(false);
            if (word === null) {
                return;
            }
            addHint(word);
        });
    });
})();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(3);
var rx_combinatorics_1 = __webpack_require__(5);
var buffer_1 = __webpack_require__(8);
var sounds_1 = __webpack_require__(9);
function candidates(letters, wordlength) {
    var _a, _b, c, _c, _d, p, e_1_1, e_2_1, e_2, _e, e_1, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 11, 12, 13]);
                _a = __values(rx_combinatorics_1.combinations(letters.split(""), wordlength)), _b = _a.next();
                _g.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 10];
                c = _b.value;
                _g.label = 2;
            case 2:
                _g.trys.push([2, 7, 8, 9]);
                _c = __values(rx_combinatorics_1.permutations(c)), _d = _c.next();
                _g.label = 3;
            case 3:
                if (!!_d.done) return [3 /*break*/, 6];
                p = _d.value;
                if (!sounds_1.default(p)) return [3 /*break*/, 5];
                return [4 /*yield*/, p.join("")];
            case 4:
                _g.sent();
                _g.label = 5;
            case 5:
                _d = _c.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_2_1 = _g.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}
function filterRealWords(words, cb) {
    var maxWordsInQuery = 50;
    try {
        for (var _a = __values(buffer_1.default(words, maxWordsInQuery)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var g = _b.value;
            var search = g.join("|");
            var url = "https://bg.wiktionary.org/w/api.php?origin=*&format=json&action=query&titles="
                + encodeURIComponent(search);
            var fetchOptions = {
                mode: "cors",
                method: "GET",
                headers: [
                    ["Accept", "application/json"]
                ]
            };
            // tslint:disable-next-line:no-console
            console.log("Fetching " + decodeURI(url) + " ...");
            fetch(url, fetchOptions)
                .then(function (response) { return response.json(); })
                .then(function (json) {
                var obj = json.query.pages;
                Object.keys(obj)
                    .filter(function (key) { return typeof obj[key].missing === "undefined"; })
                    .forEach(function (key) { return cb(obj[key].title); });
                cb(null);
            });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_3) throw e_3.error; }
    }
    var e_3, _c;
}
function hints(letters, wordlength, callback) {
    filterRealWords(candidates(letters, wordlength), callback);
}
exports.hints = hints;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// the fetch-polyfill polyfill installs the fetch() function with IE8 Support
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(4);
module.exports = self.fetch.bind(self);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  // if __disableNativeFetch is set to true, the it will always polyfill fetch
  // with Ajax.
  if (!self.__disableNativeFetch && self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob, options) {
    var reader = new FileReader()
    var contentType = options.headers.map['content-type'] ? options.headers.map['content-type'].toString() : ''
    var regex = /charset\=[0-9a-zA-Z\-\_]*;?/
    var _charset = blob.type.match(regex) || contentType.match(regex)
    var args = [blob]

    if(_charset) {
      args.push(_charset[0].replace(/^charset\=/, '').replace(/;$/, ''))
    }

    reader.readAsText.apply(reader, args)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body, options) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
        this._options = options
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob, this._options)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = input
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body, options)
  }

  Request.prototype.clone = function() {
    return new Request(this)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit, options)
    this.type = 'default'
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input
      } else {
        request = new Request(input, init)
      }

      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      var __onLoadHandled = false;

      function onload() {
        if (xhr.readyState !== 4) {
          return
        }
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;

        if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
        resolve(new Response(body, options))
      }
      xhr.onreadystatechange = onload;
      xhr.onload = onload;
      xhr.onerror = function() {
        if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      // `withCredentials` should be setted after calling `.open` in IE10
      // http://stackoverflow.com/a/19667959/1219343
      try {
        if (request.credentials === 'include') {
          if ('withCredentials' in xhr) {
            xhr.withCredentials = true;
          } else {
            console && console.warn && console.warn('withCredentials is not supported, you can ignore this warning');
          }
        }
      } catch (e) {
        console && console.warn && console.warn('set withCredentials error:' + e);
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true

  // Support CommonJS
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = self.fetch;
  }
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('xxxx');
Object.defineProperty(exports, "__esModule", { value: true });
var combinations_1 = __webpack_require__(6);
exports.combinations = combinations_1.combinations;
var permutations_1 = __webpack_require__(7);
exports.permutations = permutations_1.permutations;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function unique(arr) {
    return arr.reduce(function (acc, item) {
        acc.set(item, true);
        return acc;
    }, new Map()).keys();
}
function combinations(arr, n) {
    var _a, _b, item, e_1_1, _c, first, rest, dups, _d, _e, c, e_2_1, e_1, _f, e_2, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!(n >= arr.length || n <= 1)) return [3 /*break*/, 11];
                if (!(n === arr.length)) return [3 /*break*/, 2];
                return [4 /*yield*/, arr];
            case 1:
                _h.sent();
                return [3 /*break*/, 10];
            case 2:
                if (!(n === 1)) return [3 /*break*/, 10];
                _h.label = 3;
            case 3:
                _h.trys.push([3, 8, 9, 10]);
                _a = __values(unique(arr)), _b = _a.next();
                _h.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 7];
                item = _b.value;
                return [4 /*yield*/, [item]];
            case 5:
                _h.sent();
                _h.label = 6;
            case 6:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _h.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
            case 11:
                _c = __read(arr), first = _c[0], rest = _c.slice(1);
                return [5 /*yield**/, __values(combinations(rest, n))];
            case 12:
                _h.sent();
                dups = rest.indexOf(first) >= 0;
                _h.label = 13;
            case 13:
                _h.trys.push([13, 18, 19, 20]);
                _d = __values(combinations(rest, n - 1)), _e = _d.next();
                _h.label = 14;
            case 14:
                if (!!_e.done) return [3 /*break*/, 17];
                c = _e.value;
                if (!(!dups || c.indexOf(first) >= 0)) return [3 /*break*/, 16];
                return [4 /*yield*/, __spread([first], c)];
            case 15:
                _h.sent();
                _h.label = 16;
            case 16:
                _e = _d.next();
                return [3 /*break*/, 14];
            case 17: return [3 /*break*/, 20];
            case 18:
                e_2_1 = _h.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 20];
            case 19:
                try {
                    if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 20: return [2 /*return*/];
        }
    });
}
exports.combinations = combinations;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
function insert(item, pos, arr) {
    var result = arr.slice();
    result.splice(pos, 0, item);
    return result;
}
function slide(item, arr) {
    var seen, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                seen = false;
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i <= arr.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, insert(item, i, arr)];
            case 2:
                _a.sent();
                if (item === arr[i]) {
                    return [2 /*return*/];
                }
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.slide = slide;
function permutations(arr) {
    var _a, first, rest, _b, _c, p, e_1_1, e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!(arr.length <= 1)) return [3 /*break*/, 2];
                return [4 /*yield*/, arr];
            case 1: return [2 /*return*/, _e.sent()];
            case 2:
                _a = __read(arr), first = _a[0], rest = _a.slice(1);
                _e.label = 3;
            case 3:
                _e.trys.push([3, 8, 9, 10]);
                _b = __values(permutations(rest)), _c = _b.next();
                _e.label = 4;
            case 4:
                if (!!_c.done) return [3 /*break*/, 7];
                p = _c.value;
                return [5 /*yield**/, __values(slide(first, p))];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                _c = _b.next();
                return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
        }
    });
}
exports.permutations = permutations;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
function buffer(generator, size) {
    var groupItems, generator_1, generator_1_1, i, e_1_1, e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                groupItems = [];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                generator_1 = __values(generator), generator_1_1 = generator_1.next();
                _b.label = 2;
            case 2:
                if (!!generator_1_1.done) return [3 /*break*/, 5];
                i = generator_1_1.value;
                groupItems.push(i);
                if (!(groupItems.length === size)) return [3 /*break*/, 4];
                return [4 /*yield*/, groupItems];
            case 3:
                _b.sent();
                groupItems = [];
                _b.label = 4;
            case 4:
                generator_1_1 = generator_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (generator_1_1 && !generator_1_1.done && (_a = generator_1.return)) _a.call(generator_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8:
                if (!(groupItems.length > 0)) return [3 /*break*/, 10];
                return [4 /*yield*/, groupItems];
            case 9:
                _b.sent();
                _b.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}
exports.default = buffer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vowels = "аеиоуюя";
var cosonants = "бвгджзйклмнпрстфхцчшщъь";
function isCosonant(ch) {
    return cosonants.indexOf(ch) >= 0;
}
function isVowel(ch) {
    return vowels.indexOf(ch) >= 0;
}
function default_1(str) {
    var v = 0;
    var c = 0;
    try {
        for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
            var ch = str_1_1.value;
            if (isVowel(ch)) {
                v++;
                c = 0;
            }
            else if (isCosonant(ch)) {
                c++;
                v = 0;
            }
            if (v > 2 || c > 3) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
    var e_1, _a;
}
exports.default = default_1;


/***/ })
/******/ ]);