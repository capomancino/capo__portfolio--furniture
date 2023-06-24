let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector("#submit").value="Submiting...";
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbyxGwhhKO45optHJqrmvrkcDGmh1KwxmdlLLOErbxSEgHkNBODgljed1sajVKKxqIqv/exec',{
    method: "POST",
    body: data
  })
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#message").innerHTML = data;
      document.querySelector("#submit").value = "Submit";
    });
})
