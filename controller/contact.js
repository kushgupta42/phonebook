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


// get request fir adding cobtacts
router.get("/add",(req,res)=>{
    res.render("addContact",{});
});

//  post request to remove contact
router.post("/remove",(req,res)=>{
    console.log(req.body.id);
    // since only databse items are shown in the list, so no need to heck for the item in data base
    ContactModel.findByIdAndRemove({_id:req.body.id}).then((contact)=>{
        res.redirect("/");
    });
});

// after update the changes are made through this route
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

// update function called
router.post("/update",(req,res)=>{
    ContactModel.findById({_id:req.body.id}).lean().exec((err,docs)=>{
        if(!err){
            res.render("update",{ data : docs });
        }
        else{
            res.send("there is some problem");
            res.redirect("/");
        }
    });
})

// adding data to data base 
router.post("/add",(req,res)=>{
    ContactModel.find({}).lean().exec(function(err,docs){
        if(!err){
            // finding if number is already sabe dor not
            var numbers = [];
            //  appending all the numbers to an array 
            for(var i=0;i<docs.length;i++){
                numbers = numbers.concat(docs[i]["phoneNumber"]);
            }
            //  changing  the received number to array of not empty string
            var filteredNumbers = [];
            if(typeof req.body.phoneNumber === 'object'){
                var filteredNumbers = req.body.phoneNumber.filter(function (el) {
                    return el != '';
                });
            }
            else
                filteredNumbers=[req.body.phoneNumber];
            
            // checking if number exist in array  
            var flag = false;
            for(var i = 0;i<filteredNumbers.length;i++){
                if(numbers.includes(filteredNumbers[i])){
                    flag=true;
                    break;
                }
            }
            //  if number is present flag becomes true else will remain false
            if(flag){
                res.status(400);
                    res.send('Phone number already saved');
            }
            else{
                var contactDetails = new ContactModel();
                contactDetails.name=req.body.name;
                contactDetails.dateOfBirth=req.body.dateOfBirth;
                contactDetails.phoneNumber = filteredNumbers;
                if(typeof req.body.emailID === 'object')
                    contactDetails.emailID=req.body.emailID;
                else
                    contactDetails.emailID=[req.body.emailID];
                
                contactDetails.save((err,docs)=>{
                    if(!err){
                        res.redirect("/");
                    }
                    else{
                        res.send("error occured"+err);
                    }

                });
            }       
        }
        else{
            res.send("there is some problem");
        }
    })
});
module.exports = router;
