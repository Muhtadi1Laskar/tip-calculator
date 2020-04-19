let button = document.getElementById("btn");
let tipOutput = document.getElementById("tips");
let totalOutput = document.getElementById("total");
let output = document.getElementById("output");

const calculate_tip = () => {
  let bill = Number(document.getElementById("bill").value);
  let tipPercent = Number(document.getElementById("tip").value);
  let totalPeople = Number(document.getElementById("number").value);
  output.style.display = "block";

  if (bill == " " && tipPercent == " " && totalPeople == " ") {
    let tipOutput = 0;
    let totalOutput = 0;
    document.getElementById("per-tip").innerText = "Tip per person: ";
    tipOutput.innerText = totalTipSplit.toFixed(2);
    document.getElementById("per-total").innerText = "Bill per person: ";
    totalOutput.innerText = totalBillSplit.toFixed(2);
  }

  if (tipPercent == 0) {
      if(totalPeople == 0) {
          totalPeople = 1;
      }
    let tip = 0;

    let totalTip = bill * tip;
    let totalTipSplit = bill * tip;
    let totalBill = bill + totalTip;
    console.log(totalPeople);
    let totalBillSplit = totalBill / totalPeople;

    // Display only the total bill split as the tip is 0
    document.getElementById("per-tip").style.display = "none";
    tipOutput.style.display = "none";
    totalOutput.innerText = totalBillSplit.toFixed(2);
  } else if (totalPeople == 0 || totalPeople == " " || totalPeople == 1) {
    // Convert percentage to decimal
    let tip = tipPercent / 100;
    let totalPeople = 1;
    let totalTip = bill * tip;
    let totalTipSplit = totalTip / totalPeople;
    let totalBill = bill + totalTip;
    let totalBillSplit = totalBill / totalPeople;

    // Display only "Total Tips" and "Total Bill" as only one is paying both
    document.getElementById("per-tip").innerText = "Total Tip: ";
    tipOutput.innerText = totalTipSplit.toFixed(2);
    document.getElementById("per-total").innerText = "Total bill: ";
    totalOutput.innerText = totalBillSplit.toFixed(2);
  } else {
    // Convert percentage to decimal

    let tip = tipPercent / 100;

    let totalTip = bill * tip;
    let totalTipSplit = totalTip / totalPeople;
    let totalBill = bill + totalTip;
    let totalBillSplit = totalBill / totalPeople;

    document.getElementById("per-tip").innerText = "Tip per person: ";
    tipOutput.innerText = totalTipSplit.toFixed(2);
    document.getElementById("per-total").innerText = "Bill per person: ";
    totalOutput.innerText = totalBillSplit.toFixed(2);
  }
};

// Event Listener
button.addEventListener("click", calculate_tip);
