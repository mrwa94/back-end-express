import { Schema, model } from "mongoose";

export const InterfaceProducts = {
  name: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
  category: String,
  created_at: Date,
  updated_at: Date,
};

export const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "title must be at least 5 characters"],
    maxLength: [200, "title must not be more than 200 characters"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//create a model / collection with the schema and export it to the database using the model function
export const Product = model("Product", productsSchema);
