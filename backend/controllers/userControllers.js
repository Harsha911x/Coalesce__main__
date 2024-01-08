const data_base = require('../models/user_DB')
const mongoose = require('mongoose')
//Get all workouts
const getdata_base = async(req,res) => {
    const Data_base= await data_base.find().sort({createdAt : -1})
    res.status(200).json(Data_base)
}


//GET a single workout
const getdata = async(req,res) => {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such Data'})
    }
    const data = await data_base.findById(id)
    if(!data) {
        return res.status(404).json({error : 'No such data'})
    }
    res.status(200).json(data)

}


//POST a new workout
const createDB =async(req,res) => {
const x= {username,name,email,contact,gender,password} = req.body
        //add doc to db
        try{
            const Data_base =await data_base.create(x)
            res.status(200).json(Data_base)  
            }catch(err){
                res.status(400).json({error : err.message})
            }
    }


//DELETE a workout
const deleteDB = async(req,res) => {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Data'})
}
const data = await data_base.findOneAndDelete({_id: id})

if(!data) {
    return res.status(404).json({error : 'No such data'})
}
res.status(200).json(data)
}


//UPDATE a workout
const updateDB = async(req,res) => {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Data'})
        }
        const data = await data_base.findOneAndUpdate({_id : id},{
            ...req.body
        })
        if(!data) {
            return res.status(404).json({error : 'No such data'})
        }
        res.status(200).json(data)
        
}


module.exports ={
    createDB,
    getdata_base,
    getdata,
    deleteDB,
    updateDB
}