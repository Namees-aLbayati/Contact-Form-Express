const express=require('express');
const uuid=require('./helpers/uuid')
const data=require('./db/reviews');
const { join } = require('path/posix');
const path=require('path')
const app=express();


app.use(express.static('contact-form-07'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/contact-form-07/index.html'));
})
app.get('/api',(req,res)=>{

    res.json(data)
})
app.post('/api',(req,res)=>{  
      console.log(req.body)

    const body={info:req.body,id:uuid()}
    const newdata={status:'successfully recived',
info:body}
    console.log('after',newdata)
    // req.body.id=uuid();
    // console.log(req.body)
    


    res.json(newdata)
    // if(req.body){
    //        const postdata=req.body;
    // console.log('this is ur data namees',req.body)
    // }else{
    //     res.send('no thing to handle it')
    // }
 
})



app.listen(3001,()=>{
    console.log('listening 3001 namees ')
})

