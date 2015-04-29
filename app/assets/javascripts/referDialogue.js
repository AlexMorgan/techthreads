function formatReferDialogue(path) {
  $('#signup-content').children().fadeOut(400, function(){
    $('#referral-content').fadeIn(400);
    $('#referral-id-share').val(path);
    var twHref = "https://twitter.com/share?text=Check out TechThreads. A startup looking to reinvent the way we wear tech&url=" + path;
    $('.tw-share').attr('href', twHref)
  });
}
