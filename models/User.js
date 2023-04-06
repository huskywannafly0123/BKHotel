const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})
UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            next(err)
        }
        this.password = hash
        next()
    })
}
)
const User = mongoose.model("User", UserSchema)
module.exports = User