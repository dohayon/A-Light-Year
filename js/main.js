$(document).ready(function () {
	//modal open and close buttons
	$('#about-btn').on('click', modal);
	$('#close-btn').on('click', close);

	function modal() {
		$('#container-about').slideDown();
	}

	function close() {
		$('#container-about').slideUp();
	}

	//red dot scroll
	var $w = $(window);
	
	var $progCount = $('.progress-count');
	var $prog = $('#day');

	var wh, h, sHeight;

	function setSizes(){
		wh = $w.height();
		h = $('body').height();
		sHeight = h - wh;
	}

	setSizes();

	$w.on('scroll', function(){
		var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
		updateProgress(perc);
	}).on('resize', function(){
		setSizes();
		$w.trigger('scroll');
	});

	function updateProgress(perc){
		
		$progCount.html(Math.round(perc * 100) + "%");

    $prog.css({height : perc*100 + '%'});
	}

	//sticky nav, and hiding things at the top
	$(window).scroll(function(){
	    if ($(window).scrollTop() < 500) {
	       $('header').removeClass('fixed');
	       $('#day').addClass('hidden');
	       $('#time').addClass('hidden');
	    }

	    else if ($(window).scrollTop() > 161537) {
	       $('#day').addClass('hidden');
	       $('.again').css({bottom : $w.height()*.5 + 'px'});
	    }

	    else {
	       $('header').addClass('fixed');
	       $('#day').removeClass('hidden');
	       $('#time').removeClass('hidden');
	    }

	});

	//smoothing out "day scroll"
	$(window).scroll(function(){
	    if ($(window).scrollTop() < 51218) {
	       $('#day').css({top : 158 + 'px'});
	    }

	    else if ($(window).scrollTop() < 71218) {
	       $('#day').css({top : 108 + 'px'});
	    }

	    else if ($(window).scrollTop() < 91218) {
	       $('#day').css({top : 58 + 'px'});
	    }

	    else {
	       $('#day').css({top : 0});
	    }

	});
	



	//day counter

	var count = 1;
	$('#time').find('section').each(function() { 
		 //console.log($(this).offset().top);

		 $(this).attr('id','day'+count );

		 $(this).attr('data-day-number',count );
		 count++;
	});



	$('section').waypoint(function(direction) {
	  console.log('section showed up'+ $(this).data('day-number'));

	  console.log(dPos);
	  $('#number').html($(this).data('day-number'));
	}, { offset: 200 });


	var dPos;
	$(window).scroll(function(){
		var dOffset = $('#dot').offset().top;
		dPos = dOffset - $w.scrollTop();
		dPos += 45;

	});



	//Odometers
	window.odometerOptions = {
	  format: '(,ddd).dd',
	};


	setTimeout(function(){
	  $('#odom1').html(9460730472580800);
	  $('#odom2').html(5878625373183.6);
	  $('#odom3').html(63241.1);
	  $('#odom4').html(0.306601);
	  $('#odom5').html(31557600);
	}, 1000);

	//Back to top button
	$('.top').click(function() {
		$("html, body").animate({scrollTop: 650}, 2800);
	});


	skrollr.init();

	
	//Mute button

	var audio;
	audio = $(".audio");
	$(".sound").click(toggleAudio);

	 function toggleAudio(){
            audio.prop("muted",!audio.prop("muted"));
        }

});