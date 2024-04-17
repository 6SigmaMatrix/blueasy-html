var nav = document.getElementById("nav-menu");
  function showmenu(){
    nav.style.right= "0";
  }
   function hideMenu(){
    nav.style.right= "-100%";
  }




$("#bar").click(function(){
  ("nav-menu-toogle").slideToggle('');
})


/*var navres = document.getElementById("nav-menu-toogle");
  var bar=document.getElementById("bar");
  bar.addEventListener('click',()=>{
    navres.classList.toggle('activemenu');
  })*/




  var navres2 = document.getElementById("nav-menu-toogle2");
  var bar2=document.getElementById("bar2");
  bar2.addEventListener('click',()=>{
    navres2.classList.toggle('activemenu');
  })