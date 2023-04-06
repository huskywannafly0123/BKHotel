const bcrypt = require('bcrypt');
const User = require('../models/User');
module.exports = (req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
    User.findOne({
        email: email
    }).then(
        user => {
            if(user){
                bcrypt.compare(password, user.password, (err, same) => {
                    if(same){
                        req.session.userId = user._id
                        if(user.role == 'admin'){
                            res.redirect('/admin')
                        }
                        else{
                            res.redirect('/')
                        }
                    }else{
                        res.redirect('/auth/login')
                    }
                })
            }else{
                res.redirect('/auth/login')
            }
        }
    )
}