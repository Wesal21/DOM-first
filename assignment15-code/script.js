
  var myps=document.getElementsByClassName('myP');
  for(var i=0;i<myps.length;i++){
  myps[i].style.color = '#a90098';
}

myHeader.innerText = "Main Content Here";



var replaceP=document.querySelectorAll("aside");
  for(var i=0;i<replaceP.length;i++){
      
    replaceP[i].innerHTML = `<div class="red ">
    <p>Title1</p>
    <h4>comment 1</h4>
    </dive>
    
    <div class="blue ">
    <p>Title2</p>
    <h4>comment 2</h4>
    </dive>

    <div class="green ">
    <p>Title3</p>
    <h4>comment 3</h4>
    </dive>

    `;
    document.getElementsByClassName("red")[0].style.color="red";
 document.getElementsByClassName("blue")[1].style.color="blue";
 document.getElementsByClassName("green")[2].style.color="green";

  }
 





var alink = document.createElement('a');
      var linkText = docvaument.createTextNode("Link 1");
      alink.appendChild(linkText);
      alink.title = "Link 1";
      alink.href = "http://example.com";
     var mynav=document.querySelectorAll("nav");
     mynav[0].appendChild(alink);
    
     
     


     





     
     
     




      