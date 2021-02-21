window.addEventListener("DOMContentLoaded", function (){
  console.log("Content Loaded");

  let submitBtn = document.querySelector("#btn");
  let dateForm = document.querySelector("#date-form");

  dateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
  }
  )
});
