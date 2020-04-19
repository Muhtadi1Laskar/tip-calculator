const button = document.getElementById("btn");
const tipOutput = document.getElementById("tips");
const totalOutput = document.getElementById("total");
const output = document.getElementById("output");

const calculate_tip = () => {
    const bill = Number(document.getElementById("bill").value);
    const tipPercent = Number(document.getElementById("tip").value);
    const totalPeople = Number(document.getElementById("number").value);
    output.style.display = "block";


    if(bill == " " &&  tipPercent == " " && totalPeople == " ") {
        
        tipOutput.innerText = "0";
        totalOutput.innerText = "0";
    }

    if (tipPercent == 0) {
        const tip = 0;

        const totalTip = (bill * tip);
        const totalTipSplit = (bill * tip);
        const totalBill = bill + totalTip;
        const totalBillSplit = totalBill / totalPeople ;

        // Display only the total bill split as the tip is 0
        document.getElementById("per-tip").style.display = "none";
        tipOutput.style.display = "none"
        totalOutput.innerText = totalBillSplit.toFixed(2);

    }
    else if(totalPeople == 0 || totalPeople == " " || totalPeople == 1) {
        // Convert percentage to decimal 
        const tip = tipPercent / 100;
        const totalPeople = 1;
        const totalTip = (bill * tip);
        const totalTipSplit = totalTip / totalPeople;
        const totalBill = bill + totalTip;
        const totalBillSplit = totalBill / totalPeople;

        // Display only "Total Tips" and "Total Bill" as only one is paying both
        document.getElementById("per-tip").innerText = "Total Tip: "
        tipOutput.innerText = totalTipSplit.toFixed(2);
        document.getElementById("per-total").innerText = "Total bill: "
        totalOutput.innerText = totalBillSplit.toFixed(2);
    }
    else {
        // Convert percentage to decimal 
        const tip = tipPercent / 100;

        const totalTip = (bill * tip);
        const totalTipSplit = totalTip / totalPeople;
        const totalBill = bill + totalTip;
        const totalBillSplit = totalBill / totalPeople;

        tipOutput.innerText = totalTipSplit.toFixed(2);
        totalOutput.innerText = totalBillSplit.toFixed(2);
    }

    

}


// Event Listener
button.addEventListener("click", calculate_tip);