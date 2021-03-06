'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// schema for user 
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.serialize = function() {
    return {
        username: this.username || '',
        id: this._id || ''
    };
};
// check if password is correct
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};
// encrypt the password
UserSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};