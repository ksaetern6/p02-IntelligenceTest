function numbercheck(){
  var num=document.getElementById("input1").value;
  if(isNaN(num)){
    //document.getElementById("alert").innerHTML="Error";
    document.getElementById("inputalert").classList.add("has-error");\
  
  }//if not a number
  else if(num==1320){
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.remove("has-warning");
    document.getElementById("inputalert").classList.add("has-success");
    document.getElementById("input1").disabled=true;
  }
  else{
    document.getElementById("inputalert").classList.remove("has-error");
    document.getElementById("inputalert").classList.add("has-warning");
  }//else
}
