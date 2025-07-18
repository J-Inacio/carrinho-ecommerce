import { cart } from "../../main.js";

export const findIndex = (id, arr) => {
	const i = arr.findIndex((product) => product.productID === id);
	if (i === -1) {
		throw Error("Index não existe");
	} else {
		return i;
	}
};

export const addToCartHandler = async (product) => {
	// const itemExists = await fetch("http://localhost:3000/cart")
	const item = {
		productId: product.id,
		qtd: 1,
		price: product.productPrice,
		storeID: product.storeID,
	};
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].productId === item.productId) {
			cart[i].qtd++;
			break
			
		} else {
			cart.push(item)
			break
		}
	}

	

	const newProduct = await fetch("http://localhost:3000/cart", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(item),
	});
};

