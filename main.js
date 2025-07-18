import { fetchProducts } from "./assets/js/api.js";
import { renderProductsShowCase } from "./assets/js/components.js";
import { addToCartHandler } from "./assets/js/utils.js";

export const cart = []
console.log(cart)

const main = async () => {
	const products = await fetchProducts();
    renderProductsShowCase(products);
    
};



const listProducts = document.getElementById("listProducts");
const listItem = document.createElement("li");






main()

