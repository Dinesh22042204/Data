const fsPromise =require ('fs').promises
const path = require ('path')
const {format} = require ('date-fns')
const {v4:uuid} = require ('uuid')
const fs =require ('fs')

const log = async (msg)=>{
    const dateTime = `${format(new Date,'dd.MM.yyyy HH:mm:ss')}`
    const data = `${uuid()}\t${dateTime}\t${msg}\n`
    console.log(data)
    try{
        if (!fs.existsSync(path.join(__dirname,'logs'))){
            await  fsPromise.mkdir(path.join(__dirname,'logs'))
        }
        await  fsPromise.appendFile(path.join(__dirname,'logs','allLogs.txt'),data)
    
    }catch(err) {
        
        console.error(err)
    }
}
    


 module.exports = log