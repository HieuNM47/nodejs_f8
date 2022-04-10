const express = require('express');    // require thư viện
var morgan = require('morgan');        // require thư viện morgan
const app = express();                 // Gán function express vào biến app
const port = 3000;

app.use(morgan('combined'));

//Route  CS6
app.get('/', (req, res) => {
    res.send('Hello World!' );
});

//Route function Thường
app.get('/route-test', function (req, res) {
    res.send('Hello route1!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});