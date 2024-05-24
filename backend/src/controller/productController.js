import Product from "../models/productModels.js"

export const postData=async(req,res)=>{
    try {
        const newData= await Product(req.body)
        newData.save()
        res.status(200).json(newData)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}

export const getDataAll=async(req,res)=>{
    try {
        const alldata= await Product.find()
        res.status(200).json(alldata)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}

export const getDataById=async(req,res)=>{
    const {id}=req.params
    try {
        const iddata= await Product.find({_id:id})
        res.status(200).json(iddata)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}

export const putDatById=async(req,res)=>{
    const {id}=req.params
    try {
        const patch= await Product.findOneAndReplace({_id:id},req.body)
        res.status(200).json(patch)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}

export const patchDatById=async(req,res)=>{
    const {id}=req.params
    try {
        const patch= await Product.findOneAndUpdate({_id:id},req.body)
        res.status(200).json(patch)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}

export const deleteById=async(req,res)=>{
    const {id}=req.params
    try {
        const patch= await Product.findOneAndDelete({_id:id})
        res.status(200).json(patch)
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"Server error"
        })
    }
}