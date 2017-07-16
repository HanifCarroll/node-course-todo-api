const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		minlength: 1,
		required: true,
		trim: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = {User};