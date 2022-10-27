const express = require('express');
const app = express();
const port = 2000;
const router = require("./routers/wa");

app.use("/", router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})