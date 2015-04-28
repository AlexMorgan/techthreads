$(function(){
  $('#splash-signup input[type="submit"]').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    $target = $(e.currentTarget);
    $url = $target.parents('form').attr('action');

    var email = $('input.signup').val();

    $.ajax({
      type: "POST",
      url: $url,
      data: { signup: { email: email, referrer_id: $.cookie('referrerID'), referred_url: $.cookie('referrer') }},
      dataType: "json",
      success: function(data) {
        var referralID = data.signup.referral_id;
        var referralPath = window.location.origin + '/?r_id=' + referralID;
        formatReferDialogue(referralPath);
      }, // End success callback
      error: function(data) {
        console.log(data);
      }
    });
  });
});
