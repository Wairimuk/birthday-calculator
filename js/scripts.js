window.addEventListener("DOMContentLoaded", function (){
  console.log("Content Loaded");

  let submitBtn = document.querySelector("#btn");
  let dateForm = document.querySelector("#date-form");

  dateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");

    let user_date = document.getElementById("date").value;
  	let day = getDayName(user_date,"en-US");
    // console.log("Your were born on:"+day);
  
    let gender = document.getElementById("gender").value;

    // let femaleNames = ["Akosua" "Adwoa" "Abenaa" "Akua" "Yua" "Afua" "Ama"];
    // let maleNames = ["Kwasi" "Kwadwo" "Kwabena" "Kwaku" "Yaw" "Kofi" "Kwame"];
    
  function akanName(day, gender){
      if (day === Monday && gender === male) console.log("Akosua");
       else if (day === Monday && gender ==== female); console.log("Adwoa");
    }
    

  
  function getDayName(dateStr, locale)
  {
      let date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }
});
});