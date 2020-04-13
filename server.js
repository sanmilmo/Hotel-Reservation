let express = require('express');
let app = express();
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectID;
let reloadMagic = require('./reload-magic.js');
let sha1 = require('sha1');
let multer = require('multer');
let upload = multer({ dest: __dirname + '/uploads/' });
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
app.get('/all-posts', (req, res) => {
  console.log('request to /all-posts');
  dbo
    .collection('posts')
    .find({})
    .toArray((err, ps) => {
      if (err) {
        console.log('error', err);
        res.send('fail');
        return;
      }
      console.log('posts', ps);
      res.send(JSON.stringify(ps));
    });
});
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

app.post('/signup', upload.none(), async (req, res) => {
  let name = req.body.username;
  let pwd = req.body.password;
  try {
    const user = await dbo.collection('users').findOne({ username: name });
    if (user) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo
      .collection('users')
      .insertOne({ username: name, password: sha1(pwd) });
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log('/signup error', err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

app.post('/delete-posts', upload.none(), async (req, res) => {
  const username = req.body.username;
  try {
    await dbo.collection('posts').deleteMany({ username });
    const posts = await dbo
      .collection('posts')
      .find({})
      .toArray();
    res.send(JSON.stringify({ success: true, posts }));
  } catch (err) {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  }
});

app.post(
  '/new-post',
  upload.fields([
    { name: 'img', maxCount: 1 },
    { name: 'audio', maxCount: 1 }
  ]),
  (req, res) => {
    console.log('request to /new-post. body: ', req.body);
    let description = req.body.description;
    let username = req.body.username;
    let imgFile = req.files.img[0];
    let soundFile = req.files.audio && req.files.audio[0];
    let frontendPath = '/uploads/' + imgFile.filename;
    let soundPath = soundFile ? '/uploads/' + soundFile.filename : '';
    dbo.collection('posts').insertOne({
      description,
      frontendPath,
      soundPath,
      username
    });
    res.send(JSON.stringify({ success: true }));
  }
);

app.post('/delete', upload.none(), async (req, res) => {
  const id = req.body.id;
  try {
    await dbo.collection('posts').deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log(err);
    return res.send(JSON.stringify({ success: false }));
  }
  res.send(JSON.stringify({ success: true }));
});

app.post('/update', upload.single('imgFile'), (req, res) => {
  console.log('request to /update');
  const id = req.body.id;
  const desc = req.body.description;
  let frontendPath = req.file ? '/uploads/' + req.file.filename : '';
  console.log('sent from client', desc, id);
  dbo
    .collection('posts')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { description: desc, frontendPath } }
    );
  res.send('success');
});
app.all('/*', (req, res, next) => {
  res.sendFile(__dirname + '/build/index.html');
});
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
