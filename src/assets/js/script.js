function toggle_visibility(id) {
	var e = document.getElementById(id);

	if(e.style.display == 'block') {
		e.style.display = 'none';
	} else {
		e.style.display = 'block';
	}
}

var userFeed = new Instafeed({
	get: 'user',
	userId: '10858816759',
	limit: 5,
	resolution: 'low_resolution',
	accessToken: '10858816759.e9ce625.296e76493b404c92a6cab9913809e8c5',
	template: '<a class="instagram-item" href="{{link}}"><img src="{{image}}" width="250px" /></a>'
});
userFeed.run();
