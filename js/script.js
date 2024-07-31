const fee_price = 20000;

// Button Increase Decrease
const decreaseBtn1 = document.getElementById("decrease1");
const increaseBtn1 = document.getElementById("increase1");
const ticketCount1 = document.getElementById("ticket-count1");

const decreaseBtn2 = document.getElementById("decrease2");
const increaseBtn2 = document.getElementById("increase2");
const ticketCount2 = document.getElementById("ticket-count2");

const decreaseBtn3 = document.getElementById("decrease3");
const increaseBtn3 = document.getElementById("increase3");
const ticketCount3 = document.getElementById("ticket-count3");

//get element
const priceElement1 = document.getElementById("price1");
const priceElement2 = document.getElementById("price2");
const priceElement3 = document.getElementById("price3");

const sumRegularTicket = document.getElementById("price");
const sumFees = document.getElementById("feePrice");
const sumTotalTicket = document.getElementById("totalPrice");

decreaseBtn1.addEventListener("click", function () {
  decreaseTicketCount(ticketCount1, priceElement1);
});

increaseBtn1.addEventListener("click", function () {
  increaseTicketCount(ticketCount1, priceElement1);
});
decreaseBtn2.addEventListener("click", function () {
  decreaseTicketCount(ticketCount2, priceElement2);
});

increaseBtn2.addEventListener("click", function () {
  increaseTicketCount(ticketCount2, priceElement2);
});

decreaseBtn3.addEventListener("click", function () {
  decreaseTicketCount(ticketCount3, priceElement3);
});

increaseBtn3.addEventListener("click", function () {
  increaseTicketCount(ticketCount3, priceElement3);
});

function decreaseTicketCount(countElement) {
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    count--;
    countElement.textContent = count;
    updateSummary();
  }
}

function increaseTicketCount(countElement) {
  let count = parseInt(countElement.textContent);
  count++;
  countElement.textContent = count;
  updateSummary();
}

//Summary Count
function updateSummary() {
  const regulerCount = parseInt(ticketCount1.textContent);
  const vipCount = parseInt(ticketCount2.textContent);
  const vvipCount = parseInt(ticketCount3.textContent);

  const regulerPrice = regulerCount * 120000;
  const vipPrice = vipCount * 180000;
  const vvipPrice = vvipCount * 220000;

  const totalTicket = regulerPrice + vipPrice + vvipPrice;
  const feePrice = fee_price;

  const totalPrice = totalTicket + feePrice;

  sumRegularTicket.textContent = `Rp ${totalTicket.toLocaleString()}`;
  sumFees.textContent = `Rp ${feePrice.toLocaleString()}`;
  sumTotalTicket.textContent = `Rp ${totalPrice.toLocaleString()}`;
}
