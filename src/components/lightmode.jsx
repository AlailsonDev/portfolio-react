function LightMode() {
  function LightMode() {
    const lightMode = document.getElementById("light-mode");

    lightMode.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });

    const acessibilityMode = document.getElementById("acessibility-mode");

    acessibilityMode.addEventListener("click", () => {
      document.body.classList.toggle("acessibility");
    });
  }
}

export default LightMode;
