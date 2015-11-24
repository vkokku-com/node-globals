/*
	@ Process Events @
	------------------
	# Exit
	# beforeExit
	# uncaughtException
	# Signal Events
*/

process.on('exit', function(code) {

    //Following code will never execute
    setTimeout(function() {
        console.log('This segment will not run');
    });
    console.log('About to exit with code:', code);
});

console.log('Program Ended');


/*
	@ Exit codes @
	--------------
	# 0 no more ayns operations are pending
	# 1 Uncaught Fatal Exception
	# 2 Unused
	# 3 Internal JavaScript Parse Error
	# 4 Internal JavaScript Evaluation Failure
	# 5 Fatal Error
	# 6 Non-function Internal Exception Handler
	# 7 Internal Exception Handler Run-Time Failure
	# 8 Unused
	# 9 Invalid Argument
	# 10 Internal JavaScript Run-Time Failure
	# 12 Invalid Debug Argument 
	# >128 Signal Exits

*/
