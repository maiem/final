// const slideContainer = $('.list-product');
// const slideImage = $('.product');

// //slideContainer.style.width = `${slideImage.length * IMG_WIDTH}px`;
// let index = 0;

// function slideNext(){
//     if(index < slideImage.lenght -1){
//         index++;
//     }
//     else{
//         index = 0;
//     }

//     slideContainer.style.transform = `translateX(${slideImage.length*IMG_WIDTH}px)`;
// }

// function slidePrev(){
//     if(index ==0){
//         index = slideImage.lenght -1
//     }
//     else{
//         index--;
//     }

//     slideContainer.style.transform = `translateX(${slideImage.length*IMG_WIDTH}px)`;
// }

// $('button-right').slick('click', ()=>{
//   slideNext();
// })
// $('.button-right').addEventListenner('click',() =>{
//     slideNext();
// })

// $('.button-left').addEventListenner('click',() =>{
//     slidePrev();
// })



//render product
$(async function () {
    //đồng bộ
    let products;
    const url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    await $.get(url,
      function (data, textStatus, jqXHR) {
        console.log(data);
        products = data
      },
    );
  
    console.log(products);
    renderProduct(products, "#container-products");
  
  });


  function renderProduct (products = [], selector){
    products.map(val => (
    $(`
      <div class="item">
        <img src=${val.image} alt="">
        <p>${val.name}</p>
      </div>
      `).appendTo(selector)
  
    ))
  
  }
