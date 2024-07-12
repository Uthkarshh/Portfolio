// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function openModal() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("resumeModal").style.display = "none";
}

document.getElementById("resumeButton").addEventListener("click", openModal);

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("resumeModal")) {
    closeModal();
  }
}

document.getElementById('emailLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default mailto behavior
  window.location.href = this.href; // Open the email client
});