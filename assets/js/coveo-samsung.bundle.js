(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Coveo"));
	else if(typeof define === 'function' && define.amd)
		define(["Coveo"], factory);
	else if(typeof exports === 'object')
		exports["CoveoSamsungExtension"] = factory(require("Coveo"));
	else
		root["CoveoSamsungExtension"] = factory(root["Coveo"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__31__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/public/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __webpack_require__(4);
var CustomOmniboxSuggestedResultTemplateResolver = /** @class */ (function () {
    function CustomOmniboxSuggestedResultTemplateResolver() {
    }
    CustomOmniboxSuggestedResultTemplateResolver.prototype.resolveByResult = function (result) {
        var _a = result.raw, raw = _a === void 0 ? {} : _a;
        var objecttype = raw.objecttype;
        if (-1 !== CustomOmniboxSuggestedResultTemplateResolver.PRODUCT_TEMPLATE_OBJECTTYPES.indexOf(objecttype)) {
            return new templates_1.CustomOmniboxSuggestionsProductTemplate();
        }
        if (-1 !== CustomOmniboxSuggestedResultTemplateResolver.REGULAR_TEMPLATE_OBJECTTYPES.indexOf(objecttype)) {
            return new templates_1.CustomOmniboxSuggestionsResultTemplate();
        }
        return new templates_1.CustomOmniboxSuggestionsBaseTemplate();
    };
    CustomOmniboxSuggestedResultTemplateResolver.prototype.resolveByType = function (type) {
        if ('history' === type) {
            return new templates_1.CustomOmniboxBaseSuggestionsHistoryTemplate();
        }
        return new templates_1.CustomOmniboxSuggestionsBaseTemplate();
    };
    CustomOmniboxSuggestedResultTemplateResolver.PRODUCT_TEMPLATE_OBJECTTYPES = ['Product'];
    CustomOmniboxSuggestedResultTemplateResolver.REGULAR_TEMPLATE_OBJECTTYPES = ["AppServices", "Explore", "AboutUs", "Support", "Customer"];
    return CustomOmniboxSuggestedResultTemplateResolver;
}());
exports.CustomOmniboxSuggestedResultTemplateResolver = CustomOmniboxSuggestedResultTemplateResolver;
exports.default = CustomOmniboxSuggestedResultTemplateResolver;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxBaseTemplate = /** @class */ (function () {
    function CustomOmniboxBaseTemplate() {
    }
    CustomOmniboxBaseTemplate.prototype.formatFields = function (fields) {
        return fields;
    };
    CustomOmniboxBaseTemplate.prototype.render = function (fields) {
        var template = _.template(this.instantiateToString());
        return template(this.formatFields(fields));
    };
    return CustomOmniboxBaseTemplate;
}());
exports.CustomOmniboxBaseTemplate = CustomOmniboxBaseTemplate;
exports.default = CustomOmniboxBaseTemplate;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxBaseTemplate_1 = __webpack_require__(1);
var CustomOmniboxSuggestionsTemplate = /** @class */ (function (_super) {
    __extends(CustomOmniboxSuggestionsTemplate, _super);
    function CustomOmniboxSuggestionsTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOmniboxSuggestionsTemplate.prototype.formatFields = function (fields) {
        var text = fields.text, result = __rest(fields, ["text"]);
        fields = this.formatResultTitle(result);
        fields.raw.highlightedTitle = this.getHighlightedTitle(text, result.title);
        return fields;
    };
    CustomOmniboxSuggestionsTemplate.prototype.formatResultTitle = function (result) {
        return result;
    };
    CustomOmniboxSuggestionsTemplate.prototype.getHighlightedTitle = function (text, resultTitle) {
        var title = this.replace(resultTitle, text);
        return title;
    };
    CustomOmniboxSuggestionsTemplate.prototype.replace = function (str, find) {
        if (str.length == 0 || find.length == 0) {
            return str;
        }
        var terms = find.replace(/\s+/g, '|');
        if (terms == '') {
            return str;
        }
        var replacement = "<span class=\"coveo-omnibox-hightlight\">$&</span>";
        return str.replace(new RegExp(terms, 'ig'), replacement);
    };
    CustomOmniboxSuggestionsTemplate.prototype.instantiateToString = function () {
        return "\n            <div class=\"custom-suggestion\">\n                <div class=\"title\">{{= raw.highlightedTitle }}</div>\n            </div>\n        ";
    };
    return CustomOmniboxSuggestionsTemplate;
}(CustomOmniboxBaseTemplate_1.default));
exports.CustomOmniboxSuggestionsTemplate = CustomOmniboxSuggestionsTemplate;
exports.default = CustomOmniboxSuggestionsTemplate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var $$ = Coveo.$$;
var ComponentOptions = Coveo.ComponentOptions;
var Initialization = Coveo.Initialization;
var OmniboxEvents = Coveo.OmniboxEvents;
var general_1 = __webpack_require__(5);
var CustomOmniboxSection = /** @class */ (function (_super) {
    __extends(CustomOmniboxSection, _super);
    function CustomOmniboxSection(element, options, bindings) {
        var _this = _super.call(this, element, CustomOmniboxSection.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = ComponentOptions.initComponentOptions(element, CustomOmniboxSection, options);
        _this.bind.onRootElement(OmniboxEvents.populateOmniboxSuggestions, function (args) { return _this.handleQuerySuggestions(args); });
        _this.toggleVisibility('');
        _this.render();
        return _this;
    }
    CustomOmniboxSection.prototype.render = function () {
        var _a = this.options, title = _a.title, id = _a.id, icon = _a.icon, iconType = _a.iconType, iconPath = _a.iconPath;
        if (title) {
            var h3 = $$('h3', { id: id, class: 'title' }, title).el;
            if (icon) {
                new general_1.IconPrefixedElement(h3, { icon: icon, iconType: iconType, iconPath: iconPath }, this.getBindings());
            }
            $$(this.element).el.prepend(h3);
        }
    };
    CustomOmniboxSection.prototype.handleQuerySuggestions = function (args) {
        var omnibox = args.omnibox;
        this.toggleVisibility(omnibox.getText());
    };
    CustomOmniboxSection.prototype.toggleVisibility = function (text) {
        if (text === void 0) { text = ''; }
        var _a = this.options, showWhenOmniboxHasText = _a.showWhenOmniboxHasText, showWhenOmniboxIsEmpty = _a.showWhenOmniboxIsEmpty, showWhenNoSuggestions = _a.showWhenNoSuggestions;
        var isVisible = true;
        if (!showWhenOmniboxHasText) {
            isVisible = isVisible && !text;
        }
        if (!showWhenOmniboxIsEmpty) {
            isVisible = isVisible && !!text;
        }
        if (!showWhenNoSuggestions) {
            var results = this.element.querySelector("div");
            var count = 0;
            if (results) {
                if ('coveo-magicbox-suggestions' !== results.getAttribute('class')) {
                    results = results.querySelector('.coveo-magicbox-suggestions');
                }
                count = results ? results.childElementCount : 0;
            }
            isVisible = isVisible && count > 0;
        }
        isVisible ? this.show() : this.hide();
    };
    CustomOmniboxSection.prototype.hide = function () {
        $$(this.element).el.classList.add('hidden');
    };
    CustomOmniboxSection.prototype.show = function () {
        $$(this.element).el.classList.remove('hidden');
    };
    CustomOmniboxSection.ID = 'CustomOmniboxSection';
    CustomOmniboxSection.options = {
        showWhenOmniboxHasText: ComponentOptions.buildBooleanOption({
            defaultValue: true
        }),
        showWhenOmniboxIsEmpty: ComponentOptions.buildBooleanOption({
            defaultValue: true
        }),
        showWhenNoSuggestions: ComponentOptions.buildBooleanOption({
            defaultValue: false
        }),
        expression: ComponentOptions.buildStringOption({
            defaultValue: '@uri'
        }),
        id: ComponentOptions.buildStringOption(),
        title: ComponentOptions.buildStringOption(),
        icon: ComponentOptions.buildStringOption(),
        iconType: ComponentOptions.buildStringOption(),
        iconPath: ComponentOptions.buildStringOption(),
    };
    return CustomOmniboxSection;
}(Component));
exports.CustomOmniboxSection = CustomOmniboxSection;
Initialization.registerAutoCreateComponent(CustomOmniboxSection);
exports.default = CustomOmniboxSection;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxBaseTemplate_1 = __webpack_require__(1);
exports.CustomOmniboxBaseTemplate = CustomOmniboxBaseTemplate_1.CustomOmniboxBaseTemplate;
var CustomOmniboxSuggestionsTemplate_1 = __webpack_require__(2);
exports.CustomOmniboxSuggestionsTemplate = CustomOmniboxSuggestionsTemplate_1.CustomOmniboxSuggestionsTemplate;
var CustomOmniboxBaseSuggestionsHistoryTemplate_1 = __webpack_require__(18);
exports.CustomOmniboxBaseSuggestionsHistoryTemplate = CustomOmniboxBaseSuggestionsHistoryTemplate_1.CustomOmniboxBaseSuggestionsHistoryTemplate;
var CustomOmniboxSuggestionsProductTemplate_1 = __webpack_require__(19);
exports.CustomOmniboxSuggestionsProductTemplate = CustomOmniboxSuggestionsProductTemplate_1.CustomOmniboxSuggestionsProductTemplate;
var CustomOmniboxSuggestionsResultTemplate_1 = __webpack_require__(20);
exports.CustomOmniboxSuggestionsResultTemplate = CustomOmniboxSuggestionsResultTemplate_1.CustomOmniboxSuggestionsResultTemplate;
var CustomOmniboxSuggestionsBaseTemplate_1 = __webpack_require__(21);
exports.CustomOmniboxSuggestionsBaseTemplate = CustomOmniboxSuggestionsBaseTemplate_1.CustomOmniboxSuggestionsBaseTemplate;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IconPrefixedElement_1 = __webpack_require__(22);
exports.IconPrefixedElement = IconPrefixedElement_1.IconPrefixedElement;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxSuggestionsCache = /** @class */ (function () {
    function CustomOmniboxSuggestionsCache() {
        this.cache = {};
    }
    CustomOmniboxSuggestionsCache.prototype.getSuggestions = function (hash, suggestionsFetcher) {
        var _this = this;
        if (this.cache[hash] != null) {
            return this.cache[hash];
        }
        var promise = suggestionsFetcher();
        this.cache[hash] = promise;
        promise.catch(function () { return _this.clearSuggestion(hash); });
        return this.cache[hash];
    };
    CustomOmniboxSuggestionsCache.prototype.clearSuggestion = function (hash) {
        if (!hash || hash.length === 0) {
            return null;
        }
        delete this.cache[hash];
    };
    return CustomOmniboxSuggestionsCache;
}());
exports.CustomOmniboxSuggestionsCache = CustomOmniboxSuggestionsCache;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
// your custo component
__export(__webpack_require__(15));
// your ui components here
__export(__webpack_require__(16));
__export(__webpack_require__(25));
__export(__webpack_require__(5));
var SwapVar_1 = __webpack_require__(33);
SwapVar_1.swapVar(this);
// images for webpack
__webpack_require__(34);
// cultures for webpack
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(10);
var UrlUtils_1 = __webpack_require__(11);
exports.UrlUtils = UrlUtils_1.UrlUtils;
var HttpUtils_1 = __webpack_require__(12);
exports.HttpUtils = HttpUtils_1.HttpUtils;
var CustomEvents_1 = __webpack_require__(13);
exports.CustomEvents = CustomEvents_1.CustomEvents;
var SamsungHelper_1 = __webpack_require__(14);
exports.SamsungHelper = SamsungHelper_1.SamsungHelper;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

String.prototype.getInitials = function (glue) {
    if (glue === void 0) { glue = true; }
    var initials = this.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g) || [];
    if (glue) {
        return initials.join('');
    }
    return initials;
};
String.prototype.capitalize = function () {
    return this.toLowerCase().replace(/\b\w/g, function (m) {
        return m.toUpperCase();
    });
};
/**
* Camelize a string, cutting the string by multiple separators like
* hyphens, underscores and spaces.
*
* @return string Camelized text
*/
String.prototype.camelize = function () {
    return this.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
        if (p2)
            return p2.toUpperCase();
        return p1.toLowerCase();
    });
};
/**
 * Decamelizes a string with/without a custom separator (underscore by default).
 *
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 */
String.prototype.decamelize = function (separator) {
    separator = typeof separator === 'undefined' ? '_' : separator;
    return this
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    UrlUtils.getUrlParams = function (query) {
        if (!query) {
            return {};
        }
        var parser = document.createElement('a');
        var search = '';
        parser.href = query;
        var hash = parser.hash.substring(1);
        if (hash) {
            var hashParser = document.createElement('a');
            hashParser.href = hash;
            search = hashParser.search.substring(1);
        }
        else {
            search = parser.search.substring(1);
        }
        search = search || query;
        return (/^[?#]/.test(search) ? search.slice(1) : search)
            .split('&')
            .reduce(function (params, param) {
            var _a = param.split('='), key = _a[0], value = _a[1];
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, {});
    };
    UrlUtils.getLocationFromUri = function (query) {
        if (!query) {
            return {};
        }
        var anchor = document.createElement('a');
        anchor.href = query;
        var retVal = {
            href: anchor.href,
            pathname: anchor.pathname,
            hostname: anchor.hostname,
            host: anchor.host,
            search: anchor.search,
            protocol: anchor.protocol,
            hash: anchor.hash
        };
        return retVal;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;
;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpUtils = /** @class */ (function () {
    function HttpUtils() {
    }
    HttpUtils.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    };
    return HttpUtils;
}());
exports.HttpUtils = HttpUtils;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomEvents = /** @class */ (function () {
    function CustomEvents() {
    }
    CustomEvents.yourCustomEvent = 'yourCustomEvent';
    return CustomEvents;
}());
exports.CustomEvents = CustomEvents;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SamsungHelper = /** @class */ (function () {
    function SamsungHelper() {
    }
    SamsungHelper.yourHelperMethod = function () {
        return '';
    };
    return SamsungHelper;
}());
exports.SamsungHelper = SamsungHelper;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
/**
 * Required customization specifically applied for your implementation
 */
var SamsungCusto = /** @class */ (function (_super) {
    __extends(SamsungCusto, _super);
    function SamsungCusto(element, options, bindings) {
        var _this = _super.call(this, element, SamsungCusto.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = ComponentOptions.initComponentOptions(element, SamsungCusto, options);
        _this.setupPipelineContext(_this.options.pipelineContext);
        _this.bind.onRootElement(Coveo.QueryEvents.buildingQuery, _this.handleBuildingQuery);
        return _this;
    }
    SamsungCusto.prototype.setupPipelineContext = function (data) {
        this.context = _.pick(data, _.identity) || {};
    };
    SamsungCusto.prototype.getPipelineContext = function () {
        return this.context;
    };
    SamsungCusto.prototype.handleBuildingQuery = function (data) {
        data.queryBuilder.addContext(this.context);
    };
    SamsungCusto.ID = 'SamsungCusto';
    SamsungCusto.options = {
        pipelineContext: Coveo.ComponentOptions.buildJsonOption()
    };
    return SamsungCusto;
}(Component));
exports.SamsungCusto = SamsungCusto;
;
Initialization.registerAutoCreateComponent(SamsungCusto);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxSuggestions_1 = __webpack_require__(17);
exports.CustomOmniboxSuggestions = CustomOmniboxSuggestions_1.CustomOmniboxSuggestions;
var CustomOmniboxSuggestionsCache_1 = __webpack_require__(6);
exports.CustomOmniboxSuggestionsCache = CustomOmniboxSuggestionsCache_1.CustomOmniboxSuggestionsCache;
var CustomOmniboxSearchHistory_1 = __webpack_require__(23);
exports.CustomOmniboxSearchHistory = CustomOmniboxSearchHistory_1.CustomOmniboxSearchHistory;
var CustomOmniboxMatchedContents_1 = __webpack_require__(24);
exports.CustomOmniboxMatchedContents = CustomOmniboxMatchedContents_1.CustomOmniboxMatchedContents;
var CustomOmniboxSuggestedResultTemplateResolver_1 = __webpack_require__(0);
exports.CustomOmniboxSuggestedResultTemplateResolver = CustomOmniboxSuggestedResultTemplateResolver_1.CustomOmniboxSuggestedResultTemplateResolver;
var CustomOmniboxSection_1 = __webpack_require__(3);
exports.CustomOmniboxSection = CustomOmniboxSection_1.CustomOmniboxSection;
__export(__webpack_require__(4));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
var KEYBOARD = Coveo.KEYBOARD;
var CustomOmniboxSuggestedResultTemplateResolver_1 = __webpack_require__(0);
var CustomOmniboxSection_1 = __webpack_require__(3);
/**
 * This component is meant to be used inside a result template to display the URI or path to access a result.
 */
var CustomOmniboxSuggestions = /** @class */ (function (_super) {
    __extends(CustomOmniboxSuggestions, _super);
    /**
     * Create a new OmniboxCustomSuggestions
     * @param element
     * @param options
     * @param bindings
     * @param result
     */
    function CustomOmniboxSuggestions(element, options, bindings, result) {
        var _this = _super.call(this, element, CustomOmniboxSuggestions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        _this.currentSelectedIndex = 0;
        _this.currentScrollPageIndex = 0;
        _this.options = ComponentOptions.initComponentOptions(element, CustomOmniboxSuggestions, options);
        _this.bind.onRootElement(Coveo.OmniboxEvents.populateOmniboxSuggestions, function (args) { return _this.handlePopulateOmniboxSuggestions(args); });
        _this.bind.onRootElement(Coveo.InitializationEvents.afterComponentsInitialization, function () { return _this.handleAfterComponentInitialization(); });
        _this.templateResolver = new CustomOmniboxSuggestedResultTemplateResolver_1.default();
        _this.renderHtml();
        return _this;
    }
    CustomOmniboxSuggestions.prototype.renderHtml = function () {
        this.injectCustomOmniboxContent();
        this.putMagicBoxIntoSection();
        var sectionOrder = this.options.sectionOrder;
        if (sectionOrder) {
            this.sortSections(sectionOrder.split(',').filter(function (i) { return i; }));
        }
    };
    CustomOmniboxSuggestions.prototype.injectCustomOmniboxContent = function () {
        var suggestionsListEl = document.querySelector('div.magic-box-suggestions');
        var customSection = document.querySelector('div.coveo-custom-omnibox-content');
        if (!customSection) {
            return;
        }
        customSection.setAttribute('class', customSection.getAttribute('class') + " active");
        var fragment = new DocumentFragment();
        fragment.append(customSection);
        suggestionsListEl.append(fragment);
    };
    CustomOmniboxSuggestions.prototype.putMagicBoxIntoSection = function () {
        var _a = this.options, title = _a.title, headerIcon = _a.headerIcon, showWhenOmniboxIsEmpty = _a.showWhenOmniboxIsEmpty;
        var suggestionsListEl = document.querySelector('div.magic-box-suggestions');
        var relatedSearchesSectionEl = Coveo.$$('div', { id: 'related-searches' }).el;
        new CustomOmniboxSection_1.default(relatedSearchesSectionEl, { showWhenOmniboxIsEmpty: showWhenOmniboxIsEmpty, id: 'related-searches', title: title, icon: headerIcon }, this.getBindings());
        var fragment = new DocumentFragment();
        relatedSearchesSectionEl.appendChild(suggestionsListEl.querySelector('.coveo-magicbox-suggestions'));
        fragment.append(relatedSearchesSectionEl);
        suggestionsListEl.prepend(fragment);
    };
    CustomOmniboxSuggestions.prototype.sortSections = function (sections) {
        if (sections === void 0) { sections = []; }
        var suggestionsListEl = document.querySelector('div.magic-box-suggestions');
        var fragment = new DocumentFragment();
        var elements = sections.map(function (section) { return document.getElementById(section); });
        elements.forEach(function (element) { return fragment.append(element); });
        suggestionsListEl.append(fragment);
    };
    CustomOmniboxSuggestions.prototype.handleAfterComponentInitialization = function () {
        var _this = this;
        var omniboxInput = document.querySelector('.CoveoOmnibox input');
        if (omniboxInput) {
            Coveo.$$(omniboxInput).on('keyup', function (e) { _this.handleScrollThroughCustomSuggestions(e); });
        }
    };
    CustomOmniboxSuggestions.prototype.handleScrollThroughCustomSuggestions = function (evt) {
        var _this = this;
        var currentSelectedHTML = document.querySelector('.magic-box-suggestion.coveo-omnibox-selectable.coveo-omnibox-selected');
        var selectedElements = document.getElementsByClassName('magic-box-suggestion');
        if (currentSelectedHTML) {
            var i_1 = 0;
            _.each(selectedElements, function (selectedElement) {
                if (selectedElement.className == currentSelectedHTML.className) {
                    _this.currentSelectedIndex = i_1;
                    return;
                }
                i_1++;
            });
        }
        var wrapper = document.querySelector('.magic-box-suggestions.magic-box-hasSuggestion');
        if (wrapper) {
            if (evt.keyCode == KEYBOARD.DOWN_ARROW) {
                if (this.currentSelectedIndex == selectedElements.length) {
                    this.currentScrollPageIndex = 0;
                }
                if (this.currentScrollPageIndex > 11) {
                    this.currentScrollPageIndex--;
                    wrapper.scrollTop = (this.currentSelectedIndex - 11) * (23.75);
                }
                this.currentScrollPageIndex++;
            }
            else if (evt.keyCode == KEYBOARD.UP_ARROW) {
                if (this.currentSelectedIndex == selectedElements.length) {
                    this.currentScrollPageIndex = 11;
                    wrapper.scrollTop = selectedElements.length * (23.75);
                }
                if (this.currentScrollPageIndex == 1) {
                    this.currentScrollPageIndex++;
                    wrapper.scrollTop = this.currentSelectedIndex * (23.75);
                }
                this.currentScrollPageIndex--;
            }
        }
    };
    CustomOmniboxSuggestions.prototype.handlePopulateOmniboxSuggestions = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var suggestions, omnibox;
            return __generator(this, function (_a) {
                suggestions = args.suggestions, omnibox = args.omnibox;
                this.toggleExpandedMode(omnibox);
                suggestions.push(this.formatSuggestions(suggestions.pop()));
                return [2 /*return*/];
            });
        });
    };
    CustomOmniboxSuggestions.prototype.toggleExpandedMode = function (omnibox) {
        var resultContainer = document.querySelector('.magic-box-suggestions.magic-box-hasSuggestion');
        if (!resultContainer) {
            return;
        }
        if (omnibox.getText()) {
            resultContainer.classList.add('expanded');
        }
        else {
            resultContainer.classList.remove('expanded');
        }
    };
    CustomOmniboxSuggestions.prototype.formatBaseSuggestions = function (baseSuggestions) {
        var _this = this;
        var title = this.options.title;
        return baseSuggestions.map(function (_a) {
            var html = _a.html, text = _a.text;
            if (html.indexOf('class="base-suggestion"') < 0 && text !== Coveo.l(title)) {
                var template = _this.templateResolver.resolveByType('base');
                html = template.render({ text: html });
            }
            return { html: html, text: text };
        });
    };
    CustomOmniboxSuggestions.prototype.formatSuggestions = function (baseSuggestions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(baseSuggestions)];
                    case 1:
                        baseSuggestions = _a.sent();
                        baseSuggestions = this.prepareBaseSuggestions(baseSuggestions);
                        return [2 /*return*/, new Promise(function (resolve) {
                                var suggestions = [];
                                suggestions = suggestions.concat(baseSuggestions);
                                return resolve(suggestions);
                            })];
                }
            });
        });
    };
    CustomOmniboxSuggestions.prototype.prepareBaseSuggestions = function (suggestions) {
        var mergedSuggestions = [];
        suggestions = this.formatBaseSuggestions(suggestions);
        mergedSuggestions = mergedSuggestions.concat(suggestions);
        return mergedSuggestions;
    };
    CustomOmniboxSuggestions.ID = 'CustomOmniboxSuggestions';
    CustomOmniboxSuggestions.options = {
        title: ComponentOptions.buildStringOption({
            defaultValue: 'Query Suggestions'
        }),
        context: ComponentOptions.buildJsonObjectOption({
            defaultValue: {}
        }),
        sectionOrder: ComponentOptions.buildStringOption({}),
        headerIcon: ComponentOptions.buildStringOption({}),
        //Until I can finally separate the section from the content, we have to couple this for now
        showWhenOmniboxIsEmpty: ComponentOptions.buildBooleanOption({
            defaultValue: true
        }),
    };
    return CustomOmniboxSuggestions;
}(Component));
exports.CustomOmniboxSuggestions = CustomOmniboxSuggestions;
Initialization.registerAutoCreateComponent(CustomOmniboxSuggestions);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxBaseTemplate_1 = __webpack_require__(1);
var CustomOmniboxBaseSuggestionsHistoryTemplate = /** @class */ (function (_super) {
    __extends(CustomOmniboxBaseSuggestionsHistoryTemplate, _super);
    function CustomOmniboxBaseSuggestionsHistoryTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOmniboxBaseSuggestionsHistoryTemplate.prototype.instantiateToString = function () {
        return "\n            <span class=\"history-suggestion\"><span>{{=text}}</span></span>\n        ";
    };
    return CustomOmniboxBaseSuggestionsHistoryTemplate;
}(CustomOmniboxBaseTemplate_1.default));
exports.CustomOmniboxBaseSuggestionsHistoryTemplate = CustomOmniboxBaseSuggestionsHistoryTemplate;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxSuggestionsTemplate_1 = __webpack_require__(2);
var CustomOmniboxSuggestionsProductTemplate = /** @class */ (function (_super) {
    __extends(CustomOmniboxSuggestionsProductTemplate, _super);
    function CustomOmniboxSuggestionsProductTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOmniboxSuggestionsProductTemplate.prototype.formatFields = function (fields) {
        fields = _super.prototype.formatFields.call(this, fields);
        var style = "\n            .aux-links a::after {\n                background: url(" + "/public" + "/assets/images/icon-right-arrow.svg) center center / cover no-repeat;\n            }\n        ";
        return __assign({}, fields, { style: style });
    };
    CustomOmniboxSuggestionsProductTemplate.prototype.instantiateToString = function () {
        return "\n            <div class=\"coveo-suggested-result\" id=\"product\">\n                <div class=\"coveo-result-frame support-frame\">\n                    <div class=\"coveo-result-row\">\n                        <div class=\"coveo-result-cell result-thumbnail\" style=\"width:100px\">\n                            <span style=\"height: 100px\">\n                                <a class=\"title\" href=\"{{- raw.clickableuri }}\">\n                                    <picture>\n                                        <img \n                                            alt=\"\" \n                                            data-src-pc=\"https://images.samsung.com/is/image/samsung/{{- raw.commonimageurl }}\" \n                                            data-src-mobile=\"https://images.samsung.com/is/image/samsung/{{- raw.commonimageurl }}\" \n                                            src=\"https://images.samsung.com/is/image/samsung/{{- raw.commonimageurl }}\"\n                                        >\n                                    </picture> \n                                </a>\n                            </span>\n                        </div>                \n                        <div class=\"coveo-result-cell result-content\">\n                            <style>\n                                {{- style}}\n                            </style>\n                            <div class=\"coveo-result-row\">\n                                <a class=\"title\" href=\"{{- raw.clickableuri }}\">\n                                    <span class=\"blue\">[{{- raw.objecttype }}]</span>\n                                    {{= raw.highlightedTitle }}\n                                </a>\n                            </div>\n                            <div class=\"coveo-result-row aux-links\" >\n                                {{ if (raw.pdcsupportlinkurl) }}\n                                <a href=\"//samsung.com{{- raw.pdcsupportlinkurl }}#downloads\">Owners Manual</a>\n                                <a href=\"//samsung.com{{- raw.pdcsupportlinkurl }}\">Support</a>\n                                {{ }}\n                                <a href=\"//cybersvc2.samsungcsportal.com/uk/index?language=en\">Register</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
    };
    return CustomOmniboxSuggestionsProductTemplate;
}(CustomOmniboxSuggestionsTemplate_1.CustomOmniboxSuggestionsTemplate));
exports.CustomOmniboxSuggestionsProductTemplate = CustomOmniboxSuggestionsProductTemplate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxSuggestionsTemplate_1 = __webpack_require__(2);
var CustomOmniboxSuggestionsResultTemplate = /** @class */ (function (_super) {
    __extends(CustomOmniboxSuggestionsResultTemplate, _super);
    function CustomOmniboxSuggestionsResultTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOmniboxSuggestionsResultTemplate.prototype.instantiateToString = function () {
        return "\n            <div class=\"coveo-suggested-result\" id=\"result\">\n                <div class=\"coveo-result-frame support-frame\">\n                    <div class=\"coveo-result-row\">              \n                        <div class=\"coveo-result-cell result-content\">\n                            <div class=\"coveo-result-row\">\n                                <a class=\"title\" href=\"{{- raw.clickableuri }}\">\n                                    <span class=\"blue\">[{{- raw.objecttype }}]</span>\n                                    {{= raw.highlightedTitle }}\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
    };
    return CustomOmniboxSuggestionsResultTemplate;
}(CustomOmniboxSuggestionsTemplate_1.CustomOmniboxSuggestionsTemplate));
exports.CustomOmniboxSuggestionsResultTemplate = CustomOmniboxSuggestionsResultTemplate;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomOmniboxBaseTemplate_1 = __webpack_require__(1);
var CustomOmniboxSuggestionsBaseTemplate = /** @class */ (function (_super) {
    __extends(CustomOmniboxSuggestionsBaseTemplate, _super);
    function CustomOmniboxSuggestionsBaseTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOmniboxSuggestionsBaseTemplate.prototype.instantiateToString = function () {
        return "\n            <span class=\"base-suggestion\">{{=text}}</span>\n        ";
    };
    return CustomOmniboxSuggestionsBaseTemplate;
}(CustomOmniboxBaseTemplate_1.default));
exports.CustomOmniboxSuggestionsBaseTemplate = CustomOmniboxSuggestionsBaseTemplate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentOptions = Coveo.ComponentOptions;
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var IconPrefixedElement = /** @class */ (function (_super) {
    __extends(IconPrefixedElement, _super);
    function IconPrefixedElement(element, options, bindings) {
        var _this = _super.call(this, element, IconPrefixedElement.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = ComponentOptions.initComponentOptions(element, IconPrefixedElement, options);
        _this.render();
        return _this;
    }
    IconPrefixedElement.prototype.buildIconPath = function (icon) {
        var _a = this.options, iconType = _a.iconType, iconPath = _a.iconPath;
        return [iconPath, icon + "." + iconType].filter(function (i) { return i; }).join('/');
    };
    IconPrefixedElement.prototype.buildSelector = function () {
        var className = this.element.getAttribute('class');
        var id = this.element.getAttribute('id');
        var pieces = [
            { value: className, cssRule: '.' },
            { value: id, cssRule: '#' }
        ].filter(function (_a) {
            var value = _a.value;
            return value;
        });
        return pieces.map(function (_a) {
            var value = _a.value, cssRule = _a.cssRule;
            return value.split(' ').map(function (value) { return "" + cssRule + value; }).join('');
        }).join('');
    };
    IconPrefixedElement.prototype.getIconPrefix = function (icon) {
        var selector = this.buildSelector();
        icon = this.buildIconPath(icon);
        return selector + "::before{background-image: url(" + icon + ")}";
    };
    IconPrefixedElement.prototype.render = function () {
        var icon = this.options.icon;
        var styles = [
            icon && this.getIconPrefix(icon),
        ];
        var inlineStyling = Coveo.$$.apply(Coveo, ['style', {}].concat(styles.filter(function (v) { return v; })));
        Coveo.$$(this.element).prepend(inlineStyling.el);
    };
    IconPrefixedElement.ID = 'IconPrefixedElement';
    IconPrefixedElement.options = {
        icon: ComponentOptions.buildStringOption(),
        iconType: ComponentOptions.buildStringOption({
            defaultValue: 'svg'
        }),
        iconPath: ComponentOptions.buildStringOption({
            defaultValue: 'assets/images'
        }),
    };
    return IconPrefixedElement;
}(Component));
exports.IconPrefixedElement = IconPrefixedElement;
Initialization.registerAutoCreateComponent(IconPrefixedElement);
exports.default = IconPrefixedElement;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var l = Coveo.l;
var logCustomEvent = Coveo.logCustomEvent;
var state = Coveo.state;
var $$ = Coveo.$$;
var LocalStorageUtils = Coveo.LocalStorageUtils;
var QueryEvents = Coveo.QueryEvents;
var ComponentOptions = Coveo.ComponentOptions;
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var OmniboxEvents = Coveo.OmniboxEvents;
var CustomOmniboxSuggestedResultTemplateResolver_1 = __webpack_require__(0);
var CustomOmniboxSection_1 = __webpack_require__(3);
var CustomOmniboxSearchHistory = /** @class */ (function (_super) {
    __extends(CustomOmniboxSearchHistory, _super);
    function CustomOmniboxSearchHistory(element, options, bindings) {
        var _this = _super.call(this, element, CustomOmniboxSearchHistory.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queriesList = [];
        _this.queriesListHTMLElement = null;
        _this.refreshList = true;
        _this.options = ComponentOptions.initComponentOptions(element, CustomOmniboxSearchHistory, options);
        _this.bind.onRootElement(QueryEvents.querySuccess, function (args) { return _this.handleQuerySuccess(args); });
        _this.bind.onRootElement(OmniboxEvents.populateOmniboxSuggestions, function (args) { return _this.handleQuerySuggestions(args); });
        _this.templateResolver = new CustomOmniboxSuggestedResultTemplateResolver_1.default();
        _this.hide();
        var _a = _this.options, showPreviousQueriesInOmnibox = _a.showPreviousQueriesInOmnibox, isStandalone = _a.isStandalone;
        if (!showPreviousQueriesInOmnibox && isStandalone) {
            _this.element.appendChild(_this.build());
        }
        _this.initQueryStorage();
        _this.render();
        return _this;
    }
    CustomOmniboxSearchHistory.prototype.render = function () {
        var _this = this;
        var parent = $$(this.element).el.parentElement;
        if (parent.classList.contains("Coveo" + CustomOmniboxSection_1.default.ID)) {
            var clearHistory = $$('button', { className: 'clear-history' }, 'Clear All');
            clearHistory.on('click', function () { return _this.handleClearHistory(); });
            var header = $$(parent).find('h3');
            header.appendChild(clearHistory.el);
        }
    };
    CustomOmniboxSearchHistory.prototype.initQueryStorage = function () {
        var _a = this.options, useCookies = _a.useCookies, isStandalone = _a.isStandalone;
        if (useCookies) {
            this.expDate = new Date();
            this.expDate.setMonth(this.expDate.getMonth() + 1);
            this.queriesList = this.getRecentQueriesCookie() || [];
        }
        else {
            this.localStorage = new LocalStorageUtils('SearchHistory');
            this.queriesList = JSON.parse(this.localStorage.load()) || [];
        }
        if (isStandalone) {
            this.buildPreviousQueries(this.queriesList);
            if (this.queriesList.length > 0) {
                this.show();
            }
        }
    };
    CustomOmniboxSearchHistory.prototype.handleClearHistory = function () {
        this.removeAllFromQueriesList();
        this.buildPreviousQueries(this.queriesList);
    };
    CustomOmniboxSearchHistory.prototype.hide = function () {
        $$(this.element).addClass('hidden');
    };
    CustomOmniboxSearchHistory.prototype.show = function () {
        $$(this.element).removeClass('hidden');
    };
    CustomOmniboxSearchHistory.prototype.handleQuerySuccess = function (args) {
        var query = args.queryBuilder.expression.build();
        if (this.refreshList && args.results.results.length > 0) {
            this.show();
            this.updateQueriesList(query);
        }
        else {
            this.hide();
        }
        $$(this.element).toggleClass('hidden', this.queriesList.length === 0);
        this.refreshList = true;
    };
    CustomOmniboxSearchHistory.prototype.handleQuerySuggestions = function (args) {
        var omnibox = args.omnibox;
        var _a = this.options, showPreviousQueriesInOmnibox = _a.showPreviousQueriesInOmnibox, isStandalone = _a.isStandalone;
        if (isStandalone) {
            this.buildPreviousQueries(this.queriesList.filter(function (suggestion) { return -1 !== suggestion.indexOf(omnibox.getText()); }));
        }
        if (showPreviousQueriesInOmnibox && !omnibox.getText()) {
            args.suggestions.push(this.getPreviousQueriesForOmnibox());
        }
        if (omnibox.getText()) {
            $$(this.element).toggleClass('hidden', this.queriesList.length === 0);
        }
        this.refreshList = true;
    };
    CustomOmniboxSearchHistory.prototype.getPreviousQueriesForOmnibox = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var shownQueries = _this.queriesList.map(function (query) { return _this.buildOmniboxPreviousQueries(query); });
            return resolve(shownQueries);
        });
    };
    CustomOmniboxSearchHistory.prototype.buildOmniboxPreviousQueries = function (query) {
        var el = $$('div');
        var suggestion_el = $$('div');
        suggestion_el.addClass("coveo-omnibox-previous-queries");
        var span = $$('span');
        span.text(query);
        suggestion_el.append(span.el);
        el.append(suggestion_el.el);
        var suggest = {
            html: el.el.outerHTML,
            text: query,
            index: 0,
        };
        return suggest;
    };
    CustomOmniboxSearchHistory.prototype.handleClick = function (expression) {
        var _this = this;
        this.refreshList = false;
        state(this.root, 'q', expression);
        this.queryController.deferExecuteQuery({
            beforeExecuteQuery: function () {
                logCustomEvent(_this.root, { name: 'searchFromHistory', type: 'customEventType' }, {
                    queryHistory: expression
                });
            }
        });
        this.updateQueriesList(expression);
    };
    CustomOmniboxSearchHistory.prototype.updateQueriesList = function (query) {
        this.queriesList = _.chain(this.queriesList)
            .unshift(query)
            .compact()
            .uniq()
            .first(this.options.numberOfQueries)
            .value();
        var _a = this.options, useCookies = _a.useCookies, cookieDomain = _a.cookieDomain;
        if (useCookies) {
            document.cookie = "recent_queries=" + JSON.stringify(this.queriesList) + ";domain=" + cookieDomain + ";expires=" + this.expDate.toUTCString() + ";path=/";
        }
        else {
            this.localStorage.save(JSON.stringify(this.queriesList));
        }
        this.buildPreviousQueries(this.queriesList);
    };
    CustomOmniboxSearchHistory.prototype.removeFromQueriesList = function (query) {
        this.queriesList = _.chain(this.queriesList)
            .without(query)
            .compact()
            .uniq()
            .last(this.options.numberOfQueries + 1)
            .value();
        var _a = this.options, useCookies = _a.useCookies, cookieDomain = _a.cookieDomain;
        if (useCookies) {
            document.cookie = "recent_queries=" + JSON.stringify(this.queriesList) + ";domain=" + cookieDomain + ";expires=" + this.expDate.toUTCString() + ";path=/";
        }
        else {
            this.localStorage.save(JSON.stringify(this.queriesList));
        }
    };
    CustomOmniboxSearchHistory.prototype.removeAllFromQueriesList = function () {
        this.queriesList = [];
        var _a = this.options, useCookies = _a.useCookies, cookieDomain = _a.cookieDomain;
        if (useCookies) {
            document.cookie = "recent_queries=" + JSON.stringify(this.queriesList) + ";domain=" + cookieDomain + ";expires=" + this.expDate.toUTCString() + ";path=/";
        }
        else {
            this.localStorage.save(JSON.stringify(this.queriesList));
        }
    };
    CustomOmniboxSearchHistory.prototype.build = function () {
        this.queriesListHTMLElement = $$('div', { class: 'coveo-magicbox-suggestions' }).el;
        return this.queriesListHTMLElement;
    };
    CustomOmniboxSearchHistory.prototype.buildPanelHeading = function () {
        var panelHeading = $$('div', { className: 'panel-heading' });
        var caption = $$('span', { className: 'caption-for-queries-history' }, this.options.caption || l('SearchHistory'));
        panelHeading.append($$('i', { className: 'fas fa-history' }).el);
        panelHeading.append(caption.el);
        return panelHeading.el;
    };
    CustomOmniboxSearchHistory.prototype.buildPreviousQueries = function (list) {
        var _this = this;
        var _a = this.options, showPreviousQueriesInOmnibox = _a.showPreviousQueriesInOmnibox, removeIndividualSuggestions = _a.removeIndividualSuggestions;
        if (showPreviousQueriesInOmnibox) {
            return;
        }
        if (!this.queriesListHTMLElement) {
            this.logger.error('queriesListHTMLElement is null');
        }
        this.refreshElement();
        var fragment = new DocumentFragment();
        this.removeHistoryItems();
        list.forEach(function (expression) {
            var historyItem = _this.buildItem(expression, removeIndividualSuggestions);
            fragment.appendChild(historyItem);
        });
        this.queriesListHTMLElement.append(fragment);
        this.element.appendChild(this.queriesListHTMLElement);
    };
    CustomOmniboxSearchHistory.prototype.buildItem = function (expression, canBeRemoved) {
        var _this = this;
        var listDecorator = $$('div', { className: 'coveo-magicbox-suggestion coveo-omnibox-selectable', role: 'option' });
        listDecorator.on('click', function () { return _this.handleClick(expression); });
        var template = this.templateResolver.resolveByType('history');
        listDecorator.el.innerHTML = template.render({ text: expression });
        if (canBeRemoved) {
            var removeFromList = $$('span', { className: 'queries-history-remove' }, 'x');
            removeFromList.el.addEventListener('click', function (evt) {
                _this.removeFromQueriesList(expression);
                _this.buildPreviousQueries(_this.queriesList);
                evt.cancelBubble = true;
                evt.preventDefault();
            });
            listDecorator.append(removeFromList.el);
        }
        return listDecorator.el;
    };
    CustomOmniboxSearchHistory.prototype.removeHistoryItems = function () {
        while (this.queriesListHTMLElement.firstChild) {
            this.queriesListHTMLElement.firstChild.remove();
        }
    };
    //Probably a bug with the dynamic sorting sections, the element gets orphaned on the DOM and we need to reassign it.
    CustomOmniboxSearchHistory.prototype.refreshElement = function () {
        this.element = document.querySelector('#search-history > .CoveoCustomOmniboxSearchHistory');
    };
    CustomOmniboxSearchHistory.prototype.getRecentQueriesCookie = function () {
        var cookies = document.cookie;
        var item = cookies.split(';').filter(function (cookie) { return -1 === cookie.indexOf('recent_queries='); })[0];
        if (!item) {
            return;
        }
        return JSON.parse(item.replace('recent_queries=', ''));
    };
    CustomOmniboxSearchHistory.ID = 'CustomOmniboxSearchHistory';
    CustomOmniboxSearchHistory.options = {
        caption: ComponentOptions.buildStringOption(),
        numberOfQueries: ComponentOptions.buildNumberOption({ defaultValue: 10 }),
        isStandalone: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        useCookies: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        cookieDomain: ComponentOptions.buildStringOption({}),
        showPreviousQueriesInOmnibox: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        removeIndividualSuggestions: ComponentOptions.buildBooleanOption({ defaultValue: false }),
    };
    return CustomOmniboxSearchHistory;
}(Component));
exports.CustomOmniboxSearchHistory = CustomOmniboxSearchHistory;
Initialization.registerAutoCreateComponent(CustomOmniboxSearchHistory);
exports.default = CustomOmniboxSearchHistory;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var $$ = Coveo.$$;
var ComponentOptions = Coveo.ComponentOptions;
var Initialization = Coveo.Initialization;
var OmniboxEvents = Coveo.OmniboxEvents;
var CustomOmniboxSuggestionsCache_1 = __webpack_require__(6);
var CustomOmniboxSuggestedResultTemplateResolver_1 = __webpack_require__(0);
var CustomOmniboxMatchedContents = /** @class */ (function (_super) {
    __extends(CustomOmniboxMatchedContents, _super);
    function CustomOmniboxMatchedContents(element, options, bindings) {
        var _this = _super.call(this, element, CustomOmniboxMatchedContents.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.lastCustomSuggestionsQueryText = '';
        _this.lastCustomSuggestionsQueryNbResults = 0;
        _this.searchSuggestionsCache = new CustomOmniboxSuggestionsCache_1.CustomOmniboxSuggestionsCache();
        _this.customOmniboxSuggestedResultTemplateResolver = new CustomOmniboxSuggestedResultTemplateResolver_1.default();
        _this.logClickEvent = _.debounce(function (queryResult) {
            var rootElement = Coveo.get(document.getElementById('coveostandalonesearchbox'), 'SearchInterface').element;
            var clickEventCause = { name: 'documentOpenSuggestedResultsSearch', type: 'document' };
            Coveo.logClickEvent(rootElement, clickEventCause, {}, queryResult);
            Coveo.Defer.flush();
        }, 2500, true);
        _this.options = ComponentOptions.initComponentOptions(element, CustomOmniboxMatchedContents, options);
        _this.bind.onRootElement(Coveo.QueryEvents.newQuery, function (args) { return _this.handleCustomSuggestionRedirect(args); });
        _this.bind.onRootElement(OmniboxEvents.populateOmniboxSuggestions, function (args) { return _this.handleQuerySuggestions(args); });
        return _this;
    }
    CustomOmniboxMatchedContents.prototype.render = function (items) {
        if (items === void 0) { items = []; }
        var fragment = new DocumentFragment();
        var container = $$('div', { class: 'coveo-magicbox-suggestions' }).el;
        items.forEach(function (_a) {
            var html = _a.html, onSelect = _a.onSelect;
            var listDecorator = $$('div', { className: 'coveo-magicbox-suggestion coveo-omnibox-selectable', role: 'option' });
            listDecorator.on('click', function () { return onSelect(); });
            var listItem = $$('div', {}, html).el;
            listDecorator.el.appendChild(listItem);
            container.appendChild(listDecorator.el);
            fragment.appendChild(container);
        });
        this.element.appendChild(fragment);
    };
    CustomOmniboxMatchedContents.prototype.removeMatchedItems = function () {
        while (this.element.firstChild) {
            this.element.firstChild.remove();
        }
    };
    CustomOmniboxMatchedContents.prototype.handleQuerySuggestions = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var omnibox, suggestedResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        omnibox = args.omnibox;
                        return [4 /*yield*/, this.getCustomSuggestions(omnibox)];
                    case 1:
                        suggestedResults = _a.sent();
                        suggestedResults = this.prepareCustomSuggestions(suggestedResults);
                        this.refreshElement();
                        this.removeMatchedItems();
                        this.render(suggestedResults);
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomOmniboxMatchedContents.prototype.handleCustomSuggestionRedirect = function (args) {
        var searchbox = document.querySelector('.CoveoSearchbox .magic-box-input');
        if (searchbox.textContent != "" && this.firstSuggestion) {
            args.cancel = true;
            this.onSearchSuggestionsSelection(this.firstSuggestion);
        }
    };
    //Probably a bug with the dynamic sorting sections, the element gets orphaned on the DOM and we need to reassign it.
    CustomOmniboxMatchedContents.prototype.refreshElement = function () {
        this.element = document.querySelector("#matched-content > .Coveo" + CustomOmniboxMatchedContents.ID);
    };
    CustomOmniboxMatchedContents.prototype.prepareCustomSuggestions = function (magicboxSuggestions) {
        var suggestions = [];
        suggestions = suggestions.concat(magicboxSuggestions);
        return suggestions;
    };
    CustomOmniboxMatchedContents.prototype.getCustomSuggestions = function (omnibox) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = omnibox.getText();
                        return [4 /*yield*/, this.searchCustomSuggestions(text)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomOmniboxMatchedContents.prototype.searchCustomSuggestions = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                if (!_this.shouldTriggerNextCustomSuggestionsQuery(text)) {
                    return resolve([]);
                }
                var suggestions = _this.searchSuggestionsCache.getSuggestions(text, function () { return _this.queryForCustomSuggestions(text); });
                suggestions.then(function (queryResults) {
                    var _a = queryResults.results, results = _a === void 0 ? [] : _a;
                    _this.lastCustomSuggestionsQueryText = text;
                    _this.lastCustomSuggestionsQueryNbResults = results.length;
                    if (!results.length) {
                        return resolve([]);
                    }
                    _this.firstSuggestion = results[0];
                    var omniboxedSuggestions = results.map(function (result, index) { return _this.mapQueryResult(result, results.length - index, text); });
                    return resolve(omniboxedSuggestions);
                });
            }
            catch (error) {
                _this.logger.error(error);
                return resolve([]);
            }
        });
    };
    CustomOmniboxMatchedContents.prototype.shouldTriggerNextCustomSuggestionsQuery = function (text) {
        if (!text) {
            return false;
        }
        return true;
    };
    CustomOmniboxMatchedContents.prototype.queryForCustomSuggestions = function (text) {
        var query = this.buildCustomSuggestionsQuery(text);
        var customSuggestions = this.queryController.getEndpoint().search(query);
        this.handleSearchSuggestionsAnalytics(query, customSuggestions);
        return customSuggestions;
    };
    CustomOmniboxMatchedContents.prototype.buildCustomSuggestionsQuery = function (q) {
        var _a = this.options, numberOfQueries = _a.numberOfQueries, expression = _a.expression, context = _a.context, fieldsToInclude = _a.fieldsToInclude;
        q = q.trim();
        return {
            q: q,
            cq: expression,
            firstResult: 0,
            numberOfResults: numberOfQueries,
            searchHub: this.getBindings().componentOptionsModel.get(Coveo.ComponentOptionsModel.attributesEnum.searchHub),
            context: context,
            debug: false,
            enableQuerySyntax: false,
            //wildcards: true,
            sortCriteria: 'relevancy',
            fieldsToInclude: fieldsToInclude.split(',').filter(function (s) { return s; }).map(function (s) { return s.trim(); }),
        };
    };
    CustomOmniboxMatchedContents.prototype.handleSearchSuggestionsAnalytics = function (query, searchPromise) {
        if (this.getBindings().usageAnalytics) {
            this.getBindings().usageAnalytics.logSearchEvent({
                name: 'omniboxCustomSuggestionsSearch',
                type: 'omnibox'
            }, {
                q: query
            });
            Coveo.$$(this.queryController.element).trigger(Coveo.QueryEvents.duringQuery, this.buildDataToSendDuringQuery(query, searchPromise));
        }
    };
    CustomOmniboxMatchedContents.prototype.buildDataToSendDuringQuery = function (query, searchPromise) {
        var searchAsYouType = Coveo.get(document.querySelector('.CoveoSearchbox'), 'Searchbox').options.enableSearchAsYouType;
        var qb = new Coveo.QueryBuilder();
        if (!query.q) {
            return;
        }
        qb.expression.add(query.q);
        return {
            queryBuilder: qb,
            query: query,
            searchAsYouType: searchAsYouType,
            promise: searchPromise,
        };
    };
    CustomOmniboxMatchedContents.prototype.mapQueryResult = function (result, index, text) {
        var _this = this;
        var template = this.customOmniboxSuggestedResultTemplateResolver.resolveByResult(result);
        return {
            html: template.render(__assign({ text: text }, result)),
            text: result.title,
            onSelect: function () { return _this.onSearchSuggestionsSelection(result); },
            index: index
        };
    };
    CustomOmniboxMatchedContents.prototype.onSearchSuggestionsSelection = function (result) {
        var _this = this;
        var executeOnlyOnce = _.once(function () { return _this.logClickEvent(result); });
        executeOnlyOnce();
        if (this.options.openNewTab) {
            this.openLinkInNewWindow(result.clickUri);
        }
        else {
            this.openLink(result.clickUri);
        }
    };
    CustomOmniboxMatchedContents.prototype.openLink = function (uri) {
        window.location.href = uri;
    };
    ;
    CustomOmniboxMatchedContents.prototype.openLinkInNewWindow = function (uri) {
        window.open(uri, '_blank');
    };
    ;
    CustomOmniboxMatchedContents.ID = 'CustomOmniboxMatchedContents';
    CustomOmniboxMatchedContents.options = {
        numberOfQueries: ComponentOptions.buildNumberOption({ defaultValue: 10 }),
        openNewTab: ComponentOptions.buildBooleanOption({
            defaultValue: false
        }),
        expression: ComponentOptions.buildStringOption({
            defaultValue: '@uri'
        }),
        context: ComponentOptions.buildJsonObjectOption({
            defaultValue: {}
        }),
        baseSuggestionsSectionLabel: ComponentOptions.buildStringOption({
            defaultValue: 'Query Suggestions'
        }),
        fieldsToInclude: ComponentOptions.buildStringOption({
            defaultValue: 'title,filetype,objecttype,commonimageurl,clickableuri,pdcsupportlinkurl'
        }),
    };
    return CustomOmniboxMatchedContents;
}(Component));
exports.CustomOmniboxMatchedContents = CustomOmniboxMatchedContents;
Initialization.registerAutoCreateComponent(CustomOmniboxMatchedContents);
exports.default = CustomOmniboxMatchedContents;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortDropdown_1 = __webpack_require__(26);
exports.SortDropdown = SortDropdown_1.SortDropdown;
var DynamicTabs_1 = __webpack_require__(27);
exports.DynamicTabs = DynamicTabs_1.DynamicTabs;
var CustomNoResult_1 = __webpack_require__(28);
exports.CustomNoResult = CustomNoResult_1.CustomNoResult;
var Ratings_1 = __webpack_require__(29);
exports.Ratings = Ratings_1.Ratings;
var ScrollToTop_1 = __webpack_require__(32);
exports.ScrollToTop = ScrollToTop_1.ScrollToTop;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
var $$ = Coveo.$$;
// require('./SortDropdown.scss');
var SortDropdown = /** @class */ (function (_super) {
    __extends(SortDropdown, _super);
    function SortDropdown(element, options, bindings) {
        var _this = _super.call(this, element, SortDropdown.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = ComponentOptions.initComponentOptions(element, SortDropdown, options);
        // Init Events
        _this.bind.onRootElement(Coveo.InitializationEvents.afterInitialization, _this.handleAfterInit);
        // State Events
        var changeSortEvtName = _this.getStateEventName(Coveo.QueryStateModel.eventTypes.changeOne + Coveo.QueryStateModel.attributesEnum.sort);
        _this.bind.onRootElement(changeSortEvtName, function (args) { return _this.handleCoveoStateChanged(args); });
        // Query Events
        _this.bind.onRootElement(Coveo.QueryEvents.querySuccess, function (args) { return _this.handleQuerySuccess(args); });
        _this.bind.onRootElement(Coveo.QueryEvents.queryError, function (args) { return _this.handleQueryError(args); });
        if (_this.options.displayCaption) {
            Coveo.$$(_this.element).append(_this.buildLabel());
        }
        _this.select = _this.buildSelectElement();
        if (!_this.options.displayAsSelect) {
            Coveo.$$(_this.select).addClass('coveo-custom-select-hidden');
        }
        Coveo.$$(_this.element).append(_this.select);
        return _this;
    }
    SortDropdown.prototype.handleCoveoStateChanged = function (args) {
        this.currentSearchSort = args.value;
    };
    SortDropdown.prototype.handleQuerySuccess = function (data) {
        this.buildSelectOptions();
        this.renderSelectStyled();
        if (data.results.results.length == 0) {
            $$(this.element).addClass('coveo-sort-hidden');
        }
        else {
            $$(this.element).removeClass('coveo-sort-hidden');
        }
    };
    SortDropdown.prototype.handleQueryError = function (data) {
        $$(this.element).addClass('coveo-sort-hidden');
    };
    SortDropdown.prototype.getStateEventName = function (event) {
        return Coveo.QueryStateModel.ID + ':' + event;
    };
    SortDropdown.prototype.handleAfterInit = function () {
        this.buildSelectOptions();
        if (!this.options.displayAsSelect) {
            this.buildStyledSelect();
        }
    };
    SortDropdown.prototype.buildStyledSelect = function () {
        var _this = this;
        var wrapper = Coveo.$$('div', { className: 'coveo-custom-select' });
        this.select.parentNode.insertBefore(wrapper.el, this.select);
        wrapper.append(this.select);
        this.selectStyled = Coveo.$$('div', { className: 'coveo-custom-select-styled' });
        this.listOptions = Coveo.$$('ul', { className: 'coveo-custom-select-options' });
        wrapper.append(this.selectStyled.el);
        wrapper.append(this.listOptions.el);
        this.renderSelectStyled();
        this.selectStyled.on('click', function (e) {
            e.stopPropagation();
            _this.selectStyled.toggleClass('active');
            _this.listOptions.toggle();
        });
        document.addEventListener('click', function () {
            _this.selectStyled.removeClass('active');
            _this.listOptions.hide();
        });
    };
    SortDropdown.prototype.renderSelectStyled = function () {
        var self = this;
        self.listOptions.empty();
        // Hack for Typescript issue
        var opt = this.select.options;
        var current = opt.length ? opt[self.select.selectedIndex].text : '';
        self.selectStyled.text(this.options.caption);
        var _loop_1 = function () {
            var listItem = Coveo.$$('li', {
                value: opt.item(i).value
            }, opt.item(i).text);
            self.listOptions.append(listItem.el);
            if (current == opt.item(i).text) {
                listItem.addClass('active');
            }
            listItem.on('click', function (e) {
                e.stopPropagation();
                self.select.value = listItem.getAttribute('value');
                self.updateSort(listItem.getAttribute('value'));
                //self.selectStyled.text(listItem.text());
                self.selectStyled.removeClass('active');
                _.each(self.listOptions.children(), function (li) { Coveo.$$(li).removeClass('active'); });
                listItem.addClass('active');
                self.listOptions.hide();
            });
        };
        for (var i = 0; i < opt.length; i++) {
            _loop_1();
        }
    };
    SortDropdown.prototype.buildLabel = function () {
        var label = Coveo.$$('span', { className: 'coveo-custom-sort-dropdown-text' }, this.options.caption).el;
        return label;
    };
    SortDropdown.prototype.buildSelectElement = function () {
        var _this = this;
        var selectEl = Coveo.$$('select', { className: 'coveo-custom-sort-dropdown-picker' });
        var changeAction = function () { return _this.handleSelectChangeCriteria(); };
        selectEl.on('change', changeAction);
        return selectEl.el;
    };
    SortDropdown.prototype.buildSelectOptions = function () {
        var _this = this;
        Coveo.$$(this.select).empty();
        var sorts = this.element.querySelectorAll('.CoveoSort:not(.coveo-tab-disabled):not(.coveo-sort-hidden)');
        _.each(sorts, function (Sort) {
            var sort = Coveo.get(Sort, 'Sort');
            var selectedOption;
            sort.options.sortCriteria.forEach(function (crit) {
                var key = (crit.sort + ' ' + crit['direction']).trim();
                if (key == _this.currentSearchSort) {
                    selectedOption = true;
                }
            });
            var optionLink = Coveo.$$('option', { value: sort.options.caption }, sort.options.caption).el;
            if (selectedOption) {
                optionLink.selected = true;
            }
            Coveo.$$(_this.select).append(optionLink);
        });
    };
    SortDropdown.prototype.handleSelectChangeCriteria = function () {
        var sortCaption = (event.currentTarget).value;
        this.updateSort(sortCaption);
    };
    ;
    SortDropdown.prototype.updateSort = function (value) {
        var sorts = this.element.querySelectorAll('.CoveoSort:not(.coveo-tab-disabled):not(.coveo-sort-hidden)');
        _.each(sorts, function (Sort) {
            var sort = Coveo.get(Sort, 'Sort');
            if (value == sort.options.caption) {
                sort.element.click();
            }
        });
    };
    SortDropdown.ID = 'SortDropdown';
    SortDropdown.options = {
        caption: ComponentOptions.buildStringOption({ defaultValue: Coveo.l('SortBy') }),
        displayCaption: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        displayAsSelect: ComponentOptions.buildBooleanOption({ defaultValue: false })
    };
    return SortDropdown;
}(Component));
exports.SortDropdown = SortDropdown;
Initialization.registerAutoCreateComponent(SortDropdown);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
var DynamicTabs = /** @class */ (function (_super) {
    __extends(DynamicTabs, _super);
    function DynamicTabs(element, options, bindings) {
        var _this = _super.call(this, element, DynamicTabs.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = ComponentOptions.initComponentOptions(element, DynamicTabs, options);
        // Init Events
        _this.bind.onRootElement(Coveo.InitializationEvents.afterInitialization, _this.handleAfterInit);
        _this.bind.onRootElement(Coveo.QueryEvents.deferredQuerySuccess, function (args) { return _this.handleDeferredQuerySuccess(args); });
        _this.bind.onRootElement(Coveo.QueryEvents.doneBuildingQuery, function (args) { return _this.handleDoneBuildingQuery(args); });
        return _this;
    }
    DynamicTabs.prototype.updateTabsState = function (gbResValues) {
        var tabEl = document.getElementsByClassName('CoveoTab');
        var _self = this;
        _.each(tabEl, function (tab) {
            var gbVal = _.find(gbResValues, function (res) { return res.value == tab.getAttribute("data-id"); });
            var nbRes = 0;
            if (gbVal) {
                nbRes = gbVal.numberOfResults;
                Coveo.$$(tab).removeClass('coveo-hidden');
            }
            else {
                if (tab.getAttribute('data-id') != _self.options.defaultTab && tab.className.indexOf('coveo-selected') == -1) {
                    Coveo.$$(tab).addClass('coveo-hidden');
                }
            }
            var countEl = tab.querySelector('span#count');
            if (countEl) {
                tab.removeChild(countEl);
            }
            var count = Coveo.$$('span', { id: 'count', class: 'tab-count' }, '(' + nbRes + ')');
            tab.append(count.el);
        });
    };
    DynamicTabs.prototype.handleDeferredQuerySuccess = function (data) {
        var _self = this;
        var gbResult = _.find(data.results.groupByResults, function (res) {
            return res.field == _self.options.field.toString().split('@')[1];
        });
        console.log(gbResult);
        this.updateTabsState(gbResult.values);
    };
    DynamicTabs.prototype.buildGroupByRequest = function (field) {
        return {
            'field': field,
            'maximumNumberOfValues': 10,
            'sortCriteria': 'occurrences',
            'injectionDepth': 10000,
            'completeFacetWithStandardValues': true,
            'allowedValues': [],
            'advancedQueryOverride': '@uri',
            'constantQueryOverride': '@uri'
        };
    };
    DynamicTabs.prototype.handleDoneBuildingQuery = function (data) {
        //   data.queryBuilder.facetRequests.push()
        // data.queryBuilder.facetRequests.push({field: '@commontabs'});
        var gbRequest = this.buildGroupByRequest(this.options.field.toString());
        gbRequest.queryOverride = data.queryBuilder.expression.build();
        data.queryBuilder.groupByRequests.push(gbRequest);
    };
    DynamicTabs.prototype.handleAfterInit = function () {
    };
    DynamicTabs.ID = 'DynamicTabs';
    DynamicTabs.options = {
        field: ComponentOptions.buildFieldOption(),
        defaultTab: ComponentOptions.buildStringOption({ defaultValue: 'All' })
    };
    return DynamicTabs;
}(Component));
exports.DynamicTabs = DynamicTabs;
Initialization.registerAutoCreateComponent(DynamicTabs);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
/**
 * This component is meant to be used inside a result template to display the URI or path to access a result.
 */
var CustomNoResult = /** @class */ (function (_super) {
    __extends(CustomNoResult, _super);
    // private defaultTemplate = _.template('<div>Welcome</div>');
    /**
     * Create a new OmniboxCustomSuggestions
     * @param element
     * @param options
     * @param bindings
     * @param result
     */
    function CustomNoResult(element, options, bindings, result) {
        var _this = _super.call(this, element, CustomNoResult.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        _this.options = ComponentOptions.initComponentOptions(element, CustomNoResult, options);
        _this.bind.onRootElement(Coveo.InitializationEvents.afterComponentsInitialization, function () { return _this.handleAfterComponentsInitialization(); });
        // this.bind.onRootElement(Coveo.QueryEvents.doneBuildingQuery, (args: Coveo.IBuildingQueryEventArgs) => this.handleDoneBuildingQuery(args));
        _this.bind.onRootElement(Coveo.QueryEvents.querySuccess, function (args) { return _this.handleQuerySucess(args); });
        return _this;
    }
    CustomNoResult.prototype.handleAfterComponentsInitialization = function () {
        var wrapper = Coveo.$$('div');
        wrapper.append(Coveo.$$('div', {}, this.options.customNoResultTemplate.dataToString()).el);
        // this.bindClickEvent(wrapper.el);
        this.element.appendChild(wrapper.el);
        Coveo.$$(this.element).addClass('coveo-hidden');
    };
    CustomNoResult.prototype.handleQuerySucess = function (data) {
        if (data.results.totalCount == 0) {
            Coveo.$$(this.element).removeClass('coveo-hidden');
            // Coveo.$$(this.root).addClass('coveo-no-facet');
            Coveo.$$(this.root).addClass('coveo-no-results');
        }
        else {
            Coveo.$$(this.element).addClass('coveo-hidden');
            // Coveo.$$(this.root).removeClass('coveo-no-facet');
            Coveo.$$(this.root).removeClass('coveo-no-results');
        }
    };
    CustomNoResult.ID = 'CustomNoResult';
    CustomNoResult.options = {
        customNoResultTemplate: ComponentOptions.buildTemplateOption({
            //  defaultFunction: () => new DefaultTemplate(),
            selectorAttr: 'data-template-selector',
            idAttr: 'data-template-id'
        })
    };
    return CustomNoResult;
}(Component));
exports.CustomNoResult = CustomNoResult;
Initialization.registerAutoCreateComponent(CustomNoResult);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var ComponentOptions = Coveo.ComponentOptions;
var CoveoUtils_1 = __webpack_require__(30);
var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    /**
     * @param element
     * @param options
     * @param bindings
     * @param result
     */
    function Ratings(element, options, bindings, result) {
        var _this = _super.call(this, element, Ratings.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        _this.options = ComponentOptions.initComponentOptions(element, Ratings, options);
        var ratings = CoveoUtils_1.CoveoUtils.getCleanFieldValue(_this.result, _this.options.field.toString());
        var ratingsUrl = CoveoUtils_1.CoveoUtils.getCleanFieldValue(_this.result, _this.options.fieldUrl.toString());
        if (ratings) {
            var link = Coveo.$$('a', { href: 'https://samsung.com' + ratingsUrl });
            var span = Coveo.$$('span', { class: 'rating-stars' });
            for (var i = 1; i < 6; i++) {
                var img = void 0;
                if (i <= ratings) {
                    // to-do remove hardcoded urls...
                    img = Coveo.$$('img', { src: 'https://www.samsung.com/etc/designs/smg/global/imgs/search-new/star-rating-active.png' });
                }
                else {
                    img = Coveo.$$('img', { src: 'https://www.samsung.com/etc/designs/smg/global/imgs/search-new/star-rating-default.png' });
                }
                span.append(img.el);
            }
            link.append(span.el);
            var label = Coveo.$$('span', { class: 'rating-label' }, '' + ratings + '');
            link.append(label.el);
            if (_this.options.fieldCount) {
                var reviewCount = CoveoUtils_1.CoveoUtils.getCleanFieldValue(_this.result, _this.options.fieldCount.toString());
                var reviewLabel = Coveo.$$('span', { class: 'rating-count' }, '(' + reviewCount + ')');
                link.append(reviewLabel.el);
            }
            _this.element.append(link.el);
            Coveo.$$(_this.element).on('click', function () { _this.logClickEvent(); });
        }
        return _this;
    }
    Ratings.prototype.logClickEvent = function () {
        var eventCause = { name: 'documentOpen', type: 'review' };
        var meta = {
            documentURL: this.result.clickUri,
            documentTitle: this.result.title
        };
        Coveo.logClickEvent(this.root, eventCause, meta, this.result);
    };
    Ratings.ID = 'Ratings';
    Ratings.options = {
        field: ComponentOptions.buildFieldOption(),
        fieldUrl: ComponentOptions.buildFieldOption(),
        fieldCount: ComponentOptions.buildFieldOption()
    };
    return Ratings;
}(Component));
exports.Ratings = Ratings;
Initialization.registerAutoCreateComponent(Ratings);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(31);
var CoveoUtils = /** @class */ (function () {
    function CoveoUtils() {
    }
    /**
     * Gets the current FieldValue from the current {@link IQueryResult}.
     *
     * @returns {string} The current FieldValue or an empty string.
     */
    CoveoUtils.getCleanFieldValue = function (result, field) {
        var value = coveo_search_ui_1.Utils.getFieldValue(result, field);
        if (!_.isArray(value) && _.isObject(value)) {
            value = '';
        }
        return value || '';
    };
    return CoveoUtils;
}());
exports.CoveoUtils = CoveoUtils;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component = Coveo.Component;
var Initialization = Coveo.Initialization;
var $$ = Coveo.$$;
var ScrollToTop = /** @class */ (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop(element, options, bindings) {
        var _this = _super.call(this, element, ScrollToTop.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        var img = $$('img', { src: 'https://www.samsung.com/etc/designs/smg/global/imgs/btn-gotop.png' });
        $$(_this.element).addClass('coveo-hidden');
        _this.element.appendChild(img.el);
        window.onscroll = function () {
            if ((window.innerHeight + window.scrollY) > window.innerHeight) {
                $$(_this.element).removeClass('coveo-hidden');
            }
            else if ((window.innerHeight + window.scrollY) == window.innerHeight) {
                $$(_this.element).addClass('coveo-hidden');
            }
        };
        $$(_this.element).on('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return _this;
    }
    ScrollToTop.ID = 'ScrollToTop';
    ScrollToTop.options = {};
    return ScrollToTop;
}(Component));
exports.ScrollToTop = ScrollToTop;
Initialization.registerAutoCreateComponent(ScrollToTop);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Webpack output a library target with a temporary name.
// It does not take care of merging the namespace if the global variable already exists.
// If another piece of code in the page use the Coveo namespace (eg: extension), then they get overwritten
// This code swap the current module to the "real" Coveo variable, without overwriting the whole global var.
// This is to allow end user to put CoveoPSComponents.js before or after the main CoveoJsSearch.js, without breaking
Object.defineProperty(exports, "__esModule", { value: true });
function swapVar(scope) {
    if (window['Coveo'] == undefined) {
        window['Coveo'] = scope;
    }
    else {
        _.each(_.keys(scope), function (k) {
            window['Coveo'][k] = scope[k];
        });
    }
}
exports.swapVar = swapVar;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-history.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-matched.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-related.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-right-arrow.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-search-submit.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/search-input-cancel-gray.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/btnGoTop.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "js/cultures/en.js";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "js/cultures/fr.js";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "js/cultures/es-es.js";

/***/ })
/******/ ]);
});