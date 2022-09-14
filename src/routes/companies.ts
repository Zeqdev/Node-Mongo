import { Router } from 'express'
import Company from '../models/Companies'

const router = Router()

router.get('/api/companies', async (_req, res) => {
	const companies = await Company.find({})
	res.json(companies)
})

router.get('/api/companies/:id', async (req, res) => {
	const company = await Company.findById(req.params.id)
	res.json(company)
})

router.post('/api/companies', async (req, res) => {
	const company = new Company({
		name: req.body.name,
		city: req.body.city,
		country: req.body.country,
	})
	await company.save()
	res.json({ message: 'Company saved successfully' })
})

router.put('/api/companies/:id', async (req, res) => {
	await Company.findByIdAndUpdate(req.params.id, req.body)
	res.json({ message: 'Company updated successfully' })
})

export default router
