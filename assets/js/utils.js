import { cart } from "../../main.js";
import { renderCartItem } from "./components.js";

export const getProductInArray = (htmlElementID) => {
	const product = cart.find((cartProduct) => cartProduct.id === htmlElementID);
	const productIndex = cart.indexOf(product);

	return productIndex;
};

export const selectAllHandler = (ev) => {
	const productsCheckboxes = document.querySelectorAll("input.productCheckbox");

	if (ev.currentTarget.checked) {
		productsCheckboxes.forEach((checkbox) => {
			checkbox.checked = true;
			const i = getProductInArray(checkbox.id);
			cart[i].selected = true;
			console.log(cart);
		});
	} else {
		productsCheckboxes.forEach((checkbox) => {
			checkbox.checked = false;
			const i = getProductInArray(checkbox.id);
			cart[i].selected = false;
			console.log(cart);
		});
	}
	updateTotal();
};

export const addToCartHandler = (product) => {
	const productsExists = cart.find(
		(cartProduct) => cartProduct.id === product.id
	);
	const i = cart.indexOf(productsExists);

	if (productsExists) {
		const input = document.getElementById(`qtd-value${product.id}`);
		const productTotalPrice = document.getElementById(`price-${product.id}`);
		input.innerText++;
		cart[i].qtd =  Number(input.innerText)
		cart[i].total =  Number(input.innerText) * cart[i].productPrice;
		productTotalPrice.innerText = (cart[i].productPrice * cart[i].qtd).toFixed(2);
		updateTotal();
		console.log(cart);
	} else {
		const item = {
			id: product.id,
			productName: product.productName,
			qtd: 1,
			productPrice: product.productPrice,
			productImg: product.productImg,
			storeID: product.storeID,
			storeName: product.storeName,
			selected: true,
			total: 1 * product.productPrice,
		};
		cart.push(item);
		renderCartItem(item);
	}
};

export const removeCartItemHandler = (ev) => {
	const productId = ev.target.parentElement.id.split("-")[1];
	const productsExists = cart.find(
		(cartProduct) => cartProduct.id === productId
	);
	const i = cart.indexOf(productsExists);
	cart.splice(i, 1);
	ev.target.parentElement.remove();
	updateTotal();
};

export const updateTotal = () => {
	let total = cart.reduce((acc, product) => {
		if (product.selected) {
			return acc + product.total;
		} else {
			return acc;
		}
	}, 0);
	const priceSpan = document.getElementById("total-price");
	priceSpan.innerText = total.toFixed(2);
};
