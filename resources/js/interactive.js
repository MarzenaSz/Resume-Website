$(document).ready(function(){
	
	// start showContacts function
	
		showContacts();

	// --------------------------------------
	
	// PROJECT PICTURES
	// fade project picture on mouse hover
	$('.project-pic').mouseenter(function(){
		$(this).fadeTo('fast', 0.80);	
	});
	
	$('.project-pic').mouseleave(function(){
		$(this).fadeTo('slow', 1);
	});
	// ---------------------------------------
	
	// RESUME PICTURE
	var clicked = false;
	// swap resume picture on click
	$('.resume-pic').click(function () {
		if(clicked === false){
		  this.src = 'resources/images/me.jpg';
		  clicked = true;
		}
		else {
		  this.src = 'resources/images/picture.jpg';
		  clicked = false;
		}
	});
	
	// change coursor to poiner while hovering on the resume picture
	$('.resume-pic').hover(function(){
		$(this).css('cursor', 'pointer');
		// show tooltip that says Click me!
		$(this).attr("title", "Click me!");
	});
	// ----------------------------------------
	
	// CONTACT LISTS
	// start showing the list items one by one, every one sec
	function showContacts() {
		
		// check if the list element exists
		if($('.contact:hidden').length) {
			// check if h1 is already visable
			if($('h1').is(':visible')){
				// fade the first element in
				$('.contact:hidden:first').fadeIn();
			}
			// and wait one second before fading in the next one
			setTimeout(showContacts, 300);	

		}
		
	}
	// --------------------------------------
	// NAME
	function moveName() {
		$('h1').slideDown('slow');
	}
	
	setTimeout(moveName, 0);
	// -------------------------------------
	
	// SKILL TEXT
	// shake the text after 5 sec, call the function only once || 
	function shakeText() {
		$(".skill-title").effect( "shake", {times: 3 }, 1000 );
	}
	// execute shaketext function after 5 seconds only once
	setTimeout(shakeText, 2000);
	
	//-------------------------------------
	
	// WINDOW SCROLL 
	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.info').each( function(i){
            
            var position = $(this).position().top / 2;
            var windowTop = $(window).scrollTop();
            
            /* If the object is completely visible in the window, fade it it */
            if( windowTop > position ){
                $(this).animate({'opacity':'1'},2000);
            }
            
        }); 
    
    });
	
	// PROJECT PICTURE
	// change cursor into pinter on hover
	$('.project-pic').hover(function(){
		$(this).css('cursor', 'pointer');
	});
	
	
	// LETS CONNECT TOGGLE 
	// target h2 text inside footer's first child row
	var letsConnect = $("footer").children().first().children();
	// target unordered list iside of the footer
	var footerList = $("#footer-contacts");
		// set element click to false
	var elementClicked = false;
		//footerList.hide();
		// when you click Lets Connect text
		letsConnect.click(function(){
		// and if element click has been false
		if(elementClicked === false) {
			//show the list with contact information
			//footerList.fadeIn(500);
			footerList.css("visibility", "visible");
			// set elementClicked to true
			elementClicked = true;
		}
		// when you click Lets Connect text again
		else{
			//hide the list with contact information preserving the space
			//footerList.fadeOut(500);
			footerList.css("visibility", "hidden");
			// set elementClicked to false
			elementClicked = false;
			}
		});

});


    

