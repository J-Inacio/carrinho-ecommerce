import { cart } from "../../main.js";
import { renderCartItem, renderTotal } from "./components.js";

export const findIndex = (id, arr) => {
	const i = arr.findIndex((product) => product.productID === id);
	if (i === -1) {
		throw Error("Index não existe");
	} else {
		return i;
	}
};

export const selectAllHandler = (ev) => {
	const productsCheckboxes = document.querySelectorAll('input.productCheckbox')
	if(ev.currentTarget.checked) {
		productsCheckboxes.forEach(checkbox =>  checkbox.checked = true);
	} else {
		productsCheckboxes.forEach(checkbox =>  checkbox.checked = false);
	}
}

export const addToCartHandler = (product) => {
	const productsExists = cart.find(
		(cartProduct) => cartProduct.id === product.id
	);
	const i = cart.indexOf(productsExists);

	if (productsExists) {
		cart[i].qtd++;
		const input = document.getElementById(`qtd${product.id}`);
		input.value++;
		input.dispatchEvent(new Event("change"));
	} else {
		const item = {
			id: product.id,
			productName: product.productName,
			qtd: 1,
			productPrice: product.productPrice,
			productImg: product.productImg,
			storeID: product.storeID,
			storeName: product.storeName,
		};
		cart.push(item);
		renderCartItem(item);
	}
};

export const removeCartItemHandler = (ev) => {
	const productId = ev.target.parentElement.id.split("-")[1]
	const productsExists = cart.find(
		(cartProduct) => cartProduct.id === productId
	);
	const i = cart.indexOf(productsExists);
	cart.splice(i, 1)
	ev.target.parentElement.remove()
	renderTotal();
};

export const updateTotal = () => {
	let total = cart.reduce((acc, product) => {
		return acc + product.productPrice * product.qtd
	}, 0)
	return total.toFixed(2)
}
