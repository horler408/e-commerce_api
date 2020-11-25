// Accessing the DOM
const itemContainer = document.querySelector(".item-container");
const countScore = document.querySelector(".count");
const selectItem = document.getElementById("select");

const BASE_URL = 'https://shop-products.herokuapp.com/api/v1/products'

fetch(BASE_URL)
.then(response => response.json())
.then(data => {
    // const products = data.products
    // console.log(products);
    const results = data.products.slice(0, 12)
    console.log(results);

    displayItems(results);
    filterSelect(results)
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
    countScore.textContent = `${items.length} Items available`;
  
  };
  
  const filterSelect = (dataItems) => {
    selectItem.addEventListener("change", (e) => {
      //console.log(e.currentTarget.value);
      const category = e.currentTarget.value;
      const dataCategory = dataItems.filter((dataItem) => {
        if (dataItem.category === category) {
          return dataItem;
        }
      });
      //console.log(countryRegion);
      if (category === "") {
        displayItems(dataItems);
      } else {
        displayItems(dataCategory);
        countScore.textContent = `${dataCategory.length} items available`;
      }
    });
  };