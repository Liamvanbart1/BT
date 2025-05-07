// ik wil een bij het laden van de pagina een functie starten //



// class met display none en deze toevoegen / weghalen als de browser javascript heeft //

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage //

// https://developer.mozilla.org/en-US/docs/Web/API/FormData
















































// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//
//     // Functie om formuliergegevens op te slaan in localStorage
//     function saveFormData() {
//         const formData = {};
//         new FormData(form).forEach((value, key) => {
//             formData[key] = value;
//         });
//         localStorage.setItem("formData", JSON.stringify(formData));
//         console.log("Form data opgeslagen:", formData);
//     }
//
//     // Functie om formuliergegevens te laden uit localStorage
//     function loadFormData() {
//         const savedData = localStorage.getItem("formData");
//         if (savedData) {
//             const formData = JSON.parse(savedData);
//             Object.keys(formData).forEach(key => {
//                 const input = document.querySelector(`[name="${key}"]`);
//                 if (input) {
//                     if (input.type === "radio") {
//                         document.querySelector(`[name="${key}"][value="${formData[key]}"]`).checked = true;
//                     } else {
//                         input.value = formData[key];
//                     }
//                 }
//             });
//             console.log("Form data geladen:", formData);
//         }
//     }
//
//     // Formulier opslaan elke 60 seconden
//     setInterval(saveFormData, 6000);
//
//     // Formulier laden bij paginalaad
//     loadFormData();
// });


