import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(window.auth).then(() => {
    window.location.href = "login.html";
  });
});
