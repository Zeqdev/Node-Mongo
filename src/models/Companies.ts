import { Schema, model } from 'mongoose'

let companySchema = new Schema({
	name: String,
	city: String,
	country: String,
})

export default model('Company', companySchema)
