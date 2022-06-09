const form = document.querySelector("#cform");
const formClear = document.getElementById("#cform");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var my_text = `Shoha.uz :%0A - Ismi : ${name} %0A - Tel : ${phone} %0A - Message : ${message}`;

  var token = "5436694894:AAE8_02rAk3j4Uuy2QyIBC6OuEI8qjzG92Q";
  var chat_id = 912522984;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
});

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
