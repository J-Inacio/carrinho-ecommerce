// import { cart } from "../../main.js";
// import { renderCartItem } from "./components.js";

// export const fetchProducts = async () => {
// 	try {
// 		const response = await fetch("http://localhost:3000/products");
// 		const products = response.json();
// 		return products;
// 	} catch (error) {
// 		console.error(error);
// 		return [];
// 	}
// };

// export const fetchCart = async () => {
// 	return await fetch("http://localhost:3000/cart").then((res) => res.json());
// };

// export const setupCart = async () => {
// 	const results = await fetchCart()
// 	cart.push(...results)
// 	cart.forEach(renderCartItem)
// };
