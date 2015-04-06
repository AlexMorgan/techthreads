var referredURL = document.referrer

if(referredURL) {
  console.log(referredURL);
  $.cookie('referrer', referredURL, { expires: 7, path: '/' });
} else
{
  console.log('referredURL = ' + referredURL);
}
