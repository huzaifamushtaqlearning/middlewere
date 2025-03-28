const express = require('express');
const app = express();


app.get('/err', (req, res) => {
    abcd=abcd
});

app.use((err, req , res ,next)=>{
    console.log("-----------Error1--------");
    next(err);
})
app.use((err, req , res ,next)=>{
    console.log("-----------Error2--------");
    next(err);
})
app.use((err, req , res ,next)=>{
    console.log(err);
    next(err);
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// app.use((req,res)=>{
//     res.status(404).send('Page not found')
// })