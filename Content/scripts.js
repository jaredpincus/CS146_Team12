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

var navClass = "navLoc";
/* Assumes that navLoc elements only go 2 levels deep */
function generateNav() {
	var locations = document.getElementById("content").getElementsByClassName(navClass);
	var out = "";
	var inner = false;
	for (let i = 0; i < locations.length; i ++) {
		let element = locations[i];
		let toAdd = "<a href='#" + element.id + "'>" + element.id.replace("_"," ") + "</a>";
		if (!inner && element.parentNode.className === navClass) {
			inner = true;
			out += "<ul class='dropdown'>";
		} else if (inner && element.parentNode.className !== navClass) {
			inner = false;
			out += "</ul>";
		}
		out += toAdd;
	};
	console.log(out);
	return out;
}

function placeNav() {
	document.getElementById('sidenav').innerHTML += generateNav();
}

window.onload = placeNav;