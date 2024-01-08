require('dotenv').config()
const express = require('express')
const mongoose=require('mongoose')
const userRoutes = require('./routes/user')
const projectRoutes=require('./routes/project')
const collegeRoutes=require('./routes/college')
const companyRoutes=require('./routes/company')
//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
} )


//routes
app.use('/api/users',userRoutes)
app.use('/api/projects',projectRoutes)
app.use('/api/college',collegeRoutes)
app.use('/api/company',companyRoutes)



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
    //listen for requests
        app.listen(process.env.PORT, ()=> {
            console.log('listening on port 4000!!!')
        })
        console.log('Connected to db')
    })
    .catch((err)=>{
        console.log(err)
    })




process.env