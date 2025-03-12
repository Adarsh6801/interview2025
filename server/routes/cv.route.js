const express= require('express')
const router= express.Router()
const {getAllCvs}=require('../controller/cv.controller')
router.get('/',getAllCvs)



module.exports=router