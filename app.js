const express = require('express');
const bodyparser = require('body-parser');

//in order to use express and all it's methods and functions (ex: app.get)
const app = express();

app.use(bodyparser, json());

//DB Config
const db = require('./config').mongoURI; ///COME BACK TO ME///

mongoose.connect(db)
    .then(console.log("Mongo DB Connected.."))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port ${port}'));

app.get('/api/tasks', function (req, res) {
    if (err){
        console.log(err)
    }
    tasks.find(

    )

});


