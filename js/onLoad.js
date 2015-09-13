
$(document).ready(function(){
	/* Set navigation id attribute of current page to 'iamhere'.  We know which page is
	being displayed with the body id attribute */
	var mybodyid = $('body').attr('id');
	var mynavid = '#nav' + mybodyid;
	$(mynavid).attr('id','iamhere');

	/* Set tab title on head section.  Works in conjunction with head php include. */
	var myTitle = "CSCIE15 - Gerardo "+ $('.mainContent').attr('title');
	$('#pageName').text(myTitle);

});
