// Accessing the DOM
const itemContainer = document.querySelector(".item-container");
const countScore = document.querySelector(".count");

const BASE_URL = 'https://shop-products.herokuapp.com/api/v1/products'

fetch(BASE_URL)
.then(response => response.json())
.then(data => {
    const products = data.products
    //console.log(products);
    const results = data.products.slice(0, 12)
    console.log(results);

    displayItems(results);
})


const displayItems = (items) => {
    let displayItem = items
      .map((item) => {
        return `<article class="menu-item" data-id="item">
        <a href="#" class="anchor"><img src=${item.image_url} alt="Flag Items" class="flags" /></a>
        <div class="wrapper">
          <h4 class="product-name">${item.name}</h4>
          <p class="price">Price: ${item.price}</p>
        </div>
      </article>`;
      })
      .join("");
  
    itemContainer.innerHTML = displayItem;
    countScore.textContent = `${items.length} Items`;
  
  };
  