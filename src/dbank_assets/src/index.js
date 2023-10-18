import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  const currentAmount = await dbank.checkBalance();
  this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});