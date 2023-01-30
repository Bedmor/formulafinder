const sqlite = require("sqlite3");
const http = require("http");
server = http.createServer((req,res) =>{
    res.statusCode=200;
});
server.listen(80);
http.request("POST",)
console.log("Server succesfully running")
db = new sqlite.Database("db.sqlite",sqlite.OPEN_READWRITE)
db.run("CREATE TABLE IF NOT EXISTS formulafinder (formul TEXT,formul_ad TEXT)")
db.close()