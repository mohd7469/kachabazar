const Category = require("../models/Category");
const categoryData = require("./categories");

const Product = require("../models/Product");
const productData = require("./products");

const linkParents = require("./linkParents");

async function handleCategoriesAndProducts() {
  await handleCategories();
  await handleProducts();
  // const products;
}

async function handleCategories() {
  // remove old categories
  await Category.deleteMany();
  
  // find and create root category first
  const rootIdx = categoryData.findIndex(cat => cat.id === "Root" && !cat.parentName);
  if (rootIdx === -1) {
    throw new Error("Root category not found");
  }
  const rootCategory = categoryData[rootIdx];
  await Category.create(rootCategory);
  
  // filter categories other than root and create
  const otherCategories = categoryData.filter((_, i) => i !== rootIdx);
  await Category.insertMany(otherCategories);
  
  // created root and other categories (e.g: mongo _id available), now make parent/child relation
  await linkParents(Category);
}

async function handleProducts() {
  // filter categories except the one with id === "Root" and only extract keys which we need
  const categories = await Category.find({
    id: { $ne: "Root" }
  }, {
    _id: 1,
    name: 1,
  })

  // remove old products
  await Product.deleteMany()
  
  // modify and prepare products data
  productData.forEach(p => {
    // set all isCombination false
    p.isCombination = false;
    
    // generate slug from title
    if (p?.title?.en) {
      p.slug = slugify(p.title.en);
    }
    
    // find default category to set as fallback
    const fallback = categories.find(c => c.name?.en === "Uncategorized");
    // find category with name and set entire object with _id:
    const matched = categories.find(c => c.name?.en === p.category?.name?.en);
    
    // empty categories array first
    p.categories = [];
    
    if (matched) {
      // set to matched object
      p.category = matched;
      p.categories.push(matched);
    } else {
      // set to default otherwise
      p.category = fallback;
      p.categories.push(fallback);
    }
  });
  
  await Product.insertMany(productData);
}

function slugify(str) {
  return String(str)
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
}

module.exports = {
  handleCategoriesAndProducts
};
