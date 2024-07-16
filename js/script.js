// Set 1
const decreaseBtn1 = document.getElementById("decrease1");
const increaseBtn1 = document.getElementById("increase1");
const ticketCount1 = document.getElementById("ticket-count1");

decreaseBtn1.addEventListener("click", function () {
  decreaseTicketCount(ticketCount1);
});

increaseBtn1.addEventListener("click", function () {
  increaseTicketCount(ticketCount1);
});

// Set 2
const decreaseBtn2 = document.getElementById("decrease2");
const increaseBtn2 = document.getElementById("increase2");
const ticketCount2 = document.getElementById("ticket-count2");

decreaseBtn2.addEventListener("click", function () {
  decreaseTicketCount(ticketCount2);
});

increaseBtn2.addEventListener("click", function () {
  increaseTicketCount(ticketCount2);
});

// Set 3
const decreaseBtn3 = document.getElementById("decrease3");
const increaseBtn3 = document.getElementById("increase3");
const ticketCount3 = document.getElementById("ticket-count3");

decreaseBtn3.addEventListener("click", function () {
  decreaseTicketCount(ticketCount3);
});

increaseBtn3.addEventListener("click", function () {
  increaseTicketCount(ticketCount3);
});

function decreaseTicketCount(countElement) {
  let count = parseInt(countElement.textContent);
  if (count > 1) {
    count--;
    countElement.textContent = count;
  }
}

function increaseTicketCount(countElement) {
  let count = parseInt(countElement.textContent);
  count++;
  countElement.textContent = count;
}
