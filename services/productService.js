const products = require('../data/products');

class ProductService {
    getAllProducts(type) {
        if(type == 'featured') {
            return products.filter(product => product.featured == true).slice(0, 4)
        } else {
            return products;
        }        
    }
 
}

module.exports = new ProductService();