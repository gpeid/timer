// var timer = 0;

// function doseconds(){
// 	$('#timer span').html(++timer);
// 	var timer60 = parseInt(timer % 60);
// 	$('#timer span').html(timer60);

// 	dominutes(timer); //passing timer variable to another function
// }

// function dominutes(timer){
// 	var minutes = parseInt(timer / 60); //access the timer variable here
// 	var minutes60 = minutes % 60;
// 	$('#minutes span').html(minutes60);
// 	dohours(minutes);
// }

// function dohours(minutes){
// 	var hours = parseInt(minutes / 60); // Math.floor also works; parseInt -> change frm float -> int
// 	$('#hours span').html(hours);

// }

// $('#timer span').html(timer);

// setInterval(
// 	function(){
// 		dohours();
// 		dominutes();
// 		doseconds();
// 	},1000
// );

// $(document).ready(function(){

// 	$('#reset').click(function(){
// 		timer = -1;
// 	});

// });


var timer = 0;

function dotimer(){
	++timer;
	// $('#timer span').html(timer);
	doseconds(timer); //passing timer variable to another function

}

// Get the seconds
function doseconds(){
	seconds = timer % 60;
	$('#seconds span').html(seconds);
	dominutes(seconds); //passing timer variable to another function
	progressSec(seconds);
}

function dominutes(){
	minutes = parseInt((timer / 60)); //access the timer variable here
	minhour = minutes % 60;
	$('#minutes span').html(minhour);
	dohours(minutes);
}

function dohours(){
	hours = parseInt((minutes / 60)); // Math.floor also works; parseInt -> change frm float -> int
	dayhours = hours % 24;

	$('#hours span').html(dayhours);
}

function overlaymove(){
	$('#overlay').toggleClass('peekaboo');
}

function progressSec(){
	per = (100 / 60); //percent / seconds
	bar = per + (seconds * per); 
	$('#bar-seconds').css('width',  bar + '%');
	// $('#seconds').css('width',  bar + '%');

}

function progressMin(){
	barmin = bar/60 + (minhour * per); 
	$('#bar-minutes').css('width',  barmin + '%');
	// $('#minutes').css('width',  barmin + '%');
}

function progressHour(){
	perhour = (100 / 24);
	barhour = barmin/24 + (dayhours * perhour)
	$('#bar-hours').css('width',  barhour + '%');
	// $('#hours').css('width',  barhour + '%');
}



function randcolor(){
	var randhex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var bgcolor = '';
	for (var i = 0; i < 6; i++) {
		bgcolor += randhex[Math.floor(Math.random()*randhex.length)]; //add to end of barcolor
	};

	$('.progress').css('backgroundColor', '#' + bgcolor);
}

function creepybg(){
	var fadebg = Math.random();
	$('#overlay').css('opacity', '' + fadebg);

}

setInterval(
	function(){
		dohours();
		dominutes();
		doseconds();
		dotimer();
		progressSec();
		progressMin();
		progressHour();
		randcolor();
		creepybg();
	},1000
);
setInterval(
	function(){
		overlaymove();
	},15000
);


$(document).ready(function(){

	overlaymove(); //run on load

	//////////////////////////////

	$('#reset').click(function(){
		timer = -1;
	});

	//////////////////////////////



});