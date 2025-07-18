export const fetchProducts = async () => {
	try {
		const response = await fetch("http://localhost:3000/products");
		const products = response.json();
		return products;
	} catch (error) {
		console.error(error);
		return [];
	}
};
