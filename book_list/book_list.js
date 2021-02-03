"use strict";





   $(document).ready(function() {

         $("#categories h2").click( evt => {
       
          const main = evt.currentTarget;


           $(main).toggleClass("minus");

        if ($(main).attr("class") !== "minus") {

            $(main).next().hide();
        
 }
        else   {
        
            $(main).next().show();
        }

        $("#image").attr("src", "");


    }); 

    $("#web_images a, #language_images a, #database_images a").each( (index, img) => {
        
        
        var imageURL = $(img).attr("href");

        	
        var bookImage = new Image();
        bookImage.src = imageURL;

        		
        $(img).click( evt => {
            $("#image").attr("src", imageURL);

        
        evt.preventDefault();
        }); 

    }); 
    
}); 