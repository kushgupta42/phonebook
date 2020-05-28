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
    ContactModel.find({}).sort({"name":1}).lean().exec(function(err,docs){
        if(!err){
            res.render("index",{ data : docs });    
        }
        else{
            res.send("there is some problem");
        }
    })
});

// getting all the contacts
router.get("/list",(req,res)=>{
    ContactModel.find({}).lean().exec((err,docs)=>{
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

router.post("/remove",(req,res)=>{
    console.log(req.body.id);
    ContactModel.findByIdAndRemove({_id:req.body.id}).then((contact)=>{
        console.log(contact.name+"deleted");
        res.redirect("/");
    });
});

// make changes route
router.post("/makeChanges",(req,res)=>{
    console.log(req.body.id);
    ContactModel.findByIdAndUpdate({_id:req.body.id},{name:req.body.name,phoneNumber:req.body.phoneNumber,dateOfBirth:req.body.dateOfBirth,emailID:req.body.emailID},(err,result)=>{
        if(err){
            console.log("[!] cannot update data");
            res.redirect("/");
        }
        else{
            console.log("[+] changes successful");
            res.redirect("/");
        }
    });
    
})
router.post("/update",(req,res)=>{
    ContactModel.findById({_id:req.body.id}).lean().exec((err,docs)=>{
        if(!err){
            console.log("===========================\n");
            console.log(docs);
            res.render("update",{ data : docs });
        }
        else{
            res.send("there is some problem");
            res.redirect("/");
        }
    });
})
router.post("/add",(req,res)=>{
    // console.log(req.body);
    var contactDetails = new ContactModel();
    contactDetails.name=req.body.name;
    contactDetails.dateOfBirth=req.body.dateOfBirth;
    contactDetails.phoneNumber=[req.body.phoneNumber];
    contactDetails.emailID=[req.body.emailID];
    contactDetails.save((err,docs)=>{
        if(!err){
            res.redirect("/");
        }
        else{
            res.send("error occured");
        }

    });
})
module.exports = router;
