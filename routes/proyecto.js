const { Router } = require('express')
const { createProyecto, 
    getProyectos,
 updateProyectoByID} =
 require('../controllers/proyecto')

const router = Router()

router.post('/', createProyecto)

router.get('/', getProyectos)

router.put('/:id', updateProyectoByID)  

module.exports = router;