const router = require('express').Router()
const Plans = require('./../models/Plans.model')

router.get('/plans', (req, res) => {
    Plans
         .find()
        //  .select('name description image owner')
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})

router.post('/plans/create', (req, res) => {
    const { name, description, image, owner } = req.body
   
    console.log(req.body, "holsss");
   
    Plans
         .create({ name, description, image, owner })
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})

router.get('/plans/:plan_id', (req, res) => {
    const { plan_id } = req.params
    Plans
         .findById(plan_id)
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})

router.post('/plans/:plan_id/edit', (req, res) => {
    const { plan_id } = req.params
    const { name, description, image, owner } = req.body
    Plans
         .findByIdAndUpdate(plan_id, { name, description, image, owner }, { new: true })
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})

router.post('/plans/:plan_id/delete', (req, res) => {
    const { plan_id } = req.params
    Plans
         .findByIdAndDelete(plan_id)
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})

module.exports = router