document.addEventListener("DOMContentLoaded", getdata)
const getJoke = document.querySelector('#getJoke')
const jokeList = document.querySelector('.joke-list')
const radioRandom = document.querySelector('#radioRandom')
const radioCategories = document.querySelector('#radioCategories')

const list = document.querySelector('.categories-list')

 function getdata(){
  fetch("https://api.chucknorris.io/jokes/categories")
  .then(response => response.json())
  .then(data => {
    list.innerHTML =''
    jokeList.innerHTML = ''
   data.splice(4, Math.max(data.length))
   for (let i = 0; i < data.length; i++) {
    list.insertAdjacentHTML('beforeend', `<li class="categories-list__item" tabindex="0"> ${data[i]} </li>`)
   }
   
  });
}


function generateJoke(){
  if(radioRandom.checked){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(data => {
      jokeList.insertAdjacentHTML('afterbegin', `
      <li class="joke-list__item">
                <span class="joke-list__item-favourite-icon">
                  <i class="far fa-heart" tabindex="0"></i>
                </span>
                <div class="joke-list__item-wrapper">
                  <div class="joke-list__item-static-icon">
                    <i class="far fa-comment-alt"></i>
                  </div>
                  <div class="joke-list__item-content">
                    <h5 class="joke-list__item-id">
                      ID:
                      <a href="https://api.chucknorris.io/jokes/${data.id}"
                        >${data.id}
                        <i class="fas fa-external-link-alt"></i
                      ></a>
                    </h5>
                    <p class="joke-list__item-text">
                     ${data.value}
                    </p>
                    <div class="joke-list__item-info">
                      <h5 class="joke-list__item-date">
                        Last update: <span> ${new Date(data.updated_at).getHours()} hours ago </span>
                      </h5>
                      ${data.categories == [] ? `
                      <button class="joke-list__item-category">
                     ${data.categories}
                     </button>` : ''}
                     
                    </div>
                  </div>
                </div>
              </li>
      `)
    })};

    
}