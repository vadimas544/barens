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



  window.onload= function() {
    document.getElementById('toggler').onclick = function() {
      opentext('comod-text', this);
      return false;
    };
  };

  function opentext(id, toggler) {
    var div = document.getElementById(id);

    
    if(div.style.display == 'block') {
      div.style.display = 'none';
      toggler.innerHTML = 'Открыть';
    }
    else {
      div.style.display = 'block';
      toggler.innerHTML = 'Закрыть';
    }
  }
