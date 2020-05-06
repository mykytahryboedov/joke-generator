document.addEventListener("DOMContentLoaded", getdata)

const list = document.querySelector('.categories-list')

 function getdata(){
  fetch("https://api.chucknorris.io/jokes/categories")
  .then((response) => response.json())
  .then((data) => {
    list.innerHTML =''
   data.splice(4, Math.max(data.length))
   for (let i = 0; i < data.length; i++) {
    list.insertAdjacentHTML('beforeend', `<li class="categories-list__item" tabindex="0"> ${data[i]} </li>`)
    console.log(data)
   }
   
  });
}
