// --------------------------------------
// GUIDE CONTENTS
// --------------------------------------
riot.route('/home', function() {
	riot.compile(function() {
		riot.mount('#mainMount','home');
	});
});
// --------------------------------------
// Login Form Route
// --------------------------------------
riot.route('/login', function() {
	riot.compile(function() {
		riot.mount('#mainMount','login');
	});
});
// --------------------------------------
// Post Modal Form Route
// --------------------------------------
riot.route('/post/edit', function() {
	riot.compile(function() {
		riot.mount('#mainMount','post-edit');
	});
});
// --------------------------------------
// Post Modal Form Route
// --------------------------------------
riot.route('/todo', function() {
	riot.compile(function() {
		riot.mount('#mainMount','todo');
	});
});
