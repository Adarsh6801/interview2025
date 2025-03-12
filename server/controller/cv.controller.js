const db = require("../config/database.config");

//Here is the controller for create cv
exports.createCv= async (req, res)=>{
    try{
        const {name, email, phone, summery, experience, education, skills}=req.body;
        const [cvResult]=await db.query("INSERT INTO cvs (name, email, phone, summery) VALUES (?, ?, ?, ?)",[name, email, phone, summery]);
        const cvId= cvResult.insertId

        for(const exp of experience){
            await db.query("INSERT INTO experience (cv_id, company, role, start_date, end_date) VALUES (?,?,?,?,?)",[cvId,exp.company,exp.role,exp.start_date,exp.end_date])
        }

        for(const edu of education){
            await db.query("INSERT INTO education (cv_id, institution, degree, year) VALUES (?,?,?,?)",[cvId,edu.institution,edu.degree, edu.year])
        }
        for(const skill of skills){
            await db.query("INSERT INTO skills (cv_id, skill_name) VALUES (?,?)",[cvId,skill])
        }

        return res.send(201).send({status:true, message:"CV saved successfully"})
    }catch(error){
        return res.send({status:false, message:"There is something went wrong."})
    }
}

//Here is the controller for get All cvs
exports.getAllCvs= async (req, res)=>{
    try{
        let {page, limit}=req.query;
        page=parseInt(page)
        limit=parseInt(limit)
        const offset=(page-1)*limit
        const [totalResult]= await db.query("SELECT COUNT(*) AS total FROM cvs")
        const totalCvs= totalResult[0].length;
        const totalPages= Math.ceil(totalCvs/limit)

        const [cvs]= await db.query("SELECT * FROM cvs LIMIY ? OFFSET ?",[limit, offset])

        return res.status(200).send({status:true,message:"Fetched Data",totalCvs:totalCvs,totalPages,currentPage:page, pageSize:limit,cvs})
    }catch(error){
        return res.staus(500).send({status:false, message:"There is something went wrong."})
    }
}