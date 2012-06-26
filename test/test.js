var sortkeys = require('../');

exports["Test not deep"] = function (test) {
	
	var obj = {
		d : "is for dog"
		, c : "is for cat"
		, b : "is for bug"
		, a : "is for ant"
	};

	var shouldBe = {
		a : "is for ant"
		, b : "is for bug"
		, c : "is for cat"
		, d : "is for dog"
	};
	
	test.deepEqual(sortkeys(obj), shouldBe);
	test.done();
};

exports["Test deep"] = function (test) {
	
	var obj = {
		d : {
			b : 1
			, a : 2
		}
		, a : {
			e : 4
			, d : 5
		}
	};

	var shouldBe = {
		a : {
			d : 5
			, e : 4
		}
		, d : {
			a  : 2
			, b : 1
		}
	};
	
	test.deepEqual(sortkeys(obj), shouldBe);
	test.done();
};