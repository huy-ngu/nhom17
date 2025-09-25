// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      // load CSS luôn (nếu chưa có)
      if (!document.querySelector('link[href="navbar.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "navbar.css";
        document.head.appendChild(link);
      }
    })
    .catch((err) => console.error("Không thể load navbar:", err));
});
