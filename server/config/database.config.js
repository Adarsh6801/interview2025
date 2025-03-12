const mysql= require('mysql2/promise')
const dotenv= require('dotenv')
dotenv.config()

const db=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

const initializedTables= async ()=>{
    try{
        await db.query(
            `CREATE TABLE IF NOT EXISTS cvs(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(225) NOT NULL
            email VARCHAR(225) UNIQUE NOT NULL
            phone VARCHAR(225) NOT NULL
            summary VARCHAR(225) NOT NULL
            )`
        )

        await db.query(
            `CREATE TABLE IF NOT EXISTS experience(
            id INT AUTO_INCREMENT PRIMARY KEY,
            cv_id INT  NOT NULL,
            company VARCHAR(225) NOT NULL
            role VARCHAR(225) NOT NULL
            end_date DATE
            start_date DATE
            FOREIGN KEY (cv_id) REFERENCES cvs(id) ON DELETE CASCADE
            )`
        )
    }catch(error){
        console.log(error)
    }
}


module.exports=db