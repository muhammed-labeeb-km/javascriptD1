const readlineSync=require('readline-sync')

var email="labeeb@gmail.com"
var password="123456"

var LoginThroughPhone=true
var checkEmail = readlineSync.question("Enter the email :")
var checkPass = readlineSync.question(`Enter the Password of ${checkEmail} :`)

if(email==checkEmail && checkPass==password){
    var LoginThroughEmail = true
}

if(LoginThroughEmail && LoginThroughPhone){
    console.log("--------------------------------------------");
    console.log("Login Successfully");
    console.log("--------------------------------------------");
}else{
    console.log("--------------------------------------------");
    console.log("Login Failed");
    console.log("invalid Email or Password");
    console.log("--------------------------------------------");
}