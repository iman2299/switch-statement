/* write a small web app that does the following (using a switch statement only):
    - asks the user to enter a string.
    - if the string is "red", the output should be "apple".
    - if the string is "yellow", the output should "banana".
    - if the string is "green", the output should be "grass".
    - if the string is "circle" or "rectangle" or "square", the output should be "shape".
    - if the string is anything else, the output should be "i don't know".*/
    const colour = prompt("enter a string");
    switch (colour)
    {
case "red" :
     document.getElementById("test").innerHTML = "apple";
         break;
case "yellow" :
    document.getElementById("test").innerHTML = "banana";
        break;
 case "green" :
     document.getElementById("test").innerHTML = "grass";
         break;
case "circle" :
case "square" :  
case "rectangle":

    document.getElementById("test").innerHTML = "shape";
        break;
 default :
    document.getElementById("test").innerHTML = "I do not know";
        break;
        
    }
