/*
* @Author: kush
* @Date:   2020-05-28 04:21:17
* @Last Modified by:   kushgupta42
* @Last Modified time: 2020-05-28 05:11:15
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/phonebook",{ useNewUrlParser: true ,useUnifiedTopology: true},(error)=>{
	if(error){
		console.log("no connection establish");
	}
	else{
		console.log("connection established");
	}
})

const contact = require("./contact.model.js");