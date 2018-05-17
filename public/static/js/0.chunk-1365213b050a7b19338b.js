webpackJsonp([0],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(23);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(24);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(73);

var _Button = __webpack_require__(188);

var _Button2 = _interopRequireDefault(_Button);

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _makePage = __webpack_require__(430);

var _makePage2 = _interopRequireDefault(_makePage);

var _SlideLR = __webpack_require__(553);

var _SlideLR2 = _interopRequireDefault(_SlideLR);

var _SlideRL = __webpack_require__(556);

var _SlideRL2 = _interopRequireDefault(_SlideRL);

var _SlideDU = __webpack_require__(559);

var _SlideDU2 = _interopRequireDefault(_SlideDU);

var _Fade = __webpack_require__(434);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function (_React$PureComponent) {
  (0, _inherits3.default)(NotFoundPage, _React$PureComponent);

  function NotFoundPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NotFoundPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NotFoundPage.__proto__ || (0, _getPrototypeOf2.default)(NotFoundPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      play1: false,
      play2: false
    }, _this.showGoBack = function () {
      _this.setState({
        play2: true
      });
    }, _this.showNotFound = function () {
      _this.setState({
        play1: true
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NotFoundPage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          history = _props.history,
          location = _props.location,
          ined = _props.ined;

      return _react2.default.createElement(
        "div",
        { className: _style2.default.container },
        _react2.default.createElement(
          "div",
          { className: _style2.default.goBackContainer },
          _react2.default.createElement(
            _SlideDU2.default,
            { play: this.state.play2 },
            _react2.default.createElement(_Button2.default, {
              onClick: history.goBack,
              text: "<-"
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: _style2.default.numberContainer },
          _react2.default.createElement(
            _SlideLR2.default,
            { play: ined, onEntered: this.showNotFound },
            _react2.default.createElement(
              "div",
              { className: _style2.default.number },
              "404"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: _style2.default.textContainer },
          _react2.default.createElement(
            _Fade2.default,
            { play: this.state.play1, onEntered: this.showGoBack },
            _react2.default.createElement(
              "div",
              { className: _style2.default.text },
              "Not Found"
            )
          )
        )
      );
    }
  }]);
  return NotFoundPage;
}(_react2.default.PureComponent);

;

exports.default = (0, _makePage2.default)(NotFoundPage);

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"modules\":true}!../../../../node_modules/less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"modules\":true}!../../../../node_modules/less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "._3V2nmXQoY2j7bH03tagp4c {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  margin: 0;\n  padding: 0;\n}\n._2pTtvQn_6Lg5gJsDScGaUl {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n._2Sg2FeRhwfXWQiqOTo8p83 {\n  width: 45%;\n  height: 100%;\n  margin-right: 5%;\n}\n.lU-pAPdo01k6johJFMzSa {\n  position: relative;\n  width: 80px;\n  height: 100%;\n}\n._31rGMtoQNSgBxeUOWaNrMr {\n  flex-grow: 1;\n  height: 100%;\n}\n._2GQzRmnMooXDGdkrLdd0iI {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  font-size: 60px;\n  font-weight: bold;\n}\n.wdnRsteXpcgBP-kpeYHhm {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 60px;\n  font-weight: bold;\n}\n", ""]);

// exports
exports.locals = {
	"fullSpaceBFC": "_3V2nmXQoY2j7bH03tagp4c",
	"container": "_2pTtvQn_6Lg5gJsDScGaUl",
	"numberContainer": "_2Sg2FeRhwfXWQiqOTo8p83",
	"goBackContainer": "lU-pAPdo01k6johJFMzSa",
	"textContainer": "_31rGMtoQNSgBxeUOWaNrMr",
	"number": "_2GQzRmnMooXDGdkrLdd0iI",
	"text": "wdnRsteXpcgBP-kpeYHhm"
};

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeAnimation = __webpack_require__(429);

var _makeAnimation2 = _interopRequireDefault(_makeAnimation);

var _style = __webpack_require__(554);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = {
  enter: 1000,
  exit: 1000
};

exports.default = (0, _makeAnimation2.default)(_style2.default, timeout);

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(555);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less", function() {
			var newContent = require("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "._2_k6DPdRP6nZnTMi5gR-O9,\n._3eHLXu4N20_Tn1OeTUUmNT {\n  margin-left: -100%;\n  transition: all 1000ms ease;\n}\n.FjVruSdgJi47GchHtX7qg,\n.UVr2YWARocPJv5naWmqHl {\n  margin-left: 0;\n}\n._3zdPRnEpzXwA3f7i7psYU3 {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._3lmJzHfLSw75RVnZ52bY6k {\n  margin-left: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"appear": "_2_k6DPdRP6nZnTMi5gR-O9",
	"enter": "_3eHLXu4N20_Tn1OeTUUmNT",
	"appearActive": "FjVruSdgJi47GchHtX7qg",
	"enterActive": "UVr2YWARocPJv5naWmqHl",
	"exit": "_3zdPRnEpzXwA3f7i7psYU3",
	"exitActive": "_3lmJzHfLSw75RVnZ52bY6k"
};

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeAnimation = __webpack_require__(429);

var _makeAnimation2 = _interopRequireDefault(_makeAnimation);

var _style = __webpack_require__(557);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = {
  enter: 1000,
  exit: 1000
};

exports.default = (0, _makeAnimation2.default)(_style2.default, timeout);

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(558);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less", function() {
			var newContent = require("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "._2vr8pB7pA1yMAID_R6XJ9I,\n.poEOMufacqCycElEGGo8m {\n  margin-left: 100%;\n  transition: all 1000ms ease;\n}\n.X1X6RtlGP80Nps-8HOoMx,\n._1kmaDsI1bHsuV9Azdu3-5Y {\n  margin-left: 0;\n}\n._1IG2O_sbCDdEqUlvi1DfR_ {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._3kD9TgA1bN8YwRYhYJ5ZRe {\n  margin-left: -100%;\n}\n", ""]);

// exports
exports.locals = {
	"appear": "_2vr8pB7pA1yMAID_R6XJ9I",
	"enter": "poEOMufacqCycElEGGo8m",
	"appearActive": "X1X6RtlGP80Nps-8HOoMx",
	"enterActive": "_1kmaDsI1bHsuV9Azdu3-5Y",
	"exit": "_1IG2O_sbCDdEqUlvi1DfR_",
	"exitActive": "_3kD9TgA1bN8YwRYhYJ5ZRe"
};

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeAnimation = __webpack_require__(429);

var _makeAnimation2 = _interopRequireDefault(_makeAnimation);

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = {
  enter: 1000,
  exit: 1000
};

exports.default = (0, _makeAnimation2.default)(_style2.default, timeout);

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(561);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less", function() {
			var newContent = require("!!../../../css-loader/index.js?{\"modules\":true}!../../../less-loader/dist/cjs.js?{\"paths\":[\"/home/antinus/Documents/React/Psychology_Bot/src/Frontend/Styles\"]}!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, ".hoBkZ7DvTFPmAw05AqcaP,\n._1B-zKJ6K5YdukLu-BwKn8s {\n  top: 100%;\n  position: absolute;\n  transition: all 1000ms ease;\n}\n._2ak0vs5A6Il8YuMpE8VCKN,\n.YFgqJ_AjQeDMWBy-C8UG0 {\n  position: absolute;\n  top: 0;\n}\n._2_x7Emrd4DlFTwfdxdNFpw {\n  position: absolute;\n  transition: all 1000ms ease;\n  bottom: 0;\n}\n._3yAVaFapdgPyeEivNIf36G {\n  position: absolute;\n  bottom: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"appear": "hoBkZ7DvTFPmAw05AqcaP",
	"enter": "_1B-zKJ6K5YdukLu-BwKn8s",
	"appearActive": "_2ak0vs5A6Il8YuMpE8VCKN",
	"enterActive": "YFgqJ_AjQeDMWBy-C8UG0",
	"exit": "_2_x7Emrd4DlFTwfdxdNFpw",
	"exitActive": "_3yAVaFapdgPyeEivNIf36G"
};

/***/ })

});