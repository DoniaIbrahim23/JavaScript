
////////1//

// var name = prompt ("Enter your name")

// for (var i=1;i<7;i++){
//     document.writeln("<h" + i + ">" + name + "</h" + i + ">");
// }




// ////2//
// var sum=0;
// while (sum <100 && numbers!=0) {
//     var numbers =Number(prompt("Enter Numbers"))
//     sum += numbers;
//    }
//    document.writeln(sum);




   ////3///

//    var numbers=  Number(prompt("Enter Number"));
    
//     if(numbers%3==0){
//         document.writeln("fizz");
//     }
//     else if(numbers%5==0){
//         document.writeln("buzz");
//     }
//     else if(numbers%5==0 && numbers%3==0 ){
//         document.writeln("fizz buzz");
//     }
//     else{
//         document.writeln("none");

//     }




///////4//
// var answer = 0;
// answer=confirm("Do you fly?");

// if(answer){
//     answer =0;
//     answer=confirm("Are You Wild?");
//     if(answer){
//         document.writeln("<img src='./images/eagle.jpg'/>");
//     }
//     else{ document.writeln("<img src='./images/parrot.jpg'/>");
//         document.writeln("<img src='./images/penguin.jpg'/>");
//     }

// }
// else{
//     answer =0;
//     answer=confirm("Do you live under sea?");
//     if(answer){
//         answer =0;
//         answer=confirm("Are You Wild?");
//         if(answer){
//             document.writeln("<img src='./images/shark.jpg'/>");
//         }
//         else{ 
//             document.writeln("<img src='./images/dolphin.jpg'/>");
//         }
//     }
//     else{
//         answer =0;
//         answer=confirm("Are You Wild?");
//         if(answer){
//             document.writeln("<img src='./images/lion.jpg'/>");
//         }
//         else{ 
//             document.writeln("<img src='./images/cat.jpg'/>");
//         }
//     }
// }


// ////////5//

//     var name = prompt("Enter your name");
//     while (!/^[a-z||A-Z/s]+$/.test(name)) {
//         name = prompt("Invalid name");
//     }

//     var number = Number (prompt("Enter your number"));
//     while (!/^\d{8}$/.test(number)) {
//         phone = prompt("Invalid number");
//     }

//     var phone = (prompt("Enter your mobile number "));
    
//      while (!/^010|012|015\d{8}$/.test(phone)) {
    
//       phone = prompt("Invalid number");
//     }


//     var email = prompt("Enter your email:");
//     while (!/^[a-z||A-Z]+@+[0-9]+\.[a-z||A-Z]{2,}$/.test(email)) {
//         email = prompt("Invalid email");
//     }


//     var color = prompt("Choose a color: red, green, or blue");
//     while (!["red", "green", "blue"]) {
//         color = prompt("Invalid color");
//     }

//     const Today = new Date();
//     document.write("<h1>entering users info</h1>");

//     document.write("<h2 style='color: " + color + "'>Welcome dear guest " + name + "</h2>");

//     document.write("<h3 style='color: " + color + "'>Your phone number is: " + number + "</h3>");

//     document.write("<h3 style='color: " + color + "'>Your mobile number is: " + phone + "</h3>");

//     document.write("<h3 style='color: " + color + "'>Your email address is: " + email + "</h3>");

//     document.write("<h3 style='color: " + color + "'>Date is: " + Today + "</h3>");







///recap///
//1//
// var name= prompt("Enter Your Name");

// for(i=1;i<7;i++){
//     document.writeln("<h"+ i +">" + name + "</h"+ i+ ">");
// }



//2//
// var sum=0;
// while(sum<100 && numbers!=0){
//     var numbers= Number(prompt("enter numbers"));
// sum= sum+ numbers;

// }
// document.writeln(sum);



///3//
// var num = Number(prompt("enter number"));
// if(num %3 == 0 && num %5==0){
//     document.writeln("fizz buzz");
// }
// else if (num %3==0){
//     document.writeln("fizz")
// }

// else if (num %5==0){
//     document.writeln("buzz")
// }