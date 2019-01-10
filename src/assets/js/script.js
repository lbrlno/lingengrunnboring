	// var navToggle = document.querySelector('.nav-toggle'),
	// 	nav = document.querySelector('.menu');

	// var classToggle = function() {
	//   nav.classList.toggle("expanded");
	// }
	function toggle_visibility(id) {
		var e = document.getElementById(id);

		if(e.style.display == 'block') {
			e.style.display = 'none';
		} else {
			e.style.display = 'block';
		}
	}

	// navToggle.addEventListener('click', toggle_visibility("menu") );
	
