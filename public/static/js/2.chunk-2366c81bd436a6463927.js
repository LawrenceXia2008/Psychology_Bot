webpackJsonp([2],{

/***/ 550:
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

var _style = __webpack_require__(564);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { view as Login } from "Connected/UserAuth";


//定义背景样式

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
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TestPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TestPage.__proto__ || (0, _getPrototypeOf2.default)(TestPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      time: 0
    }, _this.startTick = function () {
      _this.handle = setInterval(function () {
        return _this.setState({
          time: _this.state.time + 1
        });
      }, 1000);
    }, _this.stopTick = function () {
      clearInterval(_this.handle);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
        { className: _style2.default.bg },
        _react2.default.createElement("img", { src: "/static/img/welcome.jpg", className: _style2.default.imgStyle }),
        _react2.default.createElement(
          "h2",
          { className: _style2.default.xiaowei },
          "\u5C0F\u5FAE"
        ),
        _react2.default.createElement(
          "div",
          { className: _style2.default.contactTime },
          _react2.default.createElement(
            "h1",
            null,
            this.state.time
          )
        ),
        _react2.default.createElement("img", { className: _style2.default.bar, src: "/static/img/bar.png" }),
        _react2.default.createElement(
          "div",
          { className: _style2.default.phonePos },
          _react2.default.createElement(_RecordVoice.view, {
            show: true,
            onStart: this.startTick,
            onEnd: this.stopTick,
            autoStart: false,
            samplingRate: 16 * 1000
          })
        )
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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(565);
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

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: RobotoLight;\n  src: url('/static/font/Roboto-Light.ttf');\n}\n._3fRlMvuYWgG0vLASAesRjt {\n  height: 184px;\n  width: 184px;\n  border-radius: 92px;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n}\n.BiUP7pgejJJpcM96J2fcx {\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 32%;\n}\n._2E2SJVBIUcUtkDLilH978S {\n  height: 100%;\n  background-color: #0f131e;\n}\n.BiUP7pgejJJpcM96J2fcx {\n  position: absolute;\n  top: 38%;\n  text-align: center;\n  color: #e6f4e7;\n}\n._1_Tv_rSi93MzRsQpiFQA1j {\n  position: absolute;\n  top: 46%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #e6f4e7;\n}\n._1_Tv_rSi93MzRsQpiFQA1j h1 {\n  font-family: \"RobotoLight\";\n}\n._12ilQiXDXkrU1NNfKdKbh9 {\n  width: 32rem;\n  height: 7rem;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.P1tb-Y64pfYj21hZnfgd2 {\n  position: absolute;\n  width: 100%;\n  top: 76%;\n}\n", ""]);

// exports
exports.locals = {
	"imgStyle": "_3fRlMvuYWgG0vLASAesRjt",
	"xiaowei": "BiUP7pgejJJpcM96J2fcx",
	"bg": "_2E2SJVBIUcUtkDLilH978S",
	"contactTime": "_1_Tv_rSi93MzRsQpiFQA1j",
	"bar": "_12ilQiXDXkrU1NNfKdKbh9",
	"phonePos": "P1tb-Y64pfYj21hZnfgd2"
};

/***/ })

});