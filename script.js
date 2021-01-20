function compute(){

    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    result = document.getElementById("result");
     result.innerHTML =(p*r*y/100);
}
function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}