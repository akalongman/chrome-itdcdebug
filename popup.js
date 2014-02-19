$(document).ready(function () {
	$('ul#messages li a').click(function () {
		chrome.tabs.executescript(null, {
			code: "alert('meeeeeeh');"
		});
	});
});