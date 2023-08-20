const sqlite = require("sqlite3");
const express = require("express")
const cors = require("cors");
const app = express()

db = new sqlite.Database("database.sqlite",sqlite.OPEN_READWRITE)
db.run("CREATE TABLE IF NOT EXISTS formulafinder (formul TEXT,formul_ad TEXT,UNIQUE(formul, formul_ad))")


app.use(express.json(type="application/json"),cors())

//TODO Find a way to handle multiple post requests
app.post("/ekle",(req,res)=>{
    ara = db.get(`select * from formulafinder where formul_ad = ${req.body}`)
    res.send(ara)
})

app.post("/",(req,res) => {
    try{
        jeyson = req.body
        console.log(Object.keys(jeyson)[0])
        db.run(`REPLACE INTO formulafinder VALUES ("${Object.keys(jeyson)[0]}","${Object.values(jeyson)[0]}")`)
        res.send("Başarıyla eklendi")
    }
    catch(err) {
        res.send(alert(err.message))
    }
    
    
});
app.listen(80)

