console.log('Heloo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {   // handeling endpoint is '/status'
    res.send({                       // gets a request and sends back
        message: 'heloo world!'      // a JSON obj with attribute 'message' and string 'heloo world'
    })
})

app.listen(process.env.PORT || 8082) // app running on port 8082