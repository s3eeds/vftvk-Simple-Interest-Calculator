function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rangeRate").value;
    var years = document.getElementById("years").value;
    var fut = convertYears(years);
    var interest = principal * years * rate / 100;
    if(validateForm()){
        document.getElementById("result").innerHTML=
        "If you deposit <mark>"+ principal +"</mark>,<br/>"+
        " at an interest rate of <mark>"+ rate +"</mark>.<br/>"+
        " You will receive an amount of <mark>"+ interest +"</mark>,<br/>"+
        " in the year <mark>" + fut+"</mark>";
    }
}

function readRate(val){
    document.getElementById("rate").innerHTML=val;
}

function convertYears(years){
    var date = new Date(); 
    var year = date.getFullYear();
    var future = parseInt(year) + parseInt(years);
    return future;
}
    

function validateForm() {
  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus(); 
    return false;
  }
  return true
}