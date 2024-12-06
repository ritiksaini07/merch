const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "HOODIE",
    price: 599,
    colors: [
      {
        code: "black",
        img: "./img/hoodie-r.png",
      },
      
    ],
  },
  {
    id: 2,
    title: "GYM SHAKER",
    price: 299,
    colors: [
      {
       
        img: "./img/bottle-r.png",
      },
    ],
  },
  {
    id: 3,
    title: "T-SHIRT",
    price: 399,
    colors: [
      {
       
        img: "./img/shirt-r.png",
      },
      
    ],
  },
  {
    id: 4,
    title: "HAND BAG",
    price: 249,
    colors: [
      {
        code: "black",
        img: "./img/bag.png",
      },
      
    ],
  },
  {
    id: 5,
    title: "BOTTLE",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/key-r.png",
      },
     
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "@" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});