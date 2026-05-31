const screens = document.querySelectorAll(".screen");
const transition = document.querySelector("#transition");
const navButtons = document.querySelectorAll("[data-target]");

let currentScreen = "entry";

function showScreen(target) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === target);
  });
  currentScreen = target;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function runPipeTransition(target) {
  transition.classList.add("is-active");

  window.setTimeout(() => {
    showScreen(target);

    if (target === "members") {
      runWorldLoader();
    }
  }, 920);

  window.setTimeout(() => {
    transition.classList.remove("is-active");
  }, 1250);
}

function runWorldLoader() {
  const loader = document.querySelector("[data-loader]");
  if (!loader) return;

  loader.classList.add("is-loading");
  window.setTimeout(() => {
    loader.classList.remove("is-loading");
  }, 1450);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (!target || target === currentScreen) return;
    runPipeTransition(target);
  });
});
