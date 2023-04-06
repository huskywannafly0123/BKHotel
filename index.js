const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://binhbuibksg0123:Huyennie12345~@cluster0.n3ud3tk.mongodb.net/bkhotel', {useNewUrlParser: true})

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session({
    secret: "Huyennie12345~"
}))
global.loggedIn = null
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000;
const homeController = require('./controllers/home');
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')
const registerAuthController = require('./controllers/registerAuth')
const loginAuthController = require('./controllers/loginAuth')
const logoutController = require('./controllers/logout')
const adminDashboard = require('./controllers/adminDashboard')
app.get('/',homeController);
app.get('/auth/login',loginController);
app.get('/auth/register',registerController);
app.post('/auth/register',registerAuthController);
app.post('/auth/login',loginAuthController);
app.get('/auth/logout',logoutController);
app.get('/admin',adminDashboard);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));