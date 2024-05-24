import express from "express"
import { deleteById, getDataAll, getDataById, patchDatById, postData, putDatById } from "../controller/productController.js"

const productRouters=express.Router()

productRouters.post("/",postData)
productRouters.get("/",getDataAll)
productRouters.get("/:id",getDataById)
productRouters.patch("/:id",patchDatById)
productRouters.put("/:id",putDatById)
productRouters.delete("/:id",deleteById)




export default productRouters