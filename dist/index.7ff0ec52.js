// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ko2YT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9f84b2077ff0ec52";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dUn2x":[function(require,module,exports) {
var _wordoftheday = require("./wordoftheday");
class Dictionary {
    #data;
    #history = JSON.parse(localStorage.getItem("history")) || [];
    #index = parseInt(localStorage.getItem("index")) || 0;
    #date = new Date().toLocaleString();
    #lastGeneratedTime = parseInt(localStorage.getItem("lastGeneratedTime")) || 0;
    #currentTime = new Date().getTime();
    #timeSinceLastGenerated = this.#currentTime - this.#lastGeneratedTime;
    #twentyFourHours = 86400000;
    #timeLeft = this.#twentyFourHours - this.#timeSinceLastGenerated;
    #generatedWord = JSON.parse(localStorage.getItem("generatedWord")) || "";
    constructor(){
        this.form = document.querySelector("form");
        this.input = document.querySelector("input");
        this.mainContainer = document.querySelector(".main__content");
        this.fontChange = document.querySelector(".fontChange");
        this.fontToggleContainer = document.querySelector(".fontToggleContainer");
        this.body = document.querySelector("body");
        this.loader = document.querySelector(".loader");
        this.toggleBg = document.querySelector(".toggle__Container");
        this.toggle = document.querySelector(".toggle");
        this.overlay = document.querySelector(".overlay");
        this.listItem = document.querySelector(".listItem");
        this.historyModalWindow = document.querySelector(".historyModalWindow");
        this.button = document.querySelector("button");
        this.form.addEventListener("submit", this._searchWord.bind(this));
        this.mainContainer.addEventListener("click", this._playAudio.bind(this));
        this.mainContainer.addEventListener("click", this._renderHistory.bind(this));
        this.mainContainer.addEventListener("click", this._searchStringCall.bind(this));
        this.listItem.addEventListener("click", this._searchStringHistory.bind(this));
        this.listItem.addEventListener("click", this._deleteHistory.bind(this));
        this.fontChange.addEventListener("click", this._openFontContainer.bind(this));
        this.fontToggleContainer.addEventListener("click", this._toggleFont.bind(this));
        this.toggleBg.addEventListener("click", this._toggleBackgroundColor.bind(this));
        this.overlay.addEventListener("click", this._hideModal.bind(this));
        this.button.addEventListener("click", this._closeWindowModal.bind(this));
        // if time since the last word generated is greater than or equal to 24hours
        if (this.#timeSinceLastGenerated >= this.#twentyFourHours) {
            this.#generatedWord = (0, _wordoftheday.getRandomWord)();
            localStorage.setItem("lastGeneratedTime", this.#currentTime.toString());
            localStorage.setItem("generatedWord", JSON.stringify(this.#generatedWord));
        } else console.log(`Time until next random word generation: ${this.#timeLeft / 1000} seconds`);
        this._generateRandomWords();
        localStorage.setItem("lastGeneratedTime", this.#currentTime.toString());
    }
    _generateRandomWords() {
        if (!this.#generatedWord) this.#generatedWord = (0, _wordoftheday.getRandomWord)();
        this.input.value = this.#generatedWord;
        this._fetchWord(this.#generatedWord);
        localStorage.setItem("generatedWord", JSON.stringify(this.#generatedWord));
    }
    _hideModal() {
        this.fontToggleContainer.classList.add("hidden");
        this.fontToggleContainer.classList.remove("flex");
        this.overlay.classList.add("hidden");
    }
    _toggleBackgroundColor() {
        this.toggle.classList.toggle("translate-x-[25px]");
        document.documentElement.classList.toggle("dark");
    }
    _toggleFont(e) {
        let target = e.target;
        let p = this.fontChange.querySelector(".font");
        switch(true){
            case target.classList.contains("source"):
                document.documentElement.style.fontFamily = "'Source Sans Pro', sans-serif";
                this.body.style.fontFamily = "'Source Sans Pro', sans-serif";
                p.textContent = "Source sans pro";
                break;
            case target.classList.contains("rubik"):
                document.documentElement.style.fontFamily = "'Rubik', sans-serif";
                this.body.style.fontFamily = "'Rubik', sans-serif";
                p.textContent = "Rubik";
                break;
            case target.classList.contains("sans"):
                document.documentElement.style.fontFamily = "'Open Sans', sans-serif";
                this.body.style.fontFamily = "'Open Sans', sans-serif";
                p.textContent = "Open sans";
                break;
            default:
                document.documentElement.style.fontFamily = "'Source Sans Pro', sans-serif";
                this.body.style.fontFamily = "'Source Sans Pro', sans-serif";
                p.textContent = "Source sans pro";
        }
    }
    _openFontContainer() {
        this.fontToggleContainer.classList.toggle("hidden");
        this.fontToggleContainer.classList.toggle("flex");
        this.overlay.classList.toggle("hidden");
        document.querySelector(".angle").classList.toggle("rotate");
    }
    _searchStringCall(e) {
        let element = e.target.closest(".searchStringLink");
        if (!element) return;
        // search for any clicked item (synonyms, antonyms)
        this.input.value = element.textContent;
        this._fetchWord(element.textContent.trim());
    }
    _deleteHistory(e) {
        let delBtn = e.target.closest(".delbtn");
        if (!delBtn) return;
        const index = parseInt(delBtn.id);
        const itemIndex = this.#history.findIndex((element)=>element.id === index);
        this.#history.splice(itemIndex, 1);
        localStorage.setItem("history", JSON.stringify(this.#history));
        this._historyElement();
    }
    _searchStringHistory(e) {
        let element = e.target.closest(".historyLink");
        if (!element) return;
        if (e.target.classList.contains("delbtn")) return;
        // accessing the element to be searched
        let stringEl = element.firstElementChild.firstElementChild.textContent.trim();
        this.input.value = stringEl;
        this._fetchWord(stringEl);
        // close modal window on clicking on element
        this.historyModalWindow.classList.add("translate-x-[100%]");
    }
    _historyElement() {
        let history = "";
        this.#history.forEach((historyEl)=>{
            history += `
        <div class="listEl historyLink bg-historyContainerEl cursor-pointer relative flex items-center justify-between px-4 py-5 dark:bg-darkBg" id="${historyEl.id}">
          <div class="content-container">
              <li class="text-base dark:text-white pb-2">${historyEl.word}</li>
              <p class="text-xs dark:text-white italic">${historyEl.date}</p>
          </div>
          <i class="delbtn fa-solid fa-xmark fa-lg cursor-pointer dark:text-headingsIconsWhiteBg" id="${historyEl.id}"></i>
        </div>`;
        });
        this.listItem.innerHTML = history || `<div>You've got no history for now, start by making a search!</div>`;
    }
    _closeWindowModal() {
        this.historyModalWindow.classList.add("translate-x-[100%]");
    }
    _renderHistory(e) {
        let clickedEl = e.target.closest(".historyContainer");
        if (!clickedEl) return;
        this.historyModalWindow.classList.remove("translate-x-[100%]");
        this._historyElement();
    }
    _playAudio(e) {
        let clickedEl = e.target.closest(".audio");
        if (!clickedEl) return;
        for (const phonetic of this.#data.phonetics)if (phonetic.audio) {
            const audio = new Audio(phonetic.audio);
            audio.play();
            break;
        }
    }
    _renderWordMeaning(data) {
        let html = `
        <div class="hd flex items-center justify-between">
          <div class="searchString">
            <h2 class="tracking-widest text-[30px] lg:text-[40px] font-bold text-headingsIconsWhiteBg">${data.word}</h2>
            <p class="font-bold text-bullet">${data.phonetic ? data.phonetic : ""}</p>
          </div>

          <div class="audioHistoryContainer flex items-center gap-3">
            <div class="audio flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">
              <i class="fa-solid fa-play fa-lg text-textColorsWhiteBg"></i>
            </div>
            <div class="historyContainer flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">
              <i class="fa-solid fa-clock-rotate-left fa-lg text-textColorsWhiteBg"></i>
            </div>
          </div>
        </div>

        <div class="meaning__container my-8 flex flex-col gap-[1.5rem]">
        ${data.meanings.map((result)=>{
            return ` ${result.antonyms.length ? ` <div class="antonyms__section my-6 flex gap-[3rem]">
              <p class="font-bold text-headingsIconsWhiteBg">Antonyms</p>
              <ul class="flex flex-wrap gap-[0.5rem]">
               ${result.antonyms.map((word)=>{
                return `<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${word}</li>`;
            }).join("")}
              </ul>
            </div>` : ""}
          
         ${`<div class="${result.partOfSpeech} flex items-center justify-between">
             <h2 class="font-bold dark:text-headingsIconsWhiteBg">${result.partOfSpeech}</h2>
             <div class="line h-[2px] w-[40%] bg-headingsIconsWhiteBg"></div>
           </div>
           <p class="my-2 text-sm font-bold text-headingsIconsWhiteBg">Meaning</p>

           <ul class="flex flex-col ${result.definitions.length > 0 ? "gap-[1rem]" : ""}">
              ${result.definitions.length ? result.definitions.map((word)=>{
                return `<li class="meaningWord text-base text-txtColor dark:text-white">${word.definition}</li>
              <p class="text-sm text-examples font-bold italic mb-[20px]">${word.example ? word.example : ""}</p>`;
            }).join("") : ""}
            </ul>
           `} 

          ${result.synonyms.length ? ` <div class="synonyms__section my-2 flex gap-[3rem]">
              <p class="font-bold text-headingsIconsWhiteBg">Synonyms</p>
              <ul class="flex flex-wrap gap-[0.5rem]">
               ${result.synonyms.map((word)=>{
                return `<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${word}</li>`;
            }).join("")}
              </ul>
            </div>` : ""}`;
        })}
        </div>

        <div class="w-full">
          <div class="borderTop h-1 w-full border-t border-headingsIconsWhiteBg"></div>
          <p class="font-base underline dark:text-white">Source</p>

          ${data.sourceUrls.length ? data.sourceUrls.map((url)=>{
            return `<div class="links__container my-4">
            <div class="link mb-2 flex items-center">
              <p class="text-sm font-bold text-headingsIconsWhiteBg md:text-base hover:underline"><a href="${url}" target="_blank">${url}</a></p>
              <i class="fa-solid fa-up-right-from-square fa-xs pl-2 dark:text-headingsIconsWhiteBg"></i>
            </div>
          </div>`;
        }).join("") : ""}
      </div>
        `;
        this.mainContainer.innerHTML = html;
    }
    _searchWord(e) {
        e.preventDefault();
        if (!this.input.value) return;
        this._fetchWord(this.input.value);
    }
    async _fetchWord(word) {
        try {
            this.loader.classList.remove("hidden");
            // emptying main container when searching for any new word
            this.mainContainer.innerHTML = "";
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const [data] = await res.json();
            if (!res.ok) throw new Error("Word not found!");
            this.#data = data;
            this._renderWordMeaning(this.#data);
            // increment global variable index
            ++this.#index;
            let storage = {
                id: this.#index,
                word: this.#data.word,
                date: this.#date
            };
            this.#history.unshift(storage);
            localStorage.setItem("history", JSON.stringify(this.#history));
            localStorage.setItem("index", JSON.stringify(this.#index));
        } catch (err) {
            console.log(err);
            this.mainContainer.innerHTML = `Sorry pal, we couldn't find the word you were searching for. You can try the search again at later time or head to the web instead`;
        } finally{
            this.loader.classList.add("hidden");
        }
    }
}
const word = new Dictionary();

},{"./wordoftheday":"hwWW5"}],"hwWW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomWord", ()=>getRandomWord);
var _wordListJs = require("./WordList.js");
const getRandomWord = ()=>{
    let index = Math.floor(Math.random() * (0, _wordListJs.words).length);
    let randomWord = (0, _wordListJs.words)[index];
    return randomWord;
};

},{"./WordList.js":"ck6X1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ck6X1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "words", ()=>words);
const words = [
    "abacus",
    "abhor",
    "abject",
    "abnegate",
    "abode",
    "abrogate",
    "abstemious",
    "abstruse",
    "accede",
    "accolade",
    "accost",
    "acerbic",
    "acquiesce",
    "acrimonious",
    "acumen",
    "adage",
    "adamant",
    "admonish",
    "adroit",
    "adulation",
    "adulterate",
    "adumbrate",
    "adventitious",
    "aegis",
    "aesthetic",
    "affable",
    "affluent",
    "aggrandize",
    "agile",
    "agitation",
    "agog",
    "ailment",
    "alacrity",
    "alias",
    "alienate",
    "allege",
    "allure",
    "aloof",
    "altruism",
    "amalgamate",
    "ambiguous",
    "ambivalent",
    "ameliorate",
    "amenable",
    "amiable",
    "amorphous",
    "anachronistic",
    "anathema",
    "anomaly",
    "antagonize",
    "antediluvian",
    "antedote",
    "anthropomorphic",
    "antipathy",
    "antithesis",
    "apathy",
    "aphorism",
    "apocalyptic",
    "apocryphal",
    "apostate",
    "apotheosis",
    "apparition",
    "appease",
    "apprehension",
    "approbation",
    "appropriate",
    "aptitude",
    "arbitrary",
    "arboreal",
    "arcane",
    "archaic",
    "ardent",
    "arduous",
    "aristocracy",
    "armistice",
    "arrogance",
    "articulate",
    "ascetic",
    "asperity",
    "aspersion",
    "assail",
    "assuage",
    "astute",
    "asylum",
    "atavistic",
    "atheist",
    "atonement",
    "attenuate",
    "attest",
    "attribute",
    "augment",
    "auspicious",
    "austere",
    "autocrat",
    "avarice",
    "aversion",
    "avow",
    "awe",
    "awry",
    "axiomatic",
    "azure",
    "balk",
    "balm",
    "banal",
    "baneful",
    "barrage",
    "bastion",
    "bawdy",
    "beatitude",
    "bedlam",
    "befuddle",
    "beguile",
    "belabor",
    "beleaguer",
    "belie",
    "bellicose",
    "belligerent",
    "bemoan",
    "benevolent",
    "benign",
    "bequest",
    "bereave",
    "berserk",
    "beseech",
    "besmirch",
    "bestial",
    "betray",
    "bevy",
    "bewilder",
    "bigotry",
    "blandishment",
    "blase",
    "blasphemy",
    "blatant",
    "blight",
    "blithe",
    "bloviate"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ko2YT","dUn2x"], "dUn2x", "parcelRequire0111")

//# sourceMappingURL=index.7ff0ec52.js.map
