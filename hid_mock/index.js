const express = require('express')
const url = require('url')
const cors = require('cors')
const minimist = require('minimist')
const bodyParser = require('body-parser')
const engines = require('consolidate')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'jade')

const args = minimist(process.argv.slice(2))
const port = args.port
const urlencodedParser = bodyParser.urlencoded({ extended: false })

let state = {}

app.get('/', function(req, res) {
  console.log('---------------------------/');
  state = req.query;
  res.render('index')
})

app.post('/login', function(req, res) {
  console.log('---------------------------/login')
  state = {...state, email: req.body.email, password: req.body.password}
  const outgoing = url.parse(state.redirect_uri);
  outgoing.query = {
    access_token: state.state,
    expires_in: 86400,
    token_type: 'Bearer',
    state: state.state
  }

  res.status(302).redirect(outgoing.format().replace('/?', '/#'));
});

app.get('/logout', function(req, res) {
  console.log('---------------------------/logout');
  res.status(302).redirect(req.query.redirect);
});

app.get('/oauth/authorize', urlencodedParser, (req, res) => {
  console.log('---------------------------/oauth/authorize');
  state = req.query;
  res.render('index');
});

app.get('/account.json', urlencodedParser, (req, res) => {
  const x = req.headers.referer || req.headers.host;
  console.log(`${x}----------------------/account.json`)
  if(state.email) {
    res.status(200).send(JSON.stringify({
      email: 'alex@example.com',
      email_verified: true,
      user_id: 'alex@example.com_1485421117650',
    }))
  } else {
    res.status(200).send(JSON.stringify({email: null, email_verified: false}))
  }
});

app.get('/:something', function(req, res) {
  console.log('------------------------GET');
  console.log(req.params.something);
  res.send(req.params.something);
});

app.post('/:something', function(req, res) {
  console.log('------------------------POST');
  console.log(req.params.something);
  res.send(req.params.something);
});

const server = app.listen(port | 4000, function() {
  console.log('Server running at http://localhost:'+server.address().port)
});
