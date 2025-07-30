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
	checkbox.checked = true;
	checkbox.addEventListener("click", () => {
		const i = cart.indexOf(product)
		if (checkbox.checked) {
			cart[i].selected = true;
		} else {
			cart[i].selected = false;
		}
		updateTotal();
	});

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
		const i = cart.indexOf(product);
		const inputValue = e.currentTarget.value;
		cart[i].qtd = inputValue;
		cart[i].total = inputValue * cart[i].productPrice;
		price.innerText = (product.productPrice * product.qtd).toFixed(2);
		updateTotal();
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
			updateTotal();
		});
		div.append(img, name, price, storeName, addBtn);
		showcase.appendChild(div);
	});
};
