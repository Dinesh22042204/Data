const path = require ('path')
const fs = require ('fs')

const students =  (filename,data,key)=> {
    try {
        switch(key){
         
         case 'write' :
            fs.writeFileSync(path.join(__dirname,filename),JSON.stringify([data],null,2))
            console.log('File is writed')
            break
        
         case 'add' : 
            const read = fs.readFileSync(path.join(__dirname,filename),'utf-8')
            const values = JSON.parse(read)
            
            const findMobile = values.find(value => {
                return value.Mobile === data.Mobile
            })
            
            if(findMobile){
                console.log('This Data is already exists')
            }else{
            values.push(data)
            fs.writeFileSync(path.join(__dirname,filename),JSON.stringify(values,null,2))
            console.log('File is added')
            }
            break
         
         default :
           const val = fs.readFileSync(path.join(__dirname,filename),'utf-8')
           //const obj = JSON.parse(val)
           console.log(val)
           //console.log(obj.Name)
           break    
        }
    }catch(err){
        console.error(err)
    }
}

process.on('uncaughtException',err=>{
    console.log(err)
    process.exit(1)
})

module.exports = students
