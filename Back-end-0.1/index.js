const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const students = [
  {
    id: 1,
    name: 'Mahadi Hassan',
    cgpa: 3.74,
    batch: 68,
  },
  {
    id: 2,
    name: 'Sakib Khan',
    cgpa: 3.5,
    batch: 68,
  },
  {
    id: 3,
    name: 'Rakib Hasan',
    cgpa: 3.25,
    batch: 69,
  },
  {
    id: 4,
    name: 'Mridul Sarker',
    cgpa: 3.8,
    batch: 67,
  },
  {
    id: 5,
    name: 'Tanvir Ahmed',
    cgpa: 3.6,
    batch: 69,
  },
];

app.get('/',(req,res)=>{
  res.send("hello  sdnvic")
  
})
app.get('/students',(req,res)=>{
  res.send(students)
  
})
app.post('/students',(req,res)=>{
  students.push(req.body);
  
})


app.listen(port,()=>{
  console.log("sarver is running");
  
})