/*
* @Author: kush
* @Date:   2020-05-28 04:21:17
 * @Last Modified by: kush46
 * @Last Modified time: 2020-05-28 17:21:33
*/

const connection = require("./model");
const express  = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const ContactController = require("./controller/contact")

// creating application
app.use(bodyparser.urlencoded({
	extended : true
}));

// setting views folder for application
app.set('views',path.join(__dirname,"/views/"));

// setting application render engine
app.engine("hbs",expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainlayout",
	layoutDir : __dirname + "/views/layouts"
}));

//  view engine 
app.set("view engine","hbs");

// registering external css
app.use(express.static(__dirname + '/public'));

// setting app to use controller
app.use("/",ContactController);

// app listening on port
app.listen("3000",()=>{
	console.log("server startet");
});	
