
 //Calculating Tip
function calculateTip() {
  var billAmount = document.getElementById("billamount").value;
  var serviceQuallity = document.getElementById("serviceQuallity").value;
  var HowManyPeople = document.getElementById("peopleamount").value;

  //validate input
  if (billAmount === "" || serviceQuallity == 0) {
    alert("Please enter values");
    return;
  }
  //If input is less than, greater to, or equal to 1 
  if (HowManyPeople === "" || HowManyPeople <= 1) {
    HowManyPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate the tip
  var total = (billAmount * serviceQuallity) / HowManyPeople;
  //Rounding
  total = Math.round(total * 100) / 100;
  //Digets after a decimal point
  total = total.toFixed(2);
  //Final total
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};