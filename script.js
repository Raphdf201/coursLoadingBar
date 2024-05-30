const loadingDiv = document.querySelector(".loading");
let count = 0;
let loaded = false;

let loadtime = 100; // This is the time of the countdown

const interval = setInterval(() => {
  if (count < 101) {
    loadCount.textContent = count++;
    progress.style.width = count++ + "%";
  } else if (loaded) {
    loadingDiv.style.opacity = 0;
    clearInterval(interval);

    setTimeout(() => {
      loadingDiv.style.display = "none";
    }, 450);
  }
}, loadtime);

window.addEventListener("load", () => {
  console.log("Loaded");
  loaded = true;

  clearInterval(interval);

  loadCount.textContent = 100;
  progress.style.width = 100 + "%";
  loadingDiv.style.opacity = 0;
  setTimeout(() => {
    loadingDiv.style.display = "none";
  }, 450);
});
