const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuItemName: {
    type: String,
    required: true,
  },
  MenuType: {
    type: String,
    required: true,
  },
  isSpecial: {
    type: Boolean,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  addIngredients: {
    type: Array,
    required: false,
  },
  specialPrice: {
    type: String,
    required: false,
  },
  removeIngredients: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;
