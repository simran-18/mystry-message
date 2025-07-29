import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRestaurant extends Document {
  name: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contactNumber: string;
}

const restaurantModel: Schema<IRestaurant> = new Schema({
  name: {
    type: String,
    required: [true, "Restaurant name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required"],
    trim: true,
  },
});

export const Restaurant: Model<IRestaurant> =
  mongoose.models.Restaurant || mongoose.model<IRestaurant>("Restaurant", restaurantModel);

