# PhoneBook   

#### This application is made with the help of :  
  - nodejs  
  - express  
  - mongodb  
  - express-handlbars  
  
  
## Features
  - Contacts can be added with other basic information like Date Of Birth and Email Address
  - Contacts can be searched on the basis of name in ascending order
  - If the searched text is part of the name, name will appear in the search
  - A Contact can have more than one phone number and emails
  - Email id and Date of Birth are not necessary
  - Contact details cam be updated after adding them using edit button
  - Contact can be remove using remove button
  - No 2 contact can have same phone numbers, i.e, a number will be part of one account only
  - To remove data fields from the contact, leave the data fields empty, their values will automatically get deleted from the databse  
  
## Installation

```bash  
git clone https://github.com/kushgupta42/phonebook  
cd phonebook
``` 
create mongodb server  
download and install mongodb community edition  
after then run
```bash
sudo mongod --dbpath <path to store database>
```  
if every thing works fine, you will see "waiting for connection on <ip>:<port>"  
this means your mongodb erver is running  
now connect ot server using mongo or mongo compass and create database "phonebook" with collection "contacts".  
now install the dependencis of the PhoneBook  
```bash
npm install  
node index.js
```

## PhoneBook is available on https://phonebook-by-kg.herokuapp.com/
