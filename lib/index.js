"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Neck = _interopRequireDefault(require("./Neck"));
var _Barre = _interopRequireDefault(require("./Barre"));
var _Dot = _interopRequireDefault(require("./Dot"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var onlyDots = function onlyDots(chord) {
  return chord.frets.map(function (f, index) {
    return {
      position: index,
      value: f
    };
  }).filter(function (f) {
    return !chord.barres || chord.barres.indexOf(f.value) === -1;
  });
};
var Chord = function Chord(_ref) {
  var chord = _ref.chord,
    instrument = _ref.instrument,
    _ref$lite = _ref.lite,
    lite = _ref$lite === void 0 ? false : _ref$lite;
  return chord ? /*#__PURE__*/_react["default"].createElement("svg", {
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet",
    viewBox: "0 0 80 70"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(13, 13)"
  }, /*#__PURE__*/_react["default"].createElement(_Neck["default"], {
    tuning: instrument.tunings.standard,
    strings: instrument.strings,
    frets: chord.frets,
    capo: chord.capo,
    fretsOnChord: instrument.fretsOnChord,
    baseFret: chord.baseFret,
    lite: lite
  }), chord.barres && chord.barres.map(function (barre, index) {
    return /*#__PURE__*/_react["default"].createElement(_Barre["default"], {
      key: index,
      capo: index === 0 && chord.capo,
      barre: barre,
      finger: chord.fingers && chord.fingers[chord.frets.indexOf(barre)],
      frets: chord.frets,
      lite: lite
    });
  }), onlyDots(chord).map(function (fret) {
    return /*#__PURE__*/_react["default"].createElement(_Dot["default"], {
      key: fret.position,
      string: instrument.strings - fret.position,
      fret: fret.value,
      strings: instrument.strings,
      finger: chord.fingers && chord.fingers[fret.position],
      lite: lite
    });
  }))) : null;
};
var _default = exports["default"] = Chord;