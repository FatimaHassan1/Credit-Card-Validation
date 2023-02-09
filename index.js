const express = require("express");
const app = express();
const prompt = require("prompt-sync")({ sigint: true });

function isValidMasterCardNumber(cardNumber) {
  let masterCardNumber = cardNumber;
  // Regex to check valid MasterCard_Number
  let regex = new RegExp(/^(?:5[1-5][0-9]{14})$/);
  // let regex = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);

  // Check for validity of card
  if (regex.test(masterCardNumber) == true) {
    console.log(`Your Master card number ${masterCardNumber} is valid`);
    const retry = prompt("Do you still want to retry your action ? ");
    if (
      retry.includes("YES") ||
      retry.includes("Yes") ||
      retry.includes("YEs") ||
      retry.includes("YeS") ||
      retry.includes("yes") ||
      retry.includes("y") ||
      retry.includes("Y")
    ) {
      return isValidMasterCardNumber();
    } else {
      console.log("Thank you for testing the validity of your credit card😉.");
    }
  } else {
    console.log(`Invalid card!. Please input your credit card number!`);
    const retry = prompt("Do you want to retry your action ? ");
    if (
      retry.includes("YES") ||
      retry.includes("Yes") ||
      retry.includes("YEs") ||
      retry.includes("YeS") ||
      retry.includes("yes") ||
      retry.includes("y") ||
      retry.includes("Y")
    ) {
      return isValidMasterCardNumber();
    } else {
      console.log("Thank you for testing the validity of your credit card😉.");
    }
  }
}

app.get("/validate/:cardNumber", (req, res) => {
  let cardNumber = req.params.cardNumber;
  let isValid = isValidMasterCardNumber(cardNumber);

  res.json({
    cardNumber,
  });
});

app.listen(3000, () => {
  console.log("Mastercard validation API running on port 3000");
});
