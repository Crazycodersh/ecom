const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab =>{
  clickedTab.addEventListener('click', () =>{
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
  });
});
document.querySelectorAll('.under').forEach(item => {
  item.addEventListener('click', function (e) {
      if (this.textContent === 'HOME') {
          e.preventDefault();
          document.getElementById('authModal').style.display = 'block';
      }
  });
});

// Get the modal
var modal = document.getElementById("authModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of it
window.onclick = function (event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// Handle the switch to signup
document.getElementById('switchToSignup').onclick = function() {
  alert("Switch to signup functionality can be implemented here.");
};

// Handle form submission
document.getElementById('authForm').onsubmit = function(e) {
  e.preventDefault();
  alert("Form submitted! Username: " + document.getElementById('username').value);
  modal.style.display = "none"; // Close the modal
};
