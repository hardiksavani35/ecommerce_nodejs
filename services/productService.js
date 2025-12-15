const products = require('../data/products');

class ProductService {
    getAllProducts() {
        return products;
    }

    getFeaturedProducts() {
        return products.filter(product => product.featured == true).slice(0, 4)
    }
}

module.exports = new ProductService();