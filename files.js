const fs = require ('fs').promises
const path =require ('path')

const log = require ('./log')
const Event = require ('events') 
class MyEmitter extends Event {}

const newEvent = new MyEmitter()

newEvent.on('event',(msg)=>{
    log(msg)
})

const files = async function (expression,fileName,msg) {
    try {
        switch(expression) {
        case 'writeFile' :
            await fs.writeFile(path.join(__dirname,fileName),`${msg}\n`)
            console.log('File is created')
            break

        case 'updateFile' :
            await fs.appendFile(path.join(__dirname,fileName),`${msg}\n`)
            console.log('file is updated')
            break

        case 'renameFile' :
            await fs.rename(path.join(__dirname,fileName),`${msg}`)
            console.log('file is renamed')
            break
        case 'deleteFile' :
            await fs.unlike(path.join(__dirname,fileName))
            console.log('file is deleted')
            break
         default:
            expression = 'readFile'
            const data = await fs.readFile(path.join(__dirname,fileName),'utf-8')
            console.log(data)
        }
        newEvent.emit('event',expression)

    }catch(err){
        console.error(err)
    }
}

module.exports = files