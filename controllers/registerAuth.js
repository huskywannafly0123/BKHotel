const User = require("../models/User")
module.exports = (req,res)=>{
    const {username,email,password} = req.body
    User.create({
        username,
        email,
        password
    }).then(
        user => {
            res.redirect('/')
        },
        error =>{
            res.redirect('/auth/register')
        }
    )
}