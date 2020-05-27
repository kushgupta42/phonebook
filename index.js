/*
* @Author: kush
* @Date:   2020-05-28 04:21:17
* @Last Modified by:   kush
* @Last Modified time: 2020-05-28 04:36:20
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