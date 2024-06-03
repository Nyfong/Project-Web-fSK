const addtocart = document.getElementById("addtocart");
const showcart = document.getElementById("showcart")
// $(document).ready(function()
// {
//     ("addtocart").click(function()

// {
//     ("showcart").slidedown.html
// })
// })

var clicked =0;
addtocart.addEventListener("click", function()
{
   
  
    if(clicked ==1 )
   {
    showcart.style.display ="none";
    clicked=0; 
    console.log("0")
   }else if( clicked ==0)
   {
    showcart.style.display ="flex";
    clicked=1; 
    console.log("1")
   }
   
  
   
    
});
