"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Component = _React2["default"].Component;

// SoundCloud Logo

var SoundCloudLogoSVG = (function (_Component) {
    function SoundCloudLogoSVG() {
        _classCallCheck(this, SoundCloudLogoSVG);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(SoundCloudLogoSVG, _Component);

    _createClass(SoundCloudLogoSVG, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                "svg",
                {
                    className: "sb-soundplayer-cover-logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor"
                },
                _React2["default"].createElement("path", { d: "M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z" })
            );
        }
    }]);

    return SoundCloudLogoSVG;
})(Component);

// Player Button Icons

var ButtonIconSVG = (function (_Component2) {
    function ButtonIconSVG() {
        _classCallCheck(this, ButtonIconSVG);

        if (_Component2 != null) {
            _Component2.apply(this, arguments);
        }
    }

    _inherits(ButtonIconSVG, _Component2);

    _createClass(ButtonIconSVG, [{
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                "svg",
                {
                    className: "sb-soundplayer-play-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    fill: "currentColor"
                },
                this.props.children
            );
        }
    }]);

    return ButtonIconSVG;
})(Component);

// |> Play

var PlayIconSVG = (function (_Component3) {
    function PlayIconSVG() {
        _classCallCheck(this, PlayIconSVG);

        if (_Component3 != null) {
            _Component3.apply(this, arguments);
        }
    }

    _inherits(PlayIconSVG, _Component3);

    _createClass(PlayIconSVG, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                ButtonIconSVG,
                null,
                _React2["default"].createElement("path", { d: "M0 0 L32 16 L0 32 z" })
            );
        }
    }]);

    return PlayIconSVG;
})(Component);

// || Pause

var PauseIconSVG = (function (_Component4) {
    function PauseIconSVG() {
        _classCallCheck(this, PauseIconSVG);

        if (_Component4 != null) {
            _Component4.apply(this, arguments);
        }
    }

    _inherits(PauseIconSVG, _Component4);

    _createClass(PauseIconSVG, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                ButtonIconSVG,
                null,
                _React2["default"].createElement("path", { d: "M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z" })
            );
        }
    }]);

    return PauseIconSVG;
})(Component);

// |>| Next

var NextIconSVG = (function (_Component5) {
    function NextIconSVG() {
        _classCallCheck(this, NextIconSVG);

        if (_Component5 != null) {
            _Component5.apply(this, arguments);
        }
    }

    _inherits(NextIconSVG, _Component5);

    _createClass(NextIconSVG, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                ButtonIconSVG,
                null,
                _React2["default"].createElement("path", { d: "M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z " })
            );
        }
    }]);

    return NextIconSVG;
})(Component);

// |<| Prev

var PrevIconSVG = (function (_Component6) {
    function PrevIconSVG() {
        _classCallCheck(this, PrevIconSVG);

        if (_Component6 != null) {
            _Component6.apply(this, arguments);
        }
    }

    _inherits(PrevIconSVG, _Component6);

    _createClass(PrevIconSVG, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                ButtonIconSVG,
                null,
                _React2["default"].createElement("path", { d: "M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z " })
            );
        }
    }]);

    return PrevIconSVG;
})(Component);

exports["default"] = {
    SoundCloudLogoSVG: SoundCloudLogoSVG,
    PlayIconSVG: PlayIconSVG,
    PauseIconSVG: PauseIconSVG,
    NextIconSVG: NextIconSVG,
    PrevIconSVG: PrevIconSVG
};
module.exports = exports["default"];