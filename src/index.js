document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    console.log(e.target.new)
  })
});
