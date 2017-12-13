console.log('Heloo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* We have a register endpoint witch takes a post request and return 
a message with the email that we provided*/
app.post('/register', (req, res) => {   // handeling endpoint is '/status'
    res.send({                       // gets a request and sends back
        message: 'Hello ${req.body.email}! Your user was registered!'      // a JSON obj with attribute 'message' and string 'heloo world'
    })
})

app.listen(process.env.PORT || 8082) // app running on port 8082