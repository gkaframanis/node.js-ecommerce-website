const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "products.json");


const getProductsFromFile = async () => {
    const data = await fs.promises.readFile(filePath, "binary");
    const products = data ? JSON.parse(data) : [];
    return products;
}

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	async save() {
        let products = await getProductsFromFile();
        products.push(this);
		fs.writeFile(filePath, JSON.stringify(products), (err) => console.log(err));
	}

	// Call the method directly to the class
	static async fetchAll() {
		const products = await getProductsFromFile();
        return products;
	}
};
