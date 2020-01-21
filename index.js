const express = require('express')
const atrium = require('mx-atrium');
const parser = require('body-parser')
const cors = require('cors')

const app = express()

const port = 4000


app.use(cors())
app.use(parser.json())
app.get('/', (req, res) => res.send('Hello Josh'))


app.listen(port, () => console.log(`example listening on port ${port}`))


var client = new atrium.AtriumClient("aed90f40-6509-47cf-8320-06198927e242", "d00e59b6-553a-4d04-bb05-6b1c233c568a", "https://vestibule.mx.com");


// var response = client.users.createUser(body);

// response.then(function(value) {
//     console.log(value);
//   });


app.post("/", function(req, res) {
    console.log(req.body)
    var response = client.users.createUser(req.body);
    res.status(200).send(response.then(function(value){
        console.log(value)
    }));
  });
// body = {
    //         user: {
    //           metadata: '{"first_name": "John", "last_name": "Doe"}',
    //           identifier: "USR12314"
    //         }
    //       }