window.addEventListener("DOMContentLoaded", function (){
  console.log("Content Loaded");

  // let submitBtn = document.querySelector("#btn");
  let dateForm = document.querySelector("#date-form");

  dateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");


    let user_date = document.querySelector("#date").value;
    let date = new Date(user_date);
    let dateDay = date.getDay();
    user_date = dateDay;
    console.log(dateDay);

  	// let day = getDayName(user_date,"en-US");
    // alert("Your were born on: "+day);
  
    let gender = document.querySelector("#gender").value;

    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yua", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    // console.log(femaleNames)
    
    if (gender === "male"){
      alert("Your Akan Name is: " + maleNames[user_date]);
    }else if (gender === "female"){
      alert("Your Akan Name is: " + femaleNames[user_date]);
    }else{
      alert("Error: Incorrect input");
    }

  
  

});
});