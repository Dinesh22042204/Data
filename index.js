//const files = require ('./files')
const students = require ('./students')

const values =
    {
    "Name" :"Kumar",
    "Class":"X",
    "FatherName": "Rahul",
    "MotherNmae": "Sindhu",
    "E-Mail ID" : "jiku@gmil.com",
    "Address" : "231,Lahour street,Gem road, Kalos.",
    "Mobile" : "10337 88559"
    }

students('students.json',values,'add')

//files('updateFile','js.txt','hii')