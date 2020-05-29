
const mongoose = require("mongoose");

// creatig schema for contact

var ContactSchema = new mongoose.Schema({
	name : {
		type : String,
		required : "Required"
	},
	dateOfBirth : {
		type : String,
	},
	phoneNumber : [{
		type : String, 
		required : "Required"
	}],
	emailID : [{
		type : String, 
		required : "Required"
	}]
})

mongoose.model("Contact",ContactSchema	)