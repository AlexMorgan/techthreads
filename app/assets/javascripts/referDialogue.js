function formatReferDialogue(path) {
  $('#splash-signup').children().hide();
  $('#splash-signup').append('<h1>Thanks for believing in our mission!
    <br>Share the following link to get exclusive deals:</h1>');
  $('#splash-signup').append('<h4>' + path + '</h4>');
}
