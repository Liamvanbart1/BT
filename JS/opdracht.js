document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const form = document.querySelector("form");

  // Functie om formuliergegevens op te slaan in localStorage
  function saveFormData() {
    const formData = {};
    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data opgeslagen:", formData);
  }

  // Functie om formuliergegevens te laden uit localStorage
  function loadFormData() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      Object.keys(formData).forEach((key) => {
        const elements = document.querySelectorAll(`[name="${key}"]`);
        if (!elements.length) return;

        elements.forEach((input) => {
          if (input.type === "radio" || input.type === "checkbox") {
            if (input.value === formData[key]) {
              input.checked = true;
            }
          } else {
            input.value = formData[key];
          }
        });
      });

      console.log("Form data geladen:", formData);
    }
  }

  setInterval(saveFormData, 6000);

  loadFormData();
});
document.addEventListener("DOMContentLoaded", () => {
  const nextToTab2 = document.getElementById("nextToTab2");
  const nextToTab3 = document.getElementById("nextToTab3");

  const tab2Radio = document.getElementById("tab2");
  const tab3Radio = document.getElementById("tab3");

  nextToTab2?.addEventListener("click", () => {
    tab2Radio.checked = true;
  });

  nextToTab3?.addEventListener("click", () => {
    tab3Radio.checked = true;
  });
});
