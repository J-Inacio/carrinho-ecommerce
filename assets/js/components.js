import {
	addToCartHandler,
	removeCartItemHandler,
	selectAllHandler,
	updateTotal,
} from "./utils.js";
import { cart } from "../../main.js";

const showcase = document.getElementById("showproducts");
const selectAllCheckbox = document.getElementById("selectAll");

selectAllCheckbox.addEventListener("click", selectAllHandler);

export const renderCartItem = (product) => {
	const itemSection = document.createElement("section");
	itemSection.classList = "itemContainer";
	itemSection.id = `product-${product.id}`;

	const checkbox = document.createElement("input");
	checkbox.id = product.id;
	checkbox.type = "checkbox";
	checkbox.className = "productCheckbox";

	const productImg = document.createElement("img");
	productImg.src = product.productImg;

	const productTitle = document.createElement("label");
	productTitle.innerText = product.productName;
	productTitle.htmlFor = product.id;

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Excluir";
	deleteBtn.addEventListener("click", removeCartItemHandler);

	const amountLabel = document.createElement("label");
	amountLabel.innerText = "Qtd";
	amountLabel.htmlFor = `qtd${product.id}`;

	const inputQuantity = document.createElement("input");
	inputQuantity.id = `qtd${product.id}`;
	inputQuantity.type = "number";
	inputQuantity.min = "1";
	inputQuantity.max = "20";
	inputQuantity.value = 1;
	inputQuantity.required = "required";

	const amountDiv = document.createElement("div");
	amountDiv.append(amountLabel, inputQuantity);

	const span = document.createElement("span");
	span.innerText = "R$";

	const price = document.createElement("span");
	price.id = `price-${product.id}`;
	price.innerText = product.productPrice;

	inputQuantity.addEventListener("change", (e) => {
		const productId = document.getElementById(
			`product-${e.currentTarget.id.slice(3)}`
		);
		console.log(productId);
		const inputValue = e.currentTarget.value;

		const productsExists = cart.find(
			(cartProduct) => cartProduct.id === product.id
		);
		const i = cart.indexOf(productsExists);

		cart[i].qtd = inputValue;
		price.innerText = (product.productPrice * product.qtd).toFixed(2);
			renderTotal();
		console.log(cart);
	});

	const asidePrice = document.createElement("aside");
	asidePrice.append(span, price);

	itemSection.append(
		checkbox,
		productImg,
		productTitle,
		deleteBtn,
		amountDiv,
		asidePrice
	);

	listProducts.appendChild(itemSection);
};

export const renderProductsShowCase = (productsArr) => {
	productsArr.forEach((product) => {
		const div = document.createElement("div");
		div.id = product.id;
		div.classList = "product";
		const img = document.createElement("img");
		img.src = product.productImg;
		const name = document.createElement("h3");
		name.textContent = product.productName;
		const price = document.createElement("p");
		price.textContent = "R$" + product.productPrice;
		const storeName = document.createElement("p");
		storeName.textContent = product.storeName;
		storeName.style.fontWeight = "bold";

		const addBtn = document.createElement("button");
		addBtn.textContent = "Adicionar ao carrinho";
		addBtn.addEventListener("click", () => {
			addToCartHandler(product);
			renderTotal();
			console.log(cart);
		});
		div.append(img, name, price, storeName, addBtn);
		showcase.appendChild(div);
	});
};

export const renderTotal = () => {
	const priceSpan = document.getElementById("total-price");
	priceSpan.innerText = updateTotal().toString();
};
