/* Urls to test it:
https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Snowboarding1.jpg/440px-Snowboarding1.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Rollerblading-postojna.jpg/440px-Rollerblading-postojna.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Meditating_in_Madison_Square_Park.jpg/440px-Meditating_in_Madison_Square_Park.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Depart4x100.jpg/440px-Depart4x100.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Robert_Helenius_vs._Attila_Levin.jpg/440px-Robert_Helenius_vs._Attila_Levin.jpg

*/

// This will be called when the user presses "Submit"
function handleSubmit(event) {
  event.preventDefault();
  console.log("form was submitted!");

  // Get form and data from input field(s)
  let form = event.target;
  // form received the 'submit' event
  let imageUrlValue = form.elements.imageUrl.value;

  // Create a thumbnail
  let thumb = document.createElement("img");
  thumb.src = imageUrlValue;

  // append it to the thumb grid
  let grid = document.getElementById("thumb-grid");
  grid.append(thumb);
  form.reset();
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
