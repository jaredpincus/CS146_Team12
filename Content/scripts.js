function myFunction() {
  var dropdowns = document.getElementsByClassName('dropdown'), i;

  for (var i = 0; i < dropdowns.length; i ++) {

    if(dropdowns[i].style.display === "none"){
      dropdowns[i].style.display = "block"
    } else {
      dropdowns[i].style.display = "none"
    }

  }
}
