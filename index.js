function insert(num)   
{  
    document.form1.textview.value = document.form1.textview.value + num;  
}// inserting in textview
  


function equal()  
{  
var exp = document.form1.textview.value;  
if(exp)  
{  
document.form1.textview.value = eval(exp)  
}  
}  // returning result based on passed values
  

function backspace()  
{  
var exp = document.form1.textview.value;  
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
 // removing one number at a time from textview. 