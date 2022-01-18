const dotenv = require('dotenv')
dotenv.config()
const {connect} = require('mongoose')

const DP = `mongodb+srv://vaman123:vamanAWS@cluster0.hmu5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports = () => {
    return connect(DP ,{useUnifiedTopology: true,
        useNewUrlParser: true,})
}