/* Author: Ken Saetern */
//question 1 function
function numbercheck1(){
  var num=document.getElementById("input1").value;
  if(isNaN(num)){ //NaN=Not a Number
    document.getElementById("inputalert").classList.add("has-error");
    document.getElementById("hiddenmsg").innerHTML="No Letters Allowed";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//if not a number
  else if(num==1320){
    //changes text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.remove("has-warning");
    document.getElementById("inputalert").classList.add("has-success");
    //disables text box when answer is right
    document.getElementById("input1").disabled=true;
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Success!";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//else if answer is right
  else{
    //changes input text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.add("has-warning");
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Wrong Answer";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//else still inputting numbers
}
//question 2 function
function numbercheck2(){
  var num=document.getElementById("input1").value;
  if(isNaN(num)){ //NaN=Not a Number
    document.getElementById("inputalert").classList.add("has-error");
    document.getElementById("hiddenmsg").innerHTML="No Letters Allowed";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//if not a number
  else if(num==1651){
    //changes text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.remove("has-warning");
    document.getElementById("inputalert").classList.add("has-success");
    //disables text box when answer is right
    document.getElementById("input1").disabled=true;
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Success!";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
    document.cookie=1;
  }//else if answer is right
  else{
    //changes input text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.add("has-warning");
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Wrong Answer";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//else still inputting numbers
}
//question 3 function
function numbercheck3(){
  var num=document.getElementById("input1").value;
  if(isNaN(num)){ //NaN=Not a Number
    document.getElementById("inputalert").classList.add("has-error");
    document.getElementById("hiddenmsg").innerHTML="No Letters Allowed";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//if not a number
  else if(num==60){
    //changes text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.remove("has-warning");
    document.getElementById("inputalert").classList.add("has-success");
    //disables text box when answer is right
    document.getElementById("input1").disabled=true;
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Success!";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
    answer3 = 1;
  }//else if answer is right
  else{
    //changes input text box color
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.add("has-warning");
    //shows hidden message
    document.getElementById("hiddenmsg").innerHTML="Wrong Answer";
    document.getElementById("hiddenmsg").classList.remove("hide");
    document.getElementById("hiddenmsg").classList.add("show");
  }//else still inputting numbers
}
