import express from "express"
import "dotenv/config"
import cors from "cors"
import "./src/config/db.js"
import productRouters from "./src/routes/productRoutes.js"

const app=express()
const PORT= process.env.PORT || 5001

app.use(express.json())
app.use(cors())

app.use("/api/products", productRouters)

app.listen(PORT,()=>{
    console.log("Succesful Port",PORT);
})