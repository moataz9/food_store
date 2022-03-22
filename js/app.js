import mainPage from './main-page-data.mjs'
const main_categories = document.getElementById('main_categories')

for (const item of mainPage) {
  console.log(item);
  main_categories.innerHTML += /* html */ `
  <div class="col">
    <a href="${item.goTo}" class="text-decoration-none">
      <div class="text-center">
        <div class="image-holder">
          <img class="image" src="${item.imageSrc}" alt="${item.title}" />
        </div>
        <h2 class="font-weight-bold text-capitalize">${item.title}</h2>
      </div>
    </a>
  </div>
  `
}
