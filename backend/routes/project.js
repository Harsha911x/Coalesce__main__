const express=require('express')
const {
    createDB,
    getdata_base,
    getdata,
    deleteDB,
    updateDB
} =require('../controllers/projectControllers')

const router = express.Router()


//GET all workouts
router.get('/',getdata_base)


//GET a single workout
router.get('/:id',getdata)


//POST a new workout
router.post('/',createDB)



//DELETE a workout
router.delete('/:id',deleteDB)


//UPDATE a workout
router.patch('/:id',updateDB)

module.exports = router