import "./style.css";

const productList = document.getElementById("product-list");
const btnBuy = document.getElementById("btnBuy");
const cartBox = document.getElementById(".cartBox");
const hide =  document.getElementById(".hide")

let showCart = false;

let products = [];
let cart = {
	item: [],
	totalCount: 0,
	total: 0,
};

const getProducts = [
	{
		title: "магнитола",
		price: "999 ₽",
		img: "https://express-china.ru/upload/iblock/909/9090b71c713bcbc78f5b083998672f69.jpg",
		// button: "buy",
	},
	{
		title: "очки",
		price: "3 499 ₽",
		img: "https://img.joomcdn.net/ba491a90a20d22696f98be9908a3f921eaf6233e_original.jpeg",
	},
	{
		title: "календарь",
		price: "1 599 ₽",
		img: "https://cdn1.ozone.ru/s3/multimedia-g/6376086328.jpg",
	},
	{
		title: "пила",
		price: "799 ₽",
		img: "https://media.baamboozle.com/uploads/images/86938/1636526358_66174.jpeg",
	},
	{
		title: "Воздух",
		price: "339 ₽",
		img: "https://avatars.mds.yandex.net/i?id=e0fa6abca83a1fabd8e01f338c95ca0a_l-7543982-images-thumbs&n=13",
	},
	{
		title: "крендель",
		price: "1799 ₽",
		img: "https://solikamsk.unasti.ru/uploads/product/1700/1712/357A6F54-559E-4C06-89B1-65354B4D0495_2020-05-28_17-27-49.jpeg",
	},
];


getProducts.forEach((product) => {
	const card = document.createElement("div");
	card.className = "product-card";
	card.innerHTML = `
    <img src="${product.img}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p class="price">${product.price}</p>
	<button>Buy</button>
  `;
	productList.appendChild(card);
});

function addEventsOnBtns() {
    const btns = document.querySelectorAll(".card-btn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            const productId = b.getAttribute("data-id");
            for(let i = 0; i < CaretPosition.item.lenght; i++) {
                if (CaretPosition.items[i].id == productId){
                    CaretPosition.items[i].count++;
                    return;
                }
            }
            cart.items.push({
                id: productId,
                count: 1,
            })
        })
    })
}

function toggleCart(e) {
	e.preventDefault();
	if (showCart) {
		cartBox.classList.add("hide");
	 showCart = false;
	} else {
	 cartBox.classList.remove("hide");
	 showCart = true;
	}
   
	// cartBox.classList.toggle("hide");
	// showCart = !showCart
}

products = getProducts();

function renderCart() {
	cartList.innerHTML = "";
	cart.totalCount = 0;
	cart.items.forEach(() => {
	 const product = products.find((p) => p.id == i.id);
	 cart.totalPrice += i.count * product.discountPrice;
   
	 cartList.innerHTML += `
	  <div class="cartItem">
	   <p>$${product.discountPrice}</p>
	   <p>${i.count}</p>
	   <button class="removeBtn">Remove</button>
	  </div>
	 `;
	});
	totalPrice.innerHTML = `Total price: ${cart.totalPrice}$`;
   }

renderProducts();
addEventsOnBtns();
renderCart();
toggleCart();