import { Router } from 'express'
import Company from '../models/Companies'

const router = Router()

router.get('/api/companies', async (_req, res) => {
	const companies = await Company.find({})
	res.json(companies)
})

export default router
