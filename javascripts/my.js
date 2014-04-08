$(document).ready(function() {
  $('#kitties').click(function() {
	  $('#pic').html('<img src="http://curiousanimals.net/wp-content/uploads/2011/07/kittenstare.jpg">');
  });
  
  $('#puppies').click(function() {
	  $('#pic').html('<img src="http://alldogbreed.tk/wp-content/uploads/maltese-small-dog-2.jpg">');
  });
  
  $('#birds').click(function() {
	  $('#pic').html('<img src="http://4.bp.blogspot.com/_ZlkpP-llId4/SWLB19Go6jI/AAAAAAAAD4M/fAoAhXMluWM/s400/small+bird.jpg">');
  });
  
  $('#home').click(function() {
	  $('#pic').html('');
  });
});
