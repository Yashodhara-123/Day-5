const express = require('express');
const app = express();
const port = 3001;

//array of student JSON details
const students = require('./DB/studentdb');

//01
app.get('/stu',(req,res)=>{
    res.send(students);
});

//02
app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    const result = students.find(student => student.regno === id); // call back function
    //check student is available or not, if not return an error message
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("Student not found"); //error message
    }
    
});

//03 filter students by gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gen = req.params.gen
    const result = students.filter(student => student.gender === gen); // call back function
    res.send(result);
});

//04 filter by name



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});