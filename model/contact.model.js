/*
* @Author: kushgupta42
* @Date:   2020-05-28 04:45:20
* @Last Modified by:   kushgupta42
* @Last Modified time: 2020-05-28 05:17:12
*/
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

mongoose.model("Cotact",ContactSchema	)