		window.timerClock = window.setInterval(
				function(){
					jQuery('#timer').html(++timer);
				},1000);

var timer = '';

function start(){

}

function stop() {
	$('button.stop').click(function(){
		window.timerClock = window.clearInterval(timerClock);
	});
}