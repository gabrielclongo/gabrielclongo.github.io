function calculateTip() {
  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let people = document.getElementById("people").value;

  
  if (bill === "" || service == 0) {
    alert("Please enter values");
    return;
  }

  if (people <= 0) {
    people = 1;
  }

  let tip = (bill * service) / people;

  tip = tip.toFixed(2);

  document.getElementById("result").innerText =
    "Tip per person: €" + tip;
}