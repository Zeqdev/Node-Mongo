import mongoose from 'mongoose'
;(async () => {
	const db = await mongoose.connect('mongodb://127.0.0.1/api_company')
	console.log('Database is connected to:' + db.connection.name)
})()
