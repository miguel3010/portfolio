webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/*\n    ================================================\n                        HEADER\n    ================================================    \n*/\n\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\n.header {\n    width: 100%;\n    padding-right: 4em;\n    padding-left: 4em;\n    position: absolute;\n    z-index: 1;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n.navbar-nav {\n    margin-right: 50px;\n    margin-left: 0;\n}\n\n.btn-resume {\n    background: #4527A0;\n    color: white;\n    padding: 0;\n    padding-bottom: 2.5px;\n    padding-top: 2.5px;\n    padding-left: 15px;\n    padding-right: 15px;\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n}\n\n.btn-resume:hover {\n    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);\n            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);\n}\n\n.ribbon {\n    padding-left: 40px;\n    padding-right: 40px;\n    width: 100%;\n    background: #4527A0;\n}\n\n.ribbon>.ribbon-disponse {\n    color: white;\n    text-align: center;\n    float: right;\n    vertical-align: middle;\n    display: inline;\n}\n\n.ribbon>.ribbon-message>.ribbon-link {\n    color: white;\n}\n\n.ribbon>.ribbon-message {\n    color: white;\n    display: inline;\n}\n\n/*\n    ================================================\n                    CONTENT SECTIONS\n    ================================================    \n*/\n\n.content {\n    width: 100%;\n    height: 100%;\n}\n\n.content-section {\n    padding-bottom: 10px;\n}\n\n.section-title {\n    color: white;\n    text-align: center;\n    padding: 10px;\n    margin: 0;\n    margin-bottom: 25px;\n}\n\n.section-title>.section-icon {\n    color: white;\n    margin-right: 15px;\n}\n\n.hr-divider {\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    margin-left: auto;\n    margin-right: auto;\n    border-style: dashed;\n    border-width: 1px;\n    color: white;\n}\n\n/*\n    ================================================\n                        PROMPT\n    ================================================    \n*/\n\n.prompt {\n    width: 100%;\n    min-height: 100%;\n    background-color: #382e47;\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237c718e' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n     padding-top: 100px;\n}\n\n.billboard{\n    background-color: rgba(255, 255, 255, 0.3);     \n    padding-left: 0; \n    border-radius: 10px;\n \n }\n\n.billboard-title{\n     color: white;\n     background-color: rgba(255, 255, 255, 0.3);    \n     border-top-left-radius: 10px;\n     border-top-right-radius: 10px;\n     padding: 5px;\n     margin-bottom: 0;\n     margin-top: 0;\n     padding-top: 1px;\n }\n\n.front-img{\n     width: 100%;\n     border-top-left-radius: 10px;\n     border-bottom-left-radius: 10px;\n }\n\n/*\n    ================================================\n                        PROFILE\n    ================================================    \n*/\n\n.profile {\n    color: #283593;}\n\n.profile-photo {\n    width: 50%;\n    height: auto;\n    float: right;\n}\n\n.greet {\n    font-size: 56px;\n}\n\n@media (max-width: 575px) {\n    .profile-photo {\n        position: relative;\n        margin-left: 25%;\n        float: none;\n    }\n    .greet {\n        font-size: 40px;\n    }\n}\n\n.elevated {\n    -webkit-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);\n            box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);\n}\n\n.sub-section-title {\n    margin-bottom: 15px;\n}\n\n.sub-section-title>h2>.icon {\n    margin-right: 10px;\n}\n\n.btn-outline-dark :hover {\n    color: white;\n}\n\n.languages {\n    margin-top: 35px;\n    margin-bottom: 35px; \n    color: #283593;\n}\n\n.language {\n    border: 0.1px solid #d0d0d0;\n    border-radius: 5px;\n    padding: 25px;\n    background: white;\n}\n\n.language>.icon {\n    float: left;\n    width: 80px;\n    height: auto;\n    margin-left: 30px;\n}\n\n.language>.description {\n    text-align: center;\n}\n\n.language>.legend {}\n\n.studies {\n    margin-top: 35px;\n    margin-bottom: 35px; \n    color: #283593;\n}\n\n.study {\n    padding: 25px;\n}\n\n.study>.icon {\n    width: 80px;\n    height: auto;\n    margin-left: 30px;\n    border-radius: 50%;\n    display: block;\n    float: left;\n}\n\n.study>.description {\n    text-align: left;\n    display: inline;\n    display: block;\n    float: left;\n    margin-left: 45px;\n}\n\n.study>a>.legend {\n    color: #651FFF;\n    text-decoration: none;\n    font-weight: normal;\n}\n\n.interests {\n    margin-top: 35px;\n    margin-bottom: 35px;\n    color: #283593;\n}\n\n.interest {\n    background: white;\n    border: 0.5px solid #d0d0d0;\n    border-radius: 5px;\n    padding: 16px;\n    margin-bottom: 30px;\n    min-height: 260px;\n    max-height: 260px;\n}\n\n.interest>.icon {\n    width: 80px;\n    height: 80px;\n    display: block;\n    /*for the img inside your div */\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 10px;\n}\n\n.interest>.description {\n    text-align: center;\n}\n\n.interest>a>.legend {\n    color: #283593;\n    text-decoration: none;\n    font-weight: normal;\n    text-align: center;\n}\n\n.hobbies {}\n\n/*\n    ================================================\n                        SKILLS\n    ================================================    \n*/\n\n.skills {\n    background: #FF9800;\n}\n\n.skill {\n    color: white;\n}\n\n.skill>.header {\n    position: static;\n    padding: 0;\n}\n\n.skill>.header>.icon {\n    width: 80px;\n    height: auto;\n    display: block;\n    /*for the img inside your div */\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.skill>.header>.legend {\n    text-align: center;\n}\n\n.skill>.list {\n    list-style-type: none;\n    display: block;\n    /*for the img inside your div */\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    padding: 0;\n}\n\n.skill>.list>.list-elem {}\n\n.soft-skills {\n    color: white;\n}\n\n.soft-skill {\n    background: white;\n    padding: 20px;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    max-height: 150px;\n    min-height: 150px;\n}\n\n.soft-skill>.icon {\n    width: 60px;\n    height: 60px;\n    display: block;\n    /*for the img inside your div */\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.soft-skill>.icon svg path {\n    color: #1B5E20;\n}\n\n.soft-skill>.name {\n    color: #FF9800;\n    text-align: center;\n    font-size: 20px;\n    margin-top: 5px;\n}\n\n/*\n    ================================================\n                        PROJECTS\n    ================================================    \n*/\n\n.projects {\n    width: 100%;\n    background: rgb(38, 161, 13);\n}\n\n.project {\n    background: white;\n    border-radius: 3px;\n    padding-bottom: 0;\n    padding: 0;\n    margin-bottom: 20px;\n    border-top: 1px solid #c7c7c7;\n    border-right: 1px solid #c7c7c7;\n    border-bottom: 0px solid #c7c7c7;\n    border-left: 1px solid #c7c7c7;\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.thumbnail {\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.btn-detail {\n    background: #4527A0;\n    width: 100%;\n    border-radius: 0;\n    padding: 1px;\n    border: none;\n    color: white;\n}\n\n.btn-detail>.icon {\n    margin-left: 5px;\n}\n\n.project-type {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 10px;\n    text-align: right;\n    color: #1565C0;\n}\n\n.project-date {\n    padding-top: 10px;\n}\n\n.project-date {\n    color: rgb(122, 125, 128);\n}\n\n.project-role {\n    margin: 0;\n}\n\n.project-description {\n    font-size: 15px;\n    margin-bottom: 0;\n}\n\n.project-personal {\n    color: #1B5E20;\n}\n\n@media (min-width: 768px) {\n    .project-description {\n        font-size: 20px;\n    }\n}\n\n/*\n    ================================================\n                        CONTACT\n    ================================================    \n*/\n\n.events {\n    width: 100%;\n    background: rgb(38, 161, 13);\n}\n\n/*\n    ================================================\n                        CONTACT\n    ================================================    \n*/\n\n.contact {\n    width: 100%;\n}\n\n/*\n    ================================================\n                        COPYRIGHT\n    ================================================    \n*/\n\n.copyright {\n    background: #F57C00;\n    color: white;\n    padding: 10px;\n    text-align: center;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map