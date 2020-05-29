function addPhoneNumber(){
    console.log("phone clicked");
    var node = document.getElementById("phonediv");
    var child = document.createElement("input");
    child.type = "tel";
    child.pattern="[1-9]{1}[0-9]{9}";
    child.name = "phoneNumber";
    child.placeholder="9995551114"
    node.appendChild(child);
}

function addEmailID(){
    console.log("email clicked");
    var node = document.getElementById("emaildiv");
    var child = document.createElement("input");
    child.type = "email";
    child.pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    child.name = "emailID";
    child.placeholder="test@test.com";
    node.appendChild(child);
}
