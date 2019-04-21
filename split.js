const splitFile = require('split-file')

// splitFile.splitFileBy(__dirname + '/file.csv', 45000000)
splitFile.splitFile(__dirname + '/file.csv', 100)
	.then((names) => {
	  console.log(names)
   files.push(names)
	 })
	.catch((err) => {
		console.log('Error: ', err)
	})
