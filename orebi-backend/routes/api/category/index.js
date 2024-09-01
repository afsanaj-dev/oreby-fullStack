const express= require("express");
const { categoryController, categoryApproveController, categoryDeleteController, getAllCategory, getAllCategoryController, singleCategoryController } = require("../../../controller/categoryController");
const router= express.Router();

router.post("/createcategory", categoryController)
router.post("/categoryapprove", categoryApproveController)
router.post("/categorydelete", categoryDeleteController)
router.get("/allcategory", getAllCategoryController)
router.get("/singlecategory/:id", singleCategoryController)

module.exports= router;