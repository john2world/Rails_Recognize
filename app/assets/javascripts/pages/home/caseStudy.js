window.R = window.R || {};
window.R.pages = window.R.pages || {};

window.R.pages["home-case_study"] = (function($, window, undefined) {
  var T = function() {
    T.superclass.constructor.apply(this, arguments);
  };
  
  R.utils.inherits(T, R.pages.home);
  
  return T;
})(jQuery, window);