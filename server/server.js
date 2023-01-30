const sqlite = require("sqlite3");
const express = require("express")

app = express()

db = new sqlite.Database("db.sqlite",sqlite.OPEN_READWRITE)
db.run("CREATE TABLE IF NOT EXISTS formulafinder (formul TEXT,formul_ad TEXT)")
db.close()