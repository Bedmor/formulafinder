const sqlite = require("sqlite3");
const express = require("express");
const cors = require("cors");
const app = express();

db = new sqlite.Database("database.sqlite", sqlite.OPEN_READWRITE);
db.run(
  "CREATE TABLE IF NOT EXISTS formulafinder (formul TEXT,formul_ad TEXT,UNIQUE(formul, formul_ad))"
);

app.use(express.json((type = "application/json")), cors());

app.get("/ekle", (req, res) => {
  res.send("Hello");
});

app.post("/ekle", (req, res) => {
  jeyson = req.body;
  console.log(Object.keys(jeyson)[0]);
  db.run(
    `REPLACE INTO formulafinder VALUES ("${Object.keys(jeyson)[0]}","${
      Object.values(jeyson)[0]
    }")`
  );
  res.sendStatus(200);
});

app.post("/", (req, res) => {
  console.log(req.body);
  ara = db.get(
    `SELECT * FROM formulafinder WHERE formul = "${Object.keys(req.body)[0]}"`,
    (err, row) => {
        if(row){
            res.send(row)
        }
        if(err){
            res.send(err)
        }
      return row;
    }
  );
});
app.listen(80);
