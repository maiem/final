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
  
  
  
  
  
 
  