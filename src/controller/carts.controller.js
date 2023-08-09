import ServiceCarts from "../services/carts.service.js";
const serviceCarts = new ServiceCarts();

import ServiceTickets from '../services/tickets.service.js';
const serviceTickets = new ServiceTickets();

class CartController{
    async createCart (req, res)  {
        try {
            const newCart = await serviceCarts.createOne();
            res.status(201).json(newCart);
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", message: "Error creating cart" });
        }
        };
    async getById  (req, res)  {
        try {
            const cartId = req.params.cid;
            const cart = await serviceCarts.getCartService(cartId);
            res.status(200).json(cart);
        } catch (error) {
            res.status(404).json({ status: "error", message: "Error getting cart" });
        }
        };
    async addProductToCart (req, res) {
        try {
            const { cid, pid } = req.params;
            const cart = await serviceCarts.addProductToCartService(cid, pid);
            res.status(200).json(cart);
        } catch (error) {
            res.status(404).json({ status: "error", message: "Error adding product to cart" });
        }
        };
    async deletOneProductbyCart  (req, res)  {
        try {
        const { cid, pid } = req.params;
        const cart = await serviceCarts.removeProductFromCart(cid, pid);
        res
            .status(200)
            .json({ status: "success", message: "Product removed from cart", cart });
        } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
        }
        };
    async updateCart  (req, res)  {
        try {
            const { cid } = req.params;
            const { products } = req.body;
            const cart = await serviceCarts.updateCartService(cid, products);
            res.status(200).json({ status: "success", message: "Cart updated successfully", cart });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
    }
    async updateProductQuantity(req, res) {
        try {
            const { cid, pid } = req.params;
            const { quantity } = req.body;
            const cart = await serviceCarts.updateProductQuantity(cid, pid, quantity);
            res.status(200).json({ status: "success", message: "Product quantity updated", cart });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
    }
    async clearCart (req, res) {
        try {
            const cid = req.params.cid;
            console.log(cid)
            const cart = await serviceCarts.clearCartService(cid);
                    res.status(200).json(({ status: "success", message: "Cart cleared successfully" }), cart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
        };
}
export default CartController;