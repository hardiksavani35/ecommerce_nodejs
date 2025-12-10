const categories = require('../data/categories')

class CategoryService {
    getAllCategories() {
        return categories;
    }
}

module.exports = new CategoryService();