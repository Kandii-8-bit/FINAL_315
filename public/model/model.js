var MODEL = (function () {
  var _getView = function (viewName) {
    $.get(`views/${viewName}.html`, function (data) {
      $("#app").html(data);
    });
  };

  // var _db = (function () {
  //   var _db = function () {

  //   }
  // })

  return {
    getView: _getView,
  };
})();
