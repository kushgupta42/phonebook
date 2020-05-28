/*
* @Author: kush
* @Date:   2020-05-28 04:21:17
 * @Last Modified by: kush46
 * @Last Modified time: 2020-05-28 20:29:400
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/phonebook",{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false},(error)=>{
	if(error){
		console.log("no connection establish");
	}
	else{
		console.log("connection established");
	}
})

const contact = require("./contact.model.js");