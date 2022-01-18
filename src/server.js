const dotenv = require('dotenv')
dotenv.config()
const app = require('./index')
const port = process.env.PORT || 2222;
const connect = require('./config/database')

app.listen(port, async () => {
    try{
        await connect()
        console.log(`listen on ${port}`)
    } catch(err){
        console.log("server.js file error: " + err.message)
    }
})