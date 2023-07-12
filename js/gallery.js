// Store all images in an array
var pictures = [
  "images/flowers-yellow-small.jpg",
  "images/flowers-white-small.jpg",
  "images/flowers-red-small.jpg",
  "images/flowers-purple-small.jpg",
  "images/flowers-pink-small.jpg"
];

// Generate dynamic list items for each picture
var list = document.querySelector("ul");
// Loop through pictures array
for (var i = 0; i < pictures.length; i++) {
  // Add Bulma class to list
  list.innerHTML += "<li><img src='" + pictures[i] + "'></li>";
  list.classList.add("columns", "is-multiline", "is-mobile");
}

// Add Bulma class to each li
var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].classList.add("image", "box", "column", "is-one-fifth", "mt-6");
}

// Add Bulma class to each img
var firstImage = document.querySelector("img");

// Select figcaption and change its text to filename
var figcaption = document.querySelector("figcaption");
figcaption.innerHTML = firstImage.getAttribute("src").replace("images/", "").replace("-large.jpg", "");

// Add event listener to each li
var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    // Add event listener to each li
    listItems[i].addEventListener("click", function() {
      // Get src attribute of clicked image
      var imgSrc = this.querySelector("img").getAttribute("src");
      // Change src attribute of first image to clicked image
      document.querySelector("img").setAttribute("src", imgSrc);
      // Get first image and change its src attribute from -small to -large
      firstImage.setAttribute("src", firstImage.getAttribute("src").replace("-small", "-large"));
      // Select figcaption and change its text to filename
      figcaption.innerHTML = firstImage.getAttribute("src").replace("images/", "").replace("-large.jpg", "");
    }
  );
}
