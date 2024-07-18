/* Urls to test it:
https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Snowboarding1.jpg/440px-Snowboarding1.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Rollerblading-postojna.jpg/440px-Rollerblading-postojna.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Meditating_in_Madison_Square_Park.jpg/440px-Meditating_in_Madison_Square_Park.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Depart4x100.jpg/440px-Depart4x100.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Robert_Helenius_vs._Attila_Levin.jpg/440px-Robert_Helenius_vs._Attila_Levin.jpg

*/

let Projects = [];
let NextProjectId = 1;
// This will be called when the user presses "Submit"
function handleSubmit(event) {
  event.preventDefault();
  console.log("form was submitted!");

  // Get form and data from input field(s)
  let form = event.target;
  // form received the 'submit' event
  let imageUrlValue = form.elements.imageUrl.value;
  let titleValue = form.elements.title.value;
  let descriptionValue = form.elements.description.value;

  // Put all the project info in a proj obj and save it (for later)
  let projObj = {
    id: NextProjectId,
    title: titleValue,
    imageUrl: imageUrlValue,
    description: descriptionValue,
  };

  Projects.push(projObj);
  NextProjectId++; // increment so each project has a unique ID

  console.log(projObj);

  // Create a thumbnail
  let thumb = document.createElement("img");
  thumb.src = imageUrlValue;

  // When a sport is clicked on, call the showSport(id) function
  // We need to pass the sport ID, in parentheses, and therefore showSport()
  // gets called immediately. Make it an arrow function so that showSport()
  // will truly be called only when there's a click
  thumb.addEventListener("click", (event) => showSport(projObj.id));

  // append it to the thumb grid
  let grid = document.getElementById("thumb-grid");
  grid.append(thumb);

  // Emty form field
  form.reset();
}

function showSport(id) {
  // get the sport obj from Projects
  let sportObj = Projects.find((p) => p.id === id);

  // Populate the HTML elements in the featured patch <div>
  document.getElementById("fs-picture").src = sportObj.imageUrl;
  document.getElementById("fs-name").textContent = sportObj.title;
  document.getElementById("fs-comment").textContent = sportObj.description;

  // make sure featured sport section is visible
  document.getElementById("fs-section").style.display = "block";
}

// Tell form what to do when it receives a 'submit' event
const form = document.querySelector("form");
// first form
form.addEventListener("submit", handleSubmit);
