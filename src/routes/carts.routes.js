import express from 'express';
import CartController from "../controller/carts.controller.js";
const cartController = new CartController();
const cartsRouter = express.Router()
import { isUser, isLogged, isNotAdmin, isCartOwner } from "../middleware/auth.js"

cartsRouter.post("/", cartController.createCart);
cartsRouter.get("/:cid", cartController.getById);
cartsRouter.post("/:cid/product/:pid", isUser, isLogged, isNotAdmin, isCartOwner, cartController.addProductToCart);
cartsRouter.put("/:cid", cartController.updateCart);
cartsRouter.delete("/:cid/products/:pid", cartController.deletOneProductbyCart);
cartsRouter.delete("/:cid", cartController.clearCart);

export default cartsRouter;

