   var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");
    smallimg[0].onclick=function(){
        MainImg.src=smallimg[0].src;
    }
    smallimg[1].onclick=function(){
        MainImg.src=smallimg[1].src;
    }
    smallimg[2].onclick=function(){
        MainImg.src=smallimg[2].src;
    }
    smallimg[3].onclick=function(){
        MainImg.src=smallimg[3].src;
    }
    const bar =document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bar){
    bar.addEventListener('click', () =>  {
        nav.classList.add('active');

    })
}

if(close){
 close.addEventListener('click',() =>  {
        nav.classList.remove('active');

    })}
     const input = document.querySelector('.number-input input');
  const increaseBtn = document.querySelector('.number-input .increase');
  const decreaseBtn = document.querySelector('.number-input .decrease');

  increaseBtn.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
  });

  decreaseBtn.addEventListener('click', () => {
    if (parseInt(input.value) > 1) { // عشان ما ينقص عن 1
      input.value = parseInt(input.value) - 1;
    }
  });

    const addToCartBtn = document.querySelector(".normal");
  const qtyInput = document.querySelector(".number-input input");
  const productName = document.querySelector(".single-pro-details h2").innerText;
  const productPrice = document.querySelector(".single-pro-details .price").innerText;

  addToCartBtn.addEventListener("click", function () {
    const quantity = parseInt(qtyInput.value);
    const product = {
      name: productName,
      price: productPrice,
      quantity: quantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(` ${quantity} ${productName} Added To Cart!`);
    console.log("Cart:", cart);
  });


  const reviewForm = document.querySelector('.form-container form');
  const reviewInput = document.getElementById('review');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const saveInfoCheckbox = document.getElementById('save-info');

  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const review = reviewInput.value;
    const name = nameInput.value;
    const email = emailInput.value;

    if (!review || !name || !email) {
 
  Swal.fire({
    title: "All fields are required",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "#d33"
  });
  
      return;
    }

    if (saveInfoCheckbox.checked) {
      localStorage.setItem('savedName', name);
      localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedReview',review);
      alert(' Your info has been saved for next time!');
    }

    console.log('Review Submitted:', {
      review: review,
      name: name,
      email: email
    });


  Swal.fire({
    title: " Thank you for your review!",
    text: "Thank you!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#28a745"
  });


    reviewForm.reset();
  });

  window.addEventListener('load', function () {
    const savedName = localStorage.getItem('savedName');
    const savedEmail = localStorage.getItem('savedEmail');
    const savedReview=localStorage.getItem('savedReview');
    if (savedName) nameInput.value = savedName;
    if (savedEmail) emailInput.value = savedEmail;
        if (savedReview) reviewInput.value = savedReview;
  });