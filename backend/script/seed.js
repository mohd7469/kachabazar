require("dotenv").config();
const { connectDB } = require("../config/db");

const Admin = require("../models/Admin");
const adminData = require("../utils/admin");

const Customer = require("../models/Customer");
const customerData = require("../utils/customers");

// done
const Coupon = require("../models/Coupon");
const couponData = require("../utils/coupon");

const Product = require("../models/Product");
const productData = require("../utils/products");

const Order = require("../models/Order");
const orderData = require("../utils/orders");

// done
const Category = require("../models/Category");
const categoryData = require("../utils/categories");

// done
const Language = require("../models/Language");
const languageData = require("../utils/language");

// done
const Currency = require("../models/Currency");
const currencyData = require("../utils/currency");

const Attribute = require("../models/Attribute");
const attributeData = require("../utils/attributes");

const Setting = require("../models/Setting");
const settingData = require("../utils/settings");

// links parent child helper function
const { handleCategoriesAndProducts } = require("../utils/_helper");

connectDB();

const importData = async () => {
  try {
    // done
    await Language.deleteMany();
    await Language.insertMany(languageData);
    
    
    // done
    await Currency.deleteMany();
    await Currency.insertMany(currencyData);
    
    
    // in-progress
    await Attribute.deleteMany();
    // await Attribute.insertMany(attributeData);
    
    
    // in-progress
    await Customer.deleteMany();
    // await Customer.insertMany(customerData);
    

    // done
    await Admin.deleteMany();
    await Admin.insertMany(adminData);
    

    // done
    await Category.deleteMany();
    await Category.insertMany(categoryData);
    
    
    // in-progress
    await Product.deleteMany();
    await Product.insertMany(productData);
    

    // done
    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);
    
    
    // in-progress
    await Order.deleteMany();
    // await Order.insertMany(orderData);
    
    
    // in-progress
    // await Setting.deleteMany();
    // await Setting.insertMany(settingData);


    console.log("\n");
    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
