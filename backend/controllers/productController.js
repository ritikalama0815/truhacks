import {v2 as cloudinary} from 'cloudinary'
import productModel from "../models/productModel.js"

const addProduct = async(req, res) =>{
    try {
        const {name, description, price, category} = req.body
        const image = req.files.image && req.files.image[0]

        const images = [image].filter((item) => item!==undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item) =>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'})
                return result.secure_url
            })
        )

        const productData={
            name, description, category, price:Number(price), image: imagesUrl, date: Date.now()
        }


        const product = new productModel(productData);
        await product.save();

        console.log(name, description, price, category)
        console.log(imagesUrl)

        res.json({success: true, message: "Product added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
const listProducts = async(req, res) =>{
    try {
        const products = await productModel.find({});
        res.json({success: true, products})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}
const removeProduct = async(req, res) =>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}
const singleProduct = async(req, res) =>{
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)

        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addProduct, listProducts, removeProduct, singleProduct}