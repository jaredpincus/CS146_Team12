var navClass = "navLoc";
/* Assumes that navLoc elements only go 2 levels deep */
function generateNav() {
	var locations = document.getElementById("content").getElementsByClassName(navClass);
	var out = "";
	var inner = false;
	for (let i = 0; i < locations.length; i ++) {
		let element = locations[i];
		let spanStart = element.parentNode.className !== navClass ? "<span class='navGroup'>" : "";
		let toAdd = spanStart + "<a href='#" + element.id + "'>" + element.id.split("_").join(" ") + "</a>";
		if (!inner && element.parentNode.className === navClass) {
			inner = true;
			out += "<ul class='dropdown'>";
		} else if (inner && element.parentNode.className !== navClass) {
			inner = false;
			out += "</ul></span>";
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

window.addEventListener("load", function() {
  var cripplingbutton = document.getElementById("crippling");
  var thanksbutton = document.getElementById("no thanks");
  var aightbutton = document.getElementById("it was aight");
  var gerdbutton = document.getElementById("really gerd");
  var lifebutton = document.getElementById("life changing");
  var rating = document.getElementById("rating_pic")

  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("submitbutton");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // Get the header for the modal
  var modalheader = document.getElementById("modalhead");

  // get firstname and last name from form
  var firstname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;

  cripplingbutton.addEventListener("click", function() {
    rating.src = "was crippling.png"
  });
  thanksbutton.addEventListener("click", function() {
    rating.src = "no thanks.jpg"
  });
  aightbutton.addEventListener("click", function() {
    rating.src = "it was aight.png"
  });
  gerdbutton.addEventListener("click", function() {
    rating.src = "really good.jpeg"
  });
  lifebutton.addEventListener("click", function() {
    rating.src = "life changing.jpeg"
  });

  btn.addEventListener("click", function() {
    modal.style.display = "block";
  })

  span.addEventListener("click", function() {
    modal.style.display = "none";
  })

});

function display() {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("submitbutton");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // Get the header for the modal
  var modalheader = document.getElementById("modalhead");

  // get firstname and last name from form
  var firstname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;

  // this one displays the form info on the modal
  btn.addEventListener("click", function() {
    modalheader.innerHTML = "So What's Your Rating: " + firstname + ' ' + lastname;
  })
}
