// Chèn navbar vào thẻ có id="navbar"
fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
