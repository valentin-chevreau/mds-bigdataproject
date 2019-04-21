let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

const csvFilePath='00000-file.csv'
const csv = require('csvtojson')

csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=> {
		MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
			if (err) throw err
			const dbo = db.db('mds')
			dbo.collection('bigdata').insertMany(jsonObj, (err) => {
				if (err) { throw err }
				db.close()
			})
		})
	})
