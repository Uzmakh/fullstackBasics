const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('server is ready!')
})

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First joke',
            content: 'This is the first joke'
        },
        {
            id: 2,
            title: 'Second joke',
            content: 'This is the second joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is the third joke'
        },
        {
            id: 4,
            title: 'Forth joke',
            content: 'This is the forth joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is the fifth joke'
        }
    ]
    res.send(jokes);
    console.log(jokes)
})
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})