function formatReferDialogue(path) {
  $('#signup-content').children().fadeOut(400, function(){
    $('#referral-content').fadeIn(400);
    $('#referral-id-share').val(path);
    var twHref = "https://twitter.com/share?text=Check out TechThreads. A startup looking to reinvent the way we wear tech&url=" + path;
    $('.tw-share').attr('href', twHref)
  });
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function errorMsg(msg) {
  $('p.error').html(msg);
}

function validateSubmission() {
  if ($signupEmail === "") {
    errorMsg('Please fill out the form for exclusive deals');
    return false;
  } else if (validateEmail($signupEmail) === false) {
    errorMsg('Please enter a valid email');
    return false;
  }
}

