function getReferrer() {
  var get = (function(){
      var map = {};
      location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, k, v){
          map[k] = v;
      });
      return map;
  }());

  if (get.r_id) {
    $.cookie('referrerID', get.r_id, { expires: 7, path: '/' });
  }
}
