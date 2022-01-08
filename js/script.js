const menu= document.getElementById("menu")

window.addEventListener("scroll", function(){
    //console.log(window.scrollY);
    


   if(window.scrollY < 540){
     menu.style.backgroundColor = "rgba(255, 253, 253, 0.3)"

   }else {
       
        menu.style.backgroundColor = "rgb(76, 130, 142,0.6)"
        
   }

}
)

