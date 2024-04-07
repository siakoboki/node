const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{

res.render('index', {
    pageTitle: 'Node js super',
    pageBody:'Czesc hello node js'
})

})

app.get('/kontakt', (req, res) =>{

    res.send('to sa dane kontaktowe')
    
    })
app.listen(port)