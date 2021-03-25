$(async function () {

    let products = [
      {
        id: 1,
        name: "Pink Pony",
        image: "../image/Relaxed_.jpg",
        rating: 5,
      },
  
      {
        id: 2,
        name: "Pink Pony",
        image: "../image/Relaxed_.jpg",
        rating: 2.5,
      },
  
      {
        id: 3,
        name: "Pink Pony",
        image: "../image/Relaxed_.jpg",
        rating: 1,
      },
  
      {
        id: 4,
        name: "Pink Pony",
        image: "../image/Relaxed_.jpg",
        rating: 3.5,
      },
  
    ]
  
    renderProduct(products, "#container-products");

    // DOM: document object modal
  $(".container").on("click", ".delete", function () {
    console.log("btn delete cliked");

    const id = $(this).data("hihi");
    products = products.filter(val => val.id !== id);
    renderProduct(products, "#container-prodcuts");
  });
  
    // $(".delete").click(function (e) {
    //   e.preventDefault();
  
    //   const id = $(this).data("hihi");
  
    //   console.log(id);
  
    //   // products = products.filter(val => {
    //   //   return val.id !== id;
    //   // })
  
    //   products = products.filter(val => val.id !== id);
  
    //   console.log(products);
  
    //   renderProduct(products, "#container-products");
  
    // });
  
  
  
  });
  
  function renderStar(countStar = 0) {
    if (countStar === 0)
      return "";
  
    const star = "<li><i class='fas fa-star'></i></li>";
    const halfStar = '<li><i class="fas fa-star-half-alt"></i></li>';
  
    let res = "<ul>";
    for (let i = 0; i < countStar; i++) {
      res += star;
    }
    // 3.5
    if (countStar % 1 !== 0) {
      res += halfStar;
    }
    return res += "</ul>";
  }
  
  
  function renderProduct(products = [], selector) {
    $(selector).empty();
  
    products.map(val => (
      $(`
        <div class="item">
          <div class="content">
            <img src=${val.image} alt="">
            <p>${val.name}</p>
  
            ${renderStar(val.rating)}
  
            <button data-hihi=${val.id} class="delete">Delete</button>
  
          </div>
        </div>
      `).appendTo(selector)
  
    ))
  }
  
  $(async function () {
    let wokieeProduct =[
      {
        id:1,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_71a9994a-829c-484a-92f5-b6b765b0da7d_202x.jpg?v=1570226456",
        brand: "polo",
        name: "pink pony leather sneaker",
        price: 60.00
      },
      {
        id:2,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_202x.jpg?v=1570226459",
        brand: "lacoste",
        name: "polka-dot lightweight scart",
        price: 80.00
      },
      {
        id:3,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_202x.jpg?v=1570226459",
        brand: "lacoste",
        name: "polka-dot lightweight scart",
        price: 80.00
      },
      {
        id:4,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_202x.jpg?v=1570226459",
        brand: "lacoste",
        name: "polka-dot lightweight scart",
        price: 80.00
      },
      {
        id:5,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_202x.jpg?v=1570226459",
        brand: "lacoste",
        name: "polka-dot lightweight scart",
        price: 80.00
      },
      {
        id:6,
        image: "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_202x.jpg?v=1570226459",
        brand: "lacoste",
        name: "polka-dot lightweight scart",
        price: 80.00
      }
    ];

    renderProduct(wokieeProduct, "#women-product");
  });

  function renderProduct(wokieeProduct =[], selector){
    wokieeProduct.map(val =>{
     $(`
            <div class="image-box">
              <a href="">
                <img src="${val.image}" alt="
              </a>

              <div class="list-button">
                  <ul>
                      <li>
                          <a href="">
                              <i class="far fa-eye"></i>
                          </a>

                          <div class="ribbon-list-button">
                              <div class="wrapper-ribbon-list-button">
                                  <span>quick view</span>
                              </div>
                          </div>
                      </li>

                      <li>
                          <a href="">
                              <i class="far fa-heart"></i>
                          </a>

                          <div class="ribbon-list-button">
                              <div class="wrapper-ribbon-list-button">
                                  <span>you need to login</span>
                              </div>
                          </div>
                      </li>

                      <li>
                          <a href="">
                              <i class="fas fa-balance-scale"></i>
                          </a>

                          <div class="ribbon-list-button">
                              <div class="wrapper-ribbon-list-button">
                                  <span>add to compare</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
            </div>

            <div class="description">
                <div class="brand">
                    <a href="">${val.brand}</a>
                </div>

                <div class="rating-star">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>

                <div class="product-name">
                    <a href="">${val.name}</a>
                </div>

                <div class="price">
                    <p>$${val.price}</p>
                </div>

                <form action="">
                    <button class="add-to-cart">
                        <i class="fas fa-shopping-bag"></i>
                        <p>add to cart</p>
                    </button>
                </form>
            </div>
     `).appendTo(selector);
    })
  }
  
  
  
 
  