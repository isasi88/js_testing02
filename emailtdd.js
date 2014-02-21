chai.should();
context = describe;

function filter (list) {
	for (var i = 0; i < list.length; i++) {
		var email = list[i]
	};
	return list;
};


/* TO DO LIST - Do it before testing 
*Test:
*['test@test.com'] -> ['test@test.com']
*Test:
*['test@test.com', 'test@test.com'] -> ['test@test.com']
*Test:
*[] -> []
*['TEST@TEST.COM', 'test@test.com'] -> ['test@test.com']
*Test:
*['test(AT)test.com'] -> ['test@test.com']
*Test:
*['test@test(DOT)com'] -> ['test@test.com']
*/


describe ("the email list filters", function() {

	it("converts string to number", function() {
		expect(5).toEqual(parseInt("5"));
	});

});

