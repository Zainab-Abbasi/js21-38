
//==== Chapter# 21 and Task # 1

// var FirstNameToCheck = prompt("Enter your First Name");
//  NameToCheck = NameToCheck.toLowerCase();
//  var lastNameToCheck = ("Enter Your Last Name");
//  for (var i = 0; i <= 4; i++) {
//  if ( FirstnameToCheck === lastNameToCheck[i]) {
//  alert("FullName Hi!");
//  }
//  }


// ==== Chapter# 21 and Task # 2

// var favphone= prompt("My favorite phone is:");
// var tetLength = favphone.length;
// var userinput = ("Samsung Galaxy S6 Edge Plus");
// document.write(userinput);



// ==== Chapter# 21 and Task # 3





//==== Chapter# 21 and Task # 5

// var userinput = propmt("Enter your work Experience");
// {
//   alert("Enter your work Experience");
// }
// var replace = userinput.replace(/string/g , "5" + "x" + "1" + "=" + 5*1);
// document.write(replace);


//==== Chapter# 21 and Task # 6



//==== Chapter# 21 and Task # 7

// var city = "Hyderabad";
// var afterreplacement = city.replace("Hyder", "Islam");
// document.write(afterreplacement);


//==== Chapter# 21 and Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g , "&");
// document.write(newMessage);  

//==== Chapter# 21 and Task # 9

// var string = "274";
// var convert = parseInt(string);
// document.write(convert);


//==== Chapter# 21 and Task # 10

// var userinput = prompt("Enter your text");
// var firstchar = userinput.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var otherchar = userinput.slice(1)
// otherchar = otherchar.toUpperCase();
// var userinput = firstchar + otherchar;
// document.write(userinput)


//==== Chapter# 21 and Task # 11

// var userinput = prompt("Enter your text");
// var firstchar = userinput.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var otherchar = userinput.slice(1)
// otherchar = otherchar.toLowerCase();
// var userinput = firstchar + otherchar;
// document.write(userinput)

//==== Chapter# 21 and Task # 12
// var num = 35.36 ;
// var string = num.toString();
// document.write(string);

//==== Chapter# 21 and Task # 13
// var username = prompt(" Enter your Name");
// var tetLength = username.length;
// for (i = 0; i < username.length; i++){
//   if (username.slice (i, i + 1) == "!" || username.slice (i, i + 1) =="@" || username)
//  { alert ("Invalid username");

//   }
// }


//==== Chapter# 21 and Task # 14
// var Array = ["cake", "Apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("WELCOME to ABC bakery. What do you want to order?");
// bakery = bakery.toLowerCase();
// var bakeryItems = array.indexOf(bakery);
// if (array.indexOf(bakery) = -1){
//   alert (bakery + "is available at index" + bakeryItems + "in our bakery");
// }
// else{
//   alert (bakery + "is not available in our bakery");
// }


//==== Chapter# 21 and Task # 16

// var University = "University of Karachi"
// var res = University.split('');
// for (var i = 0; i < res.length; i++){
//   document.write(res[i], "<br>")
// }

//==== Chapter# 21 and Task # 17
// var mystring = prompt("Enter String");
// var lastchar = mystring [mystring.length -1]
// document.write(`User input: ${mystring} <br>);

//==== Chapter# 21 and Task # 18

// var text =  ("The quick brown fox jumps over the lazy dog");
// var indexNum  = text.indexOf("the ")
// document.write("the")



// //==== Chapter# 26-30 and Task # 1(a)
// num = Math.round(3.45214);


// //==== Chapter# 26-30 and Task # 1(b)
// var numberOfStars = Math.round(3.45214);
// console.log(numberOfStars);


// //==== Chapter# 26-30 and Task # 1(c)
// var numberOfStars = Math.floor(3.45214);
// console.log(numberOfStars);


//==== Chapter# 26-30 and Task # 1(d)
var numberOfStars = Math.ceil(3.45214);
console.log(numberOfStars);
