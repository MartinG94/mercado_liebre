const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		const productsInSale = products.filter( (productToCheck) => {
			return productToCheck.category == 'in-sale';
		})
		const productsVisited = products.filter( (productToCheck) => {
			return productToCheck.category == 'visited';
		})
		res.render('index', {
			productosEnOfertas: productsInSale,
			productosVisitados: productsVisited
		});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
