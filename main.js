// import { fetchProducts, setupCart } from "./assets/js/api.js";
import { renderProductsShowCase } from "./assets/js/components.js";
// import { addToCartHandler } from "./assets/js/utils.js";

export let cart = [];
let products = [
	{
		id: "1",
		productName: "Bobina",
		productPrice: 19.99,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_997390-MLA79709545651_102024-O.webp",
		storeID: 1,
		storeName: "JV Escritório",
	},
	{
		id: "2",
		productName: "Celular",
		productPrice: 1050.99,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_792554-MLA82773468680_032025-O.webp",
		storeID: 2,
		storeName: "Loja Eletrônicos",
	},
	{
		id: "3",
		productName: "Fita Adesiva",
		productPrice: 9.99,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_878855-MLU70632916280_072023-O.webp",
		storeID: 1,
		storeName: "JV Escritório",
	},
	{
		id: "4",
		productName: "Caixa de som",
		productPrice: 69.99,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_633790-MLA81772871630_012025-O.webp",
		storeID: 2,
		storeName: "Varejo Eletrônicos",
	},
	{
		id: "5",
		productName: "Furadeira Parafusadeira",
		productPrice: 178.9,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_901610-MLU77335319929_062024-O.webp",
		storeID: 2,
		storeName: "Varejo Ferramentas",
	},
	{
		id: "6",
		productName: "Spot Led Triplo",
		productPrice: 66.9,
		productImg:
			"https://http2.mlstatic.com/D_NQ_NP_908864-MLB77275587370_072024-O-spot-led-triplo-articulavel-linear-ambiente-interno-casa-led.webp",
		storeID: 2,
		storeName: "Varejo Ferramentas",
	},
];

const main = () => {
	// const products = await fetchProducts();
	renderProductsShowCase(products);
	// await setupCart()
};

const listProducts = document.getElementById("listProducts");
const listItem = document.createElement("li");

main();
