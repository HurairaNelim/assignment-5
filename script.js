let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistoryBtn");

// Heart button
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});

// Copy button
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".phone-number").textContent;

    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
      copyCount++;
      copyDisplay.textContent = `${copyCount} Copy`;
    });
  });
});

// Call button
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const number = card.querySelector(".phone-number").textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    alert(`Calling ${serviceName} at ${number}...`);

    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.innerHTML = `<span>${serviceName} - ${number}</span><span>${time}</span>`;
    historyList.appendChild(li);
  });
});

// Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
