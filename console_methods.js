//console methods 

console.info('Program started');

var counter = 10;
console.log('counter: %d', counter);

console.time('Getting data');
for (var i = 0; i < counter; i++) {
    console.log('iteration: %d', i);
}
console.timeEnd('Getting data');

console.info('Program Ended');

/*
	@ other console methods @
	-------------------------
	# console.error();
	# console.warn();
	# console.dir();
	# console.trace();
	# console.assert();

*/
