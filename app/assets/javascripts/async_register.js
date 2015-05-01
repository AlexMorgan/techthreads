$(function(){
  $('#splash-signup input[type="submit"]').on('click', function(e) {
    $signupEmail = $('#splash-signup input[type="text"]').val();
    e.stopPropagation();
    e.preventDefault();

    validateSubmission();

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
        debugger;
        if (data.responseJSON.email[0] === "has already been taken") {
          errorMsg('This email has already been used. Please try again.');
        }
      }
    });
  });
});
