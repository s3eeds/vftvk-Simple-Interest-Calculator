function compute(){

    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    result = document.getElementById("result");
     result.innerHTML ="If you deposit"+" "+p+","+"<br />"+"at an interest rate of "+r+"%."+"<br />"+"You will receive an amount of "+(p*r*y/100)+","+"<br />"+"in the year"+(+2020+ +y);
}
function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}
