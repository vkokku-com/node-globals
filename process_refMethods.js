/*
	@ Process Methods Reference @
	-----------------------------
	# abort()
	# chdir(directory)
	# cwd()
	# exit([code])
	# getgid()
	# setgid(id)
	# getgroups()
	# setgroups(groups)
	# initgroups(user,extra_group)
	# kill(pid[,signal])
	# memoryUsage()
	# nextTick(callback)
	# unmask([mask])
	# uptime()
	# hrtime()
*/

// Print the current directory
console.log('Current directory:', process.cwd());

// Print the process version
console.log('Current Version', process.version);

// Print the memory usage
console.log('Memory Usage', process.memoryUsage());

console.log(process.hrtime());

console.log(process.uptime());


