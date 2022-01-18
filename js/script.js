/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  function openbox(){
    display = getElementById("comod-text").style.display;

    if(display == "none"){
      getElementById("comod-text").style.display = "block";
    }else {
      getElementById("comod-text").style.display = "none";
    }
  }


  // let coll = document.getElementsByClassName('collapsable');

  // for(let i=0; i < coll.length; i++) {
  //   coll[i].addEventListener('click', function () {
  //     alert(Hi);
  //     let text = this.nextSiblings();
  //     text.style.display = 'block';
      
  //   })
  // }