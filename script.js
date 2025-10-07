function generate_quote(button)
{
  button.disabled = true;
    document.getElementById("quote-text").textContent = "⏳  loading quote..."
    document.getElementById("quote-author").textContent = "⏳  loading author..."
  fetch("https://api.api-ninjas.com/v1/quotes", {
  method: "GET",
  headers: {
    'X-Api-Key': 'Z8JcP+zp7ULGb25nWnCZtA==RpYNNTu476sR7OnS'
  }
})
  .then(response => response.json())
  .then(data => {
    let quote = data[0];
    console.log(quote.quote)
    console.log(quote.author)
    document.getElementById("quote-text").textContent = quote.quote
    document.getElementById("quote-author").textContent = "-" + quote.author
    button.disabled = false;
  })
}

const button = document.getElementById("new-quote")
generate_quote(button)
button.addEventListener("click", () => generate_quote(button));