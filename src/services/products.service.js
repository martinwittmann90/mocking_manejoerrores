import ProductsDAO from "../DAO/classes/product.dao.js";
const productsDAO = new ProductsDAO();

import EErros  from "../error/enum.js";
import  CustomError  from "../error/customError.js";
class ServiceProducts {
    async getAllProducts() {
        try {
            const products = await productsDAO.getAllProd();
            return products;
        } catch (error) {
            throw new Error(`Error searching for products.`);
        }
    }
    async getProductById(productId) {
        try {
            const one = await productsDAO.getProduct(productId);
            return one;
        } catch (error) {
            throw new Error (`The product with the following id number was not found: ${productId}.`);
        }
    }
    async createProduct(productData) {
        try {
            const newProd = await productsDAO.createOneProduct(productData);
            return newProd;
        } catch (error) {
            throw CustomError.createError({
                name: 'When creating product',
                message: err,
                code: EErros.ADD_PRODUCT_ERR
            });
        }
    }

    async updateProduct(productId, productData) {
        try {
            const productUpdate = await productsDAO.updateOneProduct(
                productId,
                productData,
                { new: true }
            );
            return productUpdate;
        } catch (error) {
            throw (`Could not modify product. ${err}`);
        }
    }

    async deleteProduct(productId) {
        try {
            const delProd = await productsDAO.deleteOneProduct(productId);
            return delProd;
        } catch (error) {
            throw (`Failed to find product with id number: ${productId}`);
        }
    }
};

export default ServiceProducts;