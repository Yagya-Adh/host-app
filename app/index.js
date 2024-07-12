const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello im the developer");
    console.log(`Dev hello`);
})

app.listen(3000, () => {
  console.log(`Application is running at port ${3000}`);
});
