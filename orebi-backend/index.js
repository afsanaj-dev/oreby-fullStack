const express = require("express");
const app= express();
require('dotenv').config();
const routes= require("./routes");
const dbConfig = require("./config/dbConfig");
dbConfig();

// http://localhost:3000/api/v1/auth/registration
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(process.env.SERVERPORT,()=>{
    console.log(`Server is running in port ${process.env.SERVERPORT}`);
})