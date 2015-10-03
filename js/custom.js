var docState={sh:null};

/* -------------------- *\
    #PRELOADER
\* -------------------- */

function menuClick(){
	var $this = $(this).closest('.navbar-collapse');
	//console.log('click');
	//console.log($this.get(0));
	$this.removeClass('in');
}

function windowResize(){
	// Замер высоты
	var xs = 400,
	 sm = 768,
	 md = 900,
	 lg = 1200;
	 
	var h=$(window).height();
	//console.log(h);
	var diff={was:docState.sh, now:null, changes:false};
	if(h<xs) diff.now='h-xs';
	else if(h<=sm) diff.now='h-sm';
	else if(h<=md) diff.now='h-md';
	else if(h<=lg) diff.now='h-lg';
	else diff.now='h-xl';
	
	if(diff.now!=diff.was) {
        diff.changes=true;
		docState.sh=diff.now;
	}
	if(diff.changes){
		$('.window-resize').removeClass(diff.was).addClass(diff.now);
        diff.changes=false;
	}
}

$(document).ready(function(){
	$('.navbar-nav').click('a',menuClick);
});

$(window).load(function() {

    $('.preloader__img').fadeOut(500);
    setTimeout(function() {
        $('.preloader').addClass('active').delay(1000).fadeOut(500);
    }, 1000);
	
	//$('.default-click').trigger('click');
	//$('.btn-filter:first').trigger('click');
	
	windowResize();
});

$(window).resize(windowResize);

/* -------------------- *\
    #SIDEBAR
\* -------------------- */

$(".sidebar__btn").on('click', function() {
    $(".sidebar__btn_open").toggleClass("show hidden");
    $(".sidebar__menu").toggleClass("sidebar__menu_hidden");
    return false;
});


/* -------------------- *\
    #PORTFOLIO SCREEN
\* -------------------- */

/* Requires isotope.pkgd.min.js & imagesloaded.pkgd.min.js */

/**
 * Isotope filtering
 */

// init Isotope
var $container = $('.portfolio__items').imagesLoaded( function() {
    $container.isotope({
        itemSelector: '.filter__item',
        layoutMode: 'fitRows'
    });
});
// filter items on button click
$('.portfolio__nav > a').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    return false;
});