/*
	@ Process Properties @
	----------------------
	# stdout
	# stderr
	# stdin
	# argv
	# execPath
	# execArgv
	# env
	# exitCode
	# version
	# versions
	# config
	# pid
	# title 
	# arch 
	# platform
	# mainModule
*/

// Printing to console
process.stdout.write('Hello World' + '\n');

// Reading passed parameter
process.argv.forEach(function(value, index, array) {
    console.log(index + ' : ' + value);
});

//get the executable path
console.log('\n executable path:', process.execPath);

//Platform information
console.log('\n platform info:', process.platform);

console.log(process.execArgv);

console.log('\n environment info:', process.env);

console.log('\n architecture:',process.arch);


