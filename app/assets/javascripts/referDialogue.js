function formatReferDialogue(path) {
  $('#signup-content').children().fadeOut(400, function(){
    $('#referral-content').fadeIn(400);
    $('#referral-id-share').val(path);
  });
}
