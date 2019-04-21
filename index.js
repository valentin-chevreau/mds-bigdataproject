const pm2 = require ('pm2')

pm2.connect(function(err) {
	if (err) {
		console.log(err)
		process.exit(2)
	}

	pm2.start({
		script: 'insert.js',
		instances : 4
	}, (err, apps) => {
		console.log('-----STARTED', apps)
		pm2.disconnect()
		if (err) { throw err }
	})
})
