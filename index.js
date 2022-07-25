let statuses = [
    {name: "start"},
    {name: "finish"}
]

let transitions = [
    {name: "apply", from: "start", to: "finish"}
]

//const axios = require('axios').default;
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT)
console.log("server is listening in port "+PORT)

// const httpsAgent = new https.Agent({ rejectUnauthorized: false });

app.use(express.static('static'))
app.use('/', express.static('index.html'))
app.use(express.json())

app.get('/api/get-statuses', (req, res) => {
    //var randomNum = Math.floor(Math.random() * statuses.length)
    res.send(statuses);
});

app.get('/api/get-transitions', (req, res) => {
    //var randomNum = Math.floor(Math.random() * statuses.length)
    res.send(transitions);
});

app.post('/api/delete-status', (req, res) => {
    statuses = statuses.filter((S) => S.name !== req.body.name)
    res.send(obj)
});

app.post('/delete-all', (req, res) => {
    statuses =[]
    transitions = []
    res.send(statuses, transitions)
});

app.post('/add-new-status', (req, res) => {
    console.log(req.body.status)
    const obj = {
        name: req.body.status
    };
    statuses = statuses.filter((S) => S.name !== req.body.status)
    statuses.push(obj);
    res.send(obj);
});

app.post('/add-new-transition', (req, res) => {
    console.log(req.body.status)
    const obj = {
        name: req.body.name,
        from: req.body.from,
        to: req.body.to
    };
    transitions = transitions.filter((S) => S.name !== req.body.name)
    statuses.push(obj);
    res.send(obj);
});