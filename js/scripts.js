window.addEventListener("DOMContentLoaded", function (){
  console.log("Content Loaded");

  let submitBtn = document.querySelector("#btn");
  let dateForm = document.querySelector("#date-form");

  dateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");

  //   let dayOfWeek = (year*365 + trunc((year-1) / 4) - trunc((year-1) / 100) +
  //   trunc((year-1) / 400)) % 7

  //   let femaleNames = ["Akosua" "Adwoa" "Abenaa" "Akua" "Yua" "Afua" "Ama"];
  //   let maleNames = ["Kwasi" "Kwadwo" "Kwabena" "Kwaku" "Yaw" "Kofi" "Kwame"];
    
  //   let akanName = function

  // }
  // )
  function getDayName(dateStr, locale)
  {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }
  
  var dateStr = '05/23/2014';
  var day = getDayName(dateStr, "en-US");
  
});
