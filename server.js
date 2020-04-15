let express = require('express');
let app = express();
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectID;
let reloadMagic = require('./reload-magic.js');
let sha1 = require('sha1');
let multer = require('multer');
let upload = multer({ dest: __dirname + '/uploads/' });
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json  

reloadMagic(app);

app.use('/', express.static('build'));

app.use('/uploads', express.static('uploads'));

let dbo = undefined;

// let url = "mongodb+srv://bob:bobsue@cluster0-mijro.mongodb.net/test?retryWrites=true&w=majority";
let url = "mongodb+srv://bob:bobsue@cluster0-wlhsm.azure.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    dbo = client.db('media-board');
  })
  .catch(err => console.log(err));

app.post('/login', upload.none(), async (req, res) => {
  console.log('login', req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  try {
    const user = await dbo.collection('users').findOne({ username: name });
    if (!user) {
      return res.send(JSON.stringify({ success: false }));
    }
    if (user.password === sha1(pwd)) {
      return res.send(JSON.stringify({ success: true }));
    }
    res.send(JSON.stringify({ success: false }));
  } catch (err) {
    console.log('/login error', err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});


app.post('/reservation', upload.none(), async (req, res) => {

  try {

  console.log(req.body)
  let data = JSON.stringify(req.body)
  console.log(data)

    await dbo.collection('reservations').insertMany(req.body);
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log('/reservation error', err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

app.all('/*', (req, res, next) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
