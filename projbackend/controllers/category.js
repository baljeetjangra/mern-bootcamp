const Catergory = require('../models/category');
const category = require('../models/category');


exports.getCategoryById = (req, res, next, id) => {
    
    Catergory.findById(id).exec((err,cate)=>{
        if(err) {
            return res.status(400).json({
                erro:'Category not found in db'
            })
        }
        req.category = cate;
        next();
    })    

}

exports.createCategory = (req,res) => {
    const category = new Catergory(req.body)
    category.save((err, category)=>{
        if(err) {
            return res.status(400).json({
                error:'Not able to save Category'
            })
        }
        res.json({category})
    })
}

exports.getCategory = (req, res) => {
    return res.json(req.category)
}


exports.getAllCategory = (req, res) => {
    Catergory.find().exec((err, categories)=> {
        if(err){
            return res.status(400).json({
                error: "NO category Found"
            })
        }
        res.json(categories)
    })
}

exports.updateCategory = (req, res) =>{
    const category = req.category;
    category.neme = req.body.name;
    category.save((err,updatedCategory)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to update category"
            })
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory = (req, res) =>{
    const category = req.category;
    category.remove((err, category)=>{
        if(err){
            return res.status(400).json({
                error : "Failed to delete cxategory"
            })
        }
        res.json({
            message : "Successfully Deleted"
        })
    })

}