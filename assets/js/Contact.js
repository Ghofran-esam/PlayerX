   document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
    
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
  Swal.fire({
    title: `Thank you,${name}! Your message has been sent.`,
    text: "Thank you!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#28a745"
  });    this.reset();
  } else {
     Swal.fire({
    title: "Please fill in all fields!",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "#d33"
  });
 
  }



 

});