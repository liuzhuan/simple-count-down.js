function countdown(container) {
	var container = document.querySelector(container);
	var deadline = container.getAttribute("data-deadline");
	var deadlineTime = new Date(deadline).getTime();
	var $span = container.querySelector("span");
	var uintForDay = 1000 * 60 * 60 * 24;
	showDiffDays();
	
	setInterval(function(){
		showDiffDays();
	}, 3000);

	function showDiffDays(){
		var diff = deadlineTime - Date.now();			
		var days = Math.floor(diff / uintForDay);
		$span.innerHTML = days;
	}
}