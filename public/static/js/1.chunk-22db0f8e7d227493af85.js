webpackJsonp([1],{

/***/ 549:
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

var _applyHOCs = __webpack_require__(400);

var _applyHOCs2 = _interopRequireDefault(_applyHOCs);

var _makePage = __webpack_require__(430);

var _makePage2 = _interopRequireDefault(_makePage);

var _RecordVoice = __webpack_require__(431);

var _LoginForm = __webpack_require__(432);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _reactRedux = __webpack_require__(73);

var _redux = __webpack_require__(52);

var _ConvertAudioToText = __webpack_require__(433);

var _style = __webpack_require__(562);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//定义背景样式
var loginStyle = {
  background: 'url(/static/img/bg_login.jpg) no-repeat center top',
  height: '100%'
};

//import { view as Login } from "Connected/UserAuth";

var bgStyle = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)"
};

var imgStyle = {
  height: '25%',
  width: '25%',
  boderRadius: "12.5%",
  position: "absolute",
  left: "50%",
  top: "20%",
  transform: "translateX(-50%)"
};

var TestPage = function (_React$Component) {
  (0, _inherits3.default)(TestPage, _React$Component);

  function TestPage() {
    (0, _classCallCheck3.default)(this, TestPage);
    return (0, _possibleConstructorReturn3.default)(this, (TestPage.__proto__ || (0, _getPrototypeOf2.default)(TestPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(TestPage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var blobs = nextProps.blobs;

      var audio = blobs[blobs.length - 1];
      this.props.sendConvert({ audio: audio });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: loginStyle },
        _react2.default.createElement("img", { src: "/static/img/welcome.jpg", className: _style2.default.imgStyle }),
        _react2.default.createElement(
          "h1",
          { className: _style2.default.xiaowei },
          "\u5C0F\u5FAE"
        ),
        _react2.default.createElement(_LoginForm2.default, { a: this.props.said, b: this.props.response }),
        _react2.default.createElement(_RecordVoice.view, {
          show: true,
          autoStart: false,
          samplingRate: 16 * 1000
        })
      );
    }
  }]);
  return TestPage;
}(_react2.default.Component);

exports.default = (0, _applyHOCs2.default)([_makePage2.default, (0, _reactRedux.connect)(function (state) {
  return {
    blobs: state.Audio.blobs,
    urls: state.Audio.urls,
    said: state.Audio.said,
    response: state.Audio.response
  };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)(_ConvertAudioToText.actions, dispatch);
})], TestPage);

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "._3MQoeqcYV_vCBQhHfU2xKi {\n  height: 184px;\n  width: 184px;\n  border-radius: 92px;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n}\n._2zPSWHpEHHQ71NMh_9BwI5 {\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 32%;\n}\n", ""]);

// exports
exports.locals = {
	"imgStyle": "_3MQoeqcYV_vCBQhHfU2xKi",
	"xiaowei": "_2zPSWHpEHHQ71NMh_9BwI5"
};

/***/ })

});