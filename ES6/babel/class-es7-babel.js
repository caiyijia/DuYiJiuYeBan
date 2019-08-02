"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search =
/*#__PURE__*/
function () {
  function Search() {
    _classCallCheck(this, Search);

    this.url = 'urlA';
    this.keyValue = '';
  }

  _createClass(Search, [{
    key: "getCount",
    value: function getCount() {
      console.log('发送请求');
    }
  }]);

  return Search;
}();

Search.num = 10;
var oS = new Search();
console.log(oS);
