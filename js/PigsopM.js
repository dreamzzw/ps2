window.onload=function(){
    var obt=document.getElementById("bt");
    var odiv=document.getElementById("thediv");
    obt.onclick=function(){
      if(odiv.style.display=="none"){
        odiv.style.display="block";
      }
      else{
        odiv.style.display="none";
      }
    }
  }

