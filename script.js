function openOrder(productName){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("product").value = productName;

}

function closePopup(){

  document.getElementById("popup").style.display = "none";

}

function sendOrder(){

  let fullname = document.getElementById("fullname").value;
  let phone = document.getElementById("phone").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let product = document.getElementById("product").value;

  let message =
`طلب جديد من Bride Sahara 🌸

الاسم الكامل: ${fullname}

رقم الهاتف: ${phone}

المدينة: ${city}

العنوان: ${address}

المنتج المختار:
${product}`;

  let whatsappURL =
`https://wa.me/212605945494?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

}
