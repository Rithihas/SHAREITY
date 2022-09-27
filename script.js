setTimeout(()=>{

    document.getElementById("pre").remove();
    document.getElementById("main").style.display = "block";

},3000)





function displayMenu()
{
    var x = document.getElementById("navigationbar").style.display;
    if(x=="none")
    {
        
        document.getElementById("navigationbar").style.display = "flex";
    }
    else
    { 
        const animate1=[
            { transform:  'translateX(0px)' , opacity:'1'},
            {transform:  'translateX(470px)' , opacity:'0'}
       ];
       
       const animate2={
          duration:250,
            iteration:1
       }
       
        document.getElementById("navigationbar").animate(animate1,animate2);
       
        setTimeout(()=>{document.getElementById("navigationbar").style.display = "none";},200);
        
    }
}