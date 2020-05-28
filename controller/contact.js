/*
* @Author: kushgupta42
* @Date:   2020-05-28 14:30:29
 * @Last Modified by: kush46
 * @Last Modified time: 2020-05-28 14:34:411
*/

const express = require("express");
const mongoose = require("mongoose");
// creating mongoose model
//  model name should be same as that of in the models file mongoose.model fn
const ContactModel = mongoose.model("Contact");

// setting router

const router = express.Router();


//home page

router.get("/",(req,res)=>{
    ContactModel.find({}).lean().exec(function(err,docs){
        if(!err){
            res.render("index",{ data : docs });
            console.log(docs);       
        }
        else{
            res.send("there is some problem");
        }
    })
});
// getting all the contacts
router.get("/list",(req,res)=>{
    // setting data
    // var contactDetails = new ContactModel();
    // contactDetails.name="kush";
    // contactDetails.dateOfBirth="29/03/1999";
    // contactDetails.phoneNumber=["9634440850"];
    // contactDetails.emailID=["kushgupta42@gmail.com"];
    // contactDetails.save();
    
    //getting details

    ContactModel.find({}).lean().exec(function(err,docs){
        if(!err){
            res.render("list",{ data : docs });
            console.log(docs);       
        }
        else{
            res.send("there is some problem");
        }
    })
});


router.get("/add",(req,res)=>{
    res.render("addContact",{});
});

router.post("/add",(req,res)=>{
    console.log(req.body);
    var contactDetails = new ContactModel();
    contactDetails.name=req.body.name;
    contactDetails.dateOfBirth=req.body.dateOfBirth;
    contactDetails.phoneNumber=[req.body.phoneNumber];
    contactDetails.emailID=[req.body.emailID];
    contactDetails.save((err,docs)=>{
        if(!err){
            res.redirect("/contact/list");
        }
        else{
            res.send("error occured");
        }

    });
})
module.exports = router;
