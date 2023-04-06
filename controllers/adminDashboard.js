const User = require("../models/User")
module.exports = (req,res) => {
    User.findById(req.session.userId).then(
        user => {
            if(user.role == 'admin'){
                res.render("../views/admin/dashboard")
            }
            else{
                res.redirect('/')
            }
        },
        error => {
            res.redirect('/')
        }
    )
}