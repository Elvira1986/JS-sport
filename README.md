# Plain JavaScript DOM Manipulations.

In this repository, you will practice manipulating the DOM directly by creating a portfolio.

## Objectives

- Manipulate the DOM directly through by appending and removing DOM elements.
- Use CSS to style elements on the page.
- Add event handlers to interact with user actions on the page.

## Setup

Open `index.html` in the browser.

## Basic Requirements

_Note: Do not use jQuery for any of this! The purpose of this activity is to make you comfortable with DOM manipulations using plain JavaScript._

![Part 1 Preview](support/step1.jpg)

### 1. Create a form that adds images to the page.

- [ ] Add functionality.
  - This form should have an input field where the user will enter the URL of an image.
  - This form should have a "submit" button.
  - After clicking the button, the image should appear at the top of the page.
- [ ] Add styling.
  - Everything should be center-aligned.
  - Images should be positioned in a grid pattern so that they appear four across. You can do this with plain CSS, or you can use Bootstrap if you're familiar with it.

#### Where do I start?

- The form and submit button is already started for you (see your `index.html`). There is also an event listener already attached to the form (see `index.js`), so when the button is clicked you should see the "Form was submitted" message in your browser console. Check that it works correctly. Don't forget to add `event.preventDefault()` to prevent the form reloading the page, or else you won't be able to see the message!

- On your `index.html`:
  - Add the input field in your form. Don't forget to give it a unique id.
  - Add a container `div` for your grid of images (placed above the form elememt). Give it a unique id as well and add any class you need for its styling. Everything should be centered. 

- On your `index.js`: 
  - Create a "projects" array where you will be storing all the user input/project info.
  - Complete the `handleSubmit` function. When the form is submitted you must get the information (the image URL) from the input field and push it in the "projects" array to store for later. For this you will need to select the input element (`getElementById`), and get its value.
  - Now, create your image. 
    - create an element of type `img`
    - set its `src` attribute to the URL you just received from the user
    - add also any classes you need to the `img` element for this to show correctly in your grid. (you must have created the classes previously in your `styles.css` file if you are not using Bootstrap).
    - and finally append this img element as a child to the `div` that represents the grid of images. 


![Part 2 Preview](support/step2.jpg)

### 2. Add additional fields to the form.

- [ ] Add functionality.
  - Create an input text box for the project title.
  - Add a larger text box (look up `textarea`) for the project description.
  - This information should be stored somewhere, but you should not display it yet. Hint: create any variables you need to store every project's information: the title, description and image.
- [ ] Add styling.
  - See image above – the form title and image fields are on the same line, and project description gets its own line. Play with CSS grids or use Bootstrap forms if you feel more adventurous.


#### ... and how do we do that?

- On your `index.html`:
  - Add the two new fields (`input` + `textarea`) to your form, and give a unique id to each. Add any classes you need for styling.

- On your `index.js`:
  - Same as you did before for the URL input, modify the `handleSubmit` function so that you can grab and console log the values of each one of the new inputs before you proceed.
  - Now for each project you need to store more than just the image URL, adding its title and description. Can you think of a way to store these three related values together? Maybe your "projects" array should now store project _objects_ instead of simple URL strings?

![Part 3 Preview](support/step3.jpg)

### 3. Create a featured image section

- [ ] Add functionality
  - If there are no images on the page yet, nothing should be displayed
  - Clicking on any images should show/replace the featured image with other images.
- [ ] Add styling.
  - The featured image should be on the left, and the title and description should be on the right.

#### ... and how do we do that?

- On your `index.html`:
  - Add a container for your featured project (placed above the image grid container). Give it a unique id as well. 
  - Your container must be further divided in two parts: one on the left for the image and one on the right for the title and description. Create all necessary elements (like title, paragraph, img etc) and leave them empty for now. Add ids to all so you can later `getElementById` and fill those with the featured project information dynamically.
  - Add all CSS (or Bootstrap) classes you need to each element for everything to display correctly. The elements may be empty now but you can use some dummy content to double check the styling and how it will finally look.

- On your `index.js`:
  - Modify the `handleSubmit` method. We want the images to be _clickable_ so you must add a click event listener to each image you create, that will be calling a new method `setFeatured` (that you will create next). 
  - Your projects need to have a unique id that will identify them, so modify your project object to also include an id. This id is like a counter of your projects, initialize it to 1 on top of your script and then increase it every time you add a new project to your array.
  - You must pass this project id as an argument to the new method `setFeatured` when you call it, so that it knows which project is the featured one.
  - Create the `setFeatured` method. This method should get as input the id of the clicked project. Based on this id, the method should search the array of projects to find the chosen project and retrieve all its information (title, description, image URL).
  - Then, still inside `setFeatured` method, select by ID (`getElementById`) the three elements of the featured container (title, image, description) and fill those with the project values.
  - Done!


### 4. Improve styling

- [ ] Play with the styling so this looks as professional as possible!

## Resources

- [MDN - Manipulating the DOM Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Plain JS - Common DOM Manipulation methods](https://plainjs.com/javascript/manipulation/)
- [Eloquent JavaScript - The DOM](https://eloquentjavascript.net/14_dom.html)
- [Eloquent JavaScript - Handling Events](https://eloquentjavascript.net/15_event.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
