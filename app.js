const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use((req,res,next)=>
{ res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content,Accept,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');
  //Onto the next Middleware
  next(); 
});

//Posting data
app.post('/api/stuff',(req,res,next)=>{
    //console.log('Body--->',req.body);
    res.status(200).json({message:"Thing Created Successfully"});    
});

app.use('/api/stuff',(req,res,next) =>{
   const stuff = [
        {
          _id : '9090',
          title : 'My First Thing',
          description : 'All of the info of the First Item',
          imageURL : '',
          price : 4900,
          userId : 'CD99'
        },
        {
          _id : '9091',
          title : 'My Second Thing',
          description : 'All of the info of the Second Item',
          imageURL : '',
          price : 490,
          userId : 'ABD99'
        }
    ];
    res.status(200).json(stuff);
});

module.exports = app;

// app.use((req,res,next)=>{
//     console.log('Request here')
//     next();  //Hands to the next piece of middleware
// })

// app.use((req,res,next)=>{
//     console.log('go ahead')
//     res.status(201)
//     next();  //Hands to the next piece of middleware
// })

// app.use((req,res,next)=>{
//     res.json({message:"Your request was successful"});
//     next();
// });

// app.use((req,res)=>{
//     console.log('Response sent successfully')
// });


