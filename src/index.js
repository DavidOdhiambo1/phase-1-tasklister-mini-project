document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    handleTask(e.target.new.value)
    form.reset()
  })
function handleTask (task){
  const ul = document.querySelector('#tasks')
  const li = document.createElement('li')
  li.textContent = task
  ul.appendChild(li)
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent= "Delete"
  deleteBtn.style.backgroundColor = 'red'
  li.append(deleteBtn)
  deleteBtn.addEventListener('click', handleDelete)
}

function handleDelete(e){
  console.log(e)
  e.target.parentNode.remove()
}



});
