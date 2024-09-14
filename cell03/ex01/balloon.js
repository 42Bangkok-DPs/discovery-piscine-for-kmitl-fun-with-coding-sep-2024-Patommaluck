var sizecount=200;
let colorcount=1;
function smaller() 
{
    if (sizecount>200)
    {
    
        sizecount=sizecount-5;
        document.getElementById("maincircle").style.height = sizecount +"px"; 
        document.getElementById("maincircle").style.width = sizecount+"px";
    
    }
 
}

function nextcolor()
{
        
        if(colorcount==1){
            colorcount=2;
            document.getElementById("maincircle").style.backgroundColor = 'green';
            
        }
        else if(colorcount==2){
            colorcount=3;
            document.getElementById("maincircle").style.backgroundColor = 'blue';
            
        }
        else if(colorcount==3){
            colorcount=1;
            document.getElementById("maincircle").style.backgroundColor = 'red';
            
        }

        
} 


function bigger() 
{
    if (sizecount<=450)
    {
        sizecount=sizecount+10;
        document.getElementById("maincircle").style.height = sizecount +"px"; 
        document.getElementById("maincircle").style.width = sizecount+"px";
        
    }
    else if (sizecount>450)
    {
        sizecount=200;
        document.getElementById("maincircle").style.height = sizecount +"px"; 
        document.getElementById("maincircle").style.width = sizecount+"px";
        
    }

    if(colorcount==1){
        colorcount=2;
        document.getElementById("maincircle").style.backgroundColor = 'green';
        
    }
    else if(colorcount==2){
        colorcount=3;
        document.getElementById("maincircle").style.backgroundColor = 'blue';
        
    }
    else if(colorcount==3){
        colorcount=1;
        document.getElementById("maincircle").style.backgroundColor = 'red';
        
    }

   
}