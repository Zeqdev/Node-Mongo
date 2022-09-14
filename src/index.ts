import express from 'express'
import './database'
import companiesRouter from './routes/companies'

const app = express()
app.use(express.json())
app.use(companiesRouter)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`)
})
