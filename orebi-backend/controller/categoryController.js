const categorySchema = require("../model/categorySchema");
const userSchema = require("../model/userSchema");

async function categoryController(req, res) {
  let { name, description } = req.body;

  try {
    let existingCategory = await categorySchema.find({ name });

    if (existingCategory.length > 0) {
      res.status(404).send({ error: "Category name is already exists" });
    } else {
      let Category = new categorySchema({
        name,
        description,
      });
      await Category.save();

      res.status(201).send(Category);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

async function categoryApproveController(req, res) {
  let { email, category } = req.body;
  try {
    let user = await userSchema.findOne({ email });
    if (user) {
      if (user.role == "admin") {
        console.log("admin");
        let categoryData = await categorySchema.findOneAndUpdate(
          { _id: category },
          { isActive: true },
          { new: true }
        );
        res.status(201).send({ success: "Category is approved", categoryData });
      } else {
        return res.status(404).send({ error: "Only Admin has approve power" });
      }
    } else {
      return res.status(404).send({ error: "user not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function categoryDeleteController(req, res) {
  let { email, category } = req.body;
  try {
    let user = await userSchema.findOne({ email });
    if (user) {
      if (user.role == "admin") {
        console.log("admin");
        let categoryData = await categorySchema.findOneAndDelete(
          { _id: category },
          { new: true }
        );
        res.send(`${categoryData} is deleted`);
      } else {
        return res.status(404).send({ error: "Only Admin has approve power" });
      }
    } else {
      return res.status(404).send({ error: "user not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function getAllCategoryController(req, res) {
  try {
    let category = await categorySchema.find({});

    res.status(201).send(category);
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function singleCategoryController(req, res) {
  let { id } = req.params;
  try {
    let category = await categorySchema.findOne({ _id: id });
    res.status(201).send(category);
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

module.exports = {
  categoryController,
  categoryApproveController,
  categoryDeleteController,
  getAllCategoryController,
  singleCategoryController,
};
