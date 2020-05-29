
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/phonebook",{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false},(error)=>{
	if(error){
		console.log("no connection establish");
	}
	else{
		console.log("connection established");
	}
})

const contact = require("./contact.model.js");