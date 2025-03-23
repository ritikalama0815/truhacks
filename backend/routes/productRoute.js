import express from "express"

import {addProduct, listProducts, removeProduct, singleProduct} from '../controllers/productController.js'
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post('/add',adminAuth, upload.fields([{name:'image', maxCount:2}]), addProduct)
productRouter.post('/remove', removeProduct)
productRouter.post('/single', singleProduct)
productRouter.post('/list', listProducts)

export default productRouter;