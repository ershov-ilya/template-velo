/*------------------------------------------------------------------
Project:        Wolfram
Author:         Yevgeny Simzikov
URL:            http://simpleqode.com/
                https://twitter.com/YevSim
                https://www.facebook.com/simpleqode
Version:        2.2.0
Created:        18/08/2014
Last change:    30/04/2015
-------------------------------------------------------------------*/

/* -------------------- *\
    #BACKSTRETCH CAROUSEL & FULLPAGE.JS
\* -------------------- */

$(window).load(function() {

    // Init Backstretch
	var defaultBGs=[
        "/assets/templates/velo/img/screen-bg_1.jpg",
        "/assets/templates/velo/img/screen-bg_2.jpg",
        "/assets/templates/velo/img/screen-bg_3.jpg",   
        "/assets/templates/velo/img/screen-bg_4.jpg",   
        "/assets/templates/velo/img/screen-bg_5.jpg",   
        "/assets/templates/velo/img/screen-bg_6.jpg", 
        "/assets/templates/velo/img/screen-bg_7.jpg"  
    ];
	var defaultAnchors=['welcome', 'about', 'portfolio', 'pricing', 'team', 'features', 'contact'];
	
	var BGs=[], Anchors=[];
	
	if(typeof docLoad.BGs != 'undefined') {
		for(var i=0; i<docLoad.BGs.length; i++){
			BGs.push(docLoad.BGs[i].original);
			Anchors.push(docLoad.BGs[i].alias);
		}
	}
	
	Anchors = Anchors || defaultAnchors;
	BGs = BGs || defaultBGs

    $(".backstretch-carousel").backstretch(BGs, {duration: 1000, fade: 700});

    // Pause Backstretch

    $(".backstretch-carousel").backstretch("pause");

    $('#fullpage').fullpage({

        // Plugin setup
        
        // Navigation
        anchors: Anchors,
        menu: '.fullpage__nav',

        // Custom selectors
        sectionSelector: '.site-wrapper',

        //Scrolling
        scrollOverflow: true,

        onLeave: function(index, nextIndex, direction){

            // Make navbar active after leaving 1st section

            if(index == 1 && nextIndex != 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            if(index != 1 && nextIndex == 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            // Change Backstretch image on fullPage scroll

            $(".backstretch-carousel").backstretch("show", nextIndex-1)
        }
    });

});